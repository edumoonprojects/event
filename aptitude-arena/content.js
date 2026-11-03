// Aptitude Arena (EduMoon Skills Club). For all years, aimed at placement tests.
// 6 rounds of the quant and reasoning questions that appear in almost every placement aptitude test, with a shortcut each round.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const AQ = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 60, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const AN = (round, name, extra) => AQ(round, name, Object.assign({ kind: "number", time: 75 }, extra));

// The take-home card: 8 shortcuts for placement aptitude tests.
const SHORTCUTS = [
  ["10% of anything", "Move the decimal one place left. 10% of 640 = 64. Then build: 5% is half, 15% is 10% + 5%."],
  ["Percent change", "(change ÷ original) × 100. Always divide by the ORIGINAL value."],
  ["Up x% then down x%", "Always a loss of x²/100 %. Up 20, down 20 = 4% loss."],
  ["Averages", "Average × count = total. Work with totals, not averages."],
  ["km/h to m/s", "Multiply by 5/18. 72 km/h = 20 m/s. (m/s to km/h: × 18/5)"],
  ["Work together", "A in a days, B in b days: together ab ÷ (a + b) days."],
  ["Simple interest", "P × R × T ÷ 100."],
  ["Clock angle", "|30H − 5.5M| degrees, where H is the hour and M the minutes."]
];

