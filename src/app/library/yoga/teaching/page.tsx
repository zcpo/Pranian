
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { cn } from '@/lib/utils';

type QuizOption = {
  id: string;
  text: string;
};

type QuizQuestion = {
  question: string;
  options: QuizOption[];
  correctAnswerId: string;
};

const lessons = [
  {
    id: 'teaching-1',
    category: 'Teaching',
    title: 'The Art of Verbal Cueing',
    description: 'Learn to guide students with clear and effective language.',
    quiz: [
      {
        question: 'What is the primary goal of a verbal cue?',
        options: [
          { id: 'a', text: 'To sound like an expert.' },
          { id: 'b', text: 'To guide a student into safe and effective alignment.' },
          { id: 'c', text: 'To fill silence in the class.' },
          { id: 'd', text: 'To count breaths for the student.' },
        ],
        correctAnswerId: 'b',
      },
      {
        question: 'Which type of cue is most effective for beginners?',
        options: [
          { id: 'a', text: 'Anatomical and precise cues.' },
          { id: 'b', text: 'Simple, direct, and action-oriented cues.' },
          { id: 'c', text: 'Metaphorical and poetic cues.' },
          { id: 'd', text: 'Sanskrit names for poses.' },
        ],
        correctAnswerId: 'b',
      },
      {
        question: 'What does it mean to "cue from the ground up"?',
        options: [
          { id: 'a', text: 'Start with the easiest poses.' },
          { id: 'b', text: 'Only teach floor-based poses.' },
          { id: 'c', text: 'Build the pose by instructing from the foundation (e.g., feet, hands) upwards.' },
          { id: 'd', text: 'Speak in a low, grounding voice.' },
        ],
        correctAnswerId: 'c',
      },
      {
        question: 'An "internal" or "somatic" cue focuses on...',
        options: [
          { id: 'a', text: 'The external look of the pose.' },
          { id: 'b', text: 'What the student should be feeling or sensing inside their body.' },
          { id: 'c', text: 'The name of the muscle being stretched.' },
          { id: 'd', text: 'The history of the yoga pose.' },
        ],
        correctAnswerId: 'b',
      },
      {
        question: 'When a student is in a pose, what is a good follow-up cue?',
        options: [
          { id: 'a', text: 'A refinement cue to deepen or adjust the pose.' },
          { id: 'b', text: 'Immediately move to the next pose.' },
          { id: 'c', text: 'Tell them they are doing it wrong.' },
          { id: 'd', text: 'Ask them to hold their breath.' },
        ],
        correctAnswerId: 'a',
      },
    ],
  },
  {
    id: 'teaching-2',
    category: 'Teaching',
    title: 'Safe and Effective Hands-On Assists',
    description: 'Understand the principles of tactile feedback.',
    quiz: [
        {
          question: 'What is the first and most crucial step before offering a hands-on assist?',
          options: [
            { id: 'a', text: 'Make sure your hands are warm.' },
            { id: 'b', text: 'Explain what the assist is for.' },
            { id: 'c', text: 'Ask for and receive clear consent from the student.' },
            { id: 'd', text: 'Know the Sanskrit name of the pose.' },
          ],
          correctAnswerId: 'c',
        },
        {
          question: 'An "energetic" assist is intended to...',
          options: [
            { id: 'a', text: 'Physically force a student deeper into a pose.' },
            { id: 'b', text: 'Suggest the direction of energy or movement without applying significant force.' },
            { id: 'c', text: 'Correct a student’s alignment completely.' },
            { id: 'd', text: 'Show off the teacher’s strength.' },
          ],
          correctAnswerId: 'b',
        },
        {
          question: 'When assisting in a balancing pose, where should the teacher be positioned?',
          options: [
            { id: 'a', text: 'Directly in front of the student.' },
            { id: 'b', text: 'Far away to give them space.' },
            { id: 'c', text: 'In a stable position to provide support without destabilizing them.' },
            { id: 'd', text: 'Sitting on the floor.' },
          ],
          correctAnswerId: 'c',
        },
        {
          question: 'What is a key principle for a safe assist in a spinal twist?',
          options: [
            { id: 'a', text: 'Encourage lengthening the spine on the inhale before deepening the twist on the exhale.' },
            { id: 'b', text: 'Push the student’s shoulder as hard as possible.' },
            { id: 'c', text: 'Ignore the student’s breath.' },
            { id: 'd', text: 'Focus only on the student’s hips.' },
          ],
          correctAnswerId: 'a',
        },
        {
          question: 'If a student signals discomfort during an assist, the teacher should:',
          options: [
            { id: 'a', text: 'Tell them to breathe through it.' },
            { id: 'b', text: 'Immediately and slowly back off the assist.' },
            { id: 'c', text: 'Push a little harder to help them through the block.' },
            { id: 'd', text: 'Ignore it, as discomfort is part of yoga.' },
          ],
          correctAnswerId: 'b',
        },
      ],
  },
  {
    id: 'teaching-3',
    category: 'Teaching',
    title: 'Crafting Inspiring Class Themes',
    description: 'Weave philosophy and intention into your classes.',
    quiz: [],
  },
  {
    id: 'teaching-4',
    category: 'Teaching',
    title: 'Yoga Teacher Ethics',
    description: 'Explore the responsibilities of being a yoga teacher.',
    quiz: [],
  },
];

