// Cold Message Challenge (EduMoon Skills Club). For 2nd year onwards.
// Fix weak LinkedIn and email messages to seniors, HRs and founders asking for internships, referrals and advice.
// All names and companies are made up.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const CM = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 45, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
// "Find the line that kills the message" questions use the bug door.
const KILL = { kind: "bug", time: 60, step1: "Why won’t they reply?", step2: "Tap the weak line", say1: "First pick the problem.", say2: "Now tap the weak line.", partO: "the problem", partL: "the line", lineLabel: "line", bugLabel: "The weak line is" };

const RULES = [
  ["Research first", "Read their profile, posts or company page."],
  ["Personal first line", "Mention something specific about them."],
  ["Who you are, in one line", "Year, branch, college, one real skill or project."],
  ["One small, clear ask", "15-minute call, one question, a referral check."],
  ["Make it easy to say yes", "Link your resume or project. Offer times."],
  ["Short", "Under 100 words. They read it on a phone."],
  ["Polite follow-up", "Once, after 5 to 7 days. Then move on."],
  ["Say thank you", "Even if they say no. And update them later."]
];

window.GAME = {
  id: "cold-message",
  title: "Cold Message Challenge",
  club: "Skills Club",
  tagline: "They don’t know you. One message has to change that.",
  art: window.STORY_ART,
  guide: {
    years: "2nd year onwards", time: "35 minutes", level: "Medium",
    about: "Most internships and referrals start with a message to someone who doesn’t know you yet. In 6 rounds, teams fix real-style LinkedIn and email messages to seniors, HRs, founders and professors: personal first lines, one clear ask, short and polite, and the right follow-up. They catch the line that kills each message and leave with 8 rules for messages people actually reply to.",
    outcomes: "How to research before messaging, write a personal first line, make one clear ask, keep it short, follow up politely, and say thank you.",
    tone: "Students fear “disturbing” people. Remind them: most professionals were students once and like helping someone who asks well. Never encourage spam or fake familiarity. All names and companies in the game are made up.",
    extra: [["Make it real", "In the final challenge, ask each team to write a real message to a real alumnus of your college and share it in the group for feedback before sending."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Reply received",
    rulesEyebrow: "How Cold Message Challenge works", rulesTitle: "Read the message. Fix it. Get the reply.",
    learnText: "The host shares one rule of messages that get replies.", crackTitle: "Fix",
    crackText: "Pick your answer on your phone and lock it in.",
    rulesExtra: "Weak-line questions: <b>100</b> for the problem + <b>100</b> for the line. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Most real messages make this mistake!", cracked: "got a reply",
    next: "Next round →", finale: "Next →", winner: "write the best messages in the room!", endLine: "Now send one real message this week!"
  },
  offerEyebrow: "EduMoon Skills Club · Message results",
  offerTitle: "Your reply rate",
  offers: [
    { min: 0.7, icon: "mail", title: "Reply Magnet", text: "People will want to help you. Send one real message this week." },
    { min: 0.45, icon: "message-circle", title: "Good Connector", text: "Strong! Add a personal first line to every message." },
    { min: 0.2, icon: "pen-tool", title: "Learning to Reach Out", text: "Good start. Cut your next message to under 100 words." },
    { min: 0, icon: "book-open", title: "First Message", text: "Everyone starts here. Save the 8 rules and draft one message." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Skills Club · Cold Message Challenge",
      title: "A senior at your dream company gets 50 messages a week. She replies to 3. Can your team write one of the 3?",
      cards: [["mail", "Fix real-style LinkedIn and email messages"], ["search", "Catch the line that kills the reply"], ["handshake", "Learn to ask so people want to help"]]
    },
    { type: "rules" },

    // ---------- Round 1: The first line ----------
    {
      type: "learn", door: 1,
      title: "The first line decides if they read the rest.",
      points: [["Generic", "“Hi sir, I am a student” sounds like everyone else"], ["Personal", "“I read your post on your first year at Flowpay…”"], ["Shared link", "Same college, same city, same club, same tech"]],
      highlightLast: true,
      side: { label: "Strong first lines", items: [["user", "Their post or work", "Shows you did homework"], ["graduation-cap", "Same college", "Alumni help alumni"], ["code", "Their project or tech", "Shows real interest"]] }
    },
    CM(1, "First Line", {
      prompt: "Messaging an alumna who works at a fintech startup. Best first line?",
      options: ["“Hi sir/madam, I am a student and I want to talk to you.”", "“Hello, I need a job, please tell me about openings at your company.”", "“Hi Priya, I’m a 3rd-year CSE student. Your post on debugging payments helped me.”", "“Please help me urgently, it is very important.”"], answer: 2,
      hint: "Personal, specific, shows homework.",
      note: "Name + shared link + something specific about them. That earns the next line a read.", badge: "user"
    }),
    CM(1, "First Line", {
      prompt: "Why do messages like “Hi” or “Hello sir” alone usually get no reply?",
      options: ["People on LinkedIn are rude to students", "They give nothing to reply to", "LinkedIn automatically blocks short messages", "They are too formal for a chat app"], answer: 1,
      hint: "What would you reply to “Hi”?",
      note: "Busy people won’t chat to find out what you want. Say it in the first message.", badge: "message-circle"
    }),
    CM(1, "First Line", {
      prompt: "What should you do BEFORE messaging someone?",
      options: ["Read their profile and recent posts", "Nothing, just send the message quickly", "Send the same text to 100 people at once", "Ask your friend to message them instead"], answer: 0,
      hint: "Where does a personal first line come from?",
      note: "Two minutes of research makes the message personal and shows respect for their time.", badge: "search",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Who you are ----------
    {
      type: "learn", door: 2,
      title: "Introduce yourself in one line, with proof.",
      points: [["One line", "Year, branch, college"], ["One proof", "A project, skill or achievement, with a link"], ["Not your life story", "They need just enough to trust you"]],
      highlightLast: true,
      side: { label: "Good intro", items: [["graduation-cap", "Who", "“2nd-year ECE, AU”"], ["code", "Proof", "“built a CGPA calculator (link)”"], ["target", "Why them", "“because you work in embedded systems”"]] }
    },
    CM(2, "Who You Are", {
      prompt: "Which self-introduction is strongest?",
      options: ["“I am a hardworking, passionate, dedicated and sincere student who is eager to learn.”", "“3rd-year CSE at AU. I built an attendance tracker used by 200 classmates (link).”", "“I am a student looking for opportunities.”", "“I have many skills in many technologies.”"], answer: 1,
      hint: "Which one has proof?",
      note: "Adjectives are free. Real work with a link is proof.", badge: "badge-check"
    }),
    CM(2, "Who You Are", Object.assign({}, KILL, {
      prompt: "A LinkedIn message to a senior. Which line hurts it?",
      code: ["Hi Rahul, I’m a 2nd-year IT student from your college.", "I saw your talk on cloud basics at our tech fest.", "My father’s name is Suresh and I was born in Guntur in 2006 and I like cricket and movies.", "Could I ask you 2 questions about starting with AWS?"],
      outputOptions: ["It’s too short", "Nothing, it’s perfect", "It’s too much personal detail that doesn’t help him decide"], outputAnswer: 2, bugLine: 2,
      bugText: "your life story isn’t needed. Cut it, or swap it for one line about what you’ve tried so far",
      hint: "Which line has nothing to do with the ask?",
      note: "Keep only what helps them help you.", badge: "user"
    })),
    CM(2, "Who You Are", {
      prompt: "You have no projects yet. What can you honestly show?",
      options: ["Make up a small project that sounds real", "Copy a friend’s GitHub and say it is yours", "Say nothing about yourself, only ask for help", "What you’re learning right now"], answer: 3,
      hint: "Honest and specific.",
      note: "“I’m learning Python and finished 30 LeetCode easy problems” is honest and specific. Never fake it.", badge: "book-open",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: The ask ----------
    {
      type: "learn", door: 3,
      title: "One small, clear ask.",
      points: [["Too big", "“Give me a job” or “Be my mentor” on the first message"], ["Just right", "“Could I ask 2 questions?” or “Is a 15-minute call possible this week?”"], ["Referral asks", "Share the exact job link and your resume, ask if they’re comfortable"]],
      highlightLast: true,
      side: { label: "Good asks", items: [["message-circle", "2 questions", "By message"], ["clock", "15-minute call", "Offer 2 time slots"], ["file-user", "Referral check", "Job link + resume"]] }
    },
    CM(3, "The Ask", {
      prompt: "Which first-message ask is most likely to get a yes?",
      options: ["“Please get me a job at your company, I will work very hard.”", "“Can you be my mentor for the next 2 years and guide me?”", "“Could I ask you 2 quick questions about your first internship?”", "“Call me now, here is my number.”"], answer: 2,
      hint: "Small and easy.",
      note: "Small asks are easy to say yes to. Bigger help often follows naturally.", badge: "handshake"
    }),
    CM(3, "The Ask", {
      prompt: "Asking a senior for a referral. What should you include?",
      options: ["The job link, your resume and why you fit", "Only “refer me pls” and your phone number", "Your marks memo from school and college", "Nothing, they will figure out the rest"], answer: 0,
      hint: "Make it easy for them.",
      note: "And respect a no. Referring someone puts their name on the line.", badge: "file-user"
    }),
    CM(3, "The Ask", Object.assign({}, KILL, {
      prompt: "An email to a professor about a research internship. Which line hurts it?",
      code: ["Dear Dr. Rao, I’m a 3rd-year ECE student at your university.", "I read your paper on low-power sensors and tried its circuit in our lab.", "I’d love to help with your research this summer.", "Reply fast because I have applied to 40 other professors also."],
      outputOptions: ["It sounds pushy and mass-sent, which kills interest", "It’s too humble", "Nothing, it’s perfect"], outputAnswer: 0, bugLine: 3,
      bugText: "telling them it’s one of 40 copy-paste emails, and rushing them, removes the personal effort shown above",
      hint: "Which line undoes all the good work?",
      note: "Lines 1 to 3 are excellent. Never make someone feel like one of many.", badge: "mail",
      board: true, boardLabel: "after Round 3"
    })),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Say a first line you would send to a senior at your dream company.", note: "Personal and specific. 20 seconds.", points: 100 },

    // ---------- Round 4: Short and easy ----------
    {
      type: "learn", door: 4,
      title: "Short wins. They read it on a phone.",
      points: [["Under 100 words", "4 to 6 short lines"], ["No attachments in the first DM", "Use a link instead"], ["Easy to reply", "A yes/no question or 2 time slots"]],
      highlightLast: true,
      side: { label: "Structure", items: [["user", "Line 1", "Personal hook"], ["badge-check", "Line 2", "Who you are + proof"], ["target", "Line 3", "One ask + easy reply"]] }
    },
    CM(4, "Short and Easy", {
      prompt: "A 400-word first message, full of details. Most likely result?",
      options: ["A long reply with lots of advice", "Left unread, then forgotten", "An instant job offer for being detailed", "They print it and share it with the team"], answer: 1,
      hint: "How do you treat long messages?",
      note: "Long messages feel like work. Cut to what they need to say yes.", badge: "timer"
    }),
    CM(4, "Short and Easy", {
      prompt: "Which closing line makes it easiest to reply?",
      options: ["“Let me know whenever you are free.”", "“Whenever you are free, please do the needful.”", "“Would Thursday 6 PM work for a 15-minute call?”", "“Waiting for your reply, please respond.”"], answer: 2,
      hint: "Can they reply in one word?",
      note: "Two clear options means they can reply in seconds.", badge: "clock"
    }),
    CM(4, "Short and Easy", {
      prompt: "Your message has 3 spelling mistakes and no punctuation. What does it signal?",
      options: ["Nothing, nobody notices spelling on LinkedIn", "That you’re cool and don’t care about rules", "That you’re very busy with important work", "That you didn’t take care"], answer: 3,
      hint: "First impressions.",
      note: "Read it once aloud before sending. Small care makes a big impression.", badge: "spell-check",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Follow-up and manners ----------
    {
      type: "learn", door: 5,
      title: "Follow up once, politely. Then move on.",
      points: [["People are busy", "No reply is usually not a no"], ["One follow-up", "After 5 to 7 days, short and kind"], ["Never guilt-trip", "“Why aren’t you replying?” closes the door"]],
      highlightLast: true,
      side: { label: "Follow-up example", items: [["mail", "“Hi Priya, just bumping this up in case it got buried.”", ""], ["handshake", "“No worries if you’re busy!”", ""], ["route", "Then move on", "Message someone else"]] }
    },
    CM(5, "Follow-Up", {
      prompt: "No reply after 2 days. Best move?",
      options: ["Send 5 more messages today so they notice", "Wait, then send one polite follow-up", "Post about it publicly and tag them", "Message their manager about it"], answer: 1,
      hint: "Give them time.",
      note: "One kind nudge after a week. Pushing harder only makes it worse.", badge: "clock"
    }),
    CM(5, "Follow-Up", Object.assign({}, KILL, {
      prompt: "A follow-up message. Which line ruins it?",
      code: ["Hi Arjun, hope your week is going well.", "Just following up on my message about the frontend internship.", "I don’t understand why seniors these days don’t help juniors.", "No worries if now isn’t a good time. Thank you!"],
      outputOptions: ["It’s too short", "It guilt-trips and blames, which no one wants to respond to", "Nothing, it’s perfect"], outputAnswer: 1, bugLine: 2,
      bugText: "blaming makes people defensive. Keep follow-ups warm and easy to ignore without guilt",
      hint: "Which line sounds angry?",
      note: "Three warm lines and one bitter one. People remember the bitter one.", badge: "message-circle"
    })),
    CM(5, "Follow-Up", {
      prompt: "A senior gave you 15 minutes of advice. What should you do after?",
      options: ["Nothing, they have already helped enough", "Ask for a job immediately while they remember you", "Thank them, and later share what you did", "Forward their number to all your friends"], answer: 2,
      hint: "How do you build a relationship?",
      note: "A thank you and an update months later turns a one-time chat into a real connection.", badge: "heart",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Full message (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: the full message.",
      points: [["Hook", "Personal first line"], ["Who + proof", "One line, one link"], ["Ask + easy reply", "Small, clear, kind"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game!"], ["mail", "Full messages", "Pick the best"], ["award", "Then your reply rate", ""]] }
    },
    CM(6, "Full Message", {
      double: true,
      prompt: "Which LinkedIn message to a startup founder is best?",
      options: ["“Sir pls give internship, I am very hardworking, sincere, and I will do any work you give me, sir.”", "“Hi Meera, loved your Kitchenly post. I built a menu site (link). Could I help with frontend?”", "“Hello. Any vacancies for freshers?”", "“I want to join your company. Please reply soon.”"], answer: 1,
      hint: "Hook, proof, small clear ask.",
      note: "Specific hook, relevant proof and a low-risk offer (a short trial). Founders reply to that.", badge: "rocket"
    }),
    CM(6, "Full Message", {
      double: true,
      prompt: "An HR replies: “We don’t have openings right now.” Best response?",
      options: ["“Okay.”", "Argue politely that they should create one for you", "Don’t reply at all, it’s a no", "“Thank you! Could I stay in touch?”"], answer: 3,
      hint: "Leave the door open.",
      note: "A gracious reply often leads to the next opening. Many hires happen months later.", badge: "handshake"
    }),
    CM(6, "Full Message", {
      double: true,
      prompt: "Which habit gets you the most opportunities over a year?",
      options: ["One perfect message, sent once a year", "Copy-pasting 500 messages to strangers a week", "A few personal messages every week", "Waiting for people to message you first"], answer: 2,
      hint: "Quality, often.",
      note: "Consistency plus quality builds a network. Small weekly effort adds up.", badge: "trending-up",
      board: true, boardLabel: "after Round 6"
    }),

    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "In 30 seconds: read out a full cold message your team would send to a real senior.", note: "Hook, who you are, one ask. The room claps; the host picks the best one.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "8 Rules for Messages That Get Replies", note: "Screenshot this. Write one message this week.", items: RULES },
    {
      type: "end",
      joinTitle: "Join the EduMoon Skills Club",
      joinText: "Career skills, interview practice and games every week. Build your network with your college friends.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
