// Article and Preposition Rush (EduMoon English Club). For all years.
// The small words that make English sound right: a, an, the, no article, in/on/at for time and place, and verb + preposition pairs that Indian speakers often mix up.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const AR = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 25, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const ASPOT = { kind: "bug", time: 50, step1: "What kind of mistake is it?", step2: "Tap the line with the mistake", say1: "First pick the kind of mistake.", say2: "Now tap the line with the mistake.", partO: "the kind", partL: "the line", lineLabel: "line", bugLabel: "The wrong line is" };

// The take-home card: small words, big difference.
const SMALL = [
  ["a or an?", "Go by the SOUND: an hour, an MBA, a university, a one-day trip."],
  ["the", "For something specific or the only one: the sun, the principal, the book I lent you."],
  ["No article", "For general ideas and games: I love music. We play cricket."],
  ["at / on / in (time)", "at 5 PM, on Monday, on 15 August, in May, in 2026."],
  ["at / on / in (place)", "at the bus stop, on the bus, in the car, in Vizag."],
  ["discuss, reach, enter", "No preposition: discuss the plan, reach Vizag, enter the room."],
  ["Fixed pairs", "married to, good at, depend on, interested in, angry with someone."],
  ["Check before sending", "Read emails aloud once. Small words are where mistakes hide."]
];

