// Vizag Quiz (EduMoon Fun Zone). For all years.
// How well do you know the City of Destiny? 6 rounds on landmarks, names, faith, nature, the port and the Navy.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const VQ = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 30, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const VN = (round, name, extra) => VQ(round, name, Object.assign({ kind: "number", time: 40 }, extra));

// The take-home card: 8 facts to impress any visitor.
const VFACTS = [
  ["City of Destiny", "Vizag’s nickname. It is also called the Jewel of the East Coast."],
  ["INS Kursura", "A real Navy submarine (1969 to 2001), now a museum on RK Beach since 2002."],
  ["Andhra University", "Founded in 1926. It turns 100 in 2026."],
  ["Three hills, three faiths", "A church on Ross Hill, a temple on Sringamani hillock, a dargah on Dargah Konda."],
  ["Borra Caves", "Explored in 1807. “Borra” means hole in Telugu. Shaped by the Gosthani river."],
  ["Visakhapatnam Port", "Opened in 1933. One of India’s 12 major ports, sheltered by Dolphin’s Nose."],
  ["Vizag Steel Plant", "India’s first shore-based integrated steel plant, run by RINL."],
  ["Eastern Naval Command", "The Indian Navy’s eastern headquarters is in Vizag."]
];

window.GAME = {
  id: "vizag-quiz",
  title: "Vizag Quiz",
  club: "Fun Zone",
  tagline: "You live here. But how well do you really know the City of Destiny?",
  art: window.STORY_ART,
  guide: {
    years: "All years (great for freshers and visitors)", time: "30 minutes", level: "Beginner",
    about: "A fast, friendly quiz about Visakhapatnam. In 6 rounds, teams answer questions on landmarks, the city’s names, its hills of faith, nature around the city, the port and steel plant, and a lightning final. Each round starts with a short fact screen. It ends with a “sell your city” speaking challenge and a take-home card of 8 Vizag facts.",
    outcomes: "8 facts about their own city they can share with any visitor, and pride in where they study.",
    tone: "This is a fun opener, not an exam. Cheer every correct answer and let locals tell their own stories after a reveal. If a student from outside Vizag gets one right, make a big deal of it.",
    extra: [["Facts checked", "Every answer was checked against official and encyclopedia sources in November 2026. If a student knows a newer detail (for example a renamed place), thank them and add it to the reveal."],
      ["Number questions", "Rounds 2, 4, 5 and 6 each have one year to type in. Only the exact year scores, so read the hint aloud if the room is stuck."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Got it",
    rulesEyebrow: "How the Vizag Quiz works", rulesTitle: "See the fact screen. Answer fast. Know your city.",
    learnText: "The host shows a few facts about the city.", crackTitle: "Answer",
    crackText: "Pick or type your answer on your phone and lock it in.",
    rulesExtra: "Faster answers score more. Speak (optional): <b>+100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Now everyone in the room knows it!", cracked: "got it right",
    next: "Next round →", finale: "Next →", winner: "know Vizag best!", endLine: "Now go show your city to a friend."
  },
  offerEyebrow: "EduMoon Fun Zone · Vizag results",
  offerTitle: "How Vizag are you?",
  offers: [
    { min: 0.7, icon: "crown", title: "City Guide", text: "You know Vizag like a local guide. Take a friend from outside on a tour." },
    { min: 0.45, icon: "map", title: "True Vizagite", text: "Strong! Visit one place from today’s quiz you haven’t seen yet." },
    { min: 0.2, icon: "compass", title: "Explorer", text: "Good start. Save the fact card and plan a weekend trip." },
    { min: 0, icon: "book-open", title: "New in Town", text: "Everyone starts here. Vizag has lots to show you." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Fun Zone · Vizag Quiz",
      title: "Beaches, hills, a submarine on the sand and a port older than independence. How well does your team know Vizag?",
      cards: [["map", "6 rounds about the City of Destiny"], ["timer", "Fast answers score more"], ["trophy", "Win the title of City Guide"]]
    },
    { type: "rules" },

    // ---------- Round 1: Landmarks ----------
    {
      type: "learn", door: 1,
      title: "Vizag’s Beach Road is a museum in the open air.",
      points: [["RK Beach", "Short for Ramakrishna Beach, after the Ramakrishna Mission nearby"], ["Real machines, not models", "A Navy submarine and a Navy aircraft both sit on Beach Road"], ["Kailasagiri", "A hilltop park with a ropeway and a giant statue"]],
      highlightLast: true,
      side: { label: "On Beach Road", items: [["waves", "Submarine Museum", "Walk inside a real Navy submarine"], ["compass", "Aircraft Museum", "A Navy patrol plane, across the road"], ["map", "Kailasagiri", "Take the ropeway for the best view"]] }
    },
    VQ(1, "Landmarks", {
      prompt: "Which real Navy submarine is now a museum on RK Beach?",
      options: ["INS Vikrant", "INS Arihant", "INS Kursura", "INS Chakra"], answer: 2,
      hint: "It starts with K.",
      note: "INS Kursura served the Navy from 1969 to 2001 and opened as a museum in 2002. You can walk inside it.", badge: "waves"
    }),
    VQ(1, "Landmarks", {
      prompt: "Kailasagiri hilltop park is famous for a giant statue of…",
      options: ["Lord Shiva and Parvati", "Lord Venkateswara", "Gautama Buddha", "Lord Hanuman"], answer: 0,
      hint: "Think of the name: Kailasa.",
      note: "Mount Kailasa is Shiva’s home in stories, so the hill has a huge Shiva and Parvati statue looking over the sea.", badge: "map"
    }),
    VQ(1, "Landmarks", {
      prompt: "Which kind of aircraft is on display at the naval aircraft museum on Beach Road?",
      options: ["A Tejas fighter jet", "A Boeing 737", "A MiG-21", "A TU-142 Navy patrol aircraft"], answer: 3,
      hint: "It flew long patrols over the sea for the Navy.",
      note: "The TU-142 was a long-range Navy patrol plane. After it retired, it came to Vizag to become a museum, right across from the submarine.", badge: "compass",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Names and history ----------
    {
      type: "learn", door: 2,
      title: "One city, many names.",
      points: [["Visakhapatnam", "The official name"], ["Vizag", "The short name everyone uses"], ["An old British-era name", "Still used today for one area and for the railway"]],
      highlightLast: true,
      side: { label: "Say it like a local", items: [["map", "Visakhapatnam", "On official papers and signboards"], ["message-circle", "Vizag", "What everyone says"], ["route", "Waltair", "The old name, still on the railway"]] }
    },
    VQ(2, "Names and History", {
      prompt: "What is Vizag’s famous nickname?",
      options: ["The Pink City", "The City of Destiny", "The City of Lakes", "The Silicon City"], answer: 1,
      hint: "It’s about the future.",
      note: "The City of Destiny. It’s also called the Jewel of the East Coast.", badge: "star"
    }),
    VQ(2, "Names and History", {
      prompt: "Which British-era name is still used for part of Vizag and its railway?",
      options: ["Wellington", "Madras", "Victoria", "Waltair"], answer: 3,
      hint: "Many older people still say it. It starts with W.",
      note: "Waltair. The railway division and an area of the city still carry the name.", badge: "route"
    }),
    VN(2, "Names and History", {
      prompt: "In which year was Andhra University founded? Type the year.",
      answer: 1926,
      hint: "It celebrates 100 years in 2026.",
      note: "1926. Andhra University turns 100 this year, and its alumni include a Vice President of India and an RBI Governor.", badge: "graduation-cap",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Faith and food ----------
    {
      type: "learn", door: 3,
      title: "Vizag lives together, on its hills and at its tables.",
      points: [["Simhachalam", "A hilltop temple north of the city, visited by lakhs during Chandanotsavam"], ["Three neighbouring hills", "A church, a temple and a dargah, side by side"], ["Araku’s kitchen", "A famous dish is cooked in an unusual way"]],
      highlightLast: true,
      side: { label: "Places to visit", items: [["sparkles", "Simhachalam", "About 16 km north of the city"], ["heart", "The three hills", "Ross Hill, Sringamani, Dargah Konda"], ["flame", "Araku food", "Try it when you visit the valley"]] }
    },
    VQ(3, "Faith and Food", {
      prompt: "Which deity is worshipped at the Simhachalam temple?",
      options: ["Lord Shiva", "Lord Venkateswara", "Lord Varaha Lakshmi Narasimha", "Goddess Durga"], answer: 2,
      hint: "Simha means lion.",
      note: "Lord Varaha Lakshmi Narasimha. During Chandanotsavam, the sandalwood covering is removed and devotees see the deity’s original form.", badge: "sparkles"
    }),
    VQ(3, "Faith and Food", {
      prompt: "Three neighbouring hills in Vizag each have a shrine of a different faith. What is on top of Ross Hill?",
      options: ["A church", "A temple", "A dargah", "A gurudwara"], answer: 0,
      hint: "Ross is a British name.",
      note: "A church on Ross Hill, a Venkateswara temple on Sringamani hillock and the dargah of Baba Ishaq Madina on Dargah Konda. Three faiths, side by side.", badge: "heart"
    }),
    VQ(3, "Faith and Food", {
      prompt: "Bongu chicken, a famous dish from Araku, is cooked inside…",
      options: ["A clay pot", "A banana leaf", "A coconut shell", "A bamboo stick"], answer: 3,
      hint: "Bongu is the local word for it.",
      note: "Marinated chicken is packed into bamboo and roasted over fire. The bamboo gives it a smoky flavour.", badge: "flame",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Sell your favourite Vizag spot in 30 seconds.", note: "Where is it, what do you do there, and when is the best time to go?", points: 100 },

    // ---------- Round 4: Nature ----------
    {
      type: "learn", door: 4,
      title: "An hour from the beach, you’re in the hills.",
      points: [["Araku Valley", "A hill station in the Eastern Ghats, famous for coffee"], ["Borra Caves", "Giant limestone caves in the Ananthagiri hills"], ["Dolphin’s Nose", "A rocky hill shaped like a dolphin’s nose, with a lighthouse on top"]],
      highlightLast: true,
      side: { label: "A day trip", items: [["route", "Araku Valley", "Up in the Eastern Ghats"], ["search", "Borra Caves", "On the way to Araku"], ["lightbulb", "Dolphin’s Nose", "Right by the port, in the city"]] }
    },
    VQ(4, "Nature", {
      prompt: "What does “Borra” mean in Telugu?",
      options: ["Big", "Rock", "Hole", "Light"], answer: 2,
      hint: "Think about what a cave is.",
      note: "Borra means hole. The caves go down about 80 metres below the ground.", badge: "search"
    }),
    VQ(4, "Nature", {
      prompt: "Which river shaped the Borra Caves over thousands of years?",
      options: ["The Gosthani", "The Godavari", "The Krishna", "The Sarada"], answer: 0,
      hint: "It starts in the same hills.",
      note: "The Gosthani river flows from the Ananthagiri hills and slowly carved the limestone into caves.", badge: "waves"
    }),
    VN(4, "Nature", {
      prompt: "In which year did British geologist William King George explore the Borra Caves? Type the year.",
      answer: 1807,
      hint: "More than 200 years ago, in the early 1800s.",
      note: "1807. Local tribal people knew the caves long before that, of course.", badge: "compass",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Port, steel and Navy ----------
    {
      type: "learn", door: 5,
      title: "Vizag works hard: ships, steel and the Navy.",
      points: [["The port", "One of India’s 12 major ports, older than independence"], ["The steel plant", "Built right next to the sea, a first for India"], ["The Navy", "Vizag is home to one of the Navy’s main commands"]],
      highlightLast: true,
      side: { label: "Vizag at work", items: [["map", "The port", "Ships from around the world"], ["landmark", "The steel plant", "Right next to the sea"], ["shield", "The Navy", "Ships, submarines and fleet reviews"]] }
    },
    VQ(5, "Port, Steel and Navy", {
      prompt: "Which Indian Navy command has its headquarters in Vizag?",
      options: ["Western Naval Command", "Eastern Naval Command", "Southern Naval Command", "Northern Naval Command"], answer: 1,
      hint: "Look at where Vizag is on the map.",
      note: "The Eastern Naval Command. Vizag also hosted the International Fleet Review in 2016.", badge: "shield"
    }),
    VQ(5, "Port, Steel and Navy", {
      prompt: "Which company runs the Vizag Steel Plant?",
      options: ["Tata Steel", "SAIL", "JSW Steel", "RINL (Rashtriya Ispat Nigam Limited)"], answer: 3,
      hint: "It’s a government company formed in 1982.",
      note: "RINL. The plant is India’s first shore-based integrated steel plant.", badge: "landmark"
    }),
    VN(5, "Port, Steel and Navy", {
      prompt: "In which year did Visakhapatnam Port open? Type the year.",
      answer: 1933,
      hint: "14 years before independence.",
      note: "1933. The ship S.S. Jaladurga sailed in on 7 October 1933, and the port was inaugurated that December.", badge: "map",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Lightning round (double) ----------
    {
      type: "learn", door: 6,
      title: "Lightning round. Double points.",
      points: [["3 quick questions", "Mixed from everything today"], ["Double points", "Anyone can still win"], ["Trust your gut", "Fast answers score more"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Every answer counts twice"], ["timer", "30 seconds each", "Fast answers score more"], ["trophy", "Then the final challenge", "Plan a day in Vizag for a visitor"]] }
    },
    VQ(6, "Lightning Round", {
      double: true,
      prompt: "Which hill shelters Vizag’s port from cyclones?",
      options: ["Kailasagiri", "Simhachalam", "Dolphin’s Nose", "Ross Hill"], answer: 2,
      hint: "It has a lighthouse.",
      note: "Dolphin’s Nose. Its lighthouse guides ships into the harbour.", badge: "lightbulb"
    }),
    VQ(6, "Lightning Round", {
      double: true,
      prompt: "The Araku Valley is in which district today?",
      options: ["Alluri Sitharama Raju district", "Srikakulam district", "Vizianagaram district", "East Godavari district"], answer: 0,
      hint: "It is named after a freedom fighter.",
      note: "Alluri Sitharama Raju district, formed in 2022 and named after the freedom fighter who fought in these hills.", badge: "route"
    }),
    VN(6, "Lightning Round", {
      double: true,
      prompt: "INS Kursura joined the Navy in 1969. In which year did it retire? Type the year.",
      answer: 2001,
      hint: "It opened as a museum the very next year, in 2002.",
      note: "2001. After more than 30 years at sea, it came ashore on RK Beach.", badge: "waves",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, results, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "A friend from Delhi visits for one day. Plan it in 60 seconds.", note: "3 places, 1 food and the best time to see the sea. The room votes for the best day.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "8 Vizag Facts", note: "Screenshot this. Share one fact the next time a visitor comes to Vizag.", items: VFACTS },
    {
      type: "end",
      joinTitle: "Join the EduMoon community",
      joinText: "Quizzes, games and events for students across Vizag every week.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
