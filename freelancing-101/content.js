// Freelancing 101 (EduMoon Entrepreneurship). For 2nd year onwards.
// Your first paid client as a student: finding work, pricing, scope, advance payment, written agreements and difficult clients.
// All clients and amounts are made up and kept round. No tax or legal advice beyond the basics; students should check rules for their situation.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const FL = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 45, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
// "Find the risky line in the deal" questions use the bug door.
const DEAL = { kind: "bug", time: 60, step1: "What’s the risk?", step2: "Tap the risky line", say1: "First pick the risk.", say2: "Now tap the risky line.", partO: "the risk", partL: "the line", lineLabel: "line", bugLabel: "The risky line is" };

const FREELANCE = [
  ["Start with what you can do now", "Posters, reels, simple websites, editing, tutoring."],
  ["Show samples", "3 good pieces beat a long skills list."],
  ["Find clients nearby first", "Shops, cafés, clubs, seniors’ startups."],
  ["Price by the project", "Count your hours, then add a buffer."],
  ["Write the scope", "What’s included, how many changes, the deadline."],
  ["Take an advance", "Often 30 to 50% before you start."],
  ["Update often, deliver on time", "Reliability gets you repeat work."],
  ["Ask for a review and a referral", "Your next client often comes from your last."]
];

window.GAME = {
  id: "freelancing-101",
  title: "Freelancing 101",
  club: "Entrepreneurship",
  tagline: "Your skills, your first paying client. Do it right from day one.",
  art: window.STORY_ART,
  guide: {
    years: "2nd year onwards", time: "35 minutes", level: "Medium",
    about: "Many students can already design posters, edit reels, build simple websites or tutor. In 6 rounds, teams help a made-up student freelancer land and handle a first client: choosing a service, showing samples, finding clients, pricing, writing the scope, taking an advance, delivering and handling a difficult client. They catch the risky line in each deal and leave with an 8-step freelancing checklist.",
    outcomes: "How to start freelancing as a student, price a project, write a simple scope, protect yourself with an advance and written agreement, and turn clients into repeat work.",
    tone: "Practical and encouraging. Remind students to follow their college’s rules on outside work, and that this game gives basics, not tax or legal advice. All clients and numbers are made up.",
    extra: [["Make it real", "Ask students what service they could offer this month. Many already have the skills."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Paid",
    rulesEyebrow: "How Freelancing 101 works", rulesTitle: "Read the deal. Spot the risk. Get paid.",
    learnText: "The host shares one freelancing basic.", crackTitle: "Decide",
    crackText: "Pick your answer on your phone and lock it in.",
    rulesExtra: "Risky-line questions: <b>100</b> for the risk + <b>100</b> for the line. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Many first-time freelancers learn it the hard way!", cracked: "got paid",
    next: "Next round →", finale: "Next →", winner: "are today’s smartest freelancers!", endLine: "Go land your first client!"
  },
  offerEyebrow: "EduMoon Entrepreneurship · Freelance results",
  offerTitle: "Your freelancer level",
  offers: [
    { min: 0.7, icon: "crown", title: "Pro Freelancer", text: "Scope, advance, delivery: you’ve got it. Find your first client this month." },
    { min: 0.45, icon: "briefcase", title: "Ready to Start", text: "Strong! Put 3 samples together this week." },
    { min: 0.2, icon: "pen-tool", title: "Side Hustler", text: "Good start. Always write the scope before you start work." },
    { min: 0, icon: "book-open", title: "Learning the Ropes", text: "Everyone starts here. Save the 8 steps." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Entrepreneurship · Freelancing 101",
      title: "Kavya edits reels well. A café near campus wants 8 reels a month. She’s never been paid for her work before. Can your team help her do it right?",
      cards: [["briefcase", "Land a first paying client"], ["search", "Spot risky lines in deals"], ["indian-rupee", "Price, scope and get paid on time"]]
    },
    { type: "rules" },

    // ---------- Round 1: What to offer ----------
    {
      type: "learn", door: 1,
      title: "Start with a skill you can deliver well right now.",
      points: [["Common student services", "Posters, reels, logos, simple websites, editing, tutoring"], ["Pick one", "One clear service is easier to sell"], ["Show samples", "3 good pieces, even made for your club or yourself"]],
      highlightLast: true,
      side: { label: "Samples ideas", items: [["palette", "Club posters", ""], ["film", "Reels for events", ""], ["code", "Your own portfolio site", ""]] }
    },
    FL(1, "What to Offer", {
      prompt: "Kavya can edit reels, design posters, code a bit and sing. What should she offer first?",
      options: ["Everything, as a “do anything” freelancer", "Nothing until she’s perfect", "Singing at cafés", "Reel editing, her strongest skill, with 3 sample reels"], answer: 3,
      hint: "One clear, strong service.",
      note: "Clients hire specialists. Start with your strongest skill and add more later.", badge: "film"
    }),
    FL(1, "What to Offer", {
      prompt: "Kavya has no paid work yet. What can she show as samples?",
      options: ["A list of software names", "Nothing", "Reels she made for her college club or fest, and one made for practice for a local shop’s style", "Other people’s work"], answer: 2,
      hint: "Real samples, honestly labelled.",
      note: "Practice and club work are fine samples. Just never claim others’ work as yours.", badge: "star"
    }),
    FL(1, "What to Offer", {
      prompt: "Where should Kavya keep her samples so clients can see them easily?",
      options: ["In a printed file at home", "Only on her phone gallery", "Nowhere", "One simple link: an Instagram page, a Drive folder or a portfolio site"], answer: 3,
      hint: "One link to share.",
      note: "A single link makes it easy to share in every message.", badge: "link-2",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Finding clients ----------
    {
      type: "learn", door: 2,
      title: "Your first clients are usually close by.",
      points: [["Local businesses", "Cafés, shops, gyms, coaching centres near campus"], ["Your network", "Seniors’ startups, college clubs, family friends"], ["Show, don’t just ask", "“I made a sample reel for your café, want to see?”"]],
      highlightLast: true,
      side: { label: "Where to look", items: [["store", "Shops near campus", ""], ["users", "Seniors and alumni", ""], ["globe", "Freelance sites", "Later, with samples"]] }
    },
    FL(2, "Finding Clients", {
      prompt: "Best first move to land the café near campus?",
      options: ["Spam their Instagram with 20 DMs", "Wait for them to find her", "Post “I am available” once", "Visit, show a short sample reel made in their style, and offer a small first project"], answer: 3,
      hint: "Show value first.",
      note: "A sample made for THEM shows exactly what they’d get.", badge: "store"
    }),
    FL(2, "Finding Clients", {
      prompt: "Why are local businesses often easier first clients than big companies?",
      options: ["They have no rules", "They’re easier to reach, need simple work, and value someone nearby", "They pay more", "They don’t care about quality"], answer: 1,
      hint: "Reach and need.",
      note: "Small local clients are perfect for building experience and reviews.", badge: "map"
    }),
    FL(2, "Finding Clients", Object.assign({}, DEAL, {
      prompt: "A message Kavya received. Which line is a red flag?",
      code: ["Hi, we liked your reels!", "We need 10 reels for our brand.", "First, pay us ₹2,000 as a registration fee to get the project.", "We’ll share the details after payment."],
      outputOptions: ["It’s too short", "Asking the freelancer to pay first is a common scam", "Nothing, it’s a normal offer"], outputAnswer: 1, bugLine: 2,
      bugText: "real clients pay you. Anyone asking you to pay a “registration fee” for work is likely a scam",
      hint: "Who should pay whom?",
      note: "Never pay to get freelance work. Report and block.", badge: "shield",
      board: true, boardLabel: "after Round 2"
    })),

    // ---------- Round 3: Pricing ----------
    {
      type: "learn", door: 3,
      title: "Price by the project, using your time as a guide.",
      points: [["Count your hours", "Planning, shooting, editing, changes"], ["Set a rate per hour for yourself", "Then multiply, and add a buffer for surprises"], ["Quote a project price", "Clients like a clear total"]],
      highlightLast: true,
      side: { label: "Kavya’s maths", items: [["clock", "1 reel", "about 3 hours"], ["indian-rupee", "Her rate", "₹250 an hour"], ["tag", "Per reel", "₹750 + buffer"]] }
    },
    FL(3, "Pricing", {
      prompt: "Each reel takes Kavya 3 hours. She wants to earn ₹250 an hour. What’s the base price per reel?",
      options: ["₹250", "₹500", "₹750", "₹1,000"], answer: 2,
      hint: "3 × 250.",
      note: "₹750 base. Add a little buffer for extra changes or travel.", badge: "indian-rupee"
    }),
    FL(3, "Pricing", {
      prompt: "The café wants 8 reels a month. What’s a smart way to price it?",
      options: ["Charge per minute of watching", "A monthly package with a clear total, a small discount for the bulk, and a fixed number of changes", "Free, for exposure", "Whatever they want to pay"], answer: 1,
      hint: "Clear total, clear limits.",
      note: "Packages give the client clarity and you steady income. Limits protect your time.", badge: "tag"
    }),
    FL(3, "Pricing", {
      prompt: "A client says, “Do it free, it’s great exposure.” Best response?",
      options: ["Politely share your price, or offer one small paid trial instead", "Agree to everything free forever", "Ignore all future messages", "Get angry"], answer: 0,
      hint: "Your time has value.",
      note: "Exposure doesn’t pay bills. A small paid trial respects both sides.", badge: "handshake",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "What service could YOU offer this month, and to whom?", note: "20 seconds. Skill + first client.", points: 100 },

    // ---------- Round 4: Scope and agreement ----------
    {
      type: "learn", door: 4,
      title: "Write down what you’ll deliver, before you start.",
      points: [["Scope", "What’s included: how many reels, length, format"], ["Changes", "How many rounds of changes are included"], ["Dates and payment", "Deadline, advance, balance, how they pay"]],
      highlightLast: true,
      side: { label: "Simple agreement", items: [["list-checks", "What", "8 reels, 30–40 sec"], ["route", "Changes", "2 rounds each"], ["indian-rupee", "Payment", "50% advance"]] }
    },
    FL(4, "Scope", {
      prompt: "Why write the scope down, even for a small café?",
      options: ["It’s not needed", "To look fancy", "To confuse them", "So both sides agree what’s included, and “just one more change” doesn’t become 20"], answer: 3,
      hint: "Avoid endless changes.",
      note: "A WhatsApp message or email with the scope is far better than nothing.", badge: "file-text"
    }),
    FL(4, "Scope", Object.assign({}, DEAL, {
      prompt: "Kavya’s draft agreement. Which line is risky for her?",
      code: ["8 reels a month, 30 to 40 seconds each.", "Unlimited changes until the client is fully happy.", "Delivery every Monday and Thursday.", "50% payment in advance, 50% on delivery."],
      outputOptions: ["Unlimited changes can eat all her time for no extra pay", "The advance is too high", "Nothing, it’s perfect"], outputAnswer: 0, bugLine: 1,
      bugText: "set a fixed number of change rounds, like 2 per reel, then extra changes are paid",
      hint: "Which line has no limit?",
      note: "Limits on changes protect your time and keep the project fair.", badge: "list-checks"
    })),
    FL(4, "Scope", {
      prompt: "Why take an advance payment before starting?",
      options: ["To be rude", "It’s illegal", "Clients prefer to pay later", "It shows the client is serious and protects you if they disappear"], answer: 3,
      hint: "Protection.",
      note: "An advance (often 30 to 50%) is common and fair, especially with new clients.", badge: "indian-rupee",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Delivering and difficult clients ----------
    {
      type: "learn", door: 5,
      title: "Deliver on time, and handle tricky clients calmly.",
      points: [["Update before they ask", "“First draft by Thursday evening”"], ["If late, tell early", "Never go silent"], ["Extra work = extra price", "Politely point back to the scope"]],
      highlightLast: true,
      side: { label: "Calm replies", items: [["message-circle", "“Happy to add that.”", ""], ["list-checks", "“It’s outside our scope…”", ""], ["indian-rupee", "“…it would be ₹X extra.”", ""]] }
    },
    FL(5, "Delivering", {
      prompt: "Kavya will be one day late because of exams. Best move?",
      options: ["Tell the client early, apologise, and give a new exact time", "Deliver a rushed, poor reel on time", "Say nothing and deliver late", "Block the client"], answer: 0,
      hint: "No surprises.",
      note: "Clients forgive delays they hear about early. They don’t forgive silence.", badge: "clock"
    }),
    FL(5, "Delivering", {
      prompt: "The client asks for 4 extra reels this month “at the same price”. Best reply?",
      options: ["Refuse rudely", "Do them free, silently", "Ignore the message", "“Happy to! Our plan covers 8 reels, so the 4 extra would be ₹X. Shall I go ahead?”"], answer: 3,
      hint: "Friendly, clear, back to the scope.",
      note: "Point to the agreement kindly. Most clients respect clear boundaries.", badge: "handshake"
    }),
    FL(5, "Delivering", {
      prompt: "A client hasn’t paid the balance 2 weeks after delivery. First step?",
      options: ["Delete their reels from their page", "Post about them publicly", "Never mention it", "A polite reminder with the invoice and payment details"], answer: 3,
      hint: "Start polite and clear.",
      note: "Often it’s just forgotten. A clear invoice and a polite reminder usually work.", badge: "mail",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Growing (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: turn one client into many.",
      points: [["Do great work", "Your best marketing"], ["Ask for a review and referral", "At the end of a happy project"], ["Track your money", "Income, expenses, and check the rules that apply to you"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game!"], ["trending-up", "Grow smart", ""], ["award", "Then your level", ""]] }
    },
    FL(6, "Growing", {
      double: true,
      prompt: "The café loves Kavya’s reels. Best next step?",
      options: ["Ask for free food only", "Stop working with them", "Ask for a short review and if they know another business who needs reels", "Raise prices by 5× immediately"], answer: 2,
      hint: "Happy clients bring clients.",
      note: "Reviews and referrals are how most freelancers grow.", badge: "star"
    }),
    FL(6, "Growing", {
      double: true,
      prompt: "Kavya now earns regularly from freelancing. What should she start doing?",
      options: ["Nothing", "Hide the income", "Keep a simple record of income and expenses, and learn the tax and college rules that apply to her", "Spend everything"], answer: 2,
      hint: "Grown-up money habits.",
      note: "Simple records now make things easy later. Ask a family member or professional about tax questions.", badge: "list-checks"
    }),
    FL(6, "Growing", Object.assign({}, DEAL, {
      double: true,
      prompt: "A new client’s offer. Which line should Kavya push back on?",
      code: ["We need 6 reels for our gym launch.", "Budget is ₹6,000, 50% advance.", "You must work only for us and no other client, forever.", "Deadline in 3 weeks."],
      outputOptions: ["The deadline is too long", "The advance is too high", "A forever “only us” condition is unfair for a small project"], outputAnswer: 2, bugLine: 2,
      bugText: "a small project shouldn’t stop you working for others forever. Negotiate or decline that condition",
      hint: "Which line limits her whole future?",
      note: "Read every condition. Some cost more than the project pays.", badge: "scale",
      board: true, boardLabel: "after Round 6"
    })),

    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "In 45 seconds: pitch your freelance service to a café owner. Service, sample, price, timeline.", note: "The room plays the owner. The host picks the most convincing pitch.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "8-Step Freelancing Checklist", note: "Screenshot this. Use it before your first client.", items: FREELANCE },
    {
      type: "end",
      joinTitle: "Join the EduMoon community",
      joinText: "Startup games, career skills and real projects every week. Build your skills, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
