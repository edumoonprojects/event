// Public Speaking 101 (EduMoon English Club). For all years.
// Nerves, openings, structure, voice and body, blanking out and Q&A, closings. Then 1-minute talks in small groups.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const PS = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 40, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
// "Tap the weak line" questions use the bug door with friendlier labels.
const TALK = { kind: "bug", time: 55, step1: "What’s the problem?", step2: "Tap the weak line", say1: "First pick the problem.", say2: "Now tap the weak line.", partO: "the problem", partL: "the line", lineLabel: "line", bugLabel: "The weak line is" };

// The take-home card: the 1-minute talk template.
const TEMPLATE = [
  ["Breathe first", "Breathe in for 4, out for 6, twice. Then walk up."],
  ["Open with a hook", "A question, a short story or a surprising fact. Not “Good morning, today I’m going to talk about…”"],
  ["Point", "Say your main idea in one sentence."],
  ["Reason", "Why it matters."],
  ["Example", "One real story or number."],
  ["Point again", "Repeat your main idea in new words."],
  ["Close with an ask", "Tell them what to do, think or try next. Then “Thank you.”"],
  ["Pause, don’t “umm”", "Silence feels long to you and confident to them."]
];

window.GAME = {
  id: "public-speaking-101",
  title: "Public Speaking 101",
  club: "English Club",
  tagline: "Fear of speaking is normal. Learn the simple moves that make anyone sound confident, then give your first 1-minute talk.",
  art: window.STORY_ART,
  guide: {
    years: "All years (perfect for shy students)", time: "40 minutes", level: "Beginner",
    about: "Many students fear public speaking more than exams. In 6 rounds, teams learn how to calm nerves, open with a hook, structure a talk with PREP (Point, Reason, Example, Point), use voice and body, recover from blanking out, handle questions, and close with impact. The game ends with every student giving a 1-minute talk in a small group.",
    outcomes: "A 1-minute talk template they can use for seminars, project reviews, interviews and GDs, two tricks for calming nerves, and the experience of speaking in front of others in a supportive room.",
    tone: "This room must feel safe. Clap for every speaker, every time, no matter what. Never correct grammar in front of others. If someone freezes, smile, give them the first word, and let them try again or sit down without any fuss.",
    extra: [["Running the 1-minute talks", "Make groups of 5 or 6. Each person picks a topic from the screen and speaks for 1 minute to their group using the template. Groups clap and pick one person to give the talk again to the whole room. The host gives the +200 to the most improved or the bravest, not just the most fluent."],
      ["Talk topics", "My favourite place in Vizag · A skill I want to learn · The best advice I’ve ever got · Why everyone should try one sport · An app I can’t live without · What I’d change about college."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Nailed",
    rulesEyebrow: "How Public Speaking 101 works", rulesTitle: "Learn the move. Pick the best line. Then take the stage.",
    learnText: "The host shares one speaking move.", crackTitle: "Answer",
    crackText: "Pick the best answer on your phone and lock it in.",
    rulesExtra: "Speak (optional): <b>+100</b>. Round 6: <b>double</b>. 1-minute talks: <b>+200</b>!",
    nobody: "Nobody got this one. Even experienced speakers make this mistake!", cracked: "got it right",
    next: "Next round →", finale: "Next →", winner: "are today’s star speakers!", endLine: "You spoke. That’s the hardest part done."
  },
  offerEyebrow: "EduMoon English Club · Speaking results",
  offerTitle: "Your speaker rank",
  offers: [
    { min: 0.7, icon: "crown", title: "Stage Ready", text: "You know the moves. Volunteer for the next seminar or event anchor role." },
    { min: 0.45, icon: "mic", title: "Confident Speaker", text: "Strong! Record a 1-minute talk on your phone and watch it once." },
    { min: 0.2, icon: "message-circle", title: "Finding Your Voice", text: "Good start. Use the template to answer one question in class this week." },
    { min: 0, icon: "heart", title: "Brave Beginner", text: "Everyone starts here. Speaking even once today was a real win." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon English Club · Public Speaking 101",
      title: "Your heart races, your hands shake, your mind goes blank. Everyone feels it. Today your team learns what to do about it.",
      cards: [["mic", "6 rounds of speaking moves"], ["list-checks", "A 1-minute talk template"], ["users", "Then your first talk, in a small group"]]
    },
    { type: "rules" },

    // ---------- Round 1: Nerves ----------
    {
      type: "learn", door: 1,
      title: "Nerves are normal. They mean you care.",
      points: [["Your body is getting ready", "A racing heart is energy, the same feeling as before a match"], ["Breathe out longer than in", "In for 4, out for 6. It tells your body to calm down"], ["Practise aloud, not in your head", "Saying it 3 times out loud beats reading it 10 times"]],
      highlightLast: true
    },
    PS(1, "Beating Nerves", {
      prompt: "Kiran’s heart is racing before his seminar. What’s the best thing he can do right now?",
      options: ["Drink three cups of coffee", "Slowly breathe in for 4 counts and out for 6, a few times", "Tell himself “Don’t be nervous” again and again", "Run away"], answer: 1,
      hint: "Which one calms the body directly?",
      note: "A longer breath out slows the heart. Coffee speeds it up, and fighting the feeling usually makes it stronger.", badge: "heart"
    }),
    PS(1, "Beating Nerves", {
      prompt: "What’s the best way to prepare for a 3-minute talk?",
      options: ["Memorise every word", "Read the slides silently many times", "Don’t prepare; just go with the flow", "Know your main points, then practise saying it out loud 3 times"], answer: 3,
      hint: "Memorised talks break when you forget one word.",
      note: "Know the points, not every word. Practising aloud is what makes it feel natural on stage.", badge: "mic"
    }),
    PS(1, "Beating Nerves", {
      prompt: "How much of your nervousness can the audience actually see?",
      options: ["Much less than you think", "All of it", "None of it, ever", "It depends on your marks"], answer: 0,
      hint: "Have you ever noticed a speaker’s shaking hands?",
      note: "Much less than you think. You feel the earthquake inside; they see a calm person. It’s called the spotlight effect.", badge: "lightbulb",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Openings ----------
    {
      type: "learn", door: 2,
      title: "You have 10 seconds to get their attention.",
      points: [["Skip the boring start", "“Good morning, today I am going to talk about…” loses the room"], ["Open with a hook", "A question, a short story or a surprising fact"], ["Never apologise", "“Sorry, I’m not a good speaker” makes everyone believe it"]],
      highlightLast: true
    },
    PS(2, "Strong Openings", {
      prompt: "Topic: “Why every student should learn to swim.” Best opening line?",
      options: ["“Good morning to all. Today my topic is swimming.”", "“Sorry, I didn’t prepare much.”", "“Put your hand up if you can’t swim. Now look around. That’s why I’m here.”", "“Swimming is a sport.”"], answer: 2,
      hint: "Which one makes the audience do something?",
      note: "It pulls the audience in straight away. A question they answer with their hand is one of the strongest hooks.", badge: "zap"
    }),
    PS(2, "Strong Openings", Object.assign({}, TALK, {
      prompt: "Meena’s opening for her project review. What’s the problem, and which line should she cut?",
      code: ["Sorry, I am not very good at speaking, so please adjust.", "Last month, our hostel wasted 40 kg of food in one day.", "So we built an app that tells the mess how many students will eat."],
      outputOptions: ["She apologises, which makes the audience expect a weak talk", "It’s too short", "She should start with the app"], outputAnswer: 0, bugLine: 0,
      bugText: "the apology. Start straight with the 40 kg fact, which is a great hook",
      hint: "Which line makes her sound less confident?",
      note: "Cut the apology and the rest is a perfect opening: a surprising fact, then the solution.", badge: "x"
    })),
    PS(2, "Strong Openings", {
      prompt: "Which of these is a good hook to open a talk on saving money?",
      options: ["“Money is important.”", "“If you save just ₹50 a day from college, you’ll have over ₹70,000 by the time you graduate.”", "“Today I will speak on saving.”", "“I don’t know much about money, but…”"], answer: 1,
      hint: "A surprising number.",
      note: "₹50 × 365 × 4 is ₹73,000. A specific, surprising number makes people sit up.", badge: "target",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Structure ----------
    {
      type: "learn", door: 3,
      title: "PREP: a structure for any talk.",
      points: [["Point", "Your main idea, in one sentence"], ["Reason and example", "Why it matters, and one real story or number"], ["Point again", "Repeat your main idea at the end, in new words"]],
      highlightLast: true,
      side: { label: "PREP", items: [["target", "Point", "“Every student should do one internship.”"], ["lightbulb", "Reason + Example", "“You learn what no class teaches. My senior learned Git in a week.”"], ["route", "Point again", "“So before you graduate, do one internship.”"]] }
    },
    PS(3, "Structure", {
      prompt: "What does the E in PREP stand for?",
      options: ["Ending", "Energy", "Example", "Emotion"], answer: 2,
      hint: "Point, Reason, …, Point.",
      note: "Example. It’s the part people remember most. Stories and numbers stick; general statements don’t.", badge: "list-checks"
    }),
    PS(3, "Structure", {
      prompt: "Why do speakers often group their ideas in threes?",
      options: ["It’s a rule in English grammar", "Three is easy for the audience to follow and remember", "Two is too long", "Teachers say so"], answer: 1,
      hint: "Think “Ready, steady, go”.",
      note: "The rule of three: three points feel complete and are easy to remember. Many famous speeches use it.", badge: "chart-column"
    }),
    PS(3, "Structure", {
      prompt: "Which line is the best way to move from your first point to your second?",
      options: ["“That was the first reason. The second reason is just as important: …”", "“Umm, okay, next…”", "Just start the next point with no link", "“Moving on, let me finish quickly.”"], answer: 0,
      hint: "Which one helps the audience follow along?",
      note: "Clear links (transitions) tell the audience where you are. “Let me finish quickly” tells them you don’t value your own talk.", badge: "route",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Open a talk on “My favourite place in Vizag” with a hook. Just the first 2 lines.", note: "A question, a short story or a surprising fact. 15 seconds.", points: 100 },

    // ---------- Round 4: Voice and body ----------
    {
      type: "learn", door: 4,
      title: "How you say it matters as much as what you say.",
      points: [["Pause instead of “umm”", "A 2-second pause sounds confident. “Umm” sounds unsure"], ["Look at people, not the floor", "Pick 3 friendly faces in different parts of the room"], ["Hands open, feet still", "No pockets, no swaying, no folded arms"]],
      highlightLast: true
    },
    PS(4, "Voice and Body", {
      prompt: "Ravi says “umm” every few words. What’s the best fix?",
      options: ["Speak faster so there’s no time for “umm”", "Memorise the whole speech", "Use a fancier filler, like “basically”", "Pause silently instead. Silence feels long to you but confident to the audience"], answer: 3,
      hint: "What can replace a filler word?",
      note: "A pause. Swapping “umm” for “basically” or “like” is still a filler. Practise pausing at every full stop.", badge: "timer"
    }),
    PS(4, "Voice and Body", {
      prompt: "Where should you look while speaking to a room of 50 people?",
      options: ["At your slides the whole time", "Only at the teacher", "At the ceiling", "At different people around the room, a few seconds each"], answer: 3,
      hint: "Make everyone feel included.",
      note: "Eye contact with different people makes each one feel you’re talking to them. Find friendly faces first.", badge: "users"
    }),
    PS(4, "Voice and Body", {
      prompt: "Which body language says “I’m confident”?",
      options: ["Standing still, shoulders relaxed, hands open at your sides or gesturing", "Hands in pockets, swaying side to side", "Arms folded across your chest", "Holding the mic stand tightly with both hands"], answer: 0,
      hint: "Open, steady and relaxed.",
      note: "Open hands and a steady stance. Pockets and swaying look nervous; folded arms look closed off.", badge: "user",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Blanking out and questions ----------
    {
      type: "learn", door: 5,
      title: "Everyone blanks out sometimes. Have a plan.",
      points: [["Pause and breathe", "The audience doesn’t know what you planned to say next"], ["Repeat your last line", "It often brings the next one back"], ["Don’t know an answer? Say so", "“Good question. I’m not sure, but I’ll find out and tell you.”"]],
      highlightLast: true
    },
    PS(5, "Blanking Out and Q&A", {
      prompt: "In the middle of her seminar, Priya’s mind goes completely blank. Best move?",
      options: ["Say “Sorry, I forgot” and walk off", "Laugh nervously and say “umm” until it comes back", "Pause, breathe, glance at her notes or repeat her last line, then continue", "Start the talk again from the beginning"], answer: 2,
      hint: "The audience doesn’t know her script.",
      note: "A calm pause looks planned. Repeating the last line or glancing at notes usually brings the next point back.", badge: "lightbulb"
    }),
    PS(5, "Blanking Out and Q&A", {
      prompt: "Someone asks a question you don’t know the answer to. What should you say?",
      options: ["“That’s a great question. I’m not sure, but I’ll check and get back to you.”", "Make up an answer confidently", "“That’s not important.”", "“Ask someone else.”"], answer: 0,
      hint: "Honesty builds trust.",
      note: "Honest and helpful. Made-up answers get caught, and then people doubt everything else you said.", badge: "badge-check"
    }),
    PS(5, "Blanking Out and Q&A", {
      prompt: "Someone asks a long, confusing question. What’s the smartest first step?",
      options: ["Answer whatever you think they meant", "Ignore it", "Say “Next question”", "Repeat it in your own words: “So you’re asking how the app handles…?”"], answer: 3,
      hint: "Make sure you understood before you answer.",
      note: "Repeating the question checks you understood, lets the whole room hear it, and gives you a few seconds to think.", badge: "ear",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Closings (double) ----------
    {
      type: "learn", door: 6,
      title: "End strong. People remember the last line.",
      points: [["Never end with “That’s it”", "Or “I think I’m done”"], ["Repeat your point and give an ask", "“So this week, try one thing: …”"], ["Then say “Thank you” and pause", "Smile, wait for the applause, then walk off"]],
      highlightLast: true
    },
    PS(6, "Strong Closings", {
      double: true,
      prompt: "Which is the strongest last line for a talk on learning to swim?",
      options: ["“So, that’s it from my side.”", "“Swimming could save your life one day. This summer, book just one lesson. Thank you.”", "“I think I’m done. Any questions? No? Okay.”", "“Sorry for taking your time.”"], answer: 1,
      hint: "Main point + an ask + thank you.",
      note: "It repeats the point, gives one clear action and ends with thanks. The others fade out or apologise.", badge: "flame"
    }),
    PS(6, "Strong Closings", {
      double: true,
      prompt: "You’re running out of time with 2 points still left. What should you do?",
      options: ["Speak twice as fast", "Ignore the time and keep going", "Skip to your closing: say your main point and your ask", "Stop mid-sentence"], answer: 2,
      hint: "What should the audience leave with?",
      note: "Jump to the close. A strong ending matters more than covering everything. Respecting time is respecting your audience.", badge: "clock"
    }),
    PS(6, "Strong Closings", {
      double: true,
      prompt: "What’s the best way to keep getting better at public speaking?",
      options: ["Speak often, even small things, like answering in class or presenting in a club", "Wait until you feel confident, then start", "Only speak when you have to", "Read books about speaking but never practise"], answer: 0,
      hint: "Confidence comes from…?",
      note: "Confidence comes after practice, not before. Every small chance to speak counts.", badge: "rocket",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- 1-minute talks, results, take-home ----------
    { type: "speak", eyebrow: "1-minute talks · bravest or most improved wins +200", prompt: "In groups of 5 or 6, each person gives a 1-minute talk using the template.", note: "Topics: My favourite place in Vizag · A skill I want to learn · The best advice I’ve got · An app I can’t live without · What I’d change about college.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "The 1-Minute Talk Template", note: "Screenshot this. Use it for seminars, project reviews, interviews and GDs.", items: TEMPLATE },
    {
      type: "end",
      joinTitle: "Join the EduMoon English Club",
      joinText: "Speaking games, debates and GD practice every week. No fear of mistakes.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
