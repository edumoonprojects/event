// 60-Second Pitch (EduMoon Entrepreneurship). For all years.
// Pitch any idea in one minute: the hook, the problem, the solution, the customer, traction and the ask, and how to deliver it. Ends with live pitches.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const PP = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 45, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const PPN = (round, name, extra) => PP(round, name, Object.assign({ kind: "number", time: 50 }, extra));
const PSPOT = { kind: "bug", time: 60, step1: "What is the problem?", step2: "Tap the weakest line", say1: "First pick the problem.", say2: "Now tap the weakest line.", partO: "the problem", partL: "the line", lineLabel: "line", bugLabel: "The weakest line is" };

// The take-home card: the 60-second pitch template.
const TEMPLATE = [
  ["0–10 s: Hook", "A surprising fact, a question or a short story. Not “Hello, my name is…” for 20 seconds."],
  ["10–20 s: Problem", "Who suffers, how often, and one real number."],
  ["20–35 s: Solution", "What you built or will build, in one plain sentence. Show it if you can."],
  ["35–45 s: Customer", "Who exactly will use it, and who pays."],
  ["45–55 s: Proof", "Users, pre-orders, a pilot, a test. Something real."],
  ["55–60 s: Ask", "What you want: feedback, a pilot, mentors, money. Be specific."],
  ["Delivery", "Slow down, look at people, pause after the hook. Practise aloud 5 times."],
  ["Questions", "Thank them, answer briefly, and say “I don’t know yet, I’ll find out” if needed."]
];

