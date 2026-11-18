// JavaScript Async (EduMoon Coding Club). Advanced: for students who know JavaScript basics (after JavaScript Jungle).
// Why JavaScript code does not always run top to bottom: setTimeout, callbacks, promises, the event loop (microtasks vs macrotasks), async/await, errors and running tasks in parallel.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end
// Door kinds: "choice", "number", "bug" (pick what happens, then tap the buggy line)

const AY = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 70, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const AYN = (round, name, extra) => AY(round, name, Object.assign({ kind: "number", time: 70 }, extra));
const ABUG = { kind: "bug", time: 90, step1: "What happens?", step2: "Tap the buggy line", say1: "First pick what happens.", say2: "Now tap the line with the bug." };

// The take-home card: async rules.
const ASYNC = [
  ["Sync first", "All normal code finishes before any callback, promise or timer runs."],
  ["setTimeout(fn, 0)", "Not “now”. It means “after the current code, when the queue is free”."],
  ["Callbacks", "A function you pass in, to be called later. Nesting many gets messy."],
  ["Promises", "An object for a future value. .then runs when it is ready."],
  ["Microtasks before timers", "Promise .then callbacks run before setTimeout callbacks."],
  ["async / await", "await pauses only inside that async function. Code outside keeps going."],
  ["try / catch with await", "Catches errors from rejected promises."],
  ["Promise.all", "Runs tasks together. Total time is the slowest one, not the sum."]
];

