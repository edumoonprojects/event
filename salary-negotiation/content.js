// Salary Negotiation (EduMoon Skills Club). Advanced: for final years, interns and early-career job seekers.
// How to talk about pay without fear: research, timing, what to say, negotiating beyond salary, simple numbers, and handling every outcome. Companies and numbers are made up.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const SN = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 45, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const SNN = (round, name, extra) => SN(round, name, Object.assign({ kind: "number", time: 60 }, extra));
const SNSPOT = { kind: "bug", time: 60, step1: "What is the problem?", step2: "Tap the weakest line", say1: "First pick the problem.", say2: "Now tap the weakest line.", partO: "the problem", partL: "the line", lineLabel: "line", bugLabel: "The weakest line is" };

// The take-home card: the pay conversation playbook.
const PAYCARD = [
  ["Know the range", "Seniors, placement cell data, job portals and friends in similar roles."],
  ["Know your situation", "Mass-hiring fresher packages are often fixed. Smaller firms and later roles have more room."],
  ["Wait for the offer", "Talk numbers seriously once they want you, not in the first call."],
  ["Thank, then ask", "“Thank you, I’m excited. Is there flexibility on the fixed pay?”"],
  ["Use reasons", "Skills, a relevant internship, another offer, city costs. Never threats."],
  ["Look beyond salary", "Joining bonus, relocation, start date, learning budget, work mode."],
  ["Get it in writing", "Any change must appear in the revised offer letter."],
  ["Stay gracious", "If the answer is no, decide calmly. You will meet these people again."]
];

