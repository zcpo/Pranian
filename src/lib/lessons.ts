
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
  // 🧩 A. Cueing Techniques
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
  // 👐 B. Hands-On Assists
  {
    id: 'assists-1',
    category: 'Hands-On Assists',
    title: 'Consent protocols—verbal, card system, or opt-in.',
    description: 'Learn how to create a safe and respectful environment by establishing clear consent for hands-on assists.',
    quiz: [
      {
        question: 'Which is an example of a clear, verbal consent protocol?',
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
            question: 'A stabilizing assist should feel like:',
            options: [
                {id: 'a', text: 'A forceful push.'},
                {id: 'b', text: 'A gentle reminder or a "wall" for the student to press against.'},
                {id: 'c', text: 'A deep tissue massage.'},
            ],
            correctAnswerId: 'b'
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
            question: 'In a seated forward fold (Paschimottanasana), a safe lengthening assist involves:',
            options: [
                {id: 'a', text: 'Pushing down hard on the student\'s back.'},
                {id: 'b', text: 'Placing hands on their lower back and gently guiding the tissue away from the sacrum as they hinge forward.'},
                {id: 'c', text: 'Pulling their hands to touch their toes.'},
            ],
            correctAnswerId: 'b'
        },
    ]
  },
  // 🎨 C. Class Themes
  {
    id: 'themes-1',
    category: 'Class Themes',
    title: 'Breath awareness (pranayama focus).',
    description: 'Structure a class around the central theme of the breath as a guide and anchor.',
    quiz: [
        {
            question: 'Which pranayama technique would be a good starting point for this theme?',
            options: [
                {id: 'a', text: 'Advanced breath retention (Kumbhaka).'},
                {id: 'b', text: 'Simple diaphragmatic (belly) breathing or observing the natural breath.'},
                {id: 'c', text: 'Breath of Fire.'},
            ],
            correctAnswerId: 'b'
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
            question: 'A good verbal cue for this theme could be:',
            options: [
                {id: 'a', text: '\'If you fall, you have bad balance.\''},
                {id: 'b', text: '\'Just as we find steadiness here by focusing our gaze, we can find stability in life by focusing our intention.\''},
                {id: 'c', text: '\'Hurry up and balance.\''},
            ],
            correctAnswerId: 'b'
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
            question: 'A good peak pose for a heart-opening class would be:',
            options: [
                {id: 'a', text: 'A deep forward fold.'},
                {id: 'b', text: 'Camel Pose (Ustrasana) or Wheel Pose (Urdhva Dhanurasana).'},
                {id: 'c', text: 'Crow Pose (Bakasana).'},
            ],
            correctAnswerId: 'b'
        },
    ]
  },
  // ⚕️ D. Safety Guidelines
  {
    id: 'safety-1',
    category: 'Safety Guidelines',
    title: 'Understanding student limitations & red flags.',
    description: 'Learn to observe students and recognize signs of struggle, pain, or medical issues.',
    quiz: [
        {
            question: 'If a student tells you they have a herniated disc, you should advise them to avoid:',
            options: [
                {id: 'a', text: 'All physical activity.'},
                {id: 'b', text: 'Deep forward folds and loaded spinal flexion.'},
                {id: 'c', text: 'Gentle twists.'},
            ],
            correctAnswerId: 'b'
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
            question: 'In Tabletop Pose, the shoulders should be stacked over the ______, and hips over the ____.',
            options: [
                {id: 'a', text: 'Hips, knees.'},
                {id: 'b', text: 'Wrists, knees.'},
                {id: 'c', text: 'Elbows, ankles.'},
            ],
            correctAnswerId: 'b'
        },
    ]
  },
  // 🌱 E. Teaching Ethics & Professionalism
  {
    id: 'ethics-1',
    category: 'Teaching Ethics & Professionalism',
    title: 'Establishing professional boundaries.',
    description: 'Understand the importance of the teacher-student relationship and how to maintain its integrity.',
    quiz: [
        {
            question: 'Which of the following is an example of a boundary crossing?',
            options: [
                {id: 'a', text: 'Answering a student\'s question about a yoga pose after class.'},
                {id: 'b', text: 'Borrowing money from a student or engaging in a dual relationship where you are also their therapist.'},
                {id: 'c', text: 'Remembering a student\'s name.'},
            ],
            correctAnswerId: 'b'
        },
    ]
  },
  // 📚 F. Sequencing & Class Planning
  {
      id: 'sequencing-1',
      category: 'Sequencing & Class Planning',
      title: 'The Arc of a Class: Warm-up, Peak, Cool-down.',
      description: 'Learn the fundamental structure of a well-balanced yoga class.',
      quiz: [
          {
              question: 'The "peak" of the class is:',
              options: [
                  {id: 'a', text: 'The very beginning of class.'},
                  {id: 'b', text: 'The most challenging pose or sequence that the class has been building towards.'},
                  {id: 'c', text: 'The final resting pose.'},
              ],
              correctAnswerId: 'b'
          },
      ]
  },
  // 💼 G. Business of Yoga & Marketing
  {
      id: 'business-1',
      category: 'Business of Yoga & Marketing',
      title: 'Finding Your Niche and Voice.',
      description: 'Define who you are as a teacher and who you want to serve.',
      quiz: [
          {
              question: 'Why is finding a niche helpful for a new teacher?',
              options: [
                  {id: 'a', text: 'It\'s not helpful; you should be everything to everyone.'},
                  {id: 'b', text: 'It allows you to focus your marketing and become known as an expert in a specific area.'},
                  {id: 'c', text: 'It limits your career opportunities.'},
              ],
              correctAnswerId: 'b'
          },
      ]
  },
  // 🔬 H. Advanced Teaching Concepts
  {
      id: 'advanced-1',
      category: 'Advanced Teaching Concepts',
      title: 'Theming Beyond Poses: Weaving in Philosophy.',
      description: 'Learn to integrate yogic philosophy (like the Yamas or Niyamas) into a physical asana class.',
      quiz: [
          {
              question: 'How can you introduce a philosophical theme without sounding preachy?',
              options: [
                  {id: 'a', text: 'By quoting long, complex texts that no one understands.'},
                  {id: 'b', text: 'By relating the concept to a simple, universal human experience.'},
                  {id: 'c', text: 'By telling students they must believe what you believe.'},
              ],
              correctAnswerId: 'b'
          },
      ]
  }
];
