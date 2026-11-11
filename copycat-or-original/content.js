// Copycat or Original? (EduMoon Entrepreneurship). For all years.
// Famous Indian startups that look like global companies, and the small changes that made them win in India.
// Lesson: you don't need a brand-new idea; you need to fit your market. Copying a business model is fine; copying a brand is not.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const CO = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 40, board: false, eyebrow: `Round ${round} · ${name}` }, extra);

const ADAPT = [
  ["Start from a proven model", "If something works somewhere else, ask: would it work here?"],
  ["Change how people pay", "Cash, UPI, small amounts. Make paying easy and safe for your customer."],
  ["Change the vehicle or format", "Autos, bikes, WhatsApp, local languages: fit what people already use."],
  ["Change the price", "Smaller packs, lower prices, more customers."],
  ["Build trust first", "New customers try what feels safe: cash on delivery, free trials, reviews."],
  ["Fix what’s missing", "If restaurants have no delivery staff, bring your own."],
  ["Copy the model, never the brand", "Names, logos and code belong to their owners."],
  ["Add your own edge", "Speed, language, location or community that the big player doesn’t have."]
];

window.GAME = {
  id: "copycat-or-original",
  title: "Copycat or Original?",
  club: "Entrepreneurship",
  tagline: "Big Indian startups that looked like global ones, and the small changes that made them win.",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "35 minutes", level: "Beginner",
    about: "Many famous Indian startups began by looking a lot like a company from another country. They won by changing a few things for India: how people pay, what vehicle delivers, the price, the language, and how to build trust. In 5 rounds, teams match Indian startups to the global companies they resemble, guess what each one changed, learn why those changes mattered, adapt a global idea for their own campus, and learn the line between copying a model and copying a brand.",
    outcomes: "Students learn that a startup doesn’t need a never-seen-before idea, how to adapt a proven model to a local market, and why copying business models is normal while copying names, logos or code is not.",
    tone: "Fun and surprising: many students won’t know these stories. Keep it respectful to all companies; the point is that adapting well is a real skill. Facts are kept simple and general on purpose.",
    extra: [["Pairs with", "Idea or Not, Why Startups Fail and Investor Room. A great opener for an entrepreneurship series."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Adapted",
    rulesEyebrow: "How Copycat or Original? works", rulesTitle: "Spot the model. Guess the change. Adapt your own.",
    learnText: "The host shares one way Indian startups adapted a global idea.", crackTitle: "Guess",
    crackText: "Pick your answer on your phone and lock it in.",
    rulesExtra: "Faster answers score more. Speak (optional): <b>+100</b>. Round 5: <b>double</b>!",
    nobody: "Nobody got this one. Most founders don’t know this story either!", cracked: "got it right",
    next: "Next round →", finale: "Next →", winner: "are today’s smartest adapters!", endLine: "Don’t wait for a brand-new idea. Find a proven one and make it fit."
  },
  offerEyebrow: "EduMoon Entrepreneurship · Adapter results",
  offerTitle: "Your founder rank",
  offers: [
    { min: 0.7, icon: "crown", title: "Market Fit Master", text: "You see what to change and why. Pick one global app and adapt it for Vizag this week." },
    { min: 0.45, icon: "rocket", title: "Smart Adapter", text: "Strong! Next time you use an app, ask: what would make this work better here?" },
    { min: 0.2, icon: "lightbulb", title: "Idea Spotter", text: "Good start. Save the 8 adaptation moves and try them on one idea." },
    { min: 0, icon: "book-open", title: "Curious Founder", text: "Everyone starts here. Many great founders began exactly like this." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Entrepreneurship · Copycat or Original?",
      title: "Some of India’s biggest startups looked a lot like companies from other countries. So why did they win? Today your team finds out, and adapts an idea of your own.",
      cards: [["search", "Match startups to the models they resemble"], ["route", "Guess what they changed for India"], ["lightbulb", "Adapt a global idea for your campus"]]
    },
    { type: "rules" },

    // ---------- Round 1: Spot the model ----------
    {
      type: "learn", door: 1,
      title: "Many great startups start from a model that already works.",
      points: [["Business model", "How a company makes and delivers value, and how it earns"], ["Proven elsewhere", "If it works in one country, it may work in another"], ["The real question", "What has to change so it fits here?"]],
      highlightLast: true,
      side: { label: "Same model, different market", items: [["route", "Ride hailing", "Book a ride on your phone"], ["list-checks", "Online store", "Order anything, get it delivered"], ["zap", "Fantasy sports", "Pick a team, score points from real matches"]] }
    },
    CO(1, "Spot the Model", {
      prompt: "Flipkart started in 2007 selling books online, delivered to your door. Which global company did it look most like?",
      options: ["Netflix, the streaming service", "Amazon, the online store", "Uber, the ride-hailing app", "Google, the search engine"], answer: 1,
      hint: "Amazon also began by selling books online.",
      note: "Amazon. Flipkart’s founders had even worked at Amazon before starting it.", badge: "search"
    }),
    CO(1, "Spot the Model", {
      prompt: "Ola lets you book a cab from your phone and track it on a map. Which company is the closest match?",
      options: ["Uber", "Airbnb", "PayPal", "Instagram"], answer: 0,
      hint: "Book a ride with one tap.",
      note: "Uber. Same model: riders and drivers matched through an app.", badge: "route"
    }),
    CO(1, "Spot the Model", {
      prompt: "Dream11 lets you pick a team of real players and score points from real matches. What kind of model is this?",
      options: ["Online grocery delivery in 10 minutes", "Music streaming by monthly subscription", "Fantasy sports, big in the US", "A social network for sharing photos"], answer: 2,
      hint: "Pick players, earn points from their real performance.",
      note: "Fantasy sports, already huge in the US for American football. The big change? Cricket.", badge: "zap"
    }),
    CO(1, "Spot the Model", {
      prompt: "Meesho began with people reselling products to their own friends and family on WhatsApp. This is called…",
      options: ["Cloud computing for small shops", "Door-to-door sales with printed catalogues", "Online advertising on search engines", "Social commerce"], answer: 3,
      hint: "Selling happens through people’s own social circles.",
      note: "Social commerce, a model that grew big in China. Meesho fit it to India’s favourite app: WhatsApp.", badge: "lightbulb",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: What did they change? ----------
    {
      type: "learn", door: 2,
      title: "Winning startups change a few things to fit India.",
      points: [["How people pay", "Many people didn’t trust or own cards"], ["What delivers it", "Autos and bikes beat cars in traffic and on cost"], ["What’s missing", "If partners can’t do something, do it yourself"]],
      highlightLast: true,
      side: { label: "Small change, big result", items: [["landmark", "Payment", "Pay when the parcel arrives"], ["route", "Vehicle", "Autos and bike taxis"], ["clock", "Speed", "10-minute delivery"]] }
    },
    CO(2, "What Changed?", {
      prompt: "In the early 2010s many Indians didn’t trust paying online. What did Flipkart do that helped a lot?",
      options: ["Made every product free for a month", "Cash on delivery: pay when it arrives", "Opened shops in every city first", "Sold only to people with credit cards"], answer: 1,
      hint: "Remove the fear of paying first.",
      note: "Cash on delivery. Customers could see the parcel before paying, and trust grew fast.", badge: "shield"
    }),
    CO(2, "What Changed?", {
      prompt: "Ola didn’t stop at cabs. What did it add that fits Indian cities better?",
      options: ["Helicopter rides between nearby cities", "Only luxury cars for business trips", "Autos, for short, cheap rides", "Boats on every river in the country"], answer: 2,
      hint: "What do millions of Indians already take every day?",
      note: "Autos. A ride type people already used, now bookable on the phone.", badge: "route"
    }),
    CO(2, "What Changed?", {
      prompt: "When Swiggy started in 2014, many restaurants had no delivery staff. What did Swiggy do?",
      options: ["Built its own fleet of delivery partners", "Only listed restaurants that already delivered", "Asked customers to pick up the food themselves", "Closed down in cities without delivery"], answer: 0,
      hint: "Fix what’s missing.",
      note: "Its own delivery fleet. Now any restaurant could deliver, even a small one.", badge: "zap"
    }),
    CO(2, "What Changed?", {
      prompt: "Rapido took the ride-hailing idea and changed one big thing. What was it?",
      options: ["Rides only for women", "Only electric buses", "Bike taxis", "Only rides to the airport"], answer: 2,
      hint: "Faster in traffic, cheaper for one person.",
      note: "Bike taxis. For one rider in heavy traffic, a bike is often faster and cheaper than a car.", badge: "clock",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Why it worked ----------
    {
      type: "learn", door: 3,
      title: "Why the changes worked: trust, cost and habits.",
      points: [["Trust", "New customers try what feels safe"], ["Cost", "Lower prices open the door to millions more people"], ["Habits", "Fit what people already do, don’t fight it"]],
      highlightLast: true,
      side: { label: "Ask these 3 questions", items: [["shield", "Trust", "Will they feel safe trying it?"], ["landmark", "Cost", "Can most people afford it?"], ["users", "Habits", "Does it fit what they already do?"]] }
    },
    CO(3, "Why It Worked", {
      prompt: "Why did cash on delivery help a new online store most?",
      options: ["It made delivery faster everywhere", "It removed the fear of being cheated", "It let the store charge higher prices", "It meant fewer customers returned items"], answer: 1,
      hint: "First-time online shoppers were scared of what?",
      note: "Trust. Once people had a good first order, many moved to online payment later.", badge: "shield"
    }),
    CO(3, "Why It Worked", {
      prompt: "Meesho used WhatsApp instead of asking sellers to build websites. Which reason fits best?",
      options: ["WhatsApp is the only app allowed in India", "Websites are illegal for small sellers", "People already used WhatsApp every day", "WhatsApp pays sellers to use it"], answer: 2,
      hint: "Habits.",
      note: "Fit existing habits. Nobody had to learn a new tool to start selling.", badge: "users"
    }),
    CO(3, "Why It Worked", {
      prompt: "Fantasy sports in the US is mostly about American football. Why did Dream11 focus on cricket?",
      options: ["Cricket is what Indian fans follow most", "Cricket matches are always shorter", "Football is not allowed in India", "Cricket players asked them to do it"], answer: 0,
      hint: "Same model, the local favourite sport.",
      note: "Fit the market. Same game mechanics, India’s favourite sport.", badge: "zap",
      board: true, boardLabel: "after Round 3"
    }),

    // ---------- Round 4: Your turn ----------
    {
      type: "learn", door: 4,
      title: "Your turn: adapt a global idea for your campus.",
      points: [["Pick a model", "Something that works somewhere else"], ["Find the local problem", "Talk to 10 students first"], ["Change what doesn’t fit", "Payment, price, format, speed or language"]],
      highlightLast: true,
      side: { label: "Campus examples", items: [["route", "Ride sharing", "Shared autos to the beach"], ["list-checks", "Food delivery", "Hostel gate drops at night"], ["users", "Marketplace", "Old books from seniors"]] }
    },
    CO(4, "Adapt It", {
      prompt: "You want to start a used-textbook marketplace for your college, like big online resale apps. Best adaptation?",
      options: ["A national app with shipping across all of India", "Only sell brand-new books at full price", "A seniors-to-juniors WhatsApp group", "Ask buyers to pay a ₹500 joining fee first"], answer: 2,
      hint: "Small, local, and using what students already use.",
      note: "Start local, on WhatsApp, sorted by branch and semester. Build the app later if it works.", badge: "lightbulb"
    }),
    CO(4, "Adapt It", {
      prompt: "Your campus snack delivery idea is copied from big 10-minute delivery apps. Students say they only have ₹50 to spend. What do you change?",
      options: ["Nothing, keep the same prices as the big apps", "Small ₹30–₹50 combos with no delivery fee", "Only sell large family packs to save time", "Accept only card payments to look professional"], answer: 1,
      hint: "Change the price to fit the customer.",
      note: "Small packs and no extra fees. Indian brands grew huge with small, affordable sizes.", badge: "landmark",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Copy the model, not the brand (double) ----------
    {
      type: "learn", door: 5,
      title: "Final round: copy the model, never the brand. Double points.",
      points: [["Okay to learn from", "Business models and good ideas"], ["Never copy", "Names, logos, designs, text, photos or code"], ["Win with your edge", "Something the big player can’t easily do"]],
      highlightLast: true,
      side: { label: "Where’s the line?", items: [["badge-check", "Fine", "A food delivery app for your town"], ["x", "Not fine", "Calling it “Swiggy Vizag” with their logo"], ["lightbulb", "Better", "Your own name and your own edge"]] }
    },
    CO(5, "Model, Not Brand", {
      double: true,
      prompt: "Which of these is NOT okay when you start your own food delivery startup?",
      options: ["Delivering food like the big apps do", "Charging a small fee for each delivery", "Using a famous app’s logo on your posters", "Focusing on hostels the big apps ignore"], answer: 2,
      hint: "Business model: fine. Someone else’s brand: not fine.",
      note: "Logos, names and designs belong to their owners. Using them confuses customers and can bring legal trouble.", badge: "shield"
    }),
    CO(5, "Model, Not Brand", {
      double: true,
      prompt: "A big app already delivers in your city. What gives your small campus startup a real chance?",
      options: ["Copying their app design screen by screen", "An edge they don’t have, like late nights", "Spending more on ads than they do", "Charging exactly the same as they do"], answer: 1,
      hint: "Something small and local that a giant won’t bother with.",
      note: "Your edge. Late hours, hostel access, campus trust: small advantages beat big budgets on your own ground.", badge: "rocket"
    }),
    CO(5, "Model, Not Brand", {
      double: true,
      prompt: "So what’s the big lesson of today’s game?",
      options: ["Only completely new ideas can ever succeed", "Copying a famous brand is the fastest way", "Big companies can never be beaten locally", "Adapting a proven model is a real skill"], answer: 3,
      hint: "Think of Flipkart, Ola, Swiggy and Meesho.",
      note: "You don’t need a never-seen-before idea. You need to understand your market better than anyone else.", badge: "crown",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Final challenge, results, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best idea wins +200", prompt: "Pick any global app. In 60 seconds, adapt it for Vizag students: what stays the same, what you change, and your one edge.", note: "The room votes for the idea they would actually use.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "8 ways to adapt an idea", note: "Screenshot this. Try it on your next startup idea.", items: ADAPT },
    {
      type: "end",
      joinTitle: "Join the EduMoon community",
      joinText: "Startup games, idea challenges and the Innovation Challenge. Build something real.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
