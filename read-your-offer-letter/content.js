// Read Your Offer Letter (EduMoon Skills Club). For 3rd and final year.
// What to check before you accept: the role and location, joining and documents, probation, notice period, bonds and service agreements, and fake offers. Companies, names and numbers are made up.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const RL = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 45, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const RLN = (round, name, extra) => RL(round, name, Object.assign({ kind: "number", time: 60 }, extra));
const CLAUSE = { kind: "bug", time: 60, step1: "What is the concern?", step2: "Tap the line to ask HR about", say1: "First pick the concern.", say2: "Now tap the line to ask about.", partO: "the concern", partL: "the line", lineLabel: "line", bugLabel: "Ask about line" };

// The take-home card: the offer letter checklist.
const OFFERCHECK = [
  ["Role and location", "Your job title, team and city. Is relocation possible later?"],
  ["Joining", "Date, documents, and what happens if joining is delayed."],
  ["Probation", "How long, how you are reviewed, and the notice period during it."],
  ["Notice period", "How many days you must work after resigning. 30 to 90 days is common."],
  ["Bond or service agreement", "How long, how much, and what exactly it covers. Read before signing."],
  ["Pay details", "Fixed vs variable pay. Ask HR for the monthly in-hand estimate."],
  ["Offer validity", "The last date to accept. Reply in writing."],
  ["Fake offer signs", "Asking for money, a free email address, no interview, pressure to pay fast."]
];

