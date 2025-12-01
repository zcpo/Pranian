
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
  // 🧩 A. Cueing Techniques (10 Lessons)
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
            question: 'In a typical Vinyasa flow, which type of movement is paired with an inhale?',
            options: [
                {id: 'a', text: 'Forward folding or contracting movements.'},
                {id: 'b', text: 'Twisting movements.'},
                {id: 'c', text: 'Upward-moving or expansive movements (e.g., lifting the chest).'},
            ],
            correctAnswerId: 'c'
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
    id: 'cueing-7',
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
    id: 'cueing-8',
    category: 'Cueing Techniques',
    title: 'Avoiding fear-based cueing (positive cues).',
    description: 'Use invitational and encouraging language instead of negative or restrictive commands.',
    quiz: [
        {
            question: "How can you rephrase 'Don\'t let your knee collapse inward' positively?",
            options: [
                {id: 'a', text: "'Your knee is collapsing, fix it.'"},
                {id: 'b', text: "'Guide your knee to track in the same direction as your middle toe.'"},
                {id: 'c', text: "'You\'ll injure yourself if your knee collapses.'"}
            ],
            correctAnswerId: 'b'
        },
    ]
  },
    {
    id: 'cueing-9',
    category: 'Cueing Techniques',
    title: 'Cueing for trauma-sensitive spaces.',
    description: 'Use invitational language and avoid commanding tones to create a safe environment.',
    quiz: [
        {
            question: "Which cue is most trauma-informed?",
            options: [
                {id: 'a', text: "'You must close your eyes now.'"},
                {id: 'b', text: "'If you feel comfortable, you might soften your gaze or close your eyes.'"},
                {id: 'c', text: "'Close your eyes, everyone!'"},
            ],
            correctAnswerId: 'b'
        },
    ]
  },
  {
    id: 'cueing-10',
    category: 'Cueing Techniques',
    title: 'Avoiding over-cueing (letting students explore).',
    description: 'Strike a balance between providing guidance and allowing for personal discovery.',
    quiz: [
        {
            question: "Why is it important to let students explore a pose?",
            options: [
                {id: 'a', text: "So the teacher can take a break."},
                {id: 'b', text: "It encourages them to develop their own body awareness and find what feels right for them."},
                {id: 'c', text: "Because there is only one right way to do a pose."},
            ],
            correctAnswerId: 'b'
        },
    ]
  },
  // 👐 B. Hands-On Assists (10 Lessons)
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
    title: 'Breath-based assists synchronized with student inhalation/exhalation.',
    description: "Time your assists with the student's breath to work with their body, not against it.",
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
    id: 'assists-5',
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
    id: 'assists-6',
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
    id: 'assists-7',
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
    id: 'assists-8',
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
    id: 'assists-9',
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
    id: 'assists-10',
    category: 'Hands-On Assists',
    title: 'How to assist without shifting their balance.',
    description: "Learn to apply pressure and support in a way that doesn't knock students off-center.",
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
  // 🎨 C. Class Themes (5 Lessons)
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
  // ⚕️ D. Safety Guidelines (10 Lessons)
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
    id: 'safety-7',
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
    id: 'safety-8',
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
    id: 'safety-9',
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
    id: 'safety-10',
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
  // 🌱 E. Teaching Ethics & Professionalism (10 Lessons)
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
    id: 'ethics-3',
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
    id: 'ethics-4',
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
    id: 'ethics-5',
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
    id: 'ethics-6',
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
    id: 'ethics-7',
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
    id: 'ethics-8',
    category: 'Teaching Ethics & Professionalism',
    title: 'Class start/end punctuality.',
    description: "Respecting students' time is a fundamental part of professionalism.",
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
    id: 'ethics-9',
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
    id: 'ethics-10',
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
  // 📚 F. Sequencing & Class Planning (2 Lessons)
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
  // 💼 G. Business of Yoga & Marketing (1 Lesson)
  {
      id: 'business-1',
      category: 'Business of Yoga & Marketing',
      title: 'Finding Your Niche and Voice.',
      description: 'Define who you are as a teacher and who you want to serve.',
      quiz: [
          {
              question: "Why is finding a niche helpful for a new teacher?",
              options: [
                  {id: "a", text: "It isn't helpful; you should be everything to everyone."},
                  {id: "b", text: "It allows you to focus your marketing and become known as an expert in a specific area."},
                  {id: "c", text: "It limits your career opportunities."},
              ],
              correctAnswerId: "b"
          },
      ]
  },
  // 🔬 H. Advanced Teaching Concepts (2 Lessons)
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
                  {id: "b", text: "By relating the concept to a simple, universal human experience."},
                  {id: "c", text: "By telling students they must believe what you believe."},
              ],
              correctAnswerId: "b"
          },
      ]
  },
  {
    id: 'advanced-2',
    category: 'Advanced Teaching Concepts',
    title: 'The Art of Storytelling in Yoga.',
    description: 'Learn how to use stories and metaphors to make your themes more engaging and memorable.',
    quiz: [
        {
            question: "A good story in a yoga class should always:",
            options: [
                {id: "a", text: "Be very long and complicated."},
                {id: "b", text: "Relate back to the theme or intention of the practice."},
                {id: "c", text: "Be about the teacher's personal life."},
            ],
            correctAnswerId: "b"
        },
    ]
}
];
