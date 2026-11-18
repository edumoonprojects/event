// Number Ninja (EduMoon Fun Zone). For all years and any crowd.
// A mental maths speed game with a trick for every round: ×11, ×5, squares ending in 5, quick percentages, doubling and halving, and divisibility checks. Most answers are typed numbers.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const NN = (round, name, extra) => Object.assign({ type: "door", kind: "number", time: 35, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const NC = (round, name, extra) => NN(round, name, Object.assign({ kind: "choice", time: 30 }, extra));

// The take-home card: 8 mental maths tricks.
const TRICKS = [
  ["× 11 (two digits)", "Split the digits and put their sum in the middle: 34 × 11 = 3(3+4)4 = 374."],
  ["× 5", "Multiply by 10, then halve: 48 × 5 = 480 ÷ 2 = 240."],
  ["Squares ending in 5", "35²: 3 × 4 = 12, then add 25 → 1225."],
  ["10% and 5%", "10%: move the decimal one place. 5% is half of that."],
  ["Swap percentages", "8% of 50 = 50% of 8 = 4."],
  ["Double and halve", "16 × 25 = 8 × 50 = 4 × 100 = 400."],
  ["Divisible by 3", "Add the digits. If the sum divides by 3, so does the number."],
  ["Divisible by 4", "Check only the last two digits."]
];

