// Scam or Safe (EduMoon Skills Club). For all years.
// Real-looking SMS, UPI requests, job offers, links and calls. Teams decide: scam or safe? Then find the red flag.
// Every bank, app, company, number and link in this game is made up.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const SQ = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 45, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
// "Scam or safe, then tap the red flag" questions use the bug door with friendlier labels.
const FLAG = { kind: "bug", time: 60, outputOptions: ["Scam", "Safe"], outputAnswer: 0, step1: "Scam or safe?", step2: "Tap the biggest red flag", say1: "First decide: scam or safe?", say2: "Now tap the biggest red flag.", partO: "the verdict", partL: "the red flag", lineLabel: "line", bugLabel: "The biggest red flag is" };

// The take-home card: 8 rules that stop most scams.
const RULES = [
  ["Never share OTP, PIN or CVV", "Not with bank staff, police or customer care. Nobody real ever asks."],
  ["PIN means money leaving", "You never need a PIN or a QR scan to RECEIVE money."],
  ["Real jobs never ask you to pay", "No registration fee, training fee or laptop deposit."],
  ["Urgency is a trap", "“Blocked in 2 hours” means slow down, not hurry up."],
  ["Check the real website", "Read the name just before .com or .in. That’s the real owner."],
  ["Call back on the official number", "From the app or the back of your card, never the one in the message."],
  ["There’s no “digital arrest”", "Police don’t arrest anyone over a video call. Hang up."],
  ["Got scammed? Act fast", "Call 1930 or report at cybercrime.gov.in, and tell your bank right away."]
];

