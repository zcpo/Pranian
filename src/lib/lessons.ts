
export type QuizOption = {
  id: string;
  text: string;
};

export type QuizQuestion = {
  question: string;
  options: QuizOption[];
  correctAnswerId: string;
};

export type Lesson = {
    id: string;
    category: string;
    title: string;
    description: string;
    quiz: QuizQuestion[];
}

export const lessons: Lesson[] = [
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
          { id: 'b', text: "The core stabilizes the spine and pelvis, affecting the entire pose."},
          { id: 'c', text: "It's not part of the foundation." },
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
          { id: 'b', text: '"Bend your front knee so it is over your ankle."' },
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
            question: "How can you rephrase 'Don\\'t let your knee collapse inward' positively?",
            options: [
                {id: "a", text: "'Your knee is collapsing, fix it.'"},
                {id: "b", text: "'Stop doing that with your knee.'"},
                {id: "c", text: "'Guide your knee to track in the same direction as your middle toe.'"},
                {id: "d", text: "'You\\'ll injure yourself if your knee collapses.'"}
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
            question: "Instead of saying 'Don\\'t round your back,' a better cue is:",
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
          { id: 'a', text: "I\\'ll be assisting today, so let me know if you don\\'t want it." },
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
          { id: "b", text: "A business card you give to students." },
          { id: 'c', text: 'A small, double-sided card (e.g., Yes/No) that students can place on their mat and flip at any time.' },
          { id: 'd', text: 'A system for tracking who has consented online.' },
        ],
        correctAnswerId: 'c',
      },
      {
        question: 'If a student non-verbally flinches or tenses up when you approach, what should you do?',
        options: [
          { id: 'a', text: 'Tell them to breathe through it.' },
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
    description: 'Time your assists with the student\\'s breath to work with their body, not against it.',
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
    id: 'assists-6',
    category: 'Hands-On Assists',
    title: 'Common assists in downward dog.',
    description: 'Learn effective and safe ways to assist students in Adho Mukha Svanasana.',
    quiz: [
        {
            question: "A common assist in Downward Dog is to apply gentle pressure to the student's sacrum to:",
            options: [
                {id: "a", text: "Push their heels to the floor."},
                {id: "b", text: "Encourage them to lengthen their spine and send their hips up and back."},
                {id: "c", text: "Make them bend their knees more."},
                {id: "d", text: "Round their upper back."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "If a student has tight shoulders in Downward Dog, a helpful assist is to:",
            options: [
                {id: "a", text: "Press their head down between their arms."},
                {id: "b", text: "Gently guide their outer upper arms to externally rotate, creating space for the neck."},
                {id: "c", text: "Pull their hands closer to their feet."},
                {id: "d", text: "Tell them to shrug their shoulders to their ears."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "What should a teacher AVOID doing when assisting Downward Dog?",
            options: [
                {id: "a", text: "Communicating with the student."},
                {id: "b", text: "Applying heavy, downward pressure on the thoracic spine (mid-back)."},
                {id: "c", text: "Using a strap for traction."},
                {id: "d", text: "Observing their breath."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "An assist for a student with tight hamstrings in Downward Dog could be:",
            options: [
                {id: "a", text: "Forcing their legs straight."},
                {id: "b", text: "Gently tapping the backs of their knees to remind them to bend them."},
                {id: "c", text: "Pushing their heels down to the mat."},
                {id: "d", text: "Ignoring them."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Where should the teacher stand to safely assist a student in Downward Dog?",
            options: [
                {id: "a", text: "Directly in front of the student."},
                {id: "b", text: "Behind the student, in a stable stance like a lunge or squat."},
                {id: "c", text: "As far away as possible."},
                {id: "d", text: "Sitting on the student's back."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'assists-7',
    category: 'Hands-On Assists',
    title: 'Safe assists in warrior poses.',
    description: 'Learn to assist Warrior I, II, and III with stability and alignment in mind.',
    quiz: [
        {
            question: "In Warrior II, what is a common misalignment that can be assisted?",
            options: [
                {id: "a", text: "The front knee collapsing inward."},
                {id: "b", text: "The back arm being too low."},
                {id: "c", text: "The gaze being in the wrong direction."},
                {id: "d", text: "The fingers not being spread wide enough."}
            ],
            correctAnswerId: "a"
        },
        {
            question: "A safe assist for deepening the lunge in Warrior I is:",
            options: [
                {id: "a", text: "Pushing on the student's front knee."},
                {id: "b", text: "Applying gentle, downward pressure on the front of the back hip/thigh."},
                {id: "c", text: "Pulling their arms further back."},
                {id: "d", text: "Stepping on their back foot."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "When assisting Warrior III, the primary focus should be on:",
            options: [
                {id: "a", text: "Getting the back leg as high as possible."},
                {id: "b", text: "Providing stability, often by offering your hand or shoulder for balance."},
                {id: "c", text: "Squaring the hips perfectly to the floor."},
                {id: "d", text: "Making sure the arms are perfectly straight."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "To assist with torso alignment in Warrior II (preventing leaning forward), you could:",
            options: [
                {id: "a", text: "Push the student's torso back forcefully."},
                {id: "b", text: "Place one hand on their front ribs and another on their back ribs, guiding them to center."},
                {id: "c", text: "Tell them to look at their back hand."},
                {id: "d", text: "Adjust their feet."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "In Warrior I, if a student's back heel is lifted, you should:",
            options: [
                {id: "a", text: "Force the heel down."},
                {id: "b", text: "Recognize it's a common variation and assist with squaring the hips instead."},
                {id: "c", text: "Tell them they are doing it wrong."},
                {id: "d", text: "Shorten their stance for them."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'assists-8',
    category: 'Hands-On Assists',
    title: 'Assisting forward folds without pushing.',
    description: 'Learn safe, effective assists for forward folds that prioritize spinal length.',
    quiz: [
        {
            question: "Why is it generally unsafe to push down on a student's back in a forward fold?",
            options: [
                {id: "a", text: "It can compress the lumbar spine and lead to injury."},
                {id: "b", text: "It doesn't feel good."},
                {id: "c", text: "It's too easy for the teacher."},
                {id: "d", text: "It makes the student too flexible."}
            ],
            correctAnswerId: "a"
        },
        {
            question: "A safer alternative to pushing on the back in Paschimottanasana is:",
            options: [
                {id: "a", text: "To pull their head towards their knees."},
                {id: "b", text: "To stand on their hamstrings."},
                {id: "c", text: "To gently press forward on their lower back/sacrum as they lengthen their spine."},
                {id: "d", text: "To tell them to try harder."}
            ],
            correctAnswerId: "c"
        },
        {
            question: "What is the primary intention of a forward fold assist?",
            options: [
                {id: "a", text: "To get the student's nose to their knees."},
                {id: "b", text: "To encourage a hinge from the hips, not a rounding of the back."},
                {id: "c", text: "To see how flexible the student is."},
                {id: "d", text: "To provide a deep massage."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "In a wide-legged forward fold (Prasarita Padottanasana), a good assist involves:",
            options: [
                {id: "a", text: "Pushing their head to the floor."},
                {id: "b", text: "Applying gentle downward pressure on their hips or sacrum to deepen the hip hinge."},
                {id: "c", text: "Widening their stance for them."},
                {id: "d", text: "Lifting their legs up."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Before assisting a forward fold, what cue should you give the student?",
            options: [
                {id: "a", text: "'Round your spine.'"},
                {id: "b", text: "'Inhale to find length in your spine.'"},
                {id: "c", text: "'Hold your breath.'"},
                {id: "d", text: "'Lock your knees.'"}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'assists-9',
    category: 'Hands-On Assists',
    title: 'Supporting students in backbends safely.',
    description: 'Learn techniques to support, not force, students in poses like Camel and Wheel.',
    quiz: [
        {
            question: "What is the most important safety consideration when assisting a backbend?",
            options: [
                {id: "a", text: "Getting the student into the deepest version of the pose."},
                {id: "b", text: "Ensuring the student does not compress their lumbar (lower) spine."},
                {id: "c", text: "Making sure their arms and legs are perfectly straight."},
                {id: "d", text: "Seeing how long they can hold the pose."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "In Camel Pose (Ustrasana), a good assist is to:",
            options: [
                {id: "a", text: "Push their hips forward aggressively."},
                {id: "b", text: "Place your hands on their sacrum and encourage them to lift their heart up."},
                {id: "c", text: "Pull their head back."},
                {id: "d", text: "Force their hands to their heels."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "When assisting Wheel Pose (Urdhva Dhanurasana), a teacher should:",
            options: [
                {id: "a", text: "Lift the student off the ground by their hips."},
                {id: "b", text: "Focus on helping them externally rotate their arms and press down through their feet."},
                {id: "c", text: "Stand on their hands to keep them stable."},
                {id: "d", text: "Pull them into a deeper arch from their lower back."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "What verbal cue should always accompany a backbend assist?",
            options: [
                {id: "a", text: "'Go deeper!'"},
                {id: "b", text: "'Engage your glutes to support your lower back.'"},
                {id: "c", text: "'Just relax everything.'"},
                {id: "d", text: "'Hold your breath for stability.'"}
            ],
            correctAnswerId: "b"
        },
        {
            question: "If a student shows signs of dizziness or discomfort in a backbend, you should:",
            options: [
                {id: "a", text: "Encourage them to stay in the pose and breathe through it."},
                {id: "b", text: "Immediately and slowly guide them out of the pose into a neutral position or Child's Pose."},
                {id: "c", text: "Give them a deeper assist."},
                {id: "d", text: "Tell them to try harder."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'assists-10',
    category: 'Hands-On Assists',
    title: 'How to assist twists without torque pressure.',
    description: 'Learn to assist twists by encouraging length and rotation, not force.',
    quiz: [
        {
            question: "What is the primary danger of an improper twist assist?",
            options: [
                {id: "a", text: "The student won't get a good stretch."},
                {id: "b", text: "Applying excessive torque or pressure on the spine, especially the sacrum and lumbar region."},
                {id: "c", text: "The student will fall over."},
                {id: "d", text: "The teacher might get tired."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A safe and effective assist for a seated twist (e.g., Ardha Matsyendrasana) involves:",
            options: [
                {id: "a", text: "Using your body weight to crank the student's shoulder around."},
                {id: "b", text: "Gently grounding their opposite sitting bone and guiding their rib cage to rotate on an exhale."},
                {id: "c", text: "Pulling their head to look further behind them."},
                {id: "d", text: "Pushing their bent knee to the floor."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "What is the 'lengthen then twist' principle?",
            options: [
                {id: "a", text: "A slogan for a pretzel company."},
                {id: "b", text: "The principle that you should always cue the student to lengthen their spine on an inhale before deepening the twist on an exhale."},
                {id: "c", text: "A rule that applies only to standing twists."},
                {id: "d", text: "A way to make twists more difficult."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "In a Revolved Triangle Pose, a stabilizing assist would be:",
            options: [
                {id: "a", text: "Pushing the student's hips into alignment."},
                {id: "b", text: "Providing gentle pressure on their sacrum to stabilize the pelvis before they rotate."},
                {id: "c", text: "Pulling their top arm higher."},
                {id: "d", text: "Forcing their hand to the floor."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Instead of using a student's arm as a lever to pull them deeper, you should:",
            options: [
                {id: "a", text: "Use their leg as a lever instead."},
                {id: "b", text: "Place your hand on their upper back/shoulder blade area to gently encourage rotation."},
                {id: "c", text: "Tell them to use their own strength."},
                {id: "d", text: "Not assist them at all."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'assists-11',
    category: 'Hands-On Assists',
    title: 'Hip-opening assists with joint protection.',
    description: 'Learn to assist Pigeon, Lizard, and Baddha Konasana while keeping the knees and hips safe.',
    quiz: [
        {
            question: "In Pigeon Pose, what is a key safety concern to watch for?",
            options: [
                {id: "a", text: "The back leg not being straight enough."},
                {id: "b", text: "The front shin not being parallel to the mat."},
                {id: "c", text: "Torque or sickling of the front knee."},
                {id: "d", text: "The student not folding forward enough."}
            ],
            correctAnswerId: "c"
        },
        {
            question: "A safe assist in Pigeon Pose is to:",
            options: [
                {id: "a", text: "Push down on the hip of the bent leg."},
                {id: "b", text: "Apply gentle, downward pressure on the hip of the straight leg to help level the pelvis."},
                {id: "c", text: "Force the front shin to be parallel."},
                {id: "d", text: "Push the student further into the forward fold."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "In Bound Angle Pose (Baddha Konasana), what should you avoid doing?",
            options: [
                {id: "a", text: "Encouraging a long spine."},
                {id: "b", text: "Placing a block under the knees for support."},
                {id: "c", text: "Pressing down on the student's knees."},
                {id: "d", text: "Assisting them to fold forward."}
            ],
            correctAnswerId: "c"
        },
        {
            question: "An assist for Lizard Pose could involve:",
            options: [
                {id: "a", text: "Gently guiding the hips forward and down while ensuring the front knee is stable."},
                {id: "b", text: "Pushing the back knee to the floor."},
                {id: "c", text: "Forcing the student down onto their forearms."},
                {id: "d", text: "Stepping on their back."}
            ],
            correctAnswerId: "a"
        },
        {
            question: "What verbal cue is crucial before and during a hip-opening assist?",
            options: [
                {id: "a", text: "'No pain, no gain.'"},
                {id: "b", text: "'Flex your front foot to protect your knee.'"},
                {id: "c", text: "'This should be easy.'"},
                {id: "d", text: "'Just relax and let go completely.'"}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'assists-12',
    category: 'Hands-On Assists',
    title: 'Restorative yoga assists (bolsters, props, touch).',
    description: 'Learn the art of gentle, supportive touch and prop arrangement in restorative yoga.',
    quiz: [
        {
            question: "What is the primary goal of an assist in restorative yoga?",
            options: [
                {id: "a", text: "To create a deeper stretch."},
                {id: "b", text: "To help the student feel more supported, secure, and relaxed."},
                {id: "c", text: "To correct their alignment."},
                {id: "d", text: "To wake them up."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "An effective restorative assist in Savasana is:",
            options: [
                {id: "a", text: "Shaking the student's legs."},
                {id: "b", text: "Gently pressing down on their shoulders or placing a weighted blanket on their hips."},
                {id: "c", text: "Lifting their head to tuck their chin."},
                {id: "d", text: "Telling them a long story."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "When assisting with props in a restorative class, you should:",
            options: [
                {id: "a", text: "Let the student figure it out on their own."},
                {id: "b", text: "Quietly and efficiently add or adjust props like bolsters and blankets to better support the student."},
                {id: "c", text: "Build a complex prop setup for every student."},
                {id: "d", text: "Take props away to make the pose more challenging."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "The quality of touch in a restorative assist should be:",
            options: [
                {id: "a", text: "Quick and light."},
                {id: "b", text: "Firm and deep, like a massage."},
                {id: "c", text: "Slow, grounded, and confident."},
                {id: "d", text: "Pokey and prodding."}
            ],
            correctAnswerId: "c"
        },
        {
            question: "In supported Child's Pose, a grounding assist could be:",
            options: [
                {id: "a", text: "Lifting the student's hips off their heels."},
                {id: "b", text: "Gently placing a hand on their sacrum."},
                {id: "c", text: "Tucking their head under."},
                {id: "d", text: "Widening their knees further."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'assists-13',
    category: 'Hands-On Assists',
    title: 'Assists using only props—hands-free assisting.',
    description: 'Learn how to use blocks, straps, and blankets to assist students without direct physical contact.',
    quiz: [
        {
            question: "What is a primary benefit of a hands-free, prop-based assist?",
            options: [
                {id: "a", text: "It is always better than a hands-on assist."},
                {id: "b", text: "It respects students who do not want physical touch while still providing support."},
                {id: "c", text: "It is faster than a hands-on assist."},
                {id: "d", text: "It requires more props."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "How can you use a block to assist a student in Triangle Pose?",
            options: [
                {id: "a", text: "Throw it at them."},
                {id: "b", text: "Place a block under their bottom hand to bring the floor closer."},
                {id: "c", text: "Place a block on their back to weigh them down."},
                {id: "d", text: "Ask them to balance the block on their head."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A strap can be used to assist in a seated forward fold by:",
            options: [
                {id: "a", text: "Tying the student's legs together."},
                {id: "b", text: "Looping it around the feet to help them maintain a long spine while hinging forward."},
                {id: "c", text: "Using it to pull the student aggressively into the fold."},
                {id: "d", text: "Using it as a decoration."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "How can a blanket assist in Savasana?",
            options: [
                {id: "a", text: "As a pillow, which can strain the neck."},
                {id: "b", text: "Rolled up and placed under the knees to release the lower back."},
                {id: "c", text: "To hide under so no one can see you."},
                {id: "d", text: "To wave at other students."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "When offering a prop-based assist, you should:",
            options: [
                {id: "a", text: "Toss the prop to the student."},
                {id: "b", text: "Quietly and respectfully place the prop where it can be used."},
                {id: "c", text: "Interrupt the class to explain the prop's function in detail."},
                {id: "d", text: "Assume the student knows how to use it."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'assists-14',
    category: 'Hands-On Assists',
    title: 'Partner assists for workshops.',
    description: 'Explore how to safely and effectively teach partner-based assists.',
    quiz: [
        {
            question: "What is the most important instruction to give before starting partner work?",
            options: [
                {id: "a", text: "'Find the person closest to you.'"},
                {id: "b", text: "'Decide who will go first.'"},
                {id: "c", text: "'Communicate clearly and respectfully with your partner at all times.'"},
                {id: "d", text: "'Try to be better than your partner.'"}
            ],
            correctAnswerId: "c"
        },
        {
            question: "In a partner forward fold assist, the assisting partner should:",
            options: [
                {id: "a", text: "Sit on their partner's back."},
                {id: "b", text: "Use their body weight to gently press on their partner's sacrum."},
                {id: "c", text: "Pull their partner's arms as hard as they can."},
                {id: "d", text: "Talk to them about their day."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "What is the role of the person being assisted in partner work?",
            options: [
                {id: "a", text: "To be completely passive."},
                {id: "b", text: "To resist their partner's assist."},
                {id: "c", text: "To actively communicate their boundaries and sensations."},
                {id: "d", text: "To try and assist their partner back at the same time."}
            ],
            correctAnswerId: "c"
        },
        {
            question: "A safe partner assist for a twist involves:",
            options: [
                {id: "a", text: "Both partners twisting in opposite directions."},
                {id: "b", text: "The assisting partner stabilizing the hips and providing a gentle point of resistance for the twist."},
                {id: "c", text: "The assisting partner pushing on the lumbar spine."},
                {id: "d", text: "A race to see who can twist further."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Why are partner assists best taught in a workshop setting?",
            options: [
                {id: "a", text: "Because you can charge more for workshops."},
                {id: "b", text: "There is more time to establish trust, communication, and detailed instruction than in a regular flow class."},
                {id: "c", text: "Because beginners don't come to workshops."},
                {id: "d", text: "It's not true, they are fine for any class."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'assists-15',
    category: 'Hands-On Assists',
    title: 'When not to assist (injury, uncertainty, discomfort).',
    description: 'The most important assist is knowing when to hold back.',
    quiz: [
        {
            question: "If a student has informed you of a specific injury (e.g., a herniated disc), you should:",
            options: [
                {id: "a", text: "Give them extra deep assists to help heal the injury."},
                {id: "b", text: "Generally avoid assisting them in that area unless they explicitly ask for a specific, supportive touch."},
                {id: "c", text: "Assist them just like everyone else."},
                {id: "d", text: "Ask them to leave the class."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "If you are uncertain about how to safely assist a particular pose or body type, what is the best course of action?",
            options: [
                {id: "a", text: "Guess and hope for the best."},
                {id: "b", text: "Do not assist. Offer verbal cues or a prop-based assist instead."},
                {id: "c", text: "Ask another student to assist them."},
                {id: "d", text: "Try a complex assist you saw on Instagram."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "If you approach a student to assist and they tense up, shake their head 'no', or pull away, you should:",
            options: [
                {id: "a", text: "Try again from a different angle."},
                {id: "b", text: "Tell them the assist is for their own good."},
                {id: "c", text: "Immediately respect their non-verbal 'no' and back away without making them feel awkward."},
                {id: "d", text: "Ask them why they don't want an assist in front of the class."}
            ],
            correctAnswerId: "c"
        },
        {
            question: "Is it appropriate to assist a student who is crying or having a strong emotional release?",
            options: [
                {id: "a", text: "Yes, a deep physical assist will distract them from their emotions."},
                {id: "b", text: "Generally, no. Giving them physical space is often the most supportive action. A grounding hand on the foot might be okay, but requires great sensitivity."},
                {id: "c", text: "Yes, you should always give them a hug."},
                {id: "d", text: "Only if they are a close friend."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "The rule of thumb for assisting is:",
            options: [
                {id: "a", text: "'When in doubt, assist.'"},
                {id: "b", text: "'The customer is always right.'"},
                {id: "c", text: "'First, do no harm.'"},
                {id: "d", text: "'Go big or go home.'"}
            ],
            correctAnswerId: "c"
        }
    ]
  },
  {
    id: 'assists-16',
    category: 'Hands-On Assists',
    title: 'Trauma-informed touch guidelines.',
    description: 'Understand the principles of giving assists in a way that promotes safety and avoids triggering trauma responses.',
    quiz: [
        {
            question: "What is a key principle of trauma-informed touch?",
            options: [
                {id: "a", text: "Surprising the student with an assist."},
                {id: "b", text: "Approaching the student from within their field of vision so they are aware of your presence."},
                {id: "c", text: "Using light, ticklish touch."},
                {id: "d", text: "Correcting the pose no matter what."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Which quality of touch is generally considered more grounding and less activating?",
            options: [
                {id: "a", text: "A quick, light tap."},
                {id: "b", text: "A firm, still, and confident hand."},
                {id: "c", text: "Stroking or rubbing."},
                {id: "d", text: "A poke with the fingertips."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Why is offering choice ('I'm going to place a hand on your back, is that okay?') important?",
            options: [
                {id: "a", text: "It wastes time."},
                {id: "b", text: "It gives the student agency and control over their own body and experience."},
                {id: "c", text: "It makes the teacher seem hesitant."},
                {id: "d", text: "It's only for beginners."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "In a trauma-informed context, assists should be primarily for:",
            options: [
                {id: "a", text: "Deepening a stretch."},
                {id: "b", text: "Achieving a perfect shape."},
                {id: "c", text: "Support, stabilization, and grounding."},
                {id: "d", text: "Showing the teacher's expertise."}
            ],
            correctAnswerId: "c"
        },
        {
            question: "If you accidentally trigger a student, what is the best first step?",
            options: [
                {id: "a", text: "Ask them to explain their trauma to you."},
                {id: "b", text: "Give them a hug."},
                {id: "c", text: "Quietly and calmly back off, give them space, and allow them to guide their own process. Be available after class if they choose to talk."},
                {id: "d", text: "Pretend it didn't happen."}
            ],
            correctAnswerId: "c"
        }
    ]
  },
  {
    id: 'assists-17',
    category: 'Hands-On Assists',
    title: 'Assisting inversions safely.',
    description: 'Learn how to spot and support students in headstand, handstand, and forearm stand.',
    quiz: [
        {
            question: "What is the primary role of a teacher when 'assisting' an inversion like handstand?",
            options: [
                {id: "a", text: "To hold the student's full body weight."},
                {id: "b", text: "To act as a 'spotter,' providing stability and preventing a fall, not lifting the student."},
                {id: "c", text: "To push the student's legs into a straight line."},
                {id: "d", text: "To catch them after they fall."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Before a student attempts an inversion, they should demonstrate strength and stability in which poses?",
            options: [
                {id: "a", text: "Child's Pose."},
                {id: "b", text: "Poses like Plank, Downward Dog, and Dolphin Pose."},
                {id: "c", text: "Savasana."},
                {id: "d", text: "Seated forward folds."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "When assisting a headstand, where should a teacher NEVER place their hands?",
            options: [
                {id: "a", text: "On the student's hips."},
                {id: "b", text: "On the student's legs."},
                {id: "c", text: "On the student's head or neck."},
                {id: "d", text: "On the student's feet."}
            ],
            correctAnswerId: "c"
        },
        {
            question: "A safe way to teach beginners to exit an inversion is:",
            options: [
                {id: "a", text: "To fall over sideways."},
                {id: "b", text: "To do a backflip."},
                {id: "c", text: "To come down the same way they went up, with control."},
                {id: "d", text: "To hold it until they collapse."}
            ],
            correctAnswerId: "c"
        },
        {
            question: "Why is teaching inversions against a wall often a good starting point?",
            options: [
                {id: "a", text: "It's not, it builds bad habits."},
                {id: "b", text: "It allows students to build strength and proprioception without the fear of falling."},
                {id: "c", text: "It's the only way to do a handstand."},
                {id: "d", text: "It makes it easier for the teacher to take a picture."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'assists-18',
    category: 'Hands-On Assists',
    title: 'How to assist without shifting their balance.',
    description: 'Learn to apply pressure and support in a way that doesn\\'t knock students off-center.',
    quiz: [
        {
            question: "When assisting a balancing pose like Tree Pose, where should you apply touch?",
            options: [
                {id: "a", text: "On the student's arms."},
                {id: "b", text: "On the student's standing leg or hips, which are closer to their center of gravity."},
                {id: "c", text: "On their head."},
                {id: "d", text: "You should never assist a balancing pose."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "What is the concept of 'meeting their energy'?",
            options: [
                {id: "a", text: "Matching the student's personality."},
                {id: "b", text: "Applying an equal and opposite pressure to what the student is exerting, creating stability."},
                {id: "c", text: "Pushing the student in the direction they are already going."},
                {id: "d", text: "Talking to them about their energy levels."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Before touching a student in a balancing pose, you should:",
            options: [
                {id: "a", text: "Make a loud noise to get their attention."},
                {id: "b", text: "Make sure your own stance is stable and grounded."},
                {id: "c", text: "Close your eyes."},
                {id: "d", text: "Jump up and down."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "If a student is wobbling in a pose, a good assist is to:",
            options: [
                {id: "a", text: "Push them over to start again."},
                {id: "b", text: "Hold their entire body still."},
                {id: "c", text: "Offer a single, stable point of contact, like a hand on their sacrum or shoulder."},
                {id: "d", text: "Tell them to stop wobbling."}
            ],
            correctAnswerId: "c"
        },
        {
            question: "The goal of a balance assist is to:",
            options: [
                {id: "a", text: "Hold the student in the pose forever."},
                {id: "b", text: "Give them a reference point in space so they can find their own balance."},
                {id: "c", text: "Do the balancing work for them."},
                {id: "d", text: "Test how strong they are."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'assists-19',
    category: 'Hands-On Assists',
    title: 'Grounding assists during savasana.',
    description: 'Learn the art of the Savasana assist to help students relax more deeply.',
    quiz: [
        {
            question: "What is the primary intention of a Savasana assist?",
            options: [
                {id: "a", text: "To wake the student up."},
                {id: "b", text: "To help the student feel grounded, safe, and release final bits of tension."},
                {id: "c", text: "To give them a deep stretch."},
                {id: "d", text: "To check if they are breathing."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A common and effective Savasana assist is a gentle pressure on the:",
            options: [
                {id: "a", text: "Stomach."},
                {id: "b", text: "Tops of the shoulders, encouraging them to release away from the ears."},
                {id: "c", text: "Knees."},
                {id: "d", text: "Face."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "When should you perform Savasana assists?",
            options: [
                {id: "a", text: "As soon as the student lies down."},
                {id: "b", text: "After the student has had a minute or two to settle into the pose."},
                {id: "c", text: "Right before you end the class."},
                {id: "d", text: "During the middle of Savasana, to keep things interesting."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "What is a 'press and release' assist in Savasana?",
            options: [
                {id: "a", text: "Quickly poking the student."},
                {id: "b", text: "Applying a firm, steady pressure (e.g., on the feet) and then slowly releasing it."},
                {id: "c", text: "A type of partner assist."},
                {id: "d", text: "A self-assist."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "The touch in a Savasana assist should be:",
            options: [
                {id: "a", text: "Quick and almost unnoticeable."},
                {id: "b", text: "Confident, grounding, and respectful, staying for a few seconds before moving on."},
                {id: "c", text: "Forceful and deep."},
                {id: "d", text: "Accompanied by loud talking."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'assists-20',
    category: 'Hands-On Assists',
    title: 'Reading body language when giving assists.',
    description: 'Learn to observe and interpret student non-verbal cues to know if your assist is welcome and effective.',
    quiz: [
        {
            question: "If a student's breathing becomes shallow or they hold their breath when you assist, it may indicate:",
            options: [
                {id: "a", text: "They are deeply relaxed."},
                {id: "b", text: "They are uncomfortable or the assist is too intense."},
                {id: "c", text: "They are trying to help you."},
                {id: "d", text: "They are about to sneeze."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "What does 'tensing against' an assist mean?",
            options: [
                {id: "a", text: "The student's muscles are actively resisting your touch."},
                {id: "b", text: "The student is enjoying the assist."},
                {id: "c", text: "The student is weak."},
                {id: "d", text: "The student is tired."}
            ],
            correctAnswerId: "a"
        },
        {
            question: "If a student melts or softens into your assist, it's a good sign that:",
            options: [
                {id: "a", text: "They have fallen asleep."},
                {id: "b", text: "The assist is welcome and effective."},
                {id: "c", text: "The assist is too weak."},
                {id: "d", text: "You should stop immediately."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Observing a student's entire body, not just the part you're touching, is important because:",
            options: [
                {id: "a", text: "It's not important, you should only focus on one area."},
                {id: "b", text: "Tension can show up in other areas, like the jaw or hands, indicating discomfort."},
                {id: "c", text: "You might miss a good photo opportunity."},
                {id: "d", text: "It helps you compare them to other students."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "What is the most reliable sign of consent?",
            options: [
                {id: "a", text: "Silence."},
                {id: "b", text: "A clear, unambiguous 'yes,' either verbal or through a consent card system."},
                {id: "c", text: "The student doesn't move away."},
                {id: "d", text: "The student is a regular in your class."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  // 🎨 C. Class Themes (20 Lessons)
  {
    id: 'themes-1',
    category: 'Class Themes',
    title: 'Breath awareness (pranayama focus).',
    description: 'Structure a class around the central theme of the breath as a guide and anchor.',
    quiz: [
        {
            question: "What is a good peak pose for a breath-awareness themed class?",
            options: [
                {id: "a", text: "A complex arm balance that might make students hold their breath."},
                {id: "b", text: "Any pose where students can comfortably focus on the rhythm of their breath."},
                {id: "c", text: "The longest hold you can think of."},
                {id: "d", text: "A pose that requires no breathing."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Which pranayama technique would be a good starting point for this theme?",
            options: [
                {id: "a", text: "Advanced breath retention (Kumbhaka)."},
                {id: "b", text: "Simple diaphragmatic (belly) breathing or observing the natural breath."},
                {id: "c", text: "Breath of Fire."},
                {id: "d", text: "Rapid, chaotic breathing."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A good cue for this theme would be:",
            options: [
                {id: "a", text: "'Does your pose look like mine?'"},
                {id: "b", text: "'Can you let your breath guide the movement?'"},
                {id: "c", text: "'Push harder.'"},
                {id: "d", text: "'Try to go deeper than your neighbor.'"}
            ],
            correctAnswerId: "b"
        },
        {
            question: "How could you incorporate this theme into Savasana?",
            options: [
                {id: "a", text: "By playing loud, distracting music."},
                {id: "b", text: "By guiding students to notice the sensation of the breath in the body as it lies still."},
                {id: "c", text: "By ending Savasana early."},
                {id: "d", text: "By telling students to try not to breathe."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "The primary intention of a breath-awareness theme is to:",
            options: [
                {id: "a", text: "Teach students how to breathe bigger."},
                {id: "b", text: "Anchor the students in the present moment and calm the nervous system."},
                {id: "c", text: "Provide a strenuous workout."},
                {id: "d", text: "Correct everyone's breathing."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'themes-2',
    category: 'Class Themes',
    title: 'Balance on and off the mat.',
    description: 'Use balancing poses as a metaphor for finding balance in daily life.',
    quiz: [
        {
            question: "What is a good peak pose for a balance-themed class?",
            options: [
                {id: "a", text: "Child's Pose."},
                {id: "b", text: "Handstand or Dancer's Pose."},
                {id: "c", text: "Savasana."},
                {id: "d", text: "Seated Forward Fold."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A good verbal cue for this theme could be:",
            options: [
                {id: "a", text: "'If you fall, you have bad balance.'"},
                {id: "b", text: "'Just as we find steadiness here by focusing our gaze, we can find stability in life by focusing our intention.'"},
                {id: "c", text: "'Hurry up and balance.'"},
                {id: "d", text: "'This is easy.'"}
            ],
            correctAnswerId: "b"
        },
        {
            question: "How can you introduce the theme at the beginning of class?",
            options: [
                {id: "a", text: "By asking students to think about the literal and metaphorical aspects of balance in their lives."},
                {id: "b", text: "By immediately going into the hardest balancing pose."},
                {id: "c", text: "By telling everyone they probably have poor balance."},
                {id: "d", text: "By skipping the introduction and just starting."}
            ],
            correctAnswerId: "a"
        },
        {
            question: "What does 'Drishti' (gaze) have to do with this theme?",
            options: [
                {id: "a", text: "Nothing."},
                {id: "b", text: "A steady gaze is a key tool for improving physical balance."},
                {id: "c", text: "It's a type of yoga food."},
                {id: "d", text: "It's the name of a famous yogi."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "How does the concept of 'Sthira Sukha' (steadiness and ease) relate to a balance theme?",
            options: [
                {id: "a", text: "It doesn't relate."},
                {id: "b", text: "Balance is not just about rigid stillness, but about finding a dynamic equilibrium between effort and relaxation."},
                {id: "c", text: "It means balance should always be easy."},
                {id: "d", text: "It means balance should always be steady and hard."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'themes-3',
    category: 'Class Themes',
    title: 'Heart-opening and emotional resilience.',
    description: 'Focus on backbends and chest openers to cultivate vulnerability and compassion.',
    quiz: [
        {
            question: "Which part of the body is anatomically associated with a 'heart-opening' theme?",
            options: [
                {id: "a", text: "The hamstrings."},
                {id: "b", text: "The thoracic spine, chest, and shoulders."},
                {id: "c", text: "The feet."},
                {id: "d", text: "The hips."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A good peak pose for a heart-opening class would be:",
            options: [
                {id: "a", text: "A deep forward fold."},
                {id: "b", text: "Camel Pose (Ustrasana) or Wheel Pose (Urdhva Dhanurasana)."},
                {id: "c", text: "Crow Pose (Bakasana)."},
                {id: "d", text: "A seated twist."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "What is a good counterpose for a deep backbend?",
            options: [
                {id: "a", text: "An even deeper backbend."},
                {id: "b", text: "A gentle forward fold or Child's Pose to neutralize the spine."},
                {id: "c", text: "Savasana."},
                {id: "d", text: "Handstand."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A good theme-related cue in a heart-opening pose might be:",
            options: [
                {id: "a", text: "'This will hurt your back if you do it wrong.'"},
                {id: "b", text: "'Lift through your heart, creating space for breath and emotion.'"},
                {id: "c", text: "'Squeeze your shoulders together.'"},
                {id: "d", text: "'Just bend back as far as you can.'"}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Which chakra is associated with a heart-opening theme?",
            options: [
                {id: "a", text: "The Root Chakra (Muladhara)."},
                {id: "b", text: "The Throat Chakra (Vishuddha)."},
                {id: "c", text: "The Heart Chakra (Anahata)."},
                {id: "d", text: "The Crown Chakra (Sahasrara)."}
            ],
            correctAnswerId: "c"
        }
    ]
  },
  {
    id: 'themes-4',
    category: 'Class Themes',
    title: 'Stability + grounding (muladhara focus).',
    description: 'Connect with the earth and find your foundation through standing poses and core stability.',
    quiz: [
        {
            question: "Which poses are best for a grounding-themed class?",
            options: [
                {id: "a", text: "Inversions like headstand."},
                {id: "b", text: "Standing poses like Mountain, Warrior, and Tree Pose."},
                {id: "c", text: "Complex arm balances."},
                {id: "d", text: "Deep backbends."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "The Muladhara (Root) Chakra is associated with what element?",
            options: [
                {id: "a", text: "Fire."},
                {id: "b", text: "Air."},
                {id: "c", text: "Water."},
                {id: "d", text: "Earth."}
            ],
            correctAnswerId: "d"
        },
        {
            question: "A good cue for a grounding theme would be:",
            options: [
                {id: "a", text: "'Feel light and floaty.'"},
                {id: "b", text: "'Feel your feet rooting down into the mat.'"},
                {id: "c", text: "'Try to lift your feet off the floor.'"},
                {id: "d", text: "'Focus on the ceiling.'"}
            ],
            correctAnswerId: "b"
        },
        {
            question: "How can you incorporate a grounding theme into the start of class?",
            options: [
                {id: "a", text: "By doing jumping jacks."},
                {id: "b", text: "By guiding students to notice the points of contact between their body and the floor."},
                {id: "c", text: "By asking them to think about flying."},
                {id: "d", text: "By talking about the weather."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Which of these is NOT typically associated with a grounding practice?",
            options: [
                {id: "a", text: "A sense of safety and security."},
                {id: "b", text: "A connection to the present moment."},
                {id: "c", text: "A feeling of instability and chaos."},
                {id: "d", text: "A focus on the lower body and core."}
            ],
            correctAnswerId: "c"
        }
    ]
  },
  {
    id: 'themes-5',
    category: 'Class Themes',
    title: 'Sacral creativity flow (svadhisthana).',
    description: 'Focus on fluid movements and hip-opening to tap into creative and emotional energy.',
    quiz: [
        {
            question: "The Svadhisthana (Sacral) Chakra is associated with which element?",
            options: [
                {id: "a", text: "Earth."},
                {id: "b", text: "Fire."},
                {id: "c", text: "Water."},
                {id: "d", text: "Air."}
            ],
            correctAnswerId: "c"
        },
        {
            question: "What types of movements are best for a Sacral Chakra themed class?",
            options: [
                {id: "a", text: "Rigid, static holds."},
                {id: "b", text: "Fluid, circular, and wave-like movements."},
                {id: "c", text: "Sharp, angular movements."},
                {id: "d", text: "Only linear movements."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Which category of poses is central to a Svadhisthana-focused class?",
            options: [
                {id: "a", text: "Arm balances."},
                {id: "b", text: "Backbends."},
                {id: "c", text: "Hip-openers."},
                {id: "d", text: "Inversions."}
            ],
            correctAnswerId: "c"
        },
        {
            question: "A good cue for this theme would be:",
            options: [
                {id: "a", text: "'Hold completely still.'"},
                {id: "b", text: "'Move like you're stuck in mud.'"},
                {id: "c", text: "'Let your movements be fluid, like water.'"},
                {id: "d", text: "'Make every movement as small as possible.'"}
            ],
            correctAnswerId: "c"
        },
        {
            question: "What feeling or quality is often associated with a balanced Sacral Chakra?",
            options: [
                {id: "a", text: "Stagnation and rigidity."},
                {id: "b", text: "Emotional numbness."},
                {id: "c", text: "Creativity, pleasure, and emotional intelligence."},
                {id: "d", text: "Apathy and disinterest."}
            ],
            correctAnswerId: "c"
        }
    ]
  },
  {
    id: 'themes-6',
    category: 'Class Themes',
    title: 'Solar plexus confidence theme.',
    description: 'Build inner fire and confidence with core work and powerful poses.',
    quiz: [
        {
            question: "Which chakra is the solar plexus theme focused on?",
            options: [
                {id: "a", text: "Anahata (Heart)."},
                {id: "b", text: "Manipura (Solar Plexus)."},
                {id: "c", text: "Vishuddha (Throat)."},
                {id: "d", text: "Ajna (Third Eye)."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "What types of poses are central to a solar plexus-themed class?",
            options: [
                {id: "a", text: "Restorative poses."},
                {id: "b", text: "Core-strengthening poses like Plank and Navasana (Boat Pose)."},
                {id: "c", text: "Forward folds."},
                {id: "d", text: "Gentle hip openers."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "The element associated with the Manipura chakra is:",
            options: [
                {id: "a", text: "Water."},
                {id: "b", text: "Earth."},
                {id: "c", text: "Air."},
                {id: "d", text: "Fire."}
            ],
            correctAnswerId: "d"
        },
        {
            question: "A good affirmation or cue for this theme would be:",
            options: [
                {id: "a", text: "'Feel the power and confidence building in your center.'"},
                {id: "b", text: "'Try to feel small and insignificant.'"},
                {id: "c", text: "'Let go of all effort.'"},
                {id: "d", text: "'This is supposed to be easy.'"}
            ],
            correctAnswerId: "a"
        },
        {
            question: "Which pranayama technique is best suited for building inner fire?",
            options: [
                {id: "a", text: "Sitali (cooling breath)."},
                {id: "b", text: "Kapalabhati (Skull-shining breath) or Bhastrika (Bellows breath)."},
                {id: "c", text: "Nadi Shodhana (Alternate Nostril Breathing)."},
                {id: "d", text: "Slow, deep belly breathing."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'themes-7',
    category: 'Class Themes',
    title: 'Heart chakra compassion.',
    description: 'Cultivate love and connection through chest-opening poses and loving-kindness meditation.',
    quiz: [
        {
            question: "The Anahata (Heart) Chakra is associated with which element?",
            options: [
                {id: "a", text: "Fire."},
                {id: "b", text: "Earth."},
                {id: "c", text: "Air."},
                {id: "d", text: "Water."}
            ],
            correctAnswerId: "c"
        },
        {
            question: "What is the primary emotional focus of a heart chakra-themed class?",
            options: [
                {id: "a", text: "Personal power and will."},
                {id: "b", text: "Love, compassion, connection, and forgiveness."},
                {id: "c", text: "Stability and grounding."},
                {id: "d", text: "Intellect and intuition."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Which of these is a classic heart-opening pose?",
            options: [
                {id: "a", text: "Mountain Pose (Tadasana)."},
                {id: "b", text: "Camel Pose (Ustrasana)."},
                {id: "c", text: "Child's Pose (Balasana)."},
                {id: "d", text: "Corpse Pose (Savasana)."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "What is Metta (Loving-Kindness) meditation?",
            options: [
                {id: "a", text: "A meditation focused on breathing."},
                {id: "b", text: "A practice of silently repeating phrases to cultivate feelings of goodwill and warmth."},
                {id: "c", text: "A type of walking meditation."},
                {id: "d", text: "A meditation focused on visualization."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A cue like 'Breathe into the space around your heart' supports this theme by:",
            options: [
                {id: "a", text: "Being anatomically precise."},
                {id: "b", text: "Creating a physical and energetic sense of expansion in the chest."},
                {id: "c", text: "Making the pose harder."},
                {id: "d", text: "Distracting the student."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'themes-8',
    category: 'Class Themes',
    title: 'Throat chakra communication and truth.',
    description: 'Use neck stretches, mantras, and specific poses to encourage authentic self-expression.',
    quiz: [
        {
            question: "The Vishuddha (Throat) Chakra is associated with:",
            options: [
                {id: "a", text: "Grounding and stability."},
                {id: "b", text: "Communication, self-expression, and truth."},
                {id: "c", text: "Love and compassion."},
                {id: "d", text: "Personal power and confidence."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Which of these poses can help to stimulate the throat chakra?",
            options: [
                {id: "a", text: "Warrior II."},
                {id: "b", text: "Fish Pose (Matsyasana) and Shoulder Stand (Salamba Sarvangasana)."},
                {id: "c", text: "Tree Pose."},
                {id: "d", text: "Downward-Facing Dog."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "How can chanting or using mantras support a throat chakra theme?",
            options: [
                {id: "a", text: "It can't, it's just for show."},
                {id: "b", text: "The vibration of sound in the throat is believed to stimulate and balance this energy center."},
                {id: "c", text: "It makes the class quieter."},
                {id: "d", text: "It helps students fall asleep."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A good thematic cue for this class would be:",
            options: [
                {id: "a", text: "'Listen to the sound of your own breath.'"},
                {id: "b", text: "'Feel your feet on the ground.'"},
                {id: "c", text: "'Open your heart.'"},
                {id: "d", text: "'Notice how your body feels.'"}
            ],
            correctAnswerId: "a"
        },
        {
            question: "What is a safe way to cue neck stretches?",
            options: [
                {id: "a", text: "Encourage students to drop their head all the way back."},
                {id: "b", text: "Guide gentle movements like slowly dropping ear to shoulder, avoiding any sharp pain."},
                {id: "c", text: "Tell students to make full neck circles as fast as possible."},
                {id: "d", text: "Use a partner to push on the head."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'themes-9',
    category: 'Class Themes',
    title: 'Third eye intuition.',
    description: 'Use focus points (drishti), meditation, and balancing poses to connect with inner wisdom.',
    quiz: [
        {
            question: "The Ajna (Third Eye) Chakra is located:",
            options: [
                {id: "a", text: "At the heart center."},
                {id: "b", text: "At the base of the spine."},
                {id: "c", text: "Between the eyebrows."},
                {id: "d", text: "At the crown of the head."}
            ],
            correctAnswerId: "c"
        },
        {
            question: "What is the primary function associated with the third eye chakra?",
            options: [
                {id: "a", text: "Intuition, perception, and wisdom."},
                {id: "b", text: "Communication."},
                {id: "c", text: "Love and compassion."},
                {id: "d", text: "Survival instincts."}
            ],
            correctAnswerId: "a"
        },
        {
            question: "Which practice strongly supports a third eye-themed class?",
            options: [
                {id: "a", text: "Loud, energetic music."},
                {id: "b", text: "Fast-paced, athletic sequences."},
                {id: "c", text: "Meditation and focusing on a Drishti (gaze point)."},
                {id: "d", text: "Partner yoga."}
            ],
            correctAnswerId: "c"
        },
        {
            question: "A good cue to activate the third eye could be:",
            options: [
                {id: "a", text: "'Bring your awareness to the point between your eyebrows.'"},
                {id: "b", text: "'Feel the strength in your legs.'"},
                {id: "c", text: "'Open your mouth and sigh.'"},
                {id: "d", text: "'Wiggle your toes.'"}
            ],
            correctAnswerId: "a"
        },
        {
            question: "Why are balancing poses like Eagle Pose (Garudasana) good for a third eye theme?",
            options: [
                {id: "a", text: "They are easy."},
                {id: "b", text: "They require intense focus and internal awareness, which are qualities of the Ajna chakra."},
                {id: "c", text: "They primarily work the legs."},
                {id: "d", text: "They look cool on Instagram."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'themes-10',
    category: 'Class Themes',
    title: 'Crown chakra connection.',
    description: 'Focus on meditation and Savasana to cultivate a sense of unity and spiritual connection.',
    quiz: [
        {
            question: "The Sahasrara (Crown) Chakra is associated with:",
            options: [
                {id: "a", text: "Physical strength."},
                {id: "b", text: "Personal will."},
                {id: "c", text: "Consciousness, enlightenment, and connection to a higher power."},
                {id: "d", text: "Emotional expression."}
            ],
            correctAnswerId: "c"
        },
        {
            question: "Which pose is considered the ultimate expression of the crown chakra's energy?",
            options: [
                {id: "a", text: "Plank Pose."},
                {id: "b", text: "Warrior II."},
                {id: "c", text: "Savasana (Corpse Pose), representing surrender and unity."},
                {id: "d", text: "Boat Pose."}
            ],
            correctAnswerId: "c"
        },
        {
            question: "What is a good peak pose for a class themed around the crown chakra?",
            options: [
                {id: "a", text: "Headstand (Sirsasana), symbolizing the connection from the crown to the earth."},
                {id: "b", text: "Child's pose."},
                {id: "c", text: "Mountain pose."},
                {id: "d", text: "A gentle twist."}
            ],
            correctAnswerId: "a"
        },
        {
            question: "How can you theme the beginning of class for a crown chakra focus?",
            options: [
                {id: "a", text: "With vigorous movement."},
                {id: "b", text: "By setting an intention related to connection, wisdom, or letting go."},
                {id: "c", text: "With loud, rhythmic music."},
                {id: "d", text: "By focusing on a single part of the body."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A good cue for Savasana in a crown chakra-themed class would be:",
            options: [
                {id: "a", text: "'Try to stay awake.'"},
                {id: "b", text: "'Feel the energy extending from the crown of your head, connecting you to something larger than yourself.'"},
                {id: "c", text: "'Focus on your grocery list.'"},
                {id: "d", text: "'Think about how strong your legs are.'"}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'themes-11',
    category: 'Class Themes',
    title: 'Seasonal themes (winter grounding, spring awakening).',
    description: 'Align the practice with the energy of the current season.',
    quiz: [
        {
            question: "A yoga class themed for winter would likely emphasize:",
            options: [
                {id: "a", text: "Fast-paced, energetic flows."},
                {id: "b", text: "Grounding, warming, and introspective practices."},
                {id: "c", text: "Cooling breaths and heart openers."},
                {id: "d", text: "Lots of jumping and inversions."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Which poses would be suitable for a 'Spring Awakening' theme?",
            options: [
                {id: "a", text: "Long, passive holds in restorative poses."},
                {id: "b", text: "Dynamic twists, side bends, and poses that create a sense of lightness and growth."},
                {id: "c", text: "Only seated poses."},
                {id: "d", text: "A 10-minute Savasana."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A summer-themed class might incorporate which type of pranayama?",
            options: [
                {id: "a", text: "Breath of Fire to build more heat."},
                {id: "b", text: "Sitali (cooling breath) to balance the body's temperature."},
                {id: "c", text: "No pranayama at all."},
                {id: "d", text: "Holding the breath for long periods."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "The theme for an autumn yoga class could focus on:",
            options: [
                {id: "a", text: "Building new energy and outward expansion."},
                {id: "b", text: "Letting go, balancing, and preparing for a quieter time."},
                {id: "c", text: "The peak of external energy and expression."},
                {id: "d", text: "Deep, restful poses only."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Why is theming a class based on the season beneficial?",
            options: [
                {id: "a", text: "It's not, it's just a gimmick."},
                {id: "b", text: "It helps to balance our internal energy with the external energy of the natural world, following Ayurvedic principles."},
                {id: "c", text: "It makes the class easier."},
                {id: "d", text: "It's the only way to theme a class."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'themes-12',
    category: 'Class Themes',
    title: 'Moon cycles (new moon release, full moon energy).',
    description: 'Align the class with the energy of the lunar cycle.',
    quiz: [
        {
            question: "A class themed around the New Moon would likely focus on:",
            options: [
                {id: "a", text: "High-energy, celebratory movements."},
                {id: "b", text: "Introspection, setting intentions, and gentle, releasing movements."},
                {id: "c", text: "Peak power and expression."},
                {id: "d", text: "A physically challenging workout."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A Full Moon-themed class is often associated with:",
            options: [
                {id: "a", text: "Quiet, inward energy."},
                {id: "b", text: "The peak of energy, celebration, and culmination."},
                {id: "c", text: "Setting new goals."},
                {id: "d", text: "Deep rest and relaxation."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Which sequence is traditionally associated with cooling, lunar energy?",
            options: [
                {id: "a", text: "Sun Salutation A (Surya Namaskar A)."},
                {id: "b", text: "Moon Salutation (Chandra Namaskar)."},
                {id: "c", text: "A sequence of arm balances."},
                {id: "d", text: "A sequence of core work."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "What is a good intention to set during a New Moon class?",
            options: [
                {id: "a", text: "An intention to celebrate what you have accomplished."},
                {id: "b", text: "An intention for what you want to manifest or begin in the coming cycle."},
                {id: "c", text: "An intention to let go of everything."},
                {id: "d", text: "No intention is needed."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A Full Moon practice might include more:",
            options: [
                {id: "a", text: "Forward folds and inward-focused poses."},
                {id: "b", text: "Expressive poses, heart openers, and a feeling of peak expression."},
                {id: "c", text: "Restorative poses only."},
                {id: "d", text: "Poses that are very low to the ground."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'themes-13',
    category: 'Class Themes',
    title: 'Yoga philosophy theme — Aparigraha (non-grasping).',
    description: 'Focus on the yama of non-attachment by encouraging students to let go of outcomes.',
    quiz: [
        {
            question: "What is Aparigraha?",
            options: [
                {id: "a", text: "Non-harming."},
                {id: "b", text: "Truthfulness."},
                {id: "c", text: "Non-possessiveness or non-grasping."},
                {id: "d", text: "Contentment."}
            ],
            correctAnswerId: "c"
        },
        {
            question: "How can Aparigraha be applied to asana practice?",
            options: [
                {id: "a", text: "By trying to achieve the 'perfect' version of a pose."},
                {id: "b", text: "By letting go of how the pose 'should' look and focusing on how it feels in your body today."},
                {id: "c", text: "By holding onto a pose for as long as possible, even if it hurts."},
                {id: "d", text: "By comparing your pose to others in the room."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A good cue for an Aparigraha-themed class would be:",
            options: [
                {id: "a", text: "'Your goal is to touch your toes.'"},
                {id: "b", text: "'Can you release the need to force this pose and simply be with the sensations that are present?'"},
                {id: "c", text: "'You should be better at this by now.'"},
                {id: "d", text: "'Hurry to the next pose.'"}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Which of these actions in class demonstrates Aparigraha?",
            options: [
                {id: "a", text: "Pushing through pain to get into a deeper stretch."},
                {id: "b", text: "Choosing to use a prop to support your body, even if you sometimes don't need it."},
                {id: "c", text: "Getting frustrated when you can't balance."},
                {id: "d", text: "Trying to hold your breath the longest."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "The theme of Aparigraha encourages students to:",
            options: [
                {id: "a", text: "Not try at all."},
                {id: "b", text: "Give up easily."},
                {id: "c", text: "Practice with effort, but release attachment to the result."},
                {id: "d", text: "Be greedy for more flexibility."}
            ],
            correctAnswerId: "c"
        }
    ]
  },
  {
    id: 'themes-14',
    category: 'Class Themes',
    title: 'Santosha (contentment).',
    description: 'Cultivate a sense of contentment and gratitude for where you are right now.',
    quiz: [
        {
            question: "What is the principle of Santosha?",
            options: [
                {id: "a", text: "Self-discipline."},
                {id: "b", text: "Contentment; finding joy and acceptance in the present moment."},
                {id: "c", text: "Self-study."},
                {id: "d", text: "Non-harming."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "How can a yoga practice cultivate Santosha?",
            options: [
                {id: "a", text: "By focusing only on what you can't do."},
                {id: "b", text: "By celebrating what your body can do today, without judgment."},
                {id: "c", text: "By pushing past your limits at all costs."},
                {id: "d", text: "By comparing yourself to the teacher."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A good cue for a Santosha-themed class would be:",
            options: [
                {id: "a", text: "'You're not doing that right.'"},
                {id: "b", text: "'Find a moment of gratitude for your body and your breath, exactly as they are.'"},
                {id: "c", text: "'You should be better at this by now.'"},
                {id: "d", text: "'Hurry to the next pose.'"}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Which practice is most closely aligned with Santosha?",
            options: [
                {id: "a", text: "A gratitude meditation."},
                {id: "b", text: "A competitive yoga sequence."},
                {id: "c", text: "A practice focused on achieving a difficult pose."},
                {id: "d", text: "A very fast and sweaty workout."}
            ],
            correctAnswerId: "a"
        },
        {
            question: "Santosha does NOT mean:",
            options: [
                {id: "a", text: "Accepting the present moment."},
                {id: "b", text: "Being grateful for what you have."},
                {id: "c", text: "Complacency or giving up on growth."},
                {id: "d", text: "Finding peace in imperfection."}
            ],
            correctAnswerId: "c"
        }
    ]
  },
  {
    id: 'themes-15',
    category: 'Class Themes',
    title: 'Ahimsa (non-harm).',
    description: 'Focus on self-compassion, listening to the body, and moving in a way that is kind and supportive.',
    quiz: [
        {
            question: "Ahimsa, the first yama, translates to:",
            options: [
                {id: "a", text: "Truthfulness."},
                {id: "b", text: "Non-harming or non-violence."},
                {id: "c", text: "Non-stealing."},
                {id: "d", text: "Contentment."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "How does Ahimsa apply to a physical yoga practice?",
            options: [
                {id: "a", text: "By pushing through pain to get the 'full expression' of a pose."},
                {id: "b", text: "By listening to the body's signals and backing off when something causes pain."},
                {id: "c", text: "By judging others in the class."},
                {id: "d", text: "By holding your breath."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Which action in a yoga class demonstrates Ahimsa?",
            options: [
                {id: "a", text: "Forcing yourself into a pose you are not ready for."},
                {id: "b", text: "Skipping a pose that doesn't feel right for your body today."},
                {id: "c", text: "Comparing your flexibility to your neighbor's."},
                {id: "d", text: "Silently criticizing your own practice."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A good cue for an Ahimsa-themed class would be:",
            options: [
                {id: "a", text: "'No pain, no gain.'"},
                {id: "b", text: "'Move in a way that feels kind and nourishing to your body.'"},
                {id: "c", text: "'If it doesn't hurt, you're not doing it right.'"},
                {id: "d", text: "'This is a competition.'"}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Ahimsa extends beyond the physical practice to include:",
            options: [
                {id: "a", text: "Only what you eat."},
                {id: "b", text: "Only how you treat other people."},
                {id: "c", text: "Non-harming in our thoughts, words, and actions toward ourselves and others."},
                {id: "d", text: "Only your actions on the yoga mat."}
            ],
            correctAnswerId: "c"
        }
    ]
  },
  {
    id: 'themes-16',
    category: 'Class Themes',
    title: 'Gratitude flow.',
    description: 'Weave expressions of gratitude throughout the practice for a heart-centered experience.',
    quiz: [
        {
            question: "What is the main intention of a gratitude-themed yoga class?",
            options: [
                {id: "a", text: "To focus on what is lacking in life."},
                {id: "b", text: "To cultivate an appreciation for the body, the breath, and the present moment."},
                {id: "c", text: "To achieve a difficult physical pose."},
                {id: "d", text: "To get a good workout."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "How can you introduce a gratitude theme at the beginning of class?",
            options: [
                {id: "a", text: "By asking students to think about what they are grateful for."},
                {id: "b", text: "By complaining about the weather."},
                {id: "c", text: "By focusing on a difficult philosophical concept."},
                {id: "d", text: "By starting with the most difficult pose."}
            ],
            correctAnswerId: "a"
        },
        {
            question: "A good cue for a gratitude flow might be:",
            options: [
                {id: "a", text: "'Notice all the flaws in your pose.'"},
                {id: "b", text: "'As you breathe in, feel a sense of gratitude for the simple act of breathing.'"},
                {id: "c", text: "'This pose is really hard, isn't it?'"},
                {id: "d", text: "'Try to do this better than you did last time.'"}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Which type of pose is often associated with the feeling of gratitude and openness?",
            options: [
                {id: "a", text: "Core-focused poses."},
                {id: "b", text: "Heart-opening poses like Cobra or Upward-Facing Dog."},
                {id: "c", text: "Forward folds."},
                {id: "d", text: "Difficult arm balances."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "How can a gratitude theme be woven into Savasana?",
            options: [
                {id: "a", text: "By asking students to make a mental list of things they are grateful for as they rest."},
                {id: "b", text: "By playing upbeat, loud music."},
                {id: "c", text: "By skipping Savasana."},
                {id: "d", text: "By telling students to think about their to-do list."}
            ],
            correctAnswerId: "a"
        }
    ]
  },
  {
    id: 'themes-17',
    category: 'Class Themes',
    title: 'Strength through softness.',
    description: 'Explore the idea that true strength comes from a balance of effort and ease, not rigidity.',
    quiz: [
        {
            question: "What is the core concept of a 'Strength through Softness' theme?",
            options: [
                {id: "a", text: "That practice should be as soft and easy as possible."},
                {id: "b", text: "That true strength is adaptable and fluid, not just rigid and forceful."},
                {id: "c", text: "That strength is not important in yoga."},
                {id: "d", text: "That softness is a sign of weakness."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Which yogic concept does this theme directly relate to?",
            options: [
                {id: "a", text: "Ahimsa (non-harm)."},
                {id: "b", text: "Sthira and Sukha (steadiness and ease)."},
                {id: "c", text: "Satya (truthfulness)."},
                {id: "d", text: "Tapas (discipline)."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A good cue for this theme in Warrior II would be:",
            options: [
                {id: "a", text: "'Tense every muscle in your body.'"},
                {id: "b", text: "'Find the strength in your legs, but soften your shoulders and your gaze.'"},
                {id: "c", text: "'This pose should feel completely effortless.'"},
                {id: "d", text: "'Clench your fists.'"}
            ],
            correctAnswerId: "b"
        },
        {
            question: "This theme encourages students to find strength:",
            options: [
                {id: "a", text: "Only in their muscles."},
                {id: "b", text: "By using momentum and force."},
                {id: "c", text: "Without using their breath."},
                {id: "d", text: "From a stable core while maintaining fluid breath and soft joints."}
            ],
            correctAnswerId: "d"
        },
        {
            question: "How does this theme apply to life off the mat?",
            options: [
                {id: "a", text: "It suggests being a pushover."},
                {id: "b", text: "It suggests that resilience is about being adaptable and calm under pressure, not just being tough."},
                {id: "c", text: "It doesn't apply to life off the mat."},
                {id: "d", text: "It suggests avoiding all difficult situations."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'themes-18',
    category: 'Class Themes',
    title: 'Slow flow for nervous system regulation.',
    description: 'Use slow, mindful movements and long holds to calm the nervous system.',
    quiz: [
        {
            question: "What is the primary goal of a slow flow class for nervous system regulation?",
            options: [
                {id: "a", text: "To get a cardiovascular workout."},
                {id: "b", text: "To activate the parasympathetic nervous system (rest and digest)."},
                {id: "c", text: "To activate the sympathetic nervous system (fight or flight)."},
                {id: "d", text: "To learn as many new poses as possible."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Which of the following is a key component of this type of class?",
            options: [
                {id: "a", text: "Fast transitions and upbeat music."},
                {id: "b", text: "Mindful movement, holding poses for several breaths, and focusing on sensation."},
                {id: "c", text: "Lots of jumping and arm balances."},
                {id: "d", text: "A competitive atmosphere."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "What kind of breath would you cue in this class?",
            options: [
                {id: "a", text: "Short, sharp inhales."},
                {id: "b", text: "Holding the breath."},
                {id: "c", text: "Slow, deep, and steady breaths, possibly with a longer exhale."},
                {id: "d", text: "Breath of Fire."}
            ],
            correctAnswerId: "c"
        },
        {
            question: "Which poses would be particularly beneficial in a nervous system regulation class?",
            options: [
                {id: "a", text: "Supported forward folds, gentle twists, and restorative poses."},
                {id: "b", text: "Challenging inversions and backbends."},
                {id: "c", text: "A long sequence of Sun Salutations at a fast pace."},
                {id: "d", text: "Poses that require a lot of muscular effort."}
            ],
            correctAnswerId: "a"
        },
        {
            question: "This type of class is especially good for students who are feeling:",
            options: [
                {id: "a", text: "Energetic and motivated."},
                {id: "b", text: "Stressed, anxious, or burnt out."},
                {id: "c", text: "Competitive."},
                {id: "d", text: "Bored."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'themes-19',
    category: 'Class Themes',
    title: 'Fire flow (core + heat + tapas).',
    description: 'Build internal heat and discipline with a challenging, core-focused class.',
    quiz: [
        {
            question: "The Sanskrit word 'Tapas' in this context refers to:",
            options: [
                {id: "a", text: "Small Spanish snacks."},
                {id: "b", text: "The fiery discipline or determination to practice."},
                {id: "c", text: "Contentment."},
                {id: "d", text: "Non-harming."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A fire flow class would likely include many of which type of pose?",
            options: [
                {id: "a", text: "Restorative poses."},
                {id: "b", text: "Core work (like Boat Pose), strong standing poses, and repetitive flows (like Sun Salutations)."},
                {id: "c", text: "Gentle stretches."},
                {id: "d", text: "Long-held forward folds."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Which pranayama technique would be appropriate for a fire flow?",
            options: [
                {id: "a", text: "Sitali (cooling breath)."},
                {id: "b", text: "Kapalabhati (Skull-shining Breath) or Ujjayi (Victorious Breath)."},
                {id: "c", text: "Watching TV."},
                {id: "d", text: "Nadi Shodhana."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "What is the energetic intention of a fire flow?",
            options: [
                {id: "a", text: "To calm and soothe the nervous system."},
                {id: "b", text: "To build heat, energy, and determination; to burn through obstacles."},
                {id: "c", text: "To promote sleep."},
                {id: "d", text: "To feel cool and relaxed."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A good thematic cue for a fire flow could be:",
            options: [
                {id: "a", text: "'Feel the ease and softness in this pose.'"},
                {id: "b", text: "'Use the heat you are building to move through challenges on and off the mat.'"},
                {id: "c", text: "'Take a long break.'"},
                {id: "d", text: "'This should feel effortless.'"}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'themes-20',
    category: 'Class Themes',
    title: 'Yin/Yang balance.',
    description: 'Combine dynamic, active (Yang) sequences with passive, long-held (Yin) poses in one class.',
    quiz: [
        {
            question: "In a Yin/Yang class, the 'Yang' portion typically consists of:",
            options: [
                {id: "a", text: "Long, passive stretches on the floor."},
                {id: "b", text: "Dynamic, rhythmic, and active yoga like a Vinyasa flow."},
                {id: "c", text: "Meditation."},
                {id: "d", text: "Savasana."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "The 'Yin' portion of the class focuses on:",
            options: [
                {id: "a", text: "Building heat and muscle."},
                {id: "b", text: "Long-held, passive poses that target the connective tissues."},
                {id: "c", text: "Cardiovascular exercise."},
                {id: "d", text: "A fast-paced sequence."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "What is the benefit of combining Yin and Yang in one class?",
            options: [
                {id: "a", text: "There is no benefit."},
                {id: "b", text: "It creates a balanced practice that addresses both muscles (Yang) and deep connective tissues (Yin)."},
                {id: "c", text: "It makes the class shorter."},
                {id: "d", text: "It's only for advanced students."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "In a typical Yin/Yang class structure, when would the Yin portion usually occur?",
            options: [
                {id: "a", text: "At the very beginning as a warm-up."},
                {id: "b", text: "In the middle of the Yang flow."},
                {id: "c", text: "Towards the end of class, after the muscles are warm and before Savasana."},
                {id: "d", text: "It is always a separate class."}
            ],
            correctAnswerId: "c"
        },
        {
            question: "A key difference in approach between Yin and Yang yoga is:",
            options: [
                {id: "a", text: "Yang yoga uses muscles, while Yin yoga aims to relax the muscles to access deeper tissues."},
                {id: "b", text: "There is no difference."},
                {id: "c", text: "Yin yoga is fast, and Yang yoga is slow."},
                {id: "d", text: "Only Yang yoga uses the breath."}
            ],
            correctAnswerId: "a"
        }
    ]
  },
  // ⚕️ D. Safety Guidelines (20 Lessons)
  {
    id: 'safety-1',
    category: 'Safety Guidelines',
    title: 'Understanding student limitations & red flags.',
    description: 'Learn to observe students and recognize signs of struggle, pain, or medical issues.',
    quiz: [
        {
            question: "What is a major 'red flag' that a student is in pain, not just feeling a stretch?",
            options: [
                {id: "a", text: "Steady, deep breathing."},
                {id: "b", text: "A sharp intake of breath, wincing, or immediately backing out of a pose."},
                {id: "c", text: "A look of calm focus."},
                {id: "d", text: "Smiling."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "If a student tells you they have a herniated disc, you should advise them to avoid:",
            options: [
                {id: "a", text: "All physical activity."},
                {id: "b", text: "Deep forward folds and loaded spinal flexion."},
                {id: "c", text: "Gentle twists."},
                {id: "d", text: "All backbends."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "What is a sign a student might be feeling dizzy or faint?",
            options: [
                {id: "a", text: "They are moving with strength and stability."},
                {id: "b", text: "They look pale, are swaying, or are touching their head."},
                {id: "c", text: "They are holding a pose for a long time."},
                {id: "d", text: "They are asking for a harder pose."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Before class, it is good practice to:",
            options: [
                {id: "a", text: "Ignore students and prepare your own practice."},
                {id: "b", text: "Ask new students if they have any injuries or conditions you should be aware of."},
                {id: "c", text: "Guarantee that yoga will heal all their injuries."},
                {id: "d", text: "Plan the most difficult class possible."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A yoga teacher's primary responsibility regarding student limitations is to:",
            options: [
                {id: "a", text: "Diagnose the student's injury."},
                {id: "b", text: "Offer safe modifications and empower the student to listen to their own body."},
                {id: "c", text: "Push the student past their limitations."},
                {id: "d", text: "Ignore the limitation and teach the class as planned."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'safety-2',
    category: 'Safety Guidelines',
    title: 'Joint stacking principles.',
    description: 'Learn the importance of stacking joints (e.g., knee over ankle) for stability and safety.',
    quiz: [
        {
            question: "In a lunge or Warrior pose, why is it important to stack the front knee over the ankle?",
            options: [
                {id: "a", text: "It looks better in photos."},
                {id: "b", text: "To minimize pressure and torque on the knee joint."},
                {id: "c", text: "It creates a deeper stretch in the hamstring."},
                {id: "d", text: "It is not important."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "In Tabletop Pose, the shoulders should be stacked over the ______, and hips over the ______.",
            options: [
                {id: "a", text: "Hips, knees."},
                {id: "b", text: "Wrists, knees."},
                {id: "c", text: "Elbows, ankles."},
                {id: "d", text: "Knees, wrists."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "What is a risk of letting the knee go far past the ankle in a lunge?",
            options: [
                {id: "a", text: "The student won't get a good enough stretch."},
                {id: "b", text: "It places excessive strain on the patellar tendon and ligaments of the knee."},
                {id: "c", text: "It makes the pose too easy."},
                {id: "d", text: "There is no risk."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "In Plank Pose and Chaturanga, the shoulders should ideally be stacked over the:",
            options: [
                {id: "a", text: "Fingertips."},
                {id: "b", text: "Wrists."},
                {id: "c", text: "Elbows."},
                {id: "d", text: "Hips."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "The principle of joint stacking provides:",
            options: [
                {id: "a", text: "A more flexible pose."},
                {id: "b", text: "A less stable pose."},
                {id: "c", text: "A strong and stable foundation for the pose."},
                {id: "d", text: "A more complex and difficult pose."}
            ],
            correctAnswerId: "c"
        }
    ]
  },
  {
    id: 'safety-3',
    category: 'Safety Guidelines',
    title: 'Protecting the lower back in folds & backbends.',
    description: 'Learn cues and modifications to keep the lumbar spine safe.',
    quiz: [
        {
            question: "What is a key instruction to protect the lower back in a forward fold?",
            options: [
                {id: "a", text: "Round the back as much as possible."},
                {id: "b", text: "Keep the legs perfectly straight, even if it causes pain."},
                {id: "c", text: "Bend the knees and hinge from the hips, not the waist."},
                {id: "d", text: "Hold your breath."}
            ],
            correctAnswerId: "c"
        },
        {
            question: "In a backbend like Cobra or Upward-Facing Dog, how can you protect the lower back?",
            options: [
                {id: "a", text: "By pushing all the weight into the lower back."},
                {id: "b", text: "By engaging the core and glutes, and focusing on lifting the chest."},
                {id: "c", text: "By letting the shoulders shrug up to the ears."},
                {id: "d", text: "By not engaging any muscles."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "If a student feels a 'pinching' sensation in their lower back during a backbend, they should:",
            options: [
                {id: "a", text: "Try to go deeper."},
                {id: "b", text: "Immediately and slowly back out of the pose to a less intense version."},
                {id: "c", text: "Ignore it, as it's a sign of progress."},
                {id: "d", text: "Breathe faster."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "The cue 'draw your navel to your spine' helps to:",
            options: [
                {id: "a", text: "Relax the abdomen."},
                {id: "b", text: "Engage the transverse abdominis, which acts like a corset to support the spine."},
                {id: "c", text: "Make it harder to breathe."},
                {id: "d", text: "Round the lower back."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "What is a good counterpose after a series of deep backbends?",
            options: [
                {id: "a", text: "Another deep backbend."},
                {id: "b", text: "A deep, aggressive forward fold."},
                {id: "c", text: "A gentle, neutralizing pose like Child's Pose or a gentle twist."},
                {id: "d", text: "Handstand."}
            ],
            correctAnswerId: "c"
        }
    ]
  },
  {
    id: 'safety-4',
    category: 'Safety Guidelines',
    title: 'Knee safety in lunges and warriors.',
    description: 'Learn to cue proper alignment to protect the delicate knee joint.',
    quiz: [
        {
            question: "A common misalignment in Warrior II that stresses the front knee is:",
            options: [
                {id: "a", text: "The knee tracking directly over the ankle."},
                {id: "b", text: "The knee collapsing inward, inside the ankle."},
                {id: "c", text: "The back leg being too straight."},
                {id: "d", text: "The arms being parallel to the floor."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "To protect the knee in poses like Pigeon, it's important to:",
            options: [
                {id: "a", text: "Point the front foot."},
                {id: "b", text: "Keep the front foot flexed to stabilize the knee joint."},
                {id: "c", text: "Let the knee do whatever it wants."},
                {id: "d", text: "Push down on the knee."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "In a lunge, the cue 'squeeze your legs toward the midline' (adduction) helps to:",
            options: [
                {id: "a", text: " destabilize the pose."},
                {id: "b", text: "Create more stability in the pelvis and hips, which supports the knees."},
                {id: "c", text: "Make the pose harder for no reason."},
                {id: "d", text: "Stretch the knee."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "If a student has knee pain, what is a good general modification?",
            options: [
                {id: "a", text: "Encourage them to go deeper into the pose."},
                {id: "b", text: "Suggest they decrease the range of motion (e.g., not bending as deeply) or use props for support."},
                {id: "c", text: "Tell them to ignore the pain."},
                {id: "d", text: "Tell them to lock their knees."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "In Lotus or Half-Lotus, pain in the knee usually means the pressure should be taken by the:",
            options: [
                {id: "a", text: "Ankle."},
                {id: "b", text: "Hip. If the hip isn't open enough, the knee will take the strain."},
                {id: "c", text: "Lower back."},
                {id: "d", text: "Student, they should just deal with it."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'safety-5',
    category: 'Safety Guidelines',
    title: 'Shoulder safety in chaturanga.',
    description: 'Break down one of the most common poses to cause injury and learn to teach it safely.',
    quiz: [
        {
            question: "A common mistake in Chaturanga that injures the shoulders is:",
            options: [
                {id: "a", text: "Keeping the elbows hugged in to the ribs."},
                {id: "b", text: "Lowering down with the shoulders dipping below the elbows."},
                {id: "c", text: "Engaging the core."},
                {id: "d", text: "Pushing the ground away."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "In a proper Chaturanga, the elbows should be:",
            options: [
                {id: "a", text: "Flared out wide to the sides."},
                {id: "b", text: "Bent to a 90-degree angle or less, stacked directly over the wrists."},
                {id: "c", text: "Completely straight."},
                {id: "d", text: "Behind the back."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "What is a great modification for a student struggling with Chaturanga?",
            options: [
                {id: "a", text: "Telling them to just try harder."},
                {id: "b", text: "Dropping their knees to the floor to reduce the weight load."},
                {id: "c", text: "Skipping it entirely and going straight to Downward Dog from Plank."},
                {id: "d", text: "Doing a full push-up instead."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "The cue 'hug your elbows into your sides' helps to engage which muscles?",
            options: [
                {id: "a", text: "The neck muscles."},
                {id: "b", text: "The serratus anterior and latissimus dorsi, which stabilize the shoulder girdle."},
                {id: "c", text: "The glutes."},
                {id: "d", text: "The hamstrings."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "To transition from Plank to Chaturanga, you should first:",
            options: [
                {id: "a", text: "Shift your weight back into your heels."},
                {id: "b", text: "Shift your weight forward onto your toes, so the shoulders are slightly ahead of the wrists."},
                {id: "c", text: "Drop your hips to the floor."},
                {id: "d", text: "Look up at the ceiling."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'safety-6',
    category: 'Safety Guidelines',
    title: 'Avoiding forcing range of motion.',
    description: 'Understand the difference between healthy stretching and dangerous forcing of joints.',
    quiz: [
        {
            question: "What is the difference between a 'stretch' sensation and a 'pain' sensation?",
            options: [
                {id: "a", text: "There is no difference."},
                {id: "b", text: "A stretch is typically a dull, manageable sensation of tension, while pain is often sharp, shooting, or burning."},
                {id: "c", text: "Pain is good, it means you are making progress."},
                {id: "d", text: "A stretch is only felt in the muscles, pain is only in the bones."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Why should you never bounce in a deep stretch (ballistic stretching)?",
            options: [
                {id: "a", text: "It's an advanced technique that helps you get more flexible."},
                {id: "b", text: "It can trigger the muscle's stretch reflex, causing it to tighten and potentially tear."},
                {id: "c", text: "It's boring."},
                {id: "d", text: "It looks silly."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "If a student cannot reach their toes in a forward fold, they should:",
            options: [
                {id: "a", text: "Force themselves to touch their toes by rounding their back excessively."},
                {id: "b", text: "Focus on hinging from the hips with a long spine and rest their hands on their shins, thighs, or blocks."},
                {id: "c", text: "Give up and lie down."},
                {id: "d", text: "Ask a partner to push them."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "The goal of a yoga pose is to:",
            options: [
                {id: "a", text: "Achieve the 'perfect' shape seen in a magazine."},
                {id: "b", text: "Find a balance of effort and ease (Sthira and Sukha) that is appropriate for your body today."},
                {id: "c", text: "Go deeper than the person next to you."},
                {id: "d", text: "Feel as much pain as possible."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A teacher's role is to:",
            options: [
                {id: "a", text: "Push students to their absolute limit."},
                {id: "b", text: "Create a safe environment where students are empowered to honor their own body's limitations."},
                {id: "c", text: "Ensure every student looks identical in a pose."},
                {id: "d", text: "Correct every single 'flaw' they see."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'safety-7',
    category: 'Safety Guidelines',
    title: 'Spine neutral vs. flexion vs. extension cues.',
    description: 'Understand the three main positions of the spine and when to cue them.',
    quiz: [
        {
            question: "A 'neutral spine' means:",
            options: [
                {id: "a", text: "A perfectly flat back."},
                {id: "b", text: "Maintaining the natural curves of the spine (cervical, thoracic, lumbar)."},
                {id: "c", text: "A rounded back."},
                {id: "d", text: "An arched back."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Which pose is an example of spinal flexion?",
            options: [
                {id: "a", text: "Cobra Pose (backbend)."},
                {id: "b", text: "Cat Pose (rounding the back)."},
                {id: "c", text: "Mountain Pose (neutral spine)."},
                {id: "d", text: "Upward-Facing Dog (backbend)."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Which pose is an example of spinal extension?",
            options: [
                {id: "a", text: "Cow Pose (arching the back)."},
                {id: "b", text: "Child's Pose (flexion)."},
                {id: "c", text: "Tabletop Pose (neutral)."},
                {id: "d", text: "A seated forward fold (flexion)."}
            ],
            correctAnswerId: "a"
        },
        {
            question: "In poses like Plank and Downward-Facing Dog, you should generally cue for:",
            options: [
                {id: "a", text: "Maximum flexion (rounding)."},
                {id: "b", text: "Maximum extension (arching)."},
                {id: "c", text: "A long, neutral spine."},
                {id: "d", text: "A twisted spine."}
            ],
            correctAnswerId: "c"
        },
        {
            question: "The sequence of Cat-Cow is designed to:",
            options: [
                {id: "a", text: "Prepare for arm balances."},
                {id: "b", text: "Gently warm up the spine by moving it through flexion and extension."},
                {id: "c", text: "Be a peak pose."},
                {id: "d", text: "Cool down the body."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'safety-8',
    category: 'Safety Guidelines',
    title: 'Safe transitions between planks, dogs, and cobras.',
    description: 'Master the flow of the common Vinyasa sequence to prevent injury.',
    quiz: [
        {
            question: "When transitioning from Plank to Downward-Facing Dog, you should cue students to:",
            options: [
                {id: "a", text: "Lift their hips up and back, leading with the tailbone."},
                {id: "b", text: "Drop their hips down first."},
                {id: "c", text: "Jump their feet forward."},
                {id: "d", text: "Look forward."}
            ],
            correctAnswerId: "a"
        },
        {
            question: "A common mistake when moving from Chaturanga to Upward-Facing Dog is:",
            options: [
                {id: "a", text: "Keeping the core engaged."},
                {id: "b", text: "Lifting the chest."},
                {id: "c", text: "'Dumping' into the lower back and shoulders without engagement."},
                {id: "d", text: "Pressing through the tops of the feet."}
            ],
            correctAnswerId: "c"
        },
        {
            question: "In Upward-Facing Dog, the thighs and hips should be:",
            options: [
                {id: "a", text: "Resting on the floor."},
                {id: "b", text: "Lifted off the floor, with the core and legs engaged."},
                {id: "c", text: "As relaxed as possible."},
                {id: "d", text: "Crossed."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "What is a safer alternative to Upward-Facing Dog for beginners?",
            options: [
                {id: "a", text: "A deeper backbend."},
                {id: "b", text: "Cobra Pose (Bhujangasana), which keeps the hips on the floor."},
                {id: "c", text: "Handstand."},
                {id: "d", text: "No alternative exists."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "To move from Upward-Facing Dog to Downward-Facing Dog, one should:",
            options: [
                {id: "a", text: "Use momentum to swing the hips up."},
                {id: "b", text: "Use core strength to lift the hips, rolling over the toes."},
                {id: "c", text: "Drop the knees first and then push back."},
                {id: "d", text: "Look up at the ceiling."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'safety-9',
    category: 'Safety Guidelines',
    title: 'Using props for injury prevention.',
    description: 'Understand how props are not a crutch, but a tool for safer and more effective practice.',
    quiz: [
        {
            question: "How can blocks help prevent injury in a forward fold?",
            options: [
                {id: "a", text: "By making the pose harder."},
                {id: "b", text: "By bringing the floor closer, allowing a student to maintain a long spine instead of rounding to reach the floor."},
                {id: "c", text: "By placing them on the student's back."},
                {id: "d", text: "They can't help."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A blanket rolled under the knees in Savasana helps to:",
            options: [
                {id: "a", text: "Make the pose more challenging."},
                {id: "b", text: "Release tension in the lower back and hamstrings."},
                {id: "c", text: "Keep the student awake."},
                {id: "d", text: "Align the neck."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "For a student with tight hips, sitting on the edge of a folded blanket or block helps to:",
            options: [
                {id: "a", text: "Make sitting more uncomfortable."},
                {id: "b", text: "Elevate the hips, allowing for a more neutral spine and reducing strain."},
                {id: "c", text: "It has no effect."},
                {id: "d", text: "It's only for advanced students."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A strap can be used in Gomukhasana (Cow Face Pose) arms to:",
            options: [
                {id: "a", text: "Tie the arms together."},
                {id: "b", text: "Bridge the gap between the hands if they cannot clasp, preventing shoulder strain."},
                {id: "c", text: "Whip the student next to you."},
                {id: "d", text: "Measure the distance between the hands."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "The role of props in injury prevention is to:",
            options: [
                {id: "a", text: "Make the practice easier and less effective."},
                {id: "b", text: "Support the body so that it can find proper alignment and avoid straining joints or muscles."},
                {id: "c", text: "Act as a crutch for weak students."},
                {id: "d", text: "Be used only in restorative yoga."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'safety-10',
    category: 'Safety Guidelines',
    title: 'Minimizing wrist strain in arm balances.',
    description: 'Learn techniques and cues to protect the wrists in weight-bearing poses.',
    quiz: [
        {
            question: "A key cue to protect the wrists in poses like Downward Dog and Plank is:",
            options: [
                {id: "a", text: "Lift the base of the fingers off the mat."},
                {id: "b", text: "Press down firmly through all four corners of the palm and the knuckles."},
                {id: "c", text: "Put all the weight into the heel of the hand."},
                {id: "d", text: "Keep the fingers close together."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "What is 'doming' the palms?",
            options: [
                {id: "a", text: "A sign of wrist strain."},
                {id: "b", text: "Creating a small lift in the center of the palm, engaging the hand muscles to take pressure off the wrist joint."},
                {id: "c", text: "Flattening the palm completely."},
                {id: "d", text: "A type of fancy handshake."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "For students with wrist pain, what is a good modification for Plank or Downward Dog?",
            options: [
                {id: "a", text: "Telling them to just push through the pain."},
                {id: "b", text: "Coming down onto their forearms (Forearm Plank / Dolphin Pose)."},
                {id: "c", text: "Putting more weight into their wrists."},
                {id: "d", text: "Lifting their hands off the floor."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Which of these can help prepare the wrists for weight-bearing?",
            options: [
                {id: "a", text: "Shaking the hands vigorously."},
                {id: "b", text: "Gentle wrist circles and stretches in both flexion and extension."},
                {id: "c", text: "Holding heavy weights."},
                {id: "d", text: "Ignoring the wrists completely during warmup."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "In arm balances, distributing weight also into the _______ is crucial for wrist health.",
            options: [
                {id: "a", text: "Head."},
                {id: "b", text: "Fingertips."},
                {id: "c", text: "Lower back."},
                {id: "d", text: "Feet."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'safety-11',
    category: 'Safety Guidelines',
    title: 'Modifying for pregnancy safely.',
    description: 'Learn key modifications for expectant mothers in a general yoga class.',
    quiz: [
        {
            question: "What is a general rule for twists for pregnant students?",
            options: [
                {id: "a", text: "They should do deeper twists to create space."},
                {id: "b", text: "They should avoid deep, closed twists and practice open twists instead."},
                {id: "c", text: "Twisting is completely forbidden."},
                {id: "d", text: "They should hold their breath during twists."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Why should pregnant students avoid lying flat on their back (supine) for extended periods, especially later in pregnancy?",
            options: [
                {id: "a", text: "It's too comfortable."},
                {id: "b", text: "The weight of the uterus can compress the vena cava, reducing blood flow."},
                {id: "c", text: "It can make them fall asleep."},
                {id: "d", text: "There is no reason, this is a myth."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A good modification for Savasana for a pregnant student is:",
            options: [
                {id: "a", text: "Lying on their stomach."},
                {id: "b", text: "Lying on their left side with props for support."},
                {id: "c", text: "Sitting upright."},
                {id: "d", text: "Skipping it."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "In forward folds and lunges, pregnant students should be cued to:",
            options: [
                {id: "a", text: "Compress their belly."},
                {id: "b", text: "Create space for the belly, often by taking a wider stance."},
                {id: "c", text: "Engage in deep core work."},
                {id: "d", text: "Do the poses exactly like everyone else."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "What is the most important advice a teacher can give a pregnant student?",
            options: [
                {id: "a", text: "To do every pose in the class."},
                {id: "b", text: "To listen to their own body and their doctor's advice above all else."},
                {id: "c", text: "To try inversions for the first time."},
                {id: "d", text: "To focus on getting a six-pack."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'safety-12',
    category: 'Safety Guidelines',
    title: 'Modifying for seniors or limited mobility.',
    description: 'Learn to use chairs and other props to make yoga accessible to all.',
    quiz: [
        {
            question: "What is the primary benefit of Chair Yoga?",
            options: [
                {id: "a", text: "It's not real yoga."},
                {id: "b", text: "It makes yoga accessible to those who cannot easily get up and down from the floor."},
                {id: "c", text: "It's only for people who are lazy."},
                {id: "d", text: "It's more difficult than regular yoga."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "For a student with limited mobility in a standing pose, a chair can be used for:",
            options: [
                {id: "a", text: "A place to put their drink."},
                {id: "b", text: "Support and balance, similar to a ballet barre."},
                {id: "c", text: "An obstacle to jump over."},
                {id: "d", text: "A weight to lift."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "When teaching students with limited mobility, it is important to focus on:",
            options: [
                {id: "a", text: "Getting them into advanced poses."},
                {id: "b", text: "Functional movements that can help with daily life, like mobility, balance, and strength."},
                {id: "c", text: "A fast-paced, athletic flow."},
                {id: "d", text: "Ignoring their limitations."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Which of these is a good modification for a student who cannot kneel?",
            options: [
                {id: "a", text: "Forcing them to kneel anyway."},
                {id: "b", text: "Offering a seated version of the pose or placing a thick blanket under the knees."},
                {id: "c", text: "Telling them to skip the pose."},
                {id: "d", text: "Laughing at them."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "The tone of a class for seniors should generally be:",
            options: [
                {id: "a", text: "Intimidating and competitive."},
                {id: "b", text: "Encouraging, patient, and empowering."},
                {id: "c", text: "Fast-paced and loud."},
                {id: "d", text: "Sarcastic and dismissive."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'safety-13',
    category: 'Safety Guidelines',
    title: 'Teaching overweight/plus-size modifications.',
    description: 'Learn to create a welcoming and effective practice for students in larger bodies.',
    quiz: [
        {
            question: "What is a common physical challenge for students in larger bodies in yoga?",
            options: [
                {id: "a", text: "They are always inflexible."},
                {id: "b", text: "Body tissue, such as the belly or chest, can get in the way in certain poses."},
                {id: "c", text: "They are always weaker than smaller students."},
                {id: "d", text: "They don't enjoy yoga."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A good modification for a student whose belly is compressed in a forward fold is to:",
            options: [
                {id: "a", text: "Tell them to suck it in."},
                {id: "b", text: "Cue them to take their feet wider to create more space."},
                {id: "c", text: "Encourage them to round their back more."},
                {id: "d", text: "Tell them to skip the pose."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "In twists, students in larger bodies may benefit from:",
            options: [
                {id: "a", text: "Twisting deeper than anyone else."},
                {id: "b", text: "Focusing on an open twist and lifting the torso to create space before rotating."},
                {id: "c", text: "Holding their breath."},
                {id: "d", text: "Avoiding twists altogether."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "It is important for a teacher to use language that is:",
            options: [
                {id: "a", text: "Focused on weight loss and changing the body."},
                {id: "b", text: "Body-neutral and focuses on what the body can do, not what it looks like."},
                {id: "c", text: "Critical of the student's body."},
                {id: "d", text: "Assuming the student wants to lose weight."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "How can props be helpful for students in larger bodies?",
            options: [
                {id: "a", text: "They are not helpful."},
                {id: "b", text: "Straps can extend reach, and blocks can bring the floor closer, making poses more accessible."},
                {id: "c", text: "Props are a sign of weakness."},
                {id: "d", text: "Only thin people use props."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'safety-14',
    category: 'Safety Guidelines',
    title: 'Protecting hypermobile students.',
    description: 'Learn to teach students with excessive flexibility how to engage muscles and protect their joints.',
    quiz: [
        {
            question: "What is hypermobility?",
            options: [
                {id: "a", text: "The inability to move."},
                {id: "b", text: "A condition where a person's joints have an unusually large range of motion."},
                {id: "c", text: "Being extremely muscular."},
                {id: "d", text: "A type of advanced yoga."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "What is the main risk for hypermobile students in yoga?",
            options: [
                {id: "a", text: "They are not at risk, as they are very flexible."},
                {id: "b", text: "They can easily overstretch ligaments and create joint instability, leading to injury."},
                {id: "c", text: "They might get bored."},
                {id: "d", text: "They cannot get a good stretch."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A key cue for a hypermobile student is to:",
            options: [
                {id: "a", text: "Go as deep as possible into every stretch."},
                {id: "b", text: "Focus on muscular engagement and stability, rather than just flexibility."},
                {id: "c", text: "Relax all their muscles completely."},
                {id: "d", text: "Lock all their joints."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "What does 'micro-bending' the knees or elbows mean?",
            options: [
                {id: "a", text: "Bending the joint as much as possible."},
                {id: "b", text: "A small, subtle bend in the joint to prevent it from hyperextending or locking."},
                {id: "c", text: "A type of advanced stretch."},
                {id: "d", text: "It is a sign of weakness."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "For a hypermobile student, strength-building poses are:",
            options: [
                {id: "a", text: "Not important."},
                {id: "b", text: "Just as, if not more, important than stretching poses."},
                {id: "c", text: "Too easy."},
                {id: "d", text: "To be avoided."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'safety-15',
    category: 'Safety Guidelines',
    title: 'Avoiding overstretching in yin classes.',
    description: 'Understand the difference between healthy stress on tissues and harmful pain.',
    quiz: [
        {
            question: "What is the primary target of Yin Yoga?",
            options: [
                {id: "a", text: "Muscles."},
                {id: "b", text: "Deeper connective tissues like ligaments, tendons, and fascia."},
                {id: "c", text: "Cardiovascular endurance."},
                {id: "d", text: "Building strength."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "What is 'playing the edge' in Yin Yoga?",
            options: [
                {id: "a", text: "Going to your absolute maximum stretch immediately."},
                {id: "b", text: "Finding the initial point of resistance and sensation, then holding there, rather than pushing to the limit."},
                {id: "c", text: "Coming out of the pose as soon as you feel anything."},
                {id: "d", text: "A competitive game."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Why are props heavily used in Yin Yoga?",
            options: [
                {id: "a", text: "To make the poses harder."},
                {id: "b", text: "To support the body, allowing muscles to relax so the stress can transfer to the connective tissues."},
                {id: "c", text: "Because Yin practitioners are lazy."},
                {id: "d", text: "For decoration."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "What kind of sensation should be avoided in Yin Yoga?",
            options: [
                {id: "a", text: "A dull, achy sensation of stretching."},
                {id: "b", text: "Any sharp, burning, or electrical sensation, especially around joints."},
                {id: "c", text: "Any sensation at all."},
                {id: "d", text: "A feeling of warmth."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "The long holds in Yin Yoga are designed to apply a gentle, healthy stress to tissues. This is known as:",
            options: [
                {id: "a", text: "Overstretching."},
                {id: "b", text: "Mechanotransduction."},
                {id: "c", text: "A bad idea."},
                {id: "d", text: "Muscular contraction."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'safety-16',
    category: 'Safety Guidelines',
    title: 'Warm-up principles to avoid injury.',
    description: 'Learn how to properly prepare the body for a more active yoga practice.',
    quiz: [
        {
            question: "What is the primary purpose of a warm-up?",
            options: [
                {id: "a", text: "To get to the peak pose as quickly as possible."},
                {id: "b", text: "To gradually increase heart rate, warm up muscles, and mobilize joints."},
                {id: "c", text: "To stretch muscles to their maximum length."},
                {id: "d", text: "To cool the body down."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "What is 'dynamic stretching' and why is it good for a warm-up?",
            options: [
                {id: "a", text: "Holding a passive stretch for a long time; it's not good for a warm-up."},
                {id: "b", text: "Moving through a range of motion, like Cat-Cow or gentle Sun Salutations, which prepares the body for more intense movement."},
                {id: "c", text: "Bouncing in a stretch."},
                {id: "d", text: "Stretching with a partner."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Which of these is a good warm-up sequence?",
            options: [
                {id: "a", text: "Starting with the peak pose."},
                {id: "b", text: "Gentle spinal movements, wrist and ankle circles, followed by a few rounds of Cat-Cow and Sun Salutation A."},
                {id: "c", text: "A 5-minute Savasana."},
                {id: "d", text: "Deep, static hamstring stretches on cold muscles."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Why should deep, static stretching be avoided at the very beginning of a warm-up?",
            options: [
                {id: "a", text: "It shouldn't, it's the best way to start."},
                {id: "b", text: "Stretching cold muscles can increase the risk of pulling or tearing them."},
                {id: "c", text: "It's too boring."},
                {id: "d", text: "It takes too long."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A good warm-up should last approximately:",
            options: [
                {id: "a", text: "30 seconds."},
                {id: "b", text: "At least 5-10 minutes, depending on the intensity of the class to follow."},
                {id: "c", text: "The entire class."},
                {id: "d", text: "1 minute."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'safety-17',
    category: 'Safety Guidelines',
    title: 'Cooling down properly with counterposes.',
    description: 'Learn how to sequence the end of class to neutralize the spine and calm the nervous system.',
    quiz: [
        {
            question: "What is a counterpose?",
            options: [
                {id: "a", text: "A pose that is the exact opposite of the one you just did."},
                {id: "b", text: "A pose that neutralizes or balances the effects of a previous, more intense pose."},
                {id: "c", text: "The most difficult pose in the sequence."},
                {id: "d", text: "A pose you do with a partner."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "After a series of deep backbends, what is an appropriate counterpose?",
            options: [
                {id: "a", text: "Another deep backbend."},
                {id: "b", text: "A gentle forward fold like Child's Pose."},
                {id: "c", text: "A deep, aggressive forward fold to immediately reverse the curve."},
                {id: "d", text: "Handstand."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Why is a cool-down important?",
            options: [
                {id: "a", text: "It's not, you can just leave after the peak pose."},
                {id: "b", text: "It helps to gradually lower the heart rate and calm the nervous system, and prepare the body for Savasana."},
                {id: "c", text: "It's a time to do more core work."},
                {id: "d", text: "It's a time to socialize."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Which of these sequences represents a proper cool-down?",
            options: [
                {id: "a", text: "Peak Pose -> Savasana."},
                {id: "b", text: "Peak Pose -> More challenging poses -> Savasana."},
                {id: "c", text: "Peak Pose -> Gentle counterposes (like twists and forward folds) -> Savasana."},
                {id: "d", text: "Savasana -> Peak Pose."}
            ],
            correctAnswerId: "c"
        },
        {
            question: "After a class with many twists to the right, you should:",
            options: [
                {id: "a", text: "Only do more twists to the right."},
                {id: "b", text: "Ensure you have done an equal number and duration of twists to the left to create balance."},
                {id: "c", text: "Do a backbend."},
                {id: "d", text: "Do a forward fold."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'safety-18',
    category: 'Safety Guidelines',
    title: 'Monitoring student breath for safety.',
    description: 'Learn how the sound and rhythm of students\\' breath can be a key indicator of their state.',
    quiz: [
        {
            question: "If you hear a student holding their breath in a challenging pose, it is often a sign of:",
            options: [
                {id: "a", text: "Deep relaxation."},
                {id: "b", text: "Straining or excessive effort."},
                {id: "c", text: "Proper technique."},
                {id: "d", text: "Boredom."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "What is a good verbal cue if you notice a student holding their breath?",
            options: [
                {id: "a", text: "'Stop holding your breath!'"},
                {id: "b", text: "A general reminder to the whole class, like 'Check in with your breath. Is it still flowing smoothly?'"},
                {id: "c", text: "Ignore it, they will figure it out."},
                {id: "d", text: "Point them out to the class."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Shallow, rapid breathing during a class can indicate:",
            options: [
                {id: "a", text: "The student is calm and centered."},
                {id: "b", text: "The student is experiencing anxiety or is being pushed too far physically."},
                {id: "c", text: "The student is ready for a more advanced pose."},
                {id: "d", text: "The student is an advanced practitioner."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "The ideal yoga breath (in an active practice) is typically:",
            options: [
                {id: "a", text: "Loud, gasping, and chaotic."},
                {id: "b", text: "Held for as long as possible."},
                {id: "c", text: "Smooth, steady, and audible enough for the practitioner to hear (like Ujjayi)."},
                {id: "d", text: "As shallow and quiet as possible."}
            ],
            correctAnswerId: "c"
        },
        {
            question: "Listening to the collective breath of the room can help a teacher to:",
            options: [
                {id: "a", text: "Judge the students."},
                {id: "b", text: "Gauge the overall energy and effort level of the class and adjust the pacing accordingly."},
                {id: "c", text: "Decide what music to play."},
                {id: "d", text: "It's not helpful at all."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'safety-19',
    category: 'Safety Guidelines',
    title: 'Emergency response basics for yoga teachers.',
    description: 'Understand your role and responsibilities in a medical emergency.',
    quiz: [
        {
            question: "What is the first step if a student appears to have a serious medical emergency (e.g., fainting, seizure)?",
            options: [
                {id: "a", text: "Try to diagnose the problem yourself."},
                {id: "b", text: "Call for professional medical help (e.g., 911) immediately."},
                {id: "c", text: "Offer them some water."},
                {id: "d", text: "Ask them to walk it off."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A yoga teacher's role in a medical emergency is to:",
            options: [
                {id: "a", text: "Act as a doctor."},
                {id: "b", text: "Keep the student and the space safe until a medical professional arrives."},
                {id: "c", text: "Continue teaching the class and ignore the situation."},
                {id: "d", text: "Take photos for social media."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Is it a good idea for yoga teachers to be certified in CPR and First Aid?",
            options: [
                {id: "a", text: "No, it's not necessary."},
                {id: "b", text: "Yes, it is highly recommended and can be life-saving."},
                {id: "c", text: "Only if they teach hot yoga."},
                {id: "d", text: "Only if they teach advanced classes."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "If a student faints, you should:",
            options: [
                {id: "a", text: "Try to make them stand up immediately."},
                {id: "b", text: "Ensure they are in a safe position, and if they are conscious, elevate their legs slightly. Call for help."},
                {id: "c", text: "Splash water on their face."},
                {id: "d", text: "Give them a yoga block to hold."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Having an incident report form at your studio is important for:",
            options: [
                {id: "a", text: "Creating unnecessary paperwork."},
                {id: "b", text: "Documenting any accident or emergency for legal and insurance purposes."},
                {id: "c", text: "Blaming the student."},
                {id: "d", text: "It's not important."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'safety-20',
    category: 'Safety Guidelines',
    title: 'Creating safe spacing in a crowded room.',
    description: 'Learn strategies to manage a full class without compromising student safety.',
    quiz: [
        {
            question: "One way to create more space in a crowded room is to:",
            options: [
                {id: "a", text: "Tell some people to leave."},
                {id: "b", text: "Stagger the mats brick-style, rather than in straight rows."},
                {id: "c", text: "Ask everyone to practice with their eyes closed."},
                {id: "d", text: "Turn off the lights."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Before teaching a pose with a wide range of motion (like Warrior II with arms out), you should:",
            options: [
                {id: "a", text: "Assume everyone has enough space."},
                {id: "b", text: "Give a verbal cue like, 'Extend your arms, being mindful of your neighbor.'"},
                {id: "c", text: "Tell everyone to move as fast as possible."},
                {id: "d", text: "Tell everyone to make their pose smaller."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "If you need to walk through a crowded class to assist a student, you should:",
            options: [
                {id: "a", text: "Step over students and their mats."},
                {id: "b", text: "Move slowly and mindfully, trying not to disturb practicing students."},
                {id: "c", text: "Ask students to move out of your way."},
                {id: "d", text: "Give up and don't assist."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A teacher can manage a crowded room by:",
            options: [
                {id: "a", text: "Choosing a sequence with many wide-legged poses that take up a lot of space."},
                {id: "b", text: "Choosing a sequence with more contained movements and being mindful of transitions."},
                {id: "c", text: "Ignoring the back row."},
                {id: "d", text: "Teaching from the corner of the room."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "What is a potential safety hazard in a crowded room?",
            options: [
                {id: "a", text: "Students might make new friends."},
                {id: "b", text: "Students colliding with each other during dynamic movements."},
                {id: "c", text: "The room might get too hot."},
                {id: "d", text: "The teacher might not be able to see everyone."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  // 🌱 E. Teaching Ethics & Professionalism (20 Lessons)
  {
    id: 'ethics-1',
    category: 'Teaching Ethics & Professionalism',
    title: 'Establishing professional boundaries.',
    description: 'Understand the importance of the teacher-student relationship and how to maintain its integrity.',
    quiz: [
        {
            question: "Why is it important to establish professional boundaries with students?",
            options: [
                {id: "a", text: "To seem aloof and unfriendly."},
                {id: "b", text: "To maintain a safe, respectful, and clear therapeutic container for the practice."},
                {id: "c", text: "It's not important; teachers and students should be best friends."},
                {id: "d", text: "To get more followers on social media."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Which of the following is an example of a boundary crossing?",
            options: [
                {id: "a", text: "Answering a student's question about a yoga pose after class."},
                {id: "b", text: "Borrowing money from a student or engaging in a dual relationship where you are also their therapist."},
                {id: "c", text: "Remembering a student's name."},
                {id: "d", text: "Offering a modification to a student."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "If a student shares very personal information with you, you should:",
            options: [
                {id: "a", text: "Share it with the rest of the class."},
                {id: "b", text: "Listen with compassion, maintain confidentiality, and avoid giving unsolicited life advice."},
                {id: "c", text: "Try to solve all their problems for them."},
                {id: "d", text: "Tell them to stop talking."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A teacher's focus during class should be on:",
            options: [
                {id: "a", text: "Their own personal practice."},
                {id: "b", text: "Their phone."},
                {id: "c", text: "Holding space for the students' experience."},
                {id: "d", text: "What they are going to eat for dinner."}
            ],
            correctAnswerId: "c"
        },
        {
            question: "Maintaining professional boundaries helps to prevent:",
            options: [
                {id: "a", text: "Students from enjoying the class."},
                {id: "b", text: "The teacher from being authentic."},
                {id: "c", text: "Potential conflicts of interest, dependency, and misuse of the teacher's power dynamic."},
                {id: "d", text: "Friendships from forming."}
            ],
            correctAnswerId: "c"
        }
    ]
  },
  {
    id: 'ethics-2',
    category: 'Teaching Ethics & Professionalism',
    title: 'Managing teacher-student relationships.',
    description: 'Navigate the nuances of connection and professionalism in the yoga space.',
    quiz: [
        {
            question: "What is the inherent power dynamic in a teacher-student relationship?",
            options: [
                {id: "a", text: "The student has more power than the teacher."},
                {id: "b", text: "The teacher is in a position of authority and trust, which comes with responsibility."},
                {id: "c", text: "There is no power dynamic."},
                {id: "d", text: "The studio owner has all the power."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Is it appropriate to date a current student?",
            options: [
                {id: "a", text: "Yes, it's totally fine."},
                {id: "b", text: "Most ethical guidelines strongly advise against it due to the power imbalance."},
                {id: "c", text: "Only if you think they are 'the one'."},
                {id: "d", text: "Only if the student makes the first move."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "How should a teacher handle a student's crush or attachment?",
            options: [
                {id: "a", text: "Encourage it, as it means you are a good teacher."},
                {id: "b", text: "Gently but firmly maintain professional boundaries, without shaming the student."},
                {id: "c", text: "Gossip about it with other students."},
                {id: "d", text: "Pretend you don't notice."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Connecting with students on social media:",
            options: [
                {id: "a", text: "Is always a bad idea."},
                {id: "b", text: "Is required for all teachers."},
                {id: "c", text: "Can be okay, but it's wise to keep the content professional and related to your teaching."},
                {id: "d", text: "Means you should share all your personal life details."}
            ],
            correctAnswerId: "c"
        },
        {
            question: "A healthy teacher-student relationship is one where the teacher:",
            options: [
                {id: "a", text: "Creates dependency, so the student never leaves."},
                {id: "b", text: "Empowers the student to become their own best teacher."},
                {id: "c", text: "Tells the student what to do in all aspects of their life."},
                {id: "d", text: "Sees the student as a source of validation."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'ethics-3',
    category: 'Teaching Ethics & Professionalism',
    title: 'Maintaining confidentiality & safe space.',
    description: 'Uphold student privacy and trust as a cornerstone of your teaching.',
    quiz: [
        {
            question: "If a student shares that they have a specific injury, you should:",
            options: [
                {id: "a", text: "Announce it to the class so everyone knows."},
                {id: "b", text: "Keep that information confidential and use it only to offer them safe modifications."},
                {id: "c", text: "Post about it on social media."},
                {id: "d", text: "Forget it immediately."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "What does creating a 'safe space' mean?",
            options: [
                {id: "a", text: "A room with padded walls."},
                {id: "b", text: "An environment where students feel physically and emotionally secure, free from judgment."},
                {id: "c", text: "A class where no one is allowed to talk."},
                {id: "d", text: "A class that is easy for everyone."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Why should you avoid gossiping about students with other students or teachers?",
            options: [
                {id: "a", text: "It's not fun."},
                {id: "b", text: "It erodes trust and violates the safe container of the class."},
                {id: "c", text: "It's okay as long as you don't use their name."},
                {id: "d", text: "It's only bad if you get caught."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "If you see a student from your class out in public, you should:",
            options: [
                {id: "a", text: "Run up and give them a big hug."},
                {id: "b", text: "Shout 'Hey, I saw you in yoga!' across the grocery store."},
                {id: "c", text: "Acknowledge them with a simple smile or nod, respecting their privacy."},
                {id: "d", text: "Pretend you don't know them."}
            ],
            correctAnswerId: "c"
        },
        {
            question: "Maintaining confidentiality helps to build:",
            options: [
                {id: "a", text: "A wall between you and your students."},
                {id: "b", text: "Trust, which is the foundation of a healthy teacher-student relationship."},
                {id: "c", text: "Your ego."},
                {id: "d", text: "A sense of mystery."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'ethics-4',
    category: 'Teaching Ethics & Professionalism',
    title: 'Anatomy of consent—touch, photos, private info.',
    description: 'Go deeper into the different layers of consent required in a professional setting.',
    quiz: [
        {
            question: "Consent for hands-on assists must be:",
            options: [
                {id: "a", text: "Assumed unless the student says no."},
                {id: "b", text: "Given once at the beginning of the student's first class."},
                {id: "c", text: "Clear, enthusiastic, and reversible at any time."},
                {id: "d", text: "Obtained in writing before every class."}
            ],
            correctAnswerId: "c"
        },
        {
            question: "Before taking photos or videos in a class where students are visible, you must:",
            options: [
                {id: "a", text: "Just do it quickly so no one notices."},
                {id: "b", text: "Obtain explicit permission from every identifiable person."},
                {id: "c", text: "Assume it's okay for marketing purposes."},
                {id: "d", text: "Only take photos of the students in the front row."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Using a student's email from your sign-in sheet for your personal newsletter without their permission is:",
            options: [
                {id: "a", text: "A great marketing strategy."},
                {id: "b", text: "A violation of their privacy and potentially illegal under data protection laws (like GDPR)."},
                {id: "c", text: "Okay if the newsletter is really good."},
                {id: "d", text: "Standard practice."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A student gives consent for an assist in Downward Dog. This means:",
            options: [
                {id: "a", text: "You have consent to assist them in every other pose for the rest of class."},
                {id: "b", text: "You have consent for that specific assist in that moment only."},
                {id: "c", text: "You have consent to assist them for the rest of the month."},
                {id: "d", text: "You can now assist their friends too."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "The best policy for consent is to be:",
            options: [
                {id: "a", text: "Vague and indirect."},
                {id: "b", text: "Overly cautious to the point of never touching anyone."},
                {id: "c", text: "Clear, transparent, and respectful, making 'no' an easy and acceptable answer."},
                {id: "d", text: "Assuming 'yes' unless told otherwise."}
            ],
            correctAnswerId: "c"
        }
    ]
  },
  {
    id: 'ethics-5',
    category: 'Teaching Ethics & Professionalism',
    title: 'Trauma-informed teaching language.',
    description: 'Learn to use language that is invitational, empowering, and avoids potential triggers.',
    quiz: [
        {
            question: "Which phrase is more trauma-informed?",
            options: [
                {id: "a", text: "'Now, you are going to push yourself into wheel pose.'"},
                {id: "b", text: "'If you'd like to explore wheel pose, you might begin by... And if not, supported bridge is a wonderful option.'"}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Why is invitational language ('you might try,' 'if it feels right for you') important?",
            options: [
                {id: "a", text: "It makes the teacher sound less confident."},
                {id: "b", text: "It gives agency back to the student, which can be empowering for trauma survivors."},
                {id: "c", text: "It's too wordy and should be avoided."},
                {id: "d", text: "It's only for beginners."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Why should you avoid saying 'just relax' to a student who seems tense?",
            options: [
                {id: "a", text: "It's a very helpful cue."},
                {id: "b", text: "It can be invalidating and is often impossible for someone experiencing anxiety or a trauma response."},
                {id: "c", text: "It's better to tell them to tense up more."},
                {id: "d", text: "Relaxing is not the goal of yoga."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Describing sensations in neutral terms (e.g., 'you might feel warmth or tingling') instead of 'this should feel good' is better because:",
            options: [
                {id: "a", text: "It's more poetic."},
                {id: "b", text: "It doesn't tell the student how they are supposed to feel, allowing for their authentic experience."},
                {id: "c", text: "It's less specific."},
                {id: "d", text: "It's not better, you should always tell students it feels good."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Trauma-informed teaching is ultimately about:",
            options: [
                {id: "a", text: "Trying to be a therapist."},
                {id: "b", text: "Creating a space of safety, choice, and empowerment for all students."},
                {id: "c", text: "Avoiding all difficult poses."},
                {id: "d", text: "Making the class as gentle as possible."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'ethics-6',
    category: 'Teaching Ethics & Professionalism',
    title: 'Avoiding spiritual bypassing.',
    description: 'Learn to recognize and avoid using spiritual concepts to suppress or avoid difficult emotions and realities.',
    quiz: [
        {
            question: "What is spiritual bypassing?",
            options: [
                {id: "a", text: "A shortcut to enlightenment."},
                {id: "b", text: "Using spiritual beliefs to avoid dealing with painful feelings, unresolved wounds, and developmental needs."},
                {id: "c", text: "A type of advanced meditation."},
                {id: "d", text: "Being overly spiritual."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Which of these statements is an example of spiritual bypassing?",
            options: [
                {id: "a", text: "'It's okay to feel sad; allow yourself to be with that emotion.'"},
                {id: "b", text: "'Don't be so negative, just think positive thoughts! Good vibes only!'"},
                {id: "c", text: "'That sounds really difficult. I'm here to listen if you want to talk after class.'"},
                {id: "d", text: "'Anger is a valid emotion that can point to a boundary that's been crossed.'"}
            ],
            correctAnswerId: "b"
        },
        {
            question: "How can a yoga teacher avoid spiritual bypassing in their class?",
            options: [
                {id: "a", text: "By acknowledging that all emotions are valid parts of the human experience."},
                {id: "b", text: "By pretending that negative emotions don't exist."},
                {id: "c", text: "By telling students they should be happy all the time."},
                {id: "d", text: "By focusing only on love and light."}
            ],
            correctAnswerId: "a"
        },
        {
            question: "True spirituality...",
            options: [
                {id: "a", text: "is an escape from reality."},
                {id: "b", text: "integrates and includes all aspects of life, both the 'good' and the 'bad'."},
                {id: "c", text: "denies the existence of pain and suffering."},
                {id: "d", text: "is about being perfect."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A student is crying in Savasana. A response that avoids spiritual bypassing is:",
            options: [
                {id: "a", text: "'Let go of that sadness, it's not serving you.'"},
                {id: "b", text: "Holding space for their experience without needing to fix it or rush them through it."},
                {id: "c", text: "'You should be feeling blissful right now.'"},
                {id: "d", text: "Telling them to get over it.'"}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'ethics-7',
    category: 'Teaching Ethics & Professionalism',
    title: 'Respecting cultural origins of yoga.',
    description: 'Learn how to honor the South Asian roots of yoga without cultural appropriation.',
    quiz: [
        {
            question: "What is cultural appropriation in the context of yoga?",
            options: [
                {id: "a", text: "Learning about the history and philosophy of yoga."},
                {id: "b", text: "Taking sacred elements from the culture of yoga, stripping them of their original meaning, and using them for personal profit or aesthetic."},
                {id: "c", text: "Using Sanskrit pose names."},
                {id: "d", text: "Traveling to India."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A way to honor the roots of yoga is to:",
            options: [
                {id: "a", text: "Pretend you are an Indian guru."},
                {id: "b", text: "Acknowledge that yoga is a rich spiritual tradition from South Asia and not just a physical workout."},
                {id: "c", text: "Only teach to Indian students."},
                {id: "d", text: "Avoid all philosophical concepts."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "When using Sanskrit, it is important to:",
            options: [
                {id: "a", text: "Make up your own pronunciations."},
                {id: "b", text: "Attempt to learn the correct pronunciation and meaning, and also provide the English translation."},
                {id: "c", text: "Use it to sound superior to your students."},
                {id: "d", text: "Only use Sanskrit and never English."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Which of the following is a way to respect yoga's origins?",
            options: [
                {id: "a", text: "Putting a deity statue on your mat as a decoration."},
                {id: "b", text: "Continuing to learn about the Yoga Sutras, Bhagavad Gita, and other foundational texts."},
                {id: "c", text: "Trademarking a Sanskrit word."},
                {id: "d", text: "Ignoring the history of yoga completely."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "If you are a non-South Asian teacher, it is important to:",
            options: [
                {id: "a", text: "Position yourself as an ultimate expert on Indian culture."},
                {id: "b", text: "Teach from a place of appreciation and respect, acknowledge your position, and amplify South Asian teachers and voices."},
                {id: "c", text: "Ignore your positionality and teach as if yoga has no cultural roots."},
                {id: "d", text: "Feel guilty about teaching yoga."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'ethics-8',
    category: 'Teaching Ethics & Professionalism',
    title: 'Teaching inclusively (body-positive, accessible).',
    description: 'Learn to create a welcoming space for all bodies, abilities, and backgrounds.',
    quiz: [
        {
            question: "What is a key component of inclusive teaching?",
            options: [
                {id: "a", text: "Ensuring everyone does the same version of the pose."},
                {id: "b", text: "Offering variations and modifications for poses, and using props."},
                {id: "c", text: "Only teaching to students who are already flexible and strong."},
                {id: "d", text: "Using competitive language."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Body-positive language in a yoga class focuses on:",
            options: [
                {id: "a", text: "How to get a 'bikini body'."},
                {id: "b", text: "What the body can do and feel, rather than what it looks like."},
                {id: "c", text: "Pointing out students' physical flaws."},
                {id: "d", text: "Encouraging weight loss."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Which statement is the most inclusive?",
            options: [
                {id: "a", text: "'Everyone should be able to do this.'"},
                {id: "b", text: "'Here is one option. Another option is to use a block. Find the version that works for your body today.'"},
                {id: "c", text: "'The 'real' pose looks like this.'"},
                {id: "d", text: "'If you can't do this, just watch.'"}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Accessibility in yoga means:",
            options: [
                {id: "a", text: "The studio has a ramp."},
                {id: "b", text: "Making the practice adaptable to people with different abilities, incomes, and backgrounds."},
                {id: "c", text: "Making the yoga class as easy as possible."},
                {id: "d", text: "The studio is open 24/7."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "To be more inclusive, a teacher should avoid assuming:",
            options: [
                {id: "a", text: "That all students share the same physical abilities, background, or goals for their practice."},
                {id: "b", text: "That students want to feel better."},
                {id: "c", text: "That students are breathing."},
                {id: "d", text: "That students are in a yoga class."}
            ],
            correctAnswerId: "a"
        }
    ]
  },
  {
    id: 'ethics-9',
    category: 'Teaching Ethics & Professionalism',
    title: 'Avoiding ableist language.',
    description: 'Learn to use language that does not discriminate against people with disabilities.',
    quiz: [
        {
            question: "What is ableist language?",
            options: [
                {id: "a", text: "Language that is very descriptive."},
                {id: "b", text: "Language that is centered on the experiences of able-bodied people and can be offensive or exclusionary to people with disabilities."},
                {id: "c", text: "Using too much Sanskrit."},
                {id: "d", text: "Speaking too quietly."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Instead of saying 'Stand up tall,' a more inclusive cue is:",
            options: [
                {id: "a", text: "'If you are standing, lengthen your spine.'"},
                {id: "b", text: "'People who are standing should stand up.'"},
                {id: "c", text: "'Everyone, stand up now.'"},
                {id: "d", text: "There is no better cue."}
            ],
            correctAnswerId: "a"
        },
        {
            question: "Why should you avoid saying things like 'This is an easy pose'?",
            options: [
                {id: "a", text: "Because it might not be easy for everyone, which can be discouraging or shaming."},
                {id: "b", text: "Because no poses in yoga are easy."},
                {id: "c", text: "Because it makes the teacher sound arrogant."},
                {id: "d", text: "Because it's a lie."}
            ],
            correctAnswerId: "a"
        },
        {
            question: "A good alternative to 'Walk your feet to your hands' for a student who cannot walk is:",
            options: [
                {id: "a", text: "To tell them to skip that part."},
                {id: "b", text: "To use more general language like 'Make your way to a forward fold at the top of your mat.'"},
                {id: "c", text: "To carry them to the top of their mat."},
                {id: "d", text: "To point them out."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "The goal of avoiding ableist language is to:",
            options: [
                {id: "a", text: "Be politically correct."},
                {id: "b", text: "Create a welcoming environment where students of all abilities feel respected and included."},
                {id: "c", text: "Make the class more confusing."},
                {id: "d", text: "Cater only to disabled students."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'ethics-10',
    category: 'Teaching Ethics & Professionalism',
    title: 'Business ethics — honest pricing, fair policies.',
    description: 'Understand the ethical considerations of running a yoga business.',
    quiz: [
        {
            question: "Which of the following is an example of ethical pricing?",
            options: [
                {id: "a", text: "Hiding fees and charges until after the student has signed up."},
                {id: "b", text: "Clear, transparent pricing and cancellation policies."},
                {id: "c", text: "A complicated and confusing contract that is difficult to cancel."},
                {id: "d", text: "Charging different prices to different people for the same service without a clear reason."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A fair cancellation policy:",
            options: [
                {id: "a", text: "Should make it impossible for a student to ever cancel."},
                {id: "b", text: "Should be clear, communicated upfront, and balance the needs of the business with respect for the student."},
                {id: "c", text: "Should charge students for a full year even if they cancel."},
                {id: "d", text: "Should not exist."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "If you are an employee of a yoga studio, it is generally unethical to:",
            options: [
                {id: "a", text: "Promote the studio's classes on your social media."},
                {id: "b", text: "Actively recruit the studio's students for your own private classes or competing studio."},
                {id: "c", text: "Teach a good class."},
                {id: "d", text: "Be friends with your coworkers."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "What is a 'sliding scale' payment option?",
            options: [
                {id: "a", text: "A way to make prices go up and down randomly."},
                {id: "b", text: "An option that allows students to pay what they can within a suggested range, increasing accessibility."},
                {id: "c", text: "A discount for your friends."},
                {id: "d", text: "A type of yoga pose."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Ethical marketing for yoga should avoid:",
            options: [
                {id: "a", text: "Showing diverse body types."},
                {id: "b", text: "Making unrealistic claims, like promising that yoga will cure a specific disease."},
                {id: "c", text: "Being clear about what is offered."},
                {id: "d", text: "Using photos of people practicing yoga."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'ethics-11',
    category: 'Teaching Ethics & Professionalism',
    title: 'Class start/end punctuality.',
    description: 'Respecting students\\' time is a fundamental part of professionalism.',
    quiz: [
        {
            question: "Why is it important to start and end class on time?",
            options: [
                {id: "a", text: "It's not, a few minutes here or there doesn't matter."},
                {id: "b", text: "It shows respect for students' schedules and the teacher/class that comes after you."},
                {id: "c", text: "It allows you to fit more poses in."},
                {id: "d", text: "Only the start time matters."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "If you know you are going to run a few minutes late, you should:",
            options: [
                {id: "a", text: "Just show up late and not say anything."},
                {id: "b", text: "Try to contact the studio or have a way to inform the students if possible."},
                {id: "c", text: "Cancel the class."},
                {id: "d", text: "Make the class run extra long to make up for it."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Consistently running your classes long can be seen as:",
            options: [
                {id: "a", text: "A bonus for the students."},
                {id: "b", text: "Disrespectful to students who may have other commitments to get to."},
                {id: "c", text: "A sign of a passionate teacher."},
                {id: "d", text: "Good for business."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "How can you ensure your class ends on time?",
            options: [
                {id: "a", text: "By not having a plan."},
                {id: "b", text: "By having a class plan and keeping an eye on the clock throughout the class."},
                {id: "c", text: "By rushing through Savasana."},
                {id: "d", text: "By starting late."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Punctuality demonstrates that the teacher is:",
            options: [
                {id: "a", text: "Boring and rigid."},
                {id: "b", text: "Professional, reliable, and respectful."},
                {id: "c", text: "In a hurry."},
                {id: "d", text: "Not very spiritual."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'ethics-12',
    category: 'Teaching Ethics & Professionalism',
    title: 'Non-attachment to student outcomes.',
    description: 'Learn to offer the practice without being attached to how your students receive it or what they achieve.',
    quiz: [
        {
            question: "What does 'non-attachment to student outcomes' mean?",
            options: [
                {id: "a", text: "Not caring if your students learn anything or are safe."},
                {id: "b", text: "Teaching your best class and then letting go of any need for students to like it, 'get it', or achieve a certain pose."},
                {id: "c", text: "Only teaching students who are already advanced."},
                {id: "d", text: "Not looking at your students during class."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "If a student doesn't seem to be enjoying your class, you should:",
            options: [
                {id: "a", text: "Take it personally and feel like a failure."},
                {id: "b", text: "Recognize that the practice may not be for them today, and that's okay."},
                {id: "c", text: "Confront them after class and ask what's wrong."},
                {id: "d", text: "Change your entire sequence to please them."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "This principle is related to which concept from the Bhagavad Gita?",
            options: [
                {id: "a", text: "The concept of ahimsa (non-harming)."},
                {id: "b", text: "The concept of karma yoga: acting without attachment to the fruits of your actions."},
                {id: "c", text: "The concept of pranayama (breath control)."},
                {id: "d", text: "The concept of a guru."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A teacher's self-worth should NOT be tied to:",
            options: [
                {id: "a", text: "How many students can do a handstand in their class."},
                {id: "b", text: "Their commitment to teaching safely and authentically."},
                {id: "c", text: "Their ongoing studentship and learning."},
                {id: "d", text: "Their professionalism and integrity."}
            ],
            correctAnswerId: "a"
        },
        {
            question: "Letting go of attachment to outcomes allows a teacher to:",
            options: [
                {id: "a", text: "Be lazy and unprepared."},
                {id: "b", text: "Teach more authentically and from the heart, rather than from a place of needing validation."},
                {id: "c", text: "Ignore their students' needs."},
                {id: "d", text: "Only teach poses they like."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'ethics-13',
    category: 'Teaching Ethics & Professionalism',
    title: 'Creating a non-judgmental environment.',
    description: 'Foster a space where students feel safe to be themselves, without fear of criticism.',
    quiz: [
        {
            question: "How can a teacher's language foster a non-judgmental environment?",
            options: [
                {id: "a", text: "By using comparative words like 'better' or 'more advanced'."},
                {id: "b", text: "By using inclusive, invitational language and emphasizing that every body is different."},
                {id: "c", text: "By singling out students who are struggling."},
                {id: "d", text: "By only praising the most flexible students."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "What is the danger of a teacher expressing frustration when a student 'doesn't get' a pose?",
            options: [
                {id: "a", text: "It motivates the student to try harder."},
                {id: "b", text: "It can create feelings of shame and inadequacy in the student."},
                {id: "c", text: "It shows the teacher is passionate."},
                {id: "d", text: "There is no danger."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A non-judgmental teacher...",
            options: [
                {id: "a", text: "views modifications and props as tools for empowerment, not as signs of weakness."},
                {id: "b", text: "secretly judges their students."},
                {id: "c", text: "believes there is only one right way to do a pose."},
                {id: "d", text: "corrects every small imperfection."}
            ],
            correctAnswerId: "a"
        },
        {
            question: "How can a teacher model non-judgment?",
            options: [
                {id: "a", text: "By being self-critical and showing frustration with their own body."},
                {id: "b", text: "By demonstrating self-compassion and a sense of humor, even if they stumble or fall."},
                {id: "c", text: "By never making a mistake."},
                {id: "d", text: "By pretending to be perfect."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "The opposite of a non-judgmental environment is one that feels:",
            options: [
                {id: "a", text: "Supportive."},
                {id: "b", text: "Competitive and critical."},
                {id: "c", text: "Welcoming."},
                {id: "d", text: "Safe."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'ethics-14',
    category: 'Teaching Ethics & Professionalism',
    title: 'Communicating clearly & respectfully.',
    description: 'Effective communication is key to being a successful and respected teacher.',
    quiz: [
        {
            question: "Which of the following is an example of clear communication?",
            options: [
                {id: "a", text: "Mumbling your cues."},
                {id: "b", text: "Using simple, direct language and avoiding jargon."},
                {id: "c", text: "Using vague, confusing metaphors for every pose."},
                {id: "d", text: "Speaking in a monotone voice."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "If a student asks a question you don't know the answer to, you should:",
            options: [
                {id: "a", text: "Make up an answer."},
                {id: "b", text: "Respectfully say, 'That's a great question, and I don't know the answer, but I will find out and get back to you.'"},
                {id: "c", text: "Tell them it's a stupid question."},
                {id: "d", text: "Ignore the question."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Respectful communication includes:",
            options: [
                {id: "a", text: "Interrupting students when they are talking."},
                {id: "b", text: "Actively listening when a student speaks to you."},
                {id: "c", text: "Using a condescending tone."},
                {id: "d", text: "Checking your phone while a student is asking a question."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "When giving a correction, it is more respectful to:",
            options: [
                {id: "a", text: "Shout it from across the room."},
                {id: "b", text: "Approach the student quietly and give the suggestion in a discreet tone."},
                {id: "c", text: "Use them as an example of what not to do."},
                {id: "d", text: "Stop the whole class to correct them."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Clear communication also applies to your business practices, such as:",
            options: [
                {id: "a", text: "Having a confusing and hard-to-find class schedule."},
                {id: "b", text: "Making sure your pricing, cancellation policies, and contact information are easy to find and understand."},
                {id: "c", text: "Never answering emails."},
                {id: "d", text: "Hiding your location."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'ethics-15',
    category: 'Teaching Ethics & Professionalism',
    title: 'Teacher presence & authenticity.',
    description: 'Learn to teach from a place of genuine presence and be authentically you.',
    quiz: [
        {
            question: "What is 'teacher presence'?",
            options: [
                {id: "a", text: "Just being physically in the room."},
                {id: "b", text: "Being fully present, aware, and engaged with the students and the energy of the room."},
                {id: "c", text: "Having a very loud voice."},
                {id: "d", text: "Wearing fancy yoga clothes."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Authenticity in teaching means:",
            options: [
                {id: "a", text: "Copying your favorite famous yoga teacher exactly."},
                {id: "b", text: "Sharing every detail of your personal life with your students."},
                {id: "c", text: "Teaching from your own genuine experience and understanding, in your own unique voice."},
                {id: "d", text: "Pretending to be perfect and flawless."}
            ],
            correctAnswerId: "c"
        },
        {
            question: "How can a teacher cultivate presence?",
            options: [
                {id: "a", text: "By thinking about their to-do list during class."},
                {id: "b", text: "By having a personal meditation or grounding practice before they teach."},
                {id: "c", text: "By memorizing a script and never deviating from it."},
                {id: "d", text: "By focusing on how they look in the mirror."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Students are more likely to connect with a teacher who is:",
            options: [
                {id: "a", text: "Aloof and distant."},
                {id: "b", text: "Authentic and human, even if imperfect."},
                {id: "c", text: "Putting on a performance."},
                {id: "d", text: "Trying to be someone they're not."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Which action demonstrates a lack of presence?",
            options: [
                {id: "a", text: "Making eye contact with students."},
                {id: "b", text: "Checking your phone during Savasana."},
                {id: "c", text: "Modifying the class plan based on the students' energy."},
                {id: "d", text: "Walking around the room to observe students."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'ethics-16',
    category: 'Teaching Ethics & Professionalism',
    title: 'Avoiding guru-like behavior.',
    description: 'Understand the difference between being a guide and creating a cult of personality.',
    quiz: [
        {
            question: "What is a sign of a teacher exhibiting 'guru-like' behavior in a negative sense?",
            options: [
                {id: "a", text: "Encouraging students to question things and find their own answers."},
                {id: "b", text: "Positioning themselves as the sole source of wisdom and discouraging dissent."},
                {id: "c", text: "Admitting when they don't know something."},
                {id: "d", text: "Sharing knowledge freely."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A healthy yoga teacher aims to:",
            options: [
                {id: "a", text: "Empower their students."},
                {id: "b", text: "Create followers who are dependent on them."},
                {id: "c", text: "Have students worship them."},
                {id: "d", text: "Control their students' lives."}
            ],
            correctAnswerId: "a"
        },
        {
            question: "It is a red flag if a teacher:",
            options: [
                {id: "a", text: "Suggests modifications."},
                {id: "b", text: "Claims their style of yoga is the only 'right' way to practice."},
                {id: "c", text: "Has a sense of humor."},
                {id: "d", text: "Cites their own teachers and lineage with respect."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "The Sanskrit word 'guru' literally means:",
            options: [
                {id: "a", text: 'Perfect one.'},
                {id: "b", text: 'Dispeller of darkness.'},
                {id: "c", text: 'Flexible person.'},
                {id: "d", text: 'Rich person.'}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A responsible teacher...",
            options: [
                {id: "a", text: "acknowledges they are a guide, not a savior, and that the real teacher is within the student."},
                {id: "b", text: "demands absolute loyalty."},
                {id: "c", text: "never makes mistakes."},
                {id: "d", text: "shares unsolicited advice about students' personal lives."}
            ],
            correctAnswerId: "a"
        }
    ]
  },
  {
    id: 'ethics-17',
    category: 'Teaching Ethics & Professionalism',
    title: 'Professional self-care to avoid burnout.',
    description: 'Learn why taking care of yourself is essential to being a sustainable and effective teacher.',
    quiz: [
        {
            question: "What is teacher burnout?",
            options: [
                {id: "a", text: "A sign of a very popular teacher."},
                {id: "b", text: "Emotional, physical, and mental exhaustion caused by prolonged stress."},
                {id: "c", text: "Something that only new teachers experience."},
                {id: "d", text: "A type of yoga."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Which of these is a key aspect of self-care for a yoga teacher?",
            options: [
                {id: "a", text: "Teaching as many classes as possible without a break."},
                {id: "b", text: "Maintaining their own personal yoga and meditation practice."},
                {id: "c", text: "Only eating kale."},
                {id: "d", text: "Never taking a day off."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Why is it important for teachers to have their own practice?",
            options: [
                {id: "a", text: "So they can show off in class."},
                {id: "b", text: "To refill their own cup, so they can give to others from a place of fullness rather than depletion."},
                {id: "c", text: "It's not important; teaching is their practice."},
                {id: "d", text: "To make other teachers jealous."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Setting boundaries, such as not answering work emails at all hours, is a form of:",
            options: [
                {id: "a", text: "Being lazy."},
                {id: "b", text: "Professional self-care."},
                {id: "c", text: "Being unfriendly."},
                {id: "d", text: "Poor work ethic."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Which of the following can help prevent burnout?",
            options: [
                {id: "a", text: "Taking on more and more responsibilities."},
                {id: "b", text: "Connecting with a community of other teachers for support."},
                {id: "c", text: "Ignoring your own physical and mental health."},
                {id: "d", text: "Comparing yourself constantly to other teachers."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'ethics-18',
    category: 'Teaching Ethics & Professionalism',
    title: 'Honoring lineage without appropriating.',
    description: 'Learn to respectfully acknowledge your teachers and the sources of your knowledge.',
    quiz: [
        {
            question: "What does 'lineage' mean in yoga?",
            options: [
                {id: "a", text: "Your family tree."},
                {id: "b", text: "The direct line of teachers and traditions from which your knowledge comes."},
                {id: "c", text: "A style of yoga pants."},
                {id: "d", text: "A social media hashtag."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "How can you honor your lineage?",
            options: [
                {id: "a", text: "By claiming your teachers' knowledge as your own original thought."},
                {id: "b", text: "By crediting your teachers when you share something you learned from them."},
                {id: "c", text: "By never mentioning your teachers."},
                {id: "d", text: "By pretending you are a guru."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "If you are teaching a concept from a specific philosophy (e.g., Tantra, Vedanta), it is best to:",
            options: [
                {id: "a", text: "Pretend you invented it."},
                {id: "b", text: "Name the philosophy and its origin, showing respect for the source."},
                {id: "c", text: "Assume your students already know what it is."},
                {id: "d", text: "Simplify it until it loses its meaning."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Honoring lineage is a way to practice which yama?",
            options: [
                {id: "a", text: "Ahimsa (non-harm)."},
                {id: "b", text: "Asteya (non-stealing), by not stealing intellectual or spiritual property."},
                {id: "c", text: "Aparigraha (non-grasping)."},
                {id: "d", text: "Brahmacharya (moderation)."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Acknowledging your lineage shows:",
            options: [
                {id: "a", text: "That you are not a real expert."},
                {id: "b", text: "Humility, respect, and gratitude for the knowledge that has been passed down."},
                {id: "c", text: "That you are insecure."},
                {id: "d", text: "That you don't know anything yourself."}
            ],
            correctAnswerId: "b"
        }
    ]
  },
  {
    id: 'ethics-19',
    category: 'Teaching Ethics & Professionalism',
    title: 'Teaching beginners without shaming.',
    description: 'Learn how to make your class a welcoming and empowering entry point for new students.',
    quiz: [
        {
            question: "What is a common fear for beginner yoga students?",
            options: [
                {id: "a", text: "That they will be too good at it."},
                {id: "b", text: "That they will be judged, look silly, or won't be able to keep up."},
                {id: "c", text: "That the class will be too easy."},
                {id: "d", text: "That they will have to talk to people."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "Which of these cues is most welcoming for a beginner?",
            options: [
                {id: "a", text: "'This is a really simple pose, you should all be able to do it.'"},
                {id: "b", text: "'It's totally normal if this feels awkward at first. Focus on how it feels, not how it looks.'"},
                {id: "c", text: "'If you can't do this, you're not trying hard enough.'"},
                {id: "d", text: "Calling out a beginner's mistake in front of the class."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "When a beginner uses a prop, the teacher should:",
            options: [
                {id: "a", text: "Take it away from them."},
                {id: "b", text: "Praise them for making an intelligent choice to support their practice."},
                {id: "c", text: "Ignore them."},
                {id: "d", text: "Point it out as a sign of weakness."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "The best way to teach a complex pose to beginners is to:",
            options: [
                {id: "a", text: "Not teach it at all."},
                {id: "b", text: "Break it down into simple, manageable steps."},
                {id: "c", text: "Show them the full, final version and expect them to copy it."},
                {id: "d", text: "Tell them to watch a YouTube video."}
            ],
            correctAnswerId: "b"
        },
        {
            question: "A beginner-friendly class should prioritize:",
            options: [
                {id: "a", text: "Advanced arm balances and inversions."},
                {id: "b", text: "Safety, clear instructions, and a welcoming atmosphere."},
                {id: "c", text: "A fast, confusing pace."},
                {id: "d", text: "Competition."}
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
  },
  // 📚 F. Sequencing & Class Planning (10 Lessons)
  {
      id: 'sequencing-1',
      category: 'Sequencing & Class Planning',
      title: 'The Arc of a Class: Warm-up, Peak, Cool-down.',
      description: 'Learn the fundamental structure of a well-balanced yoga class.',
      quiz: [
          {
              question: "What is the primary purpose of the warm-up (Integration) phase?",
              options: [
                  {id: "a", text: "To get to the most difficult pose as quickly as possible."},
                  {id: "b", text: "To gently prepare the body for movement and connect students to their breath."},
                  {id: "c", text: "To cool the body down."},
                  {id: "d", text: "To practice Savasana."}
              ],
              correctAnswerId: "b"
          },
          {
              question: "The 'peak' of the class is:",
              options: [
                  {id: "a", text: "The very beginning of class."},
                  {id: "b", text: "The most challenging pose or sequence that the class has been building towards."},
                  {id: "c", text: "The final resting pose."},
                  {id: "d", text: "A 10-minute water break."}
              ],
              correctAnswerId: "b"
          },
          {
              question: "Why is a cool-down essential?",
              options: [
                  {id: "a", text: "To gradually lower the heart rate and calm the nervous system."},
                  {id: "b", text: "To practice more challenging poses."},
                  {id: "c", text: "It's not essential and can be skipped if you're short on time."},
                  {id: "d", text: "To chat with your neighbor."}
              ],
              correctAnswerId: "a"
          },
          {
              question: "Counterposes are most important during which part of the class arc?",
              options: [
                  {id: "a", text: "During the warm-up."},
                  {id: "b", text: "Immediately after the peak pose, during the cool-down."},
                  {id: "c", text: "They are not important."},
                  {id: "d", text: "During Savasana."}
              ],
              correctAnswerId: "b"
          },
          {
              question: "Savasana (Final Relaxation) is considered:",
              options: [
                  {id: "a", text: "An optional part of class."},
                  {id: "b", text: "A time for napping."},
                  {id: "c", text: "One of the most important poses for integrating the practice."},
                  {id: "d", text: "A warm-up for the next class."}
              ],
              correctAnswerId: "c"
          }
      ]
  },
  {
      id: 'sequencing-2',
      category: 'Sequencing & Class Planning',
      title: 'Sequencing for a Peak Pose.',
      description: 'Learn how to intelligently sequence a class that safely prepares students for a specific challenging pose.',
      quiz: [
          {
              question: "When sequencing for a peak pose like Handstand, the warm-up should focus on:",
              options: [
                  {id: "a", text: "Deep hamstring stretches."},
                  {id: "b", text: "Warming up the wrists, shoulders, and core."},
                  {id: "c", text: "Hip openers."},
                  {id: "d", text: "Backbends."}
              ],
              correctAnswerId: "b"
          },
          {
              question: "What does 'breaking down' a peak pose mean?",
              options: [
                  {id: "a", text: "Deciding not to teach it."},
                  {id: "b", text: "Identifying the key actions and muscle groups involved and teaching them in simpler poses first."},
                  {id: "c", text: "Criticizing the pose."},
                  {id: "d", text: "Doing the pose for the students."}
              ],
              correctAnswerId: "b"
          },
          {
              question: "If your peak pose is a deep backbend like Wheel (Urdhva Dhanurasana), your sequence should include:",
              options: [
                  {id: "a", text: "Lots of forward folds."},
                  {id: "b", text: "Shoulder openers, quadriceps stretches, and smaller backbends like Cobra and Bridge."},
                  {id: "c", text: "Only standing poses."},
                  {id: "d", text: "A focus on cooling the body down."}
              ],
              correctAnswerId: "b"
          },
          {
              question: "Why shouldn't you introduce the peak pose at the beginning of class?",
              options: [
                  {id: "a", text: "To build suspense."},
                  {id: "b", text: "The body is not yet warm or prepared, increasing the risk of injury."},
                  {id: "c", text: "Students will get bored afterward."},
                  {id: "d", text: "You should always start with the peak pose."}
              ],
              correctAnswerId: "b"
          },
          {
              question: "A good sequence provides 'puzzle pieces' that:",
              options: [
                  {id: "a", text: "are random and unrelated."},
                  {id: "b", text: "come together to make the peak pose feel more accessible."},
                  {id: "c", text: "are all more difficult than the peak pose."},
                  {id: "d", text: "are all seated poses."}
              ],
              correctAnswerId: "b"
          }
      ]
  },
  // 💼 G. Business of Yoga & Marketing (10 Lessons)
  {
      id: 'business-1',
      category: 'Business of Yoga & Marketing',
      title: 'Finding Your Niche and Voice.',
      description: 'Define who you are as a teacher and who you want to serve.',
      quiz: [
          {
              question: "What is a 'niche' in the context of yoga teaching?",
              options: [
                  {id: "a", text: "A specific style of yoga pants."},
                  {id: "b", text: "A specialized area or population you focus on (e.g., yoga for athletes, prenatal yoga)."},
                  {id: "c", text: "The name of a yoga studio."},
                  {id: "d", text: "A type of yoga mat."}
              ],
              correctAnswerId: "b"
          },
          {
              question: "Why is finding a niche helpful for a new teacher?",
              options: [
                  {id: "a", text: "It's not helpful; you should be everything to everyone."},
                  {id: "b", text: "It allows you to focus your marketing and become known as an expert in a specific area."},
                  {id: "c", text: "It limits your career opportunities."},
                  {id: "d", text: "It means you don't have to learn about other types of yoga."}
              ],
              correctAnswerId: "b"
          },
          {
              question: "Your 'voice' as a teacher refers to:",
              options: [
                  {id: "a", text: "The literal sound of your voice."},
                  {id: "b", text: "Your unique teaching style, personality, and the message you want to share."},
                  {id: "c", text: "The music you play in class."},
                  {id: "d", text: "The brand of clothes you wear."}
              ],
              correctAnswerId: "b"
          },
          {
              question: "How can you discover your teaching voice?",
              options: [
                  {id: "a", text: "By perfectly copying your favorite teacher."},
                  {id: "b", text: "Through practice, self-reflection, and teaching what you are genuinely passionate about."},
                  {id: "c", text: "By taking a marketing course."},
                  {id: "d", text: "By asking a branding expert to create one for you."}
              ],
              correctAnswerId: "b"
          },
          {
              question: "An authentic brand for a yoga teacher is built on:",
              options: [
                  {id: "a", text: "A popular trend."},
                  {id: "b", text: "Your genuine personality, values, and teaching philosophy."},
                  {id: "c", text: "A professional photoshoot."},
                  {id: "d", text: "Having a large social media following."}
              ],
              correctAnswerId: "b"
          }
      ]
  },
  // 🔬 H. Advanced Teaching Concepts (10 Lessons)
  {
      id: 'advanced-1',
      category: 'Advanced Teaching Concepts',
      title: 'Theming Beyond Poses: Weaving in Philosophy.',
      description: 'Learn to integrate yogic philosophy (like the Yamas or Niyamas) into a physical asana class.',
      quiz: [
          {
              question: "If your theme is 'Satya' (truthfulness), how might you cue a pose?",
              options: [
                  {id: "a", text: "'Push yourself to the absolute limit.'"},
                  {id: "b", text: "'Notice where your body is today with honesty, without pushing or forcing.'"},
                  {id: "c", text: "'Try to look like the person next to you.'"},
                  {id: "d", text: "'This is a very easy pose.'"}
              ],
              correctAnswerId: "b"
          },
          {
              question: "How can you introduce a philosophical theme without sounding preachy?",
              options: [
                  {id: "a", text: "By quoting long, complex texts that no one understands."},
                  {id: "b", text: "By relating the concept to a simple, universal human experience."},
                  {id: "c", text: "By telling students they must believe what you believe."},
                  {id: "d", text: "By judging students who don't 'get it'."}
              ],
              correctAnswerId: "b"
          },
          {
              question: "A good place to introduce the theme is:",
              options: [
                  {id: "a", text: "In the middle of the most challenging pose."},
                  {id: "b", text: "During the initial centering at the beginning of class."},
                  {id: "c", text: "As students are walking out the door."},
                  {id: "d", text: "Never, philosophy shouldn't be in a yoga class."}
              ],
              correctAnswerId: "b"
          },
          {
              question: "How does theming add depth to a class?",
              options: [
                  {id: "a", text: "It doesn't, it just makes it longer."},
                  {id: "b", text: "It offers a mental and emotional focus, connecting the physical practice to a larger context."},
                  {id: "c", text: "It confuses students."},
                  {id: "d", text: "It makes the class a religious service."}
              ],
              correctAnswerId: "b"
          },
          {
              question: "Weaving a theme throughout the class means:",
              options: [
                  {id: "a", text: "Repeating the theme word constantly."},
                  {id: "b", text: "Gently reminding students of the theme at relevant moments, like during a challenging pose or during rest."},
                  {id: "c", text: "Only mentioning it at the beginning."},
                  {id: "d", text: "Giving a long lecture at the end."}
              ],
              correctAnswerId: "b"
          }
      ]
  }
];
