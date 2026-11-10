// Study Smart (EduMoon Skills Club). For all years.
// Study methods that actually work (active recall, spacing, interleaving, Pomodoro, sleep) vs popular habits that don't,
// plus a 3-day exam rescue plan. Based on well-established learning research, kept simple.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const SS = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 40, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
// "Spot the bad habit in this study plan" questions use the bug door.
const HABIT = { kind: "bug", time: 60, step1: "What’s wrong with it?", step2: "Tap the weak step", say1: "First pick the problem.", say2: "Now tap the weak step.", partO: "the problem", partL: "the step", lineLabel: "step", bugLabel: "The weak step is" };

const METHODS = [
  ["Test yourself", "Close the book and recall. Don’t just reread."],
  ["Space it out", "Revise on day 1, day 3, day 7, not all in one night."],
  ["Mix topics", "Switch between question types; it trains you to choose the method."],
  ["Explain it simply", "Teach it to a friend or a wall. Gaps show up fast."],
  ["25 + 5", "25 minutes of focus, 5 minutes of break. Phone in another room."],
  ["Previous papers first", "They show what’s asked and how."],
  ["Sleep 7 hours", "Your brain saves memories while you sleep."],
  ["Pass, then score, then master", "Secure the must-know topics first."]
];

window.GAME = {
  id: "study-smart",
  title: "Study Smart",
  club: "Skills Club",
  tagline: "Stop studying longer. Start studying smarter.",
  art: window.STORY_ART,
  guide: {
    years: "All years · best before mid or semester exams", time: "35 minutes", level: "Beginner",
    about: "Most students reread notes, highlight everything and cram the night before, the methods research says work worst. In 6 rounds, teams learn the methods that actually work (testing yourself, spacing, mixing topics, explaining simply, focused blocks, sleep), spot the weak step in real study plans, and build a 3-day plan for revising 5 units.",
    outcomes: "8 proven study methods, how to fix a bad study plan, and a step-by-step 3-day exam rescue plan.",
    tone: "No shaming. Everyone has crammed. The message is: you’re not bad at studying, you were just never taught how. Run this 1 to 2 weeks before exams for the best effect.",
    extra: [["Make it real", "In the final speak step, ask students to name their next exam and the first method they’ll use."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Smart move",
    rulesEyebrow: "How Study Smart works", rulesTitle: "Find the method that works. Fix the plan.",
    learnText: "The host shares one study method that really works.", crackTitle: "Choose",
    crackText: "Pick your answer on your phone and lock it in.",
    rulesExtra: "Weak-step questions: <b>100</b> for the problem + <b>100</b> for the step. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Most students study this way!", cracked: "studied smart",
    next: "Next round →", finale: "Next →", winner: "are today’s smartest studiers!", endLine: "Study less. Remember more."
  },
  offerEyebrow: "EduMoon Skills Club · Study results",
  offerTitle: "Your study style",
  offers: [
    { min: 0.7, icon: "brain", title: "Smart Studier", text: "You know what works. Now do it: test yourself tonight." },
    { min: 0.45, icon: "book-open", title: "Getting There", text: "Strong! Swap one rereading session for self-testing this week." },
    { min: 0.2, icon: "timer", title: "Hard Worker", text: "You work hard. Now work smart: try 25 + 5 tomorrow." },
    { min: 0, icon: "sparkles", title: "Fresh Start", text: "Everyone starts here. Save the 8 methods and use one today." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Skills Club · Study Smart",
      title: "You studied for 6 hours and forgot everything in the exam hall. It’s not you. It’s the method. Let’s fix it.",
      cards: [["brain", "Methods proven to work"], ["search", "Spot the weak step in study plans"], ["clock", "Build a 3-day exam rescue plan"]]
    },
    { type: "rules" },

    // ---------- Round 1: Rereading vs testing ----------
    {
      type: "learn", door: 1,
      title: "Testing yourself beats rereading.",
      points: [["Rereading feels good", "Everything looks familiar, so you think you know it"], ["Testing is harder", "And that struggle is what builds memory"], ["How to do it", "Close the book. Write or say what you remember. Then check"]],
      highlightLast: true,
      side: { label: "Ways to test yourself", items: [["list-checks", "Flashcards", "Question on front, answer on back"], ["file-text", "Previous papers", "Under time"], ["pen-tool", "Blank page", "Write everything you remember"]] }
    },
    SS(1, "Test Yourself", {
      prompt: "Which method helps you remember MORE for the exam?",
      options: ["Reading the chapter 3 times", "Highlighting every line", "Reading it once, then closing the book and writing what you remember", "Copying the notes neatly"], answer: 2,
      hint: "Which one makes your brain work hardest?",
      note: "Recalling from memory (active recall) is one of the strongest study methods known.", badge: "brain"
    }),
    SS(1, "Test Yourself", {
      prompt: "Why does rereading feel effective but isn’t?",
      options: ["Familiar text feels like knowledge, but you’re recognising it, not recalling it", "Reading is bad for eyes", "Books are boring", "It is effective"], answer: 0,
      hint: "Recognising vs remembering.",
      note: "In the exam there’s no text to recognise. You must recall. So practise recalling.", badge: "eye"
    }),
    SS(1, "Test Yourself", {
      prompt: "You have 1 hour for one unit. Best use?",
      options: ["60 minutes reading", "20 minutes reading, 40 minutes answering questions from memory", "60 minutes highlighting", "Watching 3 videos at 2× speed"], answer: 1,
      hint: "More time recalling than reading.",
      note: "Read a little, then spend most time testing yourself. Check and fix what you got wrong.", badge: "timer",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Spacing ----------
    {
      type: "learn", door: 2,
      title: "Space your revision out.",
      points: [["You forget fast", "Much of what you learn fades within days"], ["Each revision resets it", "And makes it last longer"], ["Simple schedule", "Revise on day 1, day 3 and day 7"]],
      highlightLast: true,
      side: { label: "Spacing schedule", items: [["clock", "Day 1", "Learn it"], ["clock", "Day 3", "Test yourself"], ["clock", "Day 7", "Test again"]] }
    },
    SS(2, "Space It Out", {
      prompt: "Same 6 hours. Which plan helps you remember most?",
      options: ["6 hours on the night before", "6 hours on one Sunday", "1 hour on each of 6 different days", "3 hours, twice in one day"], answer: 2,
      hint: "Spread it.",
      note: "Spacing gives your brain time to forget a little and rebuild stronger each time.", badge: "clock"
    }),
    SS(2, "Space It Out", Object.assign({}, HABIT, {
      prompt: "A student’s 1-week plan for one subject. Which step is weak?",
      code: ["Day 1: learn Unit 1 and test myself on it.", "Day 3: quick self-test on Unit 1, learn Unit 2.", "Day 5: self-test Units 1 and 2.", "Day 6: never look at Unit 1 again."],
      outputOptions: ["Nothing, it’s a perfect plan", "It drops spacing: Unit 1 needs one more test before the exam", "It’s too many tests"], outputAnswer: 1, bugLine: 3,
      bugText: "Unit 1 still needs a final self-test closer to the exam, or it will fade",
      hint: "What happens to Unit 1 after day 5?",
      note: "Great plan until the last step. Keep coming back to old units, briefly.", badge: "route"
    })),
    SS(2, "Space It Out", {
      prompt: "Your exam is 3 weeks away. When should you start revising Unit 1?",
      options: ["This week, then revisit it every few days", "The night before", "Only after finishing all units", "Never, I’ll remember"], answer: 0,
      hint: "More gaps, more strength.",
      note: "Start early and revisit. Small sessions now save painful all-nighters later.", badge: "trending-up",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Mixing and explaining ----------
    {
      type: "learn", door: 3,
      title: "Mix topics, and explain things simply.",
      points: [["Mixing (interleaving)", "Practise different question types together, not 20 of the same"], ["Why it works", "The exam mixes them; you learn to pick the right method"], ["Explain simply", "If you can teach it to a 1st-year, you know it"]],
      highlightLast: true,
      side: { label: "Try this", items: [["list-checks", "Mixed problem set", "Shuffle chapters"], ["users", "Teach a friend", "Swap topics"], ["mic", "Explain out loud", "Even to a wall"]] }
    },
    SS(3, "Mix and Explain", {
      prompt: "Maths practice. Which set prepares you better for the exam?",
      options: ["20 questions all from chapter 3", "20 questions mixed from chapters 1 to 5", "1 hard question, 20 times", "No practice, just theory"], answer: 1,
      hint: "Does the exam tell you which chapter each question is from?",
      note: "Mixed practice trains you to recognise which method each question needs.", badge: "list-checks"
    }),
    SS(3, "Mix and Explain", {
      prompt: "Best quick test that you really understand a concept?",
      options: ["It looks familiar", "You highlighted it", "You can explain it simply, without notes, with an example", "You copied it twice"], answer: 2,
      hint: "Can you teach it?",
      note: "If you get stuck explaining, that’s exactly the part to study.", badge: "mic"
    }),
    SS(3, "Mix and Explain", {
      prompt: "You and a friend are revising. Best way to use each other?",
      options: ["Chat about something else", "Copy each other’s notes", "Study silently side by side", "Take turns explaining topics and quizzing each other"], answer: 3,
      hint: "Turn your friend into a tester.",
      note: "Explaining and quizzing combines two strong methods. And it’s more fun.", badge: "users",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Explain any topic from your syllabus in 30 seconds, as if to a 1st-year.", note: "Simple words, one example. The room claps.", points: 100 },

    // ---------- Round 4: Focus ----------
    {
      type: "learn", door: 4,
      title: "Focus blocks beat long, distracted hours.",
      points: [["25 + 5", "25 minutes of focus, 5 minutes of break (the Pomodoro method)"], ["Phone away", "In another room, not face-down"], ["One task per block", "“Unit 2, question 1 to 5”, not “study”"]],
      highlightLast: true,
      side: { label: "Focus setup", items: [["timer", "Set a timer", "25 minutes"], ["smartphone", "Phone elsewhere", "Out of sight"], ["target", "One small goal", "Per block"]] }
    },
    SS(4, "Focus", {
      prompt: "Which 2 hours will get more done?",
      options: ["4 blocks of 25 minutes with 5-minute breaks, phone away", "2 hours with the phone checking every 5 minutes", "2 hours with music videos playing", "2 hours in bed"], answer: 0,
      hint: "Count the real focus minutes.",
      note: "100 minutes of real focus beats 120 minutes of half-focus.", badge: "timer"
    }),
    SS(4, "Focus", Object.assign({}, HABIT, {
      prompt: "A student’s evening study block. Which step will ruin it?",
      code: ["Set a 25-minute timer.", "Goal: solve 5 previous-paper questions from Unit 2.", "Keep the phone next to me to reply to the group quickly.", "Take a 5-minute break, then repeat."],
      outputOptions: ["It’s too short", "It’s the distraction that breaks focus", "Nothing, it’s a perfect plan"], outputAnswer: 1, bugLine: 2,
      bugText: "a phone nearby pulls attention every few minutes. Put it in another room",
      hint: "What will interrupt the 25 minutes?",
      note: "Reply to the group in the 5-minute break. The 25 minutes are sacred.", badge: "smartphone"
    })),
    SS(4, "Focus", {
      prompt: "What should a 5-minute break look like?",
      options: ["Scrolling reels", "Starting a new series", "Standing up, water, a short walk, eyes off screens", "Gaming"], answer: 2,
      hint: "Rest your brain, don’t refill it.",
      note: "Reels in a break often turn into 30 minutes. Move your body instead.", badge: "heart",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Sleep and exam tactics ----------
    {
      type: "learn", door: 5,
      title: "Sleep and previous papers are your secret weapons.",
      points: [["Sleep saves memory", "All-nighters cost more than they give"], ["Previous papers", "Show the pattern: repeated topics, mark splits"], ["Pass, score, master", "Secure must-know topics first, then go deeper"]],
      highlightLast: true,
      side: { label: "Exam week", items: [["clock", "7 hours sleep", "Every night"], ["file-text", "Last 5 years’ papers", "Find repeats"], ["target", "Priority list", "Must-know first"]] }
    },
    SS(5, "Sleep and Papers", {
      prompt: "Two days before the exam. What should you do FIRST?",
      options: ["Start reading the textbook from page 1", "Go through previous papers and list the most repeated topics", "Make colourful notes", "Watch motivational videos"], answer: 1,
      hint: "What does the exam usually ask?",
      note: "Previous papers tell you where to spend your limited time.", badge: "file-text"
    }),
    SS(5, "Sleep and Papers", {
      prompt: "An all-nighter before the exam usually leads to…",
      options: ["Better marks", "Forgetting more and making silly mistakes", "No effect", "Faster writing"], answer: 1,
      hint: "Tired brains.",
      note: "Sleep-deprived brains recall less and slip more. Sleep is part of revision.", badge: "brain"
    }),
    SS(5, "Sleep and Papers", {
      prompt: "You have time for only part of the syllabus. Best strategy?",
      options: ["Study the hardest topic only", "Study random pages", "Give up", "Cover the most repeated and easiest-to-score topics first, then go deeper"], answer: 3,
      hint: "Pass first, then score more.",
      note: "Secure the marks you can surely get, then build up. That’s pass, score, master.", badge: "target",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: 3-day rescue plan (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: the 3-day rescue plan.",
      points: [["Day 1", "Previous papers, priority list, learn and test top topics"], ["Day 2", "Next topics, plus self-test Day 1 topics"], ["Day 3", "Mixed practice paper, fix weak spots, sleep early"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game!"], ["clock", "Rescue plans", "Pick the best"], ["award", "Then your study style", ""]] }
    },
    SS(6, "Rescue Plan", {
      double: true,
      prompt: "3 days, 5 units. Which plan is smartest?",
      options: ["Day 1: units 1–2. Day 2: units 3–4. Day 3: unit 5. No revision.", "Day 1: papers + top topics with self-tests. Day 2: next topics + retest Day 1. Day 3: mixed practice paper, fix gaps, sleep early.", "Read everything once on Day 3", "Make notes for 3 days"], answer: 1,
      hint: "Which one uses testing, spacing and sleep?",
      note: "It uses previous papers, self-testing, spacing and sleep. That’s every method from today.", badge: "route"
    }),
    SS(6, "Rescue Plan", Object.assign({}, HABIT, {
      double: true,
      prompt: "The night before the exam. Which step is the mistake?",
      code: ["Do one timed mixed practice paper.", "Check the answers and fix weak spots.", "Stay up till 4 AM learning one brand-new unit.", "Pack hall ticket, pens and calculator."],
      outputOptions: ["It’s too organised", "Nothing, it’s perfect", "It costs sleep for something you won’t remember well anyway"], outputAnswer: 2, bugLine: 2,
      bugText: "a brand-new unit at 4 AM is unlikely to stick, and it costs sleep for everything else",
      hint: "Which step hurts more than it helps?",
      note: "The night before is for practice and fixing gaps, then sleep.", badge: "clock"
    })),
    SS(6, "Rescue Plan", {
      double: true,
      prompt: "After the exam, what habit will help most next semester?",
      options: ["Never think about studying again", "Copy a topper’s notes", "Start small spaced self-tests from week 1 of the semester", "Buy more highlighters"], answer: 2,
      hint: "Little and often.",
      note: "15 minutes of self-testing a day from week 1 beats 3 all-nighters at the end.", badge: "trending-up",
      board: true, boardLabel: "after Round 6"
    }),

    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "In 30 seconds: your next exam, and the 2 methods you’ll use for it from today.", note: "Be specific. The room claps; the host picks the best plan.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "8 Study Methods That Work", note: "Screenshot this. Use one method tonight.", items: METHODS },
    {
      type: "end",
      joinTitle: "Join the EduMoon Skills Club",
      joinText: "Exam tips, career skills and games every week. Study smarter with your college friends.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
