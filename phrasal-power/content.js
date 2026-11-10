// Phrasal Power (EduMoon English Club). For all years.
// Everyday phrasal verbs (look into, put off, figure out…) in college, office, tech and daily-life situations.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const PP = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 35, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
// "Find the wrong phrasal verb" questions use the bug door.
const SLIP = { kind: "bug", time: 60, step1: "What’s wrong?", step2: "Tap the wrong sentence", say1: "First pick the problem.", say2: "Now tap the wrong sentence.", partO: "the problem", partL: "the sentence", lineLabel: "sentence", bugLabel: "The wrong sentence is" };

const VERBS = [
  ["figure out", "Understand or solve. “I figured out the bug.”"],
  ["put off", "Delay. “Don’t put off your assignment.”"],
  ["look into", "Check or investigate. “I’ll look into it.”"],
  ["catch up", "Reach the same level. “I missed class; I’ll catch up.”"],
  ["come up with", "Think of an idea. “We came up with a name.”"],
  ["follow up", "Check again later. “I’ll follow up next week.”"],
  ["run out of", "Have none left. “My phone ran out of charge.”"],
  ["give up", "Stop trying. “Don’t give up on coding.”"],
  ["turn down", "Refuse, or lower volume. “She turned down the offer.”"],
  ["set up", "Arrange or install. “Set up a meeting.”"]
];

