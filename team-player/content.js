// Team Player (EduMoon Skills Club). For all years.
// Group projects without the drama: roles, splitting work, the teammate who does nothing, disagreements, communication and sharing credit.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const TQ = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 40, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const TN = (round, name, extra) => TQ(round, name, Object.assign({ kind: "number", time: 50 }, extra));
const TSPOT = { kind: "bug", time: 55, step1: "What is the problem?", step2: "Tap the weak line", say1: "First pick the problem.", say2: "Now tap the weak line.", partO: "the problem", partL: "the line", lineLabel: "line", bugLabel: "The weak line is" };

// The take-home card: the team project playbook.
const PLAYBOOK = [
  ["Roles from strengths", "Who codes, who designs, who writes, who presents. Ask, don’t assume."],
  ["Every task has an owner", "One name and one date next to every task. “Everyone” means nobody."],
  ["Check in twice a week", "A 10-minute call or a short message: done, doing, stuck."],
  ["Talk before you complain", "Speak to a teammate privately first. Then the guide, if needed."],
  ["Disagree with reasons", "Argue about ideas, never about people. Test, then decide."],
  ["Write it down", "Decisions, tasks and dates in one shared place."],
  ["Share the credit", "Say “we” for the project and name what each person did."],
  ["Help early", "If someone is struggling, offer help before the deadline, not after."]
];

