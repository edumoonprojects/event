// C Functions and Strings (EduMoon Coding Club). For 1st and 2nd year who know C basics (after Escape the Lab or Bug Hunt).
// The next step in C: writing functions, pass by value, void and prototypes, strings as char arrays, string.h functions, and recursion.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end
// Door kinds: "choice", "number", "bug" (pick what it prints, then tap the buggy line)

const CF = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 60, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const CFN = (round, name, extra) => CF(round, name, Object.assign({ kind: "number", time: 70 }, extra));
const CBUG = { kind: "bug", time: 80, step1: "What happens when it runs?", step2: "Tap the buggy line", say1: "First pick what happens.", say2: "Now tap the line with the bug." };

// The take-home card: 10 rules for functions and strings in C.
const CRULES = [
  ["int add(int a, int b)", "Return type, name, then inputs in brackets."],
  ["return", "Sends one value back and ends the function at once."],
  ["Pass by value", "A function gets copies. Changing them does not change the caller’s variables."],
  ["void", "The function returns nothing. Use it for printing or updating through pointers."],
  ["Prototype", "Declare the function above main if you write its body below main."],
  ["char name[] = \"Vizag\";", "A string is a char array ending with '\\0'. 5 letters need 6 bytes."],
  ["strlen(s)", "Counts the characters before '\\0'."],
  ["strcmp(a, b) == 0", "Means the strings are equal. Never compare strings with ==."],
  ["strcpy and strcat", "Copy and join. The destination must be big enough."],
  ["Recursion", "A function that calls itself. It always needs a base case to stop."]
];

