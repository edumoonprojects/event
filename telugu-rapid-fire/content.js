// Telugu to English Rapid Fire (EduMoon English Club). For all years.
// Everyday Telugu (written in English letters, the way students type on WhatsApp) said in natural English.
// Step types used: story · rules · learn · door · speak · wordlist · end

const RF = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 25, board: false, eyebrow: `Round ${round} · ${name}` }, extra);

const SAYIT = [
  ["Nenu vastunna", "I’m on my way."],
  ["Tinnava?", "Have you eaten?"],
  ["Naaku ardham kaaledu", "I didn’t understand."],
  ["Malli cheppandi", "Could you say that again?"],
  ["Ekkada unnav?", "Where are you?"],
  ["Bus miss ayyindi", "I missed the bus."],
  ["Notes pampu", "Can you send me the notes?"],
  ["Tension padaku", "Don’t worry."],
  ["Parledu", "It’s okay. / No problem."],
  ["Chala bore kodutundi", "I’m so bored."],
  ["Exam ela raasav?", "How did your exam go?"],
  ["Naaku teliyadu", "I’m not sure, but I can find out."],
  ["Nenu try chestanu", "I’ll give it a try."],
  ["Ippude vastanu", "I’ll be right back."],
  ["Thanks ra, chala help chesav", "Thanks, that really helped."]
];

