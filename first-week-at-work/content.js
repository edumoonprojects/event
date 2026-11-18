// First Week at Work (EduMoon Skills Club). For all years, especially final years and interns.
// What nobody teaches in college: the first day, asking for help, work messages, meetings, handling mistakes and professional habits.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const KQ = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 40, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const MSG = { kind: "bug", time: 55, step1: "What is the problem?", step2: "Tap the weak line", say1: "First pick the problem.", say2: "Now tap the line that causes it.", partO: "the problem", partL: "the line", lineLabel: "line", bugLabel: "The weak line is" };

// The take-home card: first week checklist.
const WEEK = [
  ["Day 1", "Reach 15 minutes early, carry your documents, learn names, smile."],
  ["Ask smart", "Try for 20 to 30 minutes, then ask with what you already tried."],
  ["Write full messages", "Never just “Hi”. Greeting + question + context in one message."],
  ["Meetings", "Join on time, take notes, and say one thing if you can."],
  ["Mistakes", "Tell your lead early, help fix it, and write down the lesson."],
  ["Feedback", "Say thank you, ask one question, then act on it."],
  ["Deadlines", "If you will be late, say so early, with a new date."],
  ["Company data", "Never share code, documents or customer data outside work."]
];

window.GAME = {
  id: "first-week-at-work",
  title: "First Week at Work",
  club: "Skills Club",
  tagline: "College teaches the subject. Nobody teaches the first week. Until now.",
  art: window.STORY_ART,
  guide: {
    years: "All years (most useful for final years and interns)", time: "35 minutes", level: "Beginner",
    about: "Kiran just joined a made-up IT company, Bayview Tech, as a fresher. In 6 rounds, teams help him through his first week: day one, asking for help the right way, writing work messages, behaving in meetings, handling his first mistake and feedback, and the habits that build trust. Every question is a real situation freshers face.",
    outcomes: "The unwritten rules of a workplace: how to ask for help, write clear messages, behave in meetings, own mistakes and protect company data.",
    tone: "Many students feel nervous about their first job. Keep this light and practical. Share a story from your own first job if you have one. There are no silly questions here.",
    extra: [["For interns", "Everything in this game also applies to internships. Mention that to 2nd and 3rd years."]]
  },
  words: {
    round: "Day", unlocked: "Answer", badgeLabel: "Handled",
    rulesEyebrow: "How First Week at Work works", rulesTitle: "Learn the unwritten rule. Pick the best move. Get confirmed.",
    learnText: "The host shares one unwritten rule of the workplace.", crackTitle: "Decide",
    crackText: "Pick Kiran’s best move on your phone and lock it in.",
    rulesExtra: "Speak (optional): <b>+100</b>. Day 6: <b>double</b>!",
    nobody: "Nobody got this one. Most freshers learn this the hard way!", cracked: "handled it",
    next: "Next day →", finale: "Next →", winner: "would be confirmed on day one!", endLine: "Kiran survived his first week."
  },
  offerEyebrow: "Bayview Tech · Week one review",
  offerTitle: "Your week one review",
  offers: [
    { min: 0.7, icon: "award", title: "Star New Joiner", text: "Your lead already trusts you. Keep these habits." },
    { min: 0.45, icon: "thumbs-up", title: "Settling In Well", text: "Strong! Practise writing full messages this week." },
    { min: 0.2, icon: "compass", title: "Finding Your Way", text: "Good start. Read the checklist below before your first day." },
    { min: 0, icon: "book-open", title: "Week One Learner", text: "Everyone starts here. Ask a senior about their first week." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Skills Club · Bayview Tech",
      title: "Kiran just got his first job at Bayview Tech. College taught him coding, but nobody taught him how to survive week one. Can your team help?",
      cards: [["briefcase", "6 days of real fresher situations"], ["message-circle", "Help, messages, meetings and mistakes"], ["award", "Your score decides your week one review"]]
    },
    { type: "rules" },

    // ---------- Day 1: First day ----------
    {
      type: "learn", door: 1,
      title: "Day one is about showing up ready and learning names.",
      points: [["Reach early", "15 minutes early. Office traffic and security checks take time"], ["Carry documents", "ID proof, certificates, photos and bank details, as HR asked"], ["Learn names", "Write down who is who. People notice when you remember"]],
      highlightLast: true,
      side: { label: "Day one checklist", items: [["clock", "Arrive early", "Not just on time"], ["file-text", "Documents in one folder", "Copies and originals"], ["users", "Introduce yourself", "Name, role, one line about you"]] }
    },
    KQ(1, "First Day", {
      prompt: "Kiran’s joining time is 9:30 AM. When should he reach?",
      options: ["Exactly at 9:30 AM", "Around 9:15 AM", "Around 10 AM, first days are relaxed", "Whenever HR calls him"], answer: 1,
      hint: "Security, ID cards and finding the floor all take time.",
      note: "Early, not just on time. Day one always has surprises at the gate.", badge: "clock"
    }),
    KQ(1, "First Day", {
      prompt: "His manager says, “Introduce yourself to the team.” Best answer?",
      options: ["“Hi, I am Kiran, the new developer. I am from Vizag and I enjoy building small apps.”", "“Myself Kiran. My father is a teacher, my mother is a homemaker and I have one brother.”", "“Hi.” and then stay quiet so you do not disturb anyone", "A 5 minute speech about your college marks and every project"], answer: 0,
      hint: "Short, friendly, and about you at work.",
      note: "Name, role, one human detail. 10 seconds is enough. People will ask more if they want.", badge: "user"
    }),
    KQ(1, "First Day", {
      prompt: "By evening Kiran has met 12 people and forgotten most names. What should he do?",
      options: ["Call everyone “Sir” or “Ma’am” forever", "Avoid talking to anyone whose name he forgot", "Note names and roles; ask again politely", "Pretend he remembers and hope for the best"], answer: 2,
      hint: "Asking once is normal. Asking every day is not.",
      note: "Write down names and roles on day one. Asking “Sorry, could you tell me your name again?” once is completely fine.", badge: "pen-tool",
      board: true, boardLabel: "after Day 1"
    }),

    // ---------- Day 2: Asking for help ----------
    {
      type: "learn", door: 2,
      title: "Asking for help is a skill. Do it the smart way.",
      points: [["Try first", "Spend 20 to 30 minutes trying yourself"], ["Then ask with context", "What you are doing, what you tried, where you are stuck"], ["Don’t wait for days", "Being stuck silently for 2 days is worse than asking"]],
      highlightLast: true,
      side: { label: "A good question", items: [["target", "Goal", "“I am setting up the project locally.”"], ["wrench", "What I tried", "“I installed Node and ran npm install.”"], ["search", "Where I am stuck", "“I get this error. Any idea what I missed?”"]] }
    },
    KQ(2, "Asking for Help", {
      prompt: "Kiran is stuck setting up the project. It has been 10 minutes. What should he do?",
      options: ["Ask his lead immediately without trying", "Try for about 20 more minutes first", "Stay stuck quietly for two days", "Go home early and try tomorrow"], answer: 1,
      hint: "Try first, but do not stay stuck forever.",
      note: "Try for 20 to 30 minutes, then ask. You learn more, and your question gets better.", badge: "timer"
    }),
    KQ(2, "Asking for Help", {
      prompt: "Which help request is best?",
      options: ["“It’s not working at all. Please help me with it urgently, it is very important.”", "“Can someone please do the whole setup for me today? I am new here.”", "“Help needed with the project setup. Please call me when you are free.”", "“npm install fails with this error. I tried Node 18 and 20.”"], answer: 3,
      hint: "Which one can someone answer in one reply?",
      note: "Exact problem, the error and what you tried. The senior can help in minutes instead of asking ten questions back.", badge: "message-circle"
    }),
    KQ(2, "Asking for Help", {
      prompt: "A senior helps Kiran fix the problem. What should he do after?",
      options: ["Forget it, the problem is fixed now", "Ask the same senior again next time", "Note the fix and thank them", "Tell the manager the senior was slow"], answer: 2,
      hint: "Next time, can he fix it himself?",
      note: "Thank them and write down the fix. Never ask the same question twice.", badge: "heart",
      board: true, boardLabel: "after Day 2"
    }),

    // ---------- Day 3: Work messages ----------
    {
      type: "learn", door: 3,
      title: "At work, write messages people can answer in one go.",
      points: [["Never just “Hi”", "Then the other person waits for your real message"], ["Greeting + ask + context", "All in one message"], ["Reply, even if busy", "“Got it, will check by 3 PM” is enough"]],
      highlightLast: true,
      side: { label: "Message habits", items: [["x", "“Hi” … waiting …", "Wastes their time"], ["check", "“Hi Meena, could you share the login for the test server? Need it for ticket 42.”", ""], ["clock", "Reply within the day", "Even a short reply"]] }
    },
    KQ(3, "Work Messages", {
      prompt: "Kiran needs the test server login from Meena. Which message is best?",
      options: ["“Hi Meena, could you share the test server login? Need it for ticket 42.”", "“Hi” and then wait for her to reply before saying anything else at all", "“Meena please send me the login quickly, it is urgent for me today”", "“Hello ma’am, good morning, how are you? I have one small doubt”"], answer: 0,
      hint: "Can Meena answer without asking anything back?",
      note: "Greeting, the request and why, in one message. Meena can reply in seconds.", badge: "message-circle"
    }),
    KQ(3, "Work Messages", Object.assign({}, MSG, {
      prompt: "Kiran’s email to his lead. Which line weakens it?",
      code: ["Hi Arjun,", "The login page fix is done and pushed for review.", "Plz chk n revert asap.", "Thanks, Kiran"],
      outputOptions: ["It is too long", "SMS short forms sound careless at work", "It has no greeting"], outputAnswer: 1, bugLine: 2,
      bugText: "write full words: “Please check and let me know if anything needs changing.”",
      hint: "Which line looks like a chat with a friend?",
      note: "Short forms like plz, chk and asap feel rushed in work email. Full words take two seconds more and look professional.", badge: "mail"
    })),
    KQ(3, "Work Messages", {
      prompt: "His lead messages: “Can you look at the bug by today?” Kiran is busy in training till 4 PM. What should he do?",
      options: ["Ignore it until the training ends at 4 PM", "Reply: “Sure, will check after 4 and update you.”", "Leave the training without telling anyone", "Reply “ok” and forget about it"], answer: 1,
      hint: "Reply even if you cannot act right now.",
      note: "A quick reply with a time builds trust. Silence makes people worry.", badge: "clock",
      board: true, boardLabel: "after Day 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Say how you would ask a senior for help, using goal, what you tried, and where you are stuck.", note: "Three parts. 20 seconds.", points: 100 },

    // ---------- Day 4: Meetings ----------
    {
      type: "learn", door: 4,
      title: "In meetings, be on time, listen well and take notes.",
      points: [["Join 1 to 2 minutes early", "Especially online, where links and audio fail"], ["Take notes", "Write what you must do and by when"], ["Speak once if you can", "A short update or one good question is enough"]],
      highlightLast: true,
      side: { label: "Online meetings", items: [["mic", "Mute when not speaking", "Background noise disturbs everyone"], ["eye", "Camera on if the team does", "Follow the team"], ["list-checks", "Send action points", "If you were asked to"]] }
    },
    KQ(4, "Meetings", {
      prompt: "In the daily stand-up, everyone shares a 30-second update. What should Kiran say?",
      options: ["“Nothing to say, I am new here.”", "A 5 minute story about his whole day", "“Yesterday setup. Today login bug. No blockers.”", "“Same as yesterday, everything is going fine.”"], answer: 2,
      hint: "Yesterday, today, any blockers.",
      note: "Done, doing, blockers. Short and clear, even as a new joiner.", badge: "users"
    }),
    KQ(4, "Meetings", {
      prompt: "In a meeting, the manager says something Kiran does not understand. Best move?",
      options: ["Nod and pretend he understood all of it", "Ask a short question at the right moment", "Search Google during the meeting", "Leave the meeting quietly"], answer: 1,
      hint: "Is a short question a problem?",
      note: "A short question at a pause, or right after the meeting, is normal. Pretending leads to wrong work later.", badge: "lightbulb"
    }),
    KQ(4, "Meetings", {
      prompt: "The meeting ends. His lead gave him 3 tasks. What should Kiran do?",
      options: ["Try to remember all three in his head", "Wait for someone to remind him later", "Do whichever task feels easiest", "Write them down with dates and confirm"], answer: 3,
      hint: "Memory fails. Notes do not.",
      note: "Write the tasks and deadlines and confirm with a short message. Nothing gets missed.", badge: "list-checks",
      board: true, boardLabel: "after Day 4"
    }),

    // ---------- Day 5: Mistakes and feedback ----------
    {
      type: "learn", door: 5,
      title: "Everyone makes mistakes. Owning them is what builds trust.",
      points: [["Tell early", "A small problem found early stays small"], ["Help fix it", "Do not just report it and disappear"], ["Feedback is a gift", "Say thank you, ask one question, then improve"]],
      highlightLast: true,
      side: { label: "Never", items: [["circle-x", "Hide a mistake", "It always comes out later"], ["circle-x", "Blame others", "Even if it was partly their fault"], ["circle-x", "Argue with feedback", "Listen first, discuss calmly later"]] }
    },
    KQ(5, "Mistakes", {
      prompt: "Kiran accidentally deleted a test file shared by the team. What should he do?",
      options: ["Say nothing and hope nobody notices", "Blame the person who shared it", "Tell his lead now and help restore it", "Quickly create a fake file to cover it"], answer: 2,
      hint: "What builds trust?",
      note: "Tell early and help fix. Most mistakes can be undone if people know quickly.", badge: "shield"
    }),
    KQ(5, "Mistakes", {
      prompt: "His lead reviews his code: “This works, but it is hard to read. Please clean it up.” Best response?",
      options: ["“It works perfectly, so it is fine as it is.”", "“Thanks. Should I split the long function?”", "“Everyone else writes code like this.”", "Feel hurt and stop asking for reviews"], answer: 1,
      hint: "Thank, ask, improve.",
      note: "Thank them and ask a specific question. Feedback on your work is not an attack on you.", badge: "thumbs-up"
    }),
    KQ(5, "Mistakes", {
      prompt: "Kiran realises he will miss a deadline by one day. When should he tell his lead?",
      options: ["Right away, with a new date", "On the deadline day, in the evening", "After the deadline has passed", "Never, he will just work faster"], answer: 0,
      hint: "Bad news early is fine. Bad news late is a problem.",
      note: "Tell early with a new date. The lead can then plan. Late surprises damage trust.", badge: "alarm-clock",
      board: true, boardLabel: "after Day 5"
    }),

    // ---------- Day 6: Professional habits (double) ----------
    {
      type: "learn", door: 6,
      title: "Trust is built by small habits every day.",
      points: [["Company data stays at work", "Code, documents and customer data are never shared outside"], ["Lock your laptop", "Every time you leave your desk"], ["Be the same person", "Polite to the security guard and the CEO alike"]],
      highlightLast: true,
      side: { label: "Final day", items: [["zap", "Double points", "Still anyone’s game"], ["shield", "Data and security", "The rules that can cost a job"], ["mic", "Then the final challenge", "Your own stand-up update"]] }
    },
    KQ(6, "Professional Habits", {
      double: true,
      prompt: "A friend asks Kiran to send him the company’s code “just to learn from it”. What should he do?",
      options: ["Send it, a friend will not misuse it", "Send only half of the code", "Upload it to his public GitHub instead", "Say no; company code stays inside"], answer: 3,
      hint: "Who does the code belong to?",
      note: "Company code belongs to the company. Sharing it can lead to losing the job and legal trouble. Learn from open source projects instead.", badge: "lock"
    }),
    KQ(6, "Professional Habits", {
      double: true,
      prompt: "Kiran goes for tea. His laptop is open with email and code on screen. What should he do first?",
      options: ["Nothing, everyone in the office is trusted", "Lock the screen before leaving", "Close the lid only if it is evening", "Ask a colleague to watch it"], answer: 1,
      hint: "One key press.",
      note: "Lock the screen every time. On Windows it is Windows key + L. It takes one second.", badge: "lock"
    }),
    KQ(6, "Professional Habits", {
      double: true,
      prompt: "Which habit will most help Kiran get confirmed after probation?",
      options: ["Doing what he says, by when he says", "Staying in office until midnight every day", "Agreeing with everything the manager says", "Talking only to senior people in the team"], answer: 0,
      hint: "What makes a lead trust a fresher?",
      note: "Reliability beats long hours. Do what you said, by when you said, or tell early when you cannot.", badge: "badge-check",
      board: true, boardLabel: "after Day 6"
    }),

    // ---------- Final challenge, review, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "Give a 30-second stand-up update: what you did, what you will do, any blocker.", note: "Use today: “Yesterday I…, today I…, no blockers.” The host picks the clearest one.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "First Week Checklist", note: "Screenshot this. Read it the night before your first day.", items: WEEK },
    {
      type: "end",
      joinTitle: "Join the EduMoon Skills Club",
      joinText: "Mock interviews, resumes, internships and career games every week. Get placed, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
