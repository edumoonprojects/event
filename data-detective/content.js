// Data Detective (EduMoon AI Lab). For all years.
// AI is only as good as its data. Teams inspect small made-up datasets for missing values, typos, duplicates,
// biased samples, outliers and fake patterns before they train a bad AI.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const DD = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 45, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
// "Find the bad row" questions use the bug door with data labels.
const ROW = { kind: "bug", time: 60, step1: "What’s wrong with the data?", step2: "Tap the bad row", say1: "First pick the problem.", say2: "Now tap the bad row.", partO: "the problem", partL: "the row", lineLabel: "row", bugLabel: "The bad row is" };

const CLEAN = [
  ["Look before you train", "Open the data. Read 20 rows yourself."],
  ["Find the gaps", "Missing values: fill carefully or remove, and say which."],
  ["Fix the typos", "“Vizag”, “vizag”, “Visakhapatnam” should be one value."],
  ["Remove duplicates", "The same row twice counts twice."],
  ["Check the units", "Kg vs g, ₹ vs ₹ lakh, cm vs m."],
  ["Question the outliers", "Error or real? Check before deleting."],
  ["Who is missing?", "A sample from one group gives a biased AI."],
  ["Correlation isn’t cause", "Two things moving together doesn’t mean one causes the other."]
];

