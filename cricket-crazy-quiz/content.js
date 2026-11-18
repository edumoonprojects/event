// Cricket Crazy Quiz (EduMoon Fun Zone). For all years and any crowd.
// India's favourite sport: rules, World Cup history, the IPL, women's cricket, cricket words and a final mixed round. All questions and explanations are written in our own words.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const CQ = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 30, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const CQN = (round, name, extra) => CQ(round, name, Object.assign({ kind: "number", time: 40 }, extra));

// The take-home card: cricket words everyone should know.
const CRICKWORDS = [
  ["Over", "6 legal balls bowled by one bowler."],
  ["LBW", "Leg Before Wicket: out when the ball would have hit the stumps but hit the batter’s body."],
  ["Duck", "Out for zero runs."],
  ["Maiden over", "An over with no runs scored off the bat or as extras charged to the bowler."],
  ["Hat-trick", "Three wickets from three balls in a row by one bowler."],
  ["Free hit", "In limited-overs cricket, the ball after a front-foot no-ball. The batter cannot be out in most ways."],
  ["Powerplay", "Overs where fewer fielders are allowed outside the inner circle."],
  ["Super over", "A one-over shootout to break a tie in limited-overs matches."]
];

window.GAME = {
  id: "cricket-crazy-quiz",
  title: "Cricket Crazy Quiz",
  club: "Fun Zone",
  tagline: "Rules, records, World Cups and the IPL. How cricket crazy is your team?",
  art: window.STORY_ART,
  guide: {
    years: "All years · any crowd", time: "30 minutes", level: "Medium",
    about: "A quiz for India’s favourite sport. In 6 rounds, teams answer questions on the basic rules, World Cup history, the IPL, women’s cricket, cricket words, and a final mixed round with a Vizag question. Some questions need a typed number. Every reveal comes with a short story.",
    outcomes: "Fun cricket knowledge, the meaning of common cricket terms, and India’s biggest cricket moments.",
    tone: "Cricket fans will be loud, and that is the point. Let the room cheer. If some students do not follow cricket, pair them with fans in teams and explain the rules round slowly. Avoid team rivalries turning into arguments.",
    extra: [["Facts check", "Records change often. This quiz uses well-known, settled facts. If a student mentions a newer record, thank them and move on."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Hit",
    rulesEyebrow: "How Cricket Crazy Quiz works", rulesTitle: "Six rounds, six overs. Score as many runs as you can.",
    learnText: "The host introduces the next over.", crackTitle: "Answer",
    crackText: "Pick your answer and lock it in.",
    rulesExtra: "Some questions need a typed number. Final over: <b>double</b>!",
    nobody: "Clean bowled! Nobody got this one.", cracked: "hit it for six",
    next: "Next over →", finale: "Next →", winner: "are today’s cricket champions!", endLine: "What a match!"
  },
  offerEyebrow: "EduMoon Fun Zone · Player of the match",
  offerTitle: "Your cricket rating",
  offers: [
    { min: 0.7, icon: "trophy", title: "Player of the Match", text: "You know your cricket. Try India Quiz next." },
    { min: 0.45, icon: "star", title: "Solid All-Rounder", text: "Strong innings! Learn the 8 words below and you are complete." },
    { min: 0.2, icon: "target", title: "Steady Batter", text: "Good start. Watch one full match with a fan friend." },
    { min: 0, icon: "party-popper", title: "Twelfth Man", text: "Everyone starts here. Today was your debut!" }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Fun Zone · Cricket Crazy",
      title: "Six overs. Rules, World Cups, the IPL, women’s cricket and cricket words. Can your team score the most runs?",
      cards: [["trophy", "6 rounds of cricket questions"], ["timer", "30 seconds each, faster scores more"], ["star", "Your score decides your cricket rating"]]
    },
    { type: "rules" },

    // ---------- Round 1: Basic rules ----------
    {
      type: "learn", door: 1,
      title: "Over 1: the basic rules.",
      points: [["Overs", "6 balls in an over"], ["Formats", "Tests over up to 5 days, ODIs 50 overs a side, T20s 20 overs a side"], ["Teams", "11 players on each side"]],
      highlightLast: true,
      side: { label: "This over", items: [["timer", "Overs and balls", ""], ["users", "Players", ""], ["list-checks", "Ways to get out", ""]] }
    },
    CQN(1, "Basic Rules", {
      prompt: "How many legal balls are there in one over?",
      answer: 6,
      hint: "Count on one hand, plus one.",
      note: "6 legal balls. Wides and no-balls are bowled again.", badge: "timer"
    }),
    CQN(1, "Basic Rules", {
      prompt: "In a T20 match, how many overs does each team bat (if not all out)?",
      answer: 20,
      hint: "It is in the name.",
      note: "20 overs each. ODIs have 50 overs each.", badge: "zap"
    }),
    CQ(1, "Basic Rules", {
      prompt: "What does LBW stand for?",
      options: ["Long Ball Wide", "Leg Before Wicket", "Last Batter Waiting", "Left Bat Wrong"], answer: 1,
      hint: "Which body part gets in the way?",
      note: "Leg Before Wicket: out when the ball would have hit the stumps but hit the batter’s body first, under certain conditions.", badge: "target",
      board: true, boardLabel: "after Over 1"
    }),

    // ---------- Round 2: World Cups ----------
    {
      type: "learn", door: 2,
      title: "Over 2: World Cup history.",
      points: [["1975", "The first men’s Cricket World Cup"], ["1983", "India’s first World Cup win"], ["2011", "India’s second, won at home"]],
      highlightLast: true,
      side: { label: "This over", items: [["trophy", "Winners", ""], ["users", "Captains", ""], ["map", "Venues", ""]] }
    },
    CQ(2, "World Cups", {
      prompt: "Who captained India to the 1983 World Cup win?",
      options: ["Sunil Gavaskar", "Ravi Shastri", "Kapil Dev", "Mohinder Amarnath"], answer: 2,
      hint: "A great all-rounder from Haryana.",
      note: "Kapil Dev. India beat the West Indies in the final at Lord’s, one of the biggest upsets in cricket.", badge: "trophy"
    }),
    CQ(2, "World Cups", {
      prompt: "Which team won the first men’s Cricket World Cup in 1975?",
      options: ["West Indies", "England", "Australia", "India"], answer: 0,
      hint: "They won the next one too.",
      note: "The West Indies won in 1975 and again in 1979.", badge: "trophy"
    }),
    CQ(2, "World Cups", {
      prompt: "In which city did India win the 2011 World Cup final?",
      options: ["Kolkata", "Chennai", "Mumbai", "Delhi"], answer: 2,
      hint: "Wankhede Stadium.",
      note: "Mumbai, at the Wankhede Stadium. MS Dhoni finished it with a six.", badge: "map",
      board: true, boardLabel: "after Over 2"
    }),

    // ---------- Round 3: The IPL ----------
    {
      type: "learn", door: 3,
      title: "Over 3: the IPL.",
      points: [["Started in 2008", "Franchise T20 cricket in India"], ["Auctions", "Teams bid for players"], ["Overseas players", "Each team can field a limited number in the playing XI"]],
      highlightLast: true,
      side: { label: "This over", items: [["trophy", "The first season", ""], ["indian-rupee", "Auctions", ""], ["globe", "Overseas players", ""]] }
    },
    CQN(3, "The IPL", {
      prompt: "In which year was the first IPL season played?",
      answer: 2008,
      hint: "A year after India won the first T20 World Cup.",
      note: "2008. India had won the first T20 World Cup in 2007, and T20 fever took off.", badge: "zap"
    }),
    CQ(3, "The IPL", {
      prompt: "Which team won the very first IPL in 2008?",
      options: ["Rajasthan Royals", "Chennai Super Kings", "Mumbai Indians", "Kolkata Knight Riders"], answer: 0,
      hint: "Led by a famous Australian leg-spinner.",
      note: "Rajasthan Royals, captained by Shane Warne, a team few expected to win.", badge: "trophy"
    }),
    CQN(3, "The IPL", {
      prompt: "In the IPL, how many overseas players can a team normally have in its playing XI?",
      answer: 4,
      hint: "Fewer than half the team.",
      note: "Four. It keeps most places for Indian players.", badge: "globe",
      board: true, boardLabel: "after Over 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "In 20 seconds, describe your favourite cricket moment like a commentator.", note: "Who, what, and the crowd’s reaction. Make it exciting.", points: 100 },

    // ---------- Round 4: Women's cricket ----------
    {
      type: "learn", door: 4,
      title: "Over 4: women’s cricket.",
      points: [["Mithali Raj", "One of the greatest batters in women’s ODIs"], ["Jhulan Goswami", "A fast bowler with a record number of ODI wickets"], ["2025", "India won the Women’s ODI World Cup at home"]],
      highlightLast: true,
      side: { label: "This over", items: [["star", "Legends", ""], ["trophy", "World Cups", ""], ["users", "Today’s stars", ""]] }
    },
    CQ(4, "Women’s Cricket", {
      prompt: "Which Indian batter scored over 7,000 runs in women’s ODIs, one of the highest totals ever?",
      options: ["Mithali Raj", "Smriti Mandhana", "Jhulan Goswami", "Shafali Verma"], answer: 0,
      hint: "She led India in two World Cup finals.",
      note: "Mithali Raj. She played international cricket for over 20 years.", badge: "star"
    }),
    CQ(4, "Women’s Cricket", {
      prompt: "Jhulan Goswami is best known as a…",
      options: ["Wicketkeeper", "Fast bowler", "Leg spinner", "Opening batter"], answer: 1,
      hint: "She took a huge number of ODI wickets.",
      note: "A fast bowler from West Bengal, among the leading wicket-takers in women’s ODI history.", badge: "zap"
    }),
    CQ(4, "Women’s Cricket", {
      prompt: "Which team did India beat in the final to win the 2025 Women’s ODI World Cup?",
      options: ["Australia", "South Africa", "England", "New Zealand"], answer: 1,
      hint: "A team from Africa.",
      note: "South Africa, in the final at Navi Mumbai. It was India’s first Women’s ODI World Cup title.", badge: "trophy",
      board: true, boardLabel: "after Over 4"
    }),

    // ---------- Round 5: Cricket words ----------
    {
      type: "learn", door: 5,
      title: "Over 5: cricket words.",
      points: [["Duck", "Out for zero"], ["Maiden", "An over with no runs"], ["Hat-trick", "Three wickets in three balls"]],
      highlightLast: true,
      side: { label: "This over", items: [["spell-check", "Words", ""], ["list-checks", "Meanings", ""], ["zap", "Fast answers", "Score more"]] }
    },
    CQ(5, "Cricket Words", {
      prompt: "A batter is out for zero runs. What is it called?",
      options: ["A maiden", "A hat-trick", "A no-ball", "A duck"], answer: 3,
      hint: "Named after an animal, because zero looks like its egg.",
      note: "A duck. Out first ball? That is a golden duck.", badge: "x"
    }),
    CQ(5, "Cricket Words", {
      prompt: "A bowler takes wickets on three balls in a row. What is it called?",
      options: ["A maiden", "A powerplay", "A super over", "A hat-trick"], answer: 3,
      hint: "Also used in football for three goals.",
      note: "A hat-trick. It is rare and always gets the crowd on its feet.", badge: "sparkles"
    }),
    CQ(5, "Cricket Words", {
      prompt: "In limited-overs cricket, what comes after a front-foot no-ball?",
      options: ["A wide", "A super over", "A free hit", "A maiden"], answer: 2,
      hint: "The batter gets a free swing.",
      note: "A free hit: the batter cannot be out in most ways on that ball, so they swing hard.", badge: "target",
      board: true, boardLabel: "after Over 5"
    }),

    // ---------- Round 6: Final over (double) ----------
    {
      type: "learn", door: 6,
      title: "Final over: double runs! Legends and home ground.",
      points: [["Legends", "Records that took decades"], ["Home ground", "Vizag’s own international stadium"], ["Last chance", "Double points can change the board"]],
      highlightLast: true,
      side: { label: "Final over", items: [["zap", "Double points", "Still anyone’s game"], ["map", "Vizag", "Home question"], ["mic", "Then the final challenge", "Commentary battle"]] }
    },
    CQN(6, "Final Over", {
      double: true,
      prompt: "How many international centuries did Sachin Tendulkar score in total?",
      answer: 100,
      hint: "A very round number.",
      note: "100 international centuries, across Tests and ODIs. He is the only player to reach it.", badge: "star"
    }),
    CQ(6, "Final Over", {
      double: true,
      prompt: "Vizag’s international cricket stadium is commonly known as the…",
      options: ["ACA-VDCA Stadium", "Eden Gardens", "Chepauk Stadium", "Wankhede Stadium"], answer: 0,
      hint: "Named after the Andhra and Visakhapatnam cricket associations.",
      note: "The ACA-VDCA Cricket Stadium in Vizag hosts international matches. Eden Gardens is in Kolkata, Chepauk in Chennai and Wankhede in Mumbai.", badge: "map"
    }),
    CQ(6, "Final Over", {
      double: true,
      prompt: "In a limited-overs match that ends in a tie, what is often used to decide the winner?",
      options: ["A coin toss", "A penalty shootout", "The team with more sixes", "A super over"], answer: 3,
      hint: "One more over each.",
      note: "A super over: each team bats one over. Exact rules can differ by tournament.", badge: "timer",
      board: true, boardLabel: "after Over 6"
    }),

    // ---------- Final challenge, rating, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best commentary wins +200", prompt: "One player per team commentates the last ball of a World Cup final, in 20 seconds, in English.", note: "Energy, clear words and the crowd. The room claps; the host picks.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "Cricket Words Everyone Should Know", note: "Screenshot this. Explain one to a friend who does not follow cricket.", items: CRICKWORDS },
    {
      type: "end",
      joinTitle: "Join the EduMoon Fun Zone",
      joinText: "Quizzes, party games and brain teasers every week. Come for the fun, stay for the people.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
