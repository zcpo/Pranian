
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
  // 🧩 A. Cueing Techniques (20 Lessons)
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
          { id: 'b', text: 'The core stabilizes the spine and pelvis, affecting the entire pose.'},
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
  {
    id: 'cueing-3',
    category: 'Cueing Techniques',
    title: 'Layered cueing: foundational → alignment → refinement.',
    description: 'Build a pose progressively, allowing students to integrate each instruction before adding the next.',
    quiz: [
      {
        question: "What is the goal of layered cueing?",
        options: [
          { id: 'a', text: 'To confuse the student with as many cues as possible.' },
          { id: 'b', text: 'To provide instructions in a logical, digestible sequence.' },
          { id: 'c', text: 'To focus only on advanced students.' },
          { id: 'd', text: 'To speed up the class.' },
        ],
        correctAnswerId: 'b',
      },
      {
        question: 'Which of these is a "refinement" cue for Warrior II?',
        options: [
          { id: 'a', text: '"Step your feet wide apart."' },
          { id: 'b', text: '"Bend your front knee so it\'s over your ankle."' },
          { id: 'c', text: '"Soften your shoulders away from your ears."' },
          { id: 'd', text: '"Turn your back foot parallel to the back of the mat."' },
        ],
        correctAnswerId: 'c',
      },
      {
        question: "What is the first layer of cues you should give in any pose?",
        options: [
          { id: 'a', text: 'The drishti (gaze point).' },
          { id: 'b', text: 'How the pose should feel.' },
          { id: 'c', text: 'The name of the pose in Sanskrit.' },
          { id: 'd', text: 'The foundational setup (feet, hands, etc.).' },
        ],
        correctAnswerId: 'd',
      },
      {
        question: "A good alignment cue for Triangle Pose would be:",
        options: [
          { id: 'a', text: '"Feel a deep stretch in your hamstring."' },
          { id: 'b', text: '"Stack your top shoulder over your bottom shoulder."' },
          { id: 'c', text: '"Breathe deeply into your side body."' },
          { id: 'd', text: '"Your front foot points to the top of the mat."' },
        ],
        correctAnswerId: 'b',
      },
      {
        question: "Why is it important to pause between layers of cues?",
        options: [
          { id: 'a', text: 'To allow students time to embody the instruction.' },
          { id: 'b', text: 'To see if anyone is not listening.' },
          { id: 'c', text: 'To take a water break.' },
          { id: 'd', text: 'It is not important; you should cue continuously.' },
        ],
        correctAnswerId: 'a',
      },
    ]
  },
  {
    id: 'cueing-4',
    category: 'Cueing Techniques',
    title: 'Action cues vs. shape cues (what to DO vs. what it LOOKS like).',
    description: 'Focus on the internal actions that create the pose, rather than just the external form.',
    quiz: [
      {
        question: 'Which of the following is an ACTION cue?',
        options: [
          { id: 'a', text: '"Make your body look like a triangle."' },
          { id: 'b', text: '"Press down firmly through your big toe mound."' },
          { id: 'c', text: '"Your arms should be straight."' },
          { id: 'd', text: '"Your leg is at a 90-degree angle."' },
        ],
        correctAnswerId: 'b',
      },
      {
        question: 'Why are action cues often more effective than shape cues?',
        options: [
          { id: 'a', text: 'They are shorter and easier to say.' },
          { id: 'b', text: 'They are better for Instagram photos.' },
          { id: 'c', text: 'They empower students to create the pose from within and are accessible to all body types.' },
          { id: 'd', text: 'They are only for advanced students.' },
        ],
        correctAnswerId: 'c',
      },
      {
        question: 'Which is a SHAPE cue?',
        options: [
          { id: 'a', text: '"Hug your muscles to the bone."' },
          { id: 'b', text: '"Lift your kneecaps to engage your quadriceps."' },
          { id: 'c', text: '"Bring your back leg parallel to the floor."' },
          { id: 'd', text: '"Draw your navel towards your spine."' },
        ],
        correctAnswerId: 'c',
      },
      {
        question: 'Instead of "straighten your front leg," a better action cue would be:',
        options: [
          { id: 'a', text: '"Make your leg look like a ruler."' },
          { id: 'b', text: '"Press through the ball of your front foot and lift your thigh muscle."' },
          { id: 'c', text: '"Lock your knee."' },
          { id: 'd', text: '"Just make it straight."' },
        ],
        correctAnswerId: 'b',
      },
      {
        question: 'When can a shape cue be useful?',
        options: [
          { id: 'a', text: 'Never, they are always bad.' },
          { id: 'b', text: 'When a student is completely new and needs a basic visual idea of the pose.' },
          { id: 'c', text: 'Only in restorative yoga.' },
          { id: 'd', text: 'When you want to correct a student publicly.' },
        ],
        correctAnswerId: 'b',
      },
    ]
  },
  {
    id: 'cueing-5',
    category: 'Cueing Techniques',
    title: 'Anatomical cueing using plain language.',
    description: 'Use clear, simple terms for body parts and actions, avoiding overly technical jargon.',
    quiz: [
      {
        question: 'Instead of "Externally rotate your femur," a better cue is:',
        options: [
          { id: 'a', text: '"Activate your gluteus medius."' },
          { id: 'b', text: '"Wrap your outer hip down and forward."' },
          { id: 'c', text: '"Abduct your femur in the acetabulum."' },
          { id: 'd', text: '"Feel your femoral head spin."' },
        ],
        correctAnswerId: 'b',
      },
      {
        question: 'Why should you generally avoid complex anatomical terms in a public class?',
        options: [
          { id: 'a', text: 'It can be exclusionary and confusing for students.' },
          { id: 'b', text: 'Because you might pronounce them wrong.' },
          { id: 'c', text: 'It makes the teacher sound less intelligent.' },
          { id: 'd', text: 'They are not as accurate as simple terms.' },
        ],
        correctAnswerId: 'a',
      },
      {
        question: 'Which is the clearest cue for scapular movement?',
        options: [
          { id: 'a', text: '"Protract your scapulae."' },
          { id: 'b', text: '"Broaden across your collarbones."' },
          { id: 'c', text: '"Activate your serratus anterior."' },
          { id: 'd', text: '"Slide your shoulder blades away from each other."' },
        ],
        correctAnswerId: 'd',
      },
      {
        question: 'A good plain-language cue for "anterior pelvic tilt" is:',
        options: [
          { id: 'a', text: '"Spill the contents of your pelvic bowl forward."' },
          { id: 'b', text: '"Stick your butt out."' },
          { id: 'c', text: '"Increase the lordotic curve in your lumbar spine."' },
          { id: 'd', text: '"Tip your hip points down toward your thighs."' },
        ],
        correctAnswerId: 'a',
      },
      {
        question: 'When is it appropriate to use more technical anatomical terms?',
        options: [
          { id: 'a', text: 'In a beginner class to establish authority.' },
          { id: 'b', text: 'In a workshop or training specifically focused on anatomy.' },
          { id: 'c', text: 'Whenever you feel like it.' },
          { id: 'd', text: 'Never.' },
        ],
        correctAnswerId: 'b',
      },
    ]
  },
  {
    id: 'cueing-6',
    category: 'Cueing Techniques',
    title: 'Using directional cues (toward/away/lengthen/activate).',
    description: 'Guide students effectively with clear, directional language that creates a sense of movement and energy.',
    quiz: [
      {
        question: 'Which of these is the most effective directional cue?',
        options: [
          { id: 'a', text: '"Your hand is on the floor."' },
          { id: 'b', text: '"Move your hand."' },
          { id: 'c', text: '"Press your hand down into the floor."' },
          { id: 'd', text: '"Think about your hand."' },
        ],
        correctAnswerId: 'c',
      },
      {
        question: 'What is the purpose of using the cue "lengthen"?',
        options: [
          { id: 'a', text: 'To tell someone they are too short.' },
          { id: 'b', text: 'To encourage the creation of space in the body, especially the spine.' },
          { id: 'c', text: 'To make the pose harder.' },
          { id: 'd', text: 'To prepare for a nap.' },
        ],
        correctAnswerId: 'b',
      },
      {
        question: 'Instead of "Lift your arm," a better directional cue would be:',
        options: [
          { id: 'a', text: '"Reach your fingertips up toward the ceiling."' },
          { id: 'b', text: '"Your arm is up."' },
          { id: 'c', text: '"Arm up."' },
          { id: 'd', text: '"Flex your deltoid."' },
        ],
        correctAnswerId: 'a',
      },
      {
        question: 'The cue "Draw your shoulder blades down your back" helps to:',
        options: [
          { id: 'a', text: 'Create tension in the neck.' },
          { id: 'b', text: 'Create space between the ears and shoulders.' },
          { id: 'c', text: 'Make the student look confused.' },
          { id: 'd', text: 'Slouch the back.' },
        ],
        correctAnswerId: 'b',
      },
      {
        question: 'The cue "Activate your core" is less effective than:',
        options: [
          { id: 'a', text: '"Suck your stomach in."' },
          { id: 'b', text: '"Use your abs."' },
          { id: 'c', text: '"Gently draw your navel in and up, toward your spine."' },
          { id: 'd', text: '"Make your core hard."' },
        ],
        correctAnswerId: 'c',
      },
    ]
  },
  {
    id: 'cueing-7',
    category: 'Cueing Techniques',
    title: 'Creating space with cueing (decompression).',
    description: 'Use cues that encourage students to decompress joints and lengthen the spine.',
    quiz: [
      {
        question: 'Which cue helps create space in the spine?',
        options: [
          { id: 'a', text: '"Hunch your back."' },
          { id: 'b', text: '"Imagine a string pulling the crown of your head toward the ceiling."' },
          { id: 'c', text: '"Squeeze everything together."' },
          { id: 'd', text: '"Look down at your toes."' },
        ],
        correctAnswerId: 'b',
      },
      {
        question: 'In a twist, a good decompression cue is:',
        options: [
          { id: 'a', text: '"Crank yourself around as far as possible."' },
          { id: 'b', text: '"Inhale to lengthen your spine, exhale to twist."' },
          { id: 'c', text: '"Just twist."' },
          { id: 'd', text: '"Hold your breath and twist."' },
        ],
        correctAnswerId: 'b',
      },
      {
        question: 'The cue "Press the floor away from you" in Downward Dog helps to:',
        options: [
          { id: 'a', text: 'Create more weight in the hands.' },
          { id: 'b', text: 'Encourage shoulder elevation.' },
          { id: 'c', text: 'Lengthen the arms and decompress the shoulder joints.' },
          { id: 'd', text: 'Bend the elbows.' },
        ],
        correctAnswerId: 'c',
      },
      {
        question: 'Why is creating space important in yoga asana?',
        options: [
          { id: 'a', text: 'It looks more impressive.' },
          { id: 'b', text: 'It prevents joint compression and allows for freer movement.' },
          { id: 'c', text: 'It is a requirement for all advanced poses.' },
          { id: 'd', text: 'It helps you fit into smaller spaces.' },
        ],
        correctAnswerId: 'b',
      },
      {
        question: 'In a forward fold, what cue encourages spinal decompression?',
        options: [
          { id: 'a', text: '"Round your back to touch your toes."' },
          { id: 'b', text: '"Lead with your chest and imagine lengthening your spine as you hinge at the hips."' },
          { id: 'c', text: '"Pull on your feet as hard as you can."' },
          { id: 'd', text: '"Just hang down."' },
        ],
        correctAnswerId: 'b',
      },
    ]
  },
  {
    id: 'cueing-8',
    category: 'Cueing Techniques',
    title: 'Cueing stability before flexibility.',
    description: 'Ensure students are stable and engaged before guiding them deeper into a stretch.',
    quiz: [
      {
        question: 'Why should you cue stability before flexibility?',
        options: [
          { id: 'a', text: 'To protect joints from injury by ensuring supporting muscles are active.' },
          { id: 'b', text: 'To make the class harder and more of a workout.' },
          { id: 'c', text: 'Flexibility is not as important as strength.' },
          { id: 'd', text: 'It is a traditional rule with no modern application.' },
        ],
        correctAnswerId: 'a',
      },
      {
        question: 'In Triangle Pose, which is a good stability cue before cueing the stretch?',
        options: [
          { id: 'a', text: '"Reach down and touch your toes."' },
          { id: 'b', text: '"Press firmly through both feet and engage your leg muscles."' },
          { id: 'c', text: '"Open your chest to the ceiling."' },
          { id: 'd', text: '"Feel the stretch in your side body."' },
        ],
        correctAnswerId: 'b',
      },
      {
        question: 'What is a risk of pushing flexibility without stability?',
        options: [
          { id: 'a', text: 'The student might not get a deep enough stretch.' },
          { id: 'b', text: 'The student might become too flexible.' },
          { id: 'c', text: 'The student could overstretch ligaments and cause joint instability.' },
          { id: 'd', text: 'The class might end too early.' },
        ],
        correctAnswerId: 'c',
      },
      {
        question: 'Before deepening a hamstring stretch in a forward fold, what should a student do?',
        options: [
          { id: 'a', text: 'Round the back more.' },
          { id: 'b', text: 'Hold their breath.' },
          { id: 'c', text: 'Ensure the quadriceps are engaged to support the knee.' },
          { id: 'd', text: 'Bounce to go deeper.' },
        ],
        correctAnswerId: 'c',
      },
      {
        question: '"Engage your core" is a cue for:',
        options: [
          { id: 'a', text: 'Flexibility' },
          { id: 'b', text: 'Breathing' },
          { id: 'c', text: 'Stability' },
          { id: 'd', text: 'Relaxation' },
        ],
        correctAnswerId: 'c',
      },
    ]
  },
  {
    id: 'cueing-9',
    category: 'Cueing Techniques',
    title: 'Cueing for different learning styles (visual, auditory, kinesthetic).',
    description: 'Vary your cueing to include demonstrations, clear verbal instructions, and sensory-based cues.',
    quiz: [
      {
        question: 'Which teaching method appeals primarily to VISUAL learners?',
        options: [
          { id: 'a', text: 'Giving detailed verbal alignment cues.' },
          { id: 'b', text: 'Demonstrating the pose clearly.' },
          { id: 'c', text: 'Using hands-on assists.' },
          { id: 'd', text: 'Describing how the pose should feel.' },
        ],
        correctAnswerId: 'b',
      },
      {
        question: 'A cue like "Feel the weight shifting into your front foot" is best for which type of learner?',
        options: [
          { id: 'a', text: 'Auditory' },
          { id: 'b', text: 'Visual' },
          { id: 'c', text: 'Kinesthetic' },
          { id: 'd', text: 'Olfactory' },
        ],
        correctAnswerId: 'c',
      },
      {
        question: 'To cater to AUDITORY learners, a teacher should focus on:',
        options: [
          { id: 'a', text: 'Having a well-lit studio.' },
          { id: 'b', text: 'Using clear, precise, and descriptive language.' },
          { id: 'c', text: 'Moving around the room and assisting students.' },
          { id: 'd', text: 'Playing loud music.' },
        ],
        correctAnswerId: 'b',
      },
      {
        question: 'Why is it important to use a mix of cueing styles?',
        options: [
          { id: 'a', text: 'To show off your teaching vocabulary.' },
          { id: 'b', text: 'To make the class more entertaining.' },
          { id: 'c', text: 'To ensure every student, regardless of their primary learning style, can understand and benefit.' },
          { id: 'd', text: 'It is not important; one style is sufficient.' },
        ],
        correctAnswerId: 'c',
      },
      {
        question: 'Using a metaphor like "Imagine your spine is a string of pearls" appeals to:',
        options: [
          { id: 'a', text: 'Mostly kinesthetic learners.' },
          { id: 'b', text: 'A combination of visual and auditory learners.' },
          { id: 'c', text: 'Only advanced students.' },
          { id: 'd', text: 'No one, metaphors are confusing.' },
        ],
        correctAnswerId: 'b',
      },
    ]
  },
  {
    id: 'cueing-10',
    category: 'Cueing Techniques',
    title: 'Short vs. long cues—when each works.',
    description: 'Learn the art of concise cueing for flow and detailed instruction for workshops.',
    quiz: [
        {
            question: "In a fast-paced Vinyasa flow, which type of cue is most appropriate?",
            options: [
                {id: "a", text: "Long, detailed anatomical explanations."},
                {id: "b", text: "Short, direct cues linking breath to movement (e.g., 'Inhale, arms up; Exhale, fold')."},
                {id: "c", text: "Asking students philosophical questions."},
                {id: "d", text: "No cues at all."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "When would a longer, more detailed cue be most useful?",
            options: [
                {id: "a", text: "During Savasana."},
                {id: "b", text: "When holding a pose for several breaths to explore alignment."},
                {id: "c", text: "While transitioning quickly between poses."},
                {id: "d", text: "In the middle of a sun salutation."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "What is a potential downside of using too many long cues in a flow class?",
            options: [
                {id: "a", text: "Students might learn too much about anatomy."},
                {id: "b", text: "It can disrupt the meditative rhythm and flow of the practice."},
                {id: "c", text: "The teacher might run out of things to say."},
                {id: "d", text: "Students might get too relaxed."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A short cue is effective because it...",
            options: [
                {id: "a", text: "Requires less knowledge from the teacher."},
                {id: "b", text: "Is easy for students to process quickly during movement."},
                {id: "c", text: "Is less important than a long cue."},
                {id: "d", text: "Allows the teacher to talk more."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "When teaching a new or complex pose for the first time, it's best to use:",
            options: [
                {id: "a", text: "Only short cues to keep it simple."},
                {id: "b", text: "A mix of demonstration and longer, layered cues to ensure safety and understanding."},
                {id: "c", text: "No cues, and let students figure it out."},
                {id: "d", text: "Only Sanskrit terms."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'cueing-11',
    category: 'Cueing Techniques',
    title: 'Sensory cueing — encourage students to feel internally.',
    description: 'Guide students beyond mechanics by inviting them to notice internal sensations.',
    quiz: [
        {
            question: "Which of the following is a sensory cue?",
            options: [
                {id: "a", text: "'Place your right foot forward.'"},
                {id: "b", text: "'Notice the sensation of stretch along the back of your thigh.'"},
                {id: "c", text: "'Your knee should be at a 90-degree angle.'"},
                {id: "d", text: "'This pose is called Virabhadrasana I.'"}
            ],
            correctAnswerId: "b"
        },
        {
            question: "What is the main goal of sensory cueing?",
            options: [
                {id: "a", text: "To make sure the pose looks perfect from the outside."},
                {id: "b", text: "To guide the student's attention inward, fostering mindfulness and interoception."},
                {id: "c", text: "To test the student's knowledge of anatomy."},
                {id: "d", text: "To distract the student from discomfort."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Instead of 'Engage your core,' a sensory cue might be:",
            options: [
                {id: "a", text: "'Tighten your abs.'"},
                {id: "b", text: "'What do you feel in the center of your body as you hold this pose?'"},
                {id: "c", text: "'Activate your rectus abdominis.'"},
                {id: "d", text: "'Your stomach should be flat.'"}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Sensory cues are particularly effective for:",
            options: [
                {id: "a", text: "Making a class more physically challenging."},
                {id: "b", text: "Teaching the philosophical aspects of yoga."},
                {id: "c", text: "Helping students develop a personal and intuitive understanding of their own bodies."},
                {id: "d", text: "Correcting severe misalignment."}
            ],
            correctAnswerId: "c"
        },
        {
            question: "Which cue invites internal exploration?",
            options: [
                {id: "a", text: "'Copy what I'm doing.'"},
                {id: "b", text: "'Your hand goes here.'"},
                {id: "c", text: "'Can you find a sense of both effort and ease in this pose?'"},
                {id: "d", text: "'Don't bend your knee.'"}
            ],
            correctAnswerId: "c"
        }
    ]
  },
  {
    id: 'cueing-12',
    category: 'Cueing Techniques',
    title: 'Avoiding fear-based cueing (positive cues).',
    description: 'Use invitational and encouraging language instead of negative or restrictive commands.',
    quiz: [
        {
            question: "Which cue is an example of FEAR-BASED language?",
            options: [
                {id: "a", text: "'Be careful not to hurt your back here.'"},
                {id: "b", text: "'Engage your core to support your lower back.'"},
                {id: "c", text: "'Listen to your body.'"},
                {id: "d", text: "'Find a comfortable position.'"}
            ],
            correctAnswerId: "a"
        },
        {
            question: "How can you rephrase 'Don't let your knee collapse inward' positively?",
            options: [
                {id: "a", text: "'Your knee is collapsing, fix it.'"},
                {id: "b", text: "'Stop doing that with your knee.'"},
                {id: "c", text: "'Guide your knee to track in the same direction as your middle toe.'"},
                {id: "d", text: "'You'll injure yourself if your knee collapses.'"}
            ],
            correctAnswerId: "c"
        },
        {
            question: "Why is it better to use positive cueing?",
            options: [
                {id: "a", text: "It's not better; fear is a good motivator."},
                {id: "b", text: "It creates a safer, more empowering, and less judgmental environment for students."},
                {id: "c", text: "It makes the teacher seem nicer."},
                {id: "d", text: "It is required by yoga law."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Instead of saying 'Don't round your back,' a better cue is:",
            options: [
                {id: "a", text: "'Your back is too round.'"},
                {id: "b", text: "'Lengthen through your spine, from your tailbone to the crown of your head.'"},
                {id: "c", text: "'No, not like that.'"},
                {id: "d", text: "'You risk a slipped disc if you round your back.'"}
            ],
            correctAnswerId: "b"
        },
        {
            question: "What effect can fear-based cueing have on a student's nervous system?",
            options: [
                {id: "a", text: "It promotes relaxation and calm."},
                {id: "b", text: "It can trigger a subtle stress or anxiety response, which is counterproductive to the goals of yoga."},
                {id: "c", text: "It has no effect on the nervous system."},
                {id: "d", text: "It makes them stronger."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'cueing-13',
    category: 'Cueing Techniques',
    title: 'Cueing transitions smoothly between poses.',
    description: 'Make the space between the poses as mindful as the poses themselves.',
    quiz: [
        {
            question: "Why is it important to cue transitions?",
            options: [
                {id: "a", text: "To give students a break."},
                {id: "b", text: "To maintain the flow and meditative quality of the practice, and to ensure safety."},
                {id: "c", text: "To show off a complex sequence."},
                {id: "d", text: "It's not important; just call out the next pose."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Which cue helps a transition from Downward Dog to a lunge?",
            options: [
                {id: "a", text: "'Now, lunge.'"},
                {id: "b", text: "'Get your foot to the front.'"},
                {id: "c", text: "'On your next inhale, lift your right leg high. Exhale, step your foot between your hands.'"},
                {id: "d", text: "'Hurry up and get to the lunge pose.'"}
            ],
            correctAnswerId: "c"
        },
        {
            question: "What does 'linking breath to movement' mean in transitions?",
            options: [
                {id: "a", text: "Holding your breath while moving."},
                {id: "b", text: "Assigning an inhale or an exhale to each part of the movement."},
                {id: "c", text: "Breathing as fast as you can."},
                {id: "d", text: "Only breathing in the poses, not between them."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A cue for transitioning from Warrior II to Triangle Pose might be:",
            options: [
                {id: "a", text: "'Straighten your front leg, then do Triangle.'"},
                {id: "b", text: "'Inhale, straighten your front leg. Exhale, hinge at your hip and reach forward.'"},
                {id: "c", text: "'Next is Triangle pose.'"},
                {id: "d", text: "'Stop Warrior II now.'"}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Smooth transitions help to prevent what?",
            options: [
                {id: "a", text: "Students from getting bored."},
                {id: "b", text: "The class from running over time."},
                {id: "c", text: "The teacher from forgetting the sequence."},
                {id: "d", text: "Jerky movements that could lead to injury."}
            ],
            correctAnswerId: "d"
        }
    ]
  },
  {
    id: 'cueing-14',
    category: 'Cueing Techniques',
    title: 'Using cues that match your class theme.',
    description: 'Weave your theme into your cues to create a cohesive and meaningful experience.',
    quiz: [
        {
            question: "If your class theme is 'grounding,' which cue would be most appropriate?",
            options: [
                {id: "a", text: "'Feel light and airy.'"},
                {id: "b", text: "'Notice the connection between your feet and the earth beneath you.'"},
                {id: "c", text: "'Float to the top of your mat.'"},
                {id: "d", text: "'Jump as high as you can.'"}
            ],
            correctAnswerId: "b"
        },
        {
            question: "For a 'heart-opening' theme, a good cue in Cobra pose would be:",
            options: [
                {id: "a", text: "'Lift your chest.'"},
                {id: "b", text: "'Shine your heart forward and imagine broadening across your collarbones.'"},
                {id: "c", text: "'Use your back strength.'"},
                {id: "d", text: "'Don't lift too high.'"}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Why should you integrate a theme into your cues?",
            options: [
                {id: "a", text: "It makes the class sound more poetic and impressive."},
                {id: "b", text: "It provides a mental and emotional focus that elevates the practice beyond a physical workout."},
                {id: "c", text: "It's required for all certified yoga teachers."},
                {id: "d", text: "It helps students remember the pose names."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "If the theme is 'balance,' a cue in Tree Pose could be:",
            options: [
                {id: "a", text: "'Don't fall over.'"},
                {id: "b", text: "'Find a fixed point to gaze at, and notice the subtle shifts as your body maintains its stability.'"},
                {id: "c", text: "'Just balance on one leg.'"},
                {id: "d", text: "'This is a hard pose.'"}
            ],
            correctAnswerId: "b"
        },
        {
            question: "How often should you mention the theme during a class?",
            options: [
                {id: "a", text: "Only at the very beginning and very end."},
                {id: "b", text: "Before every single pose."},
                {id: "c", text: "Weave it in gently and periodically where it feels natural and relevant."},
                {id: "d", text: "Constantly, so no one forgets it."}
            ],
            correctAnswerId: "c"
        }
    ]
  },
  {
    id: 'cueing-15',
    category: 'Cueing Techniques',
    title: 'Breath cueing to regulate intensity.',
    description: 'Use the breath as a tool to help students ramp up or calm down the energy of their practice.',
    quiz: [
        {
            question: "To increase energy and heat in a class, what kind of breath would you cue?",
            options: [
                {id: "a", text: "Slow, deep belly breaths."},
                {id: "b", text: "Holding the breath."},
                {id: "c", text: "A more vigorous Ujjayi breath or Kapalabhati."},
                {id: "d", text: "Normal, shallow breathing."}
            ],
            correctAnswerId: "c"
        },
        {
            question: "What cue would help a student calm their nervous system?",
            options: [
                {id: "a", text: "'Breathe faster!'"},
                {id: "b", text: "'Try to make your exhale slightly longer than your inhale.'"},
                {id: "c", text: "'See if you can hold your breath for 30 seconds.'"},
                {id: "d", text: "'Shorten your breath.'"}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Why is a longer exhale associated with relaxation?",
            options: [
                {id: "a", text: "It stimulates the sympathetic nervous system (fight-or-flight)."},
                {id: "b", text: "It's just a myth."},
                {id: "c", text: "It stimulates the parasympathetic nervous system (rest-and-digest)."},
                {id: "d", text: "It increases your heart rate."}
            ],
            correctAnswerId: "c"
        },
        {
            question: "If you notice students are struggling or out of breath, what is a good cue?",
            options: [
                {id: "a", text: "'Keep pushing through! No pain, no gain.'"},
                {id: "b", text: "'If you've lost the rhythm of your breath, take a moment in Child's Pose to reconnect.'"},
                {id: "c", text: "'Everyone else is keeping up, so you should too.'"},
                {id: "d", text: "'Just hold your breath and wait for the next pose.'"}
            ],
            correctAnswerId: "b"
        },
        {
            question: "In a challenging peak pose, reminding students to 'keep breathing' helps to:",
            options: [
                {id: "a", text: "Make the pose even harder."},
                {id: "b", text: "Prevent them from holding their breath, which creates tension and can increase blood pressure."},
                {id: "c", text: "Distract them from the difficulty."},
                {id: "d", text: "Make them laugh."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'cueing-16',
    category: 'Cueing Techniques',
    title: 'Cueing beginners vs advanced students simultaneously.',
    description: 'Offer layered cues and modifications so everyone feels challenged and supported.',
    quiz: [
        {
            question: "What is the best way to offer a modification for beginners?",
            options: [
                {id: "a", text: "Point them out and correct them individually in front of everyone."},
                {id: "b", text: "Offer the modification as a valid and intelligent option for everyone, not just for beginners."},
                {id: "c", text: "Tell them to just watch."},
                {id: "d", text: "Ignore them and focus on the advanced students."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "How can you challenge advanced students in a mixed-level class?",
            options: [
                {id: "a", text: "Encourage them to do a completely different pose."},
                {id: "b", text: "Offer a more complex variation or a deeper expression of the pose AFTER giving the foundational cues."},
                {id: "c", text: "Tell them the class is too easy for them."},
                {id: "d", text: "Praise them for being better than the beginners."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A good way to phrase an optional advanced variation is:",
            options: [
                {id: "a", text: "'Only the advanced people should try this.'"},
                {id: "b", text: "'The real pose is this next part... '"},
                {id: "c", text: "'If it's in your practice, you might explore the full bind here.'"},
                {id: "d", text: "'If you can't do this, you're a beginner.'"}
            ],
            correctAnswerId: "c"
        },
        {
            question: "When teaching a mixed-level class, your primary cues should be directed towards:",
            options: [
                {id: "a", text: "The most advanced student in the room."},
                {id: "b", text: "The safest, most accessible version of the pose."},
                {id: "c", text: "The students in the front row."},
                {id: "d", text: "The philosophical theme only."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "What is a key benefit of teaching mixed-level classes effectively?",
            options: [
                {id: "a", text: "It's easier for the teacher."},
                {id: "b", text: "It creates a sense of competition."},
                {id: "c", text: "It fosters a non-judgmental community where everyone can practice together."},
                {id: "d", text: "It allows the teacher to show off all the poses they know."}
            ],
            correctAnswerId: "c"
        }
    ]
  },
  {
    id: 'cueing-17',
    category: 'Cueing Techniques',
    title: 'Predictive cueing (“prepare for…”) for safe transitions.',
    description: 'Give students a heads-up about what is coming next so they can move with more awareness.',
    quiz: [
        {
            question: "What is predictive cueing?",
            options: [
                {id: "a", text: "Guessing what a student is thinking."},
                {id: "b", text: "Telling students what the next pose or transition will be before they do it."},
                {id: "c", text: "Only teaching poses students already know."},
                {id: "d", text: "Predicting the future."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Which of these is a predictive cue?",
            options: [
                {id: "a", text: "'You are in Warrior II.'"},
                {id: "b", text: "'On your next exhale, we will cartwheel our hands down to the mat.'"},
                {id: "c", text: "'This feels good.'"},
                {id: "d", text: "'I like this pose.'"}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Why is predictive cueing important for safety?",
            options: [
                {id: "a", text: "It gives students time to mentally and physically prepare, reducing jerky, reactive movements."},
                {id: "b", text: "It makes the teacher sound more professional."},
                {id: "c", text: "It speeds up the class."},
                {id: "d", text: "It is not important for safety."}
            ],
            correctAnswerId: "a"
        },
        {
            question: "When moving from a lunge to Warrior III, a good predictive cue would be:",
            options: [
                {id: "a", text: "'Okay, now balance on one leg.'"},
                {id: "b", text: "'Find your focus. On your next inhale, begin to shift your weight into your front foot, preparing to lift off.'"},
                {id: "c", text: "'Warrior III, go!'"},
                {id: "d", text: "'Don't fall.'"}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Predictive cueing is especially helpful before which types of movements?",
            options: [
                {id: "a", text: "Lying down for Savasana."},
                {id: "b", text: "Complex transitions, balancing poses, or quick movements."},
                {id: "c", text: "Holding a pose for a long time."},
                {id: "d", text: "Simple stretches."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'cueing-18',
    category: 'Cueing Techniques',
    title: 'Using silence strategically between cues.',
    description: 'Learn that the space between cues is as important as the cues themselves.',
    quiz: [
        {
            question: "What is the purpose of using silence in a yoga class?",
            options: [
                {id: "a", text: "The teacher forgot what to say next."},
                {id: "b", text: "To give students space to have their own internal experience and feel the effects of the pose."},
                {id: "c", text: "To make the class more awkward."},
                {id: "d", text: "To check if students are still awake."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "When is a good time to be silent?",
            options: [
                {id: "a", text: "During a fast-paced, complex Vinyasa sequence."},
                {id: "b", text: "While students are holding a pose for several breaths."},
                {id: "c", text: "While a student is struggling and needs help."},
                {id: "d", text: "Never, the teacher should always be talking."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "What can 'over-cueing' lead to?",
            options: [
                {id: "a", text: "Students becoming too reliant on the teacher and not learning to listen to their own bodies."},
                {id: "b", text: "Students learning more about anatomy."},
                {id: "c", text: "A more relaxing experience."},
                {id: "d", text: "A perfectly aligned class."}
            ],
            correctAnswerId: "a"
        },
        {
            question: "How does silence support the meditative aspect of yoga?",
            options: [
                {id: "a", text: "It doesn't; meditation requires constant guidance."},
                {id: "b", text: "It allows the mind to quiet down and focus on the breath and body sensations."},
                {id: "c", text: "It makes the class feel longer."},
                {id: "d", text: "It's a modern trend that has no traditional basis."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A teacher who is comfortable with silence often appears more:",
            options: [
                {id: "a", text: "Nervous and unprepared."},
                {id: "b", text: 'Confident, grounded, and able to hold space.'},
                {id: "c", text: "Bored and disengaged."},
                {id: "d", text: "Dominant and intimidating."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'cueing-19',
    category: 'Cueing Techniques',
    title: 'Cueing for trauma-sensitive spaces.',
    description: 'Use invitational language and avoid commanding tones to create a safe environment.',
    quiz: [
        {
            question: "What is a key principle of trauma-sensitive yoga cueing?",
            options: [
                {id: "a", text: "Using a loud, commanding voice to ensure compliance."},
                {id: "b", text: "Using invitational language that offers choices and empowers the student."},
                {id: "c", text: "Making sure everyone does the pose perfectly."},
                {id: "d", text: "Pushing students to their physical limits."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Which cue is most trauma-informed?",
            options: [
                {id: "a", text: "'You must close your eyes now.'"},
                {id: "b", text: "'If you feel comfortable, you might soften your gaze or close your eyes.'"},
                {id: "c", text: "'Close your eyes, everyone!'"},
                {id: "d", text: "'Why aren't your eyes closed?'"}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Why should a teacher avoid making assumptions about a student's experience?",
            options: [
                {id: "a", text: "It's not polite."},
                {id: "b", text: "Trauma is not visible, and a teacher cannot know what might be triggering for a student."},
                {id: "c", text: "It slows down the class."},
                {id: "d", text: "Students prefer to remain mysterious."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Instead of 'Feel the stretch in your hips,' a trauma-sensitive alternative might be:",
            options: [
                {id: "a", text: "'This should feel intense.'"},
                {id: "b", text: "'Your hips are too tight.'"},
                {id: "c", text: "'Notice what sensations arise in this shape.'"},
                {id: "d", text: "'Push deeper into your hips.'"}
            ],
            correctAnswerId: "c"
        },
        {
            question: "What is the goal of trauma-sensitive cueing?",
            options: [
                {id: "a", text: "To avoid all difficult poses."},
                {id: "b", text: "To create an environment where students feel safe, in control of their own bodies, and can practice interoception."},
                {id: "c", text: "To act as a therapist for students."},
                {id: "d", text: "To make the class easier for everyone."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'cueing-20',
    category: 'Cueing Techniques',
    title: 'Avoiding over-cueing (letting students explore).',
    description: 'Strike a balance between providing guidance and allowing for personal discovery.',
    quiz: [
        {
            question: "What is 'over-cueing'?",
            options: [
                {id: "a", text: "Giving too few instructions."},
                {id: "b", text: "Talking nonstop and filling every moment with instruction."},
                {id: "c", text: "Using cues that are too loud."},
                {id: "d", text: "Demonstrating the poses too much."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Why is it important to let students explore a pose?",
            options: [
                {id: "a", text: "So the teacher can take a break."},
                {id: "b", text: "It encourages them to develop their own body awareness and find what feels right for them."},
                {id: "c", text: "Because there is only one right way to do a pose."},
                {id: "d", text: "To see who is the most flexible."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A sign that you might be over-cueing is when:",
            options: [
                {id: "a", text: "The room is completely silent."},
                {id: "b", text: "A student asks a question."},
                {id: "c", text: "You feel breathless from talking so much."},
                {id: "d", text: "A student smiles."}
            ],
            correctAnswerId: "c"
        },
        {
            question: "After setting up a pose with foundational cues, what is a good next step?",
            options: [
                {id: "a", text: "Immediately move to the next pose."},
                {id: "b", text: "Give 10 more alignment cues as quickly as possible."},
                {id: "c", text: "Offer a moment of silence for students to breathe and feel the pose."},
                {id: "d", text: "Tell a long story."}
            ],
            correctAnswerId: "c"
        },
        {
            question: "The ultimate goal of yoga is self-realization. How does avoiding over-cueing support this?",
            options: [
                {id: "a", text: "It doesn't."},
                {id: "b", text: "It makes the class more physically challenging."},
                {id: "c", text: "It shifts the focus from the teacher being the authority to the student being their own best teacher."},
                {id: "d", text: "It confuses the student."}
            ],
            correctAnswerId: "c"
        }
    ]
  },
  // 👐 B. Hands-On Assists (20 Lessons)
  {
    id: 'assists-1',
    category: 'Hands-On Assists',
    title: 'Consent protocols—verbal, card system, or opt-in.',
    description: 'Learn how to create a safe and respectful environment by establishing clear consent for hands-on assists.',
    quiz: [
      {
        question: 'What is the most important reason for establishing consent before giving assists?',
        options: [
          { id: 'a', text: 'To avoid lawsuits.' },
          { id: 'b', text: 'To respect student autonomy and create a safe, trauma-informed space.' },
          { id: 'c', text: 'To make sure the student is ready for the assist.' },
          { id: 'd', text: 'To show you are a professional teacher.' },
        ],
        correctAnswerId: 'b',
      },
      {
        question: 'Which of the following is an example of a clear, verbal consent protocol?',
        options: [
          { id: 'a', text: "I'll be assisting today, so let me know if you don't want it." },
          { id: 'b', text: '"If you are open to receiving hands-on assists today, please give me a clear thumbs up."' },
          { id: 'c', text: 'Assuming students are okay with assists unless they say something.' },
          { id: 'd', text: '"Is everyone cool with assists?"' },
        ],
        correctAnswerId: 'b',
      },
      {
        question: 'What is a "consent card" system?',
        options: [
          { id: 'a', text: 'A card students sign at the beginning of class.' },
          { id: 'b', text: 'A business card you give to students.' },
          { id: 'c', text: 'A small, double-sided card (e.g., Yes/No) that students can place on their mat and flip at any time.' },
          { id: 'd', text: 'A system for tracking who has consented online.' },
        ],
        correctAnswerId: 'c',
      },
      {
        question: 'If a student non-verbally flinches or tenses up when you approach, what should you do?',
        options: [
          { id: 'a', text: 'Proceed with the assist gently.' },
          { id: 'b', text: 'Immediately and slowly back off the assist.' },
          { id: 'c', text: 'Push a little harder to help them through the block.' },
          { id: 'd', text: 'Ignore it, as discomfort is part of yoga.' },
        ],
        correctAnswerId: 'b',
      },
      {
        question: 'Consent is a continuous process. What does this mean?',
        options: [
          { id: 'a', text: 'Once a student consents, they have consented for all future classes.' },
          { id: 'b', text: 'You only need to ask for consent at the start of class.' },
          { id: 'c', text: 'A student can withdraw their consent at any time, for any reason, even mid-assist.' },
          { id: 'd', text: 'It means you must ask for consent before every single pose.' },
        ],
        correctAnswerId: 'c',
      },
    ]
  },
  {
    id: 'assists-2',
    category: 'Hands-On Assists',
    title: 'Stabilizing assists (prevent collapse).',
    description: 'Learn how to provide supportive touch that helps students find stability and prevent joint collapse.',
    quiz: [
        {
            question: "What is the primary goal of a stabilizing assist?",
            options: [
                {id: "a", text: "To push a student deeper into a pose."},
                {id: "b", text: "To help a student maintain balance and prevent them from collapsing in a direction of weakness."},
                {id: "c", text: "To stretch the student's muscles for them."},
                {id: "d", text: "To show the student how strong you are."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "In Warrior II, where might you provide a stabilizing assist if a student's front knee is collapsing inward?",
            options: [
                {id: "a", text: "Pushing their back hip forward."},
                {id: "b", text: "Gently placing your hand on the outside of their front knee to guide it outward."},
                {id: "c", text: "Pulling their arms wider apart."},
                {id: "d", text: "Tapping their back foot."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A stabilizing assist should feel like:",
            options: [
                {id: "a", text: "A forceful push."},
                {id: "b", text: "A gentle reminder or a 'wall' for the student to press against."},
                {id: "c", text: "A deep tissue massage."},
                {id: "d", text: "A light tickle."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "In Triangle Pose, a stabilizing assist could involve:",
            options: [
                {id: "a", text: "Pulling the top arm to open the chest more."},
                {id: "b", text: "Providing light support at the student's hip to help them engage their core and prevent 'sinking'."},
                {id: "c", text: "Forcing their front leg to be perfectly straight."},
                {id: "d", text: "Adjusting their gaze."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Before giving a stabilizing assist, it's important to:",
            options: [
                {id: "a", text: "Make sure you have had a good workout."},
                {id: "b", text: "Be grounded and stable in your own body (e.g., in a wide stance)."},
                {id: "c", text: "Tell the student what they are doing wrong."},
                {id: "d", text: "Ask them to hold their breath."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'assists-3',
    category: 'Hands-On Assists',
    title: 'Lengthening assists (traction/elongation).',
    description: 'Understand how to use gentle traction to help students create space and decompress joints.',
    quiz: [
        {
            question: "What is the primary goal of a lengthening assist?",
            options: [
                {id: "a", text: "To make the student's limbs longer permanently."},
                {id: "b", text: "To help the student create a sense of space in their joints and along their spine."},
                {id: "c", text: "To test the student's flexibility limit."},
                {id: "d", text: "To crack the student's back."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "In a seated forward fold (Paschimottanasana), a safe lengthening assist involves:",
            options: [
                {id: "a", text: "Pushing down hard on the student's back."},
                {id: "b", text: "Placing hands on their lower back and gently guiding the tissue away from the sacrum as they hinge forward."},
                {id: "c", text: "Pulling their hands to touch their toes."},
                {id: "d", text: "Telling them to round their spine more."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A lengthening assist should always be applied:",
            options: [
                {id: "a", text: "As forcefully as possible."},
                {id: "b", text: "While the student is holding their breath."},
                {id: "c", text: "In sync with the student's exhale, as they naturally release deeper."},
                {id: "d", text: "In sync with the student's inhale, to create more tension."}
            ],
            correctAnswerId: "c"
        },
        {
            question: "In Downward-Facing Dog, a common lengthening assist is:",
            options: [
                {id: "a", text: "Pressing down on their head."},
                {id: "b", text: "Using a strap to gently apply traction to the hips, pulling them up and back."},
                {id: "c", text: "Pushing their heels to the floor."},
                {id: "d", text: "Lifting one of their legs for them."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "What is a key principle of 'traction' in assists?",
            options: [
                {id: "a", text: "It should only be done by chiropractors."},
                {id: "b", text: "It involves a gentle, sustained pull to create space, never a sharp or jarring movement."},
                {id: "c", text: "It is a type of aggressive stretching."},
                {id: "d", text: "It's the same as a stabilizing assist."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'assists-4',
    category: 'Hands-On Assists',
    title: 'Strength-activation assists.',
    description: 'Learn to use touch to help students feel and activate specific muscles.',
    quiz: [
        {
            question: "What is the goal of a strength-activation assist?",
            options: [
                {id: "a", text: "To do the work for the student."},
                {id: "b", text: "To provide tactile feedback that helps a student find and engage a specific muscle."},
                {id: "c", text: "To show how strong the teacher is."},
                {id: "d", text: "To deeply stretch the muscle."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "In plank pose, where could you provide a strength-activation assist for the core?",
            options: [
                {id: "a", text: "By lifting the student's hips into the air."},
                {id: "b", text: "By lightly tapping their abdomen and cueing them to draw their navel to their spine."},
                {id: "c", text: "By pressing down on their back."},
                {id: "d", text: "By shaking their legs."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A good cue to pair with an activation assist is:",
            options: [
                {id: "a", text: "'Just relax into it.'"},
                {id: "b", text: "'Can you feel this muscle working?'"},
                {id: "c", text: "'Press into my hand.' or 'Activate this area.'"},
                {id: "d", text: "'You are doing it wrong.'"}
            ],
            correctAnswerId: "c"
        },
        {
            question: "For activating the glutes in Bridge Pose, an assist could be:",
            options: [
                {id: "a", text: "Lifting the student's hips higher for them."},
                {id: "b", text: "Placing a hand on each side of their pelvis to stabilize."},
                {id: "c", text: "Lightly tapping the outer glutes to encourage engagement."},
                {id: "d", text: "Pushing their knees together."}
            ],
            correctAnswerId: "c"
        },
        {
            question: "Strength-activation assists are a form of:",
            options: [
                {id: "a", text: "Proprioceptive Neuromuscular Facilitation (PNF)."},
                {id: "b", text: "Deep tissue massage."},
                {id: "c", text: "Tactile cueing."},
                {id: "d", text: "Hypnosis."}
            ],
            correctAnswerId: "c"
        }
    ]
  },
  {
    id: 'assists-5',
    category: 'Hands-On Assists',
    title: 'Breath-based assists synchronized with student inhalation/exhalation.',
    description: 'Time your assists with the student\'s breath to work with their body, not against it.',
    quiz: [
        {
            question: "When should you typically apply an assist to help a student go deeper into a pose (like a forward fold or twist)?",
            options: [
                {id: "a", text: "On their inhale."},
                {id: "b", text: "On their exhale."},
                {id: "c", text: "While they are holding their breath."},
                {id: "d", text: "It does not matter."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Why is assisting on the exhale effective for deepening a stretch?",
            options: [
                {id: "a", text: "The body naturally tenses on the exhale."},
                {id: "b", text: "The body and nervous system are naturally more relaxed and releasing on the exhale."},
                {id: "c", text: "The student is distracted and won't notice the assist."},
                {id: "d", text: "It's a tradition with no scientific basis."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "An assist to help a student lengthen their spine should be timed with their:",
            options: [
                {id: "a", text: "Inhale, which is associated with expansion and lifting."},
                {id: "b", text: "Exhale, which is associated with grounding."},
                {id: "c", text: "Sneeze."},
                {id: "d", text: "The moment they are most tired."}
            ],
            correctAnswerId: "a"
        },
        {
            question: "Before applying a breath-based assist, what should you do first?",
            options: [
                {id: "a", text: "Tell the student to stop breathing."},
                {id: "b", text: "Quietly observe the student's natural breathing rhythm for a few cycles."},
                {id: "c", text: "Ask them to breathe as fast as possible."},
                {id: "d", text: "Assume their breath is the same as yours."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "What is a major benefit of synchronizing assists with breath?",
            options: [
                {id: "a", text: "It allows the teacher to control the student's body."},
                {id: "b", text: "It feels like a collaboration and respects the student's natural bodily rhythms."},
                {id: "c", text: "It makes the assist more powerful and forceful."},
                {id: "d", text: "It speeds up the class."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'ethics-20',
    category: 'Teaching Ethics & Professionalism',
    title: 'Holding space with compassion and neutrality.',
    description: 'Learn to create a supportive container for student experiences without judgment or taking on their emotions.',
    quiz: [
        {
            question: "What does 'holding space' mean in a yoga context?",
            options: [
                {id: "a", text: "Booking the studio for a class."},
                {id: "b", text: "Creating a safe, non-judgmental environment where students can have their own authentic experience."},
                {id: "c", text: "Telling students what they should be feeling."},
                {id: "d", text: "Filling every moment with talking and instruction."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Why is neutrality important when holding space?",
            options: [
                {id: "a", text: "It shows you don't care about your students."},
                {id: "b", text: "It prevents you from becoming a therapist and allows students to process their own emotions without your agenda."},
                {id: "c", text: "It is a way to remain detached and aloof."},
                {id: "d", text: "It's not important; you should share your opinions freely."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "If a student starts crying in Savasana, what is the most appropriate response?",
            options: [
                {id: "a", text: "Rush over and ask them what's wrong in front of everyone."},
                {id: "b", text: "Ignore them completely as to not embarrass them."},
                {id: "c", text: "Quietly place a box of tissues near their mat without making a scene, and be available to speak with them after class if they wish."},
                {id: "d", text: "End the Savasana early so they can compose themselves."}
            ],
            correctAnswerId: "c"
        },
        {
            question: "Compassion in holding space means:",
            options: [
                {id: "a", text: "Feeling sorry for your students."},
                {id: "b", text: "Trying to fix your students' problems."},
                {id: "c", text: "Offering your presence and support with kindness, while honoring their autonomy."},
                {id: "d", text: "Giving everyone a hug."}
            ],
            correctAnswerId: "c"
        },
        {
            question: "How can a teacher's own self-practice help in holding space for others?",
            options: [
                {id: "a", text: "It makes them more flexible and able to demo advanced poses."},
                {id: "b", text: "It helps the teacher become more comfortable with their own inner landscape, making them less reactive to students' experiences."},
                {id: "c", text: "It doesn't; teaching and practicing are completely separate."},
                {id: "d", text: "It gives them more stories to tell in class."}
            ],
            correctAnswerId: "b"
        }
    ]
  }
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

  const categoryHeadings = {
    'Cueing Techniques': '🧩 A. Cueing Techniques',
    'Hands-On Assists': '👐 B. Hands-On Assists',
    'Class Themes': '🎨 C. Class Themes',
    'Safety Guidelines': '⚕️ D. Safety Guidelines',
    'Teaching Ethics & Professionalism': '🌱 E. Teaching Ethics & Professionalism',
  }

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
                <h2 className="text-2xl md:text-3xl font-bold font-headline mb-6 text-center">{categoryHeadings[category as keyof typeof categoryHeadings] || category}</h2>
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
