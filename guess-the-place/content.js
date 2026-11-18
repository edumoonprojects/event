// Guess the Place (EduMoon Fun Zone). For all years and any crowd.
// Name the Indian place from three clues: monuments, nature, temples and heritage, Vizag and Andhra, city nicknames and a final round on India's edges.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const GP = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 30, board: false, eyebrow: `Round ${round} · ${name}` }, extra);

// The take-home card: a travel bucket list from today.
const BUCKET = [
  ["Agra", "The Taj Mahal, a marble tomb on the Yamuna."],
  ["Rann of Kutch", "A vast white salt desert in Gujarat."],
  ["Meghalaya", "Living root bridges grown from trees."],
  ["Hampi", "Ruins of the Vijayanagara empire in Karnataka."],
  ["Konark", "A sun temple shaped like a giant chariot in Odisha."],
  ["Araku and Borra", "Coffee hills and ancient caves near Vizag."],
  ["Kanyakumari", "The southern tip of mainland India."],
  ["Start local", "Pick one place within 100 km of your college and visit it this year."]
];

window.GAME = {
  id: "guess-the-place",
  title: "Guess the Place",
  club: "Fun Zone",
  tagline: "Three clues. One place in India. How fast can your team name it?",
  art: window.STORY_ART,
  guide: {
    years: "All years · any crowd", time: "30 minutes", level: "Medium",
    about: "A travel quiz across India. Each question gives three clues about a place. In 6 rounds, teams guess famous monuments, natural wonders, temples and heritage sites, places around Vizag, cities from their nicknames, and India’s far edges. Every reveal comes with a one-line travel tip.",
    outcomes: "A mental map of India’s famous places, a few new ones to visit, and pride in what is near Vizag.",
    tone: "Read the clues slowly and dramatically, one at a time. Ask who has visited each place. The Vizag round should feel like a home win, and it often starts travel stories.",
    extra: [["Make it visual", "If you have a projector and internet, show one photo of each place after the reveal. Students love it."]]
  },
  words: {
    round: "Round", unlocked: "The place", badgeLabel: "Found",
    rulesEyebrow: "How Guess the Place works", rulesTitle: "Three clues. One place. Name it fast.",
    learnText: "The host introduces the theme.", crackTitle: "Guess",
    crackText: "Pick the place on your phone and lock it in.",
    rulesExtra: "Faster answers score more. Round 6: <b>double</b>!",
    nobody: "Nobody found this one. Time for a trip!", cracked: "found it",
    next: "Next round →", finale: "Next →", winner: "are today’s top explorers!", endLine: "India is waiting. Go see it."
  },
  offerEyebrow: "EduMoon Fun Zone · Explorer level",
  offerTitle: "Your explorer level",
  offers: [
    { min: 0.7, icon: "compass", title: "Master Explorer", text: "You know India well. Plan a trip to one place you have not seen." },
    { min: 0.45, icon: "map", title: "Seasoned Traveller", text: "Strong! Pick one place from the bucket list for this year." },
    { min: 0.2, icon: "route", title: "Curious Traveller", text: "Good start. Explore one new place near Vizag this month." },
    { min: 0, icon: "party-popper", title: "Armchair Explorer", text: "Everyone starts here. Every answer today is a trip idea!" }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Fun Zone · Three clues",
      title: "Each screen has three clues about a place in India. Monuments, mountains, beaches and our own Vizag. Can your team guess them all?",
      cards: [["map", "6 rounds across India"], ["timer", "30 seconds each, faster scores more"], ["trophy", "Your score decides your explorer level"]]
    },
    { type: "rules" },

    // ---------- Round 1: Monuments ----------
    {
      type: "learn", door: 1,
      title: "Round 1: famous monuments.",
      points: [["Read all three clues", "The last clue is often the biggest hint"], ["Think of the builder", "Kings and empires left clues"], ["Think of the river or sea", "Many monuments sit beside water"]],
      highlightLast: true,
      side: { label: "Theme", items: [["landmark", "Monuments", ""], ["map", "Cities", ""], ["clock", "History", ""]] }
    },
    GP(1, "Monuments", {
      prompt: "White marble. Built by Shah Jahan. Beside the Yamuna river. Which city?",
      options: ["Delhi", "Jaipur", "Lucknow", "Agra"], answer: 3,
      hint: "Home of a world wonder.",
      note: "Agra, home of the Taj Mahal. Sunrise is the best time to visit.", badge: "landmark"
    }),
    GP(1, "Monuments", {
      prompt: "A huge stone arch. Faces the Arabian Sea. Boats to Elephanta Caves leave nearby. Which city?",
      options: ["Chennai", "Mumbai", "Kolkata", "Kochi"], answer: 1,
      hint: "India’s financial capital.",
      note: "Mumbai: the Gateway of India.", badge: "waves"
    }),
    GP(1, "Monuments", {
      prompt: "A very tall brick minaret. Started over 800 years ago. In the capital. What is it?",
      options: ["Charminar", "India Gate", "Gol Gumbaz", "Qutub Minar"], answer: 3,
      hint: "Delhi.",
      note: "The Qutub Minar in Delhi, about 73 metres tall. Charminar is in Hyderabad.", badge: "landmark",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Nature ----------
    {
      type: "learn", door: 2,
      title: "Round 2: natural wonders.",
      points: [["Deserts, rivers and hills", "India has almost every landscape"], ["Weather clues", "Rain, snow or salt?"], ["People clues", "Houseboats, bridges, tea gardens"]],
      highlightLast: true,
      side: { label: "Theme", items: [["waves", "Water", ""], ["sparkles", "Hills", ""], ["map", "Deserts", ""]] }
    },
    GP(2, "Nature", {
      prompt: "A white salt desert. Glows under the full moon. A famous festival every winter. Where?",
      options: ["Rann of Kutch, Gujarat", "Thar Desert, Rajasthan", "Spiti Valley, Himachal", "Ladakh"], answer: 0,
      hint: "Gujarat.",
      note: "The Rann of Kutch. The Rann Utsav festival runs in the winter months.", badge: "sparkles"
    }),
    GP(2, "Nature", {
      prompt: "Houseboats. Calm backwaters. Coconut trees everywhere. Which place?",
      options: ["Goa", "Alappuzha, Kerala", "Puducherry", "Vizag"], answer: 1,
      hint: "God’s Own Country.",
      note: "Alappuzha (Alleppey) in Kerala, famous for its backwaters and houseboats.", badge: "waves"
    }),
    GP(2, "Nature", {
      prompt: "One of the wettest places on Earth. Bridges grown from living tree roots. In the Northeast. Which state?",
      options: ["Assam", "Meghalaya", "Sikkim", "Manipur"], answer: 1,
      hint: "Its name means “abode of clouds”.",
      note: "Meghalaya. The living root bridges are made by guiding rubber tree roots over many years.", badge: "cloud",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Temples and heritage ----------
    {
      type: "learn", door: 3,
      title: "Round 3: temples and heritage sites.",
      points: [["Empires", "Ruins tell you who ruled"], ["Shapes", "Some temples are built like chariots"], ["Gold and water", "Some sites shine above a pool"]],
      highlightLast: true,
      side: { label: "Theme", items: [["landmark", "Temples", ""], ["clock", "Empires", ""], ["star", "UNESCO sites", ""]] }
    },
    GP(3, "Temples and Heritage", {
      prompt: "A temple shaped like a giant chariot. Stone wheels on its walls. Built for the Sun god. Which state?",
      options: ["Odisha", "Tamil Nadu", "Gujarat", "Madhya Pradesh"], answer: 0,
      hint: "Our neighbour to the north-east.",
      note: "The Konark Sun Temple in Odisha. Its stone wheel is on the ₹10 note.", badge: "sparkles"
    }),
    GP(3, "Temples and Heritage", {
      prompt: "Boulder-filled landscape. Ruins of the Vijayanagara empire. A stone chariot. Where?",
      options: ["Hampi", "Mysuru", "Badami", "Madurai"], answer: 0,
      hint: "Karnataka.",
      note: "Hampi in Karnataka, a UNESCO World Heritage Site.", badge: "landmark"
    }),
    GP(3, "Temples and Heritage", {
      prompt: "Gold-covered. Surrounded by a sacred pool. A free community kitchen feeds thousands daily. Which city?",
      options: ["Amritsar", "Varanasi", "Ajmer", "Haridwar"], answer: 0,
      hint: "Punjab.",
      note: "Amritsar, home of the Golden Temple (Harmandir Sahib). Its langar serves everyone, free.", badge: "heart",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Give three clues about a place you have visited. The room guesses it.", note: "From hard to easy. 20 seconds.", points: 100 },

    // ---------- Round 4: Vizag and around ----------
    {
      type: "learn", door: 4,
      title: "Round 4: home ground. Vizag and around.",
      points: [["Hills and coffee", "A short trip from the city"], ["Caves and history", "Millions of years old, and over 2,000 years old"], ["You should win this", "Let’s see!"]],
      highlightLast: true,
      side: { label: "Theme", items: [["map", "Vizag district", ""], ["waves", "Coast", ""], ["sparkles", "Hills", ""]] }
    },
    GP(4, "Vizag and Around", {
      prompt: "Coffee plantations. A tribal museum. A scenic train ride through tunnels from Vizag. Where?",
      options: ["Ooty", "Coorg", "Araku Valley", "Munnar"], answer: 2,
      hint: "Home of a famous Andhra coffee.",
      note: "Araku Valley. Take the train one way for the tunnels and views.", badge: "route"
    }),
    GP(4, "Vizag and Around", {
      prompt: "Huge limestone caves. Stalactites and stalagmites. In the Ananthagiri hills. What are they?",
      options: ["Ajanta Caves", "Elephanta Caves", "Borra Caves", "Undavalli Caves"], answer: 2,
      hint: "On the way to Araku.",
      note: "Borra Caves, formed over millions of years.", badge: "search"
    }),
    GP(4, "Vizag and Around", {
      prompt: "A hilltop near Bheemunipatnam. Ancient stupas and monks’ cells. Over 2,000 years old. What is it?",
      options: ["Kailasagiri hill", "Simhachalam temple", "Yarada Beach cliffs", "Thotlakonda"], answer: 3,
      hint: "Buddhist history near the sea.",
      note: "Thotlakonda, an ancient Buddhist site with a view of the Bay of Bengal.", badge: "landmark",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: City nicknames ----------
    {
      type: "learn", door: 5,
      title: "Round 5: cities by their nicknames.",
      points: [["Colours", "Pink, blue, white"], ["Work", "Tech, textiles, steel"], ["Feelings", "Lakes, destiny, joy"]],
      highlightLast: true,
      side: { label: "Theme", items: [["map", "Cities", ""], ["palette", "Colours", ""], ["star", "Nicknames", ""]] }
    },
    GP(5, "City Nicknames", {
      prompt: "The Pink City. Hawa Mahal. Capital of Rajasthan.",
      options: ["Udaipur", "Jodhpur", "Jaipur", "Jaisalmer"], answer: 2,
      hint: "The capital.",
      note: "Jaipur. Udaipur is the City of Lakes and Jodhpur the Blue City.", badge: "palette"
    }),
    GP(5, "City Nicknames", {
      prompt: "The Silicon Valley of India. Thousands of tech companies. Capital of Karnataka.",
      options: ["Hyderabad", "Bengaluru", "Pune", "Chennai"], answer: 1,
      hint: "Garden City too.",
      note: "Bengaluru. Hyderabad is a big tech hub too, often called Cyberabad for its IT area.", badge: "code"
    }),
    GP(5, "City Nicknames", {
      prompt: "The City of Destiny. A steel plant and a natural harbour. On the Bay of Bengal.",
      options: ["Chennai", "Visakhapatnam", "Kakinada", "Puri"], answer: 1,
      hint: "You are probably sitting in it.",
      note: "Visakhapatnam, the City of Destiny. Home ground!", badge: "star",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: India's edges (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: India’s far edges. Double points!",
      points: [["South", "Where three seas meet"], ["North", "A high, cold lake on the border"], ["East", "Where the sun rises first"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["compass", "India’s edges", "North, south, east"], ["mic", "Then the final challenge", "Stump the room"]] }
    },
    GP(6, "India’s Edges", {
      double: true,
      prompt: "The southern tip of mainland India. Three seas meet. A rock memorial in the sea.",
      options: ["Rameswaram", "Kovalam", "Dhanushkodi", "Kanyakumari"], answer: 3,
      hint: "Tamil Nadu.",
      note: "Kanyakumari, where the Arabian Sea, the Bay of Bengal and the Indian Ocean meet.", badge: "compass"
    }),
    GP(6, "India’s Edges", {
      double: true,
      prompt: "A long blue lake high in the mountains. Part of it lies across the border. In Ladakh.",
      options: ["Pangong Lake", "Dal Lake", "Chilika Lake", "Loktak Lake"], answer: 0,
      hint: "Very high and very cold.",
      note: "Pangong Lake (Pangong Tso), over 4,000 metres high. Dal Lake is in Srinagar.", badge: "waves"
    }),
    GP(6, "India’s Edges", {
      double: true,
      prompt: "The easternmost state. The sun rises here first in India. Borders China, Bhutan and Myanmar.",
      options: ["Assam", "Nagaland state", "Arunachal Pradesh", "Mizoram"], answer: 2,
      hint: "Its name means “land of the dawn-lit mountains”.",
      note: "Arunachal Pradesh. The village of Dong sees India’s first sunrise.", badge: "sparkles",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best clues win +200", prompt: "Each team gives three clues for a place in India. The team whose place stumps the most people wins.", note: "Real places, fair clues. The host decides.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "Your India Bucket List", note: "Screenshot this. Tick off one place this year.", items: BUCKET },
    {
      type: "end",
      joinTitle: "Join the EduMoon Fun Zone",
      joinText: "Quizzes, party games and brain teasers every week. Come for the fun, stay for the people.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
