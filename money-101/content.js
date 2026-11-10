// Money 101 (EduMoon Entrepreneurship). For all years.
// Ravi got his first job. Teams help him understand his salary, budget, save, avoid debt traps and start investing.
// General money education with simple example numbers. Not personal financial advice.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const MQ = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 50, board: false, eyebrow: `Round ${round} · ${name}` }, extra);

// The take-home card: a first salary plan.
const PLAN = [
  ["Know your in-hand pay", "CTC is not your monthly salary. Check your payslip."],
  ["Split it with a simple rule", "One example: about 50% needs, 30% wants, 20% savings."],
  ["Save first, spend later", "Move savings on salary day, not at the end of the month."],
  ["Build an emergency fund", "Aim for 3 to 6 months of expenses, kept safe and easy to reach."],
  ["Pay the full card bill", "Paying only the minimum due brings very high interest."],
  ["Read before any EMI", "“No-cost” EMIs can still have fees. Check the total you’ll pay."],
  ["Start small, start early", "Even small, regular amounts grow over years through compounding."],
  ["If it sounds too good, it’s a scam", "Nobody can promise to double your money in a month."]
];

window.GAME = {
  id: "money-101",
  title: "Money 101",
  club: "Entrepreneurship",
  tagline: "Ravi got his first salary. Help him not waste it.",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "35 minutes", level: "Beginner",
    about: "Ravi (from Resume Rescue and HR Round) just got his first job. In 6 rounds, teams help him understand CTC vs in-hand pay, make a simple budget, build an emergency fund and understand compounding, avoid credit card and EMI traps, learn the basics of saving and investing, and plan his first salary. The game ends with a “money personality” result and a first salary plan card.",
    outcomes: "The difference between CTC and in-hand pay, one simple budgeting rule, why emergency funds and paying card bills in full matter, how compounding works, and how to spot money scams.",
    tone: "Money can be a sensitive topic: students come from very different family situations. Never ask anyone about their family’s income or debts. Keep examples about Ravi.",
    extra: [["Important", "This is general money education, not financial advice. All salaries, rates and amounts are simple examples to explain the ideas; real numbers vary by company, tax rules and over time. If students ask about their own situation, suggest they talk to their family or a qualified adviser."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Money smart",
    rulesEyebrow: "How Money 101 works", rulesTitle: "Learn it. Choose wisely. Grow Ravi’s money.",
    learnText: "The host explains one money idea.", crackTitle: "Choose",
    crackText: "Pick the smartest choice on your phone and lock it in.",
    rulesExtra: "Speak (optional): <b>+100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Lots of people learn it the hard way!", cracked: "got it right",
    next: "Next round →", finale: "Next →", winner: "are today’s money masters!", endLine: "Ravi’s first salary is in safe hands!"
  },
  offerEyebrow: "EduMoon Entrepreneurship · Money check",
  offerTitle: "Your money personality",
  offers: [
    { min: 0.7, icon: "landmark", title: "The Planner", text: "You’d make your first salary work hard. Share the card with a friend." },
    { min: 0.45, icon: "chart-column", title: "The Saver", text: "Strong! Learn more about compounding and you’re set." },
    { min: 0.2, icon: "clock", title: "The Learner", text: "Good start. Read the first salary plan tonight." },
    { min: 0, icon: "book-open", title: "The Spender", text: "Everyone starts here. One rule from the card is enough to begin." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Entrepreneurship · Money 101",
      title: "Ravi cracked the HR round. His offer letter says ₹6 LPA. His first salary arrives next week. Can your team help him not waste it?",
      cards: [["file-text", "CTC, budgets, savings and debt traps"], ["lightbulb", "Choose the smartest money move"], ["landmark", "Leave with a first salary plan"]]
    },
    { type: "rules" },

    // ---------- Round 1: CTC vs in-hand ----------
    {
      type: "learn", door: 1,
      title: "CTC is not the money you get every month.",
      points: [["CTC = Cost to Company", "Everything the company spends on you in a year"], ["It includes things you don’t get monthly", "PF contributions, insurance, sometimes bonuses"], ["In-hand = what reaches your bank", "After PF, tax and other deductions. Always lower than CTC ÷ 12"]],
      highlightLast: true,
      side: { label: "Where the difference goes (example)", items: [["landmark", "Provident Fund (PF)", "Retirement savings, still yours"], ["file-text", "Income tax", "Depends on salary and tax rules"], ["star", "Bonus or variable pay", "Paid later, maybe not at all"]] }
    },
    MQ(1, "CTC vs In-Hand", {
      prompt: "Ravi’s offer says “CTC: ₹6 LPA”. What will his monthly in-hand salary be?",
      options: ["More than ₹50,000", "₹6 lakh every month", "Exactly ₹50,000", "Less than ₹50,000, after PF, tax and other deductions"], answer: 3,
      hint: "₹6 lakh ÷ 12 is ₹50,000. Then what gets taken out?",
      note: "Less than ₹50,000. The exact amount depends on the company’s salary structure and tax. The payslip shows it clearly.", badge: "file-text"
    }),
    MQ(1, "CTC vs In-Hand", {
      prompt: "Which part of CTC is still Ravi’s money, even though it’s not in his monthly salary?",
      options: ["The office electricity bill", "None of it", "Provident Fund (PF)", "Income tax"], answer: 2,
      hint: "Which one is savings in his own name?",
      note: "PF is retirement savings in his name. It’s deducted every month but still belongs to him.", badge: "landmark"
    }),
    MQ(1, "CTC vs In-Hand", {
      prompt: "Two offers: the first says ₹7 LPA with ₹1.5 lakh of “variable bonus”, the second says ₹6.5 LPA, all fixed. What should Ravi check?",
      options: ["The fixed part of each, and how the bonus is decided", "Only the company logo", "Which one his friend took", "Nothing, A is bigger"], answer: 0,
      hint: "Is the bonus guaranteed?",
      note: "The first offer’s fixed pay is ₹5.5 lakh, less than the second’s ₹6.5 lakh. Variable pay may not come in full. Compare the fixed parts.", badge: "search",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Budgeting ----------
    {
      type: "learn", door: 2,
      title: "A budget is just a plan for your money before it’s gone.",
      points: [["Needs", "Rent, food, travel, phone bill: things you can’t skip"], ["Wants", "Eating out, shopping, subscriptions, trips"], ["Savings", "Money for later. Move it first, on salary day"]],
      highlightLast: true,
      side: { label: "One simple example rule", items: [["route", "About 50%", "Needs"], ["heart", "About 30%", "Wants"], ["landmark", "About 20%", "Savings"]] }
    },
    MQ(2, "Budgeting", {
      kind: "number", time: 60,
      prompt: "Ravi’s in-hand salary is ₹40,000. With the 50 / 30 / 20 example rule, how much goes to savings each month, in rupees?",
      answer: 8000,
      hint: "20% of ₹40,000.",
      trace: [["Needs 50%", "₹20,000"], ["Wants 30%", "₹12,000"], ["Savings 20%", "₹8,000"]],
      note: "₹8,000. The exact split can change with rent and family needs, but having any plan beats having none.", badge: "landmark"
    }),
    MQ(2, "Budgeting", {
      prompt: "When is the best time for Ravi to move his savings?",
      options: ["At the end of the month, whatever is left", "On salary day, before he spends anything", "Only when he remembers", "Once a year"], answer: 1,
      hint: "What usually is left at the end of the month?",
      note: "“Pay yourself first.” Saving on salary day means it actually happens. An automatic transfer makes it easy.", badge: "clock"
    }),
    MQ(2, "Budgeting", {
      prompt: "Which of these is a WANT, not a need?",
      options: ["Rent", "Monthly bus pass to work", "A third streaming subscription", "Groceries"], answer: 2,
      hint: "Which one could he skip without any real problem?",
      note: "Subscriptions add up quietly. Check them every few months and cancel the ones you don’t use.", badge: "film",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Saving and compounding ----------
    {
      type: "learn", door: 3,
      title: "Compounding: your money earns money, then that money earns too.",
      points: [["Emergency fund first", "3 to 6 months of expenses, kept safe and easy to reach"], ["Compounding", "Returns get added, and next year you earn on the bigger amount"], ["Time is the secret", "Starting early matters more than starting big"]],
      highlightLast: true,
      side: { label: "₹1,000 growing at 10% a year (example)", items: [["chart-column", "After 1 year", "₹1,100"], ["chart-column", "After 2 years", "₹1,210, not ₹1,200"], ["rocket", "After 20 years", "About ₹6,700"]] }
    },
    MQ(3, "Saving", {
      prompt: "What is an emergency fund for?",
      options: ["A holiday", "Surprises like a medical bill or losing a job, so you don’t have to borrow", "Investing in shares", "A new phone"], answer: 1,
      hint: "Think “emergency”.",
      note: "It’s a cushion so a bad month doesn’t turn into debt. Keep it somewhere safe and easy to reach.", badge: "shield"
    }),
    MQ(3, "Saving", {
      kind: "number", time: 70,
      prompt: "₹1,000 grows at 10% a year, compounded. How much is it after 2 years, in rupees?",
      answer: 1210,
      hint: "Year 1: 1,000 + 10%. Year 2: add 10% of the NEW amount.",
      trace: [["Year 1", "1,000 + 100 = 1,100"], ["Year 2", "1,100 + 110 = 1,210"]],
      note: "₹1,210. The extra ₹10 is interest on interest. Over 20 or 30 years, that effect becomes huge.", badge: "chart-column"
    }),
    MQ(3, "Saving", {
      prompt: "Priya starts saving ₹2,000 a month at 22. Arjun starts the same amount at 32. Same returns. At 60, who has more?",
      options: ["Priya, by a lot, because her money had 10 more years to compound", "Same amount", "Neither", "Arjun, he’s older"], answer: 0,
      hint: "Who gave compounding more time?",
      note: "Priya, by far. The extra 10 years at the start make the biggest difference of all.", badge: "clock",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Explain compounding to the room using a simple example, like a mango tree.", note: "If someone at home asked “what’s compounding?”, what would you say?", points: 100 },

    // ---------- Round 4: Credit cards and EMIs ----------
    {
      type: "learn", door: 4,
      title: "Credit cards are useful, until you pay only the minimum.",
      points: [["Pay the full bill", "Pay the total amount by the due date, and there’s usually no interest"], ["The minimum due trap", "Pay only the minimum, and the rest gets very high interest, often over 30% a year"], ["“No-cost” EMI", "Can still have processing fees or a lost discount. Check the total you’ll pay"]],
      highlightLast: true,
      side: { label: "Warning signs", items: [["alarm-clock", "Paying one card with another", "Stop and ask for help"], ["x", "3 EMIs at once", "Too much of next year’s salary already spent"], ["search", "Not reading the terms", "Fees hide there"]] }
    },
    MQ(4, "Cards and EMIs", {
      prompt: "Ravi’s card bill is ₹20,000. The “minimum due” is ₹1,000. What should he pay?",
      options: ["₹1,000, the bank said that’s enough", "The full ₹20,000 by the due date, if he can", "Nothing this month", "₹500"], answer: 1,
      hint: "What happens to the ₹19,000 he doesn’t pay?",
      note: "Paying only the minimum keeps him out of late fees, but the rest gets very high interest. Pay in full whenever possible.", badge: "file-text"
    }),
    MQ(4, "Cards and EMIs", {
      prompt: "A ₹60,000 phone is on “No-cost EMI, 12 months”. What should Ravi check first?",
      options: ["How many likes the phone has", "Only the colour", "The total he’ll pay, including any processing fee, and whether a discount is lost by choosing EMI", "Nothing, no-cost means free"], answer: 2,
      hint: "Is “no-cost” always completely free?",
      note: "Some no-cost EMIs add a processing fee or remove a cash discount. Always compare the total amount.", badge: "search"
    }),
    MQ(4, "Cards and EMIs", {
      prompt: "Which is the biggest warning sign of a debt problem?",
      options: ["Having an emergency fund", "Using a budget app", "Paying the full card bill every month", "Using one credit card to pay another card’s bill"], answer: 3,
      hint: "Which one means the debt is growing, not shrinking?",
      note: "Paying debt with more debt makes it grow fast. That’s the moment to stop, cut spending and ask for help.", badge: "alarm-clock",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Investing basics ----------
    {
      type: "learn", door: 5,
      title: "Saving keeps money safe. Investing helps it grow, with some risk.",
      points: [["Fixed deposit (FD)", "Low risk, fixed interest, good for safety"], ["Mutual funds and SIPs", "Invest a fixed amount every month. Market-linked: can go up or down"], ["Risk and return go together", "Higher possible returns always come with higher risk"]],
      highlightLast: true,
      side: { label: "Scam signals", items: [["x", "“Double your money in 30 days”", "Always a scam"], ["x", "“Guaranteed high returns”", "Real investments can’t promise that"], ["x", "Telegram tips, crypto “gurus”", "If they’re so rich, why are they selling tips?"]] }
    },
    MQ(5, "Investing Basics", {
      prompt: "What is a SIP?",
      options: ["A type of loan", "A Systematic Investment Plan: investing a fixed amount regularly, usually monthly, in a mutual fund", "A government tax", "A savings account"], answer: 1,
      hint: "Think “a fixed amount, every month”.",
      note: "A SIP builds the habit of investing small amounts regularly. The value can go up and down with the market.", badge: "chart-column"
    }),
    MQ(5, "Investing Basics", {
      prompt: "A Telegram group promises: “Invest ₹10,000, get ₹20,000 in 30 days. Guaranteed.” What is it?",
      options: ["A government scheme", "A normal bank FD", "A great opportunity", "Almost certainly a scam"], answer: 3,
      hint: "Remember Scam or Safe.",
      note: "Nobody can guarantee to double your money in a month. Early “profits” are bait to make you invest more.", badge: "shield"
    }),
    MQ(5, "Investing Basics", {
      prompt: "Which statement about risk and return is true?",
      options: ["Higher possible returns usually come with higher risk", "Investments with high returns have no risk", "FDs are riskier than shares", "Risk doesn’t matter if you’re young"], answer: 0,
      hint: "Why does an FD pay less than what shares can earn?",
      note: "There’s no high return without risk. Anyone who says otherwise is selling something.", badge: "lightbulb",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: The first salary plan (double) ----------
    {
      type: "learn", door: 6,
      title: "Put it all together: Ravi’s first salary.",
      points: [["Needs first", "Rent, food, travel and bills"], ["Save on salary day", "Emergency fund first, then regular investing"], ["Enjoy some, guilt-free", "A plan includes wants. That’s what makes it last"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game!"], ["landmark", "Real first-salary choices", "What would you do?"], ["star", "Then your money personality", "Planner, Saver, Learner…"]] }
    },
    MQ(6, "First Salary", {
      double: true,
      prompt: "Ravi’s first ₹40,000 arrives. Which plan is smartest?",
      options: ["Lend it all to a friend", "Leave it all in the account and see what happens", "Buy a new phone on EMI the same day", "Pay needs, move ₹8,000 to savings on day one, spend some on a treat for family, track the rest"], answer: 3,
      hint: "Needs, savings first, then some fun.",
      note: "A plan with needs, savings and a little joy is one he can actually follow every month.", badge: "check"
    }),
    MQ(6, "First Salary", {
      double: true,
      prompt: "Ravi has no emergency fund yet and wants to start a SIP. What should he do first?",
      options: ["Do neither", "Put everything in the SIP", "Build the emergency fund first, then start a small SIP", "Borrow money to invest more"], answer: 2,
      hint: "What happens if he has a medical bill next month?",
      note: "Safety first. With an emergency fund, he won’t have to break his investments or borrow when something goes wrong.", badge: "shield"
    }),
    MQ(6, "First Salary", {
      double: true,
      prompt: "A colleague says: “Take a personal loan and invest it in this stock, it will surely go up.” Ravi should…",
      options: ["Say no. Borrowing to invest in something “sure” is very risky, and nothing in markets is sure", "Take a bigger loan", "Ask for a credit card instead", "Take the loan quickly"], answer: 0,
      hint: "What if the stock goes down? He still owes the loan.",
      note: "Loans must be repaid with interest no matter what the stock does. Never borrow to bet on “sure things”.", badge: "alarm-clock",
      board: true, boardLabel: "after Round 6"
    }),

    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "In 30 seconds: what will YOU do on your first salary day?", note: "Use at least two ideas from today. The room claps; the host picks the best one.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "Your First Salary Plan", note: "Screenshot this. General guidance, not financial advice. Real numbers vary.", items: PLAN },
    {
      type: "end",
      joinTitle: "Join the EduMoon Skills Club",
      joinText: "Money, careers and life skills games every week. Get smarter, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
