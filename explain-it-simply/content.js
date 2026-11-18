// Explain It Simply (EduMoon English Club). Advanced: for all years who want to speak with clarity.
// Explain any hard idea in plain English: know your audience, remove jargon, use analogies, lead with the point, make numbers relatable, and check understanding. Lots of live speaking.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const EX = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 45, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const EXSPOT = { kind: "bug", time: 60, step1: "What is the problem?", step2: "Tap the line that loses the listener", say1: "First pick the problem.", say2: "Now tap the line.", partO: "the problem", partL: "the line", lineLabel: "line", bugLabel: "The confusing line is" };

// The take-home card: the explain-it-simply toolkit.
const TOOLKIT = [
  ["Know the listener", "What do they already know? Start there."],
  ["Point first", "Say the main idea in one line before any detail."],
  ["Swap the jargon", "Use the plain word, or explain the term the first time."],
  ["Use an analogy", "“A router is like a post office for your home internet.”"],
  ["One idea at a time", "Short sentences. Pause between ideas."],
  ["Make numbers human", "“1 in 4 students” beats “25.3%”."],
  ["Give one example", "From the listener’s own life."],
  ["Check understanding", "“Does that make sense?” is weak. Ask them to say it back."]
];

window.GAME = {
  id: "explain-it-simply",
  title: "Explain It Simply",
  club: "English Club",
  tagline: "If you can explain it simply, you really understand it.",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "45 minutes", level: "Advanced",
    about: "Vivek is brilliant at electronics but nobody understands his explanations: not his grandmother, not his interviewer, not his project judges. In 6 rounds, teams learn to know the listener, remove jargon, use analogies, lead with the main point, make numbers relatable and check understanding. Speaking turns run all through the game, ending with a 60-second “explain it to a 10-year-old” challenge.",
    outcomes: "A repeatable way to explain any complex idea clearly in English: for interviews, vivas, presentations, teaching juniors and talking to family.",
    tone: "This is a speaking-heavy game. Pick volunteers from different branches so the room hears many topics. After each speaker, the room gives one “clear” point and one “simpler” suggestion. Keep it kind.",
    extra: [["Topic jar", "Write topics on chits (Wi-Fi, inflation, vaccines, blockchain, rainfall, the stock market). Students pick one for speaking turns."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Clear",
    rulesEyebrow: "How Explain It Simply works", rulesTitle: "Learn the tool. Pick the clearest line. Then explain it yourself.",
    learnText: "The host shares one tool for clear explanations.", crackTitle: "Choose",
    crackText: "Pick the clearest explanation and lock it in.",
    rulesExtra: "Speaking turns: <b>+100</b> and <b>+200</b>. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Experts make this mistake all the time!", cracked: "made it clear",
    next: "Next round →", finale: "Next →", winner: "are today’s clearest explainers!", endLine: "Vivek’s grandmother understood his project."
  },
  offerEyebrow: "EduMoon English Club · Clarity level",
  offerTitle: "Your clarity level",
  offers: [
    { min: 0.7, icon: "trophy", title: "Crystal Clear", text: "You can explain anything to anyone. Teach a junior this week." },
    { min: 0.45, icon: "lightbulb", title: "Clear Speaker", text: "Strong! Prepare one analogy for your own project." },
    { min: 0.2, icon: "message-circle", title: "Getting Clearer", text: "Good start. Lead with the point in your next answer." },
    { min: 0, icon: "book-open", title: "Learning to Explain", text: "Everyone starts here. Explain one idea to a family member tonight." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon English Club · Clear speaking",
      title: "Vivek built a great electronics project, but his explanations lose everyone: his grandmother, his interviewer and the judges. Can your team teach him to explain it simply?",
      cards: [["lightbulb", "Audience, jargon, analogies and structure"], ["mic", "Live explanations all through the game"], ["trophy", "Your score decides your clarity level"]]
    },
    { type: "rules" },

    // ---------- Round 1: Know the listener ----------
    {
      type: "learn", door: 1,
      title: "Start from what the listener already knows.",
      points: [["Ask first", "“Have you heard of…?” or think about who they are"], ["Change the level", "An interviewer, a junior and your grandmother need different words"], ["Respect them", "Simple is not childish; it is kind"]],
      highlightLast: true,
      side: { label: "Same idea, three listeners", items: [["users", "Grandmother", "“It stops the fan when nobody is in the room.”"], ["graduation-cap", "Junior", "“A sensor detects movement and switches a relay.”"], ["briefcase", "Interviewer", "“PIR sensor input, microcontroller logic, relay output.”"]] }
    },
    EX(1, "Know the Listener", {
      prompt: "Vivek explains his project to his grandmother. Which line fits best?",
      options: ["“It uses a PIR sensor with a microcontroller-driven relay.”", "“It is an IoT-based embedded automation system.”", "“It switches the fan off when nobody is in the room.”", "“It is too technical, you won’t understand.”"], answer: 2,
      hint: "What does she care about?",
      note: "What it does in her world. The technical words can come if she asks.", badge: "heart"
    }),
    EX(1, "Know the Listener", {
      prompt: "In a technical interview, which version fits best?",
      options: ["“It is a magic box that saves electricity.”", "“A PIR sensor drives a relay via a microcontroller.”", "“My project is very good and useful for everyone.”", "“It works with electricity and some wires.”"], answer: 1,
      hint: "This listener knows the field.",
      note: "Interviewers want correct technical terms, still in clear, short sentences.", badge: "briefcase"
    }),
    EX(1, "Know the Listener", {
      prompt: "Vivek is not sure how much his listener knows. What should he do?",
      options: ["Use the hardest words to impress", "Speak faster to save time", "Ask a quick question first", "Skip the explanation"], answer: 2,
      hint: "Find the starting point.",
      note: "“Have you used a motion-sensor light?” tells him where to start.", badge: "message-circle",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Kill the jargon ----------
    {
      type: "learn", door: 2,
      title: "Jargon is a wall. Remove it or explain it.",
      points: [["Spot it", "Words only your field uses: latency, API, throughput"], ["Swap it", "latency → delay, utilise → use"], ["Or define it once", "“an API, which is a way two apps talk to each other”"]],
      highlightLast: true,
      side: { label: "Swap these", items: [["x", "“utilise”", "→ use"], ["x", "“facilitate”", "→ help"], ["x", "“leverage synergies”", "→ work together"]] }
    },
    EX(2, "Kill the Jargon", {
      prompt: "Which sentence is clearest for a general audience?",
      options: ["“The app had a delay of 2 seconds, so we made it faster.”", "“We optimised latency by mitigating throughput bottlenecks.”", "“Performance was leveraged via synergistic optimisations.”", "“We did various optimisations to the latency parameters.”"], answer: 0,
      hint: "Plain words.",
      note: "“Delay” instead of “latency”, and a clear action. Everyone understands it.", badge: "check"
    }),
    EX(2, "Kill the Jargon", {
      prompt: "Vivek must use the word “API” with non-tech judges. Best approach?",
      options: ["Use it repeatedly without explaining", "Spell it out letter by letter only", "Avoid the project entirely", "Explain it once: a way two apps talk"], answer: 3,
      hint: "Define it the first time.",
      note: "A one-line definition lets him keep the term and keep the judges.", badge: "lightbulb"
    }),
    EX(2, "Kill the Jargon", Object.assign({}, EXSPOT, {
      prompt: "Vivek explains his project to first-year students. Which line loses them?",
      code: ["Our device switches off fans when a room is empty.", "It uses a motion sensor, like the one in automatic lights.", "We leveraged an ESP32 SoC with an RTOS for deterministic scheduling.", "In a month, our hostel floor saved about 15% electricity."],
      outputOptions: ["Too much jargon for this audience", "It is too short", "It has a wrong number"], outputAnswer: 0, bugLine: 2,
      bugText: "four technical terms in one line. Better: “A small, cheap computer chip decides when to switch.”",
      hint: "Which line needs a dictionary?",
      note: "Keep the technical detail for those who ask. First years need the idea, not the part numbers.", badge: "x",
      board: true, boardLabel: "after Round 2"
    })),

    // ---------- Round 3: Analogies ----------
    {
      type: "learn", door: 3,
      title: "An analogy connects a new idea to something familiar.",
      points: [["New idea = familiar thing", "“RAM is like your desk; storage is like your cupboard.”"], ["Pick from their life", "Cricket, cooking, buses, phones"], ["Then go back to the real thing", "Do not stretch the analogy too far"]],
      highlightLast: true,
      side: { label: "Examples", items: [["lightbulb", "Firewall", "A security guard at the gate"], ["lightbulb", "Cache", "Keeping your most-used books on the desk"], ["lightbulb", "Internet router", "A post office for your home"]] }
    },
    EX(3, "Analogies", {
      prompt: "Which analogy best explains “RAM vs storage”?",
      options: ["RAM is like the sun and storage like the moon", "RAM is a desk; storage is a cupboard", "RAM is a fast car; storage is a slow car", "RAM and storage are like two friends"], answer: 1,
      hint: "Which one explains the actual difference?",
      note: "The desk holds what you are using now and is cleared later; the cupboard keeps things long-term.", badge: "lightbulb"
    }),
    EX(3, "Analogies", {
      prompt: "Explaining a computer virus to a 12-year-old. Best analogy?",
      options: ["Like a cold that spreads and makes it sick", "Like a very small insect inside the computer screen", "Like a ghost that lives in the internet forever", "Like a broken pencil that cannot write"], answer: 0,
      hint: "It spreads and causes harm.",
      note: "Spreads, copies itself, makes things sick. That is the core idea, in their world.", badge: "shield"
    }),
    EX(3, "Analogies", {
      prompt: "What is the risk of stretching an analogy too far?",
      options: ["The talk becomes too short", "Analogies are never useful", "People will laugh too much", "Wrong details seem true"], answer: 3,
      hint: "No analogy is perfect.",
      note: "Use the analogy to open the door, then explain the real thing. Every analogy breaks somewhere.", badge: "scale",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Pick a chit (or any topic) and explain it with one analogy in 20 seconds.", note: "“It is like…”, then back to the real thing.", points: 100 },

    // ---------- Round 4: Point first ----------
    {
      type: "learn", door: 4,
      title: "Say the main point first. Then why. Then an example.",
      points: [["Point", "One line: what it is or what you found"], ["Why", "Why it matters to the listener"], ["Example", "One real case"]],
      highlightLast: true,
      side: { label: "Point–Why–Example", items: [["target", "Point", "“Our device cuts hostel electricity use.”"], ["heart", "Why", "“Fans run in empty rooms all day.”"], ["chart-column", "Example", "“Our floor saved 15% in a month.”"]] }
    },
    EX(4, "Point First", {
      prompt: "The examiner asks, “What does your project do?” Best first line?",
      options: ["“It switches off fans in empty rooms.”", "“So first, in the second year, we had an idea…”", "“There are many types of sensors in the world…”", "“Let me start from the history of electricity…”"], answer: 0,
      hint: "Point first.",
      note: "Answer the question in the first line. Background can follow if needed.", badge: "target"
    }),
    EX(4, "Point First", {
      prompt: "Why lead with the point?",
      options: ["Details make sense", "It makes the talk longer", "It sounds more complicated", "Examiners prefer long stories"], answer: 0,
      hint: "Think of a map before a journey.",
      note: "When people know the destination, they can follow the route.", badge: "route"
    }),
    EX(4, "Point First", Object.assign({}, EXSPOT, {
      prompt: "Vivek’s viva answer. Which line should come FIRST instead?",
      code: ["In 2nd year, we were sitting in the hostel one evening.", "Someone said fans run all day for no reason.", "We built a device that switches fans off in empty rooms.", "We tested it for a month on one floor."],
      outputOptions: ["The main point is hidden in the middle", "It has too many numbers", "It is too formal"], outputAnswer: 0, bugLine: 2,
      bugText: "this is the main point. Say it first, then the story",
      hint: "Which line actually answers the question?",
      note: "Same lines, better order. Point first, then the story and test.", badge: "list-checks",
      board: true, boardLabel: "after Round 4"
    })),

    // ---------- Round 5: Numbers and examples ----------
    {
      type: "learn", door: 5,
      title: "Make numbers human, and use examples from the listener’s life.",
      points: [["Round and simplify", "“About 1 in 4” beats “25.37%”"], ["Compare to something known", "“Enough power to run 30 fans for a day”"], ["One example", "From their world: their hostel, their bills, their phone"]],
      highlightLast: true,
      side: { label: "Human numbers", items: [["x", "“0.12 kWh per hour”", "Meaningless to most"], ["check", "“Like leaving one fan on all night”", "Clear"], ["check", "“₹300 saved per room each month”", "Matters to them"]] }
    },
    EX(5, "Numbers and Examples", {
      prompt: "Which number will hostel students remember?",
      options: ["“Savings of 14.72% in kWh terms.”", "“A reduction of 0.12 kWh per hour.”", "“About ₹300 saved per room monthly.”", "“Coefficient of savings: 0.147.”"], answer: 2,
      hint: "Money in their world.",
      note: "Rupees per room per month connects to their lives. Exact figures can go in the report.", badge: "indian-rupee"
    }),
    EX(5, "Numbers and Examples", {
      prompt: "How would you simplify “24.8% of students”?",
      options: ["“Almost exactly 24.8% of students”", "“About 1 in 4 students”", "“A small fraction of the students”", "“Many, many students”"], answer: 1,
      hint: "Round to something people can picture.",
      note: "1 in 4 is easy to picture: in a group of four friends, one.", badge: "users"
    }),
    EX(5, "Numbers and Examples", {
      prompt: "Explaining inflation to a classmate. Best example?",
      options: ["“A rise in the Wholesale Price Index”", "“Monetary policy affecting CPI”", "“Economic factors in general”", "“A ₹20 samosa costing ₹25”"], answer: 3,
      hint: "From their daily life.",
      note: "Everyone knows samosa prices. The concept lands instantly.", badge: "store",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Check understanding (double) ----------
    {
      type: "learn", door: 6,
      title: "Check that they understood, then handle questions calmly.",
      points: [["Ask them to say it back", "“How would you explain it to your friend?”"], ["Watch faces", "Confused looks mean slow down or try another analogy"], ["Welcome questions", "A question is a sign of interest, not an attack"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["users", "Checking and Q&A", "Real situations"], ["mic", "Then the final challenge", "Explain to a 10-year-old"]] }
    },
    EX(6, "Check Understanding", {
      double: true,
      prompt: "What is the best way for Vivek to check that his junior understood?",
      options: ["Ask “Understood?” and move on", "Repeat the same words louder", "Give a written test", "Ask him to explain it back"], answer: 3,
      hint: "Most people just say “yes” to “Understood?”",
      note: "Hearing it back shows exactly what landed and what did not.", badge: "message-circle"
    }),
    EX(6, "Check Understanding", {
      double: true,
      prompt: "His grandmother still looks confused. What should he try?",
      options: ["The same explanation, faster", "More technical words", "A new analogy from her life", "Give up and change the topic"], answer: 2,
      hint: "Change the route, not the speed.",
      note: "Try a different path: “It is like the light in the temple corridor that turns on when you walk in.”", badge: "heart"
    }),
    EX(6, "Check Understanding", {
      double: true,
      prompt: "A judge asks a hard question Vivek cannot fully answer. Best response?",
      options: ["Make up a confident answer", "Say what he knows, and will check", "Say the question is wrong", "Stay silent"], answer: 1,
      hint: "Honest and clear.",
      note: "“Here is what I know, and here is how I would find out the rest” earns respect.", badge: "shield",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · clearest one wins +200", prompt: "Explain a topic from your own branch to a 10-year-old in 60 seconds: point first, one analogy, one example.", note: "The room votes on who they understood best. The host decides.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "The Explain-It-Simply Toolkit", note: "Screenshot this. Use it before every viva, interview and presentation.", items: TOOLKIT },
    {
      type: "end",
      joinTitle: "Join the EduMoon English Club",
      joinText: "Speaking games, debates and English practice every week. No fear of mistakes.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
