
'use client';

import { useState, useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Play, Pause, RotateCcw, Plus, X as XIcon } from 'lucide-react';
import { addDays, format, subDays, eachDayOfInterval } from 'date-fns';

const initialCategories = [
  'Yoga', 'Stress', 'Mindfulness', 'Goals & Intentions', 'Meditation', 
  'Daily Progress', 'Family Stress', 'Job Stress', 'Friends', 'Self Esteem', 
  'Physical Health', 'Nutrition', 'Sleep', 'Emotions', 'Creativity', 'Balance'
];

const moods = [
  { emoji: "😀", label: "Happy" },
  { emoji: "🙂", "label": "Okay" },
  { emoji: "😐", label: "Neutral" },
  { emoji: "😔", label: "Sad" },
  { emoji: "😭", "label": "Crying" }
];


// MOCK HOOKS & DATA - Replace with actual Firebase data hooks
const useJournalData = () => {
  const [entries, setEntries] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const savedEntries = JSON.parse(localStorage.getItem('journalEntries') || '{}');
      setEntries(savedEntries);
    } catch (e) {
      console.error("Failed to parse journal entries from localStorage", e);
    }
    setLoading(false);
  }, []);

  const saveEntry = (category: string, date: string, data: any) => {
    setEntries(prev => {
      const newEntries = { ...prev };
      if (!newEntries[date]) newEntries[date] = {};
      newEntries[date][category] = data;
      localStorage.setItem('journalEntries', JSON.stringify(newEntries));
      return newEntries;
    });
  };

  return { entries, loading, saveEntry };
};

