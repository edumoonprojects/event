// Three Truths and a Lie (EduMoon Fun Zone). For all years and any crowd.
// Four surprising statements on every screen. Three are true. Find the lie. Six themes: tech, India, space, animals, food and a final mix.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const LQ = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 30, board: false, eyebrow: `Round ${round} · ${name}`, prompt: "Three are true. Which one is the LIE?" }, extra);

// The take-home card: 8 of the most surprising truths from today.
const TRUTHS = [
  ["The first computer bug", "In 1947, engineers found a real moth stuck inside a computer."],
  ["Python’s name", "It comes from a comedy group, not the snake."],
  ["Chess", "It is believed to have started in India as chaturanga."],
  ["Venus", "One day on Venus is longer than one year on Venus."],
  ["Octopus", "It has three hearts."],
  ["Chilli", "It reached India only a few hundred years ago, with traders from Europe."],
  ["Babies", "They are born with more bones than adults. Some join together as they grow."],
  ["How to spot a lie", "Look for the claim that is too neat, too extreme or easy to check. Then check it."]
];

window.GAME = {
  id: "three-truths-one-lie",
  title: "Three Truths and a Lie",
  club: "Fun Zone",
  tagline: "Four surprising facts. Three are true. Can you find the lie?",
  art: window.STORY_ART,
  guide: {
    years: "All years · any crowd", time: "30 minutes", level: "Beginner",
    about: "A fast, loud game for any group. Each screen shows four surprising statements: three are true and one is a lie. Teams have 30 seconds to find the lie. Six themes: tech, India, space, animals, food and a final mix with Vizag, the human body and sports. Every reveal comes with the real story in one line.",
    outcomes: "Fun facts to share, and a habit of asking “Is that really true?” before believing or forwarding something.",
    tone: "Keep the energy high and the pace fast. Read the four statements aloud with drama. When a team picks a true fact as the lie, celebrate the surprise: that is the fun of the game.",
    extra: [["Make it a party", "Before each reveal, ask the room to shout which one they think is the lie. Then reveal."]]
  },
  words: {
    round: "Round", unlocked: "The lie", badgeLabel: "Caught",
    rulesEyebrow: "How Three Truths and a Lie works", rulesTitle: "Four facts. One lie. Catch it fast.",
    learnText: "The host introduces the theme.", crackTitle: "Catch the lie",
    crackText: "Tap the statement you think is the lie and lock it in.",
    rulesExtra: "Faster answers score more. Round 6: <b>double</b>!",
    nobody: "Nobody caught this lie. It fooled the whole room!", cracked: "caught the lie",
    next: "Next round →", finale: "Next →", winner: "are today’s lie detectors!", endLine: "No lie gets past you now."
  },
  offerEyebrow: "EduMoon Fun Zone · Lie detector",
  offerTitle: "Your lie detector level",
  offers: [
    { min: 0.7, icon: "eye", title: "Human Lie Detector", text: "Nothing fools you. Try Myth or Fact next." },
    { min: 0.45, icon: "search", title: "Sharp Spotter", text: "Strong! Share 3 facts from today with your family tonight." },
    { min: 0.2, icon: "lightbulb", title: "Curious Mind", text: "Good start. Truth is often stranger than the lie." },
    { min: 0, icon: "party-popper", title: "Easily Surprised", text: "Everyone starts here. That is what makes facts fun!" }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Fun Zone · Find the lie",
      title: "Every screen has four statements. Three are true, however strange they sound. One is a lie. Can your team catch it?",
      cards: [["eye", "6 themes, 18 screens"], ["timer", "30 seconds each, faster scores more"], ["trophy", "Your score decides your lie detector level"]]
    },
    { type: "rules" },

    // ---------- Round 1: Tech ----------
    {
      type: "learn", door: 1,
      title: "Round 1: Tech. Phones, computers and the internet.",
      points: [["Read all four", "The weird ones are often true"], ["Look for something easy to check", "Dates and places are where lies hide"], ["Decide fast", "Faster answers score more"]],
      highlightLast: true,
      side: { label: "Tip", items: [["search", "Too neat?", "Lies often sound simple"], ["lightbulb", "Too strange?", "Truth can be very strange"], ["timer", "30 seconds", "Trust your team"]] }
    },
    LQ(1, "Tech", {
      options: ["The first iPhone came out in 2010.", "Keyboards use a layout made for typewriters.", "The first computer “bug” was a real moth.", "The first computer mouse was made of wood."], answer: 0,
      hint: "One of these is a date.",
      note: "The lie: the first iPhone came out in 2007. The moth (1947), the typewriter layout and the wooden mouse are all true.", badge: "smartphone"
    }),
    LQ(1, "Tech", {
      options: ["Python is named after a comedy group.", "Google was first called BackRub.", "The first YouTube video was at a zoo.", "Email was invented after smartphones."], answer: 3,
      hint: "Which came first, email or the smartphone?",
      note: "The lie: email is decades older than smartphones. Python really is named after the comedy group Monty Python.", badge: "mail"
    }),
    LQ(1, "Tech", {
      options: ["One byte is made of 8 bits.", "HTML is a markup language.", "The “.in” web domain is Indonesia’s.", "Wi-Fi is a brand name, not a short form."], answer: 2,
      hint: "Think about which country uses .in.",
      note: "The lie: .in is India’s domain. Indonesia uses .id. Wi-Fi was a brand name chosen by an industry group.", badge: "globe",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: India ----------
    {
      type: "learn", door: 2,
      title: "Round 2: India. Our history, places and people.",
      points: [["You know more than you think", "School facts help here"], ["Watch the places", "Rivers and cities are common traps"], ["Discuss quickly", "Two minds beat one"]],
      highlightLast: true,
      side: { label: "Theme", items: [["map", "Places", "Rivers, cities, lakes"], ["landmark", "History", "Games, numbers, inventions"], ["users", "People", "Languages and culture"]] }
    },
    LQ(2, "India", {
      options: ["Chess is believed to have started in India.", "The national anthem takes about 52 seconds.", "The Taj Mahal is in Delhi.", "The Constitution lists 22 official languages."], answer: 2,
      hint: "Which city has the Taj?",
      note: "The lie: the Taj Mahal is in Agra, Uttar Pradesh. The 22 languages are in the Eighth Schedule of the Constitution.", badge: "landmark"
    }),
    LQ(2, "India", {
      options: ["Indian mathematicians shaped the idea of zero.", "The word “shampoo” comes from Hindi.", "Indian Railways is a huge employer.", "Mumbai is the capital of India."], answer: 3,
      hint: "One is a capital question.",
      note: "The lie: New Delhi is the capital. Mumbai is the capital of Maharashtra. Shampoo comes from the Hindi “champo”, to press or massage.", badge: "map"
    }),
    LQ(2, "India", {
      options: ["A meteor formed Lonar Lake in Maharashtra.", "The Ganga flows into the Arabian Sea.", "Chilika is a huge brackish water lagoon.", "The Sundarbans has a giant mangrove forest."], answer: 1,
      hint: "Which sea is on the east coast?",
      note: "The lie: the Ganga flows into the Bay of Bengal, the same sea as Vizag’s beaches.", badge: "waves",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Space ----------
    {
      type: "learn", door: 3,
      title: "Round 3: Space. Planets, the Moon and missions.",
      points: [["Space is strange", "Many true facts sound impossible"], ["ISRO counts too", "India’s missions are part of this round"], ["Think about physics", "No air means no sound and no wind"]],
      highlightLast: true,
      side: { label: "Theme", items: [["sparkles", "Planets", "Days, years and sizes"], ["rocket", "Missions", "Including ISRO"], ["eye", "What we can see", "And what we cannot"]] }
    },
    LQ(3, "Space", {
      options: ["A day on Venus is longer than its year.", "Mars looks red because of rust in its soil.", "The Moon makes its own light.", "Chandrayaan-3 landed near the Moon’s south pole."], answer: 2,
      hint: "Where does moonlight come from?",
      note: "The lie: the Moon reflects sunlight. Venus spins so slowly that its day is longer than its year.", badge: "sparkles"
    }),
    LQ(3, "Space", {
      options: ["Jupiter is the biggest planet in our system.", "Space is full of air, so sound travels.", "Moon footprints can last for ages, no wind.", "Sunlight takes about 8 minutes to reach us."], answer: 1,
      hint: "What does sound need to travel?",
      note: "The lie: space is almost empty, so sound cannot travel. Astronauts use radios to talk.", badge: "ear"
    }),
    LQ(3, "Space", {
      options: ["Mangalyaan reached Mars on its first try.", "Neptune takes about 165 years to orbit.", "The Great Wall is easy to see from the Moon.", "Saturn is less dense than water."], answer: 2,
      hint: "How far away is the Moon?",
      note: "The lie: from the Moon, no single human-made structure can be seen with bare eyes. India’s Mangalyaan did reach Mars on the first attempt in 2014.", badge: "rocket",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Tell the room one true fact that sounds like a lie. Can they guess if it is true?", note: "Something real and surprising. The room votes true or false.", points: 100 },

    // ---------- Round 4: Animals ----------
    {
      type: "learn", door: 4,
      title: "Round 4: Animals. Strange bodies and old myths.",
      points: [["Old sayings can be wrong", "Some “facts” we learned as kids are myths"], ["Bodies are surprising", "Hearts, stomachs and bones"], ["Names matter", "Insect or not? Bird or not?"]],
      highlightLast: true,
      side: { label: "Theme", items: [["eye", "Bodies", "Hearts and stomachs"], ["search", "Myths", "Things people often say"], ["globe", "Homes", "Where they really live"]] }
    },
    LQ(4, "Animals", {
      options: ["An octopus has three hearts.", "Elephants cannot jump.", "Bats are completely blind.", "A group of crows is called a murder."], answer: 2,
      hint: "This is a famous saying.",
      note: "The lie: bats can see. Many also use echoes to find their way in the dark.", badge: "eye"
    }),
    LQ(4, "Animals", {
      options: ["The peacock is India’s national bird.", "A cow’s stomach has four parts.", "Olive ridley turtles nest on Odisha’s beaches.", "Penguins live naturally in the Arctic."], answer: 3,
      hint: "North or south?",
      note: "The lie: wild penguins live in the southern half of the world, mostly around Antarctica. Polar bears live in the Arctic.", badge: "globe"
    }),
    LQ(4, "Animals", {
      options: ["Spiders are insects.", "The blue whale is the biggest animal known.", "Some frogs freeze in winter and survive.", "Honey can last for years without spoiling."], answer: 0,
      hint: "Count the legs.",
      note: "The lie: spiders have 8 legs and are arachnids. Insects have 6 legs.", badge: "search",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Food ----------
    {
      type: "learn", door: 5,
      title: "Round 5: Food. What we eat and where it came from.",
      points: [["Not all “Indian” food started here", "Some came from other continents"], ["Andhra counts", "Local crops and famous foods"], ["Science in the kitchen", "Fruit, nut or vegetable?"]],
      highlightLast: true,
      side: { label: "Theme", items: [["globe", "Origins", "Where foods came from"], ["map", "Andhra", "Local crops"], ["lightbulb", "Kitchen science", "Fruits, nuts and herbs"]] }
    },
    LQ(5, "Food", {
      options: ["Tomatoes came to India from the Americas.", "Chilli reached India with European traders.", "Tea grows naturally in the Thar Desert.", "Potatoes also came from South America."], answer: 2,
      hint: "Where do tea gardens need lots of rain?",
      note: "The lie: tea needs rain and hills, like Assam, Darjeeling and the Nilgiris. The Thar is a desert.", badge: "map"
    }),
    LQ(5, "Food", {
      options: ["Idli is steamed, not fried.", "Araku Valley coffee grows in Andhra Pradesh.", "Rice cannot grow in Andhra Pradesh.", "Cashew is a big crop near Palasa."], answer: 2,
      hint: "Andhra is often called a rice bowl.",
      note: "The lie: Andhra Pradesh is one of India’s biggest rice growers. Araku coffee and Palasa cashews are famous.", badge: "store"
    }),
    LQ(5, "Food", {
      options: ["Carrots have always been orange.", "A banana plant is a giant herb.", "Peanuts are legumes, not true nuts.", "Mango is India’s national fruit."], answer: 0,
      hint: "Colours change over centuries.",
      note: "The lie: early carrots were mostly purple or yellow. Orange carrots became common much later.", badge: "lightbulb",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Final mix (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: Vizag, your body and sports. Double points!",
      points: [["Home ground", "Vizag questions, you should win these"], ["Your own body", "Bones, heart and skin"], ["Sports", "Count the players"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["map", "Vizag, body, sports", "One each"], ["mic", "Then the final challenge", "Make your own lie"]] }
    },
    LQ(6, "Final Mix", {
      double: true,
      options: ["RK Beach has a submarine museum.", "Kailasagiri overlooks the city and the sea.", "Borra Caves are on the way to Araku.", "Vizag is on the Arabian Sea coast."], answer: 3,
      hint: "Which coast is Vizag on?",
      note: "The lie: Vizag is on the Bay of Bengal, on India’s east coast. The INS Kursura submarine museum is on RK Beach.", badge: "waves"
    }),
    LQ(6, "Final Mix", {
      double: true,
      options: ["Adults have 206 bones.", "Babies have fewer bones than adults.", "Your heart beats about 1 lakh times a day.", "Skin is the body’s largest organ."], answer: 1,
      hint: "Some bones join together as you grow.",
      note: "The lie: babies have more bones, around 270 or more. Many fuse together as they grow.", badge: "heart"
    }),
    LQ(6, "Final Mix", {
      double: true,
      options: ["A Test match can last up to 5 days.", "A football team has 15 players on field.", "The Olympic symbol has 5 rings.", "A chessboard has 64 squares."], answer: 1,
      hint: "Count a football team.",
      note: "The lie: a football team has 11 players on the field. 15 is a rugby union team.", badge: "trophy",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best set wins +200", prompt: "Each team says 2 truths and 1 lie about their team members. The room guesses the lie.", note: "The team that fools the most people wins.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "8 Truths That Sound Like Lies", note: "Screenshot this. Try them on your family tonight.", items: TRUTHS },
    {
      type: "end",
      joinTitle: "Join the EduMoon Fun Zone",
      joinText: "Quizzes, party games and brain teasers every week. Come for the fun, stay for the people.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
