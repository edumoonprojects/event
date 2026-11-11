// Vizag Problems, Startup Ideas (EduMoon Entrepreneurship). For all years.
// Real everyday problems around Vizag and campus life, turned into startup ideas: spot a real problem,
// find the first customer, test it cheaply, find a way to earn, and pitch. All scenarios are simple and made up.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const VS = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 40, board: false, eyebrow: `Round ${round} · ${name}` }, extra);

const IDEAKIT = [
  ["Start with a problem", "Something people face often, and that annoys them."],
  ["Find one first customer", "A specific group, like hostel students in one college."],
  ["Talk to 10 people", "Ask how they solve it today and what it costs them."],
  ["Test it in a week", "A WhatsApp group, a form or a stall, before any app."],
  ["Find how you’ll earn", "Who pays, how much, and why it’s worth it to them."],
  ["Check who else does it", "And what you’ll do better for your customer."],
  ["Think local", "Your advantage: you know your campus and city better than outsiders."],
  ["Pitch in 3 lines", "Problem, solution, first proof."]
];

window.GAME = {
  id: "vizag-startup-ideas",
  title: "Vizag Problems, Startup Ideas",
  club: "Entrepreneurship",
  tagline: "Turn real problems around Vizag and your campus into startup ideas you can test this week.",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "35 minutes", level: "Beginner",
    about: "Great startups solve problems people face every day. In 6 rounds, teams look at everyday problems around Vizag and campus life, like beach litter, late-night food, bus timings, hostel laundry and finding PG rooms, and learn to judge which problems are worth solving, find the first customer, test the idea cheaply, find a way to earn, and spot competition. It ends with every team pitching a Vizag startup in 3 lines.",
    outcomes: "Students can tell a real problem from a “cool idea”, pick a first customer, design a one-week test with no money, and pitch an idea in 3 lines.",
    tone: "Local and energetic. Invite students to share problems from their own area and college. All scenarios are simple and made up; there are no right or wrong startup ideas, only better tests.",
    extra: [["Pairs with", "Idea or Not, Copycat or Original? and the EduMoon Innovation Challenge. Good ideas from today can be entered there."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Founded",
    rulesEyebrow: "How this game works", rulesTitle: "Spot the problem. Find the customer. Test it.",
    learnText: "The host shares one step from problem to startup.", crackTitle: "Answer",
    crackText: "Pick the best move on your phone and lock it in.",
    rulesExtra: "Faster answers score more. Speak (optional): <b>+100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. First-time founders miss it too!", cracked: "got it right",
    next: "Next round →", finale: "Next →", winner: "are today’s Vizag founders!", endLine: "Every problem you complain about is a startup waiting to happen."
  },
  offerEyebrow: "EduMoon Entrepreneurship · Founder results",
  offerTitle: "Your founder rank",
  offers: [
    { min: 0.7, icon: "crown", title: "Problem Solver", text: "You see problems like a founder. Test one idea this week and enter the Innovation Challenge." },
    { min: 0.45, icon: "rocket", title: "Idea Builder", text: "Strong! Talk to 10 people about your problem before building anything." },
    { min: 0.2, icon: "lightbulb", title: "Idea Spotter", text: "Good start. Write down 3 problems you faced this week." },
    { min: 0, icon: "book-open", title: "Curious Mind", text: "Everyone starts here. Notice what annoys people around you." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Entrepreneurship · Vizag Problems, Startup Ideas",
      title: "Vizag has beaches, hills, a big port, lakhs of students, and plenty of everyday problems. Today your team turns them into startup ideas.",
      cards: [["search", "Spot real problems"], ["users", "Find your first customer"], ["rocket", "Test it in one week"]]
    },
    { type: "rules" },

    // ---------- Round 1: Real problems ----------
    {
      type: "learn", door: 1,
      title: "A good problem is frequent, painful and real.",
      points: [["Frequent", "It happens every day or every week"], ["Painful", "It costs people time, money or comfort"], ["Real", "People already try to solve it, badly"]],
      highlightLast: true,
      side: { label: "Campus problems", items: [["clock", "Late-night food", "Canteen closes at 9 PM"], ["route", "Bus timings", "Nobody knows when it’s coming"], ["landmark", "PG rooms", "Hard to find, hard to trust"]] }
    },
    VS(1, "Real Problems", {
      prompt: "Which is the strongest problem to build a startup around?",
      options: ["An app to rate the colours of buildings in the city", "No food in hostels after 9 PM", "A website that shows the time in Vizag", "A game about sea animals for adults"], answer: 1,
      hint: "Frequent, painful, real.",
      note: "Hungry students every single night. Frequent and painful: a real problem.", badge: "search"
    }),
    VS(1, "Real Problems", {
      prompt: "Students say: “Finding a safe PG near college is so hard.” How do you know it’s a real problem?",
      options: ["Because it sounds like a good idea to you personally", "Because PGs exist in every city", "A friend said it would go viral", "Many already ask seniors for help"], answer: 3,
      hint: "People already try to solve it, badly.",
      note: "When people already hack together their own solution, the problem is real.", badge: "users"
    }),
    VS(1, "Real Problems", {
      prompt: "Beach litter after weekends at RK Beach is a big problem. Who is the most likely paying customer for a clean-up service?",
      options: ["Tourists, who leave after a day", "Local businesses, events and the city", "School students who visit the beach", "Nobody, problems like this can’t earn"], answer: 1,
      hint: "Who benefits most from a clean beach?",
      note: "Businesses, event organisers and civic bodies benefit and can pay. The people who suffer aren’t always the ones who pay.", badge: "waves",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: First customer ----------
    {
      type: "learn", door: 2,
      title: "Start with one small, specific group.",
      points: [["Too broad", "“Everyone in Vizag”"], ["Specific", "“1st-year hostel students at one college”"], ["Why", "Easier to reach, easier to please, faster to learn"]],
      highlightLast: true,
      side: { label: "Pick the first customer", items: [["x", "Too broad", "All students in India"], ["badge-check", "Good", "Girls’ hostel, one college"], ["target", "Even better", "Their late-night hunger"]] }
    },
    VS(2, "First Customer", {
      prompt: "You want to start hostel laundry pickup. Who should your first customers be?",
      options: ["Every family living in Vizag", "Students in one hostel you can reach", "Hotels and hospitals across the state", "Anyone who wears clothes"], answer: 1,
      hint: "Small and reachable.",
      note: "One hostel first. Learn what they need, then grow hostel by hostel.", badge: "users"
    }),
    VS(2, "First Customer", {
      prompt: "Why not start with “all of Vizag” on day one?",
      options: ["Too wide to reach or understand well", "It’s against city rules to sell to everyone", "Big markets never have any customers", "Vizag doesn’t allow new startups"], answer: 0,
      hint: "Focus.",
      note: "A message for everyone speaks to no one. Win one group, then the next.", badge: "target",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Talk to people ----------
    {
      type: "learn", door: 3,
      title: "Talk to 10 people before you build anything.",
      points: [["Ask about today", "“How do you solve this now?”"], ["Ask about cost", "“What does it cost you in time or money?”"], ["Don’t pitch", "Listen first; don’t ask “Do you like my idea?”"]],
      highlightLast: true,
      side: { label: "Good questions", items: [["message-circle", "Today", "How do you handle it now?"], ["clock", "Last time", "When did it last happen?"], ["indian-rupee", "Cost", "What did it cost you?"]] }
    },
    VS(3, "Talk First", {
      prompt: "Which question teaches you the most about the bus timing problem?",
      options: ["“Would you use my amazing new bus app every single day?”", "“Do you like buses or autos more?”", "“When did you last miss a bus?”", "“Should I make the app blue or green?”"], answer: 2,
      hint: "Real past behaviour.",
      note: "Ask about what actually happened. People’s past actions tell the truth; opinions are polite guesses.", badge: "message-circle"
    }),
    VS(3, "Talk First", {
      prompt: "All 10 friends say “Nice idea!” but none use your free trial. What does it mean?",
      options: ["The idea is perfect, wait a little longer for them", "You should build a full app right away", "They didn’t understand, explain louder", "Friends were polite; the need is weak"], answer: 3,
      hint: "Actions beat compliments.",
      note: "Compliments are free. Behaviour is the real test. Go back and learn why they didn’t try it.", badge: "eye",
      board: true, boardLabel: "after Round 3"
    }),

    // ---------- Round 4: Test it in a week ----------
    {
      type: "learn", door: 4,
      title: "Test the idea in a week, with almost no money.",
      points: [["No app yet", "Use WhatsApp, a Google Form, a poster or a stall"], ["Small and real", "Real customers, real orders, real money if possible"], ["Measure one thing", "How many ordered, and how many came back?"]],
      highlightLast: true,
      side: { label: "One-week tests", items: [["message-circle", "WhatsApp", "Take orders in one group"], ["list-checks", "Form", "Collect sign-ups"], ["store", "Stall", "Sell at the college gate"]] }
    },
    VS(4, "Test It", {
      prompt: "Best first test for a late-night snack delivery idea?",
      options: ["Build a full app for 6 months first", "Rent a shop and hire 5 delivery staff", "Take orders in one hostel group", "Run a big newspaper ad across the city"], answer: 2,
      hint: "Fast, cheap, real.",
      note: "A one-week WhatsApp test tells you more than months of building.", badge: "zap"
    }),
    VS(4, "Test It", {
      prompt: "Your one-week PG-finder test got 40 sign-ups and 12 students actually visited rooms. What next?",
      options: ["Ask the 12 what helped them", "Stop, 12 is too small a number to matter at all", "Hire 20 people immediately", "Launch in 10 cities next week"], answer: 0,
      hint: "Learn from your real users.",
      note: "Real users are gold. Learn from them, improve, then grow.", badge: "search",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: How you earn ----------
    {
      type: "learn", door: 5,
      title: "Know who pays, and why it’s worth it to them.",
      points: [["Who pays", "Students, parents, businesses or the city"], ["How", "Per order, monthly plan, commission or ads"], ["Why", "It saves them more than it costs"]],
      highlightLast: true,
      side: { label: "Ways to earn", items: [["indian-rupee", "Per use", "₹20 per laundry bag"], ["clock", "Monthly", "₹299 a month, unlimited"], ["handshake", "Commission", "10% from PG owners"]] }
    },
    VS(5, "Earn", {
      prompt: "A PG-finder helps students find rooms. Who could pay?",
      options: ["Only the government, through a grant", "PG owners who want more tenants", "Nobody, it has to stay free forever", "Students’ school teachers"], answer: 1,
      hint: "Who gains the most?",
      note: "PG owners fill empty rooms faster. Charging the side that gains most often works best.", badge: "handshake"
    }),
    VS(5, "Earn", {
      prompt: "Laundry pickup costs you ₹15 per bag. What price makes sense to test first?",
      options: ["₹5, so lots of people try it once", "₹15, exactly what it costs you", "₹25–₹30, then see if they pay", "₹200, to earn a lot from each bag"], answer: 2,
      hint: "Cover costs plus a margin, then test.",
      note: "Price above cost and test it. If students happily pay, you have a business.", badge: "indian-rupee",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Competition and pitch (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: competition and your edge. Double points.",
      points: [["Someone always competes", "Even if it’s an old way of doing things"], ["Your edge", "Local knowledge, speed, trust, price or focus"], ["Pitch in 3 lines", "Problem, solution, first proof"]],
      highlightLast: true,
      side: { label: "A 3-line pitch", items: [["search", "Problem", "Hostels have no food after 9 PM"], ["zap", "Solution", "Snack drops at the gate till 1 AM"], ["badge-check", "Proof", "120 orders in our first week"]] }
    },
    VS(6, "Your Edge", {
      double: true,
      prompt: "Big food apps already deliver in Vizag. What’s a small hostel snack startup’s best edge?",
      options: ["Copy their app exactly, screen by screen, but cheaper", "Charge the same and hope for the best", "Advertise more than they do on TV", "Late hours and hostel-gate drops"], answer: 3,
      hint: "What the giants don’t bother to do.",
      note: "Local focus. Late hours, campus access and trust are hard for big apps to match.", badge: "rocket"
    }),
    VS(6, "Your Edge", {
      double: true,
      prompt: "Which is the strongest 3-line pitch?",
      options: ["“Students miss buses. Our WhatsApp bot shares timings. 300 users in 2 weeks.”", "“We are passionate young founders who want to change Vizag forever and ever.”", "“An AI blockchain platform for smart mobility solutions.”", "“Our idea is very unique and nobody has ever thought of it.”"], answer: 0,
      hint: "Problem, solution, proof.",
      note: "Clear problem, simple solution, real proof. Judges and investors love proof.", badge: "crown",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, results, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best pitch wins +200", prompt: "Pitch a Vizag startup in 3 lines: the problem, your solution, and how you’ll test it this week.", note: "Use a real problem from your area or college. The room votes.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "From problem to startup", note: "Screenshot this. Pick one problem and test it this week.", items: IDEAKIT },
    {
      type: "end",
      joinTitle: "Join the EduMoon community",
      joinText: "Startup games, pitch practice and the Innovation Challenge. Build your own idea, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
