// Design Thinking Sprint (EduMoon Entrepreneurship Club). Medium: for all years.
// The five stages of design thinking (empathise, define, ideate, prototype, test) through one campus problem: the canteen queue. All names and numbers are made up.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const DT = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 40, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const DTN = (round, name, extra) => DT(round, name, Object.assign({ kind: "number", time: 55 }, extra));

// The take-home card: the sprint on one page.
const SPRINTCARD = [
  ["Empathise", "Talk to real users. Watch what they do, not just what they say."],
  ["Define", "Write one problem statement: [user] needs [need] because [insight]."],
  ["Ideate", "Many ideas first, judge later. Aim for quantity."],
  ["Prototype", "Make it cheap and fast: paper, a form, a sketch, a WhatsApp group."],
  ["Test", "Put it in front of 5 real users. Watch, don’t explain."],
  ["Loop", "Learn, change, test again. The stages are a cycle, not a straight line."],
  ["Good question", "“Tell me about the last time you…” beats “Would you use…?”"],
  ["Remember", "Fall in love with the problem, not your first idea."]
];

window.GAME = {
  id: "design-thinking-sprint",
  title: "Design Thinking Sprint",
  club: "Entrepreneurship Club",
  tagline: "Fix the 20-minute canteen queue in five stages. Users first, ideas second.",
  art: window.STORY_ART,
  guide: {
    years: "All years · every branch", time: "35 minutes", level: "Medium",
    about: "At a made-up college, students wait 20 minutes in the canteen queue and miss the start of afternoon class. Meera’s team wants to build an app at once. In 6 rounds, teams learn the five stages of design thinking: empathise, define, ideate, prototype and test, and then how to loop. Every question uses the same canteen problem.",
    outcomes: "What each stage of design thinking means, how to ask good user questions, how to write a problem statement, why cheap prototypes come first, and how to test with real users.",
    tone: "Hands-on. Between rounds, let teams suggest real fixes for a real campus problem. The big lesson: the first idea (usually “build an app”) is rarely the best one.",
    extra: [["Real sprint", "After the game, give teams 10 minutes to pick a real campus problem and write one problem statement."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Sprinted",
    rulesEyebrow: "How Design Thinking Sprint works", rulesTitle: "Learn the stage. Make the call. Fix the queue.",
    learnText: "The host explains one stage of design thinking.", crackTitle: "Decide",
    crackText: "Pick your answer on your phone and lock it in.",
    rulesExtra: "Some questions need a typed number. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Even experienced designers skip this step!", cracked: "nailed it",
    next: "Next round →", finale: "Next →", winner: "put users first!", endLine: "The canteen queue is down to 5 minutes."
  },
  offerEyebrow: "EduMoon Entrepreneurship Club · Design level",
  offerTitle: "Your design thinking level",
  offers: [
    { min: 0.7, icon: "trophy", title: "Lead Designer", text: "You think user-first. Run a mini sprint on one campus problem this week." },
    { min: 0.45, icon: "lightbulb", title: "Sharp Problem-Solver", text: "Strong! Practise writing one problem statement a day." },
    { min: 0.2, icon: "users", title: "Curious Builder", text: "Good start. Talk to three users before your next idea." },
    { min: 0, icon: "book-open", title: "Sprint Beginner", text: "Everyone starts here. Keep the card below and try one stage." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Entrepreneurship Club · 20 minutes in line",
      title: "Students wait 20 minutes in the canteen queue and miss class. Meera wants to build an app right now. Is that the best first move?",
      cards: [["users", "Empathise and define"], ["lightbulb", "Ideate, prototype, test"], ["trophy", "Your score decides your design level"]]
    },
    { type: "rules" },

    // ---------- Round 1: Empathise ----------
    {
      type: "learn", door: 1,
      title: "Stage 1: Empathise. Understand the user first.",
      points: [["Talk", "Speak to real students, staff and canteen workers"], ["Watch", "Stand near the queue at 1 PM and observe"], ["Ask about the past", "“Tell me about the last time…” not “Would you use…?”"]],
      highlightLast: true,
      side: { label: "Good vs weak questions", items: [["check", "“Walk me through yesterday’s lunch.”", "Real story"], ["x", "“Would you use an app?”", "Everyone says yes"], ["check", "“What did you do while waiting?”", "Hidden details"]] }
    },
    DT(1, "Empathise", {
      prompt: "Meera’s team wants to fix the queue. What should they do FIRST?",
      options: ["Start coding an ordering app today", "Ask the principal to hire more staff", "Design a logo for the new solution", "Watch the queue and talk to students"], answer: 3,
      hint: "Understand before you build.",
      note: "Empathise first. You may find the real cause is different from what you guessed.", badge: "users"
    }),
    DT(1, "Empathise", {
      prompt: "Which interview question gives the MOST useful answer?",
      options: ["“Tell me about your last wait.”", "“Would you use an app to order food?”", "“Don’t you think the queue is too long?”", "“Is our idea good, yes or no?”"], answer: 0,
      hint: "Real past stories beat guesses about the future.",
      note: "Past behaviour is honest. “Would you use…?” gets polite yes answers.", badge: "message-circle"
    }),
    DT(1, "Empathise", {
      prompt: "While watching, the team sees the cashier also makes the tea. What is this?",
      options: ["A final solution to the problem", "An insight from observing", "A prototype of a new canteen", "A test result from real users"], answer: 1,
      hint: "They learned something by watching.",
      note: "Observation reveals what interviews miss. One person doing two jobs may be the real bottleneck.", badge: "eye",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Define ----------
    {
      type: "learn", door: 2,
      title: "Stage 2: Define the real problem.",
      points: [["Problem statement", "[User] needs [need] because [insight]"], ["About users, not your idea", "No “needs an app” in it"], ["Narrow", "One clear problem beats five vague ones"]],
      highlightLast: true,
      side: { label: "Example", items: [["check", "“Students with 2 PM class need lunch in under 10 minutes because one cashier also makes tea.”", ""], ["x", "“Students need an app.”", "That is a solution"]] }
    },
    DT(2, "Define", {
      prompt: "Which is the BEST problem statement?",
      options: ["Students need a new mobile app for ordering in the college canteen", "The canteen is bad and everyone hates the long queue", "Students need quick lunch; one worker bills and makes tea", "We should build a website for ordering food online"], answer: 2,
      hint: "User, need, insight. No solution inside.",
      note: "It names the user, the need and the cause, without jumping to a solution.", badge: "target"
    }),
    DT(2, "Define", {
      prompt: "“Students need an ordering app.” What is wrong with this as a problem statement?",
      options: ["It is too short to be useful", "It does not mention the principal", "Nothing is wrong with it", "It is a solution, not a problem"], answer: 3,
      hint: "Does it describe a need or an answer?",
      note: "Putting the solution in the problem statement closes the door to better ideas.", badge: "x"
    }),
    DTN(2, "Define", {
      prompt: "The team talked to 40 students. 30 said the wait makes them late for class. What percentage is that?",
      answer: 75,
      hint: "30 ÷ 40 × 100.",
      note: "75%. Strong evidence that being late for class is the core pain.", badge: "chart-column",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Ideate ----------
    {
      type: "learn", door: 3,
      title: "Stage 3: Ideate. Many ideas, judge later.",
      points: [["Quantity first", "Aim for 20 ideas in 10 minutes"], ["No “but” yet", "Build on ideas with “yes, and…”"], ["Then pick", "Vote on the most useful and easiest to try"]],
      highlightLast: true,
      side: { label: "Canteen ideas", items: [["lightbulb", "Separate tea counter", "Cheap"], ["lightbulb", "Pre-order on a Google Form", "Fast to try"], ["lightbulb", "Ready-packed combo meals", "No billing wait"]] }
    },
    DT(3, "Ideate", {
      prompt: "In a brainstorm, someone says “That idea will never work.” What rule did they break?",
      options: ["Judging ideas too early", "Speaking too slowly in the room", "Writing ideas down on paper", "Building on other people’s ideas"], answer: 0,
      hint: "Ideate first, judge later.",
      note: "Early criticism kills ideas. Use “yes, and…” in this stage.", badge: "lightbulb"
    }),
    DT(3, "Ideate", {
      prompt: "Which idea is the cheapest and fastest to try first?",
      options: ["A custom app with online payments", "A second worker at a tea counter", "A new canteen building on campus", "Robots that serve food at tables"], answer: 1,
      hint: "Low cost, quick to set up.",
      note: "It directly fixes the insight (one person doing two jobs) and can be tried tomorrow.", badge: "zap"
    }),
    DTN(3, "Ideate", {
      prompt: "5 team members each write 4 ideas in a brainstorm. How many ideas in total?",
      answer: 20,
      hint: "5 × 4.",
      note: "20 ideas. More options means a better chance of finding a great one.", badge: "lightbulb",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Give one wild idea to fix the canteen queue. Then one person says “yes, and…” to build on it.", note: "No judging. 20 seconds.", points: 100 },

    // ---------- Round 4: Prototype ----------
    {
      type: "learn", door: 4,
      title: "Stage 4: Prototype. Cheap and fast.",
      points: [["Low cost", "Paper, a Google Form, a chalkboard sign, a WhatsApp group"], ["Just enough", "Only what is needed to test the idea"], ["Fast", "Hours, not months"]],
      highlightLast: true,
      side: { label: "Prototype ideas", items: [["file-text", "Google Form pre-orders", "Built in 20 minutes"], ["pen-tool", "Paper menu for combos", "Built in 10 minutes"], ["users", "Friend as tea server", "One day trial"]] }
    },
    DT(4, "Prototype", {
      prompt: "The team wants to test pre-ordering. Which prototype is best to start with?",
      options: ["A full app on the Play Store and App Store", "A website with online payment and login", "A Google Form shared in one class group", "A printed brochure sent to all colleges"], answer: 2,
      hint: "Cheapest way to see if people use it.",
      note: "A free form tests the idea in a day. Build the app only after people actually use it.", badge: "file-text"
    }),
    DT(4, "Prototype", {
      prompt: "Why should a first prototype be rough and cheap?",
      options: ["Because users prefer things that look bad", "So nobody can copy the final design", "Because good prototypes are not allowed", "So it is easy to change after feedback"], answer: 3,
      hint: "You will probably change it.",
      note: "You learn fast and lose little when the first version is wrong, which it usually is.", badge: "route"
    }),
    DT(4, "Prototype", {
      prompt: "Which is NOT a prototype?",
      options: ["A paper sketch of the order screen", "A report on why the idea is good", "A trial tea counter for one day", "A WhatsApp group for pre-orders"], answer: 1,
      hint: "A prototype is something users can try.",
      note: "A report explains; a prototype lets people use it. Users react to things, not plans.", badge: "x",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Test ----------
    {
      type: "learn", door: 5,
      title: "Stage 5: Test with real users.",
      points: [["Real users", "Not your friends who want to be nice"], ["Watch, don’t explain", "If you have to explain it, it is not clear yet"], ["Measure", "Time the queue before and after"]],
      highlightLast: true,
      side: { label: "Test results", items: [["timer", "Before", "20-minute wait"], ["timer", "With tea counter", "12-minute wait"], ["timer", "Plus combo meals", "5-minute wait"]] }
    },
    DT(5, "Test", {
      prompt: "During a test, a student can’t find the pre-order link. What should the team do?",
      options: ["Watch, note it, fix it later", "Grab the phone and show them how", "Tell them they are using it wrong", "Stop the test and blame the student"], answer: 0,
      hint: "Confusion is useful data.",
      note: "Let them struggle a little. Every point of confusion is a design problem to fix.", badge: "eye"
    }),
    DTN(5, "Test", {
      prompt: "The wait was 20 minutes before. With the tea counter it is 12. How many minutes did they save?",
      answer: 8,
      hint: "20 − 12.",
      note: "8 minutes saved per student. Measure before and after so you know it really worked.", badge: "timer"
    }),
    DT(5, "Test", {
      prompt: "A test shows students don’t use the pre-order form. What does that mean?",
      options: ["Learn why, then change the idea and test again", "The whole project was a complete failure", "Students are lazy and won’t try new things", "Force everyone to use it from tomorrow"], answer: 0,
      hint: "A failed test is still a result.",
      note: "Testing exists to learn early. Go back to empathise or ideate, and loop.", badge: "route",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Put it together (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: the full sprint, and the loop.",
      points: [["Order", "Empathise → Define → Ideate → Prototype → Test"], ["It loops", "Test results often send you back a stage"], ["Users decide", "Not the loudest person in the team"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["route", "Full sprint", "Any stage"], ["mic", "Then the final challenge", "Pitch your fix"]] }
    },
    DT(6, "Full Sprint", {
      double: true,
      prompt: "What is the correct order of the five stages?",
      options: ["Ideate, Empathise, Test, Define, Prototype", "Prototype, Test, Empathise, Ideate, Define", "Empathise, Define, Ideate, Prototype, Test", "Define, Prototype, Ideate, Test, Empathise"], answer: 2,
      hint: "Users first, testing last.",
      note: "Understand, frame, generate, build, test. Then loop as needed.", badge: "route"
    }),
    DT(6, "Full Sprint", {
      double: true,
      prompt: "“We interviewed 8 students and found 6 skip lunch because of the queue.” Which stage is this?",
      options: ["Prototype", "Empathise", "Ideate", "Test"], answer: 1,
      hint: "Learning about users.",
      note: "Interviews and observation are the empathise stage.", badge: "users"
    }),
    DT(6, "Full Sprint", {
      double: true,
      prompt: "Meera still wants to build an app first. What is the best advice?",
      options: ["Build the app at once; it is always the best fix", "Never build apps; they are always a mistake", "Try a cheap fix first, build the app only if needed", "Skip testing; the app will clearly work"], answer: 2,
      hint: "Start cheap, learn, then decide.",
      note: "The tea counter and combos cut the wait to 5 minutes, with no app needed. Fall in love with the problem, not the first idea.", badge: "lightbulb",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best pitch wins +200", prompt: "Pick a real campus problem. In 30 seconds: say one user insight, a problem statement, and a cheap prototype you could test this week.", note: "Examples: bus timings, library seats, lost ID cards, hostel laundry.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "The Design Sprint on One Page", note: "Screenshot this. Try one stage this week.", items: SPRINTCARD },
    {
      type: "end",
      joinTitle: "Join the EduMoon Entrepreneurship Club",
      joinText: "Startup games, pitch practice and founder talks every week.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
