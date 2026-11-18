// What Is AI? (EduMoon AI Lab). For all years, starting from zero.
// AI explained from the very beginning: where you already use it, rules vs learning, narrow vs general AI, how it learns from examples, what it cannot do, and what it means for you.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const WQ = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 40, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const WN = (round, name, extra) => WQ(round, name, Object.assign({ kind: "number", time: 45 }, extra));

// The take-home card: AI in 8 lines.
const AICARD = [
  ["AI", "Computers doing tasks that normally need human thinking: seeing, reading, deciding, predicting."],
  ["You already use it", "Maps traffic, YouTube suggestions, face unlock, spam filters, voice typing."],
  ["Rules vs learning", "Normal programs follow rules people wrote. AI finds the rules from examples."],
  ["Data → pattern → prediction", "Show it many examples, it finds a pattern, then it guesses for new cases."],
  ["Narrow AI", "Every AI today is good at one kind of task. None can do everything a person can."],
  ["It makes mistakes", "AI can be confidently wrong, and it can copy unfairness from its data."],
  ["It does not understand like you", "It spots patterns. It has no feelings, goals or common sense of its own."],
  ["Your edge", "Learn to use AI well, and keep the skills it cannot copy: judgement, care and real experience."]
];

window.GAME = {
  id: "what-is-ai",
  title: "What Is AI?",
  club: "AI Lab",
  tagline: "Everyone talks about AI. Start from zero and really understand it.",
  art: window.STORY_ART,
  guide: {
    years: "All years · every branch", time: "35 minutes", level: "Beginner",
    about: "Ravi’s grandmother asks him, “What is this AI everyone talks about?” and he cannot explain it. In 6 rounds, teams learn where AI already is in their day, the difference between a normal program and AI, narrow and general AI, how AI learns from examples, what AI cannot do, and what it means for their careers. No maths or coding needed.",
    outcomes: "A clear, simple explanation of AI that students can give to anyone, the idea of learning from data, and a realistic picture of what AI can and cannot do.",
    tone: "This is the first AI game for many students, so keep it friendly and concrete. Use phones in the room as examples: ask who unlocked their phone with their face today. Avoid scary or hype language. AI is a tool, not magic.",
    extra: [["Next games", "After this, students can play How ChatGPT Works and Machine Learning 101 to go one step deeper."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Understood",
    rulesEyebrow: "How What Is AI? works", rulesTitle: "Learn one idea. Answer. Explain AI to anyone.",
    learnText: "The host explains one simple idea about AI.", crackTitle: "Answer",
    crackText: "Pick your answer on your phone and lock it in.",
    rulesExtra: "Speak (optional): <b>+100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Most adults get it wrong too!", cracked: "got it",
    next: "Next round →", finale: "Next →", winner: "are today’s AI explainers!", endLine: "Ravi explained AI to his grandmother."
  },
  offerEyebrow: "EduMoon AI Lab · AI level",
  offerTitle: "Your AI level",
  offers: [
    { min: 0.7, icon: "brain", title: "AI Explainer", text: "You can explain AI to anyone. Try How ChatGPT Works next." },
    { min: 0.45, icon: "bot", title: "AI Aware", text: "Strong! Notice 5 places you use AI tomorrow." },
    { min: 0.2, icon: "lightbulb", title: "AI Curious", text: "Good start. Read the card below once more tonight." },
    { min: 0, icon: "book-open", title: "AI Beginner", text: "Everyone starts here. Play this again with a friend and teach them." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon AI Lab · Start from zero",
      title: "Ravi’s grandmother asked him, “What is this AI everyone talks about?” He had no simple answer. Can your team help him explain it?",
      cards: [["bot", "Where AI already is in your day"], ["brain", "How it learns, and what it cannot do"], ["trophy", "Your score decides your AI level"]]
    },
    { type: "rules" },

    // ---------- Round 1: AI around you ----------
    {
      type: "learn", door: 1,
      title: "You used AI many times today without noticing.",
      points: [["AI means", "A computer doing tasks that usually need human thinking"], ["Seeing, hearing, reading", "Face unlock, voice typing, translating a menu"], ["Guessing what comes next", "Your next video, traffic on Beach Road, spam emails"]],
      highlightLast: true,
      side: { label: "AI in one day", items: [["smartphone", "Face unlock", "Recognises your face"], ["map", "Maps", "Predicts traffic and arrival time"], ["film", "Video apps", "Suggest what you may watch next"]] }
    },
    WQ(1, "AI Around You", {
      prompt: "Which of these is NOT really AI?",
      options: ["Face unlock on your phone", "A basic calculator adding 2 + 2", "Spam emails going to the spam folder", "Voice typing turning speech into text"], answer: 1,
      hint: "Which one just follows fixed maths rules and never learns?",
      note: "A calculator follows exact rules a person wrote. The others recognise patterns learned from many examples.", badge: "search"
    }),
    WQ(1, "AI Around You", {
      prompt: "Your maps app says “Traffic ahead. 12 minutes to RK Beach.” What is the AI doing?",
      options: ["Reading a fixed timetable printed for every road", "Asking the traffic police by phone", "Predicting from live and past traffic data", "Guessing a random number of minutes"], answer: 2,
      hint: "How could it know without anyone telling it?",
      note: "It predicts from patterns in data from many phones on the road, today and on past days.", badge: "map"
    }),
    WQ(1, "AI Around You", {
      prompt: "Which is the best simple meaning of AI?",
      options: ["Robots that look, walk and talk like real humans", "Any app that uses the internet", "A computer that has its own feelings", "Computers doing tasks that need thinking"], answer: 3,
      hint: "Most AI has no body and no feelings.",
      note: "Most AI is invisible software, not robots. It does tasks like recognising, predicting and deciding.", badge: "lightbulb",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Rules vs learning ----------
    {
      type: "learn", door: 2,
      title: "Normal programs follow rules. AI learns rules from examples.",
      points: [["Normal program", "A person writes every rule: IF marks >= 35, print Pass"], ["AI", "You show thousands of examples, and it finds the pattern"], ["Why it matters", "Some things are too hard to write rules for, like recognising a face"]],
      highlightLast: true,
      side: { label: "Spot a cat", items: [["code", "With rules", "Pointy ears? Whiskers? Fur? Too many cases"], ["brain", "With AI", "Show 10,000 cat photos. It learns"], ["check", "Result", "It spots cats it has never seen"]] }
    },
    WQ(2, "Rules vs Learning", {
      prompt: "Which task is easiest to solve with simple rules, without AI?",
      options: ["Recognising a friend’s face in a photo", "Calculating total fee from a fixed fee list", "Understanding a voice note in Telugu", "Spotting a fake review on a shopping app"], answer: 1,
      hint: "Which one has exact, fixed rules?",
      note: "A fee total is pure rules and maths. The other tasks have too many variations to write rules for, so AI learns them from examples.", badge: "code"
    }),
    WQ(2, "Rules vs Learning", {
      prompt: "A spam filter learns from millions of emails people marked as spam. This is an example of…",
      options: ["Learning from examples", "Following one fixed rule", "Searching on Google", "Copying another app"], answer: 0,
      hint: "Where do the rules come from here?",
      note: "No person wrote every spam rule. The filter found patterns in emails that people marked as spam.", badge: "mail"
    }),
    WQ(2, "Rules vs Learning", {
      prompt: "Why do we NEED AI to recognise handwriting?",
      options: ["Computers cannot store or open images", "Handwriting is always the same", "Too many writing styles for rules", "Typing is not allowed in India"], answer: 2,
      hint: "Think about how your friend’s handwriting looks.",
      note: "Millions of writing styles cannot be covered by rules. AI learns from many samples and handles new ones.", badge: "pen-tool",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Narrow vs general ----------
    {
      type: "learn", door: 3,
      title: "All AI today is narrow AI.",
      points: [["Narrow AI", "Very good at one kind of task: chess, translation or face unlock"], ["General AI", "Would do any thinking task a person can. It does not exist yet"], ["Chatbots", "Look very general, but they are still pattern machines with limits"]],
      highlightLast: true,
      side: { label: "Narrow AI", items: [["gamepad-2", "A chess AI", "Cannot drive a car"], ["languages", "A translator", "Cannot read an X-ray"], ["smartphone", "Face unlock", "Cannot write an essay"]] }
    },
    WQ(3, "Narrow vs General", {
      prompt: "An AI beats the world chess champion. Can it also cook biryani or drive an auto?",
      options: ["Yes, it is now smarter than all humans at everything", "Only if it is connected to the internet", "No, it is narrow AI, made only for chess", "Yes, but only on weekends"], answer: 2,
      hint: "What was it trained for?",
      note: "Being great at one task does not make an AI good at others. That is narrow AI.", badge: "gamepad-2"
    }),
    WQ(3, "Narrow vs General", {
      prompt: "“General AI” means an AI that…",
      options: ["Is used by the general public every day", "Runs on any general office laptop", "Gives general knowledge quiz answers", "Can do any thinking task a person can"], answer: 3,
      hint: "Think “general purpose”, like a human mind.",
      note: "General AI would match people across all thinking tasks. Experts still argue about when, or whether, it will arrive.", badge: "brain"
    }),
    WQ(3, "Narrow vs General", {
      prompt: "Which statement is TRUE today?",
      options: ["AI already thinks exactly like humans", "AI has its own feelings and goals", "AI can do everything better than people", "AI is very good at specific tasks"], answer: 3,
      hint: "Remember the chess AI.",
      note: "AI is excellent at specific tasks. It does not think, feel or want things the way people do.", badge: "badge-check",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Explain AI to Ravi’s grandmother in 20 seconds, with one example from her day.", note: "Simple words. One real example, like voice typing or face unlock.", points: 100 },

    // ---------- Round 4: Data, pattern, prediction ----------
    {
      type: "learn", door: 4,
      title: "AI learns in three steps: data, pattern, prediction.",
      points: [["Data", "Many examples, like 5,000 past mango prices with the weather"], ["Pattern", "It finds what goes together: rain often means higher prices"], ["Prediction", "For a new day, it guesses the price"]],
      highlightLast: true,
      side: { label: "More data, better guesses", items: [["chart-column", "10 examples", "Rough guesses"], ["chart-column", "10,000 examples", "Much better guesses"], ["x", "Wrong examples", "Wrong guesses, every time"]] }
    },
    WQ(4, "How AI Learns", {
      prompt: "An app wants to predict which students may drop a course. What does it need first?",
      options: ["A faster phone and laptop for every student", "Past data about students and outcomes", "A robot in every classroom", "A new college building"], answer: 1,
      hint: "Step 1 of the three steps.",
      note: "No data, no learning. It needs past examples of students who did and did not drop, with details about them.", badge: "chart-column"
    }),
    WQ(4, "How AI Learns", {
      prompt: "An AI learned to spot ripe mangoes using only photos of green mangoes. What will happen?",
      options: ["It will be perfect at spotting ripe ones", "Many mistakes with ripe ones", "It will learn ripe ones by itself", "It will refuse to start"], answer: 1,
      hint: "It can only learn from what it was shown.",
      note: "AI is only as good as its examples. Missing or one-sided data gives wrong answers.", badge: "x"
    }),
    WN(4, "How AI Learns", {
      prompt: "Data, pattern, prediction. How many steps are in this simple recipe for how AI learns?",
      answer: 3,
      hint: "Count them.",
      note: "Three steps. Every AI you meet, from spam filters to chatbots, follows this idea at a bigger scale.", badge: "list-checks",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: What AI cannot do ----------
    {
      type: "learn", door: 5,
      title: "AI is powerful, but it has real limits.",
      points: [["It can be confidently wrong", "It sounds sure even when it made something up"], ["It can copy unfairness", "If the data was unfair, the AI can be unfair too"], ["It has no common sense or care", "It does not know what matters to you or why"]],
      highlightLast: true,
      side: { label: "So always", items: [["search", "Check important facts", "Especially health, money and exams"], ["users", "Keep a person in charge", "For decisions about people"], ["shield", "Protect private data", "Don’t paste what you would not share"]] }
    },
    WQ(5, "AI’s Limits", {
      prompt: "A chatbot gives you a college’s fee for this year, very confidently. What should you do?",
      options: ["Trust it, chatbots are always up to date", "Pay the amount it says immediately", "Share it on every WhatsApp group", "Check the college’s official website"], answer: 3,
      hint: "Can AI be confidently wrong?",
      note: "AI can sound sure and still be wrong or out of date. For important facts, check the official source.", badge: "search"
    }),
    WQ(5, "AI’s Limits", {
      prompt: "A hiring AI learned from 10 years of a company’s past choices, which mostly picked men. What is the risk?",
      options: ["It may unfairly favour men too", "It will choose only women from now on", "It will hire everyone who applies", "There is no risk, AI is always fair"], answer: 0,
      hint: "It learns patterns from the past.",
      note: "AI copies patterns in its data, including unfair ones. That is why people must check AI decisions about people.", badge: "scale"
    }),
    WQ(5, "AI’s Limits", {
      prompt: "Which is something AI CANNOT truly do today?",
      options: ["Translate a sentence into Hindi", "Suggest the next word while typing", "Recognise numbers on a number plate", "Genuinely care about how you feel"], answer: 3,
      hint: "Which one needs real feelings?",
      note: "AI can copy the words of care, but it has no feelings. Real support comes from people.", badge: "heart",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: AI and you (double) ----------
    {
      type: "learn", door: 6,
      title: "AI changes jobs. People who use it well do best.",
      points: [["Tasks change", "Boring, repeated tasks get automated first"], ["New work appears", "Someone must build, check and use AI in every field"], ["Your edge", "Your subject knowledge plus AI skills plus judgement"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["target", "3 final questions", "About you and AI"], ["mic", "Then the final challenge", "Explain AI in 30 seconds"]] }
    },
    WQ(6, "AI and You", {
      double: true,
      prompt: "Which student is best placed for the AI era?",
      options: ["One who avoids AI tools completely", "One who knows their subject and uses AI", "One who copies AI answers without reading", "One who waits for AI to do everything"], answer: 1,
      hint: "Subject knowledge plus AI skills.",
      note: "Knowing your subject lets you check AI and use it well. That combination is what companies want.", badge: "graduation-cap"
    }),
    WQ(6, "AI and You", {
      double: true,
      prompt: "Which work is most likely to be automated first?",
      options: ["Comforting a worried patient", "Leading a team through a crisis", "Typing the same data into forms daily", "Deciding the vision for a new startup"], answer: 2,
      hint: "Repeated, rule-like tasks go first.",
      note: "Repetitive tasks with clear patterns get automated first. Work that needs judgement, trust and care changes more slowly.", badge: "timer"
    }),
    WQ(6, "AI and You", {
      double: true,
      prompt: "Ravi’s grandmother asks, “So is AI a magic brain?” What is the best answer?",
      options: ["Yes, it already knows everything in the world", "Yes, it thinks and feels like us", "No, it is just the internet", "No, it learns patterns from lots of data"], answer: 3,
      hint: "Remember the three steps.",
      note: "AI is not magic. It learns patterns from lots of examples and uses them to make guesses. That is the whole idea.", badge: "brain",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "In 30 seconds: what AI is, one example, and one thing it cannot do.", note: "The room claps; the host picks the clearest explanation.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "AI in 8 Lines", note: "Screenshot this. You can now explain AI to anyone.", items: AICARD },
    {
      type: "end",
      joinTitle: "Join the EduMoon AI Lab",
      joinText: "AI games, tools and projects every week. Learn to use AI the right way, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