window.GAME = {
  id: "sixty-second-pitch",
  title: "60-Second Pitch",
  club: "Entrepreneurship",
  tagline: "One minute. One idea. Make them remember it.",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "40 minutes", level: "Medium",
    about: "Kavya has one minute on stage at a made-up startup fair, Vizag Founders Day, to pitch her app that helps students find shared rides home during holidays. In 6 rounds, teams learn the hook, the problem, the solution, the customer, proof and the ask, then how to deliver it and handle questions. Speaking turns run through the game, and it ends with live team pitches.",
    outcomes: "A one-minute pitch structure students can use for any idea, project or even themselves, plus delivery and Q&A skills.",
    tone: "Pitching is scary for most students. Be the warmest audience in the room. Clap for every pitch, give one specific compliment and one tip. The goal is to have everyone try once.",
    extra: [["Timer", "Use a phone timer for the final pitches. When time is up, the pitcher finishes the sentence and stops. The discipline is part of the lesson."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Pitched",
    rulesEyebrow: "How 60-Second Pitch works", rulesTitle: "Learn one part. Pick the best line. Pitch it live.",
    learnText: "The host explains one part of a great pitch.", crackTitle: "Choose",
    crackText: "Pick Kavya’s best line on your phone and lock it in.",
    rulesExtra: "Live pitches: up to <b>+200</b>. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Many real founders get it wrong too!", cracked: "nailed it",
    next: "Next round →", finale: "Next →", winner: "are today’s best pitchers!", endLine: "Kavya got three mentors after her pitch."
  },
  offerEyebrow: "Vizag Founders Day · Judges’ verdict",
  offerTitle: "The judges’ verdict",
  offers: [
    { min: 0.7, icon: "rocket", title: "Investor Ready", text: "Your pitch thinking is sharp. Pitch at a real event this semester." },
    { min: 0.45, icon: "mic", title: "Strong Pitcher", text: "Good! Record your 60-second pitch on your phone and watch it once." },
    { min: 0.2, icon: "lightbulb", title: "Promising Founder", text: "Good start. Write your pitch using the template below." },
    { min: 0, icon: "book-open", title: "First Pitch", text: "Everyone starts here. Pitch your idea to one friend this week." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Entrepreneurship · Vizag Founders Day",
      title: "Kavya has exactly 60 seconds on stage to pitch her ride-sharing app for students going home on holidays. Can your team help her make every second count?",
      cards: [["mic", "Hook, problem, solution, customer, proof, ask"], ["users", "Live pitches from every team"], ["trophy", "Your score decides the judges’ verdict"]]
    },
    { type: "rules" },

    // ---------- Round 1: The hook ----------
    {
      type: "learn", door: 1,
      title: "You have 10 seconds before people stop listening.",
      points: [["Start with a hook", "A surprising number, a question, or a 1-line story"], ["Skip the long introduction", "Your name can come after the hook"], ["Make it about them", "Something the audience has felt"]],
      highlightLast: true,
      side: { label: "Hooks", items: [["zap", "A number", "“Last Sankranti, 400 students from our college paid ₹1,500 each for one bus seat.”"], ["message-circle", "A question", "“Who here has stood 6 hours in a train to get home?”"], ["film", "A story", "“Last Diwali, I missed my bus and slept at the station.”"]] }
    },
    PP(1, "The Hook", {
      prompt: "Which is the strongest opening for Kavya’s pitch?",
      options: ["“Good morning everyone, my name is Kavya and I am from 3rd year CSE.”", "“Today I am going to talk about my app, which is about rides.”", "“Who here has paid double for a bus ticket home at Sankranti?”", "“Thank you for this opportunity, I am very happy to be here today.”"], answer: 2,
      hint: "Which one makes the audience feel something in 5 seconds?",
      note: "A question the audience has lived through. They lean in at once. Introductions can come after.", badge: "zap"
    }),
    PP(1, "The Hook", {
      prompt: "Why should a pitch NOT start with 20 seconds of introduction?",
      options: ["A third of the time is gone", "Introductions are not allowed at events", "Judges already know everyone", "Names are hard to remember"], answer: 0,
      hint: "How long is the whole pitch?",
      note: "20 of 60 seconds is a third of the pitch. Get to the interesting part first.", badge: "timer"
    }),
    PP(1, "The Hook", {
      prompt: "Which hook uses a strong, specific number?",
      options: ["“Lots of students face travel problems.”", "“400 of us paid ₹1,500 for one bus seat.”", "“Travel is a big problem for many people.”", "“Students spend a lot on going home.”"], answer: 1,
      hint: "Specific beats general.",
      note: "A real number from your own survey or college is memorable. “Lots of people” is not.", badge: "chart-column",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: The problem ----------
    {
      type: "learn", door: 2,
      title: "Make the problem real: who, how often, how bad.",
      points: [["Who suffers", "A clear group: hostel students from other districts"], ["How often", "Every holiday, every semester"], ["Proof", "A survey, a number, a quote from a real user"]],
      highlightLast: true,
      side: { label: "Weak vs strong", items: [["x", "“Travel is hard.”", "Vague"], ["check", "“73 of 100 hostel students we surveyed struggle to get tickets home.”", "Specific"], ["check", "A quote", "“I slept at the bus stand last Diwali.”"]] }
    },
    PP(2, "The Problem", {
      prompt: "Which problem statement is strongest?",
      options: ["“73 of 100 hostel students we asked couldn’t get tickets.”", "“Travelling is difficult for almost everyone in India today.”", "“My app is the best travel app that has ever been made.”", "“There are so many problems in the world today, honestly.”"], answer: 0,
      hint: "Who, how many, and proof.",
      note: "A clear group plus a real number from her own survey. Judges trust what they can picture.", badge: "users"
    }),
    PPN(2, "The Problem", {
      prompt: "Kavya surveyed 120 hostel students. 90 said holiday travel is a big problem. What percentage is that?",
      answer: 75,
      hint: "90 ÷ 120 × 100.",
      note: "75%. “3 out of 4 hostel students” is an easy line for a pitch.", badge: "chart-column"
    }),
    PP(2, "The Problem", {
      prompt: "Where should the problem come in a 60-second pitch?",
      options: ["Right after the hook", "At the very end", "Only if judges ask", "After the money ask"], answer: 0,
      hint: "People need to care before they hear the solution.",
      note: "Hook, then problem. A solution only matters once people feel the problem.", badge: "route",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: The solution ----------
    {
      type: "learn", door: 3,
      title: "Explain the solution in one plain sentence.",
      points: [["One sentence", "“An app that matches students going to the same town so they can share a cab.”"], ["No jargon", "Skip “AI-powered blockchain platform” unless it is true and needed"], ["Show, if you can", "A screenshot or a 5-second demo beats a paragraph"]],
      highlightLast: true,
      side: { label: "Test", items: [["users", "Could your grandmother repeat it?", "Then it is clear"], ["x", "Needs a second sentence to explain the first?", "Simplify"], ["eye", "Can you show it?", "Even a mock-up"]] }
    },
    PP(3, "The Solution", {
      prompt: "Which is the clearest solution sentence?",
      options: ["“A next-gen AI-enabled synergistic mobility platform for youth.”", "“A revolutionary disruption of the travel ecosystem.”", "“A solution for all the transportation needs of people.”", "“An app that matches students going home to share a cab.”"], answer: 3,
      hint: "Could anyone repeat it after hearing it once?",
      note: "Plain words, clear users, clear action. Buzzwords make judges stop listening.", badge: "lightbulb"
    }),
    PP(3, "The Solution", {
      prompt: "Kavya has a working prototype on her phone. When should she show it?",
      options: ["Never, because judges don’t care", "Only after the pitch is over", "Briefly, while explaining it", "For the full 60 seconds of the pitch"], answer: 2,
      hint: "Show, don’t just tell.",
      note: "A quick look while she explains makes it real. Keep it short; the pitch is still the main thing.", badge: "smartphone"
    }),
    PP(3, "The Solution", Object.assign({}, PSPOT, {
      prompt: "A draft of Kavya’s solution part. Which line hurts it most?",
      code: ["RideHome matches students going to the same town.", "They share a cab and split the cost.", "It uses AI, blockchain, metaverse and quantum computing.", "Booking takes under one minute."],
      outputOptions: ["Buzzwords she cannot back up", "It is too short", "The app name is wrong"], outputAnswer: 0, bugLine: 2,
      bugText: "a list of buzzwords she is not really using. Judges will ask about each one",
      hint: "Which line sounds impressive but probably isn’t true?",
      note: "Only mention tech you actually use and can explain. Buzzwords invite hard questions.", badge: "x",
      board: true, boardLabel: "after Round 3"
    })),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Say your own idea’s hook and problem in 20 seconds.", note: "One hook, one specific problem. Any idea is fine.", points: 100 },

    // ---------- Round 4: Customer and money ----------
    {
      type: "learn", door: 4,
      title: "Who will use it, and who will pay?",
      points: [["Be specific", "Not “everyone” but “hostel students travelling over 200 km”"], ["Size it simply", "How many such people? A rough count is fine"], ["How it earns", "A small fee per ride, a subscription, or ads"]],
      highlightLast: true,
      side: { label: "Rough sizing", items: [["users", "5 colleges", "About 8,000 hostel students"], ["route", "3 trips a year", "24,000 trips"], ["indian-rupee", "₹30 fee per trip", "₹7.2 lakh a year"]] }
    },
    PP(4, "Customer and Money", {
      prompt: "“Who is your customer?” Best answer?",
      options: ["“Everyone in India who travels.”", "“Hostel students going 200+ km home.”", "“All the people who have phones.”", "“Anyone who wants to use it.”"], answer: 1,
      hint: "Specific wins.",
      note: "A clear first customer is believable. “Everyone” sounds like she has not thought about it.", badge: "target"
    }),
    PPN(4, "Customer and Money", {
      prompt: "RideHome charges ₹25 per shared ride. In the first month, 600 rides are booked. How many rupees does it earn?",
      answer: 15000,
      hint: "600 × 25.",
      note: "₹15,000. Small, real numbers from a pilot are more convincing than huge guesses.", badge: "indian-rupee"
    }),
    PP(4, "Customer and Money", {
      prompt: "A judge asks, “How will you make money?” Which answer is best?",
      options: ["“We will figure that out later.”", "“Money is not important for us right now.”", "“A ₹25 fee per ride.”", "“Investors will give us money.”"], answer: 2,
      hint: "Clear and simple.",
      note: "A simple, clear model. Investors are funding, not a business model.", badge: "chart-column",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Proof and the ask ----------
    {
      type: "learn", door: 5,
      title: "End with proof, then a clear ask.",
      points: [["Proof", "Users, pre-orders, a pilot, a waitlist, a letter from a college"], ["The ask", "What you want from this audience, right now"], ["Be specific", "“Two colleges for a pilot in January” beats “support us”"]],
      highlightLast: true,
      side: { label: "Asks", items: [["users", "A pilot", "“One college to test with us”"], ["briefcase", "Mentors", "“Someone who knows transport rules”"], ["indian-rupee", "Money", "“₹3 lakh for 6 months”"]] }
    },
    PP(5, "Proof and Ask", {
      prompt: "Which is the strongest proof for Kavya to mention?",
      options: ["“My friends think it is a good idea.”", "“I worked very hard on it.”", "“My parents are proud of me.”", "“210 students joined our waitlist.”"], answer: 3,
      hint: "Something real that strangers did.",
      note: "A waitlist shows real interest from real users. Hard work and kind friends are nice but not proof.", badge: "badge-check"
    }),
    PP(5, "Proof and Ask", {
      prompt: "Which closing ask is best?",
      options: ["“Please support us in any way you can.”", "“Two colleges to pilot RideHome this Sankranti.”", "“Thank you so much, that’s all from my side.”", "“Does anyone have any questions for me?”"], answer: 1,
      hint: "Specific, with a when.",
      note: "A clear, specific ask tells the audience exactly how to help. Several judges may raise their hands.", badge: "handshake"
    }),
    PP(5, "Proof and Ask", {
      prompt: "What should be the LAST thing the audience hears?",
      options: ["The ask and the name of the app", "A long list of thank yous", "A disclaimer about mistakes", "The full feature list"], answer: 0,
      hint: "What should they remember?",
      note: "End with the ask and the name: “RideHome. Help us pilot it this Sankranti.” Then stop and smile.", badge: "target",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Delivery and questions (double) ----------
    {
      type: "learn", door: 6,
      title: "How you say it matters as much as what you say.",
      points: [["Pace", "Slow down. Nervous speakers rush"], ["Look at people", "Not at the ceiling or the slide"], ["Questions", "Thank, answer briefly, and admit when you don’t know"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["mic", "Delivery and Q&A", "Real stage moments"], ["trophy", "Then live pitches", "+200 for the best"]] }
    },
    PP(6, "Delivery and Questions", {
      double: true,
      prompt: "Kavya’s practice pitch takes 85 seconds. What should she do?",
      options: ["Speak faster to fit it in", "Ignore the time limit", "Skip the problem part", "Cut lines to fit 55 seconds"], answer: 3,
      hint: "Rushing makes it harder to understand.",
      note: "Cut words, not speed. Aim for 55 seconds so there is room to breathe.", badge: "timer"
    }),
    PP(6, "Delivery and Questions", {
      double: true,
      prompt: "A judge asks something Kavya does not know. Best answer?",
      options: ["Make up a confident-sounding answer", "Change the topic quickly", "“I don’t know yet; I’ll find out.”", "“That is not important for now.”"], answer: 2,
      hint: "Honesty builds trust.",
      note: "Admitting what you don’t know, with a plan to find out, earns more respect than a guess.", badge: "message-circle"
    }),
    PP(6, "Delivery and Questions", {
      double: true,
      prompt: "How many times should Kavya practise her pitch ALOUD before the event?",
      options: ["Zero, because she knows it well", "At least 5 times, out loud", "Once in her head", "Only on stage"], answer: 1,
      hint: "Reading it silently is not the same.",
      note: "Saying it aloud several times shows where you stumble and how long it really takes.", badge: "mic",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, verdict, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best pitch wins +200", prompt: "Live pitch: one person per team pitches any idea in 60 seconds using hook, problem, solution, customer, proof, ask.", note: "The host times each pitch. The room claps; the host picks the winner.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "The 60-Second Pitch Template", note: "Screenshot this. Write your pitch tonight and say it aloud 5 times.", items: TEMPLATE },
    {
      type: "end",
      joinTitle: "Join EduMoon Entrepreneurship",
      joinText: "Startup games, founder talks and real student businesses. Build something, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
