// Growth Hacks (EduMoon Entrepreneurship). Beginner: for all years.
// Cheap, honest ways to get your first 100 users: small experiments, referrals, waitlists, communities and partnerships, useful content, and measuring what works without spam or fake reviews. All brands and numbers are made up.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const GH = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 40, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const GHN = (round, name, extra) => GH(round, name, Object.assign({ kind: "number", time: 55 }, extra));

// The take-home card: first 100 users playbook.
const GROWTH = [
  ["Small experiments", "Try one idea for a week, measure it, keep what works."],
  ["Referrals", "Reward both the person who invites and the new user."],
  ["Waitlist", "Collect interest before launch. Only say “limited” if it really is."],
  ["Go where users already are", "Clubs, hostel groups, department WhatsApp groups."],
  ["Campus ambassadors", "One trusted student per college beats a big ad budget."],
  ["Useful content", "A post or reel that helps people, with your product as the answer."],
  ["Measure one number", "Sign-ups, orders or weekly active users. Not just likes."],
  ["Never", "Spam, fake reviews, buying followers or misleading claims."]
];

window.GAME = {
  id: "growth-hacks",
  title: "Growth Hacks",
  club: "Entrepreneurship",
  tagline: "No ad budget? No problem. Honest, cheap ways to get your first 100 users.",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "35 minutes", level: "Beginner",
    about: "Two students launched a made-up notes-sharing app, NoteNest, and got 12 users in a month, mostly friends. In 6 rounds, teams learn cheap, honest ways to grow: small experiments, referral rewards, waitlists, communities and campus ambassadors, useful content, and measuring the right number, while avoiding spam and fake reviews. Simple maths shows what each idea is worth.",
    outcomes: "A set of low-cost growth ideas for student products, how to design a referral offer, how to use communities, which number to track, and what never to do.",
    tone: "Students often think growth means paid ads. Show that most early growth is clever, personal and free. Ask the room which apps they joined because a friend invited them.",
    extra: [["Real experiment", "Challenge each team to run one growth experiment for their club or side project this week and report the numbers."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Grown",
    rulesEyebrow: "How Growth Hacks works", rulesTitle: "Learn the trick. Pick the smart move. Grow NoteNest.",
    learnText: "The host shares one growth idea.", crackTitle: "Decide",
    crackText: "Pick NoteNest’s best move on your phone and lock it in.",
    rulesExtra: "Some questions need a typed number. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Many startups waste money here!", cracked: "grew it",
    next: "Next round →", finale: "Next →", winner: "are today’s growth hackers!", endLine: "NoteNest reached its first 1,000 users."
  },
  offerEyebrow: "NoteNest · Growth report",
  offerTitle: "Your growth report",
  offers: [
    { min: 0.7, icon: "rocket", title: "Growth Hacker", text: "You grow smart and honest. Run one experiment this week." },
    { min: 0.45, icon: "trending-up", title: "Fast Grower", text: "Strong! Design a referral reward for your own idea." },
    { min: 0.2, icon: "lightbulb", title: "Idea Tester", text: "Good start. Pick one tactic from the card and try it." },
    { min: 0, icon: "book-open", title: "First 10 Users", text: "Everyone starts here. Talk to 10 possible users this week." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Entrepreneurship · 12 users",
      title: "NoteNest, a notes-sharing app for students, has 12 users after a month, mostly the founders’ friends. No ad budget. Can your team get them to 1,000?",
      cards: [["trending-up", "Referrals, waitlists and communities"], ["chart-column", "Measure what really matters"], ["trophy", "Your score decides your growth report"]]
    },
    { type: "rules" },

    // ---------- Round 1: Experiments ----------
    {
      type: "learn", door: 1,
      title: "Growth hacking means small, cheap experiments.",
      points: [["One idea at a time", "A poster, a referral offer, a club partnership"], ["Run it for a week", "Long enough to learn, short enough to move on"], ["Measure", "Did sign-ups go up? Keep it or drop it"]],
      highlightLast: true,
      side: { label: "Experiment card", items: [["lightbulb", "Idea", "Posters in 3 hostels"], ["chart-column", "Measure", "Sign-ups from the poster’s link"], ["check", "Decide", "Keep, change or drop"]] }
    },
    GH(1, "Experiments", {
      prompt: "What is the core idea of growth hacking?",
      options: ["Cheap, measured experiments", "Spending a lot on big ads", "Copying another app exactly", "Waiting for users to arrive"], answer: 0,
      hint: "Try, measure, learn.",
      note: "Small experiments show what works before you spend real money.", badge: "lightbulb"
    }),
    GH(1, "Experiments", {
      prompt: "How can NoteNest know which poster brought sign-ups?",
      options: ["Ask everyone to guess", "A unique QR code per poster", "Put all posters in one place", "There is no way to know"], answer: 1,
      hint: "Track each source.",
      note: "Unique links or QR codes show exactly which poster worked.", badge: "search"
    }),
    GHN(1, "Experiments", {
      prompt: "Posters in Hostel A got 30 sign-ups; Hostel B got 6. How many times better did Hostel A do?",
      answer: 5,
      hint: "30 ÷ 6.",
      note: "5 times better. Next week, learn why Hostel A worked and try that elsewhere.", badge: "chart-column",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Referrals ----------
    {
      type: "learn", door: 2,
      title: "Referrals: happy users bring friends.",
      points: [["Reward both sides", "The inviter and the new user both get something"], ["Make it useful", "Free premium notes, not random stickers"], ["Make it easy", "One tap to share a link on WhatsApp"]],
      highlightLast: true,
      side: { label: "NoteNest offer", items: [["users", "Invite a friend", "Both get 1 month of premium notes"], ["smartphone", "One-tap share", "WhatsApp link"], ["chart-column", "Track", "Who invited whom"]] }
    },
    GH(2, "Referrals", {
      prompt: "Which referral offer is likely to work best?",
      options: ["Both get a free month of premium", "Only the new user gets a sticker", "The inviter pays ₹50", "No reward, just “please share”"], answer: 0,
      hint: "Both sides should win.",
      note: "When both sides get something useful, people share happily.", badge: "handshake"
    }),
    GHN(2, "Referrals", {
      prompt: "100 users each invite 3 friends. 1 in 3 invited friends joins. How many new users join?",
      answer: 100,
      hint: "300 invites ÷ 3.",
      note: "300 invites, 100 join. NoteNest doubled without spending on ads.", badge: "users"
    }),
    GH(2, "Referrals", {
      prompt: "Why make sharing “one tap on WhatsApp”?",
      options: ["WhatsApp pays for every share", "It looks more colourful", "It is required by law", "Fewer steps, more shares"], answer: 3,
      hint: "Every extra step loses people.",
      note: "The easier it is, the more people actually do it.", badge: "smartphone",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Waitlists ----------
    {
      type: "learn", door: 3,
      title: "Waitlists build interest before launch.",
      points: [["Collect interest early", "A simple page or form: “Join the waitlist”"], ["Move up by inviting", "Share your link to get early access sooner"], ["Be honest", "Only say “limited spots” if spots are really limited"]],
      highlightLast: true,
      side: { label: "Honest vs fake", items: [["check", "“First 200 get early access, we can only support 200”", "True limit"], ["x", "“Only 3 spots left!” forever", "Fake urgency"], ["check", "Show the waitlist count", "Social proof"]] }
    },
    GH(3, "Waitlists", {
      prompt: "NoteNest’s new feature launches next month. How can they build interest now?",
      options: ["Keep it secret until launch day", "Open a waitlist with early access", "Launch without telling anyone", "Wait for news channels to call"], answer: 1,
      hint: "Collect people before launch.",
      note: "A waitlist builds a group of users ready on day one.", badge: "list-checks"
    }),
    GH(3, "Waitlists", {
      prompt: "A site shows “Only 3 spots left!” every single day for months. What is the problem?",
      options: ["It is fake urgency", "It is a great honest tactic", "Spots are always exactly 3", "There is no problem"], answer: 0,
      hint: "Is it true?",
      note: "Fake scarcity is misleading. When people notice, they stop trusting the brand.", badge: "x"
    }),
    GHN(3, "Waitlists", {
      prompt: "800 people joined the waitlist. On launch day, 25% sign up. How many new users?",
      answer: 200,
      hint: "800 × 0.25.",
      note: "200 users on day one, from a free waitlist page.", badge: "rocket",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Design a referral reward for a product you use. What do both sides get?", note: "Useful for both, easy to share. 20 seconds.", points: 100 },

    // ---------- Round 4: Communities ----------
    {
      type: "learn", door: 4,
      title: "Go where your users already gather.",
      points: [["Communities", "Department groups, clubs, hostel groups (ask admins first)"], ["Campus ambassadors", "One trusted student per college"], ["Partnerships", "A coding club, a fest, a coaching centre"]],
      highlightLast: true,
      side: { label: "NoteNest partners", items: [["users", "Exam-prep clubs", "Share notes before exams"], ["graduation-cap", "Ambassadors", "One per college, with free premium"], ["handshake", "Fest stalls", "Live demo, QR sign-up"]] }
    },
    GH(4, "Communities", {
      prompt: "Best place for NoteNest to find its first 500 users?",
      options: ["Random people at a shopping mall", "A TV ad during cricket", "Clubs and class groups", "Senior citizens’ groups"], answer: 2,
      hint: "Where are students already together?",
      note: "Go where your users already gather, and always ask group admins before posting.", badge: "users"
    }),
    GH(4, "Communities", {
      prompt: "Why do campus ambassadors work well for student apps?",
      options: ["Ambassadors are paid lakhs", "Colleges require apps to have them", "They replace the product", "Students trust friends"], answer: 3,
      hint: "Trust.",
      note: "A recommendation from a trusted classmate beats any ad.", badge: "heart"
    }),
    GH(4, "Communities", {
      prompt: "A coding club runs exam-prep sessions. What partnership makes sense?",
      options: ["Ask them to pay for a NoteNest ad", "Copy their notes without asking", "Free premium for members who share it", "Ignore them, they are too small"], answer: 2,
      hint: "Win-win.",
      note: "Give value to the club, and they share you with exactly the right users.", badge: "handshake",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Content ----------
    {
      type: "learn", door: 5,
      title: "Useful content brings users for free.",
      points: [["Help first", "“5 tricks to revise a semester in 3 days”"], ["Product as the answer", "“…and all these notes are free on NoteNest”"], ["Real stories", "A student who used it and topped the exam"]],
      highlightLast: true,
      side: { label: "Content that works", items: [["check", "A 30-second study tip reel", "Useful"], ["check", "A screenshot of a real review", "Honest proof"], ["x", "“Download now!!!” posted 10 times", "Spam"]] }
    },
    GH(5, "Content", {
      prompt: "Which post is likely to bring the most sign-ups?",
      options: ["“DOWNLOAD NOTENEST NOW!!!” in red", "A useful study-tip reel", "A logo with no text", "A post about the founders’ breakfast"], answer: 1,
      hint: "Help first, then mention the product.",
      note: "Useful content earns attention and trust. Shouting ads get skipped.", badge: "film"
    }),
    GH(5, "Content", {
      prompt: "Which proof is most convincing in a post?",
      options: ["A review the founders wrote themselves", "A real user’s review", "A made-up “10 lakh users” claim", "A random celebrity photo"], answer: 1,
      hint: "Real and honest.",
      note: "Real reviews shared with permission are powerful. Fake ones are dishonest and can break trust and rules.", badge: "star"
    }),
    GHN(5, "Content", {
      prompt: "A reel got 5,000 views. 2% of viewers tapped the link, and half of those signed up. How many sign-ups?",
      answer: 50,
      hint: "5,000 × 0.02 = 100 taps.",
      note: "100 taps, 50 sign-ups. Views are nice; sign-ups are what count.", badge: "chart-column",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Measure and stay honest (double) ----------
    {
      type: "learn", door: 6,
      title: "Track the number that matters, and grow honestly.",
      points: [["One key number", "Sign-ups, orders, or weekly active users"], ["Vanity numbers", "Likes and followers can look good while nobody uses the app"], ["Never", "Spam, fake reviews, bought followers or false claims"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["chart-column", "Right numbers", "And honest growth"], ["mic", "Then the final challenge", "Your growth plan"]] }
    },
    GH(6, "Measure Honestly", {
      double: true,
      prompt: "Which number best shows NoteNest is truly growing?",
      options: ["Instagram followers", "Likes on one post", "Number of posters printed", "Weekly active users"], answer: 3,
      hint: "Are people actually using it?",
      note: "Weekly active users shows real usage. Followers and likes can be vanity numbers.", badge: "chart-column"
    }),
    GH(6, "Measure Honestly", {
      double: true,
      prompt: "A seller offers “5,000 followers for ₹999”. Should NoteNest buy them?",
      options: ["No, they are not real users", "Yes: more followers is always good", "Yes, but only 2,500", "Only if they are cheap"], answer: 0,
      hint: "Will those followers use the app?",
      note: "Bought followers do not use the product and can damage trust and reach.", badge: "x"
    }),
    GH(6, "Measure Honestly", {
      double: true,
      prompt: "Which growth tactic is NOT acceptable?",
      options: ["Asking happy users for honest reviews", "Running a fair referral offer", "Writing fake 5-star reviews", "Partnering with student clubs"], answer: 2,
      hint: "Which one is dishonest?",
      note: "Fake reviews mislead people. Honest growth is slower at first but lasts.", badge: "shield",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, report, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best plan wins +200", prompt: "In 30 seconds: your plan to get 100 users for any student app, using two tactics from today and one number to track.", note: "Specific, cheap and honest. The host picks.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "First 100 Users Playbook", note: "Screenshot this. Run one experiment this week.", items: GROWTH },
    {
      type: "end",
      joinTitle: "Join EduMoon Entrepreneurship",
      joinText: "Startup games, founder talks and real student businesses. Build something, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
