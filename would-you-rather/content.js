// Would You Rather: Campus Edition (EduMoon Fun Zone). For all years.
// Two choices, and one is secretly smarter: maths, science, study habits, careers and safety decide the winner.
// Between rounds, pure-opinion "debate" dilemmas where the best argument wins points.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const WR = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 35, board: false, options: ["Option A", "Option B"], eyebrow: `Round ${round} · ${name}` }, extra);
const A = 0, B = 1;
const DEBATE = (prompt) => ({ type: "speak", eyebrow: "Debate time · best argument wins +100", prompt, note: "No right answer here. Each team picks a side and gives one reason in 20 seconds. The host taps the best argument.", points: 100 });

const SMART = [
  ["Do the maths", "₹5,000 a month beats ₹50,000 today. Count before you choose."],
  ["Little and often beats one big push", "For studying, saving and fitness."],
  ["Sleep is a study tool", "Tired brains forget."],
  ["Distance beats willpower", "Phone in another room, not face-down."],
  ["Depth beats a long list", "One real project beats ten copied ones."],
  ["Personal beats mass", "5 thoughtful messages beat 50 copy-paste ones."],
  ["Safety first, always", "Unique passwords, mobile data for banking, update apps."],
  ["Probability surprises us", "When in doubt, work it out."]
];