window.GAME = {
  id: "phrasal-power",
  title: "Phrasal Power",
  club: "English Club",
  tagline: "Small words, big meaning. Speak like it’s natural.",
  art: window.STORY_ART,
  guide: {
    years: "All years · beginner to medium English", time: "35 minutes", level: "Beginner",
    about: "Phrasal verbs (look into, put off, figure out, catch up) are everywhere in real English: in class, at work, in emails and in films. They’re hard because the meaning isn’t in the words. In 6 rounds, teams match meanings, fill blanks in college and office situations, and spot the sentence that uses the wrong one. They leave with 10 phrasal verbs to start using today.",
    outcomes: "10 high-use phrasal verbs, their meanings in real situations, and the confidence to use them in speaking and emails.",
    tone: "Keep it friendly; many students switch off when grammar feels like a test. After each reveal, say the full sentence aloud and ask one student to make their own. Mistakes are welcome.",
    extra: [["Telugu bridge", "If students are stuck, give the meaning in Telugu first, then the English sentence. It builds confidence fast."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Got it",
    rulesEyebrow: "How Phrasal Power works", rulesTitle: "Read the sentence. Pick the right phrasal verb.",
    learnText: "The host shares this round’s phrasal verbs.", crackTitle: "Choose",
    crackText: "Pick your answer on your phone and lock it in.",
    rulesExtra: "Wrong-sentence questions: <b>100</b> for the problem + <b>100</b> for the sentence. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Even fluent speakers mix these up!", cracked: "got it right",
    next: "Next round →", finale: "Next →", winner: "have the strongest phrasal power!", endLine: "Use one new phrasal verb today!"
  },
  offerEyebrow: "EduMoon English Club · Phrasal results",
  offerTitle: "Your English level",
  offers: [
    { min: 0.7, icon: "crown", title: "Natural Speaker", text: "You use phrasal verbs like a native. Try them in your next email." },
    { min: 0.45, icon: "languages", title: "Confident Speaker", text: "Strong! Use 2 new ones in conversation this week." },
    { min: 0.2, icon: "message-circle", title: "Growing Speaker", text: "Good start. Pick 3 from the list and use one a day." },
    { min: 0, icon: "book-open", title: "Starting Out", text: "Everyone starts here. Save the 10 and say each one aloud." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon English Club · Phrasal Power",
      title: "“Look into it.” “Put it off.” “Figure it out.” Two small words that change everything. Can your team crack them?",
      cards: [["languages", "Phrasal verbs from real life"], ["message-circle", "College, office and daily situations"], ["star", "10 to start using today"]]
    },
    { type: "rules" },

    // ---------- Round 1: College life ----------
    {
      type: "learn", door: 1,
      title: "Round 1: college life.",
      points: [["catch up", "Reach the same level after missing something"], ["figure out", "Understand or solve"], ["hand in", "Submit work to a teacher"]],
      highlightLast: true,
      side: { label: "Examples", items: [["book-open", "“I’ll catch up on notes.”", ""], ["brain", "“I figured out the answer.”", ""], ["file-text", "“Hand in your record by Friday.”", ""]] }
    },
    PP(1, "College Life", {
      prompt: "“I was sick for a week, so I need to ___ on my notes.”",
      options: ["catch up", "give up", "look up", "turn down"], answer: 0,
      hint: "Reach the same level as the class.",
      note: "catch up = reach the same level after falling behind. “I need to catch up on my notes.”", badge: "book-open"
    }),
    PP(1, "College Life", {
      prompt: "“The lab record must be ___ by Friday.”",
      options: ["handed out", "handed in", "handed over", "handed down"], answer: 1,
      hint: "You give it to the teacher.",
      note: "hand in = submit. “Hand out” means the teacher gives sheets to students.", badge: "file-text"
    }),
    PP(1, "College Life", {
      prompt: "“After an hour, I finally ___ how recursion works.”",
      options: ["figured out", "put off", "ran out", "gave in"], answer: 0,
      hint: "Understood it.",
      note: "figure out = understand or solve. “I figured out the bug.”", badge: "brain",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Time and plans ----------
    {
      type: "learn", door: 2,
      title: "Round 2: time and plans.",
      points: [["put off", "Delay something to later"], ["call off", "Cancel completely"], ["show up", "Arrive, appear"]],
      highlightLast: true,
      side: { label: "Don’t mix these up", items: [["clock", "put off = later", "“Put off till Monday”"], ["x", "call off = cancelled", "“The fest is called off”"], ["users", "show up = arrive", "“Only 5 showed up”"]] }
    },
    PP(2, "Time and Plans", {
      prompt: "“Stop ___ your assignment. Start it today.”",
      options: ["putting on", "putting off", "putting up", "putting in"], answer: 1,
      hint: "Delaying.",
      note: "put off = delay. “Put on” is for clothes; “put up with” means tolerate.", badge: "clock"
    }),
    PP(2, "Time and Plans", {
      prompt: "“Because of the cyclone, the college fest was ___.”",
      options: ["called up", "called in", "called off", "called out"], answer: 2,
      hint: "It won’t happen at all.",
      note: "call off = cancel. Different from “put off”, which only delays.", badge: "x"
    }),
    PP(2, "Time and Plans", {
      prompt: "“We expected 50 students, but only 20 ___.”",
      options: ["showed up", "showed off", "showed out", "showed in"], answer: 0,
      hint: "Arrived.",
      note: "show up = arrive. “Show off” means to boast.", badge: "users",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Office and email ----------
    {
      type: "learn", door: 3,
      title: "Round 3: office and email English.",
      points: [["look into", "Check or investigate"], ["follow up", "Contact again later about the same thing"], ["set up", "Arrange or organise"]],
      highlightLast: true,
      side: { label: "Email lines", items: [["search", "“I’ll look into this.”", ""], ["mail", "“Just following up on…”", ""], ["clock", "“Can we set up a call?”", ""]] }
    },
    PP(3, "Office and Email", {
      prompt: "HR writes: “We’ll ___ your application and get back to you.”",
      options: ["look after", "look into", "look up to", "look out"], answer: 1,
      hint: "Check it carefully.",
      note: "look into = investigate. “Look after” means take care of someone.", badge: "search"
    }),
    PP(3, "Office and Email", {
      prompt: "“No reply yet. I’ll ___ with the recruiter next Monday.”",
      options: ["follow up", "follow out", "follow in", "follow down"], answer: 0,
      hint: "Contact again about the same thing.",
      note: "follow up = check again later. A key phrase for internships and placements.", badge: "mail"
    }),
    PP(3, "Office and Email", Object.assign({}, SLIP, {
      prompt: "An email to a manager. Which sentence uses the wrong phrasal verb?",
      code: ["Thank you for setting up the meeting.", "I will look into the issue today.", "Please turn down the report by Friday.", "I’ll follow up if I have questions."],
      outputOptions: ["It should be “hand in” or “send”, not “turn down”", "It’s too polite", "Nothing, every sentence is right"], outputAnswer: 0, bugLine: 2,
      bugText: "“turn down” means refuse or lower volume. You hand in or send a report",
      hint: "Which one means refuse?",
      note: "Wrong phrasal verbs change meaning completely. “Turn down the report” would mean reject it!", badge: "spell-check",
      board: true, boardLabel: "after Round 3"
    })),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Make your own sentence with “put off” about your college life.", note: "Say it aloud in 15 seconds. The room claps.", points: 100 },

    // ---------- Round 4: Phones and tech ----------
    {
      type: "learn", door: 4,
      title: "Round 4: phones and tech.",
      points: [["run out of", "Have none left"], ["log in / log out", "Enter or leave an account"], ["back up", "Save a copy for safety"]],
      highlightLast: true,
      side: { label: "Tech English", items: [["smartphone", "“My phone ran out of charge.”", ""], ["lock", "“Log out on shared PCs.”", ""], ["shield", "“Back up your project.”", ""]] }
    },
    PP(4, "Phones and Tech", {
      prompt: "“My phone ___ battery in the middle of the online exam.”",
      options: ["ran into", "ran out of", "ran over", "ran after"], answer: 1,
      hint: "None left.",
      note: "run out of = have none left. “Run into” means meet by chance.", badge: "smartphone"
    }),
    PP(4, "Phones and Tech", {
      prompt: "“Always ___ of your email on the college lab computer.”",
      options: ["log out", "log off out", "log down", "log away"], answer: 0,
      hint: "Leave the account.",
      note: "log out (or log off) = leave your account. Important on shared computers!", badge: "lock"
    }),
    PP(4, "Phones and Tech", {
      prompt: "“___ your project files on Google Drive before formatting your laptop.”",
      options: ["Back off", "Back down", "Back up", "Back out"], answer: 2,
      hint: "Save a safe copy.",
      note: "back up = save a copy. “Back off” means move away; “back out” means withdraw.", badge: "shield",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: People and feelings ----------
    {
      type: "learn", door: 5,
      title: "Round 5: people and feelings.",
      points: [["get along (with)", "Have a good relationship"], ["give up", "Stop trying"], ["cheer up", "Become happier, or make someone happier"]],
      highlightLast: true,
      side: { label: "Examples", items: [["users", "“I get along with my roommates.”", ""], ["heart", "“Cheer up! Results aren’t everything.”", ""], ["trending-up", "“Don’t give up on DSA.”", ""]] }
    },
    PP(5, "People and Feelings", {
      prompt: "“I ___ well with my hostel roommates.”",
      options: ["get over", "get along", "get by", "get off"], answer: 1,
      hint: "Good relationship.",
      note: "get along (with) = have a good relationship. “Get over” means recover from something.", badge: "users"
    }),
    PP(5, "People and Feelings", {
      prompt: "“The first DSA problems were hard, but she didn’t ___.”",
      options: ["give up", "give in to", "give out", "give away"], answer: 0,
      hint: "Stop trying.",
      note: "give up = stop trying. “Give away” means give for free.", badge: "trending-up"
    }),
    PP(5, "People and Feelings", {
      prompt: "“My friend was sad about his marks, so we took him out to ___ him ___.”",
      options: ["cheer … on", "cheer … off", "cheer … up", "cheer … in"], answer: 2,
      hint: "Make him happier.",
      note: "cheer someone up = make them happier. “Cheer on” means shout support during a match.", badge: "heart",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Mixed (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: mixed. Double points!",
      points: [["come up with", "Think of an idea"], ["turn down", "Refuse an offer"], ["point out", "Show or mention something important"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game!"], ["languages", "Mixed sentences", ""], ["award", "Then your level", ""]] }
    },
    PP(6, "Mixed", {
      double: true,
      prompt: "“Our team ___ a great idea for the hackathon.”",
      options: ["came across", "came up with", "came down with", "came over"], answer: 1,
      hint: "Thought of it.",
      note: "come up with = think of an idea. “Come down with” means become ill.", badge: "lightbulb"
    }),
    PP(6, "Mixed", {
      double: true,
      prompt: "“She got two offers and ___ the one with the lower stipend.”",
      options: ["turned up", "turned into", "turned down", "turned on"], answer: 2,
      hint: "Refused it.",
      note: "turn down = refuse. “Turn up” means arrive or increase volume.", badge: "briefcase"
    }),
    PP(6, "Mixed", Object.assign({}, SLIP, {
      double: true,
      prompt: "A student’s message to a friend. Which sentence is wrong?",
      code: ["Thanks for pointing out the mistake in my code.", "I figured out the error after your hint.", "I ran out of time to test everything.", "Let’s give up a meeting tomorrow to plan the project."],
      outputOptions: ["It’s too short", "Nothing, every sentence is right", "It should be “set up” a meeting; “give up” means stop trying"], outputAnswer: 2, bugLine: 3,
      bugText: "you set up (arrange) a meeting. “Give up” means stop trying",
      hint: "Which one means stop trying?",
      note: "Three perfect sentences and one slip. Now you can spot it.", badge: "message-circle",
      board: true, boardLabel: "after Round 6"
    })),

    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "In 30 seconds: tell a short story about your week using 3 phrasal verbs from today.", note: "The room counts them. The host picks the best story.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "10 Phrasal Verbs to Use Today", note: "Screenshot this. Use one in every conversation today.", items: VERBS },
    {
      type: "end",
      joinTitle: "Join the EduMoon English Club",
      joinText: "Speaking games, English practice and fun every week. Talk confidently with your college friends.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
