
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

type Lesson = {
    id: string;
    category: string;
    title: string;
    description: string;
    quiz: QuizQuestion[];
}

const lessons: Lesson[] = [
  // A. Cueing Techniques
  {
    id: 'cueing-1',
    category: 'Cueing Techniques',
    title: 'Foundation-first cueing: feet, hands, core.',
    description: 'Learn to build poses from the ground up for maximum stability and safety.',
    quiz: [
      {
        question: 'What is the primary benefit of foundation-first cueing?',
        options: [
          { id: 'a', text: 'It makes the pose look better.' },
          { id: 'b', text: 'It creates stability and proper alignment from the start.' },
          { id: 'c', text: 'It is the fastest way to get into a pose.' },
          { id: 'd', text: 'It focuses only on the upper body.' },
        ],
        correctAnswerId: 'b',
      },
      {
        question: 'In Warrior II, what would be a good foundation-first cue?',
        options: [
          { id: 'a', text: '"Reach your arms out wide."' },
          { id: 'b', text: '"Gaze over your front fingertips."' },
          { id: 'c', text: '"Press firmly through the outer edge of your back foot."' },
          { id: 'd', text: '"Drop your shoulders away from your ears."' },
        ],
        correctAnswerId: 'c',
      },
      {
        question: 'Why is cueing core engagement part of the foundation?',
        options: [
          { id: 'a', text: 'To build a six-pack.' },
          { id: "b", text: 'The core stabilizes the spine and pelvis, affecting the entire pose.'},
          { id: 'c', text: 'It\'s not part of the foundation.' },
          { id: 'd', text: 'To make the pose harder.' },
        ],
        correctAnswerId: 'b',
      },
      {
        question: 'When teaching Tadasana (Mountain Pose), where should you begin your cues?',
        options: [
          { id: 'a', text: 'The crown of the head.' },
          { id: 'b', text: 'The shoulders.' },
          { id: 'c',  text: 'The feet, instructing students to feel all four corners.'},
          { id: 'd', text: 'The breath.' },
        ],
        correctAnswerId: 'c',
      },
      {
        question: 'What is a common mistake teachers make when NOT using foundation-first cueing?',
        options: [
          { id: 'a', text: 'Cueing the most complex part of the pose first, leading to instability.' },
          { id: 'b', text: 'Speaking too slowly.' },
          { id: 'c', text: 'Using too much Sanskrit.' },
          { id: 'd', text: 'Forgetting to demonstrate the pose.' },
        ],
        correctAnswerId: 'a',
      },
    ],
  },
  {
    id: 'cueing-2',
    category: 'Cueing Techniques',
    title: 'Breath-led sequencing: “Move on your inhale/exhale.”',
    description: 'Synchronize movement with breath to create a fluid, meditative vinyasa flow.',
    quiz: [
        {
            question: "In a typical Vinyasa flow, which type of movement is paired with an inhale?",
            options: [
                {id: "a", text: "Forward folding or contracting movements."},
                {id: "b", text: "Twisting movements."},
                {id: "c", text: "Upward-moving or expansive movements (e.g., lifting the chest)."},
                {id: "d", text: "Holding the pose still."}
            ],
            correctAnswerId: "c"
        },
        {
            question: "What is the primary purpose of linking breath to movement?",
            options: [
                {id: "a", text: "To make the class more difficult."},
                {id: "b", text: "To create a meditative state and regulate the nervous system."},
                {id: "c", text: "To finish the class faster."},
                {id: "d", text: "To ensure everyone moves at the exact same speed."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Which cue best demonstrates breath-led sequencing?",
            options: [
                {id: "a", text: "'Now go to Downward-Facing Dog.'"},
                {id: "b", text: "'Breathe in, reach your arms high; breathe out, fold forward.'"},
                {id: "c", text: "'Try to keep your legs straight.'"},
                {id: "d", text: "'This pose is called Trikonasana.'"}
            ],
            correctAnswerId: "b"
        },
        {
            question: "When moving from Plank to Chaturanga, you should typically cue students to:",
            options: [
                {id: "a", text: "Inhale"},
                {id: "b", text: "Exhale"},
                {id: "c", text: "Hold the breath"},
                {id: "d", text: "It doesn't matter"}
            ],
            correctAnswerId: "b"
        },
        {
            question: "The term 'Vinyasa' itself translates to:",
            options: [
                {id: "a", text: "'To hold with strength.'"},
                {id: "b", text: "'To place in a special way.'"},
                {id: "c", text: "'To breathe with victory.'"},
                {id: "d", text: "'To stretch the body.'"}
            ],
            correctAnswerId: "b"
        }
    ]
},
  // ADD THE REST OF THE 98 lessons here...
  {
    id: 'ethics-20',
    category: 'Teaching Ethics & Professionalism',
    title: 'Holding space with compassion and neutrality.',
    description: 'Learn to create a supportive environment where students feel seen and accepted without judgment.',
    quiz: [
        {
            question: "What does 'holding space' mean in a yoga class context?",
            options: [
                { id: "a", text: "Saving a specific spot on the floor for a student." },
                { id: "b", text: "Being fully present and supportive without judgment or trying to 'fix' a student's emotional experience." },
                { id: "c", text: "Making sure the room is large enough for everyone." },
                { id: "d", text: "Talking constantly to fill any silence." }
            ],
            correctAnswerId: "b"
        },
        {
            question: "A student starts crying during a hip-opening pose. What is the most neutral and compassionate response?",
            options: [
                { id: "a", text: "Rush over and give them a hug." },
                { id: "b", text: "Announce to the class that emotional releases are normal." },
                { id: "c", text: "Quietly place a box of tissues nearby and give them space, while ensuring they know you are there for support if needed." },
                { id: "d", text: "Tell them to stop crying and focus on the pose." }
            ],
            correctAnswerId: "c"
        },
        {
            question: "Why is neutrality important when holding space?",
            options: [
                { id: "a", text: "It shows you don't care about the student." },
                { id: "b", text: "It allows the student to have their own authentic experience without being influenced by the teacher's reaction or agenda." },
                { id: "c", text: "It's the fastest way to get through an emotional moment." },
                { id: "d", text: "It isn't important; teachers should always share their opinions." }
            ],
            correctAnswerId: "b"
        },
        {
            question: "Which of these is an example of compassionate but non-neutral behavior?",
            options: [
                { id: "a", text: "Saying, 'It's okay to rest in Child's Pose if you need to.'" },
                { id: "b", text: "Saying, 'You shouldn't feel sad, this is a happy class!'" },
                { id: "c", text: "Noticing a student's struggle and offering a modification." },
                { id: "d", text: "Nodding empathetically as a student shares a difficult experience." }
            ],
            correctAnswerId: "b"
        },
        {
            question: "To hold space effectively, a teacher must cultivate their own:",
            options: [
                { id: "a", text: "Ability to do advanced poses." },
                { id: "b", text: "Social media following." },
                { id: "c", text: "Inner stillness, non-judgment, and self-awareness." },
                { id: "d", text: "Network of other yoga teachers." }
            ],
            correctAnswerId: "c"
        }
    ]
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
                value={answers[index] || ''}
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
  
  const lessonCategories = lessons.reduce((acc, lesson) => {
    if (!acc[lesson.category]) {
      acc[lesson.category] = [];
    }
    acc[lesson.category].push(lesson);
    return acc;
  }, {} as Record<string, Lesson[]>);

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

        {Object.entries(lessonCategories).map(([category, lessonsInCategory]) => (
            <div key={category} className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold font-headline mb-6 text-center">{category}</h2>
                <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                    {lessonsInCategory.map((lesson) => (
                        <AccordionItem value={lesson.id} key={lesson.id}>
                            <AccordionTrigger className="text-xl font-headline hover:no-underline text-left">
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
        ))}
      </div>
    </div>
  );
}
