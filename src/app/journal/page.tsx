

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
                <AnalyticsDashboard sessions={sessions || []} />
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
    if (!firestore) return;
    setIsSaving(true);
    
    const sessionData: Partial<SessionEntry> = {
      id: entryId,
      userId: userId,
      title: category,
      notes: entry,
      date: today,
      duration: 0, // Not a timed session
      style: 'Journal',
      mediaUrl: mediaUrl || undefined,
      completed: completedToday,
      createdAt: new Date().toISOString(),
      modifiedAt: new Date().toISOString(),
    };

    try {
      const docRef = doc(firestore, 'users', userId, 'sessions', entryId);
      await setDoc(docRef, sessionData, { merge: true });
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

const moods = ["😀", "🙂", "😐", "😔", "😭"];

function MoodTracker({ onMoodSelect }: { onMoodSelect: (mood: string) => void }) {
    const [selectedMood, setSelectedMood] = useState<string | null>(null);

    const handleSelect = (mood: string) => {
        setSelectedMood(mood);
        onMoodSelect(mood);
    }
    
    return (
        <Card>
            <CardHeader>
                <CardTitle>Today's Mood</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex justify-around">
                    {moods.map(mood => (
                        <button
                            key={mood}
                            onClick={() => handleSelect(mood)}
                            className={`text-3xl p-2 rounded-full transition-transform duration-200 ${selectedMood === mood ? 'bg-primary/20 scale-125' : 'hover:scale-110'}`}
                        >
                            {mood}
                        </button>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

const AnalyticsDashboard = ({ sessions }: { sessions: SessionEntry[] }) => {
  const chartData = sessions
    .filter(s => s.duration > 0) // Only include timed sessions
    .map(s => ({
      date: dayjs(s.date).format('MMM D'),
      duration: Math.round(s.duration / 60), // in minutes
      intensity: s.intensity || 0,
    }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const totalMinutes = sessions.reduce((acc, s) => acc + (s.duration || 0), 0) / 60;
  const totalSessions = sessions.length;
  const avgDuration = totalSessions > 0 ? totalMinutes / totalSessions : 0;
  const longestSession = Math.max(...sessions.map(s => s.duration || 0), 0) / 60;

  const featureStubs = {
    practice: [
      "Daily/weekly practice frequency", "Calendar heatmap of practice habits", "Practice time-of-day distribution",
      "Pose category distribution", "Yoga style distribution", "Intensity trend over time", "Instructor preference analysis",
      "Top used sequences", "Most repeated session type", "Longest streaks for each yoga style",
      "Average intensity score vs. mood score correlation", "Time between sessions (recovery tracking)"
    ],
    wellness: [
      "Mood-before vs. mood-after comparison charts", "Stress reduction score", "Sleep quality vs. practice trend",
      "Breathwork minutes completed", "Meditation minutes completed", "Emotional trend graph (7-90 days)",
      "Mindfulness streak", "Body pain tracking", "Flexibility improvement monitors", "Balance improvement meter"
    ],
    pose: [
      "Most practiced poses", "Poses improving (by hold time)", "Poses needing attention", "Holds duration trend per pose",
      "Side-to-side symmetry", "Pose difficulty curve", "Personalized recommended poses", "Pose fatigue detection"
    ],
    sequence: [
      "Sequence completion rates", "Average sequence length", "Most effective sequences (by mood)", "AI-optimized suggestions",
      "Drag-and-drop efficiency tracking", "Transitions used most frequently", "Time spent per sequence category", "Flow consistency rating"
    ],
    gamification: [
      "Daily goals completed", "Weekly challenge progress", "Monthly milestone achievements", "Leveling system (XP)",
      "Badge system", "Goal prediction", "Celebration cards for milestones"
    ],
    content: [
        "Most watched video classes", "Most saved or bookmarked sessions", "Average video completion rate", "New classes engagement",
        "Category popularity", "Audio vs. video practice preference"
    ],
    personal: [
        "Personalized growth timeline ('Year in Review')", "Strength, flexibility, and balance scores", "Body & mind improvement dashboard",
        "Recommended routines", "Personalized 'Practice Persona'", "Top wellness categories"
    ],
    ai: [
        "AI mood trend analysis", "AI-overexertion warnings", "AI recommended rest days", "Sequence auto-optimizer",
        "AI summary of weekly practice", "AI detection of burnout risk", "AI clustering of similar sessions"
    ],
    backup: [
        "Session backup health (local vs. cloud)", "Export analytics report (PDF/CSV)", "Last sync timestamp & queue length",
        "Conflict resolution logs"
    ],
    media: [
        "Photo pose comparisons over time", "Progress timeline (side-by-side)", "Video playback insights (pause hotspots)"
    ]
  };
  
  const StubList = ({ items }: { items: string[] }) => (
    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
        {items.map(item => <li key={item}>{item} (coming soon)</li>)}
    </ul>
  );

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
              <p className="text-2xl font-bold">{avgDuration.toFixed(0)}</p>
              <p className="text-sm text-muted-foreground">Avg. Duration</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-2xl font-bold">{longestSession.toFixed(0)}</p>
              <p className="text-sm text-muted-foreground">Longest Session</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base">Session Duration (minutes)</CardTitle>
                    </CardHeader>
                    <CardContent className="h-60">
                         <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="duration" stroke="hsl(var(--primary))" />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="text-base">Session Intensity (1-5)</CardTitle>
                    </CardHeader>
                    <CardContent className="h-60">
                         <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis domain={[0, 5]} />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="intensity" fill="hsl(var(--primary))" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>
            <StubList items={featureStubs.practice} />
        </CardContent>
      </Card>

        <Card>
            <CardHeader>
                <CardTitle>🌿 Wellness & Mindfulness Metrics</CardTitle>
            </CardHeader>
            <CardContent>
                <StubList items={featureStubs.wellness} />
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>🧘‍♂️ Pose-Level Analytics</CardTitle>
            </CardHeader>
            <CardContent>
                <StubList items={featureStubs.pose} />
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>🔥 Sequence Builder Insights</CardTitle>
            </CardHeader>
            <CardContent>
                <StubList items={featureStubs.sequence} />
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>🔒 Habit Tracking & Gamification</CardTitle>
            </CardHeader>
            <CardContent>
                <StubList items={featureStubs.gamification} />
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>📚 Content Usage Metrics</CardTitle>
            </CardHeader>
            <CardContent>
                <StubList items={featureStubs.content} />
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>👤 Profile & Personal Growth</CardTitle>
            </CardHeader>
            <CardContent>
                <StubList items={featureStubs.personal} />
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>🤖 AI-Driven Insights</CardTitle>
            </CardHeader>
            <CardContent>
                <StubList items={featureStubs.ai} />
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>📤 Sessions, Export & Backup Insights</CardTitle>
            </CardHeader>
            <CardContent>
                <StubList items={featureStubs.backup} />
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>🖼️ Media Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
                <StubList items={featureStubs.media} />
            </CardContent>
        </Card>
    </div>
  );
};
