// Formal or Casual? (EduMoon English Club). Beginner: for all years.
// Pick the right tone for the right person: greetings, requests, apologies, closings, and switching between WhatsApp, email and speaking.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const FC = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 35, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const FCSPOT = { kind: "bug", time: 55, step1: "What is the problem?", step2: "Tap the line with the wrong tone", say1: "First pick the problem.", say2: "Now tap the line with the wrong tone.", partO: "the problem", partL: "the line", lineLabel: "line", bugLabel: "The wrong-tone line is" };

// The take-home card: formal vs casual.
const TONE = [
  ["Who and where?", "Professor, HR or client: formal. Friends and classmates: casual."],
  ["Greetings", "Formal: “Dear Dr. Rao,” / “Good morning, Ma’am.” Casual: “Hey Ravi!”"],
  ["Requests", "Formal: “Could you please…?” Casual: “Can you…?”"],
  ["Apologies", "Formal: “I apologise for the delay.” Casual: “Sorry, my bad!”"],
  ["Closings", "Formal: “Regards,” / “Thank you.” Casual: “See you!” / “Cheers!”"],
  ["Short forms", "Fine with friends (pls, tmrw). Avoid in formal messages."],
  ["When unsure", "Start a little formal. It is easy to relax later, hard to undo too casual."],
  ["Same message, two tones", "Practise writing one request both ways."]
];

