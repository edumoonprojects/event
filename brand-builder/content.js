// Brand Builder (EduMoon Entrepreneurship). For all years.
// Build a brand for a made-up campus startup: name, promise, story, colours, voice, first post, and staying consistent and original.
// All startups are made up.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const BB = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 45, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
// "Find the weak branding choice" questions use the bug door.
const OFFBRAND = { kind: "bug", time: 60, step1: "What’s the problem?", step2: "Tap the weak choice", say1: "First pick the problem.", say2: "Now tap the weak choice.", partO: "the problem", partL: "the line", lineLabel: "line", bugLabel: "The weak choice is" };

const BRAND = [
  ["One promise", "What you always deliver, in one line."],
  ["A name people can say", "Short, easy to spell, easy to search, not already taken."],
  ["A real story", "Why you started. Honest beats dramatic."],
  ["2 or 3 colours, 1 or 2 fonts", "Use them everywhere, every time."],
  ["One voice", "Friendly, bold, calm… pick one and stick to it."],
  ["Original only", "No copied logos, characters, posters or photos."],
  ["Show real customers", "With permission. Real beats perfect."],
  ["Keep the promise", "Your brand is what people say when you’re not in the room."]
];

window.GAME = {
  id: "brand-builder",
  title: "Brand Builder",
  club: "Entrepreneurship",
  tagline: "A logo isn’t a brand. Build one people remember and trust.",
  art: window.STORY_ART,
  guide: {
    years: "All years · no design skills needed", time: "35 minutes", level: "Beginner",
    about: "Teams build a brand for a made-up campus startup, a late-night snack delivery called Midnight Bites. In 6 rounds they choose the promise, the name, the story, the colours and fonts, the voice and the first post, catch weak branding choices (copied logos, confusing names, mixed styles) and learn why keeping the promise matters more than any logo.",
    outcomes: "What a brand really is (a promise people trust), how to pick a name, story, colours and voice, why consistency and originality matter, and an 8-step brand checklist for clubs and startups.",
    tone: "Students think branding means a cool logo. Keep coming back to the promise: what do customers feel and say about you? Encourage teams to use what they learn for their own club pages too.",
    extra: [["Make it real", "For the final challenge, let teams brand their own club, college fest or startup idea instead of Midnight Bites."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "On brand",
    rulesEyebrow: "How Brand Builder works", rulesTitle: "Make the choice. Build the brand.",
    learnText: "The host shares one part of a strong brand.", crackTitle: "Build",
    crackText: "Pick your answer on your phone and lock it in.",
    rulesExtra: "Weak-choice questions: <b>100</b> for the problem + <b>100</b> for the line. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Many real brands make this mistake!", cracked: "stayed on brand",
    next: "Next round →", finale: "Next →", winner: "built the strongest brand!", endLine: "Now go build yours!"
  },
  offerEyebrow: "EduMoon Entrepreneurship · Brand results",
  offerTitle: "Your brand strength",
  offers: [
    { min: 0.7, icon: "crown", title: "Brand Master", text: "Promise, story, style and voice: you get all of it. Brand your club next." },
    { min: 0.45, icon: "palette", title: "Brand Builder", text: "Strong! Write your brand’s promise in one line this week." },
    { min: 0.2, icon: "pen-tool", title: "Brand Sketcher", text: "Good start. Pick 2 colours and use only those for a month." },
    { min: 0, icon: "book-open", title: "Blank Canvas", text: "Everyone starts here. Save the 8-step checklist." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Entrepreneurship · Brand Builder",
      title: "Two friends start a late-night snack delivery for hostels. The food is great. Nobody remembers them. Can your team build them a brand?",
      cards: [["palette", "Name, story, colours and voice"], ["search", "Catch weak branding choices"], ["handshake", "Learn why trust beats any logo"]]
    },
    { type: "rules" },

    // ---------- Round 1: The promise ----------
    {
      type: "learn", door: 1,
      title: "A brand is a promise, not a logo.",
      points: [["The promise", "What customers can always count on"], ["Specific", "“Hot snacks at your hostel gate in 20 minutes, till 2 AM”"], ["Keep it", "Every broken promise weakens the brand"]],
      highlightLast: true,
      side: { label: "Midnight Bites", items: [["store", "What", "Late-night snacks"], ["users", "For whom", "Hostel students"], ["clock", "Promise?", "Let’s decide"]] }
    },
    BB(1, "The Promise", {
      prompt: "Which brand promise is strongest for Midnight Bites?",
      options: ["“The best food in the whole universe, every time.”", "“Hot snacks at your gate in 20 min, till 2 AM.”", "“We are passionate about food.”", "“Quality and excellence.”"], answer: 1,
      hint: "Specific, believable, useful.",
      note: "Specific and checkable. Customers know exactly what to expect.", badge: "target"
    }),
    BB(1, "The Promise", {
      prompt: "What IS a brand, really?",
      options: ["Just the logo on the packaging", "Just the colours used everywhere", "What people think and feel about you", "The company’s registration number"], answer: 2,
      hint: "What do people say about you when you’re not there?",
      note: "Logos and colours help people recognise you. Trust comes from keeping the promise.", badge: "heart"
    }),
    BB(1, "The Promise", {
      prompt: "Midnight Bites promises 20 minutes, but orders often take an hour. What happens to the brand?",
      options: ["People stop trusting it", "Nothing changes, the logo is still good", "It gets famous for being slow", "Prices automatically go up"], answer: 0,
      hint: "Broken promises.",
      note: "Fix the promise or fix the delivery. A great logo can’t cover a broken promise.", badge: "clock",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: The name ----------
    {
      type: "learn", door: 2,
      title: "A good name is easy to say, spell and search.",
      points: [["Easy", "Say it once, people can type it"], ["Hints at what you do", "Or at the feeling"], ["Check it’s free", "Instagram handle, domain, and that no one else uses it"]],
      highlightLast: true,
      side: { label: "Name checks", items: [["mic", "Say it aloud", "Is it clear?"], ["search", "Search it", "Is it taken?"], ["globe", "Handle and domain", "Available?"]] }
    },
    BB(2, "The Name", {
      prompt: "Which name works best for the late-night snack delivery?",
      options: ["“XQZ Foodz Pvt Solutionz”", "“Midnight Bites”", "“The Food Company of Good Taste and Quality”", "“Swiggy 2”"], answer: 1,
      hint: "Short, clear, says when and what.",
      note: "Short, easy to say and spell, and it tells you exactly when and what.", badge: "star"
    }),
    BB(2, "The Name", {
      prompt: "Why is naming your startup “Swiggy 2” a bad idea?",
      options: ["It’s too short to remember", "It copies another brand: confusing and risky", "Numbers in names are illegal", "It’s a great idea, people already know it"], answer: 1,
      hint: "Whose name is it?",
      note: "Using another company’s brand name can break trademark law. Build your own identity.", badge: "shield"
    }),
    BB(2, "The Name", {
      prompt: "You picked a name. What should you check BEFORE printing anything?",
      options: ["Nothing, just print it", "The handle and domain are free", "Your horoscope and lucky numbers", "That it’s very long and unique"], answer: 1,
      hint: "Is it really available?",
      note: "Five minutes of searching can save you from reprinting everything later.", badge: "search",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: The story ----------
    {
      type: "learn", door: 3,
      title: "People remember stories, not features.",
      points: [["Why you started", "A real moment or problem"], ["Who you are", "Real people, not a faceless company"], ["Honest", "Don’t invent drama; real is more relatable"]],
      highlightLast: true,
      side: { label: "Story parts", items: [["user", "The founders", "Two hostel friends"], ["clock", "The moment", "Hungry at 1 AM, nothing open"], ["sparkles", "The fix", "Midnight Bites"]] }
    },
    BB(3, "The Story", {
      prompt: "Which brand story connects best with hostel students?",
      options: ["“We are a leading provider of food solutions for students across the city.”", "“In exams we were hungry at 1 AM, so we cooked for our wing.”", "“Founded in 2026.”", "“We have big dreams.”"], answer: 1,
      hint: "Which one feels like a real person?",
      note: "A real, relatable moment makes people feel “that’s me”.", badge: "heart"
    }),
    BB(3, "The Story", Object.assign({}, OFFBRAND, {
      prompt: "Midnight Bites’ About section. Which line hurts the brand?",
      code: ["Started by two hostel friends who were always hungry during exams.", "We cook fresh snacks every night in our licensed kitchen.", "We deliver to 4 hostels, until 2 AM.", "We are India’s No. 1 food brand, trusted by 10 crore people."],
      outputOptions: ["It’s a fake, unbelievable claim that destroys trust", "It’s too humble", "Nothing, it’s perfect"], outputAnswer: 0, bugLine: 3,
      bugText: "an obviously false claim makes people doubt the honest lines above it",
      hint: "Which line isn’t true?",
      note: "Honest and small beats fake and big. Never make false claims about your business.", badge: "shield"
    })),
    BB(3, "The Story", {
      prompt: "Where should the founders’ story show up?",
      options: ["Nowhere, it’s private to the founders", "Only in a PDF nobody ever opens", "Bio, pinned post, packaging, chats", "Only printed at the bottom of the bill"], answer: 2,
      hint: "Where do customers see you?",
      note: "Tell the same short story everywhere people meet your brand.", badge: "message-circle",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Tell the story of your club or a startup idea in 3 sentences: who, the moment, the fix.", note: "20 seconds. The room claps for the most relatable story.", points: 100 },

    // ---------- Round 4: Look and feel ----------
    {
      type: "learn", door: 4,
      title: "Pick a look, then use it everywhere.",
      points: [["2 or 3 colours", "One main, one or two supporting"], ["1 or 2 fonts", "One for headings, one for text"], ["Same everywhere", "Posts, menu, packaging, stickers"]],
      highlightLast: true,
      side: { label: "Midnight Bites style", items: [["palette", "Colours", "Night blue + warm yellow"], ["pen-tool", "Fonts", "1 bold, 1 simple"], ["store", "Everywhere", "Same look"]] }
    },
    BB(4, "Look and Feel", {
      prompt: "Which colour choice fits Midnight Bites best?",
      options: ["Night blue and warm yellow", "12 random bright colours mixed together", "A different colour scheme every post", "Only grey, to look serious"], answer: 0,
      hint: "Midnight + warm food.",
      note: "Colours that match the name and feeling make the brand instantly recognisable.", badge: "palette"
    }),
    BB(4, "Look and Feel", Object.assign({}, OFFBRAND, {
      prompt: "Midnight Bites’ first week of Instagram posts. Which one breaks the brand?",
      code: ["Monday: night blue post, yellow title, menu.", "Wednesday: night blue post, yellow title, a customer’s photo (with permission).", "Friday: hot pink and green post with 5 different fonts.", "Sunday: night blue post, yellow title, weekend offer."],
      outputOptions: ["Nothing, variety is good", "It breaks the look, so people won’t recognise it as Midnight Bites", "It’s too blue"], outputAnswer: 1, bugLine: 2,
      bugText: "a completely different style makes the post look like another brand",
      hint: "Which one doesn’t look like the others?",
      note: "Consistency is how people recognise you while scrolling fast.", badge: "list-checks"
    })),
    BB(4, "Look and Feel", {
      prompt: "For the logo, which idea is best?",
      options: ["A famous cartoon character holding a burger", "A big food brand’s logo in a new colour", "A crescent moon with a bite out", "A free logo found on Google Images"], answer: 2,
      hint: "Original and simple.",
      note: "Original and simple works small (on a sticker) and big. Copying others’ characters or logos can get you taken down.", badge: "star",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Voice ----------
    {
      type: "learn", door: 5,
      title: "Your brand has a voice. Keep it the same.",
      points: [["Pick a personality", "Friendly, funny, calm, bold"], ["Write like it", "Captions, replies, menus, even complaints"], ["Stay kind", "Funny is fine; mean is never on brand"]],
      highlightLast: true,
      side: { label: "Midnight Bites voice", items: [["message-circle", "Friendly", "Like a hostel friend"], ["sparkles", "A little funny", "Exam jokes"], ["heart", "Always kind", "Even to complaints"]] }
    },
    BB(5, "Voice", {
      prompt: "Which caption sounds like Midnight Bites’ friendly, fun voice?",
      options: ["“Dear valued customers, kindly note the availability of food items.”", "“Studying till 2? Same. Hot maggi at your gate in 20. Order now.”", "“BUY NOW!!! LIMITED!!!”", "“Food.”"], answer: 1,
      hint: "Like a friend in your wing.",
      note: "Friendly, relatable, clear action. That’s a voice people want to follow.", badge: "message-circle"
    }),
    BB(5, "Voice", {
      prompt: "A customer posts: “Order came 40 minutes late, food was cold.” Best on-brand reply?",
      options: ["“Not our problem, the traffic was bad that night.”", "Delete the comment", "“Sorry, not our promise. Replacement sent by DM.”", "Ignore it"], answer: 2,
      hint: "Kind, own it, fix it.",
      note: "How you handle a mistake shows your brand more than any post.", badge: "handshake"
    }),
    BB(5, "Voice", {
      prompt: "Why should the voice stay the same across Instagram, WhatsApp and the menu?",
      options: ["It doesn’t matter at all", "It feels like one real personality", "To save ink when printing menus", "WhatsApp requires the same voice"], answer: 1,
      hint: "Would you trust a friend who changes personality every day?",
      note: "A consistent voice feels like a real, reliable personality.", badge: "users",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Launch (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: launch the brand.",
      points: [["First post", "Story + promise + how to order"], ["Real people", "Founders’ faces, real customers with permission"], ["Keep showing up", "Same look, same voice, same promise"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game!"], ["rocket", "Launch choices", ""], ["award", "Then your brand strength", ""]] }
    },
    BB(6, "Launch", {
      double: true,
      prompt: "Which first Instagram post should Midnight Bites launch with?",
      options: ["A copied stock photo of fancy food from another country", "The founders with their first batch, the story and “DM to order”", "Just the logo, no text", "A meme with no link to the brand"], answer: 1,
      hint: "Real, story, promise, action.",
      note: "Real people, a real story and a clear action make a strong first impression.", badge: "rocket"
    }),
    BB(6, "Launch", Object.assign({}, OFFBRAND, {
      double: true,
      prompt: "Midnight Bites’ launch plan. Which step is the mistake?",
      code: ["Post the founders’ story with the brand colours.", "Put a small moon sticker on every packet.", "Print a popular movie star’s photo on the flyer to get attention.", "Ask happy customers if we can share their reviews."],
      outputOptions: ["Using a celebrity’s photo without permission can bring legal trouble and looks fake", "Stickers are too small", "Nothing, it’s perfect"], outputAnswer: 0, bugLine: 2,
      bugText: "you can’t use a celebrity’s photo to promote your business without their permission",
      hint: "Whose photo is it?",
      note: "Use your own photos and original designs. Borrowed fame can backfire fast.", badge: "shield"
    })),
    BB(6, "Launch", {
      double: true,
      prompt: "6 months later, what will matter MOST for Midnight Bites’ brand?",
      options: ["How many times they changed the logo", "Whether they kept the promise every night", "How many colours they used in posts", "A longer, more professional name"], answer: 1,
      hint: "Back to Round 1.",
      note: "The promise, kept every day, is the brand. Everything else helps people remember it.", badge: "trending-up",
      board: true, boardLabel: "after Round 6"
    }),

    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "In 45 seconds: brand your own club, fest or startup idea. Name, promise, colours and voice.", note: "The room claps; the host picks the most memorable brand.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "8-Step Brand Checklist", note: "Screenshot this. Use it for your club, fest or startup.", items: BRAND },
    {
      type: "end",
      joinTitle: "Join the EduMoon community",
      joinText: "Startup games, pitch practice and real projects every week. Build your own idea, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
