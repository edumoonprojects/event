// JavaScript Jungle (EduMoon Coding Club). For beginners: 1st and 2nd year, or anyone starting web development.
// The language of every website. Teams guess what tiny JavaScript programs print: variables, strings and numbers, comparisons, arrays, loops and functions.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end
// Door kinds: "choice", "number", "bug" (pick what it prints, then tap the buggy line)

const JQ = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 50, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const JN = (round, name, extra) => JQ(round, name, Object.assign({ kind: "number", time: 60 }, extra));
const JBUG = { kind: "bug", time: 75, step1: "What does it print?", step2: "Tap the buggy line", say1: "First pick what it prints.", say2: "Now tap the line with the bug." };

// The take-home card: 10 JavaScript basics.
const JSCARD = [
  ["console.log(x)", "Shows x in the browser console. Your best friend for finding bugs."],
  ["let and const", "let can change later. const cannot be given a new value."],
  ["\"5\" + 3", "Gives \"53\". With a string, + joins text."],
  ["\"10\" - 4", "Gives 6. Minus only works with numbers, so JavaScript converts."],
  ["=== not ==", "=== checks value AND type. 5 === \"5\" is false."],
  ["Arrays start at 0", "fruits[0] is the first item. The last is fruits[fruits.length - 1]."],
  ["undefined", "A box with nothing in it yet, or an item that does not exist."],
  ["for (let i = 0; i < n; i++)", "Runs n times: i is 0, 1, … n − 1."],
  ["return", "Sends a value back from a function. Without it you get undefined."],
  ["Practise", "Press F12 in Chrome, open Console, and type any line from today."]
];

