// Spot the AI (EduMoon AI Lab). For all years.
// Human or AI? Then the real lesson: guessing isn't reliable, so the real skill is checking AI's work and using it well.
// NOTE: the "human" writing samples in Rounds 1 and 2 were written as examples for this game.
// Swap them for real student writing (with permission) to make the game even better.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const AQ = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 45, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
// "Find the problem line" questions use the bug door with friendlier labels.
const CHECK = { kind: "bug", time: 60, step1: "What’s wrong with it?", step2: "Tap the problem line", say1: "First pick what’s wrong.", say2: "Now tap the problem line.", partO: "the problem", partL: "the line", lineLabel: "line", bugLabel: "The problem line is" };

// The take-home card: 8 rules for using AI the smart way.
const RULES = [
  ["Use it to learn, not to skip learning", "Ask it to explain, then practise yourself."],
  ["Check every fact", "AI can be confidently wrong. Verify anything important."],
  ["Search every source it gives", "It sometimes invents papers, links and quotes."],
  ["Understand every line you submit", "If you can’t explain it, you can’t use it."],
  ["Give it context", "Who you are, what you need and the format you want."],
  ["Never paste private data", "No passwords, Aadhaar numbers or other people’s details."],
  ["Follow your college’s rules", "Say when you used AI if the rules ask you to."],
  ["Keep your own voice", "Your real details and experiences make writing yours."]
];

