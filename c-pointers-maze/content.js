// C Pointers Maze (EduMoon Coding Club). Advanced: for 2nd year onwards who know C functions and arrays.
// The topic that scares everyone: addresses and pointers, pass by reference, pointers and arrays, pointer arithmetic with strings, malloc and free, and the classic pointer bugs.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end
// Door kinds: "choice", "number", "bug" (pick what happens, then tap the buggy line)

const PM = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 70, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const PMN = (round, name, extra) => PM(round, name, Object.assign({ kind: "number", time: 80 }, extra));
const PBG = { kind: "bug", time: 90, step1: "What happens when it runs?", step2: "Tap the buggy line", say1: "First pick what happens.", say2: "Now tap the line with the bug." };

// The take-home card: 10 pointer rules.
const PTR = [
  ["&x", "The address of x: where it lives in memory."],
  ["int *p = &x;", "p stores the address of x. p points to x."],
  ["*p", "Go to the address and use the value there. *p = 5 changes x."],
  ["Pass by reference", "swap(&a, &b) with void swap(int *a, int *b) changes the real variables."],
  ["arr[i] is *(arr + i)", "An array name acts like a pointer to its first element."],
  ["p++", "Moves to the next element, not the next byte."],
  ["while (*s)", "Walks a string until the '\\0' at the end."],
  ["malloc and free", "Ask for memory at run time, check for NULL, always free it once."],
  ["Never use", "An uninitialised pointer, a NULL pointer, or memory after free."],
  ["Draw boxes", "Draw variables as boxes and pointers as arrows. It solves most pointer puzzles."]
];

