// Mega Quiz Finale (EduMoon Fun Zone). Advanced: the big closing quiz for any event.
// Six tough rounds: science, history, geography, tech and space, Andhra and Vizag, and a double-points final. Mixed choice and typed-number questions.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const MQ = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 30, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const MQN = (round, name, extra) => MQ(round, name, Object.assign({ kind: "number", time: 40 }, extra));

// The take-home card: 10 facts worth keeping.
const FACTS = [
  ["W", "The chemical symbol for tungsten."],
  ["O negative", "Universal donor for red blood cells."],
  ["1950", "India’s Constitution came into force on 26 January."],
  ["Nalanda", "An ancient centre of learning in Bihar."],
  ["Pacific", "The largest ocean on Earth."],
  ["Aryabhata", "India’s first satellite, launched in 1975."],
  ["1953", "Andhra State became the first state formed on linguistic lines."],
  ["RINL", "The company that runs the Visakhapatnam Steel Plant."],
  ["Rabindranath Tagore", "The first Indian Nobel laureate, in 1913."],
  ["Keep asking", "Every quiz answer is a story. Look one up tonight."]
];

window.GAME = {
  id: "mega-quiz-finale",
  title: "Mega Quiz Finale",
  club: "Fun Zone",
  tagline: "The big one. Six tough rounds. One champion team.",
  art: window.STORY_ART,
  guide: {
    years: "All years · any crowd", time: "35 minutes", level: "Advanced",
    about: "The closing quiz for any EduMoon event. Six tough rounds: science, history, geography, tech and space, Andhra and Vizag, and a double-points final with a mix of everything. Short time limits and speed points keep it tense. Some questions need a typed number.",
    outcomes: "A strong, fun finish to any event, and a set of general knowledge facts that also help in aptitude tests and interviews.",
    tone: "This is the grand finale, so bring big energy: dramatic reveals, a live leaderboard and loud cheering. If scores are close before Round 6, remind everyone that double points can change everything.",
    extra: [["Prize", "If budget allows, keep a small prize for the winning team. A Mega Quiz champion photo for EduMoon’s Instagram also works well."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Scored",
    rulesEyebrow: "How Mega Quiz Finale works", rulesTitle: "Six tough rounds. Fast answers. One champion.",
    learnText: "The host announces the next round.", crackTitle: "Answer",
    crackText: "Pick or type your answer, fast.",
    rulesExtra: "Short timers. Faster scores more. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. That was a tough one!", cracked: "nailed it",
    next: "Next round →", finale: "Next →", winner: "are the Mega Quiz champions!", endLine: "What a finale!"
  },
  offerEyebrow: "EduMoon Fun Zone · Quiz rank",
  offerTitle: "Your quiz rank",
  offers: [
    { min: 0.7, icon: "trophy", title: "Quiz Champion", text: "You know a lot about a lot. Join the EduMoon quiz team." },
    { min: 0.45, icon: "star", title: "Quiz Contender", text: "Strong! Read one news article a day to go further." },
    { min: 0.2, icon: "lightbulb", title: "Quiz Explorer", text: "Good start. Look up three answers from today." },
    { min: 0, icon: "party-popper", title: "Quiz Rookie", text: "Everyone starts here. That was a tough quiz!" }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Fun Zone · Grand finale",
      title: "This is the big one. Six tough rounds, short timers and double points at the end. Which team will be the Mega Quiz champion?",
      cards: [["trophy", "Science, history, geography, tech, Andhra"], ["timer", "Short timers, speed points"], ["star", "Your score decides your quiz rank"]]
    },
    { type: "rules" },

    // ---------- Round 1: Science ----------
    {
      type: "learn", door: 1,
      title: "Round 1: Science.",
      points: [["Chemistry", "Symbols that do not match English names"], ["Biology", "Blood and the body"], ["Physics", "Light and speed"]],
      highlightLast: true,
      side: { label: "Round 1", items: [["sparkles", "3 questions", ""], ["timer", "30 to 40 seconds", ""], ["zap", "Speed counts", ""]] }
    },
    MQ(1, "Science", {
      prompt: "Which element has the chemical symbol W?",
      options: ["Tin", "Titanium", "Tungsten", "Zinc"], answer: 2,
      hint: "Its old name was wolfram.",
      note: "Tungsten. The symbol comes from its other name, wolfram. Tin is Sn, titanium Ti, zinc Zn.", badge: "sparkles"
    }),
    MQN(1, "Science", {
      prompt: "Light travels at about how many lakh km per second?",
      answer: 3,
      hint: "About 3,00,000 km per second.",
      note: "About 3 lakh km per second, fast enough to circle the Earth over 7 times in one second.", badge: "zap"
    }),
    MQ(1, "Science", {
      prompt: "Which blood group is known as the universal donor for red blood cells?",
      options: ["AB positive", "O negative", "A positive", "B negative"], answer: 1,
      hint: "No A, no B, no Rh markers.",
      note: "O negative red cells can usually be given to people of any blood group in emergencies.", badge: "heart",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: History ----------
    {
      type: "learn", door: 2,
      title: "Round 2: History.",
      points: [["Modern India", "The Constitution and the freedom struggle"], ["Ancient India", "Centres of learning"], ["Dates", "Some answers are typed numbers"]],
      highlightLast: true,
      side: { label: "Round 2", items: [["landmark", "3 questions", ""], ["timer", "30 to 40 seconds", ""], ["zap", "Speed counts", ""]] }
    },
    MQN(2, "History", {
      prompt: "In which year did the Constitution of India come into force?",
      answer: 1950,
      hint: "Republic Day.",
      note: "26 January 1950. That is why 26 January is Republic Day.", badge: "landmark"
    }),
    MQ(2, "History", {
      prompt: "Which ancient centre of learning in present-day Bihar drew students from across Asia?",
      options: ["Hampi", "Konark", "Nalanda", "Sanchi"], answer: 2,
      hint: "Its name is now used for a modern university too.",
      note: "Nalanda, one of the most famous centres of learning of the ancient world.", badge: "book-open"
    }),
    MQ(2, "History", {
      prompt: "Gandhi’s Dandi March in 1930 was a protest against a tax on what?",
      options: ["Cotton", "Tea", "Land", "Salt"], answer: 3,
      hint: "Something every kitchen uses.",
      note: "Salt. Marchers walked to Dandi on the Gujarat coast to make salt from seawater.", badge: "route",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Geography ----------
    {
      type: "learn", door: 3,
      title: "Round 3: Geography.",
      points: [["The world", "Oceans and continents"], ["India", "States and rivers"], ["Numbers", "Count carefully"]],
      highlightLast: true,
      side: { label: "Round 3", items: [["globe", "3 questions", ""], ["timer", "30 to 40 seconds", ""], ["zap", "Speed counts", ""]] }
    },
    MQ(3, "Geography", {
      prompt: "Which is the largest ocean on Earth?",
      options: ["Pacific", "Atlantic", "Indian", "Arctic"], answer: 0,
      hint: "It is bigger than all the land on Earth put together.",
      note: "The Pacific Ocean covers more area than all the continents combined.", badge: "waves"
    }),
    MQN(3, "Geography", {
      prompt: "How many states does India have (not counting union territories)?",
      answer: 28,
      hint: "Plus 8 union territories.",
      note: "28 states and 8 union territories.", badge: "map"
    }),
    MQ(3, "Geography", {
      prompt: "Which Indian river is often called the Dakshin Ganga, the Ganga of the south?",
      options: ["Narmada", "Tapti", "Mahanadi", "Godavari"], answer: 3,
      hint: "It flows through Andhra Pradesh to the Bay of Bengal.",
      note: "The Godavari, the longest river in peninsular India.", badge: "waves",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Ask the room one tough quiz question of your own. If nobody gets it in 10 seconds, your team wins the points.", note: "Must be a real fact, with a clear answer.", points: 100 },

    // ---------- Round 4: Tech and space ----------
    {
      type: "learn", door: 4,
      title: "Round 4: Tech and space.",
      points: [["ISRO", "India’s space story"], ["Computers", "Binary and the web"], ["Inventors", "Who built what"]],
      highlightLast: true,
      side: { label: "Round 4", items: [["rocket", "3 questions", ""], ["timer", "30 to 40 seconds", ""], ["zap", "Speed counts", ""]] }
    },
    MQ(4, "Tech and Space", {
      prompt: "What was the name of India’s first satellite, launched in 1975?",
      options: ["Bhaskara", "Aryabhata", "Rohini", "Chandrayaan"], answer: 1,
      hint: "Named after an ancient mathematician.",
      note: "Aryabhata, named after the 5th-century Indian mathematician and astronomer.", badge: "rocket"
    }),
    MQN(4, "Tech and Space", {
      prompt: "What is the binary number 1010 in decimal?",
      answer: 10,
      hint: "8 + 0 + 2 + 0.",
      note: "1×8 + 0×4 + 1×2 + 0×1 = 10.", badge: "code"
    }),
    MQ(4, "Tech and Space", {
      prompt: "Who is credited with inventing the World Wide Web?",
      options: ["Tim Berners-Lee", "Bill Gates", "Steve Jobs", "Alan Turing"], answer: 0,
      hint: "He worked at CERN.",
      note: "Tim Berners-Lee proposed the World Wide Web in 1989 while working at CERN.", badge: "globe",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Andhra and Vizag ----------
    {
      type: "learn", door: 5,
      title: "Round 5: Andhra and Vizag. Home ground!",
      points: [["History", "How the state was formed"], ["People", "Leaders who shaped it"], ["Vizag", "Industry and landmarks"]],
      highlightLast: true,
      side: { label: "Round 5", items: [["map", "3 questions", ""], ["timer", "30 to 40 seconds", ""], ["star", "You should win this", ""]] }
    },
    MQN(5, "Andhra and Vizag", {
      prompt: "Andhra State became the first Indian state formed on linguistic lines in which year?",
      answer: 1953,
      hint: "Three years before the big state reorganisation.",
      note: "1 October 1953. Andhra Pradesh as we know it later formed in 1956.", badge: "landmark"
    }),
    MQ(5, "Andhra and Vizag", {
      prompt: "Whose fast and sacrifice led to the creation of Andhra State?",
      options: ["Tanguturi Prakasam", "Alluri Sitarama Raju", "N. G. Ranga", "Potti Sriramulu"], answer: 3,
      hint: "He is honoured as Amarajeevi.",
      note: "Potti Sriramulu, whose 1952 fast led to the formation of Andhra State.", badge: "heart"
    }),
    MQ(5, "Andhra and Vizag", {
      prompt: "Which company runs the Visakhapatnam Steel Plant?",
      options: ["SAIL", "Tata Steel", "RINL", "JSW Steel"], answer: 2,
      hint: "Rashtriya Ispat Nigam Limited.",
      note: "Rashtriya Ispat Nigam Limited (RINL), a public sector company.", badge: "wrench",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Grand final (double) ----------
    {
      type: "learn", door: 6,
      title: "Round 6: the grand final. Double points!",
      points: [["Anything goes", "Sports, science, awards"], ["Double points", "The board can still flip"], ["Stay calm", "Read every option"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["trophy", "Mixed topics", "The decider"], ["mic", "Then the final challenge", "The buzzer round"]] }
    },
    MQN(6, "Grand Final", {
      double: true,
      prompt: "How many players does a kabaddi team have on the court at one time?",
      answer: 7,
      hint: "Fewer than cricket or football.",
      note: "7 players on court for each team, with substitutes on the bench.", badge: "users"
    }),
    MQ(6, "Grand Final", {
      double: true,
      prompt: "Who was the first Indian to win a Nobel Prize?",
      options: ["Rabindranath Tagore", "C. V. Raman", "Mother Teresa", "Amartya Sen"], answer: 0,
      hint: "Literature, 1913.",
      note: "Rabindranath Tagore won the Nobel Prize in Literature in 1913. C. V. Raman won for physics in 1930.", badge: "award"
    }),
    MQ(6, "Grand Final", {
      double: true,
      prompt: "What is the chemical formula of common table salt?",
      options: ["KCl", "NaCl", "NaOH", "CaCO3"], answer: 1,
      hint: "Sodium and chlorine.",
      note: "NaCl, sodium chloride. The Dandi March from Round 2 was all about it!", badge: "sparkles",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, ranks, take-home ----------
    { type: "speak", eyebrow: "Final challenge · buzzer round +200", prompt: "Buzzer round: the host asks five quick questions aloud. The first team to shout the right answer scores. Most correct wins +200.", note: "Try: capital of Australia, H2O, the 2011 World Cup final city, planets in the solar system, the national animal of India.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "10 Facts Worth Keeping", note: "Screenshot this. Share three with your family tonight.", items: FACTS },
    {
      type: "end",
      joinTitle: "Join the EduMoon Fun Zone",
      joinText: "Quizzes, party games and brain teasers every week. Come for the fun, stay for the people.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
