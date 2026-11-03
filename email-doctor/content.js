// Email Doctor (EduMoon English Club). For all years.
// Real student emails to professors, HR and companies. Teams diagnose and fix them in 6 rounds.
// Step types used: story · rules · learn · door · speak · compare · wordlist · end

const EQ = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 45, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
// "Tap the weak line" questions use the bug door with friendlier labels.
const LINE = { kind: "bug", time: 55, step1: "What’s the problem?", step2: "Tap the line to fix", say1: "First pick what’s wrong.", say2: "Now tap the line to fix.", partO: "the problem", partL: "the line", lineLabel: "line", bugLabel: "The line to fix is" };

// The take-home card: email templates.
const TEMPLATES = [
  ["Subject line", "What + who + when. “Leave request: Ravi Kumar, CSE-B, 12 Nov”"],
  ["Greeting", "“Dear Prof. Rao,” or “Dear Hiring Team,” Not “Hi sir” or “Respected sir/madam”."],
  ["First line", "Say why you’re writing. “I’m writing to request…”"],
  ["The ask", "One clear request, with the date or detail they need."],
  ["The reason", "One or two honest lines. No long stories."],
  ["Closing", "“Thank you for your time.” then “Best regards, Ravi Kumar, CSE-B, Roll No. 21”"],
  ["Follow-up", "Wait 3 to 5 working days. Reply in the same thread, short and polite."],
  ["Before you hit send", "Right person? Attachment attached? Read it once aloud."]
];

