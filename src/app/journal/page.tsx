
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (entry.trim() === '') {
      toast({
        variant: 'destructive',
        title: 'Empty Entry',
        description: 'Please write something before saving.',
      });
      return;
    }
    // In a real application, you would save this to a database.
    console.log(`Entry for ${category}:`, entry);
    toast({
      title: 'Entry Saved',
      description: `Your journal entry for ${category} has been saved.`,
    });
    setEntry(''); // Clear the textarea after saving
  };

  return (
    <form onSubmit={handleSubmit}>
      <Textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder={`Write your thoughts for ${category}...`}
        rows={5}
        className="mb-2 bg-background/50"
      />
      <Button type="submit">
        Save Entry
      </Button>
    </form>
  );
};


export default function JournalPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight">Your Wellness Journal</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A private space to track your journey in yoga, mindfulness, and well-being.
          </p>
        </div>

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