const QuizComponent = ({ quiz }: { quiz: QuizQuestion[] }) => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (questionIndex: number, optionId: string) => {
    setAnswers(prev => ({ ...prev, [questionIndex]: optionId }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!quiz || quiz.length === 0) {
    return <p className="text-muted-foreground">Quiz coming soon for this lesson.</p>;
  }
  
  const score = quiz.reduce((acc, q, index) => {
    return acc + (answers[index] === q.correctAnswerId ? 1 : 0);
  }, 0);

  return (
    <div className="space-y-8 p-4 border-t mt-4">
      <h4 className="font-semibold text-lg">Test Your Knowledge</h4>
      <form onSubmit={handleSubmit}>
        {quiz.map((q, index) => {
          const isCorrect = submitted && answers[index] === q.correctAnswerId;
          const isIncorrect = submitted && answers[index] && answers[index] !== q.correctAnswerId;

          return (
            <div key={index} className="mb-6 p-4 rounded-md bg-muted/50">
              <p className="font-medium mb-3">{index + 1}. {q.question}</p>
              <RadioGroup
                onValueChange={(value) => handleAnswerChange(index, value)}
                disabled={submitted}
              >
                {q.options.map(opt => {
                  const isSelected = answers[index] === opt.id;
                  let colorClass = '';
                  if (submitted) {
                    if (opt.id === q.correctAnswerId) {
                      colorClass = 'text-green-500';
                    } else if (isSelected) {
                      colorClass = 'text-red-500';
                    }
                  }

                  return (
                    <div className={cn("flex items-center space-x-2 p-2 rounded-md", submitted && isSelected && isIncorrect && 'bg-red-500/10', submitted && isCorrect && isSelected && 'bg-green-500/10')} key={opt.id}>
                      <RadioGroupItem value={opt.id} id={`q${index}-opt${opt.id}`} />
                      <Label htmlFor={`q${index}-opt${opt.id}`} className={cn("cursor-pointer", colorClass)}>{opt.text}</Label>
                    </div>
                  );
                })}
              </RadioGroup>
            </div>
          );
        })}
        {!submitted && <Button type="submit">Check Answers</Button>}
      </form>
      {submitted && (
        <div className="mt-6 p-4 rounded-lg bg-primary/10 text-center">
            <h5 className="font-bold text-xl">Your Score: {score} / {quiz.length}</h5>
            <p className="text-muted-foreground">Review the answers above. Green indicates the correct choice.</p>
             <Button onClick={() => { setSubmitted(false); setAnswers({}); }} variant="outline" className="mt-4">Try Again</Button>
        </div>
      )}
    </div>
  );
};


export default function TeachingPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-teaching');
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
            Resources for yoga teachers to refine their skills.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="text-center mb-12">
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Enhance your teaching with resources on cueing techniques, hands-on assists, class themes, safety guidelines, and teaching ethics.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            {lessons.map((lesson) => (
                <AccordionItem value={lesson.id} key={lesson.id}>
                    <AccordionTrigger className="text-xl font-headline hover:no-underline">
                        {lesson.title}
                    </AccordionTrigger>
                    <AccordionContent>
                        <p className="text-muted-foreground mb-4">{lesson.description}</p>
                        <QuizComponent quiz={lesson.quiz} />
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
      </div>
    </div>
  );
}