window.GAME = {
  id: "formal-or-casual",
  title: "Formal or Casual?",
  club: "English Club",
  tagline: "“Hey bro” to your professor? “Dear Sir” to your friend? Learn to pick the right tone.",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "30 minutes", level: "Beginner",
    about: "Sai once messaged his professor “hi bro send notes pls” and called his best friend “Respected Sir” in a group chat by mistake. In 6 rounds, teams learn when to be formal and when to be casual: greetings, requests, apologies, closings, short forms, and switching tone between WhatsApp, email and speaking. Each round has quick “which fits?” questions and one message to fix.",
    outcomes: "Choosing the right tone for professors, HR, clients, seniors and friends, formal and casual versions of common phrases, and the habit of checking tone before sending.",
    tone: "Keep it light; tone mistakes are funny when they happen to someone else. Read the casual and formal options aloud in matching voices. Invite students to share (without names) a funny wrong-tone message they have seen.",
    extra: [["Quick game", "After each round, say one sentence and ask the room to shout “formal” or “casual”."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Toned",
    rulesEyebrow: "How Formal or Casual? works", rulesTitle: "Learn the tone. Pick the right line. Never embarrass yourself again.",
    learnText: "The host shares formal and casual versions of common phrases.", crackTitle: "Choose",
    crackText: "Pick the line with the right tone and lock it in.",
    rulesExtra: "Find-the-wrong-tone questions: <b>100</b> + <b>100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Tone is trickier than it looks!", cracked: "got the tone",
    next: "Next round →", finale: "Next →", winner: "have perfect tone!", endLine: "Sai’s messages finally sound right."
  },
  offerEyebrow: "EduMoon English Club · Tone level",
  offerTitle: "Your tone level",
  offers: [
    { min: 0.7, icon: "trophy", title: "Tone Master", text: "You always sound right. Help a friend check their next formal email." },
    { min: 0.45, icon: "message-circle", title: "Smooth Communicator", text: "Strong! Check your tone before every message to a professor." },
    { min: 0.2, icon: "pen-tool", title: "Tone Learner", text: "Good start. Keep the phrase card below handy." },
    { min: 0, icon: "book-open", title: "Tone Beginner", text: "Everyone starts here. When unsure, start a little formal." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon English Club · Wrong tone",
      title: "Sai once texted his professor “hi bro send notes pls”, and called his best friend “Respected Sir” in a group chat. Can your team save him from the next awkward message?",
      cards: [["message-circle", "Greetings, requests, apologies, closings"], ["mail", "WhatsApp, email and speaking"], ["trophy", "Your score decides your tone level"]]
    },
    { type: "rules" },

    // ---------- Round 1: Who are you talking to? ----------
    {
      type: "learn", door: 1,
      title: "Tone depends on who you are talking to.",
      points: [["Formal", "Professors, HR, clients, officials, people you do not know"], ["Casual", "Friends, classmates, family"], ["In between", "Seniors, teammates at work: friendly but polite"]],
      highlightLast: true,
      side: { label: "Same question", items: [["briefcase", "To HR", "“Could you please share the interview time?”"], ["users", "To a teammate", "“Hi, what time is the meeting?”"], ["heart", "To a friend", "“Yo, what time?”"]] }
    },
    FC(1, "Who Are You Talking To?", {
      prompt: "Who should get a FORMAL message?",
      options: ["Your best friend", "The HR of a company", "Your younger cousin", "Your roommate"], answer: 1,
      hint: "Professional, and someone you do not know well.",
      note: "HR is a professional contact. Formal and polite is the safe choice.", badge: "briefcase"
    }),
    FC(1, "Who Are You Talking To?", {
      prompt: "Which is a CASUAL way to say hello?",
      options: ["“Good morning, Sir.”", "“Dear Ms. Rao,”", "“Respected Madam,”", "“Hey, what’s up?”"], answer: 3,
      hint: "How would you greet a friend?",
      note: "“Hey, what’s up?” is perfect for friends, and wrong for a professor.", badge: "message-circle"
    }),
    FC(1, "Who Are You Talking To?", {
      prompt: "You are not sure how formal to be with a new senior at your internship. What is safest?",
      options: ["Use slang to seem extra friendly", "Use very old-fashioned, stiff words", "Polite first, then match them", "Do not talk to them"], answer: 2,
      hint: "It is easy to relax later.",
      note: "Start politely and match their style as you get to know them.", badge: "users",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Greetings ----------
    {
      type: "learn", door: 2,
      title: "Greetings set the tone from the first word.",
      points: [["Formal email", "“Dear Dr. Rao,” or “Dear Hiring Team,”"], ["Formal speaking", "“Good morning, Ma’am.” “Good afternoon, Sir.”"], ["Casual", "“Hi Anu!” “Hey!” “Hello everyone!”"]],
      highlightLast: true,
      side: { label: "Avoid", items: [["x", "“Hi bro” to a professor", "Too casual"], ["x", "“Respected Sir” to a friend", "Too formal, sounds odd"], ["x", "No greeting at all", "Feels rude in email"]] }
    },
    FC(2, "Greetings", {
      prompt: "Best greeting for an email to a professor you have not met, Dr. Lakshmi Rao?",
      options: ["“Hey Lakshmi!”", "“Dear Dr. Rao,”", "“Hi bro,”", "No greeting needed"], answer: 1,
      hint: "Title plus surname.",
      note: "“Dear Dr. Rao,” is polite and correct. Use first names only if invited to.", badge: "mail"
    }),
    FC(2, "Greetings", {
      prompt: "You do not know who will read your job application email. Best greeting?",
      options: ["“Hey guys!”", "“Yo HR,”", "“To whoever is free,”", "“Dear Hiring Team,”"], answer: 3,
      hint: "Polite and general.",
      note: "“Dear Hiring Team,” or “Dear Hiring Manager,” works when you do not know the name.", badge: "briefcase"
    }),
    FC(2, "Greetings", {
      prompt: "Which greeting fits a class WhatsApp group?",
      options: ["“Respected all members,”", "“Hi everyone!”", "“To whom it may concern,”", "“Dear Sir or Madam,”"], answer: 1,
      hint: "Friendly and simple.",
      note: "“Hi everyone!” is friendly. The others sound like an official notice.", badge: "users",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Requests ----------
    {
      type: "learn", door: 3,
      title: "Requests: the more formal, the softer.",
      points: [["Casual", "“Can you send the notes?”"], ["Polite", "“Could you please send the notes?”"], ["Very formal", "“Would it be possible to share the notes?”"]],
      highlightLast: true,
      side: { label: "Add a reason", items: [["check", "“…as I missed Monday’s class due to fever.”", "Formal"], ["check", "“…missed class, was sick”", "Casual"], ["x", "“send notes”", "Too blunt for anyone"]] }
    },
    FC(3, "Requests", {
      prompt: "Most suitable request to a professor?",
      options: ["“Send slides fast.”", "“Bro, slides pls? asap”", "“I need the slides right now.”", "“Could you please share the slides?”"], answer: 3,
      hint: "Soft and clear.",
      note: "“Could you please…” plus what exactly you need. Polite and easy to act on.", badge: "message-circle"
    }),
    FC(3, "Requests", {
      prompt: "Which request fits a close friend best?",
      options: ["“Would it be possible to share the notes, kindly?”", "“I humbly request the notes.”", "“Can you send me today’s notes?”", "“Kindly do the needful.”"], answer: 2,
      hint: "Natural, not stiff.",
      note: "Friends do not need very formal language. Too formal can sound sarcastic.", badge: "users"
    }),
    FC(3, "Requests", {
      prompt: "You want to ask HR to move your interview. Which is best?",
      options: ["“Change my interview date.”", "“Can’t come, sorry, change it.”", "“Could we reschedule my interview?”", "“Interview date is bad.”"], answer: 2,
      hint: "Very formal and polite.",
      note: "“Would it be possible…” is the right level for a big request to HR.", badge: "clock",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Ask for the same thing twice: once to a friend, once to a professor. “Share the notes.”", note: "Casual, then formal. 20 seconds.", points: 100 },

    // ---------- Round 4: Apologies ----------
    {
      type: "learn", door: 4,
      title: "Apologies change with tone too.",
      points: [["Casual", "“Sorry, my bad!”"], ["Formal", "“I apologise for the delay in submitting my assignment.”"], ["Add a fix", "Formal apologies say what you will do next"]],
      highlightLast: true,
      side: { label: "Formal apology", items: [["check", "Apologise", "“I apologise for…”"], ["check", "Short reason", "“…due to a family function.”"], ["check", "Next step", "“I will submit it by Friday.”"]] }
    },
    FC(4, "Apologies", {
      prompt: "You submitted an assignment late. Best message to your professor?",
      options: ["“Sorry sir lol, here it is finally.”", "“My bad, just chill, it’s done.”", "No message at all, just upload it", "“I apologise for the delay; it is attached.”"], answer: 3,
      hint: "Formal apology plus action.",
      note: "A short formal apology and the fix. No long excuses.", badge: "file-text"
    }),
    FC(4, "Apologies", {
      prompt: "You were 5 minutes late to meet your friend at the beach. Which fits best?",
      options: ["“Sorry, traffic was crazy!”", "“I sincerely apologise for my delay.”", "“Please accept my humble apologies.”", "“I regret the inconvenience caused.”"], answer: 0,
      hint: "Friends, small delay.",
      note: "Casual and natural. A formal apology to a friend sounds like a joke.", badge: "waves"
    }),
    FC(4, "Apologies", Object.assign({}, FCSPOT, {
      prompt: "Sai’s email to his professor. Which line has the wrong tone?",
      code: ["Dear Dr. Rao,", "I apologise for missing yesterday’s lab.", "My bad bro, won’t happen again lol.", "Regards, Sai"],
      outputOptions: ["One line is far too casual", "It is too short", "It has no greeting"], outputAnswer: 0, bugLine: 2,
      bugText: "“My bad bro… lol” is for friends. Better: “I will make sure it does not happen again.”",
      hint: "Which line belongs in a chat with friends?",
      note: "One casual line can undo a polite email. Keep the whole message in one tone.", badge: "x",
      board: true, boardLabel: "after Round 4"
    })),

    // ---------- Round 5: Closings and short forms ----------
    {
      type: "learn", door: 5,
      title: "End well, and watch the short forms.",
      points: [["Formal closings", "“Regards,” “Thank you,” “Best regards,” then your name"], ["Casual closings", "“See you!” “Cheers!” “Bye!”"], ["Short forms", "pls, tmrw, u, r: fine for friends, not for formal messages"]],
      highlightLast: true,
      side: { label: "Formal email ending", items: [["check", "“Thank you for your time.”", ""], ["check", "“Regards,”", ""], ["check", "“Sai Kumar, 3rd year ECE, Roll No. 21”", "Helps them know who you are"]] }
    },
    FC(5, "Closings", {
      prompt: "Best way to end an email to a company HR?",
      options: ["“Regards, Sai Kumar”", "“Byeee, see you!”", "“Cya, take care!”", "“Ok tata, bye now”"], answer: 0,
      hint: "Professional.",
      note: "“Regards,” followed by your full name is safe and professional.", badge: "mail"
    }),
    FC(5, "Closings", {
      prompt: "Which message is fine for a friend but NOT for a professor?",
      options: ["“I will send it tomorrow.”", "“Will send it tmrw, pls wait.”", "“Thank you for your patience.”", "“Please find the file attached.”"], answer: 1,
      hint: "Look for short forms.",
      note: "tmrw and pls are friendly short forms. In formal messages, write the full words.", badge: "spell-check"
    }),
    FC(5, "Closings", {
      prompt: "Why add your roll number and class when emailing a professor?",
      options: ["It makes the email longer", "Professors require it by law", "So they know who you are", "To show off"], answer: 2,
      hint: "How many students does one professor have?",
      note: "Professors teach hundreds of students. Name, class and roll number save them time.", badge: "graduation-cap",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Switching tone (double) ----------
    {
      type: "learn", door: 6,
      title: "Same news, different tone for different places.",
      points: [["WhatsApp to friends", "Short, casual, emojis are fine there"], ["Email to officials", "Complete sentences, polite, no slang"], ["Speaking in interviews", "Friendly but professional: “Thank you for having me.”"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["route", "Switching tone", "Same news, new audience"], ["mic", "Then the final challenge", "Tone switch battle"]] }
    },
    FC(6, "Switching Tone", {
      double: true,
      prompt: "You got an internship. Which message fits your LinkedIn post?",
      options: ["“Happy to share I’ve joined Bayline Tech as an intern.”", "“Guys I got it!!! Party tonight?”", "“Finally lol, internship done, so happy.”", "“Bro got selected hehe, treat soon.”"], answer: 0,
      hint: "Professional network.",
      note: "LinkedIn is professional: positive, clear and polite. Save the party message for friends.", badge: "briefcase"
    }),
    FC(6, "Switching Tone", {
      double: true,
      prompt: "In an interview, the interviewer says “Nice to meet you.” Best reply?",
      options: ["“Nice to meet you too.”", "“Same same, yeah.”", "“Yeah, cool, okay.”", "“Hmm, okay then.”"], answer: 0,
      hint: "Friendly but professional.",
      note: "Warm and polite. It sets a good tone for the whole interview.", badge: "handshake"
    }),
    FC(6, "Switching Tone", Object.assign({}, FCSPOT, {
      double: true,
      prompt: "Sai’s message to the class group. Which line sounds oddly formal?",
      code: ["Hi everyone!", "Tomorrow’s class has moved to Room 204.", "Kindly acknowledge receipt of this communication at the earliest.", "See you there!"],
      outputOptions: ["One line is far too formal for friends", "It is too casual", "It has no room number"], outputAnswer: 0, bugLine: 2,
      bugText: "it sounds like an official notice. Better: “Reply with a thumbs up if you saw this!”",
      hint: "Which line sounds like a government letter?",
      note: "Too formal can be just as awkward as too casual. Match the room.", badge: "x",
      board: true, boardLabel: "after Round 6"
    })),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best switch wins +200", prompt: "Tone switch battle: the host gives a casual line. Your team says it formally, then the host gives a formal line to make casual.", note: "Try: “Bro, send the file.” and “I regret to inform you I cannot attend.” Best switch wins.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "Formal vs Casual", note: "Screenshot this. Check your tone before you hit send.", items: TONE },
    {
      type: "end",
      joinTitle: "Join the EduMoon English Club",
      joinText: "Speaking games, debates and English practice every week. No fear of mistakes.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