window.GAME = {
  id: "c-functions-strings",
  title: "C Functions and Strings",
  club: "Coding Club",
  tagline: "Know the C basics? Level up: functions, strings and your first recursion.",
  art: window.STORY_ART,
  guide: {
    years: "1st and 2nd year (after Escape the Lab or Bug Hunt)", time: "40 minutes", level: "Medium", mono: true,
    about: "Rahul can write loops and if-else in C, but his lab record now needs functions, strings and recursion, and they all behave strangely. In 6 rounds, teams learn how functions return values, why a swap function does not swap, void and prototypes, how strings are stored as char arrays with a hidden '\\0', the string.h functions, and recursion with a base case. They predict outputs and find bugs in real lab-style programs.",
    outcomes: "Writing and reading C functions, understanding pass by value, the '\\0' at the end of every string, using strlen, strcpy, strcat and strcmp correctly, and tracing simple recursion.",
    tone: "These topics confuse many students, so slow down on reveals. Trace the code aloud line by line, and for recursion draw the calls as a stack on the board if you can. Celebrate the teams that explain why, not just what.",
    extra: [["Pre-requisite", "Students should know variables, if, loops and arrays. If many do not, play Escape the Lab first."]]
  },
  words: {
    round: "Round", unlocked: "Output", badgeLabel: "Solved",
    rulesEyebrow: "How C Functions and Strings works", rulesTitle: "Learn the rule. Trace the code. Predict the output.",
    learnText: "The host explains one C idea.", crackTitle: "Predict",
    crackText: "Trace the program and lock in your answer.",
    rulesExtra: "Bug questions: <b>100</b> for what happens + <b>100</b> for the line. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. This one catches lab examiners’ eyes too!", cracked: "traced it",
    next: "Next round →", finale: "Next →", winner: "are today’s C champions!", endLine: "Rahul’s lab record is complete."
  },
  offerEyebrow: "EduMoon Coding Club · C level",
  offerTitle: "Your C level",
  offers: [
    { min: 0.7, icon: "trophy", title: "C Champion", text: "Functions, strings and recursion are yours. Try C Pointers Maze next." },
    { min: 0.45, icon: "code", title: "C Builder", text: "Strong! Write your own strlen and strcmp this week to lock it in." },
    { min: 0.2, icon: "wrench", title: "C Learner", text: "Good start. Trace each program from today on paper." },
    { min: 0, icon: "book-open", title: "C Starter", text: "Everyone starts here. Play Bug Hunt, then come back." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Coding Club · Lab record due",
      title: "Rahul can write loops in C. Now his lab record needs functions, strings and recursion, and every program behaves strangely. Can your team help him?",
      cards: [["code", "Functions, strings and recursion in real C"], ["search", "Predict outputs and find bugs"], ["trophy", "Your score decides your C level"]]
    },
    { type: "rules" },

    // ---------- Round 1: Functions ----------
    {
      type: "learn", door: 1,
      title: "A function is a named block: inputs in, one value out.",
      points: [["int square(int n)", "Returns an int, takes one int called n"], ["return n * n;", "Sends the answer back and ends the function"], ["square(5)", "Calls it. The call becomes 25"]],
      highlightLast: true,
      code: ["int square(int n) {", "    return n * n;", "}", "printf(\"%d\", square(5) + 1);"],
      output: "26"
    },
    CFN(1, "Functions", {
      prompt: "What does this print?",
      code: ["int triple(int x) {", "    return x * 3;", "}", "printf(\"%d\", triple(4) - 2);"],
      answer: 10,
      hint: "Work out triple(4) first.",
      note: "triple(4) returns 12, then 12 − 2 = 10.", badge: "zap"
    }),
    CFN(1, "Functions", {
      prompt: "What does this print?",
      code: ["int check(int m) {", "    if (m >= 35) return 1;", "    return 0;", "    printf(\"never\");", "}", "printf(\"%d\", check(50));"],
      answer: 1,
      hint: "What does return do to the rest of the function?",
      note: "50 >= 35, so it returns 1 and stops. The printf after return never runs.", badge: "check"
    }),
    CF(1, "Functions", {
      prompt: "Which line correctly declares a function that takes two floats and returns their average?",
      options: ["avg float(float a, b)", "float avg(float a, float b)", "float avg(a, b float)", "function avg(float a, float b)"], answer: 1,
      hint: "Return type first, then the name, then typed inputs.",
      note: "Return type, name, then each input with its own type. C has no “function” keyword.", badge: "code",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Pass by value ----------
    {
      type: "learn", door: 2,
      title: "C passes copies. The function cannot change your variables.",
      points: [["Pass by value", "The function gets copies of the values"], ["Changing the copy", "Does not change the original"], ["To change the original", "Pass its address with a pointer (C Pointers Maze)"]],
      highlightLast: true,
      code: ["void addTen(int x) { x = x + 10; }", "int a = 5;", "addTen(a);", "printf(\"%d\", a);"],
      output: "5 (only the copy changed)"
    },
    CFN(2, "Pass by Value", {
      prompt: "What does this print?",
      code: ["void doubleIt(int n) {", "    n = n * 2;", "}", "int marks = 40;", "doubleIt(marks);", "printf(\"%d\", marks);"],
      answer: 40,
      hint: "Did marks itself go into the function, or a copy?",
      note: "Only the copy doubled. marks is still 40. This surprises almost everyone the first time.", badge: "search"
    }),
    CF(2, "Pass by Value", Object.assign({}, CBUG, {
      prompt: "A swap function. What does it print, and which line causes the problem?",
      code: ["void swap(int a, int b) {", "    int t = a; a = b; b = t;", "}", "int x = 1, y = 2;", "swap(x, y);", "printf(\"%d %d\", x, y);"],
      outputOptions: ["2 1", "1 2", "It does not compile"], outputAnswer: 1, bugLine: 0,
      bugText: "the function takes copies, so x and y never change. Fix: void swap(int *a, int *b) and call swap(&x, &y)",
      hint: "Where do a and b come from?",
      note: "The swap happens on copies inside the function. To swap the real variables, you pass their addresses.", badge: "route"
    })),
    CF(2, "Pass by Value", {
      prompt: "How can a function give back a changed value without pointers?",
      options: ["Print the new value inside it", "Change the copy and hope", "Return the new value and store it", "Declare it void"], answer: 2,
      hint: "What does the return keyword do?",
      note: "marks = doubleIt(marks); with return n * 2; works. Return the value and assign it.", badge: "check",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: void and prototypes ----------
    {
      type: "learn", door: 3,
      title: "void means “returns nothing”. Prototypes announce a function early.",
      points: [["void greet()", "Does a job, returns nothing"], ["Prototype: int add(int, int);", "Written above main when the body is below"], ["Without it", "Compilers may warn or give errors"]],
      highlightLast: true,
      code: ["int add(int, int);        // prototype", "int main() { printf(\"%d\", add(2, 3)); }", "int add(int a, int b) { return a + b; }"],
      output: "5"
    },
    CF(3, "void and Prototypes", {
      prompt: "Which function should be declared void?",
      options: ["One that returns the average", "One that counts vowels", "One that finds the maximum", "One that prints a report card"], answer: 3,
      hint: "Which one does not need to send a value back?",
      note: "Printing is a job, not a result. The others calculate something and should return it.", badge: "file-text"
    }),
    CF(3, "void and Prototypes", {
      prompt: "main() calls total() on line 5, but total() is written at the bottom of the file. What should Rahul add above main?",
      options: ["A prototype: int total(int, int);", "Another main() function", "#include <total.h>", "Nothing, C reads the whole file first"], answer: 0,
      hint: "The compiler reads top to bottom.",
      note: "A prototype tells the compiler the function’s name, inputs and return type before it is used.", badge: "list-checks"
    }),
    CF(3, "void and Prototypes", Object.assign({}, CBUG, {
      prompt: "A function to print a line of stars. What happens, and which line has the bug?",
      code: ["void stars(int n) {", "    for (int i = 0; i < n; i++) printf(\"*\");", "    return n;", "}", "stars(3);"],
      outputOptions: ["It prints *** and returns 3", "A compile error or warning", "It prints nothing"], outputAnswer: 1, bugLine: 2,
      bugText: "a void function cannot return a value. Fix: remove the line, or use plain return;",
      hint: "What does void promise?",
      note: "void means no value comes back. Returning n breaks that promise, so the compiler complains.", badge: "x",
      board: true, boardLabel: "after Round 3"
    })),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Explain to the room why the swap function did not swap, in your own words.", note: "Copies, not originals. 20 seconds.", points: 100 },

    // ---------- Round 4: Strings are char arrays ----------
    {
      type: "learn", door: 4,
      title: "In C, a string is a char array that ends with '\\0'.",
      points: [["char city[] = \"Vizag\";", "Stores V i z a g and a hidden '\\0'"], ["5 letters, 6 bytes", "The '\\0' marks the end"], ["city[0] is 'V'", "Indexes start at 0, like any array"]],
      highlightLast: true,
      code: ["char city[] = \"Vizag\";", "printf(\"%c\", city[2]);", "printf(\" %d\", (int)sizeof(city));"],
      output: "z 6"
    },
    CF(4, "Strings", {
      prompt: "What does this print?",
      code: ["char name[] = \"Rahul\";", "printf(\"%c\", name[1]);"],
      options: ["R", "a", "h", "u"], answer: 1,
      hint: "name[0] is the first letter.",
      note: "R is index 0, a is index 1.", badge: "spell-check"
    }),
    CFN(4, "Strings", {
      prompt: "How many bytes does this array take?",
      code: ["char college[] = \"AU\";"],
      answer: 3,
      hint: "Count the hidden character too.",
      note: "A, U and '\\0'. Always leave room for the '\\0' when you size a string array.", badge: "chart-column"
    }),
    CF(4, "Strings", Object.assign({}, CBUG, {
      prompt: "Storing a 5-letter name. What happens, and which line has the bug?",
      code: ["char name[5];", "strcpy(name, \"Kiran\");", "printf(\"%s\", name);"],
      outputOptions: ["It always prints Kiran safely", "Undefined behaviour: it may print junk or crash", "It prints Kira"], outputAnswer: 1, bugLine: 0,
      bugText: "Kiran needs 6 bytes including '\\0'. Fix: char name[6]; or larger",
      hint: "How many bytes does Kiran need?",
      note: "Writing past the end of an array is undefined behaviour. It may seem to work today and crash tomorrow.", badge: "alarm-clock",
      board: true, boardLabel: "after Round 4"
    })),

    // ---------- Round 5: string.h ----------
    {
      type: "learn", door: 5,
      title: "string.h gives you ready-made string tools.",
      points: [["strlen(s)", "Length, not counting '\\0'"], ["strcpy(dest, src), strcat(dest, src)", "Copy and join. dest must be big enough"], ["strcmp(a, b)", "0 means equal. Never use == on strings"]],
      highlightLast: true,
      code: ["char a[20] = \"Vizag\";", "strcat(a, \" Beach\");", "printf(\"%s %d\", a, (int)strlen(a));"],
      output: "Vizag Beach 11"
    },
    CFN(5, "string.h", {
      prompt: "What does this print?",
      code: ["char s[] = \"EduMoon\";", "printf(\"%d\", (int)strlen(s));"],
      answer: 7,
      hint: "Count the letters, not the '\\0'.",
      note: "E-d-u-M-o-o-n: 7. strlen stops at '\\0' and does not count it.", badge: "spell-check"
    }),
    CF(5, "string.h", {
      prompt: "What does strcmp(\"cat\", \"cat\") return?",
      options: ["0", "1", "true", "3"], answer: 0,
      hint: "It measures the difference.",
      note: "0 means no difference: the strings are equal. So the check is if (strcmp(a, b) == 0).", badge: "scale"
    }),
    CF(5, "string.h", Object.assign({}, CBUG, {
      prompt: "Checking a password. What happens, and which line has the bug?",
      code: ["char saved[] = \"vizag123\";", "char typed[20];", "scanf(\"%19s\", typed);", "if (typed == saved) printf(\"Welcome\");", "else printf(\"Wrong\");"],
      outputOptions: ["Welcome when typed correctly", "Wrong, even when typed correctly", "It does not compile"], outputAnswer: 1, bugLine: 3,
      bugText: "== compares addresses, not text. Fix: if (strcmp(typed, saved) == 0)",
      hint: "What does == compare for two arrays?",
      note: "Two different arrays live at different addresses, so == is false even for the same text. Use strcmp.", badge: "lock",
      board: true, boardLabel: "after Round 5"
    })),

    // ---------- Round 6: Recursion (double) ----------
    {
      type: "learn", door: 6,
      title: "Recursion: a function that calls itself, with a base case to stop.",
      points: [["Base case", "if (n == 0) return 1;  stops the calls"], ["Recursive step", "return n * fact(n - 1);  makes the problem smaller"], ["No base case", "It calls itself until the program crashes"]],
      highlightLast: true,
      code: ["int fact(int n) {", "    if (n == 0) return 1;", "    return n * fact(n - 1);", "}", "printf(\"%d\", fact(3));"],
      output: "6 (3 × 2 × 1 × 1)"
    },
    CFN(6, "Recursion", {
      double: true,
      prompt: "What does this print?",
      code: ["int fact(int n) {", "    if (n == 0) return 1;", "    return n * fact(n - 1);", "}", "printf(\"%d\", fact(4));"],
      answer: 24,
      hint: "4 × 3 × 2 × 1.",
      note: "fact(4) = 4 × fact(3) = 4 × 6 = 24.", badge: "zap"
    }),
    CFN(6, "Recursion", {
      double: true,
      prompt: "What does this print?",
      code: ["int sum(int n) {", "    if (n == 0) return 0;", "    return n + sum(n - 1);", "}", "printf(\"%d\", sum(5));"],
      answer: 15,
      hint: "5 + 4 + 3 + 2 + 1 + 0.",
      note: "sum(5) adds 5 + 4 + 3 + 2 + 1 + 0 = 15. Each call waits for the smaller one to finish.", badge: "list-checks"
    }),
    CF(6, "Recursion", Object.assign({}, CBUG, {
      double: true,
      prompt: "A countdown with recursion. What happens, and which line has the bug?",
      code: ["void countdown(int n) {", "    printf(\"%d \", n);", "    countdown(n - 1);", "}", "countdown(3);"],
      outputOptions: ["3 2 1", "It never stops, then crashes", "3 only"], outputAnswer: 1, bugLine: 2,
      bugText: "there is no base case, so it keeps calling with 0, −1, −2… Fix: if (n == 0) return; before printing",
      hint: "What stops the calls?",
      note: "Without a base case, the calls never stop until memory runs out (a stack overflow). Every recursion needs a way out.", badge: "alarm-clock",
      board: true, boardLabel: "after Round 6"
    })),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "Explain how fact(3) works, call by call, until it returns 6.", note: "fact(3) → 3 × fact(2) → 2 × fact(1) → 1 × fact(0) → 1. The host picks the clearest trace.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "10 Rules for Functions and Strings", note: "Screenshot this. Use it while writing your lab record.", items: CRULES },
    {
      type: "end",
      joinTitle: "Join the EduMoon Coding Club",
      joinText: "Coding games, lab help and project nights every week. Learn to code, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
