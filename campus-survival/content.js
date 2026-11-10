// Campus Survival (EduMoon Fun Zone). For all years, best for 1st years.
// Funny but useful hostel and college situations: first week, roommates, money at month end, exam chaos,
// lost documents and staying safe. The smartest answer wins.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const CS = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 30, board: false, eyebrow: `Round ${round} · ${name}` }, extra);

const SURVIVAL = [
  ["Make 2 friends in week 1", "Say hi to the people next to you. Everyone is nervous."],
  ["Save your seniors’ numbers", "And one faculty member’s."],
  ["Talk to roommates early", "Agree on sleep, guests, cleaning and sharing."],
  ["Budget the month", "Fixed costs first, then food, then fun."],
  ["Keep digital copies", "ID card, hall ticket, certificates in a safe folder."],
  ["Check notices on official channels", "Not only WhatsApp forwards."],
  ["Look after yourself", "Sleep, food, a walk, and someone to talk to."],
  ["Ask for help early", "Seniors, faculty, the counselling cell, family."]
];

window.GAME = {
  id: "campus-survival",
  title: "Campus Survival",
  club: "Fun Zone",
  tagline: "Hostel chaos, empty wallets, lost ID cards. Survive it all.",
  art: window.STORY_ART,
  guide: {
    years: "All years · perfect for 1st years", time: "30 minutes", level: "Beginner",
    about: "A light, funny game about real college life. In 6 rounds, teams choose the smartest move in everyday situations: the first week, roommates, money at month end, exam-week chaos, lost documents and staying safe and well. Great as an icebreaker for freshers or a fun break before exams.",
    outcomes: "Practical habits for hostel and college life, how to handle common problems calmly, and where to ask for help.",
    tone: "Keep it funny and warm. Let seniors in the room share their own survival stories between rounds. In the wellbeing round, keep it gentle and remind everyone that asking for help is normal.",
    extra: [["Freshers tip", "Run this in the first month of college. Ask seniors to join as team captains."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Survived",
    rulesEyebrow: "How Campus Survival works", rulesTitle: "Read the situation. Pick the smartest move.",
    learnText: "The host introduces the situation.", crackTitle: "Survive",
    crackText: "Pick your move on your phone and lock it in.",
    rulesExtra: "Faster answers score more. Speak (optional): <b>+100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody survived this one. College is tough!", cracked: "survived",
    next: "Next round →", finale: "Next →", winner: "are today’s campus survivors!", endLine: "You’re ready for anything campus throws at you!"
  },
  offerEyebrow: "EduMoon Fun Zone · Survival results",
  offerTitle: "Your survival rank",
  offers: [
    { min: 0.7, icon: "crown", title: "Campus Legend", text: "Juniors should ask you everything. Be the senior you needed." },
    { min: 0.45, icon: "shield", title: "Survivor", text: "Strong! Save the 8 survival rules for your friends." },
    { min: 0.2, icon: "compass", title: "Finding Your Way", text: "Good fun! Try one tip this week." },
    { min: 0, icon: "sparkles", title: "Fresher Energy", text: "Today campus won. Tomorrow you’ve got this." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Fun Zone · Campus Survival",
      title: "Your roommate snores. Your wallet is empty on the 20th. Your ID card is missing on exam day. Welcome to college. Can your team survive?",
      cards: [["users", "Roommates, money and exams"], ["timer", "30 seconds per situation"], ["shield", "Leave with 8 survival rules"]]
    },
    { type: "rules" },

    // ---------- Round 1: First week ----------
    {
      type: "learn", door: 1,
      title: "Round 1: the first week.",
      points: [["Everyone is nervous", "Even the ones who look confident"], ["Small hellos", "Lead to big friendships"], ["Seniors know the shortcuts", "Ask them"]],
      highlightLast: true,
      side: { label: "This round", items: [["users", "Making friends", ""], ["map", "Finding your way", ""], ["message-circle", "Asking for help", ""]] }
    },
    CS(1, "First Week", {
      prompt: "First day. You don’t know anyone in class. Smartest move?",
      options: ["Wait for someone to talk to you", "Sit alone and scroll your phone", "Say hi to the people next to you and ask where they’re from", "Skip class"], answer: 2,
      hint: "Everyone is nervous.",
      note: "One “hi” is all it takes. Most people are relieved when someone starts.", badge: "users"
    }),
    CS(1, "First Week", {
      prompt: "You can’t find the lab and class starts in 5 minutes. Best move?",
      options: ["Go back to the hostel", "Cry", "Ask a senior or the staff nearby", "Walk around for 30 minutes"], answer: 2,
      hint: "People know.",
      note: "Seniors and staff love helping lost freshers. Just ask.", badge: "map"
    }),
    CS(1, "First Week", {
      prompt: "Someone adds you to 15 WhatsApp groups in week 1. Which one do you mute LAST?",
      options: ["The cricket group", "Your official class group with notices", "The random “friendship” group", "The meme group"], answer: 1,
      hint: "Which one has exam dates?",
      note: "Keep official class groups unmuted. Missing one notice can cost you.", badge: "message-circle",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Roommates ----------
    {
      type: "learn", door: 2,
      title: "Round 2: roommates.",
      points: [["Talk early", "Sleep time, lights, guests, sharing"], ["Talk kindly", "Not through status updates"], ["Small issues stay small", "If you talk about them early"]],
      highlightLast: true,
      side: { label: "Agree on", items: [["clock", "Sleep and lights", ""], ["users", "Guests", ""], ["list-checks", "Cleaning and sharing", ""]] }
    },
    CS(2, "Roommates", {
      prompt: "Your roommate plays music loudly at 1 AM every night. Best move?",
      options: ["Talk calmly, and suggest earphones after 11 PM", "Play your music louder", "Complain to everyone except them", "Post an angry story about it"], answer: 0,
      hint: "Direct and kind.",
      note: "A calm talk usually fixes it. Most people don’t realise they’re disturbing others.", badge: "message-circle"
    }),
    CS(2, "Roommates", {
      prompt: "Your snacks keep disappearing from your shelf. Smartest first step?",
      options: ["Hide them in your shoes", "Accuse the whole floor", "Never buy snacks again", "Calmly ask your roommates and agree what’s shared and what’s not"], answer: 3,
      hint: "Clear rules prevent fights.",
      note: "Agreeing what’s shared early avoids awkward fights later.", badge: "store"
    }),
    CS(2, "Roommates", {
      prompt: "You and your roommate disagree on everything. What’s the most mature approach?",
      options: ["Move out on day 3", "Stop talking forever", "Fight daily", "Agree on 3 simple room rules together and respect each other’s space"], answer: 3,
      hint: "You don’t need to be best friends.",
      note: "You don’t have to be best friends, just good roommates. Simple rules help.", badge: "handshake",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Money ----------
    {
      type: "learn", door: 3,
      title: "Round 3: money at month end.",
      points: [["Fixed costs first", "Mess, travel, recharge"], ["Then daily spending", "Food, outings"], ["Small daily spends add up", "₹50 a day is ₹1,500 a month"]],
      highlightLast: true,
      side: { label: "This round", items: [["indian-rupee", "Budgets", ""], ["store", "Food", ""], ["shield", "Scams", ""]] }
    },
    CS(3, "Money", {
      prompt: "You get ₹6,000 a month. It’s the 20th and you have ₹400 left. What would have helped most?",
      options: ["Not eating", "Spending faster", "A simple plan at the start: fixed costs first, then a daily limit", "Borrowing from everyone"], answer: 2,
      hint: "Plan before you spend.",
      note: "A 5-minute plan on the 1st saves a hungry 20th.", badge: "indian-rupee"
    }),
    CS(3, "Money", {
      prompt: "Ordering food online every night costs about ₹200. How much is that in 30 days?",
      options: ["₹600", "₹2,000", "₹4,000", "₹6,000"], answer: 3,
      hint: "200 × 30.",
      note: "₹6,000 a month. Small daily habits become big monthly bills.", badge: "store"
    }),
    CS(3, "Money", {
      prompt: "A message says: “Earn ₹5,000 a day from your hostel room. Just pay ₹999 to join.” Smartest move?",
      options: ["Share it with your batch", "Pay half", "Pay quickly before the offer ends", "Ignore it. Real jobs don’t ask you to pay to join"], answer: 3,
      hint: "Who pays whom?",
      note: "Paying to get a “job” is a classic scam. Report fraud on 1930.", badge: "shield",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Share your funniest or worst hostel or college moment so far.", note: "Keep it kind! 20 seconds.", points: 100 },

    // ---------- Round 4: Exam chaos ----------
    {
      type: "learn", door: 4,
      title: "Round 4: exam-week chaos.",
      points: [["Check dates on official notices", "Not only forwards"], ["Prepare the night before", "Hall ticket, pens, calculator"], ["Sleep", "It’s part of revision"]],
      highlightLast: true,
      side: { label: "Exam kit", items: [["file-text", "Hall ticket", "+ a phone photo"], ["pen-tool", "2 pens", ""], ["clock", "Leave early", ""]] }
    },
    CS(4, "Exam Chaos", {
      prompt: "A WhatsApp forward says tomorrow’s exam is postponed. Smartest move?",
      options: ["Stop studying and sleep", "Check the official college notice or ask a faculty member", "Celebrate", "Forward it to everyone"], answer: 1,
      hint: "Who decides exam dates?",
      note: "Fake postponement forwards are common. Official sources only.", badge: "file-text"
    }),
    CS(4, "Exam Chaos", {
      prompt: "It’s 7 AM, your exam is at 10 AM, and you can’t find your hall ticket. Best move?",
      options: ["Panic and skip the exam", "Go back to sleep", "Hope nobody checks", "Check your phone photo or email copy, and contact the exam section right away"], answer: 3,
      hint: "Digital copy + ask early.",
      note: "Keep phone copies of important documents. Exam sections often help if you ask early.", badge: "smartphone"
    }),
    CS(4, "Exam Chaos", {
      prompt: "Night before the exam, your friends plan a movie till 3 AM. Smartest move?",
      options: ["Join and sleep 3 hours", "Study the whole night instead", "Watch it twice", "Revise, then sleep on time. Celebrate together after the exam"], answer: 3,
      hint: "Sleep is part of revision.",
      note: "Movies can wait one day. Your exam can’t.", badge: "clock",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Lost and found ----------
    {
      type: "learn", door: 5,
      title: "Round 5: lost things and paperwork.",
      points: [["Keep digital copies", "ID, Aadhaar, certificates, fee receipts"], ["Act quickly", "Report lost cards and phones"], ["Know the office", "Where to go for ID, fees, scholarships"]],
      highlightLast: true,
      side: { label: "Safe folder", items: [["file-text", "Certificates", ""], ["shield", "ID copies", ""], ["indian-rupee", "Fee receipts", ""]] }
    },
    CS(5, "Lost and Found", {
      prompt: "You lost your college ID card. Best move?",
      options: ["Use a friend’s", "Make a fake one", "Report it to the college office and ask how to get a duplicate", "Never enter college again"], answer: 2,
      hint: "The official way.",
      note: "Report it quickly. Fake or borrowed IDs can get you in real trouble.", badge: "user"
    }),
    CS(5, "Lost and Found", {
      prompt: "Your phone is stolen. What should you do FIRST?",
      options: ["Wait a week", "Post about it", "Buy a new phone and forget it", "Block your SIM and UPI and bank access, change key passwords, and report the loss"], answer: 3,
      hint: "Protect your money and accounts.",
      note: "Block the SIM and payment apps first. Also report it officially; India’s CEIR portal can block a stolen phone.", badge: "shield"
    }),
    CS(5, "Lost and Found", {
      prompt: "Scholarship deadline is tomorrow and you haven’t started. Smartest move?",
      options: ["Skip it", "Wait for next year", "Ask someone to fill it with fake details", "Start now, read the official instructions, and ask the scholarship cell or a senior who applied"], answer: 3,
      hint: "Start now, ask for help.",
      note: "Many forms take less time than you fear. Official instructions + a helpful senior.", badge: "file-text",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Wellbeing (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: looking after yourself. Double points!",
      points: [["Basics first", "Sleep, food, water, a walk"], ["Homesick or low?", "Very common. Talk to someone"], ["Help is there", "Friends, seniors, faculty, the counselling cell, family"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game!"], ["heart", "Wellbeing", ""], ["award", "Then your rank", ""]] }
    },
    CS(6, "Wellbeing", {
      double: true,
      prompt: "A month in, you feel homesick and low. What helps?",
      options: ["Pretend you’re fine forever", "Hide it from everyone", "Call home, talk to a friend or senior, and keep a simple routine. It’s very common", "Stay in your room all weekend"], answer: 2,
      hint: "You’re not the only one.",
      note: "Many students feel this in the first months. Talking to people really helps.", badge: "heart"
    }),
    CS(6, "Wellbeing", {
      double: true,
      prompt: "Your friend has stopped eating with the group and seems very stressed. Best move?",
      options: ["Tell them to cheer up", "Gossip about it", "Check in privately and kindly, listen, and help them reach someone if needed", "Ignore it"], answer: 2,
      hint: "Be the friend you’d want.",
      note: "A kind check-in matters. If it seems serious, help them talk to a counsellor or trusted adult.", badge: "users"
    }),
    CS(6, "Wellbeing", {
      double: true,
      prompt: "Which daily habit helps you survive college best?",
      options: ["Regular sleep, real meals and some movement every day", "Skipping breakfast always", "Sleeping at 4 AM daily", "Only energy drinks"], answer: 0,
      hint: "Basics win.",
      note: "Simple basics keep your energy, mood and marks steady.", badge: "star",
      board: true, boardLabel: "after Round 6"
    }),

    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "In 30 seconds: your #1 survival tip for a fresher joining tomorrow.", note: "Funny or wise. The room claps; the host picks the best tip.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "8 Campus Survival Rules", note: "Screenshot this. Share it with a fresher.", items: SURVIVAL },
    {
      type: "end",
      joinTitle: "Join the EduMoon community",
      joinText: "Fun games, quizzes and challenges every week. Make friends across colleges.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
