// Bug Hunt (EduMoon Coding Club). For 2nd and 3rd year. The next step after Escape the Lab.
// The lab exam is tomorrow and every program almost works. Teams find the bug in 6 rounds of C.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end
// Door kinds: "bug" (pick what happens, then tap the buggy line), "choice", "number"

const BUG = { kind: "bug", time: 75, step1: "What happens when it runs?", step2: "Tap the buggy line", say1: "First pick what happens.", say2: "Now tap the line with the bug." };
const Q = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 60, board: false, eyebrow: `Round ${round} · ${name}` }, extra);

// The take-home card: 10 C bugs and their fixes.
const BUGS = [
  ["= inside if", "Use == to compare. = changes the value."],
  ["i <= size", "Arrays go from 0 to size − 1. Use i < size."],
  ["scanf without &", "scanf(\"%d\", &n). Strings (char arrays) don’t need &."],
  ["Missing break", "Each case runs into the next until it hits a break."],
  ["A loop that never ends", "Check the start, the condition and the change."],
  ["; after while, for or if", "It ends the statement. The block below isn’t part of it."],
  ["int / int", "7 / 2 is 3. Use 2.0 or (float) to keep the decimal."],
  ["Variable with no start value", "Always write int sum = 0; before adding to it."],
  ["Missing ; at the end", "The error often points to the NEXT line. Look one line up."],
  ["Wrong format in printf", "%d int, %f float, %c char, %s string."]
];

