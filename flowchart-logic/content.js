// Flowchart Logic (EduMoon Coding Club). For 1st years and anyone before their first language.
// Think like a programmer before you type any code: steps, flowchart shapes, decisions, loops, dry runs and fixing broken steps.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end
// Door kinds: "choice", "number", "bug" (relabelled as "find the wrong step")

const FQ = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 45, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const FN = (round, name, extra) => FQ(round, name, Object.assign({ kind: "number", time: 60 }, extra));
const STEP = { kind: "bug", time: 70, step1: "What goes wrong?", step2: "Tap the wrong step", say1: "First pick what goes wrong.", say2: "Now tap the step that causes it.", partO: "what goes wrong", partL: "the step", lineLabel: "step", bugLabel: "The wrong step is" };

// The take-home card: 8 habits of logical thinking.
const LOGIC = [
  ["Write the steps first", "Before any code, write what must happen in plain words, one line per step."],
  ["Order matters", "The same steps in the wrong order give the wrong result."],
  ["Oval, rectangle, diamond, parallelogram", "Start/End, Process, Decision, Input/Output."],
  ["A decision has two exits", "Every diamond needs a Yes path and a No path."],
  ["Every loop needs an exit", "Something must change each time, or it repeats forever."],
  ["Dry run with real numbers", "Pretend you are the computer and write each value on paper."],
  ["Test the edge cases", "Try 0, the exact limit, and the biggest value."],
  ["Same logic, any language", "C, Python and Java only change the spelling. The thinking is the same."]
];

