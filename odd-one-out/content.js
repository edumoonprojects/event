// Odd One Out (EduMoon Fun Zone). For all years and any crowd.
// Four items, three belong together. Spot the odd one and say why. Six themes: animals, food, tech, India, numbers and a final mix.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const OQ = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 25, board: false, eyebrow: `Round ${round} · ${name}`, prompt: "Which one is the odd one out?" }, extra);
const ON = (round, name, extra) => OQ(round, name, Object.assign({ kind: "number", time: 40 }, extra));

// The take-home card: how to find the odd one out.
const HOWTO = [
  ["Find the group first", "What do three of them share? Type, place, colour, use, shape?"],
  ["Then check the fourth", "Does it break that rule?"],
  ["Try more than one rule", "If two answers seem odd, look for a stronger rule."],
  ["Animals", "Cat family? Fish or mammal? Can it fly?"],
  ["Tech", "Input or output? Language or markup? Browser or app?"],
  ["Numbers", "Prime? Square? Multiple of something?"],
  ["Places", "On the coast? Same river system? Same language family?"],
  ["Explain it", "The reason is the real answer. Always say why."]
];

window.GAME = {
  id: "odd-one-out",
  title: "Odd One Out",
  club: "Fun Zone",
  tagline: "Three belong together. One does not. Spot it fast, and say why.",
  art: window.STORY_ART,
  guide: {
    years: "All years · any crowd", time: "30 minutes", level: "Beginner",
    about: "A fast thinking game for any group. Each screen shows four items: three share something and one does not. Teams have 25 seconds to spot the odd one out. Six themes: animals, food, tech, India, numbers and a final mix. The real fun is in the reasons, so the host asks a team to explain after each reveal.",
    outcomes: "Quick pattern spotting, the habit of explaining a reason, and a few fun facts along the way.",
    tone: "Keep it fast and loud. Some teams will find a different but clever rule; if their reason is good, give them the explain bonus even if they picked another answer. The thinking matters more than the answer.",
    extra: [["Explain bonus", "After each reveal, tap +50 for the team that gave the best reason. This game is perfect for it."]]
  },
  words: {
    round: "Round", unlocked: "The odd one", badgeLabel: "Spotted",
    rulesEyebrow: "How Odd One Out works", rulesTitle: "Four items. One does not belong. Spot it.",
    learnText: "The host introduces the theme.", crackTitle: "Spot it",
    crackText: "Tap the odd one out and lock it in.",
    rulesExtra: "Best reason: <b>+50</b>. Round 6: <b>double</b>!",
    nobody: "Nobody spotted it. That one was sneaky!", cracked: "spotted it",
    next: "Next round →", finale: "Next →", winner: "are today’s pattern spotters!", endLine: "Nothing gets past your eyes."
  },
  offerEyebrow: "EduMoon Fun Zone · Spotter level",
  offerTitle: "Your spotter level",
  offers: [
    { min: 0.7, icon: "eye", title: "Eagle Eye", text: "You see patterns instantly. Try Brain Teasers next." },
    { min: 0.45, icon: "search", title: "Sharp Spotter", text: "Strong! Make your own odd-one-out for your friends." },
    { min: 0.2, icon: "lightbulb", title: "Quick Thinker", text: "Good start. Look for the group first, then the odd one." },
    { min: 0, icon: "party-popper", title: "Fun Seeker", text: "Everyone starts here. It gets easier every round." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Fun Zone · Spot it fast",
      title: "Every screen has four items. Three belong together. One does not. Can your team spot the odd one out in 25 seconds?",
      cards: [["eye", "6 themes, 18 screens"], ["timer", "25 seconds each, faster scores more"], ["trophy", "Your score decides your spotter level"]]
    },
    { type: "rules" },

    // ---------- Round 1: Animals ----------
    {
      type: "learn", door: 1,
      title: "Round 1: Animals. Find the group, then the odd one.",
      points: [["Find what three share", "Family, home, body or skill"], ["Check the fourth", "Does it break the rule?"], ["Say why", "The best reason gets +50"]],
      highlightLast: true,
      side: { label: "Rules to try", items: [["search", "Same family?", "Cats, dogs, birds"], ["waves", "Fish or mammal?", "Not the same thing"], ["sparkles", "Can it fly?", "Not every bird can"]] }
    },
    OQ(1, "Animals", {
      options: ["Lion", "Tiger", "Leopard", "Wolf"], answer: 3,
      hint: "Which family do three belong to?",
      note: "Wolf. Lion, tiger and leopard are big cats. The wolf belongs to the dog family.", badge: "search"
    }),
    OQ(1, "Animals", {
      options: ["Whale", "Shark", "Dolphin", "Seal"], answer: 1,
      hint: "All live in the sea. What else do three share?",
      note: "Shark. It is a fish. Whales, dolphins and seals are mammals that breathe air.", badge: "waves"
    }),
    OQ(1, "Animals", {
      options: ["Sparrow", "Eagle", "Penguin", "Parrot"], answer: 2,
      hint: "All are birds. What can three of them do?",
      note: "Penguin. It is a bird that cannot fly. It swims instead.", badge: "sparkles",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Food ----------
    {
      type: "learn", door: 2,
      title: "Round 2: Food. Where it grows, where it is from, what it is made of.",
      points: [["Fruit or vegetable?", "Some are surprising"], ["Which region?", "South Indian, North Indian, foreign"], ["What is it made from?", "Milk, grain, plant"]],
      highlightLast: true,
      side: { label: "Rules to try", items: [["map", "Region", "Where it comes from"], ["store", "Type", "Fruit, dairy, grain"], ["search", "How it grows", "Tree, plant, underground"]] }
    },
    OQ(2, "Food", {
      options: ["Mango", "Potato", "Banana", "Guava"], answer: 1,
      hint: "Three are eaten as fruits.",
      note: "Potato. The others are fruits. The potato is a vegetable that grows underground.", badge: "store"
    }),
    OQ(2, "Food", {
      options: ["Idli", "Dosa", "Upma", "Pizza"], answer: 3,
      hint: "Think about where each one comes from.",
      note: "Pizza. Idli, dosa and upma are South Indian breakfasts. Pizza comes from Italy.", badge: "map"
    }),
    OQ(2, "Food", {
      options: ["Rice", "Milk", "Curd", "Paneer"], answer: 0,
      hint: "Where do three of them come from?",
      note: "Rice. Milk, curd and paneer are dairy, made from milk. Rice is a grain.", badge: "search",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Tech ----------
    {
      type: "learn", door: 3,
      title: "Round 3: Tech. What does each one do?",
      points: [["Software type", "Browser, office app, game"], ["Programming", "Language or not?"], ["Hardware", "Does it put data in or show it out?"]],
      highlightLast: true,
      side: { label: "Rules to try", items: [["globe", "Browsers", "Open websites"], ["code", "Languages", "Write programs"], ["smartphone", "Input or output", "In or out?"]] }
    },
    OQ(3, "Tech", {
      options: ["Chrome", "Firefox", "Excel", "Safari"], answer: 2,
      hint: "Three open websites.",
      note: "Excel. Chrome, Firefox and Safari are web browsers. Excel is a spreadsheet app.", badge: "globe"
    }),
    OQ(3, "Tech", {
      options: ["Python", "HTML", "Java", "C++"], answer: 1,
      hint: "Can all four write a loop?",
      note: "HTML. It is a markup language that describes a page. Python, Java and C++ are programming languages.", badge: "code"
    }),
    OQ(3, "Tech", {
      options: ["Mouse", "Keyboard", "Scanner", "Monitor"], answer: 3,
      hint: "In or out?",
      note: "Monitor. It shows output. Mouse, keyboard and scanner put data into the computer.", badge: "smartphone",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Make your own odd-one-out with four things in this room. The other teams guess.", note: "Say the four items. Keep the answer secret until they guess.", points: 100 },

    // ---------- Round 4: India ----------
    {
      type: "learn", door: 4,
      title: "Round 4: India. Cities, rivers and languages.",
      points: [["Cities", "Coast or inland?"], ["Rivers", "Which sea do they flow into?"], ["Languages", "Which language family?"]],
      highlightLast: true,
      side: { label: "Rules to try", items: [["waves", "Coastal cities", "On the sea"], ["map", "Rivers", "East or west, which country"], ["languages", "Language families", "Dravidian or not"]] }
    },
    OQ(4, "India", {
      options: ["Vizag", "Chennai", "Delhi", "Kochi"], answer: 2,
      hint: "Three are by the sea.",
      note: "Delhi. Vizag, Chennai and Kochi are coastal cities. Delhi is far inland.", badge: "waves"
    }),
    OQ(4, "India", {
      options: ["Godavari", "Krishna", "Kaveri", "Indus"], answer: 3,
      hint: "Where do three of them end?",
      note: "Indus. Godavari, Krishna and Kaveri flow into the Bay of Bengal. The Indus flows mostly through Pakistan into the Arabian Sea.", badge: "map"
    }),
    OQ(4, "India", {
      options: ["Telugu", "Hindi", "Tamil", "Kannada"], answer: 1,
      hint: "Think language families.",
      note: "Hindi. Telugu, Tamil and Kannada are Dravidian languages. Hindi belongs to the Indo-Aryan family.", badge: "languages",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Numbers and words ----------
    {
      type: "learn", door: 5,
      title: "Round 5: Numbers and words. Look for the hidden rule.",
      points: [["Prime numbers", "Only divisible by 1 and themselves: 2, 3, 5, 7"], ["Squares", "4, 9, 16, 25 are numbers times themselves"], ["Tables", "Which multiplication table do they belong to?"]],
      highlightLast: true,
      side: { label: "Rules to try", items: [["search", "Prime?", "2, 3, 5, 7, 11"], ["list-checks", "Square?", "1, 4, 9, 16, 25, 36"], ["chart-column", "Same table?", "7, 14, 21, 28"]] }
    },
    OQ(5, "Numbers and Words", {
      options: ["2", "3", "9", "5"], answer: 2,
      hint: "Can it be divided by something other than 1 and itself?",
      note: "9. It is 3 × 3, so it is not prime. 2, 3 and 5 are prime numbers.", badge: "search"
    }),
    ON(5, "Numbers and Words", {
      prompt: "One does not belong: 7, 14, 21, 26, 35. Type the odd number.",
      answer: 26,
      hint: "Which table do the others belong to?",
      note: "26. The others are in the 7 times table: 7, 14, 21, 28, 35.", badge: "list-checks"
    }),
    OQ(5, "Numbers and Words", {
      options: ["Rose", "Lotus", "Banyan", "Jasmine"], answer: 2,
      hint: "Which three would you put in a vase?",
      note: "Banyan. It is a tree. Rose, lotus and jasmine are flowers.", badge: "sparkles",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Final mix (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: anything goes. Double points!",
      points: [["Space, sports and shapes", "Three quick screens"], ["Two answers look odd?", "Find the stronger rule"], ["Last chance", "Double points can change the board"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["sparkles", "Mixed themes", "Space, sports, shapes"], ["mic", "Then the final challenge", "Stump the room"]] }
    },
    OQ(6, "Final Mix", {
      double: true,
      options: ["Mercury", "Moon", "Venus", "Mars"], answer: 1,
      hint: "Three of them go around the Sun on their own.",
      note: "Moon. Mercury, Venus and Mars are planets. The Moon goes around the Earth.", badge: "sparkles"
    }),
    OQ(6, "Final Mix", {
      double: true,
      options: ["Cricket", "Football", "Hockey", "Chess"], answer: 3,
      hint: "What do three of them need on the field?",
      note: "Chess. Cricket, football and hockey are played with a ball on a field. Chess is a board game.", badge: "trophy"
    }),
    OQ(6, "Final Mix", {
      double: true,
      options: ["Circle", "Square", "Triangle", "Rectangle"], answer: 0,
      hint: "Count the corners.",
      note: "Circle. It has no straight sides or corners. The others are made of straight lines.", badge: "target",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best puzzle wins +200", prompt: "Each team creates one odd-one-out puzzle. The team whose puzzle stumps the most people wins.", note: "Four items and one clear reason. The host decides.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "How to Spot the Odd One Out", note: "Screenshot this. Try it in aptitude tests too.", items: HOWTO },
    {
      type: "end",
      joinTitle: "Join the EduMoon Fun Zone",
      joinText: "Quizzes, party games and brain teasers every week. Come for the fun, stay for the people.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
