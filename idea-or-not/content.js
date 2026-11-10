// Idea or Not (EduMoon Entrepreneurship). For all years.
// Real Indian startup stories vs made-up ones, then the real lesson: how great startups started small, pivoted,
// and how to test your own idea. Startup facts were checked in 2026; made-up startups are clearly marked in the notes.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const IN = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 40, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const RF = ["Real startup story", "Made up"];

const TESTS = [
  ["Is the problem real?", "Do people complain about it or pay to fix it today?"],
  ["Who exactly has it?", "Name one type of person, not “everyone”."],
  ["How do they solve it now?", "That’s your real competition."],
  ["Can you test it this week?", "WhatsApp, Google Form, Instagram page, one hostel."],
  ["Will anyone pay?", "Pre-orders and payments beat “nice idea!”"],
  ["Start small", "One campus, one product, one feature."],
  ["Listen and change", "Many great startups pivoted from their first idea."],
  ["Why you?", "Your access, skills or experience that others don’t have."]
];

window.GAME = {
  id: "idea-or-not",
  title: "Idea or Not",
  club: "Entrepreneurship",
  tagline: "Real startup or made up? Then find out what makes an idea work.",
  art: window.STORY_ART,
  guide: {
    years: "All years · no business background needed", time: "35 minutes", level: "Beginner",
    about: "It starts as a guessing game: is this a real Indian startup story or made up? Then it turns: teams learn that famous startups started small (selling books, a YouTube channel, a menu website), many changed direction, and the best ideas solve real problems. They judge campus startup ideas and leave with 8 questions to test any idea.",
    outcomes: "How real startups began, why starting small and pivoting are normal, how to tell a strong idea from a weak one, and 8 questions to test an idea before building it.",
    tone: "Keep the guessing round fast and fun. The made-up startups are silly on purpose in some questions and believable in others. The bigger message: you don’t need a perfect idea or big money to start; you need a real problem and a cheap test.",
    extra: [["Facts", "Startup facts were checked in 2026 and kept simple (founders, what they started with). Company names and details can change after mergers or rebrands, so stick to the stories as told."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Called it",
    rulesEyebrow: "How Idea or Not works", rulesTitle: "Real or made up? Strong or weak? Decide.",
    learnText: "The host shares one lesson from real startup stories.", crackTitle: "Decide",
    crackText: "Pick your answer on your phone and lock it in.",
    rulesExtra: "Speak (optional): <b>+100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody called this one. Startup stories are full of surprises!", cracked: "called it",
    next: "Next round →", finale: "Next →", winner: "are today’s startup spotters!", endLine: "Now go test your own idea!"
  },
  offerEyebrow: "EduMoon Entrepreneurship · Founder sense",
  offerTitle: "Your founder sense",
  offers: [
    { min: 0.7, icon: "rocket", title: "Natural Founder", text: "You can tell a real problem from a shiny idea. Start testing one this month." },
    { min: 0.45, icon: "lightbulb", title: "Idea Spotter", text: "Strong! Pick one campus problem and talk to 10 people about it." },
    { min: 0.2, icon: "search", title: "Curious Builder", text: "Good start. Read the story of one Indian startup this week." },
    { min: 0, icon: "book-open", title: "Future Founder", text: "Everyone starts here. Save the 8 questions and try them on one idea." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Entrepreneurship · Idea or Not",
      title: "Some of India’s biggest startups began in ways that sound made up. Some ideas that sound great would never work. Can your team tell?",
      cards: [["lightbulb", "Real startup story or made up?"], ["route", "How big startups really began"], ["target", "Judge campus startup ideas"]]
    },
    { type: "rules" },

    // ---------- Round 1: Real or made up? ----------
    {
      type: "learn", door: 1,
      title: "Real startup stories often sound too simple to be true.",
      points: [["They start tiny", "One product, one city, a few customers"], ["Founders are ordinary", "Students, teachers, engineers, people who noticed a problem"], ["Made-up ideas", "Often sound cool but solve nothing real"]],
      highlightLast: true,
      side: { label: "Clues it’s real", items: [["target", "A clear problem", "People already had it"], ["users", "Real customers", "Who paid or used it"], ["route", "Humble start", "Small, then bigger"]] }
    },
    IN(1, "Real or Made Up?", {
      prompt: "“Two friends started an online store in 2007 that sold only books at first.” Real or made up?",
      options: RF, answer: 0,
      hint: "Think of India’s big shopping apps.",
      note: "Real: Flipkart, started by Sachin Bansal and Binny Bansal, began by selling books online.", badge: "book-open"
    }),
    IN(1, "Real or Made Up?", {
      prompt: "“A startup sends you a free mango every time you open its app, and pays for it with nothing.” Real or made up?",
      options: RF, answer: 1,
      hint: "Who pays for the mangoes?",
      note: "Made up. Free everything with no money coming in can’t last. Great ideas always have a way to pay the bills.", badge: "x"
    }),
    IN(1, "Real or Made Up?", {
      prompt: "“A physics teacher started a YouTube channel, and it grew into a big education company.” Real or made up?",
      options: RF, answer: 0,
      hint: "Think about online coaching in India.",
      note: "Real: PhysicsWallah, started by Alakh Pandey as a YouTube channel.", badge: "graduation-cap",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Real or made up, harder ----------
    {
      type: "learn", door: 2,
      title: "Many startups solved one boring problem really well.",
      points: [["Boring is fine", "Menus, mattresses, spectacles, chai"], ["Better, not new", "Faster, cheaper, easier than before"], ["One thing first", "Then expand"]],
      highlightLast: true,
      side: { label: "Boring problems, big companies", items: [["store", "Restaurant menus", "Became a food app"], ["eye", "Spectacles", "Became an eyewear brand"], ["timer", "Groceries", "Became quick delivery"]] }
    },
    IN(2, "Real or Made Up?", {
      prompt: "“A food app began as a website that put restaurant menus online, under a different name.” Real or made up?",
      options: RF, answer: 0,
      hint: "Think of an app you order food from.",
      note: "Real: Zomato started in 2008 as Foodiebay, a website listing restaurant menus.", badge: "store"
    }),
    IN(2, "Real or Made Up?", {
      prompt: "“A Vizag startup delivers hot dosas by drone to any classroom in 2 minutes, for ₹5.” Real or made up?",
      options: RF, answer: 1,
      hint: "Could ₹5 pay for a drone, a dosa and the rules for flying drones over colleges?",
      note: "Made up. It sounds fun, but the cost, safety rules and price don’t add up.", badge: "x"
    }),
    IN(2, "Real or Made Up?", {
      prompt: "“Two young founders who dropped out of a US university started a 10-minute grocery delivery app in India.” Real or made up?",
      options: RF, answer: 0,
      hint: "Quick commerce apps are everywhere now.",
      note: "Real: Zepto, founded by Aadit Palicha and Kaivalya Vohra, who left Stanford to build it.", badge: "timer",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Started small ----------
    {
      type: "learn", door: 3,
      title: "Start small, learn fast, then grow.",
      points: [["Small is a strategy", "Fewer customers means faster learning"], ["Cheap tests", "A YouTube channel, a website, a WhatsApp group"], ["Grow what works", "Double down only after people love it"]],
      highlightLast: true,
      side: { label: "Started with", items: [["book-open", "Books only", "Flipkart"], ["film", "A YouTube channel", "PhysicsWallah"], ["store", "Menus online", "Zomato"]] }
    },
    IN(3, "Start Small", {
      prompt: "Why did many successful startups begin with just ONE product or city?",
      options: ["They had no ambition", "Investors made them", "It’s easier to make a few customers very happy and learn fast", "Big cities were closed"], answer: 2,
      hint: "What’s easier: 100 happy users or 1 lakh confused ones?",
      note: "Focus lets you learn quickly and get it right before spending big.", badge: "target"
    }),
    IN(3, "Start Small", {
      prompt: "You want to start a campus notes-printing service. What’s the smartest first step?",
      options: ["Buy 10 printers", "Take orders on WhatsApp in your own hostel for one week", "Build an app for 6 months", "Open in 10 colleges at once"], answer: 1,
      hint: "Cheapest way to learn if people want it.",
      note: "One hostel, one week, zero cost. You learn more than from months of planning.", badge: "smartphone"
    }),
    IN(3, "Start Small", {
      prompt: "“PhysicsWallah started as a YouTube channel.” What’s the lesson for students?",
      options: ["Only teachers can start companies", "You need lakhs to start", "YouTube is the only way", "You can start with free tools and build trust before building a company"], answer: 3,
      hint: "What did it cost to start?",
      note: "Free platforms let you test, build an audience and prove demand before you spend.", badge: "film",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Name an Indian startup you use. What small thing did it probably start with?", note: "Guess its first step in 20 seconds.", points: 100 },

    // ---------- Round 4: Strong or weak idea? ----------
    {
      type: "learn", door: 4,
      title: "A strong idea solves a real, frequent problem for specific people who will pay.",
      points: [["Real", "People already complain or spend money"], ["Frequent", "Daily or weekly beats once a year"], ["Payable", "Someone can and will pay"]],
      highlightLast: true,
      side: { label: "Weak idea signs", items: [["x", "“Everyone will use it”", "No clear customer"], ["x", "“Like Instagram, but…”", "Copy with no reason"], ["x", "“We’ll monetise later”", "No one pays"]] }
    },
    IN(4, "Strong or Weak?", {
      prompt: "Which campus idea is the STRONGEST?",
      options: ["A social network only for left-handed people", "A service that collects and returns hostel laundry twice a week for a small fee", "An app that tells you the time", "A new messaging app to replace WhatsApp"], answer: 1,
      hint: "Real, frequent, and someone pays.",
      note: "Laundry is a real weekly pain, and students already pay for it. Strong start.", badge: "badge-check"
    }),
    IN(4, "Strong or Weak?", {
      prompt: "“A new app exactly like WhatsApp, but for students.” What’s the biggest problem?",
      options: ["Students don’t use phones", "The name is too long", "Students already use WhatsApp for free, so there’s no reason to switch", "Apps are illegal"], answer: 2,
      hint: "Why would anyone switch?",
      note: "Copies with no clear advantage fail. Ask: what problem does WhatsApp NOT solve for students?", badge: "message-circle"
    }),
    IN(4, "Strong or Weak?", {
      prompt: "Which question best tests if your idea is strong?",
      options: ["“Do you like my idea?”", "“How do you solve this problem today, and what does it cost you?”", "“Will you be my friend?”", "“Is my logo nice?”"], answer: 1,
      hint: "Which question gets an honest answer?",
      note: "People say “nice idea” to be polite. Asking about what they do today reveals the truth.", badge: "search",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Pivots ----------
    {
      type: "learn", door: 5,
      title: "Changing direction is normal. It’s called a pivot.",
      points: [["First ideas change", "Customers show you what they really want"], ["Pivot ≠ failure", "It’s learning what works"], ["Keep what works", "Drop what doesn’t, fast"]],
      highlightLast: true,
      side: { label: "Famous pivots", items: [["store", "Menus → food delivery", "Zomato"], ["smartphone", "Mobile recharge → payments", "Paytm"], ["route", "Many others", "Most founders pivot at least once"]] }
    },
    IN(5, "Pivots", {
      prompt: "“A company started with mobile phone recharges and grew into a big digital payments app.” Real or made up?",
      options: RF, answer: 0,
      hint: "Think of an app with a wallet and QR codes.",
      note: "Real: Paytm began with online mobile recharges before growing into payments.", badge: "smartphone"
    }),
    IN(5, "Pivots", {
      prompt: "Your campus tiffin service gets few orders, but many students ask for late-night snacks. Best move?",
      options: ["Ignore them, stick to the plan", "Shut down", "Test a small late-night snack menu for one week", "Raise tiffin prices"], answer: 2,
      hint: "Customers are telling you something.",
      note: "Listen and test. That’s how pivots start: small experiments based on real demand.", badge: "route"
    }),
    IN(5, "Pivots", {
      prompt: "When should a founder think about pivoting?",
      options: ["After one bad day", "Never, never change", "When the cat looks sad", "When tests keep showing people don’t want it, but want something nearby"], answer: 3,
      hint: "Look for a pattern, not one bad day.",
      note: "Pivot on evidence, not on mood. Give each test a fair chance first.", badge: "chart-column",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Final calls (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: test before you build.",
      points: [["Talk", "10 real potential customers"], ["Test", "A free or cheap version for one week"], ["Decide", "Grow it, change it, or drop it"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game!"], ["lightbulb", "Final calls", "Real or not, strong or not"], ["award", "Then your founder sense", "How sharp is your team?"]] }
    },
    IN(6, "Final Calls", {
      double: true,
      prompt: "“A woman left a banking career in her late 40s and started a beauty and cosmetics shopping platform.” Real or made up?",
      options: RF, answer: 0,
      hint: "Think of a big beauty shopping app.",
      note: "Real: Nykaa, founded by Falguni Nayar in 2012. It’s never too late, or too early, to start.", badge: "rocket"
    }),
    IN(6, "Final Calls", {
      double: true,
      prompt: "“A startup made ₹100 crore in its first week by selling air in bottles to college students.” Real or made up?",
      options: RF, answer: 1,
      hint: "Does that sound like a real problem being solved?",
      note: "Made up. Overnight-success stories with no real problem behind them are usually fiction.", badge: "x"
    }),
    IN(6, "Final Calls", {
      double: true,
      prompt: "You have a startup idea and ₹0. What do you do this week?",
      options: ["Wait until you have money", "Talk to 10 people who have the problem and test the idea with free tools", "Quit college immediately", "Tell nobody so they can’t copy it"], answer: 1,
      hint: "What did today’s real stories do?",
      note: "Ideas are cheap to test today. Talking to people and testing for free is how most founders begin.", badge: "lightbulb",
      board: true, boardLabel: "after Round 6"
    }),

    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "In 30 seconds: your startup idea, and how you’d test it this week for free.", note: "Problem + who + free test. The room claps; the host picks the best one.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "8 Questions to Test Any Idea", note: "Screenshot this. Run your idea through it before you build anything.", items: TESTS },
    {
      type: "end",
      joinTitle: "Join the EduMoon community",
      joinText: "Startup games, pitch practice and real projects every week. Build your own idea, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
