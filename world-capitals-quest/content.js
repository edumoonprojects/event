// World Capitals Quest (EduMoon Fun Zone). Beginner: for all years and any crowd.
// A trip around the world by capital cities: Asia, Europe, the Americas, Africa, Oceania and a double-points final on Indian state capitals. Includes the famous traps where the biggest city is not the capital.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const WC = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 25, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const WCN = (round, name, extra) => WC(round, name, Object.assign({ kind: "number", time: 35 }, extra));

// The take-home card: capital traps.
const TRAPS = [
  ["Australia", "Canberra, not Sydney."],
  ["Canada", "Ottawa, not Toronto."],
  ["Turkey", "Ankara, not Istanbul."],
  ["Brazil", "Brasília, not Rio de Janeiro."],
  ["Nigeria", "Abuja, not Lagos."],
  ["Switzerland", "Bern, not Zurich or Geneva."],
  ["New Zealand", "Wellington, not Auckland."],
  ["The lesson", "The biggest or most famous city is often not the capital."]
];

window.GAME = {
  id: "world-capitals-quest",
  title: "World Capitals Quest",
  club: "Fun Zone",
  tagline: "Sydney or Canberra? Toronto or Ottawa? Travel the world one capital at a time.",
  art: window.STORY_ART,
  guide: {
    years: "All years · any crowd", time: "30 minutes", level: "Beginner",
    about: "A quick, fun geography quiz. In 6 rounds, teams travel through Asia, Europe, the Americas, Africa and Oceania, naming capital cities, and finish with a double-points round on Indian state capitals. Many questions hide the classic trap: the biggest or most famous city is often not the capital.",
    outcomes: "Capitals of about 18 countries and states, the common capital traps, and a fun way to remember world geography.",
    tone: "Fast and lively. Before revealing a trap question, ask the room to shout their answer, then enjoy the surprise. A world map on the wall or screen makes it even better.",
    extra: [["Map moment", "If you have a projector, show each answer on a map after the reveal. Students remember places they can see."]]
  },
  words: {
    round: "Round", unlocked: "Capital", badgeLabel: "Visited",
    rulesEyebrow: "How World Capitals Quest works", rulesTitle: "See the country. Name the capital. Beat the traps.",
    learnText: "The host introduces the next continent.", crackTitle: "Answer",
    crackText: "Pick the capital on your phone, fast.",
    rulesExtra: "25 seconds each. Faster scores more. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. That trap fools almost everyone!", cracked: "got there",
    next: "Next stop →", finale: "Next →", winner: "are today’s world travellers!", endLine: "Passport stamped!"
  },
  offerEyebrow: "EduMoon Fun Zone · Traveller rank",
  offerTitle: "Your traveller rank",
  offers: [
    { min: 0.7, icon: "globe", title: "World Explorer", text: "You know your capitals. Try Guess the Place next." },
    { min: 0.45, icon: "map", title: "Frequent Flyer", text: "Strong! Learn the 7 traps below and you will rarely slip." },
    { min: 0.2, icon: "compass", title: "Tourist", text: "Good start. Look at a world map for 5 minutes tonight." },
    { min: 0, icon: "party-popper", title: "First Trip", text: "Everyone starts here. The traps catch everyone at first!" }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Fun Zone · Passport ready",
      title: "Your passport is ready. Six stops around the world, and many traps where the most famous city is not the capital. Can your team get every stamp?",
      cards: [["globe", "Five continents and India"], ["timer", "25 seconds each, faster scores more"], ["trophy", "Your score decides your traveller rank"]]
    },
    { type: "rules" },

    // ---------- Round 1: Asia ----------
    {
      type: "learn", door: 1,
      title: "Stop 1: Asia, our neighbourhood.",
      points: [["Neighbours first", "Countries around India"], ["Mountain capitals", "Some sit high in the Himalayas"], ["Fast answers", "Score more"]],
      highlightLast: true,
      side: { label: "This stop", items: [["map", "Nepal and Bhutan", ""], ["map", "Bangladesh", ""], ["map", "South Asia", ""]] }
    },
    WC(1, "Asia", {
      prompt: "What is the capital of Nepal?",
      options: ["Pokhara", "Lhasa", "Kathmandu", "Thimphu"], answer: 2,
      hint: "Home of the famous Durbar Square.",
      note: "Kathmandu. Thimphu is Bhutan’s capital, and Lhasa is in Tibet.", badge: "map"
    }),
    WC(1, "Asia", {
      prompt: "What is the capital of Bangladesh?",
      options: ["Chittagong", "Dhaka", "Khulna", "Sylhet"], answer: 1,
      hint: "On the Buriganga river.",
      note: "Dhaka, one of the most densely populated cities in the world.", badge: "map"
    }),
    WCN(1, "Asia", {
      prompt: "SAARC is a group of South Asian countries including India, Nepal, Bhutan and Sri Lanka. How many member countries does it have?",
      answer: 8,
      hint: "Afghanistan, Bangladesh, Bhutan, India, Maldives, Nepal, Pakistan, Sri Lanka.",
      note: "8 member countries.", badge: "users",
      board: true, boardLabel: "after Stop 1"
    }),

    // ---------- Round 2: Europe ----------
    {
      type: "learn", door: 2,
      title: "Stop 2: Europe. Watch for the traps.",
      points: [["Famous cities", "Not always capitals"], ["Trap 1", "Turkey’s biggest city is not its capital"], ["Trap 2", "Switzerland’s famous cities are not its capital"]],
      highlightLast: true,
      side: { label: "This stop", items: [["map", "Turkey", ""], ["map", "Switzerland", ""], ["map", "Spain", ""]] }
    },
    WC(2, "Europe", {
      prompt: "What is the capital of Turkey?",
      options: ["Ankara", "Istanbul", "Izmir", "Antalya"], answer: 0,
      hint: "Not the biggest city.",
      note: "Ankara. Istanbul is bigger and more famous, but Ankara has been the capital since 1923.", badge: "landmark"
    }),
    WC(2, "Europe", {
      prompt: "What is the capital city of Switzerland?",
      options: ["Zurich", "Geneva", "Basel", "Bern"], answer: 3,
      hint: "The smallest of these four big names.",
      note: "Bern is the federal city where the government sits. Zurich and Geneva are bigger.", badge: "landmark"
    }),
    WC(2, "Europe", {
      prompt: "What is the capital of Spain?",
      options: ["Barcelona", "Seville", "Madrid", "Valencia"], answer: 2,
      hint: "Right in the centre of the country.",
      note: "Madrid, almost exactly in the middle of Spain.", badge: "map",
      board: true, boardLabel: "after Stop 2"
    }),

    // ---------- Round 3: The Americas ----------
    {
      type: "learn", door: 3,
      title: "Stop 3: the Americas.",
      points: [["North America", "Two big traps here"], ["South America", "A capital built from scratch"], ["Think government", "Where does the government sit?"]],
      highlightLast: true,
      side: { label: "This stop", items: [["map", "Canada", ""], ["map", "Brazil", ""], ["map", "United States", ""]] }
    },
    WC(3, "The Americas", {
      prompt: "What is the capital of Canada?",
      options: ["Ottawa", "Toronto", "Vancouver", "Montreal"], answer: 0,
      hint: "Not the biggest city.",
      note: "Ottawa. Toronto is the largest city, but Ottawa is the capital.", badge: "landmark"
    }),
    WC(3, "The Americas", {
      prompt: "What is the capital of Brazil?",
      options: ["Rio de Janeiro", "São Paulo", "Salvador", "Brasília"], answer: 3,
      hint: "A planned city built in the 1950s.",
      note: "Brasília, built inland and made the capital in 1960. Rio was the capital before.", badge: "landmark"
    }),
    WC(3, "The Americas", {
      prompt: "What is the capital of the United States?",
      options: ["Washington, D.C.", "New York", "Los Angeles", "Chicago"], answer: 0,
      hint: "Home of the White House.",
      note: "Washington, D.C. New York is the biggest city.", badge: "landmark",
      board: true, boardLabel: "after Stop 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Name a country whose most famous city is not its capital. Can you think of one we have not used?", note: "The room checks. 15 seconds.", points: 100 },

    // ---------- Round 4: Africa ----------
    {
      type: "learn", door: 4,
      title: "Stop 4: Africa.",
      points: [["54 countries", "The continent with the most countries"], ["Planned capitals", "Some countries built new capitals"], ["Rivers and coasts", "Many capitals sit on them"]],
      highlightLast: true,
      side: { label: "This stop", items: [["map", "Kenya", ""], ["map", "Egypt", ""], ["map", "Nigeria", ""]] }
    },
    WC(4, "Africa", {
      prompt: "What is the capital of Kenya?",
      options: ["Mombasa", "Kisumu", "Nakuru", "Nairobi"], answer: 3,
      hint: "Famous for a national park inside the city.",
      note: "Nairobi has a national park with wildlife just outside the city centre.", badge: "map"
    }),
    WC(4, "Africa", {
      prompt: "What is the capital of Egypt?",
      options: ["Alexandria", "Luxor", "Giza", "Cairo"], answer: 3,
      hint: "On the river Nile, near the pyramids.",
      note: "Cairo. The pyramids are at Giza, right next to it.", badge: "landmark"
    }),
    WC(4, "Africa", {
      prompt: "What is the capital of Nigeria?",
      options: ["Lagos", "Abuja", "Kano", "Ibadan"], answer: 1,
      hint: "Not the biggest city.",
      note: "Abuja became the capital in 1991. Lagos is the largest city.", badge: "landmark",
      board: true, boardLabel: "after Stop 4"
    }),

    // ---------- Round 5: Oceania and more ----------
    {
      type: "learn", door: 5,
      title: "Stop 5: Oceania and more traps.",
      points: [["Australia", "The most famous trap of all"], ["New Zealand", "Not its biggest city either"], ["Pakistan", "A planned capital"]],
      highlightLast: true,
      side: { label: "This stop", items: [["map", "Australia", ""], ["map", "New Zealand", ""], ["map", "Pakistan", ""]] }
    },
    WC(5, "Oceania and More", {
      prompt: "What is the capital of Australia?",
      options: ["Canberra", "Sydney", "Melbourne", "Perth"], answer: 0,
      hint: "Built as a compromise between two big cities.",
      note: "Canberra, a planned city between Sydney and Melbourne, which both wanted to be the capital.", badge: "landmark"
    }),
    WC(5, "Oceania and More", {
      prompt: "What is the capital of New Zealand?",
      options: ["Wellington", "Auckland", "Christchurch", "Queenstown"], answer: 0,
      hint: "At the southern tip of the North Island.",
      note: "Wellington. Auckland is the largest city.", badge: "landmark"
    }),
    WC(5, "Oceania and More", {
      prompt: "What is the capital of Pakistan?",
      options: ["Karachi", "Lahore", "Islamabad", "Peshawar"], answer: 2,
      hint: "A planned city built in the 1960s.",
      note: "Islamabad. Karachi is the largest city and was the first capital.", badge: "map",
      board: true, boardLabel: "after Stop 5"
    }),

    // ---------- Round 6: Indian state capitals (double) ----------
    {
      type: "learn", door: 6,
      title: "Final stop: home. Indian state capitals. Double points!",
      points: [["Long names", "Some capitals have long official names"], ["Northeast", "Learn these; they come up in exams"], ["Last chance", "Double points can change the board"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["map", "Indian states", "East, south, northeast"], ["mic", "Then the final challenge", "Capital rapid fire"]] }
    },
    WC(6, "Indian States", {
      double: true,
      prompt: "What is the capital of Kerala?",
      options: ["Kochi (Ernakulam)", "Thiruvananthapuram", "Kozhikode (Calicut)", "Thrissur (Trichur)"], answer: 1,
      hint: "Near the southern tip of India.",
      note: "Thiruvananthapuram. Kochi is the biggest port city.", badge: "landmark"
    }),
    WC(6, "Indian States", {
      double: true,
      prompt: "What is the capital of Odisha?",
      options: ["Cuttack", "Bhubaneswar", "Puri", "Rourkela"], answer: 1,
      hint: "Known as the Temple City.",
      note: "Bhubaneswar. Cuttack was the capital until 1948.", badge: "landmark"
    }),
    WC(6, "Indian States", {
      double: true,
      prompt: "What is the capital of Arunachal Pradesh?",
      options: ["Tawang", "Shillong", "Itanagar", "Gangtok"], answer: 2,
      hint: "Shillong and Gangtok are capitals of other states.",
      note: "Itanagar. Shillong is Meghalaya’s capital and Gangtok is Sikkim’s.", badge: "map",
      board: true, boardLabel: "after Stop 6"
    }),

    // ---------- Final challenge, rank, take-home ----------
    { type: "speak", eyebrow: "Final challenge · fastest team wins +200", prompt: "Capital rapid fire: the host names a country or state; the first team to shout the right capital scores. Best of five.", note: "Try: Japan, Germany, Egypt, Rajasthan, Sikkim.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "Capital Traps", note: "Screenshot this. Test your family tonight.", items: TRAPS },
    {
      type: "end",
      joinTitle: "Join the EduMoon Fun Zone",
      joinText: "Quizzes, party games and brain teasers every week. Come for the fun, stay for the people.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
