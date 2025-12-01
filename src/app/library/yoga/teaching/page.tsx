
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { lessons, type Lesson } from '@/lib/lessons';

const LessonQuiz = ({ lesson }: { lesson: Lesson }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (questionIndex: number, answerId: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: answerId,
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const score = Object.keys(selectedAnswers).reduce((acc, key) => {
    const questionIndex = parseInt(key, 10);
    if (selectedAnswers[key] === lesson.quiz[questionIndex].correctAnswerId) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return (
    <div className="space-y-6">
      {lesson.quiz.map((q, index) => (
        <div key={index} className={cn("p-4 rounded-lg", submitted && (selectedAnswers[index] === q.correctAnswerId ? 'bg-green-500/10 border border-green-500/30' : 'bg-red-500/10 border border-red-500/30'))}>
          <p className="font-semibold mb-2">{index + 1}. {q.question}</p>
          <RadioGroup 
            onValueChange={(value) => handleAnswerChange(index, value)} 
            value={selectedAnswers[index]}
            disabled={submitted}
          >
            {q.options.map(opt => (
              <div key={opt.id} className="flex items-center space-x-2">
                <RadioGroupItem value={opt.id} id={`${lesson.id}-${index}-${opt.id}`} />
                <Label htmlFor={`${lesson.id}-${index}-${opt.id}`}>{opt.text}</Label>
              </div>
            ))}
          </RadioGroup>
          {submitted && selectedAnswers[index] !== q.correctAnswerId && (
            <p className="text-xs text-green-600 mt-2">Correct Answer: {q.options.find(o => o.id === q.correctAnswerId)?.text}</p>
          )}
        </div>
      ))}
      <div className="flex justify-end gap-2">
        {submitted ? (
            <>
                <p className="text-lg font-bold">Your Score: {score} / {lesson.quiz.length}</p>
                <Button onClick={() => { setSubmitted(false); setSelectedAnswers({}); }}>Try Again</Button>
            </>
        ) : (
            <Button onClick={handleSubmit} disabled={Object.keys(selectedAnswers).length !== lesson.quiz.length}>Submit Answers</Button>
        )}
      </div>
    </div>
  );
}

export default function TeachingResourcesPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-teaching');
  const categories = Array.from(new Set(lessons.map(l => l.category)));

  return (
    <div>
      <section className="relative h-64 sm:h-96 flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold font-headline tracking-tight">
            Teaching Resources
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/80">
            Refine your skills with our comprehensive library of teaching lessons and quizzes.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 sm:py-16">
        {categories.map(category => (
            <div key={category} className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold font-headline mb-6 text-primary">{category}</h2>
                <Accordion type="single" collapsible className="w-full space-y-4">
                    {lessons.filter(l => l.category === category).map((lesson) => (
                        <AccordionItem value={lesson.id} key={lesson.id} className="border-b-0">
                           <AccordionTrigger className="bg-card p-6 rounded-lg text-lg font-semibold hover:no-underline hover:bg-muted/50 transition-colors text-left">
                             {lesson.title}
                           </AccordionTrigger>
                           <AccordionContent className="bg-card/50 p-6 rounded-b-lg -mt-2 border-t-0">
                               <p className="text-muted-foreground mb-6">{lesson.description}</p>
                               <LessonQuiz lesson={lesson} />
                           </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        ))}
      </div>
    </div>
  );
}

    