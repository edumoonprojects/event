// Stacks and Queues (EduMoon Coding Club). Medium: for 2nd year and anyone starting data structures.
// Two of the most useful data structures, explained with plates, undo buttons and canteen lines: stacks (last in, first out) and queues (first in, first out), traced with short JavaScript.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end
// Door kinds: "choice", "number", "bug" (pick what happens, then tap the buggy line)

const SQ2 = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 50, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const SQN = (round, name, extra) => SQ2(round, name, Object.assign({ kind: "number", time: 60 }, extra));
const SQBUG = { kind: "bug", time: 75, step1: "What does it print?", step2: "Tap the buggy line", say1: "First pick what it prints.", say2: "Now tap the line with the bug." };

// The take-home card: stacks and queues in 8 lines.
const DSCARD = [
  ["Stack", "Last in, first out (LIFO). Like a pile of plates."],
  ["push / pop", "Add to the top / take from the top. In JavaScript: arr.push(x), arr.pop()."],
  ["Stack uses", "Undo, browser back button, function calls, checking brackets."],
  ["Queue", "First in, first out (FIFO). Like the canteen line."],
  ["enqueue / dequeue", "Add at the back / take from the front. In JavaScript: arr.push(x), arr.shift()."],
  ["Queue uses", "Printer jobs, ticket booking, messages waiting to be sent."],
  ["Peek", "Look at the next item without removing it."],
  ["Pick by order", "Need the newest first? Stack. Need the oldest first? Queue."]
];

