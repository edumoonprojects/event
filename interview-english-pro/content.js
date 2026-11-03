// Interview English Pro (EduMoon English Club). For final year students.
// The English of the technical round: explaining projects, "I don't know", structure, clarifying, filler words.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const IQ = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 45, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
// "Tap the weak line" questions use the bug door with friendlier labels.
const SAY = { kind: "bug", time: 55, step1: "What’s the problem?", step2: "Tap the weak line", say1: "First pick what’s wrong.", say2: "Now tap the weak line.", partO: "the problem", partL: "the line", lineLabel: "line", bugLabel: "The weak line is" };

// The take-home card: phrases for the technical round.
const PHRASES = [
  ["Explaining a project", "“I built X to solve Y. I used Z. The hardest part was…, and I solved it by…”"],
  ["Not sure of the answer", "“I’m not sure, but here’s how I’d work it out…”"],
  ["Really don’t know", "“I haven’t worked with that yet. I’d start by reading the docs on…”"],
  ["Structuring an answer", "“There are three main points. First… Second… Finally…”"],
  ["Didn’t understand the question", "“Just to make sure I understand, are you asking about…?”"],
  ["Need a moment", "“Let me take a few seconds to think about that.”"],
  ["Fixing your own mistake", "“Sorry, let me correct that. I meant…”"],
  ["Closing strong", "“So in short, … Would you like me to go deeper into any part?”"]
];

