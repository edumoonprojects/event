// Digital Marketing 101 (EduMoon Entrepreneurship). For all years.
// Brew Corner, a new café near campus, has 0 followers and empty tables. Grow it to 1,000 followers and a full house.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const DM = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 45, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const DN = (round, name, extra) => DM(round, name, Object.assign({ kind: "number", time: 50 }, extra));

// The take-home card: the small business marketing checklist.
const MKT = [
  ["Know your customer", "Write one persona: name, age, what they want, how much they spend."],
  ["Post consistently", "3 to 4 good posts a week beat 10 in one day and then silence."],
  ["Hook in 2 seconds", "Start every reel with the most interesting thing. Add on-screen captions."],
  ["Show real people", "Behind the scenes, staff and happy customers beat plain logos."],
  ["Google Business Profile", "Free. Add hours, photos and the menu, and reply to every review."],
  ["Small ad tests", "Target nearby, one clear offer, small budget first, then scale what works."],
  ["Reach vs results", "Likes are nice. New customers through the door are the goal."],
  ["Measure weekly", "Reach, clicks, messages and visits. Keep what works, drop what doesn’t."]
];

window.GAME = {
  id: "digital-marketing-101",
  title: "Digital Marketing 101",
  club: "Entrepreneurship",
  tagline: "Brew Corner opened near campus with 0 followers and empty tables. Can your team market it into the busiest café in town?",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "40 minutes", level: "Beginner",
    about: "How small businesses grow online, through one story: Brew Corner (a made-up café near campus) has opened with no followers and few customers. In 6 rounds, teams pick the right customers, plan Instagram content, write reel hooks, set up Google Maps and reviews, run a ₹1,000 ad, and read the numbers that matter. It ends with every team pitching a 1-week campaign for a real local shop.",
    outcomes: "A practical marketing checklist any student can use for a club, a family business or their first freelance client, plus the difference between likes and real results.",
    tone: "Most students already scroll Instagram all day, so let them bring their own examples. Keep it practical: everything here can be tried on a real local shop this week. Brands and numbers in the game are made up.",
    extra: [["Make it real", "For the final challenge, let teams pick an actual shop near the college. The best pitch could become a real EduMoon Social Media Club project."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Marketed",
    rulesEyebrow: "How Digital Marketing 101 works", rulesTitle: "Learn the move. Make the call. Fill the café.",
    learnText: "The host shares one marketing move.", crackTitle: "Answer",
    crackText: "Pick or type Brew Corner’s best move on your phone and lock it in.",
    rulesExtra: "Faster answers score more. Speak (optional): <b>+100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Many real businesses make this mistake!", cracked: "got it right",
    next: "Next round →", finale: "Next →", winner: "are today’s top marketers!", endLine: "Brew Corner has a queue outside. Great work!"
  },
  offerEyebrow: "EduMoon Entrepreneurship · Marketing results",
  offerTitle: "Your marketer rank",
  offers: [
    { min: 0.7, icon: "crown", title: "Growth Marketer", text: "You think like a pro. Offer to run a local shop’s Instagram for a month." },
    { min: 0.45, icon: "rocket", title: "Social Media Manager", text: "Strong! Plan one week of posts for a club or business you know." },
    { min: 0.2, icon: "pen-tool", title: "Content Creator", text: "Good start. Practise writing 5 reel hooks this week." },
    { min: 0, icon: "book-open", title: "Marketing Intern", text: "Everyone starts here. Save the checklist and try one step this week." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Entrepreneurship · Digital Marketing 101",
      title: "Brew Corner opened next to campus a month ago. Great coffee, 0 followers, half-empty tables. The owner hands your team the Instagram password. Go.",
      cards: [["target", "Find the right customers"], ["film", "Posts, reels, Google Maps and ads"], ["chart-column", "Read the numbers that matter"]]
    },
    { type: "rules" },

    // ---------- Round 1: The customer ----------
    {
      type: "learn", door: 1,
      title: "Marketing starts with one question: who is it for?",
      points: [["Not “everyone”", "A message for everyone speaks to no one"], ["Make a persona", "A short, real-feeling description of your ideal customer"], ["Ask them", "Polls, chats and comments tell you what they actually want"]],
      highlightLast: true,
      side: { label: "A persona card", items: [["user", "Priya, 19", "2nd-year student, lives in the hostel"], ["clock", "Studies in cafés after 5 pm", "Needs Wi-Fi and plug points"], ["landmark", "Budget: ₹150", "Loves cold coffee and a deal"]] }
    },
    DM(1, "The Customer", {
      prompt: "Who should Brew Corner mainly target first?",
      options: ["Everyone in India who drinks coffee", "Students from the college next door", "Tourists who visit Goa every year", "Only people over 60 years old"], answer: 1,
      hint: "Who walks past the café every day?",
      note: "Start with the people closest and most likely to come: students and staff next door. Grow from there.", badge: "target"
    }),
    DM(1, "The Customer", {
      prompt: "What’s the best way to find out what students want from the café?",
      options: ["Guess from what the owner likes", "Copy a famous café in Mumbai", "Ask them: a poll, a chat, a feedback card", "Change the menu every day and see"], answer: 2,
      hint: "The answer is with the customers.",
      note: "Polls and short chats are free and fast. Customers will tell you exactly what they want.", badge: "message-circle"
    }),
    DM(1, "The Customer", {
      prompt: "Which of these is a useful customer persona?",
      options: ["“Young people who like going out with friends on weekends.”", "“People who like coffee and snacks in the evening.”", "“Students.”", "“Priya, 19, studies in cafés after 5, budget ₹150.”"], answer: 3,
      hint: "Which one could you picture as a real person?",
      note: "A specific persona tells you what to post, when, and what offer to make.", badge: "user",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Instagram content ----------
    {
      type: "learn", door: 2,
      title: "People follow people, not logos.",
      points: [["Show the people", "The barista, the regulars, the owner’s story"], ["Behind the scenes", "How the cold coffee is made, opening time, new menu tests"], ["Be consistent", "A steady rhythm beats random bursts"]],
      highlightLast: true,
      side: { label: "A simple weekly plan", items: [["film", "Monday", "Reel: making the drink of the week"], ["users", "Wednesday", "A customer story or repost"], ["star", "Saturday", "Weekend offer or event"]] }
    },
    DM(2, "Instagram Content", {
      prompt: "Which post will most likely get more people engaging?",
      options: ["A reel of the barista making the famous cold coffee", "A plain photo of the café logo", "A long text post about the café’s history", "The same menu photo, posted again"], answer: 0,
      hint: "People, action, something tasty.",
      note: "Real people and the product in action. Plain logos and repeated menus get scrolled past.", badge: "film"
    }),
    DM(2, "Instagram Content", {
      prompt: "How often should Brew Corner post?",
      options: ["10 posts in one day, then nothing for a month", "Once a year, on the café’s birthday", "3 to 4 good posts a week, steadily", "Only when the owner remembers to post"], answer: 2,
      hint: "Which one can they keep up for months?",
      note: "Consistency builds trust and keeps the café in people’s feeds. Bursts followed by silence don’t.", badge: "clock"
    }),
    DM(2, "Instagram Content", {
      prompt: "A student posts a story tagging Brew Corner with their coffee. What should the café do?",
      options: ["Ignore it, it’s just one student", "Ask them to delete it", "Report it to Instagram", "Thank them and repost it"], answer: 3,
      hint: "Free content from a happy customer.",
      note: "Customer posts are the most trusted marketing there is. Reposting also makes other customers want to be featured.", badge: "heart",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Reels and hooks ----------
    {
      type: "learn", door: 3,
      title: "You have 2 seconds before they scroll.",
      points: [["Start with the hook", "The most surprising, tasty or funny thing comes first"], ["Add captions on screen", "Many people watch with the sound off"], ["Keep it short and tight", "Cut anything that doesn’t add to the one idea"]],
      highlightLast: true,
      side: { label: "Hooks that work", items: [["zap", "A surprise", "“This ₹99 coffee beats the ₹300 ones.”"], ["message-circle", "A question", "“Where do Vizag students actually study?”"], ["target", "A promise", "“3 drinks under ₹100 you must try.”"]] }
    },
    DM(3, "Reels and Hooks", {
      prompt: "Which opening line makes the best hook for a Brew Corner reel?",
      options: ["“Hello everyone, welcome to our café, today we will show you around.”", "“This ₹99 cold coffee beats the ₹300 ones. Here’s why.”", "“Please follow us.”", "“Today is Tuesday.”"], answer: 1,
      hint: "Which one makes you want to keep watching?",
      note: "A surprising claim with a promise to explain. Greetings and “please follow” lose people in seconds.", badge: "zap"
    }),
    DM(3, "Reels and Hooks", {
      prompt: "Why should reels have captions on screen?",
      options: ["Many people watch with the sound off", "Captions make videos longer and better", "Instagram requires captions on every reel", "To hide parts of the video people shouldn’t see"], answer: 0,
      hint: "Think of people watching in class or on a bus.",
      note: "Many people scroll with sound off. On-screen captions keep them watching.", badge: "file-text"
    }),
    DM(3, "Reels and Hooks", {
      prompt: "The café’s reel is 90 seconds long and the drink appears only at the end. Best fix?",
      options: ["Make it 3 minutes long with more detail", "Add more slow shots of the café door", "Show the drink in the first 2 seconds", "Post it without any changes"], answer: 2,
      hint: "Hook first, then cut the fluff.",
      note: "Lead with the best shot and trim everything else. Short and tight keeps people to the end.", badge: "film",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Say a hook for a reel about your favourite food spot near college.", note: "One line, under 5 seconds. The room votes: would they keep watching?", points: 100 },

    // ---------- Round 4: Google Maps and SEO ----------
    {
      type: "learn", door: 4,
      title: "When someone searches “café near me”, will they find you?",
      points: [["Google Business Profile", "Free. Puts the café on Google Search and Maps"], ["Fill it completely", "Hours, photos, menu, phone number and location"], ["Reviews matter", "Ask happy customers, and reply to every review, good or bad"]],
      highlightLast: true,
      side: { label: "Profile checklist", items: [["clock", "Correct opening hours", "Wrong hours lose customers"], ["star", "Real photos", "Food, inside, outside"], ["message-circle", "Replies to reviews", "Shows you care"]] }
    },
    DM(4, "Google Maps and SEO", {
      prompt: "A student near campus searches “café near me”. What helps Brew Corner appear?",
      options: ["Posting more memes on Instagram every day", "A complete Google Business Profile", "Printing more menus for the counter", "Only putting up a bigger signboard"], answer: 1,
      hint: "Where do “near me” searches look?",
      note: "Google Search and Maps use the business profile. A complete profile with reviews helps the café show up and get chosen.", badge: "map"
    }),
    DM(4, "Google Maps and SEO", {
      prompt: "Someone leaves a 2-star review: “Coffee was cold and the Wi-Fi didn’t work.” Best response?",
      options: ["Ignore it, one review doesn’t matter", "Argue in the reply that they’re lying", "Ask friends to post 10 fake 5-star reviews", "Reply politely, apologise, say what you fixed"], answer: 3,
      hint: "Other customers read your replies too.",
      note: "A calm, helpful reply turns a bad review into proof that you care. Fake reviews break platform rules and destroy trust.", badge: "heart"
    }),
    DM(4, "Google Maps and SEO", {
      prompt: "What does SEO stand for?",
      options: ["Search Engine Optimisation", "Social Engagement Online", "Sales and Email Outreach", "Simple Easy Offers"], answer: 0,
      hint: "It’s about search engines.",
      note: "Search Engine Optimisation: making it easier for people to find you when they search.", badge: "search",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Ads on ₹1,000 ----------
    {
      type: "learn", door: 5,
      title: "Ads work when they’re aimed well.",
      points: [["Target tightly", "The right age, the right area, the right interests"], ["One clear offer", "Give people a reason to come this week"], ["Start small", "Test with a little money, then put more into what works"]],
      highlightLast: true,
      side: { label: "Brew Corner’s first ad", items: [["map", "Who", "Ages 18 to 25, within 3 km of the café"], ["star", "Offer", "“Show your college ID: 20% off this week”"], ["landmark", "Budget", "₹1,000 over 5 days"]] }
    },
    DM(5, "Ads on ₹1,000", {
      prompt: "Brew Corner has ₹1,000 for its first ad. Who should it target?",
      options: ["Everyone in India, of all ages", "People aged 18 to 25 near the café", "People living in another country", "Only people who already follow the café"], answer: 1,
      hint: "Who can actually walk in this week?",
      note: "A small budget works best on a small, nearby, relevant audience.", badge: "map"
    }),
    DM(5, "Ads on ₹1,000", {
      prompt: "Which ad message will bring the most students in this week?",
      options: ["“We are a café near your college.”", "“Best café in the world!!! Come today!!!”", "“Follow us for updates and offers.”", "“Show your college ID, get 20% off.”"], answer: 3,
      hint: "A clear offer, a clear deadline.",
      note: "One clear reason to come, and a reason to come now. Vague claims don’t move people.", badge: "target"
    }),
    DN(5, "Ads on ₹1,000", {
      prompt: "The ₹1,000 budget is spread evenly over 5 days. How many rupees per day? Type the number.",
      answer: 200,
      hint: "1,000 ÷ 5.",
      note: "₹200 a day. After 2 or 3 days, check which ad is working and move the money there.", badge: "landmark",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Reading the numbers (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: the numbers that matter. Double points.",
      points: [["Reach", "How many different people saw it"], ["Click rate", "Of the people who saw it, how many tapped? Clicks ÷ reach × 100"], ["Results", "Messages, visits and sales: the numbers that pay the rent"]],
      highlightLast: true,
      side: { label: "From screen to café", items: [["users", "Reach: 2,000", "People who saw the ad"], ["target", "Clicks: 100", "People who tapped"], ["heart", "Visits: 40", "People who came in"]] }
    },
    DM(6, "Reading the Numbers", {
      double: true,
      prompt: "What does “reach” mean?",
      options: ["How many different people saw the post", "The number of likes the post got", "How far the café is from campus", "How much the ad cost in total"], answer: 0,
      hint: "Look at the learn screen.",
      note: "Reach counts unique people who saw it. One person seeing it 3 times still counts once in reach.", badge: "users"
    }),
    DN(6, "Reading the Numbers", {
      double: true,
      prompt: "2,000 people saw the ad and 100 tapped on it. What is the click rate in percent? Type the number.",
      answer: 5,
      hint: "100 ÷ 2,000 × 100.",
      note: "5%. Compare click rates between ads to see which message works better.", badge: "chart-column"
    }),
    DM(6, "Reading the Numbers", {
      double: true,
      prompt: "Which number matters most to the café owner?",
      options: ["The number of likes on each post", "The number of followers on the page", "How many new customers came in", "The number of hashtags used per post"], answer: 2,
      hint: "Which one pays the rent?",
      note: "Likes and followers are useful signals, but customers through the door are the real goal. Ask new customers how they heard about you.", badge: "trophy",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, results, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best pitch wins +200", prompt: "Pitch a 1-week campaign for a real shop near your college, in 60 seconds.", note: "Who it’s for, 3 posts or reels, one offer, and the number you’ll measure.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "The Small Business Marketing Checklist", note: "Screenshot this. Try it on a club, a family business or your first client.", items: MKT },
    {
      type: "end",
      joinTitle: "Join the EduMoon Skills Club",
      joinText: "Careers, marketing, startups and skills games every week.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
