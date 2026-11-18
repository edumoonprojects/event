// MVP in a Weekend (EduMoon Entrepreneurship). For all years.
// Test a startup idea in one weekend: what an MVP really is, the riskiest assumption, no-code MVP types, measuring with one number, a Friday-to-Sunday plan, and deciding what to do next. All ideas and numbers are made up.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const MV = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 45, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const MVN = (round, name, extra) => MV(round, name, Object.assign({ kind: "number", time: 60 }, extra));

// The take-home card: the weekend MVP plan.
const WEEKEND = [
  ["MVP", "The smallest thing that tests whether people really want it."],
  ["Riskiest assumption", "The belief that kills the idea if it is wrong. Test that first."],
  ["No-code first", "A form, a WhatsApp group, a landing page or doing it by hand."],
  ["One number", "Decide the success number before you start: “20 paid orders”."],
  ["Friday", "Pick the assumption, the number and the MVP type. Build it in 3 hours."],
  ["Saturday", "Put it in front of 100 real people. Talk to at least 10."],
  ["Sunday", "Count, read feedback, decide: continue, change or stop."],
  ["Be honest with users", "Never take money for something you cannot deliver."]
];

window.GAME = {
  id: "mvp-in-a-weekend",
  title: "MVP in a Weekend",
  club: "Entrepreneurship",
  tagline: "Stop planning for months. Test your startup idea this weekend.",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "40 minutes", level: "Medium",
    about: "Nikhil has an idea: a laundry pickup service for hostel students. He has spent three months making a logo and a 40-slide plan, and has zero customers. In 6 rounds, teams learn what an MVP really is, how to find the riskiest assumption, no-code ways to test an idea, how to measure with one clear number, a Friday-to-Sunday plan, and how to decide what to do next.",
    outcomes: "How to test any idea cheaply in one weekend, choose the right MVP type, set a success number in advance, and make a clear continue, change or stop decision.",
    tone: "Students love planning and fear launching. Push them to launch small. Celebrate “failed” tests too: learning an idea will not work in one weekend saves months.",
    extra: [["Weekend challenge", "Invite teams to actually run one MVP this weekend and share results in the EduMoon group. The best one can be featured."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Shipped",
    rulesEyebrow: "How MVP in a Weekend works", rulesTitle: "Learn the step. Make the smart choice. Ship by Sunday.",
    learnText: "The host explains one step of a weekend MVP.", crackTitle: "Decide",
    crackText: "Pick Nikhil’s best move on your phone and lock it in.",
    rulesExtra: "Some questions need a typed number. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Many founders waste months here!", cracked: "shipped it",
    next: "Next round →", finale: "Next →", winner: "are today’s fastest founders!", endLine: "Nikhil got his first 20 orders in one weekend."
  },
  offerEyebrow: "EduMoon Entrepreneurship · Launch level",
  offerTitle: "Your launch level",
  offers: [
    { min: 0.7, icon: "rocket", title: "Ready to Ship", text: "You test, not just plan. Run one MVP this weekend." },
    { min: 0.45, icon: "zap", title: "Fast Builder", text: "Strong! Write your riskiest assumption and one success number." },
    { min: 0.2, icon: "lightbulb", title: "Idea Tester", text: "Good start. Follow the weekend plan below for one idea." },
    { min: 0, icon: "book-open", title: "Planner", text: "Everyone starts here. Play Side Hustle Lab, then come back." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Entrepreneurship · Three months, zero customers",
      title: "Nikhil spent three months on a logo and a 40-slide plan for a hostel laundry service. He has zero customers. Can your team help him test it in one weekend?",
      cards: [["rocket", "MVPs, assumptions and no-code tests"], ["chart-column", "One number to decide"], ["trophy", "Your score decides your launch level"]]
    },
    { type: "rules" },

    // ---------- Round 1: What an MVP is ----------
    {
      type: "learn", door: 1,
      title: "An MVP is a test, not a small version of your dream product.",
      points: [["Minimum", "The least you can build"], ["Viable", "Real people can actually use it or pay for it"], ["Product", "Something that answers: do they want this?"]],
      highlightLast: true,
      side: { label: "Not an MVP", items: [["x", "A logo", "Nobody uses a logo"], ["x", "A 40-slide plan", "Nobody pays for slides"], ["check", "A form taking real pickup orders", "That is an MVP"]] }
    },
    MV(1, "What an MVP Is", {
      prompt: "Which of these is an MVP for Nikhil’s laundry idea?",
      options: ["A form taking real orders", "A professionally designed logo", "A 40-slide business plan", "A domain name and an email ID"], answer: 0,
      hint: "Can real people use it this weekend?",
      note: "A form that takes real orders tests demand immediately. Logos and plans test nothing.", badge: "rocket"
    }),
    MV(1, "What an MVP Is", {
      prompt: "What is the main goal of an MVP?",
      options: ["To make the product perfect", "To impress investors with design", "To learn if people want it", "To hire a large team"], answer: 2,
      hint: "Learning, not perfection.",
      note: "The MVP exists to learn fast and cheaply whether the idea is worth building properly.", badge: "lightbulb"
    }),
    MV(1, "What an MVP Is", {
      prompt: "Nikhil wants to build a full app with GPS tracking first. What is the risk?",
      options: ["Months of work, no learning", "The app will be too small", "Students hate GPS", "There is no risk at all"], answer: 0,
      hint: "What if nobody wants laundry pickup?",
      note: "He could spend months building something nobody uses. Test demand first, build later.", badge: "alarm-clock",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Riskiest assumption ----------
    {
      type: "learn", door: 2,
      title: "Test the belief that would kill the idea if it is wrong.",
      points: [["List your assumptions", "Students want it, will pay ₹40, have no time to wash"], ["Find the riskiest", "The one that, if false, ends everything"], ["Test that first", "Not the logo colour"]],
      highlightLast: true,
      side: { label: "Nikhil’s assumptions", items: [["x", "“Blue logo is best”", "Low risk"], ["search", "“Students will pay ₹40 per bag”", "High risk: test this"], ["check", "“Washing machines exist”", "Already known"]] }
    },
    MV(2, "Riskiest Assumption", {
      prompt: "Which is the RISKIEST assumption for Nikhil?",
      options: ["The logo should be blue", "Students will pay ₹40 per bag", "The app name sounds nice", "Laundry needs soap"], answer: 1,
      hint: "Which one ends the business if it is false?",
      note: "If students will not pay, nothing else matters. Test willingness to pay first.", badge: "indian-rupee"
    }),
    MV(2, "Riskiest Assumption", {
      prompt: "Which test best checks “students will pay ₹40 per bag”?",
      options: ["Ask “Do you like the idea?”", "Count Instagram likes", "Ask parents for opinions", "Take paid orders"], answer: 3,
      hint: "Words are free. Money is not.",
      note: "Real payment is the strongest proof. Likes and opinions only show politeness.", badge: "check"
    }),
    MV(2, "Riskiest Assumption", {
      prompt: "A food idea assumes “students order late-night snacks after 11 PM”. Best first test?",
      options: ["A full app with a kitchen", "Renting a shop for a year", "A WhatsApp group for 11 PM orders", "A survey of professors"], answer: 2,
      hint: "Small, fast and real.",
      note: "A group and a few real orders this week answer the question. A shop lease answers it too late.", badge: "smartphone",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: No-code MVP types ----------
    {
      type: "learn", door: 3,
      title: "Most MVPs need zero code.",
      points: [["Landing page or form", "Explain it, take sign-ups or orders"], ["Concierge", "Do the service by hand for the first customers"], ["Wizard of Oz", "Looks automatic to users; a person does it behind the scenes"]],
      highlightLast: true,
      side: { label: "Free tools", items: [["file-text", "Google Forms", "Orders and sign-ups"], ["message-circle", "WhatsApp", "Groups and status"], ["indian-rupee", "UPI", "Real payments"]] }
    },
    MV(3, "No-code MVPs", {
      prompt: "Nikhil collects bags himself, takes them to a local laundry and returns them. What MVP type is this?",
      options: ["Concierge", "Landing page", "Full product launch", "Advertising campaign"], answer: 0,
      hint: "Doing it personally, by hand.",
      note: "Concierge MVP: serve the first customers personally. You learn what they really need.", badge: "handshake"
    }),
    MV(3, "No-code MVPs", {
      prompt: "A “smart study planner” app looks automatic, but the founder writes each plan by hand at night. What is this called?",
      options: ["Concierge cheating", "A finished product", "A fake company", "Wizard of Oz MVP"], answer: 3,
      hint: "The person behind the curtain.",
      note: "Wizard of Oz: users get the experience while a person does the work. Automate only once it is wanted.", badge: "sparkles"
    }),
    MV(3, "No-code MVPs", {
      prompt: "Which MVP can Nikhil build in under 3 hours?",
      options: ["A custom app with GPS tracking", "A franchise across India", "Form + WhatsApp group + UPI QR", "A machine-learning pricing model"], answer: 2,
      hint: "Free tools he already has.",
      note: "Form for orders, group for updates, UPI for payment. Live the same evening.", badge: "timer",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Pick any idea. Say its riskiest assumption and a no-code test for it.", note: "Idea, risky belief, weekend test. 20 seconds.", points: 100 },

    // ---------- Round 4: Measure ----------
    {
      type: "learn", door: 4,
      title: "Decide your success number BEFORE you start.",
      points: [["One clear number", "“20 paid orders from 150 hostel students”"], ["Set it first", "Otherwise any result looks good"], ["Conversion", "Paid ÷ people reached × 100"]],
      highlightLast: true,
      side: { label: "Example", items: [["users", "Reached", "200 students in hostel groups"], ["check", "Paid orders", "24"], ["chart-column", "Conversion", "12%"]] }
    },
    MVN(4, "Measure", {
      prompt: "Nikhil’s form reached 250 students. 30 paid for a pickup. What is the conversion rate, in percent?",
      answer: 12,
      hint: "30 ÷ 250 × 100.",
      note: "12%. For a new service, that is a strong first signal.", badge: "chart-column"
    }),
    MV(4, "Measure", {
      prompt: "Why set the success number BEFORE the test?",
      options: ["Because forms require it", "So you can’t fool yourself", "To make the test longer", "It does not matter when"], answer: 1,
      hint: "After the test, every number feels “okay”.",
      note: "A number set in advance keeps you honest. Otherwise 3 orders can feel like success.", badge: "target"
    }),
    MV(4, "Measure", {
      prompt: "Which is the BEST success measure for Nikhil?",
      options: ["Instagram followers", "Compliments from friends", "Logo downloads", "Paid orders"], answer: 3,
      hint: "What proves real demand?",
      note: "Paid orders. Followers and compliments can look good while nobody buys.", badge: "indian-rupee",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: The weekend plan ----------
    {
      type: "learn", door: 5,
      title: "Friday build, Saturday launch, Sunday decide.",
      points: [["Friday evening", "Assumption, success number and MVP. Build it in 3 hours"], ["Saturday", "Reach 100+ real people. Talk to at least 10"], ["Sunday", "Count, read feedback, decide"]],
      highlightLast: true,
      side: { label: "Cut ruthlessly", items: [["x", "Payment gateway", "UPI QR is enough"], ["x", "Fancy design", "Clear words are enough"], ["check", "One clear offer", "“Pickup Sat, return Sun, ₹40 a bag”"]] }
    },
    MV(5, "The Weekend Plan", {
      prompt: "It is Friday night. Nikhil wants to add a login system first. Best advice?",
      options: ["Build login, then launch next month", "Hire a developer first", "Wait for a perfect design", "Skip it; launch the form tonight"], answer: 3,
      hint: "Does the test need login?",
      note: "Login does not test demand. Cut everything that does not answer the main question.", badge: "zap"
    }),
    MV(5, "The Weekend Plan", {
      prompt: "On Saturday, what matters MOST?",
      options: ["Changing the font many times", "Waiting for people to find it", "Reaching and talking to students", "Planning the next version"], answer: 2,
      hint: "No users, no learning.",
      note: "Share it in hostel groups, talk to people at the mess, ask why they did or did not order.", badge: "users"
    }),
    MVN(5, "The Weekend Plan", {
      prompt: "Nikhil talks to 4 students on Saturday morning and 7 in the evening. He planned to talk to at least 10. How many over his target is he?",
      answer: 1,
      hint: "4 + 7 − 10.",
      note: "11 conversations, 1 over target. Conversations explain the numbers: why people did or did not order.", badge: "message-circle",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Decide (double) ----------
    {
      type: "learn", door: 6,
      title: "Sunday: continue, change or stop. All three are good outcomes.",
      points: [["Continue", "Beat the number? Run it again next weekend, a bit bigger"], ["Change", "Close but not quite? Change price, audience or offer"], ["Stop", "Far below? You saved months. Try the next idea"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["route", "Decisions", "Real weekend results"], ["mic", "Then the final challenge", "Your weekend plan"]] }
    },
    MV(6, "Decide", {
      double: true,
      prompt: "Target: 20 paid orders. Result: 34 paid orders and many repeat requests. What should Nikhil do?",
      options: ["Stop, the test is over", "Continue, a bit bigger", "Spend 3 months on a full app first", "Change the idea completely"], answer: 1,
      hint: "He beat the number.",
      note: "Continue and grow step by step. Build more only as demand proves itself.", badge: "rocket"
    }),
    MV(6, "Decide", {
      double: true,
      prompt: "Target: 20 orders. Result: 3 orders. Students said “₹40 is too much, ₹25 is fine.” Best decision?",
      options: ["Quit entrepreneurship forever", "Change the price and test again", "Ignore the feedback and wait", "Raise the price to ₹60"], answer: 1,
      hint: "Clear feedback on one thing.",
      note: "Change one thing based on real feedback and test again. That is how ideas improve.", badge: "route"
    }),
    MV(6, "Decide", {
      double: true,
      prompt: "Orders flood in, but Nikhil cannot deliver them all this weekend. What should he do?",
      options: ["Be honest; refund or reschedule", "Keep the money and stay silent", "Deliver half and hope nobody notices", "Delete the form and disappear"], answer: 0,
      hint: "Trust is everything for a new brand.",
      note: "Be honest, refund or reschedule. Never take money for something you cannot deliver.", badge: "shield",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best plan wins +200", prompt: "In 30 seconds: your idea, its riskiest assumption, your MVP, and your success number for this weekend.", note: "Specific and doable wins. The host picks.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "The Weekend MVP Plan", note: "Screenshot this. Run it this weekend.", items: WEEKEND },
    {
      type: "end",
      joinTitle: "Join EduMoon Entrepreneurship",
      joinText: "Startup games, founder talks and real student businesses. Build something, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
