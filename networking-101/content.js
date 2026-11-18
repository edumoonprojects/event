// Networking 101 (EduMoon Skills Club). Beginner: for all years.
// How to talk to people at events, tech meetups and fests: introductions, good questions, listening, exiting politely, following up on LinkedIn, and keeping in touch.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const NW1 = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 40, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const NWSPOT = { kind: "bug", time: 55, step1: "What is the problem?", step2: "Tap the weak line", say1: "First pick the problem.", say2: "Now tap the weak line.", partO: "the problem", partL: "the line", lineLabel: "line", bugLabel: "The weak line is" };

// The take-home card: the networking playbook.
const NETCARD = [
  ["Show up", "Meetups, fests, hackathons, guest lectures. Go, even alone."],
  ["10-second intro", "Name, what you study or do, one interesting thing."],
  ["Ask, then listen", "“What are you working on?” Then really listen."],
  ["Give before you ask", "Share a resource, an event or a contact."],
  ["Exit politely", "“Great talking to you. Can I connect on LinkedIn?”"],
  ["Follow up in 24 hours", "A personal note: where you met and one thing you discussed."],
  ["Keep in touch", "Share an update or congratulate them now and then."],
  ["Never lead with “Get me a job”", "Build the relationship first."]
];

window.GAME = {
  id: "networking-101",
  title: "Networking 101",
  club: "Skills Club",
  tagline: "Most jobs and opportunities come through people. Learn to meet them well.",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "35 minutes", level: "Beginner",
    about: "Teja goes to his first tech meetup at a made-up innovation hub, stands in a corner for an hour and leaves without talking to anyone. In 6 rounds, teams learn how to introduce yourself, ask good questions, listen, give before asking, leave a conversation politely, follow up on LinkedIn and stay in touch. Speaking turns let students practise introductions in the room.",
    outcomes: "A 10-second introduction, conversation starters for events, polite exits, a strong follow-up message, and the habit of building relationships before asking for favours.",
    tone: "Many students are shy at events. Make it safe: start with pairs introducing themselves to the person next to them. Celebrate effort, not polish.",
    extra: [["Warm-up", "Before Round 1, ask everyone to introduce themselves to someone they do not know in 10 seconds. Then start the game."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Connected",
    rulesEyebrow: "How Networking 101 works", rulesTitle: "Learn the move. Pick the best line. Practise it live.",
    learnText: "The host shares one networking skill.", crackTitle: "Choose",
    crackText: "Pick Teja’s best move on your phone and lock it in.",
    rulesExtra: "Speaking turns: <b>+100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Most people learn this the awkward way!", cracked: "connected",
    next: "Next round →", finale: "Next →", winner: "are today’s best networkers!", endLine: "Teja made five real connections at his next meetup."
  },
  offerEyebrow: "EduMoon Skills Club · Networking level",
  offerTitle: "Your networking level",
  offers: [
    { min: 0.7, icon: "users", title: "Super Connector", text: "You build real relationships. Go to one event this month." },
    { min: 0.45, icon: "handshake", title: "Confident Networker", text: "Strong! Practise your 10-second intro aloud tonight." },
    { min: 0.2, icon: "message-circle", title: "Getting Started", text: "Good start. Send one follow-up message this week." },
    { min: 0, icon: "book-open", title: "First Event", text: "Everyone starts here. Go to one event, even just to listen." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Skills Club · First meetup",
      title: "Teja went to his first tech meetup, stood in a corner for an hour and left without talking to anyone. Can your team make his next event different?",
      cards: [["users", "Introductions, questions and listening"], ["smartphone", "Exits, follow-ups and LinkedIn"], ["trophy", "Your score decides your networking level"]]
    },
    { type: "rules" },

    // ---------- Round 1: Show up and start ----------
    {
      type: "learn", door: 1,
      title: "Networking starts with showing up and saying hello.",
      points: [["Where", "Meetups, fests, hackathons, guest lectures, community events"], ["How to start", "Find someone standing alone, or join a group of three"], ["Opening line", "“Hi, I’m Teja. Is this your first time here?”"]],
      highlightLast: true,
      side: { label: "Easy openers", items: [["message-circle", "“What brought you here today?”", ""], ["message-circle", "“How did you find the talk?”", ""], ["message-circle", "“Is this your first meetup?”", ""]] }
    },
    NW1(1, "Getting Started", {
      prompt: "Teja walks into a meetup alone. Who is easiest to approach first?",
      options: ["The main speaker mid-conversation", "A tight group of two in deep talk", "Someone standing alone", "Nobody; stay near the snacks"], answer: 2,
      hint: "Who might also be looking for someone to talk to?",
      note: "People standing alone are often relieved when someone says hello.", badge: "user"
    }),
    NW1(1, "Getting Started", {
      prompt: "Which is the most natural opening line?",
      options: ["“Please give me a job at your company.”", "“Hi, I’m Teja. What brought you here?”", "“Can you look at my resume right now?”", "Stand nearby silently and hope"], answer: 1,
      hint: "Friendly and easy to answer.",
      note: "A name and an easy question. It starts a conversation, not a transaction.", badge: "message-circle"
    }),
    NW1(1, "Getting Started", {
      prompt: "Which event is the best place to start networking as a student?",
      options: ["Only international conferences abroad", "A random office during working hours", "A stranger’s wedding", "A local tech meetup or college fest"], answer: 3,
      hint: "Local, open and friendly.",
      note: "Local meetups, fests and community events are welcoming and full of people happy to talk.", badge: "map",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: The 10-second intro ----------
    {
      type: "learn", door: 2,
      title: "Your 10-second introduction.",
      points: [["Name", "“Hi, I’m Teja.”"], ["What you do", "“3rd-year CSE, learning web development.”"], ["One interesting thing", "“I just built my club’s website.”"]],
      highlightLast: true,
      side: { label: "Avoid", items: [["x", "Your full life story", "Too long"], ["x", "“I’m just a student.”", "Undersells you"], ["x", "Only your marks", "Not a conversation starter"]] }
    },
    NW1(2, "Your Intro", {
      prompt: "Which introduction is best?",
      options: ["“I’m just a student, nothing special about me, really.”", "“My CGPA is 8.2 and I scored 92 in twelfth.”", "“Myself Teja from Vizag, born in 2004, father is…”", "“I’m Teja, 3rd-year CSE. I built our club site.”"], answer: 3,
      hint: "Name, what you do, one hook.",
      note: "Short, specific and gives the other person something to ask about.", badge: "user"
    }),
    NW1(2, "Your Intro", {
      prompt: "Why include “one interesting thing” in your intro?",
      options: ["It gives them a question", "It makes the intro longer", "It is a legal requirement", "It impresses only HR people"], answer: 0,
      hint: "Conversation fuel.",
      note: "“I built my club’s website” invites “Oh, what did you use?” and the conversation flows.", badge: "lightbulb"
    }),
    NW1(2, "Your Intro", {
      prompt: "Someone says, “I work in cybersecurity.” Best reply?",
      options: ["“Nice! What do you work on?”", "“Okay.” and silence", "“Can you hack my friend’s Instagram?”", "“Cybersecurity is boring.”"], answer: 0,
      hint: "Show interest.",
      note: "An open, curious question keeps it going. Never ask people to do anything illegal, even as a joke.", badge: "shield",
      board: true, boardLabel: "after Round 2"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Give your own 10-second introduction to the room.", note: "Name, what you do, one interesting thing.", points: 100 },

    // ---------- Round 3: Questions and listening ----------
    {
      type: "learn", door: 3,
      title: "Good networkers ask more than they talk.",
      points: [["Open questions", "“What are you working on these days?”"], ["Follow-up questions", "“How did you get into that?”"], ["Really listen", "Remember one detail to mention later"]],
      highlightLast: true,
      side: { label: "Great questions", items: [["message-circle", "“What do you enjoy most about your work?”", ""], ["message-circle", "“What would you tell a student starting out?”", ""], ["message-circle", "“Any events or communities you’d recommend?”", ""]] }
    },
    NW1(3, "Questions", {
      prompt: "Which is an open question?",
      options: ["“Do you like your job?”", "“Is your company big?”", "“What got you into data?”", "“Are you from Vizag?”"], answer: 2,
      hint: "Which cannot be answered with yes or no?",
      note: "Open questions invite stories. Yes-or-no questions often end the conversation.", badge: "message-circle"
    }),
    NW1(3, "Questions", {
      prompt: "A senior engineer shares how she switched from mechanical to software. What should Teja do?",
      options: ["Listen, then follow up", "Check his phone while she talks", "Interrupt with his own story", "Ask for a job referral immediately"], answer: 0,
      hint: "Show you are listening.",
      note: "A thoughtful follow-up shows real interest and builds trust.", badge: "ear"
    }),
    NW1(3, "Questions", {
      prompt: "Which question is great to ask an experienced professional?",
      options: ["“How much salary do you get?”", "“Any advice for a student?”", "“Can you do my assignment?”", "“Why is your company so bad?”"], answer: 1,
      hint: "Respectful and useful.",
      note: "People enjoy sharing advice. Salary and favours are too personal for a first chat.", badge: "lightbulb",
      board: true, boardLabel: "after Round 3"
    }),

    // ---------- Round 4: Give and exit ----------
    {
      type: "learn", door: 4,
      title: "Give before you ask, and leave well.",
      points: [["Give", "Share an event, an article or an introduction to someone"], ["Exit politely", "“It was great talking to you. Can I connect on LinkedIn?”"], ["Do not overstay", "5 to 10 minutes is fine at events"]],
      highlightLast: true,
      side: { label: "Polite exits", items: [["check", "“I’ll let you meet others. Great chatting!”", ""], ["check", "“Can we connect on LinkedIn?”", ""], ["x", "Walking away mid-sentence", ""]] }
    },
    NW1(4, "Give and Exit", {
      prompt: "A designer says she is looking for a good React developer for a side project. Teja knows one. Best move?",
      options: ["Say nothing", "Ask her to pay him first", "Offer to introduce them", "Tell her React is bad"], answer: 2,
      hint: "Give before you ask.",
      note: "Helpful introductions make people remember you well.", badge: "handshake"
    }),
    NW1(4, "Give and Exit", {
      prompt: "Teja wants to end a conversation and meet others. Best line?",
      options: ["Walk away without saying anything", "“Great talking! Connect on LinkedIn?”", "“You are boring, bye.”", "Pretend to take a phone call"], answer: 1,
      hint: "Warm and clear.",
      note: "A warm exit plus a way to stay in touch.", badge: "smartphone"
    }),
    NW1(4, "Give and Exit", {
      prompt: "How long should a first chat at an event usually be?",
      options: ["5 to 10 minutes", "Exactly 30 seconds", "The whole event", "Over an hour"], answer: 0,
      hint: "Others want to meet people too.",
      note: "Short and good leaves both people wanting to talk again.", badge: "timer",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Follow up ----------
    {
      type: "learn", door: 5,
      title: "The follow-up is where most people fail.",
      points: [["Within 24 hours", "While they still remember you"], ["Personal note", "Where you met and one thing you discussed"], ["No big ask yet", "Thank them; ask small, if anything"]],
      highlightLast: true,
      side: { label: "A good LinkedIn note", items: [["check", "“Hi Meena, we met at the AI meetup.”", ""], ["check", "“Loved your point about testing on real phones.”", ""], ["check", "“Would be great to stay in touch.”", ""]] }
    },
    NW1(5, "Follow Up", {
      prompt: "When should Teja send a follow-up message?",
      options: ["After two months", "Only if they message first", "Never; it looks desperate", "Within about 24 hours"], answer: 3,
      hint: "While the memory is fresh.",
      note: "Within a day, they still remember your face and conversation.", badge: "clock"
    }),
    NW1(5, "Follow Up", Object.assign({}, NWSPOT, {
      prompt: "Teja’s LinkedIn note. Which line weakens it most?",
      code: ["Hi Meena, we met at the AI meetup at RTIH yesterday.", "I enjoyed your point about testing apps on real phones.", "Please refer me to your company immediately, I need a job.", "Would be great to stay in touch."],
      outputOptions: ["A big ask too early", "It is too personal", "It has no greeting"], outputAnswer: 0, bugLine: 2,
      bugText: "asking for a referral right after one chat feels pushy. Build the relationship first",
      hint: "Which line asks for too much, too soon?",
      note: "Referrals come from trust. Stay in touch, share your work, and ask later if it fits.", badge: "x"
    })),
    NW1(5, "Follow Up", {
      prompt: "Which LinkedIn connection note is best?",
      options: ["“Hi Meena, enjoyed your talk. Stay in touch?”", "A blank request with no note", "“Hi, accept please.”", "“Hello dear, kindly accept my request.”"], answer: 0,
      hint: "Personal and specific.",
      note: "Where you met plus one detail. They remember you and accept.", badge: "smartphone",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Keep in touch (double) ----------
    {
      type: "learn", door: 6,
      title: "Relationships grow slowly. Keep in touch.",
      points: [["Share updates", "“I finished the project you suggested!”"], ["Congratulate", "New jobs, launches, talks"], ["Ask small, ask late", "Advice first; referrals only after trust"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["users", "Long-term networking", "Real choices"], ["mic", "Then the final challenge", "A live networking role-play"]] }
    },
    NW1(6, "Keep in Touch", {
      double: true,
      prompt: "Three months later, Meena posts that she got a promotion. Best move?",
      options: ["Ignore it", "Ask her to hire you now", "Just like it and forget her", "Send a short congrats"], answer: 3,
      hint: "Small, genuine touches.",
      note: "A short, sincere message keeps the relationship warm without asking for anything.", badge: "heart"
    }),
    NW1(6, "Keep in Touch", {
      double: true,
      prompt: "After 6 months of staying in touch, Teja sees an opening at Meena’s company. Best way to ask?",
      options: ["Demand a referral as a favour", "Apply and tell nobody", "Politely ask if she’d refer him", "Message 10 times in one day"], answer: 2,
      hint: "Polite, with an easy way to say no.",
      note: "“Would you be open to referring me? Happy to share my resume.” gives her an easy yes or no.", badge: "handshake"
    }),
    NW1(6, "Keep in Touch", {
      double: true,
      prompt: "Which habit builds the strongest network over time?",
      options: ["Collecting thousands of random connections", "Helping others and staying in touch", "Only messaging when you need something", "Never attending events"], answer: 1,
      hint: "Quality and generosity.",
      note: "People remember those who helped them and kept in touch. That is a real network.", badge: "users",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best networker wins +200", prompt: "Role-play: the host is a senior engineer at a meetup. Introduce yourself, ask one good question, and exit politely in 45 seconds.", note: "Intro, question, listen, exit with LinkedIn. The host picks.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "The Networking Playbook", note: "Screenshot this. Read it before your next event.", items: NETCARD },
    {
      type: "end",
      joinTitle: "Join the EduMoon Skills Club",
      joinText: "Mock interviews, resumes, internships and career games every week. Get placed, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