window.GAME = {
  id: "interview-english-pro",
  title: "Interview English Pro",
  club: "English Club",
  tagline: "You know the answer. Now say it like a pro in the technical round.",
  art: window.STORY_ART,
  guide: {
    years: "Final year (3rd years preparing early are welcome)", time: "40 minutes", level: "Advanced",
    about: "Many students know the technical answer but lose marks in how they say it. In 6 rounds, teams practise the English of the technical interview: explaining a project in 60 seconds, saying “I don’t know” professionally, structuring answers, asking for clarification, replacing filler words, and handling a tricky question. There are three speaking moments, and a 90-second final pitch.",
    outcomes: "Phrases for every hard moment in a technical interview, a 3-part structure for any answer, and real speaking practice in a supportive room.",
    tone: "This is a speaking game: the more students talk, the better it works. Praise clear thinking over perfect grammar. Never correct someone’s accent. If a student freezes, help them with the first words of a phrase from the screen.",
    extra: [["Pairs well with", "HR Round (the HR questions) and Placement Round 2 (the technical content). Run them in the same week before a placement drive."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Pro move",
    rulesEyebrow: "How Interview English Pro works", rulesTitle: "Learn the phrase. Pick the best answer. Say it aloud.",
    learnText: "The host shares the phrases for one hard moment.", crackTitle: "Answer",
    crackText: "Pick the best way to say it on your phone and lock it in.",
    rulesExtra: "3 speaking moments: <b>+100</b> each. Round 6: <b>double</b>. Final pitch: <b>+200</b>!",
    nobody: "Nobody got this one. It trips up a lot of candidates in real interviews!", cracked: "got it right",
    next: "Next round →", finale: "Next →", winner: "speak like interview pros!", endLine: "You’re ready to sound as good as you are!"
  },
  offerEyebrow: "EduMoon Tech · Technical round feedback",
  offerTitle: "How you’d come across",
  offers: [
    { min: 0.7, icon: "crown", title: "Confident communicator", text: "Clear, structured and calm. Interviewers will remember you." },
    { min: 0.45, icon: "message-circle", title: "Clear explainer", text: "Strong! Practise your project pitch aloud 3 times this week." },
    { min: 0.2, icon: "mic", title: "Finding your voice", text: "Good start. Learn 2 phrases from the card each day." },
    { min: 0, icon: "book-open", title: "Getting ready", text: "Everyone starts here. Do one mock interview with a friend this week." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon English Club · Interview English Pro",
      title: "Technical round, 10:30 AM. The interviewer leans forward: “Tell me about your project.” You know your project. But can you say it well?",
      cards: [["message-circle", "The English of the technical round"], ["mic", "3 speaking moments and a final pitch"], ["list-checks", "Leave with phrases for every hard moment"]]
    },
    { type: "rules" },

    // ---------- Round 1: Explaining your project ----------
    {
      type: "learn", door: 1,
      title: "Explain your project in 60 seconds: problem, build, challenge, result.",
      points: [["The problem", "“Students had to register for the fest on paper.”"], ["What you built and with what", "“I built a website with React and Firebase.”"], ["The challenge and the result", "“Two people could book the same slot. I fixed it with… 300+ students used it.”"]],
      highlightLast: true,
      side: { label: "Avoid", items: [["x", "Starting with the tech", "Start with the problem"], ["x", "“We did everything”", "Say what YOU did"], ["x", "5 minutes of detail", "60 seconds, then let them ask"]] }
    },
    IQ(1, "Your Project", {
      prompt: "“Tell me about your project.” Best opening?",
      options: ["“My team did it, I can show you the code.”", "“Sir, it is a website project using HTML, CSS, JS, React, Node, MongoDB, Firebase…”", "“Students had to register for our college fest on paper, and it took hours. So I built a website for it.”", "“It is a very good project, sir.”"], answer: 2,
      hint: "What should come before the technology?",
      note: "Start with the problem. It gives the interviewer a reason to care about everything that follows.", badge: "lightbulb"
    }),
    IQ(1, "Your Project", Object.assign({}, SAY, {
      prompt: "Ravi explains his project. Which line weakens it?",
      code: ["Students had to register for our fest on paper, so I built a website for it.", "I built the frontend in React and used Firebase to store registrations.", "The rest, basically, my friends did, I don’t know much about it.", "Over 300 students registered through it in the first week."],
      outputOptions: ["It distances him from his own project and invites tough questions", "It’s too confident", "It should come first"], outputAnswer: 0, bugLine: 2,
      bugText: "it says “I don’t know my own project”. Better: “My teammates handled the payment part; I focused on the frontend and the database.”",
      hint: "Which line would make the interviewer doubt him?",
      note: "It’s fine that teammates did parts. Say it with confidence and be clear about your part.", badge: "x"
    })),
    IQ(1, "Your Project", {
      prompt: "After your 60-second explanation, what’s a strong way to finish?",
      options: ["“That’s it.”", "“So in short, it replaced paper registration for 300+ students. Would you like me to go deeper into any part?”", "Keep talking until they stop you", "Stop suddenly and stay quiet"], answer: 1,
      hint: "Summarise, then hand control back.",
      note: "A one-line summary and an offer to go deeper. It shows confidence and lets them steer.", badge: "check",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: "I don't know" ----------
    {
      type: "learn", door: 2,
      title: "“I don’t know” is fine. How you say it is what counts.",
      points: [["Never bluff", "Interviewers can tell, and it hurts trust"], ["Show how you’d think", "“I’m not sure, but here’s how I’d work it out…”"], ["Show how you’d learn", "“I haven’t used it yet. I’d start with the official docs…”"]],
      highlightLast: true,
      side: { label: "Weak → Strong", items: [["circle-x", "“I don’t know.” (silence)", "Gives them nothing"], ["circle-x", "Making something up", "The worst option"], ["circle-check", "“I’m not sure, but my guess is… because…”", "Honest and shows thinking"]] }
    },
    IQ(2, "Saying I Don’t Know", {
      prompt: "“What is a deadlock?” You’ve heard the word but aren’t sure. Best answer?",
      options: ["“I’m not fully sure, but I think it’s when two processes each wait for something the other has, so neither can continue. Is that right?”", "“That’s not in our syllabus.”", "“I don’t know.” and wait", "Make up a confident definition"], answer: 0,
      hint: "Honest, with your best thinking.",
      note: "Honest + your reasoning + a check. That’s actually the right idea, and interviewers respect the honesty.", badge: "lightbulb"
    }),
    IQ(2, "Saying I Don’t Know", {
      prompt: "“Have you worked with Docker?” You haven’t. Best answer?",
      options: ["“Yes, a lot.”", "“No.” and nothing else", "“Not yet. I know it packages apps so they run the same everywhere. I’d start with the official getting-started guide and containerise my events site.”", "“What is Docker?”"], answer: 2,
      hint: "Honest, plus what you know, plus how you’d learn.",
      note: "Saying “not yet” with a plan shows you can learn, which is what they’re really testing for freshers.", badge: "rocket"
    }),
    IQ(2, "Saying I Don’t Know", {
      prompt: "Why is bluffing worse than saying “I don’t know”?",
      options: ["Interviewers usually ask a follow-up, and the bluff falls apart, hurting your trust for every other answer", "It takes more time", "It’s too polite", "It isn’t, bluffing always works"], answer: 0,
      hint: "What happens after a bluff?",
      note: "One caught bluff makes them doubt everything else you said. Honesty is the safer strategy.", badge: "shield",
      board: true, boardLabel: "after Round 2"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Answer this like a pro, even if you don’t know: “What is a REST API?”", note: "Use: “I’m not fully sure, but…” or explain what you do know.", points: 100 },

    // ---------- Round 3: Structure ----------
    {
      type: "learn", door: 3,
      title: "Structure makes any answer sound smarter.",
      points: [["Say the number first", "“There are three main differences.”"], ["Signpost each one", "“First… Second… Finally…”"], ["End with a one-line summary", "“So the key difference is…”"]],
      highlightLast: true,
      side: { label: "Useful signposts", items: [["route", "“First of all…”", "Starts the list"], ["route", "“Another point is…”", "Moves on"], ["route", "“To sum up…”", "Wraps it up"]] }
    },
    IQ(3, "Structure", {
      prompt: "“What’s the difference between C and Python?” Best structured start?",
      options: ["“C is old, Python is new, C is hard, Python is easy, C is fast, also Python has libraries…”", "“There are three main differences: speed, how you write code, and memory. First, speed…”", "“Both are languages.”", "“Python is better.”"], answer: 1,
      hint: "Which one tells the listener what’s coming?",
      note: "Announcing “three differences” makes the answer easy to follow, and the interviewer will remember it.", badge: "list-checks"
    }),
    IQ(3, "Structure", Object.assign({}, SAY, {
      prompt: "Ravi answers “What’s the difference between an array and a linked list?” Which line breaks the structure?",
      code: ["There are two main differences: memory and access.", "First, an array uses one block of memory, while a linked list connects separate nodes.", "And also, Java is a nice language and I like it.", "Second, you can reach any array element directly, but a linked list must be followed from the start."],
      outputOptions: ["It goes off-topic in the middle of the answer", "It’s too technical", "It should be the summary"], outputAnswer: 0, bugLine: 2,
      bugText: "an off-topic line in the middle. Stay on the question until your summary",
      hint: "Which line has nothing to do with the question?",
      note: "Without line 3 this is a great answer: a number, then “first” and “second”.", badge: "x"
    })),
    IQ(3, "Structure", {
      prompt: "You realise you said something wrong in the middle of your answer. Best move?",
      options: ["Stop talking completely", "Laugh and change the subject", "Ignore it and hope they didn’t notice", "“Sorry, let me correct that. I meant a linked list, not an array.”"], answer: 3,
      hint: "What would a confident professional do?",
      note: "Correcting yourself calmly shows you’re paying attention. It’s a strength, not a weakness.", badge: "pen-tool",
      board: true, boardLabel: "after Round 3"
    }),

    // ---------- Round 4: Clarifying ----------
    {
      type: "learn", door: 4,
      title: "Asking a question is better than answering the wrong one.",
      points: [["Didn’t hear it?", "“Sorry, could you repeat the question?”"], ["Didn’t understand it?", "“Just to make sure I understand, are you asking about…?”"], ["Need a moment?", "“Let me take a few seconds to think about that.”"]],
      highlightLast: true,
      side: { label: "Interviewers like it when you", items: [["ear", "Listen fully", "Don’t start answering mid-question"], ["message-circle", "Confirm the question", "Especially long ones"], ["clock", "Pause to think", "5 seconds of thinking beats 5 minutes of rambling"]] }
    },
    IQ(4, "Clarifying", {
      prompt: "The interviewer asks a long question and you’re not sure what they want. Best response?",
      options: ["“Just to make sure I understand, are you asking how I’d store the data, or how I’d display it?”", "“Your question is confusing.”", "Stay silent", "Start answering anything, quickly"], answer: 0,
      hint: "Check before you answer.",
      note: "Confirming shows care and saves you from a long answer to the wrong question.", badge: "ear"
    }),
    IQ(4, "Clarifying", {
      prompt: "A tough question and your mind goes blank for a second. What do you say?",
      options: ["“I don’t like this question.”", "“Umm… umm… umm…”", "“Let me take a few seconds to think about that.”", "“Next question please.”"], answer: 2,
      hint: "How do you buy time like a pro?",
      note: "A calm pause sounds thoughtful. Filling the silence with “umm” sounds nervous.", badge: "clock"
    }),
    IQ(4, "Clarifying", {
      prompt: "The interviewer speaks fast and you missed a word. Best response?",
      options: ["“Sorry, could you repeat the last part of the question?”", "“Speak slowly.”", "Nod and smile", "Guess what they said"], answer: 0,
      hint: "Polite and specific.",
      note: "Asking politely is completely normal. Guessing and answering the wrong thing isn’t.", badge: "message-circle",
      board: true, boardLabel: "after Round 4"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "The host asks a long, confusing question. Respond with a clarifying question.", note: "Start with: “Just to make sure I understand, are you asking…?”", points: 100 },

    // ---------- Round 5: Filler words ----------
    {
      type: "learn", door: 5,
      title: "Fewer filler words, more confidence.",
      points: [["Common fillers", "“basically”, “actually”, “like”, “you know”, “umm”, “so so so”"], ["Replace them with a pause", "A short silence sounds confident"], ["Practise aloud", "Record yourself once. You’ll hear your own fillers immediately"]],
      highlightLast: true,
      side: { label: "Swap these", items: [["route", "“Basically, actually…”", "Just start the sentence"], ["route", "“Umm…”", "A 1-second pause"], ["route", "“Like, you know…”", "Say the specific thing"]] }
    },
    IQ(5, "Filler Words", {
      prompt: "Which answer sounds the most confident?",
      options: ["“Basically, actually, what happens is, like, the data is, you know, stored basically in the database.”", "“The data is stored in a Firebase database, organised by event and student ID.”", "“Umm… so… the data… umm… is there.”", "“It is stored somewhere, sir.”"], answer: 1,
      hint: "Which one has no filler and is specific?",
      note: "Direct and specific. Same knowledge, but it sounds twice as confident.", badge: "mic"
    }),
    IQ(5, "Filler Words", {
      prompt: "What’s the best replacement for “umm” while you think?",
      options: ["Talking faster", "“Basically”", "A short, calm pause", "“You know”"], answer: 2,
      hint: "Sometimes the best word is no word.",
      note: "A pause feels long to you but natural to the listener. Use it.", badge: "clock"
    }),
    IQ(5, "Filler Words", {
      prompt: "What’s the fastest way to find your own filler words?",
      options: ["Read a grammar book", "Ignore them", "Ask the interviewer", "Record yourself answering one question on your phone and listen back"], answer: 3,
      hint: "You can’t fix what you can’t hear.",
      note: "Most people are shocked the first time. One recording is enough to start fixing it.", badge: "smartphone",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: The tricky question (double) ----------
    {
      type: "learn", door: 6,
      title: "The tricky question: stay calm, use everything.",
      points: [["Clarify if needed", "Make sure you know what they’re asking"], ["Structure your answer", "A number, then first, second, finally"], ["Be honest about limits", "Say what you know, and how you’d find the rest"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game!"], ["flame", "Tricky technical-round moments", "Use every phrase"], ["mic", "Then the 90-second pitch", "+200 for the best"]] }
    },
    IQ(6, "The Tricky Question", {
      double: true,
      prompt: "“Your project would crash with 1 million users. How would you fix it?” You’ve never scaled anything. Best answer?",
      options: ["“It won’t crash.”", "“I haven’t scaled an app that big yet, but I’d first find the bottleneck, probably the database. Then I’d look at caching and spreading the load across servers. I’d want to measure before changing anything.”", "“I don’t know about servers.”", "“My friend handled the backend.”"], answer: 1,
      hint: "Honest, structured, and shows thinking.",
      note: "Honest about experience, then a clear thinking process. That’s exactly what interviewers look for in freshers.", badge: "rocket"
    }),
    IQ(6, "The Tricky Question", Object.assign({}, SAY, {
      double: true,
      prompt: "Ravi answers “Why did you use Firebase and not MySQL?” Which line weakens it?",
      code: ["Good question. There were two reasons.", "First, I needed live updates when students registered, and Firebase does that easily.", "Second, I was the only developer, and Firebase meant no server to manage.", "But honestly MySQL is useless and nobody uses it anymore."],
      outputOptions: ["It’s an untrue, extreme claim that damages a good answer", "It’s too short", "It should come first"], outputAnswer: 0, bugLine: 3,
      bugText: "an untrue, extreme claim. MySQL is widely used. Better: “For a larger app with complex queries, I’d consider MySQL.”",
      hint: "Which line would an interviewer immediately disagree with?",
      note: "Lines 1 to 3 are excellent: structured, with real reasons. Avoid extreme claims; show you know the trade-offs.", badge: "x"
    })),
    IQ(6, "The Tricky Question", {
      double: true,
      prompt: "At the end, the interviewer says: “You seemed nervous.” Best response?",
      options: ["Apologise five times", "“Your questions were too hard.”", "“No, I wasn’t.”", "“A little, yes. Interviews matter to me. But I enjoyed explaining my project, and I’d love to show more of what I can do.”"], answer: 3,
      hint: "Honest, positive and calm.",
      note: "Admitting it calmly and turning to the positive is mature. Arguing or over-apologising isn’t.", badge: "heart",
      board: true, boardLabel: "after Round 6"
    }),

    { type: "speak", eyebrow: "Final pitch · best one wins +200", prompt: "Explain your own project (or a dream project) in 90 seconds: problem, build, challenge, result.", note: "Use a structure, no fillers, and finish with “Would you like me to go deeper into any part?”", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "Technical Round Phrase Card", note: "Screenshot this. Say each phrase aloud once before your interview.", items: PHRASES },
    {
      type: "end",
      joinTitle: "Join the EduMoon English Club",
      joinText: "Mock interviews, speaking games and GD practice every week. No fear of mistakes.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