window.GAME = {
  id: "telugu-rapid-fire",
  title: "Telugu to English Rapid Fire",
  club: "English Club",
  tagline: "Everyday Telugu lines from hostel, class and WhatsApp, said in natural English. Fast!",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "30 minutes", level: "Beginner",
    about: "A fast, fun round of everyday Telugu lines students say every day, from the hostel, the classroom, WhatsApp and interviews, and how to say each one in natural English. Each question shows a Telugu line (in English letters) and four English options. The trap options are word-for-word translations that sound odd to English speakers.",
    outcomes: "Students learn 15 natural English lines for daily life and learn to think in meaning, not word by word.",
    tone: "Quick and playful: 25 seconds a question. Read each Telugu line aloud with feeling, and after each answer ask one student to say the English line out loud.",
    extra: [["Rapid round idea", "After the game, call out any Telugu line and let teams shout the English version. First correct team gets a clap."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Fluent",
    rulesEyebrow: "How Rapid Fire works", rulesTitle: "Read the Telugu. Pick the natural English. Fast.",
    learnText: "The host reads a few Telugu lines and their English versions.", crackTitle: "Pick",
    crackText: "Pick the most natural English on your phone. You have 25 seconds.",
    rulesExtra: "Faster answers score more. Speak (optional): <b>+100</b>. Round 5: <b>double</b>!",
    nobody: "Nobody got this one. We all translate word by word sometimes!", cracked: "said it right",
    next: "Next round →", finale: "Next →", winner: "are today’s Rapid Fire champions!", endLine: "Think in meaning, not word by word."
  },
  steps: [
    {
      type: "story",
      alert: "EduMoon English Club · Telugu to English Rapid Fire",
      title: "You think in Telugu. Today you learn to say it in natural English, fast.",
      cards: [["zap", "15 everyday Telugu lines"], ["message-circle", "Hostel, class, WhatsApp, interviews"], ["mic", "Say it out loud for bonus points"]]
    },
    { type: "rules" },

    // ---------- Round 1: Hostel life ----------
    {
      type: "learn", door: 1,
      title: "Translate the meaning, not each word.",
      points: [["Word by word", "“You ate?” sounds odd in English"], ["Meaning", "“Have you eaten?” is what people really say"], ["Short is fine", "“On my way!” is natural and friendly"]],
      highlightLast: true,
      side: { label: "Hostel lines", items: [["message-circle", "Tinnava?", "Have you eaten?"], ["route", "Nenu vastunna", "I’m on my way."], ["clock", "Ippude vastanu", "I’ll be right back."]] }
    },
    RF(1, "Hostel", {
      prompt: "“Tinnava?”",
      options: ["You ate or not?", "Have you eaten?", "Did you finish your eating?", "Eating is done for you?"], answer: 1,
      hint: "A friendly check, not a test.",
      note: "“Have you eaten?” or simply “Did you eat?” is natural.", badge: "message-circle"
    }),
    RF(1, "Hostel", {
      prompt: "“Nenu vastunna, wait chey.”",
      options: ["I am coming only, you wait.", "I’m coming, you be waiting.", "On my way, wait for me!", "Coming I am, wait there."], answer: 2,
      hint: "Short and friendly.",
      note: "“On my way, wait for me!” sounds natural and warm.", badge: "route"
    }),
    RF(1, "Hostel", {
      prompt: "“Room key marchipoyanu.”",
      options: ["I forgot my room key.", "Room key I have forgotten it.", "My room key is forgetting.", "Key of room is forgot."], answer: 0,
      hint: "Simple past tense.",
      note: "“I forgot my room key.” Simple and correct.", badge: "lock",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Classroom ----------
    {
      type: "learn", door: 2,
      title: "In class, polite and clear wins.",
      points: [["Ask politely", "“Could you…” sounds respectful without being stiff"], ["Say what you need", "“I didn’t understand the last part.”"], ["Avoid", "“Once more tell” and “Repeat again”"]],
      highlightLast: true,
      side: { label: "Class lines", items: [["lightbulb", "Naaku ardham kaaledu", "I didn’t understand."], ["mic", "Malli cheppandi", "Could you say that again?"], ["file-text", "Notes pampu", "Can you send me the notes?"]] }
    },
    RF(2, "Classroom", {
      prompt: "“Sir, naaku ardham kaaledu.”",
      options: ["Sir, I am not understanding.", "Sir, understanding is not there.", "Sir, it did not come to me.", "Sorry sir, I didn’t understand."], answer: 3,
      hint: "Past tense, plus a polite start.",
      note: "“Sorry sir, I didn’t understand.” Then say which part.", badge: "lightbulb"
    }),
    RF(2, "Classroom", {
      prompt: "“Malli cheppandi, please.”",
      options: ["Could you say that again?", "Please repeat once again.", "Tell once more, please sir.", "Again you tell, please."], answer: 0,
      hint: "“Repeat again” says “again” twice.",
      note: "“Could you say that again, please?” Polite and natural.", badge: "mic"
    }),
    RF(2, "Classroom", {
      prompt: "“Notes pampu ra.”",
      options: ["Send notes, da.", "Notes you send me now.", "Can you send me the notes?", "Do the needful for notes."], answer: 2,
      hint: "A friendly question.",
      note: "“Can you send me the notes?” Friendly and clear.", badge: "file-text",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Phone and WhatsApp ----------
    {
      type: "learn", door: 3,
      title: "On the phone, keep it short and natural.",
      points: [["Where are you?", "Not “Where you are?”"], ["Running late", "“I’m running 10 minutes late.”"], ["Missed something", "“I missed the bus.” Simple past"]],
      highlightLast: true,
      side: { label: "Phone lines", items: [["message-circle", "Ekkada unnav?", "Where are you?"], ["clock", "Late avutundi", "I’m running late."], ["route", "Bus miss ayyindi", "I missed the bus."]] }
    },
    RF(3, "Phone", {
      prompt: "“Ekkada unnav?”",
      options: ["Where you are now?", "Where are you?", "At where you are?", "You are in where?"], answer: 1,
      hint: "Question word first, then “are you”.",
      note: "“Where are you?” Question word, then the verb, then you.", badge: "message-circle"
    }),
    RF(3, "Phone", {
      prompt: "“Bus miss ayyindi, late avutundi.”",
      options: ["Bus got missed, lateness is coming.", "Bus is missed, I am getting late.", "I missed the bus, so I’ll be late.", "Missing the bus, becoming late."], answer: 2,
      hint: "Say what happened, then what it means.",
      note: "“I missed the bus, so I’ll be late.” Clear and natural.", badge: "clock"
    }),
    RF(3, "Phone", {
      prompt: "“Ippude vastanu.”",
      options: ["Now only I will come.", "I am coming just now itself.", "This time I am coming.", "I’ll be right back."], answer: 3,
      hint: "You’re stepping away for a moment.",
      note: "“I’ll be right back.” Or “Back in a minute!”", badge: "zap",
      board: true, boardLabel: "after Round 3"
    }),

    // ---------- Round 4: Feelings ----------
    {
      type: "learn", door: 4,
      title: "Say how you feel, simply.",
      points: [["Stress", "“I’m stressed”, not “I’m in tension”"], ["Boredom", "“I’m bored”, not “Bore is coming”"], ["Comfort a friend", "“Don’t worry, you’ll be fine.”"]],
      highlightLast: true,
      side: { label: "Feeling lines", items: [["heart", "Tension padaku", "Don’t worry."], ["heart", "Parledu", "It’s okay. / No problem."], ["clock", "Bore kodutundi", "I’m so bored."]] }
    },
    RF(4, "Feelings", {
      prompt: "“Tension padaku, nuvvu pass avtav.”",
      options: ["Don’t take tension, you will pass out.", "Don’t worry, you’ll pass.", "No tension, passing will happen.", "Tension don’t fall, you pass."], answer: 1,
      hint: "Careful: “pass out” means to faint!",
      note: "“Don’t worry, you’ll pass.” And never say “pass out” for an exam.", badge: "heart"
    }),
    RF(4, "Feelings", {
      prompt: "“Chala bore kodutundi.”",
      options: ["Bore is hitting me very much.", "It is too much boring for me.", "Very boring is coming.", "I’m so bored."], answer: 3,
      hint: "Short is best.",
      note: "“I’m so bored.” Or “This is so boring.”", badge: "clock"
    }),
    RF(4, "Feelings", {
      prompt: "Your friend says sorry for being late. You reply: “Parledu.”",
      options: ["It’s okay, no problem!", "There is no problem only.", "Problem is not there.", "Okay, no tension at all."], answer: 0,
      hint: "Warm and simple.",
      note: "“It’s okay, no problem!” or just “No worries!”", badge: "heart",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Interview and office (double) ----------
    {
      type: "learn", door: 5,
      title: "Final round: interview and office English. Double points.",
      points: [["Not sure?", "“I’m not sure, but I can find out.” Honest and confident"], ["Taking a task", "“I’ll give it a try.”"], ["Thanking", "“Thanks, that really helped.”"]],
      highlightLast: true,
      side: { label: "Office lines", items: [["lightbulb", "Naaku teliyadu", "I’m not sure, but I can find out."], ["rocket", "Nenu try chestanu", "I’ll give it a try."], ["badge-check", "Thanks, help chesaru", "Thanks, that really helped."]] }
    },
    RF(5, "Interview", {
      double: true,
      prompt: "In an interview: “Naaku teliyadu sir.”",
      options: ["I don’t know, sir. Next question.", "Knowledge is not there for me, sir.", "I’m not sure, but I can find out.", "Sir, that is out of syllabus for me."], answer: 2,
      hint: "Honest, then positive.",
      note: "“I’m not sure, but I can find out.” Interviewers like honesty plus effort.", badge: "lightbulb"
    }),
    RF(5, "Office", {
      double: true,
      prompt: "Your manager gives you a new task. You say: “Nenu try chestanu.”",
      options: ["I’ll give it a try.", "I will try to do it, sir, surely, definitely.", "Trying is what I will do.", "I am doing try."], answer: 0,
      hint: "Confident and simple.",
      note: "“I’ll give it a try.” Or “Sure, I’ll work on it.”", badge: "rocket"
    }),
    RF(5, "Office", {
      double: true,
      prompt: "A senior helps you fix a bug. You say: “Thanks anna, chala help chesaru.”",
      options: ["Thanks for your kind help, I am obliged.", "Very much thanks for the helping.", "Help was very much, thank you.", "Thanks, that really helped."], answer: 3,
      hint: "Warm and natural.",
      note: "“Thanks, that really helped.” Simple thanks go a long way at work.", badge: "badge-check",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Final challenge and take-home ----------
    { type: "speak", eyebrow: "Rapid fire · speak", prompt: "The host says a Telugu line. First to say it in natural English gets the points!", note: "Try: “Exam ela raasav?”, “Ekkada unnav?”, “Notes pampu.”", points: 100 },
    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "Describe your hostel or college morning in 4 English sentences. No Telugu!", note: "The room picks the most natural one.", points: 200 },
    { type: "wordlist", eyebrow: "Take it home", title: "15 lines in natural English", note: "Screenshot this. Use one line in English every day this week.", items: SAYIT },
    {
      type: "end",
      joinTitle: "Join the EduMoon English Club",
      joinText: "Speaking games, stories and debates every week. Speak more, fear less.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