window.GAME = {
  id: "read-your-offer-letter",
  title: "Read Your Offer Letter",
  club: "Skills Club",
  tagline: "You got the offer. Now read it before you sign it.",
  art: window.STORY_ART,
  guide: {
    years: "3rd and final year", time: "40 minutes", level: "Medium",
    about: "Pooja got an offer from a made-up company, Coastline Systems, and wants to sign it tonight. In 6 rounds, teams help her read it line by line: the role and location, joining date and documents, probation, notice period, the service agreement (bond), and how to spot a fake offer. Every clause, company and number is made up, but the clauses are the kind freshers in India really see.",
    outcomes: "How to read an offer letter, what probation, notice period and bonds mean, which questions to ask HR politely, and the warning signs of fake offers.",
    tone: "Students are often too excited, or too scared, to ask questions about an offer. Make it normal: HR expects questions. For salary details, mention Money 101, which covers CTC vs in-hand in depth.",
    extra: [["Not legal advice", "Say clearly: this game teaches what to look for and what to ask. For any real contract worry, talk to the placement cell, a senior or a lawyer."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Checked",
    rulesEyebrow: "How Read Your Offer Letter works", rulesTitle: "Learn the clause. Spot the catch. Sign with confidence.",
    learnText: "The host explains one part of an offer letter.", crackTitle: "Check",
    crackText: "Pick Pooja’s best move on your phone and lock it in.",
    rulesExtra: "Some questions need a typed number. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Many freshers sign without checking this!", cracked: "checked it",
    next: "Next round →", finale: "Next →", winner: "read every line like a pro!", endLine: "Pooja signed, knowing exactly what she agreed to."
  },
  offerEyebrow: "EduMoon Skills Club · Offer reading level",
  offerTitle: "Your offer reading level",
  offers: [
    { min: 0.7, icon: "badge-check", title: "Contract Ready", text: "You read offers like HR does. Help a friend check theirs." },
    { min: 0.45, icon: "file-text", title: "Careful Reader", text: "Strong! Save the checklist below for your first offer." },
    { min: 0.2, icon: "search", title: "Learning the Fine Print", text: "Good start. Ask a senior to show you a real offer letter." },
    { min: 0, icon: "book-open", title: "First Reader", text: "Everyone starts here. Never sign anything you have not read." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Skills Club · Offer received",
      title: "Pooja got her first job offer from Coastline Systems. She is so excited she wants to sign tonight without reading it. Can your team stop her and check every line?",
      cards: [["file-text", "Role, joining, probation and notice"], ["shield", "Bonds and fake offers"], ["trophy", "Your score decides your offer reading level"]]
    },
    { type: "rules" },

    // ---------- Round 1: Role and location ----------
    {
      type: "learn", door: 1,
      title: "First check: what job, and where?",
      points: [["Designation", "Your job title, like Associate Software Engineer"], ["Location", "Your base city, and whether you can be moved later"], ["Offer vs letter of intent", "A letter of intent is an early promise; the offer letter has the full terms"]],
      highlightLast: true,
      side: { label: "Ask HR if unclear", items: [["briefcase", "“Which team will I join?”", ""], ["map", "“Can the location change after joining?”", ""], ["file-text", "“When will I get the full offer letter?”", ""]] }
    },
    RL(1, "Role and Location", {
      prompt: "Pooja’s letter says “Location: any Coastline office in India, as per business needs.” What does it mean?",
      options: ["She may be posted to any of their cities", "She will always work in Vizag only", "She can choose any city she wants later", "She will work from home for good"], answer: 0,
      hint: "Who decides, according to the line?",
      note: "The company may place her in any of its cities. If location matters, ask HR politely before accepting.", badge: "map"
    }),
    RL(1, "Role and Location", {
      prompt: "Pooja received a short “Letter of Intent” with no salary details or terms. What should she understand?",
      options: ["It is the final signed contract", "It means she has already joined them", "It shows intent; full terms come later", "It is definitely a fake letter"], answer: 2,
      hint: "Intent means plan.",
      note: "A letter of intent shows the company plans to hire her. Keep applying elsewhere until the full offer with terms arrives.", badge: "file-text"
    }),
    RL(1, "Role and Location", {
      prompt: "Pooja is not sure about the location line. What is the most professional move?",
      options: ["Sign it and just hope for Vizag", "Reject the whole offer immediately", "Post the letter on social media", "Email HR a polite question about it"], answer: 3,
      hint: "Asking questions is normal.",
      note: "A short, polite email is normal: “Could you share which location I am likely to be placed in?”", badge: "mail",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Joining ----------
    {
      type: "learn", door: 2,
      title: "Joining date, documents and background checks.",
      points: [["Joining date", "Can be delayed by companies. Ask what happens then"], ["Documents", "Marksheets, degree, ID proof, photos, bank details"], ["Background verification", "They may check your marks, past jobs and certificates"]],
      highlightLast: true,
      side: { label: "Keep ready", items: [["file-user", "Originals and copies", "In one folder"], ["graduation-cap", "Degree or provisional certificate", "Some ask on day one"], ["check", "No false claims", "Verification can catch them"]] }
    },
    RL(2, "Joining", {
      prompt: "The offer says joining is “subject to successful background verification.” What does that mean?",
      options: ["She must pay for the verification", "She can join without any documents", "They will verify her details", "Her family will be interviewed"], answer: 2,
      hint: "Verification of what she claimed.",
      note: "They confirm marks, degree and other details. Any false information can cancel the offer, even after joining.", badge: "search"
    }),
    RL(2, "Joining", {
      prompt: "Pooja’s resume says 8.5 CGPA, but her real CGPA is 7.9. What is the risk?",
      options: ["None, nobody ever checks this", "The offer could be cancelled", "Her starting salary will increase", "She will get an early promotion"], answer: 1,
      hint: "Background verification.",
      note: "Mismatches found in verification can cancel the offer. Always state your real details.", badge: "x"
    }),
    RL(2, "Joining", {
      prompt: "The joining date gets delayed by three months. What should Pooja do?",
      options: ["Stay in touch, keep options open", "Stop applying anywhere else", "Delete the offer email in anger", "Send HR an angry email today"], answer: 0,
      hint: "Hope for the best, plan for the rest.",
      note: "Keep in polite contact, ask for a written update, and keep learning and applying meanwhile.", badge: "clock",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Probation ----------
    {
      type: "learn", door: 3,
      title: "Probation: a trial period after joining.",
      points: [["Often 3 to 6 months", "Your work and behaviour are reviewed"], ["Confirmation", "After probation, you become a confirmed employee"], ["Different rules", "Notice period and some benefits can differ during probation"]],
      highlightLast: true,
      side: { label: "Questions to ask", items: [["clock", "How long is probation?", ""], ["list-checks", "How am I reviewed?", ""], ["file-text", "Notice period during probation?", ""]] }
    },
    RL(3, "Probation", {
      prompt: "What usually happens at the end of a successful probation?",
      options: ["The salary is cut", "The employee must resign", "The contract ends forever", "The job is confirmed"], answer: 3,
      hint: "Trial period over.",
      note: "You get a confirmation, sometimes with a letter. Some companies extend probation if they need more time to review.", badge: "badge-check"
    }),
    RLN(3, "Probation", {
      prompt: "Pooja joins on 1 July. Probation is 6 months. In which month number does probation end? (January = 1, December = 12)",
      answer: 12,
      hint: "July, August, September, October, November, December.",
      note: "July to December is 6 months, so it ends at the end of December (month 12).", badge: "clock"
    }),
    RL(3, "Probation", {
      prompt: "Which habit helps most during probation?",
      options: ["Taking as many leaves as possible", "Avoiding your manager when possible", "Being reliable, asking for feedback", "Doing only what is written"], answer: 2,
      hint: "What would a manager want to confirm?",
      note: "Reliability, learning and asking for feedback early. Play First Week at Work for more.", badge: "thumbs-up",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Say a polite one-line email to HR asking about the location or probation.", note: "Thank them, ask clearly, keep it short.", points: 100 },

    // ---------- Round 4: Notice period ----------
    {
      type: "learn", door: 4,
      title: "Notice period: how long you must stay after resigning.",
      points: [["It is in the letter", "For example, 30, 60 or 90 days"], ["Why it matters", "Your next company has to wait for you"], ["Buyout", "Some companies let you pay to leave earlier. Check the rules"]],
      highlightLast: true,
      side: { label: "Example", items: [["file-text", "Notice: 60 days", "Resign on 1 March"], ["clock", "Last working day", "Around 30 April"], ["briefcase", "New job", "Can start after that"]] }
    },
    RLN(4, "Notice Period", {
      prompt: "Pooja’s notice period is 60 days. Her new company wants her in 45 days. How many days short is she?",
      answer: 15,
      hint: "60 − 45.",
      note: "15 days short. She should tell the new company the truth and ask the current one about early release or buyout.", badge: "timer"
    }),
    RL(4, "Notice Period", {
      prompt: "Why do companies have a notice period?",
      options: ["To stop employees from ever leaving", "To hand over work properly", "To reduce the employee’s salary", "To delay salary payment"], answer: 1,
      hint: "Someone needs to take over the work.",
      note: "It gives time to hand over work and hire a replacement. Leaving without serving it can affect your relieving letter.", badge: "handshake"
    }),
    RL(4, "Notice Period", Object.assign({}, CLAUSE, {
      prompt: "Part of Pooja’s offer. Which line should she ask HR to explain before signing?",
      code: ["Designation: Associate Software Engineer.", "Location: Visakhapatnam, may change as per business needs.", "Notice period: 90 days, which cannot be reduced or bought out under any situation.", "Working days: Monday to Friday."],
      outputOptions: ["A long, strict notice period with no flexibility", "The job title is wrong", "Five working days is unusual"], outputAnswer: 0, bugLine: 2,
      bugText: "90 days with no early release can make future job changes hard. Ask how it works in practice",
      hint: "Which line could affect her next job change?",
      note: "Not always a deal-breaker, but she should understand it. Ask, then decide.", badge: "search",
      board: true, boardLabel: "after Round 4"
    })),

    // ---------- Round 5: Bonds ----------
    {
      type: "learn", door: 5,
      title: "Service agreements (bonds): read every word.",
      points: [["What it is", "You agree to stay a set time, or pay an amount if you leave early"], ["Common for freshers", "Especially where the company trains you"], ["Check", "How long, how much, what counts as leaving, and is it pro-rated?"]],
      highlightLast: true,
      side: { label: "Red flags", items: [["x", "Keeping your original certificates", "Ask why, and for how long"], ["x", "Very high amounts", "Compared to your salary"], ["x", "Vague words", "“As decided by management”"]] }
    },
    RL(5, "Bonds", {
      prompt: "The offer has a 2-year service agreement. What should Pooja do first?",
      options: ["Sign it without reading it at all", "Read it and ask what it covers", "Plan to break it later", "Ignore it, bonds never matter"], answer: 1,
      hint: "Never sign what you have not read.",
      note: "Understand the period, the amount, and the exact conditions. Ask HR or the placement cell if anything is unclear.", badge: "file-text"
    }),
    RLN(5, "Bonds", {
      prompt: "A bond says ₹1,20,000 if you leave before 24 months, reduced equally for each month served (pro-rated). Pooja leaves after 18 months. How much does she pay, in rupees?",
      answer: 30000,
      hint: "₹1,20,000 ÷ 24 per month. How many months are left?",
      note: "₹5,000 per month × 6 months left = ₹30,000. Pro-rated bonds reduce as you stay longer. Always check if yours is.", badge: "indian-rupee"
    }),
    RL(5, "Bonds", {
      prompt: "The company asks Pooja to submit her original degree certificate for the bond period. What is the best response?",
      options: ["Ask why, and get a written receipt", "Hand it over without asking a question", "Refuse loudly and leave the room", "Give them a fake copy instead"], answer: 0,
      hint: "Calm, clear and in writing.",
      note: "Ask politely, understand the rules and keep written proof. Talk to the placement cell if you are uncomfortable.", badge: "shield",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Fake offers (double) ----------
    {
      type: "learn", door: 6,
      title: "Fake offer letters target freshers. Know the signs.",
      points: [["Asking for money", "“Pay ₹5,000 for training or laptop” is a major warning sign"], ["No real process", "No interview, or a quick chat on WhatsApp only"], ["Odd details", "Free email IDs, spelling mistakes, pressure to pay today"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["shield", "Real or fake?", "Spot the signs"], ["mic", "Then the final challenge", "Your offer questions"]] }
    },
    RL(6, "Fake Offers", {
      double: true,
      prompt: "An “offer” from a big-sounding company asks Pooja to pay ₹4,999 for “laptop security deposit” within 2 hours. What should she do?",
      options: ["Pay quickly so the offer is not lost", "Pay half now and negotiate the rest", "Forward it to all her friends to apply", "Don’t pay; verify on the official site"], answer: 3,
      hint: "Real employers pay you, not the other way round.",
      note: "Genuine companies do not ask freshers to pay to join. Verify through the official website or careers email.", badge: "shield"
    }),
    RL(6, "Fake Offers", {
      double: true,
      prompt: "Which is the strongest sign an offer letter is fake?",
      options: ["It mentions a six-month probation period", "Free email ID, and no interview held", "It has a joining date and a location", "It lists a 60-day notice period"], answer: 1,
      hint: "Which one skips the real process?",
      note: "Real offers come after real interviews, from company email domains. Probation and notice periods are normal.", badge: "mail"
    }),
    RL(6, "Fake Offers", {
      double: true,
      prompt: "Pooja is happy with everything. How should she accept the real offer?",
      options: ["Reply in writing by the deadline", "Just tell a friend that she has accepted", "Wait silently until the joining date", "Accept on a phone call only"], answer: 0,
      hint: "Proof and the deadline.",
      note: "Accept in writing before the validity date, save the letter and email, and keep all documents in one folder.", badge: "badge-check",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best list wins +200", prompt: "In 30 seconds, list the 5 things you will check before signing any offer letter.", note: "Role, joining, probation, notice, bond. The host picks the clearest list.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "Offer Letter Checklist", note: "Screenshot this. Use it the day your first offer arrives.", items: OFFERCHECK },
    {
      type: "end",
      joinTitle: "Join the EduMoon Skills Club",
      joinText: "Mock interviews, resumes, internships and career games every week. Get placed, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
