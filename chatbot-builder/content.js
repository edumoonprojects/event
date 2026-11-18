// Chatbot Builder (EduMoon AI Lab). For all years. No coding needed.
// Design a college helpdesk chatbot from scratch: purpose and scope, intents and example phrases, replies and flows, fallbacks and human handoff, rule-based vs AI chatbots, and testing.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const CB = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 45, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const CBN = (round, name, extra) => CB(round, name, Object.assign({ kind: "number", time: 60 }, extra));
const CBSPOT = { kind: "bug", time: 60, step1: "What is the problem?", step2: "Tap the weak line", say1: "First pick the problem.", say2: "Now tap the weak line.", partO: "the problem", partL: "the line", lineLabel: "line", bugLabel: "The weak line is" };

// The take-home card: the chatbot design checklist.
const BOTCARD = [
  ["Purpose", "One clear job: “Answer fee, exam and hostel questions for first years.”"],
  ["Scope", "List what it will NOT do, so it does not pretend."],
  ["Intents", "Each thing users want: fee_due_date, exam_timetable, hostel_rules."],
  ["Examples", "10 to 20 different ways people ask for each intent, including Tenglish."],
  ["Replies", "Short answers with buttons for the next likely question."],
  ["Fallback", "“Sorry, I didn’t get that. Try: Fees, Exams, Hostel.”"],
  ["Handoff", "A clear way to reach a real person for hard or sensitive cases."],
  ["Test with real users", "Watch 10 students use it. Fix the questions it failed."]
];