window.GAME = {
  id: "would-you-rather",
  title: "Would You Rather: Campus Edition",
  club: "Fun Zone",
  tagline: "Two choices. One is secretly smarter. Pick wisely.",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "35 minutes", level: "Beginner",
    about: "Every question offers two choices, and one is secretly smarter: maths, science, study research, career sense or safety decides the winner. 6 rounds cover money, study habits, science, careers, online safety and probability puzzles. Between rounds, pure-opinion debates (no right answer) let teams argue for points. Great as an icebreaker or a first session.",
    outcomes: "8 smart-choice rules (compounding, spaced study, sleep, focus, depth, personal outreach, safety, probability) and practice explaining a choice out loud.",
    tone: "Read both options with drama, let the room shout A or B, then reveal. For debate steps, reward the funniest or most creative argument, not the “correct” one. Keep it light and fast.",
    extra: [["Add your own", "Students will suggest dilemmas. Write the best ones down for next time and add them to content.js."]]
  },
  words: {
    round: "Round", unlocked: "Smarter choice", badgeLabel: "Smart pick",
    rulesEyebrow: "How Would You Rather works", rulesTitle: "Two choices. One is smarter. Pick it.",
    learnText: "The host introduces the round.", crackTitle: "Choose",
    crackText: "Tap Option A or Option B on your phone and lock it in.",
    rulesExtra: "Faster answers score more. Debates: best argument <b>+100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody picked the smart option. It’s sneakier than it looks!", cracked: "chose wisely",
    next: "Next round →", finale: "Next →", winner: "make the smartest choices!", endLine: "Choose wisely out there!"
  },
  offerEyebrow: "EduMoon Fun Zone · Would You Rather results",
  offerTitle: "Your decision style",
  offers: [
    { min: 0.7, icon: "brain", title: "Big Brain Chooser", text: "You think before you pick. That’s a superpower in exams and life." },
    { min: 0.45, icon: "target", title: "Smart Picker", text: "Strong! Do the quick maths before every big choice." },
    { min: 0.2, icon: "compass", title: "Gut Feeler", text: "Fun! Your gut is fast. Now add a 10-second check." },
    { min: 0, icon: "sparkles", title: "Wildcard", text: "Today the tricks won. Save the 8 rules and try them." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Fun Zone · Would You Rather",
      title: "Would you rather… Every question has two choices, and one is secretly smarter. Plus debates with no right answer. Ready?",
      cards: [["route", "18 two-way dilemmas"], ["brain", "Maths, science and life decide"], ["message-circle", "Debates where the best argument wins"]]
    },
    { type: "rules" },

    // ---------- Round 1: Money ----------
    {
      type: "learn", door: 1,
      title: "Round 1: money. Count before you choose.",
      points: [["Big numbers fool us", "“₹50,000 today!” sounds huge"], ["Add it up", "Monthly × 12, discounts on the total"], ["Doubling is powerful", "Small things that double get big fast"]],
      highlightLast: true,
      side: { label: "Calculator allowed", items: [["indian-rupee", "Add it up", ""], ["timer", "35 seconds", ""], ["target", "Pick A or B", ""]] }
    },
    WR(1, "Money", {
      prompt: "Option A: ₹50,000 today. Option B: ₹5,000 every month for one year.", answer: B,
      hint: "5,000 × 12.",
      note: "B. ₹5,000 × 12 = ₹60,000, which is ₹10,000 more.", badge: "indian-rupee"
    }),
    WR(1, "Money", {
      prompt: "You need 3 T-shirts at ₹400 each. Option A: 25% off everything. Option B: buy 2, get 1 free.", answer: B,
      hint: "A: 1,200 minus 25%. B: pay for 2.",
      note: "B. A costs ₹900 (₹1,200 − ₹300). B costs ₹800. “Free” offers can beat big percentages.", badge: "tag"
    }),
    WR(1, "Money", {
      prompt: "Option A: ₹5 lakh today. Option B: ₹1 on day 1, doubled every day, and you get whatever it is on day 20.", answer: B,
      hint: "1, 2, 4, 8… keep doubling 19 times.",
      note: "B. Day 20 is ₹5,24,288, just over ₹5 lakh. Doubling starts tiny and ends huge. That’s compounding.", badge: "trending-up",
      board: true, boardLabel: "after Round 1"
    }),
    DEBATE("Would you rather have free canteen food for a whole year, or no attendance rule for a whole year?"),

    // ---------- Round 2: Study habits ----------
    {
      type: "learn", door: 2,
      title: "Round 2: study habits. Research picks the winner.",
      points: [["Your brain has rules", "Spacing, sleep and focus matter"], ["The “hard” option", "Is often the smart one"], ["Think about next week", "Not just tonight"]],
      highlightLast: true,
      side: { label: "This round", items: [["book-open", "Revision", ""], ["clock", "Sleep", ""], ["smartphone", "Phones", ""]] }
    },
    WR(2, "Study Habits", {
      prompt: "Option A: study 1 hour a day for 6 days. Option B: study 6 hours the night before.", answer: A,
      hint: "Same total hours.",
      note: "A. Spreading study over days (spaced practice) helps you remember far more than cramming.", badge: "clock"
    }),
    WR(2, "Study Habits", {
      prompt: "Night before an exam. Option A: sleep 7 hours. Option B: sleep 3 hours and revise 4 more.", answer: A,
      hint: "When does your brain store what you learned?",
      note: "A. Sleep is when your brain locks in memories. A tired brain also makes silly mistakes.", badge: "brain"
    }),
    WR(2, "Study Habits", {
      prompt: "While studying, Option A: phone face-down on your desk. Option B: phone in another room.", answer: B,
      hint: "Does a silent phone still pull your attention?",
      note: "B. Studies suggest just having your phone nearby can reduce focus, even when it’s silent.", badge: "smartphone",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Science ----------
    {
      type: "learn", door: 3,
      title: "Round 3: science. Physics doesn’t care about your feelings.",
      points: [["Picture it", "Then think about the forces"], ["Gravity, water, electricity", "Each has rules"], ["Surprising but true", "Some answers sound wrong"]],
      highlightLast: true,
      side: { label: "This round", items: [["globe", "Space", ""], ["zap", "Lightning", ""], ["sparkles", "Water", ""]] }
    },
    WR(3, "Science", {
      prompt: "Where would you weigh less? Option A: on the Moon. Option B: on Mars.", answer: A,
      hint: "Which is smaller?",
      note: "A. On the Moon you weigh about one-sixth of your Earth weight; on Mars, about 38%.", badge: "globe"
    }),
    WR(3, "Science", {
      prompt: "Caught in a lightning storm. Option A: shelter under a tall tree. Option B: sit inside a car with the windows up.", answer: B,
      hint: "Lightning loves tall things.",
      note: "B. A metal car body carries the charge around you. Tall trees attract strikes. Never shelter under them.", badge: "zap"
    }),
    WR(3, "Science", {
      prompt: "Jumping into deep water from a height. Option A: belly first. Option B: feet first.", answer: B,
      hint: "Which one hits a smaller area?",
      note: "B. Feet first cuts into the water. A belly flop slaps a big area and really hurts.", badge: "sparkles",
      board: true, boardLabel: "after Round 3"
    }),
    DEBATE("Would you rather be able to understand every language, or be able to talk to animals?"),

    // ---------- Round 4: Careers ----------
    {
      type: "learn", door: 4,
      title: "Round 4: careers. Depth and real work win.",
      points: [["Recruiters ask “explain this”", "Can you?"], ["People help people", "Who took time to ask well"], ["Basics first", "Then breadth"]],
      highlightLast: true,
      side: { label: "This round", items: [["code", "Projects", ""], ["mail", "Messages", ""], ["graduation-cap", "Learning", ""]] }
    },
    WR(4, "Careers", {
      prompt: "On your resume. Option A: 10 projects copied from tutorials. Option B: 1 project you built and can fully explain.", answer: B,
      hint: "The interviewer will ask questions about it.",
      note: "B. One real project you can explain beats ten you can’t. Interviewers dig deep.", badge: "code"
    }),
    WR(4, "Careers", {
      prompt: "Looking for an internship. Option A: copy-paste one message to 50 people. Option B: a personal message to 5 people you researched.", answer: B,
      hint: "Which one would YOU reply to?",
      note: "B. Personal messages get far more replies. Mention something specific about them.", badge: "mail"
    }),
    WR(4, "Careers", {
      prompt: "First-year coder. Option A: learn a little of 8 languages. Option B: learn 1 language really well first.", answer: B,
      hint: "Ideas carry over between languages.",
      note: "B. Once you truly know one, picking up the next is much faster.", badge: "graduation-cap",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Online safety ----------
    {
      type: "learn", door: 5,
      title: "Round 5: online safety. The safe choice is the smart choice.",
      points: [["Convenient isn’t always safe", "Think before you tap"], ["One leak, many accounts", "Reused passwords are risky"], ["Updates fix holes", "Skip them and stay open"]],
      highlightLast: true,
      side: { label: "This round", items: [["lock", "Passwords", ""], ["globe", "Wi-Fi", ""], ["shield", "Updates", ""]] }
    },
    WR(5, "Online Safety", {
      prompt: "Option A: one strong password for every account. Option B: a different password for each, saved in a password manager.", answer: B,
      hint: "What if one site gets hacked?",
      note: "B. If one site leaks your password, a reused one opens all your accounts.", badge: "lock"
    }),
    WR(5, "Online Safety", {
      prompt: "Paying a bill on your bank app outside. Option A: free public Wi-Fi. Option B: your own mobile data.", answer: B,
      hint: "Who else is on that Wi-Fi?",
      note: "B. Your own mobile data is safer for money. Save public Wi-Fi for browsing.", badge: "globe"
    }),
    WR(5, "Online Safety", {
      prompt: "Your phone shows a system update. Option A: install it soon. Option B: ignore it for months.", answer: A,
      hint: "What do updates usually fix?",
      note: "A. Updates often fix security holes that attackers already know about.", badge: "shield",
      board: true, boardLabel: "after Round 5"
    }),
    DEBATE("Would you rather have a 4-day college week with longer days, or a 6-day week with shorter days?"),

    // ---------- Round 6: Probability puzzles (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: probability puzzles. Double points!",
      points: [["Our gut is bad at chance", "Even smart people get these wrong"], ["Count the possibilities", "Then pick"], ["Still anyone’s game", "Double points"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Anyone can still win"], ["brain", "3 famous puzzles", ""], ["award", "Then your style", "How smart is your team?"]] }
    },
    WR(6, "Probability", {
      double: true,
      prompt: "Bet ₹100 on your class of 40 students. Option A: at least two share a birthday. Option B: nobody shares a birthday.", answer: A,
      hint: "Count pairs of people, not days.",
      note: "A. With 40 people, the chance two share a birthday is about 89%. With just 23 it’s already over 50%.", badge: "users"
    }),
    WR(6, "Probability", {
      double: true,
      prompt: "3 doors, a prize behind one. You pick a door, then the host opens another empty one. Option A: stick with your door. Option B: switch.", answer: B,
      hint: "The host knows where the prize is.",
      note: "B. Switching wins 2 times out of 3. Your first pick had only a 1-in-3 chance. Famous, and it surprises everyone.", badge: "brain"
    }),
    WR(6, "Probability", {
      double: true,
      prompt: "Option A: a sure ₹10,000. Option B: toss a coin, heads ₹30,000, tails ₹0.", answer: B,
      hint: "Average result if you played many times?",
      note: "B, on average: the coin toss is worth ₹15,000. But if you really need the money now, the sure thing is a fair choice too. That’s risk.", badge: "indian-rupee",
      board: true, boardLabel: "after Round 6"
    }),

    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "In 30 seconds: invent your own Would You Rather where one option is secretly smarter.", note: "Ask the room, then reveal why. The host picks the best one.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "8 Rules for Smarter Choices", note: "Screenshot this. Use it the next time you can’t decide.", items: SMART },
    {
      type: "end",
      joinTitle: "Join the EduMoon community",
      joinText: "Fun games, quizzes and challenges every week. Learn something new while you play.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
