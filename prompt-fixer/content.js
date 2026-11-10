// Prompt Fixer (EduMoon AI Lab). For all years.
// Bad prompts get bad answers. Teams diagnose weak prompts and pick the best fix, then leave with a prompt formula.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const PF = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 45, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
// "Find the weak part" questions use the bug door with friendlier labels.
const WEAK = { kind: "bug", time: 60, step1: "What’s the problem?", step2: "Tap the weak line", say1: "First pick what’s wrong.", say2: "Now tap the weak line.", partO: "the problem", partL: "the line", lineLabel: "line", bugLabel: "The weak line is" };

const FORMULA = [
  ["Role", "“Act as a senior who has cracked campus placements.”"],
  ["Context", "Who you are, your level, what you already know."],
  ["Task", "One clear thing: explain, list, check, rewrite, quiz me."],
  ["Format", "Bullet points, a table, 5 questions, under 100 words."],
  ["Examples", "Show one sample of what good looks like."],
  ["Limits", "Simple English, no jargon, Indian context, no made-up facts."],
  ["Follow up", "“Simpler”, “shorter”, “another example”, “what did you miss?”"],
  ["Check", "Facts, numbers and code: verify before you use them."]
];

window.GAME = {
  id: "prompt-fixer",
  title: "Prompt Fixer",
  club: "AI Lab",
  tagline: "Bad prompt, bad answer. Fix the prompt, fix the answer.",
  art: window.STORY_ART,
  guide: {
    years: "All years · no coding needed", time: "35 minutes", level: "Beginner",
    about: "Most students type three words into AI and get a boring, general answer. In 6 rounds, teams diagnose weak prompts, find the line that ruins them and pick the best fix, for studies, placements, projects and daily life. They leave with an 8-part prompt formula they can use the same day.",
    outcomes: "The prompt formula (role, context, task, format, examples, limits, follow up, check), the habit of giving AI context, and the confidence to get useful answers from any AI tool.",
    tone: "Keep it practical. Every question is something a student really types. If you have a laptop and internet, try one weak prompt and its fixed version live on a free AI tool between rounds; the difference sells itself.",
    extra: [["Live demo (optional)", "After Round 2, type “explain recursion” into a free AI tool, then the fixed prompt from the game. Show both answers side by side."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Fixed",
    rulesEyebrow: "How Prompt Fixer works", rulesTitle: "Read the prompt. Find the problem. Fix it.",
    learnText: "The host shares one part of a great prompt.", crackTitle: "Fix",
    crackText: "Pick the best fix on your phone and lock it in.",
    rulesExtra: "Weak-line questions: <b>100</b> for the problem + <b>100</b> for the line. Round 6: <b>double</b>!",
    nobody: "Nobody fixed this one. Most people write prompts like this every day!", cracked: "fixed it",
    next: "Next round →", finale: "Next →", winner: "are today’s prompt fixers!", endLine: "Your prompts just got 10 times better!"
  },
  offerEyebrow: "EduMoon AI Lab · Prompt level",
  offerTitle: "Your prompt level",
  offers: [
    { min: 0.7, icon: "sparkles", title: "Prompt Pro", text: "You give AI context, a clear task and a format. That’s the whole secret." },
    { min: 0.45, icon: "wrench", title: "Prompt Mechanic", text: "Strong! Add a format to every prompt this week." },
    { min: 0.2, icon: "pen-tool", title: "Prompt Learner", text: "Good start. Next time, tell AI who you are before you ask." },
    { min: 0, icon: "book-open", title: "Prompt Beginner", text: "Everyone starts here. Save the formula and try it on one question today." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon AI Lab · Prompt Fixer",
      title: "Two students ask AI the same question. One gets a useless answer, one gets a perfect one. The difference is the prompt. Can your team fix them?",
      cards: [["wrench", "Fix weak prompts from real student life"], ["target", "Find the line that ruins a prompt"], ["sparkles", "Leave with an 8-part prompt formula"]]
    },
    { type: "rules" },

    // ---------- Round 1: Context ----------
    {
      type: "learn", door: 1,
      title: "AI doesn’t know you. Tell it who you are.",
      points: [["Your level", "“I’m a 1st-year student”, “I know basic C”"], ["Your situation", "“My exam is in 3 days”, “I have no laptop”"], ["Your goal", "“I want to pass”, “I want to score 9+”, “I want a job”"]],
      highlightLast: true,
      side: { label: "Weak → Strong", items: [["circle-x", "“Explain DBMS”", "Explain for whom?"], ["circle-check", "“I’m a 2nd-year CSE student. Explain DBMS normalisation simply, with one table example.”", "Level + topic + format"], ["route", "Rule", "Context first, question second"]] }
    },
    PF(1, "Context", {
      prompt: "Which prompt will get the most useful study answer?",
      options: ["“Explain OS”", "“I’m a 2nd-year CSE student with an OS mid exam in 3 days. Explain deadlocks simply with one real-life example.”", "“Tell me everything about operating systems”", "“OS notes pls”"], answer: 1,
      hint: "Which one tells AI who you are and what you need?",
      note: "Level, deadline, one topic and a format. Same AI, much better answer.", badge: "target"
    }),
    PF(1, "Context", {
      prompt: "“Give me a diet plan.” What’s the biggest problem with this prompt?",
      options: ["It’s too polite", "It should be in capital letters", "It has no context: age, goal, food preferences or budget", "Diet plans aren’t allowed"], answer: 2,
      hint: "Would a nutritionist give you a plan without asking anything?",
      note: "A hostel student on ₹3,000 a month needs a different plan from anyone else. And for health conditions, check with a doctor.", badge: "user"
    }),
    PF(1, "Context", {
      prompt: "You want resume help. What should you tell AI first?",
      options: ["Your year, branch, the role you’re applying for and your real projects", "Your password", "Nothing, just paste “make resume”", "Your favourite film"], answer: 0,
      hint: "What would a senior ask before helping you?",
      note: "The role and your real projects decide everything. And never invent experience you don’t have.", badge: "file-user",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Clear task ----------
    {
      type: "learn", door: 2,
      title: "One clear task beats a vague wish.",
      points: [["Use action words", "Explain, list, compare, check, rewrite, quiz me"], ["One thing at a time", "Big asks get shallow answers"], ["Say what done looks like", "“5 questions”, “a 7-mark answer”, “one paragraph”"]],
      highlightLast: true,
      side: { label: "Vague → Clear", items: [["circle-x", "“Help with Java”", "Help how?"], ["circle-check", "“Quiz me with 5 MCQs on Java inheritance, one at a time”", "A clear action"], ["circle-check", "“Find the bug in this code and explain it”", "A clear action"]] }
    },
    PF(2, "Clear Task", Object.assign({}, WEAK, {
      prompt: "A student’s prompt for exam prep. Which line makes it weak?",
      code: ["I’m a 3rd-year ECE student.", "My Signals and Systems exam is on Monday.", "Tell me stuff.", "Use simple English."],
      outputOptions: ["It’s vague: “stuff” isn’t a task", "It’s too formal", "Nothing, it’s a perfect prompt"], outputAnswer: 0, bugLine: 2,
      bugText: "“Tell me stuff” gives AI no task. Try “Make a 2-day revision plan for the 5 most important topics”",
      hint: "Which line doesn’t say what AI should actually do?",
      note: "Great context, no task. Replace one vague line with one clear action and the whole prompt works.", badge: "pen-tool"
    })),
    PF(2, "Clear Task", {
      prompt: "You want to practise for a viva. Which task works best?",
      options: ["“Viva questions”", "“Ask me 5 viva questions on my mini project one by one, wait for my answer, then give feedback.”", "“Is viva hard?”", "“Write my viva answers”"], answer: 1,
      hint: "Which one turns AI into a practice partner?",
      note: "One question at a time, with feedback, is like a mock viva. You learn by answering, not by reading.", badge: "mic"
    }),
    PF(2, "Clear Task", {
      prompt: "“Make my project, write the report, make slides and prepare viva answers.” Why is this weak?",
      options: ["It’s too short", "It asks for 4 big things at once, so each one comes out shallow", "AI can’t make slides", "It needs more capital letters"], answer: 1,
      hint: "Can you do 4 big jobs well in one go?",
      note: "Split big work into steps. And for your own project, use AI to help you build it, not to build it for you.", badge: "list-checks",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Format ----------
    {
      type: "learn", door: 3,
      title: "Tell AI the shape of the answer you want.",
      points: [["Length", "“Under 100 words”, “one page”, “3 lines”"], ["Shape", "Bullets, a table, steps, a 7-mark answer"], ["Tone", "Formal email, friendly message, simple for a 1st-year"]],
      highlightLast: true,
      side: { label: "Formats that work", items: [["list-checks", "“As a table”", "For comparisons"], ["route", "“Step by step”", "For processes and maths"], ["file-text", "“As a 7-mark answer”", "For exam practice"]] }
    },
    PF(3, "Format", {
      prompt: "You want to compare 3 laptops under ₹50,000 quickly. Which format should you ask for?",
      options: ["A long essay", "A poem", "A table comparing price, RAM, battery and weight", "A story about laptops"], answer: 2,
      hint: "What’s easiest to compare at a glance?",
      note: "Tables are perfect for comparisons. And check prices on the shop’s site; AI’s prices can be old.", badge: "chart-column"
    }),
    PF(3, "Format", Object.assign({}, WEAK, {
      prompt: "A prompt to write a leave email. Which line will cause the wrong result?",
      code: ["Write a leave request email to my HOD.", "I have a family function on Friday.", "Make it very funny with lots of jokes.", "Keep it under 80 words."],
      outputOptions: ["It’s too short", "The tone is wrong for a formal email to the HOD", "Nothing, it’s a perfect prompt"], outputAnswer: 1, bugLine: 2,
      bugText: "an email to your HOD should be polite and formal. Ask for “polite and formal” instead",
      hint: "Who is reading this email?",
      note: "Tone is part of the format. The right tone for the reader matters as much as the words.", badge: "mail"
    })),
    PF(3, "Format", {
      prompt: "AI’s answer is 2 pages long and you have 10 minutes. Best follow-up?",
      options: ["Read all 2 pages very fast", "Close it", "Ask the same question again", "“Summarise this in 5 bullet points I can revise in 2 minutes.”"], answer: 3,
      hint: "Tell it the size you need.",
      note: "You can always reshape an answer. Follow-ups are free.", badge: "timer",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Fix this prompt out loud: “Tell me about placements.”", note: "Add who you are, one clear task and a format. 20 seconds.", points: 100 },

    // ---------- Round 4: Examples and role ----------
    {
      type: "learn", door: 4,
      title: "Show an example and give AI a role.",
      points: [["Role", "“Act as an HR interviewer”, “Act as a strict examiner”"], ["Example", "Paste one sample of what good looks like"], ["Together", "AI copies the style and level you showed it"]],
      highlightLast: true,
      side: { label: "Roles that help", items: [["briefcase", "HR interviewer", "Mock interviews"], ["graduation-cap", "Strict examiner", "Marks your answer honestly"], ["user", "Friendly senior", "Explains simply"]] }
    },
    PF(4, "Role and Examples", {
      prompt: "You want honest feedback on your 7-mark answer. Which role works best?",
      options: ["“Act as my best friend who loves everything I write”", "“Act as a strict university examiner. Mark this out of 7 and tell me what’s missing.”", "“Act as a poet”", "No role needed"], answer: 1,
      hint: "Who would give the most useful marks?",
      note: "A strict role gets honest feedback. A friendly role gets praise you can’t use.", badge: "graduation-cap"
    }),
    PF(4, "Role and Examples", {
      prompt: "You want 10 Instagram captions in your club’s style. What should you add?",
      options: ["Nothing", "“Make them good”", "2 or 3 of your club’s best old captions as examples", "The word “please” 3 times"], answer: 2,
      hint: "How would AI know your style?",
      note: "Examples are the fastest way to show style. AI matches what you show it.", badge: "pen-tool"
    }),
    PF(4, "Role and Examples", Object.assign({}, WEAK, {
      prompt: "A mock interview prompt. Which line weakens it?",
      code: ["Act as an HR interviewer at an IT company.", "I’m a final-year CSE student applying for a fresher developer role.", "Ask me questions one by one and give feedback after each answer.", "Tell me I did great no matter what I say."],
      outputOptions: ["It blocks honest feedback, so you can’t improve", "It’s too long", "Nothing, it’s a perfect prompt"], outputAnswer: 0, bugLine: 3,
      bugText: "practice is only useful if the feedback is honest. Ask for honest, specific feedback",
      hint: "What’s the point of a mock interview?",
      note: "Ask AI to be honest. Praise feels good; honest feedback gets you the job.", badge: "briefcase",
      board: true, boardLabel: "after Round 4"
    })),

    // ---------- Round 5: Limits and safety ----------
    {
      type: "learn", door: 5,
      title: "Set limits, and keep private things private.",
      points: [["Language limits", "“Simple English”, “no jargon”, “explain in Telugu too”"], ["Truth limits", "“If you’re not sure, say so”, “don’t make up sources”"], ["Never paste", "Passwords, Aadhaar, OTPs, bank details, other people’s data"]],
      highlightLast: true,
      side: { label: "Useful limits", items: [["check", "“If unsure, say I don’t know”", "Fewer made-up answers"], ["globe", "“Use Indian examples”", "More relatable"], ["lock", "No private data", "Ever"]] }
    },
    PF(5, "Limits and Safety", {
      prompt: "Which line helps reduce made-up answers?",
      options: ["“Answer fast”", "“Be creative”", "“Use big words”", "“If you’re not sure about something, say so instead of guessing.”"], answer: 3,
      hint: "Which line gives AI permission to say it doesn’t know?",
      note: "It doesn’t remove mistakes completely, so you still check, but it helps.", badge: "check"
    }),
    PF(5, "Limits and Safety", Object.assign({}, WEAK, {
      prompt: "A student asks AI to fix a form. Which line should NEVER be in a prompt?",
      code: ["Help me fill my scholarship form correctly.", "I’m a 2nd-year B.Com student from Andhra Pradesh.", "My bank account number and OTP are given below.", "Explain which documents I need."],
      outputOptions: ["It’s too formal", "Nothing, it’s a perfect prompt", "It’s private data that should never go into an AI chat"], outputAnswer: 2, bugLine: 2,
      bugText: "bank details and OTPs are private. AI doesn’t need them to explain a form",
      hint: "Which line would be dangerous if someone else saw it?",
      note: "Ask for the steps, then fill private details yourself on the official site.", badge: "lock"
    })),
    PF(5, "Limits and Safety", {
      prompt: "Your English is basic and AI uses hard words. Best fix?",
      options: ["Add: “Explain in very simple English, like to a 1st-year student, and give the Telugu word for hard terms.”", "Give up on AI", "Copy it without understanding", "Ask the question in capital letters"], answer: 0,
      hint: "You can choose the language level.",
      note: "AI can explain at any level. You just have to ask.", badge: "languages",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Full fix (double) ----------
    {
      type: "learn", door: 6,
      title: "Put it all together: role, context, task, format, limits.",
      points: [["You don’t need all of them every time", "But context + task + format fixes most prompts"], ["Then follow up", "The first answer is a draft, not the final"], ["And always check", "Facts, numbers and code"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game!"], ["wrench", "3 full fixes", "Pick the best prompt"], ["award", "Then your prompt level", "How good is your team?"]] }
    },
    PF(6, "Full Fix", {
      double: true,
      prompt: "Fix “internship pls”. Which version is the best?",
      options: ["“Internship please please”", "“Give me internship”", "“I’m a 3rd-year CSE student who knows HTML, CSS and basic Python. List 5 types of internships I can apply for and the skills each needs, as a table.”", "“Where internship?”"], answer: 2,
      hint: "Context + task + format.",
      note: "And then check every company or website it names yourself before applying anywhere.", badge: "briefcase"
    }),
    PF(6, "Full Fix", {
      double: true,
      prompt: "Which prompt will help you LEARN, not just get an answer?",
      options: ["“Solve this question”", "“Give me the final answer only”", "“Write it so I can copy it”", "“Don’t give me the answer. Give me hints one by one until I solve this question myself.”"], answer: 3,
      hint: "Which one makes you do the thinking?",
      note: "Hint mode turns AI into a tutor. You remember what you solve yourself.", badge: "lightbulb"
    }),
    PF(6, "Full Fix", {
      double: true,
      prompt: "AI’s first answer is okay, but not great. What do great prompters do?",
      options: ["Accept it", "Follow up: “Make it simpler”, “Add an example”, “What did you miss?”", "Start a new chat and type the same thing", "Complain"], answer: 1,
      hint: "Is the first answer the last answer?",
      note: "The best answers come from the second or third message. Treat it like a conversation.", badge: "message-circle",
      board: true, boardLabel: "after Round 6"
    }),

    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "In 30 seconds: say a full prompt for something YOU need help with this week.", note: "Use role, context, task and format. The room claps; the host picks the best one.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "The 8-Part Prompt Formula", note: "Screenshot this. Use it on your next AI question.", items: FORMULA },
    {
      type: "end",
      joinTitle: "Join the EduMoon community",
      joinText: "AI games, coding challenges and real projects every week. Learn to use AI the smart way.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
