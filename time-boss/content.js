// Time Boss (EduMoon Skills Club). For all years.
// Priya has exams in 2 weeks, a hackathon on Saturday and an internship 3 days a week. Help her run the week.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const TB = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 45, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const TN = (round, name, extra) => TB(round, name, Object.assign({ kind: "number", time: 50 }, extra));

// The take-home card: the Time Boss playbook.
const PLAYBOOK = [
  ["Track one day", "Write down what you actually did every hour. The truth is the starting point."],
  ["Urgent vs important", "Do it now · plan it · hand it off · drop it."],
  ["Top 3 for tomorrow", "Write them the night before. Do the hardest one first."],
  ["Break big tasks", "“Study DBMS” is scary. “Revise normalisation for 30 minutes” is doable."],
  ["The 2-minute rule", "If it takes less than 2 minutes, do it now."],
  ["25 + 5", "25 minutes of focus, 5 minutes of break. Phone in another room."],
  ["Say no politely", "“I’d love to, but I’ve promised this time to my exam. Next weekend?”"],
  ["Sleep is study", "Your brain saves what you learned while you sleep. All-nighters erase it."]
];

window.GAME = {
  id: "time-boss",
  title: "Time Boss",
  club: "Skills Club",
  tagline: "Exams in 2 weeks, a hackathon on Saturday and an internship 3 days a week. Can Priya do it all?",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "35 minutes", level: "Beginner",
    about: "Priya, a 3rd year student, has her busiest fortnight ever: semester exams, a weekend hackathon and a part-time internship. In 6 rounds, teams help her find where her time really goes, sort urgent from important, plan the week, beat procrastination, protect her focus from her phone and survive crunch week. It ends with every student planning their own tomorrow.",
    outcomes: "A simple playbook for managing time in college: top 3 tasks, the urgent-important sort, the 2-minute rule and focus sprints, plus one change they commit to tomorrow.",
    tone: "Most students already feel guilty about wasting time, so don’t add to it. The message is “small changes work”, not “you’re lazy”. Share one of your own time struggles to make it real.",
    extra: [["Make it personal", "During the final challenge, ask students to actually write tomorrow’s top 3 in their phone notes. A few volunteers can read theirs out."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Sorted",
    rulesEyebrow: "How Time Boss works", rulesTitle: "Learn the move. Make Priya’s choice. Win back her week.",
    learnText: "The host shares one time management move.", crackTitle: "Decide",
    crackText: "Pick Priya’s best move on your phone and lock it in.",
    rulesExtra: "Speak (optional): <b>+100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Most students make this mistake every week!", cracked: "got it right",
    next: "Next round →", finale: "Next →", winner: "are today’s Time Bosses!", endLine: "Priya cleared her exams and her team won the hackathon!"
  },
  offerEyebrow: "EduMoon Skills Club · Time Boss results",
  offerTitle: "Your time management rank",
  offers: [
    { min: 0.7, icon: "crown", title: "Time Boss", text: "You run your time; it doesn’t run you. Share your system with a friend." },
    { min: 0.45, icon: "timer", title: "Planner", text: "Strong! Start writing your top 3 every night this week." },
    { min: 0.2, icon: "clock", title: "Getting There", text: "Good start. Try one 25-minute focus sprint tomorrow, phone in another room." },
    { min: 0, icon: "alarm-clock", title: "Last-Minute Hero", text: "Everyone starts here. Pick just one card below and try it tomorrow." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Skills Club · Time Boss",
      title: "Priya has semester exams in 2 weeks, a hackathon on Saturday and an internship 3 days a week. And 24 hours a day, like everyone. Can your team help her?",
      cards: [["timer", "6 rounds of real student time problems"], ["list-checks", "Learn the moves that actually work"], ["trophy", "Win back Priya’s week"]]
    },
    { type: "rules" },

    // ---------- Round 1: Where time goes ----------
    {
      type: "learn", door: 1,
      title: "You can’t manage time you can’t see.",
      points: [["We guess badly", "Most people underestimate time on their phone by a lot"], ["Small things add up", "“Just 2 minutes” 30 times is an hour"], ["Track one honest day", "Write what you did every hour. No judging, just noting"]],
      highlightLast: true
    },
    TN(1, "Where Time Goes", {
      prompt: "Priya checks her phone “for just 2 minutes” 30 times a day. How many minutes is that? Type the number.",
      answer: 60,
      hint: "2 × 30.",
      note: "60 minutes, a full hour, every day. That’s 7 hours a week, almost a full working day.", badge: "smartphone"
    }),
    TB(1, "Where Time Goes", {
      prompt: "Priya feels she has “no time”. What should she do first?",
      options: ["Download 3 productivity apps", "Sleep 2 hours less every night", "Wake up at 4 am from tomorrow", "Write down what she actually does every hour for one day"], answer: 3,
      hint: "Before fixing anything, find the problem.",
      note: "An honest log shows where time leaks. Most students find 1 to 2 hours they didn’t know they had.", badge: "search"
    }),
    TN(1, "Where Time Goes", {
      prompt: "How many hours are there in one week? Type the number.",
      answer: 168,
      hint: "24 × 7.",
      note: "168. Take away 56 for sleep and about 40 for college, and there are still 70 hours left. Where do they go?", badge: "clock",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Urgent vs important ----------
    {
      type: "learn", door: 2,
      title: "Urgent is not the same as important.",
      points: [["Urgent and important", "Do it now: the assignment due tonight"], ["Important, not urgent", "Plan it: exam revision, skills, health. This is where success is built"], ["Neither", "Drop it: endless scrolling, gossip groups"]],
      highlightLast: true,
      side: { label: "Sort every task", items: [["zap", "Do it now", "Urgent + important"], ["list-checks", "Plan it", "Important, not urgent"], ["users", "Hand it off or drop it", "Urgent only, or neither"]] }
    },
    TB(2, "Urgent vs Important", {
      prompt: "Which of Priya’s tasks is important but NOT urgent?",
      options: ["Revising for exams that start in 2 weeks", "An assignment due at midnight tonight", "Replying to 47 WhatsApp group messages", "A phone call from an unknown number"], answer: 0,
      hint: "It matters a lot, but nothing breaks if she starts it tomorrow… yet.",
      note: "Exam revision. Important tasks without a deadline today are the ones we keep pushing, until they become a crisis.", badge: "book-open"
    }),
    TB(2, "Urgent vs Important", {
      prompt: "A classmate asks Priya to collect printouts for the whole group right now. It’s urgent for them, not important for her. Best move?",
      options: ["Drop her own work and go", "Ignore the message completely", "Ask if someone nearer can do it, or offer to do it after her focus block", "Do it and complain in the group later"], answer: 2,
      hint: "Urgent but not important: can someone else handle it, or can it wait an hour?",
      note: "Hand it off or schedule it. Helping is good, but it doesn’t have to break her focus right now.", badge: "users"
    }),
    TB(2, "Urgent vs Important", {
      prompt: "It’s 11 pm. Priya is watching reels “to relax” and it’s been an hour. Which box is this?",
      options: ["Urgent and important", "Important, not urgent", "Urgent, not important", "Neither: drop it"], answer: 3,
      hint: "Will she remember any of it tomorrow?",
      note: "Neither. Real rest is sleep, a walk or talking to a friend. Scrolling feels like rest but usually isn’t.", badge: "x",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Planning the week ----------
    {
      type: "learn", door: 3,
      title: "A plan you can see is a plan you’ll follow.",
      points: [["Top 3, every night", "Write tomorrow’s 3 most important tasks before you sleep"], ["Block the time", "Give each big task a fixed slot, like a class"], ["Break it down", "“Study DBMS” becomes “Revise normalisation, 30 min”"]],
      highlightLast: true
    },
    TB(3, "Planning the Week", {
      prompt: "Which to-do item is Priya most likely to actually start?",
      options: ["“Study for exams”", "“Become better at coding”", "“Fix my life”", "“Solve 5 DBMS questions from last year’s paper, 7 to 8 pm”"], answer: 3,
      hint: "Which one tells her exactly what to do and when?",
      note: "Specific + small + a time slot. Vague tasks make your brain freeze; clear ones get done.", badge: "list-checks"
    }),
    TB(3, "Planning the Week", {
      prompt: "When is the best time for Priya to do her hardest subject?",
      options: ["When her energy is highest, often in the morning", "Late at night when everything else is done", "Whenever she feels motivated", "Never; she’ll skip that chapter"], answer: 0,
      hint: "Hard tasks need your best brain.",
      note: "Match tasks to energy. Do the hardest work in your best hours, and save easy tasks like replying to messages for low-energy times.", badge: "zap"
    }),
    TB(3, "Planning the Week", {
      prompt: "Priya planned 12 tasks for Monday and finished 3. She feels like a failure. What’s the real problem?",
      options: ["She’s lazy", "She planned too much. Pick 3 that matter and finish them", "She needs to work 18 hours a day", "Planning doesn’t work"], answer: 1,
      hint: "Was it a bad day, or a bad plan?",
      note: "Over-planning is very common. 3 important tasks done beats 12 tasks started.", badge: "target",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Your biggest time-waster, and one way you’ll fix it.", note: "20 seconds. Be honest; everyone in the room has one.", points: 100 },

    // ---------- Round 4: Procrastination ----------
    {
      type: "learn", door: 4,
      title: "Procrastination isn’t laziness. It’s avoiding a feeling.",
      points: [["We delay what feels big or unclear", "Not what’s hard to do"], ["The 2-minute rule", "Less than 2 minutes? Do it now"], ["Just start for 5 minutes", "Starting is the hardest part. Momentum does the rest"]],
      highlightLast: true
    },
    TB(4, "Procrastination", {
      prompt: "Priya keeps saying “I’ll start revising when I feel motivated.” What usually happens?",
      options: ["Motivation arrives on time", "She studies better under pressure the night before", "Motivation rarely comes first. Action usually comes before motivation", "She should wait for the perfect mood"], answer: 2,
      hint: "Have you ever felt like studying before starting?",
      note: "Motivation often shows up after you begin. Start for 5 minutes; you’ll usually keep going.", badge: "flame"
    }),
    TB(4, "Procrastination", {
      prompt: "Priya needs to reply to her internship mentor with a yes or no. It will take one minute. When should she do it?",
      options: ["Now", "Tonight, with all her other messages", "After her exams", "When the mentor reminds her"], answer: 0,
      hint: "Remember the 2-minute rule.",
      note: "Now. Tiny tasks that wait pile up in your head and drain your focus.", badge: "mail"
    }),
    TB(4, "Procrastination", {
      prompt: "Priya’s hackathon project report feels too big to start. Best trick?",
      options: ["Wait until the day before", "Ask a friend to write it", "Do the whole thing in one 8-hour sitting", "Break it into small parts and start with the easiest: the title and headings"], answer: 3,
      hint: "Make the first step tiny.",
      note: "Headings first, then one section a day. A big task becomes 5 small ones that don’t feel scary.", badge: "pen-tool",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Focus and phones ----------
    {
      type: "learn", door: 5,
      title: "Your phone is designed to win. Change the game.",
      points: [["Focus sprints", "25 minutes of deep work, 5 minutes off. Repeat 4 times, then a long break"], ["Out of sight, out of mind", "A phone in your pocket still pulls your attention"], ["Multitasking is a myth", "You’re switching, and every switch costs time"]],
      highlightLast: true
    },
    TN(5, "Focus and Phones", {
      prompt: "In the Pomodoro method, how many minutes is one focus sprint? Type the number.",
      answer: 25,
      hint: "Then a 5-minute break.",
      note: "25 minutes on, 5 off. Short enough to start, long enough to get real work done.", badge: "timer"
    }),
    TB(5, "Focus and Phones", {
      prompt: "Where should Priya’s phone be during a focus sprint?",
      options: ["In her hand, on silent", "On the desk, face up", "In another room, or at least in a bag", "In her pocket on vibrate"], answer: 2,
      hint: "The harder it is to reach, the less you reach.",
      note: "Another room is best. Even a silent phone on the desk takes some of your attention.", badge: "smartphone"
    }),
    TB(5, "Focus and Phones", {
      prompt: "Priya studies while watching a series and replying to chats. She says she’s “multitasking”. What’s really happening?",
      options: ["She’s getting three times as much done", "She’s switching between tasks and doing each one worse", "It works if you’re young", "It’s the best way to study"], answer: 1,
      hint: "Can your brain read and follow a story at the same time?",
      note: "The brain switches, it doesn’t multitask. Each switch costs focus. One thing at a time is faster.", badge: "lightbulb",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Crunch week (double) ----------
    {
      type: "learn", door: 6,
      title: "Crunch week: when everything happens at once.",
      points: [["Talk early", "Tell people about a clash before it becomes a problem"], ["Say no politely", "Saying no to one thing is saying yes to another"], ["Protect your sleep", "A tired brain makes slow, bad decisions"]],
      highlightLast: true
    },
    TB(6, "Crunch Week", {
      double: true,
      prompt: "The hackathon final is on Saturday, and Priya’s first exam is on Monday. Best plan?",
      options: ["Quit the hackathon without telling her team", "Tell her team now, agree on her hours, and plan revision for Friday and Sunday", "Do both with no sleep", "Skip the exam"], answer: 1,
      hint: "Talk early and plan both.",
      note: "Clashes are normal. Telling the team early and planning both is what professionals do.", badge: "users"
    }),
    TB(6, "Crunch Week", {
      double: true,
      prompt: "Friends invite Priya to a movie the night before her exam. Best reply?",
      options: ["“I’d love to, but I’ve promised tonight to my exam. Can we go this weekend?”", "Go, and study after midnight", "Ignore the message", "“Movies are a waste of time.”"], answer: 0,
      hint: "Kind, honest and offers another time.",
      note: "A polite no with a new plan keeps the friendship and the marks.", badge: "message-circle"
    }),
    TB(6, "Crunch Week", {
      double: true,
      prompt: "Priya wants to stay up all night before her exam to finish the syllabus. Good idea?",
      options: ["Yes, more hours means more marks", "Yes, if she drinks enough tea", "No. Revise the key topics and sleep at least 7 hours", "Only if the exam is in the afternoon"], answer: 2,
      hint: "When does your brain save what you learned?",
      note: "Sleep is when memory is saved. An all-nighter often means forgetting what you studied and making silly mistakes.", badge: "heart",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, results, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best plan wins +200", prompt: "Plan YOUR tomorrow in 60 seconds: your top 3 tasks and when you’ll do each.", note: "Write it in your phone notes, then read it out. The host picks the most realistic plan.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "The Time Boss Playbook", note: "Screenshot this. Try one card a week until they’re all habits.", items: PLAYBOOK },
    {
      type: "end",
      joinTitle: "Join the EduMoon Skills Club",
      joinText: "Careers, interviews, resumes and life skills games every week.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
