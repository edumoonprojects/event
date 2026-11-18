// Side Hustle Lab (EduMoon Entrepreneurship). For all years.
// Start a small business while studying, with almost no money: pick a hustle, test demand, start small, find first customers, track money and stay safe.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const HQ = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 40, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const HN = (round, name, extra) => HQ(round, name, Object.assign({ kind: "number", time: 60 }, extra));

// The take-home card: the side hustle starter plan.
const PLAN = [
  ["Start from what you have", "A skill, a tool, a network or free time on weekends."],
  ["Test before you spend", "Ask 20 people, take pre-orders, or sell 5 before buying stock for 50."],
  ["Start tiny", "Make to order. Borrow tools. Spend only what you can lose."],
  ["First customers", "Friends, hostel groups, department groups, one Instagram page."],
  ["Track every rupee", "A simple notebook or sheet: money in, money out, every day."],
  ["Profit is not sales", "Profit = money in − every cost, including your travel and packing."],
  ["Follow the rules", "Food needs FSSAI registration. Check college rules before selling on campus."],
  ["Studies first", "Fix hustle hours. A side hustle should not cost you your degree."]
];

window.GAME = {
  id: "side-hustle-lab",
  title: "Side Hustle Lab",
  club: "Entrepreneurship",
  tagline: "Start a small business while studying, with almost no money.",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "35 minutes", level: "Beginner",
    about: "Sneha, a 2nd-year student in Vizag, has ₹2,000 and wants to earn on the side. In 6 rounds, teams help her pick a hustle that fits her skills, test demand before spending, start with almost no money, find her first customers, track her money and stay safe and balanced with studies. The businesses and numbers are made up.",
    outcomes: "How to choose a realistic side hustle, test an idea cheaply, get the first 10 customers, separate profit from sales, and run it without hurting studies.",
    tone: "Many students already run small hustles: reselling, tutoring, baking, editing. Ask if anyone in the room does. Celebrate small starts. ₹500 profit in a month is a real win for a beginner.",
    extra: [["Related games", "For pricing and break-even, play Price It Right. For services like design or editing, play Freelancing 101."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Earned",
    rulesEyebrow: "How Side Hustle Lab works", rulesTitle: "Learn the move. Make the smart choice. Grow the hustle.",
    learnText: "The host shares one lesson for small businesses.", crackTitle: "Decide",
    crackText: "Pick Sneha’s best move on your phone and lock it in.",
    rulesExtra: "Some questions need a typed number. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Many real hustlers learn this by losing money!", cracked: "got it right",
    next: "Next round →", finale: "Next →", winner: "are today’s top hustlers!", endLine: "Sneha’s hustle made its first profit."
  },
  offerEyebrow: "EduMoon Entrepreneurship · Hustle level",
  offerTitle: "Your hustle level",
  offers: [
    { min: 0.7, icon: "rocket", title: "Ready to Launch", text: "You think like a founder. Test one idea this week with 20 people." },
    { min: 0.45, icon: "store", title: "Smart Starter", text: "Strong! Pick one skill you have and list 3 hustles from it." },
    { min: 0.2, icon: "lightbulb", title: "Idea Stage", text: "Good start. Use the starter plan below before you spend a rupee." },
    { min: 0, icon: "book-open", title: "Hustle Learner", text: "Everyone starts here. Talk to one student who already sells something." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Entrepreneurship · ₹2,000 to start",
      title: "Sneha has ₹2,000, a free weekend and big dreams. She wants to earn while studying. Can your team help her start smart?",
      cards: [["store", "Pick, test and start a real hustle"], ["indian-rupee", "First customers and every rupee tracked"], ["rocket", "Your score decides your hustle level"]]
    },
    { type: "rules" },

    // ---------- Round 1: Pick a hustle ----------
    {
      type: "learn", door: 1,
      title: "The best first hustle starts from what you already have.",
      points: [["A skill", "Drawing, editing, baking, tutoring, coding"], ["A network", "Your hostel, department or apartment"], ["Free time", "Weekends and evenings, not exam weeks"]],
      highlightLast: true,
      side: { label: "Easy student hustles", items: [["pen-tool", "Make", "Handmade cards, bakes, prints"], ["users", "Serve", "Tutoring juniors, notes, editing"], ["store", "Resell", "Stationery, snacks, phone accessories"]] }
    },
    HQ(1, "Pick a Hustle", {
      prompt: "Sneha is great at drawing and has a tablet. Which first hustle fits her best?",
      options: ["Opening a big café near RK Beach right away", "Custom digital portraits and birthday cards", "Importing phones from another country", "Starting a car rental company"], answer: 1,
      hint: "What can she start this weekend with what she has?",
      note: "It uses her skill and her tablet, costs almost nothing to start, and friends already need birthday gifts.", badge: "pen-tool"
    }),
    HQ(1, "Pick a Hustle", {
      prompt: "Which is the WORST reason to choose a side hustle?",
      options: ["“My friends often ask me for this.”", "“I can start it with things I already own.”", "“A video said it makes ₹1 lakh a month.”", "“I enjoy doing it and I am good at it.”"], answer: 2,
      hint: "Which one is about someone else’s claim, not your situation?",
      note: "“Easy money” videos rarely show the full picture. Start from your skills and real demand around you.", badge: "x"
    }),
    HQ(1, "Pick a Hustle", {
      prompt: "Exams are in 3 weeks. Sneha wants to start now. Best plan?",
      options: ["Start fully now and skip some study time", "Drop the idea forever and never try", "Ask friends to cover her assignments", "Plan now, start small after exams"], answer: 3,
      hint: "Can she do both?",
      note: "Plan and test quietly, launch after exams. A hustle should fit around studies, not replace them.", badge: "clock",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Test demand ----------
    {
      type: "learn", door: 2,
      title: "Test the idea before you spend money on it.",
      points: [["Ask real people", "Not “Will you like it?” but “Will you pay ₹150 for it?”"], ["Take pre-orders", "People paying before you make it is the strongest proof"], ["Make 5, not 50", "Sell a few first. Then buy more"]],
      highlightLast: true,
      side: { label: "Strong vs weak proof", items: [["x", "“Nice idea!”", "Friends are polite"], ["check", "“Here is ₹150, make me one.”", "Real demand"], ["check", "A poll with 30 votes", "A good early signal"]] }
    },
    HQ(2, "Test Demand", {
      prompt: "Which is the STRONGEST sign that people want Sneha’s portraits?",
      options: ["Her mother says they are beautiful", "40 likes on her Instagram post", "8 friends paid in advance for one", "Her friend says “You should sell these”"], answer: 2,
      hint: "Words are free. Money is not.",
      note: "Paying in advance is the strongest proof. Likes and compliments are nice, but they do not pay bills.", badge: "indian-rupee"
    }),
    HQ(2, "Test Demand", {
      prompt: "Ravi wants to sell T-shirts. A supplier gives a discount on 200 pieces. What should he do first?",
      options: ["Buy all 200 to get the discount", "Sell 10 to 20 first, then reorder", "Buy 500 for a bigger discount", "Borrow money and buy 1,000"], answer: 1,
      hint: "What happens if only 30 sell?",
      note: "A discount on stock that does not sell is a loss. Prove demand with a small batch, then grow.", badge: "tag"
    }),
    HQ(2, "Test Demand", {
      prompt: "Which question gets the most useful answer?",
      options: ["“Would you buy this if I made it?”", "“Do you like my idea, honestly?”", "“Is this a good business idea?”", "“Will you pay ₹150 now for Sunday?”"], answer: 3,
      hint: "Which one asks for real action?",
      note: "A clear price and a real commitment. If they say yes and pay, you have a customer.", badge: "message-circle",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Start tiny ----------
    {
      type: "learn", door: 3,
      title: "Start with almost no money. Grow with the money you earn.",
      points: [["Make to order", "Only make what is already paid for"], ["Borrow or share tools", "Rent a printer hour, do not buy a printer"], ["Free tools first", "WhatsApp, Instagram, Google Forms and UPI"]],
      highlightLast: true,
      side: { label: "₹2,000 well spent", items: [["check", "Samples to show", "Small and cheap"], ["check", "Packing for first orders", "Only what is needed"], ["x", "A logo agency and fancy website", "Not yet"]] }
    },
    HQ(3, "Start Tiny", {
      prompt: "Sneha has ₹2,000. What should she spend it on first?",
      options: ["A paid logo and a website", "Paid ads on day one", "Samples and packing", "A big stock of photo frames"], answer: 2,
      hint: "What helps her get the first paid orders?",
      note: "Spend on what directly gets the first orders. Logos, websites and ads can wait until people are buying.", badge: "indian-rupee"
    }),
    HQ(3, "Start Tiny", {
      prompt: "What does “make to order” mean?",
      options: ["Make only after an order is placed", "Make a lot first and hope people buy", "Order ready products from a big factory", "Make things only on festival days"], answer: 0,
      hint: "Which comes first: the order or the making?",
      note: "No unsold stock, no wasted money. Perfect for beginners.", badge: "list-checks"
    }),
    HN(3, "Start Tiny", {
      prompt: "Sneha takes 6 pre-orders at ₹200 each. How much money does she collect before making anything?",
      answer: 1200,
      hint: "6 × 200.",
      note: "₹1,200 collected in advance. Customers’ money now pays for the materials, not her savings.", badge: "indian-rupee",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Name one side hustle YOU could start this month, and how you would test it for under ₹500.", note: "Your skill, your first 5 customers, your test.", points: 100 },

    // ---------- Round 4: First customers ----------
    {
      type: "learn", door: 4,
      title: "Your first 10 customers are people who already know you.",
      points: [["Start close", "Friends, hostel, class and family groups"], ["Show the work", "Photos and short videos of real orders"], ["Happy customers bring more", "Ask each one to share a photo or tell a friend"]],
      highlightLast: true,
      side: { label: "Where to post", items: [["users", "Hostel and class groups", "Ask the admin first"], ["smartphone", "One Instagram page", "Real photos, real prices"], ["star", "Customer photos", "Proof from real people"]] }
    },
    HQ(4, "First Customers", {
      prompt: "Where should Sneha find her first 10 customers?",
      options: ["Paid ads shown across all of India", "Her hostel, class and family groups", "Random strangers on the street", "Big companies’ HR departments"], answer: 1,
      hint: "Who already trusts her?",
      note: "People who know you trust you faster. Start close, then grow outward.", badge: "users"
    }),
    HQ(4, "First Customers", {
      prompt: "Which Instagram post will bring more orders?",
      options: ["A long post about her dreams and her struggles in life", "A plain text post that only says “Orders open now”", "A motivational quote with no picture of her work", "A real portrait with the price and how to order"], answer: 3,
      hint: "What does a buyer need to decide?",
      note: "Show the product, the price and how to order. Make it easy to say yes.", badge: "smartphone"
    }),
    HQ(4, "First Customers", {
      prompt: "A customer loved her portrait. What is the best next step?",
      options: ["Never contact that customer again", "Ask them to share a photo or refer a friend", "Increase the price for them only", "Ask them to order 10 more today"], answer: 1,
      hint: "Happy customers are your best marketing.",
      note: "A real customer’s photo or a friend’s recommendation is more convincing than any ad.", badge: "heart",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Track every rupee ----------
    {
      type: "learn", door: 5,
      title: "Sales is not profit. Track every rupee.",
      points: [["Money in", "Everything customers paid"], ["Money out", "Materials, packing, delivery, printing, even auto fare"], ["Profit", "Money in minus every cost"]],
      highlightLast: true,
      side: { label: "Simple habits", items: [["file-text", "One notebook or sheet", "Write every rupee, every day"], ["indian-rupee", "Separate UPI account", "Do not mix with pocket money"], ["chart-column", "Check weekly", "Which product earns most?"]] }
    },
    HN(5, "Track Every Rupee", {
      prompt: "In one month Sneha sells ₹4,000. Materials ₹1,200, packing ₹300, delivery ₹500. What is her profit in rupees?",
      answer: 2000,
      hint: "4,000 − 1,200 − 300 − 500.",
      note: "₹2,000 profit. Her sales were ₹4,000, but half went to costs. Always count every cost.", badge: "indian-rupee"
    }),
    HQ(5, "Track Every Rupee", {
      prompt: "Why should Sneha keep hustle money separate from pocket money?",
      options: ["Banks do not allow mixed money in one account", "To see if the hustle really earns", "So her parents do not find out", "It looks more professional on Instagram"], answer: 1,
      hint: "If it is all mixed, can she tell profit from pocket money?",
      note: "Mixed money hides the truth. A separate account or wallet shows exactly what the hustle earns.", badge: "landmark"
    }),
    HQ(5, "Track Every Rupee", {
      prompt: "Ravi sold ₹10,000 of T-shirts and says, “I made ₹10,000!” What is wrong?",
      options: ["Nothing, that is his profit", "That is sales, not profit", "He should say ₹1,00,000", "T-shirts never make money"], answer: 1,
      hint: "Did the T-shirts cost him anything?",
      note: "Sales and profit are different. If the T-shirts cost ₹7,000, he made ₹3,000.", badge: "chart-column",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Safe and balanced (double) ----------
    {
      type: "learn", door: 6,
      title: "A good hustle is safe, legal and fits around your studies.",
      points: [["Follow the rules", "Selling food needs FSSAI registration. Check college rules for selling on campus"], ["Watch for scams", "“Pay ₹999 to become a reseller” offers are often traps"], ["Fix hustle hours", "Studies come first, especially in exam weeks"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["shield", "Rules and scams", "Protect your money and name"], ["mic", "Then the final challenge", "Pitch your own hustle"]] }
    },
    HQ(6, "Safe and Balanced", {
      double: true,
      prompt: "Sneha’s friend wants to sell home-made brownies regularly. What should she check?",
      options: ["Nothing, home food needs no rules", "Only how many likes her Instagram page gets", "Whether brownies are popular in Delhi", "FSSAI registration and campus rules"], answer: 3,
      hint: "Food is about people’s health.",
      note: "Anyone selling food regularly in India needs at least a basic FSSAI registration. Colleges may also have their own rules.", badge: "shield"
    }),
    HQ(6, "Safe and Balanced", {
      double: true,
      prompt: "A message says: “Pay ₹999 joining fee and earn ₹50,000 a month reselling from home!” What is it most likely?",
      options: ["A great chance to get rich quickly", "A government scheme for students", "Likely a scam", "A normal job offer from a real company"], answer: 2,
      hint: "Real businesses pay you. Who is paying whom here?",
      note: "Pay-to-join schemes with huge promised income are common traps. Never pay to “join” a business you cannot verify.", badge: "shield"
    }),
    HQ(6, "Safe and Balanced", {
      double: true,
      prompt: "Orders are growing and Sneha’s attendance is dropping. Best move?",
      options: ["Fixed hours, pause in exams", "Drop out of college to focus on orders", "Take every order and sleep 3 hours", "Stop the hustle forever"], answer: 0,
      hint: "Can she keep both?",
      note: "Set fixed hours, pause during exams, and say no to some orders. Growing slowly is better than burning out.", badge: "clock",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best pitch wins +200", prompt: "Pitch your hustle in 30 seconds: what you sell, to whom, price, and how you will test it.", note: "The room votes with claps. The host picks the winner.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "Side Hustle Starter Plan", note: "Screenshot this. Follow it before you spend a single rupee.", items: PLAN },
    {
      type: "end",
      joinTitle: "Join EduMoon Entrepreneurship",
      joinText: "Startup games, founder talks and real student businesses. Build something, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
