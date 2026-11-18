// Fundraising Ladder (EduMoon Entrepreneurship). Advanced: for student founders and anyone curious about startup funding.
// How startups raise money: the funding stages, equity and dilution, pre- and post-money valuation, what investors look for, money that does not cost equity, and term sheet basics. All startups and numbers are made up.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const FL = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 50, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const FLN = (round, name, extra) => FL(round, name, Object.assign({ kind: "number", time: 70 }, extra));

// The take-home card: the fundraising ladder.
const LADDER = [
  ["Bootstrapping", "Your own money and first sales. Full control, slower growth."],
  ["Grants and competitions", "Money that does not take equity. Check official scheme websites."],
  ["Angels and pre-seed", "Individuals who back early teams, often before revenue."],
  ["Seed", "Money to find product-market fit."],
  ["Series A and beyond", "Larger rounds to scale something already working."],
  ["Post-money = pre-money + investment", "Investor’s share = investment ÷ post-money."],
  ["Dilution", "Each round, everyone’s percentage shrinks. Fine if the company grows more."],
  ["Vesting", "Founders earn their shares over time, usually with a one-year cliff."]
];

window.GAME = {
  id: "fundraising-ladder",
  title: "Fundraising Ladder",
  club: "Entrepreneurship",
  tagline: "Angels, seed, Series A. How startups really raise money, and what it costs them.",
  art: window.STORY_ART,
  guide: {
    years: "All years (student founders especially)", time: "45 minutes", level: "Advanced",
    about: "Two student founders, Rhea and Sai, built a made-up campus delivery app, CampusDash. An angel investor wants to talk. In 6 rounds, teams climb the funding ladder: the stages from bootstrapping to Series A, equity and dilution, pre- and post-money valuation, what investors look for, money that does not cost equity, and term sheet basics like vesting. Number questions use simple percentages.",
    outcomes: "The funding stages, how to calculate ownership and valuation after a round, how dilution works, what investors judge, non-dilutive options, and why vesting protects co-founders.",
    tone: "Fundraising is glamorised online. Keep it real: most great businesses never raise money, and that is fine. Use a pizza for dilution: a smaller slice of a much bigger pizza can be worth more.",
    extra: [["Not financial advice", "Say clearly: this is a learning game. Real deals need careful reading and advice from experienced people."]]
  },
  words: {
    round: "Rung", unlocked: "Answer", badgeLabel: "Funded",
    rulesEyebrow: "How Fundraising Ladder works", rulesTitle: "Climb six rungs. Do the maths. Keep your company.",
    learnText: "The host explains one rung of the fundraising ladder.", crackTitle: "Decide",
    crackText: "Pick or type your answer and lock it in.",
    rulesExtra: "Many questions need a typed number. Rung 6: <b>double</b>!",
    nobody: "Nobody got this one. Founders lose real money on this!", cracked: "funded it",
    next: "Next rung →", finale: "Next →", winner: "are today’s smartest founders!", endLine: "CampusDash raised money, on fair terms."
  },
  offerEyebrow: "CampusDash · Investor decision",
  offerTitle: "The investors’ decision",
  offers: [
    { min: 0.7, icon: "rocket", title: "Term Sheet Signed", text: "You understand the money and the fine print. Build traction first, then raise." },
    { min: 0.45, icon: "trending-up", title: "Second Meeting", text: "Strong! Practise valuation and dilution maths once more." },
    { min: 0.2, icon: "lightbulb", title: "Interested, Not Yet", text: "Good start. Read the ladder card below." },
    { min: 0, icon: "book-open", title: "Come Back Later", text: "Everyone starts here. Play Startup Words first." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Entrepreneurship · The angel call",
      title: "Rhea and Sai’s campus delivery app, CampusDash, has 2,000 users. An angel investor wants to talk tomorrow. Can your team help them understand what they might be giving away?",
      cards: [["trending-up", "Stages, equity and valuation"], ["file-text", "Investors, grants and term sheets"], ["trophy", "Your score decides the investors’ decision"]]
    },
    { type: "rules" },

    // ---------- Rung 1: The ladder ----------
    {
      type: "learn", door: 1,
      title: "Startups usually raise money in stages, from small to big.",
      points: [["Bootstrapping, friends and family", "Own money and first sales"], ["Angels, pre-seed and seed", "Early believers; money to find product-market fit"], ["Series A, B, C", "Bigger rounds to scale what already works"]],
      highlightLast: true,
      side: { label: "Not every startup climbs", items: [["check", "Many great businesses", "Never raise at all"], ["indian-rupee", "Raising is not winning", "It is a tool"], ["target", "Raise for a reason", "To grow something proven"]] }
    },
    FL(1, "The Ladder", {
      prompt: "CampusDash has 2,000 users but little revenue. Which stage fits best?",
      options: ["Series C", "Stock market listing", "No funding is ever possible", "Angel or pre-seed"], answer: 3,
      hint: "Early, with some traction.",
      note: "Angels and pre-seed investors back early teams with early signs of demand.", badge: "rocket"
    }),
    FL(1, "The Ladder", {
      prompt: "What is a Series A round usually for?",
      options: ["Paying for the first idea", "Scaling what already works", "Printing business cards", "Buying the founders cars"], answer: 1,
      hint: "Later stage.",
      note: "Series A is usually for growing a product that already has clear demand.", badge: "trending-up"
    }),
    FL(1, "The Ladder", {
      prompt: "Which statement is TRUE?",
      options: ["Many good businesses never raise", "Every startup must raise money to succeed", "Raising money means the startup has succeeded", "Investors only fund famous founders"], answer: 0,
      hint: "Funding is a tool, not a trophy.",
      note: "Many profitable businesses grow from sales alone. Raising money is a choice with costs.", badge: "check",
      board: true, boardLabel: "after Rung 1"
    }),

    // ---------- Rung 2: Equity and dilution ----------
    {
      type: "learn", door: 2,
      title: "Investors give money for a share of the company. Everyone’s share shrinks.",
      points: [["Equity", "Ownership, in percent"], ["Dilution", "New shares for investors mean smaller percentages for existing owners"], ["Bigger pie", "A smaller slice of a much bigger company can be worth more"]],
      highlightLast: true,
      side: { label: "Pizza view", items: [["chart-column", "Before", "Founders own 100% of a small pizza"], ["users", "After a round", "Founders own 80% of a bigger pizza"], ["check", "The goal", "Grow the pizza faster than the slice shrinks"]] }
    },
    FLN(2, "Equity and Dilution", {
      prompt: "Rhea and Sai own 100% together. An angel takes 20%. What percentage do the founders own together now?",
      answer: 80,
      hint: "100 − 20.",
      note: "80%. If they split it equally, 40% each.", badge: "users"
    }),
    FLN(2, "Equity and Dilution", {
      prompt: "After that, founders own 80%. A seed investor then takes 25% of the company. What percentage do the founders own now?",
      answer: 60,
      hint: "Founders keep 75% of their 80%.",
      note: "80% × 0.75 = 60%. Each round dilutes everyone who was there before.", badge: "chart-column"
    }),
    FL(2, "Equity and Dilution", {
      prompt: "Founders’ share fell from 100% to 60%, but the company is now worth 10 times more. Is that bad?",
      options: ["Yes, losing any percentage is always bad", "Not necessarily; it may be worth more", "Yes, they now own nothing", "It does not matter at all"], answer: 1,
      hint: "Slice vs pizza.",
      note: "60% of a much bigger company can be worth far more than 100% of a tiny one.", badge: "trending-up",
      board: true, boardLabel: "after Rung 2"
    }),

    // ---------- Rung 3: Valuation ----------
    {
      type: "learn", door: 3,
      title: "Pre-money, post-money and the investor’s share.",
      points: [["Pre-money", "What the company is valued at before the new money"], ["Post-money", "Pre-money + the new investment"], ["Investor’s share", "Investment ÷ post-money"]],
      highlightLast: true,
      side: { label: "Example", items: [["chart-column", "Pre-money", "₹80 lakh"], ["indian-rupee", "Investment", "₹20 lakh"], ["check", "Investor owns", "20 ÷ 100 = 20%"]] }
    },
    FLN(3, "Valuation", {
      prompt: "Pre-money valuation ₹1.5 crore. The angel invests ₹50 lakh. What is the post-money valuation in lakhs?",
      answer: 200,
      hint: "150 + 50.",
      note: "₹2 crore (200 lakh) post-money.", badge: "chart-column"
    }),
    FLN(3, "Valuation", {
      prompt: "Same deal: ₹50 lakh invested at ₹200 lakh post-money. What percentage does the angel own?",
      answer: 25,
      hint: "50 ÷ 200 × 100.",
      note: "25%. Same money at a higher valuation would mean a smaller share.", badge: "users"
    }),
    FL(3, "Valuation", {
      prompt: "Two offers of ₹50 lakh: one at ₹2 crore post-money, one at ₹5 crore post-money. Which gives away LESS equity?",
      options: ["The ₹2 crore post-money offer", "Both give the same", "The ₹5 crore post-money offer", "Neither gives equity"], answer: 2,
      hint: "Investment ÷ post-money.",
      note: "50 ÷ 500 = 10% vs 50 ÷ 200 = 25%. But the investor’s help and terms matter too, not just the number.", badge: "scale",
      board: true, boardLabel: "after Rung 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Explain dilution to the room using a pizza, in 20 seconds.", note: "Smaller slice, bigger pizza.", points: 100 },

    // ---------- Rung 4: What investors look for ----------
    {
      type: "learn", door: 4,
      title: "Early investors mostly judge the team, the market and the proof.",
      points: [["Team", "Can these founders build and keep going?"], ["Market", "Is the problem big and growing?"], ["Traction", "Users, revenue, growth and retention"]],
      highlightLast: true,
      side: { label: "Strong signals", items: [["users", "Users who stay", "Retention beats downloads"], ["chart-column", "Steady growth", "Week after week"], ["handshake", "Founders who listen", "And learn fast"]] }
    },
    FL(4, "What Investors Want", {
      prompt: "Which fact would excite an angel most about CampusDash?",
      options: ["60% reorder every week", "The logo won a design award", "The founders have nice laptops", "The app has 15 colour themes"], answer: 0,
      hint: "Proof people keep using it.",
      note: "Strong repeat usage shows real demand. Investors care about retention more than looks.", badge: "chart-column"
    }),
    FL(4, "What Investors Want", {
      prompt: "An investor asks a hard question about competition. Best founder response?",
      options: ["“We have no competition at all.”", "“Competitors are all useless.”", "Name them and the real difference", "Avoid answering"], answer: 2,
      hint: "Every business has competition.",
      note: "“No competition” sounds naive. Knowing your competitors and your real edge builds trust.", badge: "search"
    }),
    FLN(4, "What Investors Want", {
      prompt: "CampusDash grew from 2,000 to 2,600 weekly users in a month. What is the growth rate in percent?",
      answer: 30,
      hint: "600 ÷ 2,000 × 100.",
      note: "30% in a month is strong early growth. Investors watch these numbers closely.", badge: "trending-up",
      board: true, boardLabel: "after Rung 4"
    }),

    // ---------- Rung 5: Money without equity ----------
    {
      type: "learn", door: 5,
      title: "Not all money costs equity.",
      points: [["Revenue", "The best funding: customers paying"], ["Grants and competitions", "Government schemes, college and hub programmes, hackathon prizes"], ["Incubators", "Support, mentors and sometimes small funds; terms vary"]],
      highlightLast: true,
      side: { label: "Before giving equity", items: [["indian-rupee", "Can sales fund the next step?", ""], ["landmark", "Is there a grant or scheme?", "Check official sites"], ["users", "Can an incubator help?", "Read their terms"]] }
    },
    FL(5, "Money Without Equity", {
      prompt: "Which is non-dilutive money (no equity given away)?",
      options: ["An angel investment", "A seed round", "A Series A round", "A competition prize"], answer: 3,
      hint: "Does anyone get a share?",
      note: "Prizes and many grants do not take equity. Always read the conditions.", badge: "trophy"
    }),
    FL(5, "Money Without Equity", {
      prompt: "Where should Rhea check details of a government startup scheme?",
      options: ["The official website", "A forwarded WhatsApp message", "A random YouTube comment", "A friend’s memory"], answer: 0,
      hint: "Schemes change.",
      note: "Eligibility and amounts change. Only official sites have the current rules.", badge: "landmark"
    }),
    FL(5, "Money Without Equity", {
      prompt: "An incubator offers a desk, mentors and ₹5 lakh for 10% equity. What should the founders do first?",
      options: ["Sign immediately, it is free money", "Reject it without reading", "Give 50% to be generous", "Read terms; ask past startups"], answer: 3,
      hint: "Is the help worth 10%?",
      note: "Some programmes are very valuable, some are not. Ask founders who went through it.", badge: "search",
      board: true, boardLabel: "after Rung 5"
    }),

    // ---------- Rung 6: Term sheets (double) ----------
    {
      type: "learn", door: 6,
      title: "Term sheets: the details matter as much as the money.",
      points: [["Vesting", "Founders earn shares over time, often 4 years with a 1-year cliff"], ["Cap table", "A simple table of who owns what. Keep it clean"], ["Read every term", "Ask experienced founders or advisers before signing"]],
      highlightLast: true,
      side: { label: "Final rung", items: [["zap", "Double points", "Still anyone’s game"], ["file-text", "Vesting and cap tables", "Protect the team"], ["mic", "Then the final challenge", "Your funding plan"]] }
    },
    FL(6, "Term Sheets", {
      double: true,
      prompt: "Shares vest over 4 years with a 1-year cliff. A co-founder leaves after 6 months. How much has vested?",
      options: ["Half of their shares", "Nothing yet (before the cliff)", "All of their shares", "One quarter of their shares"], answer: 1,
      hint: "The cliff is 1 year.",
      note: "Before the cliff, nothing vests. This protects the company if someone leaves early.", badge: "clock"
    }),
    FLN(6, "Term Sheets", {
      double: true,
      prompt: "Sai holds 40%, vesting evenly over 4 years (after the cliff). After 2 years, what percentage has vested?",
      answer: 20,
      hint: "Half the time, half the shares.",
      note: "2 of 4 years: half of 40% = 20%.", badge: "chart-column"
    }),
    FL(6, "Term Sheets", {
      double: true,
      prompt: "A first investor asks for 60% of CampusDash for ₹10 lakh. What is the biggest risk?",
      options: ["The money arrives too fast", "The investor is too friendly", "Founders lose control early", "There is no risk"], answer: 2,
      hint: "Who owns most of the company now?",
      note: "Giving away a majority at the first step leaves little room for future rounds and can demotivate founders.", badge: "shield",
      board: true, boardLabel: "after Rung 6"
    }),

    // ---------- Final challenge, decision, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best plan wins +200", prompt: "In 30 seconds: should CampusDash raise money now or keep bootstrapping? Give your reason and one number.", note: "Traction, valuation or dilution. The host picks the most thoughtful answer.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "The Fundraising Ladder", note: "Screenshot this. Read it before any investor meeting.", items: LADDER },
    {
      type: "end",
      joinTitle: "Join EduMoon Entrepreneurship",
      joinText: "Startup games, founder talks and real student businesses. Build something, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