window.GAME = {
  id: "chatbot-builder",
  title: "Chatbot Builder",
  club: "AI Lab",
  tagline: "Design a chatbot that actually helps, without writing a line of code.",
  art: window.STORY_ART,
  guide: {
    years: "All years · every branch", time: "40 minutes", level: "Medium",
    about: "The college office gets 300 calls a day asking the same questions: fee dates, exam timetables, hostel rules. Teams design “AskCampus”, a made-up helpdesk chatbot, from scratch. In 6 rounds they set its purpose, define intents and example phrases, write replies and flows, plan fallbacks and human handoff, compare rule-based and AI chatbots, and test before launch.",
    outcomes: "How chatbots understand requests (intents and examples), how to design replies and flows, why fallbacks and human handoff matter, the difference between rule-based and AI chatbots, and how to test with real users.",
    tone: "Students from any branch can do this; it is design thinking, not coding. Ask the room what questions they ask the college office again and again. Their answers are the best intents.",
    extra: [["Build it for real", "Free no-code chatbot builders exist. Teams that enjoy this can build a small version of their design after the session."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Designed",
    rulesEyebrow: "How Chatbot Builder works", rulesTitle: "Learn one design step. Make the best choice. Build AskCampus.",
    learnText: "The host explains one step of chatbot design.", crackTitle: "Design",
    crackText: "Pick the best design choice on your phone and lock it in.",
    rulesExtra: "Some questions need a typed number. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Real chatbot teams struggle with this too!", cracked: "designed it",
    next: "Next round →", finale: "Next →", winner: "are today’s best bot builders!", endLine: "AskCampus is ready for launch."
  },
  offerEyebrow: "EduMoon AI Lab · Bot builder level",
  offerTitle: "Your bot builder level",
  offers: [
    { min: 0.7, icon: "bot", title: "Bot Architect", text: "You design like a pro. Build a small bot with a free no-code tool." },
    { min: 0.45, icon: "message-circle", title: "Flow Designer", text: "Strong! Write 5 intents for a bot your club could use." },
    { min: 0.2, icon: "lightbulb", title: "Bot Apprentice", text: "Good start. Read the checklist below before you build." },
    { min: 0, icon: "book-open", title: "Bot Beginner", text: "Everyone starts here. Notice how the next chatbot you use replies." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon AI Lab · 300 calls a day",
      title: "The college office gets 300 calls a day with the same questions. The principal asks students to design “AskCampus”, a helpdesk chatbot. Can your team build one that really helps?",
      cards: [["bot", "Purpose, intents, replies and flows"], ["shield", "Fallbacks, handoff and testing"], ["trophy", "Your score decides your bot builder level"]]
    },
    { type: "rules" },

    // ---------- Round 1: Purpose and scope ----------
    {
      type: "learn", door: 1,
      title: "A good chatbot does one job well.",
      points: [["Purpose", "Who is it for, and what will it help with?"], ["Scope", "Write down what it will NOT do"], ["Start small", "The top 10 questions cover most of the calls"]],
      highlightLast: true,
      side: { label: "AskCampus v1", items: [["users", "For", "First-year students"], ["check", "Helps with", "Fees, exams, hostel, documents"], ["x", "Not for", "Marks disputes, medical emergencies"]] }
    },
    CB(1, "Purpose and Scope", {
      prompt: "Which is the best purpose for AskCampus version 1?",
      options: ["“Answer every question about anything in the world.”", "“Fee, exam and hostel questions for first years.”", "“Replace all office staff from next week.”", "“Chat with students about their feelings and life.”"], answer: 1,
      hint: "Small, clear and useful.",
      note: "A clear, narrow job is easier to build well and easier for students to trust.", badge: "target"
    }),
    CB(1, "Purpose and Scope", {
      prompt: "Why should the team also list what AskCampus will NOT do?",
      options: ["So it doesn’t pretend", "To make the bot look smaller", "Because rules require a list", "So it can refuse every question"], answer: 0,
      hint: "What happens if it guesses about a medical emergency?",
      note: "Clear limits stop the bot from giving confident wrong answers on serious matters. It can point to a person instead.", badge: "shield"
    }),
    CBN(1, "Purpose and Scope", {
      prompt: "The office logged 300 calls. 240 were about the same 10 questions. What percentage do those 10 questions cover?",
      answer: 80,
      hint: "240 ÷ 300 × 100.",
      note: "80%. Handling just the top 10 questions well would take most of the load off the office.", badge: "chart-column",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Intents and examples ----------
    {
      type: "learn", door: 2,
      title: "An intent is what the user wants. Examples teach the bot to recognise it.",
      points: [["Intent", "fee_due_date: the user wants the fee deadline"], ["Many examples", "“When is fee last date?”, “fees due kab hai?”, “last day to pay fees”"], ["Real language", "Include short forms, typos and Tenglish"]],
      highlightLast: true,
      side: { label: "Intent: exam_timetable", items: [["message-circle", "“When are sem exams?”", ""], ["message-circle", "“exam dates pls”", ""], ["message-circle", "“timetable eppudu vastundi?”", "Tenglish counts"]] }
    },
    CB(2, "Intents", {
      prompt: "A student types “hostel lo curfew time enti?” Which intent should match?",
      options: ["hostel_rules", "fee_due_date", "exam_timetable", "library_hours"], answer: 0,
      hint: "Curfew is a hostel matter.",
      note: "hostel_rules. Students mix Telugu and English, so the examples must too.", badge: "languages"
    }),
    CB(2, "Intents", {
      prompt: "Why give 15 different example phrases for one intent instead of 1?",
      options: ["Bots need long training files", "To make the bot reply slower", "So it gives 15 answers", "People ask in many ways"], answer: 3,
      hint: "How many ways can you ask about fees?",
      note: "Variety in examples lets the bot recognise new ways of asking it never saw.", badge: "list-checks"
    }),
    CB(2, "Intents", Object.assign({}, CBSPOT, {
      prompt: "Example phrases for the intent fee_due_date. Which one does not belong?",
      code: ["When is the last date to pay fees?", "fees due date kab hai?", "What time does the library close?", "last day for sem fee payment"],
      outputOptions: ["It belongs to a different intent", "It has a spelling mistake", "It is too short"], outputAnswer: 0, bugLine: 2,
      bugText: "this is about library hours. Mixed examples confuse the bot",
      hint: "Which line is not about fees?",
      note: "Wrong examples teach the bot wrong matches. Keep each intent’s examples clean.", badge: "search",
      board: true, boardLabel: "after Round 2"
    })),

    // ---------- Round 3: Replies and flows ----------
    {
      type: "learn", door: 3,
      title: "Good replies are short, correct and suggest the next step.",
      points: [["Short", "Two or three lines on a phone screen"], ["Buttons", "Offer the next likely question: “How to pay?”, “Late fee?”"], ["Ask when needed", "“Which year are you in?” before giving year-specific dates"]],
      highlightLast: true,
      side: { label: "A good flow", items: [["message-circle", "User", "“Fee last date?”"], ["bot", "Bot", "“Which year? [1st] [2nd] [3rd] [4th]”"], ["check", "Bot", "“1st year: 15 Dec. [How to pay] [Late fee]”"]] }
    },
    CB(3, "Replies and Flows", {
      prompt: "Fee dates differ by year. What should AskCampus do when asked “fee last date?”",
      options: ["List every year’s date in one long block", "Ask which year, then answer", "Guess the year from the name", "Reply “Check the website”"], answer: 1,
      hint: "Get the missing detail first.",
      note: "One quick follow-up gives a precise, short answer instead of a confusing wall of text.", badge: "route"
    }),
    CB(3, "Replies and Flows", {
      prompt: "Which reply is best on a phone screen?",
      options: ["A 300-word paragraph with every fee rule", "“Please refer to circular no. 47 dated 2019.”", "“Fee due 15 Dec. [How to pay] [Late fee]”", "“Fees are important. Pay them on time.”"], answer: 2,
      hint: "Short, exact, with a next step.",
      note: "Exact answer plus buttons for the next likely question. Students get what they need in seconds.", badge: "smartphone"
    }),
    CBN(3, "Replies and Flows", {
      prompt: "AskCampus has 4 topics. Each topic has 3 buttons for follow-up questions. How many follow-up buttons in total?",
      answer: 12,
      hint: "4 × 3.",
      note: "12. Small, planned flows are easy to test and keep up to date.", badge: "list-checks",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Name one question students ask the office again and again, and 3 different ways they ask it.", note: "One intent, three examples. 20 seconds.", points: 100 },

    // ---------- Round 4: Fallbacks and handoff ----------
    {
      type: "learn", door: 4,
      title: "Plan for when the bot does not understand.",
      points: [["Fallback", "“Sorry, I didn’t get that. Try: Fees, Exams, Hostel.”"], ["Do not guess", "A wrong answer is worse than “I don’t know”"], ["Human handoff", "A clear way to reach a real person"]],
      highlightLast: true,
      side: { label: "Always hand off", items: [["heart", "Health or safety", "Show helplines at once"], ["scale", "Complaints and disputes", "A person must decide"], ["users", "Repeated failures", "After 2 fallbacks, offer a human"]] }
    },
    CB(4, "Fallbacks and Handoff", {
      prompt: "A student types something AskCampus cannot match. Best reply?",
      options: ["Pick the closest intent and answer confidently", "“Sorry, I didn’t get that. Try: Fees, Exams, Hostel.”", "Say nothing and wait for the next message", "“Invalid input. Error 404. Please try again later.”"], answer: 1,
      hint: "Honest, helpful, with options.",
      note: "Admit it, suggest what it can do, and offer a human. Guessing breaks trust.", badge: "message-circle"
    }),
    CB(4, "Fallbacks and Handoff", {
      prompt: "A student types: “I fell in the hostel and my leg is bleeding.” What must AskCampus do?",
      options: ["Ask which year they are in", "Reply with hostel curfew rules", "Show the fallback menu", "Show emergency contacts at once"], answer: 3,
      hint: "Safety first, always.",
      note: "Emergencies need immediate human help. Bots must recognise them and show contacts right away.", badge: "heart"
    }),
    CB(4, "Fallbacks and Handoff", {
      prompt: "A student wants to dispute their marks. What should AskCampus do?",
      options: ["Change the marks itself", "Tell them marks are final, no appeal", "Explain the process, connect staff", "Ignore the message"], answer: 2,
      hint: "Who should decide disputes?",
      note: "The bot can explain the process, but a person must handle the decision.", badge: "scale",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Rule-based vs AI ----------
    {
      type: "learn", door: 5,
      title: "Two kinds of chatbots: rule-based and AI-powered.",
      points: [["Rule-based", "Fixed intents, fixed replies. Predictable and safe"], ["AI-powered", "Understands free text and writes replies. Flexible, but can make things up"], ["Grounding", "Make AI answer only from official college documents"]],
      highlightLast: true,
      side: { label: "Choose by risk", items: [["check", "Fee dates, rules", "Exact answers: rules or grounded AI"], ["sparkles", "Study tips, explanations", "AI is fine"], ["shield", "Always", "Show the source for important answers"]] }
    },
    CB(5, "Rule-based vs AI", {
      prompt: "An AI chatbot invents a fee deadline that does not exist. What is this called?",
      options: ["A hallucination", "A fallback", "An intent", "A handoff"], answer: 0,
      hint: "Confidently making things up.",
      note: "A hallucination. For official facts like dates and fees, the bot must answer only from verified documents.", badge: "x"
    }),
    CB(5, "Rule-based vs AI", {
      prompt: "How can the team make an AI chatbot safer for official answers?",
      options: ["Let it answer from general knowledge", "Ground it in official documents", "Make it reply much faster", "Remove the fallback message"], answer: 1,
      hint: "Where should the facts come from?",
      note: "Grounding means the AI looks up answers in the college’s own documents and shows where it found them.", badge: "file-text"
    }),
    CB(5, "Rule-based vs AI", {
      prompt: "For exact fee deadlines, which is the safer choice?",
      options: ["Fixed replies or strictly grounded AI", "A creative AI that writes freely", "A random answer generator", "Ask other students in the chat"], answer: 0,
      hint: "Exact facts need predictable answers.",
      note: "Fixed replies or tightly grounded AI. Save free-writing AI for things where small mistakes do not hurt.", badge: "shield",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Testing and launch (double) ----------
    {
      type: "learn", door: 6,
      title: "Test with real students before launch, and keep improving.",
      points: [["Watch real users", "10 students, real questions, no help from the team"], ["Read the failures", "Every fallback is a lesson: add intents and examples"], ["Keep it updated", "Old dates are worse than no answer"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["users", "Testing and launch", "Real-world choices"], ["mic", "Then the final challenge", "Pitch your bot"]] }
    },
    CB(6, "Testing and Launch", {
      double: true,
      prompt: "Who should test AskCampus before launch?",
      options: ["Only the team that built it", "Nobody; launch and see", "Only the principal", "Real first-year students"], answer: 3,
      hint: "The builders know the “right” questions.",
      note: "Builders test what they expect. Real users find what nobody expected.", badge: "users"
    }),
    CBN(6, "Testing and Launch", {
      double: true,
      prompt: "In testing, students asked 200 questions. AskCampus answered 170 correctly. How many did it fail?",
      answer: 30,
      hint: "200 − 170.",
      note: "30 failures. Each one shows a missing intent, a missing example or a weak reply to fix.", badge: "search"
    }),
    CB(6, "Testing and Launch", {
      double: true,
      prompt: "Two months after launch, the fee dates change. What must happen?",
      options: ["Leave it, students will figure it out", "Shut the bot down forever", "Update the bot’s answers right away", "Add a joke to the reply"], answer: 2,
      hint: "Wrong dates cause real fines.",
      note: "A bot is only as good as its information. Someone must own updates, every time something changes.", badge: "clock",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best bot wins +200", prompt: "Pitch a chatbot for your college or club in 30 seconds: its purpose, 3 intents, and when it hands off to a person.", note: "Clear purpose, real intents, safe handoff. The host picks.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "Chatbot Design Checklist", note: "Screenshot this. Use it to design your first bot.", items: BOTCARD },
    {
      type: "end",
      joinTitle: "Join the EduMoon AI Lab",
      joinText: "AI games, tools and projects every week. Learn to use AI the right way, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
