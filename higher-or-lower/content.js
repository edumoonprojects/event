// Higher or Lower (EduMoon Fun Zone). For all years.
// The screen shows a number. Is the real answer higher or lower? 6 rounds, from your body to the stars.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const HL = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 20, board: false, options: ["Higher", "Lower"], eyebrow: `Round ${round} · ${name}` }, extra);
const UP = 0, DOWN = 1;

// The take-home card: 10 numbers worth remembering.
const HNUMS = [
  ["206", "Bones in an adult human body. Babies are born with about 300."],
  ["32", "Adult teeth, including the 4 wisdom teeth."],
  ["3", "Hearts in an octopus."],
  ["7", "Neck bones in a giraffe, the same as in you."],
  ["3,84,400 km", "The average distance from the Earth to the Moon."],
  ["About 8 minutes", "How long sunlight takes to reach the Earth."],
  ["8", "Bits in a byte."],
  ["22", "Languages in the Eighth Schedule of India’s Constitution."],
  ["42.195 km", "The length of a marathon."],
  ["22 yards", "The length of a cricket pitch."]
];

window.GAME = {
  id: "higher-or-lower",
  title: "Higher or Lower",
  club: "Fun Zone",
  tagline: "We show a number. You decide: is the real answer higher or lower?",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "30 minutes", level: "Beginner",
    about: "The fastest game in the Game Zone. Each question shows a number, and teams have 20 seconds to decide if the real answer is higher or lower. 6 rounds cover the human body, animals, space, tech, India and sports. Every reveal comes with a surprising fact. It ends with a guessing challenge and a card of 10 numbers worth remembering.",
    outcomes: "A habit of estimating before answering, which helps in aptitude tests and interviews, and a pocketful of surprising facts.",
    tone: "Big energy, fast pace. Do a dramatic pause before every reveal. With only two options, luck plays a part, so remind teams that speed and a good guess both count.",
    extra: [["Make it louder", "Before each reveal, ask the room to shout “Higher!” or “Lower!”. It’s a great way to wake up a sleepy crowd."],
      ["Facts checked", "Every number is a stable, well-known figure (no prices or yearly statistics), so the game won’t go out of date."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Called it",
    rulesEyebrow: "How Higher or Lower works", rulesTitle: "See the number. Higher or lower? Decide in 20 seconds.",
    learnText: "The host introduces the round.", crackTitle: "Call it",
    crackText: "Tap Higher or Lower on your phone and lock it in.",
    rulesExtra: "Faster answers score more. Speak (optional): <b>+100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody called it. That one surprises everyone!", cracked: "called it",
    next: "Next round →", finale: "Next →", winner: "have the sharpest instincts!", endLine: "Higher scores next time!"
  },
  offerEyebrow: "EduMoon Fun Zone · Higher or Lower results",
  offerTitle: "Your guessing rank",
  offers: [
    { min: 0.7, icon: "crown", title: "Human Calculator", text: "Your instincts are scary good. Try the Aptitude Arena next." },
    { min: 0.45, icon: "target", title: "Sharp Guesser", text: "Strong! You estimate well, and that helps in every exam." },
    { min: 0.2, icon: "compass", title: "Lucky Streak", text: "Good fun! Save the number card and beat a friend with it." },
    { min: 0, icon: "sparkles", title: "Wildcard", text: "Today the numbers fooled you. Now you know 18 new facts." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Fun Zone · Higher or Lower",
      title: "One number on the screen. One choice: higher or lower? Simple to play, hard to win.",
      cards: [["chart-column", "18 numbers from your body to the stars"], ["timer", "20 seconds for each call"], ["trophy", "Win the title of Human Calculator"]]
    },
    { type: "rules" },

    // ---------- Round 1: Your body ----------
    {
      type: "learn", door: 1,
      title: "Round 1: your own body.",
      points: [["Think before you tap", "Picture it. Count what you can"], ["Start from what you know", "A small fact can lead to a big answer"], ["Your body is full of surprises", "Some answers will sound wrong but are true"]],
      highlightLast: true
    },
    HL(1, "Your Body", {
      prompt: "An adult human body has 300 bones. Higher or lower?",
      answer: DOWN,
      hint: "Babies have more bones than adults.",
      note: "Lower: 206. Babies are born with about 300, and some bones join together as you grow.", badge: "user"
    }),
    HL(1, "Your Body", {
      prompt: "An adult has 28 teeth. Higher or lower?",
      answer: UP,
      hint: "Don’t forget the wisdom teeth.",
      note: "Higher: 32, counting the 4 wisdom teeth. Many people never get all 4.", badge: "smartphone"
    }),
    HL(1, "Your Body", {
      prompt: "Your heart beats 50,000 times a day. Higher or lower?",
      answer: UP,
      hint: "About 70 beats a minute. How many minutes are in a day?",
      note: "Higher: about 1,00,000 times. 70 beats × 1,440 minutes is just over 1 lakh.", badge: "heart",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Animals ----------
    {
      type: "learn", door: 2,
      title: "Round 2: animals.",
      points: [["Animals break the rules", "Some have extra organs, some have fewer than you think"], ["Don’t trust size", "A long neck doesn’t mean more neck bones"], ["Count the legs", "Insects and spiders are not the same"]],
      highlightLast: true
    },
    HL(2, "Animals", {
      prompt: "An octopus has 2 hearts. Higher or lower?",
      answer: UP,
      hint: "One heart is for the body, but the gills need help too.",
      note: "Higher: 3 hearts. Two pump blood through the gills and one pumps it to the rest of the body.", badge: "waves"
    }),
    HL(2, "Animals", {
      prompt: "A giraffe has 12 bones in its neck. Higher or lower?",
      answer: DOWN,
      hint: "Count the neck bones in your own neck.",
      note: "Lower: 7, the same as you. Each giraffe neck bone can be longer than your hand.", badge: "search"
    }),
    HL(2, "Animals", {
      prompt: "A spider has 10 legs. Higher or lower?",
      answer: DOWN,
      hint: "Insects have 6. Spiders are not insects.",
      note: "Lower: 8. That’s why spiders aren’t insects.", badge: "list-checks",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Space ----------
    {
      type: "learn", door: 3,
      title: "Round 3: space. The numbers get huge.",
      points: [["Space is bigger than you think", "Distances are in lakhs and crores of km"], ["Light is fast, but not instant", "Even sunlight takes time to reach us"], ["Planets change", "Some lists you learned in school have been updated"]],
      highlightLast: true
    },
    HL(3, "Space", {
      prompt: "The Moon is 1,00,000 km away from the Earth. Higher or lower?",
      answer: UP,
      hint: "You could fit all the other planets between the Earth and the Moon.",
      note: "Higher: about 3,84,400 km on average. Chandrayaan-3 took over a month to get there.", badge: "rocket"
    }),
    HL(3, "Space", {
      prompt: "Our solar system has 9 planets. Higher or lower?",
      answer: DOWN,
      hint: "One was moved to a new category in 2006.",
      note: "Lower: 8. In 2006, Pluto was reclassified as a dwarf planet.", badge: "star"
    }),
    HL(3, "Space", {
      prompt: "Sunlight takes 30 minutes to reach the Earth. Higher or lower?",
      answer: DOWN,
      hint: "Light travels about 3 lakh km every second.",
      note: "Lower: about 8 minutes. The sunlight you see left the Sun 8 minutes ago.", badge: "lightbulb",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Share the most surprising number you know in 20 seconds.", note: "The room says “Higher” or “Lower” to a guess first, then you reveal it.", points: 100 },

    // ---------- Round 4: Tech ----------
    {
      type: "learn", door: 4,
      title: "Round 4: tech. Younger than you think, or older?",
      points: [["Your phone’s apps", "Some are younger than you"], ["Code is old", "Some languages are older than your teachers’ careers"], ["Computers count in 2s", "Bits, bytes and powers of two"]],
      highlightLast: true
    },
    HL(4, "Tech", {
      prompt: "A byte has 10 bits. Higher or lower?",
      answer: DOWN,
      hint: "Computers love powers of 2.",
      note: "Lower: 8 bits make a byte. 1 KB is 1,024 bytes, also a power of 2.", badge: "code"
    }),
    HL(4, "Tech", {
      prompt: "YouTube was started in the year 2000. Higher or lower?",
      answer: UP,
      hint: "Its first video was of a zoo.",
      note: "Higher: 2005. The first video, “Me at the zoo”, is 19 seconds long.", badge: "film"
    }),
    HL(4, "Tech", {
      prompt: "The Python language was first released in 2000. Higher or lower?",
      answer: DOWN,
      hint: "It’s older than most of the students in this room.",
      note: "Lower: 1991. Python is older than Java, which came out in 1995.", badge: "code",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: India ----------
    {
      type: "learn", door: 5,
      title: "Round 5: India in numbers.",
      points: [["A country of languages", "The Constitution lists the major ones"], ["A huge parliament", "Lok Sabha members are elected from constituencies"], ["Symbols have numbers too", "Look closely at the flag"]],
      highlightLast: true
    },
    HL(5, "India", {
      prompt: "The Eighth Schedule of the Constitution lists 15 languages. Higher or lower?",
      answer: UP,
      hint: "Telugu, Tamil, Hindi, Bengali, Marathi, Sanskrit, Santali… keep counting.",
      note: "Higher: 22. The list started with 14 in 1950 and has grown since.", badge: "languages"
    }),
    HL(5, "India", {
      prompt: "The Lok Sabha has 600 elected seats. Higher or lower?",
      answer: DOWN,
      hint: "Each seat is one constituency.",
      note: "Lower: 543 seats. Andhra Pradesh elects 25 of them.", badge: "landmark"
    }),
    HL(5, "India", {
      prompt: "The Ashoka Chakra on our flag has 20 spokes. Higher or lower?",
      answer: UP,
      hint: "One spoke for every hour of the day.",
      note: "Higher: 24 spokes, often linked to the 24 hours of the day.", badge: "sparkles",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Sports (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: sports. Double points.",
      points: [["Fields and distances", "Pitches, tracks and races have fixed sizes"], ["Records", "Some numbers are almost impossible to believe"], ["Double points", "Anyone can still win"]],
      highlightLast: true
    },
    HL(6, "Sports", {
      double: true,
      prompt: "A cricket pitch is 25 yards long. Higher or lower?",
      answer: DOWN,
      hint: "The number is in its old name: a chain.",
      note: "Lower: 22 yards, about 20 metres, from stumps to stumps.", badge: "trophy"
    }),
    HL(6, "Sports", {
      double: true,
      prompt: "A marathon is 40 km long. Higher or lower?",
      answer: UP,
      hint: "There’s an odd extra bit at the end.",
      note: "Higher: 42.195 km. The extra distance was set at the 1908 London Olympics.", badge: "route"
    }),
    HL(6, "Sports", {
      double: true,
      prompt: "A chessboard has 100 squares. Higher or lower?",
      answer: DOWN,
      hint: "8 rows of 8.",
      note: "Lower: 64. Chess grew from a game called chaturanga, played in India.", badge: "crown",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, results, take-home ----------
    { type: "speak", eyebrow: "Final challenge · closest guess wins +200", prompt: "How many hours are there in one year? Each team shouts one guess.", note: "Answer: 8,760 (365 × 24). The closest team wins. Ask them how they worked it out.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "10 Numbers Worth Knowing", note: "Screenshot this. Try them on your family at dinner.", items: HNUMS },
    {
      type: "end",
      joinTitle: "Join the EduMoon community",
      joinText: "Quizzes, games and events for students across Vizag every week.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