window.GAME = {
  id: "team-player",
  title: "Team Player",
  club: "Skills Club",
  tagline: "Group projects without the drama. The skill every company tests.",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "35 minutes", level: "Beginner",
    about: "Four students, one mini project, three weeks. In 6 rounds, teams help the group pick roles, split the work, handle a teammate who does nothing, settle a disagreement, keep everyone updated and share credit on presentation day. These are the same skills interviewers check when they ask “Tell me about a time you worked in a team.”",
    outcomes: "How to split work clearly, handle free riders and arguments calmly, communicate in a group, and talk about teamwork in interviews.",
    tone: "Everyone has a group project story. Invite a few quick ones, but keep names out. Celebrate calm, fair answers over clever ones. The goal is a team that finishes, not a hero who does everything.",
    extra: [["Interview link", "Mention at the end: every answer today is also a great answer to “Tell me about a time you worked in a team.”"]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Teamed",
    rulesEyebrow: "How Team Player works", rulesTitle: "Learn the team skill. Pick the best move. Finish together.",
    learnText: "The host shares one teamwork skill.", crackTitle: "Decide",
    crackText: "Pick the team’s best move on your phone and lock it in.",
    rulesExtra: "Speak (optional): <b>+100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Most real teams get it wrong too!", cracked: "handled it",
    next: "Next round →", finale: "Next →", winner: "are today’s best team players!", endLine: "The project was submitted on time."
  },
  offerEyebrow: "EduMoon Skills Club · Team rating",
  offerTitle: "Your team rating",
  offers: [
    { min: 0.7, icon: "users", title: "Team Captain", text: "Any team would want you. Use these skills in your next project." },
    { min: 0.45, icon: "handshake", title: "Reliable Teammate", text: "Strong! Try the owner-and-date habit in your next group work." },
    { min: 0.2, icon: "compass", title: "Team Learner", text: "Good start. Read the playbook below before your next project." },
    { min: 0, icon: "book-open", title: "Solo Player", text: "Everyone starts here. Join a club team and practise." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Skills Club · Mini project",
      title: "Four students. One mini project. Three weeks. One of them has already stopped replying. Can your team get this group to the finish line?",
      cards: [["users", "Roles, tasks and deadlines"], ["handshake", "Free riders, arguments and credit"], ["trophy", "Your score decides your team rating"]]
    },
    { type: "rules" },

    // ---------- Round 1: Roles ----------
    {
      type: "learn", door: 1,
      title: "Good teams start with the right roles.",
      points: [["Ask about strengths", "“What are you good at? What do you want to learn?”"], ["Cover the key jobs", "Build, design, write the report, present"], ["Pick a coordinator", "Not a boss, just the person who tracks dates"]],
      highlightLast: true,
      side: { label: "Common roles", items: [["code", "Builder", "Code or hardware"], ["palette", "Designer", "Slides, screens, posters"], ["file-text", "Writer", "Report and documentation"]] }
    },
    TQ(1, "Roles", {
      prompt: "The team of four meets for the first time. What should they do first?",
      options: ["Discuss strengths, pick roles", "Start coding straight away", "Let the topper decide everything", "Wait until the last week to plan"], answer: 0,
      hint: "Who is good at what?",
      note: "Ten minutes on strengths and roles saves days of confusion later.", badge: "users"
    }),
    TQ(1, "Roles", {
      prompt: "Anil is shy but great at design. Meera loves speaking. Who should present on the final day?",
      options: ["Meera presents; Anil makes the slides", "Anil, because shy people must be pushed", "Nobody, they will just show the slides", "Whoever comes first on that day"], answer: 0,
      hint: "Use strengths. Everyone still contributes.",
      note: "Use strengths for the big day. Anil can still practise speaking in smaller moments, like the weekly check-ins.", badge: "mic"
    }),
    TQ(1, "Roles", {
      prompt: "What does a team “coordinator” mainly do?",
      options: ["Do all the work alone", "Give orders to everyone", "Only talk to the guide", "Track tasks and dates"], answer: 3,
      hint: "Not a boss.",
      note: "A coordinator keeps the plan and the dates visible. Everyone still owns their own work.", badge: "list-checks",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Splitting work ----------
    {
      type: "learn", door: 2,
      title: "Every task needs an owner and a date.",
      points: [["Break it into small tasks", "Not “build the app” but “login screen”, “database”, “report chapter 1”"], ["One owner per task", "“Everyone will do it” means nobody does it"], ["A date for each", "And one shared list where all can see it"]],
      highlightLast: true,
      side: { label: "A task list", items: [["check", "Login screen", "Ravi · by 12th"], ["check", "Database tables", "Sana · by 14th"], ["check", "Report chapter 1", "Anil · by 15th"]] }
    },
    TQ(2, "Splitting Work", {
      prompt: "Which task list will work best?",
      options: ["“We will all do everything together as one team.”", "“Whoever is free will do whatever is pending.”", "“Ravi: login by Friday. Sana: database by Monday.”", "“Let us decide each task on the last day.”"], answer: 2,
      hint: "Who does what, by when?",
      note: "A name and a date on each task. It is clear who is responsible, and nothing falls through the gaps.", badge: "list-checks"
    }),
    TN(2, "Splitting Work", {
      prompt: "The project has 12 small tasks and 4 members. If split equally, how many tasks does each person own?",
      answer: 3,
      hint: "12 ÷ 4.",
      note: "3 each, if the tasks are similar in size. If some tasks are bigger, balance by effort, not count.", badge: "chart-column"
    }),
    TQ(2, "Splitting Work", {
      prompt: "Where should the team keep the task list?",
      options: ["In the coordinator’s head", "One shared doc for all", "In four separate notebooks", "Nowhere, everyone will remember"], answer: 1,
      hint: "Everyone needs to see the same list.",
      note: "One shared place: a doc, a sheet or a pinned message. One version of the truth.", badge: "file-text",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: The free rider ----------
    {
      type: "learn", door: 3,
      title: "When a teammate stops contributing, talk first.",
      points: [["Assume nothing at first", "They may be ill, stuck or dealing with something at home"], ["Talk privately", "“Hey, we haven’t heard from you. Is everything okay?”"], ["Then the guide", "If nothing changes after a fair chance"]],
      highlightLast: true,
      side: { label: "Avoid", items: [["circle-x", "Mocking them in the group", "It makes things worse"], ["circle-x", "Silently doing their part", "Then complaining later"], ["circle-x", "Going to the guide first", "Without talking to them"]] }
    },
    TQ(3, "The Free Rider", {
      prompt: "Kiran has not replied for 5 days and his task is pending. What should the coordinator do first?",
      options: ["Complain about him in the group chat today", "Message him privately to check on him", "Remove his name from the project", "Report him to the guide immediately"], answer: 1,
      hint: "Talk first, privately.",
      note: "A private, friendly check-in often fixes it. He may have a real reason you do not know about.", badge: "message-circle"
    }),
    TQ(3, "The Free Rider", Object.assign({}, TSPOT, {
      prompt: "The coordinator’s message to Kiran. Which line weakens it?",
      code: ["Hi Kiran, we haven’t heard from you this week.", "Is everything okay?", "Honestly, you are the laziest person in our class.", "Can you share an update on the database by Friday?"],
      outputOptions: ["It is too polite", "It attacks him instead of the problem", "It has no deadline"], outputAnswer: 1, bugLine: 2,
      bugText: "talk about the task and the date, never about the person",
      hint: "Which line would make him defensive?",
      note: "Attacking the person makes people defensive and silent. Focus on the task and a clear date.", badge: "x"
    })),
    TQ(3, "The Free Rider", {
      prompt: "Kiran replies: he has been sick. He can do a smaller task. What now?",
      options: ["Refuse, he should do the full task", "Do all his work and say nothing", "Give him a smaller task", "Remove him from the group"], answer: 2,
      hint: "The goal is finishing together.",
      note: "Adjust and rebalance. Kindness plus a clear plan keeps the team moving.", badge: "heart",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Say the private message you would send to a teammate who has gone silent.", note: "Friendly, about the task, with a date. 20 seconds.", points: 100 },

    // ---------- Round 4: Disagreements ----------
    {
      type: "learn", door: 4,
      title: "Disagreeing is normal. Do it about ideas, not people.",
      points: [["Give reasons", "“I prefer Flutter because two of us already know it”"], ["Listen fully", "Repeat their point before you answer it"], ["Test or vote, then commit", "Once decided, everyone supports it"]],
      highlightLast: true,
      side: { label: "Useful phrases", items: [["message-circle", "“I see your point. My worry is…”", ""], ["message-circle", "“Can we try both for one day?”", ""], ["message-circle", "“Okay, let’s go with that.”", ""]] }
    },
    TQ(4, "Disagreements", {
      prompt: "Sana wants a mobile app, Ravi wants a website. Deadline is 3 weeks away. Best way to decide?",
      options: ["The louder person simply wins", "Toss a coin without any discussion", "Build both, each person alone", "Compare needs, decide together"], answer: 3,
      hint: "Reasons, not volume.",
      note: "Compare time, skills and what the project needs. Then decide together and commit.", badge: "scale"
    }),
    TQ(4, "Disagreements", {
      prompt: "Which reply is best in a disagreement?",
      options: ["“That is honestly a stupid idea.”", "“I see your point. My worry is time.”", "“Fine, just do whatever you want then.”", "“I am not talking to you anymore.”"], answer: 1,
      hint: "Respect plus a reason.",
      note: "Show you heard them, give your reason, and suggest a way to check. Calm beats clever.", badge: "message-circle"
    }),
    TQ(4, "Disagreements", {
      prompt: "The team voted for Ravi’s idea. Sana disagreed. What should she do now?",
      options: ["Secretly build her own version", "Do less work as a protest", "Work fully on the chosen idea", "Tell the guide the team is wrong"], answer: 2,
      hint: "Disagree, then commit.",
      note: "Once a fair decision is made, support it fully. That is what makes a team trustworthy.", badge: "handshake",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Communication ----------
    {
      type: "learn", door: 5,
      title: "Short, regular updates keep a team together.",
      points: [["Check in twice a week", "Done, doing, stuck. Two minutes each"], ["Say early if you are stuck", "Not the night before the deadline"], ["Write down decisions", "So nobody remembers it differently later"]],
      highlightLast: true,
      side: { label: "A good update", items: [["check", "Done", "“Login screen works.”"], ["route", "Doing", "“Starting password reset.”"], ["search", "Stuck", "“Need the database link from Sana.”"]] }
    },
    TQ(5, "Communication", {
      prompt: "Which group-chat update is most useful?",
      options: ["“Working on it, will be done soon.”", "“Will update everyone in the group later tonight.”", "“Login done. Reset next. Need DB link.”", "A voice note of 6 minutes"], answer: 2,
      hint: "Done, doing, stuck.",
      note: "Done, doing and stuck in one line. Everyone knows where things stand.", badge: "message-circle"
    }),
    TQ(5, "Communication", {
      prompt: "Ravi realises his part will be 2 days late. When should he tell the team?",
      options: ["As soon as he knows", "The night before the deadline", "After the deadline has passed", "Never, he will manage somehow"], answer: 0,
      hint: "Bad news early is fine.",
      note: "Early warning lets the team adjust. Late surprises cause panic and blame.", badge: "alarm-clock"
    }),
    TQ(5, "Communication", {
      prompt: "After a team call, nobody remembers what was decided. What would have prevented this?",
      options: ["Longer calls every day", "Everyone speaking louder", "More people on the call", "A short note of decisions"], answer: 3,
      hint: "Memory fades. Notes do not.",
      note: "Three lines after each call: what was decided, who does what, by when.", badge: "pen-tool",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Credit and presentation (double) ----------
    {
      type: "learn", door: 6,
      title: "Finish strong: share the credit and support each other.",
      points: [["Say “we” for the project", "And name what each person did"], ["Prepare everyone for the viva", "Each person should explain the whole project simply"], ["Thank your team", "People remember how you made them feel"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["award", "Credit and viva", "Presentation day"], ["mic", "Then the final challenge", "Your teamwork story"]] }
    },
    TQ(6, "Presentation Day", {
      double: true,
      prompt: "The guide asks, “Who did what?” Best answer from the coordinator?",
      options: ["“Honestly, I did most of the work myself.”", "“We all did everything together, equally.”", "“Please ask them, I don’t really know.”", "“Ravi: login, Sana: database, Anil: design.”"], answer: 3,
      hint: "Fair and specific.",
      note: "Name each person’s real contribution. It is fair, and it shows the team was organised.", badge: "award"
    }),
    TQ(6, "Presentation Day", {
      double: true,
      prompt: "In the viva, the examiner asks Anil (the designer) how the database works. What should the team have done?",
      options: ["Nothing, because he is only the designer", "Explained the whole project to everyone", "Asked the examiner to skip him", "Let Sana answer for him every single time"], answer: 1,
      hint: "Examiners often ask anyone anything.",
      note: "Everyone should be able to explain the whole project simply. Do one practice round together before the viva.", badge: "graduation-cap"
    }),
    TQ(6, "Presentation Day", {
      double: true,
      prompt: "In an interview: “Tell me about a time you worked in a team.” Which answer is best?",
      options: ["“A teammate went silent. I checked in, we rebalanced, and submitted on time.”", "“I’m a true team player and I always cooperate with everyone I meet.”", "“I usually end up doing all the work because others don’t.”", "“Honestly, I prefer working alone on everything I do, it is faster.”"], answer: 0,
      hint: "A real story beats a claim.",
      note: "Situation, what you did, the result. Today’s game just gave you that story.", badge: "briefcase",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, rating, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best story wins +200", prompt: "In 30 seconds, tell a real teamwork story: the problem, what you did, the result.", note: "Keep names out. The host picks the clearest story.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "Team Project Playbook", note: "Screenshot this. Share it with your next project team.", items: PLAYBOOK },
    {
      type: "end",
      joinTitle: "Join the EduMoon Skills Club",
      joinText: "Mock interviews, resumes, internships and career games every week. Get placed, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
