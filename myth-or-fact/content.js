// Myth or Fact (EduMoon Fun Zone). For all years.
// Things everyone "knows" that are wrong, and true things that sound fake. 6 quick rounds.
// Every answer is a well-established fact checked in 2026; notes give the real story in one line.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const MF = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 25, board: false, options: ["Myth", "Fact"], eyebrow: `Round ${round} · ${name}` }, extra);
const MYTH = 0, FACT = 1;

const SPOT = [
  ["Ask: says who?", "A real source beats “everyone knows”."],
  ["Too neat to be true?", "Real facts are often messier than myths."],
  ["Check the date", "Old advice can be outdated."],
  ["Look for the original", "Not a forward of a forward."],
  ["Science changes its mind", "With evidence. That’s a strength, not a weakness."],
  ["Surprising isn’t the same as false", "Octopuses really do have three hearts."],
  ["Health claims need doctors", "Not WhatsApp uncles."],
  ["Before you forward, check", "One search can stop a myth spreading."]
];

window.GAME = {
  id: "myth-or-fact",
  title: "Myth or Fact",
  club: "Fun Zone",
  tagline: "Things everyone believes. Some are true. Many are not.",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "30 minutes", level: "Beginner",
    about: "A fast true-or-false game. Each question is something people often say, about the body, animals, space, tech, India and food. Teams have 25 seconds to call it Myth or Fact. Every reveal comes with the real story in one line. It ends with 8 habits for spotting myths before you believe or forward them.",
    outcomes: "18 surprising facts, the habit of asking “says who?”, and simple ways to check claims before sharing them.",
    tone: "Fast and loud. Ask the room to shout “Myth!” or “Fact!” before every reveal. Some answers will start arguments; that’s the fun. Every answer is a well-known, settled fact.",
    extra: [["Make it local", "Ask students for a myth they heard at home or on WhatsApp. Check it together after the game."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Busted",
    rulesEyebrow: "How Myth or Fact works", rulesTitle: "Hear the claim. Myth or fact? 25 seconds.",
    learnText: "The host introduces the round.", crackTitle: "Call it",
    crackText: "Tap Myth or Fact on your phone and lock it in.",
    rulesExtra: "Faster answers score more. Speak (optional): <b>+100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody called it. This one fools almost everyone!", cracked: "called it",
    next: "Next round →", finale: "Next →", winner: "are today’s myth busters!", endLine: "Don’t believe everything you hear!"
  },
  offerEyebrow: "EduMoon Fun Zone · Myth or Fact results",
  offerTitle: "Your myth-buster rank",
  offers: [
    { min: 0.7, icon: "shield", title: "Master Myth Buster", text: "Hardly anything fools you. Be the friend who checks before forwarding." },
    { min: 0.45, icon: "search", title: "Sharp Skeptic", text: "Strong! Keep asking “says who?”." },
    { min: 0.2, icon: "lightbulb", title: "Curious Mind", text: "Good fun! Share one fact you learned today with a friend." },
    { min: 0, icon: "sparkles", title: "Fresh Believer", text: "Today the myths won. Now you know 18 real facts." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Fun Zone · Myth or Fact",
      title: "Your uncle forwarded it. Your friend swears it’s true. But is it? 18 claims, 25 seconds each. Myth or fact?",
      cards: [["sparkles", "18 claims people believe"], ["timer", "25 seconds to call each one"], ["shield", "Become the room’s myth buster"]]
    },
    { type: "rules" },

    // ---------- Round 1: Your body ----------
    {
      type: "learn", door: 1,
      title: "Round 1: your body. Lots of myths live here.",
      points: [["Heard it at home?", "Some old advice is right, some isn’t"], ["Sounds scientific?", "Doesn’t mean it is"], ["Trust your gut, then check", "Today we check together"]],
      highlightLast: true,
      side: { label: "This round", items: [["brain", "Brains", ""], ["user", "Bones and joints", ""], ["heart", "Inside you", ""]] }
    },
    MF(1, "Your Body", {
      prompt: "Humans use only 10% of their brain.", answer: MYTH,
      hint: "Brain scans show activity all over.",
      note: "Myth. Brain scans show we use virtually all of it, just not all parts at the same moment.", badge: "brain"
    }),
    MF(1, "Your Body", {
      prompt: "Cracking your knuckles causes arthritis.", answer: MYTH,
      hint: "Scientists have studied this.",
      note: "Myth. Studies found no link. The pop is just gas bubbles in the joint fluid.", badge: "user"
    }),
    MF(1, "Your Body", {
      prompt: "Your stomach replaces its inner lining every few days.", answer: FACT,
      hint: "Your stomach acid is very strong.",
      note: "Fact. The cells lining the stomach are replaced every few days, so the acid doesn’t digest your own stomach.", badge: "heart",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Animals ----------
    {
      type: "learn", door: 2,
      title: "Round 2: animals. Nature is weirder than myths.",
      points: [["Some myths are insults", "Animals are often smarter than we think"], ["Some facts sound fake", "But they’re true"], ["Think about what you’ve seen", "Then decide"]],
      highlightLast: true,
      side: { label: "This round", items: [["sparkles", "Fish", ""], ["sparkles", "Sea creatures", ""], ["sparkles", "Bulls", ""]] }
    },
    MF(2, "Animals", {
      prompt: "Goldfish have a memory of only 3 seconds.", answer: MYTH,
      hint: "Goldfish can be trained.",
      note: "Myth. Goldfish can remember things for months and can be trained to respond to sounds and colours.", badge: "sparkles"
    }),
    MF(2, "Animals", {
      prompt: "An octopus has three hearts.", answer: FACT,
      hint: "Sounds made up, right?",
      note: "Fact. Two pump blood through the gills and one pumps it around the body. Its blood is blue too.", badge: "heart"
    }),
    MF(2, "Animals", {
      prompt: "Bulls charge because the colour red makes them angry.", answer: MYTH,
      hint: "What else does the bullfighter do with the cloth?",
      note: "Myth. Bulls can’t see red the way we do. They charge at the moving cloth, not its colour.", badge: "eye",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Space and science ----------
    {
      type: "learn", door: 3,
      title: "Round 3: space and science.",
      points: [["Famous “facts”", "Repeated so often everyone believes them"], ["Physics is strict", "It doesn’t care what’s popular"], ["Imagine it", "Then call it"]],
      highlightLast: true,
      side: { label: "This round", items: [["globe", "The Moon", ""], ["zap", "Lightning", ""], ["sparkles", "Space", ""]] }
    },
    MF(3, "Space and Science", {
      prompt: "You can see the Great Wall of China from the Moon with your naked eye.", answer: MYTH,
      hint: "The Moon is about 3,84,000 km away.",
      note: "Myth. It’s long but very narrow. From the Moon, even whole countries are hard to make out.", badge: "globe"
    }),
    MF(3, "Space and Science", {
      prompt: "Lightning never strikes the same place twice.", answer: MYTH,
      hint: "Think of tall towers.",
      note: "Myth. Tall buildings get struck again and again, some many times a year.", badge: "zap"
    }),
    MF(3, "Space and Science", {
      prompt: "Sound cannot travel through empty space.", answer: FACT,
      hint: "Sound needs something to move through.",
      note: "Fact. Sound needs air, water or solids to travel. In space, explosions would be silent.", badge: "sparkles",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Share a myth you believed as a kid.", note: "Who told you, and when did you find out? 20 seconds.", points: 100 },

    // ---------- Round 4: Tech ----------
    {
      type: "learn", door: 4,
      title: "Round 4: tech. Your phone has myths too.",
      points: [["Tech changes fast", "Old tips may not be true now"], ["“Private” isn’t always private", "Read what settings really do"], ["Some stories are history", "And they’re true"]],
      highlightLast: true,
      side: { label: "This round", items: [["smartphone", "Phones", ""], ["globe", "Browsing", ""], ["code", "Computer history", ""]] }
    },
    MF(4, "Tech", {
      prompt: "Incognito mode hides your browsing from your college Wi-Fi admin.", answer: MYTH,
      hint: "What does incognito actually stop?",
      note: "Myth. It only stops your own device from saving history. The network can still see where you go.", badge: "eye"
    }),
    MF(4, "Tech", {
      prompt: "A real moth was once found inside a computer and taped into its logbook as a “bug”.", answer: FACT,
      hint: "It happened in 1947.",
      note: "Fact. Engineers working on the Harvard Mark II computer taped the moth into their log as the “first actual case of bug being found”.", badge: "code"
    }),
    MF(4, "Tech", {
      prompt: "On modern phones, constantly closing all your background apps always saves battery.", answer: MYTH,
      hint: "Reopening an app from scratch takes work too.",
      note: "Myth. Modern phones manage background apps well. Restarting them from scratch can use more battery.", badge: "smartphone",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: India ----------
    {
      type: "learn", door: 5,
      title: "Round 5: India. Some answers will surprise you.",
      points: [["School facts", "Not all of them are official"], ["Ancient India", "Gave the world big ideas"], ["Proud of it?", "Check it anyway"]],
      highlightLast: true,
      side: { label: "This round", items: [["trophy", "Sport", ""], ["brain", "Maths", ""], ["star", "Games", ""]] }
    },
    MF(5, "India", {
      prompt: "Hockey is officially declared as India’s national game.", answer: MYTH,
      hint: "Taught in many schools, but is it official?",
      note: "Myth. The Sports Ministry has said India has not officially declared any national game. Hockey is loved, not declared.", badge: "trophy"
    }),
    MF(5, "India", {
      prompt: "Ancient Indian mathematicians were among the first to treat zero as a number with its own rules.", answer: FACT,
      hint: "Think of Brahmagupta.",
      note: "Fact. Brahmagupta wrote rules for calculating with zero in the 7th century.", badge: "brain"
    }),
    MF(5, "India", {
      prompt: "Chess grew out of an ancient Indian game called chaturanga.", answer: FACT,
      hint: "Its pieces were like an army.",
      note: "Fact. Chaturanga, with army-style pieces, is widely seen as the ancestor of chess.", badge: "star",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Food and daily life (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: food and daily life. Double points!",
      points: [["You hear these at home", "Some are wise, some are wrong"], ["Food myths spread fast", "Check before you believe"], ["Still anyone’s game", "Double points"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Anyone can still win"], ["sparkles", "3 last claims", ""], ["award", "Then your rank", "How sharp is your team?"]] }
    },
    MF(6, "Food and Daily Life", {
      double: true,
      prompt: "Eating lots of carrots gives you night vision.", answer: MYTH,
      hint: "This story was spread during a war.",
      note: "Myth. Carrots help eye health, but won’t give night vision. The story was spread in World War II to hide radar technology.", badge: "eye"
    }),
    MF(6, "Food and Daily Life", {
      double: true,
      prompt: "Properly sealed honey can stay edible for a very, very long time.", answer: FACT,
      hint: "Archaeologists have a story about this.",
      note: "Fact. Its low water and natural acids stop germs growing. Very old honey has been found in ancient tombs.", badge: "star"
    }),
    MF(6, "Food and Daily Life", {
      double: true,
      prompt: "Swallowed chewing gum stays in your stomach for 7 years.", answer: MYTH,
      hint: "Your body moves things along.",
      note: "Myth. Your body can’t digest gum, but it passes through in a few days like other things it can’t break down.", badge: "heart",
      board: true, boardLabel: "after Round 6"
    }),

    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "In 30 seconds: say one claim, and let the room guess myth or fact.", note: "It must be something you know the real answer to. The host picks the best one.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "8 Ways to Spot a Myth", note: "Screenshot this. Use it before you forward anything.", items: SPOT },
    {
      type: "end",
      joinTitle: "Join the EduMoon community",
      joinText: "Fun games, quizzes and challenges every week. Learn something new while you play.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
