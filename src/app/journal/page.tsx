

'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useUser, useFirestore, useMemoFirebase } from '@/firebase';
import {
  collection,
  doc,
  writeBatch,
  serverTimestamp,
  onSnapshot,
  query,
  where,
  orderBy,
  getDocs,
  Timestamp,
  setDoc,
  deleteDoc,
  updateDoc,
  addDoc
} from 'firebase/firestore';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '@/lib/db';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts';

import type { SessionEntry, Pose, PoseInSequence, SyncQueueItem } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useAuth } from '@/firebase';
import { Camera } from 'lucide-react';
import Image from 'next/image';

// Helper for ISO timestamps
const nowISO = () => new Date().toISOString();

export default function JournalPage() {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const [activeSession, setActiveSession] = useState<SessionEntry | null>(null);
  const auth = useAuth();

  // --- LOCAL DATA (DEXIE) ---
  const sessions = useLiveQuery(
    () => (user ? db.sessions.where('userId').equals(user.uid).reverse().sortBy('date') : []),
    [user]
  );
  const poses = defaultPoses();

  // --- SYNC LOGIC ---
  const enqueueLocalOp = useCallback(async (userId: string, operation: SyncQueueItem['operation'], docId: string, payload?: any) => {
    await db.syncQueue.add({
      userId,
      operation,
      docId,
      payload,
      timestamp: Date.now(),
    });
  }, []);

  const processSyncQueue = useCallback(async () => {
    if (!user || !firestore) return;

    const ops = await db.syncQueue.where('userId').equals(user.uid).toArray();
    if (ops.length === 0) return;

    const batch = writeBatch(firestore);
    const processedIds: number[] = [];

    for (const op of ops) {
      if (typeof op.id !== 'number') continue;

      const docRef = doc(firestore, 'users', user.uid, 'sessions', op.docId);

      try {
        switch (op.operation) {
          case 'create':
          case 'update':
            batch.set(docRef, op.payload, { merge: true });
            break;
          case 'delete':
            batch.delete(docRef);
            break;
        }
        processedIds.push(op.id);
      } catch (error) {
        console.error(`Failed to process sync operation ${op.id}:`, error);
      }
    }

    try {
      await batch.commit();
      await db.syncQueue.bulkDelete(processedIds);
      console.log(`Processed and cleared ${processedIds.length} items from sync queue.`);
    } catch (error) {
      console.error('Failed to commit sync batch:', error);
    }
  }, [user, firestore]);

  // Effect to periodically process the sync queue
  useEffect(() => {
    const interval = setInterval(() => {
      processSyncQueue();
    }, 10000); // Push updates every 10 seconds
    return () => clearInterval(interval);
  }, [processSyncQueue]);
  
  // Real-time listener for remote changes
  const sessionsCollection = useMemoFirebase(
    () => (user && firestore ? collection(firestore, 'users', user.uid, 'sessions') : null),
    [user, firestore]
  );

  useEffect(() => {
    if (!sessionsCollection) return;

    const unsubscribe = onSnapshot(sessionsCollection, async (snapshot) => {
      const remoteSessions: SessionEntry[] = [];
      snapshot.forEach((doc) => {
        remoteSessions.push(doc.data() as SessionEntry);
      });

      // Basic conflict resolution: last write wins
      await db.sessions.bulkPut(remoteSessions);
    });

    return () => unsubscribe();
  }, [sessionsCollection]);

  // --- UI HANDLERS ---
  const doSignInGoogle = async () => {
    if (!auth) return;
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
    } catch (error) {
      console.error("Google sign-in failed:", error);
    }
  };

  const doSignOut = async () => {
    if (!auth) return;
    await signOut(auth);
    setActiveSession(null);
  };
  
  const categories = [
    "Yoga", "Stress", "Mindfulness", "Goals & Intentions", "Meditation",
    "Daily Progress", "Family Stress", "Job Stress", "Friends", "Self Esteem",
    "Physical Health", "Nutrition", "Sleep", "Emotions", "Creativity", "Balance"
  ];
  
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="p-4 border-b flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">Pranian Journal</h1>
          {user && <Button onClick={doSignOut}>Sign Out</Button>}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">
            {!user ? (
              <Card>
                <CardHeader>
                  <CardTitle>Sign in to your Journal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Sign in to securely sync your journal across all your devices.
                  </p>
                  <Button className="w-full" onClick={doSignInGoogle}>
                    Sign in with Google
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <>
                <DailyProgress categories={categories} />
                <AnalyticsDashboard userId={user.uid} />
                <Card>
                  <CardHeader>
                    <CardTitle>Journal Entries</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {categories.map((category, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                          <AccordionTrigger>{category}</AccordionTrigger>
                          <AccordionContent>
                            <CategoryEntryForm category={category} userId={user.uid} />
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </>
            )}
          </div>

          {/* Right Column: Tools & Status */}
          <div className="col-span-1 space-y-8">
              <MindfulnessTimer />
              <div className="p-4 bg-card rounded-lg shadow">
                <h4 className="font-bold">Sync & Status</h4>
                <div className="text-sm text-muted-foreground">
                  Local queue: open console to inspect Dexie.
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function defaultPoses(): Pose[] {
  return [
    { id: 'p1', name: 'Downward Dog', difficulty: 'beginner', durationDefault: 30 },
    { id: 'p2', name: 'Child\'s Pose', difficulty: 'beginner', durationDefault: 60 },
    { id: 'p3', name: 'Warrior II', difficulty: 'intermediate', durationDefault: 45 },
    { id: 'p4', name: 'Triangle Pose', difficulty: 'intermediate', durationDefault: 40 },
    { id: 'p5', name: 'Tree Pose', difficulty: 'beginner', durationDefault: 50 },
  ];
}


// --- COMPONENTS ---

function CategoryEntryForm({ category, userId }: { category: string, userId: string }) {
  const firestore = useFirestore();
  const today = new Date().toISOString().split("T")[0];
  const [entry, setEntry] = useState("");
  const [mediaUrl, setMediaUrl] = useState<string | null>(null);
  const [completedToday, setCompletedToday] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // This is a bit of a hack for the demo. In a real app, you'd fetch this from Firestore.
  const entryId = `${category.replace(/\s+/g, '-')}-${today}`;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const lastCapturedImage = localStorage.getItem('lastCapturedImage');
      if (lastCapturedImage) {
        setMediaUrl(lastCapturedImage);
        localStorage.removeItem('lastCapturedImage');
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firestore || !userId) return;
    setIsSaving(true);
    
    try {
      const sessionsRef = collection(firestore, "users", userId, "sessions");
      await addDoc(sessionsRef, {
        title: category,
        notes: entry,
        mediaUrl: mediaUrl || null,
        completed: completedToday,
        date: new Date(), // Use client-side date for Dexie compatibility
        duration: 0, // Not a timed session
        style: 'Journal',
      });

      alert(`Saved entry for ${category}`);
    } catch (error) {
      console.error("Error saving journal entry:", error);
      alert(`Failed to save entry for ${category}`);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder={`Your notes for ${category}...`}
        rows={4}
        className="mb-3"
      />
      {mediaUrl && (
        <div className="my-3">
          <p className="text-sm text-muted-foreground mb-2">Attached Media:</p>
          <div className="relative w-full max-w-sm h-48 rounded-md overflow-hidden">
            <Image src={mediaUrl} alt="Journal entry media" layout="fill" objectFit="cover" />
          </div>
        </div>
      )}
      <div className="flex items-center space-x-2 my-3">
        <Checkbox
          id={`completed-${category}`}
          checked={completedToday}
          onCheckedChange={(checked) => setCompletedToday(checked as boolean)}
        />
        <label
          htmlFor={`completed-${category}`}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          I completed this today
        </label>
      </div>
      <div className="flex gap-2">
         <Button asChild variant="outline">
          <a href="/camera">
            <Camera className="mr-2 h-4 w-4" /> Add Media
          </a>
        </Button>
        <Button type="submit" className="w-full" disabled={isSaving}>
          {isSaving ? 'Saving...' : 'Save'}
        </Button>
      </div>
    </form>
  );
}


function DailyProgress({ categories }: { categories: string[] }) {
    const today = new Date().toISOString().split("T")[0];
    const [completed, setCompleted] = useState(0);
    const [streak, setStreak] = useState(0);
    const [categoryStatus, setCategoryStatus] = useState<Record<string, boolean>>({});

    useEffect(() => {
        let count = 0;
        let status: Record<string, boolean> = {};

        categories.forEach((category) => {
            const saved = JSON.parse(localStorage.getItem(category) || "{}");
            const done = saved.completedDate === today;
            status[category] = done;
            if (done) count++;
        });

        setCategoryStatus(status);
        setCompleted(count);

        const savedStreak = JSON.parse(localStorage.getItem("streakData") || "{}");
        let newStreak = savedStreak.streak || 0;

        if (count > 0 && savedStreak.lastDate !== today) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            const yDate = yesterday.toISOString().split("T")[0];

            if (savedStreak.lastDate === yDate) {
                newStreak++;
            } else {
                newStreak = 1;
            }
            localStorage.setItem("streakData", JSON.stringify({ lastDate: today, streak: newStreak }));
        } else if (count === 0 && savedStreak.lastDate === today) {
            // User unchecked all for today, reset streak if needed
        }
        
        setStreak(newStreak);

    }, [categories, today]);

    const percent = categories.length > 0 ? Math.round((completed / categories.length) * 100) : 0;

    return (
        <Card>
            <CardHeader>
                <CardTitle>Daily Progress</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground mb-2">
                    <strong>Completed today:</strong> {completed} / {categories.length}
                </p>
                <Progress value={percent} className="mb-4" />
                <p>
                    <strong>Streak:</strong> 🔥 {streak} days
                </p>
                <Accordion type="single" collapsible className="w-full mt-4">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Category Breakdown</AccordionTrigger>
                        <AccordionContent>
                             <ul className="space-y-2">
                                {Object.entries(categoryStatus).map(([cat, done]) => (
                                    <li key={cat} className="flex items-center text-sm">
                                        <span className="mr-2">{done ? "✅" : "⬜️"}</span>
                                        {cat}
                                    </li>
                                ))}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
        </Card>
    );
}

function MindfulnessTimer() {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setSeconds(prev => prev + 1);
            }, 1000);
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        }
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isRunning]);

    const handleStart = () => setIsRunning(true);
    const handlePause = () => setIsRunning(false);
    const handleReset = () => {
        setIsRunning(false);
        setSeconds(0);
    };

    const formatTime = (timeInSeconds: number) => {
        const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
        const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Mindfulness Timer</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
                <p className="text-5xl font-mono font-bold mb-4">{formatTime(seconds)}</p>
                <div className="flex gap-2 justify-center">
                    {!isRunning ? (
                        <Button onClick={handleStart}>Start</Button>
                    ) : (
                        <Button onClick={handlePause} variant="outline">Pause</Button>
                    )}
                    <Button onClick={handleReset} variant="ghost">Reset</Button>
                </div>
            </CardContent>
        </Card>
    );
}