window.GAME = {
  id: "stacks-and-queues",
  title: "Stacks and Queues",
  club: "Coding Club",
  tagline: "Plates, undo buttons and canteen lines: two data structures you already use every day.",
  art: window.STORY_ART,
  guide: {
    years: "2nd year (anyone starting data structures)", time: "40 minutes", level: "Medium", mono: true,
    about: "Kavya’s DSA lab starts with stacks and queues, and the textbook makes them sound complicated. In 6 rounds, teams learn stacks (last in, first out) with plates and the undo button, trace push and pop, see real uses like bracket checking, then learn queues (first in, first out) with the canteen line, trace enqueue and dequeue, and finally choose the right structure for real problems. Code uses simple JavaScript arrays.",
    outcomes: "What stacks and queues are, how to trace push, pop, enqueue and dequeue, where each is used in real software, and how to choose between them. A strong base for placement DSA questions.",
    tone: "Use physical props if you can: stack three notebooks for a stack, line up three volunteers for a queue. Trace every reveal on the board with boxes. Students who “hate DSA” usually enjoy this one.",
    extra: [["Act it out", "For queues, line up 4 students. “Enqueue” adds one at the back; “dequeue” sends the front one back to their seat. It makes FIFO obvious."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Traced",
    rulesEyebrow: "How Stacks and Queues works", rulesTitle: "Learn the structure. Trace the operations. Predict the result.",
    learnText: "The host explains one idea about stacks or queues.", crackTitle: "Trace",
    crackText: "Trace the operations and lock in your answer.",
    rulesExtra: "Bug questions: <b>100</b> + <b>100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Let’s trace it together on the board!", cracked: "traced it",
    next: "Next round →", finale: "Next →", winner: "are today’s data structure champs!", endLine: "Kavya aced her DSA lab."
  },
  offerEyebrow: "EduMoon Coding Club · DSA level",
  offerTitle: "Your DSA level",
  offers: [
    { min: 0.7, icon: "trophy", title: "Structure Master", text: "Stacks and queues are yours. Try Big-O Speed Race next." },
    { min: 0.45, icon: "list-checks", title: "Strong Tracer", text: "Good! Write your own bracket checker this week." },
    { min: 0.2, icon: "route", title: "DSA Learner", text: "Good start. Trace each example from today on paper." },
    { min: 0, icon: "book-open", title: "DSA Starter", text: "Everyone starts here. Play JavaScript Jungle first." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Coding Club · DSA lab",
      title: "Kavya’s DSA lab starts with stacks and queues. The textbook makes them sound scary. Can your team show her they are just plates and canteen lines?",
      cards: [["list-checks", "Stacks: last in, first out"], ["users", "Queues: first in, first out"], ["trophy", "Your score decides your DSA level"]]
    },
    { type: "rules" },

    // ---------- Round 1: The stack ----------
    {
      type: "learn", door: 1,
      title: "A stack is a pile of plates: last in, first out.",
      points: [["push", "Put a plate on top"], ["pop", "Take the top plate off"], ["LIFO", "The last plate added is the first one removed"]],
      highlightLast: true,
      code: ["let s = [];", "s.push(\"A\"); s.push(\"B\"); s.push(\"C\");", "console.log(s.pop());"],
      output: "C (the last one pushed)"
    },
    SQ2(1, "The Stack", {
      prompt: "You push 10, then 20, then 30 onto an empty stack. What does pop() return?",
      options: ["10", "20", "30", "Nothing"], answer: 2,
      hint: "Last in, first out.",
      note: "30 was pushed last, so it comes out first.", badge: "list-checks"
    }),
    SQ2(1, "The Stack", {
      prompt: "Which everyday thing works like a stack?",
      options: ["The undo button", "A cinema ticket line", "A printer’s job list", "A bus queue"], answer: 0,
      hint: "Which one removes the newest action first?",
      note: "Undo reverses your most recent action first. That is last in, first out.", badge: "route"
    }),
    SQN(1, "The Stack", {
      prompt: "What does this print?",
      code: ["let s = [];", "s.push(5); s.push(8); s.push(2);", "s.pop();", "console.log(s.length);"],
      answer: 2,
      hint: "Three in, one out.",
      note: "3 pushes, 1 pop: 2 items left (5 and 8).", badge: "chart-column",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Tracing a stack ----------
    {
      type: "learn", door: 2,
      title: "Trace a stack by drawing the pile after every step.",
      points: [["Draw it", "Bottom on the left, top on the right"], ["push adds to the right", "pop removes from the right"], ["Peek", "s[s.length - 1] looks at the top without removing it"]],
      highlightLast: true,
      code: ["s.push(1)  → [1]", "s.push(4)  → [1, 4]", "s.pop()    → [1]", "s.push(7)  → [1, 7]"],
      output: "Top is 7"
    },
    SQN(2, "Tracing", {
      prompt: "What does this print?",
      code: ["let s = [];", "s.push(3); s.push(6);", "s.pop();", "s.push(9); s.push(12);", "s.pop();", "console.log(s[s.length - 1]);"],
      answer: 9,
      hint: "Draw the pile after each line.",
      note: "[3, 6] → [3] → [3, 9, 12] → [3, 9]. The top is 9.", badge: "list-checks"
    }),
    SQN(2, "Tracing", {
      prompt: "What does this print?",
      code: ["let s = [];", "for (let i = 1; i <= 4; i++) s.push(i * 10);", "let a = s.pop();", "let b = s.pop();", "console.log(a + b);"],
      answer: 70,
      hint: "The stack holds 10, 20, 30, 40.",
      note: "First pop is 40, second is 30. 40 + 30 = 70.", badge: "zap"
    }),
    SQ2(2, "Tracing", {
      prompt: "You push the letters of “EDU” one by one, then pop them all. In what order do they come out?",
      options: ["U, D, E", "E, D, U", "D, U, E", "E, U, D"], answer: 0,
      hint: "Last in, first out.",
      note: "U was last in, so it comes out first. A stack reverses order, which is a classic way to reverse a string.", badge: "spell-check",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Stacks in real code ----------
    {
      type: "learn", door: 3,
      title: "Stacks power undo, the back button, and bracket checks.",
      points: [["Browser back", "Each page you visit is pushed; Back pops"], ["Function calls", "Each call is pushed; return pops it"], ["Bracket checker", "Push each opening bracket; each closing one must match the top"]],
      highlightLast: true,
      code: ["“( [ ] )”  push (  push [  ] matches [  ) matches (", "Stack empty at the end → balanced"],
      output: "Balanced"
    },
    SQ2(3, "Stacks in Code", {
      prompt: "Which of these bracket strings is balanced?",
      options: ["( [ ) ]", "( ( ]", "[ ) ( ]", "( [ ] )"], answer: 3,
      hint: "Each closing bracket must match the most recent open one.",
      note: "( [ ] ): the ] matches [, then ) matches (. The others close in the wrong order.", badge: "check"
    }),
    SQ2(3, "Stacks in Code", {
      prompt: "You visit Home → Results → Fees → Hostel and press Back twice. Where are you?",
      options: ["Fees", "Home", "Hostel", "Results"], answer: 3,
      hint: "Pop twice from the top.",
      note: "Back pops Hostel, then Fees. You land on Results.", badge: "globe"
    }),
    SQ2(3, "Stacks in Code", Object.assign({}, SQBUG, {
      prompt: "An undo feature. What does it print, and which line has the bug?",
      code: ["let history = [];", "history.push(\"typed A\");", "history.push(\"typed B\");", "let undone = history.shift();", "console.log(undone);"],
      outputOptions: ["typed B", "typed A", "undefined"], outputAnswer: 1, bugLine: 3,
      bugText: "shift() removes from the front. Undo needs the newest action: history.pop()",
      hint: "Which end should undo take from?",
      note: "shift() makes it behave like a queue, undoing the oldest action. Undo must be a stack: pop().", badge: "search",
      board: true, boardLabel: "after Round 3"
    })),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Explain a stack to the room using something in your hostel or home.", note: "Plates, books, clothes… push and pop. 20 seconds.", points: 100 },

    // ---------- Round 4: The queue ----------
    {
      type: "learn", door: 4,
      title: "A queue is the canteen line: first in, first out.",
      points: [["enqueue", "Join at the back: q.push(x)"], ["dequeue", "Leave from the front: q.shift()"], ["FIFO", "The first one in is the first one served"]],
      highlightLast: true,
      code: ["let q = [];", "q.push(\"Anu\"); q.push(\"Ravi\"); q.push(\"Sana\");", "console.log(q.shift());"],
      output: "Anu (first in line)"
    },
    SQ2(4, "The Queue", {
      prompt: "Anu, Ravi and Sana join a queue in that order. Who is served first?",
      options: ["Anu", "Ravi", "Sana", "All together"], answer: 0,
      hint: "First in, first out.",
      note: "Anu joined first, so she is served first.", badge: "users"
    }),
    SQ2(4, "The Queue", {
      prompt: "Which of these works like a queue?",
      options: ["The undo button", "Print jobs sent to one printer", "The browser back button", "A pile of answer sheets"], answer: 1,
      hint: "Which serves the oldest request first?",
      note: "Printers print jobs in the order they arrive. First in, first out.", badge: "file-text"
    }),
    SQN(4, "The Queue", {
      prompt: "What does this print?",
      code: ["let q = [];", "q.push(4); q.push(7); q.push(1);", "q.shift();", "console.log(q[0]);"],
      answer: 7,
      hint: "Who is at the front after one leaves?",
      note: "4 leaves first. Now 7 is at the front.", badge: "list-checks",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Tracing a queue ----------
    {
      type: "learn", door: 5,
      title: "Trace a queue: people join at the back, leave from the front.",
      points: [["Draw the line", "Front on the left, back on the right"], ["push adds to the right", "shift removes from the left"], ["Front", "q[0] is who will be served next"]],
      highlightLast: true,
      code: ["q.push(2)  → [2]", "q.push(5)  → [2, 5]", "q.shift()  → [5]", "q.push(9)  → [5, 9]"],
      output: "Front is 5"
    },
    SQN(5, "Tracing a Queue", {
      prompt: "What does this print?",
      code: ["let q = [];", "q.push(10); q.push(20); q.push(30);", "q.shift();", "q.push(40);", "q.shift();", "console.log(q[0] + q[1]);"],
      answer: 70,
      hint: "Draw the line after each step.",
      note: "[10, 20, 30] → [20, 30] → [20, 30, 40] → [30, 40]. 30 + 40 = 70.", badge: "chart-column"
    }),
    SQN(5, "Tracing a Queue", {
      prompt: "A canteen serves 1 student every 2 minutes. 6 students are in the queue. How many minutes until the 6th student is served?",
      answer: 12,
      hint: "6 × 2.",
      note: "12 minutes. Queues help plan waiting times: that is why they are used in booking systems.", badge: "timer"
    }),
    SQ2(5, "Tracing a Queue", {
      prompt: "You enqueue the letters of “EDU” and then dequeue them all. In what order do they come out?",
      options: ["U, D, E", "E, D, U", "D, E, U", "U, E, D"], answer: 1,
      hint: "First in, first out.",
      note: "A queue keeps the original order, unlike a stack, which reverses it.", badge: "spell-check",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Choose the structure (double) ----------
    {
      type: "learn", door: 6,
      title: "Choose by order: newest first or oldest first?",
      points: [["Newest first", "Stack: undo, back button, reversing"], ["Oldest first", "Queue: bookings, printers, message sending"], ["Interview tip", "Say why: “A queue, because requests must be handled in arrival order.”"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["route", "Stack or queue?", "Real systems"], ["mic", "Then the final challenge", "Explain both"]] }
    },
    SQ2(6, "Choose the Structure", {
      double: true,
      prompt: "A railway booking site gets 10,000 requests in one second. Which structure keeps it fair?",
      options: ["A stack, newest served first", "A queue, served in arrival order", "No structure, pick randomly", "Two stacks, one per server"], answer: 1,
      hint: "Fair means first come, first served.",
      note: "A queue serves requests in arrival order. A stack would serve the latest request first, which is unfair.", badge: "users"
    }),
    SQ2(6, "Choose the Structure", {
      double: true,
      prompt: "A text editor needs Undo and Redo. What is the usual design?",
      options: ["One queue for everything", "A single array sorted by time", "Two stacks: one for undo, one for redo", "No structure is needed"], answer: 2,
      hint: "Both undo and redo work on the newest action.",
      note: "Undo pops from the undo stack and pushes onto the redo stack, and the other way round for redo.", badge: "pen-tool"
    }),
    SQ2(6, "Choose the Structure", Object.assign({}, SQBUG, {
      double: true,
      prompt: "A ticket counter queue. What does it print, and which line has the bug?",
      code: ["let line = [];", "line.push(\"Kiran\");", "line.push(\"Meena\");", "let next = line.pop();", "console.log(next + \" is served\");"],
      outputOptions: ["Kiran is served", "Meena is served", "undefined is served"], outputAnswer: 1, bugLine: 3,
      bugText: "pop() takes the last person who joined. A queue must serve the first: line.shift()",
      hint: "Who should be served first at a counter?",
      note: "Using pop() turns the queue into a stack, serving the latest person first. Kiran waited longer!", badge: "x",
      board: true, boardLabel: "after Round 6"
    })),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best answer wins +200", prompt: "In 30 seconds: explain the difference between a stack and a queue, with one real example of each.", note: "LIFO vs FIFO, with examples from college life. The host picks the clearest.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "Stacks and Queues in 8 Lines", note: "Screenshot this. Trace one example by hand tonight.", items: DSCARD },
    {
      type: "end",
      joinTitle: "Join the EduMoon Coding Club",
      joinText: "Coding games, lab help and project nights every week. Learn to code, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
