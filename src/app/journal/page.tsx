
'use client';

import { useState, useEffect } from 'react';
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
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const categories = [
  'Yoga',
  'Stress',
  'Mindfulness',
  'Goals & Intentions',
  'Meditation',
  'Daily Progress',
  'Family Stress',
  'Job Stress',
  'Friends',
  'Self Esteem',
  'Physical Health',
  'Nutrition',
  'Sleep',
  'Emotions',
  'Creativity',
  'Balance',
];

const CategoryEntryForm = ({ category }: { category: string }) => {
  const [entry, setEntry] = useState('');
  const { toast } = useToast();
  const today = new Date().toISOString().split('T')[0];
  const [completedToday, setCompletedToday] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(category) || '{}');
      // Don't load old entries, just completion status for today
      // setEntry(saved.entry || ''); 
      if (saved.completedDate === today) {
        setCompletedToday(true);
      } else {
        setCompletedToday(false);
      }
    } catch (error) {
      console.error("Failed to parse localStorage item for", category, error);
    }
  }, [category, today]);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (entry.trim() === '' && !completedToday) {
      toast({
        variant: 'destructive',
        title: 'Empty Entry',
        description: 'Please write something or mark as completed.',
      });
      return;
    }
    
    const payload = {
      entry,
      completedDate: completedToday ? today : null,
    };

    localStorage.setItem(category, JSON.stringify(payload));
    
    toast({
      title: 'Entry Saved',
      description: `Your journal entry for ${category} has been saved.`,
    });
    // setEntry(''); // Do not clear entry on save
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
        <Button type="submit">
          Save Entry
        </Button>
      </div>
    </form>
  );
};

const DailyProgress = ({ categories }: { categories: string[] }) => {
  const [completed, setCompleted] = useState(0);
  const [streak, setStreak] = useState(0);
  const [categoryStatus, setCategoryStatus] = useState<Record<string, boolean>>({});
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const today = new Date().toISOString().split('T')[0];
    let count = 0;
    let status: Record<string, boolean> = {};

    categories.forEach((category) => {
      try {
        const saved = JSON.parse(localStorage.getItem(category) || '{}');
        const done = saved.completedDate === today;
        status[category] = done;
        if (done) count++;
      } catch (error) {
        console.error("Failed to process category", category, error);
        status[category] = false;
      }
    });

    setCategoryStatus(status);
    setCompleted(count);

    // Handle streak
    try {
      const savedStreak = JSON.parse(localStorage.getItem('streakData') || '{"lastDate": null, "streak": 0}');
      
      if (savedStreak.lastDate === today) {
        setStreak(savedStreak.streak);
        return;
      }

      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yDate = yesterday.toISOString().split('T')[0];

      let newStreak = savedStreak.streak;
      if (count > 0) {
        if (savedStreak.lastDate === yDate) {
          newStreak = savedStreak.streak + 1;
        } else {
          newStreak = 1;
        }
        localStorage.setItem('streakData', JSON.stringify({ lastDate: today, streak: newStreak }));
      } else {
        // If no items completed today, streak might be broken unless it's the same day.
        // It's handled by the first if block in this try...catch
      }
      setStreak(newStreak);

    } catch (error) {
      console.error("Failed to process streak data", error);
    }
  }, [categories, isClient]);

  if (!isClient) {
    return null; // Render nothing on the server
  }

  const percent = categories.length > 0 ? Math.round((completed / categories.length) * 100) : 0;

  return (
    <Card className="mb-12 glass-card p-4 sm:p-6">
      <CardHeader className="p-0 mb-4">
        <CardTitle className="font-headline tracking-tight text-2xl">Daily Progress</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <p className="text-muted-foreground mb-2"><strong>Completed today:</strong> {completed} / {categories.length}</p>
        <Progress value={percent} className="mb-4" />
        <p className="font-semibold"><strong>Streak:</strong> 🔥 {streak} days</p>

        <h5 className="mt-6 mb-3 font-semibold font-headline">Category Breakdown</h5>
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


export default function JournalPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight">Your Wellness Journal</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A private space to track your journey, one day at a time.
          </p>
        </div>

        <DailyProgress categories={categories} />

        <Accordion type="single" collapsible className="w-full glass-card p-4 sm:p-6 rounded-lg">
            {categories.map((category) => (
                <AccordionItem value={category} key={category}>
                    <AccordionTrigger className="text-lg font-semibold font-headline">
                        {category}
                    </AccordionTrigger>
                    <AccordionContent>
                        <CategoryEntryForm category={category} />
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>

      </div>
    </div>
  );
}
