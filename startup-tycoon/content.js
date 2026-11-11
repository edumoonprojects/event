// Startup Tycoon (EduMoon Entrepreneurship). For all years.
// Teams run CampusEats, a food delivery startup inside college hostels, for 6 "months".
// Each question is a decision with one best choice; the reveal explains why.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const TQ = (month, name, extra) => Object.assign({ type: "door", kind: "choice", time: 50, board: false, eyebrow: `Month ${month} · ${name}` }, extra);

// The take-home card: a first-startup checklist.
const CHECKLIST = [
  ["Start with a real problem", "One you’ve seen people complain about, not just a cool idea."],
  ["Talk to 20 people first", "Before you build anything. Listen more than you pitch."],
  ["Build the smallest test", "A WhatsApp group or a Google Form can be your first product."],
  ["Count repeat customers", "People coming back matters more than first-time downloads."],
  ["Know your numbers", "Cost per order, price, profit per order. Every week."],
  ["Spend on what you can measure", "Referrals and offers you can track beat big posters."],
  ["Put the co-founder deal in writing", "Who owns what, and what happens if someone leaves."],
  ["Don’t give away too much too early", "Try incubators, grants and competitions before big equity deals."]
];

window.GAME = {
  id: "startup-tycoon",
  title: "Startup Tycoon",
  club: "Entrepreneurship",
  tagline: "Run a campus startup for 6 months. Every decision changes your valuation.",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "40 minutes", level: "Medium",
    about: "Each team runs CampusEats, a food delivery startup inside college hostels, for 6 “months”. Every month is a set of decisions: choosing the problem, finding the first customers, pricing, marketing on a tiny budget, picking a co-founder and meeting an investor. Each decision has a best choice, explained at the reveal. The game ends with a Shark Tank-style pitch and a valuation for every team.",
    outcomes: "How real startups begin (problem first, small tests, repeat customers), the basic numbers every founder must know, and a first-startup checklist.",
    tone: "Share your own founder stories here; nothing teaches better than “When we started EduMoon, we…”. Many decisions have more than one reasonable answer in real life. If a team argues well for another option, give them the +50 explain bonus.",
    extra: [["About the numbers", "All prices, costs and investor offers in the game are simple made-up examples to teach the ideas, not real market figures."]]
  },
  words: {
    round: "Month", unlocked: "Decision", badgeLabel: "Smart move",
    rulesEyebrow: "How Startup Tycoon works", rulesTitle: "Hear the situation. Make the call. Grow your startup.",
    learnText: "The host shares one founder lesson for this month.", crackTitle: "Decide",
    crackText: "Make your decision on your phone and lock it in.",
    rulesExtra: "Speak (optional): <b>+100</b>. Month 6: <b>double</b>. Shark pitch: <b>+200</b>!",
    nobody: "Nobody picked this one. Plenty of real founders make the same mistake!", cracked: "made the smart move",
    next: "Next month →", finale: "Next →", winner: "built the most valuable startup!", endLine: "6 months survived. You’re a founder now!"
  },
  offerEyebrow: "CampusEats · After 6 months",
  offerTitle: "Your startup’s valuation",
  offers: [
    { min: 0.7, icon: "rocket", title: "₹1 crore valuation", text: "Investors are calling you. Smart, careful and customer-obsessed." },
    { min: 0.45, icon: "chart-column", title: "₹50 lakh valuation", text: "A real business! A few sharper decisions and you’re flying." },
    { min: 0.2, icon: "users", title: "₹10 lakh valuation", text: "You survived, which most startups don’t. Learn from the reveals." },
    { min: 0, icon: "book-open", title: "Back to the drawing board", text: "Every founder fails at something first. Try again with the checklist." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Entrepreneurship · Startup Tycoon",
      title: "You and your friends just started CampusEats: food delivery inside college hostels. You have 6 months and ₹10,000. Can your team build something valuable?",
      cards: [["rocket", "6 months, 18 real founder decisions"], ["lightbulb", "Each decision has a best move, explained"], ["chart-column", "Your score decides your valuation"]]
    },
    { type: "rules" },

    // ---------- Month 1: The idea ----------
    {
      type: "learn", door: 1,
      title: "Start with a problem, not an idea.",
      points: [["Ideas are cheap", "Problems people actually feel are valuable"], ["Listen before you build", "Talk to 20 possible customers first"], ["Build the smallest test", "An MVP: the simplest version that proves people want it"]],
      highlightLast: true,
      side: { label: "CampusEats’ first test", items: [["message-circle", "A WhatsApp group", "Not an app"], ["file-text", "A Google Form menu", "Not a website"], ["users", "2 friends delivering", "Not a delivery fleet"]] }
    },
    TQ(1, "The Idea", {
      prompt: "Why might food delivery inside hostels be a good startup problem?",
      options: ["It sounds cool and would look good on Instagram", "Friends complain the canteen shuts at 9 PM", "A big company already does it in every city", "Your uncle said it’s the next big thing"], answer: 1,
      hint: "Which reason is about a real problem people have?",
      note: "A real, frequent complaint from real people is the best starting point. That’s a problem worth solving.", badge: "lightbulb"
    }),
    TQ(1, "The Idea", {
      prompt: "Before building an app, what should you do first?",
      options: ["Take orders on WhatsApp for a week", "Design a professional logo and brand colours", "Hire 3 developers to build the full app", "Rent a small office near the college gate"], answer: 0,
      hint: "What’s the cheapest way to learn if students will actually order?",
      note: "If students order through WhatsApp, you’ve proved demand for ₹0. Build the app only after that.", badge: "smartphone"
    }),
    TQ(1, "The Idea", {
      prompt: "What does MVP mean for a startup?",
      options: ["Maximum Value Pricing, the best price you can charge", "A finished product with every feature ready", "Most Valuable Player in the founding team", "The simplest version that tests demand"], answer: 3,
      hint: "Think “smallest test”.",
      note: "An MVP is about learning fast, not looking perfect. Most successful products started embarrassingly simple.", badge: "rocket",
      board: true, boardLabel: "after Month 1"
    }),

    // ---------- Month 2: First customers ----------
    {
      type: "learn", door: 2,
      title: "Your first 10 customers come from people, not ads.",
      points: [["Go to them", "Hostel WhatsApp groups, friends, your own floor"], ["Ask for feedback", "What was slow? What would make them order again?"], ["Watch who comes back", "Repeat customers prove you’re solving a real problem"]],
      highlightLast: true,
      side: { label: "Early numbers to track", items: [["users", "Orders per day", "Is it growing?"], ["route", "Delivery time", "Is it getting faster?"], ["heart", "Repeat customers", "The most important one"]] }
    },
    TQ(2, "First Customers", {
      prompt: "How should CampusEats get its first 10 customers?",
      options: ["Post in hostel groups and ask friends to try", "Wait for people to find the service on their own", "Print 1,000 posters and put them all over town", "Buy a ₹5,000 ad in a city newspaper"], answer: 0,
      hint: "What’s free, personal and fast?",
      note: "The first customers come from doing things that don’t scale: personal messages, your own network, your own floor.", badge: "message-circle"
    }),
    TQ(2, "First Customers", {
      prompt: "Students say: “Delivery takes 45 minutes, too slow.” What should you do?",
      options: ["Raise prices so fewer people order", "Add 20 new dishes to make the menu exciting", "Ignore it, they’ll get used to the wait", "Fix delivery speed first"], answer: 3,
      hint: "What problem are customers actually telling you about?",
      note: "Fix the thing customers complain about before adding features. A fast, simple service beats a slow, big one.", badge: "clock"
    }),
    TQ(2, "First Customers", {
      prompt: "Which number matters MOST in your first 2 months?",
      options: ["How many students order again", "How nice the logo looks", "How many people liked your post", "Instagram followers"], answer: 0,
      hint: "Which one proves people really need you?",
      note: "Repeat customers mean real value. Likes and followers can look good without anyone paying.", badge: "heart",
      board: true, boardLabel: "after Month 2"
    }),

    // ---------- Month 3: Pricing ----------
    {
      type: "learn", door: 3,
      title: "Know your numbers, or you’ll grow your losses.",
      points: [["Cost per order", "Delivery person, packaging, travel"], ["Price", "What the customer pays you for each order"], ["Profit per order", "Price minus cost. If it’s negative, more orders = more loss"]],
      highlightLast: true,
      side: { label: "CampusEats’ numbers (example)", items: [["file-text", "Cost per delivery", "₹15"], ["chart-column", "Delivery fee", "₹20"], ["check", "Profit per order", "₹5"]] }
    },
    TQ(3, "Pricing", {
      prompt: "Each delivery costs you ₹15. What delivery fee makes sense to start?",
      options: ["₹100, so you make a big profit quickly", "₹5, so everyone tries it at least once", "Free, forever, to beat every competitor", "₹20, it covers cost with a small profit"], answer: 3,
      hint: "Which price covers the cost and still feels fair to students?",
      note: "Below cost, every order loses money. Way above, nobody orders. Cover your cost, plus a little.", badge: "chart-column"
    }),
    TQ(3, "Pricing", {
      prompt: "A big competitor launches with FREE delivery. What’s your smartest response?",
      options: ["Shut down, you can’t beat a big company", "Win on speed and late-night hostel delivery", "Complain about them on Instagram", "Also go free, even if you lose on every order"], answer: 1,
      hint: "Can a small startup win a money war against a big company?",
      note: "Don’t fight where they’re strongest. Win on speed, service and knowing your customers personally.", badge: "shield"
    }),
    TQ(3, "Pricing", {
      kind: "number", time: 60,
      prompt: "You make ₹5 profit per order and get 40 orders a day. What’s your profit in 30 days, in rupees?",
      answer: 6000,
      hint: "Profit per day first: ₹5 × 40.",
      trace: [["Per day", "₹5 × 40 = ₹200"], ["30 days", "₹200 × 30 = ₹6,000"]],
      note: "₹6,000 a month. Small, but real, and it grows with every repeat customer.", badge: "landmark",
      board: true, boardLabel: "after Month 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Pitch CampusEats in one sentence to a student who has never heard of it.", note: "Who it’s for + the problem + why you’re better. Short and clear.", points: 100 },

    // ---------- Month 4: Marketing on ₹2,000 ----------
    {
      type: "learn", door: 4,
      title: "With a tiny budget, spend only on what you can measure.",
      points: [["Referrals", "Happy customers bring friends, and you can count them"], ["Show, don’t tell", "A real delivery in 10 minutes beats a pretty logo"], ["Track every channel", "Ask “How did you hear about us?” or use a different code for each"]],
      highlightLast: true,
      side: { label: "Cheap growth ideas", items: [["users", "Refer a friend", "Both get ₹20 off"], ["film", "Real reels", "Behind the scenes, real orders"], ["star", "Hostel ambassadors", "One person per block"]] }
    },
    TQ(4, "Marketing", {
      prompt: "You have ₹2,000 for marketing. Best use?",
      options: ["Save it and do nothing until you grow", "One big banner at the college gate", "Referral: both friends get ₹20 off", "Pay an influencer with 1 million followers elsewhere"], answer: 2,
      hint: "Which one reaches the right people, and can you measure it?",
      note: "Referrals bring the right people (students in your hostels) and you know exactly how many came.", badge: "users"
    }),
    TQ(4, "Marketing", {
      prompt: "Which Instagram post will probably bring the most orders?",
      options: ["A motivational quote about hard work and success", "A post saying “Follow us for more updates!”", "A poster of your logo and brand colours", "A reel: 11 PM order, delivered in 10 minutes"], answer: 3,
      hint: "Which one shows the problem being solved?",
      note: "Showing the real experience sells. Students see it and think, “I want that tonight.”", badge: "film"
    }),
    TQ(4, "Marketing", {
      prompt: "How do you know which marketing actually worked?",
      options: ["Guess from how busy the week feels", "Count the likes on each post", "A different discount code per channel", "Ask your parents what they think"], answer: 2,
      hint: "Likes aren’t orders.",
      note: "Track orders by channel, then spend more on what works and stop what doesn’t.", badge: "search",
      board: true, boardLabel: "after Month 4"
    }),

    // ---------- Month 5: The team ----------
    {
      type: "learn", door: 5,
      title: "Your co-founder decision matters more than your idea.",
      points: [["Different skills", "If you sell, find someone who builds, and the other way round"], ["Same commitment", "Someone who will still be here in a hard month"], ["Write it down", "Who owns how much, and what happens if someone leaves"]],
      highlightLast: true,
      side: { label: "Common co-founder fights", items: [["x", "“I did more work”", "No clear roles"], ["x", "“That was my idea”", "No written agreement"], ["x", "“I’m leaving with my share”", "No vesting"]] }
    },
    TQ(5, "The Team", {
      prompt: "You’re great at selling. Who’s the best co-founder?",
      options: ["Another great salesperson, just like you", "A friend who can build the app and run operations", "Whoever offers to join first", "Your best friend who isn’t interested in startups"], answer: 1,
      hint: "What skill is missing from your team?",
      note: "Complementary skills plus real commitment. Friendship alone isn’t enough.", badge: "users"
    }),
    TQ(5, "The Team", {
      prompt: "How should co-founders agree on who owns what?",
      options: ["A simple written agreement, shares earned over time", "Whoever had the idea owns everything", "A handshake is enough between good friends", "Decide later, once you’re successful"], answer: 0,
      hint: "What protects the friendship if things go wrong?",
      note: "Write it down early, while everyone is happy. Shares earned over time (called vesting) protect everyone if someone leaves.", badge: "scroll"
    }),
    TQ(5, "The Team", {
      prompt: "Your co-founder has stopped doing their part. What first?",
      options: ["Remove them from the WhatsApp group quietly", "Do their work silently and stay angry", "Have an honest one-to-one talk early", "Post about it online so they feel bad"], answer: 2,
      hint: "Remember the HR Round answer about teammates?",
      note: "Talk early and honestly. Most co-founder problems get worse the longer they stay unsaid.", badge: "message-circle",
      board: true, boardLabel: "after Month 5"
    }),

    // ---------- Month 6: The investor (double) ----------
    {
      type: "learn", door: 6,
      title: "Investors buy a share of your company. Know what you’re giving.",
      points: [["Valuation", "What the whole company is worth, based on the deal"], ["Equity", "The percentage of the company you give away"], ["Other options first", "College incubators, startup hubs, grants and competitions often give support for little or no equity"]],
      highlightLast: true,
      side: { label: "Final month", items: [["zap", "Double points", "Still anyone’s game!"], ["landmark", "An investor wants in", "Make the right call"], ["mic", "Then the Shark pitch", "Pitch your own idea"]] }
    },
    TQ(6, "The Investor", {
      double: true,
      prompt: "An investor offers ₹5 lakh for 40% of CampusEats, today. Best move?",
      options: ["Refuse all investors forever to stay in control", "Don’t rush. Compare offers, negotiate equity", "Ask for ₹5 crore instead and see what happens", "Accept immediately, it’s a lot of money"], answer: 1,
      hint: "How much of your company would be left for future rounds?",
      note: "Giving away 40% this early can hurt you later. Explore support that costs less equity first, and negotiate.", badge: "landmark"
    }),
    TQ(6, "The Investor", {
      double: true,
      prompt: "Your pitch to the investor should start with…",
      options: ["How much money you need and what you’ll spend it on", "Your college marks and achievements", "The problem and your traction: 1,200 orders a month", "Your logo, brand colours and app screenshots"], answer: 2,
      hint: "What do investors want to know first?",
      note: "Problem + proof that people want your solution. Numbers like repeat customers speak louder than any slide design.", badge: "mic"
    }),
    TQ(6, "The Investor", {
      double: true, kind: "number", time: 70,
      prompt: "An investor pays ₹5 lakh for 10% of your company. What is the whole company valued at, in lakhs?",
      answer: 50,
      hint: "If 10% is worth ₹5 lakh, what is 100% worth?",
      trace: [["10%", "₹5 lakh"], ["100%", "₹5 lakh × 10 = ₹50 lakh"]],
      note: "₹50 lakh. Valuation = amount invested ÷ equity given. Now you can read any Shark Tank deal.", badge: "chart-column",
      board: true, boardLabel: "after Month 6"
    }),

    { type: "speak", eyebrow: "Shark pitch · best one wins +200", prompt: "Pitch YOUR OWN startup idea in 45 seconds. The room is the investor.", note: "The problem, who has it, your simple first test, and why you. The room votes, the host decides.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "Your First-Startup Checklist", note: "Screenshot this. Use it the day you start your own.", items: CHECKLIST },
    {
      type: "end",
      joinTitle: "Join the EduMoon Skills Club",
      joinText: "Startup games, careers and real founder stories every week. Build something, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
