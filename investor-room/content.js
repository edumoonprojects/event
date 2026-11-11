// Investor Room (EduMoon Entrepreneurship). For all years.
// Teams play investors judging student startup pitches, find the weak line in each pitch, then pitch their own idea live.
// All startups and numbers in this game are made up.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const IR = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 45, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
// "Find the weak line in the pitch" questions use the bug door with investor labels.
const PASS = { kind: "bug", time: 60, step1: "Why would an investor say no?", step2: "Tap the weak line", say1: "First pick the problem.", say2: "Now tap the weak line.", partO: "the problem", partL: "the line", lineLabel: "line", bugLabel: "The weak line is" };

const PITCH = [
  ["Problem", "One real problem. Who has it, and how often?"],
  ["Customer", "One specific person, not “everyone”."],
  ["Solution", "What you do, in one simple sentence."],
  ["Why now, why you", "What changed, and why your team can do it."],
  ["Proof", "Real users, sign-ups, pre-orders or a working demo."],
  ["Money", "Who pays, how much, and why they’ll keep paying."],
  ["Competition", "Who else solves it, and why you’re different."],
  ["The ask", "What you need (money, mentors, users) and what you’ll do with it."]
];

window.GAME = {
  id: "investor-room",
  title: "Investor Room",
  club: "Entrepreneurship",
  tagline: "Sit on the investor side. Then step up and pitch.",
  art: window.STORY_ART,
  guide: {
    years: "All years · no business background needed", time: "40 minutes", level: "Medium",
    about: "Teams sit on the investor side of the table. In 6 rounds they judge made-up student startup pitches, decide which ones deserve money, and catch the weak line that makes investors say no. Along the way they learn the 8 parts of a strong pitch, and finish by pitching their own campus startup idea in 60 seconds.",
    outcomes: "The 8-part pitch structure, what investors really look for (a real problem, a specific customer, proof and a business model), and the confidence to pitch an idea in 60 seconds.",
    tone: "Play it like a TV-style pitch room: you are the lead investor, teams are your fellow investors. Celebrate every pitch, even rough ones. Investors say no a lot; that’s normal and not personal. All startups in the game are made up.",
    extra: [["Make it real", "If a student has a real startup idea, let them pitch it in the final challenge and ask the room for one piece of honest feedback."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Invested",
    rulesEyebrow: "How Investor Room works", rulesTitle: "Hear the pitch. Judge it. Invest wisely.",
    learnText: "The host shares what investors check in this part of a pitch.", crackTitle: "Decide",
    crackText: "Make your investor decision on your phone and lock it in.",
    rulesExtra: "Weak-line questions: <b>100</b> for the problem + <b>100</b> for the line. Pitch time: <b>+100</b>. Round 6: <b>double</b>!",
    nobody: "No investor got this one. Real investors miss it too!", cracked: "invested wisely",
    next: "Next round →", finale: "Next →", winner: "are today’s smartest investors!", endLine: "You now think like an investor!"
  },
  offerEyebrow: "EduMoon Entrepreneurship · Investor results",
  offerTitle: "Your investor rank",
  offers: [
    { min: 0.7, icon: "crown", title: "Star Investor", text: "You spot real problems, proof and weak claims fast. Founders should pitch to you." },
    { min: 0.45, icon: "trending-up", title: "Smart Angel", text: "Strong! Always ask: who pays, and what’s the proof?" },
    { min: 0.2, icon: "handshake", title: "Rising Investor", text: "Good start. Look for one specific customer in every pitch." },
    { min: 0, icon: "book-open", title: "Trainee Investor", text: "Everyone starts here. Save the 8-part pitch and use it today." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Entrepreneurship · Investor Room",
      title: "Student founders are walking in with big dreams. Your team holds the money. Who gets it, and who walks out empty-handed?",
      cards: [["handshake", "Judge real-style student pitches"], ["search", "Catch the line that makes investors say no"], ["mic", "Then pitch your own idea in 60 seconds"]]
    },
    { type: "rules" },

    // ---------- Round 1: The problem ----------
    {
      type: "learn", door: 1,
      title: "Investors fund problems first, ideas second.",
      points: [["A real problem", "Something people already complain about or spend on"], ["Who has it", "A specific group, not “everyone”"], ["How painful", "Daily pain beats once-a-year pain"]],
      highlightLast: true,
      side: { label: "Strong problem signs", items: [["users", "Many people have it", "And you can name them"], ["clock", "It happens often", "Daily or weekly"], ["indian-rupee", "People already pay", "For bad solutions"]] }
    },
    IR(1, "The Problem", {
      prompt: "Which pitch starts with the strongest problem?",
      options: ["“We want to change the world with technology and make everyone’s life easier and better.”", "“Hostel students in Vizag wait 40 minutes for dinner, and many skip it.”", "“Everyone loves apps.”", "“We have a cool idea for blockchain.”"], answer: 1,
      hint: "Which one names who suffers and how?",
      note: "Specific people, a real pain, a number. Investors lean forward for that.", badge: "target"
    }),
    IR(1, "The Problem", {
      prompt: "A founder says, “Our customers are everyone aged 1 to 100.” What’s the investor’s worry?",
      options: ["There will be too many customers to count", "Nothing, a big market is always great news", "No clear first customer to start with", "The age range is too small for investors"], answer: 2,
      hint: "Can you market to everyone at once?",
      note: "Great startups start with one specific group, win them, then grow.", badge: "users"
    }),
    IR(1, "The Problem", {
      prompt: "How can a student founder PROVE a problem is real, before building anything?",
      options: ["Talk to 30 real students about the problem", "Ask their mother if it’s a good idea", "Assume it’s real because they feel it too", "Design a nice logo and see who likes it"], answer: 0,
      hint: "Who actually has the problem?",
      note: "Real conversations are free and powerful proof. Ask what they do today, not “would you use my app?”", badge: "message-circle",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Solution and customer ----------
    {
      type: "learn", door: 2,
      title: "Explain the solution in one sentence a 10-year-old gets.",
      points: [["One line", "“We help X do Y without Z”"], ["Fits the problem", "It must solve the exact pain you described"], ["Simple first", "A WhatsApp group or Google Form can be version 1"]],
      highlightLast: true,
      side: { label: "One-line formula", items: [["user", "We help…", "a specific person"], ["target", "do…", "the thing they need"], ["x", "without…", "the pain they hate"]] }
    },
    IR(2, "Solution", {
      prompt: "Which one-line solution is clearest?",
      options: ["“A synergistic AI-powered ecosystem for holistic student wellness.”", "“Students pre-book a mess slot and skip the queue.”", "“A platform for everything food, for everyone.”", "“Next-gen disruptive innovation for colleges.”"], answer: 1,
      hint: "Who, what, and which pain?",
      note: "Simple beats impressive. If people can’t repeat it, they can’t share it.", badge: "lightbulb"
    }),
    IR(2, "Solution", Object.assign({}, PASS, {
      prompt: "A pitch for a notes-sharing app. Which line makes investors nervous?",
      code: ["Students waste hours searching for good notes before exams.", "Our app lets seniors upload verified notes, subject by subject.", "We’ll build the app, a website, a smartwatch app and VR notes in month one.", "50 students tested our Google Drive version last semester."],
      outputOptions: ["Too much too soon: four products with no focus", "It’s too short", "Nothing, it’s a strong pitch"], outputAnswer: 0, bugLine: 2,
      bugText: "building four products at once wastes time and money. Start with one that works",
      hint: "Which line sounds like doing everything at once?",
      note: "Investors love focus. One product, one customer, done really well.", badge: "list-checks"
    })),
    IR(2, "Solution", {
      prompt: "What’s the smartest “version 1” for a campus food-delivery idea?",
      options: ["Build a full app for 6 months, then launch it", "Hire 20 people so it can grow quickly", "Run it on WhatsApp for one hostel for 2 weeks", "Buy delivery bikes before the first order"], answer: 2,
      hint: "What’s the cheapest way to test if people want it?",
      note: "Test cheaply first. If one hostel loves it, build more. If not, you saved months.", badge: "smartphone",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Proof ----------
    {
      type: "learn", door: 3,
      title: "Proof beats promises.",
      points: [["Weak proof", "“Everyone said it’s a great idea”"], ["Strong proof", "Real users, repeat users, pre-orders, payments"], ["Numbers that matter", "How many came back, not just how many signed up"]],
      highlightLast: true,
      side: { label: "Proof ladder", items: [["message-circle", "Interviews", "Good start"], ["users", "Sign-ups and users", "Better"], ["indian-rupee", "Paying customers", "Best"]] }
    },
    IR(3, "Proof", {
      prompt: "Which proof would impress an investor MOST?",
      options: ["“All my friends and family liked the idea a lot”", "“We have a great logo and a nice website”", "“2,000 Instagram likes on our launch poster”", "“120 students paid ₹49, and 70 paid again”"], answer: 3,
      hint: "Which one shows people pay AND come back?",
      note: "Payment plus repeat customers is the strongest early proof there is.", badge: "indian-rupee"
    }),
    IR(3, "Proof", {
      prompt: "A founder says, “1,000 people downloaded our app.” What should the investor ask next?",
      options: ["“What colour scheme does the app use?”", "“How many still use it every week?”", "“Who designed the icon for the app?”", "“Is it on the Play Store or only on iPhone?”"], answer: 1,
      hint: "Downloads are easy. What’s harder?",
      note: "Many downloads with no repeat use means the product isn’t solving the problem yet.", badge: "chart-column"
    }),
    IR(3, "Proof", Object.assign({}, PASS, {
      prompt: "A pitch for a campus laundry service. Which line weakens the proof?",
      code: ["We picked up laundry from 2 hostels for 6 weeks.", "85 students used us, and 60 used us again.", "Our revenue was ₹21,000 in the last month.", "We’re sure we’ll have 10 lakh users next year."],
      outputOptions: ["It’s a wild guess with no proof behind it", "It’s too modest", "Nothing, every line is strong"], outputAnswer: 0, bugLine: 3,
      bugText: "jumping from 85 users to 10 lakh with no plan sounds unrealistic and hurts trust",
      hint: "Which line isn’t backed by anything?",
      note: "The first three lines are great real proof. A wild prediction makes investors doubt the rest.", badge: "trending-up",
      board: true, boardLabel: "after Round 3"
    })),
    { type: "speak", eyebrow: "Pitch time · +100", prompt: "In 20 seconds: say a real problem you see on your campus, and who has it.", note: "Problem + who + how often. The best one earns +100.", points: 100 },

    // ---------- Round 4: Money ----------
    {
      type: "learn", door: 4,
      title: "Investors ask: who pays, and how much?",
      points: [["Who pays", "Students, parents, colleges, shops or brands?"], ["How much", "A price people can actually afford"], ["Does it add up", "Price minus cost per order must be positive"]],
      highlightLast: true,
      side: { label: "Common ways to earn", items: [["indian-rupee", "Per order fee", "Small fee each time"], ["clock", "Subscription", "Monthly plan"], ["store", "Shops or brands pay", "Users use it free"]] }
    },
    IR(4, "Money", {
      prompt: "A founder says, “It’s free for everyone, forever, and we’ll figure out money later.” Investor reaction?",
      options: ["“Perfect! Free is what every investor wants.”", "Worried: nobody pays, so it may not survive", "“Please make it even more free for users”", "No reaction, money doesn’t matter early on"], answer: 1,
      hint: "Who pays the bills?",
      note: "Free can work, but only with a clear plan for who pays. “Later” isn’t a plan.", badge: "landmark"
    }),
    IR(4, "Money", {
      prompt: "Each campus delivery costs the startup ₹35. They charge ₹25. What happens as they grow?",
      options: ["They lose ₹10 on every order", "They become rich faster as they grow", "Nothing changes, the numbers stay the same", "They earn ₹10 on every single order"], answer: 0,
      hint: "25 minus 35.",
      note: "If each sale loses money, more sales means more loss. Fix the price or the cost first.", badge: "chart-column"
    }),
    IR(4, "Money", {
      prompt: "For a free study app used by students, which money plan is most realistic?",
      options: ["Charge every student ₹5,000 a month to use it", "Sell students’ phone numbers to companies", "Hope a big company donates money someday", "Free basics, a small paid plan, paid listings"], answer: 3,
      hint: "Which one is fair and affordable?",
      note: "Mix free value with small paid extras. And never sell users’ data.", badge: "graduation-cap",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Competition and team ----------
    {
      type: "learn", door: 5,
      title: "“We have no competition” is a red flag.",
      points: [["There’s always competition", "Even if it’s a WhatsApp group or doing nothing"], ["Know them", "What do people use today, and why do they still complain?"], ["Why you", "Your team’s real advantage: access, skills, experience"]],
      highlightLast: true,
      side: { label: "Real advantages", items: [["map", "You’re on campus", "You understand the users"], ["users", "Your network", "Clubs, seniors, groups"], ["code", "Your skills", "You can build it yourselves"]] }
    },
    IR(5, "Competition", {
      prompt: "A founder says, “We have zero competition.” What does the investor think?",
      options: ["“Amazing, no competition, let’s invest now”", "“They haven’t researched what people use”", "“Competition doesn’t matter for students”", "“Let’s celebrate, this idea is totally new”"], answer: 1,
      hint: "How do people solve the problem today?",
      note: "Your real competition might be a notebook, a WhatsApp group, or people just living with it.", badge: "search"
    }),
    IR(5, "Competition", {
      prompt: "Which is the strongest “why us” for a campus event-ticketing startup?",
      options: ["“We are very passionate and we never give up”", "“We have a nice office near the college”", "“We run 3 clubs and already sold 600 tickets”", "“We watched many startup videos on YouTube”"], answer: 2,
      hint: "Which one shows real access and proof?",
      note: "Access to users + proof + skills. Passion matters, but proof convinces.", badge: "badge-check"
    }),
    IR(5, "Competition", Object.assign({}, PASS, {
      prompt: "A pitch for a second-hand textbook marketplace. Which line hurts the pitch?",
      code: ["Seniors sell old textbooks in WhatsApp groups today, but it’s messy.", "We organise books by college, branch and semester.", "Our team has sold 200 books through our club already.", "Big companies can never copy us because we are smarter."],
      outputOptions: ["Nothing, every line is strong", "It sounds arrogant and gives no real reason", "It’s too short"], outputAnswer: 1, bugLine: 3,
      bugText: "“we are smarter” isn’t an advantage. Name a real one, like campus access or your sales so far",
      hint: "Which line is a claim with no proof?",
      note: "Show real advantages. Your 200 sold books are a far better answer than “we’re smarter”.", badge: "book-open",
      board: true, boardLabel: "after Round 5"
    })),

    // ---------- Round 6: Final investment (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: the ask, and the decision.",
      points: [["A clear ask", "“₹2 lakh for 6 months to launch in 5 colleges”"], ["What it buys", "Specific milestones, not just “growth”"], ["Not just money", "Mentors, users, partnerships can be the ask too"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game!"], ["handshake", "Final decisions", "Who gets the money?"], ["award", "Then your investor rank", "How smart is your team?"]] }
    },
    IR(6, "Final Decision", {
      double: true,
      prompt: "Which “ask” is the clearest?",
      options: ["“Give us money and we will grow the business fast.”", "“We need lots of support from investors like you.”", "“₹3 lakh to reach 5 more hostels and 1,000 paying users.”", "“Whatever you can give, we are happy to take it.”"], answer: 2,
      hint: "How much, for what, by when?",
      note: "Amount, plan, time and a target. Investors can say yes to that.", badge: "target"
    }),
    IR(6, "Final Decision", {
      double: true,
      prompt: "Two startups. Which one deserves the money?",
      options: ["A: amazing slides, no users, “will launch someday”", "B: simple slides, 200 paying users, a clear plan", "Neither of them, startups always fail anyway", "Whichever startup has the bigger, brighter logo"], answer: 1,
      hint: "Slides vs proof.",
      note: "Proof and a clear plan beat beautiful slides every time.", badge: "trending-up"
    }),
    IR(6, "Final Decision", {
      double: true,
      prompt: "An investor says no to your pitch. What’s the best response?",
      options: ["Argue with them and show them they’re wrong", "Give up on startups forever after one no", "Post about it angrily online and tag them", "Thank them and ask what would change their mind"], answer: 3,
      hint: "What helps your next pitch?",
      note: "Most founders hear many no’s before a yes. Each no can teach you something.", badge: "handshake",
      board: true, boardLabel: "after Round 6"
    }),

    { type: "speak", eyebrow: "Final pitch · best one wins +200", prompt: "In 60 seconds: pitch a startup that solves one problem on YOUR campus.", note: "Problem, customer, solution, proof (or how you’d test it), and your ask. The room votes; the host picks the best one.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "The 8-Part Pitch", note: "Screenshot this. Use it the next time you share an idea.", items: PITCH },
    {
      type: "end",
      joinTitle: "Join the EduMoon community",
      joinText: "Startup games, pitch practice and real projects every week. Build your own idea, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