function useAnalytics(userId?: string) {
  const firestore = useFirestore();
  const [analytics, setAnalytics] = useState({
    totalSessions: 0,
    totalMinutes: 0,
    avgDuration: 0,
    longest: 0,
    sessions: [] as (SessionEntry & { id: string; date: Date })[],
    loading: true
  });

  useEffect(() => {
    if (!userId || !firestore) {
        setAnalytics(prev => ({...prev, loading: false}));
        return;
    };

    async function fetchData() {
      setAnalytics(prev => ({...prev, loading: true}));
      const sessionsRef = collection(firestore, "users", userId, "sessions");
      const q = query(sessionsRef, orderBy("date", "asc"));
      const snap = await getDocs(q);

      const sessions = snap.docs.map(doc => {
        const data = doc.data() as SessionEntry;
        return {
            id: doc.id,
            ...data,
            date: data.date ? (data.date as any).toDate() : new Date()
        }
      });

      const sessionsWithDuration = sessions.filter(s => typeof s.duration === 'number' && s.duration > 0);
      
      const totalSessions = sessionsWithDuration.length;
      const totalMinutes = sessionsWithDuration.reduce((a, b) => a + b.duration, 0);
      const avgDuration = totalSessions ? totalMinutes / totalSessions : 0;
      const longest = totalSessions ? Math.max(...sessionsWithDuration.map(s => s.duration)) : 0;

      setAnalytics({
        totalSessions,
        totalMinutes,
        avgDuration,
        longest,
        sessions,
        loading: false
      });
    }

    fetchData();
  }, [userId, firestore]);

  return analytics;
}


