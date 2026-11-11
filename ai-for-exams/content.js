// AI for Exams, the Right Way (EduMoon AI Lab). For all years.
// How to use AI to understand and practise, not to copy: good study prompts, checking AI's facts,
// self-testing with AI, and the rules for assignments and exams.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const AE = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 40, board: false, eyebrow: `Round ${round} · ${name}` }, extra);

const STUDYCARD = [
  ["Understand first", "“Explain this simply, with one example from daily life.”"],
  ["Make it test you", "“Ask me 5 questions on this, one at a time. Don’t give answers until I try.”"],
  ["Check every fact", "Match formulas, dates and definitions with your textbook or notes."],
  ["Use your syllabus", "Paste the unit topics and ask: “Which of these do I understand least?”"],
  ["Practise answers", "Write your own answer, then ask AI how to make it clearer."],
  ["Space it out", "Revise a topic again after 1 day, 3 days and a week."],
  ["Follow the rules", "Check your college rules on AI for assignments. Never use it in the exam hall."],
  ["Protect your data", "Don’t paste passwords, ID numbers or private details."]
];

window.GAME = {
  id: "ai-for-exams",
  title: "AI for Exams, the Right Way",
  club: "AI Lab",
  tagline: "Use AI to actually understand and remember, not to copy. Study smarter before your next exam.",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "35 minutes", level: "Beginner",
    about: "Most students use AI to get answers. Toppers use it to understand and to test themselves. In 6 rounds, teams help Sneha prepare for her mid exams with AI the right way: learning vs copying, prompts that explain, checking AI’s facts, making AI quiz you, planning revision, and the rules for assignments and exams.",
    outcomes: "Students can write prompts that explain and quiz instead of just answering, know why they must check AI’s facts, and know where AI is allowed and where it is not.",
    tone: "Honest and practical, not preachy. AI is a great study partner; the problem is only copying without learning. Ask students how they use AI today and build on it.",
    extra: [["Try it live", "If you have a projector, type one “Ask me 5 questions, one at a time” prompt into any AI chat and let the room answer together."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Studied",
    rulesEyebrow: "How this game works", rulesTitle: "Learn with AI. Don’t copy with AI.",
    learnText: "The host shares one smart way to study with AI.", crackTitle: "Answer",
    crackText: "Pick the best choice for Sneha on your phone.",
    rulesExtra: "Faster answers score more. Speak (optional): <b>+100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Most students use AI this way!", cracked: "got it right",
    next: "Next round →", finale: "Next →", winner: "are today’s smartest studiers!", endLine: "AI can explain and test you. Only you can learn it."
  },
  offerEyebrow: "EduMoon AI Lab · Study results",
  offerTitle: "Your study rank",
  offers: [
    { min: 0.7, icon: "crown", title: "AI Study Pro", text: "You use AI like a tutor, not a copy machine. Share these tips with your class." },
    { min: 0.45, icon: "rocket", title: "Smart Studier", text: "Strong! Try the “ask me 5 questions” prompt for your next subject." },
    { min: 0.2, icon: "lightbulb", title: "Getting There", text: "Good start. Save the study card and use one prompt tonight." },
    { min: 0, icon: "book-open", title: "Fresh Start", text: "Everyone starts here. Begin with: “Explain this simply, with an example.”" }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon AI Lab · AI for Exams, the Right Way",
      title: "Sneha’s mid exams are in 10 days. She copies AI answers into her notes, but in mock tests she remembers nothing. Today your team fixes how she studies with AI.",
      cards: [["brain", "Understand, don’t copy"], ["target", "Make AI test you"], ["shield", "Check facts, follow the rules"]]
    },
    { type: "rules" },

    // ---------- Round 1: Learning vs copying ----------
    {
      type: "learn", door: 1,
      title: "Copying feels fast. Understanding lasts.",
      points: [["Copying", "Reading an AI answer feels like learning, but you forget it"], ["Understanding", "Explaining it in your own words makes it stick"], ["The test", "Can you write it without looking?"]],
      highlightLast: true,
      side: { label: "Same AI, two students", items: [["x", "Copier", "Pastes answers into notes"], ["brain", "Learner", "Asks “why”, then explains it back"], ["badge-check", "Result", "The learner remembers in the exam"]] }
    },
    AE(1, "Learn vs Copy", {
      prompt: "Sneha read 20 AI answers and felt ready, but blanked in her mock test. Why?",
      options: ["The AI answers she read were all wrong", "She read but never practised recalling", "Her phone screen was too small to read on", "Mock tests are always harder than exams"], answer: 1,
      hint: "Familiar isn’t the same as remembered.",
      note: "Reading feels like learning. Recalling without looking is what makes it stick.", badge: "brain"
    }),
    AE(1, "Learn vs Copy", {
      prompt: "Which is the best way to check if Sneha really understands a topic?",
      options: ["Highlight the AI answer in yellow", "Read the AI answer one more time", "Explain it aloud without looking", "Save the answer to read later"], answer: 2,
      hint: "Close the screen.",
      note: "If you can explain it simply without looking, you understand it.", badge: "mic",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Prompts that explain ----------
    {
      type: "learn", door: 2,
      title: "Ask AI to explain, not just answer.",
      points: [["Your level", "“I’m a 2nd-year ECE student”"], ["Simple first", "“Explain simply, with one daily-life example”"], ["Then deeper", "“Now explain it the way the exam asks”"]],
      highlightLast: true,
      side: { label: "Prompt upgrade", items: [["x", "Weak", "“Normalisation”"], ["badge-check", "Strong", "“2nd-year CSE. Explain normalisation simply, with a college example.”"], ["lightbulb", "Next", "“Now give me a 7-mark answer outline.”"]] }
    },
    AE(2, "Good Prompts", {
      prompt: "Which prompt helps Sneha understand recursion best?",
      options: ["“Recursion answer for 7 marks, full and detailed please”", "“Explain recursion simply, with a daily-life example.”", "“Recursion”", "“Write recursion answer, I will copy it neatly”"], answer: 1,
      hint: "Simple, with an example.",
      note: "Ask for a simple explanation and an example first. Then the exam version.", badge: "lightbulb"
    }),
    AE(2, "Good Prompts", {
      prompt: "The AI explanation is still confusing. What should Sneha do?",
      options: ["Give up on that topic and skip it completely", "Copy it anyway and hope it makes sense later", "Ask it to explain again, more simply", "Close the app and never use AI again"], answer: 2,
      hint: "Ask again, differently.",
      note: "Follow up. Ask for simpler words, a story, a diagram description, or an example from daily life.", badge: "message-circle",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Check AI's facts ----------
    {
      type: "learn", door: 3,
      title: "AI can sound sure and still be wrong.",
      points: [["Why", "AI predicts likely words; sometimes it makes up facts"], ["Check these", "Formulas, dates, definitions, numbers, names"], ["Where", "Your textbook, class notes, or your teacher"]],
      highlightLast: true,
      side: { label: "Always double-check", items: [["pen-tool", "Formulas", "One wrong sign = wrong answer"], ["clock", "Dates and names", "Easy for AI to mix up"], ["file-text", "Syllabus", "Your university’s version"]] }
    },
    AE(3, "Check Facts", {
      prompt: "AI gives Sneha a formula that’s different from her class notes. What should she do?",
      options: ["Trust the AI, it knows more than notes", "Use whichever formula looks simpler", "Check the textbook or ask her teacher", "Write both formulas in the exam"], answer: 2,
      hint: "Find a trusted source.",
      note: "Check with your textbook or teacher. AI can be confidently wrong.", badge: "search"
    }),
    AE(3, "Check Facts", {
      prompt: "Why might an AI answer not match what Sneha’s university expects?",
      options: ["Syllabus and exam patterns differ", "AI is not allowed to read about universities", "AI answers are always too short for exams", "Universities block AI tools on purpose"], answer: 0,
      hint: "Think about the exam pattern.",
      note: "Your syllabus, marks pattern and terms differ. Paste your syllabus topics into the prompt to keep it on track.", badge: "file-text",
      board: true, boardLabel: "after Round 3"
    }),

    // ---------- Round 4: Make AI test you ----------
    {
      type: "learn", door: 4,
      title: "The best use of AI: let it test you.",
      points: [["Quiz me", "“Ask me 5 questions, one at a time. Wait for my answer.”"], ["Check me", "“Here’s my answer. What did I miss?”"], ["Mix it", "Questions from several units, not just one"]],
      highlightLast: true,
      side: { label: "Quiz prompt", items: [["target", "Ask", "5 questions, one at a time"], ["clock", "Wait", "Don’t show the answer first"], ["badge-check", "Then", "Tell me what I got wrong"]] }
    },
    AE(4, "AI Tests You", {
      prompt: "Which prompt turns AI into a study partner?",
      options: ["“Give me all the answers for Unit 2 right now, in full detail”", "“Ask me 5 Unit 2 questions, one at a time.”", "“Summarise Unit 2 in one line”", "“Tell me which questions will come in the exam”"], answer: 1,
      hint: "Make it ask you.",
      note: "Being tested is one of the strongest ways to remember. AI can quiz you all day.", badge: "target"
    }),
    AE(4, "AI Tests You", {
      prompt: "Sneha writes her own 7-mark answer. How can AI help now?",
      options: ["Rewrite it fully so she can memorise the new one", "Delete her answer and give a perfect one", "Point out what’s missing or unclear", "Make it 3 times longer"], answer: 2,
      hint: "Feedback, not replacement.",
      note: "Ask: “What key points did I miss? How could the structure be clearer?” Then fix it yourself.", badge: "pen-tool"
    }),
    AE(4, "AI Tests You", {
      prompt: "Sneha only practises questions from her favourite unit. What should she change?",
      options: ["Nothing, it’s best to master one unit", "Practise only the hardest single question", "Stop practising and just read", "Ask AI for mixed questions from all units"], answer: 3,
      hint: "Exams mix units.",
      note: "Mixed practice prepares you for the real exam, where questions jump between units.", badge: "list-checks",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Plan revision ----------
    {
      type: "learn", door: 5,
      title: "Use AI to plan, then follow the plan.",
      points: [["Map it", "Paste the syllabus: “Make a 10-day plan, weakest topics first.”"], ["Space it", "Revise a topic after 1 day, 3 days and a week"], ["Be realistic", "Tell it your real hours and class timings"]],
      highlightLast: true,
      side: { label: "Sneha’s plan", items: [["clock", "10 days", "2 hours a day"], ["list-checks", "Weak topics", "First"], ["target", "Last 2 days", "Mixed mock tests"]] }
    },
    AE(5, "Plan It", {
      prompt: "What should Sneha give AI to get a useful 10-day plan?",
      options: ["Her syllabus, dates and free hours", "Just “make me a study plan please, thanks”", "Her marks from school, for context", "Her friends’ plans to copy from"], answer: 0,
      hint: "Real details, real plan.",
      note: "Syllabus, dates and real free time. A plan only works if it fits your actual week.", badge: "clock"
    }),
    AE(5, "Plan It", {
      prompt: "When should Sneha revise a topic she studied today?",
      options: ["Only the night before the exam, all at once", "Never, once is enough to remember", "Every hour today, many times", "After 1 day, 3 days and a week"], answer: 3,
      hint: "Spaced out, not crammed.",
      note: "Spaced revision. Each time you recall it, the memory gets stronger.", badge: "brain",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Rules and honesty (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: rules and honesty. Double points.",
      points: [["Exam hall", "No AI, no phones. Ever."], ["Assignments", "Check your college’s rules; say when AI helped if asked"], ["Privacy", "Never paste passwords, ID numbers or private details"]],
      highlightLast: true,
      side: { label: "Where AI fits", items: [["badge-check", "Study at home", "Explain, quiz, plan"], ["scale", "Assignments", "Follow your college rules"], ["x", "Exam hall", "Never"]] }
    },
    AE(6, "Rules", {
      double: true,
      prompt: "A friend says: “I’ll keep AI open on my phone in the internal exam.” What’s true?",
      options: ["It’s fine if nobody sees the phone under the desk", "It’s cheating and can mean serious action", "It’s allowed for internal exams only", "It’s fine if he only checks one answer"], answer: 1,
      hint: "Exam rules.",
      note: "Using AI or a phone in an exam is malpractice. The risk isn’t worth it, and practice beats cheating.", badge: "shield"
    }),
    AE(6, "Rules", {
      double: true,
      prompt: "Sneha used AI to understand a topic, then wrote her assignment herself. The college asks students to mention AI use. What should she do?",
      options: ["Say briefly how she used AI to learn", "Hide it, since she wrote it herself anyway", "Ask AI to rewrite it so it can’t be detected", "Copy a friend’s assignment instead"], answer: 0,
      hint: "Follow the rule, be honest.",
      note: "Be honest when asked. Using AI to learn is usually fine; hiding it when rules ask is the problem.", badge: "scale"
    }),
    AE(6, "Rules", {
      double: true,
      prompt: "Which of these should Sneha never paste into an AI chat?",
      options: ["A paragraph from her own notes", "A question from last year’s paper", "Her syllabus topics for Unit 3", "Her university portal password"], answer: 3,
      hint: "Private and secret.",
      note: "Never share passwords, OTPs or ID numbers with any AI tool.", badge: "lock",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, results, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best prompt wins +200", prompt: "Say one AI prompt you’ll use tonight for your hardest subject. Make it explain or quiz you, not just answer.", note: "The room votes for the most useful prompt.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "Study with AI, the right way", note: "Screenshot this. Try one prompt for every subject this week.", items: STUDYCARD },
    {
      type: "end",
      joinTitle: "Join the EduMoon community",
      joinText: "AI games, coding challenges and real projects every week. Learn to use AI the smart way.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
