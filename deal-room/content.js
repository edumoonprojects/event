// Deal Room (EduMoon Entrepreneurship). For all years.
// Negotiation for founders and students: preparing a walk-away point, first offers and anchoring, interests vs positions, trading instead of giving, deal maths, and closing fairly. All businesses and numbers are made up.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const DR = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 45, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const DRN = (round, name, extra) => DR(round, name, Object.assign({ kind: "number", time: 60 }, extra));

// The take-home card: the negotiation playbook.
const PLAYBOOK = [
  ["Prepare", "Know your target, your walk-away point and your best option if there is no deal."],
  ["Walk-away point", "The worst deal you will accept. Decide it before the talk, not during."],
  ["Anchor", "The first number sets the range. Make a bold but fair first offer with a reason."],
  ["Ask why", "Find their interest behind their position. Cash early? Long-term order? Credit?"],
  ["Trade, don’t give", "“If you…, then I…”. Every discount gets something back."],
  ["Silence works", "After an offer, stop talking and let them answer."],
  ["Write it down", "Price, quantity, dates and payment terms in one message or document."],
  ["Win-win lasts", "A deal that hurts the other side will not last. You will meet again."]
];

window.GAME = {
  id: "deal-room",
  title: "Deal Room",
  club: "Entrepreneurship",
  tagline: "Every founder negotiates every day. Learn to get a better deal, and keep the relationship.",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "40 minutes", level: "Medium",
    about: "Rohan runs a made-up campus T-shirt brand, Kadali Tees, and has three tough talks this week: a fabric supplier, a fest committee that wants a big order, and a co-founder who wants a bigger share. In 6 rounds, teams learn to prepare a walk-away point, use first offers, find the interest behind a demand, trade instead of giving, do quick deal maths and close fairly in writing.",
    outcomes: "A simple negotiation process, the idea of a walk-away point and anchoring, “if you…, then I…” trading, quick discount and bulk-order maths, and how to close without hurting the relationship.",
    tone: "Students often think negotiating is rude or pushy. Show it is normal and can be very polite. Run one quick live role-play: you are the supplier, a team tries to get a better price.",
    extra: [["Role-play", "During the speaking turn, play a stubborn supplier. Reward the team that uses “If you…, then I…”."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Closed",
    rulesEyebrow: "How Deal Room works", rulesTitle: "Learn the move. Make the smart offer. Close the deal.",
    learnText: "The host explains one negotiation move.", crackTitle: "Negotiate",
    crackText: "Pick Rohan’s best move on your phone and lock it in.",
    rulesExtra: "Some questions need a typed number. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Real founders lose money on this!", cracked: "closed it",
    next: "Next round →", finale: "Next →", winner: "are today’s best deal makers!", endLine: "Rohan closed three good deals this week."
  },
  offerEyebrow: "EduMoon Entrepreneurship · Negotiator level",
  offerTitle: "Your negotiator level",
  offers: [
    { min: 0.7, icon: "handshake", title: "Deal Maker", text: "You negotiate like a founder. Use it in your next real purchase." },
    { min: 0.45, icon: "scale", title: "Smart Negotiator", text: "Strong! Practise “If you…, then I…” this week." },
    { min: 0.2, icon: "lightbulb", title: "Learning to Bargain", text: "Good start. Write your walk-away point before every deal." },
    { min: 0, icon: "book-open", title: "First Deal", text: "Everyone starts here. Watch how shopkeepers negotiate and learn." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Entrepreneurship · Three deals",
      title: "Rohan’s T-shirt brand has three tough talks this week: a fabric supplier, a fest committee and his own co-founder. Can your team help him get fair deals?",
      cards: [["handshake", "Prepare, anchor, trade and close"], ["indian-rupee", "Quick deal maths"], ["trophy", "Your score decides your negotiator level"]]
    },
    { type: "rules" },

    // ---------- Round 1: Prepare ----------
    {
      type: "learn", door: 1,
      title: "Most negotiations are won before they start.",
      points: [["Target", "What you hope to get"], ["Walk-away point", "The worst deal you will accept. Decide it in advance"], ["Your best other option", "What you will do if there is no deal. A good option gives you courage"]],
      highlightLast: true,
      side: { label: "Rohan’s fabric deal", items: [["target", "Target", "₹110 per metre"], ["x", "Walk-away", "Above ₹130, no deal"], ["route", "Other option", "A supplier in Gajuwaka at ₹128"]] }
    },
    DR(1, "Prepare", {
      prompt: "When should Rohan decide his walk-away price?",
      options: ["During the talk, when he feels it", "After he has agreed", "Before the talk starts", "Never, any price is fine"], answer: 2,
      hint: "Decisions made under pressure are worse.",
      note: "Before. In the moment, it is easy to agree to a bad deal just to finish the talk.", badge: "target"
    }),
    DR(1, "Prepare", {
      prompt: "Why does having another supplier at ₹128 help Rohan?",
      options: ["He must buy from both suppliers", "He can walk away calmly", "It makes the first supplier angry", "It does not help at all"], answer: 1,
      hint: "Options give confidence.",
      note: "A good alternative means he does not need this deal at any price. That makes him calmer and stronger.", badge: "route"
    }),
    DR(1, "Prepare", {
      prompt: "What should Rohan research before meeting the supplier?",
      options: ["The supplier’s family history", "Market prices for fabric", "Cricket scores", "Nothing, just go"], answer: 1,
      hint: "Facts make offers believable.",
      note: "Knowing the market price lets him make fair, confident offers and spot a bad one.", badge: "search",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: First offer ----------
    {
      type: "learn", door: 2,
      title: "The first number sets the range. That is called anchoring.",
      points: [["Anchor", "The first offer pulls the deal towards it"], ["Bold but fair", "With a reason: “Market rate is ₹105 to ₹115”"], ["Too extreme hurts", "A silly offer can end the talk"]],
      highlightLast: true,
      side: { label: "Example", items: [["indian-rupee", "Supplier asks", "₹140 a metre"], ["indian-rupee", "Rohan offers", "₹105, with a reason"], ["handshake", "They meet at", "Around ₹118"]] }
    },
    DR(2, "First Offer", {
      prompt: "The supplier asks ₹140 a metre. Rohan’s target is ₹110. What is a smart first offer?",
      options: ["₹105, with a reason", "₹140, to be polite", "₹20, to shock him", "₹135, to keep him happy"], answer: 0,
      hint: "Bold but fair, with a reason.",
      note: "A little below his target, backed by a reason. It leaves room to meet around his target.", badge: "indian-rupee"
    }),
    DR(2, "First Offer", {
      prompt: "Why is offering ₹20 a metre a bad idea?",
      options: ["It is too close to ₹140", "Suppliers like low offers", "It is illegal to offer low", "The supplier may walk away"], answer: 3,
      hint: "Fair matters.",
      note: "An offer with no reason and no respect can end the talk or damage trust.", badge: "x"
    }),
    DRN(2, "First Offer", {
      prompt: "For thread, Rohan offers ₹110 a kilo and the seller asks ₹150. If they meet exactly in the middle, what is the price per kilo?",
      answer: 130,
      hint: "(110 + 150) ÷ 2.",
      note: "₹130. A bold first offer pulls the middle point down. If he had opened at ₹140, the middle would be ₹145.", badge: "scale",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Interests behind positions ----------
    {
      type: "learn", door: 3,
      title: "Ask why. The reason behind a demand opens new deals.",
      points: [["Position", "What they say: “I need ₹140”"], ["Interest", "Why they say it: they need cash quickly to pay workers"], ["New options", "Pay faster for a lower price"]],
      highlightLast: true,
      side: { label: "Questions that unlock deals", items: [["message-circle", "“What matters most to you?”", ""], ["message-circle", "“What makes this hard for you?”", ""], ["message-circle", "“If we did X, would that help?”", ""]] }
    },
    DR(3, "Interests", {
      prompt: "The supplier will not drop below ₹130. Rohan asks why. He says, “I need cash this week for wages.” What could Rohan offer?",
      options: ["Insist on ₹105 and refuse to talk", "Pay in 90 days for ₹110", "Pay upfront for ₹118 a metre", "Walk out immediately"], answer: 2,
      hint: "Solve his real problem.",
      note: "Fast payment solves the supplier’s real problem, so a lower price works for both.", badge: "indian-rupee"
    }),
    DR(3, "Interests", {
      prompt: "The fest committee wants 300 T-shirts at ₹180 each. Rohan asks why that price. Their budget from the college is fixed. What could help both sides?",
      options: ["Fewer colours or a sponsor logo", "Refuse because ₹180 is too low", "Agree and lose money on each shirt", "Double the price"], answer: 0,
      hint: "Change the deal, not just the price.",
      note: "Changing the design or adding a sponsor can make ₹180 work for Rohan too.", badge: "lightbulb"
    }),
    DR(3, "Interests", {
      prompt: "What is the best question to find someone’s interest?",
      options: ["“Why are you so greedy?”", "“Can’t you just agree?”", "“Is this your final price?”", "“What matters most to you?”"], answer: 3,
      hint: "Open and respectful.",
      note: "Open questions get real reasons. Accusations shut people down.", badge: "message-circle",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Role-play: the host is a stubborn supplier. Ask one question to find their real interest.", note: "Open, respectful, curious. 20 seconds.", points: 100 },

    // ---------- Round 4: Trade, don't give ----------
    {
      type: "learn", door: 4,
      title: "Never give something for nothing. Trade it.",
      points: [["“If you…, then I…”", "“If you order 300, then I can do ₹190.”"], ["Trade cheap for valuable", "Give what costs you little but matters to them"], ["Silence", "After you make an offer, stop talking"]],
      highlightLast: true,
      side: { label: "Things to trade", items: [["indian-rupee", "Price", "Lower for more volume"], ["clock", "Time", "Faster delivery for faster payment"], ["star", "Extras", "Free logo printing for a bigger order"]] }
    },
    DR(4, "Trade, Don’t Give", {
      prompt: "The committee asks for ₹20 off per shirt. Best reply?",
      options: ["“Okay, ₹20 off, no problem.”", "“If you pay half upfront, ₹10 off.”", "“No discounts, ever.”", "“I’ll think about it forever.”"], answer: 1,
      hint: "Trade it.",
      note: "A discount in exchange for something valuable. Rohan protects his margin and his cash flow.", badge: "handshake"
    }),
    DR(4, "Trade, Don’t Give", {
      prompt: "What should Rohan do right after making his offer?",
      options: ["Keep talking and lower it himself", "Stay quiet and let them respond", "Apologise for the price", "Leave the room"], answer: 1,
      hint: "Silence is a tool.",
      note: "Nervous people lower their own offer by talking. Stay quiet and let the other side respond.", badge: "timer"
    }),
    DR(4, "Trade, Don’t Give", {
      prompt: "Which trade costs Rohan little but is valuable to the committee?",
      options: ["Giving shirts at half price", "Paying their event costs", "Free delivery to the college", "Giving away his brand"], answer: 2,
      hint: "Cheap for him, valuable for them.",
      note: "He passes the college every day, so delivery costs him almost nothing but saves them effort.", badge: "store",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Deal maths ----------
    {
      type: "learn", door: 5,
      title: "Quick maths stops you from agreeing to a bad deal.",
      points: [["Cost per item", "Fabric + printing + stitching + packing"], ["Profit per item", "Price minus cost"], ["Discount impact", "₹20 off sounds small, but on 300 shirts it is ₹6,000"]],
      highlightLast: true,
      side: { label: "Kadali Tees", items: [["indian-rupee", "Cost per shirt", "₹150"], ["tag", "Normal price", "₹220"], ["chart-column", "Profit per shirt", "₹70"]] }
    },
    DRN(5, "Deal Maths", {
      prompt: "Cost per shirt is ₹150. The committee wants 300 shirts at ₹180. What is Rohan’s total profit in rupees?",
      answer: 9000,
      hint: "(180 − 150) × 300.",
      note: "₹30 × 300 = ₹9,000. Lower margin, but a big order. Is it worth it? That is the real question.", badge: "chart-column"
    }),
    DRN(5, "Deal Maths", {
      prompt: "They ask for ₹20 more off (₹160 per shirt) on 300 shirts. How much LESS profit does Rohan make, in rupees?",
      answer: 6000,
      hint: "₹20 × 300.",
      note: "₹6,000 less. Small per-item discounts become big on large orders. Always multiply before you agree.", badge: "indian-rupee"
    }),
    DR(5, "Deal Maths", {
      prompt: "At ₹150 cost, what is the LOWEST price where Rohan does not lose money on each shirt?",
      options: ["₹150", "₹120", "₹100", "₹140"], answer: 0,
      hint: "Price must at least cover cost.",
      note: "₹150 is break-even per shirt. Below that, every shirt loses money, so that is close to his walk-away point.", badge: "scale",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Close fairly (double) ----------
    {
      type: "learn", door: 6,
      title: "Close in writing, keep it fair, and keep the relationship.",
      points: [["Write it down", "Price, quantity, dates, payment terms"], ["Fair beats clever", "You will meet the same people again"], ["Walking away is allowed", "Politely, when the deal is below your walk-away point"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["handshake", "Closing", "Including the co-founder talk"], ["mic", "Then the final challenge", "A live negotiation"]] }
    },
    DR(6, "Close Fairly", {
      double: true,
      prompt: "The deal is agreed on a call. What should Rohan do next?",
      options: ["Trust everyone remembers", "Change the terms later quietly", "Send a written summary of terms", "Tell nobody"], answer: 2,
      hint: "Memory is not a contract.",
      note: "A short written summary avoids fights later about what was agreed.", badge: "file-text"
    }),
    DR(6, "Close Fairly", {
      double: true,
      prompt: "His co-founder wants 70% of the company because “the idea was mine”. Rohan does most of the work. Best approach?",
      options: ["Agree to avoid a fight", "Leave the company tonight", "Secretly start another brand", "Discuss who contributes what"], answer: 3,
      hint: "Interests, contributions, fairness.",
      note: "Discuss roles, time and money each person brings. Splits based on future contribution last longer than splits based on who had the idea.", badge: "users"
    }),
    DR(6, "Close Fairly", {
      double: true,
      prompt: "A buyer insists on ₹140 a shirt; Rohan’s cost is ₹150. What should he do?",
      options: ["Politely walk away", "Accept to keep the buyer happy", "Use cheaper, poor fabric secretly", "Shout at the buyer"], answer: 0,
      hint: "Below the walk-away point.",
      note: "A deal below cost is not a deal. Walk away politely; the door stays open for later.", badge: "handshake",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best deal wins +200", prompt: "Live negotiation: the host sells 100 notebooks at ₹60 each. Each team gets 30 seconds to get a better deal, fairly.", note: "Use a reason, a trade (“If you…, then I…”) and a clear close. The host picks the best negotiator.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "Negotiation Playbook", note: "Screenshot this. Read it before your next deal, big or small.", items: PLAYBOOK },
    {
      type: "end",
      joinTitle: "Join EduMoon Entrepreneurship",
      joinText: "Startup games, founder talks and real student businesses. Build something, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