window.GAME = {
  id: "salary-negotiation",
  title: "Salary Negotiation",
  club: "Skills Club",
  tagline: "Most freshers never ask. Learn when and how to talk about pay, politely.",
  art: window.STORY_ART,
  guide: {
    years: "Final year, interns and early-career job seekers", time: "40 minutes", level: "Advanced",
    about: "Meera has an offer from a made-up 60-person product company, Harbourline Labs, and another offer from a services firm. She is scared that asking about pay will cancel her offer. In 6 rounds, teams learn how to research a fair range, when to negotiate, what to say, what to ask for besides salary, the simple maths behind offers, and how to handle yes, no and “we’ll get back to you”.",
    outcomes: "When negotiation is realistic for freshers, polite phrases that work, how to use another offer honestly, non-salary items to ask for, and why everything must be in writing.",
    tone: "Many students fear negotiation is rude. Model calm, polite language. Be honest that large mass-recruitment drives often have fixed fresher packages; the skill matters more for smaller companies, laterals and later jobs.",
    extra: [["Related games", "Play Read Your Offer Letter first for the offer basics, and Deal Room for negotiation skills in business."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Negotiated",
    rulesEyebrow: "How Salary Negotiation works", rulesTitle: "Learn the move. Pick Meera’s best line. Ask with confidence.",
    learnText: "The host explains one part of the pay conversation.", crackTitle: "Decide",
    crackText: "Pick Meera’s best move on your phone and lock it in.",
    rulesExtra: "Some questions need a typed number. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Many professionals still get it wrong!", cracked: "negotiated it",
    next: "Next round →", finale: "Next →", winner: "are today’s best negotiators!", endLine: "Meera asked, politely, and got a better offer."
  },
  offerEyebrow: "Harbourline Labs · Revised offer",
  offerTitle: "Your revised offer",
  offers: [
    { min: 0.7, icon: "trophy", title: "Offer Improved", text: "You ask with confidence and respect. Use the playbook for your real offer." },
    { min: 0.45, icon: "handshake", title: "Good Conversation", text: "Strong! Practise the “thank, then ask” line aloud." },
    { min: 0.2, icon: "lightbulb", title: "Learning to Ask", text: "Good start. Research one real salary range this week." },
    { min: 0, icon: "book-open", title: "First Offer", text: "Everyone starts here. Read the playbook before any offer call." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Skills Club · Two offers",
      title: "Meera has an offer from a small product company and another from a services firm. She wants to ask for more, but fears the offer will vanish. Can your team coach her?",
      cards: [["indian-rupee", "Research, timing and the right words"], ["handshake", "Beyond salary, and every possible outcome"], ["trophy", "Your score decides your revised offer"]]
    },
    { type: "rules" },

    // ---------- Round 1: Know the range ----------
    {
      type: "learn", door: 1,
      title: "You cannot negotiate without knowing what is normal.",
      points: [["Ask people", "Seniors, alumni and the placement cell know real numbers"], ["Check sources", "Salary sites and job posts give rough ranges"], ["Compare like with like", "Same role, same city, same company size"]],
      highlightLast: true,
      side: { label: "Meera’s research (made-up)", items: [["users", "Seniors at similar firms", "₹6 to ₹8 lakh"], ["chart-column", "Job posts", "₹6.5 to ₹9 lakh"], ["target", "Her offer", "₹6 lakh"]] }
    },
    SN(1, "Know the Range", {
      prompt: "Where should Meera start her salary research?",
      options: ["A random comment on a video", "Seniors and the placement cell", "Her neighbour’s guess", "Her own wish for a big number"], answer: 1,
      hint: "People in similar roles.",
      note: "Real numbers from people in similar roles and companies are the most useful.", badge: "users"
    }),
    SN(1, "Know the Range", {
      prompt: "Meera finds a ₹15 lakh salary for a senior developer in Bengaluru. Should she use it for her fresher role in Vizag?",
      options: ["Yes, numbers are numbers", "No, different level and city", "Yes, and ask for even more", "Only if she wears a suit"], answer: 1,
      hint: "Like with like.",
      note: "Compare the same role, level, city and company size. Otherwise the number means little.", badge: "scale"
    }),
    SN(1, "Know the Range", {
      prompt: "Which situation usually has the LEAST room to negotiate a fresher salary?",
      options: ["A 60-person startup hiring one person", "A lateral hire with experience", "A specialist role with few candidates", "A mass campus drive hiring thousands"], answer: 3,
      hint: "Thousands of identical offers.",
      note: "Mass drives often have fixed packages. Smaller firms and specialised roles usually have more flexibility.", badge: "users",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Timing ----------
    {
      type: "learn", door: 2,
      title: "Timing: the best moment is after they decide they want you.",
      points: [["Early calls", "If asked about expectations, share a researched range"], ["After the offer", "Now you can discuss details"], ["Before signing", "Once you accept, the conversation is mostly over"]],
      highlightLast: true,
      side: { label: "If asked early", items: [["check", "“Based on my research, roles like this pay ₹6.5 to ₹8 lakh.”", ""], ["x", "“Whatever you give is fine.”", "Gives up your position"], ["x", "“I want ₹20 lakh.”", "Not based on anything"]] }
    },
    SN(2, "Timing", {
      prompt: "When is the best time for Meera to negotiate?",
      options: ["After the offer, before signing", "In the first five minutes of round 1", "After she has joined", "Never, it is rude"], answer: 0,
      hint: "When they want her, and before she commits.",
      note: "After the offer, they have chosen her. Before signing, things can still change.", badge: "clock"
    }),
    SN(2, "Timing", {
      prompt: "In the HR round she is asked, “What are your salary expectations?” Best answer?",
      options: ["“From my research, ₹6.5 to ₹8 lakh.”", "“Anything is fine, I just want a job.”", "“As much as possible, honestly.”", "“I will tell you after you tell me yours.”"], answer: 0,
      hint: "A range with a reason.",
      note: "A researched range shows preparation and leaves room to discuss.", badge: "chart-column"
    }),
    SN(2, "Timing", {
      prompt: "Meera already signed and returned the offer. Can she negotiate the salary now?",
      options: ["Yes, easily, any time", "Much harder; she agreed", "Only after one day", "Only by email at night"], answer: 1,
      hint: "What does signing mean?",
      note: "Signing means agreeing. Raise questions before you accept.", badge: "file-text",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: What to say ----------
    {
      type: "learn", door: 3,
      title: "Thank them, show interest, then ask with a reason.",
      points: [["Thank and confirm interest", "“Thank you, I’m excited about this role.”"], ["Ask, don’t demand", "“Is there flexibility on the fixed pay?”"], ["Give a reason", "Skills, a relevant internship, research, another offer"]],
      highlightLast: true,
      side: { label: "Avoid", items: [["x", "Threats", "“Pay more or I’ll leave.”"], ["x", "Personal reasons only", "“I need money for my bike EMI.”"], ["x", "Lying", "Fake offers can be checked"]] }
    },
    SN(3, "What to Say", {
      prompt: "Which line is the best way to ask?",
      options: ["“Thank you! Given my internship, could it be ₹7 lakh?”", "“Your offer is too low, I deserve much more than this.”", "“Give me ₹10 lakh or I will reject it today.”", "“My friend got more, so I want more too.”"], answer: 0,
      hint: "Thanks, interest, a reason, a number.",
      note: "Polite, specific and backed by something real. HR can work with that.", badge: "message-circle"
    }),
    SN(3, "What to Say", Object.assign({}, SNSPOT, {
      prompt: "Meera’s email to HR. Which line weakens it most?",
      code: ["Thank you for the offer. I am excited to join Harbourline Labs.", "My 6-month internship building a billing app is directly related to this role.", "Also, I need more money because my rent in Vizag is high.", "Is there flexibility to bring the fixed pay closer to ₹7 lakh?"],
      outputOptions: ["A personal reason instead of a professional one", "It is too polite", "It names the company"], outputAnswer: 0, bugLine: 2,
      bugText: "personal costs are not the company’s reason to pay more. Keep reasons about value and market",
      hint: "Which line is about her, not her value?",
      note: "Companies pay for value and market rates. Personal expenses weaken the case.", badge: "x"
    })),
    SN(3, "What to Say", {
      prompt: "After asking, HR is silent for a few seconds on the call. What should Meera do?",
      options: ["Quickly say “It’s okay, never mind”", "Lower her number immediately", "Wait calmly for their reply", "Hang up"], answer: 2,
      hint: "Silence is normal.",
      note: "Let them think. Filling the silence often means giving away what you just asked for.", badge: "timer",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Say Meera’s ask aloud: thank them, show interest, give one reason, and name a number.", note: "Calm and polite. 20 seconds.", points: 100 },

    // ---------- Round 4: Beyond salary ----------
    {
      type: "learn", door: 4,
      title: "If the salary is fixed, other things may not be.",
      points: [["One-time items", "Joining bonus, relocation support"], ["Time", "A later start date to finish exams or rest"], ["Growth", "Learning budget, certifications, a review after 6 months"]],
      highlightLast: true,
      side: { label: "Ask for", items: [["indian-rupee", "Relocation", "If moving cities"], ["clock", "Start date", "After final exams"], ["graduation-cap", "Learning budget", "Courses and certifications"]] }
    },
    SN(4, "Beyond Salary", {
      prompt: "HR says the fresher salary is fixed. What could Meera ask instead?",
      options: ["Relocation or an early review", "Nothing, the conversation is over", "A bigger desk only", "To skip probation entirely"], answer: 0,
      hint: "Other valuable items.",
      note: "One-time support or an earlier performance review can be easier for companies to approve.", badge: "handshake"
    }),
    SN(4, "Beyond Salary", {
      prompt: "Meera’s final exams end two weeks after the proposed joining date. Best request?",
      options: ["Join and skip the exams", "Ask to join two weeks later", "Say nothing and miss work days", "Reject the offer"], answer: 1,
      hint: "A start date is negotiable too.",
      note: "A short, reasonable delay with a clear reason is a common and fair request.", badge: "clock"
    }),
    SN(4, "Beyond Salary", {
      prompt: "Which request shows Meera cares about growth?",
      options: ["Extra paid holidays in the first month", "A company phone for personal use", "Not attending team meetings", "A learning budget for certifications"], answer: 3,
      hint: "Something that makes her better at the job.",
      note: "Learning budgets help both sides. Companies often like this request.", badge: "graduation-cap",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: The numbers ----------
    {
      type: "learn", door: 5,
      title: "Know the numbers before the call.",
      points: [["Percentage change", "(new − old) ÷ old × 100"], ["Monthly view", "Yearly fixed pay ÷ 12 before deductions"], ["Fixed vs variable", "Variable pay depends on performance, so it is not guaranteed"]],
      highlightLast: true,
      side: { label: "Quick checks", items: [["chart-column", "₹6 L → ₹6.6 L", "10% more"], ["indian-rupee", "₹6 L fixed", "₹50,000 a month before deductions"], ["search", "Variable pay", "Ask how it is paid"]] }
    },
    SNN(5, "The Numbers", {
      prompt: "The offer is ₹6,00,000 fixed. Meera asks for ₹6,60,000. What percentage increase is she asking for?",
      answer: 10,
      hint: "60,000 ÷ 6,00,000 × 100.",
      note: "10%. Asking for 5 to 15% above a fair offer, with a reason, is usually reasonable.", badge: "chart-column"
    }),
    SNN(5, "The Numbers", {
      prompt: "A fixed pay of ₹7,20,000 a year is how many rupees per month, before deductions?",
      answer: 60000,
      hint: "÷ 12.",
      note: "₹60,000 a month before PF, tax and other deductions. In-hand will be lower.", badge: "indian-rupee"
    }),
    SN(5, "The Numbers", {
      prompt: "Offer A: ₹6.5 L fixed. Offer B: ₹5.5 L fixed + ₹1.5 L variable “up to”. Which is more certain?",
      options: ["Offer B, it has the bigger total", "Both are exactly the same", "Offer A, all of it is fixed", "Neither is certain"], answer: 2,
      hint: "“Up to” is not guaranteed.",
      note: "Variable pay depends on targets. Compare fixed pay first, then ask how variable pay has been paid in past years.", badge: "scale",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Outcomes (double) ----------
    {
      type: "learn", door: 6,
      title: "Yes, no or maybe: handle each one well.",
      points: [["Yes", "Thank them, and ask for the revised offer letter"], ["No", "Thank them, then decide calmly. No hard feelings"], ["Another offer", "Mention it honestly, never invent one"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["handshake", "Every outcome", "Graceful answers"], ["mic", "Then the final challenge", "The full call"]] }
    },
    SN(6, "Outcomes", {
      double: true,
      prompt: "HR agrees to ₹6.6 lakh on a call. What must Meera do next?",
      options: ["Trust the call and sign the old letter", "Post the news online first", "Ask for even more now", "Ask for a revised offer letter"], answer: 3,
      hint: "Proof.",
      note: "A verbal yes is not enough. The new number must be in the revised letter before she signs.", badge: "file-text"
    }),
    SN(6, "Outcomes", {
      double: true,
      prompt: "Meera has a genuine second offer of ₹7 lakh. How should she mention it?",
      options: ["Pretend it is ₹10 lakh", "Threaten to leave immediately", "Honestly, with her preference", "Never mention it"], answer: 2,
      hint: "Truth plus genuine interest.",
      note: "“I have another offer at ₹7 lakh, but I’d prefer to join you. Is there flexibility?” is honest and effective.", badge: "shield"
    }),
    SN(6, "Outcomes", {
      double: true,
      prompt: "HR says, “Sorry, we can’t change the salary.” What is the best response?",
      options: ["Argue until they agree", "Insult the company online", "Thank them; decide calmly", "Ghost them"], answer: 2,
      hint: "Gracious, either way.",
      note: "A polite thank-you keeps the relationship. Then compare offers and decide without emotion.", badge: "handshake",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, offer, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best call wins +200", prompt: "Role-play: the host is HR. Thank them, ask with a reason, and handle their “We can’t change it” reply.", note: "Calm, specific, gracious. The host picks the most professional call.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "The Pay Conversation Playbook", note: "Screenshot this. Read it before any offer call.", items: PAYCARD },
    {
      type: "end",
      joinTitle: "Join the EduMoon Skills Club",
      joinText: "Mock interviews, resumes, internships and career games every week. Get placed, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
