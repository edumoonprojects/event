// Business Models 101 (EduMoon Entrepreneurship). For all years.
// How companies actually make money: selling products, services, subscriptions, ads, commissions and freemium. All brands and numbers are made up.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const BQ = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 40, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const BN = (round, name, extra) => BQ(round, name, Object.assign({ kind: "number", time: 60 }, extra));

// The take-home card: 7 ways businesses make money.
const MODELS = [
  ["Business model", "Who pays, for what, and how often. That is the whole idea."],
  ["Product sale", "Make something, sell it once. Phones, T-shirts, cakes."],
  ["Service", "Sell your time or skill. Tutoring, repairs, design, consulting."],
  ["Subscription", "Pay every month or year to keep using it. Music, gyms, software."],
  ["Ads", "Free for users. Advertisers pay to reach them. Video and social apps."],
  ["Commission", "Connect buyers and sellers and take a cut. Food delivery, ride apps, marketplaces."],
  ["Freemium", "Basic is free, extras are paid. Many apps and games."],
  ["Ask of any company", "Who is the customer, and who is the user? They are not always the same."]
];

window.GAME = {
  id: "business-models-101",
  title: "Business Models 101",
  club: "Entrepreneurship",
  tagline: "Free apps, cheap rides, unlimited music. So how do these companies make money?",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "35 minutes", level: "Beginner",
    about: "Varun uses 20 apps a day and pays for almost none of them. So how do they make money? In 6 rounds, teams learn what a business model is, then explore products, services, subscriptions, ads, commissions and freemium, with made-up Indian examples and simple maths. The final round asks teams to pick the right model for new student startup ideas.",
    outcomes: "The 6 most common ways businesses make money, the difference between the user and the customer, and how to choose a model for your own idea.",
    tone: "Students use these business models every day without noticing. Ask the room how many apps they used today and how many they paid for. All brands here are made up, so the focus stays on the idea, not on any real company.",
    extra: [["Make it real", "After each round, ask: “Name one app on your phone that works like this.” Quick answers, no debate."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Decoded",
    rulesEyebrow: "How Business Models 101 works", rulesTitle: "Learn the model. Follow the money. Score.",
    learnText: "The host explains one way businesses make money.", crackTitle: "Decode",
    crackText: "Pick your answer on your phone and lock it in.",
    rulesExtra: "Some questions need a typed number. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Following the money is harder than it looks!", cracked: "followed the money",
    next: "Next round →", finale: "Next →", winner: "are today’s business model experts!", endLine: "Varun finally knows who pays."
  },
  offerEyebrow: "EduMoon Entrepreneurship · Business sense",
  offerTitle: "Your business sense",
  offers: [
    { min: 0.7, icon: "trending-up", title: "Business Brain", text: "You see the money behind every app. Try Startup Tycoon next." },
    { min: 0.45, icon: "chart-column", title: "Money Tracker", text: "Strong! Pick 3 apps on your phone and name their model." },
    { min: 0.2, icon: "lightbulb", title: "Curious Founder", text: "Good start. Read the 7 models below once more." },
    { min: 0, icon: "book-open", title: "Business Beginner", text: "Everyone starts here. Ask “Who pays?” for every app you use." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Entrepreneurship · Follow the money",
      title: "Varun uses 20 apps a day and pays for almost none of them. So who is paying? Can your team follow the money?",
      cards: [["indian-rupee", "6 ways businesses make money"], ["chart-column", "Simple maths with made-up apps"], ["trophy", "Your score decides your business sense"]]
    },
    { type: "rules" },

    // ---------- Round 1: What is a business model? ----------
    {
      type: "learn", door: 1,
      title: "A business model is who pays, for what, and how often.",
      points: [["Who pays?", "Sometimes the user, sometimes someone else"], ["For what?", "A product, a service, access or attention"], ["How often?", "Once, every month, or every order"]],
      highlightLast: true,
      side: { label: "Same idea, different models", items: [["film", "Movie ticket", "You pay once"], ["clock", "Streaming app", "You pay monthly"], ["eye", "Free video app", "Advertisers pay"]] }
    },
    BQ(1, "What Is a Business Model?", {
      prompt: "Which question best describes a business model?",
      options: ["How big is the company’s office?", "Who pays, for what, and how often?", "How many people work there?", "How old is the founder?"], answer: 1,
      hint: "Follow the money.",
      note: "A business model is simply how money comes in: who pays, for what, and how often.", badge: "indian-rupee"
    }),
    BQ(1, "What Is a Business Model?", {
      prompt: "Varun watches videos free on a made-up app, VidMela. Who most likely pays VidMela?",
      options: ["Advertisers who show ads", "Nobody, it is a charity", "The government of India", "Varun, without knowing it"], answer: 0,
      hint: "What appears before and between videos?",
      note: "Free apps often earn from advertisers. The user is not always the customer.", badge: "eye"
    }),
    BQ(1, "What Is a Business Model?", {
      prompt: "For a free ad-supported app, who is the CUSTOMER?",
      options: ["The users who watch", "The app’s employees", "The advertisers who pay", "The phone company"], answer: 2,
      hint: "The customer is the one who pays.",
      note: "Users use it, advertisers pay for it. Knowing the difference explains why apps want your attention.", badge: "users",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Products and services ----------
    {
      type: "learn", door: 2,
      title: "The oldest models: sell a product or sell a service.",
      points: [["Product", "Make it once, sell it: phones, cakes, T-shirts"], ["Service", "Sell time or skill: tutoring, repairs, design"], ["The catch", "You must keep finding new sales to keep earning"]],
      highlightLast: true,
      side: { label: "Examples", items: [["store", "Product", "A bakery selling cakes"], ["wrench", "Service", "A phone repair shop"], ["pen-tool", "Service", "A student designing posters"]] }
    },
    BQ(2, "Products and Services", {
      prompt: "Which of these is a SERVICE business?",
      options: ["A shop selling school bags", "A home tuition centre", "A factory making bicycles", "A stall selling mangoes"], answer: 1,
      hint: "Which one sells time and skill?",
      note: "Tuition sells teaching time. The others sell physical products.", badge: "graduation-cap"
    }),
    BN(2, "Products and Services", {
      prompt: "A made-up repair shop, FixIt Vizag, charges ₹300 per screen repair and does 8 repairs a day. How many rupees does it earn in a day?",
      answer: 2400,
      hint: "300 × 8.",
      note: "₹2,400 a day. Service income grows with the number of jobs, but each job needs time.", badge: "wrench"
    }),
    BQ(2, "Products and Services", {
      prompt: "What is the biggest weakness of a one-time product sale?",
      options: ["You need new sales to keep earning", "Products cannot be sold online", "Customers never pay for products", "Products are always too cheap"], answer: 0,
      hint: "What happens next month?",
      note: "Once a customer buys a bag, they may not buy again for years. You must keep finding buyers.", badge: "store",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Subscriptions ----------
    {
      type: "learn", door: 3,
      title: "Subscriptions: pay regularly to keep using it.",
      points: [["Monthly or yearly", "Music, streaming, gyms, cloud storage, software"], ["Steady money", "The company can plan because income repeats"], ["Must keep you happy", "If you cancel, the money stops"]],
      highlightLast: true,
      side: { label: "Why companies love it", items: [["timer", "Repeat income", "Every month"], ["chart-column", "Easy to plan", "Known numbers"], ["heart", "Loyal users", "If the product is good"]] }
    },
    BN(3, "Subscriptions", {
      prompt: "A made-up music app, SurTune, costs ₹99 a month. How much does one user pay in a year, in rupees?",
      answer: 1188,
      hint: "99 × 12.",
      note: "₹1,188 a year. Small monthly amounts add up, which is why many apps prefer subscriptions.", badge: "timer"
    }),
    BQ(3, "Subscriptions", {
      prompt: "SurTune offers ₹999 a year instead of ₹99 a month. Why would it offer a cheaper yearly plan?",
      options: ["Money upfront, users stay longer", "It made a simple maths mistake", "Because yearly users listen to less music", "The government forces it"], answer: 0,
      hint: "What does the company get on day one?",
      note: "Cash upfront, and users stay for a full year. That is worth a discount to the company.", badge: "indian-rupee"
    }),
    BQ(3, "Subscriptions", {
      prompt: "Which business fits a subscription model best?",
      options: ["A one-time wedding photographer", "A shop selling one sofa", "A monthly gym membership", "A one-day fest ticket"], answer: 2,
      hint: "Which one do people use again and again?",
      note: "Repeated use suits subscriptions. One-time needs suit one-time payments.", badge: "flame",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Name one app or service you pay for every month. Is it worth it? Why?", note: "Honest and quick. 15 seconds.", points: 100 },

    // ---------- Round 4: Ads ----------
    {
      type: "learn", door: 4,
      title: "Ads: the app is free, and your attention is what is sold.",
      points: [["Users pay with attention", "The more time you spend, the more ads you see"], ["Advertisers pay the app", "To show their products to the right people"], ["That is why apps feel addictive", "More time on the app means more money for it"]],
      highlightLast: true,
      side: { label: "Common in", items: [["film", "Video apps", ""], ["smartphone", "Social media", ""], ["gamepad-2", "Free mobile games", ""]] }
    },
    BQ(4, "Ads", {
      prompt: "Why does a free video app keep suggesting “just one more video”?",
      options: ["It wants you to sleep early", "It is a mistake in the app’s code", "More watch time, more ads", "The government tells it to"], answer: 2,
      hint: "More time on the app means more…",
      note: "Watch time means more ads, and more ads means more money. Knowing this helps you control your screen time.", badge: "eye"
    }),
    BN(4, "Ads", {
      prompt: "A made-up app earns ₹2 for every 1,000 ads shown. It shows 50 lakh (50,00,000) ads a day. How many rupees does it earn per day?",
      answer: 10000,
      hint: "How many thousands are in 50 lakh?",
      note: "50 lakh is 5,000 thousands. 5,000 × ₹2 = ₹10,000 a day. Ads need huge numbers of users to make real money.", badge: "chart-column"
    }),
    BQ(4, "Ads", {
      prompt: "Which business is LEAST suited to an ads model?",
      options: ["A video app with crores of users", "A news site read by lakhs of people", "A free game played by many students", "A private tutor with 10 students"], answer: 3,
      hint: "Ads need lots of eyes.",
      note: "Ads pay tiny amounts per view, so they need huge audiences. 10 students will not attract advertisers.", badge: "users",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Commission ----------
    {
      type: "learn", door: 5,
      title: "Commission: connect buyers and sellers, take a cut.",
      points: [["A marketplace", "The app does not cook the food or drive the car"], ["It takes a percentage", "From each order, ride or sale"], ["Both sides must stay happy", "Too high a cut and sellers leave"]],
      highlightLast: true,
      side: { label: "Marketplace examples", items: [["store", "Food delivery", "Restaurants pay a cut"], ["map", "Ride apps", "Drivers pay a cut"], ["tag", "Online stores", "Sellers pay a cut"]] }
    },
    BN(5, "Commission", {
      prompt: "A made-up food app, Tiffin Tap, takes 20% commission. A restaurant gets a ₹500 order. How many rupees does Tiffin Tap keep?",
      answer: 100,
      hint: "20% of 500.",
      note: "₹100. The restaurant keeps ₹400. Small cuts on thousands of orders become big money.", badge: "indian-rupee"
    }),
    BQ(5, "Commission", {
      prompt: "Who does a ride app NEED to keep happy to survive?",
      options: ["Only the riders", "Both riders and drivers", "Only the drivers", "Only the investors"], answer: 1,
      hint: "What if drivers leave? What if riders leave?",
      note: "A marketplace needs both sides. No drivers means no rides, and no riders means no income for drivers.", badge: "users"
    }),
    BQ(5, "Commission", {
      prompt: "Tiffin Tap raises its cut from 20% to 45%. What is the biggest risk?",
      options: ["Customers will order much more", "Restaurants may leave", "The app will become much faster", "Nothing will change"], answer: 1,
      hint: "Who pays the cut?",
      note: "Restaurants may leave or raise prices, and then customers leave too. Greedy cuts can break a marketplace.", badge: "trending-up",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Freemium and choosing a model (double) ----------
    {
      type: "learn", door: 6,
      title: "Freemium: free to start, pay for more. And how to pick a model.",
      points: [["Freemium", "Basic is free; extra storage, features or no-ads are paid"], ["Only a few pay", "So the free part must attract many users"], ["Pick the model that fits", "How often people need it, and who has the money"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["lightbulb", "Pick the model", "For student startup ideas"], ["mic", "Then the final challenge", "Your idea, your model"]] }
    },
    BQ(6, "Choose the Model", {
      double: true,
      prompt: "A made-up notes app is free for 5 notebooks; unlimited notebooks cost ₹49 a month. Which model is this?",
      options: ["Ads", "Commission", "Product sale", "Freemium"], answer: 3,
      hint: "Free to start, pay for more.",
      note: "Freemium. Most users stay free; a smaller group pays for more, and that pays for everyone.", badge: "sparkles"
    }),
    BQ(6, "Choose the Model", {
      double: true,
      prompt: "A student app connects juniors with seniors for paid project help. Which model fits best?",
      options: ["Ads shown to five users", "A one-time sale of the app", "Free forever with no income", "Commission on each session"], answer: 3,
      hint: "It connects two sides.",
      note: "It is a marketplace: juniors pay, seniors earn, the app takes a small cut on each session.", badge: "handshake"
    }),
    BQ(6, "Choose the Model", {
      double: true,
      prompt: "A hostel laundry service washes clothes every week for the same students. Which model fits best?",
      options: ["A weekly or monthly subscription", "Ads on the washing machine", "Commission from the clothes", "A one-time sale"], answer: 0,
      hint: "Same customers, every week.",
      note: "Regular, repeated use suits a subscription: steady income for the business and an easy plan for students.", badge: "clock",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best idea wins +200", prompt: "In 30 seconds: your startup idea, who pays, and which business model you would use.", note: "The room claps. The host picks the clearest answer.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "7 Ways Businesses Make Money", note: "Screenshot this. Ask “Who pays?” for every app you use this week.", items: MODELS },
    {
      type: "end",
      joinTitle: "Join EduMoon Entrepreneurship",
      joinText: "Startup games, founder talks and real student businesses. Build something, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