window.GAME = {
  id: "article-preposition-rush",
  title: "Article and Preposition Rush",
  club: "English Club",
  tagline: "a, an, the, in, on, at. Small words that make your English sound right.",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "30 minutes", level: "Medium",
    about: "A fast-paced grammar game for the tiny words that cause the most mistakes. In 6 rounds, teams pick a or an by sound, decide when to use the or no article, choose in, on or at for time and place, fix verb and preposition pairs like “discuss about” and “reach to”, and find mistakes in a resume and an email. Questions are quick, 25 seconds each.",
    outcomes: "Correct use of a, an and the, in/on/at for time and place, and about 15 verb-preposition pairs, plus the habit of checking small words before sending.",
    tone: "These mistakes are common and nothing to be embarrassed about; many fluent speakers make them. Keep it quick and light. After each reveal, say the correct sentence aloud and have the room repeat it.",
    extra: [["Speed round", "This game works well as a 30-minute warm-up before a longer English session."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Fixed",
    rulesEyebrow: "How Article and Preposition Rush works", rulesTitle: "Learn the rule. Pick the small word. Be fast.",
    learnText: "The host shares one rule for small words.", crackTitle: "Pick",
    crackText: "Pick the right word on your phone, fast.",
    rulesExtra: "25 seconds each. Faster scores more. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Even fluent speakers slip here!", cracked: "got it",
    next: "Next round →", finale: "Next →", winner: "are today’s grammar sprinters!", endLine: "Small words, big difference."
  },
  offerEyebrow: "EduMoon English Club · Grammar level",
  offerTitle: "Your grammar level",
  offers: [
    { min: 0.7, icon: "trophy", title: "Grammar Sprinter", text: "Your small words are spot on. Help a friend check their resume." },
    { min: 0.45, icon: "spell-check", title: "Sharp Writer", text: "Strong! Review the card below before your next email." },
    { min: 0.2, icon: "pen-tool", title: "Careful Learner", text: "Good start. Learn the in/on/at rules this week." },
    { min: 0, icon: "book-open", title: "Word Learner", text: "Everyone starts here. One rule a day is enough." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon English Club · The small-word rush",
      title: "Most English mistakes are not big words. They are tiny ones: a, an, the, in, on, at. Can your team get them right, fast?",
      cards: [["spell-check", "Articles and prepositions"], ["timer", "25 seconds per question"], ["trophy", "Your score decides your grammar level"]]
    },
    { type: "rules" },

    // ---------- Round 1: a or an ----------
    {
      type: "learn", door: 1,
      title: "a or an? Listen to the first SOUND, not the first letter.",
      points: [["an + vowel sound", "an apple, an hour (silent h), an MBA (em-bee-ay)"], ["a + consonant sound", "a university (you-ni), a one-day trip (wun)"], ["Say it aloud", "Your ear will tell you"]],
      highlightLast: true,
      side: { label: "Tricky ones", items: [["check", "an honest man", "Silent h"], ["check", "a European city", "Sounds like “you”"], ["check", "an SMS", "Sounds like “ess”"]] }
    },
    AR(1, "a or an", {
      prompt: "“I waited for ___ hour at the bus stop.”",
      options: ["an", "a", "the", "no article"], answer: 0,
      hint: "Is the h spoken?",
      note: "an hour: the h is silent, so it starts with a vowel sound.", badge: "clock"
    }),
    AR(1, "a or an", {
      prompt: "“She studies at ___ university in Hyderabad.”",
      options: ["an", "the", "no article", "a"], answer: 3,
      hint: "Say “university” slowly. What is the first sound?",
      note: "a university: it starts with a “you” sound, which is a consonant sound.", badge: "graduation-cap"
    }),
    AR(1, "a or an", {
      prompt: "“He wants to do ___ MBA after B.Tech.”",
      options: ["an", "a", "the", "no article"], answer: 0,
      hint: "How do you say M?",
      note: "an MBA: M is said “em”, a vowel sound.", badge: "briefcase",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: the or nothing ----------
    {
      type: "learn", door: 2,
      title: "Use “the” for something specific. Use nothing for general ideas.",
      points: [["the", "The one we both know: the principal, the sun, the book on your desk"], ["No article", "General: I like music. Students need sleep"], ["Games and meals", "play cricket, have lunch. But play the guitar"]],
      highlightLast: true,
      side: { label: "Compare", items: [["check", "“I love coffee.”", "General"], ["check", "“The coffee at RTIH is great.”", "Specific"], ["check", "“She plays the violin.”", "Instruments take the"]] }
    },
    AR(2, "the or Nothing", {
      prompt: "“We play ___ cricket every evening.”",
      options: ["a", "no article", "an", "the"], answer: 1,
      hint: "Sports and games.",
      note: "No article with games: play cricket, play chess.", badge: "trophy"
    }),
    AR(2, "the or Nothing", {
      prompt: "“___ sun rises in the east.”",
      options: ["A", "An", "no article", "The"], answer: 3,
      hint: "There is only one.",
      note: "The sun: there is only one, so it is specific.", badge: "sparkles"
    }),
    AR(2, "the or Nothing", {
      prompt: "Which sentence is correct?",
      options: ["“I love the music.” (meaning all music)", "“I love a music.”", "“I love an music.”", "“I love music.”"], answer: 3,
      hint: "General idea.",
      note: "No article for things in general. “The music” would mean a specific song or event.", badge: "check",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Time ----------
    {
      type: "learn", door: 3,
      title: "at, on, in for time: small to big.",
      points: [["at", "Exact times: at 5 PM, at night, at noon"], ["on", "Days and dates: on Monday, on 15 August"], ["in", "Months, years, seasons: in May, in 2026, in the morning"]],
      highlightLast: true,
      side: { label: "Pattern", items: [["clock", "at", "a point in time"], ["list-checks", "on", "a day"], ["chart-column", "in", "a longer period"]] }
    },
    AR(3, "Time", {
      prompt: "“The interview is ___ Monday.”",
      options: ["on", "in", "at", "by"], answer: 0,
      hint: "Days take…",
      note: "on Monday. Days and dates use on.", badge: "clock"
    }),
    AR(3, "Time", {
      prompt: "“The class starts ___ 9:30 AM.”",
      options: ["in", "on", "for", "at"], answer: 3,
      hint: "An exact time.",
      note: "at 9:30 AM. Exact clock times use at.", badge: "alarm-clock"
    }),
    AR(3, "Time", {
      prompt: "“I joined college ___ 2024.”",
      options: ["on", "at", "in", "by"], answer: 2,
      hint: "Years are long periods.",
      note: "in 2024. Years, months and seasons use in.", badge: "chart-column",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Say three sentences about your week using at, on and in for time.", note: "“At 9 AM… On Saturday… In December…” 20 seconds.", points: 100 },

    // ---------- Round 4: Place ----------
    {
      type: "learn", door: 4,
      title: "at, on, in for places.",
      points: [["at", "A point: at the bus stop, at the gate, at RTIH"], ["in", "Inside or a city: in the room, in Vizag, in a car"], ["on", "A surface or public transport: on the table, on the bus, on the train"]],
      highlightLast: true,
      side: { label: "Transport", items: [["check", "on the bus / train / plane", "You can walk inside"], ["check", "in a car / auto / taxi", "You sit inside"], ["check", "on a bike", "You sit on top"]] }
    },
    AR(4, "Place", {
      prompt: "“I’m waiting ___ the bus stop near Siripuram.”",
      options: ["in", "on", "at", "into"], answer: 2,
      hint: "A point on the map.",
      note: "at the bus stop. A specific point uses at.", badge: "map"
    }),
    AR(4, "Place", {
      prompt: "“She is ___ the train to Chennai.”",
      options: ["in", "at", "on", "by"], answer: 2,
      hint: "Public transport you can walk around in.",
      note: "on the train. Buses, trains and planes use on.", badge: "route"
    }),
    AR(4, "Place", {
      prompt: "“My cousin lives ___ Hyderabad.”",
      options: ["at", "on", "in", "to"], answer: 2,
      hint: "Cities and countries.",
      note: "in Hyderabad. Cities, states and countries use in.", badge: "landmark",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Verb + preposition ----------
    {
      type: "learn", door: 5,
      title: "Some verbs need no preposition. Some need a fixed one.",
      points: [["No preposition", "discuss the plan, reach Vizag, enter the room, attend the class"], ["Fixed pairs", "married to, good at, depend on, interested in"], ["Common slips", "“discuss about”, “reach to”, “married with”"]],
      highlightLast: true,
      side: { label: "Fix these", items: [["x", "“discuss about the project”", "→ discuss the project"], ["x", "“reached to Vizag”", "→ reached Vizag"], ["x", "“good in maths”", "→ good at maths"]] }
    },
    AR(5, "Verb + Preposition", {
      prompt: "Which sentence is correct?",
      options: ["“Let’s discuss about the project.”", "“Let’s discuss the project.”", "“Let’s discuss on the project.”", "“Let’s discuss to the project.”"], answer: 1,
      hint: "discuss already means “talk about”.",
      note: "discuss the project. You can say “talk about” or “a discussion about”, but not “discuss about”.", badge: "message-circle"
    }),
    AR(5, "Verb + Preposition", {
      prompt: "“We ___ Vizag at 6 AM.”",
      options: ["reached", "reached to", "reached at", "reached on"], answer: 0,
      hint: "reach takes no preposition before a place.",
      note: "reached Vizag. But “arrived in Vizag” or “arrived at the station” do take a preposition.", badge: "route"
    }),
    AR(5, "Verb + Preposition", {
      prompt: "“Priya is very good ___ public speaking.”",
      options: ["in", "at", "on", "with"], answer: 1,
      hint: "good ___ a skill.",
      note: "good at a skill. Also: bad at, better at.", badge: "mic",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Resume and email check (double) ----------
    {
      type: "learn", door: 6,
      title: "Small-word mistakes stand out in resumes and emails.",
      points: [["Read it aloud once", "Your ear catches what your eyes skip"], ["Check a/an and the", "Especially before degrees and job titles"], ["Check time and place words", "Dates, meeting times and locations"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["file-text", "Real documents", "Resume and email"], ["mic", "Then the final challenge", "A grammar battle"]] }
    },
    AR(6, "Resume and Email", Object.assign({}, ASPOT, {
      double: true,
      prompt: "Kiran’s resume summary. Which line has a mistake?",
      code: ["Final year B.Tech student in Mechanical Engineering.", "Completed a internship at a steel plant in Vizag.", "Good at AutoCAD and team projects.", "Led the college robotics club for one year."],
      outputOptions: ["A wrong article", "A wrong time preposition", "A wrong place preposition"], outputAnswer: 0, bugLine: 1,
      bugText: "“a internship” should be “an internship”: internship starts with a vowel sound",
      hint: "Check every a and an.",
      note: "an internship. One small word on a resume can make it look careless.", badge: "file-user"
    })),
    AR(6, "Resume and Email", Object.assign({}, ASPOT, {
      double: true,
      prompt: "Kiran’s email to HR. Which line has a mistake?",
      code: ["Dear Ma’am,", "Thank you for the interview invitation.", "I will reach to your office on Monday at 10 AM.", "Regards, Kiran"],
      outputOptions: ["A wrong article", "An extra preposition after a verb", "A spelling mistake"], outputAnswer: 1, bugLine: 2,
      bugText: "“reach to your office” should be “reach your office”",
      hint: "One verb from Round 5.",
      note: "reach your office. “On Monday at 10 AM” is perfect.", badge: "mail"
    })),
    AR(6, "Resume and Email", {
      double: true,
      prompt: "Which sentence is fully correct?",
      options: ["“I am interested in an internship in Bengaluru on May.”", "“I am interested in an internship in Bengaluru in May.”", "“I am interested on a internship at Bengaluru in May.”", "“I am interested in the internship on Bengaluru at May.”"], answer: 1,
      hint: "Check every small word.",
      note: "interested in, an internship, in Bengaluru, in May.", badge: "badge-check",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best team wins +200", prompt: "Grammar battle: the host says a wrong sentence. The first team to say the correct version wins the point.", note: "Try: “I discussed about it.” “I reached to college at Monday.” “She is a honest girl.”", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "Small Words, Big Difference", note: "Screenshot this. Check these before every email and resume.", items: SMALL },
    {
      type: "end",
      joinTitle: "Join the EduMoon English Club",
      joinText: "Speaking games, debates and English practice every week. No fear of mistakes.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