window.GAME = {
  id: "javascript-jungle",
  title: "JavaScript Jungle",
  club: "Coding Club",
  tagline: "Every website runs on JavaScript. Learn it by guessing what the code prints.",
  art: window.STORY_ART,
  guide: {
    years: "1st and 2nd year (anyone starting web development)", time: "40 minutes", level: "Beginner", mono: true,
    about: "Teja wants to build his college club’s website, but every tutorial says “learn JavaScript first”. In 6 rounds, teams learn variables, strings and numbers, comparisons, arrays, loops and functions, and predict what short programs print. JavaScript has a few famous surprises, like \"5\" + 3, and teams meet them here first.",
    outcomes: "Reading and predicting simple JavaScript, the difference between let and const, == and ===, strings and numbers, and the habit of using console.log to understand code.",
    tone: "JavaScript is forgiving and sometimes strange. When the room is surprised by an answer, enjoy it, then explain why in one line. If you have a laptop, open the browser console (F12) and run the code live after each reveal.",
    extra: [["Live demo", "Open Chrome, press F12, click Console and type the code from the slide. Students love seeing the answer appear for real."]]
  },
  words: {
    round: "Round", unlocked: "Output", badgeLabel: "Solved",
    rulesEyebrow: "How JavaScript Jungle works", rulesTitle: "Learn one idea. Read the code. Predict the output.",
    learnText: "The host explains one JavaScript idea.", crackTitle: "Predict",
    crackText: "Work out what the code prints and lock it in.",
    rulesExtra: "Bug questions: <b>100</b> for the output + <b>100</b> for the line. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. JavaScript surprises real developers too!", cracked: "got the output",
    next: "Next round →", finale: "Next →", winner: "are today’s JavaScript explorers!", endLine: "Teja is ready to build the club website."
  },
  offerEyebrow: "EduMoon Coding Club · JavaScript level",
  offerTitle: "Your JavaScript level",
  offers: [
    { min: 0.7, icon: "trophy", title: "Jungle Guide", text: "You read JavaScript well. Try building one small web page this week." },
    { min: 0.45, icon: "code", title: "Code Explorer", text: "Strong! Open the browser console and try every line from today." },
    { min: 0.2, icon: "compass", title: "Trail Finder", text: "Good start. Revise the 10 basics below and try again." },
    { min: 0, icon: "book-open", title: "New Explorer", text: "Everyone starts here. Play Web Basics, then come back." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Coding Club · JavaScript Jungle",
      title: "Teja wants to build his club’s website. Every tutorial says, “Learn JavaScript first.” Can your team guide him through the jungle?",
      cards: [["code", "Short programs, real JavaScript"], ["search", "Predict the output and find the bugs"], ["trophy", "Your score decides your JavaScript level"]]
    },
    { type: "rules" },

    // ---------- Round 1: Variables ----------
    {
      type: "learn", door: 1,
      title: "Variables store values. console.log shows them.",
      points: [["let score = 10;", "A box called score with 10 inside. It can change later"], ["const college = \"AU\";", "A box that cannot get a new value"], ["console.log(score);", "Prints what is inside the box"]],
      highlightLast: true,
      code: ["let score = 10;", "score = score + 5;", "console.log(score);"],
      output: "15"
    },
    JN(1, "Variables", {
      prompt: "What does this print?",
      code: ["let x = 5;", "x = x + 2;", "console.log(x);"],
      answer: 7,
      hint: "x starts at 5. What does line 2 do?",
      note: "x becomes 5 + 2 = 7. A variable can be updated using its own old value.", badge: "code"
    }),
    JQ(1, "Variables", {
      prompt: "What happens when this runs?",
      code: ["const pi = 3.14;", "pi = 3;", "console.log(pi);"],
      options: ["It prints 3", "It prints 3.14", "An error: pi is a constant", "It prints undefined"], answer: 2,
      hint: "What does const promise?",
      note: "const means the value cannot be replaced. Line 2 throws an error. Use let for values that change.", badge: "lock"
    }),
    JQ(1, "Variables", {
      prompt: "A game score goes up every time you win. Which keyword should it use?",
      options: ["let score = 0;", "const score = 0;", "print score = 0;", "change score = 0;"], answer: 0,
      hint: "The value must change.",
      note: "let, because the score changes. Use const for things that stay the same, like your college name.", badge: "gamepad-2",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Strings and numbers ----------
    {
      type: "learn", door: 2,
      title: "Text and numbers behave differently.",
      points: [["\"Ravi\" is a string", "Text goes inside quotes"], ["5 + 3 is 8", "Two numbers add"], ["\"5\" + 3 is \"53\"", "If one side is text, + joins them"]],
      highlightLast: true,
      code: ["let name = \"Ravi\";", "console.log(\"Hi \" + name);", "console.log(\"5\" + 3);"],
      output: "Hi Ravi, then 53"
    },
    JQ(2, "Strings and Numbers", {
      prompt: "What does this print?",
      code: ["console.log(\"5\" + 3);"],
      options: ["8", "Error", "NaN", "53"], answer: 3,
      hint: "One side is in quotes.",
      note: "\"5\" is text, so + joins: \"53\". This catches beginners in forms, where everything typed is text.", badge: "sparkles"
    }),
    JN(2, "Strings and Numbers", {
      prompt: "What does this print?",
      code: ["console.log(\"10\" - 4);"],
      answer: 6,
      hint: "Minus cannot join text. What does JavaScript do instead?",
      note: "Minus only works with numbers, so JavaScript turns \"10\" into 10. 10 − 4 = 6. Only + joins strings.", badge: "zap"
    }),
    JQ(2, "Strings and Numbers", {
      prompt: "What does this print?",
      code: ["let city = \"Vizag\";", "console.log(\"I live in \" + city + \"!\");"],
      options: ["I live in city!", "I live inVizag!", "I live in Vizag!", "\"I live in \" + city + \"!\""], answer: 2,
      hint: "Look at the spaces inside the quotes.",
      note: "city is replaced by its value, and the space inside \"I live in \" keeps the words apart.", badge: "map",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Comparisons and if ----------
    {
      type: "learn", door: 3,
      title: "if decides. === compares value and type.",
      points: [["if (marks >= 35) { … }", "Runs only if the condition is true"], ["== is loose", "5 == \"5\" is true: it converts first"], ["=== is strict", "5 === \"5\" is false. Always use ==="]],
      highlightLast: true,
      code: ["let marks = 40;", "if (marks >= 35) {", "  console.log(\"Pass\");", "} else {", "  console.log(\"Fail\");", "}"],
      output: "Pass"
    },
    JQ(3, "Comparisons", {
      prompt: "What does this print?",
      code: ["console.log(5 === \"5\");"],
      options: ["false", "true", "5", "Error"], answer: 0,
      hint: "Same value, but is it the same type?",
      note: "One is a number and one is a string, so === says false. That is exactly why === is safer.", badge: "scale"
    }),
    JQ(3, "Comparisons", {
      prompt: "What does this print?",
      code: ["let age = 17;", "if (age >= 18) {", "  console.log(\"Can vote\");", "} else {", "  console.log(\"Too young\");", "}"],
      options: ["Can vote", "Too young", "Both lines", "Nothing"], answer: 1,
      hint: "Is 17 greater than or equal to 18?",
      note: "17 >= 18 is false, so the else block runs. Only one block ever runs.", badge: "check"
    }),
    JQ(3, "Comparisons", Object.assign({}, JBUG, {
      prompt: "A login check. What does it print, and which line has the bug?",
      code: ["let otp = 4821;", "let typed = 1234;", "if (typed = otp) {", "  console.log(\"Login OK\");", "} else {", "  console.log(\"Wrong OTP\");", "}"],
      outputOptions: ["Login OK", "Wrong OTP", "An error"], outputAnswer: 0, bugLine: 2,
      bugText: "= copies otp into typed, and 4821 counts as true. Fix: typed === otp",
      hint: "How many equals signs are inside the if?",
      note: "One = assigns, it does not compare. A wrong OTP logged in. One character, one security hole.", badge: "lock",
      board: true, boardLabel: "after Round 3"
    })),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Explain to the room why \"5\" + 3 gives \"53\" but \"5\" - 3 gives 2.", note: "Text joins with +. Minus needs numbers. 20 seconds.", points: 100 },

    // ---------- Round 4: Arrays ----------
    {
      type: "learn", door: 4,
      title: "An array is a list. Counting starts at 0.",
      points: [["let fruits = [\"mango\", \"banana\", \"guava\"];", "One box holding a list"], ["fruits[0]", "The first item: mango"], ["fruits.length", "How many items: 3"]],
      highlightLast: true,
      code: ["let fruits = [\"mango\", \"banana\", \"guava\"];", "fruits.push(\"apple\");", "console.log(fruits.length);"],
      output: "4 (push adds to the end)"
    },
    JQ(4, "Arrays", {
      prompt: "What does this print?",
      code: ["let fruits = [\"mango\", \"banana\", \"guava\"];", "console.log(fruits[1]);"],
      options: ["mango", "guava", "undefined", "banana"], answer: 3,
      hint: "Index 0 is the first item.",
      note: "Index 0 is mango, index 1 is banana. Arrays start counting at 0.", badge: "list-checks"
    }),
    JN(4, "Arrays", {
      prompt: "What does this print?",
      code: ["let marks = [70, 82, 65];", "marks.push(90);", "marks.push(58);", "console.log(marks.length);"],
      answer: 5,
      hint: "Start with 3 items. How many were added?",
      note: "3 items plus 2 pushes = 5. length always tells you how many items there are now.", badge: "chart-column"
    }),
    JQ(4, "Arrays", {
      prompt: "What does this print?",
      code: ["let days = [\"Mon\", \"Tue\", \"Wed\"];", "console.log(days[3]);"],
      options: ["undefined", "Wed", "Mon", "An error"], answer: 0,
      hint: "The indexes are 0, 1 and 2.",
      note: "There is no item at index 3, so JavaScript gives undefined. In C this kind of mistake can even crash the program.", badge: "search",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Loops ----------
    {
      type: "learn", door: 5,
      title: "A for loop repeats code a set number of times.",
      points: [["let i = 0", "Where to start"], ["i < 5", "Keep going while this is true"], ["i++", "Add 1 after each round"]],
      highlightLast: true,
      code: ["for (let i = 0; i < 3; i++) {", "  console.log(i);", "}"],
      output: "0 1 2"
    },
    JN(5, "Loops", {
      prompt: "How many times does this print “Hello”?",
      code: ["for (let i = 0; i < 5; i++) {", "  console.log(\"Hello\");", "}"],
      answer: 5,
      hint: "i goes 0, 1, 2… when does it stop?",
      note: "i is 0, 1, 2, 3 and 4. That is 5 times. When i becomes 5, i < 5 is false.", badge: "timer"
    }),
    JN(5, "Loops", {
      prompt: "What does this print?",
      code: ["let sum = 0;", "for (let i = 1; i <= 4; i++) {", "  sum = sum + i;", "}", "console.log(sum);"],
      answer: 10,
      hint: "1 + 2 + 3 + 4.",
      note: "sum goes 1, 3, 6, 10. Tracing line by line is the real skill.", badge: "list-checks"
    }),
    JQ(5, "Loops", Object.assign({}, JBUG, {
      prompt: "Adding 3 marks. What does it print, and which line has the bug?",
      code: ["let marks = [70, 80, 90];", "let total = 0;", "for (let i = 0; i <= marks.length; i++) {", "  total = total + marks[i];", "}", "console.log(total);"],
      outputOptions: ["240", "NaN", "It never stops"], outputAnswer: 1, bugLine: 2,
      bugText: "<= also reads marks[3], which is undefined. 240 + undefined is NaN. Fix: i < marks.length",
      hint: "How many times does the loop run for 3 marks?",
      note: "One extra round adds undefined, and the total becomes NaN (Not a Number). The off-by-one bug lives in every language.", badge: "search",
      board: true, boardLabel: "after Round 5"
    })),

    // ---------- Round 6: Functions (double) ----------
    {
      type: "learn", door: 6,
      title: "A function is a reusable machine: input in, result out.",
      points: [["function add(a, b) { … }", "a and b are the inputs"], ["return a + b;", "Sends the result back"], ["add(2, 3)", "Calls the machine. Gives 5"]],
      highlightLast: true,
      code: ["function add(a, b) {", "  return a + b;", "}", "console.log(add(2, 3));"],
      output: "5"
    },
    JN(6, "Functions", {
      double: true,
      prompt: "What does this print?",
      code: ["function double(n) {", "  return n * 2;", "}", "console.log(double(7) + 1);"],
      answer: 15,
      hint: "Work out double(7) first.",
      note: "double(7) returns 14, then + 1 gives 15. The function runs first, then the rest of the line.", badge: "zap"
    }),
    JQ(6, "Functions", {
      double: true,
      prompt: "What does this print?",
      code: ["function greet(name) {", "  console.log(\"Hi \" + name);", "}", "greet();"],
      options: ["Hi", "Hi undefined", "Hi name", "An error"], answer: 1,
      hint: "What is name when nothing is passed in?",
      note: "No value was passed, so name is undefined. JavaScript still runs and joins the text: Hi undefined.", badge: "user"
    }),
    JQ(6, "Functions", Object.assign({}, JBUG, {
      double: true,
      prompt: "A square function. What does it print, and which line has the bug?",
      code: ["function square(n) {", "  n * n;", "}", "console.log(square(4));"],
      outputOptions: ["16", "undefined", "4"], outputAnswer: 1, bugLine: 1,
      bugText: "it works out n * n but never sends it back. Fix: return n * n;",
      hint: "What does the function send back?",
      note: "Without return, a function gives back undefined. The maths happened, but the answer was thrown away.", badge: "code",
      board: true, boardLabel: "after Round 6"
    })),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "Say, line by line, a tiny program that prints the numbers 1 to 5.", note: "for (let i = 1; i <= 5; i++) { console.log(i); }. The host picks the clearest explanation.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "10 JavaScript Basics", note: "Screenshot this. Press F12 in Chrome and try each one tonight.", items: JSCARD },
    {
      type: "end",
      joinTitle: "Join the EduMoon Coding Club",
      joinText: "Coding games, lab help and project nights every week. Learn to code, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
