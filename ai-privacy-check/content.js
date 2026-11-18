// AI Privacy Check (EduMoon AI Lab). For all years.
// What is safe and what is not safe to share with AI tools: your own data, other people’s data, college and company data, safer habits, and AI-powered scams.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const PQ = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 40, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const PSPOT = { kind: "bug", time: 55, step1: "What is the risk?", step2: "Tap the line that should not be shared", say1: "First pick the risk.", say2: "Now tap the line to remove.", partO: "the risk", partL: "the line", lineLabel: "line", bugLabel: "Remove line" };

// The take-home card: the AI privacy checklist.
const CHECK = [
  ["The postcard rule", "Type into AI only what you would write on a postcard anyone could read."],
  ["Never share", "Passwords, OTPs, PINs, Aadhaar, PAN, bank or card numbers."],
  ["Other people’s data", "Their photos, numbers, chats and marks are not yours to paste."],
  ["College and company data", "Unreleased papers, company code and client details stay inside."],
  ["Replace real details", "Use “Student A” and made-up numbers instead of real ones."],
  ["Check the settings", "Many tools let you turn off chat history or training. Look for it."],
  ["Voice and video can be fake", "A call in a loved one’s voice asking for money? Hang up and call them back."],
  ["Report cyber fraud", "Call 1930 or visit cybercrime.gov.in, India’s official cybercrime portal."]
];