window.GAME = {
  id: "bug-hunt",
  title: "Bug Hunt",
  club: "Coding Club",
  tagline: "The lab exam is tomorrow. Every program almost works. Find the bugs.",
  art: window.STORY_ART,
  guide: {
    years: "2nd and 3rd year (1st years who finished Escape the Lab can join)", time: "40 minutes", level: "Medium", mono: true,
    about: "The lab exam is tomorrow, and the 6 practice programs all have bugs. In each round, teams learn one classic C mistake, then hunt it: pick what the program does, tap the buggy line, choose the right fix and predict the output. The game ends with debugger ranks and a “10 C bugs” card.",
    outcomes: "The 10 mistakes that cost the most marks in lab exams and coding tests, and a habit of reading code line by line like the computer does.",
    tone: "Bugs are normal: every programmer writes them every day. Celebrate teams that find the bug even if they pick the wrong output. When you reveal, trace the code aloud line by line; that’s the real skill being taught.",
    extra: [["Need a laptop?", "No. Everything runs on phones or on the Screen Deck. If you have one, you can run a program live in an online C compiler after the reveal to prove the answer."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Squashed",
    rulesEyebrow: "How Bug Hunt works", rulesTitle: "Learn the bug. Hunt it. Squash it.",
    learnText: "The host shows one classic C bug.", crackTitle: "Hunt",
    crackText: "Find the bug on your phone and lock it in.",
    rulesExtra: "Bug questions: <b>100</b> for what happens + <b>100</b> for the line. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. This bug fools real programmers too!", cracked: "squashed it",
    next: "Next round →", finale: "Next →", winner: "are today’s top bug hunters!", endLine: "All bugs squashed. Good luck in the lab exam!"
  },
  offerEyebrow: "EduMoon Coding Club · Debugger ranks",
  offerTitle: "Your debugger rank",
  offers: [
    { min: 0.7, icon: "trophy", title: "Senior Debugger", text: "You read code like the compiler does. Help a friend before the exam." },
    { min: 0.45, icon: "code", title: "Bug Hunter", text: "Strong! Revise the 10 bugs below and you’re exam ready." },
    { min: 0.2, icon: "search", title: "Junior Debugger", text: "Good start. Trace one program line by line every day this week." },
    { min: 0, icon: "book-open", title: "Bug Spotter", text: "Everyone starts here. Play Escape the Lab again, then come back." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Coding Club · Lab exam tomorrow",
      title: "Your lab exam is tomorrow. All 6 practice programs have bugs. Can your team fix them in time?",
      cards: [["code", "6 real C programs that almost work"], ["search", "Find the buggy line and what it does"], ["trophy", "Your score decides your debugger rank"]]
    },
    { type: "rules" },

    // ---------- Round 1: = vs == ----------
    {
      type: "learn", door: 1,
      title: "= puts a value in. == compares.",
      points: [["x = 5", "Puts 5 into x"], ["x == 5", "Asks: is x equal to 5? Gives true or false"], ["The trap", "if (x = 5) puts 5 in x, and 5 is not 0, so C treats it as true. Always."]],
      highlightLast: true,
      code: ["int x = 3;", "if (x = 5) printf(\"yes\");", "else printf(\"no\");"],
      output: "yes (and x is now 5)"
    },
    Q(1, "= vs ==", Object.assign({}, BUG, {
      prompt: "A login check. What happens, and which line has the bug?",
      code: ["int otp = 4821;", "int typed = 1234;", "if (typed = otp) {", "    printf(\"Login OK\");", "} else {", "    printf(\"Wrong OTP\");", "}"],
      outputOptions: ["Login OK", "Wrong OTP"], outputAnswer: 0, bugLine: 2,
      bugText: "typed = otp copies 4821 into typed. 4821 is not 0, so it’s true. Fix: typed == otp",
      hint: "Look at the equals sign inside the if. What does it do to typed?",
      trace: [["typed = otp", "typed becomes 4821"], ["if (4821)", "not 0, so true"], ["", "prints Login OK, even with the wrong OTP!"]],
      note: "A wrong OTP logged in. In real apps, this one character is a security hole.", badge: "lock"
    })),
    Q(1, "= vs ==", {
      prompt: "What’s the correct fix for line 3?",
      options: ["if (typed == otp)", "if (typed === otp)", "if (typed := otp)", "if (typed = = otp)"], answer: 0,
      hint: "C has one way to ask “is it equal?”",
      note: "== in C. === is JavaScript, := is Python/Go, and = = with a space is an error.", badge: "check"
    }),
    Q(1, "= vs ==", {
      prompt: "What does this print?",
      code: ["int x = 5;", "if (x = 0) {", "    printf(\"zero\");", "} else {", "    printf(\"%d\", x);", "}"],
      options: ["zero", "5", "0", "Error"], answer: 2,
      hint: "Two things happen in line 2: x changes, then the if checks the new value.",
      note: "x = 0 makes x zero, and 0 means false, so the else runs and prints x, which is now 0.", badge: "zap",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: off by one ----------
    {
      type: "learn", door: 2,
      title: "An array of 5 goes from [0] to [4]. There is no [5].",
      points: [["int a[5];", "5 boxes: a[0], a[1], a[2], a[3], a[4]"], ["The last index", "Always size − 1"], ["The trap", "i <= 5 reads a[5], memory that isn’t yours. You get garbage or a crash"]],
      highlightLast: true,
      code: ["int a[5] = {1, 2, 3, 4, 5};", "for (int i = 0; i < 5; i++)", "    printf(\"%d \", a[i]);"],
      output: "1 2 3 4 5"
    },
    Q(2, "Off by One", Object.assign({}, BUG, {
      prompt: "Adding up 5 subject marks. What happens, and which line has the bug?",
      code: ["int marks[5] = {70, 82, 65, 90, 58};", "int sum = 0;", "for (int i = 0; i <= 5; i++) {", "    sum = sum + marks[i];", "}", "printf(\"%d\", sum);"],
      outputOptions: ["365, the correct total", "A wrong total, or a crash", "0"], outputAnswer: 1, bugLine: 2,
      bugText: "i <= 5 also reads marks[5], which doesn’t exist. Fix: i < 5",
      hint: "How many marks are there? How many times does the loop run?",
      trace: [["i = 0 to 4", "70 + 82 + 65 + 90 + 58 = 365"], ["i = 5", "marks[5] is outside the array"], ["", "garbage gets added, or the program crashes"]],
      note: "The program runs one extra time. It’s called an off-by-one error, and it’s one of the most common bugs in the world.", badge: "list-checks"
    })),
    Q(2, "Off by One", {
      kind: "number",
      prompt: "How many stars does this print?",
      code: ["for (int i = 1; i <= 10; i += 2) {", "    printf(\"*\");", "}"],
      answer: 5,
      hint: "Write down every value of i: 1, 3, …",
      trace: [["i = 1, 3, 5, 7, 9", "5 values"], ["i = 11", "11 <= 10 is false, so it stops"]],
      note: "1, 3, 5, 7, 9. Five stars. Counting loop runs by writing the values is the fastest way to avoid off-by-one mistakes.", badge: "star"
    }),
    Q(2, "Off by One", {
      prompt: "An array has 8 elements. What’s the index of the last one?",
      options: ["8", "7", "9", "0"], answer: 1,
      hint: "The first one is [0].",
      note: "Size 8 means indexes 0 to 7. Last index = size − 1.", badge: "target",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: scanf and & ----------
    {
      type: "learn", door: 3,
      title: "scanf needs to know WHERE to put the value.",
      points: [["&age", "Means “the address of age”: where the box is in memory"], ["scanf(\"%d\", &age);", "Read a number and put it in age’s box"], ["The exception", "A string (char name[20]) is already an address. No & needed"]],
      highlightLast: true,
      code: ["int age;", "scanf(\"%d\", &age);", "printf(\"%d\", age);"],
      output: "Whatever you typed, like 19"
    },
    Q(3, "scanf and &", Object.assign({}, BUG, {
      prompt: "Reading your age. What happens, and which line has the bug?",
      code: ["int age;", "printf(\"Enter age: \");", "scanf(\"%d\", age);", "printf(\"You are %d\", age);"],
      outputOptions: ["It prints the age correctly", "It may crash or print garbage", "It asks for the age twice"], outputAnswer: 1, bugLine: 2,
      bugText: "scanf got the value inside age, not its address. Fix: scanf(\"%d\", &age);",
      hint: "Which line forgot to say where age lives?",
      note: "Without &, scanf writes to a random place in memory. Many compilers only warn you, so it slips into lab exams.", badge: "alarm-clock"
    })),
    Q(3, "scanf and &", {
      prompt: "Which line correctly reads a number into n?",
      options: ["scanf(\"%d\", n);", "scanf(&n, \"%d\");", "scanf(\"%d\", &n);", "scanf(\"%d\" &n);"], answer: 2,
      hint: "Format first, then the address, with a comma between them.",
      note: "Format string first, then a comma, then &n.", badge: "check"
    }),
    Q(3, "scanf and &", {
      prompt: "char name[20]; Which line reads one word into name?",
      options: ["scanf(\"%s\", name);", "scanf(\"%d\", &name);", "scanf(\"%c\", name);", "scanf(name);"], answer: 0,
      hint: "%s is for strings. Does an array need &?",
      note: "%s for a string, and no & because an array’s name is already its address. (It reads one word: it stops at a space.)", badge: "file-text",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Explain to the room: why does scanf need the & but printf doesn’t?", note: "Hint: printf only needs to READ the value. scanf needs to WRITE into the box.", points: 100 },

    // ---------- Round 4: switch and break ----------
    {
      type: "learn", door: 4,
      title: "Without break, a switch keeps falling into the next case.",
      points: [["case 1:", "Where to START running when the value is 1"], ["break;", "Where to STOP. Jump out of the switch"], ["The trap", "No break: C runs every case below until it finds one"]],
      highlightLast: true,
      code: ["switch (n) {", "    case 1: printf(\"one\"); break;", "    case 2: printf(\"two\"); break;", "}"],
      output: "n = 1 prints one. Only one."
    },
    Q(4, "Missing break", Object.assign({}, BUG, {
      prompt: "A timetable app. What does it print, and which line has the bug?",
      code: ["int day = 1;", "switch (day) {", "    case 1: printf(\"Mon \");", "    case 2: printf(\"Tue \");", "        break;", "    default: printf(\"Other \");", "}"],
      outputOptions: ["Mon", "Mon Tue", "Mon Tue Other"], outputAnswer: 1, bugLine: 2,
      bugText: "case 1 has no break, so it falls into case 2. Fix: case 1: printf(\"Mon \"); break;",
      hint: "Start at case 1. Where is the first break?",
      trace: [["case 1", "prints Mon, no break"], ["case 2", "prints Tue, then break"], ["", "Mon Tue"]],
      note: "Monday printed Tuesday too. Put a break at the end of every case unless you really want it to fall through.", badge: "clock"
    })),
    Q(4, "Missing break", {
      kind: "number",
      prompt: "How many words does this print?",
      code: ["int n = 2;", "switch (n) {", "    case 1: printf(\"one \");", "    case 2: printf(\"two \");", "    case 3: printf(\"three \");", "    default: printf(\"many \");", "}"],
      answer: 3,
      hint: "Start at case 2. Is there a break anywhere?",
      trace: [["case 2", "two"], ["case 3", "three"], ["default", "many"]],
      note: "two three many. With no breaks at all, it runs everything from case 2 to the end.", badge: "list-checks"
    }),
    Q(4, "Missing break", {
      prompt: "When is it okay to leave out break on purpose?",
      options: ["Never, it’s always a bug", "Only in the default case", "When two cases should run the same code, like case 'a': case 'A':", "When the program is short"], answer: 2,
      hint: "Think of a menu where both small and capital letters do the same thing.",
      note: "Stacking cases is a real, useful trick: case 'a': case 'A': printf(\"Add\"); break;", badge: "lightbulb",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: loops that never end ----------
    {
      type: "learn", door: 5,
      title: "Every loop needs a way to stop.",
      points: [["Start and condition", "Where does the counter begin, and when does it stop?"], ["Change", "Does each run move the counter TOWARDS stopping?"], ["The sneaky one", "while (i < 5); with a semicolon is an empty loop that never ends"]],
      highlightLast: true,
      code: ["int i = 1;", "while (i <= 3) {", "    printf(\"%d \", i);", "    i++;", "}"],
      output: "1 2 3"
    },
    Q(5, "Never-Ending Loops", Object.assign({}, BUG, {
      prompt: "Printing 1 to 5. What happens, and which line has the bug?",
      code: ["int i = 1;", "while (i <= 5) {", "    printf(\"%d \", i);", "    i--;", "}"],
      outputOptions: ["1 2 3 4 5", "1 0 -1 -2 … and it doesn’t stop", "Nothing"], outputAnswer: 1, bugLine: 3,
      bugText: "i-- moves i away from 5, so i <= 5 stays true. Fix: i++",
      hint: "Is i moving towards 5 or away from it?",
      note: "The change goes the wrong way. Check: start 1, condition i <= 5, change… down? That never reaches the end.", badge: "route"
    })),
    Q(5, "Never-Ending Loops", {
      prompt: "What does this do?",
      code: ["int i = 0;", "while (i < 3);", "{", "    printf(\"Hi \");", "    i++;", "}"],
      options: ["Prints Hi Hi Hi", "Prints Hi once", "Gets stuck and prints nothing", "Compile error"], answer: 2,
      hint: "Look at the very end of line 2.",
      note: "The ; makes an empty loop: “while i < 3, do nothing”. i never changes, so it’s stuck forever before reaching the block.", badge: "alarm-clock"
    }),
    Q(5, "Never-Ending Loops", {
      kind: "number",
      prompt: "How many stars does this print?",
      code: ["for (int i = 10; i > 0; i -= 3) {", "    printf(\"*\");", "}"],
      answer: 4,
      hint: "Write the values: 10, 7, …",
      trace: [["i = 10, 7, 4, 1", "4 values"], ["i = -2", "-2 > 0 is false, so it stops"]],
      note: "10, 7, 4, 1. Four stars. Going down works too, as long as the condition checks the right direction.", badge: "star",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: the final mix (double) ----------
    {
      type: "learn", door: 6,
      title: "The final round: three bugs that hide in plain sight.",
      points: [["int / int", "7 / 2 is 3. The decimal is thrown away before it’s stored"], ["No start value", "int sum; holds whatever was in memory before"], ["; after for", "The loop runs, but the line below isn’t part of it"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game!"], ["search", "3 mixed bugs", "Any of the tricks so far"], ["trophy", "Then the debugger ranks", "Where does your team land?"]] }
    },
    Q(6, "Final Mix", Object.assign({}, BUG, {
      double: true,
      prompt: "The average of two marks. What does it print, and which line has the bug?",
      code: ["int a = 7, b = 8;", "float avg = (a + b) / 2;", "printf(\"%.1f\", avg);"],
      outputOptions: ["7.5", "7.0", "8.0"], outputAnswer: 1, bugLine: 1,
      bugText: "(a + b) / 2 is int / int, so 15 / 2 = 7 before it becomes a float. Fix: / 2.0",
      hint: "Both sides of the / are ints. What happens to the .5?",
      trace: [["a + b", "15"], ["15 / 2", "7 (int division)"], ["avg", "7.0"]],
      note: "Storing it in a float is too late; the decimal was already lost. Use 2.0 or (float)(a + b) / 2.", badge: "chart-column"
    })),
    Q(6, "Final Mix", Object.assign({}, BUG, {
      double: true,
      prompt: "Adding 1 + 2 + 3. What does it print, and which line has the bug?",
      code: ["int sum;", "for (int i = 1; i <= 3; i++) {", "    sum = sum + i;", "}", "printf(\"%d\", sum);"],
      outputOptions: ["6", "It could be any number", "0"], outputAnswer: 1, bugLine: 0,
      bugText: "sum never got a start value, so it starts with leftover garbage. Fix: int sum = 0;",
      hint: "What is sum before the loop starts?",
      note: "Sometimes it prints 6 by luck, which makes this bug extra sneaky. Always start totals at 0 and products at 1.", badge: "shield"
    })),
    Q(6, "Final Mix", {
      double: true,
      prompt: "What does this print?",
      code: ["for (int i = 0; i < 3; i++);", "    printf(\"Hi \");"],
      options: ["Hi Hi Hi", "Hi", "Nothing", "Compile error"], answer: 1,
      hint: "Where does the for loop end?",
      note: "The ; ends the loop, so it runs 3 times doing nothing. Then printf runs once. The indent fools your eyes, not the compiler.", badge: "search",
      board: true, boardLabel: "after Round 6"
    }),

    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "Which bug from today have YOU made before? Tell the story in 30 seconds.", note: "The most honest (and funniest) story wins. Every programmer has one.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "The 10 C Bugs Checklist", note: "Screenshot this. Check every program against it before your lab exam.", items: BUGS },
    {
      type: "end",
      joinTitle: "Join the EduMoon Coding Club",
      joinText: "Escape rooms, bug hunts and placement rounds every week. Learn to code by playing.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
