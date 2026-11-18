// AI in Vizag (EduMoon AI Lab). For all years and every branch.
// How AI could help the industries and daily life of Visakhapatnam: the port, factories, the sea and fishing, tourism, the city, and what students can build.
// Examples describe what AI can do in general; they are not claims about any specific company or office in Vizag.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const ZQ = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 40, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const ZN = (round, name, extra) => ZQ(round, name, Object.assign({ kind: "number", time: 50 }, extra));

// The take-home card: AI ideas for Vizag.
const IDEAS = [
  ["Port", "Predict ship arrival times, plan berths and cranes, track containers."],
  ["Factories", "Cameras spot defects; sensors warn before a machine breaks."],
  ["Sea and fishing", "Better weather and wave forecasts, safer trips, less waste."],
  ["Tourism", "Chatbots in Telugu, Hindi and English; crowd forecasts for beaches."],
  ["City", "Smarter signals, pothole reports from photos, leak detection."],
  ["Health and farming", "Reading scans faster, spotting crop disease from a phone photo."],
  ["Start small", "A real local problem, a little data, one simple model or a no-code tool."],
  ["Keep people in charge", "AI suggests; people decide, especially where safety is involved."]
];

window.GAME = {
  id: "ai-in-vizag",
  title: "AI in Vizag",
  club: "AI Lab",
  tagline: "Port, steel, sea, beaches and traffic. What could AI do for our city?",
  art: window.STORY_ART,
  guide: {
    years: "All years · every branch", time: "35 minutes", level: "Beginner",
    about: "A made-up city challenge, “AI for Vizag”, asks students for ideas. In 6 rounds, teams explore how AI can help the kinds of work Vizag is known for: a busy port, heavy industry, the sea and fishing, tourism and daily city life. The last round is about what students from any branch can build. All examples describe what AI can do in general, not what any real company is doing.",
    outcomes: "Seeing AI as a tool for real local problems, the idea of prediction, computer vision and sensors in plain words, and a first project idea students can start with.",
    tone: "Make it local and proud. Ask students where their families work: the port, factories, fishing, shops, tourism. Connect each round to someone in the room. Keep claims general: “AI can help” rather than “this company already uses it”.",
    extra: [["Project spark", "End by asking each team to write one problem from their own street or college that AI could help with. The best ones can become EduMoon project club ideas."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Solved",
    rulesEyebrow: "How AI in Vizag works", rulesTitle: "Learn where AI fits. Pick the best idea. Build for our city.",
    learnText: "The host introduces one part of Vizag and how AI could help.", crackTitle: "Decide",
    crackText: "Pick the best AI idea on your phone and lock it in.",
    rulesExtra: "Speak (optional): <b>+100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Even experts debate this!", cracked: "got it",
    next: "Next round →", finale: "Next →", winner: "are Vizag’s top AI thinkers!", endLine: "Vizag needs your ideas."
  },
  offerEyebrow: "EduMoon AI Lab · City builder",
  offerTitle: "Your city builder level",
  offers: [
    { min: 0.7, icon: "rocket", title: "AI City Builder", text: "You see AI in every street. Pick one idea and start a project." },
    { min: 0.45, icon: "map", title: "Problem Spotter", text: "Strong! Write 3 local problems that AI could help with." },
    { min: 0.2, icon: "lightbulb", title: "Idea Seeker", text: "Good start. Read the ideas card below once more." },
    { min: 0, icon: "book-open", title: "AI Explorer", text: "Everyone starts here. Play What Is AI? next." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon AI Lab · AI for Vizag",
      title: "A city challenge asks students: “How could AI make Vizag better?” Port, steel, sea, beaches and traffic. Can your team find the smartest ideas?",
      cards: [["map", "6 parts of Vizag life"], ["brain", "Prediction, cameras and sensors in plain words"], ["trophy", "Your score decides your city builder level"]]
    },
    { type: "rules" },

    // ---------- Round 1: The port ----------
    {
      type: "learn", door: 1,
      title: "A port is a giant puzzle of ships, cranes and containers.",
      points: [["Prediction", "When will each ship really arrive, given weather and traffic?"], ["Planning", "Which berth and which crane, and in what order?"], ["Tracking", "Where is every container right now?"]],
      highlightLast: true,
      side: { label: "AI tools here", items: [["chart-column", "Prediction models", "From past arrivals and weather"], ["route", "Scheduling", "Fewer waiting ships"], ["eye", "Cameras", "Reading container numbers"]] }
    },
    ZQ(1, "The Port", {
      prompt: "Ships often wait outside a port for a free berth. How could AI help most?",
      options: ["Predict arrivals, plan berths early", "Make every ship sail much faster", "Replace all the sailors with robots", "Paint the ships in brighter colours"], answer: 0,
      hint: "The problem is waiting.",
      note: "Better predictions and plans mean less waiting, less fuel and lower costs.", badge: "waves"
    }),
    ZQ(1, "The Port", {
      prompt: "Cameras at a port gate read the number painted on every container. Which AI skill is this?",
      options: ["Computer vision", "Voice recognition", "Text translation", "Music generation"], answer: 0,
      hint: "The AI is looking at pictures.",
      note: "Computer vision: AI that understands images and video. It reads numbers faster than people writing them down.", badge: "eye"
    }),
    ZQ(1, "The Port", {
      prompt: "To predict ship arrival times, what does the AI need most?",
      options: ["Photos of the city’s beaches and hills", "Students’ exam marks from last year", "The port’s logo and its colours", "Past arrival times, weather and routes"], answer: 3,
      hint: "Data, pattern, prediction.",
      note: "Past arrivals plus weather and routes. Good, related data is what makes predictions useful.", badge: "chart-column",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Factories ----------
    {
      type: "learn", door: 2,
      title: "In big factories, AI helps with quality, safety and breakdowns.",
      points: [["Spot defects", "Cameras check every product, not just a few"], ["Predict breakdowns", "Sensors notice unusual heat or shaking early"], ["Safety", "Cameras can warn if someone enters a danger zone"]],
      highlightLast: true,
      side: { label: "Why it matters", items: [["wrench", "Fewer surprise breakdowns", "Planned repairs cost less"], ["badge-check", "Better quality", "Fewer bad products"], ["shield", "Safer workers", "Early warnings"]] }
    },
    ZQ(2, "Factories", {
      prompt: "A machine starts shaking slightly more each day before it breaks. Which AI idea fits?",
      options: ["Predictive maintenance using sensor data", "A chatbot for the factory canteen menu", "AI-generated posters for the notice board", "A music app for workers on breaks"], answer: 0,
      hint: "Predict the problem before it happens.",
      note: "Predictive maintenance: sensors plus AI spot the warning signs, so repairs happen before a breakdown.", badge: "wrench"
    }),
    ZQ(2, "Factories", {
      prompt: "Checking every steel sheet for cracks by eye is slow. What could AI do?",
      options: ["Write emails to the steel customers", "Translate every sheet label into Hindi", "Cameras check every sheet for cracks", "Make the steel itself stronger"], answer: 2,
      hint: "Which AI skill looks at pictures?",
      note: "Computer vision can inspect every item at speed. People then check the ones the AI flags.", badge: "search"
    }),
    ZQ(2, "Factories", {
      prompt: "An AI says a machine is safe, but an experienced worker hears a strange noise. What should happen?",
      options: ["Trust the AI and ignore the worker’s worry", "Check the machine; people stay in charge", "Switch off the AI system forever", "Wait until the machine breaks down"], answer: 1,
      hint: "Where safety is involved, who decides?",
      note: "AI supports people; it does not replace their judgement. Experience catches things data may miss.", badge: "shield",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Sea and fishing ----------
    {
      type: "learn", door: 3,
      title: "Vizag lives by the sea. AI can make the sea safer and smarter.",
      points: [["Weather and waves", "Better forecasts help fishermen decide when to go"], ["Cyclone warnings", "Weather models help predict a cyclone’s path"], ["Less waste", "Predicting the day’s catch helps plan ice, storage and prices"]],
      highlightLast: true,
      side: { label: "Data from", items: [["cloud", "Satellites", "Clouds, sea temperature"], ["waves", "Buoys", "Waves and wind"], ["smartphone", "Phones", "Simple apps in Telugu"]] }
    },
    ZQ(3, "Sea and Fishing", {
      prompt: "What is the MOST useful AI app for a fisherman in Bheemunipatnam?",
      options: ["A sea safety forecast in Telugu", "An English poetry generator for his phone", "A stock market game with daily prizes", "A funny selfie filter with fish ears"], answer: 0,
      hint: "What matters most before going to sea?",
      note: "Safety first, in his own language. The best AI tools solve the user’s real problem.", badge: "waves"
    }),
    ZQ(3, "Sea and Fishing", {
      prompt: "Weather models help predict where a cyclone will go. What do they learn from?",
      options: ["Social media posts about rain in the city", "Old newspaper headlines about storms", "Past cyclones and ocean data", "Random guesses made by the computer"], answer: 2,
      hint: "Data, pattern, prediction.",
      note: "They learn from decades of weather and ocean data. Better forecasts give people more time to prepare.", badge: "cloud"
    }),
    ZQ(3, "Sea and Fishing", {
      prompt: "A fish market wastes ice and fish every day. How could AI help?",
      options: ["Make the fish swim into nets faster", "Close the market early every day", "Predict each day’s catch and demand", "Post fish photos online every hour"], answer: 2,
      hint: "Plan better with predictions.",
      note: "If you know roughly how much will come in and sell, you can plan ice, storage and prices. Less waste, more income.", badge: "chart-column",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Name one job in your family or street, and one way AI could help it.", note: "Real and specific. 20 seconds.", points: 100 },

    // ---------- Round 4: Tourism ----------
    {
      type: "learn", door: 4,
      title: "RK Beach, Kailasagiri, Araku. AI can help visitors and local businesses.",
      points: [["Chatbots in many languages", "Answer tourist questions any time"], ["Crowd forecasts", "Which days will the beach or viewpoints be packed?"], ["Small business tools", "Captions, menus and replies for local shops"]],
      highlightLast: true,
      side: { label: "Who benefits", items: [["users", "Tourists", "Quick answers, fewer queues"], ["store", "Shops and homestays", "More bookings"], ["map", "The city", "Better crowd planning"]] }
    },
    ZQ(4, "Tourism", {
      prompt: "A tourist from Kolkata wants to ask about Araku trains in Bengali. What could help?",
      options: ["A cricket score app with live updates", "A spreadsheet of college marks", "A multilingual travel chatbot", "A pothole camera on the highway"], answer: 2,
      hint: "Language plus quick answers.",
      note: "AI chatbots can answer in many languages. People must still keep the information up to date.", badge: "languages"
    }),
    ZQ(4, "Tourism", {
      prompt: "The city wants to plan buses and police for busy beach days. Which data helps the AI most?",
      options: ["Students’ favourite colours and movies", "Past visitor numbers, holidays and weather", "Old lists of movies shot on the beach", "Random numbers from a calculator"], answer: 1,
      hint: "What decides how busy a beach gets?",
      note: "Holidays, weekends and weather drive crowds. Past patterns help predict the next busy day.", badge: "users"
    }),
    ZQ(4, "Tourism", {
      prompt: "A small homestay owner in Araku has no time for social media. How can AI help simply?",
      options: ["Build a rocket-powered booking robot", "Replace her and run the homestay alone", "Delete her old bookings automatically", "Draft captions and replies she edits"], answer: 3,
      hint: "AI as a helper, not a boss.",
      note: "AI can draft; she checks and posts. Small tools like this save small businesses real time.", badge: "store",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: City life ----------
    {
      type: "learn", door: 5,
      title: "Traffic, roads, water and waste: AI can help a city run better.",
      points: [["Smarter signals", "Green lights that adjust to real traffic"], ["Photo reports", "Citizens snap a pothole; AI sorts and maps it"], ["Find leaks", "Patterns in water flow can show hidden leaks"]],
      highlightLast: true,
      side: { label: "Data from", items: [["eye", "Cameras", "Traffic and roads"], ["smartphone", "Citizen apps", "Photos and complaints"], ["chart-column", "Meters", "Water and power"]] }
    },
    ZQ(5, "City Life", {
      prompt: "The NAD junction signal is green for 60 seconds even when that road is empty. What could AI do?",
      options: ["Remove all the signals at the junction", "Adjust signal timing to real traffic", "Make every signal red for safety", "Play calming music at the junction"], answer: 1,
      hint: "Use live data.",
      note: "Adaptive signals use cameras or sensors to give more green time to busier roads.", badge: "route"
    }),
    ZQ(5, "City Life", {
      prompt: "Citizens send 5,000 photos of road problems a month. How could AI help the city team?",
      options: ["Delete the photos to save space", "Reply “Thank you” to each one only", "Print every photo and file it", "Sort photos by type and place"], answer: 3,
      hint: "Too many to sort by hand.",
      note: "AI can group photos into potholes, garbage or water logging, and map them. People then fix the biggest problems first.", badge: "map"
    }),
    ZN(5, "City Life", {
      prompt: "An AI flags 40 possible water leaks. Engineers find that 30 are real. How many were false alarms?",
      answer: 10,
      hint: "40 − 30.",
      note: "10 false alarms. That is why engineers still check. A good AI saves time, but people confirm.", badge: "search",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Your turn (double) ----------
    {
      type: "learn", door: 6,
      title: "You do not need to be from CSE to build AI for Vizag.",
      points: [["Start from a real problem", "One you or your family see every week"], ["Use simple tools", "No-code tools, spreadsheets, a phone camera"], ["Your branch is your edge", "Mechanical knows machines; civil knows roads; commerce knows shops"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["lightbulb", "Your project", "Pick the best start"], ["mic", "Then the final challenge", "Pitch your AI idea"]] }
    },
    ZQ(6, "Your Turn", {
      double: true,
      prompt: "Which is the best FIRST student project?",
      options: ["Build an AI to run the whole Vizag port alone", "Replace all the city traffic police with AI", "Predict the stock market perfectly every day", "An app that spots crop disease from leaf photos"], answer: 3,
      hint: "Small, real and doable.",
      note: "Small and real beats huge and impossible. Free tools can train a simple image model on a few hundred photos.", badge: "lightbulb"
    }),
    ZQ(6, "Your Turn", {
      double: true,
      prompt: "A mechanical student says, “AI is only for CSE.” What is the best reply?",
      options: ["“Your machine knowledge plus AI is powerful.”", "“Yes, you should switch to CSE right now.”", "“AI will soon replace all mechanical jobs.”", "“Only toppers can really learn AI properly.”"], answer: 0,
      hint: "Branch knowledge is the edge.",
      note: "Knowing how machines work makes AI ideas real. Play AI for Every Branch for more.", badge: "wrench"
    }),
    ZQ(6, "Your Turn", {
      double: true,
      prompt: "Your AI helps decide which fishing boats should stay in during bad weather. What must you always include?",
      options: ["More bright colours in the app’s design", "A way for people to override it", "Ads on every screen to earn money", "A secret mode that nobody can see"], answer: 1,
      hint: "Safety decisions.",
      note: "When lives are involved, people must be able to check and overrule the AI.", badge: "shield",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best idea wins +200", prompt: "Pitch an AI idea for Vizag in 30 seconds: the problem, the data, and who it helps.", note: "Real, local and doable wins. The room claps; the host picks.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "AI Ideas for Vizag", note: "Screenshot this. Pick one idea and talk to someone who works in that area.", items: IDEAS },
    {
      type: "end",
      joinTitle: "Join the EduMoon AI Lab",
      joinText: "AI games, tools and projects every week. Learn to use AI the right way, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