window.GAME = {
  id: "ai-privacy-check",
  title: "AI Privacy Check",
  club: "AI Lab",
  tagline: "AI tools are amazing. But what you type does not always stay private.",
  art: window.STORY_ART,
  guide: {
    years: "All years · every branch", time: "35 minutes", level: "Beginner",
    about: "Divya uses AI tools every day for assignments, resumes and messages. One day she almost pastes her bank details into a chatbot. In 6 rounds, teams learn what can happen to what you type, which personal data never goes into AI, why other people’s data is not yours to share, what college and company data must stay inside, safer habits, and how scammers now use AI voices and fake apps.",
    outcomes: "A simple rule for what to share with AI, the data that must never be shared, how to remove real details before asking AI for help, and what to do if someone tries an AI-powered scam.",
    tone: "Do not scare students away from AI. The message is: use it a lot, but use it smartly. Ask if anyone has received a strange call or message recently; real stories make this stick.",
    extra: [["Helpline", "India’s national cybercrime helpline is 1930, and complaints can be filed at cybercrime.gov.in. Say both aloud at the end."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Protected",
    rulesEyebrow: "How AI Privacy Check works", rulesTitle: "Learn the rule. Spot the risk. Stay safe.",
    learnText: "The host shares one privacy rule for AI tools.", crackTitle: "Decide",
    crackText: "Pick the safest choice on your phone and lock it in.",
    rulesExtra: "Spot-the-risk questions: <b>100</b> + <b>100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. That is exactly how leaks happen!", cracked: "stayed safe",
    next: "Next round →", finale: "Next →", winner: "are today’s privacy guards!", endLine: "Divya uses AI smartly now."
  },
  offerEyebrow: "EduMoon AI Lab · Privacy level",
  offerTitle: "Your privacy level",
  offers: [
    { min: 0.7, icon: "shield", title: "Privacy Guard", text: "You use AI smartly and safely. Teach one family member the postcard rule." },
    { min: 0.45, icon: "lock", title: "Careful User", text: "Strong! Check the privacy settings of the AI apps on your phone today." },
    { min: 0.2, icon: "eye", title: "Getting Aware", text: "Good start. Read the checklist below before your next AI chat." },
    { min: 0, icon: "book-open", title: "Privacy Learner", text: "Everyone starts here. Remember: never share OTPs or passwords, anywhere." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon AI Lab · Almost leaked",
      title: "Divya uses AI for everything. Yesterday she almost pasted her bank details into a chatbot. Can your team teach her what is safe to share?",
      cards: [["shield", "Your data, others’ data, college data"], ["lock", "Safer habits that still let you use AI"], ["trophy", "Your score decides your privacy level"]]
    },
    { type: "rules" },

    // ---------- Round 1: Where does it go? ----------
    {
      type: "learn", door: 1,
      title: "What you type into an AI tool may not stay only with you.",
      points: [["It is sent to a company’s computers", "Your chat travels over the internet"], ["It may be saved", "Many tools keep chat history, and some use chats to improve their AI"], ["Use the postcard rule", "Share only what you would write on a postcard anyone could read"]],
      highlightLast: true,
      side: { label: "The postcard rule", items: [["check", "“Explain photosynthesis simply”", "Safe"], ["check", "“Fix the grammar in my essay”", "Safe, if no private details"], ["x", "“Here is my PAN and bank number…”", "Never"]] }
    },
    PQ(1, "Where Does It Go?", {
      prompt: "Divya types a question into a free AI app. Where does her message go?",
      options: ["It stays only inside her phone", "It goes to the company’s computers", "It disappears after she reads the answer", "It goes only to her college"], answer: 1,
      hint: "How does the AI answer so fast with so much knowledge?",
      note: "The AI runs on the company’s computers, so your message is sent there. Many tools also save chat history.", badge: "cloud"
    }),
    PQ(1, "Where Does It Go?", {
      prompt: "What is the “postcard rule”?",
      options: ["Only use AI tools on postcards and letters", "Send all AI answers by post", "Share only what anyone could safely read", "Never use AI for any writing at all"], answer: 2,
      hint: "Anyone handling a postcard can read it.",
      note: "If you would not write it on a postcard, do not type it into an AI tool.", badge: "mail"
    }),
    PQ(1, "Where Does It Go?", {
      prompt: "Which of these is SAFE to ask an AI tool?",
      options: ["“My UPI PIN is 4821, is it strong enough?”", "“Explain how UPI payments work in simple steps.”", "“Here is my friend’s number. Find her address.”", "“My Aadhaar is 1234 5678 9012, fill this form.”"], answer: 1,
      hint: "Which one has no private details at all?",
      note: "General questions are safe. PINs, ID numbers and other people’s details are not.", badge: "badge-check",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Your personal data ----------
    {
      type: "learn", door: 2,
      title: "Some data must never go into any AI tool. Ever.",
      points: [["Secrets", "Passwords, OTPs, PINs and security answers"], ["ID numbers", "Aadhaar, PAN, passport and driving licence numbers"], ["Money details", "Bank account, card numbers and UPI PINs"]],
      highlightLast: true,
      side: { label: "Why it matters", items: [["lock", "Secrets unlock your accounts", "Nobody needs them except you"], ["file-user", "IDs can be misused", "For fake loans or SIM cards"], ["indian-rupee", "Money details", "Can empty your account"]] }
    },
    PQ(2, "Your Data", {
      prompt: "Divya wants AI to fill a scholarship form. What is the safest way?",
      options: ["Paste her Aadhaar, bank and marks into the chat", "Give AI her password to log in for her", "Ask AI to explain the form, then fill it herself", "Send her OTP so AI can submit it"], answer: 2,
      hint: "AI can explain without seeing her real data.",
      note: "Let AI explain what each field means. Type your real details only on the official website.", badge: "file-text"
    }),
    PQ(2, "Your Data", {
      prompt: "Which one should NEVER be typed into a chatbot?",
      options: ["Your OTP", "Your favourite subject", "Your college’s name", "Your city"], answer: 0,
      hint: "Which one can unlock an account?",
      note: "An OTP is a key to your account. Never share it with any app, person or AI.", badge: "lock"
    }),
    PQ(2, "Your Data", Object.assign({}, PSPOT, {
      prompt: "Divya’s message to an AI resume helper. Which line should she remove?",
      code: ["Please improve my resume summary.", "I am a final year ECE student from Vizag.", "My Aadhaar is 4521 8890 1123 and my PAN is ABCDE1234F.", "I built a line-following robot for a college fest."],
      outputOptions: ["ID numbers can be misused", "The line is too long", "Robots are not allowed"], outputAnswer: 0, bugLine: 2,
      bugText: "a resume helper never needs ID numbers. Remove it completely",
      hint: "Which line has nothing to do with a resume summary?",
      note: "Resumes need skills and projects, never ID numbers. The numbers in this example are made up.", badge: "file-user",
      board: true, boardLabel: "after Round 2"
    })),

    // ---------- Round 3: Other people's data ----------
    {
      type: "learn", door: 3,
      title: "Other people’s data is not yours to share.",
      points: [["Photos of others", "Uploading a friend’s photo to an AI app needs their permission"], ["Chats and screenshots", "Group chats contain other people’s words and numbers"], ["Lists with names", "Marks lists, phone lists, hostel lists"]],
      highlightLast: true,
      side: { label: "Ask yourself", items: [["users", "Whose data is this?", "If not only yours, think twice"], ["hand", "Did they agree?", "Ask before uploading"], ["shield", "Can I remove the names?", "Usually yes"]] }
    },
    PQ(3, "Others’ Data", {
      prompt: "Divya wants to turn her friend’s photo into a cartoon with an AI app. What should she do first?",
      options: ["Upload it, it is just for fun", "Upload it without the face", "Post the cartoon without telling", "Ask her friend if it is okay"], answer: 3,
      hint: "Whose face is it?",
      note: "It is your friend’s face and their choice. A quick “Is it okay?” is respectful and safe.", badge: "hand"
    }),
    PQ(3, "Others’ Data", {
      prompt: "The class representative wants AI to sort a sheet with 60 students’ names, phone numbers and marks. Best approach?",
      options: ["Paste the full sheet as it is", "Post it on a public group first", "Remove names and numbers first", "Send it to a random AI website"], answer: 2,
      hint: "Does the AI need to know who is who?",
      note: "Replace names with Student 1, Student 2 and remove phone numbers. The sorting still works.", badge: "list-checks"
    }),
    PQ(3, "Others’ Data", {
      prompt: "Divya wants AI to summarise a long hostel WhatsApp chat. What is the problem?",
      options: ["The chat has other people’s messages", "AI cannot read Telugu or English", "Summaries are always wrong", "There is no problem at all"], answer: 0,
      hint: "Who wrote most of those messages?",
      note: "The chat contains other people’s words and numbers. Summarise it yourself, or remove names and numbers first.", badge: "message-circle",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Explain the postcard rule to the room in your own words, with one example.", note: "Safe example, unsafe example. 20 seconds.", points: 100 },

    // ---------- Round 4: College and company data ----------
    {
      type: "learn", door: 4,
      title: "College and company data belongs to them, not to you.",
      points: [["Company code and documents", "Never paste them into public AI tools"], ["Client and customer details", "Names, numbers, orders and complaints stay inside"], ["Unreleased exam papers", "Sharing them anywhere breaks college rules"]],
      highlightLast: true,
      side: { label: "At an internship", items: [["check", "Use the AI tool the company approves", "If they have one"], ["check", "Ask your lead first", "“Can I use AI for this?”"], ["x", "Paste company code into a free app", "It can cost your internship"]] }
    },
    PQ(4, "College and Company Data", {
      prompt: "Divya is an intern. She is stuck on the company’s code. What should she do?",
      options: ["Paste all the company code into a free chatbot", "Upload the code to a public website", "Ask her lead which AI tools are allowed", "Email the code to a friend"], answer: 2,
      hint: "Whose code is it?",
      note: "Company code belongs to the company. Ask first. Many companies have rules and approved tools for AI.", badge: "briefcase"
    }),
    PQ(4, "College and Company Data", {
      prompt: "A professor shares next week’s quiz with class reps to print. A rep pastes it into AI “to get the answers early”. What is wrong?",
      options: ["Nothing, it saves everyone some time", "It breaks trust and rules", "AI cannot solve quiz questions", "Printing quizzes is not allowed"], answer: 1,
      hint: "Was it shared for that purpose?",
      note: "Using data for something it was not shared for breaks trust and rules, with or without AI.", badge: "scale"
    }),
    PQ(4, "College and Company Data", {
      prompt: "Divya wants AI to help reply to an angry customer at her internship. Safest way?",
      options: ["Describe the issue without personal details", "Paste the customer’s name, phone and address", "Forward the whole email chain to the AI", "Post the complaint on social media"], answer: 0,
      hint: "Does the AI need to know who the customer is?",
      note: "“A customer is upset about a late delivery” is enough for AI to help. Keep personal details out.", badge: "mail",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Safer habits ----------
    {
      type: "learn", door: 5,
      title: "You can still use AI for almost anything. Just do it safely.",
      points: [["Replace real details", "“Student A”, “Company X”, made-up numbers"], ["Check privacy settings", "Many tools let you turn off history or training"], ["Use official apps only", "Download from the real app store, check the company name"]],
      highlightLast: true,
      side: { label: "Same help, no risk", items: [["x", "“Ravi Kumar, 98xxx, failed maths”", "Real details"], ["check", "“A student failed maths”", "Same help"], ["check", "Settings → data controls", "Look for history and training options"]] }
    },
    PQ(5, "Safer Habits", {
      prompt: "Divya wants AI to write a polite message to her landlord about a leaking tap. Which prompt is safest?",
      options: ["Just describe the problem and the tone she wants", "Include her full address and landlord’s phone", "Include her bank details for the rent", "Include her Aadhaar to prove she lives there"], answer: 0,
      hint: "What does the AI really need?",
      note: "The AI needs the situation and the tone, nothing else. Add your details yourself after copying the message.", badge: "pen-tool"
    }),
    PQ(5, "Safer Habits", {
      prompt: "An app called “ChatGPT Pro Free Unlimited” asks for access to her contacts, SMS and photos. What should she do?",
      options: ["Allow everything to unlock free features", "Skip it; use the official app", "Allow only SMS access for now", "Share the app with all her friends"], answer: 1,
      hint: "Why would a chatbot need your SMS?",
      note: "Fake AI apps often steal data. A chatbot does not need your SMS or contacts. Check the developer name in the app store.", badge: "smartphone"
    }),
    PQ(5, "Safer Habits", {
      prompt: "Which habit protects Divya the most?",
      options: ["Removing real details before asking", "Using AI tools only late at night", "Typing faster", "Using only one single AI tool forever"], answer: 0,
      hint: "What she types is the thing that can leak.",
      note: "Removing real details before you ask is the habit that protects you on every tool.", badge: "shield",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: AI scams (double) ----------
    {
      type: "learn", door: 6,
      title: "Scammers use AI too: fake voices, fake videos and fake apps.",
      points: [["Voice cloning", "A few seconds of someone’s voice can be copied"], ["Fake photos and videos", "Faces can be placed into fake images"], ["What to do", "Pause, verify on a known number, and report to 1930 or cybercrime.gov.in"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["shield", "AI scams", "Real situations"], ["mic", "Then the final challenge", "Teach the room one rule"]] }
    },
    PQ(6, "AI Scams", {
      double: true,
      prompt: "Divya gets a call in her brother’s exact voice: “I’m in trouble, send ₹20,000 now, don’t tell anyone!” What should she do?",
      options: ["Send the money immediately", "Send half the money first to be safe", "Share her UPI PIN so he can take it", "Hang up, call him on his known number"], answer: 3,
      hint: "Voices can be copied. Phone numbers he really uses cannot.",
      note: "Pause and verify by calling back on the number you know. Urgency and secrecy are classic scam signs.", badge: "smartphone"
    }),
    PQ(6, "AI Scams", {
      double: true,
      prompt: "Someone threatens to share a fake edited photo of Divya unless she pays. What should she do?",
      options: ["Pay quietly so the problem goes away", "Delete all her social media and hide", "Reply to them with threats of her own", "Tell someone she trusts and report it"], answer: 3,
      hint: "She has done nothing wrong.",
      note: "Do not pay. Save the evidence, tell someone you trust and report it. Call 1930 or use cybercrime.gov.in.", badge: "shield"
    }),
    PQ(6, "AI Scams", {
      double: true,
      prompt: "What is India’s national cybercrime helpline number?",
      options: ["100", "108", "1098", "1930"], answer: 3,
      hint: "It is the newest of these numbers.",
      note: "1930 is the cybercrime helpline. Call quickly after money fraud; it can help stop the money moving. 100 is police, 108 ambulance, 1098 child helpline.", badge: "shield",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "In 30 seconds, teach the room the 3 things you will never type into AI, and why.", note: "Clear, simple and memorable wins. The host picks.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "AI Privacy Checklist", note: "Screenshot this. Share it with your family group.", items: CHECK },
    {
      type: "end",
      joinTitle: "Join the EduMoon AI Lab",
      joinText: "AI games, tools and projects every week. Learn to use AI the right way, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
