// Startup Words (EduMoon Entrepreneurship). For all years.
// The words founders and investors use, explained simply: MVP, pivot, traction, B2B, CAC, churn, runway, burn rate, bootstrapping, equity, valuation and more.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const SW = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 35, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const SWN = (round, name, extra) => SW(round, name, Object.assign({ kind: "number", time: 60 }, extra));

// The take-home card: 12 startup words.
const GLOSSARY = [
  ["MVP", "Minimum Viable Product: the simplest version that real users can try."],
  ["Pivot", "Changing direction when the first idea does not work."],
  ["Traction", "Proof that people want it: users, sales, growth."],
  ["B2B / B2C", "Selling to businesses / selling to everyday customers."],
  ["CAC", "Customer Acquisition Cost: what it costs to win one customer."],
  ["Churn", "Customers who stop using or paying."],
  ["Revenue vs profit", "Revenue is money in. Profit is what is left after all costs."],
  ["Burn rate", "How much money the startup loses each month."],
  ["Runway", "How many months until the money runs out. Cash ÷ burn rate."],
  ["Bootstrapping", "Growing with your own money and sales, without investors."],
  ["Equity", "Ownership of the company, shared as a percentage."],
  ["Valuation", "What investors think the whole company is worth."]
];

window.GAME = {
  id: "startup-words",
  title: "Startup Words",
  club: "Entrepreneurship",
  tagline: "MVP, runway, pivot, CAC. Speak the language founders and investors use.",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "35 minutes", level: "Beginner",
    about: "Ananya walks into her first startup event and understands nothing: “Our CAC is high, but runway is 18 months, so we might pivot.” In 6 rounds, teams learn the startup words people use most, grouped into building, customers, money in, money out, funding and ownership. Simple maths questions make the money words stick. All startups and numbers are made up.",
    outcomes: "About 15 startup words students can use correctly, simple runway and customer-cost maths, and the confidence to follow a pitch or a founder talk.",
    tone: "Jargon makes people feel left out. The point today is the opposite: every word is simple once explained. Make students say each word in a sentence. Laugh at jargon a little; founders overuse it too.",
    extra: [["Before a founder talk", "This game is a perfect warm-up before any startup speaker or pitch event."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Decoded",
    rulesEyebrow: "How Startup Words works", rulesTitle: "Learn the words. Decode the founder. Score.",
    learnText: "The host explains three startup words.", crackTitle: "Decode",
    crackText: "Pick the right meaning on your phone and lock it in.",
    rulesExtra: "Some questions need a typed number. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Even some founders mix these up!", cracked: "decoded it",
    next: "Next round →", finale: "Next →", winner: "speak fluent startup!", endLine: "Ananya understood every pitch."
  },
  offerEyebrow: "EduMoon Entrepreneurship · Startup fluency",
  offerTitle: "Your startup fluency",
  offers: [
    { min: 0.7, icon: "rocket", title: "Fluent Founder", text: "You can follow any pitch. Try Investor Room next." },
    { min: 0.45, icon: "trending-up", title: "Startup Speaker", text: "Strong! Use three words from today in a sentence tomorrow." },
    { min: 0.2, icon: "lightbulb", title: "Word Collector", text: "Good start. Read the 12 words below once more." },
    { min: 0, icon: "book-open", title: "Startup Beginner", text: "Everyone starts here. Watch one founder talk and spot the words." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Entrepreneurship · First startup event",
      title: "At her first startup event, Ananya hears: “Our CAC is high, but runway is 18 months, so we might pivot.” She understands nothing. Can your team decode it?",
      cards: [["message-circle", "15 words founders use every day"], ["indian-rupee", "Simple money maths"], ["trophy", "Your score decides your startup fluency"]]
    },
    { type: "rules" },

    // ---------- Round 1: Building ----------
    {
      type: "learn", door: 1,
      title: "Words about building the product.",
      points: [["MVP", "Minimum Viable Product: the simplest version people can actually use"], ["Pivot", "Changing direction when the first plan does not work"], ["Traction", "Proof people want it: users, sales, growth"]],
      highlightLast: true,
      side: { label: "Example", items: [["rocket", "MVP", "A WhatsApp number before a full app"], ["route", "Pivot", "From notes app to exam quiz app"], ["chart-column", "Traction", "500 users in the first month"]] }
    },
    SW(1, "Building", {
      prompt: "A team wants to test a canteen pre-order idea. Which is a good MVP?",
      options: ["A Google Form and a WhatsApp group", "A full app with payments and AI suggestions", "A 50-page business plan", "A logo and a website only"], answer: 0,
      hint: "Simplest version real users can try.",
      note: "A form and a group can take real orders this week. Build the full app only if people use the simple version.", badge: "rocket"
    }),
    SW(1, "Building", {
      prompt: "A notes app gets few users, but its exam quiz feature is loved. The team drops notes and focuses on quizzes. This is a…",
      options: ["Valuation", "Churn", "Runway", "Pivot"], answer: 3,
      hint: "A change of direction.",
      note: "A pivot: keep what works, change direction. Many famous startups pivoted from their first idea.", badge: "route"
    }),
    SW(1, "Building", {
      prompt: "An investor asks, “What traction do you have?” Which answer shows traction?",
      options: ["“We have a really great idea.”", "“Our logo and website are ready.”", "“We will launch very soon, we think.”", "“1,200 students used it this month.”"], answer: 3,
      hint: "Proof, not promises.",
      note: "Real users, sales or growth. Ideas and logos are not traction.", badge: "chart-column",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Customers ----------
    {
      type: "learn", door: 2,
      title: "Words about customers.",
      points: [["B2B and B2C", "Selling to businesses / selling to everyday people"], ["CAC", "Customer Acquisition Cost: what you spend to win one customer"], ["Churn", "Customers who stop using or paying"]],
      highlightLast: true,
      side: { label: "Examples", items: [["briefcase", "B2B", "Billing software for shops"], ["users", "B2C", "A music app for students"], ["x", "Churn", "20 of 100 users cancel"]] }
    },
    SW(2, "Customers", {
      prompt: "A startup sells attendance software to colleges. Which type is it?",
      options: ["B2C", "B2B", "C2C", "None"], answer: 1,
      hint: "Who is the customer: a person or an organisation?",
      note: "B2B: business to business. The college pays, not the student.", badge: "briefcase"
    }),
    SWN(2, "Customers", {
      prompt: "A startup spends ₹20,000 on ads and gets 100 new customers. What is the CAC in rupees?",
      answer: 200,
      hint: "Total spend ÷ customers.",
      note: "₹20,000 ÷ 100 = ₹200 per customer. If each customer pays less than that, the startup loses money on growth.", badge: "indian-rupee"
    }),
    SW(2, "Customers", {
      prompt: "An app had 1,000 paying users. 150 cancelled this month. What is this called?",
      options: ["Churn", "Traction", "Pivot", "Equity"], answer: 0,
      hint: "Customers leaving.",
      note: "Churn. Here it is 15% in one month, which is high. Fixing churn is often cheaper than finding new users.", badge: "x",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Money in ----------
    {
      type: "learn", door: 3,
      title: "Words about money coming in.",
      points: [["Revenue", "All the money customers pay"], ["Profit", "Revenue minus every cost"], ["Break-even", "When revenue finally equals costs"]],
      highlightLast: true,
      side: { label: "Example", items: [["indian-rupee", "Revenue", "₹5 lakh"], ["x", "Costs", "₹6 lakh"], ["chart-column", "Result", "₹1 lakh loss"]] }
    },
    SW(3, "Money In", {
      prompt: "A founder says, “We made ₹10 lakh revenue!” What do we still NOT know?",
      options: ["Whether the company made a profit", "How much customers paid", "That money came in", "That the startup has customers"], answer: 0,
      hint: "Revenue is before costs.",
      note: "Revenue does not tell you about costs. A startup can have big revenue and still lose money.", badge: "search"
    }),
    SWN(3, "Money In", {
      prompt: "Revenue ₹8 lakh, total costs ₹5 lakh. What is the profit in lakhs?",
      answer: 3,
      hint: "Revenue minus costs.",
      note: "₹3 lakh profit. Simple, but founders and students mix up revenue and profit all the time.", badge: "chart-column"
    }),
    SW(3, "Money In", {
      prompt: "“We will break even next quarter.” What does it mean?",
      options: ["The company will shut down", "They will double their profit", "Revenue will equal costs", "They will raise funds"], answer: 2,
      hint: "Even means equal.",
      note: "Break-even: no profit, no loss. After that point, extra sales start making profit.", badge: "scale",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Use “MVP”, “traction” and “churn” correctly in one or two sentences about any app idea.", note: "Real and simple. 20 seconds.", points: 100 },

    // ---------- Round 4: Money out ----------
    {
      type: "learn", door: 4,
      title: "Words about money going out.",
      points: [["Burn rate", "How much money the startup loses each month"], ["Runway", "How long until the money runs out"], ["Runway = cash ÷ monthly burn", "₹60 lakh ÷ ₹5 lakh a month = 12 months"]],
      highlightLast: true,
      side: { label: "Why it matters", items: [["timer", "Short runway", "Raise money or cut costs fast"], ["clock", "Long runway", "Time to grow carefully"], ["flame", "High burn", "Spending faster than earning"]] }
    },
    SWN(4, "Money Out", {
      prompt: "A startup has ₹48 lakh in the bank and burns ₹4 lakh a month. How many months of runway does it have?",
      answer: 12,
      hint: "Cash ÷ burn.",
      note: "48 ÷ 4 = 12 months. That is how long they have to grow, raise money or cut costs.", badge: "timer"
    }),
    SW(4, "Money Out", {
      prompt: "“Our burn rate is ₹10 lakh a month.” What does it mean?",
      options: ["They earn ₹10 lakh a month", "They pay ₹10 lakh tax", "They have ₹10 lakh left", "They lose about ₹10 lakh a month"], answer: 3,
      hint: "Burn is money going out faster than coming in.",
      note: "Burn rate is the monthly loss. Combined with cash in the bank, it gives the runway.", badge: "flame"
    }),
    SW(4, "Money Out", {
      prompt: "Runway is only 3 months. Which move makes the most sense?",
      options: ["Hire 20 more people this month", "Move to a bigger, fancier office", "Cut costs, focus on paying users", "Throw a big launch party for users"], answer: 2,
      hint: "Make the money last longer.",
      note: "Cut costs, focus on revenue, or raise money quickly. Spending more makes the runway even shorter.", badge: "alarm-clock",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Funding ----------
    {
      type: "learn", door: 5,
      title: "Words about raising money.",
      points: [["Bootstrapping", "Growing with your own money and sales"], ["Angel investor", "A person who invests early, often their own money"], ["Seed round", "An early round of funding to build and test"]],
      highlightLast: true,
      side: { label: "Usual order", items: [["indian-rupee", "Bootstrapping", "Own money, first sales"], ["users", "Angels and seed", "Early investors"], ["trending-up", "Series A and later", "Bigger rounds to scale"]] }
    },
    SW(5, "Funding", {
      prompt: "Two students grow their T-shirt brand only with their savings and sales. This is…",
      options: ["Bootstrapping", "A Series B round", "An IPO", "Churn"], answer: 0,
      hint: "No investors involved.",
      note: "Bootstrapping. Slower, but they keep full ownership and control.", badge: "indian-rupee"
    }),
    SW(5, "Funding", {
      prompt: "A retired engineer invests ₹10 lakh of his own money in a 3-month-old startup. He is most likely…",
      options: ["A bank manager", "An angel investor", "A customer", "A co-founder"], answer: 1,
      hint: "Early, personal money.",
      note: "An angel investor: an individual who invests early, usually for a share of the company.", badge: "users"
    }),
    SW(5, "Funding", {
      prompt: "Which is usually the EARLIEST stage?",
      options: ["Series C", "Seed round", "IPO", "Series B"], answer: 1,
      hint: "Seeds come before trees.",
      note: "Seed comes first, then Series A, B, C as the company grows. An IPO lists the company on the stock market.", badge: "sparkles",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Ownership (double) ----------
    {
      type: "learn", door: 6,
      title: "Words about who owns the company.",
      points: [["Equity", "Ownership, shared as a percentage"], ["Valuation", "What the whole company is said to be worth"], ["Dilution", "Founders own a smaller share after new investors join"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["chart-column", "Equity maths", "Simple percentages"], ["mic", "Then the final challenge", "Decode a pitch"]] }
    },
    SWN(6, "Ownership", {
      double: true,
      prompt: "An investor pays ₹20 lakh for 10% of a startup. What is the whole startup valued at, in lakhs?",
      answer: 200,
      hint: "If 10% is 20 lakh, what is 100%?",
      note: "₹20 lakh × 10 = ₹2 crore (200 lakh). That is the valuation.", badge: "chart-column"
    }),
    SW(6, "Ownership", {
      double: true,
      prompt: "Two co-founders own 50% each. An investor takes 20%. What happens to the founders’ share?",
      options: ["It stays 50% each", "It rises to 60% each", "It drops to 40% each", "It becomes 20% each"], answer: 2,
      hint: "100% is now split three ways.",
      note: "The founders now share 80%: 40% each. This is dilution. A smaller share of a bigger company can still be worth more.", badge: "users"
    }),
    SW(6, "Ownership", {
      double: true,
      prompt: "Decode: “Our CAC is high, but runway is 18 months, so we might pivot.” What is the founder saying?",
      options: ["Customers are cheap and the money is running out fast", "Customers are costly; 18 months of cash; may change plan", "They are very profitable and want to sell the company", "They have no customers left and no money in the bank"], answer: 1,
      hint: "Decode each word.",
      note: "High customer cost, 18 months of money left, and a possible change of direction. Ananya can follow it now.", badge: "message-circle",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best pitch wins +200", prompt: "Give a 30-second mini pitch using at least 4 startup words correctly.", note: "The room counts the words and claps. The host picks the winner.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "12 Startup Words", note: "Screenshot this. Bring it to your next startup event.", items: GLOSSARY },
    {
      type: "end",
      joinTitle: "Join EduMoon Entrepreneurship",
      joinText: "Startup games, founder talks and real student businesses. Build something, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
