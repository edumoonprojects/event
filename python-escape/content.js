// Python Escape (EduMoon Coding Club). For 1st and 2nd year. Escape the Lab, in Python.
// 5 locked doors, 5 Python ideas: variables, if/elif, for and range, lists, and a bug door.
// Crack each door to win a letter of the master key.
// Step types used: story · rules · learn · door · speak · key · wordlist · end
// Door kinds: "number" (type a number), "choice" (tap an option), "bug" (pick the output, then tap the buggy line)

// The take-home card: Python vs C, for students learning both.
const VS = [
  ["No semicolons", "Python: print(x)   C: printf(\"%d\", x);"],
  ["Indentation is the block", "Python uses spaces instead of { }. Wrong spaces = error."],
  ["No types to declare", "Python: age = 19   C: int age = 19;"],
  ["// for whole-number division", "7 // 2 is 3. 7 / 2 is 3.5 in Python."],
  ["elif, not else if", "if … elif … else:"],
  ["range(a, b) stops before b", "range(1, 5) gives 1, 2, 3, 4."],
  ["Lists grow by themselves", "marks.append(90). And marks[-1] is the last item."],
  ["= in an if is an error", "Python stops you. C runs it and gives a wrong answer."]
];

window.GAME = {
  id: "python-escape",
  title: "Python Escape",
  club: "Coding Club",
  tagline: "5 locked doors. 1 master key. Only Python gets you out.",
  key: "SNAKE",
  keyTitle: "You escaped. The key was SNAKE.",
  keyLine: "Variables, if/elif, loops, lists and debugging. All in Python, in 30 minutes.",
  art: window.STORY_ART,
  guide: {
    years: "1st and 2nd year · no Python experience needed", time: "35 minutes", level: "Beginner", mono: true,
    about: "Escape the Lab, but in Python, for colleges and students who learn Python first. The computer lab has locked itself. Teams crack 5 doors, each locked by a short Python program: variables and print, if/elif, for loops with range, lists, and a bug door. Each door won gives a letter of the master key, SNAKE.",
    outcomes: "How to read simple Python line by line, the 5 most common beginner traps (// vs /, range stopping early, negative indexes, indentation, = vs ==), and a “Python vs C” card for students who learn both.",
    tone: "Most students in the room may be seeing Python for the first time. Keep the learn screens slow, and trace every reveal line by line. Celebrate every door, even if only one team cracked it.",
    extra: [["Played Escape the Lab?", "Students who played the C version will enjoy comparing. After Door 5, ask: “What would C have done here?” (C runs it and gives a wrong answer; Python stops with an error.)"]]
  },
  steps: [
    {
      type: "story", art: true,
      alert: "Security alert · 6:00 PM",
      title: "The Python lab has locked itself. You’re inside.",
      cards: [["lock", "5 doors stand between you and the exit"], ["code", "Each one is locked by a piece of Python"], ["key", "Crack a door, win a letter of the master key"]]
    },
    { type: "rules" },

    // ---------- Door 1: variables and print ----------
    {
      type: "learn", door: 1,
      title: "Variables are boxes. Code runs top to bottom.",
      points: [["a = 7", "Make a box called a and put 7 inside. No int needed"], ["print(a)", "Show what’s in the box"], ["// and /", "7 // 2 is 3 (whole number). 7 / 2 is 3.5"]],
      highlightLast: true,
      code: ["a = 7", "print(a // 2)", "print(a / 2)"],
      output: "3 then 3.5"
    },
    {
      type: "door", name: "The Main Gate", kind: "number", time: 120,
      prompt: "What number does this print?",
      code: ["a = 7", "b = a // 2", "a = a + b", "print(a)"],
      answer: 10,
      hint: "Work out b first. Is it 3 or 3.5?",
      trace: [["a = 7", "a is 7"], ["b = a // 2", "7 // 2 is 3"], ["a = a + b", "7 + 3 = 10"], ["print(a)", "10"]],
      note: "Said 10.5? // throws away the decimal. That’s the first Python trap.",
      letter: "S"
    },

    // ---------- Door 2: if / elif / else ----------
    {
      type: "learn", door: 2,
      title: "if / elif / else: the first true one wins.",
      points: [["if condition:", "True? Run the indented lines below"], ["elif / else:", "Not true? Try the next one"], ["Indentation matters", "The spaces show which lines belong to which block"]],
      highlightLast: true,
      code: ["marks = 50", "if marks >= 35:", "    print(\"Pass\")", "else:", "    print(\"Fail\")"],
      output: "Pass"
    },
    {
      type: "door", name: "The Grade Door", kind: "choice", time: 120,
      prompt: "Which grade does this print?",
      code: ["marks = 68", "if marks >= 90:", "    print(\"O\")", "elif marks >= 75:", "    print(\"A\")", "elif marks >= 60:", "    print(\"B\")", "else:", "    print(\"C\")"],
      options: ["O", "A", "B", "C"], answer: 2,
      hint: "Check each condition from the top. Stop at the first one that’s true.",
      trace: [["68 >= 90 ?", "No"], ["68 >= 75 ?", "No"], ["68 >= 60 ?", "Yes! Print B"], ["else", "Never reached"]],
      note: "Python checks from the top and stops at the first true one. Only one block runs.",
      letter: "N"
    },

    // ---------- Door 3: for and range ----------
    {
      type: "learn", door: 3,
      title: "for loops repeat. range(a, b) stops BEFORE b.",
      points: [["for i in range(1, 4):", "i is 1, then 2, then 3. Not 4"], ["total += i", "Same as total = total + i"], ["range(5)", "Starts at 0: 0, 1, 2, 3, 4"]],
      highlightLast: true,
      code: ["for i in range(1, 4):", "    print(i)"],
      output: "1 2 3"
    },
    {
      type: "door", name: "The Loop Door", kind: "number", time: 120,
      prompt: "What number does this print?",
      code: ["total = 0", "for i in range(1, 5):", "    total += i", "print(total)"],
      answer: 10,
      hint: "Which values does i take? Does it include 5?",
      trace: [["i = 1", "total 1"], ["i = 2", "total 3"], ["i = 3", "total 6"], ["i = 4", "total 10"], ["i = 5", "never: range stops before 5"]],
      note: "Said 15? range(1, 5) stops before 5. The most common Python loop mistake.",
      letter: "A"
    },
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Explain to the room: what does range(2, 8, 2) give?", note: "Hint: start at 2, go up by 2, stop before 8.", points: 100 },

    // ---------- Door 4: lists ----------
    {
      type: "learn", door: 4,
      title: "Lists hold many values. Counting starts at 0.",
      points: [["marks = [70, 85, 60]", "A list of 3 values"], ["marks[0]", "The first one: 70"], ["marks[-1]", "Negative counts from the end: the last one, 60"]],
      highlightLast: true,
      code: ["marks = [70, 85, 60]", "print(marks[0], marks[-1], len(marks))"],
      output: "70 60 3"
    },
    {
      type: "door", name: "The List Door", kind: "number", time: 120,
      prompt: "What number does this print?",
      code: ["marks = [70, 85, 60, 90]", "print(marks[1] + marks[-1])"],
      answer: 175,
      hint: "marks[1] is not the first item. And marks[-1] is…?",
      trace: [["marks[1]", "85 (the second item)"], ["marks[-1]", "90 (the last item)"], ["85 + 90", "175"]],
      note: "Said 130 (70 + 60)? Index 1 is the SECOND item, and -1 is the LAST item.",
      letter: "K"
    },

    // ---------- Door 5: the bug door (double) ----------
    {
      type: "learn", door: 5,
      title: "Python stops you before some bugs even run.",
      points: [["= puts a value in", "age = 18"], ["== compares", "if age == 18:"], ["Using = in an if", "Python refuses: SyntaxError. (C would run it and give a wrong answer)"]],
      highlightLast: true,
      code: ["age = 18", "if age == 18:", "    print(\"Adult\")"],
      output: "Adult"
    },
    {
      type: "door", name: "The Final Trap", kind: "bug", time: 150, double: true,
      prompt: "What happens? And which line has the bug?",
      code: ["age = 20", "if age = 18:", "    print(\"Adult\")", "print(\"Done\")"],
      outputOptions: ["Adult then Done", "Done", "SyntaxError: the program doesn’t run at all"], outputAnswer: 2, bugLine: 1,
      bugText: "age = 18 should be age == 18",
      hint: "Python reads the whole program before running it. Would it accept = inside an if?",
      trace: [["if age = 18:", "Python refuses: = can’t be used here"], ["", "SyntaxError, nothing runs, not even Done"], ["if age == 18:", "the fix: 20 == 18 is false → prints only Done"]],
      note: "Python catches this one for you. In C, the same mistake runs silently and gives the wrong answer.",
      letter: "E"
    },

    { type: "key" },
    { type: "wordlist", eyebrow: "Take it home", title: "Python vs C: What’s Different", note: "Screenshot this. Especially useful if you’re learning both.", items: VS },
    {
      type: "end",
      joinTitle: "Join the EduMoon Coding Club",
      joinText: "A new coding game every week, in C and Python. Learn by playing, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