window.GAME = {
  id: "data-detective",
  title: "Data Detective",
  club: "AI Lab",
  tagline: "Bad data in, bad AI out. Catch the problem before it trains.",
  art: window.STORY_ART,
  guide: {
    years: "All years · no coding needed", time: "35 minutes", level: "Medium",
    about: "Before any AI learns, someone has to check the data. In 6 rounds, teams inspect small made-up tables (student marks, canteen sales, survey answers) and catch missing values, typos, duplicates, wrong units, outliers, biased samples and fake patterns. They learn why most real AI work is data work, and leave with an 8-step data cleaning checklist.",
    outcomes: "How to spot the most common data problems, why biased data creates unfair AI, the difference between correlation and causation, and an 8-step checklist for any project.",
    tone: "Play it like a detective story: every table hides a clue. Read the tables slowly on screen. These skills help with any project report or survey, not just AI.",
    extra: [["Real link", "Data problems in this game are the same ones students meet in mini-projects, surveys and Excel sheets."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Case solved",
    rulesEyebrow: "How Data Detective works", rulesTitle: "Inspect the data. Find the problem. Save the AI.",
    learnText: "The host shows one way data goes wrong.", crackTitle: "Inspect",
    crackText: "Find the problem and lock in your answer on your phone.",
    rulesExtra: "Bad-row questions: <b>100</b> for the problem + <b>100</b> for the row. Round 6: <b>double</b>!",
    nobody: "Nobody caught this one. Real AI teams miss it too!", cracked: "solved the case",
    next: "Next round →", finale: "Next →", winner: "are today’s top data detectives!", endLine: "Clean data, smarter AI!"
  },
  offerEyebrow: "EduMoon AI Lab · Data results",
  offerTitle: "Your detective rank",
  offers: [
    { min: 0.7, icon: "crown", title: "Chief Data Detective", text: "Nothing dirty gets past you. Data analysts are made like this." },
    { min: 0.45, icon: "search", title: "Sharp Analyst", text: "Strong! Always ask “who is missing from this data?”" },
    { min: 0.2, icon: "eye", title: "Junior Detective", text: "Good start. Open your next dataset and read 20 rows first." },
    { min: 0, icon: "book-open", title: "Trainee", text: "Everyone starts here. Save the checklist for your next project." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon AI Lab · Data Detective",
      title: "An AI that predicts student results gave crazy answers. The code was fine. The data wasn’t. Your team has to find out what went wrong.",
      cards: [["search", "Inspect real-looking data tables"], ["eye", "Spot gaps, typos, duplicates and bias"], ["brain", "Learn why data decides how good AI is"]]
    },
    { type: "rules" },

    // ---------- Round 1: Missing and messy ----------
    {
      type: "learn", door: 1,
      title: "Most data is messy. Start by looking at it.",
      points: [["Missing values", "Empty cells, “NA”, “-”"], ["Typos and spellings", "“Vizag”, “vizag”, “Visakhapatnam”"], ["AI can’t guess what you meant", "It treats them as different things"]],
      highlightLast: true,
      side: { label: "First checks", items: [["eye", "Read rows", "With your own eyes"], ["search", "Count blanks", "Per column"], ["list-checks", "Same name, same spelling", ""]] }
    },
    DD(1, "Messy Data", Object.assign({}, ROW, {
      prompt: "Student marks data. Which row has a problem?",
      code: ["Name: Anu   | Maths: 78 | Physics: 82", "Name: Ravi  | Maths: 65 | Physics: 70", "Name: Sneha | Maths:    | Physics: 88", "Name: Kiran | Maths: 91 | Physics: 76"],
      outputOptions: ["Nothing, all rows are fine", "A missing value: Sneha’s Maths mark is blank", "Too many columns"], outputAnswer: 1, bugLine: 2,
      bugText: "Sneha’s Maths mark is missing. Find the real mark, or decide clearly how to handle it",
      hint: "Look for an empty cell.",
      note: "Missing values can break calculations or quietly bias averages. Always check for blanks.", badge: "search"
    })),
    DD(1, "Messy Data", {
      prompt: "A city column has “Vizag”, “vizag”, “VIZAG” and “Visakhapatnam”. How many cities will the computer think there are?",
      options: ["1", "2", "3", "4"], answer: 3,
      hint: "Computers match exactly.",
      note: "4 different values for 1 city. Clean them into one before analysing.", badge: "map"
    }),
    DD(1, "Messy Data", {
      prompt: "Best first step with a new dataset for your project?",
      options: ["Train an AI on it immediately", "Open it and read through rows, checking blanks and odd values", "Make a chart only", "Delete half randomly"], answer: 1,
      hint: "Look before you train.",
      note: "Five minutes of looking can save days of confusing results.", badge: "eye",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Duplicates and units ----------
    {
      type: "learn", door: 2,
      title: "Duplicates and mixed units make AI see things that aren’t there.",
      points: [["Duplicates", "The same order or person counted twice"], ["Units", "Grams vs kilograms, rupees vs lakhs"], ["Both distort totals", "And everything learned from them"]],
      highlightLast: true,
      side: { label: "Watch for", items: [["list-checks", "Same row twice", ""], ["indian-rupee", "₹ vs ₹ lakh", ""], ["chart-column", "kg vs g", ""]] }
    },
    DD(2, "Duplicates and Units", Object.assign({}, ROW, {
      prompt: "Canteen orders. Which row is a problem?",
      code: ["Order 101 | Samosa | ₹15 | 4:05 PM", "Order 102 | Tea    | ₹10 | 4:06 PM", "Order 101 | Samosa | ₹15 | 4:05 PM", "Order 103 | Puff   | ₹20 | 4:09 PM"],
      outputOptions: ["It’s a duplicate of order 101, so sales get counted twice", "It’s too cheap", "Nothing, all rows are fine"], outputAnswer: 0, bugLine: 2,
      bugText: "the same order appears twice, which inflates samosa sales",
      hint: "Look at the order numbers.",
      note: "Duplicates quietly inflate totals and make AI think something is more popular than it is.", badge: "store"
    })),
    DD(2, "Duplicates and Units", Object.assign({}, ROW, {
      prompt: "Students’ weights for a health survey. Which row is a problem?",
      code: ["Arun   | 62 kg", "Divya  | 55 kg", "Rahul  | 70000 g", "Meena  | 58 kg"],
      outputOptions: ["Nothing, all rows are fine", "Rahul is too heavy", "Mixed units: grams instead of kilograms"], outputAnswer: 2, bugLine: 2,
      bugText: "70000 g is 70 kg. Mixed units would make Rahul look 1,000 times heavier",
      hint: "Check the unit.",
      note: "Always convert everything to one unit before analysing.", badge: "chart-column"
    })),
    DD(2, "Duplicates and Units", {
      prompt: "A sales sheet mixes “₹50,000” and “0.5 lakh”. What should you do?",
      options: ["Convert everything to one unit, like rupees, before any analysis", "Delete the lakh rows", "Leave it", "Average them as they are"], answer: 0,
      hint: "Same unit everywhere.",
      note: "0.5 lakh = ₹50,000. Mixed units give nonsense totals.", badge: "indian-rupee",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Outliers ----------
    {
      type: "learn", door: 3,
      title: "Outliers: mistake or real? Check before you delete.",
      points: [["An outlier", "A value far away from the rest"], ["Could be an error", "Typing 990 instead of 99"], ["Could be real and important", "A genuine record or a fraud case"]],
      highlightLast: true,
      side: { label: "Outlier questions", items: [["search", "Is it possible?", "Marks over 100?"], ["user", "Can you confirm?", "Ask the source"], ["shield", "Is it rare but real?", "Keep it"]] }
    },
    DD(3, "Outliers", Object.assign({}, ROW, {
      prompt: "Internal marks out of 100. Which row is impossible?",
      code: ["Teja   | 74", "Fathima| 88", "Varun  | 910", "Lakshmi| 66"],
      outputOptions: ["It’s impossible: marks can’t be above 100. Likely a typo", "It’s fine, Varun is smart", "Nothing wrong"], outputAnswer: 0, bugLine: 2,
      bugText: "910 out of 100 is impossible. Probably 91 or 90 typed wrong. Check the source",
      hint: "What’s the maximum?",
      note: "Impossible values are errors. Fix them from the source, don’t guess.", badge: "file-text"
    })),
    DD(3, "Outliers", {
      prompt: "A UPI dataset shows one ₹2 lakh payment among thousands of ₹100 payments. What should a fraud-detection team do?",
      options: ["Delete it, it’s an outlier", "Look into it carefully. It might be real and exactly what they want to catch", "Change it to ₹100", "Ignore all big payments"], answer: 1,
      hint: "Sometimes the outlier is the story.",
      note: "Not every outlier is a mistake. In fraud detection, unusual values are the whole point.", badge: "shield"
    }),
    DD(3, "Outliers", {
      prompt: "One student’s attendance is recorded as 0% but she topped the class. Most likely?",
      options: ["She studied from home", "Attendance doesn’t matter", "Probably a data entry error. Check with the department", "Delete her from the data"], answer: 2,
      hint: "Does it make sense?",
      note: "When a value doesn’t make sense, check it before using it.", badge: "search",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Describe a time you saw a weird number in a spreadsheet, a bill or a mark list.", note: "Was it an error or real? 20 seconds.", points: 100 },

    // ---------- Round 4: Bias ----------
    {
      type: "learn", door: 4,
      title: "Biased data makes biased AI.",
      points: [["Who is in the data?", "Only one city, gender, college or language?"], ["Who is missing?", "AI won’t work well for them"], ["Fix", "Collect from a wider, fairer mix of people"]],
      highlightLast: true,
      side: { label: "Bias check", items: [["users", "Is everyone represented?", ""], ["map", "City and village?", ""], ["languages", "Language and accents?", ""]] }
    },
    DD(4, "Bias", {
      prompt: "A voice assistant is trained only on recordings from a few big cities. What could go wrong?",
      options: ["Nothing", "It may struggle with other accents and languages across India", "It speaks more languages", "It becomes faster"], answer: 1,
      hint: "Who wasn’t in the data?",
      note: "If people aren’t in the training data, the AI often works worse for them.", badge: "languages"
    }),
    DD(4, "Bias", {
      prompt: "A survey on “What students want from the canteen” only asks hostel students at 9 PM. Problem?",
      options: ["The survey is too short", "9 PM is too early", "Day scholars and others are missing, so the result is biased", "No problem"], answer: 2,
      hint: "Who wasn’t asked?",
      note: "A sample from one group can’t speak for everyone. Ask a fair mix.", badge: "users"
    }),
    DD(4, "Bias", {
      prompt: "An AI to shortlist resumes learned from 10 years of past hires, mostly from 3 colleges. Likely result?",
      options: ["Perfectly fair choices", "It refuses to work", "It may unfairly favour those 3 colleges, repeating past bias", "It picks randomly"], answer: 2,
      hint: "AI copies patterns in history.",
      note: "AI repeats past bias unless people test for it and fix it.", badge: "scale",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Correlation vs causation ----------
    {
      type: "learn", door: 5,
      title: "Things that move together don’t always cause each other.",
      points: [["Correlation", "Two things go up or down together"], ["Causation", "One actually causes the other"], ["Hidden third factor", "Often something else causes both"]],
      highlightLast: true,
      side: { label: "Classic example", items: [["sparkles", "Ice cream sales up", ""], ["sparkles", "Drowning cases up", ""], ["clock", "Cause: hot summer", "for both"]] }
    },
    DD(5, "Cause or Not", {
      prompt: "Data shows students who carry water bottles get better marks. Does carrying a bottle CAUSE better marks?",
      options: ["Yes, buy bottles", "Yes, water is magic", "Marks cause bottles", "Not proven. Something else, like overall health or study habits, may explain both"], answer: 3,
      hint: "Correlation or cause?",
      note: "Two things moving together doesn’t prove one causes the other.", badge: "brain"
    }),
    DD(5, "Cause or Not", {
      prompt: "In summer, both ice cream sales and AC sales go up. What’s the most likely explanation?",
      options: ["Pure coincidence", "Ice cream makes people buy ACs", "ACs make people eat ice cream", "Hot weather increases both"], answer: 3,
      hint: "Look for a third factor.",
      note: "A hidden common cause (heat) drives both. AI can mistake this for a direct link.", badge: "sparkles"
    }),
    DD(5, "Cause or Not", {
      prompt: "How do scientists check if something truly causes an effect?",
      options: ["A fair experiment where only that one thing is changed between groups", "One survey", "Counting likes", "Asking AI"], answer: 0,
      hint: "Change one thing, keep the rest the same.",
      note: "Controlled experiments (like A/B tests) are how cause is tested.", badge: "list-checks",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Final case (double) ----------
    {
      type: "learn", door: 6,
      title: "Final case: clean it, check it, then train.",
      points: [["Clean", "Gaps, typos, duplicates, units"], ["Check", "Outliers, bias, cause vs pattern"], ["Then train", "And test on data the AI has never seen"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game!"], ["search", "Final cases", ""], ["award", "Then your rank", ""]] }
    },
    DD(6, "Final Case", Object.assign({}, ROW, {
      double: true,
      prompt: "Hostel survey on sleep hours per night. Which row is the problem?",
      code: ["Student A | 7 hours", "Student B | 6 hours", "Student C | 7 hours", "Student D | 30 hours"],
      outputOptions: ["Nothing, all rows are fine", "Student D slept too little", "It’s impossible: a day has only 24 hours"], outputAnswer: 2, bugLine: 3,
      bugText: "30 hours a night is impossible. Probably a typo for 3 or 7. Check, don’t guess",
      hint: "How many hours in a day?",
      note: "Basic sense checks catch many errors.", badge: "clock"
    })),
    DD(6, "Final Case", {
      double: true,
      prompt: "You trained an AI and tested it on the SAME data it learned from. It scored 100%. What’s wrong?",
      options: ["It may have just memorised. Test on new data it has never seen", "Nothing, it’s perfect", "100% is too low", "The AI is cheating on purpose"], answer: 0,
      hint: "Like seeing the exam paper before the exam.",
      note: "Always keep some data aside for testing. That shows how it works on new cases.", badge: "graduation-cap"
    }),
    DD(6, "Final Case", {
      double: true,
      prompt: "In real AI projects, where does a lot of the time usually go?",
      options: ["Collecting, cleaning and checking data", "Making slides", "Choosing a logo", "Naming the model"], answer: 0,
      hint: "Today’s whole game.",
      note: "Data work is a big part of AI work, and the part that most decides how good the AI is.", badge: "chart-column",
      board: true, boardLabel: "after Round 6"
    }),

    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "In 30 seconds: describe a dataset for a college project, and 2 problems you’d check for first.", note: "Be specific. The host picks the sharpest detective.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "8-Step Data Cleaning Checklist", note: "Screenshot this. Use it on your next project or survey.", items: CLEAN },
    {
      type: "end",
      joinTitle: "Join the EduMoon community",
      joinText: "AI games, coding challenges and real projects every week. Learn to use AI the smart way.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
