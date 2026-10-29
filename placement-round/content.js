// Placement Round: the content of this game. The engine in ../engine does the rest.
// Step types: story · rules · learn · door · offer · end
// Door kinds: "number" (type a number) or "choice" (tap an option)

window.GAME = {
  id: "placement-round",
  title: "Placement Round",
  club: "Coding Club",
  tagline: "5 rounds of real placement-style coding questions. Which company will hire your team?",
  words: {
    round: "Round", unlocked: "Cleared", badgeLabel: "Round cleared",
    rulesEyebrow: "How the hiring drive works", rulesTitle: "Learn it. Solve it. Get hired.",
    learnText: "The host teaches the topic placement tests ask about.", crackTitle: "Solve",
    crackText: "Solve the question and lock in your answer on the phone.",
    nobody: "Nobody cleared this round. It catches people in real tests too!", cracked: "cleared it",
    next: "Next round →", finale: "Open the offer letters →", winner: "got the best offer!", endLine: "Placement Round complete!"
  },
  offerEyebrow: "EduMoon Tech · Hiring results",
  offerTitle: "Your offer letters are here",
  offers: [
    { min: 0.7, icon: "rocket", title: "Product company offer", text: "Google-level. Your logic is interview ready." },
    { min: 0.45, icon: "briefcase", title: "Top service company offer", text: "Solid! A few more practice rounds and you’re at the top." },
    { min: 0.2, icon: "landmark", title: "Startup offer", text: "Good start. Practise one problem a day." },
    { min: 0, icon: "book-open", title: "Internship offer", text: "Everyone starts here. Keep practising and come back next week!" }
  ],
  steps: [
    {
      type: "story",
      alert: "EduMoon Tech · Hiring drive · Today",
      title: "5 rounds stand between your team and an offer letter.",
      cards: [["file-text", "Real placement-style questions, like TCS, Infosys and Wipro tests"], ["zap", "Faster correct answers score more"], ["briefcase", "Your score decides which company hires you"]]
    },
    { type: "rules" },

    // ---------- Round 1: / and % ----------
    {
      type: "learn", door: 1,
      title: "/ and % : the classic aptitude trap",
      points: [["a / b with whole numbers", "C drops the decimal: 10 / 3 is 3, not 3.33"], ["a % b", "The remainder: 10 % 3 is 1"], ["Tip", "Ask: how many times does it fit, and what’s left over?"]],
      highlightLast: true,
      code: ["printf(\"%d %d\", 10 / 3, 10 % 3);"],
      output: "3 1"
    },
    {
      type: "door", name: "Aptitude", kind: "choice", time: 90,
      prompt: "What does this print?",
      code: ["printf(\"%d %d\", 17 / 5, 17 % 5);"],
      options: ["3 2", "3.4 2", "3 3", "2 3"], answer: 0,
      hint: "How many times does 5 fit into 17? What’s left over?",
      trace: [["17 / 5", "5 fits 3 times → 3"], ["17 % 5", "17 - 15 = 2 left over → 2"]],
      note: "Said 3.4? With int, C throws away the decimal part. This trap is in almost every placement test.",
      badge: "file-text"
    },

    // ---------- Round 2: nested loops ----------
    {
      type: "learn", door: 2,
      title: "Nested loops: a loop inside a loop",
      points: [["The outer loop", "Runs a few times (the rows)"], ["The inner loop", "Runs completely every time the outer loop runs once"], ["Tip", "Count the inner loop for each value of i, then add them up"]],
      highlightLast: true,
      code: ["for (int i = 1; i <= 2; i++) {", "    for (int j = 1; j <= 3; j++) {", "        printf(\"*\");", "    }", "    printf(\"\\n\");", "}"],
      output: "*** then *** (6 stars)"
    },
    {
      type: "door", name: "Pattern Printing", kind: "number", time: 120,
      prompt: "How many stars does this print?",
      code: ["for (int i = 1; i <= 3; i++) {", "    for (int j = 1; j <= i; j++) {", "        printf(\"*\");", "    }", "}"],
      answer: 6,
      hint: "Look closely: the inner loop goes up to i, not to 3. Count for i = 1, 2 and 3.",
      trace: [["i = 1", "inner runs 1 time → *"], ["i = 2", "inner runs 2 times → **"], ["i = 3", "inner runs 3 times → ***"], ["total", "1 + 2 + 3 = 6"]],
      note: "Said 9? The inner loop stops at i, not at 3. This makes a triangle pattern.",
      badge: "star"
    },

    // ---------- Round 3: functions ----------
    {
      type: "learn", door: 3,
      title: "Functions: give inputs, get a value back",
      points: [["int add(int a, int b)", "A function named add that takes two numbers"], ["return a + b;", "Sends the answer back to whoever called it"], ["Inside first", "In f(g(x)), C works out g(x) first, then f"]],
      highlightLast: true,
      code: ["int add(int a, int b) {", "    return a + b;", "}", "printf(\"%d\", add(4, 1));"],
      output: "5"
    },
    {
      type: "door", name: "Functions", kind: "number", time: 120,
      prompt: "What number does this print?",
      code: ["int add(int a, int b) {", "    return a + b;", "}", "int square(int n) {", "    return n * n;", "}", "printf(\"%d\", square(add(2, 3)));"],
      answer: 25,
      hint: "Work from the inside out. What does add(2, 3) give?",
      trace: [["add(2, 3)", "2 + 3 = 5"], ["square(5)", "5 × 5 = 25"]],
      note: "Said 13? That’s 2² + 3². But add runs first, so it’s (2 + 3)².",
      badge: "code"
    },

    // ---------- Round 4: strings ----------
    {
      type: "learn", door: 4,
      title: "Strings are rows of characters",
      points: [["char s[] = \"VIZAG\";", "Each letter sits in its own box"], ["s[0] is V, s[1] is I", "Counting starts at 0, just like arrays"], ["%c", "Prints one character"]],
      highlightLast: true,
      code: ["char s[] = \"VIZAG\";", "printf(\"%c\", s[1]);"],
      output: "I"
    },
    {
      type: "door", name: "Strings", kind: "choice", time: 90,
      prompt: "What does this print?",
      code: ["char s[] = \"CODE\";", "printf(\"%c%c\", s[3], s[0]);"],
      options: ["EC", "DC", "EO", "CE"], answer: 0,
      hint: "Number the letters from 0: C is 0, O is 1…",
      trace: [["index: 0  1  2  3", ""], ["       C  O  D  E", ""], ["s[3]", "E"], ["s[0]", "C"]],
      note: "Said DC? You counted from 1. Index 0 is the first letter.",
      badge: "spell-check"
    },

    // ---------- Round 5: interview ----------
    {
      type: "learn", door: 5,
      title: "Interview favourite: reverse a number",
      points: [["n % 10", "Gives the last digit: 123 % 10 is 3"], ["n / 10", "Removes the last digit: 123 / 10 is 12"], ["Build it up", "Multiply what you have by 10, then add the new digit"]],
      highlightLast: true,
      code: ["printf(\"%d %d\", 123 % 10, 123 / 10);"],
      output: "3 12"
    },
    {
      type: "door", name: "The Interview", kind: "choice", time: 150, double: true,
      prompt: "Which line fills the blank, so 123 becomes 321?",
      code: ["int n = 123, rev = 0;", "while (n > 0) {", "    int d = n % 10;", "    rev = __________;", "    n = n / 10;", "}", "printf(\"%d\", rev);"],
      options: ["rev * 10 + d", "rev + d * 10", "d * 10 + rev", "rev + d"], answer: 0,
      hint: "Try it on paper. After the first loop rev should be 3, after the second 32.",
      trace: [["d = 3", "rev = 0 × 10 + 3 = 3"], ["d = 2", "rev = 3 × 10 + 2 = 32"], ["d = 1", "rev = 32 × 10 + 1 = 321"]],
      note: "Interview tip: explain it out loud, step by step. The host can give +50 to a team that explains it well.",
      badge: "mic"
    },

    { type: "offer" },
    {
      type: "end",
      joinTitle: "Join the EduMoon Coding Club",
      joinText: "Practise one placement problem a day on LeetCode, and play a new challenge every week with 1,000+ students.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
