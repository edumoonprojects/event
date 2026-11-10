// Price It Right (EduMoon Entrepreneurship). For all years.
// Run a campus business with simple maths: costs, profit per item, break-even, discounts and pricing tricks.
// All businesses and numbers are made up and kept simple. No calculators needed for most questions (phones are fine).
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const PR = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 50, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const PN = (round, name, extra) => PR(round, name, Object.assign({ kind: "number", time: 60 }, extra));

const MONEY = [
  ["Cost per item", "Everything one item needs: materials, packing, delivery."],
  ["Profit per item", "Price minus cost per item."],
  ["Fixed costs", "Rent, stall fee, software: you pay them even with zero sales."],
  ["Break-even", "Fixed costs ÷ profit per item = items you must sell to stop losing."],
  ["Margin", "Profit ÷ price. Higher margin = more room for mistakes."],
  ["Discounts eat profit", "A 20% discount can wipe out most of your profit."],
  ["Price on value", "What it’s worth to the customer, not just what it costs you."],
  ["Test prices", "Try two prices for a week each. Let customers tell you."]
];

window.GAME = {
  id: "price-it-right",
  title: "Price It Right",
  club: "Entrepreneurship",
  tagline: "Run a campus business. Get the maths right, or go broke.",
  art: window.STORY_ART,
  guide: {
    years: "All years · basic maths only", time: "40 minutes", level: "Medium",
    about: "Teams run made-up campus businesses: a chai stall, a T-shirt brand, a notes-printing service and a snack box. In 6 rounds they work out costs, profit per item, break-even, the real cost of discounts and smart pricing. Some questions need a typed number; phone calculators are allowed.",
    outcomes: "The 8 money basics every founder needs (cost per item, profit, fixed costs, break-even, margin, discounts, value pricing, price testing) and the confidence to check if a business idea makes money.",
    tone: "Some students fear maths. Keep it light: every number is small and round, calculators are allowed, and the host can work through each answer slowly on the screen after the reveal. Celebrate the team that explains its working, not just the fastest.",
    extra: [["Typed answers", "Number questions accept whole numbers only, with no ₹ sign or commas. Say this before Round 1."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Profit",
    rulesEyebrow: "How Price It Right works", rulesTitle: "Count the costs. Set the price. Make a profit.",
    learnText: "The host shares one money idea every founder needs.", crackTitle: "Calculate",
    crackText: "Work it out and lock in your answer on your phone. Calculators allowed!",
    rulesExtra: "Typed answers: whole numbers only, no ₹ or commas. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Many real businesses get this wrong too!", cracked: "got it right",
    next: "Next round →", finale: "Next →", winner: "are today’s smartest business owners!", endLine: "Your business is in profit!"
  },
  offerEyebrow: "EduMoon Entrepreneurship · Money sense",
  offerTitle: "Your business health",
  offers: [
    { min: 0.7, icon: "trending-up", title: "Profitable Founder", text: "You know your numbers. That puts you ahead of most first-time founders." },
    { min: 0.45, icon: "indian-rupee", title: "Breaking Even", text: "Strong! Always work out profit per item before setting a price." },
    { min: 0.2, icon: "chart-column", title: "Learning the Numbers", text: "Good start. Practise break-even on one idea this week." },
    { min: 0, icon: "book-open", title: "Starting Out", text: "Everyone starts here. Save the 8 money basics and try one today." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Entrepreneurship · Price It Right",
      title: "Many student businesses fail not because nobody buys, but because every sale loses money. Can your team price it right?",
      cards: [["tag", "Set prices for 4 campus businesses"], ["indian-rupee", "Find profit, costs and break-even"], ["trending-up", "Learn pricing tricks real brands use"]]
    },
    { type: "rules" },

    // ---------- Round 1: Cost per item ----------
    {
      type: "learn", door: 1,
      title: "First, know what ONE item really costs you.",
      points: [["Add every part", "Ingredients, cup, packing, delivery"], ["Small costs add up", "₹2 here and ₹3 there is real money"], ["Profit per item", "Price − cost per item"]],
      highlightLast: true,
      side: { label: "Campus Chai Stall", items: [["indian-rupee", "Tea, milk, sugar", "₹6 per cup"], ["indian-rupee", "Paper cup", "₹2"], ["tag", "Selling price", "₹15"]] }
    },
    PN(1, "Cost per Item", {
      prompt: "Chai stall: tea, milk and sugar cost ₹6 per cup, and the paper cup costs ₹2. What is the cost of ONE cup of chai, in ₹?",
      answer: 8,
      hint: "Add both costs.",
      note: "₹6 + ₹2 = ₹8. Forgetting “small” costs like cups is the most common mistake.", badge: "indian-rupee"
    }),
    PN(1, "Cost per Item", {
      prompt: "The chai sells for ₹15 and costs ₹8 to make. What is the profit on ONE cup, in ₹?",
      answer: 7,
      hint: "Price minus cost.",
      note: "₹15 − ₹8 = ₹7 profit per cup. That’s the number that keeps a business alive.", badge: "trending-up"
    }),
    PR(1, "Cost per Item", {
      prompt: "A friend says, “Chai costs ₹6, so selling at ₹7 is still profit.” What did they forget?",
      options: ["The cup, and other costs like gas and their own time", "Nothing, they’re right", "To add GST to the tea leaves", "That chai is hot"], answer: 0,
      hint: "Is the tea the only cost?",
      note: "Count every cost, including the hidden ones. Otherwise “profit” is really a loss.", badge: "search",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Fixed costs and break-even ----------
    {
      type: "learn", door: 2,
      title: "Fixed costs are paid even if you sell nothing.",
      points: [["Fixed costs", "Stall fee, rent, equipment, software"], ["Break-even", "Fixed costs ÷ profit per item"], ["After break-even", "Every extra sale is real profit"]],
      highlightLast: true,
      side: { label: "Chai stall this month", items: [["store", "Stall fee", "₹1,400 a month"], ["trending-up", "Profit per cup", "₹7"], ["target", "Break-even", "How many cups?"]] }
    },
    PN(2, "Break-Even", {
      prompt: "The chai stall pays ₹1,400 a month for its spot. Profit is ₹7 per cup. How many cups must it sell in a month to break even?",
      answer: 200,
      hint: "1,400 ÷ 7.",
      note: "1,400 ÷ 7 = 200 cups. That’s about 7 cups a day. Very doable, so this is a healthy business.", badge: "target"
    }),
    PR(2, "Break-Even", {
      prompt: "In a month the stall sells 500 cups. Profit per cup is ₹7 and the stall fee is ₹1,400. What’s the real monthly profit?",
      options: ["₹3,500", "₹2,100", "₹1,400", "₹4,900"], answer: 1,
      hint: "500 × 7, then subtract the fee.",
      note: "500 × ₹7 = ₹3,500, minus ₹1,400 = ₹2,100 real profit.", badge: "indian-rupee"
    }),
    PR(2, "Break-Even", {
      prompt: "Which is a FIXED cost for a T-shirt brand?",
      options: ["The blank T-shirt for each order", "Printing ink for each shirt", "Courier for each order", "A ₹999 yearly website plan"], answer: 3,
      hint: "Which one doesn’t change with the number of shirts sold?",
      note: "The website plan costs the same whether you sell 1 shirt or 1,000.", badge: "list-checks",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Margins ----------
    {
      type: "learn", door: 3,
      title: "Margin tells you how much of each sale you keep.",
      points: [["Margin", "Profit ÷ price, as a percent"], ["Low margin", "One mistake or discount and you lose"], ["High margin", "Room for ads, returns and growth"]],
      highlightLast: true,
      side: { label: "Campus T-shirt brand", items: [["tag", "Price", "₹500"], ["indian-rupee", "Shirt + print + packing", "₹300"], ["trending-up", "Profit", "₹200 per shirt"]] }
    },
    PN(3, "Margins", {
      prompt: "A T-shirt sells for ₹500 and costs ₹300 to make and pack. What is the margin, in percent?",
      answer: 40,
      hint: "Profit is ₹200. 200 ÷ 500 = ?",
      note: "₹200 ÷ ₹500 = 0.4 = 40%. Healthy for a small clothing brand.", badge: "chart-column"
    }),
    PR(3, "Margins", {
      prompt: "Courier costs ₹70 per T-shirt. The brand forgot to add it. Now what’s the real profit per shirt?",
      options: ["₹200", "₹70", "₹130", "₹270"], answer: 2,
      hint: "₹200 minus ₹70.",
      note: "₹130. Delivery, payment fees and returns quietly eat margins. Count them all.", badge: "route"
    }),
    PR(3, "Margins", {
      prompt: "Which business is safer if prices of materials suddenly go up?",
      options: ["One with a 5% margin", "One with a 45% margin", "Both are equally safe", "Neither, margins don’t matter"], answer: 1,
      hint: "Which one has more room?",
      note: "A bigger margin can absorb surprises. A thin margin turns into a loss quickly.", badge: "shield",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Pick something sold on your campus. Guess its cost and profit per item.", note: "Show your working in 20 seconds.", points: 100 },

    // ---------- Round 4: Discounts ----------
    {
      type: "learn", door: 4,
      title: "Discounts come straight out of your profit.",
      points: [["A discount cuts the price", "But not your costs"], ["So profit falls faster", "20% off can mean half your profit gone"], ["Better offers", "Combos, bonuses, early-bird, free extras that cost little"]],
      highlightLast: true,
      side: { label: "Smarter than discounts", items: [["list-checks", "Combos", "Chai + samosa deal"], ["clock", "Early-bird", "First 50 buyers only"], ["star", "Small free extra", "A sticker, not 20% off"]] }
    },
    PN(4, "Discounts", {
      prompt: "The ₹500 T-shirt (cost ₹300) gets a 20% discount. What is the new profit per shirt, in ₹?",
      answer: 100,
      hint: "20% of 500 is 100. New price 400, minus cost 300.",
      note: "₹400 − ₹300 = ₹100. A 20% discount cut profit in HALF, from ₹200 to ₹100.", badge: "tag"
    }),
    PR(4, "Discounts", {
      prompt: "After the 20% discount, profit per shirt is ₹100 instead of ₹200. To earn the same total profit, the brand must sell…",
      options: ["The same number of shirts", "10% more shirts", "Twice as many shirts", "Fewer shirts"], answer: 2,
      hint: "Half the profit per shirt.",
      note: "Half the profit per item means double the sales just to stay the same. Discounts are expensive.", badge: "chart-column"
    }),
    PR(4, "Discounts", {
      prompt: "Your chai stall wants more sales in exam week. Which offer protects profit best?",
      options: ["50% off all chai", "Free chai for everyone", "Chai + biscuit combo for ₹20 (biscuit costs you ₹3)", "Close the stall"], answer: 2,
      hint: "Which offer adds value without cutting the chai price?",
      note: "Combos raise the bill while the extra item costs little. Profit goes up, not down.", badge: "store",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Pricing tricks ----------
    {
      type: "learn", door: 5,
      title: "Price is about value, not just cost.",
      points: [["Value pricing", "What it saves or gives the customer"], ["Anchoring", "A higher “premium” option makes the middle one look good"], ["Charm prices", "₹99 often feels cheaper than ₹100"]],
      highlightLast: true,
      side: { label: "Notes-printing service", items: [["file-text", "Basic", "₹49"], ["badge-check", "Standard", "₹79"], ["star", "Premium (with binding)", "₹149"]] }
    },
    PR(5, "Pricing Tricks", {
      prompt: "The notes service offers ₹49, ₹79 and ₹149 plans. Why add the ₹149 plan, even if few buy it?",
      options: ["To confuse students", "It makes ₹79 look like great value, so more people pick the middle", "₹149 is illegal to remove", "No reason"], answer: 1,
      hint: "How does ₹79 look next to ₹149?",
      note: "That’s anchoring. A premium option helps the middle option sell.", badge: "tag"
    }),
    PR(5, "Pricing Tricks", {
      prompt: "A senior’s exam-tips session saves students hours of confusion. It costs ₹20 per student to run. Best price thinking?",
      options: ["Charge ₹20, cost price only", "Make it ₹5", "Price on the value to students, maybe ₹99, then test", "₹10,000 per student"], answer: 2,
      hint: "Is it worth more than it costs?",
      note: "Price on value, then test whether students agree. Cost is the floor, not the price.", badge: "lightbulb"
    }),
    PR(5, "Pricing Tricks", {
      prompt: "You’re not sure whether to charge ₹149 or ₹199. What should you do?",
      options: ["Ask your parents only", "Pick randomly forever", "Always choose the cheapest", "Try ₹149 one week and ₹199 the next, and compare sales and profit"], answer: 3,
      hint: "Let real customers decide.",
      note: "Simple price tests give real answers. Compare total profit, not just number of sales.", badge: "chart-column",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Run the business (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: put it all together.",
      points: [["Count every cost", "Per item and fixed"], ["Know your break-even", "Before you launch"], ["Protect your margin", "Value pricing, smart offers, real tests"]],
      highlightLast: true,
      side: { label: "Campus Snack Box", items: [["indian-rupee", "Cost per box", "₹60"], ["tag", "Price", "₹100"], ["store", "Monthly kitchen share", "₹2,000"]] }
    },
    PN(6, "Run the Business", {
      double: true,
      prompt: "Snack box: costs ₹60, sells for ₹100. The kitchen share is ₹2,000 a month. How many boxes to break even?",
      answer: 50,
      hint: "Profit per box is ₹40. 2,000 ÷ 40.",
      note: "₹40 profit per box, so 2,000 ÷ 40 = 50 boxes a month to break even.", badge: "target"
    }),
    PN(6, "Run the Business", {
      double: true,
      prompt: "They sell 120 boxes this month. What is the total profit after the ₹2,000 kitchen share, in ₹?",
      answer: 2800,
      hint: "120 × 40, then subtract 2,000.",
      note: "120 × ₹40 = ₹4,800, minus ₹2,000 = ₹2,800 profit.", badge: "trending-up"
    }),
    PR(6, "Run the Business", {
      double: true,
      prompt: "A big company offers to buy 300 snack boxes at ₹55 each. Each box costs ₹60. Should you say yes?",
      options: ["Yes, 300 is a big order", "Yes, any order is good", "No, not at ₹55: you’d lose ₹5 on every box. Negotiate a price above ₹60", "Yes, and add free delivery"], answer: 2,
      hint: "55 minus 60.",
      note: "Big orders below cost are big losses. Know your numbers before you say yes.", badge: "handshake",
      board: true, boardLabel: "after Round 6"
    }),

    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "In 30 seconds: a campus product, its cost, your price, and your break-even.", note: "Real numbers, simple maths. The room claps; the host picks the best one.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "8 Money Basics for Founders", note: "Screenshot this. Run your idea’s numbers before you start.", items: MONEY },
    {
      type: "end",
      joinTitle: "Join the EduMoon community",
      joinText: "Startup games, pitch practice and real projects every week. Build your own idea, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