window.GAME = {
  id: "aptitude-arena",
  title: "Aptitude Arena",
  club: "Skills Club",
  tagline: "The first round of almost every placement drive is an aptitude test. Learn the shortcuts, then race the clock.",
  art: window.STORY_ART,
  guide: {
    years: "All years (most useful for 3rd and final year)", time: "40 minutes", level: "Medium",
    about: "Placement drives usually start with an online aptitude test, and many students lose marks to time, not difficulty. In 6 rounds, teams learn one shortcut and then solve real placement-style questions: percentages, ratios and averages, speed and work, profit and interest, reasoning, and a mixed mock test. Most answers are typed numbers, so there is no guessing from options.",
    outcomes: "8 shortcuts that save minutes in placement tests, and the confidence to attempt quant questions instead of skipping them.",
    tone: "Some students fear maths. Show the shortcut on the learn screen slowly, and do one example out loud. After each reveal, ask a team to explain how they solved it: that’s often a faster method than yours.",
    extra: [["Paper and pens", "Keep rough paper on every table. Placement tests allow it, and so does this game."],
      ["Number answers", "Typed answers must be exact. Remind teams to type only the number, without units or the % sign."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Solved",
    rulesEyebrow: "How Aptitude Arena works", rulesTitle: "Learn the shortcut. Solve fast. Beat the clock.",
    learnText: "The host shows one shortcut. Note it down.", crackTitle: "Solve",
    crackText: "Work it out on paper, type or pick the answer, and lock it in.",
    rulesExtra: "Faster answers score more. Speak (optional): <b>+100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. That’s why we practise!", cracked: "solved it",
    next: "Next round →", finale: "Next →", winner: "top the aptitude test!", endLine: "Practise 10 questions a day and you’ll clear any aptitude round."
  },
  offerEyebrow: "EduMoon Skills Club · Aptitude results",
  offerTitle: "Your aptitude test result",
  offers: [
    { min: 0.7, icon: "trophy", title: "Cleared with distinction", text: "You’re placement-test ready. Now practise under a timer, 20 questions in 20 minutes." },
    { min: 0.45, icon: "badge-check", title: "Cleared", text: "Strong! Revise the shortcut card and do one mock test this week." },
    { min: 0.2, icon: "clock", title: "Borderline", text: "Close. Focus on percentages and averages first; they appear the most." },
    { min: 0, icon: "book-open", title: "Practice round", text: "Everyone starts here. 10 questions a day for a month changes everything." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Skills Club · Aptitude Arena",
      title: "Placement drive, round 1: 60 questions, 60 minutes. Most students run out of time. Can your team beat the clock?",
      cards: [["chart-column", "Real placement-style questions"], ["zap", "A shortcut every round"], ["trophy", "Your score decides your test result"]]
    },
    { type: "rules" },

    // ---------- Round 1: Percentages ----------
    {
      type: "learn", door: 1,
      title: "Percentages: build from 10%.",
      points: [["10% is easy", "Move the decimal one place: 10% of 640 = 64"], ["Build the rest", "5% is half of 10%. 15% = 10% + 5%. 1% = move two places"], ["Percent change", "Change ÷ original × 100. Divide by where you STARTED"]],
      highlightLast: true
    },
    AN(1, "Percentages", {
      prompt: "What is 15% of 640? Type the number.",
      answer: 96,
      hint: "10% is 64. 5% is half of that.",
      note: "10% = 64, 5% = 32, so 15% = 96. No calculator needed.", badge: "target"
    }),
    AN(1, "Percentages", {
      prompt: "A phone’s price goes up from ₹400 to ₹500. By what percent did it go up? Type the number.",
      answer: 25,
      hint: "Change is ₹100. Divide by the starting price.",
      note: "100 ÷ 400 × 100 = 25%. A common trap is dividing by 500, which gives 20%.", badge: "chart-column"
    }),
    AQ(1, "Percentages", {
      prompt: "A price goes up by 20%, then the new price goes down by 20%. Overall, what happens?",
      options: ["No change", "4% gain", "4% loss", "2% loss"], answer: 2,
      hint: "Try it with ₹100.",
      note: "₹100 → ₹120 → ₹96. A 4% loss. Up x% then down x% is always a loss of x²/100 %.", badge: "zap",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Ratios and averages ----------
    {
      type: "learn", door: 2,
      title: "Averages and ratios: think in totals.",
      points: [["Average × count = total", "5 numbers with average 20 have a total of 100"], ["Ratio 3 : 5 means 8 parts", "Divide the total by 8, then multiply"], ["Work with totals", "Most average questions get easy once you find the totals"]],
      highlightLast: true
    },
    AN(2, "Ratios and Averages", {
      prompt: "The average of 5 numbers is 20. One number is removed, and the average of the rest is 18. What number was removed?",
      answer: 28,
      hint: "Total of 5 numbers, minus the total of 4 numbers.",
      note: "5 × 20 = 100. 4 × 18 = 72. Removed: 100 − 72 = 28.", badge: "search"
    }),
    AN(2, "Ratios and Averages", {
      prompt: "₹1,200 is shared between Anu and Babu in the ratio 3 : 5. How much does Anu get? Type the number.",
      answer: 450,
      hint: "3 + 5 = 8 parts. What is one part?",
      note: "One part = 1200 ÷ 8 = 150. Anu gets 3 parts = ₹450, Babu gets ₹750.", badge: "landmark"
    }),
    AQ(2, "Ratios and Averages", {
      prompt: "The ages of Ravi and Sita are in the ratio 3 : 4. Their ages add up to 35. How old is Ravi?",
      options: ["20", "12", "21", "15"], answer: 3,
      hint: "7 parts make 35.",
      note: "One part = 35 ÷ 7 = 5. Ravi is 3 × 5 = 15, Sita is 20.", badge: "users",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Speed and work ----------
    {
      type: "learn", door: 3,
      title: "Speed and work: two formulas cover most questions.",
      points: [["Distance = speed × time", "And km/h to m/s: multiply by 5/18"], ["Work together", "A in a days, B in b days: together ab ÷ (a + b)"], ["Check units first", "Metres or km? Seconds or hours?"]],
      highlightLast: true
    },
    AN(3, "Speed and Work", {
      prompt: "A bus travels at 60 km/h for 2.5 hours. How many km does it cover?",
      answer: 150,
      hint: "Speed × time.",
      note: "60 × 2 = 120, plus half an hour (30 km) = 150 km.", badge: "route"
    }),
    AN(3, "Speed and Work", {
      prompt: "A bike goes at 72 km/h. What is that in metres per second? Type the number.",
      answer: 20,
      hint: "Multiply by 5/18.",
      note: "72 × 5 ÷ 18 = 20 m/s. 72 and 18 cancel nicely: 72 ÷ 18 = 4, × 5 = 20.", badge: "zap"
    }),
    AQ(3, "Speed and Work", {
      prompt: "Anil can finish a project in 10 days. Bala can finish it in 15 days. Working together, how many days do they take?",
      options: ["12.5 days", "6 days", "5 days", "8 days"], answer: 1,
      hint: "ab ÷ (a + b).",
      note: "10 × 15 ÷ 25 = 6 days. Together they’re always faster than the faster person alone.", badge: "users",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Explain how your team solved one question, in 30 seconds.", note: "Was your method faster than the host’s? Teach the room.", points: 100 },

    // ---------- Round 4: Profit, loss and interest ----------
    {
      type: "learn", door: 4,
      title: "Profit, loss and interest.",
      points: [["Profit % is on the cost price", "Profit ÷ cost price × 100"], ["Discount is on the marked price", "Marked ₹1,000, 10% off: you sell at ₹900"], ["Simple interest", "P × R × T ÷ 100"]],
      highlightLast: true
    },
    AN(4, "Profit and Interest", {
      prompt: "A shopkeeper buys a pair of shoes for ₹500 and sells them for ₹600. What is the profit percent? Type the number.",
      answer: 20,
      hint: "Profit ÷ cost price.",
      note: "100 ÷ 500 × 100 = 20%. Profit percent is always calculated on the cost price.", badge: "briefcase"
    }),
    AN(4, "Profit and Interest", {
      prompt: "What is the simple interest on ₹5,000 at 8% per year for 3 years? Type the number.",
      answer: 1200,
      hint: "P × R × T ÷ 100.",
      note: "5000 × 8 × 3 ÷ 100 = ₹1,200.", badge: "landmark"
    }),
    AQ(4, "Profit and Interest", {
      prompt: "A bag is marked at ₹1,000 and sold at a 10% discount. It cost the shop ₹720. What is the profit percent?",
      options: ["20%", "25%", "18%", "28%"], answer: 1,
      hint: "First find the selling price.",
      note: "Selling price = ₹900. Profit = 900 − 720 = ₹180. 180 ÷ 720 × 100 = 25%.", badge: "target",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Reasoning ----------
    {
      type: "learn", door: 5,
      title: "Reasoning: find the rule, then apply it.",
      points: [["Coding-decoding", "Write the alphabet positions: A=1, B=2… and look for the shift"], ["Blood relations", "Draw a small family tree. Never solve it in your head"], ["Series", "Check differences, then ratios"]],
      highlightLast: true
    },
    AQ(5, "Reasoning", {
      prompt: "In a code, CAT is written as DBU. How is DOG written?",
      options: ["EPH", "CNF", "EOH", "DPH"], answer: 0,
      hint: "C → D, A → B, T → U. Each letter moves by how much?",
      note: "Each letter moves forward by 1. D → E, O → P, G → H: EPH.", badge: "key"
    }),
    AQ(5, "Reasoning", {
      prompt: "Arun is the brother of Bindu. Bindu is the sister of Chandu. Chandu is the father of Deepa. How is Arun related to Deepa?",
      options: ["Father", "Cousin", "Uncle", "Grandfather"], answer: 2,
      hint: "Draw it. Arun, Bindu and Chandu are siblings.",
      note: "Arun, Bindu and Chandu are siblings. Chandu is Deepa’s father, so Arun is Deepa’s uncle.", badge: "users"
    }),
    AN(5, "Reasoning", {
      prompt: "What comes next? 3, 9, 27, 81, ?",
      answer: 243,
      hint: "The differences grow fast. Try dividing instead.",
      note: "Each number is 3 times the one before. 81 × 3 = 243.", badge: "chart-column",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Mock test (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: the mock test. Double points.",
      points: [["Mixed questions", "Like the real test: you won’t know the topic in advance"], ["Clock angle", "|30H − 5.5M| degrees"], ["Skip, then return", "In a real test, never get stuck on one question"]],
      highlightLast: true
    },
    AN(6, "Mock Test", {
      double: true,
      prompt: "What is the angle (in degrees) between the hour hand and the minute hand at 3:30?",
      answer: 75,
      hint: "|30 × 3 − 5.5 × 30|",
      note: "|90 − 165| = 75 degrees. Many people say 90, forgetting the hour hand moves too.", badge: "clock"
    }),
    AN(6, "Mock Test", {
      double: true,
      prompt: "A train 200 metres long runs at 72 km/h. How many seconds does it take to pass a pole?",
      answer: 10,
      hint: "Convert 72 km/h to m/s first.",
      note: "72 km/h = 20 m/s. To pass a pole, the train covers its own length: 200 ÷ 20 = 10 seconds.", badge: "route"
    }),
    AQ(6, "Mock Test", {
      double: true,
      prompt: "Two coins are tossed together. What is the probability that both show heads?",
      options: ["1/2", "1/3", "3/4", "1/4"], answer: 3,
      hint: "List every outcome: HH, HT, TH, TT.",
      note: "4 equal outcomes, only HH works: 1/4. Listing the outcomes is the safest method for small probability questions.", badge: "target",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, results, take-home ----------
    { type: "speak", eyebrow: "Mental maths duel · first correct team wins +200", prompt: "No paper! 25% of 480, then 72 km/h in m/s, then 15 × 12.", note: "Answers: 120, 20, 180. The first team to shout all three correctly wins.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "8 Aptitude Shortcuts", note: "Screenshot this. Revise it the night before your placement test.", items: SHORTCUTS },
    {
      type: "end",
      joinTitle: "Join the EduMoon Skills Club",
      joinText: "Mock tests, interviews, resumes and career games every week. Get placed, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
