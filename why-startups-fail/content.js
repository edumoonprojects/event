// Why Startups Fail (EduMoon Entrepreneurship). For all years.
// Diagnose made-up failing campus startups: no real need, running out of cash, building too much too soon,
// founder conflicts, ignoring customers and bad timing. All startups are made up.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const SF = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 45, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
// "Find the decision that sank it" questions use the bug door.
const SINK = { kind: "bug", time: 60, step1: "Why is it failing?", step2: "Tap the decision that hurt most", say1: "First pick the reason.", say2: "Now tap the decision.", partO: "the reason", partL: "the decision", lineLabel: "decision", bugLabel: "The decision that hurt most" };

const SURVIVE = [
  ["Prove the need first", "Talk to customers before you build."],
  ["Know your runway", "Money in the bank ÷ money spent per month = months left."],
  ["Build small, learn fast", "One feature that people love."],
  ["Agree early, in writing", "Roles, shares and decisions between founders."],
  ["Listen to customers", "Their behaviour more than their compliments."],
  ["Watch timing", "Too early or too late both hurt."],
  ["Don’t fake numbers", "Trust lost is very hard to win back."],
  ["Failing is learning", "Many founders fail before they succeed."]
];

window.GAME = {
  id: "why-startups-fail",
  title: "Why Startups Fail",
  club: "Entrepreneurship",
  tagline: "Learn from failure, before it’s yours.",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "35 minutes", level: "Medium",
    about: "Most startups don’t survive, and the reasons repeat. In 6 rounds, teams play startup doctors for made-up campus startups: diagnose why each one is failing, find the decision that hurt most, and pick the fix. Rounds cover no real need, running out of money, building too much too soon, founder fights, ignoring customers and bad timing.",
    outcomes: "The most common reasons startups fail, how to calculate runway, why founders should agree early, and 8 habits that improve the odds.",
    tone: "Keep it encouraging. Failure is normal and full of lessons; the point is to fail cheaper and learn faster. All startups in the game are made up.",
    extra: [["Pairs with", "Idea or Not, Price It Right and Investor Room. Run this after them for a full startup series."]]
  },
  words: {
    round: "Round", unlocked: "Diagnosis", badgeLabel: "Saved",
    rulesEyebrow: "How Why Startups Fail works", rulesTitle: "Read the case. Diagnose it. Prescribe the fix.",
    learnText: "The host shares one common reason startups fail.", crackTitle: "Diagnose",
    crackText: "Pick your answer on your phone and lock it in.",
    rulesExtra: "Decision questions: <b>100</b> for the reason + <b>100</b> for the decision. Round 6: <b>double</b>!",
    nobody: "Nobody diagnosed this one. Real founders miss it too!", cracked: "saved the startup",
    next: "Next round →", finale: "Next →", winner: "are today’s best startup doctors!", endLine: "Fail smart. Learn fast."
  },
  offerEyebrow: "EduMoon Entrepreneurship · Startup doctor results",
  offerTitle: "Your doctor rank",
  offers: [
    { min: 0.7, icon: "shield", title: "Startup Surgeon", text: "You spot the problem fast. Founders should ask you before big decisions." },
    { min: 0.45, icon: "heart", title: "Startup Doctor", text: "Strong! Always calculate runway before spending." },
    { min: 0.2, icon: "search", title: "Startup Nurse", text: "Good start. Read the 8 survival habits once more." },
    { min: 0, icon: "book-open", title: "Medical Student", text: "Everyone starts here. Save the habits for your first startup." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Entrepreneurship · Why Startups Fail",
      title: "Six campus startups are in trouble. Some can be saved. Your team are the startup doctors. Diagnose them before it’s too late.",
      cards: [["heart", "Diagnose 6 failing startups"], ["search", "Find the decision that hurt most"], ["shield", "Learn habits that keep startups alive"]]
    },
    { type: "rules" },

    // ---------- Round 1: No real need ----------
    {
      type: "learn", door: 1,
      title: "The most common killer: building something nobody needs.",
      points: [["Founders fall in love with ideas", "Not with problems"], ["Friends say “nice idea”", "To be polite"], ["Real need", "People already spend time or money on the problem"]],
      highlightLast: true,
      side: { label: "Need check", items: [["users", "Who has the problem?", ""], ["indian-rupee", "Do they pay to fix it now?", ""], ["message-circle", "What do they actually do?", ""]] }
    },
    SF(1, "No Real Need", {
      prompt: "“PlantPal” built an app to remind hostel students to water plants. 6 downloads in 3 months. Diagnosis?",
      options: ["No real need: few students keep plants", "Too many users, so the servers crashed", "The app was too fast and confused people", "A bad logo that nobody remembered"], answer: 0,
      hint: "How many students have plants?",
      note: "A well-built answer to a problem few people have. Check the need first.", badge: "search"
    }),
    SF(1, "No Real Need", {
      prompt: "Best way to check real need BEFORE building an app?",
      options: ["Build it first, then see who uses it", "Watch what people do today, ask them to sign up", "Post a poll with only one option", "Ask your friends if they like the idea"], answer: 1,
      hint: "Behaviour beats opinions.",
      note: "What people do (and pay for) tells you more than what they say.", badge: "eye"
    }),
    SF(1, "No Real Need", Object.assign({}, SINK, {
      prompt: "“NoteSwap” timeline. Which decision hurt most?",
      code: ["Month 1: built an app for 4 months without talking to any student.", "Month 5: launched with a big poster campaign.", "Month 6: few users; students said they share notes on WhatsApp already.", "Month 7: added more features."],
      outputOptions: ["They built for months without checking if students needed it", "The poster was the wrong colour", "Nothing, bad luck"], outputAnswer: 0, bugLine: 0,
      bugText: "4 months of building with zero customer conversations. A week of talking first would have shown WhatsApp already solves it",
      hint: "Where did it go wrong first?",
      note: "And adding features in month 7 didn’t fix the real problem.", badge: "message-circle",
      board: true, boardLabel: "after Round 1"
    })),

    // ---------- Round 2: Running out of money ----------
    {
      type: "learn", door: 2,
      title: "Running out of money ends many startups.",
      points: [["Burn", "Money spent each month"], ["Runway", "Money in the bank ÷ monthly burn = months left"], ["Spend on what proves the business", "Not on looking big"]],
      highlightLast: true,
      side: { label: "Runway example", items: [["indian-rupee", "Bank", "₹1,20,000"], ["timer", "Burn", "₹20,000 a month"], ["clock", "Runway", "6 months"]] }
    },
    SF(2, "Out of Money", {
      prompt: "A startup has ₹1,50,000 and spends ₹30,000 a month. How many months of runway?",
      options: ["3", "5", "6", "15"], answer: 1,
      hint: "1,50,000 ÷ 30,000.",
      note: "5 months. Knowing this number tells you how fast you must find revenue or funding.", badge: "clock"
    }),
    SF(2, "Out of Money", Object.assign({}, SINK, {
      prompt: "“CampusCart” spending plan in month 1. Which decision hurt most?",
      code: ["Spent ₹15,000 testing delivery in one hostel.", "Spent ₹1,50,000 on a fancy office and branded hoodies.", "Spent ₹5,000 on posters near the hostel.", "Kept ₹30,000 for next month."],
      outputOptions: ["The hostel test was too small", "Spending most of the money on looking big, not on proving the business", "Posters are illegal"], outputAnswer: 1, bugLine: 1,
      bugText: "an office and hoodies don’t bring customers. That money was runway",
      hint: "Which spend didn’t help prove anything?",
      note: "Early money should buy learning and customers, not image.", badge: "indian-rupee"
    })),
    SF(2, "Out of Money", {
      prompt: "Runway is down to 2 months and sales are slow. Smartest move?",
      options: ["Cut extra costs and talk to funders early", "Ignore it, sales will pick up on their own", "Spend more on ads and hope it works", "Buy more team hoodies to boost morale"], answer: 0,
      hint: "Extend runway, focus.",
      note: "Act early. Fundraising and fixes take time you may not have at the last minute.", badge: "trending-up",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Too much too soon ----------
    {
      type: "learn", door: 3,
      title: "Building too much, too soon.",
      points: [["More features ≠ more customers", "Usually it’s confusion and delay"], ["Scaling too early", "10 colleges before 1 college loves you"], ["Start small", "One feature, one campus, done really well"]],
      highlightLast: true,
      side: { label: "Do less, better", items: [["target", "One problem", ""], ["map", "One campus", ""], ["star", "Make it loved", "Then grow"]] }
    },
    SF(3, "Too Much Too Soon", {
      prompt: "“StudyHub” launched with chat, notes, quizzes, jobs, dating and a marketplace in one app. Students are confused. Diagnosis?",
      options: ["The app is too simple and needs more pages", "Students don’t use phones much anymore", "Too few features compared to competitors", "Too much at once, no clear reason to use it"], answer: 3,
      hint: "What is the app FOR?",
      note: "A clear single purpose beats a confusing everything-app. Pick the one thing people love most.", badge: "list-checks"
    }),
    SF(3, "Too Much Too Soon", {
      prompt: "A laundry startup works well in 1 hostel. Should they launch in 15 colleges next week?",
      options: ["No. Grow step by step and learn what breaks", "Yes, and hire 50 people for the launch", "Yes, go everywhere at once before others copy", "Close the first hostel to focus on new ones"], answer: 0,
      hint: "What breaks when you grow too fast?",
      note: "Quality often drops when growth outruns the team. Grow steadily.", badge: "route"
    }),
    SF(3, "Too Much Too Soon", {
      prompt: "Which first version is smartest for a campus food-ordering idea?",
      options: ["A WhatsApp number and a form, one hostel", "A website in 10 languages for every state", "A smartwatch app for quick ordering", "A full app with 30 features on day one"], answer: 0,
      hint: "Smallest thing that tests the idea.",
      note: "Simple tools test demand in days. Build the full app once you know people want it.", badge: "smartphone",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Name a product or app that failed or shut down. Why do you think it failed?", note: "20 seconds. Use today’s reasons.", points: 100 },

    // ---------- Round 4: Founder problems ----------
    {
      type: "learn", door: 4,
      title: "Founder fights end good startups too.",
      points: [["Unclear roles", "Who decides what?"], ["Unclear shares", "Who owns how much, and what if someone leaves?"], ["Fix early", "Agree in writing while you’re still friends"]],
      highlightLast: true,
      side: { label: "Agree on", items: [["users", "Roles", "Who does what"], ["handshake", "Shares", "And vesting"], ["list-checks", "Decisions", "How you break ties"]] }
    },
    SF(4, "Founder Problems", {
      prompt: "Three friends started a startup with no written agreement. One stops working but wants a third of everything. What would have helped?",
      options: ["A bigger office so everyone feels involved", "More friends joining as co-founders", "Nothing could have helped in this case", "A written founders’ agreement"], answer: 3,
      hint: "Agree early, in writing.",
      note: "Many founders use “vesting”: shares are earned over time, so someone who leaves early keeps only part.", badge: "handshake"
    }),
    SF(4, "Founder Problems", {
      prompt: "Two co-founders keep disagreeing on every decision and the team is stuck. Best fix?",
      options: ["Agree who decides what, and how to break ties", "Shut down the startup immediately", "Stop talking to each other until it passes", "Let the interns vote on every decision"], answer: 0,
      hint: "Clear ownership.",
      note: "Clear areas of ownership let both move fast and trust each other.", badge: "users"
    }),
    SF(4, "Founder Problems", Object.assign({}, SINK, {
      prompt: "“FestPass” founders’ first month. Which decision will most likely cause trouble later?",
      code: ["We agreed one founder handles tech, one handles colleges.", "We meet every Sunday to review numbers.", "We’ll decide who owns how much “later, when we’re big”.", "We put every rupee spent in a shared sheet."],
      outputOptions: ["Delaying the ownership talk until money and stakes are much bigger", "Weekly meetings are too often", "Nothing, perfect setup"], outputAnswer: 0, bugLine: 2,
      bugText: "ownership talks get harder as the company grows. Agree early, in writing",
      hint: "When is a hard talk easiest?",
      note: "Three great habits. One delayed decision that often ends friendships later.", badge: "scale",
      board: true, boardLabel: "after Round 4"
    })),

    // ---------- Round 5: Ignoring customers ----------
    {
      type: "learn", door: 5,
      title: "Ignoring customers, or listening to the wrong signals.",
      points: [["Compliments aren’t data", "“Nice app!” doesn’t mean they’ll use it"], ["Watch behaviour", "Do they come back? Do they pay?"], ["Complaints are gifts", "They show you what to fix"]],
      highlightLast: true,
      side: { label: "Signals that matter", items: [["trending-up", "Repeat use", ""], ["indian-rupee", "Payments", ""], ["message-circle", "Same complaint from many", ""]] }
    },
    SF(5, "Ignoring Customers", {
      prompt: "Many users say the app is “cool”, but almost nobody opens it a second time. What does this tell you?",
      options: ["Users are lying to be polite to the founders", "Add more colours so it looks exciting", "The app is a success, “cool” means it works", "It’s not solving a real problem well enough"], answer: 3,
      hint: "Behaviour over words.",
      note: "Repeat use is one of the clearest signs people value what you built.", badge: "eye"
    }),
    SF(5, "Ignoring Customers", {
      prompt: "30 customers complain that delivery is slow. The founder decides to redesign the logo. Diagnosis?",
      options: ["Logos fix everything, so it’s a good plan", "Fixing the wrong thing", "Ignore the complaints until they stop", "A great decision, branding matters most"], answer: 1,
      hint: "What did customers ask for?",
      note: "When many customers say the same thing, that’s your priority.", badge: "clock"
    }),
    SF(5, "Ignoring Customers", {
      prompt: "A founder fakes higher user numbers to impress investors. What usually happens?",
      options: ["Trust is lost, and there can be legal trouble", "It works forever if nobody checks", "The numbers slowly become real over time", "Nothing, every startup does it"], answer: 0,
      hint: "Can lies survive checks?",
      note: "Investors check. Honest small numbers beat fake big ones, every time.", badge: "shield",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Timing and final cases (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: timing, and putting it all together.",
      points: [["Too early", "People aren’t ready yet"], ["Too late", "Others already own the space"], ["Right time", "Something changed: new tech, new rules, new habits"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game!"], ["heart", "Final diagnoses", ""], ["award", "Then your rank", ""]] }
    },
    SF(6, "Final Cases", {
      double: true,
      prompt: "A startup tries to sell online payment services in a town where almost nobody has a smartphone yet. Diagnosis?",
      options: ["The logo didn’t suit a small-town market", "Too early: people weren’t ready", "Perfect timing, they were first in the town", "Too late, everyone already had it"], answer: 1,
      hint: "Were people ready?",
      note: "Even good ideas fail if customers aren’t ready yet. Timing matters.", badge: "clock"
    }),
    SF(6, "Final Cases", Object.assign({}, SINK, {
      double: true,
      prompt: "“TiffinTime” story. Which decision hurt most?",
      code: ["Talked to 50 students; many wanted home-style lunch.", "Tested with 1 hostel for 2 weeks; 40 regular customers.", "Then spent all savings opening in 12 colleges at once.", "Quality dropped and customers left."],
      outputOptions: ["Talking to 50 students was a waste", "The hostel test was too small", "Expanding to 12 colleges at once with all the money, before the system was ready"], outputAnswer: 2, bugLine: 2,
      bugText: "they did the hard part right, then grew too fast and spent all their runway at once",
      hint: "Steps 1 and 2 were great.",
      note: "Even good startups die from scaling too fast. Grow one step at a time.", badge: "route"
    })),
    SF(6, "Final Cases", {
      double: true,
      prompt: "Your first startup fails. What’s the best mindset?",
      options: ["Note what you learned and use it next time", "Blame your co-founders and the market", "Never try a startup again in your life", "Hide it from your resume and LinkedIn"], answer: 0,
      hint: "What did it teach you?",
      note: "Many successful founders failed first. A failed startup can be great experience for jobs too.", badge: "lightbulb",
      board: true, boardLabel: "after Round 6"
    }),

    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "In 30 seconds: pick a startup idea and say the #1 way it could fail, and how you’d prevent it.", note: "The room claps; the host picks the smartest prevention plan.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "8 Startup Survival Habits", note: "Screenshot this. Read it before your first big startup decision.", items: SURVIVE },
    {
      type: "end",
      joinTitle: "Join the EduMoon community",
      joinText: "Startup games, pitch practice and real projects every week. Build your own idea, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