window.GAME = {
  id: "number-ninja",
  title: "Number Ninja",
  club: "Fun Zone",
  tagline: "No calculators. Six tricks. Become a mental maths ninja.",
  art: window.STORY_ART,
  guide: {
    years: "All years · any crowd", time: "30 minutes", level: "Medium",
    about: "A fast mental maths game. Each round teaches one trick, then teams race to type answers on their phones: multiplying by 11 and by 5, squaring numbers that end in 5, quick percentages, doubling and halving, and divisibility checks. Speed points make it exciting, and the tricks help in aptitude tests too.",
    outcomes: "Six mental maths tricks students can use in aptitude tests, shopping and daily life, and more confidence with numbers.",
    tone: "Some students fear maths. Make it a game: show each trick on the board with one example, then let them try. Celebrate speed, but also the team that explains the trick back to the room.",
    extra: [["Aptitude link", "These tricks save real time in placement aptitude rounds. Mention Aptitude Arena for more."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Calculated",
    rulesEyebrow: "How Number Ninja works", rulesTitle: "Learn the trick. Do it in your head. Type it fast.",
    learnText: "The host shows one mental maths trick.", crackTitle: "Calculate",
    crackText: "Work it out in your head and type the number.",
    rulesExtra: "No calculators! Faster answers score more. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Let’s see the trick again!", cracked: "calculated it",
    next: "Next round →", finale: "Next →", winner: "are today’s number ninjas!", endLine: "Your brain is faster than a calculator."
  },
  offerEyebrow: "EduMoon Fun Zone · Ninja rank",
  offerTitle: "Your ninja rank",
  offers: [
    { min: 0.7, icon: "zap", title: "Black Belt Ninja", text: "Lightning fast. Try Aptitude Arena next." },
    { min: 0.45, icon: "target", title: "Green Belt Ninja", text: "Strong! Practise one trick a day this week." },
    { min: 0.2, icon: "lightbulb", title: "White Belt Ninja", text: "Good start. Try the ×11 trick on your friends." },
    { min: 0, icon: "party-popper", title: "Ninja in Training", text: "Everyone starts here. The tricks get easier every time." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Fun Zone · No calculators",
      title: "Calculators are banned. Six secret tricks. Can your team out-calculate everyone in the room?",
      cards: [["zap", "One trick per round"], ["timer", "Type answers fast for speed points"], ["trophy", "Your score decides your ninja rank"]]
    },
    { type: "rules" },

    // ---------- Round 1: × 11 ----------
    {
      type: "learn", door: 1,
      title: "Trick 1: multiply any two-digit number by 11.",
      points: [["Split the digits", "For 34: 3 _ 4"], ["Add them in the middle", "3 + 4 = 7 → 374"], ["If the sum is 10 or more", "Carry the 1: 58 × 11 = 5(13)8 → 638"]],
      highlightLast: true,
      side: { label: "Try it", items: [["check", "23 × 11", "2(5)3 = 253"], ["check", "45 × 11", "4(9)5 = 495"], ["check", "76 × 11", "7(13)6 → 836"]] }
    },
    NN(1, "× 11", {
      prompt: "52 × 11 = ?",
      answer: 572,
      hint: "5 _ 2, with 5 + 2 in the middle.",
      note: "5(7)2 = 572.", badge: "zap"
    }),
    NN(1, "× 11", {
      prompt: "63 × 11 = ?",
      answer: 693,
      hint: "6 + 3 in the middle.",
      note: "6(9)3 = 693.", badge: "zap"
    }),
    NN(1, "× 11", {
      prompt: "87 × 11 = ?",
      answer: 957,
      hint: "8 + 7 = 15. Carry the 1.",
      note: "8(15)7 → carry 1 to the 8 → 957.", badge: "zap",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: × 5 ----------
    {
      type: "learn", door: 2,
      title: "Trick 2: multiply by 5 the easy way.",
      points: [["× 5 is the same as × 10 ÷ 2", "Because 5 is half of 10"], ["Example", "48 × 5 = 480 ÷ 2 = 240"], ["Odd numbers work too", "37 × 5 = 370 ÷ 2 = 185"]],
      highlightLast: true,
      side: { label: "Try it", items: [["check", "64 × 5", "640 ÷ 2 = 320"], ["check", "29 × 5", "290 ÷ 2 = 145"], ["check", "126 × 5", "1260 ÷ 2 = 630"]] }
    },
    NN(2, "× 5", {
      prompt: "86 × 5 = ?",
      answer: 430,
      hint: "860 ÷ 2.",
      note: "860 ÷ 2 = 430.", badge: "zap"
    }),
    NN(2, "× 5", {
      prompt: "47 × 5 = ?",
      answer: 235,
      hint: "470 ÷ 2.",
      note: "470 ÷ 2 = 235.", badge: "zap"
    }),
    NN(2, "× 5", {
      prompt: "A canteen sells 248 samosas at ₹5 each. How many rupees?",
      answer: 1240,
      hint: "2480 ÷ 2.",
      note: "₹1,240. Real-life maths, done in two seconds.", badge: "indian-rupee",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Squares ending in 5 ----------
    {
      type: "learn", door: 3,
      title: "Trick 3: square any number ending in 5.",
      points: [["Take the first part", "For 35, it is 3"], ["Multiply it by the next number", "3 × 4 = 12"], ["Add 25 at the end", "1225"]],
      highlightLast: true,
      side: { label: "Try it", items: [["check", "25²", "2 × 3 = 6 → 625"], ["check", "45²", "4 × 5 = 20 → 2025"], ["check", "85²", "8 × 9 = 72 → 7225"]] }
    },
    NN(3, "Squares Ending in 5", {
      prompt: "65² = ?",
      answer: 4225,
      hint: "6 × 7, then 25.",
      note: "6 × 7 = 42, then 25 → 4225.", badge: "sparkles"
    }),
    NN(3, "Squares Ending in 5", {
      prompt: "95² = ?",
      answer: 9025,
      hint: "9 × 10, then 25.",
      note: "9 × 10 = 90, then 25 → 9025.", badge: "sparkles"
    }),
    NN(3, "Squares Ending in 5", {
      prompt: "105² = ?",
      answer: 11025,
      hint: "10 × 11, then 25.",
      note: "10 × 11 = 110, then 25 → 11025. The trick works for bigger numbers too.", badge: "sparkles",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Teach the room the ×11 trick in 20 seconds, with your own example.", note: "Split, add in the middle, carry if needed.", points: 100 },

    // ---------- Round 4: Percentages ----------
    {
      type: "learn", door: 4,
      title: "Trick 4: quick percentages.",
      points: [["10%", "Move the decimal one place left: 10% of 640 = 64"], ["5% and 15%", "5% is half of 10%. 15% = 10% + 5%"], ["Swap trick", "8% of 50 = 50% of 8 = 4"]],
      highlightLast: true,
      side: { label: "Try it", items: [["check", "20% of 450", "2 × 45 = 90"], ["check", "15% of 200", "20 + 10 = 30"], ["check", "4% of 75", "75% of 4 = 3"]] }
    },
    NN(4, "Percentages", {
      prompt: "A ₹800 headphone has a 15% discount. How many rupees off?",
      answer: 120,
      hint: "10% is 80. 5% is 40.",
      note: "80 + 40 = ₹120 off.", badge: "tag"
    }),
    NN(4, "Percentages", {
      prompt: "12% of 25 = ?",
      answer: 3,
      hint: "Swap it: 25% of 12.",
      note: "25% of 12 is a quarter of 12 = 3.", badge: "zap"
    }),
    NN(4, "Percentages", {
      prompt: "A restaurant bill is ₹600. You want to leave a 5% tip. How many rupees?",
      answer: 30,
      hint: "10% is 60. Half of that.",
      note: "10% = 60, so 5% = ₹30.", badge: "indian-rupee",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Double and halve ----------
    {
      type: "learn", door: 5,
      title: "Trick 5: double one number, halve the other.",
      points: [["The answer stays the same", "16 × 25 = 8 × 50"], ["Keep going", "8 × 50 = 4 × 100 = 400"], ["Aim for 10s and 100s", "They are easy to multiply"]],
      highlightLast: true,
      side: { label: "Try it", items: [["check", "14 × 50", "7 × 100 = 700"], ["check", "24 × 25", "6 × 100 = 600"], ["check", "18 × 15", "9 × 30 = 270"]] }
    },
    NN(5, "Double and Halve", {
      prompt: "32 × 25 = ?",
      answer: 800,
      hint: "Halve 32 twice, double 25 twice.",
      note: "8 × 100 = 800.", badge: "zap"
    }),
    NN(5, "Double and Halve", {
      prompt: "44 × 50 = ?",
      answer: 2200,
      hint: "22 × 100.",
      note: "Halve 44, double 50: 22 × 100 = 2200.", badge: "zap"
    }),
    NN(5, "Double and Halve", {
      prompt: "16 × 35 = ?",
      answer: 560,
      hint: "8 × 70.",
      note: "8 × 70 = 560.", badge: "zap",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Divisibility (double) ----------
    {
      type: "learn", door: 6,
      title: "Trick 6: check divisibility without dividing. Double points!",
      points: [["By 3", "Add the digits: 471 → 4 + 7 + 1 = 12, so yes"], ["By 4", "Look only at the last two digits: 316 → 16, so yes"], ["By 9", "The digit sum divides by 9: 729 → 18, so yes"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["search", "Divisibility", "No dividing needed"], ["mic", "Then the final challenge", "Ninja battle"]] }
    },
    NC(6, "Divisibility", {
      double: true,
      prompt: "Which number is divisible by 3?",
      options: ["511", "822", "743", "910"], answer: 1,
      hint: "Add the digits of each.",
      note: "8 + 2 + 2 = 12, which divides by 3. The others sum to 7, 14 and 10.", badge: "search"
    }),
    NC(6, "Divisibility", {
      double: true,
      prompt: "Which number is divisible by 4?",
      options: ["7,516", "1,234", "5,618", "3,742"], answer: 0,
      hint: "Check only the last two digits.",
      note: "16 divides by 4, so 7,516 does. 34, 18 and 42 do not.", badge: "search"
    }),
    NN(6, "Divisibility", {
      double: true,
      prompt: "What is the digit sum of 9,738? (Bonus thought: is it divisible by 9?)",
      answer: 27,
      hint: "9 + 7 + 3 + 8.",
      note: "27, which divides by 9, so 9,738 is divisible by 9 (9,738 = 9 × 1,082).", badge: "check",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, ranks, take-home ----------
    { type: "speak", eyebrow: "Final challenge · fastest team wins +200", prompt: "Ninja battle: the host calls out a question. The first team to shout the right answer wins the point. Best of five.", note: "Try: 72 × 11, 55², 15% of 300, 18 × 50, 64 × 5.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "8 Mental Maths Tricks", note: "Screenshot this. Use one trick every day this week.", items: TRICKS },
    {
      type: "end",
      joinTitle: "Join the EduMoon Fun Zone",
      joinText: "Quizzes, party games and brain teasers every week. Come for the fun, stay for the people.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
