// HR Round (EduMoon Skills Club). For final year students. The sequel to Resume Rescue.
// Ravi's fixed resume got him an interview call. Teams help him get through the HR round in 6 rounds.
// Step types used: story · rules · learn · door · speak · compare · offer · wordlist · end

const R = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 45, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
// "Tap the line in Ravi's answer" questions use the bug door with friendlier labels.
const TAP = { kind: "bug", time: 55, step1: "Why is it a problem?", step2: "Tap the line in Ravi’s answer", say1: "First pick why it’s a problem.", say2: "Now tap the line in Ravi’s answer.", partO: "the reason", partL: "the line", lineLabel: "line", bugLabel: "The weak line is" };

// The 7 answer frameworks: the take-home card, the Screen Deck and the Host Guide.
const FRAMES = [
  ["Tell me about yourself", "Present → Past → Future. Who you are, what you’ve done, what you want next. 60 to 90 seconds."],
  ["Why should we hire you?", "Their need + your proof + what you’ll do for them."],
  ["What’s your weakness?", "A real weakness + what you’re doing about it + the progress so far."],
  ["Tell me about your project", "Say “I”, not only “we”. One real problem you solved. What you’d improve."],
  ["Situation questions", "Talk first, solve together, tell your lead early. Never blame, never hide."],
  ["Bond, relocation, salary", "Be honest and flexible. Ask for the details. Never sign what you haven’t read."],
  ["Any questions for us?", "Always ask one, about the work or the team. Never “Did I get the job?”"]
];

