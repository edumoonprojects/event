// Word Roots Lab (EduMoon English Club). Medium: for all years.
// Break long words into parts: prefixes, roots and suffixes from Latin and Greek (bio, graph, tele, port, dict, scrib, un-, re-, pre-, -able, -ology, -phobia) to guess meanings of new words.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const WR = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 30, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const WRN = (round, name, extra) => WR(round, name, Object.assign({ kind: "number", time: 45 }, extra));

// The take-home card: 12 word parts and their meanings.
const ROOTCARD = [
  ["bio", "life: biology, biography, antibiotic"],
  ["graph / graphy", "write, draw: autograph, photography"],
  ["tele", "far: telephone, television, telescope"],
  ["port", "carry: transport, portable, export"],
  ["dict", "say: dictionary, predict, contradict"],
  ["scrib / script", "write: describe, manuscript, subscribe"],
  ["un- / in- / im-", "not: unhappy, invisible, impossible"],
  ["re-", "again or back: rewrite, return, replay"],
  ["pre-", "before: preview, predict, prepaid"],
  ["-able / -ible", "can be done: readable, visible, portable"],
  ["-ology", "study of: biology, psychology, geology"],
  ["-phobia", "fear of: hydrophobia, claustrophobia"]
];

window.GAME = {
  id: "word-roots-lab",
  title: "Word Roots Lab",
  club: "English Club",
  tagline: "Never seen the word before? Break it into parts and crack the meaning.",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "30 minutes", level: "Medium",
    about: "Sana met the word “incomprehensible” in a GRE practice test and froze. In 6 rounds, teams learn to break long words into a prefix, a root and a suffix: life and writing roots, distance and carrying roots, “not” and “again” prefixes, suffixes that change the word type, study and fear words, and a final round of brand-new words to decode.",
    outcomes: "The meaning of 12 common word parts from Latin and Greek, and a method to guess the meaning of unfamiliar words in exams, articles and interviews.",
    tone: "Make it a puzzle. Write each word on the board split into parts with slashes: in / com / prehens / ible. Let the room guess before revealing.",
    extra: [["Board work", "Keep a running list of roots on the board. By Round 6, the room can use them all together."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Decoded",
    rulesEyebrow: "How Word Roots Lab works", rulesTitle: "Learn the parts. Break the word. Guess the meaning.",
    learnText: "The host shares a few word parts and examples.", crackTitle: "Decode",
    crackText: "Pick the meaning on your phone, fast.",
    rulesExtra: "Some questions need a typed number. Round 6: <b>double</b>!",
    nobody: "Nobody cracked this one. That is a tough word!", cracked: "decoded it",
    next: "Next round →", finale: "Next →", winner: "can decode any word!", endLine: "Sana’s GRE vocabulary just doubled."
  },
  offerEyebrow: "EduMoon English Club · Vocabulary level",
  offerTitle: "Your word-root level",
  offers: [
    { min: 0.7, icon: "trophy", title: "Root Master", text: "You can decode almost any word. Try reading one English editorial a day." },
    { min: 0.45, icon: "spell-check", title: "Word Detective", text: "Strong! Find three new words this week and split them into parts." },
    { min: 0.2, icon: "lightbulb", title: "Root Explorer", text: "Good start. Learn four roots from the card below." },
    { min: 0, icon: "book-open", title: "Word Learner", text: "Everyone starts here. One root a day is enough." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon English Club · Unknown word",
      title: "Sana met the word “incomprehensible” in a GRE practice test and froze. Can your team crack it without a dictionary?",
      cards: [["gamepad-2", "Prefix + root + suffix"], ["spell-check", "12 word parts"], ["trophy", "Your score decides your word-root level"]]
    },
    { type: "rules" },

    // ---------- Round 1: Life and writing ----------
    {
      type: "learn", door: 1,
      title: "Roots for life and writing.",
      points: [["bio", "life: biology, biodata"], ["graph", "write or draw: autograph, graph"], ["scrib / script", "write: describe, script"]],
      highlightLast: true,
      side: { label: "Split it", items: [["gamepad-2", "bio / graphy", "writing about a life"], ["gamepad-2", "auto / graph", "self + write"], ["gamepad-2", "sub / scribe", "write under (sign up)"]] }
    },
    WR(1, "Life and Writing", {
      prompt: "“Biography” means…",
      options: ["The study of plants and trees", "A drawing of the human body", "A list of famous people’s names", "The story of a person’s life"], answer: 3,
      hint: "bio (life) + graphy (writing).",
      note: "bio + graphy = life writing. An autobiography is one you write about yourself (auto = self).", badge: "book-open"
    }),
    WR(1, "Life and Writing", {
      prompt: "An old handwritten book is a “manuscript”. “Manu” means hand. So “manuscript” means…",
      options: ["Something written by hand", "Something printed by a machine", "A book about famous hands", "A script for a film scene"], answer: 0,
      hint: "manu (hand) + script (written).",
      note: "Same root as “manual” (done by hand) and “manufacture” (once made by hand).", badge: "pen-tool"
    }),
    WR(1, "Life and Writing", {
      prompt: "“Antibiotic” medicine works against…",
      options: ["Pain in the head and back", "Living germs like bacteria", "Writing too much in exams", "Old age and grey hair"], answer: 1,
      hint: "anti (against) + bio (life).",
      note: "anti + bio = against life, meaning harmful living things such as bacteria.", badge: "heart",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Far and carry ----------
    {
      type: "learn", door: 2,
      title: "Roots for distance, carrying and saying.",
      points: [["tele", "far: telephone, telescope"], ["port", "carry: transport, portable"], ["dict", "say: dictionary, predict"]],
      highlightLast: true,
      side: { label: "Split it", items: [["gamepad-2", "tele / scope", "far + look"], ["gamepad-2", "ex / port", "carry out"], ["gamepad-2", "pre / dict", "say before"]] }
    },
    WR(2, "Far and Carry", {
      prompt: "“Telescope” means a tool to…",
      options: ["Hear sounds from far away", "Write messages very fast", "Measure the heat of stars", "See things far away"], answer: 3,
      hint: "tele (far) + scope (look).",
      note: "tele + scope = look far. Telephone = far sound. Television = far seeing.", badge: "eye"
    }),
    WR(2, "Far and Carry", {
      prompt: "India “exports” software. What does that mean?",
      options: ["It buys it from other countries", "It stores it in big data centres", "It sends it out to other countries", "It gives it away free to users"], answer: 2,
      hint: "ex (out) + port (carry).",
      note: "ex + port = carry out. import = carry in.", badge: "globe"
    }),
    WR(2, "Far and Carry", {
      prompt: "To “contradict” someone means to…",
      options: ["Speak against what they said", "Agree with everything they say", "Write a long letter to them", "Repeat their words back slowly"], answer: 0,
      hint: "contra (against) + dict (say).",
      note: "contra + dict = speak against. A dictator is the one who says (orders) what happens.", badge: "message-circle",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Prefixes ----------
    {
      type: "learn", door: 3,
      title: "Prefixes change the meaning at the start.",
      points: [["un- / in- / im-", "not: unfair, invisible, impossible"], ["re-", "again or back: redo, return"], ["pre-", "before: preview, prepaid"]],
      highlightLast: true,
      side: { label: "Split it", items: [["gamepad-2", "im / possible", "not possible"], ["gamepad-2", "re / view", "look again"], ["gamepad-2", "pre / paid", "paid before"]] }
    },
    WR(3, "Prefixes", {
      prompt: "A “prepaid” SIM card is one that you…",
      options: ["Pay for before you use it", "Pay for after you use it", "Never have to pay for", "Pay for every single hour"], answer: 0,
      hint: "pre = before.",
      note: "Prepaid: pay first. Postpaid: pay after (post = after).", badge: "indian-rupee"
    }),
    WR(3, "Prefixes", {
      prompt: "Which word means “not able to be seen”?",
      options: ["Invisible", "Revisible", "Previsible", "Envisible"], answer: 0,
      hint: "in- = not; vis = see; -ible = can be.",
      note: "in + vis + ible = not able to be seen. Same root as vision and visit.", badge: "eye"
    }),
    WRN(3, "Prefixes", {
      prompt: "How many parts does “re / writ / able” have when split as shown?",
      answer: 3,
      hint: "Count the parts between the slashes.",
      note: "3 parts: re (again) + writ (write) + able (can be). It means “can be written again”.", badge: "gamepad-2",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Make up a new word using one prefix and one root from today, and explain what it means.", note: "Example: “telesnack”, a snack delivered from far away. 20 seconds.", points: 100 },

    // ---------- Round 4: Suffixes ----------
    {
      type: "learn", door: 4,
      title: "Suffixes change the word type at the end.",
      points: [["-able / -ible", "can be: readable, edible"], ["-less", "without: careless, wireless"], ["-ful", "full of: helpful, careful"]],
      highlightLast: true,
      side: { label: "Split it", items: [["gamepad-2", "port / able", "can be carried"], ["gamepad-2", "wire / less", "without wires"], ["gamepad-2", "hope / ful", "full of hope"]] }
    },
    WR(4, "Suffixes", {
      prompt: "A “portable” speaker is one that…",
      options: ["Can be carried easily", "Must stay in one place", "Plays only loud music", "Works only at a port"], answer: 0,
      hint: "port (carry) + able (can be).",
      note: "port + able = can be carried.", badge: "ear"
    }),
    WR(4, "Suffixes", {
      prompt: "“Edible” means…",
      options: ["Easy to edit", "Safe to eat", "Very tasty", "Already cooked"], answer: 1,
      hint: "ed (eat) + ible (can be).",
      note: "Edible = can be eaten. Not related to “edit”, even though they look alike.", badge: "flame"
    }),
    WR(4, "Suffixes", {
      prompt: "A “fearless” student is one who is…",
      options: ["Full of fear", "Afraid of exams", "Without fear", "Scared of less"], answer: 2,
      hint: "-less = without.",
      note: "fear + less = without fear. fearful = full of fear.", badge: "shield",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Study of, fear of ----------
    {
      type: "learn", door: 5,
      title: "Words for “study of” and “fear of”.",
      points: [["-ology", "study of: geology (earth), psychology (mind)"], ["-phobia", "fear of: hydrophobia (water)"], ["Useful roots", "geo = earth, psych = mind, hydro = water, claustro = closed space"]],
      highlightLast: true,
      side: { label: "Split it", items: [["gamepad-2", "geo / logy", "study of the earth"], ["gamepad-2", "psych / ology", "study of the mind"], ["gamepad-2", "hydro / phobia", "fear of water"]] }
    },
    WR(5, "Study and Fear", {
      prompt: "“Geology” is the study of…",
      options: ["Maps and country borders", "Ancient kings and wars", "Plants that grow in deserts", "The earth, rocks and soil"], answer: 3,
      hint: "geo = earth.",
      note: "geo + logy. Same root as geography (earth + writing) and geometry (earth + measure).", badge: "globe"
    }),
    WR(5, "Study and Fear", {
      prompt: "Someone with “claustrophobia” would feel scared…",
      options: ["On a wide, open beach", "In a small, closed lift", "When speaking in public", "When looking at spiders"], answer: 1,
      hint: "claustro = closed space.",
      note: "A fear of closed or tight spaces. Fear of public speaking is called glossophobia (glossa = tongue).", badge: "lock"
    }),
    WR(5, "Study and Fear", {
      prompt: "What does a “psychologist” study?",
      options: ["The bones of the body", "Old coins and stamps", "The mind and behaviour", "Weather and climate"], answer: 2,
      hint: "psych = mind.",
      note: "psych + ology + ist. -ist means a person who does it: scientist, artist, psychologist.", badge: "brain",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Decode new words (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: decode words you have never seen.",
      points: [["Split", "Prefix / root / suffix"], ["Translate each part", "Use the roots from today"], ["Join and check", "Does the meaning fit the sentence?"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["gamepad-2", "New words", "Split and decode"], ["mic", "Then the final challenge", "Root battle"]] }
    },
    WR(6, "Decode It", {
      double: true,
      prompt: "Back to Sana’s word. “Incomprehensible” (in / comprehens / ible) means…",
      options: ["Able to be understood fully", "Understood again later", "Not able to be understood", "Understood before reading"], answer: 2,
      hint: "in = not; comprehend = understand; -ible = can be.",
      note: "not + understand + can be = cannot be understood. Sana cracked it.", badge: "spell-check"
    }),
    WR(6, "Decode It", {
      double: true,
      prompt: "“Telepathy” (tele / pathy). “Pathy” means feeling. So telepathy is…",
      options: ["Feeling pain in the far parts of the body", "Writing letters to someone far away", "Studying feelings through a telescope", "Feeling someone’s thoughts from far away"], answer: 3,
      hint: "tele = far; pathy = feeling.",
      note: "Far + feeling. Same “pathy” as sympathy and empathy.", badge: "brain"
    }),
    WR(6, "Decode It", {
      double: true,
      prompt: "“Irreplaceable” (ir / re / place / able). A friend who is irreplaceable is one who…",
      options: ["Can be replaced very easily", "Cannot be replaced by anyone", "Was replaced long ago", "Has replaced someone else"], answer: 1,
      hint: "ir = not (before r); re = again; -able = can be.",
      note: "not + can be placed again = cannot be replaced. ir-, il-, im-, in- all mean “not”.", badge: "users",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best team wins +200", prompt: "Root battle: the host says a root. Teams take turns naming a real English word with that root. A team that can’t answer in 5 seconds is out.", note: "Try: port, tele, bio, dict, graph. Last team standing wins.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "12 Word Parts", note: "Screenshot this. Split one new word every day.", items: ROOTCARD },
    {
      type: "end",
      joinTitle: "Join the EduMoon English Club",
      joinText: "Speaking games, debates and English practice every week. No fear of mistakes.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
