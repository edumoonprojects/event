// Customer Hunt (EduMoon Entrepreneurship). For all years.
// Teams find the right customer, the right channel and the right first message for made-up campus products.
// All brands and numbers are made up.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const CH = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 45, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
// "Find the weak line in the marketing" questions use the bug door with friendlier labels.
const MISS = { kind: "bug", time: 60, step1: "What’s the problem?", step2: "Tap the weak line", say1: "First pick the problem.", say2: "Now tap the weak line.", partO: "the problem", partL: "the line", lineLabel: "line", bugLabel: "The weak line is" };

const HUNT = [
  ["Pick one customer", "Age, place, problem, budget. Not “everyone”."],
  ["Find where they are", "Which groups, apps, places and times?"],
  ["Speak their language", "Their words, their problem, their benefit."],
  ["One clear offer", "What they get, the price, and why now."],
  ["One clear action", "DM, register, order, scan. Only one."],
  ["First 10 customers by hand", "Talk, message, demo. Ads come later."],
  ["Ask why they bought", "And why others didn’t. Then improve."],
  ["Turn happy customers into promoters", "Reviews, referrals, photos with permission."]
];

window.GAME = {
  id: "customer-hunt",
  title: "Customer Hunt",
  club: "Entrepreneurship",
  tagline: "Great product, no customers? Find the right people, the right place, the right words.",
  art: window.STORY_ART,
  guide: {
    years: "All years · no business background needed", time: "35 minutes", level: "Beginner",
    about: "Teams help made-up campus products find their first customers. In 6 rounds they choose the right customer, the right channel, the right message and the right offer, catch weak lines in marketing posts, and plan how to get the first 10 customers without spending money on ads.",
    outcomes: "How to pick a specific target customer, where to reach students (and other customers) for free, how to write a message people respond to, and an 8-step plan to get the first customers.",
    tone: "Most students think marketing means ads. Show them that the first customers usually come from talking to people. Ask teams for real examples from their own campus as you go.",
    extra: [["Connect it", "Pairs well with Idea or Not (find the idea), Price It Right (set the price) and Investor Room (pitch it)."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Found",
    rulesEyebrow: "How Customer Hunt works", rulesTitle: "Find them. Reach them. Win them.",
    learnText: "The host shares one way founders find customers.", crackTitle: "Hunt",
    crackText: "Pick your answer on your phone and lock it in.",
    rulesExtra: "Weak-line questions: <b>100</b> for the problem + <b>100</b> for the line. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Most new founders miss it too!", cracked: "found the customer",
    next: "Next round →", finale: "Next →", winner: "are today’s top customer hunters!", endLine: "Go find your first 10 customers!"
  },
  offerEyebrow: "EduMoon Entrepreneurship · Customer results",
  offerTitle: "Your hunter level",
  offers: [
    { min: 0.7, icon: "target", title: "Growth Hacker", text: "Right customer, right place, right words. You’d get the first 10 in a week." },
    { min: 0.45, icon: "users", title: "Customer Finder", text: "Strong! Write one clear offer with one clear action next time." },
    { min: 0.2, icon: "message-circle", title: "Market Explorer", text: "Good start. Talk to 5 possible customers before you post anything." },
    { min: 0, icon: "book-open", title: "Trainee Marketer", text: "Everyone starts here. Save the 8 steps and try step 1 today." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Entrepreneurship · Customer Hunt",
      title: "Four campus founders built good products. Nobody is buying. Can your team find them their first customers?",
      cards: [["target", "Find the right customer"], ["map", "Reach them where they already are"], ["message-circle", "Write words that make them act"]]
    },
    { type: "rules" },

    // ---------- Round 1: The right customer ----------
    {
      type: "learn", door: 1,
      title: "Your first customer is one specific person, not everyone.",
      points: [["Who", "“1st-year hostel students who miss home food”"], ["Their problem", "What bothers them, how often"], ["Their budget", "What they can and will spend"]],
      highlightLast: true,
      side: { label: "Customer card", items: [["user", "Who", "Year, place, situation"], ["target", "Problem", "In their words"], ["indian-rupee", "Budget", "Realistic"]] }
    },
    CH(1, "Right Customer", {
      prompt: "“HomeBox” sells home-style lunch boxes near a college. Who’s the BEST first customer?",
      options: ["Everyone in the city who eats lunch", "Hostel students who miss home food", "Families who already cook at home", "Restaurant owners near the college"], answer: 1,
      hint: "Who has the problem most, and most often?",
      note: "They have the pain every day and already spend on food. Perfect first customers.", badge: "users"
    }),
    CH(1, "Right Customer", {
      prompt: "“ResumeFix” offers ₹199 resume reviews. Who’s most likely to pay right now?",
      options: ["1st-year students in their very first week", "Professors who already have jobs", "Final-years with placements next month", "School students preparing for exams"], answer: 2,
      hint: "Who needs a resume urgently?",
      note: "Urgency matters. Final years facing placements need it now.", badge: "file-user"
    }),
    CH(1, "Right Customer", {
      prompt: "Why is “our customer is everyone” a problem?",
      options: ["A message for everyone speaks to no one", "Everyone is too few people to sell to", "It’s against the law to target everyone", "It’s too specific for a new startup"], answer: 0,
      hint: "Try writing one post for a 1st-year AND a grandmother.",
      note: "Specific customers get specific messages, and specific messages get replies.", badge: "target",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Where they are ----------
    {
      type: "learn", door: 2,
      title: "Go where your customers already are.",
      points: [["Students", "Class and hostel WhatsApp groups, Instagram, clubs, canteens"], ["Local shops", "Walk in and talk, Google Business Profile, local groups"], ["Timing", "Before exams, after results, first week of college"]],
      highlightLast: true,
      side: { label: "Free channels", items: [["message-circle", "WhatsApp groups", "Ask the admin first"], ["users", "Clubs and events", "Show it live"], ["store", "Notice boards and canteens", "Posters with a QR"]] }
    },
    CH(2, "Right Place", {
      prompt: "HomeBox wants hostel students. Best FIRST channel?",
      options: ["A TV ad on a regional channel", "A newspaper ad in another city", "LinkedIn posts about home-style food", "Hostel WhatsApp groups and a lunch stall"], answer: 3,
      hint: "Where do hostel students spend time?",
      note: "Free, direct, and exactly where they are. Always ask group admins before posting.", badge: "message-circle"
    }),
    CH(2, "Right Place", {
      prompt: "ResumeFix wants final-year students. Best time to promote?",
      options: ["The month before placement drives", "During summer holidays when students relax", "Right after placements end for the year", "Diwali night, when everyone is online"], answer: 0,
      hint: "When do they feel the need?",
      note: "Same message, better timing, many more customers.", badge: "clock"
    }),
    CH(2, "Right Place", Object.assign({}, MISS, {
      prompt: "A marketing plan for “StudyNest”, a quiet study room near campus. Which line is a weak channel choice?",
      code: ["Put posters with a QR code in the college library.", "Share in class WhatsApp groups before mid exams.", "Offer a free first hour to toppers who’ll tell friends.", "Run expensive ads to people across all of India."],
      outputOptions: ["It’s the wrong audience: most of India can’t walk to this room", "It’s too cheap", "Nothing, every line is good"], outputAnswer: 0, bugLine: 3,
      bugText: "a local study room needs local students. National ads waste money on people who can’t come",
      hint: "Who can actually use a room near this campus?",
      note: "Match the channel to the customer’s location. Local business, local channels.", badge: "map",
      board: true, boardLabel: "after Round 2"
    })),

    // ---------- Round 3: The message ----------
    {
      type: "learn", door: 3,
      title: "Talk about their problem, not your product.",
      points: [["Start with the pain", "“Tired of canteen food every day?”"], ["Then the benefit", "“Home-style lunch at your hostel by 1 PM”"], ["Then one action", "“Order on WhatsApp: tap here”"]],
      highlightLast: true,
      side: { label: "Message formula", items: [["target", "Problem", "In their words"], ["sparkles", "Benefit", "What changes for them"], ["zap", "Action", "One clear next step"]] }
    },
    CH(3, "Right Words", {
      prompt: "Which message would make a hostel student order HomeBox?",
      options: ["“HomeBox: a premium culinary experience for discerning students.”", "“We are a startup founded in 2026.”", "“Missing amma’s food? Lunch at your gate by 1 PM, ₹80.”", "“Food available.”"], answer: 2,
      hint: "Problem, benefit, price, action.",
      note: "It speaks their feeling, gives the benefit and makes ordering easy.", badge: "heart"
    }),
    CH(3, "Right Words", Object.assign({}, MISS, {
      prompt: "ResumeFix’s Instagram post. Which line is weak?",
      code: ["Placements next month? Is your resume ready?", "We fix your resume in 24 hours, ₹199.", "Our company has a strong vision and core values.", "DM “RESUME” to book your slot."],
      outputOptions: ["It’s too short", "Nothing, every line is good", "It talks about the company, not the customer’s problem"], outputAnswer: 2, bugLine: 2,
      bugText: "students don’t care about your vision yet. Swap it for proof, like “120 resumes fixed”",
      hint: "Which line doesn’t help the student decide?",
      note: "Every line should help the customer decide. Proof beats vision statements.", badge: "file-text"
    })),
    CH(3, "Right Words", {
      prompt: "A post ends with: “Call us, DM us, email us, visit our site, or fill the form.” What’s wrong?",
      options: ["Too few options to choose from", "Too many options; one clear action works", "It needs more emojis to stand out", "Nothing, more options is always better"], answer: 1,
      hint: "What happens when people have to choose?",
      note: "One clear action. Confused people do nothing.", badge: "list-checks",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Write a 1-line message for HomeBox out loud: problem, benefit, action.", note: "20 seconds. Make the room hungry.", points: 100 },

    // ---------- Round 4: First 10 customers ----------
    {
      type: "learn", door: 4,
      title: "Your first 10 customers come from talking, not ads.",
      points: [["Do it by hand", "Message, meet, demo, follow up"], ["Friends of friends", "Ask each customer for one introduction"], ["Learn from each one", "Why did they buy? What almost stopped them?"]],
      highlightLast: true,
      side: { label: "This week", items: [["message-circle", "Message 20 people", "Personally, not spam"], ["users", "Demo to 5", "In person"], ["badge-check", "Close 10", "Then ask for feedback"]] }
    },
    CH(4, "First 10", {
      prompt: "StudyNest has ₹0 for marketing. Best way to get the first 10 customers?",
      options: ["Wait for people to find it on Google", "Spam every group 10 times a day", "Invite 30 classmates for a free first hour", "Buy 1,000 followers to look popular"], answer: 2,
      hint: "Free, personal, and you learn something.",
      note: "Personal invites + a reason to try + feedback. That’s how most first customers come.", badge: "handshake"
    }),
    CH(4, "First 10", {
      prompt: "A customer tried HomeBox once and didn’t order again. What should the founder do?",
      options: ["Block them so they don’t leave bad reviews", "Ignore it, one customer doesn’t matter", "Send them 20 ads until they order again", "Ask what could be better"], answer: 3,
      hint: "What can you learn?",
      note: "Lost customers are free advice. Patterns in their answers show what to fix.", badge: "message-circle"
    }),
    CH(4, "First 10", {
      prompt: "Which is spam, and will hurt the brand?",
      options: ["Posting once in a group with the admin’s permission", "Messaging 500 strangers the same text every day", "Replying to people who asked", "A poster on the notice board"], answer: 1,
      hint: "Which one would annoy you?",
      note: "Spam gets you blocked and hurts trust. Fewer, personal messages work better.", badge: "x",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Offers and trust ----------
    {
      type: "learn", door: 5,
      title: "Give people a reason to try now, and a reason to trust you.",
      points: [["Reason to try now", "Launch offer, first 50 only, this week only"], ["Reason to trust", "Real reviews, photos, numbers, a friend’s word"], ["Keep it honest", "No fake reviews, no fake numbers"]],
      highlightLast: true,
      side: { label: "Trust builders", items: [["star", "Real reviews", "With permission"], ["users", "Referrals", "Friends trust friends"], ["shield", "Easy refund", "Lowers the risk"]] }
    },
    CH(5, "Offers and Trust", {
      prompt: "Which launch offer for ResumeFix is smartest?",
      options: ["“First 30 students: ₹149, this week only.”", "“Everything free forever, for every student.”", "“90% off, always, no conditions at all.”", "No offer, ever, the price is fixed"], answer: 0,
      hint: "A reason to act now, without destroying the price.",
      note: "Limited and time-bound creates urgency while protecting the real price.", badge: "tag"
    }),
    CH(5, "Offers and Trust", {
      prompt: "HomeBox is new and has no reviews. What’s the honest way to build trust?",
      options: ["Write a few fake 5-star reviews to get started", "Buy followers so the page looks popular", "Say “10,000 happy customers” anyway", "Share real feedback from 10 students"], answer: 3,
      hint: "Real, honest, with permission.",
      note: "Fake reviews are dishonest and can break platform rules and consumer laws. Real ones work better anyway.", badge: "badge-check"
    }),
    CH(5, "Offers and Trust", {
      prompt: "Best way to turn happy customers into new customers?",
      options: ["Ask them to refer one friend, reward both", "Ask them to spam all their groups for you", "Hope they talk about you on their own", "Force them to post a story before ordering"], answer: 0,
      hint: "Make sharing easy and rewarding.",
      note: "Referral rewards turn happy customers into your best marketers.", badge: "users",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Full plan (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: the full customer plan.",
      points: [["Who and where", "Specific customer, the places they already are"], ["What to say", "Problem, benefit, one action"], ["How to grow", "First 10 by hand, then referrals and reviews"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game!"], ["target", "Full plans", "Pick the best one"], ["award", "Then your hunter level", "How good is your team?"]] }
    },
    CH(6, "Full Plan", {
      double: true,
      prompt: "A senior starts “CodeBuddy”, ₹299 a month C-programming help for 1st-years. Best launch plan?",
      options: ["A billboard on the highway near the college", "Wait for final years to sign up first", "A free doubt session, then a ₹299 offer", "A national TV ad during a cricket match"], answer: 2,
      hint: "Right people, right place, try before you buy.",
      note: "Free value first builds trust, and it reaches exactly the right people.", badge: "code"
    }),
    CH(6, "Full Plan", Object.assign({}, MISS, {
      double: true,
      prompt: "A full launch plan for a T-shirt brand. Which line breaks the plan?",
      code: ["Customer: college students who love Telugu movie dialogues.", "Channel: Instagram reels and college fest stalls.", "Message: wear your favourite dialogue, ₹399, DM to order.", "Use famous movie posters and actors’ photos on the shirts without permission."],
      outputOptions: ["Nothing, it’s a great plan", "Using others’ copyrighted posters and photos without permission can get the brand in legal trouble", "The price is too low"], outputAnswer: 1, bugLine: 3,
      bugText: "movie posters and actors’ photos belong to others. Use your own designs and original artwork",
      hint: "Who owns the posters and photos?",
      note: "Original designs protect your brand. Copying others’ work can mean takedowns or legal trouble.", badge: "shield"
    })),
    CH(6, "Full Plan", {
      double: true,
      prompt: "After 1 month, your product has 40 customers. What’s the smartest next step?",
      options: ["Stop marketing, the product is done", "Ask customers why they bought, do more of that", "Change everything at once to grow faster", "Spend all your money on ads immediately"], answer: 1,
      hint: "Learn, then grow.",
      note: "Your first customers tell you where the next ones are. Listen, improve, repeat.", badge: "trending-up",
      board: true, boardLabel: "after Round 6"
    }),

    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "In 30 seconds: your product, your customer, where you’ll find them, and your first message.", note: "Specific and real. The room claps; the host picks the best one.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "8 Steps to Your First Customers", note: "Screenshot this. Do step 1 today.", items: HUNT },
    {
      type: "end",
      joinTitle: "Join the EduMoon community",
      joinText: "Startup games, pitch practice and real projects every week. Build your own idea, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
