// Phone Call English (EduMoon English Club). For all years.
// Speak confidently on the phone in English: opening a call, polite requests, when you don't understand, customer care calls, voicemails, and HR or professional calls.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const PH = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 40, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const PHSPOT = { kind: "bug", time: 55, step1: "What is the problem?", step2: "Tap the weak line", say1: "First pick the problem.", say2: "Now tap the weak line.", partO: "the problem", partL: "the line", lineLabel: "line", bugLabel: "The weak line is" };

// The take-home card: phone phrases that always work.
const PHRASES = [
  ["Opening", "“Hello, this is Priya, a 3rd-year ECE student. I’m calling about…”"],
  ["Checking time", "“Is this a good time to talk for two minutes?”"],
  ["Asking", "“Could you please…?” “Would it be possible to…?”"],
  ["Not clear?", "“Sorry, could you repeat that?” “Could you spell that, please?”"],
  ["Numbers", "Say them in small groups: 98765, 43210. Confirm by reading them back."],
  ["Complaints", "Calm voice, order number ready, one clear request."],
  ["Voicemail", "Name, reason, number said twice, best time to call back."],
  ["Closing", "“Thank you for your time. I’ll send an email to confirm.”"]
];

window.GAME = {
  id: "phone-call-english",
  title: "Phone Call English",
  club: "English Club",
  tagline: "No face, no gestures, just your voice. Sound clear and confident on every call.",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "35 minutes", level: "Medium",
    about: "Phone calls are harder than face-to-face talk: there is no body language and the line may be noisy. Priya must call an internship HR, a customer care line and a professor this week, all in English. In 6 rounds, teams learn how to open a call, ask politely, handle not understanding, make a complaint calmly, leave a voicemail and close a professional call. Speaking turns let students practise real lines aloud.",
    outcomes: "Clear phrases for opening and closing calls, polite requests, asking someone to repeat or spell, reading numbers clearly, calm complaints, and good voicemails.",
    tone: "Many students avoid calls because of nervousness. Normalise it: everyone feels it. Do quick role-plays: you be the HR, a student calls you. Keep it friendly and celebrate brave volunteers.",
    extra: [["Role-play idea", "During speaking turns, hold your phone to your ear and act as the person being called. It makes the practice feel real and fun."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Connected",
    rulesEyebrow: "How Phone Call English works", rulesTitle: "Learn the phrase. Pick the best line. Say it aloud.",
    learnText: "The host shares phrases for one part of a call.", crackTitle: "Choose",
    crackText: "Pick Priya’s best line on your phone and lock it in.",
    rulesExtra: "Speaking turns: <b>+100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Phone calls trip up many people!", cracked: "connected",
    next: "Next round →", finale: "Next →", winner: "are today’s best callers!", endLine: "Priya made all three calls with confidence."
  },
  offerEyebrow: "EduMoon English Club · Call confidence",
  offerTitle: "Your call confidence",
  offers: [
    { min: 0.7, icon: "trophy", title: "Call Champion", text: "You sound clear and professional. Make that call you have been avoiding." },
    { min: 0.45, icon: "smartphone", title: "Confident Caller", text: "Strong! Practise the opening line aloud before your next call." },
    { min: 0.2, icon: "mic", title: "Getting There", text: "Good start. Keep the phrases card open during your next call." },
    { min: 0, icon: "book-open", title: "First Call", text: "Everyone starts here. Call a friend and practise in English for 2 minutes." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon English Club · Three calls",
      title: "This week Priya must call an internship HR, a customer care line and her professor, all in English. She would rather send 20 messages. Can your team make her calls easy?",
      cards: [["smartphone", "Opening, asking, complaints and voicemails"], ["mic", "Speaking turns with real lines"], ["trophy", "Your score decides your call confidence"]]
    },
    { type: "rules" },

    // ---------- Round 1: Opening a call ----------
    {
      type: "learn", door: 1,
      title: "The first 10 seconds: who you are and why you are calling.",
      points: [["Greet", "“Hello” or “Good morning”"], ["Say who you are", "“This is Priya, a 3rd-year ECE student from Vizag.”"], ["Say why", "“I’m calling about the internship I applied for.”"]],
      highlightLast: true,
      side: { label: "Avoid", items: [["x", "“Hello, who is this?”", "When you are the caller"], ["x", "“Myself Priya…”", "Say “This is Priya” or “I’m Priya”"], ["x", "A long story before the reason", "Get to the point"]] }
    },
    PH(1, "Opening a Call", {
      prompt: "Priya calls the HR of a made-up company, Bayline Tech. Best opening?",
      options: ["“Hello, who is speaking there, please tell me your name first?”", "“Hello, this is Priya, calling about my internship application.”", "“Myself Priya only, I am calling you regarding something.”", "“Hi, I wanted to ask a doubt, are you free or busy now?”"], answer: 1,
      hint: "Who and why, in one breath.",
      note: "Name plus reason. The HR knows immediately how to help.", badge: "smartphone"
    }),
    PH(1, "Opening a Call", {
      prompt: "Which is the most natural way to introduce yourself on the phone?",
      options: ["“Myself Priya.”", "“I am Priya speaking from here.”", "“This is Priya.”", "“Priya is my name only.”"], answer: 2,
      hint: "What do native speakers usually say on calls?",
      note: "“This is Priya” is the standard phone phrase. “Myself Priya” is common in India but sounds unusual to others.", badge: "user"
    }),
    PH(1, "Opening a Call", {
      prompt: "Someone calls Priya’s phone. How should she answer a call from an unknown number?",
      options: ["“Hello, Priya speaking.”", "“Who is this and why are you calling?”", "“Yes? Tell.”", "Stay silent until they speak"], answer: 0,
      hint: "Polite and clear.",
      note: "“Hello, Priya speaking” is polite and tells the caller they reached the right person.", badge: "message-circle",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Polite requests ----------
    {
      type: "learn", door: 2,
      title: "Check the time, then ask politely.",
      points: [["“Is this a good time to talk?”", "Especially with professors and HR"], ["“Could you please…?”", "Softer than “Tell me…” or “Give me…”"], ["“Would it be possible to…?”", "For bigger requests, like changing a date"]],
      highlightLast: true,
      side: { label: "Softer is stronger", items: [["x", "“Send me the details.”", "Sounds like an order"], ["check", "“Could you please send me the details?”", "Polite"], ["check", "“Would it be possible to move my interview to Friday?”", "Polite and clear"]] }
    },
    PH(2, "Polite Requests", {
      prompt: "Priya calls her professor in the evening. What should she say right after her opening?",
      options: ["“Sir, listen to me carefully now.”", "“I will talk for half an hour, okay?”", "“Is this a good time to talk?”", "“Why didn’t you reply to my message?”"], answer: 2,
      hint: "Respect their time.",
      note: "Checking the time is polite, and it also gets you a more relaxed listener.", badge: "clock"
    }),
    PH(2, "Polite Requests", {
      prompt: "Which request sounds most polite?",
      options: ["“Tell me the interview date.”", "“Give me the date quickly, please.”", "“I want the date now.”", "“Could you tell me the date, please?”"], answer: 3,
      hint: "Look for “could you”.",
      note: "“Could you please…” is polite and natural. Direct orders can sound rude on the phone, where tone carries everything.", badge: "message-circle"
    }),
    PH(2, "Polite Requests", {
      prompt: "Priya has an exam on her interview day. Best way to ask for a change?",
      options: ["“Could we move it to Friday? I have an exam.”", "“I can’t come that day, so just change it.”", "“That date is bad for me. Choose another one.”", "“I will come whenever I am free.”"], answer: 0,
      hint: "Polite request plus a reason.",
      note: "“Would it be possible…” plus a short reason. Companies often agree when asked politely.", badge: "clock",
      board: true, boardLabel: "after Round 2"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Role-play: call the host as if they are HR. Open the call and ask one polite question.", note: "Who you are, why you are calling, one “Could you please…”.", points: 100 },

    // ---------- Round 3: When you don't understand ----------
    {
      type: "learn", door: 3,
      title: "Didn’t catch it? Ask. Never guess on a call.",
      points: [["“Sorry, could you repeat that?”", "Polite and normal"], ["“Could you spell that, please?”", "For names, emails and addresses"], ["Read it back", "“So that’s 15, one five, right?”"]],
      highlightLast: true,
      side: { label: "Numbers that sound alike", items: [["ear", "fifteen vs fifty", "Say “one five” or “five zero”"], ["ear", "thirteen vs thirty", "Ask to confirm"], ["ear", "B vs D vs P", "“B for Bangalore?”"]] }
    },
    PH(3, "Not Understanding", {
      prompt: "The line is noisy and Priya misses the interview time. What should she say?",
      options: ["“Sorry, could you repeat that?”", "“Okay, okay, fine, thank you.”", "Nothing; she will guess later", "“Your phone line is very bad today.”"], answer: 0,
      hint: "Never guess an interview time.",
      note: "Asking to repeat is normal. Guessing could mean missing the interview.", badge: "ear"
    }),
    PH(3, "Not Understanding", {
      prompt: "HR says the email ID too fast. Best response?",
      options: ["“Could you spell that, please?”", "“I will find it on Google.”", "“Okay, got it.” (when she didn’t)", "“Please send it on WhatsApp.”"], answer: 0,
      hint: "Emails must be exact.",
      note: "Ask them to spell it, then read it back to confirm. One wrong letter and the email bounces.", badge: "spell-check"
    }),
    PH(3, "Not Understanding", {
      prompt: "HR says the interview is at “three fifteen” or “three fifty”, she is not sure. Best way to confirm?",
      options: ["Pick whichever one sounds right", "Ask a friend later", "“So, a quarter past three?”", "Come at 3:00 to be safe"], answer: 2,
      hint: "Read it back in a different way.",
      note: "Saying it another way (“a quarter past three”) removes all doubt.", badge: "clock",
      board: true, boardLabel: "after Round 3"
    }),

    // ---------- Round 4: Customer care calls ----------
    {
      type: "learn", door: 4,
      title: "Complaints work better when you are calm and clear.",
      points: [["Have details ready", "Order number, date, what went wrong"], ["One clear request", "“I’d like a replacement” or “I’d like a refund”"], ["Calm voice", "The agent did not cause the problem, and can help you"]],
      highlightLast: true,
      side: { label: "A good complaint", items: [["file-text", "Details", "“Order 4417, delivered Monday.”"], ["x", "Problem", "“The screen is cracked.”"], ["check", "Request", "“I’d like a replacement, please.”"]] }
    },
    PH(4, "Customer Care", {
      prompt: "Priya’s new earphones stopped working after 2 days. Best opening to customer care?",
      options: ["“Your company is cheating people, I am very angry!”", "“Order 4417: the earphones stopped working. I’d like a replacement.”", "“Hello, I have a big problem, please solve it now.”", "“I want to talk to your manager immediately.”"], answer: 1,
      hint: "Details plus a clear request.",
      note: "Order number, the problem, and what she wants. The agent can act right away.", badge: "store"
    }),
    PH(4, "Customer Care", Object.assign({}, PHSPOT, {
      prompt: "Priya’s complaint call script. Which line will make things harder?",
      code: ["Hello, this is Priya. My order number is 4417.", "The earphones stopped working after two days.", "You people are useless and I will post about you everywhere.", "Could you please arrange a replacement?"],
      outputOptions: ["It attacks the agent instead of the problem", "It is too polite", "It has no order number"], outputAnswer: 0, bugLine: 2,
      bugText: "threats and insults make the agent defensive. Calm and clear gets faster help",
      hint: "Which line is about the person, not the problem?",
      note: "Agents help faster when you are calm. If it is not solved, ask politely to escalate.", badge: "x"
    })),
    PH(4, "Customer Care", {
      prompt: "The agent cannot solve it and offers to escalate. What should Priya ask before hanging up?",
      options: ["“What is your salary?”", "“Could I get a ticket number?”", "“Why are you all so slow at this?”", "Nothing, just hang up"], answer: 1,
      hint: "Proof for the next call.",
      note: "A ticket number lets her follow up without explaining everything again.", badge: "list-checks",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Voicemails and numbers ----------
    {
      type: "learn", door: 5,
      title: "Voicemails and numbers: slow, clear and repeated.",
      points: [["Voicemail", "Name, reason, your number, best time to call back"], ["Say the number twice", "In small groups: 98765, 43210"], ["Short", "Under 30 seconds"]],
      highlightLast: true,
      side: { label: "A good voicemail", items: [["user", "Who", "“Hi, this is Priya, a 3rd-year ECE student.”"], ["message-circle", "Why", "“I’m calling about the internship interview.”"], ["smartphone", "How to reach", "Number twice, slowly"]] }
    },
    PH(5, "Voicemails", {
      prompt: "Which voicemail is best?",
      options: ["“Priya, re internship. 98765 43210, again 98765 43210.”", "“Hi, call me back when you see this, okay?”", "A three-minute message with her whole life story in it", "“It’s me. You know why I called you, right?”"], answer: 0,
      hint: "Who, why, number twice.",
      note: "Name, reason and the number twice, in groups. Short and easy to act on.", badge: "smartphone"
    }),
    PH(5, "Voicemails", {
      prompt: "What is the clearest way to say the number 9876543210 on a call?",
      options: ["All ten digits as fast as possible", "As one big number: nine billion…", "Only the last four digits", "In groups: 98765, 43210"], answer: 3,
      hint: "How do people remember numbers?",
      note: "Small groups with a tiny pause. Repeat it once. The listener can write it down easily.", badge: "list-checks"
    }),
    PH(5, "Voicemails", {
      prompt: "The professor does not pick up. Priya leaves a voicemail. What else is smart?",
      options: ["Call 15 times in a row", "Never try calling again", "Tell classmates the professor ignored her", "Send a short follow-up text"], answer: 3,
      hint: "Give them an easy way to reply.",
      note: "A short follow-up text or email helps them reply when they are free.", badge: "mail",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Professional calls (double) ----------
    {
      type: "learn", door: 6,
      title: "Professional calls: prepare, listen, close well.",
      points: [["Prepare", "Notes on what you want to say and ask"], ["Listen and note", "Dates, names and next steps"], ["Close well", "“Thank you for your time. I’ll email to confirm.”"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["briefcase", "HR and professional calls", "The big ones"], ["mic", "Then the final challenge", "A full call role-play"]] }
    },
    PH(6, "Professional Calls", {
      double: true,
      prompt: "HR calls Priya unexpectedly while she is on a noisy bus. Best response?",
      options: ["Try to talk anyway and shout", "Ignore the call completely", "Hang up without saying anything", "“Could I call you back in 15 minutes?”"], answer: 3,
      hint: "Polite, and choose a better moment.",
      note: "Asking to call back at a set time is professional. Then actually call back on time.", badge: "clock"
    }),
    PH(6, "Professional Calls", {
      double: true,
      prompt: "The HR call is ending. Which closing is best?",
      options: ["“Okay, bye bye, have a good day.”", "“So did I get the job or not, please tell me?”", "“Thank you. I’ll email to confirm.”", "“Fine, whatever you say, okay.”"], answer: 2,
      hint: "Thank, confirm, close.",
      note: "Thank them and confirm in writing. The email becomes proof of what was agreed.", badge: "handshake"
    }),
    PH(6, "Professional Calls", {
      double: true,
      prompt: "During the call, HR gives a date, a time and a contact name. What should Priya do?",
      options: ["Trust her memory completely", "Write them down and read them back", "Ask HR to call her again tomorrow", "Record the call secretly without asking"], answer: 1,
      hint: "Notes and confirmation.",
      note: "Write while listening, then read the key details back. Never record a call without asking.", badge: "pen-tool",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best call wins +200", prompt: "Role-play a full 30-second call to the host (as HR): open, ask about your interview time, confirm it, close.", note: "Opening, polite question, read back, thank you. The host picks the most professional call.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "Phone Phrases That Always Work", note: "Screenshot this. Keep it open during your next important call.", items: PHRASES },
    {
      type: "end",
      joinTitle: "Join the EduMoon English Club",
      joinText: "Speaking games, debates and English practice every week. No fear of mistakes.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
