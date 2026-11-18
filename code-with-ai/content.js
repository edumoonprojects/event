// Code With AI (EduMoon AI Lab). Medium: for 1st year and above.
// Using AI coding assistants well: clear prompts, giving context, reading the code before running it, spotting made-up functions, testing, debugging with AI, keeping secrets safe, and honesty in assignments. Code is in Python.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const CA = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 40, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const CAN = (round, name, extra) => CA(round, name, Object.assign({ kind: "number", time: 55 }, extra));
const CABUG = { kind: "bug", time: 60, step1: "What will this AI-written code print?", step2: "Tap the line with the bug", say1: "First pick the output.", say2: "Now tap the buggy line.", partO: "the output", partL: "the bug", lineLabel: "line", bugLabel: "The bug is on" };

// The take-home card: 8 rules for coding with AI.
const AICARD = [
  ["1. Be specific", "Say the language, input, output and limits. “Python function, list in, number out.”"],
  ["2. Give context", "Paste the error message and the relevant code, not just “it doesn’t work”."],
  ["3. Read before you run", "Understand every line. If you can’t explain it, don’t submit it."],
  ["4. Test it", "Try normal inputs, empty inputs and edge cases like 0 or negative numbers."],
  ["5. Check it exists", "AI can make up functions or libraries. Check the official docs."],
  ["6. No secrets", "Never paste passwords, API keys or private data into a chat."],
  ["7. Learn, don’t copy", "Ask “explain why” so you learn, not just get an answer."],
  ["8. Follow the rules", "If an assignment says no AI, don’t use it. If allowed, say how you used it."]
];