window.GAME = {
  id: "c-pointers-maze",
  title: "C Pointers Maze",
  club: "Coding Club",
  tagline: "The C topic that scares everyone. Walk through the maze and come out a pointer master.",
  art: window.STORY_ART,
  guide: {
    years: "2nd year onwards (after C Functions and Strings)", time: "45 minutes", level: "Advanced", mono: true,
    about: "Rahul is back. His swap function failed in C Functions and Strings, and now his senior says, “You need pointers.” In 6 rounds, teams learn addresses and pointers, pass by reference, how arrays and pointers connect, pointer arithmetic on strings, malloc and free, and the classic pointer bugs: uninitialised pointers, NULL, memory leaks and dangling pointers. Every question is real C that teams trace by hand.",
    outcomes: "Reading and tracing pointer code, using pointers to change variables in functions, the array-pointer link, safe dynamic memory with malloc and free, and spotting the bugs that crash C programs.",
    tone: "Pointers confuse almost everyone at first. Draw boxes for variables and arrows for pointers on the board during every reveal. Go slower than usual and praise teams that explain their trace.",
    extra: [["Draw it", "For every reveal, draw the variables as boxes with their values, and pointers as arrows. This one habit makes pointers click."]]
  },
  words: {
    round: "Room", unlocked: "Answer", badgeLabel: "Escaped",
    rulesEyebrow: "How C Pointers Maze works", rulesTitle: "Six rooms. Every door is locked by a pointer puzzle.",
    learnText: "The host explains how this room’s pointer trick works.", crackTitle: "Trace",
    crackText: "Trace the pointers and lock in your answer.",
    rulesExtra: "Bug questions: <b>100</b> for what happens + <b>100</b> for the line. Room 6: <b>double</b>!",
    nobody: "Nobody escaped this one. Pointers fool experienced programmers too!", cracked: "escaped",
    next: "Next room →", finale: "Next →", winner: "escaped the pointer maze!", endLine: "Rahul finally understands pointers."
  },
  offerEyebrow: "EduMoon Coding Club · Pointer level",
  offerTitle: "Your pointer level",
  offers: [
    { min: 0.7, icon: "trophy", title: "Pointer Master", text: "You think in addresses. Try implementing a linked list this week." },
    { min: 0.45, icon: "key", title: "Maze Runner", text: "Strong! Redo the swap and string-length programs from memory." },
    { min: 0.2, icon: "route", title: "Path Finder", text: "Good start. Draw boxes and arrows for every program from today." },
    { min: 0, icon: "book-open", title: "Maze Entrant", text: "Everyone starts here. Play C Functions and Strings first." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Coding Club · The pointer maze",
      title: "Rahul’s swap function never worked. His senior says, “You need pointers.” Six rooms, every door locked by a pointer puzzle. Can your team get him out?",
      cards: [["key", "Addresses, arrays, strings and malloc"], ["search", "Trace by hand and find the crash"], ["trophy", "Your score decides your pointer level"]]
    },
    { type: "rules" },

    // ---------- Room 1: Addresses and pointers ----------
    {
      type: "learn", door: 1,
      title: "Every variable lives at an address. A pointer stores an address.",
      points: [["&x", "The address of x"], ["int *p = &x;", "p now points to x"], ["*p", "The value at that address. Changing *p changes x"]],
      highlightLast: true,
      code: ["int x = 7;", "int *p = &x;", "*p = 20;", "printf(\"%d\", x);"],
      output: "20 (x changed through p)"
    },
    PMN(1, "Addresses", {
      prompt: "What does this print?",
      code: ["int a = 5;", "int *p = &a;", "*p = *p + 10;", "printf(\"%d\", a);"],
      answer: 15,
      hint: "*p is a itself.",
      note: "*p is another name for a, so a becomes 5 + 10 = 15.", badge: "key"
    }),
    PMN(1, "Addresses", {
      prompt: "What is the value of a at the end?",
      code: ["int a = 3, b = 9;", "int *p = &a;", "p = &b;", "*p = 1;", "printf(\"%d %d\", a, b);"],
      answer: 3,
      hint: "Where does p point when *p = 1 runs?",
      note: "p moved to b before the assignment, so b became 1 and a stayed 3. The output is “3 1”.", badge: "route"
    }),
    PM(1, "Addresses", {
      prompt: "int x = 4; int *p = &x; What does printf(\"%d\", *p) print, and what is p itself?",
      options: ["4; p holds x’s address", "4; p holds the value 4", "An address; p holds 4", "0; p is empty"], answer: 0,
      hint: "* means “value at”.",
      note: "*p is the value at the address (4). p itself holds the address of x.", badge: "search",
      board: true, boardLabel: "after Room 1"
    }),

    // ---------- Room 2: Pass by reference ----------
    {
      type: "learn", door: 2,
      title: "Pass addresses, and a function can change your variables.",
      points: [["void swap(int *a, int *b)", "Takes two addresses"], ["swap(&x, &y);", "Pass the addresses"], ["Inside: *a and *b", "Work directly on x and y"]],
      highlightLast: true,
      code: ["void swap(int *a, int *b) {", "  int t = *a; *a = *b; *b = t;", "}", "int x = 1, y = 2;", "swap(&x, &y);"],
      output: "x is 2, y is 1"
    },
    PMN(2, "Pass by Reference", {
      prompt: "What does this print?",
      code: ["void addTen(int *n) { *n = *n + 10; }", "int marks = 55;", "addTen(&marks);", "addTen(&marks);", "printf(\"%d\", marks);"],
      answer: 75,
      hint: "It changes marks itself, twice.",
      note: "55 → 65 → 75. Passing the address lets the function change the real variable.", badge: "check"
    }),
    PM(2, "Pass by Reference", Object.assign({}, PBG, {
      prompt: "A function to set a value to zero. What happens, and which line has the bug?",
      code: ["void reset(int *n) {", "  n = 0;", "}", "int score = 50;", "reset(&score);", "printf(\"%d\", score);"],
      outputOptions: ["It prints 0", "It prints 50", "It crashes"], outputAnswer: 1, bugLine: 1,
      bugText: "n = 0 changes the local copy of the address, not the value. Fix: *n = 0;",
      hint: "Does it change the pointer, or what it points to?",
      note: "Without the *, you change where the local pointer points. score is untouched.", badge: "search"
    })),
    PM(2, "Pass by Reference", {
      prompt: "Why does scanf(\"%d\", &age) need the & sign?",
      options: ["To make input faster", "So scanf can write to age", "Because age is a string", "It is just a style choice"], answer: 1,
      hint: "Same idea as swap.",
      note: "scanf needs the address to store the value in your variable. Now you know why!", badge: "lightbulb",
      board: true, boardLabel: "after Room 2"
    }),

    // ---------- Room 3: Pointers and arrays ----------
    {
      type: "learn", door: 3,
      title: "An array name acts like a pointer to its first element.",
      points: [["arr == &arr[0]", "The array name gives the first element’s address"], ["arr[i] == *(arr + i)", "Same thing, two spellings"], ["p++", "Moves to the next element, however many bytes that is"]],
      highlightLast: true,
      code: ["int a[] = {10, 20, 30};", "int *p = a;", "p++;", "printf(\"%d\", *p);"],
      output: "20"
    },
    PMN(3, "Pointers and Arrays", {
      prompt: "What does this print?",
      code: ["int a[] = {5, 10, 15, 20};", "int *p = a;", "printf(\"%d\", *(p + 2));"],
      answer: 15,
      hint: "p + 2 is the third element.",
      note: "*(p + 2) is a[2], which is 15.", badge: "list-checks"
    }),
    PMN(3, "Pointers and Arrays", {
      prompt: "What does this print?",
      code: ["int a[] = {2, 4, 6, 8};", "int *p = a + 1;", "printf(\"%d\", *p + 1);"],
      answer: 5,
      hint: "Careful: *p + 1 is not *(p + 1).",
      note: "p points to 4. *p + 1 adds 1 to the value: 5. *(p + 1) would be 6. Brackets matter.", badge: "zap"
    }),
    PMN(3, "Pointers and Arrays", {
      prompt: "What does this print?",
      code: ["int a[] = {1, 2, 3, 4, 5};", "int sum = 0;", "for (int *p = a; p < a + 5; p++)", "  sum += *p;", "printf(\"%d\", sum);"],
      answer: 15,
      hint: "The pointer walks the whole array.",
      note: "1 + 2 + 3 + 4 + 5 = 15. A pointer can walk an array just like an index.", badge: "route",
      board: true, boardLabel: "after Room 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Explain the difference between p and *p to the room, using a house and its address.", note: "p is the address on the letter; *p is what is inside the house. 20 seconds.", points: 100 },

    // ---------- Room 4: Strings and pointer walking ----------
    {
      type: "learn", door: 4,
      title: "Walk a string with a pointer until '\\0'.",
      points: [["char *s = \"Vizag\";", "s points to 'V'"], ["while (*s)", "Keep going until the '\\0' at the end"], ["s++", "Move to the next character"]],
      highlightLast: true,
      code: ["int len = 0;", "char *s = \"Vizag\";", "while (*s) { len++; s++; }", "printf(\"%d\", len);"],
      output: "5 (your own strlen)"
    },
    PMN(4, "Strings", {
      prompt: "What does this print?",
      code: ["char *s = \"EduMoon\";", "int count = 0;", "while (*s) {", "  if (*s == 'o') count++;", "  s++;", "}", "printf(\"%d\", count);"],
      answer: 2,
      hint: "Count small o’s only.",
      note: "E-d-u-M-o-o-n has two lowercase o’s. M is not counted.", badge: "spell-check"
    }),
    PM(4, "Strings", {
      prompt: "What does this print?",
      code: ["char *s = \"RTIH\";", "s = s + 2;", "printf(\"%s\", s);"],
      options: ["IH", "RT", "TIH", "RTIH"], answer: 0,
      hint: "s now points to the third character.",
      note: "s points at 'I', so %s prints from there to the end: IH.", badge: "zap"
    }),
    PM(4, "Strings", Object.assign({}, PBG, {
      prompt: "Changing the first letter of a word. What happens, and which line has the bug?",
      code: ["char *name = \"ravi\";", "name[0] = 'R';", "printf(\"%s\", name);"],
      outputOptions: ["It prints Ravi", "Undefined behaviour: it may crash", "It prints ravi"], outputAnswer: 1, bugLine: 0,
      bugText: "a string literal may sit in read-only memory, so changing it is undefined. Fix: char name[] = \"ravi\";",
      hint: "Where does a string literal live?",
      note: "char name[] makes your own copy you can change. char *name = \"…\" points at a literal you must not modify.", badge: "alarm-clock",
      board: true, boardLabel: "after Room 4"
    })),

    // ---------- Room 5: malloc and free ----------
    {
      type: "learn", door: 5,
      title: "malloc asks for memory at run time. free gives it back.",
      points: [["int *a = malloc(n * sizeof(int));", "Space for n ints"], ["Check for NULL", "If malloc fails, it returns NULL"], ["free(a);", "Always free once you are done, exactly once"]],
      highlightLast: true,
      code: ["int n = 4;", "int *a = malloc(n * sizeof(int));", "if (a == NULL) return 1;", "for (int i = 0; i < n; i++) a[i] = i * i;", "printf(\"%d\", a[3]);", "free(a);"],
      output: "9"
    },
    PMN(5, "malloc and free", {
      prompt: "On a system where an int is 4 bytes, how many bytes does malloc(10 * sizeof(int)) ask for?",
      answer: 40,
      hint: "10 × 4.",
      note: "40 bytes for 10 ints. Using sizeof keeps it correct on any system.", badge: "chart-column"
    }),
    PM(5, "malloc and free", {
      prompt: "A program calls malloc inside a loop 1,000 times but never calls free. What is the problem?",
      options: ["A syntax error", "A faster program", "A NULL pointer", "A memory leak"], answer: 3,
      hint: "Memory taken but never returned.",
      note: "A memory leak: memory keeps growing. Long-running programs can slow down or crash.", badge: "alarm-clock"
    }),
    PM(5, "malloc and free", {
      prompt: "Why check if (a == NULL) after malloc?",
      options: ["malloc always returns NULL", "It frees the memory", "malloc may return NULL", "It makes the array bigger"], answer: 2,
      hint: "What if there is no memory left?",
      note: "Using a NULL pointer crashes the program. Always check before using malloc’s result.", badge: "shield",
      board: true, boardLabel: "after Room 5"
    }),

    // ---------- Room 6: Classic pointer bugs (double) ----------
    {
      type: "learn", door: 6,
      title: "The three classic pointer crashes.",
      points: [["Uninitialised pointer", "int *p; *p = 5;  points to random memory"], ["NULL dereference", "int *p = NULL; *p = 5;  instant crash"], ["Dangling pointer", "Using memory after free()"]],
      highlightLast: true,
      code: ["int *p = malloc(sizeof(int));", "free(p);", "p = NULL;   // good habit", "if (p) *p = 3;  // safely skipped"],
      output: "Set pointers to NULL after free"
    },
    PM(6, "Classic Bugs", Object.assign({}, PBG, {
      double: true,
      prompt: "What happens, and which line has the bug?",
      code: ["int *p;", "*p = 42;", "printf(\"%d\", *p);"],
      outputOptions: ["It prints 42", "Undefined behaviour: likely a crash", "It prints 0"], outputAnswer: 1, bugLine: 1,
      bugText: "p was never given an address, so *p writes to random memory. Fix: point p at a real variable or malloc first",
      hint: "Where does p point?",
      note: "An uninitialised pointer holds garbage. Always initialise pointers, even to NULL.", badge: "alarm-clock"
    })),
    PM(6, "Classic Bugs", Object.assign({}, PBG, {
      double: true,
      prompt: "What happens, and which line has the bug?",
      code: ["int *marks = malloc(3 * sizeof(int));", "marks[0] = 90;", "free(marks);", "printf(\"%d\", marks[0]);"],
      outputOptions: ["It always prints 90", "Undefined behaviour: using freed memory", "Compile error"], outputAnswer: 1, bugLine: 3,
      bugText: "marks is a dangling pointer after free. Fix: use the value before free, then set marks = NULL",
      hint: "What happened on the line before?",
      note: "It may even print 90 today, which makes the bug dangerous. After free, that memory is not yours.", badge: "x"
    })),
    PMN(6, "Classic Bugs", {
      double: true,
      prompt: "Final door. What does this print?",
      code: ["int a[] = {3, 6, 9, 12};", "int *p = a;", "int *q = a + 3;", "printf(\"%d\", (int)(q - p) + *q);"],
      answer: 15,
      hint: "q − p counts elements, not bytes.",
      note: "q − p is 3 elements apart, and *q is 12. 3 + 12 = 15. You escaped the maze!", badge: "trophy",
      board: true, boardLabel: "after Room 6"
    }),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best explanation wins +200", prompt: "Explain why swap(x, y) fails but swap(&x, &y) works, as if teaching a junior.", note: "Copies vs addresses, with boxes and arrows if you can. The host picks.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "10 Pointer Rules", note: "Screenshot this. Draw boxes and arrows for every pointer program.", items: PTR },
    {
      type: "end",
      joinTitle: "Join the EduMoon Coding Club",
      joinText: "Coding games, lab help and project nights every week. Learn to code, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
