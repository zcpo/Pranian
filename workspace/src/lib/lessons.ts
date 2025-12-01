
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
        ],
        correctAnswerId: 'b',
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
            ],
            correctAnswerId: "c"
        },
    ]
  },
  {
    id: 'cueing-3',
    category: 'Cueing Techniques',
    title: 'Layered cueing: foundational → alignment → refinement.',
    description: 'Build a pose progressively, allowing students to integrate each instruction before adding the next.',
    quiz: [
      {
        question: 'Which of these is a "refinement" cue for Warrior II?',
        options: [
          { id: 'a', text: '"Step your feet wide apart."' },
          { id: 'b', text: '"Bend your front knee so it\'s over your ankle."' },
          { id: 'c', text: '"Soften your shoulders away from your ears."' },
        ],
        correctAnswerId: 'c',
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
        question: 'What is the purpose of using the cue "lengthen"?',
        options: [
          { id: 'a', text: 'To tell someone they are too short.' },
          { id: 'b', text: 'To encourage the creation of space in the body, especially the spine.' },
          { id: 'c', text: 'To make the pose harder.' },
        ],
        correctAnswerId: 'b',
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
        question: 'In a twist, a good decompression cue is:',
        options: [
          { id: 'a', text: '"Crank yourself around as far as possible."' },
          { id: 'b', text: '"Inhale to lengthen your spine, exhale to twist."' },
          { id: 'c', text: '"Just twist."' },
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
        question: 'In Triangle Pose, which is a good stability cue before cueing the stretch?',
        options: [
          { id: 'a', text: '"Reach down and touch your toes."' },
          { id: 'b', text: '"Press firmly through both feet and engage your leg muscles."' },
          { id: 'c', text: '"Open your chest to the ceiling."' },
        ],
        correctAnswerId: 'b',
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
        question: 'A cue like "Feel the weight shifting into your front foot" is best for which type of learner?',
        options: [
          { id: 'a', text: 'Auditory' },
          { id: 'b', text: 'Visual' },
          { id: 'c', text: 'Kinesthetic' },
        ],
        correctAnswerId: 'c',
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
                {id: "c", text: "No cues at all."}
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'cueing-11',
    category: 'Cueing Techniques',
    title: 'Sensory cueing — encourage students to feel internally.',
    description: 'Guide students beyond mechanics by inviting them to notice internal sensations.',
    quiz: [
        {
            question: "What is the main goal of sensory cueing?",
            options: [
                {id: "a", text: "To make sure the pose looks perfect from the outside."},
                {id: "b", text: "To guide the student's attention inward, fostering mindfulness and interoception."},
                {id: "c", text: "To test the student's knowledge of anatomy."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'cueing-12',
    category: 'Cueing Techniques',
    title: 'Avoiding fear-based cueing (positive cues).',
    description: 'Use invitational and encouraging language instead of negative or restrictive commands.',
    quiz: [
        {
            question: "How can you rephrase 'Don\\'t let your knee collapse inward' positively?",
            options: [
                {id: "a", text: "'Your knee is collapsing, fix it.'"},
                {id: "b", text: "'Guide your knee to track in the same direction as your middle toe.'"},
                {id: "c", text: "'You\\'ll injure yourself if your knee collapses.'"}
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'cueing-13',
    category: 'Cueing Techniques',
    title: 'Cueing transitions smoothly between poses.',
    description: 'Make the space between the poses as mindful as the poses themselves.',
    quiz: [
        {
            question: "Which cue helps a transition from Downward Dog to a lunge?",
            options: [
                {id: "a", text: "'Now, lunge.'"},
                {id: "b", text: "'Get your foot to the front.'"},
                {id: "c", text: "'On your next inhale, lift your right leg high. Exhale, step your foot between your hands.'"},
            ],
            correctAnswerId: "c"
        },
    ]
  },
  {
    id: 'cueing-14',
    category: 'Cueing Techniques',
    title: 'Using cues that match your class theme.',
    description: 'Weave your theme into your cues to create a cohesive and meaningful experience.',
    quiz: [
        {
            question: "For a 'heart-opening' theme, a good cue in Cobra pose would be:",
            options: [
                {id: "a", text: "'Lift your chest.'"},
                {id: "b", text: "'Shine your heart forward and imagine broadening across your collarbones.'"},
                {id: "c", text: "'Use your back strength.'"},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'cueing-15',
    category: 'Cueing Techniques',
    title: 'Breath cueing to regulate intensity.',
    description: 'Use the breath as a tool to help students ramp up or calm down the energy of their practice.',
    quiz: [
        {
            question: "What cue would help a student calm their nervous system?",
            options: [
                {id: "a", text: "'Breathe faster!'"},
                {id: "b", text: "'Try to make your exhale slightly longer than your inhale.'"},
                {id: "c", text: "'Shorten your breath.'"}
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'cueing-16',
    category: 'Cueing Techniques',
    title: 'Cueing beginners vs advanced students simultaneously.',
    description: 'Offer layered cues and modifications so everyone feels challenged and supported.',
    quiz: [
        {
            question: "How can you challenge advanced students in a mixed-level class?",
            options: [
                {id: "a", text: "Encourage them to do a completely different pose."},
                {id: "b", text: "Offer a more complex variation or a deeper expression of the pose AFTER giving the foundational cues."},
                {id: "c", text: "Tell them the class is too easy for them."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'cueing-17',
    category: 'Cueing Techniques',
    title: 'Predictive cueing (“prepare for…”) for safe transitions.',
    description: 'Give students a heads-up about what is coming next so they can move with more awareness.',
    quiz: [
        {
            question: "Why is predictive cueing important for safety?",
            options: [
                {id: "a", text: "It gives students time to mentally and physically prepare, reducing jerky, reactive movements."},
                {id: "b", text: "It makes the teacher sound more professional."},
                {id: "c", text: "It speeds up the class."},
            ],
            correctAnswerId: "a"
        },
    ]
  },
  {
    id: 'cueing-18',
    category: 'Cueing Techniques',
    title: 'Using silence strategically between cues.',
    description: 'Learn that the space between cues is as important as the cues themselves.',
    quiz: [
        {
            question: "When is a good time to be silent?",
            options: [
                {id: "a", text: "During a fast-paced, complex Vinyasa sequence."},
                {id: "b", text: "While students are holding a pose for several breaths."},
                {id: "c", text: "Never, the teacher should always be talking."}
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'cueing-19',
    category: 'Cueing Techniques',
    title: 'Cueing for trauma-sensitive spaces.',
    description: 'Use invitational language and avoid commanding tones to create a safe environment.',
    quiz: [
        {
            question: "Which cue is most trauma-informed?",
            options: [
                {id: "a", text: "'You must close your eyes now.'"},
                {id: "b", text: "'If you feel comfortable, you might soften your gaze or close your eyes.'"},
                {id: "c", text: "'Close your eyes, everyone!'"},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'cueing-20',
    category: 'Cueing Techniques',
    title: 'Avoiding over-cueing (letting students explore).',
    description: 'Strike a balance between providing guidance and allowing for personal discovery.',
    quiz: [
        {
            question: "Why is it important to let students explore a pose?",
            options: [
                {id: "a", text: "So the teacher can take a break."},
                {id: "b", text: "It encourages them to develop their own body awareness and find what feels right for them."},
                {id: "c", text: "Because there is only one right way to do a pose."},
            ],
            correctAnswerId: "b"
        },
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
        question: 'Which of the following is an example of a clear, verbal consent protocol?',
        options: [
          { id: 'a', text: '"If you are open to receiving hands-on assists today, please give me a clear thumbs up."' },
          { id: 'b', text: 'Assuming students are okay with assists unless they say something.' },
          { id: 'c', text: '"Is everyone cool with assists?"' },
        ],
        correctAnswerId: 'a',
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
            question: "A stabilizing assist should feel like:",
            options: [
                {id: "a", text: "A forceful push."},
                {id: "b", text: "A gentle reminder or a 'wall' for the student to press against."},
                {id: "c", text: "A deep tissue massage."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'assists-3',
    category: 'Hands-On Assists',
    title: 'Lengthening assists (traction/elongation).',
    description: 'Understand how to use gentle traction to help students create space and decompress joints.',
    quiz: [
        {
            question: "In a seated forward fold (Paschimottanasana), a safe lengthening assist involves:",
            options: [
                {id: "a", text: "Pushing down hard on the student's back."},
                {id: "b", text: "Placing hands on their lower back and gently guiding the tissue away from the sacrum as they hinge forward."},
                {id: "c", text: "Pulling their hands to touch their toes."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'assists-4',
    category: 'Hands-On Assists',
    title: 'Strength-activation assists.',
    description: 'Learn to use touch to help students feel and activate specific muscles.',
    quiz: [
        {
            question: "In plank pose, where could you provide a strength-activation assist for the core?",
            options: [
                {id: "a", text: "By lifting the student's hips into the air."},
                {id: "b", text: "By lightly tapping their abdomen and cueing them to draw their navel to their spine."},
                {id: "c", text: "By pressing down on their back."},
            ],
            correctAnswerId: "b"
        },
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
                {id: "c", text: "It does not matter."}
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'assists-6',
    category: 'Hands-On Assists',
    title: 'Common assists in downward dog.',
    description: 'Learn effective and safe ways to assist students in Adho Mukha Svanasana.',
    quiz: [
        {
            question: "If a student has tight shoulders in Downward Dog, a helpful assist is to:",
            options: [
                {id: "a", text: "Press their head down between their arms."},
                {id: "b", text: "Gently guide their outer upper arms to externally rotate, creating space for the neck."},
                {id: "c", text: "Tell them to shrug their shoulders to their ears."}
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'assists-7',
    category: 'Hands-On Assists',
    title: 'Safe assists in warrior poses.',
    description: 'Learn to assist Warrior I, II, and III with stability and alignment in mind.',
    quiz: [
        {
            question: "A safe assist for deepening the lunge in Warrior I is:",
            options: [
                {id: "a", text: "Pushing on the student's front knee."},
                {id: "b", text: "Applying gentle, downward pressure on the front of the back hip/thigh."},
                {id: "c", text: "Stepping on their back foot."}
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'assists-8',
    category: 'Hands-On Assists',
    title: 'Assisting forward folds without pushing.',
    description: 'Learn safe, effective assists for forward folds that prioritize spinal length.',
    quiz: [
        {
            question: "A safer alternative to pushing on the back in Paschimottanasana is:",
            options: [
                {id: "a", text: "To pull their head towards their knees."},
                {id: "b", text: "To stand on their hamstrings."},
                {id: "c", text: "To gently press forward on their lower back/sacrum as they lengthen their spine."},
            ],
            correctAnswerId: "c"
        },
    ]
  },
  {
    id: 'assists-9',
    category: 'Hands-On Assists',
    title: 'Supporting students in backbends safely.',
    description: 'Learn techniques to support, not force, students in poses like Camel and Wheel.',
    quiz: [
        {
            question: "In Camel Pose (Ustrasana), a good assist is to:",
            options: [
                {id: "a", text: "Push their hips forward aggressively."},
                {id: "b", text: "Place your hands on their sacrum and encourage them to lift their heart up."},
                {id: "c", text: "Pull their head back."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'assists-10',
    category: 'Hands-On Assists',
    title: 'How to assist twists without torque pressure.',
    description: 'Learn to assist twists by encouraging length and rotation, not force.',
    quiz: [
        {
            question: "A safe and effective assist for a seated twist (e.g., Ardha Matsyendrasana) involves:",
            options: [
                {id: "a", text: "Using your body weight to crank the student's shoulder around."},
                {id: "b", text: "Gently grounding their opposite sitting bone and guiding their rib cage to rotate on an exhale."},
                {id: "c", text: "Pulling their head to look further behind them."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'assists-11',
    category: 'Hands-On Assists',
    title: 'Hip-opening assists with joint protection.',
    description: 'Learn to assist Pigeon, Lizard, and Baddha Konasana while keeping the knees and hips safe.',
    quiz: [
        {
            question: "A safe assist in Pigeon Pose is to:",
            options: [
                {id: "a", text: "Push down on the hip of the bent leg."},
                {id: "b", text: "Apply gentle, downward pressure on the hip of the straight leg to help level the pelvis."},
                {id: "c", text: "Force the front shin to be parallel."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'assists-12',
    category: 'Hands-On Assists',
    title: 'Restorative yoga assists (bolsters, props, touch).',
    description: 'Learn the art of gentle, supportive touch and prop arrangement in restorative yoga.',
    quiz: [
        {
            question: "An effective restorative assist in Savasana is:",
            options: [
                {id: "a", text: "Shaking the student's legs."},
                {id: "b", text: "Gently pressing down on their shoulders or placing a weighted blanket on their hips."},
                {id: "c", text: "Lifting their head to tuck their chin."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'assists-13',
    category: 'Hands-On Assists',
    title: 'Assists using only props—hands-free assisting.',
    description: 'Learn how to use blocks, straps, and blankets to assist students without direct physical contact.',
    quiz: [
        {
            question: "How can you use a block to assist a student in Triangle Pose?",
            options: [
                {id: "a", text: "Throw it at them."},
                {id: "b", text: "Place a block under their bottom hand to bring the floor closer."},
                {id: "c", text: "Place a block on their back to weigh them down."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'assists-14',
    category: 'Hands-On Assists',
    title: 'Partner assists for workshops.',
    description: 'Explore how to safely and effectively teach partner-based assists.',
    quiz: [
        {
            question: "In a partner forward fold assist, the assisting partner should:",
            options: [
                {id: "a", text: "Sit on their partner's back."},
                {id: "b", text: "Use their body weight to gently press on their partner's sacrum."},
                {id: "c", text: "Pull their partner's arms as hard as they can."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'assists-15',
    category: 'Hands-On Assists',
    title: 'When not to assist (injury, uncertainty, discomfort).',
    description: 'The most important assist is knowing when to hold back.',
    quiz: [
        {
            question: "If you are uncertain about how to safely assist a particular pose or body type, what is the best course of action?",
            options: [
                {id: "a", text: "Guess and hope for the best."},
                {id: "b", text: "Do not assist. Offer verbal cues or a prop-based assist instead."},
                {id: "c", text: "Try a complex assist you saw on Instagram."}
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'assists-16',
    category: 'Hands-On Assists',
    title: 'Trauma-informed touch guidelines.',
    description: 'Understand the principles of giving assists in a way that promotes safety and avoids triggering trauma responses.',
    quiz: [
        {
            question: "Which quality of touch is generally considered more grounding and less activating?",
            options: [
                {id: "a", text: "A quick, light tap."},
                {id: "b", text: "A firm, still, and confident hand."},
                {id: "c", text: "Stroking or rubbing."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'assists-17',
    category: 'Hands-On Assists',
    title: 'Assisting inversions safely.',
    description: 'Learn how to spot and support students in headstand, handstand, and forearm stand.',
    quiz: [
        {
            question: "When assisting a headstand, where should a teacher NEVER place their hands?",
            options: [
                {id: "a", text: "On the student's hips."},
                {id: "b", text: "On the student's legs."},
                {id: "c", text: "On the student's head or neck."},
            ],
            correctAnswerId: "c"
        },
    ]
  },
  {
    id: 'assists-18',
    category: 'Hands-On Assists',
    title: 'How to assist without shifting their balance.',
    description: 'Learn to apply pressure and support in a way that doesn\'t knock students off-center.',
    quiz: [
        {
            question: "What is the concept of 'meeting their energy'?",
            options: [
                {id: "a", text: "Matching the student's personality."},
                {id: "b", text: "Applying an equal and opposite pressure to what the student is exerting, creating stability."},
                {id: "c", text: "Pushing the student in the direction they are already going."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'assists-19',
    category: 'Hands-On Assists',
    title: 'Grounding assists during savasana.',
    description: 'Learn the art of the Savasana assist to help students relax more deeply.',
    quiz: [
        {
            question: "A common and effective Savasana assist is a gentle pressure on the:",
            options: [
                {id: "a", text: "Stomach."},
                {id: "b", text: "Tops of the shoulders, encouraging them to release away from the ears."},
                {id: "c", text: "Knees."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'assists-20',
    category: 'Hands-On Assists',
    title: 'Reading body language when giving assists.',
    description: 'Learn to observe and interpret student non-verbal cues to know if your assist is welcome and effective.',
    quiz: [
        {
            question: "What does 'tensing against' an assist mean?",
            options: [
                {id: "a", text: "The student's muscles are actively resisting your touch."},
                {id: "b", text: "The student is enjoying the assist."},
                {id: "c", text: "The student is weak."},
            ],
            correctAnswerId: "a"
        },
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
            question: "Which pranayama technique would be a good starting point for this theme?",
            options: [
                {id: "a", text: "Advanced breath retention (Kumbhaka)."},
                {id: "b", text: "Simple diaphragmatic (belly) breathing or observing the natural breath."},
                {id: "c", text: "Breath of Fire."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'themes-2',
    category: 'Class Themes',
    title: 'Balance on and off the mat.',
    description: 'Use balancing poses as a metaphor for finding balance in daily life.',
    quiz: [
        {
            question: "A good verbal cue for this theme could be:",
            options: [
                {id: "a", text: "'If you fall, you have bad balance.'"},
                {id: "b", text: "'Just as we find steadiness here by focusing our gaze, we can find stability in life by focusing our intention.'"},
                {id: "c", text: "'Hurry up and balance.'"},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'themes-3',
    category: 'Class Themes',
    title: 'Heart-opening and emotional resilience.',
    description: 'Focus on backbends and chest openers to cultivate vulnerability and compassion.',
    quiz: [
        {
            question: "A good peak pose for a heart-opening class would be:",
            options: [
                {id: "a", text: "A deep forward fold."},
                {id: "b", text: "Camel Pose (Ustrasana) or Wheel Pose (Urdhva Dhanurasana)."},
                {id: "c", text: "Crow Pose (Bakasana)."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'themes-4',
    category: 'Class Themes',
    title: 'Stability + grounding (muladhara focus).',
    description: 'Connect with the earth and find your foundation through standing poses and core stability.',
    quiz: [
        {
            question: "The Muladhara (Root) Chakra is associated with what element?",
            options: [
                {id: "a", text: "Fire."},
                {id: "b", text: "Air."},
                {id: "c", text: "Earth."},
            ],
            correctAnswerId: "c"
        },
    ]
  },
  {
    id: 'themes-5',
    category: 'Class Themes',
    title: 'Sacral creativity flow (svadhisthana).',
    description: 'Focus on fluid movements and hip-opening to tap into creative and emotional energy.',
    quiz: [
        {
            question: "What types of movements are best for a Sacral Chakra themed class?",
            options: [
                {id: "a", text: "Rigid, static holds."},
                {id: "b", text: "Fluid, circular, and wave-like movements."},
                {id: "c", text: "Only linear movements."}
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'themes-6',
    category: 'Class Themes',
    title: 'Solar plexus confidence theme.',
    description: 'Build inner fire and confidence with core work and powerful poses.',
    quiz: [
        {
            question: "What types of poses are central to a solar plexus-themed class?",
            options: [
                {id: "a", text: "Restorative poses."},
                {id: "b", text: "Core-strengthening poses like Plank and Navasana (Boat Pose)."},
                {id: "c", text: "Forward folds."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'themes-7',
    category: 'Class Themes',
    title: 'Heart chakra compassion.',
    description: 'Cultivate love and connection through chest-opening poses and loving-kindness meditation.',
    quiz: [
        {
            question: "What is the primary emotional focus of a heart chakra-themed class?",
            options: [
                {id: "a", text: "Personal power and will."},
                {id: "b", text: "Love, compassion, connection, and forgiveness."},
                {id: "c", text: "Stability and grounding."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'themes-8',
    category: 'Class Themes',
    title: 'Throat chakra communication and truth.',
    description: 'Use neck stretches, mantras, and specific poses to encourage authentic self-expression.',
    quiz: [
        {
            question: "Which of these poses can help to stimulate the throat chakra?",
            options: [
                {id: "a", text: "Warrior II."},
                {id: "b", text: "Fish Pose (Matsyasana) and Shoulder Stand (Salamba Sarvangasana)."},
                {id: "c", text: "Tree Pose."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'themes-9',
    category: 'Class Themes',
    title: 'Third eye intuition.',
    description: 'Use focus points (drishti), meditation, and balancing poses to connect with inner wisdom.',
    quiz: [
        {
            question: "What is the primary function associated with the third eye chakra?",
            options: [
                {id: "a", text: "Intuition, perception, and wisdom."},
                {id: "b", text: "Communication."},
                {id: "c", text: "Love and compassion."},
            ],
            correctAnswerId: "a"
        },
    ]
  },
  {
    id: 'themes-10',
    category: 'Class Themes',
    title: 'Crown chakra connection.',
    description: 'Focus on meditation and Savasana to cultivate a sense of unity and spiritual connection.',
    quiz: [
        {
            question: "Which pose is considered the ultimate expression of the crown chakra's energy?",
            options: [
                {id: "a", text: "Plank Pose."},
                {id: "b", text: "Warrior II."},
                {id: "c", text: "Savasana (Corpse Pose), representing surrender and unity."},
            ],
            correctAnswerId: "c"
        },
    ]
  },
  {
    id: 'themes-11',
    category: 'Class Themes',
    title: 'Seasonal themes (winter grounding, spring awakening).',
    description: 'Align the practice with the energy of the current season.',
    quiz: [
        {
            question: "Which poses would be suitable for a 'Spring Awakening' theme?",
            options: [
                {id: "a", text: "Long, passive holds in restorative poses."},
                {id: "b", text: "Dynamic twists, side bends, and poses that create a sense of lightness and growth."},
                {id: "c", text: "Only seated poses."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'themes-12',
    category: 'Class Themes',
    title: 'Moon cycles (new moon release, full moon energy).',
    description: 'Align the class with the energy of the lunar cycle.',
    quiz: [
        {
            question: "A Full Moon-themed class is often associated with:",
            options: [
                {id: "a", text: "Quiet, inward energy."},
                {id: "b", text: "The peak of energy, celebration, and culmination."},
                {id: "c", text: "Deep rest and relaxation."}
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'themes-13',
    category: 'Class Themes',
    title: 'Yoga philosophy theme — Aparigraha (non-grasping).',
    description: 'Focus on the yama of non-attachment by encouraging students to let go of outcomes.',
    quiz: [
        {
            question: "How can Aparigraha be applied to asana practice?",
            options: [
                {id: "a", text: "By trying to achieve the 'perfect' version of a pose."},
                {id: "b", text: "By letting go of how the pose 'should' look and focusing on how it feels in your body today."},
                {id: "c", text: "By comparing your pose to others in the room."}
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'themes-14',
    category: 'Class Themes',
    title: 'Santosha (contentment).',
    description: 'Cultivate a sense of contentment and gratitude for where you are right now.',
    quiz: [
        {
            question: "How can a yoga practice cultivate Santosha?",
            options: [
                {id: "a", text: "By focusing only on what you can't do."},
                {id: "b", text: "By celebrating what your body can do today, without judgment."},
                {id: "c", text: "By comparing yourself to the teacher."}
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'themes-15',
    category: 'Class Themes',
    title: 'Ahimsa (non-harm).',
    description: 'Focus on self-compassion, listening to the body, and moving in a way that is kind and supportive.',
    quiz: [
        {
            question: "How does Ahimsa apply to a physical yoga practice?",
            options: [
                {id: "a", text: "By pushing through pain to get the 'full expression' of a pose."},
                {id: "b", text: "By listening to the body's signals and backing off when something causes pain."},
                {id: "c", text: "By judging others in the class."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'themes-16',
    category: 'Class Themes',
    title: 'Gratitude flow.',
    description: 'Weave expressions of gratitude throughout the practice for a heart-centered experience.',
    quiz: [
        {
            question: "How can you introduce a gratitude theme at the beginning of class?",
            options: [
                {id: "a", text: "By asking students to think about what they are grateful for."},
                {id: "b", text: "By complaining about the weather."},
                {id: "c", text: "By focusing on a difficult philosophical concept."},
            ],
            correctAnswerId: "a"
        },
    ]
  },
  {
    id: 'themes-17',
    category: 'Class Themes',
    title: 'Strength through softness.',
    description: 'Explore the idea that true strength comes from a balance of effort and ease, not rigidity.',
    quiz: [
        {
            question: "Which yogic concept does this theme directly relate to?",
            options: [
                {id: "a", text: "Ahimsa (non-harm)."},
                {id: "b", text: "Sthira and Sukha (steadiness and ease)."},
                {id: "c", text: "Satya (truthfulness)."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'themes-18',
    category: 'Class Themes',
    title: 'Slow flow for nervous system regulation.',
    description: 'Use slow, mindful movements and long holds to calm the nervous system.',
    quiz: [
        {
            question: "Which of the following is a key component of this type of class?",
            options: [
                {id: "a", text: "Fast transitions and upbeat music."},
                {id: "b", text: "Mindful movement, holding poses for several breaths, and focusing on sensation."},
                {id: "c", text: "A competitive atmosphere."}
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'themes-19',
    category: 'Class Themes',
    title: 'Fire flow (core + heat + tapas).',
    description: 'Build internal heat and discipline with a challenging, core-focused class.',
    quiz: [
        {
            question: "A fire flow class would likely include many of which type of pose?",
            options: [
                {id: "a", text: "Restorative poses."},
                {id: "b", text: "Core work (like Boat Pose), strong standing poses, and repetitive flows (like Sun Salutations)."},
                {id: "c", text: "Gentle stretches."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'themes-20',
    category: 'Class Themes',
    title: 'Yin/Yang balance.',
    description: 'Combine dynamic, active (Yang) sequences with passive, long-held (Yin) poses in one class.',
    quiz: [
        {
            question: "The 'Yin' portion of the class focuses on:",
            options: [
                {id: "a", text: "Building heat and muscle."},
                {id: "b", text: "Long-held, passive poses that target the connective tissues."},
                {id: "c", text: "A fast-paced sequence."}
            ],
            correctAnswerId: "b"
        },
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
            question: "If a student tells you they have a herniated disc, you should advise them to avoid:",
            options: [
                {id: "a", text: "All physical activity."},
                {id: "b", text: "Deep forward folds and loaded spinal flexion."},
                {id: "c", text: "Gentle twists."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'safety-2',
    category: 'Safety Guidelines',
    title: 'Joint stacking principles.',
    description: 'Learn the importance of stacking joints (e.g., knee over ankle) for stability and safety.',
    quiz: [
        {
            question: "In Tabletop Pose, the shoulders should be stacked over the ______, and hips over the ______.",
            options: [
                {id: "a", text: "Hips, knees."},
                {id: "b", text: "Wrists, knees."},
                {id: "c", text: "Elbows, ankles."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'safety-3',
    category: 'Safety Guidelines',
    title: 'Protecting the lower back in folds & backbends.',
    description: 'Learn cues and modifications to keep the lumbar spine safe.',
    quiz: [
        {
            question: "In a backbend like Cobra or Upward-Facing Dog, how can you protect the lower back?",
            options: [
                {id: "a", text: "By pushing all the weight into the lower back."},
                {id: "b", text: "By engaging the core and glutes, and focusing on lifting the chest."},
                {id: "c", text: "By not engaging any muscles."}
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'safety-4',
    category: 'Safety Guidelines',
    title: 'Knee safety in lunges and warriors.',
    description: 'Learn to cue proper alignment to protect the delicate knee joint.',
    quiz: [
        {
            question: "To protect the knee in poses like Pigeon, it's important to:",
            options: [
                {id: "a", text: "Point the front foot."},
                {id: "b", text: "Keep the front foot flexed to stabilize the knee joint."},
                {id: "c", text: "Let the knee do whatever it wants."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'safety-5',
    category: 'Safety Guidelines',
    title: 'Shoulder safety in chaturanga.',
    description: 'Break down one of the most common poses to cause injury and learn to teach it safely.',
    quiz: [
        {
            question: "In a proper Chaturanga, the elbows should be:",
            options: [
                {id: "a", text: "Flared out wide to the sides."},
                {id: "b", text: "Bent to a 90-degree angle or less, stacked directly over the wrists."},
                {id: "c", text: "Completely straight."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'safety-6',
    category: 'Safety Guidelines',
    title: 'Avoiding forcing range of motion.',
    description: 'Understand the difference between healthy stretching and dangerous forcing of joints.',
    quiz: [
        {
            question: "Why should you never bounce in a deep stretch (ballistic stretching)?",
            options: [
                {id: "a", text: "It's an advanced technique that helps you get more flexible."},
                {id: "b", text: "It can trigger the muscle's stretch reflex, causing it to tighten and potentially tear."},
                {id: "c", text: "It's boring."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'safety-7',
    category: 'Safety Guidelines',
    title: 'Spine neutral vs. flexion vs. extension cues.',
    description: 'Understand the three main positions of the spine and when to cue them.',
    quiz: [
        {
            question: "Which pose is an example of spinal flexion?",
            options: [
                {id: "a", text: "Cobra Pose (backbend)."},
                {id: "b", text: "Cat Pose (rounding the back)."},
                {id: "c", text: "Mountain Pose (neutral spine)."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'safety-8',
    category: 'Safety Guidelines',
    title: 'Safe transitions between planks, dogs, and cobras.',
    description: 'Master the flow of the common Vinyasa sequence to prevent injury.',
    quiz: [
        {
            question: "A common mistake when moving from Chaturanga to Upward-Facing Dog is:",
            options: [
                {id: "a", text: "Keeping the core engaged."},
                {id: "b", text: "Lifting the chest."},
                {id: "c", text: "'Dumping' into the lower back and shoulders without engagement."},
            ],
            correctAnswerId: "c"
        },
    ]
  },
  {
    id: 'safety-9',
    category: 'Safety Guidelines',
    title: 'Using props for injury prevention.',
    description: 'Understand how props are not a crutch, but a tool for safer and more effective practice.',
    quiz: [
        {
            question: "A blanket rolled under the knees in Savasana helps to:",
            options: [
                {id: "a", text: "Make the pose more challenging."},
                {id: "b", text: "Release tension in the lower back and hamstrings."},
                {id: "c", text: "Keep the student awake."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'safety-10',
    category: 'Safety Guidelines',
    title: 'Minimizing wrist strain in arm balances.',
    description: 'Learn techniques and cues to protect the wrists in weight-bearing poses.',
    quiz: [
        {
            question: "What is 'doming' the palms?",
            options: [
                {id: "a", text: "A sign of wrist strain."},
                {id: "b", text: "Creating a small lift in the center of the palm, engaging the hand muscles to take pressure off the wrist joint."},
                {id: "c", text: "Flattening the palm completely."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'safety-11',
    category: 'Safety Guidelines',
    title: 'Modifying for pregnancy safely.',
    description: 'Learn key modifications for expectant mothers in a general yoga class.',
    quiz: [
        {
            question: "Why should pregnant students avoid lying flat on their back (supine) for extended periods, especially later in pregnancy?",
            options: [
                {id: "a", text: "It's too comfortable."},
                {id: "b", text: "The weight of the uterus can compress the vena cava, reducing blood flow."},
                {id: "c", text: "There is no reason, this is a myth."}
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'safety-12',
    category: 'Safety Guidelines',
    title: 'Modifying for seniors or limited mobility.',
    description: 'Learn to use chairs and other props to make yoga accessible to all.',
    quiz: [
        {
            question: "For a student with limited mobility in a standing pose, a chair can be used for:",
            options: [
                {id: "a", text: "A place to put their drink."},
                {id: "b", text: "Support and balance, similar to a ballet barre."},
                {id: "c", text: "An obstacle to jump over."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'safety-13',
    category: 'Safety Guidelines',
    title: 'Teaching overweight/plus-size modifications.',
    description: 'Learn to create a welcoming and effective practice for students in larger bodies.',
    quiz: [
        {
            question: "A good modification for a student whose belly is compressed in a forward fold is to:",
            options: [
                {id: "a", text: "Tell them to suck it in."},
                {id: "b", text: "Cue them to take their feet wider to create more space."},
                {id: "c", text: "Encourage them to round their back more."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'safety-14',
    category: 'Safety Guidelines',
    title: 'Protecting hypermobile students.',
    description: 'Learn to teach students with excessive flexibility how to engage muscles and protect their joints.',
    quiz: [
        {
            question: "What is the main risk for hypermobile students in yoga?",
            options: [
                {id: "a", text: "They are not at risk, as they are very flexible."},
                {id: "b", text: "They can easily overstretch ligaments and create joint instability, leading to injury."},
                {id: "c", text: "They might get bored."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'safety-15',
    category: 'Safety Guidelines',
    title: 'Avoiding overstretching in yin classes.',
    description: 'Understand the difference between healthy stress on tissues and harmful pain.',
    quiz: [
        {
            question: "What is 'playing the edge' in Yin Yoga?",
            options: [
                {id: "a", text: "Going to your absolute maximum stretch immediately."},
                {id: "b", text: "Finding the initial point of resistance and sensation, then holding there, rather than pushing to the limit."},
                {id: "c", text: "Coming out of the pose as soon as you feel anything."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'safety-16',
    category: 'Safety Guidelines',
    title: 'Warm-up principles to avoid injury.',
    description: 'Learn how to properly prepare the body for a more active yoga practice.',
    quiz: [
        {
            question: "What is 'dynamic stretching' and why is it good for a warm-up?",
            options: [
                {id: "a", text: "Holding a passive stretch for a long time; it's not good for a warm-up."},
                {id: "b", text: "Moving through a range of motion, like Cat-Cow or gentle Sun Salutations, which prepares the body for more intense movement."},
                {id: "c", text: "Bouncing in a stretch."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'safety-17',
    category: 'Safety Guidelines',
    title: 'Cooling down properly with counterposes.',
    description: 'Learn how to sequence the end of class to neutralize the spine and calm the nervous system.',
    quiz: [
        {
            question: "After a series of deep backbends, what is an appropriate counterpose?",
            options: [
                {id: "a", text: "Another deep backbend."},
                {id: "b", text: "A gentle forward fold like Child's Pose."},
                {id: "c", text: "Handstand."}
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'safety-18',
    category: 'Safety Guidelines',
    title: 'Monitoring student breath for safety.',
    description: 'Learn how the sound and rhythm of students\' breath can be a key indicator of their state.',
    quiz: [
        {
            question: "What is a good verbal cue if you notice a student holding their breath?",
            options: [
                {id: "a", text: "'Stop holding your breath!'"},
                {id: "b", text: "A general reminder to the whole class, like 'Check in with your breath. Is it still flowing smoothly?'"},
                {id: "c", text: "Ignore it, they will figure it out."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'safety-19',
    category: 'Safety Guidelines',
    title: 'Emergency response basics for yoga teachers.',
    description: 'Understand your role and responsibilities in a medical emergency.',
    quiz: [
        {
            question: "A yoga teacher's role in a medical emergency is to:",
            options: [
                {id: "a", text: "Act as a doctor."},
                {id: "b", text: "Keep the student and the space safe until a medical professional arrives."},
                {id: "c", text: "Continue teaching the class and ignore the situation."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'safety-20',
    category: 'Safety Guidelines',
    title: 'Creating safe spacing in a crowded room.',
    description: 'Learn strategies to manage a full class without compromising student safety.',
    quiz: [
        {
            question: "Before teaching a pose with a wide range of motion (like Warrior II with arms out), you should:",
            options: [
                {id: "a", text: "Assume everyone has enough space."},
                {id: "b", text: "Give a verbal cue like, 'Extend your arms, being mindful of your neighbor.'"},
                {id: "c", text: "Tell everyone to make their pose smaller."}
            ],
            correctAnswerId: "b"
        },
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
            question: "Which of the following is an example of a boundary crossing?",
            options: [
                {id: "a", text: "Answering a student's question about a yoga pose after class."},
                {id: "b", text: "Borrowing money from a student or engaging in a dual relationship where you are also their therapist."},
                {id: "c", text: "Remembering a student's name."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'ethics-2',
    category: 'Teaching Ethics & Professionalism',
    title: 'Managing teacher-student relationships.',
    description: 'Navigate the nuances of connection and professionalism in the yoga space.',
    quiz: [
        {
            question: "Is it appropriate to date a current student?",
            options: [
                {id: "a", text: "Yes, it's totally fine."},
                {id: "b", text: "Most ethical guidelines strongly advise against it due to the power imbalance."},
                {id: "c", text: "Only if you think they are 'the one'."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'ethics-3',
    category: 'Teaching Ethics & Professionalism',
    title: 'Maintaining confidentiality & safe space.',
    description: 'Uphold student privacy and trust as a cornerstone of your teaching.',
    quiz: [
        {
            question: "What does creating a 'safe space' mean?",
            options: [
                {id: "a", text: "A room with padded walls."},
                {id: "b", text: "An environment where students feel physically and emotionally secure, free from judgment."},
                {id: "c", text: "A class that is easy for everyone."}
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'ethics-4',
    category: 'Teaching Ethics & Professionalism',
    title: 'Anatomy of consent—touch, photos, private info.',
    description: 'Go deeper into the different layers of consent required in a professional setting.',
    quiz: [
        {
            question: "Before taking photos or videos in a class where students are visible, you must:",
            options: [
                {id: "a", text: "Just do it quickly so no one notices."},
                {id: "b", text: "Obtain explicit permission from every identifiable person."},
                {id: "c", text: "Assume it's okay for marketing purposes."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'ethics-5',
    category: 'Teaching Ethics & Professionalism',
    title: 'Trauma-informed teaching language.',
    description: 'Learn to use language that is invitational, empowering, and avoids potential triggers.',
    quiz: [
        {
            question: "Why is invitational language ('you might try,' 'if it feels right for you') important?",
            options: [
                {id: "a", text: "It makes the teacher sound less confident."},
                {id: "b", text: "It gives agency back to the student, which can be empowering for trauma survivors."},
                {id: "c", text: "It's only for beginners."}
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'ethics-6',
    category: 'Teaching Ethics & Professionalism',
    title: 'Avoiding spiritual bypassing.',
    description: 'Learn to recognize and avoid using spiritual concepts to suppress or avoid difficult emotions and realities.',
    quiz: [
        {
            question: "Which of these statements is an example of spiritual bypassing?",
            options: [
                {id: "a", text: "'It's okay to feel sad; allow yourself to be with that emotion.'"},
                {id: "b", text: "'Don't be so negative, just think positive thoughts! Good vibes only!'"},
                {id: "c", text: "'That sounds really difficult. I'm here to listen if you want to talk after class.'"},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'ethics-7',
    category: 'Teaching Ethics & Professionalism',
    title: 'Respecting cultural origins of yoga.',
    description: 'Learn how to honor the South Asian roots of yoga without cultural appropriation.',
    quiz: [
        {
            question: "A way to honor the roots of yoga is to:",
            options: [
                {id: "a", text: "Pretend you are an Indian guru."},
                {id: "b", text: "Acknowledge that yoga is a rich spiritual tradition from South Asia and not just a physical workout."},
                {id: "c", text: "Avoid all philosophical concepts."}
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'ethics-8',
    category: 'Teaching Ethics & Professionalism',
    title: 'Teaching inclusively (body-positive, accessible).',
    description: 'Learn to create a welcoming space for all bodies, abilities, and backgrounds.',
    quiz: [
        {
            question: "Body-positive language in a yoga class focuses on:",
            options: [
                {id: "a", text: "How to get a 'bikini body'."},
                {id: "b", text: "What the body can do and feel, rather than what it looks like."},
                {id: "c", text: "Encouraging weight loss."}
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'ethics-9',
    category: 'Teaching Ethics & Professionalism',
    title: 'Avoiding ableist language.',
    description: 'Learn to use language that does not discriminate against people with disabilities.',
    quiz: [
        {
            question: "Instead of saying 'Stand up tall,' a more inclusive cue is:",
            options: [
                {id: "a", text: "'If you are standing, lengthen your spine.'"},
                {id: "b", text: "'People who are standing should stand up.'"},
                {id: "c", text: "'Everyone, stand up now.'"},
            ],
            correctAnswerId: "a"
        },
    ]
  },
  {
    id: 'ethics-10',
    category: 'Teaching Ethics & Professionalism',
    title: 'Business ethics — honest pricing, fair policies.',
    description: 'Understand the ethical considerations of running a yoga business.',
    quiz: [
        {
            question: "A fair cancellation policy:",
            options: [
                {id: "a", text: "Should make it impossible for a student to ever cancel."},
                {id: "b", text: "Should be clear, communicated upfront, and balance the needs of the business with respect for the student."},
                {id: "c", text: "Should not exist."}
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'ethics-11',
    category: 'Teaching Ethics & Professionalism',
    title: 'Class start/end punctuality.',
    description: 'Respecting students\' time is a fundamental part of professionalism.',
    quiz: [
        {
            question: "Consistently running your classes long can be seen as:",
            options: [
                {id: "a", text: "A bonus for the students."},
                {id: "b", text: "Disrespectful to students who may have other commitments to get to."},
                {id: "c", text: "A sign of a passionate teacher."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'ethics-12',
    category: 'Teaching Ethics & Professionalism',
    title: 'Non-attachment to student outcomes.',
    description: 'Learn to offer the practice without being attached to how your students receive it or what they achieve.',
    quiz: [
        {
            question: "If a student doesn't seem to be enjoying your class, you should:",
            options: [
                {id: "a", text: "Take it personally and feel like a failure."},
                {id: "b", text: "Recognize that the practice may not be for them today, and that's okay."},
                {id: "c", text: "Change your entire sequence to please them."}
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'ethics-13',
    category: 'Teaching Ethics & Professionalism',
    title: 'Creating a non-judgmental environment.',
    description: 'Foster a space where students feel safe to be themselves, without fear of criticism.',
    quiz: [
        {
            question: "What is the danger of a teacher expressing frustration when a student 'doesn\\'t get' a pose?",
            options: [
                {id: "a", text: "It motivates the student to try harder."},
                {id: "b", text: "It can create feelings of shame and inadequacy in the student."},
                {id: "c", text: "It shows the teacher is passionate."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'ethics-14',
    category: 'Teaching Ethics & Professionalism',
    title: 'Communicating clearly & respectfully.',
    description: 'Effective communication is key to being a successful and respected teacher.',
    quiz: [
        {
            question: "If a student asks a question you don't know the answer to, you should:",
            options: [
                {id: "a", text: "Make up an answer."},
                {id: "b", text: "Respectfully say, 'That's a great question, and I don't know the answer, but I will find out and get back to you.'"},
                {id: "c", text: "Tell them it's a stupid question."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'ethics-15',
    category: 'Teaching Ethics & Professionalism',
    title: 'Teacher presence & authenticity.',
    description: 'Learn to teach from a place of genuine presence and be authentically you.',
    quiz: [
        {
            question: "Authenticity in teaching means:",
            options: [
                {id: "a", text: "Copying your favorite famous yoga teacher exactly."},
                {id: "b", text: "Teaching from your own genuine experience and understanding, in your own unique voice."},
                {id: "c", text: "Pretending to be perfect and flawless."}
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'ethics-16',
    category: 'Teaching Ethics & Professionalism',
    title: 'Avoiding guru-like behavior.',
    description: 'Understand the difference between being a guide and creating a cult of personality.',
    quiz: [
        {
            question: "A healthy yoga teacher aims to:",
            options: [
                {id: "a", text: "Empower their students."},
                {id: "b", text: "Create followers who are dependent on them."},
                {id: "c", text: "Have students worship them."},
            ],
            correctAnswerId: "a"
        },
    ]
  },
  {
    id: 'ethics-17',
    category: 'Teaching Ethics & Professionalism',
    title: 'Professional self-care to avoid burnout.',
    description: 'Learn why taking care of yourself is essential to being a sustainable and effective teacher.',
    quiz: [
        {
            question: "Which of these is a key aspect of self-care for a yoga teacher?",
            options: [
                {id: "a", text: "Teaching as many classes as possible without a break."},
                {id: "b", text: "Maintaining their own personal yoga and meditation practice."},
                {id: "c", text: "Never taking a day off."}
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'ethics-18',
    category: 'Teaching Ethics & Professionalism',
    title: 'Honoring lineage without appropriating.',
    description: 'Learn to respectfully acknowledge your teachers and the sources of your knowledge.',
    quiz: [
        {
            question: "How can you honor your lineage?",
            options: [
                {id: "a", text: "By claiming your teachers' knowledge as your own original thought."},
                {id: "b", text: "By crediting your teachers when you share something you learned from them."},
                {id: "c", text: "By never mentioning your teachers."},
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'ethics-19',
    category: 'Teaching Ethics & Professionalism',
    title: 'Teaching beginners without shaming.',
    description: 'Learn how to make your class a welcoming and empowering entry point for new students.',
    quiz: [
        {
            question: "Which of these cues is most welcoming for a beginner?",
            options: [
                {id: "a", text: "'This is a really simple pose, you should all be able to do it.'"},
                {id: "b", text: "'It's totally normal if this feels awkward at first. Focus on how it feels, not how it looks.'"},
                {id: "c", text: "Calling out a beginner's mistake in front of the class."}
            ],
            correctAnswerId: "b"
        },
    ]
  },
  {
    id: 'ethics-20',
    category: 'Teaching Ethics & Professionalism',
    title: 'Holding space with compassion and neutrality.',
    description: 'Learn to create a supportive container for student experiences without judgment or taking on their emotions.',
    quiz: [
        {
            question: "Why is neutrality important when holding space?",
            options: [
                {id: "a", text: "It shows you don't care about your students."},
                {id: "b", text: "It prevents you from becoming a therapist and allows students to process their own emotions without your agenda."},
                {id: "c", text: "It is a way to remain detached and aloof."},
            ],
            correctAnswerId: "b"
        },
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
              question: "The 'peak' of the class is:",
              options: [
                  {id: "a", text: "The very beginning of class."},
                  {id: "b", text: "The most challenging pose or sequence that the class has been building towards."},
                  {id: "c", text: "The final resting pose."},
              ],
              correctAnswerId: "b"
          },
      ]
  },
  {
      id: 'sequencing-2',
      category: 'Sequencing & Class Planning',
      title: 'Sequencing for a Peak Pose.',
      description: 'Learn how to intelligently sequence a class that safely prepares students for a specific challenging pose.',
      quiz: [
          {
              question: "What does 'breaking down' a peak pose mean?",
              options: [
                  {id: "a", text: "Deciding not to teach it."},
                  {id: "b", text: "Identifying the key actions and muscle groups involved and teaching them in simpler poses first."},
                  {id: "c", text: "Doing the pose for the students."}
              ],
              correctAnswerId: "b"
          },
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
              question: "Why is finding a niche helpful for a new teacher?",
              options: [
                  {id: "a", text: "It's not helpful; you should be everything to everyone."},
                  {id: "b", text: "It allows you to focus your marketing and become known as an expert in a specific area."},
                  {id: "c", text: "It limits your career opportunities."},
              ],
              correctAnswerId: "b"
          },
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
              question: "How can you introduce a philosophical theme without sounding preachy?",
              options: [
                  {id: "a", text: "By quoting long, complex texts that no one understands."},
                  {id:ag", text: "By relating the concept to a simple, universal human experience."},
                  {id: "c", text: "By telling students they must believe what you believe."},
              ],
              correctAnswerId: "b"
          },
      ]
  }
];