window.GAME = {
  id: "code-with-ai",
  title: "Code With AI",
  club: "AI Lab",
  tagline: "AI wrote your code in 5 seconds. Is it right? Learn to prompt, check and test.",
  art: window.STORY_ART,
  guide: {
    years: "1st year and above", time: "35 minutes", level: "Medium", mono: true,
    about: "Teja asked an AI chatbot to write his lab program. It ran, but gave wrong answers for some inputs, and he couldn’t explain it in the viva. In 6 rounds, teams learn to code with AI the right way: writing clear prompts, giving context, reading AI code, catching made-up functions and bugs, testing and debugging, and keeping secrets and integrity safe. Code examples are in simple Python.",
    outcomes: "How to write good coding prompts, why AI code must be read and tested, how to spot common AI mistakes, how to debug with AI, and the safety and honesty rules for using AI in college.",
    tone: "Positive about AI, strict about checking. The message is not “AI is bad”; it is “you are still the programmer”. Reward teams who explain why an answer is right.",
    extra: [["Live demo", "If you have a projector, ask any AI tool to write a small function live, then test it together with tricky inputs."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Reviewed",
    rulesEyebrow: "How Code With AI works", rulesTitle: "Prompt well. Read the code. Catch the mistake.",
    learnText: "The host explains one rule for coding with AI.", crackTitle: "Review",
    crackText: "Pick your answer on your phone and lock it in.",
    rulesExtra: "Some questions need a typed number. Round 6: <b>double</b>!",
    nobody: "Nobody caught this one. AI mistakes can look very convincing!", cracked: "caught it",
    next: "Next round →", finale: "Next →", winner: "are the real programmers!", endLine: "Teja aced his viva this time."
  },
  offerEyebrow: "EduMoon AI Lab · AI coding level",
  offerTitle: "Your AI coding level",
  offers: [
    { min: 0.7, icon: "trophy", title: "AI Pair Pro", text: "You use AI like a pro. Build one small project with it and explain every line." },
    { min: 0.45, icon: "code", title: "Smart Reviewer", text: "Strong! Test the next AI answer with three tricky inputs." },
    { min: 0.2, icon: "bot", title: "Careful Prompter", text: "Good start. Practise writing one clear prompt a day." },
    { min: 0, icon: "book-open", title: "AI Coding Beginner", text: "Everyone starts here. Keep the 8 rules below." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon AI Lab · The viva",
      title: "Teja’s AI-written lab program ran, but gave wrong answers for some inputs, and he couldn’t explain it in the viva. How should he have used AI?",
      cards: [["bot", "Prompt, read, test"], ["wrench", "Catch AI mistakes"], ["trophy", "Your score decides your AI coding level"]]
    },
    { type: "rules" },

    // ---------- Round 1: Clear prompts ----------
    {
      type: "learn", door: 1,
      title: "A clear prompt gets better code.",
      points: [["Say the language", "Python, C, Java…"], ["Say input and output", "“Takes a list of marks, returns the average”"], ["Say the limits", "“No libraries”, “handle an empty list”, “explain each line”"]],
      highlightLast: true,
      side: { label: "Weak vs strong", items: [["x", "“write average code”", "Vague"], ["check", "“Python function: list of marks in, average out, return 0 if empty, explain each line”", "Clear"]] }
    },
    CA(1, "Clear Prompts", {
      prompt: "Which prompt will most likely give useful code?",
      options: ["“write me some average code fast please”", "“code for the marks in my lab record”", "“make my lab program work right now”", "“Python: marks list in, average out, 0 if empty”"], answer: 3,
      hint: "Language, input, output, edge case.",
      note: "Specific prompts get specific, correct code. Vague prompts get guesses.", badge: "message-circle"
    }),
    CA(1, "Clear Prompts", {
      prompt: "Teja adds “explain each line” to his prompt. Why is that useful?",
      options: ["So the AI writes code that runs faster", "So he can explain it in the viva", "So the code becomes shorter and simpler", "So the AI stops making any mistakes"], answer: 1,
      hint: "Who has to understand it?",
      note: "Explanations help you learn and check the logic. They don’t make the AI perfect.", badge: "graduation-cap"
    }),
    CA(1, "Clear Prompts", {
      prompt: "Which detail is MOST important to add when asking AI to fix code for a C lab?",
      options: ["Your favourite colour for the editor", "The name of your lab teacher", "That it must be in C, not Python", "How many friends use the same AI"], answer: 2,
      hint: "AI may answer in the wrong language.",
      note: "Always say the language and any rules from your lab (for example, no library functions).", badge: "code",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Give context ----------
    {
      type: "learn", door: 2,
      title: "Give context: the error, the code, what you expected.",
      points: [["Paste the error", "The exact message, not “it’s broken”"], ["Paste the code", "Only the relevant part"], ["Say expected vs actual", "“Expected 75, got 7.5”"]],
      highlightLast: true,
      code: ["marks = [70, 80, 75]", "avg = sum(marks) / len(mark)", "print(avg)"],
      output: "NameError: name 'mark' is not defined"
    },
    CA(2, "Give Context", {
      prompt: "Teja’s code crashes. What is the most useful thing to paste into the AI?",
      options: ["The exact error and the code", "Just the words “it doesn’t work”", "A photo of his laptop from far away", "Only the first line of his program"], answer: 0,
      hint: "What does the AI need to see?",
      note: "With the error and the code, the AI (and you) can find the bug quickly.", badge: "wrench"
    }),
    CA(2, "Give Context", {
      prompt: "In the learn example, what is the bug?",
      options: ["“len(mark)” should be “len(marks)”", "sum() cannot be used on a list", "print() needs two brackets", "A list cannot hold three items"], answer: 0,
      hint: "Read the error message: which name is not defined?",
      note: "A typo. The error message pointed straight at it: name 'mark' is not defined.", badge: "search"
    }),
    CAN(2, "Give Context", {
      prompt: "After the fix, what does the program print for marks = [70, 80, 75]? (Whole number part only.)",
      answer: 75,
      hint: "(70 + 80 + 75) ÷ 3.",
      note: "225 ÷ 3 = 75.0. Always check AI fixes by working out the expected answer yourself.", badge: "chart-column",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Read before you run ----------
    {
      type: "learn", door: 3,
      title: "Read every line before you run or submit.",
      points: [["AI can be confidently wrong", "Code that looks neat can still have bugs"], ["Made-up functions", "AI sometimes invents functions or libraries that don’t exist"], ["Check the docs", "Search the official documentation if unsure"]],
      highlightLast: true,
      code: ["import math", "", "x = 16", "print(math.squareroot(x))   # AI wrote this"],
      output: "AttributeError: module 'math' has no attribute 'squareroot'"
    },
    CA(3, "Read the Code", {
      prompt: "The AI used math.squareroot(), which doesn’t exist. What is the real function?",
      options: ["math.root()", "math.sqrt()", "math.square()", "math.sqroot()"], answer: 1,
      hint: "A short name.",
      note: "math.sqrt(16) gives 4.0. AI sometimes makes up names that sound right.", badge: "chart-column"
    }),
    CA(3, "Read the Code", {
      prompt: "The AI suggests “pip install easy-placement-helper”. You have never heard of it. Best move?",
      options: ["Install it at once without checking", "Install it on the college lab PCs", "Check it is a real, trusted package", "Share the command with your whole class"], answer: 2,
      hint: "Fake or made-up package names can be risky.",
      note: "Check the official package page, downloads and who made it. Installing unknown packages can be unsafe.", badge: "shield"
    }),
    CA(3, "Read the Code", {
      prompt: "Your teacher asks, “Why did you use a dictionary here?” You don’t know. What went wrong?",
      options: ["The teacher asked a very unfair question", "Dictionaries are not allowed in Python", "The AI should have answered for you", "You submitted code you didn’t understand"], answer: 3,
      hint: "Rule 3.",
      note: "If you can’t explain a line, learn it before you submit. Ask the AI “why” first.", badge: "graduation-cap",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Share one time an AI tool gave you a wrong or strange answer. How did you find out?", note: "Any subject counts. 20 seconds.", points: 100 },

    // ---------- Round 4: Test it ----------
    {
      type: "learn", door: 4,
      title: "Test with tricky inputs, not just the easy one.",
      points: [["Normal input", "A typical case"], ["Edge cases", "Empty list, 0, negative numbers, one item"], ["Compare", "Work out the right answer yourself and compare"]],
      highlightLast: true,
      code: ["def average(marks):", "    return sum(marks) / len(marks)", "", "print(average([60, 80]))", "print(average([]))"],
      output: "70.0 · then ZeroDivisionError"
    },
    CA(4, "Test It", {
      prompt: "The average() function works for [60, 80] but crashes for []. Why?",
      options: ["It divides by len([]), which is 0", "sum() cannot add two numbers", "Lists cannot be passed to functions", "print() cannot show decimal numbers"], answer: 0,
      hint: "What is the length of an empty list?",
      note: "Dividing by zero crashes. An edge-case test caught it. Fix: return 0 if the list is empty.", badge: "wrench"
    }),
    CA(4, "Test It", {
      prompt: "Which set of tests is best for a function that finds the largest number in a list?",
      options: ["[1, 2, 3] only", "[1, 2, 3] and [1, 2, 3] again", "[3, 9, 2], [-5, -1], [7] and []", "No tests; the AI already checked it"], answer: 2,
      hint: "Normal, negative, single item, empty.",
      note: "Negative-only lists catch a common bug: starting with max = 0.", badge: "list-checks"
    }),
    CA(4, "Test It", Object.assign({}, CABUG, {
      prompt: "AI wrote this to find the largest number. Run it on [-5, -1, -8]. What prints, and where is the bug?",
      code: ["def largest(nums):", "    best = 0", "    for n in nums:", "        if n > best: best = n", "    return best", "print(largest([-5, -1, -8]))"],
      outputOptions: ["0", "-1", "-8"], outputAnswer: 0, bugLine: 1,
      bugText: "best = 0 is bigger than every negative number; start with best = nums[0]",
      hint: "Is any number in the list bigger than 0?",
      note: "It prints 0, which is not even in the list. Start with the first item instead.", badge: "wrench",
      board: true, boardLabel: "after Round 4"
    })),

    // ---------- Round 5: Safety and honesty ----------
    {
      type: "learn", door: 5,
      title: "Keep secrets safe, and use AI honestly.",
      points: [["No secrets", "Never paste passwords, API keys or private data"], ["Rules first", "If an assignment says no AI, don’t use it"], ["Be open", "If AI is allowed, say how you used it"]],
      highlightLast: true,
      side: { label: "Never paste", items: [["x", "API keys and passwords", ""], ["x", "Other people’s personal data", ""], ["x", "Company code you were told to keep private", ""]] }
    },
    CA(5, "Safe and Honest", {
      prompt: "Teja’s code has his project’s secret API key in it. Before pasting it into an AI chat, he should…",
      options: ["Paste it all; chat tools are private", "Post the key in the class group first", "Put the key in the code comments too", "Remove the key and use a placeholder"], answer: 3,
      hint: "Rule 6.",
      note: "Replace secrets with something like API_KEY_HERE. Once shared, a key can be misused.", badge: "lock"
    }),
    CA(5, "Safe and Honest", {
      prompt: "An assignment says “No AI tools allowed.” What should you do?",
      options: ["Use AI and change the variable names", "Follow the rule; write it yourself", "Use AI only for the hardest part", "Ask a friend to use AI for you"], answer: 1,
      hint: "Rule 8.",
      note: "Breaking the rule is academic dishonesty, even if it is hard to detect.", badge: "scale"
    }),
    CA(5, "Safe and Honest", {
      prompt: "AI use is allowed in your mini project. What is the honest way to submit?",
      options: ["Mention which parts used AI and how", "Hide all AI use from the report", "Say AI wrote it, without checking it", "Copy another team’s AI output"], answer: 0,
      hint: "Be open.",
      note: "A short note like “used AI to draft the CSS and to debug the login” builds trust.", badge: "file-text",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Debug with AI (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: debug with AI like a pro.",
      points: [["Ask for causes", "“What could cause this?” not just “fix it”"], ["One change at a time", "Then test again"], ["You decide", "AI suggests; you check and choose"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["wrench", "Find the bug", "AI-written code"], ["mic", "Then the final challenge", "Write a perfect prompt"]] }
    },
    CA(6, "Debug With AI", Object.assign({}, CABUG, {
      double: true,
      prompt: "AI wrote this to count even numbers in [2, 3, 4]. What prints, and where is the bug?",
      code: ["nums = [2, 3, 4]", "count = 0", "for n in nums:", "    if n % 2 == 1:", "        count += 1", "print(count)"],
      outputOptions: ["1", "2", "3"], outputAnswer: 0, bugLine: 3,
      bugText: "n % 2 == 1 checks for odd numbers; even needs n % 2 == 0",
      hint: "Which numbers give remainder 1 when divided by 2?",
      note: "It counts odd numbers, so it prints 1 (only 3). Fix: n % 2 == 0 gives the right answer, 2.", badge: "wrench"
    })),
    CA(6, "Debug With AI", {
      double: true,
      prompt: "The AI’s first fix didn’t work. Best next step?",
      options: ["Paste the same prompt again and again", "Share the new error, then test again", "Delete the whole program and start over", "Submit it anyway and hope it passes"], answer: 1,
      hint: "Give new context.",
      note: "Each round of debugging needs the new error and code. One change, then test.", badge: "route"
    }),
    CAN(6, "Debug With AI", {
      double: true,
      prompt: "Teja writes 8 test cases. The AI’s code passes 6. What percentage passed?",
      answer: 75,
      hint: "6 ÷ 8 × 100.",
      note: "75%. Not good enough to submit: find out why the other 2 failed.", badge: "chart-column",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best prompt wins +200", prompt: "In 30 seconds, say a perfect prompt asking AI to write a function that checks if a number is prime. Include language, input, output, edge cases and “explain each line”.", note: "Edge cases: 0, 1, 2, negative numbers. The host picks the clearest prompt.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "8 Rules for Coding With AI", note: "Screenshot this. Use it every time you open an AI chat.", items: AICARD },
    {
      type: "end",
      joinTitle: "Join the EduMoon AI Lab",
      joinText: "AI games, tools and projects every week. Learn to use AI the right way, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