window.GAME = {
  id: "flowchart-logic",
  title: "Flowchart Logic",
  club: "Coding Club",
  tagline: "Before you write code, learn to think in steps. No laptop needed.",
  art: window.STORY_ART,
  guide: {
    years: "1st year (anyone who has not started coding yet)", time: "35 minutes", level: "Beginner", mono: true,
    about: "Anu just joined first year CSE and her first lab asks for a flowchart before any code. In 6 rounds, teams learn what an algorithm is, the four flowchart shapes, decisions, loops, dry runs with real numbers, and how to spot a wrong step. Examples are everyday things: making tea, an ATM, the Siripuram traffic signal and exam results.",
    outcomes: "How to break any problem into clear steps, read and draw a simple flowchart, trace logic by hand, and find mistakes before writing a single line of code.",
    tone: "Many students think they are bad at coding when they have simply never practised thinking in steps. Praise teams for explaining their reasoning, even when the answer is wrong. On every reveal, walk through the steps aloud.",
    extra: [["Chalk or whiteboard?", "If there is a board, draw the four shapes during Round 2 and the loop in Round 4. It helps students who learn by seeing."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Solved",
    rulesEyebrow: "How Flowchart Logic works", rulesTitle: "Learn one idea. Think it through. Lock it in.",
    learnText: "The host explains one idea about thinking in steps.", crackTitle: "Think",
    crackText: "Pick your answer on your phone and lock it in.",
    rulesExtra: "Wrong-step questions: <b>100</b> for what goes wrong + <b>100</b> for the step. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Even experienced programmers slip on this!", cracked: "got it",
    next: "Next round →", finale: "Next →", winner: "are today’s top logic builders!", endLine: "You think like a programmer now."
  },
  offerEyebrow: "EduMoon Coding Club · Logic level",
  offerTitle: "Your logic level",
  offers: [
    { min: 0.7, icon: "trophy", title: "Logic Master", text: "You think in clear steps. You are ready for your first language." },
    { min: 0.45, icon: "route", title: "Flow Builder", text: "Strong! Draw one flowchart a day this week and it will feel natural." },
    { min: 0.2, icon: "compass", title: "Step Finder", text: "Good start. Dry run the examples below on paper tonight." },
    { min: 0, icon: "book-open", title: "Logic Starter", text: "Everyone starts here. Write the steps for making tea, then for an ATM." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Coding Club · First lab",
      title: "Anu’s first programming lab says: “Draw the flowchart before you write any code.” Can your team help her think like a programmer?",
      cards: [["route", "Steps, shapes, decisions and loops"], ["search", "Dry run logic and find the wrong step"], ["trophy", "Your score decides your logic level"]]
    },
    { type: "rules" },

    // ---------- Round 1: Algorithms ----------
    {
      type: "learn", door: 1,
      title: "An algorithm is just a list of clear steps.",
      points: [["Clear", "Each step does one thing. No guessing"], ["In order", "Step 2 must make sense after step 1"], ["It ends", "A good algorithm always finishes"]],
      highlightLast: true,
      code: ["START", "Boil water", "Add tea powder and sugar", "Add milk and boil again", "Strain into a cup", "END"],
      output: "A cup of tea, every time"
    },
    FQ(1, "Algorithms", {
      prompt: "Which of these is the BEST definition of an algorithm?",
      options: ["A programming language used to build apps", "A list of clear steps that solves a problem", "A special computer that solves maths problems", "Any piece of code written in C or Python"], answer: 1,
      hint: "Can you have an algorithm without a computer?",
      note: "A recipe is an algorithm. So are the directions from RTIH to RK Beach. Code is just one way to write it down.", badge: "list-checks"
    }),
    FQ(1, "Algorithms", {
      prompt: "Withdrawing cash at an ATM. Which order is correct?",
      options: ["Enter PIN, insert card, take cash, choose amount", "Insert card, choose amount, enter PIN, take cash", "Insert card, enter PIN, choose amount, take cash", "Choose amount, insert card, take cash, enter PIN"], answer: 2,
      hint: "What does the machine need before it trusts you?",
      note: "Card, then PIN, then amount, then cash. The same steps in a different order do not work. Order matters.", badge: "key"
    }),
    FQ(1, "Algorithms", {
      prompt: "“Make the program find the biggest number.” Why is this NOT yet an algorithm?",
      options: ["It is too short to be an algorithm", "It does not say how: which steps, in which order", "It does not use any numbers at all", "Algorithms can only be written in English"], answer: 1,
      hint: "Could a computer follow it without asking a question?",
      note: "It says what we want, not how. An algorithm would say: take the first number as biggest, compare each next number, keep the bigger one.", badge: "lightbulb",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Flowchart shapes ----------
    {
      type: "learn", door: 2,
      title: "Four shapes draw almost any flowchart.",
      points: [["Oval", "START and END"], ["Rectangle and parallelogram", "Rectangle: do something. Parallelogram: read input or show output"], ["Diamond", "A Yes or No question. It always has two exits"]],
      highlightLast: true,
      code: ["(  START  )        oval", "/ Read marks /     parallelogram", "<  marks >= 35 ? > diamond", "[ total = a + b ]  rectangle", "(  END  )          oval"],
      output: "Shape tells you the kind of step"
    },
    FQ(2, "The Four Shapes", {
      prompt: "Which shape is used for a decision like “Is the signal green?”",
      options: ["An oval", "A rectangle", "A diamond", "A parallelogram"], answer: 2,
      hint: "This shape has two ways out.",
      note: "The diamond asks a Yes or No question. One arrow goes out for Yes and one for No.", badge: "compass"
    }),
    FQ(2, "The Four Shapes", {
      prompt: "“Read the student’s roll number” goes in which shape?",
      options: ["A parallelogram", "A diamond", "An oval", "A circle"], answer: 0,
      hint: "Reading input and showing output share one shape.",
      note: "Input and output use the parallelogram. Reading a roll number is input, printing a result is output.", badge: "pen-tool"
    }),
    FQ(2, "The Four Shapes", {
      prompt: "A flowchart has a diamond with only ONE arrow coming out. What is wrong?",
      options: ["Nothing, one arrow is enough for a diamond", "The diamond should have been drawn as an oval", "Diamonds need three arrows coming out", "The No (or Yes) path is missing"], answer: 3,
      hint: "A question has how many possible answers here?",
      note: "Every decision needs both paths. If the No path is missing, the program does not know what to do when the answer is No.", badge: "search",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Decisions ----------
    {
      type: "learn", door: 3,
      title: "IF the condition is true, do one thing. ELSE, do the other.",
      points: [["IF marks >= 35", "Check a condition that is true or false"], ["ELSE", "What happens when it is false"], ["Only one path runs", "Never both, never neither"]],
      highlightLast: true,
      code: ["READ marks", "IF marks >= 35 THEN", "    PRINT \"Pass\"", "ELSE", "    PRINT \"Fail\"", "END IF"],
      output: "marks = 35 prints Pass"
    },
    FQ(3, "Decisions", {
      prompt: "Using the logic above, what does it print for marks = 34?",
      options: ["Pass", "Fail", "Pass and then Fail", "Nothing at all"], answer: 1,
      hint: "Is 34 greater than or equal to 35?",
      note: "34 >= 35 is false, so the ELSE path runs. Only one path ever runs.", badge: "check"
    }),
    FQ(3, "Decisions", {
      prompt: "A bus pass costs ₹0 for age under 5 and ₹20 for everyone else. Which condition is right?",
      options: ["IF age > 5 THEN fare = 0", "IF age < 5 THEN fare = 0", "IF age = 20 THEN fare = 0", "IF fare < 5 THEN age = 0"], answer: 1,
      hint: "Who travels free?",
      note: "Under 5 means age < 5. A 5-year-old pays ₹20, because 5 < 5 is false. Always check the exact edge.", badge: "map"
    }),
    FQ(3, "Decisions", {
      prompt: "Grades: 75 and above is A, 50 to 74 is B, below 50 is C. Marks = 75. Which grade?",
      options: ["Grade A", "Grade B", "Grade C", "Both A and B"], answer: 0,
      hint: "Read “75 and above” carefully.",
      note: "75 and above includes 75 itself. Edge values like this are where most logic mistakes happen.", badge: "award",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Say the steps for crossing a road at a signal, with one decision in it.", note: "Start, look at the signal, decide, act, end. Clear steps win.", points: 100 },

    // ---------- Round 4: Loops ----------
    {
      type: "learn", door: 4,
      title: "A loop repeats steps until a condition changes.",
      points: [["REPEAT 5 TIMES", "When you know how many times"], ["WHILE condition", "Keep going while something is true"], ["Something must change", "Or the loop never stops"]],
      highlightLast: true,
      code: ["count = 1", "WHILE count <= 3", "    PRINT count", "    count = count + 1", "END WHILE"],
      output: "1 2 3"
    },
    FN(4, "Loops", {
      prompt: "count = 1. WHILE count <= 5: PRINT \"Hi\", count = count + 1. How many times is Hi printed?",
      answer: 5,
      hint: "Count goes 1, 2, 3… when does it stop?",
      note: "It prints for count = 1, 2, 3, 4 and 5. When count becomes 6, the condition is false and the loop ends.", badge: "timer"
    }),
    FQ(4, "Loops", {
      prompt: "count = 1. WHILE count <= 5: PRINT count. (Nothing else.) What happens?",
      options: ["It prints 1 2 3 4 5", "It prints nothing", "It prints 1 forever", "It prints 5 only"], answer: 2,
      hint: "Does count ever change?",
      note: "count stays 1, so the condition is always true. This is an infinite loop. Every loop needs a step that moves it towards the end.", badge: "alarm-clock"
    }),
    FQ(4, "Loops", {
      prompt: "You want to ring the college bell every 45 minutes from 9 AM until classes end. Which is best?",
      options: ["Write “Ring bell” 8 times one after another", "A decision with no loop inside it", "Ring once and stop the program", "A loop: WHILE classes are on, wait 45 min, ring"], answer: 3,
      hint: "What do programmers use when a step repeats?",
      note: "A loop with a clear exit (classes end). Copying the same step many times works once, but breaks as soon as the timetable changes.", badge: "clock",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Dry run ----------
    {
      type: "learn", door: 5,
      title: "A dry run means you play the computer.",
      points: [["Write every variable", "Make a small table on paper"], ["Go line by line", "Update the value after each step"], ["Do not skip", "Your brain jumps ahead. The computer never does"]],
      highlightLast: true,
      code: ["total = 0", "FOR i = 1 TO 4", "    total = total + i", "END FOR", "PRINT total"],
      output: "0+1=1, 1+2=3, 3+3=6, 6+4=10. Prints 10"
    },
    FN(5, "Dry Run", {
      prompt: "total = 0. FOR i = 1 TO 5: total = total + i. What is printed at the end?",
      answer: 15,
      hint: "Add 1 + 2 + 3 + 4 + 5 one at a time.",
      note: "1, 3, 6, 10, 15. Writing each value down is how you catch mistakes in exams too.", badge: "list-checks"
    }),
    FN(5, "Dry Run", {
      prompt: "x = 10. REPEAT 3 TIMES: x = x - 2. What is x at the end?",
      answer: 4,
      hint: "Take away 2, three times.",
      note: "10, then 8, then 6, then 4. Simple, but only if you do every step.", badge: "check"
    }),
    FN(5, "Dry Run", {
      prompt: "big = 0. For each number in 12, 45, 7, 30: IF number > big THEN big = number. What is big?",
      answer: 45,
      hint: "Keep the bigger one each time.",
      note: "12, then 45, then 7 is smaller so 45 stays, then 30 is smaller. This is the “find the biggest” algorithm from Round 1.", badge: "trophy",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Find the wrong step (double) ----------
    {
      type: "learn", door: 6,
      title: "Most bugs are a wrong step, not a wrong language.",
      points: [["Wrong order", "Using a value before you have it"], ["Wrong edge", "< where you needed <="], ["Missing change", "A loop that never ends"]],
      highlightLast: true,
      code: ["PRINT total", "total = a + b", "READ a, b"],
      output: "Wrong order: total is printed before it exists"
    },
    FQ(6, "Find the Wrong Step", Object.assign({}, STEP, {
      double: true,
      prompt: "Finding the average of 3 marks. What goes wrong, and which step causes it?",
      code: ["READ m1, m2, m3", "total = m1 + m2 + m3", "average = total / 2", "PRINT average"],
      outputOptions: ["The average is too big", "The program never ends", "It prints the total instead"], outputAnswer: 0, bugLine: 2,
      bugText: "there are 3 marks, so divide by 3, not 2",
      hint: "How many marks are there?",
      note: "Dividing by 2 makes the average too big. Always check that the numbers in your logic match the problem.", badge: "search"
    })),
    FQ(6, "Find the Wrong Step", Object.assign({}, STEP, {
      double: true,
      prompt: "Printing 1 to 10. What goes wrong, and which step causes it?",
      code: ["n = 1", "WHILE n <= 10", "    PRINT n", "    n = n - 1", "END WHILE"],
      outputOptions: ["It prints 1 to 10 correctly", "It never stops", "It prints only 10"], outputAnswer: 1, bugLine: 3,
      bugText: "n goes down instead of up, so n <= 10 is always true. Fix: n = n + 1",
      hint: "Which way is n moving?",
      note: "n becomes 0, -1, -2… and is always less than 10. The loop never ends. The change step must move towards the exit.", badge: "alarm-clock"
    })),
    FQ(6, "Find the Wrong Step", Object.assign({}, STEP, {
      double: true,
      prompt: "Free entry for students with ID, ₹50 for others. What goes wrong, and which step causes it?",
      code: ["READ hasID", "IF hasID = Yes THEN", "    PRINT \"Pay ₹50\"", "ELSE", "    PRINT \"Free entry\"", "END IF"],
      outputOptions: ["Everyone gets in free", "Students pay and others enter free", "Nobody can get in"], outputAnswer: 1, bugLine: 2,
      bugText: "the two messages are swapped. Students with ID should see Free entry",
      hint: "Read what happens when hasID is Yes.",
      note: "The decision is right but the actions are swapped. Always test both paths with one real example each.", badge: "badge-check",
      board: true, boardLabel: "after Round 6"
    })),

    // ---------- Final challenge, ranks, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "Give the steps to find out if a number is even or odd. Include one decision.", note: "Read the number, divide by 2, check the remainder, print the result, end. The host picks the clearest answer.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "8 Habits of Logical Thinking", note: "Screenshot this. Use it before every lab program.", items: LOGIC },
    {
      type: "end",
      joinTitle: "Join the EduMoon Coding Club",
      joinText: "Coding games, lab help and project nights every week. Learn to code, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
