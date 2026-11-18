// Talk About Your Project (EduMoon Skills Club). For 3rd and final year.
// The technical interview question every fresher gets: "Tell me about your project." Structure, your own role, tech choices, challenges, results and tough follow-ups.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const TP = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 45, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const TPSPOT = { kind: "bug", time: 60, step1: "What is the problem?", step2: "Tap the weak line", say1: "First pick the problem.", say2: "Now tap the weak line.", partO: "the problem", partL: "the line", lineLabel: "line", bugLabel: "The weak line is" };

// The take-home card: the project answer formula.
const FORMULA = [
  ["1. Problem", "One line: who had what problem. “Students missed hostel mess timings.”"],
  ["2. What we built", "One line, plain words. “An app that sends mess-time reminders.”"],
  ["3. My part", "Say “I” for your work: “I built the notification system.”"],
  ["4. Tech and why", "Name the tools and one reason for each choice."],
  ["5. A real challenge", "Situation, what you did, the result. Keep it true."],
  ["6. Result", "A number if you have one: users, time saved, accuracy."],
  ["7. What I’d improve", "Shows you keep learning. Have one ready."],
  ["Practise", "Say it aloud in 90 seconds. Then let a friend ask “Why?” three times."]
];

window.GAME = {
  id: "talk-about-your-project",
  title: "Talk About Your Project",
  club: "Skills Club",
  tagline: "“Tell me about your project.” The question every fresher gets. Answer it like a pro.",
  art: window.STORY_ART,
  guide: {
    years: "3rd and final year", time: "40 minutes", level: "Medium",
    about: "Arjun’s team built a hostel mess reminder app for their final-year project. In every interview, he freezes when asked about it. In 6 rounds, teams learn to structure a project answer, say clearly what they did themselves, explain technology choices, tell a real challenge story, share results honestly, and handle tough follow-up questions.",
    outcomes: "A 90-second project answer structure, how to talk about your own contribution, why-questions about tech choices, the STAR method for challenges, and calm answers to tough follow-ups.",
    tone: "Most students undersell or oversell their projects. Push for honest, specific answers. Ask volunteers to describe their real project in one line; celebrate clarity.",
    extra: [["Bring your project", "Ask students to think of their own mini or major project before the game starts. Every speaking turn uses it."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Explained",
    rulesEyebrow: "How Talk About Your Project works", rulesTitle: "Learn the step. Pick Arjun’s best answer. Practise yours.",
    learnText: "The host explains one part of a strong project answer.", crackTitle: "Choose",
    crackText: "Pick Arjun’s best answer on your phone and lock it in.",
    rulesExtra: "Speaking turns use your own project. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Interviewers see this mistake every day!", cracked: "nailed it",
    next: "Next round →", finale: "Next →", winner: "explain projects like pros!", endLine: "Arjun cleared his technical round."
  },
  offerEyebrow: "EduMoon Skills Club · Technical round",
  offerTitle: "Your technical round result",
  offers: [
    { min: 0.7, icon: "badge-check", title: "Cleared with Distinction", text: "You explain your work clearly. Record your 90-second answer once." },
    { min: 0.45, icon: "thumbs-up", title: "Cleared", text: "Strong! Prepare one challenge story from your project." },
    { min: 0.2, icon: "compass", title: "Next Round Pending", text: "Good start. Write your answer using the formula below." },
    { min: 0, icon: "book-open", title: "Practice Needed", text: "Everyone starts here. Explain your project to a friend this week." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Skills Club · Technical round",
      title: "Arjun’s team built a hostel mess reminder app. In every interview, he freezes when asked, “Tell me about your project.” Can your team fix his answer?",
      cards: [["file-text", "Structure, your role and tech choices"], ["mic", "Practise with your own project"], ["trophy", "Your score decides your technical round result"]]
    },
    { type: "rules" },

    // ---------- Round 1: Structure ----------
    {
      type: "learn", door: 1,
      title: "Start with the problem, not the technology.",
      points: [["Problem", "Who had what problem?"], ["What you built", "One plain sentence"], ["Your part and result", "Then the details, if they ask"]],
      highlightLast: true,
      side: { label: "First 20 seconds", items: [["users", "Problem", "“Students kept missing mess timings.”"], ["smartphone", "Solution", "“We built an app with timed reminders.”"], ["chart-column", "Result", "“120 hostel students used it.”"]] }
    },
    TP(1, "Structure", {
      prompt: "Best way for Arjun to START his project answer?",
      options: ["“We used React, Node, MongoDB, Firebase and Tailwind.”", "“It was a very good project and we got good marks.”", "“Students missed mess timings, so we built reminders.”", "“It was our final-year project, done by four of us.”"], answer: 2,
      hint: "Problem first.",
      note: "Problem, then solution. The interviewer instantly understands why the project exists.", badge: "target"
    }),
    TP(1, "Structure", {
      prompt: "How long should the first full answer to “Tell me about your project” be?",
      options: ["About 10 seconds", "About 10 minutes", "As long as possible", "60 to 90 seconds"], answer: 3,
      hint: "Long enough for the key parts, short enough to invite questions.",
      note: "60 to 90 seconds. The interviewer will ask for more where they are interested.", badge: "timer"
    }),
    TP(1, "Structure", {
      prompt: "The interviewer looks confused after Arjun’s answer full of technical terms. What went wrong?",
      options: ["He skipped the problem", "He spoke too slowly", "He smiled too much", "He mentioned the project title"], answer: 0,
      hint: "What was missing at the start?",
      note: "Without the problem in plain words, tech terms have no meaning. Context first, then detail.", badge: "message-circle",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: My part ----------
    {
      type: "learn", door: 2,
      title: "Interviewers want to know what YOU did.",
      points: [["Say “I” for your work", "“I built the notification system.”"], ["Say “we” for the team", "“We tested it with 120 students.”"], ["Know your part deeply", "That is where the questions will go"]],
      highlightLast: true,
      side: { label: "Weak vs strong", items: [["x", "“We did everything together.”", "Hides you"], ["x", "“I did the whole project alone.”", "Often not believable"], ["check", "“I built the reminders; Sana built login.”", "Clear and fair"]] }
    },
    TP(2, "My Part", {
      prompt: "“What exactly did you do in this project?” Best answer?",
      options: ["“We all did everything together as one team.”", "“I built the reminders with Firebase.”", "“I mostly helped the others wherever they needed me.”", "“I did the documentation and the presentation, mostly.”"], answer: 1,
      hint: "Specific and in first person.",
      note: "A specific piece of work in first person. Now the interviewer can ask good follow-ups.", badge: "user"
    }),
    TP(2, "My Part", Object.assign({}, TPSPOT, {
      prompt: "Arjun’s answer about his role. Which line hurts him most?",
      code: ["Our app sends mess-time reminders to hostel students.", "I built the notification part using Firebase.", "Honestly, my friend did most of it; I don’t really know the code.", "We tested it with 120 students."],
      outputOptions: ["It shows he cannot explain his own project", "It is too technical", "It is too short"], outputAnswer: 0, bugLine: 2,
      bugText: "if you cannot explain it, the interviewer will doubt the whole project. Learn your part well before interviews",
      hint: "Which line would end the interview fast?",
      note: "Be honest about roles, but know your own part deeply. If it is weak, study it before the interview.", badge: "x"
    })),
    TP(2, "My Part", {
      prompt: "Arjun only did the UI. The interviewer asks about the database. Best response?",
      options: ["Explain basics; credit Sana", "Pretend he built the database", "Say “I don’t know anything”", "Change the topic to cricket"], answer: 0,
      hint: "Honest, and still knowledgeable.",
      note: "Know the whole project at a high level, and be honest about who did what.", badge: "handshake",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Tech choices ----------
    {
      type: "learn", door: 3,
      title: "For every tool, have one reason.",
      points: [["“Why Firebase?”", "“Free tier, quick notifications, and I knew it already.”"], ["Trade-offs", "Every choice has a downside. Know one"], ["Never: “Because everyone uses it”", "Give a real reason"]],
      highlightLast: true,
      side: { label: "Good reasons", items: [["clock", "Time", "“We had 6 weeks.”"], ["indian-rupee", "Cost", "“Free for our scale.”"], ["users", "Team skill", "“Two of us knew it.”"]] }
    },
    TP(3, "Tech Choices", {
      prompt: "“Why did you choose Firebase?” Best answer?",
      options: ["“Because everyone uses it nowadays.”", "“My senior told me to use it.”", "“Free, easy notifications, we knew it.”", "“I don’t know, it was already there.”"], answer: 2,
      hint: "Real reasons.",
      note: "Concrete reasons show you made a decision, not a guess.", badge: "lightbulb"
    }),
    TP(3, "Tech Choices", {
      prompt: "“What is one downside of your choice?” Why is this a good question to prepare for?",
      options: ["It is a trick to make you fail", "There are no downsides", "Interviewers never ask it", "It shows you know trade-offs"], answer: 3,
      hint: "Every choice has a cost.",
      note: "Knowing the trade-offs (like vendor lock-in or limits at scale) shows real understanding.", badge: "scale"
    }),
    TP(3, "Tech Choices", {
      prompt: "Arjun’s resume lists “Machine Learning” for this project, but it has none. What should he do?",
      options: ["Keep it, they won’t ask", "Add “Blockchain” too", "Remove it", "Say ML is used secretly"], answer: 2,
      hint: "Every word can become a question.",
      note: "Only list what you used and can explain. Interviewers dig into buzzwords first.", badge: "x",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Your own project: say the problem and what you built in 20 seconds.", note: "Problem first, plain words. Any project is fine.", points: 100 },

    // ---------- Round 4: Challenges ----------
    {
      type: "learn", door: 4,
      title: "Tell one real challenge using STAR.",
      points: [["Situation and Task", "“Reminders were arriving 20 minutes late.”"], ["Action", "“I found the phone’s battery saver was delaying them, and changed the settings.”"], ["Result", "“Delays dropped to under a minute.”"]],
      highlightLast: true,
      side: { label: "Keep it", items: [["check", "True", "Made-up stories collapse"], ["check", "Specific", "One problem, one fix"], ["check", "Yours", "What you did"]] }
    },
    TP(4, "Challenges", {
      prompt: "“What was the hardest problem you faced?” Which answer is best?",
      options: ["“Nothing was hard, everything went smoothly.”", "“Late reminders; I traced and fixed it.”", "“Everything was hard, honestly, the whole project.”", "“My teammates were the hardest problem.”"], answer: 1,
      hint: "A real problem and your action.",
      note: "Specific problem, specific action, result. It shows how you think.", badge: "wrench"
    }),
    TP(4, "Challenges", {
      prompt: "Arjun cannot think of a big challenge. What should he do?",
      options: ["Share a small real problem", "Invent a dramatic story", "Say there were none", "Talk about exam stress"], answer: 0,
      hint: "Small and true beats big and fake.",
      note: "A small real bug, explained well, beats a made-up drama that falls apart on the next question.", badge: "lightbulb"
    }),
    TP(4, "Challenges", {
      prompt: "What does the R in STAR stand for?",
      options: ["Reason", "Result", "Role", "Risk"], answer: 1,
      hint: "How it ended.",
      note: "Situation, Task, Action, Result. Always finish with the result.", badge: "list-checks",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Results and honesty ----------
    {
      type: "learn", door: 5,
      title: "Share results honestly, with numbers if you have them.",
      points: [["Numbers help", "Users, time saved, accuracy, speed"], ["Honest limits", "“It only works on Android for now.”"], ["What you learned", "One lesson you will use again"]],
      highlightLast: true,
      side: { label: "Results", items: [["chart-column", "“120 students used it”", "Real usage"], ["timer", "“Missed meals dropped by half in a survey”", "Impact"], ["x", "“Millions will use it”", "Not a result"]] }
    },
    TP(5, "Results", {
      prompt: "Which is the strongest result statement?",
      options: ["“It is the best app in our college.”", "“It will change the world one day.”", "“Our faculty liked it very much.”", "“120 students used it for a month.”"], answer: 3,
      hint: "Real and measurable.",
      note: "Real usage over a real time period. Modest numbers are fine; invented ones are not.", badge: "chart-column"
    }),
    TP(5, "Results", {
      prompt: "The interviewer asks, “Any limitations?” Best answer?",
      options: ["“Android only, for now.”", "“None, it is perfect.”", "“I don’t want to talk about that.”", "“Ask my teammates about that.”"], answer: 0,
      hint: "Honest and forward-looking.",
      note: "Every project has limits. Naming one and a plan for it shows maturity.", badge: "search"
    }),
    TP(5, "Results", {
      prompt: "“What did you learn from this project?” Best answer?",
      options: ["“I learned a lot of things.”", "“Test on real phones early.”", "“That projects are hard.”", "“Nothing new, honestly.”"], answer: 1,
      hint: "Specific and reusable.",
      note: "A specific lesson you will use again. It shows you reflect and improve.", badge: "graduation-cap",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Tough follow-ups (double) ----------
    {
      type: "learn", door: 6,
      title: "Tough follow-ups test how you think, not what you memorised.",
      points: [["“What would you improve?”", "Have one clear answer ready"], ["“What if 10,000 users joined?”", "Think aloud: what breaks first?"], ["“Did you copy this?”", "Stay calm. Explain your own work and what you used from others"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["briefcase", "Tough questions", "Calm, honest answers"], ["mic", "Then the final challenge", "Your full answer"]] }
    },
    TP(6, "Tough Follow-ups", {
      double: true,
      prompt: "“If 10,000 students used your app tomorrow, what would break first?” Best response?",
      options: ["Think aloud about limits", "“Nothing would break.”", "“I have never thought about it.”", "“That will never happen.”"], answer: 0,
      hint: "They want to see your thinking.",
      note: "Thinking aloud calmly about limits shows engineering sense, even without a perfect answer.", badge: "users"
    }),
    TP(6, "Tough Follow-ups", {
      double: true,
      prompt: "“Is this project copied from YouTube?” Arjun followed a tutorial for login only. Best answer?",
      options: ["“No, everything is 100% original.”", "“Yes, everyone copies projects.”", "“Login was a tutorial; the rest was ours.”", "Get angry and defensive"], answer: 2,
      hint: "Honest about sources, clear about your work.",
      note: "Using tutorials is normal. Be clear about what you learned from them and what you built yourself.", badge: "shield"
    }),
    TP(6, "Tough Follow-ups", {
      double: true,
      prompt: "“What would you improve if you had another month?” Best answer?",
      options: ["“Nothing, it is complete.”", "“I would start a new project instead.”", "“Make the logo bigger.”", "“Add iOS and custom times.”"], answer: 3,
      hint: "Useful, specific improvements.",
      note: "Specific improvements tied to user needs show you think like a product builder.", badge: "rocket",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, results, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best answer wins +200", prompt: "Answer “Tell me about your project” for your own project in 60 seconds, using problem, solution, your part, one challenge and the result.", note: "The host plays interviewer and asks one follow-up. Clearest answer wins.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "The Project Answer Formula", note: "Screenshot this. Write your answer tonight and say it aloud.", items: FORMULA },
    {
      type: "end",
      joinTitle: "Join the EduMoon Skills Club",
      joinText: "Mock interviews, resumes, internships and career games every week. Get placed, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
