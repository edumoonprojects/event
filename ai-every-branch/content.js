// AI for Every Branch (EduMoon AI Lab). For all years, all branches.
// AI isn't only for CSE. How AI is used in ECE, EEE, Mech, Civil, Commerce/Management and Pharmacy/Bio, and how to start from your branch.
// Examples are kept general and well established; no job or salary numbers are quoted.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const AB = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 40, board: false, eyebrow: `Round ${round} · ${name}` }, extra);

const START = [
  ["Your branch + AI beats AI alone", "Domain knowledge is your advantage."],
  ["Learn basic Python", "The common language of AI tools."],
  ["Learn to work with data", "Spreadsheets first, then Python libraries."],
  ["Use AI tools in your subject", "Simulation, design, analysis, writing."],
  ["Do one small project", "A real problem from your branch."],
  ["Follow your industry", "How are companies in your field using AI?"],
  ["Keep your basics strong", "AI helps experts. It doesn’t replace understanding."],
  ["Check AI’s work", "Especially where safety, health or money is involved."]
];

window.GAME = {
  id: "ai-every-branch",
  title: "AI for Every Branch",
  club: "AI Lab",
  tagline: "AI isn’t only for CSE. See where it fits in YOUR branch.",
  art: window.STORY_ART,
  guide: {
    years: "All years · every branch", time: "35 minutes", level: "Beginner",
    about: "Many non-CSE students think AI isn’t for them. In 6 rounds, teams match real-world AI uses to ECE and EEE, Mechanical, Civil, Commerce and Management, and Pharmacy and Biotech, then learn how to start using AI from their own branch. The message: your branch knowledge plus AI is a strong combination.",
    outcomes: "Real examples of AI in every branch, why domain knowledge matters, and an 8-step plan to start with AI from any branch.",
    tone: "Speak to non-CSE students directly; they often feel left out of AI talk. Ask the room which branches they’re from and spend a little extra time on those rounds. Avoid promising specific jobs or salaries.",
    extra: [["Mixed room tip", "Make mixed-branch teams. Each team then has an expert for at least one round."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Matched",
    rulesEyebrow: "How AI for Every Branch works", rulesTitle: "Read the use. Match the branch. See the future.",
    learnText: "The host shows how AI is used in this branch.", crackTitle: "Match",
    crackText: "Pick your answer on your phone and lock it in.",
    rulesExtra: "Speak (optional): <b>+100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. AI is in more places than people think!", cracked: "matched it",
    next: "Next round →", finale: "Next →", winner: "see AI in every field!", endLine: "Your branch + AI = your edge!"
  },
  offerEyebrow: "EduMoon AI Lab · Branch results",
  offerTitle: "Your AI vision",
  offers: [
    { min: 0.7, icon: "crown", title: "AI Visionary", text: "You see AI everywhere. Pick one use in your branch and try it this month." },
    { min: 0.45, icon: "brain", title: "AI Explorer", text: "Strong! Start basic Python this week." },
    { min: 0.2, icon: "compass", title: "Curious Engineer", text: "Good start. Search how companies in your branch use AI." },
    { min: 0, icon: "book-open", title: "Getting Started", text: "Everyone starts here. Save the 8 steps and try step 1." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon AI Lab · AI for Every Branch",
      title: "“AI is only for CSE students.” That’s one of the biggest myths on campus. Let’s see where AI fits in every branch.",
      cards: [["globe", "AI in ECE, Mech, Civil, Commerce and Pharmacy"], ["users", "Your branch knowledge is your edge"], ["route", "A plan to start from any branch"]]
    },
    { type: "rules" },

    // ---------- Round 1: The big idea ----------
    {
      type: "learn", door: 1,
      title: "AI needs people who understand the problem.",
      points: [["AI finds patterns in data", "From machines, buildings, money, medicine"], ["Experts know which patterns matter", "That’s your branch knowledge"], ["The best teams mix both", "Domain experts + AI skills"]],
      highlightLast: true,
      side: { label: "Every branch has data", items: [["zap", "Electronics", "Signals, sensors"], ["wrench", "Mechanical", "Vibration, heat, wear"], ["indian-rupee", "Commerce", "Sales, customers, risk"]] }
    },
    AB(1, "The Big Idea", {
      prompt: "Why would a company want a Mechanical engineer who knows AI, not just an AI expert?",
      options: ["Mechanical engineers are cheaper", "AI experts don’t exist", "No reason", "They understand the machines, so they know what the data means and what really matters"], answer: 3,
      hint: "Who understands the problem?",
      note: "AI is a tool. The person who understands the machine, building or market uses it best.", badge: "users"
    }),
    AB(1, "The Big Idea", {
      prompt: "What does almost every AI use have in common?",
      options: ["It needs no humans", "It only works in English", "It only works in IT companies", "It needs data from the real world, and people who understand that data"], answer: 3,
      hint: "What does AI learn from?",
      note: "Data comes from every field: factories, farms, hospitals, banks. So does AI.", badge: "chart-column"
    }),
    AB(1, "The Big Idea", {
      prompt: "A Civil student says, “AI will never matter in my field.” Best reply?",
      options: ["“Switch to CSE”", "“AI will replace all engineers”", "“AI is already used in planning, monitoring structures and traffic. Your civil knowledge plus AI is a strong mix.”", "“True, ignore AI”"], answer: 2,
      hint: "Neither ignore it, nor fear it.",
      note: "Every field is adding AI. Those who understand both sides stand out.", badge: "landmark",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: ECE and EEE ----------
    {
      type: "learn", door: 2,
      title: "ECE and EEE: AI meets signals, chips and power.",
      points: [["Smart devices", "Voice assistants, cameras that recognise faces, wearables"], ["AI on small chips", "Running AI directly on devices, not just in the cloud"], ["Power systems", "Predicting electricity demand and spotting faults"]],
      highlightLast: true,
      side: { label: "ECE / EEE + AI", items: [["smartphone", "Edge AI", "AI on devices"], ["zap", "Smart grids", "Demand and faults"], ["eye", "Vision sensors", "Cameras that understand"]] }
    },
    AB(2, "ECE and EEE", {
      prompt: "A phone unlocks by recognising your face, even offline. Which branch skills help build the chip and sensor side of this?",
      options: ["Pharmacy", "Commerce", "Civil", "ECE"], answer: 3,
      hint: "Chips, cameras, signals.",
      note: "Running AI on small chips and sensors (edge AI) is a big area for ECE students.", badge: "smartphone"
    }),
    AB(2, "ECE and EEE", {
      prompt: "An electricity company wants to predict tomorrow’s power demand in Vizag. What could AI use?",
      options: ["Old demand data, weather and the day of the week", "Instagram likes", "Only the CEO’s guess", "Random numbers"], answer: 0,
      hint: "What affects how much power people use?",
      note: "Hot days, festivals and weekdays change demand. AI learns these patterns from past data.", badge: "zap"
    }),
    AB(2, "ECE and EEE", {
      prompt: "Which topic from ECE helps most when working with AI on audio or sensor data?",
      options: ["None", "Only accounting", "Signals and systems", "Only drawing"], answer: 2,
      hint: "Audio and sensors produce…",
      note: "Signal processing ideas (noise, filters, frequency) are directly useful for AI on real sensor data.", badge: "chart-column",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Mechanical ----------
    {
      type: "learn", door: 3,
      title: "Mechanical: AI keeps machines running.",
      points: [["Predictive maintenance", "Spot a failing machine before it breaks, from vibration and heat"], ["Quality checks", "Cameras find defects on production lines"], ["Design help", "AI suggests lighter, stronger part shapes"]],
      highlightLast: true,
      side: { label: "Mech + AI", items: [["wrench", "Maintenance", "Fix before failure"], ["eye", "Inspection", "Find defects"], ["sparkles", "Design", "Better shapes"]] }
    },
    AB(3, "Mechanical", {
      prompt: "A factory’s machine starts vibrating slightly more each day. How can AI help?",
      options: ["It can’t", "By switching off the factory", "By painting the machine", "By learning normal vibration patterns and warning before the machine breaks"], answer: 3,
      hint: "Fix before failure.",
      note: "That’s predictive maintenance: fewer breakdowns, less downtime, lower cost.", badge: "wrench"
    }),
    AB(3, "Mechanical", {
      prompt: "A car parts factory wants to catch scratches and cracks on every part. Best AI use?",
      options: ["AI-written emails", "A music app", "Cameras with AI that spot defects on the production line", "A chatbot"], answer: 2,
      hint: "Look at every part.",
      note: "Computer vision checks parts faster and more consistently than tired eyes.", badge: "eye"
    }),
    AB(3, "Mechanical", {
      prompt: "AI suggests a lighter design for a bracket. What must a Mechanical engineer still do?",
      options: ["Ask AI if it’s sure", "Nothing, AI is always right", "Just print it", "Check strength, safety, cost and whether it can actually be manufactured"], answer: 3,
      hint: "Who is responsible if it breaks?",
      note: "AI suggests; engineers verify. Safety and manufacturability need human expertise.", badge: "shield",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "What’s your branch? Suggest one problem in it that AI could help with.", note: "20 seconds. The most creative idea wins.", points: 100 },

    // ---------- Round 4: Civil ----------
    {
      type: "learn", door: 4,
      title: "Civil: AI builds and watches smarter cities.",
      points: [["Structure monitoring", "Sensors and AI watch bridges and buildings for cracks and strain"], ["Traffic", "Smarter signals and planning from traffic data"], ["Planning", "Analysing land, floods and resources from satellite images"]],
      highlightLast: true,
      side: { label: "Civil + AI", items: [["landmark", "Structures", "Early warnings"], ["route", "Traffic", "Smarter signals"], ["globe", "Satellites", "Plan and protect"]] }
    },
    AB(4, "Civil", {
      prompt: "Sensors on a bridge send strain readings every minute. What can AI do with them?",
      options: ["Paint it", "Spot unusual patterns early, so engineers can inspect before damage grows", "Nothing", "Repair the bridge itself"], answer: 1,
      hint: "Early warning.",
      note: "AI flags unusual readings. Civil engineers decide what they mean and what to do.", badge: "landmark"
    }),
    AB(4, "Civil", {
      prompt: "A city wants fewer traffic jams at busy junctions. Possible AI use?",
      options: ["Signals that adjust timing based on live traffic", "More honking", "Banning all cars", "Closing roads randomly"], answer: 0,
      hint: "Use live data.",
      note: "Adaptive signals use camera and sensor data to change green-light timing.", badge: "route"
    }),
    AB(4, "Civil", {
      prompt: "Which data could help AI predict flood-prone areas in a coastal city like Vizag?",
      options: ["None", "Only movie ratings", "Rainfall history, land height, drainage maps and satellite images", "Phone wallpapers"], answer: 2,
      hint: "What causes flooding?",
      note: "Combining these with civil knowledge helps plan drains and safer construction.", badge: "globe",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Commerce, management, pharmacy ----------
    {
      type: "learn", door: 5,
      title: "Commerce, management, pharmacy and biotech use AI too.",
      points: [["Commerce and finance", "Fraud detection, forecasting sales, reading financial documents"], ["Management and marketing", "Understanding customers, planning stock, personalised offers"], ["Pharmacy and biotech", "Helping discover drugs and analyse medical data"]],
      highlightLast: true,
      side: { label: "Beyond engineering", items: [["indian-rupee", "Finance", "Fraud, forecasts"], ["store", "Marketing", "Customers, stock"], ["heart", "Health", "Drugs, records"]] }
    },
    AB(5, "Commerce and Health", {
      prompt: "A bank sees a card used in Vizag and, 5 minutes later, in another country. How does AI help?",
      options: ["It closes the bank", "It ignores it", "It flags the unusual pattern as possible fraud for checking", "It approves everything"], answer: 2,
      hint: "Unusual pattern.",
      note: "Fraud detection is one of the oldest and most common uses of AI in finance.", badge: "shield"
    }),
    AB(5, "Commerce and Health", {
      prompt: "A supermarket chain wants to stop running out of popular items during festivals. AI can…",
      options: ["Forecast demand from past sales, festivals and seasons", "Hide the items", "Guess randomly", "Raise prices only"], answer: 0,
      hint: "Use past patterns.",
      note: "Demand forecasting is a core skill in management and commerce, and AI makes it sharper.", badge: "chart-column"
    }),
    AB(5, "Commerce and Health", {
      prompt: "AI suggests possible new drug molecules. What still has to happen before any medicine reaches patients?",
      options: ["Lab experiments, safety testing and clinical trials checked by experts", "A social media vote", "Only packaging", "Nothing, AI is enough"], answer: 0,
      hint: "Health and safety.",
      note: "AI can speed up early research. Proof of safety still needs science, testing and regulators.", badge: "heart",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Start from your branch (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: start from your branch.",
      points: [["Keep your basics strong", "Your subject is your edge"], ["Add Python and data skills", "Step by step"], ["Do one small branch project", "With real data"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game!"], ["route", "Your first steps", ""], ["award", "Then your AI vision", ""]] }
    },
    AB(6, "Start Here", {
      double: true,
      prompt: "A 2nd-year Mechanical student wants to start with AI. Best first step?",
      options: ["Wait until final year", "Buy an expensive course without checking", "Quit Mechanical", "Learn basic Python and analyse a small dataset from a mechanical topic"], answer: 3,
      hint: "Small, real, from your branch.",
      note: "Python + one branch-related dataset is a great start, and a strong project for your resume.", badge: "code"
    }),
    AB(6, "Start Here", {
      double: true,
      prompt: "Which project would impress an interviewer most for an EEE student?",
      options: ["A copied chatbot tutorial", "A list of AI tools", "A logo design", "A project that predicts electricity usage in their hostel from real meter readings"], answer: 3,
      hint: "Branch + AI + real data.",
      note: "It shows branch knowledge, AI skills and real data. That combination stands out.", badge: "zap"
    }),
    AB(6, "Start Here", {
      double: true,
      prompt: "Will AI make your branch knowledge useless?",
      options: ["No. AI needs experts who understand the field, check results and take responsibility", "Only on weekends", "Yes, completely", "Only for Commerce"], answer: 0,
      hint: "Who checks AI’s work?",
      note: "AI changes how work is done. People who combine their field with AI become more valuable.", badge: "badge-check",
      board: true, boardLabel: "after Round 6"
    }),

    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "In 30 seconds: one AI project idea from your branch, and the data it would use.", note: "Branch + problem + data. The host picks the best idea.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "8 Steps to AI From Any Branch", note: "Screenshot this. Start step 1 this week.", items: START },
    {
      type: "end",
      joinTitle: "Join the EduMoon community",
      joinText: "AI games, coding challenges and real projects every week. For every branch.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