window.GAME = {
  id: "scam-or-safe",
  title: "Scam or Safe",
  club: "Skills Club",
  tagline: "Real-looking messages, links and calls. Can your team spot every scam?",
  art: window.STORY_ART,
  guide: {
    years: "All years (works for parents and faculty too)", time: "35 minutes", level: "Beginner",
    about: "Teams see real-looking SMS, UPI requests, job offers, links and phone calls. For each one they decide: scam or safe? Then they find the biggest red flag. 6 rounds cover bank SMS, UPI and QR tricks, fake internships, look-alike links, fake customer care and “digital arrest” calls, and a final round where some messages are actually safe.",
    outcomes: "8 rules that stop most scams, the habit of checking before clicking, and the confidence to teach their families. All brands, numbers and links in the game are made up.",
    tone: "Never make anyone feel stupid for falling for a scam: they are designed by professionals to fool smart people. If a student shares that they or their family lost money, thank them, and remind everyone that 1930 and cybercrime.gov.in exist for exactly that.",
    extra: [["Share it home", "End by asking everyone to send the 8 rules to their family WhatsApp group. Parents and grandparents are targeted the most."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Spotted",
    rulesEyebrow: "How Scam or Safe works", rulesTitle: "Read it. Judge it. Spot the red flag.",
    learnText: "The host shows how this kind of scam works.", crackTitle: "Judge",
    crackText: "Decide on your phone and lock it in.",
    rulesExtra: "Red flag questions: <b>100</b> for scam or safe + <b>100</b> for the red flag. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. That’s exactly why this scam works on so many people!", cracked: "spotted it",
    next: "Next round →", finale: "Next →", winner: "are today’s scam spotters!", endLine: "You’re now harder to scam. Teach someone at home!"
  },
  offerEyebrow: "EduMoon · Cyber safety check",
  offerTitle: "Your scam shield level",
  offers: [
    { min: 0.7, icon: "shield", title: "Cyber Guardian", text: "Scammers would struggle with you. Now protect your family too." },
    { min: 0.45, icon: "badge-check", title: "Scam Spotter", text: "Strong! Read the 8 rules once more and you’re very hard to fool." },
    { min: 0.2, icon: "search", title: "Getting Safer", text: "Good start. Slow down before you click any link this week." },
    { min: 0, icon: "book-open", title: "Learner", text: "Everyone starts somewhere. Save the 8 rules and read them tonight." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Skills Club · Scam or Safe",
      title: "Every day, students in Vizag get messages like these. Some are real. Most are scams. Can your team tell?",
      cards: [["message-circle", "Real-looking SMS, UPI requests, job offers and calls"], ["search", "Decide scam or safe, then find the red flag"], ["shield", "Leave with 8 rules that stop most scams"]]
    },
    { type: "rules" },

    // ---------- Round 1: Bank and KYC messages ----------
    {
      type: "learn", door: 1,
      title: "The KYC scam: fear first, then a link.",
      points: [["Fear", "“Your account will be blocked today”"], ["A link that isn’t the bank’s", "It opens a page that looks exactly like your bank"], ["Then they ask", "Your login, OTP or card details, and the money is gone"]],
      highlightLast: true,
      side: { label: "A real bank will never", items: [["x", "Ask for your OTP, PIN or CVV", "Not by SMS, call or email"], ["x", "Send a link to “update KYC”", "You do that in the app or at the branch"], ["x", "Give you 2 hours or else", "Real deadlines give you weeks"]] }
    },
    SQ(1, "Bank Messages", Object.assign({}, FLAG, {
      prompt: "An SMS on your phone. Scam or safe? Then tap the biggest red flag.",
      code: ["Dear Customer,", "Your Kaveri Bank KYC expires TODAY.", "Your account will be BLOCKED in 2 hours.", "Update now: kaveri-kyc-update.info", "- Team Kaveri Bank"],
      bugLine: 3,
      bugText: "a link that isn’t the bank’s website. The 2-hour threat is a red flag too",
      hint: "Which line would actually steal your details if you acted on it?",
      note: "Fear (2 hours) pushes you to click the link without thinking. Banks never send KYC links like this.", badge: "landmark"
    })),
    SQ(1, "Bank Messages", {
      prompt: "A real bank will NEVER ask you to…",
      options: ["Visit the branch", "Use the official app", "Share your OTP, PIN or CVV", "Keep your mobile number updated"], answer: 2,
      hint: "Which one gives someone else the keys to your money?",
      note: "OTP, PIN and CVV are the keys to your money. No real bank employee will ever ask for them.", badge: "lock"
    }),
    SQ(1, "Bank Messages", {
      prompt: "You clicked the link. It looks exactly like your bank’s page. What’s the safest move?",
      options: ["Enter your details quickly before the account is blocked", "Reply to the SMS and ask if it’s real", "Close it; use the bank’s official app", "Forward it to friends to check"], answer: 2,
      hint: "How do you reach the REAL bank?",
      note: "Always go to the bank yourself: the official app, website or card number. Never through the link or number in the message.", badge: "shield",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: UPI and QR ----------
    {
      type: "learn", door: 2,
      title: "UPI rule: PIN means money is LEAVING.",
      points: [["Receiving money", "Needs nothing from you. No PIN, no QR scan, no approval"], ["Scanning a QR or entering a PIN", "Always SENDS money from your account"], ["Collect requests", "“Approve to receive refund” actually means “approve to pay”"]],
      highlightLast: true,
      side: { label: "Where this scam shows up", items: [["briefcase", "Selling online", "“I’m in the army, I’ll pay by QR”"], ["file-text", "Fake refunds", "“Approve to get your ₹1,500 back”"], ["users", "Wrong transfer", "“I sent you money by mistake, please return”"]] }
    },
    SQ(2, "UPI and QR", Object.assign({}, FLAG, {
      prompt: "You’re selling your old cycle online. A buyer messages. Scam or safe? Then tap the biggest red flag.",
      code: ["Hi, I want to buy your cycle for ₹4,000.", "I’m posted far away, so I can’t come to see it.", "I’ll send the money now. Scan my QR code to receive it.", "Then enter your UPI PIN to accept the payment."],
      bugLine: 3,
      bugText: "a UPI PIN to “accept” money. A PIN only ever sends money. Scanning their QR to “receive” is a red flag too",
      hint: "What does your UPI PIN actually do?",
      note: "You never need a PIN or a QR scan to receive money. The moment someone asks, it’s a scam.", badge: "smartphone"
    })),
    SQ(2, "UPI and QR", {
      prompt: "When should you enter your UPI PIN?",
      options: ["To receive money from someone", "Only when money is leaving", "To check if a QR code is real", "Whenever an app asks for it"], answer: 1,
      hint: "Think of the PIN as your signature on a payment.",
      note: "PIN = you are paying. If you’re supposed to be receiving, stop.", badge: "key"
    }),
    SQ(2, "UPI and QR", {
      prompt: "A UPI request pops up: “Refund of ₹1,500 from QuickKart. Approve to receive.” What should you do?",
      options: ["Approve it, it’s a refund", "Decline. Approving sends your money", "Approve it and check later", "Ask them to send it again"], answer: 1,
      hint: "Look at what the button really does, not what the message says.",
      note: "Real refunds go straight into your account. A collect request asks YOU to pay. Decline, and report it in the app.", badge: "x",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Fake jobs and internships ----------
    {
      type: "learn", door: 3,
      title: "Students are the main target of fake job offers.",
      points: [["Too good to be true", "₹25,000 a month for a fresher, from home, no interview"], ["They ask YOU to pay", "Registration, training, a laptop deposit, a “security fee”"], ["Task scams", "Small payouts first to win your trust, then “invest to unlock bigger tasks”"]],
      highlightLast: true,
      side: { label: "Check any offer", items: [["search", "Search the company + “scam”", "Read what others found"], ["mail", "Check the email", "A gmail.com offer letter is a red flag"], ["users", "Ask your placement cell", "They know which companies are real"]] }
    },
    SQ(3, "Fake Jobs", Object.assign({}, FLAG, {
      prompt: "A WhatsApp message from an unknown number. Scam or safe? Then tap the biggest red flag.",
      code: ["Congratulations! You are selected for a Work From Home internship at TechNova.", "Stipend: ₹25,000/month. No interview needed.", "Pay ₹999 registration fee to confirm your seat.", "Offer valid for 1 hour only."],
      bugLine: 2,
      bugText: "a fee to get a job. Real companies pay you; they never ask you to pay",
      hint: "In a real job, which way does the money go?",
      note: "No interview, a huge stipend, a fee and a 1-hour deadline. Four red flags in four lines.", badge: "briefcase"
    })),
    SQ(3, "Fake Jobs", {
      prompt: "Which is the BIGGEST sign that a job offer is fake?",
      options: ["The company has a website", "There is an interview first", "They ask you to pay a fee", "The offer comes from a company email address"], answer: 2,
      hint: "Three of these happen with real jobs too.",
      note: "Real employers never charge you to get hired. Any fee means walk away.", badge: "shield"
    }),
    SQ(3, "Fake Jobs", {
      prompt: "“Like 3 videos, earn ₹150 each. Then join our Telegram group for bigger tasks.” What usually happens next?",
      options: ["You earn easily, forever, from home", "It’s a real marketing internship", "Nothing happens after the first task", "Small pay, then “invest”, then it’s gone"], answer: 3,
      hint: "Why would anyone pay you ₹150 to like a video?",
      note: "The first payments are bait. The moment you “invest”, you won’t see that money again.", badge: "alarm-clock",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Have you or your family ever received a scam message? What did it say?", note: "Share the trick, not your personal details. Every story helps someone else spot it.", points: 100 },

    // ---------- Round 4: Look-alike links ----------
    {
      type: "learn", door: 4,
      title: "Read a link from the end, not the start.",
      points: [["Find the real owner", "Look at the name just before .com, .in or .org"], ["careers.theedumoon.com", "Owned by theedumoon.com. Real"], ["theedumoon.com.jobs-portal.xyz", "Owned by jobs-portal.xyz. Fake"]],
      highlightLast: true,
      side: { label: "Look-alike tricks", items: [["search", "One letter changed", "thedumoon.com, kavaribank.in"], ["link-2", "Extra words added", "kaveribank-secure.co"], ["x", "Short links", "They hide where they really go"], ["lock", "The padlock", "Only means private, not safe. Scam sites have it too"]] }
    },
    SQ(4, "Look-Alike Links", {
      prompt: "EduMoon’s real website is theedumoon.com. Which link really belongs to EduMoon?",
      options: ["theedumoon.com.jobs-portal.xyz", "theedumoon-careers.co", "careers.theedumoon.com", "thedumoon.com"], answer: 2,
      hint: "Read each one from the end. What comes right before the last dot?",
      note: "careers.theedumoon.com ends in theedumoon.com, so EduMoon owns it. The others belong to someone else.", badge: "link-2"
    }),
    SQ(4, "Look-Alike Links", Object.assign({}, FLAG, {
      prompt: "Kaveri Bank’s real website is kaveribank.in. You get this email. Scam or safe? Then tap the biggest red flag.",
      code: ["From: Kaveri Bank <alerts@kaveribank-secure.co>", "Subject: Unusual login detected", "We noticed a login to your account from a new device.", "If this wasn’t you, verify your account within 30 minutes."],
      bugLine: 0,
      bugText: "the sender’s address. kaveribank-secure.co is not kaveribank.in",
      hint: "The bank’s website is kaveribank.in. Check every address.",
      note: "Anyone can type “Kaveri Bank” as a name. The address after @ is what matters.", badge: "mail"
    })),
    SQ(4, "Look-Alike Links", {
      prompt: "A page shows a padlock and starts with https. Does that mean it’s safe?",
      options: ["Yes, the padlock means the site is verified", "No, it only means the connection is private", "Only on phones, not on laptops", "Yes, if the page loads quickly"], answer: 1,
      hint: "Who can get a padlock for their site?",
      note: "Anyone, including scammers, can get a padlock for free. Always check the website name itself.", badge: "lock",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Fake calls ----------
    {
      type: "learn", door: 5,
      title: "On a call, scammers pretend to be someone you trust.",
      points: [["Fake customer care", "Found by searching online, or they call you first"], ["Screen-sharing apps", "“Install this app so I can help” lets them see your OTPs"], ["“Digital arrest”", "Fake police on video call saying you’re in trouble. Real police never do this"]],
      highlightLast: true,
      side: { label: "On any call", items: [["hand", "You can always hang up", "Real people will understand"], ["landmark", "Call back yourself", "On the number from the official app"], ["users", "Tell someone", "Scammers want you alone and scared"]] }
    },
    SQ(5, "Fake Calls", Object.assign({}, FLAG, {
      prompt: "A call about a refund. Scam or safe? Then tap the biggest red flag.",
      code: ["Caller: Hello, I’m calling from QuickKart customer care.", "Caller: Your refund of ₹2,300 is pending.", "Caller: Please install the ScreenHelp app so I can process it.", "Caller: Now just read me the OTP you received."],
      bugLine: 3,
      bugText: "asking for your OTP. Installing a screen-sharing app for them is a red flag too",
      hint: "Which line hands them your account?",
      note: "No refund ever needs your OTP or a screen-sharing app. Hang up and check your order in the official app.", badge: "smartphone"
    })),
    SQ(5, "Fake Calls", {
      prompt: "A video call: “This is the police. Your Aadhaar is linked to a crime. You are under digital arrest. Stay on camera and pay to clear your name.” What do you do?",
      options: ["Pay quickly to avoid going to jail", "Stay on the call and share your details", "Hang up; there’s no digital arrest. Call 1930", "Argue with them on the call"], answer: 2,
      hint: "Would real police arrest someone over a video call and ask for money?",
      note: "Digital arrest doesn’t exist. Scammers use fear and keep you on camera so you can’t ask anyone. Hang up and tell someone.", badge: "shield"
    }),
    SQ(5, "Fake Calls", {
      prompt: "You called the number shown in the official QuickKart app. What is OK to share?",
      options: ["Your OTP", "Your UPI PIN", "Your card’s CVV", "Your order number"], answer: 3,
      hint: "Which one can’t be used to take money?",
      note: "An order number helps them find your order. OTP, PIN and CVV are never needed, even by real support.", badge: "check",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Scam or safe? (double) ----------
    {
      type: "learn", door: 6,
      title: "Not everything is a scam. Smart means checking, not panicking.",
      points: [["Safe messages expect nothing risky", "They don’t ask for an OTP, PIN, fee or click"], ["Context matters", "An OTP you just asked for is normal. One you didn’t ask for is a warning"], ["When unsure", "Check through a channel you trust, like the app or a known number"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game!"], ["search", "Scam or safe?", "Some of these are real"], ["shield", "Then your shield level", "How hard are you to scam?"]] }
    },
    SQ(6, "Scam or Safe?", {
      double: true, time: 40,
      prompt: "You just tried to log in to your bank app. This SMS arrives: “482913 is your OTP to log in to the Kaveri Bank app. Do not share it with anyone.” Scam or safe?",
      options: ["Scam", "Safe"], answer: 1,
      hint: "Did you ask for it? Does it ask you to do anything risky?",
      note: "Safe. You asked for it, and it tells you not to share it. Use it yourself in the app. Never read it out to anyone.", badge: "badge-check"
    }),
    SQ(6, "Scam or Safe?", {
      double: true, time: 40,
      prompt: "Your college placement cell emails from its official college address: “TechNova campus drive on 12 Nov. Register on the college placement portal. No fee.” Scam or safe?",
      options: ["Scam", "Safe"], answer: 1,
      hint: "Who sent it, and what does it ask you to do?",
      note: "Safe. It’s from the official college address, sends you to your own college portal, and asks for no money.", badge: "graduation-cap"
    }),
    SQ(6, "Scam or Safe?", {
      double: true, time: 40,
      prompt: "“Hi, it’s your cousin Rahul. This is my new number. I’m stuck at the airport, please send ₹5,000 on this UPI. I’ll return it tonight.” Scam or safe?",
      options: ["Scam", "Safe"], answer: 0,
      hint: "A new number, an emergency and a request for money.",
      note: "Treat it as a scam until you call Rahul on his OLD number. A new number plus an urgent money request is a classic trick.", badge: "users",
      board: true, boardLabel: "after Round 6"
    }),

    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "Teach your parents: in 30 seconds, explain the one rule that stops most scams.", note: "Pick one rule from today and say it so simply that anyone at home would understand.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "Stay Safe Online: 8 Rules", note: "Screenshot this and send it to your family WhatsApp group tonight.", items: RULES },
    {
      type: "end",
      joinTitle: "Join the EduMoon Skills Club",
      joinText: "Life skills, careers and safety games every week. Get smarter, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