window.GAME = {
  id: "email-doctor",
  title: "Email Doctor",
  club: "English Club",
  tagline: "Real student emails, real mistakes. Diagnose them, fix them, then write your own.",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "35 minutes", level: "Beginner to medium",
    about: "Students write emails to professors, HR teams and companies all the time, and most make the same mistakes. In 6 rounds, teams diagnose and fix real-looking student emails: the subject line, the opening, asking a professor for an extension, following up with HR, tone traps, and a full rewrite. The game ends with a Before → After email and a template card.",
    outcomes: "A simple structure for any formal email, the phrases that make them sound professional, and a template card they can reuse for leave requests, extensions, internship applications and follow-ups.",
    tone: "Phrases like “Respected sir” and “Kindly do the needful” are common in India, and nobody should feel embarrassed for using them. The point is to sound clear and professional to anyone, anywhere. Keep it light.",
    extra: [["Pairs well with", "Desi English Fixer (spoken English) and Resume Rescue (applications). Run Email Doctor before internship season."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Fixed",
    rulesEyebrow: "How Email Doctor works", rulesTitle: "Read the email. Diagnose it. Fix it.",
    learnText: "The host shares one email rule.", crackTitle: "Diagnose",
    crackText: "Pick the fix on your phone and lock it in.",
    rulesExtra: "Line questions: <b>100</b> for the problem + <b>100</b> for the line. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Most inboxes are full of this mistake!", cracked: "fixed it",
    next: "Next round →", finale: "Next →", winner: "are today’s Email Doctors!", endLine: "Your emails will never be the same!"
  },
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon English Club · Email Doctor",
      title: "Prof. Rao gets 80 student emails a week. She replies to the clear ones first. Can your team cure these emails?",
      cards: [["mail", "Real-looking emails to professors, HR and companies"], ["search", "Diagnose the problem, find the line to fix"], ["file-text", "Leave with templates you can reuse"]]
    },
    { type: "rules" },

    // ---------- Round 1: Subject lines ----------
    {
      type: "learn", door: 1,
      title: "The subject line decides if your email gets opened.",
      points: [["Say what it’s about", "Leave request, assignment extension, internship application"], ["Add who you are", "Name, class or roll number, so they don’t have to search"], ["Never leave it empty", "“(no subject)” and “Hi” get skipped"]],
      highlightLast: true,
      side: { label: "Weak → Strong", items: [["circle-x", "“Hi”", "Says nothing"], ["circle-x", "“Urgent!!!”", "Panic, no detail"], ["circle-check", "“Assignment 3 extension request: Ravi Kumar, CSE-B”", "Clear in one glance"]] }
    },
    EQ(1, "Subject Lines", {
      prompt: "You’re asking Prof. Rao for one day of leave. Best subject line?",
      options: ["Hi mam", "Leave", "Leave request for 12 Nov: Ravi Kumar, CSE-B", "URGENT PLEASE READ"], answer: 2,
      hint: "Which one tells her what, who and when before she opens it?",
      note: "What + who + when. She can find, read and reply to it in seconds.", badge: "mail"
    }),
    EQ(1, "Subject Lines", {
      prompt: "You’re applying for an internship. Best subject line?",
      options: ["Job", "Please give me internship", "(no subject)", "Application for Web Development Intern: Ravi Kumar, final year CSE"], answer: 3,
      hint: "Recruiters search their inbox by role name.",
      note: "The exact role + your name. Some companies ask for a specific format in the posting; always follow it.", badge: "briefcase"
    }),
    EQ(1, "Subject Lines", {
      prompt: "What’s wrong with the subject line “URGENT!!! Please reply”?",
      options: ["It sounds like panic or spam and doesn’t say what the email is about", "It’s too long", "It should be in lowercase", "Nothing, it gets attention"], answer: 0,
      hint: "Can Prof. Rao tell what it’s about?",
      note: "Real urgency is shown with a clear detail: “Exam hall ticket missing: exam tomorrow, 10 AM”.", badge: "alarm-clock",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Openings ----------
    {
      type: "learn", door: 2,
      title: "Get to the point in the first line.",
      points: [["A simple greeting", "“Dear Prof. Rao,” or “Dear Hiring Team,”"], ["Then why you’re writing", "“I’m writing to request…” or “I’m writing to apply for…”"], ["Skip the long warm-up", "No paragraph about who you are before the point"]],
      highlightLast: true,
      side: { label: "Common openings to update", items: [["x", "“Respected sir/madam”", "Use their name if you know it"], ["x", "“I want to inform that…”", "Just say it"], ["x", "“Myself Ravi from CSE”", "“I’m Ravi Kumar, CSE-B”"]] }
    },
    EQ(2, "Openings", {
      prompt: "Which opening line is best?",
      options: ["“Respected sir/madam, myself Ravi, I want to inform that…”", "“Dear Prof. Rao, I’m writing to request a one-day extension for Assignment 3.”", "“Hiiii mam!!”", "“As you know, I am a student of your class and I have been very sincere…”"], answer: 1,
      hint: "Which one tells her who it’s for and why, in one line?",
      note: "Her name, then the purpose. Short and clear.", badge: "check"
    }),
    EQ(2, "Openings", Object.assign({}, LINE, {
      prompt: "An internship email. Which line should change?",
      code: ["Dear Hiring Team,", "Myself Ravi Kumar and I want to inform that I am interested in this internship.", "I’m a final year CSE student and I’ve built two web apps with React.", "My resume and GitHub link are attached below."],
      outputOptions: ["It’s wordy and starts with a common mistake", "It’s too short", "It should be the last line"], outputAnswer: 0, bugLine: 1,
      bugText: "“Myself Ravi… I want to inform that” is wordy. Better: “I’m Ravi Kumar, and I’m applying for the web development internship.”",
      hint: "Which line takes the longest to say something simple?",
      note: "Short, direct openings sound more confident. The rest of this email is good.", badge: "spell-check"
    })),
    EQ(2, "Openings", {
      prompt: "You don’t know the HR person’s name. Best greeting?",
      options: ["“Respected Sir,” (assuming it’s a man)", "No greeting at all", "“Dear Hiring Team,”", "“Hey guys,”"], answer: 2,
      hint: "Polite, and right whoever reads it.",
      note: "“Dear Hiring Team” works for anyone. Avoid guessing someone’s gender.", badge: "users",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Asking a professor ----------
    {
      type: "learn", door: 3,
      title: "When asking for something: clear ask, short reason, easy yes.",
      points: [["The ask", "Exactly what you need: one day, a new date, a meeting"], ["A short, honest reason", "One or two lines. No long story"], ["Make it easy to say yes", "Suggest a new date or offer a solution"]],
      highlightLast: true,
      side: { label: "Avoid", items: [["x", "“Kindly do the needful”", "Say exactly what you need"], ["x", "A sad 3-paragraph story", "Short and honest is enough"], ["x", "Asking at the last minute", "Write as early as you can"]] }
    },
    EQ(3, "Asking a Professor", {
      prompt: "You need a 2-day extension for an assignment because you were ill. Best middle part?",
      options: ["“Please sir please give extension, I will be very thankful forever.”", "“I didn’t do it, so I need more time.”", "“Kindly do the needful.”", "“I was unwell from Monday to Wednesday (medical note attached), so I couldn’t finish Assignment 3. Could I submit it by Friday, 15 Nov?”"], answer: 3,
      hint: "Clear reason, clear ask, a specific new date.",
      note: "A specific reason, proof if you have it, and an exact new date. Easy to say yes to.", badge: "file-text"
    }),
    EQ(3, "Asking a Professor", Object.assign({}, LINE, {
      prompt: "An email asking for a meeting. Which line should change?",
      code: ["Dear Prof. Rao,", "I’m writing to ask for 15 minutes to discuss my project proposal.", "Kindly do the needful at the earliest.", "I’m free on Tuesday or Thursday after 2 PM, if either suits you."],
      outputOptions: ["It’s vague: it doesn’t say what you need", "It’s too specific", "It’s in the wrong place"], outputAnswer: 0, bugLine: 2,
      bugText: "“Kindly do the needful” says nothing specific. Lines 2 and 4 already make the ask clear, so it can simply go",
      hint: "Which line could be removed without losing any meaning?",
      note: "Every line should add information. The timing options in the last line are a great touch.", badge: "x"
    })),
    EQ(3, "Asking a Professor", {
      prompt: "Best closing for an email to a professor?",
      options: ["“Bye”", "“Thank you for your time. Best regards, Ravi Kumar, CSE-B, Roll No. 21”", "“Waiting for your reply ASAP”", "No closing, just your phone number"], answer: 1,
      hint: "Polite, and makes it easy to know who you are.",
      note: "A thank-you, a sign-off, and your full name with class and roll number so she can find you quickly.", badge: "thumbs-up",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Say the first two lines of an email asking Prof. Rao to reschedule your viva.", note: "Greeting, then why you’re writing, with the date.", points: 100 },

    // ---------- Round 4: Following up with HR ----------
    {
      type: "learn", door: 4,
      title: "A good follow-up is short, polite and patient.",
      points: [["Wait first", "3 to 5 working days after an interview or application"], ["Reply in the same thread", "So they see the history"], ["Short and specific", "The role, the date, one line of interest, a thank-you"]],
      highlightLast: true,
      side: { label: "Never", items: [["x", "Send 5 emails in 2 days", "Looks desperate"], ["x", "Sound angry", "“Why no reply?”"], ["x", "Write a new essay", "Keep it to 3 or 4 lines"]] }
    },
    EQ(4, "Following Up", {
      prompt: "You had an interview on Monday. When should you follow up if you hear nothing?",
      options: ["After 3 to 5 working days, unless they gave you a date", "Never", "Monday evening", "Tuesday morning"], answer: 0,
      hint: "Give them time, but not forever.",
      note: "If they said “we’ll reply by Friday”, wait until Monday. Otherwise 3 to 5 working days is polite.", badge: "clock"
    }),
    EQ(4, "Following Up", {
      prompt: "Best follow-up message?",
      options: ["“Why haven’t you replied? It’s been 2 days.”", "“Dear Ms. Priya, thank you again for the interview on 10 Nov for the Junior Developer role. I’m still very interested and wanted to ask if there’s any update. Best regards, Ravi Kumar”", "“Hello?? Any update??”", "“Please select me, I really need this job.”"], answer: 1,
      hint: "Polite, specific and short.",
      note: "Thank, remind them which role and date, show interest, ask politely. Done.", badge: "mail"
    }),
    EQ(4, "Following Up", Object.assign({}, LINE, {
      prompt: "A thank-you email after an interview. Which line should change?",
      code: ["Dear Ms. Priya,", "Thank you for taking the time to interview me for the Junior Developer role today.", "I enjoyed learning about the team’s work on the billing app.", "I hope you will select me because I need this job very badly."],
      outputOptions: ["It sounds desperate instead of confident", "It’s too formal", "It should come first"], outputAnswer: 0, bugLine: 3,
      bugText: "it sounds desperate. Better: “I’m excited about the role and look forward to hearing from you.”",
      hint: "Which line changes how they see you?",
      note: "End with confidence and interest, not need. The rest of the email is excellent.", badge: "thumbs-up",
      board: true, boardLabel: "after Round 4"
    })),

    // ---------- Round 5: Tone traps ----------
    {
      type: "learn", door: 5,
      title: "In email, tone is all in the words.",
      points: [["Too casual", "“hey”, “pls”, “u”, “thx” look careless in formal emails"], ["Too demanding", "“ASAP”, “I need this today”, ALL CAPS"], ["Just right", "Polite, direct, and specific: “Could you please…by Friday?”"]],
      highlightLast: true,
      side: { label: "Swap these", items: [["route", "“pls send”", "“Could you please send…”"], ["route", "“ASAP”", "“by Friday, if possible”"], ["route", "“I want”", "“I’d like” or “Could I…”"]] }
    },
    EQ(5, "Tone Traps", {
      prompt: "Which line sounds the most professional?",
      options: ["“Could you please share the notes from Monday’s class by Thursday, if possible?”", "“u have the notes? send”", "“pls send the notes asap”", "“SEND THE NOTES TODAY.”"], answer: 0,
      hint: "Polite, complete words, a clear date.",
      note: "Polite words, the exact notes, a reasonable deadline. Nobody minds replying to that.", badge: "message-circle"
    }),
    EQ(5, "Tone Traps", {
      prompt: "Why should you avoid writing whole sentences in CAPITAL LETTERS?",
      options: ["Computers can’t read it", "It’s against the law", "It’s harder to type", "In email, it reads like shouting"], answer: 3,
      hint: "How does “PLEASE REPLY” feel to read?",
      note: "Capitals feel like shouting. Use one bold word or a clear date if something is important.", badge: "alarm-clock"
    }),
    EQ(5, "Tone Traps", {
      prompt: "Your marks were entered wrongly. Best way to raise it?",
      options: ["Don’t mention it", "“You made a mistake in my marks. Fix it.”", "“Dear Prof. Rao, I think there may be an error in my internal marks for Unit 2: the portal shows 12, but my answer sheet shows 18. Could you please check? Thank you.”", "Post about it in the class group"], answer: 2,
      hint: "Specific facts, no blame.",
      note: "Say “there may be an error”, give the exact facts, and ask politely. You’ll get it fixed faster.", badge: "shield",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Full rewrite (double) ----------
    {
      type: "learn", door: 6,
      title: "Put it all together: the 6-part email.",
      points: [["Subject", "What + who + when"], ["Greeting + first line", "Their name, then why you’re writing"], ["Ask, reason, closing", "One clear ask, a short reason, thanks and your full details"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game!"], ["search", "Whole emails", "Find the line to fix"], ["mail", "Then Ravi’s Before → After", "The full cure"]] }
    },
    EQ(6, "Full Rewrite", Object.assign({}, LINE, {
      double: true,
      prompt: "A leave request. Which line should change?",
      code: ["Subject: Leave request for 14 Nov: Ravi Kumar, CSE-B", "Dear Prof. Rao,", "I’m writing to request leave on 14 Nov for my sister’s wedding.", "pls grant leave and do the needful asap"],
      outputOptions: ["It’s too casual and vague", "It’s too formal", "It should be the subject"], outputAnswer: 0, bugLine: 3,
      bugText: "casual and vague. Better: “I’ll catch up on the class notes. Thank you for considering this. Best regards, Ravi Kumar, Roll No. 21”",
      hint: "Three great lines, then one that undoes them.",
      note: "Strong start, weak finish. The last line should be polite and give your details.", badge: "pen-tool"
    })),
    EQ(6, "Full Rewrite", Object.assign({}, LINE, {
      double: true,
      prompt: "An internship application. Which line should change?",
      code: ["Subject: Application for Web Development Intern: Ravi Kumar", "Dear Hiring Team,", "I’m a final year CSE student, and I built a college events site used by 300+ students.", "Please find my resume attached.", "(No attachment)"],
      outputOptions: ["The resume was mentioned but never attached", "The subject is too long", "The greeting is too polite"], outputAnswer: 0, bugLine: 4,
      bugText: "the attachment is missing. Attach the file first, then write the email",
      hint: "Look at the very end.",
      note: "One of the most common email mistakes. A trick: attach the file before you write a single word.", badge: "link-2"
    })),
    EQ(6, "Full Rewrite", {
      double: true,
      prompt: "What should you check right before you hit Send?",
      options: ["That it’s the right person, the attachment is there, and it reads well aloud", "That it’s longer than 500 words", "That it has emojis", "Nothing, just send it"], answer: 0,
      hint: "Three quick checks save you from the most embarrassing mistakes.",
      note: "Right person, attachment, read it once aloud. 30 seconds that save you from most email disasters.", badge: "check",
      board: true, boardLabel: "after Round 6"
    }),

    {
      type: "compare", eyebrow: "You cured it", title: "Ravi’s email: Before → After",
      before: ["Subject: (no subject)", "Respected sir/madam,", "Myself Ravi, I want to inform that I need extension.", "Kindly do the needful asap.", "pls reply", "Ravi"],
      after: ["Subject: Assignment 3 extension request: Ravi Kumar, CSE-B", "Dear Prof. Rao,", "I’m writing to request a 2-day extension for Assignment 3.", "I was unwell from Monday to Wednesday (medical note attached).", "Could I submit it by Friday, 15 Nov? Thank you for your time.", "Best regards, Ravi Kumar, CSE-B, Roll No. 21"],
      note: "Same request. One version gets ignored; the other gets a yes."
    },
    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "Write (or say) a 3-line email asking a senior on LinkedIn for 10 minutes of career advice.", note: "Who you are, the specific ask, a thank-you. The room claps; the host picks the best one.", points: 200 },
    { type: "wordlist", eyebrow: "Take it home", title: "The Email Template Card", note: "Screenshot this. Use it for your next leave request, extension or application.", items: TEMPLATES },
    {
      type: "end",
      joinTitle: "Join the EduMoon English Club",
      joinText: "Speaking games, emails and interview English every week. No fear of mistakes.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
