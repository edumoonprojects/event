// Escape the Lab: the content of this game. To make a new game, copy this folder,
// rename it, and change only this file. The engine in ../engine does the rest.
//
// Step types: story · rules · learn · door · key · end
// Door kinds: "number" (type a number), "choice" (tap an option), "bug" (pick the output, then tap the buggy line)
// time = seconds on the timer (the host decides when to reveal; the timer only sets the speed points)

window.GAME = {
  id: "escape-the-lab",
  title: "Escape the Lab",
  club: "Coding Club",
  tagline: "5 locked doors. 1 master key. Only C code gets you out.",
  key: "CODER",
  keyTitle: "You escaped. You’re CODERS now.",
  keyLine: "Variables, if-else, loops, debugging and arrays. All in 30 minutes.",
  steps: [
    {
      type: "story",
      alert: "⚠ Security alert · 6:00 PM",
      title: "The computer lab has locked itself. You’re inside.",
      cards: [["🔒", "5 doors stand between you and the exit"], ["💻", "Each one is locked by a piece of C code"], ["🔑", "Crack a door, win a letter of the master key"]]
    },
    { type: "rules" },

    // ---------- Door 1 ----------
    {
      type: "learn", door: 1,
      title: "Variables are boxes. Code runs top to bottom.",
      points: [["int a = 5;", "Make a box called a and put 5 inside"], ["printf(\"%d\", a);", "Show the number in box a"], ["One line at a time", "A box only changes when a line changes it"]],
      highlightLast: true,
      code: ["int a = 5;", "printf(\"%d\", a);", "printf(\"%d\", a + 2);"],
      output: "5 then 7"
    },
    {
      type: "door", name: "The Main Gate", kind: "number", time: 120,
      prompt: "What number does this show?",
      code: ["int x = 4;", "int y = x * 3;", "x = x + 2;", "printf(\"%d\", x + y);"],
      answer: 18,
      hint: "Work out y first. What is x at that exact moment?",
      trace: [["int x = 4;", "x is 4"], ["int y = x * 3;", "y is 12"], ["x = x + 2;", "x is 6"], ["printf(x + y)", "6 + 12 = 18"]],
      note: "Said 24? y was worked out when x was still 4. It doesn’t update itself.",
      letter: "C"
    },

    // ---------- Door 2 ----------
    {
      type: "learn", door: 2,
      title: "if-else makes decisions. Only one block runs.",
      points: [["if (condition)", "True? This block runs"], ["else if / else", "Not true? Try the next one"], ["The first true one wins", "Everything after it is skipped"]],
      highlightLast: true,
      code: ["int marks = 50;", "if (marks >= 35) {", "    printf(\"Pass\");", "} else {", "    printf(\"Fail\");", "}"],
      output: "Pass"
    },
    {
      type: "door", name: "The Attendance Door", kind: "choice", time: 120,
      prompt: "Which letter does this show?",
      code: ["int attendance = 72;", "if (attendance >= 75) {", "    printf(\"A\");", "} else if (attendance >= 65) {", "    printf(\"B\");", "} else {", "    printf(\"C\");", "}"],
      options: ["A", "B", "C"], answer: 1,
      hint: "Check each condition from the top. Stop at the first one that’s true.",
      trace: [["72 >= 75 ?", "No, skip A"], ["72 >= 65 ?", "Yes! Show B"], ["else", "Never checked"]],
      note: "The first true condition wins. C stops checking after that.",
      letter: "O"
    },

    // ---------- Door 3 ----------
    {
      type: "learn", door: 3,
      title: "A for loop repeats code",
      points: [["for (start; keep going while; change)", "The three parts of every for loop"], ["i++ means “add 1”", "Same as i = i + 1"], ["Pro tip", "Write every value of i on paper"]],
      highlightLast: true,
      code: ["for (int i = 1; i <= 3; i++) {", "    printf(\"%d \", i);", "}"],
      output: "1 2 3"
    },
    {
      type: "door", name: "The Loop Lock", kind: "number", time: 120,
      prompt: "What number does this show?",
      code: ["int count = 0;", "for (int i = 0; i < 10; i = i + 3) {", "    count++;", "}", "printf(\"%d\", count);"],
      answer: 4,
      hint: "i starts at 0 and jumps by 3. Write each value down until it’s no longer less than 10.",
      trace: [["i = 0", "count is 1"], ["i = 3", "count is 2"], ["i = 6", "count is 3"], ["i = 9", "count is 4"], ["i = 12", "not less than 10, stop"]],
      note: "Writing down each value of i is called tracing. Real coders do it all the time.",
      letter: "D"
    },

    // ---------- Door 4 ----------
    {
      type: "learn", door: 4,
      title: "A bug is a mistake in code",
      points: [["Bug 1: the missing ;", "Every line in C ends with a semicolon"], ["Bug 2: = is not ==", "One = PUTS a value in a box. Two == ASKS “is it equal?”"], ["The secret", "In C, 0 means false. Any other number means true"]],
      highlightLast: true,
      code: ["marks = 35;    // puts 35 in marks", "marks == 35    // asks: is it 35?"],
      output: "= puts, == asks"
    },
    {
      type: "door", name: "The Trap Door", kind: "bug", time: 120,
      prompt: "What does it show? And which line has the bug?",
      code: ["int marks = 20;", "if (marks = 35) {", "    printf(\"Pass\");", "} else {", "    printf(\"Fail\");", "}"],
      outputOptions: ["Pass", "Fail"], outputAnswer: 0, bugLine: 1,
      bugText: "marks = 35 should be marks == 35",
      hint: "Look very closely at the equals sign inside the if. What does C think of the number 35?",
      trace: [["if (marks = 35)", "puts 35 in marks"], ["", "35 is not 0, so: true → Pass"], ["if (marks == 35)", "the fix: compare"], ["", "20 is not 35 → Fail"]],
      note: "Most people say Fail. Real programmers make this exact mistake too. Now you’ll spot it.",
      letter: "E"
    },

    // ---------- Door 5 ----------
    {
      type: "learn", door: 5,
      title: "An array is a row of boxes. Counting starts at 0.",
      points: [["int a[4] = {10, 20, 30, 40};", "4 boxes under one name"], ["Each box has an index", "a[0], a[1], a[2], a[3]"], ["The first box is a[0]", "Not a[1]! Most array mistakes start here"]],
      highlightLast: true,
      code: ["int a[4] = {10, 20, 30, 40};", "printf(\"%d\", a[0]);", "printf(\"%d\", a[3]);"],
      boxes: [10, 20, 30, 40],
      output: "10 then 40"
    },
    {
      type: "door", name: "The Final Boss", kind: "number", time: 150, double: true,
      prompt: "What number does this show?",
      code: ["int a[5] = {2, 4, 6, 8, 10};", "a[1] = a[0] + a[4];", "a[3] = a[1] - 5;", "printf(\"%d\", a[3]);"],
      answer: 7,
      hint: "Label the boxes 0 to 4 on paper first. Then do one line at a time.",
      trace: [["index: 0  1  2  3  4", ""], ["value: 2  4  6  8  10", ""], ["a[1] = a[0] + a[4]", "2 + 10 = 12"], ["a[3] = a[1] - 5", "12 - 5 = 7"]],
      note: "Got 5? You counted from 1. Bonus: in Python this array is a = [2, 4, 6, 8, 10].",
      letter: "R"
    },

    { type: "key" },
    {
      type: "end",
      joinTitle: "Join the EduMoon Coding Club",
      joinText: "A new coding challenge every week, with 1,000+ students. Practise today’s code on the Programiz app.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