window.GAME = {
  id: "javascript-async",
  title: "JavaScript Async",
  club: "Coding Club",
  tagline: "Why does JavaScript print things in the “wrong” order? Master the event loop.",
  art: window.STORY_ART,
  guide: {
    years: "2nd year onwards (after JavaScript Jungle)", time: "45 minutes", level: "Advanced", mono: true,
    about: "Teja’s club website now loads fest data from a server, and the page shows “undefined” before the data arrives. In 6 rounds, teams learn why JavaScript does not always run top to bottom: setTimeout, callbacks, promises, the event loop with microtasks and timers, async/await, error handling and running tasks in parallel with Promise.all. Most questions ask teams to predict the exact output order.",
    outcomes: "Predicting output order in async JavaScript, using promises and async/await correctly, catching errors, avoiding the forgotten-await bug, and speeding up code with Promise.all.",
    tone: "Output-order questions surprise even working developers, so enjoy the gasps. On each reveal, walk through it with two lists on the board: “runs now” and “waiting in the queue”.",
    extra: [["Live demo", "If you have a laptop, paste any question into the browser console (F12) after the reveal. Seeing the real order is very convincing."]]
  },
  words: {
    round: "Round", unlocked: "Output", badgeLabel: "Resolved",
    rulesEyebrow: "How JavaScript Async works", rulesTitle: "Learn the rule. Predict the order. Beat the event loop.",
    learnText: "The host explains one async idea.", crackTitle: "Predict",
    crackText: "Work out the order things print and lock it in.",
    rulesExtra: "Bug questions: <b>100</b> + <b>100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. The event loop fools senior developers too!", cracked: "resolved it",
    next: "Next round →", finale: "Next →", winner: "have mastered the event loop!", endLine: "Teja’s site loads data correctly now."
  },
  offerEyebrow: "EduMoon Coding Club · Async level",
  offerTitle: "Your async level",
  offers: [
    { min: 0.7, icon: "trophy", title: "Event Loop Master", text: "You predict async order like a pro. Build something that fetches a real API." },
    { min: 0.45, icon: "zap", title: "Promise Keeper", text: "Strong! Rewrite one callback example as async/await." },
    { min: 0.2, icon: "timer", title: "Async Learner", text: "Good start. Run each question in the browser console tonight." },
    { min: 0, icon: "book-open", title: "Still Waiting", text: "Everyone starts here. Play JavaScript Jungle again, then return." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Coding Club · Undefined!",
      title: "Teja’s club site now loads fest data from a server, but the page shows “undefined” first. JavaScript is not running top to bottom. Can your team work out why?",
      cards: [["timer", "Timers, callbacks, promises and await"], ["search", "Predict the exact output order"], ["trophy", "Your score decides your async level"]]
    },
    { type: "rules" },

    // ---------- Round 1: setTimeout ----------
    {
      type: "learn", door: 1,
      title: "setTimeout does not pause. It schedules for later.",
      points: [["Normal code runs first", "Top to bottom, all of it"], ["setTimeout(fn, ms)", "Puts fn in a queue to run after at least ms"], ["Even 0 ms waits", "It runs only after the current code finishes"]],
      highlightLast: true,
      code: ["console.log(\"A\");", "setTimeout(() => console.log(\"B\"), 0);", "console.log(\"C\");"],
      output: "A C B"
    },
    AY(1, "setTimeout", {
      prompt: "What is printed, in order?",
      code: ["console.log(\"1\");", "setTimeout(() => console.log(\"2\"), 0);", "console.log(\"3\");", "console.log(\"4\");"],
      options: ["1 2 3 4", "1 3 4 2", "2 1 3 4", "1 3 2 4"], answer: 1,
      hint: "All normal lines first.",
      note: "The timer callback waits until all normal code finishes: 1, 3, 4, then 2.", badge: "timer"
    }),
    AY(1, "setTimeout", {
      prompt: "What is printed, in order?",
      code: ["setTimeout(() => console.log(\"slow\"), 100);", "setTimeout(() => console.log(\"fast\"), 0);", "console.log(\"now\");"],
      options: ["slow fast now", "now slow fast", "now fast slow", "fast now slow"], answer: 2,
      hint: "Normal code, then the shorter timer.",
      note: "now runs immediately, then the 0 ms timer, then the 100 ms timer.", badge: "clock"
    }),
    AYN(1, "setTimeout", {
      prompt: "What is printed?",
      code: ["let x = 1;", "setTimeout(() => { x = 99; }, 0);", "console.log(x);"],
      answer: 1,
      hint: "Has the timer run yet?",
      note: "console.log runs before the timer callback, so x is still 1.", badge: "search",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Callbacks ----------
    {
      type: "learn", door: 2,
      title: "A callback is a function you hand over, to be called later.",
      points: [["getData(cb)", "“When the data arrives, call cb with it”"], ["Code after it does not wait", "It runs straight away"], ["Callback hell", "Callbacks inside callbacks inside callbacks"]],
      highlightLast: true,
      code: ["function getMarks(cb) {", "  setTimeout(() => cb(88), 500);", "}", "getMarks(m => console.log(m));", "console.log(\"waiting\");"],
      output: "waiting, then 88"
    },
    AYN(2, "Callbacks", {
      prompt: "What is printed?",
      code: ["function getData(cb) {", "  setTimeout(() => cb(5), 0);", "}", "let total = 0;", "getData(v => { total = v; });", "console.log(total);"],
      answer: 0,
      hint: "Has the callback run when console.log runs?",
      note: "The callback runs later, so total is still 0. This is exactly Teja’s “undefined” problem.", badge: "search"
    }),
    AY(2, "Callbacks", {
      prompt: "Where should Teja use the data so it is ready?",
      options: ["Inside the callback", "On the line after getData()", "At the top of the file", "Before calling getData()"], answer: 0,
      hint: "Only the callback knows when the data has arrived.",
      note: "Use the data inside the callback (or after await, as you will see). Code after the call runs too early.", badge: "check"
    }),
    AY(2, "Callbacks", {
      prompt: "login(() => getProfile(() => getMarks(() => showPage()))) — what is the main problem with this style?",
      options: ["It never runs at all", "Deep nesting is hard to read", "It is faster than promises", "It is a syntax error"], answer: 1,
      hint: "Picture 10 steps like this.",
      note: "Callback hell. Promises and async/await were created to flatten this.", badge: "x",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Promises ----------
    {
      type: "learn", door: 3,
      title: "A promise is a value that will arrive later.",
      points: [["Promise.resolve(5)", "A promise already holding 5"], [".then(v => …)", "Runs when the value is ready; returns a new promise"], ["Chains", "Each .then gets what the previous one returned"]],
      highlightLast: true,
      code: ["Promise.resolve(2)", "  .then(v => v * 10)", "  .then(v => console.log(v));"],
      output: "20"
    },
    AYN(3, "Promises", {
      prompt: "What is printed?",
      code: ["Promise.resolve(3)", "  .then(v => v * 2)", "  .then(v => v + 4)", "  .then(v => console.log(v));"],
      answer: 10,
      hint: "3, then × 2, then + 4.",
      note: "3 → 6 → 10. Each .then passes its return value to the next.", badge: "zap"
    }),
    AY(3, "Promises", {
      prompt: "What is printed, in order?",
      code: ["console.log(\"start\");", "Promise.resolve().then(() => console.log(\"then\"));", "console.log(\"end\");"],
      options: ["start then end", "then start end", "start end then", "end start then"], answer: 2,
      hint: "Even a resolved promise waits for normal code.",
      note: ".then callbacks always run after the current code finishes, even if the promise is already resolved.", badge: "timer"
    }),
    AY(3, "Promises", Object.assign({}, ABUG, {
      prompt: "A promise chain. What is printed, and which line has the bug?",
      code: ["Promise.resolve(5)", "  .then(v => { v * 2; })", "  .then(v => console.log(v));"],
      outputOptions: ["10", "undefined", "5"], outputAnswer: 1, bugLine: 1,
      bugText: "with curly braces, the arrow function needs return. Fix: .then(v => v * 2) or { return v * 2; }",
      hint: "What does that function return?",
      note: "{ v * 2; } calculates but returns nothing, so the next .then gets undefined.", badge: "search",
      board: true, boardLabel: "after Round 3"
    })),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Explain why setTimeout(fn, 0) does not run fn immediately, in 20 seconds.", note: "Current code first, then the queue.", points: 100 },

    // ---------- Round 4: The event loop ----------
    {
      type: "learn", door: 4,
      title: "Two queues: promise callbacks go before timers.",
      points: [["Microtasks", "Promise .then callbacks. Run as soon as current code ends"], ["Macrotasks", "setTimeout callbacks. Run after microtasks are done"], ["Order", "Sync code → all microtasks → one timer → microtasks again…"]],
      highlightLast: true,
      code: ["setTimeout(() => console.log(\"timer\"), 0);", "Promise.resolve().then(() => console.log(\"promise\"));", "console.log(\"sync\");"],
      output: "sync promise timer"
    },
    AY(4, "Event Loop", {
      prompt: "What is printed, in order?",
      code: ["console.log(\"A\");", "setTimeout(() => console.log(\"B\"), 0);", "Promise.resolve().then(() => console.log(\"C\"));", "console.log(\"D\");"],
      options: ["A B C D", "A D B C", "A C D B", "A D C B"], answer: 3,
      hint: "Sync, then promises, then timers.",
      note: "A and D are sync. C is a microtask, so it beats B, the timer.", badge: "route"
    }),
    AY(4, "Event Loop", {
      prompt: "What is printed, in order?",
      code: ["setTimeout(() => console.log(\"1\"), 0);", "Promise.resolve().then(() => console.log(\"2\"))", "  .then(() => console.log(\"3\"));", "console.log(\"4\");"],
      options: ["4 2 3 1", "4 1 2 3", "1 2 3 4", "4 2 1 3"], answer: 0,
      hint: "Both .then callbacks are microtasks.",
      note: "4 is sync. 2 and then 3 are microtasks, run before the timer’s 1.", badge: "list-checks"
    }),
    AY(4, "Event Loop", {
      prompt: "Why does the order matter in real apps?",
      options: ["It changes the colours of the page", "It only matters in exams", "It makes the code longer", "Code may read data too early"], answer: 3,
      hint: "Remember Teja’s “undefined”.",
      note: "Reading a value before the async step finishes gives undefined or old data. Understanding the order prevents it.", badge: "search",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: async / await ----------
    {
      type: "learn", door: 5,
      title: "async/await: write async code that reads top to bottom.",
      points: [["async function f()", "Always returns a promise"], ["await promise", "Pauses inside f until it is ready"], ["Outside f, nothing waits", "Code after f() keeps running"]],
      highlightLast: true,
      code: ["async function load() {", "  const marks = await getMarks();", "  console.log(marks);", "}", "load();", "console.log(\"next\");"],
      output: "next, then the marks"
    },
    AY(5, "async / await", {
      prompt: "What is printed, in order?",
      code: ["async function f() {", "  console.log(\"1\");", "  await null;", "  console.log(\"2\");", "}", "f();", "console.log(\"3\");"],
      options: ["1 2 3", "1 3 2", "3 1 2", "1 3"], answer: 1,
      hint: "Code before the first await runs right away.",
      note: "1 prints immediately. At await, f pauses and 3 prints. Then f resumes and prints 2.", badge: "timer"
    }),
    AYN(5, "async / await", {
      prompt: "What is printed?",
      code: ["async function getFee() {", "  return 7;", "}", "getFee().then(v => console.log(v * 2));"],
      answer: 14,
      hint: "An async function wraps its return value in a promise.",
      note: "getFee() returns a promise of 7. .then gets 7, so 14 is printed.", badge: "indian-rupee"
    }),
    AY(5, "async / await", Object.assign({}, ABUG, {
      prompt: "Teja’s fest page. What happens, and which line has the bug?",
      code: ["async function showFest() {", "  const data = fetchFest();", "  console.log(data.name);", "}", "showFest();"],
      outputOptions: ["It prints the fest name", "It prints undefined", "It never runs"], outputAnswer: 1, bugLine: 1,
      bugText: "fetchFest() returns a promise. Without await, data is the promise, not the result. Fix: await fetchFest();",
      hint: "What does fetchFest() return straight away?",
      note: "The forgotten await: the most common async bug. This was Teja’s “undefined” all along.", badge: "search",
      board: true, boardLabel: "after Round 5"
    })),

    // ---------- Round 6: Errors and parallel (double) ----------
    {
      type: "learn", door: 6,
      title: "Catch errors, and run independent tasks together.",
      points: [["try { await … } catch (e) { … }", "Catches a rejected promise"], ["await one by one", "Total time is the sum"], ["await Promise.all([a(), b(), c()])", "Runs together. Total time is the slowest one"]],
      highlightLast: true,
      code: ["try {", "  const r = await getResult();", "} catch (e) {", "  console.log(\"Could not load results\");", "}"],
      output: "A friendly message instead of a crash"
    },
    AYN(6, "Errors and Parallel", {
      double: true,
      prompt: "Three independent requests take 2, 3 and 4 seconds. They are awaited one after another. Roughly how many seconds in total?",
      answer: 9,
      hint: "Each waits for the previous one.",
      note: "2 + 3 + 4 = 9 seconds, one after another.", badge: "timer"
    }),
    AYN(6, "Errors and Parallel", {
      double: true,
      prompt: "The same three requests with await Promise.all([...]). Roughly how many seconds in total?",
      answer: 4,
      hint: "They run at the same time.",
      note: "About 4 seconds, the slowest one. For independent tasks, Promise.all can make pages much faster.", badge: "zap"
    }),
    AY(6, "Errors and Parallel", {
      double: true,
      prompt: "getResult() rejects because the server is down. How should Teja handle it in an async function?",
      options: ["Wrap the await in try/catch", "Ignore it, errors fix themselves", "Use setTimeout to hide it", "Delete the async keyword"], answer: 0,
      hint: "Errors need catching.",
      note: "try/catch around await handles the rejection, so the page shows a message instead of breaking.", badge: "shield",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best explanation wins +200", prompt: "Explain the event loop in 30 seconds: sync code, promise callbacks, then timers.", note: "Use a restaurant: the cook finishes the current order, then the quick notes, then the timer bells. The host picks.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "Async Rules", note: "Screenshot this. Test each rule in the browser console.", items: ASYNC },
    {
      type: "end",
      joinTitle: "Join the EduMoon Coding Club",
      joinText: "Coding games, lab help and project nights every week. Learn to code, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
