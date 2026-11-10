// Which Came First? (EduMoon Fun Zone). For all years.
// Two inventions, apps, missions or landmarks. Pick the older one. Years are well-documented and were checked in 2026.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const WF = (round, name, a, b, ans, extra) => Object.assign({ type: "door", kind: "choice", time: 20, board: false, prompt: `Which came first: ${a} or ${b}?`, options: [a, b], answer: ans, eyebrow: `Round ${round} · ${name}` }, extra);

const TIMELINE = [
  ["1876", "Telephone patented (Alexander Graham Bell)."],
  ["1903", "First powered aeroplane flight (Wright brothers)."],
  ["1969", "First humans land on the Moon."],
  ["1975", "Aryabhata, India’s first satellite, launched."],
  ["1984", "Kolkata Metro, India’s first metro, starts running."],
  ["1991", "Python programming language first released."],
  ["1998", "Google founded."],
  ["2008", "Chandrayaan-1 launched to the Moon."],
  ["2009", "WhatsApp launched."],
  ["2016", "UPI launched in India."]
];

window.GAME = {
  id: "which-came-first",
  title: "Which Came First?",
  club: "Fun Zone",
  tagline: "Two things. One is older. 20 seconds. Go!",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "30 minutes", level: "Beginner",
    about: "A fast two-choice quiz. Each question shows two apps, inventions, missions or landmarks, and teams have 20 seconds to pick the older one. 6 rounds: apps, India in space, inventions, internet history, India milestones and a final mix. Every reveal gives both years. It ends with a 10-date timeline card.",
    outcomes: "A sense of how fast technology changed, surprising history, and 10 dates worth remembering.",
    tone: "Fast and loud. Let the room shout their pick before the reveal. The fun is in the surprises: many people are sure they know, and they don’t.",
    extra: [["Facts", "Every year is a well-documented launch or event date, so the game won’t go out of date."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Called it",
    rulesEyebrow: "How Which Came First works", rulesTitle: "Two things. Pick the older one. 20 seconds.",
    learnText: "The host introduces the round.", crackTitle: "Pick",
    crackText: "Tap the older one on your phone and lock it in.",
    rulesExtra: "Faster answers score more. Speak (optional): <b>+100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody got it. Time plays tricks on everyone!", cracked: "called it",
    next: "Next round →", finale: "Next →", winner: "are today’s time travellers!", endLine: "History is full of surprises!"
  },
  offerEyebrow: "EduMoon Fun Zone · Which Came First results",
  offerTitle: "Your time-travel rank",
  offers: [
    { min: 0.7, icon: "crown", title: "Time Lord", text: "You know your history. Try India Quiz next." },
    { min: 0.45, icon: "clock", title: "Time Traveller", text: "Strong! Save the timeline and beat a friend with it." },
    { min: 0.2, icon: "compass", title: "Tourist", text: "Good fun! You learned 18 dates today." },
    { min: 0, icon: "sparkles", title: "Lost in Time", text: "Today time fooled you. Save the timeline card." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Fun Zone · Which Came First?",
      title: "WhatsApp or Instagram? Telephone or light bulb? Chandrayaan or Mangalyaan? Two choices, one is older. 20 seconds each.",
      cards: [["clock", "18 head-to-head matchups"], ["timer", "20 seconds per pick"], ["trophy", "Become the room’s Time Lord"]]
    },
    { type: "rules" },

    // ---------- Round 1: Apps ----------
    {
      type: "learn", door: 1,
      title: "Round 1: apps on your phone.",
      points: [["They feel like they’ve always existed", "Most are younger than you think"], ["Think about who used it first", "Your parents? Your older cousins?"], ["Go with your gut", "20 seconds!"]],
      highlightLast: true,
      side: { label: "This round", items: [["message-circle", "Chat apps", ""], ["users", "Social apps", ""], ["film", "Video apps", ""]] }
    },
    WF(1, "Apps", "WhatsApp", "Instagram", 0, { hint: "One launched in 2009.", note: "WhatsApp (2009) came before Instagram (2010).", badge: "message-circle" }),
    WF(1, "Apps", "YouTube", "Facebook", 1, { hint: "Started in a college dorm.", note: "Facebook (2004) came before YouTube (2005).", badge: "users" }),
    WF(1, "Apps", "Twitter (now X)", "YouTube", 1, { hint: "Videos first.", note: "YouTube (2005) came before Twitter (2006).", badge: "film", board: true, boardLabel: "after Round 1" }),

    // ---------- Round 2: India in space ----------
    {
      type: "learn", door: 2,
      title: "Round 2: India in space.",
      points: [["ISRO has a long history", "Starting decades before today’s missions"], ["Moon and Mars", "Both have Indian missions"], ["Think about the numbers in names", "They’re clues"]],
      highlightLast: true,
      side: { label: "This round", items: [["globe", "Satellites", ""], ["sparkles", "Moon", ""], ["rocket", "Mars", ""]] }
    },
    WF(2, "India in Space", "Chandrayaan-1 to the Moon", "Mangalyaan to Mars", 0, { hint: "Moon first.", note: "Chandrayaan-1 (2008) came before Mangalyaan (launched 2013).", badge: "globe" }),
    WF(2, "India in Space", "India’s first cricket World Cup win", "Aryabhata, India’s first satellite", 1, { hint: "Space came early.", note: "Aryabhata (1975) came before the 1983 World Cup win.", badge: "rocket" }),
    WF(2, "India in Space", "ChatGPT released to the public", "Chandrayaan-3 lands on the Moon", 0, { hint: "Both are recent. Late 2022 or mid 2023?", note: "ChatGPT (November 2022) came before Chandrayaan-3’s landing (August 2023).", badge: "sparkles", board: true, boardLabel: "after Round 2" }),

    // ---------- Round 3: Inventions ----------
    {
      type: "learn", door: 3,
      title: "Round 3: inventions that changed the world.",
      points: [["Some are older than you’d guess", "By decades"], ["Inventions build on each other", "But not always in the order you think"], ["Picture the world without it", "Then decide"]],
      highlightLast: true,
      side: { label: "This round", items: [["smartphone", "Communication", ""], ["zap", "Electricity", ""], ["heart", "Medicine", ""]] }
    },
    WF(3, "Inventions", "Electric light bulb (Edison’s)", "Telephone", 1, { hint: "Bell vs Edison.", note: "Bell’s telephone (1876) came before Edison’s practical light bulb (1879).", badge: "smartphone" }),
    WF(3, "Inventions", "Penicillin, the first antibiotic", "First aeroplane flight", 1, { hint: "Wright brothers.", note: "First powered flight (1903) came before penicillin was discovered (1928).", badge: "heart" }),
    WF(3, "Inventions", "First email sent", "First humans on the Moon", 1, { hint: "1969 vs 1971.", note: "The Moon landing (1969) came before the first network email (1971).", badge: "mail", board: true, boardLabel: "after Round 3" }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Which answer surprised your team most so far, and why?", note: "20 seconds.", points: 100 },

    // ---------- Round 4: Internet and coding ----------
    {
      type: "learn", door: 4,
      title: "Round 4: internet and coding.",
      points: [["The internet grew in layers", "Search, encyclopedias, smartphones"], ["Programming languages", "Many are older than their fame"], ["Trust the clues", "Not just the hype"]],
      highlightLast: true,
      side: { label: "This round", items: [["search", "Search", ""], ["book-open", "Knowledge", ""], ["code", "Languages", ""]] }
    },
    WF(4, "Internet and Coding", "Google search", "The first iPhone", 0, { hint: "Search came well before smartphones.", note: "Google (1998) came about nine years before the first iPhone (2007).", badge: "search" }),
    WF(4, "Internet and Coding", "Wikipedia", "Google", 1, { hint: "1998 vs 2001.", note: "Google (1998) came before Wikipedia (2001).", badge: "book-open" }),
    WF(4, "Internet and Coding", "Java", "Python", 1, { hint: "Python is older than many think.", note: "Python (1991) came before Java (1995).", badge: "code", board: true, boardLabel: "after Round 4" }),

    // ---------- Round 5: India milestones ----------
    {
      type: "learn", door: 5,
      title: "Round 5: India milestones.",
      points: [["Money and IDs", "Digital India grew step by step"], ["Cities and transport", "Some firsts are older than expected"], ["Landmarks", "Centuries apart"]],
      highlightLast: true,
      side: { label: "This round", items: [["indian-rupee", "Money", ""], ["route", "Transport", ""], ["landmark", "Landmarks", ""]] }
    },
    WF(5, "India Milestones", "Aadhaar numbers first issued", "UPI launched", 0, { hint: "IDs before payments.", note: "The first Aadhaar numbers (2010) came before UPI (2016).", badge: "indian-rupee" }),
    WF(5, "India Milestones", "Delhi Metro", "Kolkata Metro", 1, { hint: "India’s first metro.", note: "Kolkata Metro (1984) came before Delhi Metro (2002).", badge: "route" }),
    WF(5, "India Milestones", "Taj Mahal construction begins", "Charminar built in Hyderabad", 1, { hint: "Hyderabad’s landmark is older.", note: "Charminar (1591) came before work began on the Taj Mahal (1632).", badge: "landmark", board: true, boardLabel: "after Round 5" }),

    // ---------- Round 6: Final mix (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: mixed. Double points!",
      points: [["Anything goes", "Apps, money, symbols"], ["Some are close", "Trust your best guess"], ["Still anyone’s game", "Double points"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Anyone can still win"], ["clock", "3 last matchups", ""], ["award", "Then your rank", ""]] }
    },
    WF(6, "Final Mix", "Paytm", "Flipkart", 1, { double: true, hint: "Books online came first.", note: "Flipkart (2007) came before Paytm (2010).", badge: "store" }),
    WF(6, "Final Mix", "The ₹ rupee symbol", "Euro coins and notes", 1, { double: true, hint: "The ₹ symbol is newer than you think.", note: "Euro cash (2002) came before the ₹ symbol was adopted (2010).", badge: "indian-rupee" }),
    WF(6, "Final Mix", "Instagram", "UPI", 0, { double: true, hint: "2010 vs 2016.", note: "Instagram (2010) came before UPI (2016).", badge: "smartphone", board: true, boardLabel: "after Round 6" }),

    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "In 30 seconds: give the room your own “which came first?” and reveal the answer.", note: "Only ones you’re sure about! The host picks the best surprise.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "10 Dates Worth Remembering", note: "Screenshot this. Quiz your friends tonight.", items: TIMELINE },
    {
      type: "end",
      joinTitle: "Join the EduMoon community",
      joinText: "Fun games, quizzes and challenges every week. Learn something new while you play.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
