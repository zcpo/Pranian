
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function JournalPage() {
  const [entry, setEntry] = useState('');
  const { toast } = useToast();

  const handleSave = () => {
    if (entry.trim() === '') {
        toast({
            variant: 'destructive',
            title: 'Empty Entry',
            description: 'Please write something before saving.',
        });
        return;
    }
    
    // In a real application, you would save this to a database.
    console.log('Journal Entry Saved:', entry);

    toast({
        title: 'Entry Saved',
        description: 'Your journal entry has been successfully saved.',
    });
    setEntry(''); // Clear the textarea after saving
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight">Daily Journal</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A private space to record your thoughts, track your progress, and reflect on your practice.
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline">New Entry for {new Date().toLocaleDateString()}</CardTitle>
            <CardDescription>What's on your mind today?</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Start writing your thoughts here..."
              className="min-h-[250px] text-base"
              value={entry}
              onChange={(e) => setEntry(e.target.value)}
            />
          </CardContent>
          <CardFooter>
            <Button size="lg" onClick={handleSave}>
              Save Entry
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
