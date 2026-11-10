// Brand Detective (EduMoon Fun Zone). For all years.
// Text clues only (no logos): where it was founded, what it began as, who started it. Teams name the brand.
// All facts are well-known company history, checked in 2026. Brand names are used only to describe real companies.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const BD = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 30, board: false, eyebrow: `Round ${round} · ${name}` }, extra);

const LESSONS = [
  ["Start small", "Books, playing cards, a garage. Most giants began tiny."],
  ["Change is normal", "A vegetable oil company became an IT giant."],
  ["Solve a daily need", "Biscuits, milk, rides, groceries."],
  ["Stand for something", "Trust, price, quality or fun. Pick one."],
  ["Names can be simple", "Short, easy to say, easy to remember."],
  ["Teams matter", "Many brands were started by 2 to 7 friends."],
  ["Local can go global", "Indian brands now sell around the world."],
  ["Your brand is your promise", "Keep it every single time."]
];

window.GAME = {
  id: "brand-detective",
  title: "Brand Detective",
  club: "Fun Zone",
  tagline: "No logos. Just clues. Can you name the brand?",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "30 minutes", level: "Beginner",
    about: "A clue-based quiz about brands students use every day. Each question gives text clues (where it was founded, what it started as, who began it) and teams pick the brand from four options. 6 rounds: Indian classics, global tech, food and drink, humble beginnings, big changes and a final mix. Every reveal comes with a quick startup lesson.",
    outcomes: "18 brand stories, the idea that big companies start small and change, and 8 brand lessons students can use for their own clubs or startups.",
    tone: "Read clues slowly and dramatically, like a detective. If a team gets it before time runs out, celebrate. The lessons matter more than the answers; spend 10 seconds on each note.",
    extra: [["No logos", "The game uses text clues only, no logos or brand images, so it stays clean to share and print."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Solved",
    rulesEyebrow: "How Brand Detective works", rulesTitle: "Read the clues. Name the brand.",
    learnText: "The host introduces the round.", crackTitle: "Solve",
    crackText: "Pick the brand on your phone and lock it in.",
    rulesExtra: "Faster answers score more. Speak (optional): <b>+100</b>. Round 6: <b>double</b>!",
    nobody: "Case unsolved! That one is tricky.", cracked: "solved the case",
    next: "Next round →", finale: "Next →", winner: "are today’s top brand detectives!", endLine: "Case closed!"
  },
  offerEyebrow: "EduMoon Fun Zone · Brand Detective results",
  offerTitle: "Your detective rank",
  offers: [
    { min: 0.7, icon: "crown", title: "Chief Detective", text: "You know your brands inside out. Try the Entrepreneurship games next." },
    { min: 0.45, icon: "search", title: "Sharp Detective", text: "Strong! You read clues well." },
    { min: 0.2, icon: "eye", title: "Junior Detective", text: "Good fun! Look up one brand story tonight." },
    { min: 0, icon: "sparkles", title: "Trainee", text: "Today the clues won. Now you know 18 brand stories." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Fun Zone · Brand Detective",
      title: "No logos. No names. Only clues. 18 brands you use every week are hiding. Can your team find them?",
      cards: [["search", "Text clues about real brands"], ["timer", "30 seconds per case"], ["lightbulb", "A startup lesson in every answer"]]
    },
    { type: "rules" },

    // ---------- Round 1: Indian classics ----------
    {
      type: "learn", door: 1,
      title: "Round 1: Indian classics. Brands your grandparents knew too.",
      points: [["Some are 100 years old", "And still everywhere"], ["Look at the place", "City and state are big clues"], ["And the year", "Older than India’s independence?"]],
      highlightLast: true,
      side: { label: "This round", items: [["store", "Daily use", "Food and home"], ["landmark", "Big groups", "Many companies"], ["clock", "Old names", "Still strong"]] }
    },
    BD(1, "Indian Classics", {
      prompt: "Founded in 1868 by Jamsetji. Today it makes salt, cars, steel and software, and owns an airline.",
      options: ["Reliance", "Tata Group", "Birla Group", "Mahindra"], answer: 1,
      hint: "Jamsetji’s surname is the brand.",
      note: "Tata Group, founded by Jamsetji Tata. Lesson: a trusted name can grow into many businesses.", badge: "landmark"
    }),
    BD(1, "Indian Classics", {
      prompt: "A dairy cooperative from Anand, Gujarat, owned by milk farmers. Famous for butter and funny topical ads.",
      options: ["Mother Dairy", "Heritage", "Amul", "Nandini"], answer: 2,
      hint: "Its mascot is a little girl in a polka-dot dress.",
      note: "Amul. Lesson: millions of small farmers together built one giant brand.", badge: "users"
    }),
    BD(1, "Indian Classics", {
      prompt: "Started by four friends in 1942 in a Mumbai garage. Now one of India’s biggest paint companies.",
      options: ["Berger", "Nerolac", "Dulux", "Asian Paints"], answer: 3,
      hint: "Its name mentions a continent.",
      note: "Asian Paints. Lesson: a garage start and a team of friends, a common story worldwide.", badge: "palette",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Global tech ----------
    {
      type: "learn", door: 2,
      title: "Round 2: global tech giants.",
      points: [["Students and dropouts", "Started many of them"], ["Dorms and garages", "Classic first offices"], ["One product first", "Then everything else"]],
      highlightLast: true,
      side: { label: "This round", items: [["smartphone", "Phones", ""], ["search", "Search", ""], ["users", "Social", ""]] }
    },
    BD(2, "Global Tech", {
      prompt: "Started in 1976 by two friends named Steve, in California. Its first product was a computer for hobbyists.",
      options: ["Microsoft", "Apple", "IBM", "Dell"], answer: 1,
      hint: "Its logo is a fruit.",
      note: "Apple, started by Steve Jobs and Steve Wozniak. Lesson: the first product was simple, for a small group of fans.", badge: "smartphone"
    }),
    BD(2, "Global Tech", {
      prompt: "Started in 1998 by two Stanford PhD students. Began as a way to rank web pages better.",
      options: ["Yahoo", "Bing", "Google", "Ask"], answer: 2,
      hint: "Its name comes from a very big number.",
      note: "Google, by Larry Page and Sergey Brin. Lesson: they solved one problem, search, better than anyone.", badge: "search"
    }),
    BD(2, "Global Tech", {
      prompt: "Started in 2004 in a Harvard dorm room as a site for students to find each other.",
      options: ["Facebook", "Twitter", "LinkedIn", "Snapchat"], answer: 0,
      hint: "Its parent company is now called Meta.",
      note: "Facebook, by Mark Zuckerberg and friends. Lesson: it started with one college before going everywhere.", badge: "users",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Food and drink ----------
    {
      type: "learn", door: 3,
      title: "Round 3: food and drink.",
      points: [["Daily habits", "Make the strongest brands"], ["Price matters", "Some win by being affordable for everyone"], ["Places matter", "Some win by being the place to meet"]],
      highlightLast: true,
      side: { label: "This round", items: [["star", "Snacks", ""], ["store", "Cafés", ""], ["globe", "Global chains", ""]] }
    },
    BD(3, "Food and Drink", {
      prompt: "A Mumbai company founded in 1929. Its glucose biscuit has been one of India’s most affordable snacks for decades.",
      options: ["Britannia", "Sunfeast", "Parle", "Unibic"], answer: 2,
      hint: "Its famous biscuit has a letter in its name.",
      note: "Parle, maker of Parle-G. Lesson: affordable, everywhere and the same every time builds huge trust.", badge: "star"
    }),
    BD(3, "Food and Drink", {
      prompt: "An Indian café chain started in 1996 by V. G. Siddhartha, a coffee planter from Karnataka.",
      options: ["Barista", "Café Coffee Day", "Costa Coffee", "Chaayos"], answer: 1,
      hint: "Its name has the word “Day” in it.",
      note: "Café Coffee Day. Lesson: it sold a place to hang out, not just coffee.", badge: "store"
    }),
    BD(3, "Food and Drink", {
      prompt: "A coffee chain from Seattle, USA. It entered India in 2012 in a partnership with an Indian group.",
      options: ["Starbucks", "Dunkin’", "Tim Hortons", "Costa Coffee"], answer: 0,
      hint: "Its Indian partner is the Round 1 answer from 1868.",
      note: "Starbucks, with Tata. Lesson: global brands often partner with local ones to enter India.", badge: "handshake",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Give the room 2 clues about a brand you love. Can they guess it?", note: "No saying the name! 20 seconds.", points: 100 },

    // ---------- Round 4: Humble beginnings ----------
    {
      type: "learn", door: 4,
      title: "Round 4: humble beginnings.",
      points: [["Borrowed money", "Tiny amounts, big results"], ["One product", "Books, playing cards"], ["Garages and homes", "Not fancy offices"]],
      highlightLast: true,
      side: { label: "This round", items: [["indian-rupee", "Small money", ""], ["book-open", "Books", ""], ["star", "Cards", ""]] }
    },
    BD(4, "Humble Beginnings", {
      prompt: "Started in 1981 in Pune by seven engineers, using ₹10,000 borrowed from one founder’s wife.",
      options: ["Wipro", "TCS", "HCL", "Infosys"], answer: 3,
      hint: "Sudha Murty lent the money.",
      note: "Infosys, founded by N. R. Narayana Murthy and six others. Lesson: you don’t need big money to begin.", badge: "indian-rupee"
    }),
    BD(4, "Humble Beginnings", {
      prompt: "Started in 1994 in a garage in the USA. Its first product: books sold online.",
      options: ["eBay", "Flipkart", "Amazon", "Walmart"], answer: 2,
      hint: "Named after a huge river.",
      note: "Amazon, by Jeff Bezos. Lesson: start with one product, then grow into everything.", badge: "book-open"
    }),
    BD(4, "Humble Beginnings", {
      prompt: "A Japanese company that started in 1889 making playing cards. Today it’s famous for video games.",
      options: ["Sony", "Nintendo", "Sega", "Panasonic"], answer: 1,
      hint: "Its consoles have a famous plumber.",
      note: "Nintendo. Lesson: you can stay in the “fun” business while completely changing the product.", badge: "star",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Big changes ----------
    {
      type: "learn", door: 5,
      title: "Round 5: brands that changed completely.",
      points: [["Pivots", "From oil to software, from trading to phones"], ["They followed demand", "What people needed next"], ["The name stayed", "The business changed"]],
      highlightLast: true,
      side: { label: "This round", items: [["route", "Pivots", ""], ["globe", "Far from home", ""], ["trending-up", "Growth", ""]] }
    },
    BD(5, "Big Changes", {
      prompt: "Began in 1945 in Maharashtra as a vegetable oil company. Today it’s a big IT services company.",
      options: ["Infosys", "Wipro", "Tech Mahindra", "Zoho"], answer: 1,
      hint: "Its old name was Western India Vegetable Products.",
      note: "Wipro. Lesson: one of India’s most famous pivots, from cooking oil to computers.", badge: "route"
    }),
    BD(5, "Big Changes", {
      prompt: "A Korean company that began in 1938 as a small trading business. Now known for phones and TVs.",
      options: ["LG", "Hyundai", "Samsung", "Kia"], answer: 2,
      hint: "Its name means “three stars”.",
      note: "Samsung. Lesson: start in one business, then move where the future is.", badge: "smartphone"
    }),
    BD(5, "Big Changes", {
      prompt: "A Swedish flat-pack furniture brand that opened its first Indian store in Hyderabad in 2018.",
      options: ["IKEA", "Pepperfry", "Urban Ladder", "Home Centre"], answer: 0,
      hint: "You build its furniture yourself.",
      note: "IKEA. Lesson: it chose one Indian city first and learned before expanding.", badge: "store",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Final mix (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: mixed cases. Double points!",
      points: [["Anything goes", "Indian or global"], ["Read every clue", "The last one often gives it away"], ["Still anyone’s game", "Double points"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Anyone can still win"], ["search", "3 last cases", ""], ["award", "Then your rank", "How sharp is your team?"]] }
    },
    BD(6, "Final Mix", {
      double: true,
      prompt: "A German sportswear company founded by Adolf Dassler. Famous for three stripes.",
      options: ["Puma", "Nike", "Reebok", "Adidas"], answer: 3,
      hint: "Its name comes from the founder’s nickname plus surname.",
      note: "Adidas, from “Adi” Dassler. Lesson: a simple, consistent mark becomes instantly recognisable.", badge: "trophy"
    }),
    BD(6, "Final Mix", {
      double: true,
      prompt: "A Pune-based Indian two-wheeler maker. Its famous bike models include the Pulsar.",
      options: ["Bajaj Auto", "Hero", "TVS", "Royal Enfield"], answer: 0,
      hint: "Also known for scooters in the old days.",
      note: "Bajaj Auto. Lesson: building for India’s roads and budgets created a global exporter.", badge: "route"
    }),
    BD(6, "Final Mix", {
      double: true,
      prompt: "An Indian bike-taxi app started in Bengaluru in 2015.",
      options: ["Ola", "Uber", "Rapido", "Namma Yatri"], answer: 2,
      hint: "Its name sounds like speed.",
      note: "Rapido. Lesson: it found a cheaper, faster option for short trips in traffic.", badge: "zap",
      board: true, boardLabel: "after Round 6"
    }),

    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "In 30 seconds: give 3 clues for a brand, from hardest to easiest. The room guesses.", note: "The host picks the best mystery.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "8 Lessons From Famous Brands", note: "Screenshot this. Use one for your club or startup.", items: LESSONS },
    {
      type: "end",
      joinTitle: "Join the EduMoon community",
      joinText: "Fun games, quizzes and challenges every week. Learn something new while you play.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