const CategoryEntryForm = ({ category, onSave }: { category: string, onSave: (data: any) => void }) => {
  const [entry, setEntry] = useState('');
  const [completedToday, setCompletedToday] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [currentMood, setCurrentMood] = useState<string | null>(null);

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      entry,
      completed: completedToday,
      tags,
      mood: currentMood
    };
    onSave(data);
    toast({
      title: 'Entry Saved',
      description: `Your journal entry for ${category} has been saved.`,
    });
  };

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };


  return (
    <form onSubmit={handleSubmit}>
      <Textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder={`Write your thoughts for ${category}...`}
        rows={5}
        className="mb-4 bg-background/50"
      />
      
      <div className="mb-4">
        <label className="text-sm font-medium mb-2 block">Tags</label>
        <div className="flex gap-2">
          <Input 
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            placeholder="e.g., calm, work"
          />
          <Button type="button" onClick={addTag}>Add Tag</Button>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map(tag => (
            <Badge key={tag} variant="secondary" className="flex items-center gap-1">
              {tag}
              <button onClick={() => removeTag(tag)} className="ml-1 rounded-full hover:bg-muted-foreground/20">
                <XIcon className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      </div>

       <div className="mb-4">
        <label className="text-sm font-medium mb-2 block">Mood</label>
        <div className="flex gap-2">
          {moods.map(mood => (
             <Button 
                key={mood.label} 
                variant={currentMood === mood.emoji ? 'default' : 'outline'}
                size="icon"
                onClick={() => setCurrentMood(mood.emoji)}
                type="button"
                aria-label={mood.label}
             >
                {mood.emoji}
             </Button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
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
        <Button type="submit">Save Entry</Button>
      </div>
    </form>
  );
};

const DailyProgress = ({ entries, categories }: { entries: Record<string, any>, categories: string[] }) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => { setIsClient(true); }, []);
  
  const { completed, streak, categoryStatus } = useMemo(() => {
    const todayStr = format(new Date(), 'yyyy-MM-dd');
    const todayEntries = entries[todayStr] || {};
    
    let completedCount = 0;
    const status: Record<string, boolean> = {};
    categories.forEach(cat => {
      const done = todayEntries[cat]?.completed || false;
      status[cat] = done;
      if (done) completedCount++;
    });

    // Calculate streak
    let currentStreak = 0;
    if (localStorage.getItem('streakData')) {
        const savedStreak = JSON.parse(localStorage.getItem('streakData')!);
        const yesterday = format(subDays(new Date(), 1), 'yyyy-MM-dd');
        if (completedCount > 0) {
            if (savedStreak.lastDate === yesterday) {
                currentStreak = savedStreak.streak + 1;
            } else if (savedStreak.lastDate !== todayStr) {
                currentStreak = 1;
            } else {
                currentStreak = savedStreak.streak;
            }
             localStorage.setItem('streakData', JSON.stringify({ lastDate: todayStr, streak: currentStreak }));
        } else {
            currentStreak = savedStreak.lastDate === todayStr ? savedStreak.streak : (savedStreak.lastDate === yesterday ? savedStreak.streak : 0);
        }
    } else if (completedCount > 0) {
        currentStreak = 1;
        localStorage.setItem('streakData', JSON.stringify({ lastDate: todayStr, streak: 1 }));
    }

    return { completed: completedCount, streak: currentStreak, categoryStatus: status };
  }, [entries, categories]);

  if (!isClient) return null;

  const percent = categories.length > 0 ? Math.round((completed / categories.length) * 100) : 0;
  
  return (
    <Card className="glass-card p-4 sm:p-6">
      <CardHeader className="p-0 mb-4">
        <CardTitle className="font-headline tracking-tight text-xl">Daily Progress</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <p className="text-muted-foreground mb-2"><strong>Completed today:</strong> {completed} / {categories.length}</p>
        <Progress value={percent} className="mb-4" />
        <p className="font-semibold"><strong>Streak:</strong> 🔥 {streak} days</p>

        <h5 className="mt-6 mb-3 font-semibold font-headline text-lg">Category Breakdown</h5>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted-foreground">
          {Object.entries(categoryStatus).map(([cat, done]) => (
            <li key={cat} className="flex items-center">
              <span className="mr-2">{done ? "✅" : "⬜️"}</span> {cat}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const CustomCategoryManager = ({ categories, setCategories }: { categories: string[], setCategories: (cats: string[]) => void }) => {
  const [newCat, setNewCat] = useState("");

  const addCategory = () => {
    if (newCat.trim() && !categories.includes(newCat.trim())) {
      const updatedCategories = [...categories, newCat.trim()];
      setCategories(updatedCategories);
      localStorage.setItem('journalCategories', JSON.stringify(updatedCategories));
      setNewCat("");
    }
  };

  return (
    <Card className="glass-card p-4 sm:p-6">
      <CardHeader className="p-0 mb-4">
        <CardTitle className="font-headline tracking-tight text-xl">Add Custom Category</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex gap-2">
          <Input
            placeholder="e.g., Gratitude, Hydration"
            value={newCat}
            onChange={(e) => setNewCat(e.target.value)}
          />
          <Button onClick={addCategory}><Plus className="h-4 w-4 mr-2" /> Add</Button>
        </div>
      </CardContent>
    </Card>
  );
};


const MoodTracker = ({ onMoodSelect }: { onMoodSelect: (mood: string) => void }) => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const handleSelect = (mood: string) => {
    setSelectedMood(mood);
    onMoodSelect(mood);
  }

  return (
    <Card className="glass-card p-4 sm:p-6">
      <CardHeader className="p-0 mb-4">
        <CardTitle className="font-headline tracking-tight text-xl">Today's Mood</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex justify-around">
          {moods.map(mood => (
            <Button 
              key={mood.label}
              variant={selectedMood === mood.emoji ? "default" : "ghost"}
              size="icon"
              className="text-2xl h-12 w-12 rounded-full"
              onClick={() => handleSelect(mood.emoji)}
            >
              {mood.emoji}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

const InsightAI = ({ entries }: { entries: Record<string, any> }) => {
  const feedback = useMemo(() => {
    const todayStr = format(new Date(), 'yyyy-MM-dd');
    const todayEntries = entries[todayStr] || {};
    const completedCount = Object.values(todayEntries).filter((e: any) => e.completed).length;
    const moodsToday = Object.values(todayEntries).map((e: any) => e.mood).filter(Boolean);
    const primaryMood = moodsToday.length > 0 ? moodsToday[0] : null;

    if (completedCount >= 5) return "Amazing work! You're on fire and building strong momentum!";
    if (completedCount >= 3) return "Great consistency! Keep up the effort, it's paying off.";
    if (primaryMood === '😔' || primaryMood === '😭') return "It's okay to have tough days. Be gentle with yourself. Even one small step is a win.";
    if (completedCount > 0) return "Well done for checking in today. Every entry is a step forward.";
    return "Ready to start your day? Try to log one thing to get grounded and build momentum.";
  }, [entries]);

  return (
    <Card className="glass-card p-4 sm:p-6 bg-primary/10 border-primary/20">
      <CardHeader className="p-0 mb-2">
        <CardTitle className="font-headline tracking-tight text-xl text-primary">Insight AI</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <p className="text-primary/90">{feedback}</p>
      </CardContent>
    </Card>
  );
}

const MindfulnessTimer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setSeconds(prev => prev + 1);
            }, 1000);
        } else {
            if (intervalRef.current) clearInterval(intervalRef.current);
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isRunning]);

    const formatTime = () => {
        const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    };

    return (
         <Card className="glass-card p-4 sm:p-6">
            <CardHeader className="p-0 mb-4">
                <CardTitle className="font-headline tracking-tight text-xl">Mindfulness Timer</CardTitle>
            </CardHeader>
            <CardContent className="p-0 text-center">
                <p className="text-6xl font-mono font-bold mb-4">{formatTime()}</p>
                <div className="flex justify-center gap-4">
                    <Button onClick={() => setIsRunning(!isRunning)} className="w-24">
                        {isRunning ? <Pause className="h-5 w-5 mr-2"/> : <Play className="h-5 w-5 mr-2"/>}
                        {isRunning ? 'Pause' : 'Start'}
                    </Button>
                    <Button variant="outline" onClick={() => { setIsRunning(false); setSeconds(0); }}>
                        <RotateCcw className="h-5 w-5 mr-2"/>
                        Reset
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

const ChartsDisplay = ({ entries, categories }: { entries: Record<string, any>, categories: string[] }) => {
    const { progressData, categoryData } = useMemo(() => {
        const endDate = new Date();
        const startDate = subDays(endDate, 30);
        const dateInterval = eachDayOfInterval({ start: startDate, end: endDate });

        const progressData = dateInterval.map(date => {
            const dateStr = format(date, 'yyyy-MM-dd');
            const dayEntries = entries[dateStr] || {};
            const completedCount = Object.values(dayEntries).filter((e: any) => e.completed).length;
            return { date: format(date, 'MMM d'), completed: completedCount };
        });

        const categoryData: Record<string, number> = {};
         categories.forEach(cat => categoryData[cat] = 0);

        Object.values(entries).forEach(dayEntries => {
            Object.entries(dayEntries).forEach(([cat, entry]: [string, any]) => {
                if(entry.completed && categoryData.hasOwnProperty(cat)) {
                    categoryData[cat]++;
                }
            });
        });
        
        const formattedCategoryData = Object.entries(categoryData).map(([name, completions]) => ({ name, completions }));


        return { progressData, categoryData: formattedCategoryData };
    }, [entries, categories]);
    
    return (
        <div className="space-y-8">
            <Card className="glass-card p-4 sm:p-6">
                <CardHeader className="p-0 mb-4">
                    <CardTitle>Progress Over Time</CardTitle>
                    <CardDescription>Completed items in the last 30 days.</CardDescription>
                </CardHeader>
                <CardContent className="p-0 h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={progressData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                            <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} allowDecimals={false} />
                            <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}/>
                            <Line type="monotone" dataKey="completed" stroke="hsl(var(--primary))" activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
            <Card className="glass-card p-4 sm:p-6">
                <CardHeader className="p-0 mb-4">
                    <CardTitle>Category Completion</CardTitle>
                     <CardDescription>Total completions per category.</CardDescription>
                </CardHeader>
                <CardContent className="p-0 h-64">
                     <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={categoryData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                            <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tick={false} />
                            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} allowDecimals={false} />
                             <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}/>
                            <Legend />
                            <Bar dataKey="completions" fill="hsl(var(--primary))" />
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div>
    )
}

export default function JournalPage() {
  const { entries, loading, saveEntry } = useJournalData();
  const [categories, setCategories] = useState(initialCategories);
  const [currentMood, setCurrentMood] = useState<string | null>(null);

  useEffect(() => {
    try {
      const savedCategories = JSON.parse(localStorage.getItem('journalCategories') || 'null');
      if (savedCategories) {
        setCategories(savedCategories);
      }
    } catch(e) {
      console.error("Failed to load categories from localStorage", e);
    }
  }, []);

  const handleSave = (category: string) => (data: any) => {
    const todayStr = format(new Date(), 'yyyy-MM-dd');
    saveEntry(category, todayStr, data);
  };
  
  if (loading) {
      return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight">Your Wellness Journal</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          A private space to track your journey, one day at a time.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
            <Accordion type="single" collapsible className="w-full glass-card p-4 sm:p-6 rounded-lg">
                {categories.map((category) => (
                    <AccordionItem value={category} key={category}>
                        <AccordionTrigger className="text-lg font-semibold font-headline">
                            {category}
                        </AccordionTrigger>
                        <AccordionContent>
                            <CategoryEntryForm category={category} onSave={handleSave(category)} />
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
            
            <ChartsDisplay entries={entries} categories={categories} />

        </div>

        {/* Right Column */}
        <div className="space-y-8">
            <DailyProgress entries={entries} categories={categories} />
            <InsightAI entries={entries} />
            <MoodTracker onMoodSelect={setCurrentMood} />
            <MindfulnessTimer />
            <CustomCategoryManager categories={categories} setCategories={setCategories} />
        </div>
      </div>
    </div>
  );
}

    