window.GAME = {
  id: "hr-round",
  title: "HR Round",
  club: "Skills Club",
  tagline: "Ravi’s fixed resume got him an interview call. Help him crack the HR round.",
  art: window.STORY_ART,
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Cracked",
    rulesEyebrow: "How the HR Round works", rulesTitle: "Hear the question. Pick the best answer. Get the offer.",
    learnText: "The host shares what the interviewer is really checking.", crackTitle: "Answer",
    crackText: "Pick Ravi’s best answer on your phone and lock it in.",
    rulesExtra: "Speak (optional): <b>+100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Most freshers get it wrong in real interviews too!", cracked: "got it right",
    next: "Next round →", finale: "Next →", winner: "cracked the HR round!", endLine: "Ravi got the offer!"
  },
  // Used by the Screen Deck and the Host Guide.
  guide: {
    years: "Final year (3rd years preparing early are welcome)", time: "40 minutes", level: "Advanced",
    about: "Ravi’s fixed resume (from Resume Rescue) got him an interview call at EduMoon Tech. In 6 rounds, teams pick his best answers to the questions HR really asks freshers and find the weak lines in his answers. The game ends with Ravi’s Before → After answers, a 60-second final challenge and an offer letter for every team.",
    outcomes: "7 answer frameworks for the most common HR questions, the difference between a claim and proof, and the confidence to answer “Tell me about yourself” in 60 seconds.",
    tone: "Many students have never faced an interview. Keep it light: every wrong answer here is one they won’t give in a real interview. Praise students who speak, even if their English isn’t perfect. Clear and simple beats fancy.",
    extra: [["Played Resume Rescue?", "Mention it at the start: “Remember Ravi? His resume worked. Now he has to get through the interview.” It’s fine if they haven’t played it."]]
  },
  offerEyebrow: "EduMoon Tech · HR results",
  offerTitle: "Your offer letters are here",
  offers: [
    { min: 0.7, icon: "rocket", title: "Offer with a joining bonus", text: "Interview ready. You answer with proof, not just claims." },
    { min: 0.45, icon: "briefcase", title: "Offer letter", text: "Strong! Practise “Tell me about yourself” aloud 3 times this week." },
    { min: 0.2, icon: "clock", title: "Shortlisted for a second round", text: "Close. Use the 7 frameworks below before your next interview." },
    { min: 0, icon: "book-open", title: "Call back next drive", text: "Everyone starts somewhere. Do a mock interview with a friend this week." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Skills Club · HR Round",
      title: "Ravi’s new resume worked. EduMoon Tech called him for an interview. Can your team get him the offer?",
      cards: [["file-user", "The real questions HR asks freshers"], ["message-circle", "6 rounds: pick Ravi’s best answer, find his weak lines"], ["briefcase", "Your score decides the offer letter"]]
    },
    { type: "rules" },

    // ---------- Round 1: Tell me about yourself ----------
    {
      type: "learn", door: 1,
      title: "“Tell me about yourself” is not your life story.",
      points: [["It’s a 60 to 90 second pitch", "Your first answer sets the tone for the whole interview"], ["Present → Past → Future", "Who you are now, what you’ve done, what you want next"], ["Skip family details and marks", "They’re on your resume, or they don’t matter for the job"]],
      highlightLast: true,
      side: { label: "The interviewer is checking", items: [["message-circle", "Can you speak clearly?", "Calm, simple English is enough"], ["target", "Do you know what you want?", "A clear role, not “any job”"], ["badge-check", "Can you back it up?", "One real thing you’ve built or done"]] }
    },
    R(1, "Tell Me About Yourself", {
      prompt: "“Tell me about yourself.” Which opening is best?",
      options: ["“Myself Ravi. My father is a government employee and my mother is a homemaker. I have one sister.”", "“I am a hardworking, honest and dedicated person with a positive attitude.”", "“I’m Ravi, a final year CSE student. I built a college events website that 300+ students used, and I want to start my career as a web developer.”", "“As you can see in my resume, I did BTech in CSE.”"], answer: 2,
      hint: "Which one tells the interviewer who Ravi is, what he’s done and what he wants?",
      note: "Present (final year CSE), past (a site 300 students used), future (web developer). Under 20 seconds, and the interviewer already has a follow-up question.", badge: "user"
    }),
    R(1, "Tell Me About Yourself", Object.assign({}, TAP, {
      prompt: "Ravi’s full answer. Which line should he cut?",
      code: ["I’m Ravi, a final year CSE student from Vizag.", "I built a college events website that 300+ students used to register for our fest.", "My hobbies are watching movies, and my strength is that I am very hardworking.", "Now I want to grow as a web developer in a team like yours."],
      outputOptions: ["It’s generic and adds nothing for this job", "It’s too short", "Hobbies should come first"], outputAnswer: 0, bugLine: 2,
      bugText: "“very hardworking” and “watching movies” could be anyone. Replace it with one more real thing, like his internship",
      hint: "Which line could be in every student’s answer?",
      note: "Every line should be specific to you. “Hardworking” is a claim; “fixed 12 bugs in my internship” is proof.", badge: "search"
    })),
    R(1, "Tell Me About Yourself", {
      prompt: "How long should your “Tell me about yourself” answer be?",
      options: ["10 seconds", "60 to 90 seconds", "5 minutes", "As long as the interviewer lets you talk"], answer: 1,
      hint: "Long enough for 3 parts, short enough that they stay interested.",
      note: "60 to 90 seconds. Practise it aloud with a timer until it feels natural, not memorised.", badge: "clock",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Why should we hire you? ----------
    {
      type: "learn", door: 2,
      title: "Proof beats claims.",
      points: [["A claim", "“I am a quick learner.” Everyone says it, so it means nothing"], ["Proof", "“I learned React in 3 weeks and used it in my internship.”"], ["Connect it to them", "What does this company need, and how have you already done it?"]],
      highlightLast: true,
      side: { label: "The formula", items: [["target", "Their need", "“You need someone who can build web pages.”"], ["badge-check", "Your proof", "“I’ve built two, one used by 300 students.”"], ["rocket", "What you’ll do", "“I’ll learn your stack fast and contribute.”"]] }
    },
    R(2, "Why Should We Hire You?", {
      prompt: "“Why should we hire you?” Which answer is best?",
      options: ["“Because I need this job very badly.”", "“You need people who can build and fix web pages. I’ve done that: a site 300 students used, and 12 bug fixes in my internship. I’ll bring the same effort here.”", "“Because I am the best candidate you will meet today.”", "“Because I am a quick learner and a team player.”"], answer: 1,
      hint: "Which answer has their need, real proof, and what he’ll do?",
      note: "Need, proof, contribution. The others are either about Ravi’s needs or claims anyone can make.", badge: "briefcase"
    }),
    R(2, "Why Should We Hire You?", {
      prompt: "Which of these is PROOF, not just a claim?",
      options: ["“I am very passionate about coding.”", "“I am a good team player.”", "“I am a quick learner.”", "“I learned React in 3 weeks and used it to build the login page in my internship.”"], answer: 3,
      hint: "Which one could the interviewer actually check?",
      note: "Proof has a what, a how, and often a number. Turn every claim on your resume into a proof sentence.", badge: "badge-check"
    }),
    R(2, "Why Should We Hire You?", {
      prompt: "“We have 200 candidates for this role. What makes you different?” Ravi should…",
      options: ["Say he is better than everyone else", "Point to one specific thing he built and what it shows about him", "Say his college is better than other colleges", "Smile and say “You’ll see after you hire me”"], answer: 1,
      hint: "Different means specific, not louder.",
      note: "One real story beats any big claim. “I built X, and it taught me Y” is memorable.", badge: "star",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: What's your weakness? ----------
    {
      type: "learn", door: 3,
      title: "The weakness question tests honesty and self-awareness.",
      points: [["Don’t say “no weaknesses”", "It sounds like you don’t know yourself"], ["Avoid the fake ones", "“I’m a perfectionist” is the most-heard answer in India"], ["Avoid the fatal ones", "Don’t pick a weakness that’s the core of the job"]],
      highlightLast: true,
      side: { label: "The formula", items: [["search", "A real weakness", "“I used to hesitate in meetings.”"], ["route", "What you did about it", "“I joined the English Club.”"], ["chart-column", "The progress", "“Now I present in every review.”"]] }
    },
    R(3, "Your Weakness", {
      prompt: "“What’s your biggest weakness?” Which answer is best?",
      options: ["“I am a perfectionist.”", "“I don’t have any weaknesses.”", "“I get angry quickly and fight with teammates.”", "“I used to hesitate to speak in team meetings, so I joined our college English Club. Now I present in every project review.”"], answer: 3,
      hint: "Which one is real, shows action and shows progress?",
      note: "Real + action + progress. It shows you can learn, which is what every company wants from a fresher.", badge: "lightbulb"
    }),
    R(3, "Your Weakness", {
      prompt: "Why is “I am a perfectionist” a weak answer?",
      options: ["Interviewers hear it all the time, and it sounds like you’re hiding a real weakness", "It’s too honest", "It’s too long", "Perfectionists don’t get hired"], answer: 0,
      hint: "Think about how many times HR hears it in one day.",
      note: "It’s a cliché. Pick a real, fixable weakness instead.", badge: "x"
    }),
    R(3, "Your Weakness", {
      prompt: "Ravi is applying for a developer role. Which weakness should he NOT mention?",
      options: ["“I sometimes take on too many tasks at once.”", "“I’m not comfortable with public speaking yet.”", "“I don’t like writing code.”", "“I’m still learning to estimate how long tasks take.”"], answer: 2,
      hint: "Which one is the job itself?",
      note: "Never pick a weakness that’s the main part of the role. The others are real and fixable.", badge: "shield",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Answer “What’s your weakness?” in 20 seconds.", note: "A real weakness, what you’re doing about it, and the progress so far.", points: 100 },

    // ---------- Round 4: Your project ----------
    {
      type: "learn", door: 4,
      title: "Your project is where the interviewer digs deepest.",
      points: [["Say “I” for your part", "“We built it” hides what you did"], ["Have one real problem ready", "A bug, a deadline, a teammate leaving, and how you handled it"], ["Only say what you can explain", "Every word you say can become the next question"]],
      highlightLast: true,
      side: { label: "Questions to prepare", items: [["user", "What was your part?", "Name the screens, features or code you did"], ["flame", "What was the hardest part?", "A real problem and your fix"], ["route", "What would you improve?", "Shows you keep learning"]] }
    },
    R(4, "Your Project", {
      prompt: "“What was YOUR part in the hackathon project?” Best answer?",
      options: ["“We all did everything together.”", "“My team leader did most of it, I helped.”", "“I built the attendance screen and the database. When two people marked attendance at once, I fixed the duplicate entries.”", "“It was a very good project and we won 2nd prize.”"], answer: 2,
      hint: "Which answer says exactly what Ravi did?",
      note: "Specific work + a real problem he solved. Now the interviewer can ask good follow-up questions, and Ravi knows the answers.", badge: "code"
    }),
    R(4, "Your Project", Object.assign({}, TAP, {
      prompt: "Ravi explains his events website. Which line could get him into trouble?",
      code: ["I built the frontend with HTML, CSS and JavaScript.", "300+ students used it to register for our college fest.", "For the backend we used Blockchain and AI.", "Next time I’d add email confirmations for each registration."],
      outputOptions: ["Blockchain is an old technology", "He’ll be asked to explain it, and he can’t back it up", "He should have said it first"], outputAnswer: 1, bugLine: 2,
      bugText: "buzzwords he didn’t really use. The next question will be “How did you use Blockchain?”",
      hint: "Which line sounds impressive but probably isn’t true?",
      note: "Interviewers love to dig into buzzwords. Only mention what you actually used and can explain.", badge: "shield"
    })),
    R(4, "Your Project", {
      prompt: "“What was the hardest problem in your project?” Ravi can’t think of a big one. Best move?",
      options: ["Make up a dramatic story", "Say “There were no problems, everything went smoothly”", "Change the topic to his marks", "Pick a real small problem, like a bug or a deadline, and explain how he solved it"], answer: 3,
      hint: "Small and true beats big and made up.",
      note: "A small real problem, explained well, shows how you think. Made-up stories fall apart in the next question.", badge: "lightbulb",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Situation questions ----------
    {
      type: "learn", door: 5,
      title: "Situation questions check how you’ll behave at work.",
      points: [["They start with “What would you do if…”", "A teammate, a deadline, a mistake, a new task"], ["Talk first", "Speak to the person directly before going to anyone else"], ["Tell your lead early", "Bad news early is fine. Bad news late is a problem"]],
      highlightLast: true,
      side: { label: "Never in a situation answer", items: [["circle-x", "Blame others", "Even if it was their fault"], ["circle-x", "Hide a problem", "It always comes out later"], ["circle-x", "Do nothing", "“Not my problem” is the worst answer"]] }
    },
    R(5, "What Would You Do?", {
      prompt: "“A teammate isn’t doing their part, and the deadline is in 2 days. What do you do?”",
      options: ["“I’d talk to them privately, find out what’s blocking them, split the remaining work, and tell our lead if we might still miss the deadline.”", "“I’d complain to the manager immediately.”", "“I’d quietly do all their work myself.”", "“I’d ignore it. It’s not my problem.”"], answer: 0,
      hint: "Talk first, solve together, tell the lead early.",
      note: "It shows you can work with people and still protect the deadline.", badge: "users"
    }),
    R(5, "What Would You Do?", {
      prompt: "“Your manager gives you a task you don’t know how to do. What do you do?”",
      options: ["Say yes and hope for the best", "Say no, it’s outside your skills", "Say yes, ask 1 or 2 clarifying questions, try it first, and ask for help early if you’re stuck", "Copy someone else’s work"], answer: 2,
      hint: "Companies expect freshers not to know everything. What do they want to see?",
      note: "Freshers aren’t expected to know everything. They’re expected to try, ask good questions, and not hide when stuck.", badge: "hand"
    }),
    R(5, "What Would You Do?", {
      prompt: "“You made a mistake that broke something at work. What do you do?”",
      options: ["Hide it and hope nobody notices", "Tell your lead quickly, explain what happened, help fix it, and share how you’ll avoid it next time", "Blame the tester for not catching it", "Wait to see if it fixes itself"], answer: 1,
      hint: "Which answer shows you can be trusted?",
      note: "Everyone makes mistakes. Owning them quickly is what builds trust.", badge: "heart",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: The final questions (double) ----------
    {
      type: "learn", door: 6,
      title: "The last 5 minutes decide more than you think.",
      points: [["Relocation", "Be honest about your preference, but show you’re flexible"], ["Bonds and agreements", "Common in Indian service companies. Ask what it covers before you sign"], ["“Any questions for us?”", "Always ask one. It shows real interest"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game!"], ["target", "3 final questions", "Then Ravi’s Before → After"], ["mic", "Then the final challenge", "Your own 60-second answer"]] }
    },
    R(6, "The Final Questions", {
      double: true,
      prompt: "“Are you willing to relocate to Bengaluru or Hyderabad?” Ravi prefers Vizag but would move. Best answer?",
      options: ["“No, only Vizag.”", "“I’ll ask my parents and let you know.”", "“Yes. I’d prefer Vizag if there’s a choice, but I’m open to relocating for the right role.”", "“Yes, anywhere at all, I don’t mind anything.”"], answer: 2,
      hint: "Honest about his preference, and still flexible.",
      note: "Honest and flexible. Saying “anywhere, I don’t mind anything” can sound desperate; a flat “no” can end the interview.", badge: "map"
    }),
    R(6, "The Final Questions", {
      double: true,
      prompt: "“This role has a 2-year service agreement.” What should Ravi do?",
      options: ["Sign immediately without reading it", "Refuse and walk out", "Say yes now and plan to break it later", "Ask what it covers (training, notice period, the penalty amount) and read it before signing"], answer: 3,
      hint: "What would you want to know before signing anything?",
      note: "Bonds are common for freshers in India. Asking about them is normal and professional. Never sign what you haven’t read.", badge: "scroll"
    }),
    R(6, "The Final Questions", {
      double: true,
      prompt: "“Do you have any questions for us?” Which question is best?",
      options: ["“No, nothing.”", "“What would a new joiner on this team work on in the first 3 months?”", "“How many leaves do I get?”", "“Did I get the job?”"], answer: 1,
      hint: "Which question shows he’s thinking about the work?",
      note: "Ask about the work, the team or how to succeed. Leave leaves and salary for HR after the offer.", badge: "message-circle",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Before → After, final challenge, offers, take-home ----------
    {
      type: "compare", eyebrow: "You coached him", title: "Ravi’s answers: Before → After",
      before: ["“Myself Ravi. My father is a government employee…”", "“Hire me because I need this job.”", "“My weakness? I am a perfectionist.”", "“We all did everything together.”", "“For the backend we used Blockchain and AI.”", "“Questions? No, nothing.”"],
      after: ["“I’m Ravi, a final year CSE student who built a site 300 students used…”", "“You need people who build and fix web pages. I’ve done that.”", "“I used to hesitate in meetings, so I joined the English Club…”", "“I built the attendance screen and fixed the duplicate entries.”", "Only the tools he really used, explained simply", "“What would a new joiner work on in the first 3 months?”"],
      note: "Same Ravi, same projects. He just answered with proof instead of claims."
    },
    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "Your own “Tell me about yourself” in 60 seconds.", note: "Present → Past → Future. The room claps; the host picks the best one.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "7 HR Answer Frameworks", note: "Screenshot this. Practise each one aloud before your next interview.", items: FRAMES },
    {
      type: "end",
      joinTitle: "Join the EduMoon Skills Club",
      joinText: "Mock interviews, resumes, internships and career games every week. Get placed, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
window.HR_FRAMES = FRAMES;