window.GAME = {
  id: "spot-the-ai",
  title: "Spot the AI",
  club: "AI Lab",
  tagline: "Human or AI? Then the real skill: catching AI when it’s wrong.",
  art: window.STORY_ART,
  guide: {
    years: "All years · no coding needed", time: "35 minutes", level: "Beginner",
    about: "It starts as a guessing game: was this written by a human or by AI? Then it turns: AI detectors and guessing are often wrong, so the real skill is checking what AI tells you. Teams catch AI making confident mistakes, write better prompts, and decide when using AI is smart and when it’s cheating themselves.",
    outcomes: "8 rules for using AI the smart way, the habit of checking AI’s facts and sources, and a clear line between learning with AI and skipping learning.",
    tone: "Don’t make this anti-AI. Most students already use it, and that’s fine. The message is: use it like a smart senior who is sometimes wrong, not like an answer key. If a student admits to copying from AI, don’t judge; ask what they’d do differently now.",
    extra: [["Make it yours", "The “human” writing samples in Rounds 1 and 2 were written as examples for this game. For an even better game, swap them for real paragraphs from your interns or students (with permission) by editing content.js."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Spotted",
    rulesEyebrow: "How Spot the AI works", rulesTitle: "Read it. Judge it. Check it.",
    learnText: "The host shares one thing about how AI writes and thinks.", crackTitle: "Judge",
    crackText: "Pick your answer on your phone and lock it in.",
    rulesExtra: "Problem-line questions: <b>100</b> for what’s wrong + <b>100</b> for the line. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. AI fools a lot of people this way!", cracked: "got it right",
    next: "Next round →", finale: "Next →", winner: "are today’s AI detectives!", endLine: "You now use AI smarter than most people!"
  },
  offerEyebrow: "EduMoon AI Lab · AI skills check",
  offerTitle: "Your AI skill level",
  offers: [
    { min: 0.7, icon: "sparkles", title: "AI Pro", text: "You use AI like a smart senior who is sometimes wrong. Exactly right." },
    { min: 0.45, icon: "badge-check", title: "Smart User", text: "Strong! Start checking every fact AI gives you and you’re there." },
    { min: 0.2, icon: "search", title: "Getting There", text: "Good start. This week, ask AI to explain before you ask it to do." },
    { min: 0, icon: "book-open", title: "Beginner", text: "Everyone starts here. Save the 8 rules and try one today." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon AI Lab · Spot the AI",
      title: "Half the writing you read today might be AI. Can your team tell? And more importantly, can you tell when AI is wrong?",
      cards: [["search", "Human or AI? Guess the writer"], ["lightbulb", "Catch AI giving confident wrong answers"], ["sparkles", "Learn to use AI the smart way"]]
    },
    { type: "rules" },

    // ---------- Round 1: Human or AI? ----------
    {
      type: "learn", door: 1,
      title: "AI writing often sounds smooth but says little.",
      points: [["Big general words", "“Transformative journey”, “fostered growth”, “a testament to”"], ["Few real details", "No names, places, numbers or small surprises"], ["Too perfect", "Every sentence the same length, everything neatly in threes"]],
      highlightLast: true,
      side: { label: "Human writing often has", items: [["map", "Specific details", "“the CSE block”, “20 minutes late”"], ["heart", "Real feelings", "Embarrassment, jokes, small complaints"], ["pen-tool", "Rough edges", "Short sentences, odd word choices"]] }
    },
    AQ(1, "Human or AI?", {
      prompt: "“My first day at college.” Who wrote this?",
      code: ["Embarking on my college journey was a truly transformative experience.", "It opened doors to new opportunities, fostered meaningful connections,", "and laid a strong foundation for both personal and academic growth."],
      options: ["A human", "AI"], answer: 1,
      hint: "Can you find one specific detail in it? A name, a place, a number?",
      note: "Very likely AI: smooth, general, and nothing in it could only be about one person’s first day.", badge: "sparkles"
    }),
    AQ(1, "Human or AI?", {
      prompt: "Another “My first day at college.” Who wrote this?",
      code: ["First day, I got lost twice looking for the CSE block.", "Ended up in the chemistry lab. A senior just pointed and laughed.", "Reached my class 20 minutes late, and the only empty seat was in the front row."],
      options: ["A human", "AI"], answer: 0,
      hint: "How specific and how messy is it?",
      note: "Feels human: real places, a small embarrassing moment, a number. (AI CAN be told to write like this, which is why guessing isn’t enough. More on that in Round 3.)", badge: "user"
    }),
    AQ(1, "Human or AI?", {
      prompt: "Which clue suggests AI writing the MOST?",
      options: ["A spelling mistake", "Short, choppy sentences", "General phrases like “transformative experience” with no real details", "A local place name"], answer: 2,
      hint: "Three of these are things humans do more often than AI.",
      note: "Smooth, general phrases with no specifics are the biggest clue. But it’s a clue, not proof.", badge: "search",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: LinkedIn posts ----------
    {
      type: "learn", door: 2,
      title: "On LinkedIn, real details beat fancy words.",
      points: [["Recruiters read hundreds of posts", "The AI-sounding ones all blur together"], ["What stands out", "What you did, with numbers, and who helped you"], ["Using AI is fine", "If the facts are yours, you check it, and it still sounds like you"]],
      highlightLast: true,
      side: { label: "Overused AI phrases", items: [["x", "“I’m thrilled to announce”", "Every second post starts this way"], ["x", "“A testament to”", "Sounds grand, says nothing"], ["x", "“In today’s fast-paced world”", "Delete it. Start with your point"]] }
    },
    AQ(2, "LinkedIn Posts", Object.assign({}, CHECK, {
      prompt: "A student’s internship post. Which line sounds like empty AI filler?",
      code: ["I just finished my 8-week internship at TechNova.", "I fixed 14 bugs in their billing app and wrote my first real unit tests.", "This journey has been a testament to the power of perseverance, collaboration and continuous learning.", "Thanks to Anil sir for reviewing every one of my pull requests."],
      outputOptions: ["It’s generic filler that says nothing about this internship", "It has a spelling mistake", "It’s too specific"], outputAnswer: 0, bugLine: 2,
      bugText: "it could be in any post by anyone. The other lines are specific and real",
      hint: "Which line could be copied into anyone’s post?",
      note: "Cut it, and the post gets better. The real details (14 bugs, unit tests, Anil sir) are what people remember.", badge: "x"
    })),
    AQ(2, "LinkedIn Posts", {
      prompt: "Which LinkedIn line sounds the most like a real person?",
      options: ["“Our team’s attendance app got 2nd place out of 60 teams, and I built the login screen at 3 AM.”", "“Leveraging synergies, I drove impactful outcomes.”", "“In today’s fast-paced digital landscape, adaptability is key.”", "“I’m thrilled to embark on this exciting new chapter of growth.”"], answer: 0,
      hint: "Which one has something that actually happened?",
      note: "Real numbers, a real role and a real moment. That’s what makes a post feel human and memorable.", badge: "user"
    }),
    AQ(2, "LinkedIn Posts", {
      prompt: "Is it wrong to use AI to help write a LinkedIn post?",
      options: ["Yes, it’s always cheating", "Yes, LinkedIn bans it", "Only on weekends", "No, if the facts are yours, you check it, and it still sounds like you"], answer: 3,
      hint: "Think of AI like a friend helping you edit.",
      note: "Using AI to polish is fine. Letting it invent experiences, or posting without reading it, is not.", badge: "check",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Can you trust a detector? ----------
    {
      type: "learn", door: 3,
      title: "Plot twist: nobody can reliably spot AI. Not even AI detectors.",
      points: [["Detectors make mistakes", "They flag real human writing, especially simple, formal English"], ["AI can sound human", "Ask it to add typos and details, and it will"], ["So the real skill is different", "Not “who wrote this?” but “is this actually true and good?”"]],
      highlightLast: true,
      side: { label: "What this means for you", items: [["file-text", "Keep your drafts", "Version history proves your work"], ["search", "Judge content, not style", "Is it correct? Is it specific?"], ["shield", "Don’t accuse others", "Guessing can be wrong"]] }
    },
    AQ(3, "Detectors", {
      prompt: "You wrote your essay yourself, but an AI detector says it’s “80% AI”. What does that mean?",
      options: ["You definitely used AI", "Not much. Detectors are often wrong, especially with simple, formal English", "Your essay is 80% wrong", "You should rewrite it in a different language"], answer: 1,
      hint: "Remember the first point from the screen.",
      note: "Detectors give guesses, not proof. Students who write simple, formal English get flagged more often.", badge: "alarm-clock"
    }),
    AQ(3, "Detectors", {
      prompt: "What’s the best proof that you wrote something yourself?",
      options: ["Adding spelling mistakes on purpose", "Saying “I promise”", "Your drafts, notes and the document’s version history", "Writing it very fast"], answer: 2,
      hint: "What shows your work as it happened?",
      note: "Google Docs and Word keep a version history. Rough notes and drafts show your thinking step by step.", badge: "file-text"
    }),
    AQ(3, "Detectors", {
      prompt: "If guessing “human or AI?” isn’t reliable, what’s the REAL skill to learn?",
      options: ["Avoiding all AI", "Checking whether what you read is true and useful, no matter who wrote it", "Using more detectors", "Guessing faster"], answer: 1,
      hint: "What matters more: who wrote it, or whether it’s right?",
      note: "That’s what the next rounds are about: catching AI when it’s confidently wrong.", badge: "lightbulb",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Tell the room about a time AI gave you a wrong or strange answer.", note: "Everyone who uses AI has one. What was the question, and what did it say?", points: 100 },

    // ---------- Round 4: Confidently wrong ----------
    {
      type: "learn", door: 4,
      title: "AI can be wrong and sound 100% sure.",
      points: [["It predicts words", "It writes what sounds right, which is usually, not always, what is right"], ["It can invent things", "Facts, dates, quotes, links and even research papers that don’t exist"], ["So: check what matters", "Exams, assignments, health, money and anything you’ll repeat to others"]],
      highlightLast: true,
      side: { label: "How to check", items: [["search", "Search it", "Find the fact on a trusted site"], ["book-open", "Check your notes", "Textbook, class notes, official docs"], ["message-circle", "Ask it for a source", "Then open the source yourself"]] }
    },
    AQ(4, "Confidently Wrong", Object.assign({}, CHECK, {
      prompt: "You asked AI about C basics. One line is wrong. Find it.",
      code: ["In C, array indexes start at 0.", "printf is used to print output to the screen.", "scanf is used to read input from the user.", "C has a built-in string type, just like Python."],
      outputOptions: ["It’s confidently wrong: C has no built-in string type", "It’s too short", "Nothing, it’s all correct"], outputAnswer: 0, bugLine: 3,
      bugText: "C stores text in char arrays, like char name[20]. There is no string type built into C",
      hint: "How do you store a name in C?",
      note: "Three correct lines make the wrong one easy to believe. That’s exactly how AI mistakes slip through.", badge: "code"
    })),
    AQ(4, "Confidently Wrong", Object.assign({}, CHECK, {
      prompt: "AI wrote these facts for your assignment. One is wrong. Find it.",
      code: ["The Indian Constitution came into effect on 26 January 1950.", "Python was created by Guido van Rossum.", "The first version of Python was released in 2015.", "India’s helpline for reporting cyber fraud is 1930."],
      outputOptions: ["It’s confidently wrong: Python first came out in 1991", "It’s missing a full stop", "Nothing, it’s all correct"], outputAnswer: 0, bugLine: 2,
      bugText: "Python’s first version came out in 1991, not 2015",
      hint: "Python is older than most of you.",
      note: "A wrong date looks exactly as confident as a right one. Check every fact you put in an assignment.", badge: "search"
    })),
    AQ(4, "Confidently Wrong", {
      prompt: "AI gives you a research paper to cite in your project report. What should you do?",
      options: ["Search for the paper yourself first. AI sometimes invents papers that don’t exist", "Cite it, but in small font", "Ask AI if it’s sure", "Cite it. AI knows research"], answer: 0,
      hint: "Can you find it on Google Scholar or the journal’s site?",
      note: "Made-up citations have embarrassed students and even lawyers in court. If you can’t find it, don’t cite it.", badge: "book-open",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Better prompts ----------
    {
      type: "learn", door: 5,
      title: "A better question gets a better answer.",
      points: [["Say who you are", "“I’m a 2nd-year CSE student who knows basic C”"], ["Say what you need", "The task, the level, and what you’ve already tried"], ["Say the format", "“5 points”, “one example”, “a table”, “in simple English”"]],
      highlightLast: true,
      side: { label: "Weak → Strong", items: [["circle-x", "“Explain pointers”", "Too vague"], ["circle-check", "“Explain pointers to a 2nd-year student who knows arrays, with one small C example”", "Clear level and format"], ["route", "Not happy?", "Follow up: “simpler”, “shorter”, “another example”"]] }
    },
    AQ(5, "Better Prompts", {
      prompt: "You want help preparing for a campus interview. Which prompt will get the best answer?",
      options: ["“Interview tips”", "“Help me”", "“Tell me everything about interviews”", "“I’m a final year CSE student with an interview for a junior web developer role next week. Ask me 5 likely HR questions one by one and give feedback on my answers.”"], answer: 3,
      hint: "Which one tells AI who you are, what you need and how?",
      note: "Context + a clear task + a format. It even turns AI into a mock interviewer instead of a list of tips.", badge: "target"
    }),
    AQ(5, "Better Prompts", {
      prompt: "AI’s explanation is too complicated. What’s the best follow-up?",
      options: ["Copy it anyway", "Give up and close the app", "“Explain it like I’m a 2nd-year student, with one simple example”", "Ask the same question again"], answer: 2,
      hint: "Tell it what level you need.",
      note: "AI adjusts when you tell it your level. Follow-ups are where the best answers come from.", badge: "message-circle"
    }),
    AQ(5, "Better Prompts", {
      prompt: "Which of these should you NEVER paste into an AI chat?",
      options: ["Your passwords, Aadhaar number, or a friend’s private details", "A question from your textbook", "A paragraph from your own essay", "An error message from your code"], answer: 0,
      hint: "Which one would be a problem if someone else saw it?",
      note: "Treat AI chats like anything else online. Private data stays private.", badge: "lock",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Learning vs skipping learning (double) ----------
    {
      type: "learn", door: 6,
      title: "Use AI to learn faster, not to skip learning.",
      points: [["Good use", "Explain, quiz you, find your bug, give feedback on your draft"], ["Bad use", "Do your work for you while you learn nothing"], ["The test", "Could you explain it, or do it again, without AI?"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game!"], ["list-checks", "Smart or not?", "3 real situations"], ["sparkles", "Then your AI skill level", "How smart is your team?"]] }
    },
    AQ(6, "Smart Use", {
      double: true,
      prompt: "Which of these is a SMART use of AI?",
      options: ["Writing your answers during a closed-book exam", "Asking it to explain a topic you didn’t understand in class, then practising questions yourself", "Submitting AI code as your own in a lab exam", "Copying an AI essay without reading it"], answer: 1,
      hint: "Which one leaves you knowing more than before?",
      note: "Explain, then practise yourself. You learn faster, and you can still do it without AI.", badge: "lightbulb"
    }),
    AQ(6, "Smart Use", {
      double: true,
      prompt: "AI helped you write code for your project. Before you submit it, you must…",
      options: ["Submit it as fast as possible", "Add more comments", "Change the variable names so nobody notices", "Understand every line, test it, and say you used AI if your college’s rules ask you to"], answer: 3,
      hint: "What happens if someone asks you to explain it?",
      note: "If you can’t explain it, it isn’t really your work yet. And always follow your college’s AI rules.", badge: "code"
    }),
    AQ(6, "Smart Use", {
      double: true,
      prompt: "Interviewer: “Walk me through the code in your project.” You let AI write it and never understood it. What happens?",
      options: ["You struggle to explain it, and the interviewer notices", "You can ask AI during the interview", "You get extra marks for using AI", "Nothing, they won’t ask follow-up questions"], answer: 0,
      hint: "Interviewers dig into your projects. Remember the HR Round?",
      note: "Projects you don’t understand become interview traps. Use AI to learn, and you’ll be able to explain everything.", badge: "briefcase",
      board: true, boardLabel: "after Round 6"
    }),

    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "In 30 seconds: what’s YOUR rule for using AI in college from now on?", note: "Make it simple and real. The room claps; the host picks the best one.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "Use AI the Smart Way: 8 Rules", note: "Screenshot this. Try one rule the next time you open an AI chat.", items: RULES },
    {
      type: "end",
      joinTitle: "Join the EduMoon Coding Club",
      joinText: "AI, coding games and real projects every week. Learn to build, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
