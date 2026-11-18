// Startup Legal Basics (EduMoon Entrepreneurship). Advanced: for student founders in India.
// The legal basics every founder should know: business structures, co-founder agreements, brand names and trademarks, GST and money basics, contracts and IP, and personal data rules. A learning game, not legal advice.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const LB = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 50, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const LBN = (round, name, extra) => LB(round, name, Object.assign({ kind: "number", time: 60 }, extra));

// The take-home card: the founder's legal checklist.
const LEGAL = [
  ["Pick a structure", "Proprietorship, partnership or LLP, or a private limited company if you plan to raise investment."],
  ["Co-founder agreement", "Roles, equity, vesting, decisions and exits, in writing, early."],
  ["Name and trademark", "Check the name is free; apply for a trademark for your brand."],
  ["Separate bank account", "Business money and personal money never mix."],
  ["GST", "Register when the law requires it for your turnover or type of business. Issue proper invoices."],
  ["Contracts", "Written agreements with clients, freelancers and partners."],
  ["Own your IP", "Make sure code, designs and content made for you belong to the company."],
  ["Personal data", "Collect only what you need, with consent, and protect it. India has a data protection law."]
];

window.GAME = {
  id: "startup-legal-basics",
  title: "Startup Legal Basics",
  club: "Entrepreneurship",
  tagline: "The boring stuff that saves your startup: structures, agreements, GST, IP and data.",
  art: window.STORY_ART,
  guide: {
    years: "All years (student founders especially)", time: "45 minutes", level: "Advanced",
    about: "Three friends launch a made-up design-and-print startup, InkShore, from their hostel. Six months later they fight over who owns what, a freelancer claims their logo, and a big client asks for a GST invoice. In 6 rounds, teams learn the basics that would have prevented it: business structures, co-founder agreements, names and trademarks, GST and money basics, contracts and IP, and personal data rules in India.",
    outcomes: "The main business structures in India, why a co-founder agreement matters, how to protect a brand name, GST and invoice basics, who owns work made by freelancers, and the idea of consent for personal data.",
    tone: "Legal topics feel dry. Use the InkShore story and real-feeling problems to keep it alive. Repeat clearly: this game teaches what to ask about; for real decisions, students should talk to a chartered accountant, a company secretary or a lawyer.",
    extra: [["Not legal advice", "Rules and thresholds change. Students should check official government sites and qualified professionals for their own situation."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Protected",
    rulesEyebrow: "How Startup Legal Basics works", rulesTitle: "Learn the rule. Spot the risk. Protect your startup.",
    learnText: "The host explains one legal basic for founders.", crackTitle: "Decide",
    crackText: "Pick the safest choice for InkShore and lock it in.",
    rulesExtra: "Some questions need a typed number. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Many real startups learn this the hard way!", cracked: "protected it",
    next: "Next round →", finale: "Next →", winner: "are today’s most protected founders!", endLine: "InkShore is safe, legal and growing."
  },
  offerEyebrow: "InkShore · Legal health check",
  offerTitle: "Your legal health check",
  offers: [
    { min: 0.7, icon: "shield", title: "Fully Protected", text: "You know what to set up early. Make your co-founder agreement this month." },
    { min: 0.45, icon: "file-text", title: "Mostly Covered", text: "Strong! Check your brand name before you print anything." },
    { min: 0.2, icon: "search", title: "Some Gaps", text: "Good start. Read the checklist and list your questions for a professional." },
    { min: 0, icon: "book-open", title: "At Risk", text: "Everyone starts here. One conversation with a CA can save months." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Entrepreneurship · Six months later",
      title: "InkShore started as three friends in a hostel. Now they argue over ownership, a freelancer claims their logo, and a client wants a GST invoice. Can your team fix it, starting from day one?",
      cards: [["file-text", "Structures, agreements and trademarks"], ["shield", "GST, contracts, IP and data"], ["trophy", "Your score decides your legal health"]]
    },
    { type: "rules" },

    // ---------- Round 1: Structure ----------
    {
      type: "learn", door: 1,
      title: "Choose a business structure that fits your plans.",
      points: [["Sole proprietorship", "Simplest. You and the business are legally the same"], ["Partnership or LLP", "For partners. An LLP limits each partner’s personal liability"], ["Private limited company", "A separate legal entity. Usually needed to raise investment"]],
      highlightLast: true,
      side: { label: "Rough fit", items: [["user", "Solo freelancer", "Proprietorship"], ["users", "Two or three partners, steady business", "LLP"], ["rocket", "Plans to raise from investors", "Private limited"]] }
    },
    LB(1, "Structure", {
      prompt: "InkShore’s founders plan to raise money from angel investors next year. Which structure usually fits?",
      options: ["Sole proprietorship", "No registration at all", "Private limited company", "A WhatsApp group"], answer: 2,
      hint: "Investors usually buy shares.",
      note: "Investors usually invest by buying shares, which needs a company structure like a private limited.", badge: "landmark"
    }),
    LB(1, "Structure", {
      prompt: "In a sole proprietorship, if the business owes money it cannot pay, who is responsible?",
      options: ["Nobody", "The owner personally", "The bank", "The customers"], answer: 1,
      hint: "Owner and business are the same.",
      note: "The owner is personally liable. LLPs and companies separate business debts from personal ones, in most cases.", badge: "scale"
    }),
    LBN(1, "Structure", {
      prompt: "A private limited company in India needs at least how many directors?",
      answer: 2,
      hint: "More than one.",
      note: "At least 2 directors. A One Person Company is a separate option for a single founder.", badge: "users",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Co-founder agreement ----------
    {
      type: "learn", door: 2,
      title: "Write the co-founder agreement while you are still friends.",
      points: [["Equity and vesting", "Who owns what, earned over time"], ["Roles and decisions", "Who decides what, and how ties are broken"], ["Exits", "What happens to shares if someone leaves"]],
      highlightLast: true,
      side: { label: "InkShore’s fight", items: [["x", "No written split", "“I thought we were equal”"], ["x", "One founder left", "Kept a third of the company"], ["check", "With vesting", "They’d keep only what they earned"]] }
    },
    LB(2, "Co-founder Agreement", {
      prompt: "When should InkShore’s founders sign a co-founder agreement?",
      options: ["Only after a big fight", "Early, before problems start", "After the first investor arrives", "Never, friends don’t need it"], answer: 1,
      hint: "Easy conversations happen early.",
      note: "Agreeing while things are calm is much easier than during a dispute.", badge: "handshake"
    }),
    LB(2, "Co-founder Agreement", {
      prompt: "A co-founder with a third of the shares leaves after 3 months. What would have protected the others?",
      options: ["A bigger office", "A new logo", "A louder argument", "Vesting in an agreement"], answer: 3,
      hint: "Earning shares over time.",
      note: "With vesting, someone who leaves early keeps only the part they earned. Play Fundraising Ladder for the maths.", badge: "clock"
    }),
    LB(2, "Co-founder Agreement", {
      prompt: "Which item does NOT usually belong in a co-founder agreement?",
      options: ["Equity split and vesting", "Roles and decision-making", "Each founder’s favourite food", "What happens when someone exits"], answer: 2,
      hint: "Business, not personal.",
      note: "Equity, roles, decisions and exits are the core. Keep the agreement about the business.", badge: "list-checks",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Name and trademark ----------
    {
      type: "learn", door: 3,
      title: "Protect your brand name before you build on it.",
      points: [["Check first", "Search the trademark registry, company names and domains"], ["Trademark", "Protects a brand name or logo for your type of business"], ["Apply early", "Before printing, advertising or building a following"]],
      highlightLast: true,
      side: { label: "Quick checks", items: [["search", "Trademark search", "Official registry website"], ["globe", "Domain and social handles", "Free and similar?"], ["x", "Too close to a famous brand", "Risky"]] }
    },
    LB(3, "Name and Trademark", {
      prompt: "Before printing 5,000 InkShore bags, what should the founders check?",
      options: ["That nobody owns the name", "That the bags are blue", "That friends like the name", "Nothing, names are free"], answer: 0,
      hint: "Could someone else own the name?",
      note: "If another business already owns the trademark, they could stop you using it, after you have spent money.", badge: "search"
    }),
    LB(3, "Name and Trademark", {
      prompt: "What does a registered trademark mainly protect?",
      options: ["The company’s bank balance", "A brand name or logo", "Every idea the founders have", "The office building"], answer: 1,
      hint: "Brand identity.",
      note: "Trademarks protect brand names, logos and slogans used in trade. Ideas themselves are not protected this way.", badge: "badge-check"
    }),
    LB(3, "Name and Trademark", {
      prompt: "A founder suggests naming the startup “Gooogle Prints”. What is the problem?",
      options: ["It has too many letters", "Prints is a bad word", "There is no problem", "Too close to a famous brand"], answer: 3,
      hint: "Confusingly similar.",
      note: "Names that copy famous brands invite legal trouble. Original names are safer and easier to protect.", badge: "x",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Name three things InkShore should have written down on day one, and why.", note: "Structure, agreement, name… 20 seconds.", points: 100 },

    // ---------- Round 4: Money and GST ----------
    {
      type: "learn", door: 4,
      title: "Money basics: separate accounts, proper invoices, GST when required.",
      points: [["Separate bank account", "Never mix business and personal money"], ["Invoices", "Every sale gets a proper bill with details"], ["GST", "Needed once turnover crosses the legal limit, or for some business types. For most services, the limit is ₹20 lakh a year (lower in some states)"]],
      highlightLast: true,
      side: { label: "Ask a professional", items: [["users", "Chartered accountant (CA)", "Tax, GST and accounts"], ["file-text", "Company secretary (CS)", "Company filings"], ["scale", "Lawyer", "Contracts and disputes"]] }
    },
    LB(4, "Money and GST", {
      prompt: "A big corporate client asks InkShore for a GST invoice. What does that tell them?",
      options: ["They should ignore the client", "GST is only for factories", "They may need GST registration", "They can make up a GST number"], answer: 2,
      hint: "Corporate clients often need it for their own taxes.",
      note: "Many business clients need GST invoices. Check with a CA whether and when you must register. Never invent a GST number.", badge: "file-text"
    }),
    LBN(4, "Money and GST", {
      prompt: "A services startup earns ₹1.5 lakh a month. Over 12 months, how many lakh rupees is that?",
      answer: 18,
      hint: "1.5 × 12.",
      note: "₹18 lakh a year, close to the ₹20 lakh limit for most services. Time to talk to a CA about registering.", badge: "chart-column"
    }),
    LB(4, "Money and GST", {
      prompt: "Why should InkShore use a separate business bank account?",
      options: ["Clean records for tax and investors", "Banks pay more interest to startups", "It makes cards look nicer", "It is only for big companies"], answer: 0,
      hint: "Clear money trail.",
      note: "Separate accounts make taxes, audits and investor checks much easier, and avoid arguments between founders.", badge: "landmark",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Contracts and IP ----------
    {
      type: "learn", door: 5,
      title: "Put agreements in writing, and make sure the company owns its work.",
      points: [["Client contracts", "Scope, price, timeline, payment terms"], ["Freelancers and interns", "A written agreement that transfers ownership of their work to the company"], ["NDAs", "For sharing confidential plans with partners"]],
      highlightLast: true,
      side: { label: "InkShore’s logo problem", items: [["x", "Freelancer made the logo", "No written agreement"], ["x", "Now claims it is theirs", "Messy"], ["check", "Fix", "An agreement transferring rights, from the start"]] }
    },
    LB(5, "Contracts and IP", {
      prompt: "A freelancer designed InkShore’s logo with no written agreement. Now they say they own it. What would have prevented this?",
      options: ["A written rights agreement", "Paying in cash only", "Choosing a cheaper freelancer", "Changing the colours later"], answer: 0,
      hint: "Ownership of work, in writing.",
      note: "A short agreement saying the company owns the work after payment avoids this problem.", badge: "pen-tool"
    }),
    LB(5, "Contracts and IP", {
      prompt: "A client keeps asking for “one more small change” for free. What would help most?",
      options: ["Doing every change for free forever", "Blocking the client", "A contract with a clear scope", "Posting about them online"], answer: 2,
      hint: "Define what is included.",
      note: "Clear scope and a rate for extra work protect your time and keep the relationship professional.", badge: "file-text"
    }),
    LB(5, "Contracts and IP", {
      prompt: "InkShore wants to share its plans with a potential partner who could copy them. What is commonly used?",
      options: ["An NDA", "A birthday card", "A trademark", "A GST invoice"], answer: 0,
      hint: "Keeping secrets, in writing.",
      note: "An NDA sets rules for confidential information. It helps, but share only what is needed.", badge: "lock",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Data and recognition (double) ----------
    {
      type: "learn", door: 6,
      title: "Handle personal data carefully, and know the startup support available.",
      points: [["Personal data", "India’s Digital Personal Data Protection Act, 2023 sets rules on consent and use"], ["Collect less", "Only what you need, with clear consent, stored safely"], ["Startup India", "Eligible startups can apply for recognition and related benefits; check the official portal"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["shield", "Data and support", "Real choices"], ["mic", "Then the final challenge", "Your day-one checklist"]] }
    },
    LB(6, "Data and Recognition", {
      double: true,
      prompt: "InkShore’s order form asks for name, phone, address, Aadhaar number and date of birth to print a T-shirt. What is wrong?",
      options: ["It asks for too little data", "It collects too much data", "Forms should never ask for names", "Nothing, more data is always better"], answer: 1,
      hint: "Does printing a T-shirt need Aadhaar?",
      note: "Collect only what you need. Extra personal data adds risk and legal responsibility.", badge: "shield"
    }),
    LB(6, "Data and Recognition", {
      double: true,
      prompt: "InkShore wants to send customers marketing messages. What should come first?",
      options: ["Buying a list of phone numbers", "Messaging everyone daily", "Hiding an opt-out link", "Clear consent from customers"], answer: 3,
      hint: "People should agree first.",
      note: "Ask for clear consent and make it easy to opt out. It builds trust and respects the law.", badge: "message-circle"
    }),
    LB(6, "Data and Recognition", {
      double: true,
      prompt: "Where should InkShore check eligibility for Startup India recognition?",
      options: ["A random reel", "A friend’s guess", "An old newspaper", "The official portal"], answer: 3,
      hint: "Official sources.",
      note: "Eligibility and benefits can change. The official portal has the current rules.", badge: "landmark",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, health check, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best checklist wins +200", prompt: "In 30 seconds: your startup’s day-one legal checklist, in order of priority.", note: "Structure, agreement, name, bank account, contracts, data. The host picks the clearest.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "Founder’s Legal Checklist", note: "Screenshot this. Take it to your first CA or lawyer meeting. Not legal advice.", items: LEGAL },
    {
      type: "end",
      joinTitle: "Join EduMoon Entrepreneurship",
      joinText: "Startup games, founder talks and real student businesses. Build something, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