function AnalyticsDashboard({ userId }: { userId: string }) {
    const {
        totalSessions,
        totalMinutes,
        avgDuration,
        longest,
        sessions,
        loading
  } = useAnalytics(userId);

  if (loading) return <Card><CardHeader><CardTitle>Loading Analytics...</CardTitle></CardHeader><CardContent><div className="h-60" /></CardContent></Card>;

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Your Analytics Dashboard</CardTitle>
          <CardDescription>An overview of your practice and wellness journey.</CardDescription>
        </CardHeader>
        <CardContent>
          <h3 className="font-semibold text-lg mb-4">📈 Practice Analytics (Core Metrics)</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-8">
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-2xl font-bold">{totalSessions}</p>
              <p className="text-sm text-muted-foreground">Total Sessions</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-2xl font-bold">{totalMinutes.toFixed(0)}</p>
              <p className="text-sm text-muted-foreground">Total Minutes</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-2xl font-bold">{avgDuration.toFixed(1)}</p>
              <p className="text-sm text-muted-foreground">Avg. Duration</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-2xl font-bold">{longest.toFixed(0)}</p>
              <p className="text-sm text-muted-foreground">Longest Session</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <DurationChart sessions={sessions} />
                <IntensityChart sessions={sessions} />
            </div>
        </CardContent>
      </Card>
    </div>
  );
};


function DurationChart({ sessions }: { sessions: {date: Date, duration: number}[] }) {
  const data = sessions
    .filter(s => s.duration > 0)
    .map(s => ({
        date: s.date.toLocaleDateString(),
        duration: s.duration
    }));

  return (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Session Duration (minutes)</CardTitle>
        </CardHeader>
        <CardContent className="h-60">
             <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="duration" name="Duration (min)" stroke="hsl(var(--primary))" />
                </LineChart>
            </ResponsiveContainer>
        </CardContent>
    </Card>
  );
}

function IntensityChart({ sessions }: { sessions: {date: Date, intensity?: number}[] }) {
    const data = sessions
    .filter(s => (s.intensity || 0) > 0)
    .map(s => ({
        date: s.date.toLocaleDateString(),
        intensity: s.intensity
    }));

  return (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Session Intensity (1-5)</CardTitle>
        </CardHeader>
        <CardContent className="h-60">
             <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis domain={[0, 5]} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="intensity" name="Intensity" fill="hsl(var(--primary))" />
                </BarChart>
            </ResponsiveContainer>
        </CardContent>
    </Card>
  );
}
