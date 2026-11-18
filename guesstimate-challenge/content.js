// Guesstimate Challenge (EduMoon Skills Club). Advanced: for final years preparing for consulting, product, analyst and MBA interviews.
// Estimate anything with structure: break it down, state assumptions, top-down vs bottom-up, sanity checks and presenting your answer. Numbers come from stated assumptions, not facts.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const GS = (round, name, extra) => Object.assign({ type: "door", kind: "number", time: 75, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const GSC = (round, name, extra) => GS(round, name, Object.assign({ kind: "choice", time: 50 }, extra));

// The take-home card: the guesstimate method.
const METHOD = [
  ["Clarify", "What exactly is being counted? Where? Over what time?"],
  ["Break it down", "Population → who uses it → how often → how much."],
  ["State assumptions", "Say each number aloud with a short reason."],
  ["Round smartly", "Use easy numbers: 1,000 not 987. Speed beats false precision."],
  ["Top-down or bottom-up", "From the whole population down, or from one shop up."],
  ["Sanity check", "Does the answer make sense? Compare with something you know."],
  ["Present clearly", "Structure, assumptions, answer, and what would change it."],
  ["It is about thinking", "Interviewers judge your process, not the exact number."]
];

window.GAME = {
  id: "guesstimate-challenge",
  title: "Guesstimate Challenge",
  club: "Skills Club",
  tagline: "“How many cups of tea are sold in Vizag every day?” Learn to estimate anything.",
  art: window.STORY_ART,
  guide: {
    years: "Final year (consulting, product, analyst and MBA aspirants)", time: "45 minutes", level: "Advanced",
    about: "Aditya has a consulting interview and dreads the question “How many cups of tea are sold in Vizag every day?” In 6 rounds, teams learn to clarify the question, break it into steps, state assumptions, choose top-down or bottom-up, sanity-check the result and present it well. Every number question gives the assumptions, so the maths is fair and checkable; the skill is the structure.",
    outcomes: "A repeatable structure for any market-size or estimation question, comfort with quick rounded maths, and a clear way to present reasoning in interviews.",
    tone: "The numbers here are assumptions, not facts. Say this often. Celebrate clear structure over the “right” answer. Let teams explain their breakdown aloud after each round.",
    extra: [["Board work", "Write each breakdown as a tree on the board: total → segments → frequency. Students copy the shape for their own questions."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Estimated",
    rulesEyebrow: "How Guesstimate Challenge works", rulesTitle: "Learn the step. Use the assumptions. Estimate fast.",
    learnText: "The host explains one step of estimating anything.", crackTitle: "Estimate",
    crackText: "Use the given assumptions and type your answer.",
    rulesExtra: "Most questions need a typed number. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Let’s break it down together!", cracked: "estimated it",
    next: "Next round →", finale: "Next →", winner: "think like consultants!", endLine: "Aditya cleared his case round."
  },
  offerEyebrow: "EduMoon Skills Club · Case round",
  offerTitle: "Your case round result",
  offers: [
    { min: 0.7, icon: "trophy", title: "Consultant Ready", text: "Structured and fast. Practise one guesstimate a day for a week." },
    { min: 0.45, icon: "chart-column", title: "Strong Analyst", text: "Good! Say your assumptions aloud when you practise." },
    { min: 0.2, icon: "route", title: "Learning the Method", text: "Good start. Use the method card for your next attempt." },
    { min: 0, icon: "book-open", title: "First Case", text: "Everyone starts here. Try estimating the students in your college first." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Skills Club · Case interview",
      title: "Aditya’s consulting interview is tomorrow. The question he fears: “How many cups of tea are sold in Vizag every day?” Can your team teach him to estimate anything?",
      cards: [["route", "Break it down, step by step"], ["chart-column", "Assumptions, maths and sanity checks"], ["trophy", "Your score decides your case round result"]]
    },
    { type: "rules" },

    // ---------- Round 1: Break it down ----------
    {
      type: "learn", door: 1,
      title: "Every guesstimate is a chain of simple multiplications.",
      points: [["Start from people", "How many people could buy or use it?"], ["Narrow down", "What share actually does?"], ["How often, how much", "Per day, per week, per person"]],
      highlightLast: true,
      side: { label: "Example breakdown", items: [["users", "College students", "4,000"], ["list-checks", "Drink tea daily", "50%"], ["chart-column", "Cups each", "1 → 2,000 cups"]] }
    },
    GS(1, "Break It Down", {
      prompt: "Assume a college has 4,000 students, 50% drink tea daily at the canteen, 2 cups each. How many cups a day?",
      answer: 4000,
      hint: "4,000 × 0.5 × 2.",
      note: "2,000 tea drinkers × 2 cups = 4,000 cups. Three simple steps.", badge: "route"
    }),
    GS(1, "Break It Down", {
      prompt: "Assume a hostel has 500 students; 20% order food online each night; ₹200 per order. Rupees spent per night?",
      answer: 20000,
      hint: "500 × 0.2 × 200.",
      note: "100 orders × ₹200 = ₹20,000 a night. Same chain: people, share, amount.", badge: "indian-rupee"
    }),
    GSC(1, "Break It Down", {
      prompt: "What should Aditya do FIRST when asked “How many cups of tea are sold in Vizag daily?”",
      options: ["Clarify what exactly counts", "Shout a random number quickly", "Say it is impossible to know", "Search on his phone"], answer: 0,
      hint: "Make sure you are estimating the right thing.",
      note: "A quick clarifying question shows structure: homes or only shops? Just Vizag city?", badge: "search",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Assumptions ----------
    {
      type: "learn", door: 2,
      title: "State every assumption, and round it smartly.",
      points: [["Say it aloud", "“I’ll assume a population of about 20 lakh.”"], ["Give a quick reason", "“Roughly a city of this size.”"], ["Round to easy numbers", "Speed matters more than false precision"]],
      highlightLast: true,
      side: { label: "Round it", items: [["check", "1,980 → 2,000", "Easy maths"], ["check", "48% → 50%", "Half"], ["check", "31 days → 30", "One month"]] }
    },
    GS(2, "Assumptions", {
      prompt: "Assume 20,00,000 people; 60% drink tea outside home daily; 1 cup each. How many cups?",
      answer: 1200000,
      hint: "20 lakh × 0.6.",
      note: "12 lakh (1,200,000) cups a day, from three stated assumptions.", badge: "chart-column"
    }),
    GSC(2, "Assumptions", {
      prompt: "Which is the best way to state an assumption in an interview?",
      options: ["“The exact number is surely 48.73 percent.”", "“About half drink tea daily; it’s common here.”", "“I honestly don’t know, you tell me.”", "Silently write a number on paper"], answer: 1,
      hint: "A number with a reason, said aloud.",
      note: "Interviewers want to follow your thinking. A reason makes your assumption easy to discuss.", badge: "message-circle"
    }),
    GS(2, "Assumptions", {
      prompt: "Round to make it easy: 1,980 students × 2 cups each. Using 2,000 students, about how many cups?",
      answer: 4000,
      hint: "2,000 × 2.",
      note: "4,000. The exact answer is 3,960. Rounding barely changes the result but saves time.", badge: "zap",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Top-down vs bottom-up ----------
    {
      type: "learn", door: 3,
      title: "Two directions: top-down or bottom-up.",
      points: [["Top-down", "Start from the population, narrow down to buyers"], ["Bottom-up", "Start from one seller, multiply by the number of sellers"], ["Do both if you can", "If they roughly agree, you can be more confident"]],
      highlightLast: true,
      side: { label: "Tea in Vizag", items: [["users", "Top-down", "People × share × cups"], ["store", "Bottom-up", "Stalls × cups per stall"], ["check", "Compare", "Close enough? Good"]] }
    },
    GS(3, "Two Directions", {
      prompt: "Bottom-up: assume 4,000 tea stalls in a city, each selling 300 cups a day. Total cups?",
      answer: 1200000,
      hint: "4,000 × 300.",
      note: "12 lakh cups, the same as the top-down estimate. When both agree, confidence goes up.", badge: "store"
    }),
    GSC(3, "Two Directions", {
      prompt: "Estimating a single new café’s monthly revenue. Which approach fits better?",
      options: ["Bottom-up from seats and bills", "Top-down: the whole country’s coffee market", "Neither, just guess", "Ask the café owner during the interview"], answer: 0,
      hint: "One small business.",
      note: "For one business, build up from its own capacity. Top-down works better for whole markets.", badge: "store"
    }),
    GS(3, "Two Directions", {
      prompt: "A café has 20 seats, 2 customers per seat per hour, 10 hours a day, ₹150 bill each. Revenue per day in rupees?",
      answer: 60000,
      hint: "20 × 2 × 10 × 150.",
      note: "400 customers × ₹150 = ₹60,000. Is every seat really full every hour? A sanity check would ask that.", badge: "indian-rupee",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Out loud: how would you break down “How many phones are sold in Vizag in a year?” Steps only, no maths.", note: "People → who buys → how often. 20 seconds.", points: 100 },

    // ---------- Round 4: Practice ----------
    {
      type: "learn", door: 4,
      title: "Practice: one chain, step by step.",
      points: [["Write the chain first", "Then fill in numbers"], ["Keep units clear", "per day, per month, per person"], ["Multiply in easy steps", "Lakhs and thousands, not long decimals"]],
      highlightLast: true,
      side: { label: "Units", items: [["clock", "Per day × 30", "Per month"], ["clock", "Per month × 12", "Per year"], ["users", "Per person × people", "Total"]] }
    },
    GS(4, "Practice", {
      prompt: "Assume 3,000 autos in a city, each doing 25 trips a day. How many auto trips a day?",
      answer: 75000,
      hint: "3,000 × 25.",
      note: "75,000 trips a day.", badge: "route"
    }),
    GS(4, "Practice", {
      prompt: "Assume a gym has 400 members paying ₹1,000 a month. Yearly revenue in rupees?",
      answer: 4800000,
      hint: "400 × 1,000 × 12.",
      note: "₹4,00,000 a month × 12 = ₹48,00,000 (48 lakh) a year.", badge: "chart-column"
    }),
    GS(4, "Practice", {
      prompt: "Assume 10,000 students in a city’s colleges; 30% buy a new phone each year; average ₹15,000. Total spend in lakhs of rupees?",
      answer: 450,
      hint: "3,000 buyers × ₹15,000, then convert to lakhs.",
      note: "3,000 × ₹15,000 = ₹4,50,00,000, which is ₹450 lakh (₹4.5 crore).", badge: "smartphone",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Sanity check ----------
    {
      type: "learn", door: 5,
      title: "Always ask: does this answer make sense?",
      points: [["Compare with something known", "Is it more than the city’s population? Bigger than a famous company?"], ["Check per person", "Does each person really do this that often?"], ["Fix, don’t defend", "If it looks wrong, say so and adjust"]],
      highlightLast: true,
      side: { label: "Red flags", items: [["x", "More buyers than people", "Impossible"], ["x", "Every person buys daily", "Too high"], ["check", "Close to a known number", "Reassuring"]] }
    },
    GSC(5, "Sanity Check", {
      prompt: "Aditya estimates 5 crore cups of tea a day in a city of 20 lakh people. What should he do?",
      options: ["Proudly present it as final", "Double it to be safe", "Check per person, fix it", "Change the topic"], answer: 2,
      hint: "Divide by the population.",
      note: "5 crore ÷ 20 lakh = 25 cups each, which is unrealistic. A quick per-person check catches the error.", badge: "search"
    }),
    GS(5, "Sanity Check", {
      prompt: "Per-person check: 12,00,000 cups for 20,00,000 people. How many cups per 10 people?",
      answer: 6,
      hint: "12 lakh ÷ 20 lakh = 0.6 per person.",
      note: "0.6 per person, or 6 per 10 people. That feels believable for daily tea outside home.", badge: "check"
    }),
    GSC(5, "Sanity Check", {
      prompt: "The interviewer says, “That number seems high.” Best response?",
      options: ["Insist the number is correct", "Revisit the key assumption", "Start again from zero in silence", "Agree without thinking"], answer: 1,
      hint: "Show you can update calmly.",
      note: "Find the assumption driving the result, test it and adjust. That is exactly the skill being tested.", badge: "route",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Present it (double) ----------
    {
      type: "learn", door: 6,
      title: "Present: structure, assumptions, answer, what would change it.",
      points: [["Structure first", "“I’ll break it into people, share and cups.”"], ["Then the answer", "A rounded number with units"], ["Close with sensitivity", "“If tea habits are lower, it could be closer to 8 lakh.”"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["chart-column", "Full guesstimates", "Start to finish"], ["mic", "Then the final challenge", "Present one live"]] }
    },
    GS(6, "Present It", {
      double: true,
      prompt: "Assume 50 lakh (5,000,000) people; 40% use a cab app monthly; 4 rides each. Rides per month?",
      answer: 8000000,
      hint: "50 lakh × 0.4 × 4.",
      note: "20 lakh users × 4 = 80 lakh (8,000,000) rides a month.", badge: "route"
    }),
    GS(6, "Present It", {
      double: true,
      prompt: "Assume 80,00,000 rides a month, ₹200 average fare, 20% platform commission. Platform revenue per month in crore rupees?",
      answer: 32,
      hint: "80 lakh × 200 × 0.2, then ÷ 1 crore.",
      note: "₹160 crore of fares × 20% = ₹32 crore a month for the platform.", badge: "indian-rupee"
    }),
    GSC(6, "Present It", {
      double: true,
      prompt: "Which is the best way to end a guesstimate answer?",
      options: ["“That’s it.”", "“I’m not sure, honestly.”", "Only the final number", "Answer, units and key assumption"], answer: 3,
      hint: "Confident and thoughtful.",
      note: "A clear number plus what would change it shows judgement, not just arithmetic.", badge: "badge-check",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, result, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best case wins +200", prompt: "Live case: “How many two-wheelers are sold in Vizag each year?” Present your structure, assumptions and answer in 60 seconds.", note: "Structure, stated assumptions, a sanity check. The host picks the clearest.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "The Guesstimate Method", note: "Screenshot this. Practise one guesstimate a day.", items: METHOD },
    {
      type: "end",
      joinTitle: "Join the EduMoon Skills Club",
      joinText: "Mock interviews, resumes, internships and career games every week. Get placed, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
