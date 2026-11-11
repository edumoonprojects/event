// Small Talk Pro (EduMoon English Club). For all years.
// Starting conversations at events, interviews and networking: openers, follow-up questions, listening, and exiting politely.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const ST = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 40, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
// "Find the line that kills the conversation" questions use the bug door.
const AWK = { kind: "bug", time: 60, step1: "What’s the problem?", step2: "Tap the awkward line", say1: "First pick the problem.", say2: "Now tap the awkward line.", partO: "the problem", partL: "the line", lineLabel: "line", bugLabel: "The awkward line is" };

const MOVES = [
  ["Open with the situation", "“How did you hear about this event?”"],
  ["Say your name clearly", "And repeat theirs: “Nice to meet you, Kiran.”"],
  ["Ask open questions", "What, how, why. Not yes/no."],
  ["Follow their answer", "“Oh, robotics? How did you get into that?”"],
  ["Share a little too", "A conversation is two-way."],
  ["Listen more than you talk", "Nod, react, don’t check your phone."],
  ["Avoid heavy topics at first", "Salary, marks, religion, politics, looks."],
  ["Exit kindly", "“Great talking to you. Let’s connect on LinkedIn!”"]
];

window.GAME = {
  id: "small-talk-pro",
  title: "Small Talk Pro",
  club: "English Club",
  tagline: "What do you say after “Hi”? Start any conversation with confidence.",
  art: window.STORY_ART,
  guide: {
    years: "All years · beginner to medium English", time: "35 minutes", level: "Beginner",
    about: "Many students freeze after “Hi”, at fests, workshops, interviews and networking events. In 6 rounds, teams learn how to open a conversation, introduce themselves, ask questions that keep it going, listen well, avoid awkward topics and leave politely. They spot the awkward line in short conversations and practise out loud between rounds.",
    outcomes: "8 small-talk moves, better openers and follow-up questions, what topics to avoid with new people, and how to exit a conversation without it feeling awkward.",
    tone: "This is about confidence, not perfect English. Make the speaking steps fun and low-pressure, and celebrate anyone who tries. Pair shy students with friendly ones.",
    extra: [["Live practice", "After Round 3, give everyone 2 minutes to have a real small-talk chat with someone they don’t know well in the room."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Smooth talker",
    rulesEyebrow: "How Small Talk Pro works", rulesTitle: "Read the situation. Pick the best line.",
    learnText: "The host shares one small-talk move.", crackTitle: "Choose",
    crackText: "Pick your answer on your phone and lock it in.",
    rulesExtra: "Awkward-line questions: <b>100</b> for the problem + <b>100</b> for the line. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Real conversations are tricky!", cracked: "nailed it",
    next: "Next round →", finale: "Next →", winner: "are today’s small talk pros!", endLine: "Go start one new conversation today!"
  },
  offerEyebrow: "EduMoon English Club · Small talk results",
  offerTitle: "Your conversation level",
  offers: [
    { min: 0.7, icon: "message-circle", title: "Conversation Pro", text: "You could talk to anyone at any event. Go meet one new person this week." },
    { min: 0.45, icon: "users", title: "Easy Talker", text: "Strong! Practise open questions in your next chat." },
    { min: 0.2, icon: "mic", title: "Warming Up", text: "Good start. Use one opener from today at your next event." },
    { min: 0, icon: "book-open", title: "Quiet Starter", text: "Everyone starts here. Save the 8 moves and try one tomorrow." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon English Club · Small Talk Pro",
      title: "You’re at a tech event. A senior from your dream company is standing alone with a coffee. You walk over. You say “Hi”. Then what?",
      cards: [["message-circle", "Openers that always work"], ["users", "Keep any conversation going"], ["handshake", "Leave politely, and stay connected"]]
    },
    { type: "rules" },

    // ---------- Round 1: Openers ----------
    {
      type: "learn", door: 1,
      title: "Open with the situation you share.",
      points: [["You’re both here", "The event, the workshop, the queue, the weather"], ["Easy to answer", "“Is this your first time at this fest?”"], ["Not too personal", "Save deep questions for later"]],
      highlightLast: true,
      side: { label: "Openers", items: [["message-circle", "“How did you hear about this event?”", ""], ["star", "“What did you think of that talk?”", ""], ["map", "“Are you from Vizag?”", ""]] }
    },
    ST(1, "Openers", {
      prompt: "At a coding workshop, you sit next to someone new. Best opener?",
      options: ["“What’s your CGPA? Mine is not very good this semester.”", "“First workshop here? It’s my first try at web dev.”", "Say nothing for 2 hours", "“Why are you here?” in a serious voice"], answer: 1,
      hint: "Shared situation + a little about you.",
      note: "It’s friendly, about the shared situation, and gives them something to reply to.", badge: "message-circle"
    }),
    ST(1, "Openers", {
      prompt: "Which opener is too personal for someone you just met?",
      options: ["“How’s the event going for you?”", "“Which college are you from?”", "“What did you think of the keynote?”", "“How much does your father earn?”"], answer: 3,
      hint: "Which one would make anyone uncomfortable?",
      note: "Money, marks, religion and family details are not first-meeting topics.", badge: "x"
    }),
    ST(1, "Openers", {
      prompt: "You want to talk to a speaker after their session. Best start?",
      options: ["“Hi, I liked your point on first-year projects. One question?”", "“Give me a job, I am very interested in your company and its work.”", "Wait near the stage for them to notice you", "“Your talk was okay.”"], answer: 0,
      hint: "Specific compliment + small ask.",
      note: "A specific compliment shows you listened. A small question respects their time.", badge: "mic",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Introducing yourself ----------
    {
      type: "learn", door: 2,
      title: "Introduce yourself in one easy line.",
      points: [["Name, clearly", "Say it slowly. Many people mumble it"], ["One detail", "Year, college, what you’re into"], ["Use their name", "“Nice to meet you, Sneha.” It helps you remember"]],
      highlightLast: true,
      side: { label: "Easy intro", items: [["user", "“Hi, I’m Ravi.”", ""], ["graduation-cap", "“2nd-year ECE at AU.”", ""], ["code", "“I’m into robotics.”", ""]] }
    },
    ST(2, "Introductions", {
      prompt: "Best way to introduce yourself at a networking event?",
      options: ["“I am Ravi Kumar from Vizag, born in 2005, my hobbies are cricket, music…”", "“Hi, I’m Ravi, 2nd-year ECE, into robotics. What brings you here?”", "Show your ID card", "“Me Ravi.”"], answer: 1,
      hint: "Short, one detail, then a question.",
      note: "Name, one detail, then pass the conversation back with a question.", badge: "user"
    }),
    ST(2, "Introductions", {
      prompt: "They say: “I’m Sneha.” Best reply?",
      options: ["“Okay.”", "“Hmm, okay, nice name.”", "“Nice to meet you, Sneha!”", "Check your phone while they talk"], answer: 2,
      hint: "Use their name.",
      note: "Repeating their name is warm and helps you remember it.", badge: "heart"
    }),
    ST(2, "Introductions", Object.assign({}, AWK, {
      prompt: "A short conversation at a fest. Which line is awkward?",
      code: ["A: Hi, I’m Arun. Is this your first time at this fest?", "B: Yes! I’m Divya, from St. Joseph’s.", "A: Nice to meet you, Divya. Which events are you here for?", "A: Also, why are you wearing that colour? It doesn’t suit you."],
      outputOptions: ["It’s a rude personal comment on looks", "It’s too formal", "Nothing, it’s a great conversation"], outputAnswer: 0, bugLine: 3,
      bugText: "never comment negatively on someone’s looks. Stick to the event, their interests and your shared situation",
      hint: "Which line would hurt?",
      note: "Three great lines, ruined by one. Comments on looks are off-limits with new people.", badge: "x",
      board: true, boardLabel: "after Round 2"
    })),

    // ---------- Round 3: Keeping it going ----------
    {
      type: "learn", door: 3,
      title: "Open questions keep it going. Yes/no questions stop it.",
      points: [["Yes/no", "“Do you like coding?” “Yes.” End."], ["Open", "“What got you into coding?” A story begins"], ["Follow their answer", "Pick a word they said and ask more"]],
      highlightLast: true,
      side: { label: "Open starters", items: [["message-circle", "“What made you…”", ""], ["route", "“How did you start…”", ""], ["star", "“What’s the best part of…”", ""]] }
    },
    ST(3, "Keep It Going", {
      prompt: "Which question keeps the conversation going?",
      options: ["“Do you like your branch, or not really?”", "“Is it hard?”", "“What made you choose it?”", "“Are you okay with the classes so far?”"], answer: 2,
      hint: "Can it be answered with one word?",
      note: "“What made you…” invites a story. Stories lead to more questions.", badge: "message-circle"
    }),
    ST(3, "Keep It Going", {
      prompt: "They say: “I’m in the robotics club, we’re building a line-following robot.” Best follow-up?",
      options: ["“Oh. Okay.”", "“What’s the hardest part of building it?”", "“I don’t like robots much, to be honest.”", "Change the topic to yesterday’s cricket match"], answer: 1,
      hint: "Follow what THEY said.",
      note: "Picking up their topic shows you listened, and gets them talking about what they enjoy.", badge: "code"
    }),
    ST(3, "Keep It Going", {
      prompt: "You’ve asked 5 questions in a row and shared nothing. What’s the problem?",
      options: ["It feels like an interview", "Nothing, it’s the perfect way to talk", "You asked too few questions", "Questions are rude in small talk"], answer: 0,
      hint: "Conversations go both ways.",
      note: "Share a little about yourself too. Give and take.", badge: "users",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Live practice · +100", prompt: "Pair up with someone you don’t know well. 60 seconds of small talk, then switch.", note: "Use an opener, your name, and one open question. The host taps the team with the best energy.", points: 100 },

    // ---------- Round 4: Listening and body language ----------
    {
      type: "learn", door: 4,
      title: "Good listeners are remembered as good talkers.",
      points: [["Eye contact", "Natural, not staring"], ["React", "“Really?”, “That’s cool!”, a nod, a smile"], ["Phone away", "Checking it says “you’re boring”"]],
      highlightLast: true,
      side: { label: "Listening signals", items: [["eye", "Look at them", ""], ["heart", "Nod and smile", ""], ["smartphone", "Phone in pocket", ""]] }
    },
    ST(4, "Listening", {
      prompt: "Someone is telling you about their internship. You keep checking your phone. What do they think?",
      options: ["You’re very busy and important", "You’re not interested in them", "Nothing", "You’re taking notes"], answer: 1,
      hint: "How would you feel?",
      note: "Phones say “something else matters more”. Keep it in your pocket.", badge: "smartphone"
    }),
    ST(4, "Listening", {
      prompt: "Which reaction shows you’re really listening?",
      options: ["“Hmm.”", "Interrupting with your own story", "“Wait, you built that in 2 days? How?”", "Looking around the room for someone else"], answer: 2,
      hint: "Which one repeats what they said?",
      note: "Reacting to a specific detail proves you listened.", badge: "eye"
    }),
    ST(4, "Listening", Object.assign({}, AWK, {
      prompt: "A conversation at a workshop. Which line breaks it?",
      code: ["A: So how did you get into UI design?", "B: I started by redesigning my college website for fun.", "A: Anyway, let me tell you about my 4 projects, my marks and my plans for 20 minutes.", "B: Oh… okay."],
      outputOptions: ["It’s too short", "It ignores what B said and takes over the conversation", "Nothing, it’s fine"], outputAnswer: 1, bugLine: 2,
      bugText: "A ignored B’s interesting answer and switched to a long talk about themselves",
      hint: "Did A follow B’s answer?",
      note: "B shared something interesting. A should have asked: “What did you change first?”", badge: "message-circle",
      board: true, boardLabel: "after Round 4"
    })),

    // ---------- Round 5: Interviews and HR small talk ----------
    {
      type: "learn", door: 5,
      title: "Interviews start with small talk too.",
      points: [["“How are you?”", "Answer and ask back: “I’m good, thank you! How’s your day going?”"], ["“Did you find the place easily?”", "Short, positive answer"], ["Stay warm and brief", "The real interview starts soon"]],
      highlightLast: true,
      side: { label: "Interview openers", items: [["user", "Smile, greet by name", ""], ["message-circle", "Answer + ask back", ""], ["timer", "Short and warm", ""]] }
    },
    ST(5, "Interviews", {
      prompt: "The interviewer says: “How are you today?” Best reply?",
      options: ["“Fine.”", "“Very nervous, I didn’t sleep, my bus was late…”", "“Doing well, thank you! How’s your day?”", "Silence and a small nod"], answer: 2,
      hint: "Positive, polite, ask back.",
      note: "Short, positive and returning the question sets a warm tone.", badge: "briefcase"
    }),
    ST(5, "Interviews", {
      prompt: "HR asks: “Did you find the office easily?” It took you 30 minutes to find it. Best reply?",
      options: ["“No! Your office is impossible to find, I wasted half an hour.”", "“Yes, thanks. Security gave me directions.”", "“Your map is wrong.”", "Shrug and say nothing"], answer: 1,
      hint: "Honest, short and positive.",
      note: "Keep it light and positive. Complaints aren’t a great first impression.", badge: "map"
    }),
    ST(5, "Interviews", {
      prompt: "The interview ends and the HR walks you to the door. Best last line?",
      options: ["“Thank you, I enjoyed learning about the team.”", "“Did I get the job? When will I hear back?”", "Walk away quietly without saying anything", "“Bye.”"], answer: 0,
      hint: "End warm.",
      note: "A warm thank-you is the last thing they remember.", badge: "handshake",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Exiting (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: leaving politely and staying connected.",
      points: [["Signal the end", "“It was great talking to you.”"], ["Give a reason (optional)", "“I’m going to catch the next session.”"], ["Stay connected", "“Can we connect on LinkedIn?”"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game!"], ["handshake", "Exits and follow-ups", ""], ["award", "Then your level", ""]] }
    },
    ST(6, "Exiting", {
      double: true,
      prompt: "You’ve talked for 10 minutes and want to meet others. Best exit?",
      options: ["Walk away in the middle of their sentence", "Pretend to get a call and leave", "“Lovely talking, Kiran. Let’s connect on LinkedIn!”", "Stay all evening even if you’re bored"], answer: 2,
      hint: "Warm, honest, and stay connected.",
      note: "Name, a kind line, a reason and a way to stay in touch. Perfect exit.", badge: "handshake"
    }),
    ST(6, "Exiting", {
      double: true,
      prompt: "You connect on LinkedIn after the event. Best message?",
      options: ["No message, just the request", "“Hi Kiran, great meeting you today! Loved your drone project.”", "“Hi.”", "“Can you refer me to your company? I need an internship urgently.”"], answer: 1,
      hint: "Remind them where you met.",
      note: "A short note reminding them of your chat turns a stranger into a connection.", badge: "mail"
    }),
    ST(6, "Exiting", {
      double: true,
      prompt: "What’s the best way to get better at small talk?",
      options: ["Read about it, but never try it", "Avoid events until you’re perfect", "Wait for others to start talking", "One short chat at every event"], answer: 3,
      hint: "Practice.",
      note: "Small talk is a skill. It gets easier with every conversation.", badge: "trending-up",
      board: true, boardLabel: "after Round 6"
    }),

    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "Role-play: one person is a senior at a tech event. Open, introduce, ask one question and exit. 45 seconds.", note: "Two volunteers per team. The room claps; the host picks the smoothest one.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "8 Small Talk Moves", note: "Screenshot this. Use 2 at your next event.", items: MOVES },
    {
      type: "end",
      joinTitle: "Join the EduMoon English Club",
      joinText: "Speaking games, English practice and fun every week. Talk confidently with your college friends.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
