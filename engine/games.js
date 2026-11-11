// EduMoon Game Zone: the list of clubs and games.
// To add a game: add one entry to `games` below (newest first is not required; `added` sorts them).
// Paths are from the main event folder, e.g. "escape-the-lab/host.html".

window.ZONE = {
  clubs: [
    { id: "coding", name: "Coding Club", icon: "code", color: "#4C9BFF", color2: "#1E4FD8", tagline: "Escape rooms, quizzes and placement rounds", about: "Learn real coding by playing. No laptop needed: every game runs on phones." },
    { id: "english", name: "English Club", icon: "message-circle", color: "#FF7A8A", color2: "#D6336C", tagline: "Speaking games, stories and debates", about: "Games where everyone talks in English, with no fear of mistakes." },
    { id: "skills", name: "Skills Club", icon: "rocket", color: "#3DDC97", color2: "#11A36A", tagline: "Careers, resumes and interview games", about: "Careers after BTech, interviews, resumes and the skills companies look for." },
    { id: "ai-lab", name: "AI Lab", icon: "bot", color: "#B58CFF", color2: "#7048E8", tagline: "Spot fakes, fix prompts, use AI smartly", about: "Learn how AI really works and how to use it well: prompts, fact-checking, the right tools and the right choices." },
    { id: "entrepreneurship", name: "Entrepreneurship", icon: "trending-up", color: "#FFA94D", color2: "#D9480F", tagline: "Pitch, price and build your startup", about: "Think like a founder: spot real ideas, find customers, price your product and pitch to investors." },
    { id: "fun", name: "Fun Zone", icon: "party-popper", color: "#2DD4BF", color2: "#0B7F78", tagline: "Quizzes, brain teasers and party games", about: "Pure fun for any crowd. Great as an opener or a break between sessions." }
  ],

  banner: {
    eyebrow: "Coming soon",
    title: "EduMoon VibeHack is coming",
    text: "Build a real project in one day with students from across Vizag. Be the first to know.",
    button: "Get notified on WhatsApp",
    url: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
  },

  games: [
    {
      club: "ai-lab", icon: "globe", title: "AI for Every Branch", added: "2026-11-10",
      desc: "AI isn’t only for CSE. See how AI is used in ECE and EEE, Mechanical, Civil, Commerce and Pharmacy, why branch knowledge is your edge, and how to start from any branch.",
      years: "All years", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "ai-every-branch/host.html", player: "ai-every-branch/"
    },
    {
      club: "ai-lab", icon: "search", title: "Data Detective", added: "2026-11-10",
      desc: "Bad data in, bad AI out. Inspect small tables for missing values, typos, duplicates, wrong units, outliers, biased samples and fake patterns before they train a bad AI.",
      years: "All years", level: "medium", time: "35 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "data-detective/host.html", player: "data-detective/"
    },
    {
      club: "entrepreneurship", icon: "heart", title: "Why Startups Fail", added: "2026-11-10",
      desc: "Play startup doctor: diagnose failing campus startups (no real need, running out of money, building too much, founder fights, ignoring customers) and find the decision that hurt most.",
      years: "All years", level: "medium", time: "35 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "why-startups-fail/host.html", player: "why-startups-fail/"
    },
    {
      club: "entrepreneurship", icon: "store", title: "Copycat or Original?", added: "2026-11-11",
      desc: "Flipkart, Ola, Swiggy, Meesho, Dream11: match Indian startups to the global models they resemble, guess what they changed to win in India, and adapt a global idea for your own campus.",
      years: "All years", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "copycat-or-original/host.html", player: "copycat-or-original/"
    },
    {
      club: "entrepreneurship", icon: "lightbulb", title: "Vizag Problems, Startup Ideas", added: "2026-11-11",
      desc: "Late-night food, bus timings, PG rooms, beach litter: turn everyday Vizag and campus problems into startup ideas, find the first customer, test it in a week and pitch it in 3 lines.",
      years: "All years", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "vizag-startup-ideas/host.html", player: "vizag-startup-ideas/"
    },
    {
      club: "entrepreneurship", icon: "briefcase", title: "Freelancing 101", added: "2026-11-10",
      desc: "Your first paying client as a student: pick a service, show samples, find clients, price the project, write the scope, take an advance, deliver on time and spot scam offers.",
      years: "2nd year onwards", level: "medium", time: "35 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "freelancing-101/host.html", player: "freelancing-101/"
    },
    {
      club: "skills", icon: "chart-column", title: "Excel Express", added: "2026-11-10",
      desc: "The spreadsheet skills every internship expects: SUM, AVERAGE, COUNTIF, IF, sort and filter, lookups, $ references and the right chart, using a club’s real-looking data.",
      years: "All years", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "excel-express/host.html", player: "excel-express/"
    },
    {
      club: "skills", icon: "mic", title: "Presentation Pro", added: "2026-11-10",
      desc: "Slides people read and talks people follow: one idea per slide, less text, strong openings, a simple structure, calm delivery, handling nerves and answering questions.",
      years: "All years", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "presentation-pro/host.html", player: "presentation-pro/"
    },
    {
      club: "fun", icon: "clock", title: "Which Came First?", added: "2026-11-10",
      desc: "Two apps, inventions, missions or landmarks: pick the older one in 20 seconds. WhatsApp or Instagram? Telephone or light bulb? Surprising timelines from India and the world.",
      years: "All years", level: "beginner", time: "30 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "which-came-first/host.html", player: "which-came-first/"
    },
    {
      club: "fun", icon: "shield", title: "Campus Survival", added: "2026-11-10",
      desc: "Funny but useful college situations: the first week, roommates, money at month end, exam-week chaos, lost ID cards and looking after yourself. Perfect for freshers.",
      years: "All years", level: "beginner", time: "30 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "campus-survival/host.html", player: "campus-survival/"
    },
    {
      club: "english", icon: "languages", title: "Tense Tamer", added: "2026-11-10",
      desc: "Fix the tense mistakes heard most in interviews and emails: “I am having”, “since 2 years”, “did you went”, “when I will reach”. Say the right version aloud.",
      years: "All years", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "tense-tamer/host.html", player: "tense-tamer/"
    },
    {
      club: "coding", icon: "list-checks", title: "Data Structures in Real Life", nocode: true, added: "2026-11-10",
      desc: "Arrays as lockers, stacks as plates and the back button, queues as the canteen line, hash maps as phonebooks, trees as folders, graphs as maps. No code needed.",
      years: "1st year onwards", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "ds-real-life/host.html", player: "ds-real-life/"
    },
    {
      club: "fun", icon: "sparkles", title: "Myth or Fact", added: "2026-11-10",
      desc: "Things everyone believes about the body, animals, space, tech, India and food. 25 seconds to call each one Myth or Fact, with the real story in one line. Ends with 8 ways to spot a myth.",
      years: "All years", level: "beginner", time: "30 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "myth-or-fact/host.html", player: "myth-or-fact/"
    },
    {
      club: "fun", icon: "search", title: "Brand Detective", added: "2026-11-10",
      desc: "No logos, just clues. Name 18 Indian and global brands from where they were founded, what they began as and who started them, with a startup lesson in every answer.",
      years: "All years", level: "beginner", time: "30 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "brand-detective/host.html", player: "brand-detective/"
    },
    {
      club: "fun", icon: "route", title: "Would You Rather: Campus Edition", added: "2026-11-10",
      desc: "Two choices, one secretly smarter: money maths, study research, science, careers, online safety and famous probability puzzles. Plus no-right-answer debates for bonus points.",
      years: "All years", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "would-you-rather/host.html", player: "would-you-rather/"
    },
    {
      club: "skills", icon: "brain", title: "Study Smart", added: "2026-11-10",
      desc: "Stop rereading and cramming. Learn the methods that actually work (self-testing, spacing, mixing, focus blocks, sleep), fix weak study plans and build a 3-day exam rescue plan.",
      years: "All years", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "study-smart/host.html", player: "study-smart/"
    },
    {
      club: "skills", icon: "mail", title: "Cold Message Challenge", added: "2026-11-10",
      desc: "Fix LinkedIn and email messages to seniors, HRs, founders and professors: personal first lines, one clear ask, short and polite, and the right follow-up. 8 rules for messages that get replies.",
      years: "2nd year onwards", level: "medium", time: "35 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "cold-message/host.html", player: "cold-message/"
    },
    {
      club: "english", icon: "languages", title: "Phrasal Power", added: "2026-11-10",
      desc: "Look into, put off, figure out, catch up: everyday phrasal verbs in college, office, tech and daily-life sentences. Spot the wrong one and leave with 10 to use today.",
      years: "All years", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "phrasal-power/host.html", player: "phrasal-power/"
    },
    {
      club: "english", icon: "message-circle", title: "Small Talk Pro", added: "2026-11-10",
      desc: "What to say after “Hi” at fests, workshops, interviews and networking events: openers, introductions, open questions, listening and exiting politely. With live practice.",
      years: "All years", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "small-talk-pro/host.html", player: "small-talk-pro/"
    },
    {
      club: "coding", icon: "code", title: "Linux Command Quest", nocode: true, added: "2026-11-10",
      desc: "Escape-room game inside a crashed college server: pwd, ls, cd, files, reading logs with grep, permissions, sudo and rescuing the server. Spot dangerous commands. Ends with a cheat sheet.",
      years: "1st year onwards", level: "beginner", time: "40 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "linux-quest/host.html", player: "linux-quest/"
    },
    {
      club: "coding", icon: "globe", title: "Cloud 101", nocode: true, added: "2026-11-10",
      desc: "Launch a college fest website in the cloud: regions, static hosting vs servers vs serverless, storage, surviving a traffic spike, budget alerts and keeping secret keys out of GitHub.",
      years: "1st year onwards", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "cloud-101/host.html", player: "cloud-101/"
    },
    {
      club: "entrepreneurship", icon: "palette", title: "Brand Builder", added: "2026-11-10",
      desc: "Build a brand for a hostel snack startup: the promise, name, story, colours, voice and first post. Catch copied logos and broken promises. Ends with an 8-step brand checklist.",
      years: "All years", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "brand-builder/host.html", player: "brand-builder/"
    },
    {
      club: "ai-lab", icon: "search", title: "Hallucination Hunter", added: "2026-11-10",
      desc: "AI sounds 100% sure. Hunt the one confidently wrong line in AI answers: fake facts, wrong dates, invented sources, buggy code and dangerous advice. Leave with 8 checks before you trust AI.",
      years: "All years", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "hallucination-hunter/host.html", player: "hallucination-hunter/"
    },
    {
      club: "ai-lab", icon: "wrench", title: "Prompt Fixer", added: "2026-11-10",
      desc: "Bad prompt, bad answer. Fix real student prompts for studies, placements and projects: add context, a clear task, a format, a role and limits. Leave with an 8-part prompt formula.",
      years: "All years", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "prompt-fixer/host.html", player: "prompt-fixer/"
    },
    {
      club: "ai-lab", icon: "swords", title: "Prompt Battle", added: "2026-11-10",
      desc: "Judge prompts and AI outputs, then 3 live battles: every team gets the same task, prompts any free AI app on one phone, and the room crowns the best result.",
      years: "All years", level: "medium", time: "40 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "prompt-battle/host.html", player: "prompt-battle/"
    },
    {
      club: "ai-lab", icon: "bot", title: "AI Tool Match", added: "2026-11-10",
      desc: "Match real student tasks to the right kind of AI tool: chat assistants, AI search with sources, tools that use your own notes, design, code and English helpers. And when to use no AI at all.",
      years: "All years", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "ai-tool-match/host.html", player: "ai-tool-match/"
    },
    {
      club: "ai-lab", icon: "scale", title: "AI Ethics Court", added: "2026-11-10",
      desc: "Your team is the jury in 6 real cases: AI in assignments, deepfakes, privacy, bias and who is responsible when AI is wrong. Pick fair verdicts, object to problem lines, argue your case.",
      years: "All years", level: "medium", time: "40 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "ai-ethics-court/host.html", player: "ai-ethics-court/"
    },
    {
      club: "entrepreneurship", icon: "handshake", title: "Investor Room", added: "2026-11-10",
      desc: "Sit on the investor side: judge student startup pitches, catch the line that makes investors say no, learn the 8-part pitch, then pitch your own campus idea in 60 seconds.",
      years: "All years", level: "medium", time: "40 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "investor-room/host.html", player: "investor-room/"
    },
    {
      club: "entrepreneurship", icon: "lightbulb", title: "Idea or Not", added: "2026-11-10",
      desc: "Real Indian startup story or made up? Then learn how big startups started small and pivoted, judge campus startup ideas, and leave with 8 questions to test any idea.",
      years: "All years", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "idea-or-not/host.html", player: "idea-or-not/"
    },
    {
      club: "entrepreneurship", icon: "tag", title: "Price It Right", added: "2026-11-10",
      desc: "Run 4 campus businesses with simple maths: cost per item, profit, break-even, margins, the real cost of discounts and smart pricing. Calculators allowed.",
      years: "All years", level: "medium", time: "40 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "price-it-right/host.html", player: "price-it-right/"
    },
    {
      club: "entrepreneurship", icon: "target", title: "Customer Hunt", added: "2026-11-10",
      desc: "Good products, no customers. Find the right customer, the right channel and the right words, then plan your first 10 customers without spending on ads.",
      years: "All years", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "customer-hunt/host.html", player: "customer-hunt/"
    },
    {
      club: "ai-lab", icon: "zap", title: "AI Agents and Automation", nocode: true, added: "2026-11-06",
      desc: "Chatbots answer, agents act. Design ClubBot to run boring club work: tools, steps, what to automate, what goes wrong (including hidden instructions in emails), and keeping humans in charge.",
      years: "2nd year onwards", level: "medium", time: "40 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "ai-agents/host.html", player: "ai-agents/"
    },
    {
      club: "ai-lab", icon: "bot", title: "AI Agents 2: Automate Your Club", nocode: true, added: "2026-11-11",
      desc: "Part 2 of AI Agents. Build FlowBot, a real automation for club registrations, block by block: triggers, steps, if/else conditions, data, testing and what’s worth automating.",
      years: "2nd year onwards", level: "medium", time: "40 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "ai-agents-2/host.html", player: "ai-agents-2/"
    },
    {
      club: "ai-lab", icon: "brain", title: "AI for Exams, the Right Way", nocode: true, added: "2026-11-11",
      desc: "Use AI to understand and remember, not to copy: prompts that explain, checking AI’s facts, making AI quiz you, planning revision, and the rules for assignments and exams.",
      years: "All years", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "ai-for-exams/host.html", player: "ai-for-exams/"
    },
    {
      club: "ai-lab", icon: "sparkles", title: "How ChatGPT Works", nocode: true, added: "2026-11-06",
      desc: "What really happens when you type a prompt: AI vs machine learning, training, tokens and next-word prediction, why AI makes things up, context windows, and using it well and safely.",
      years: "All years", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "how-chatgpt-works/host.html", player: "how-chatgpt-works/"
    },
    {
      club: "ai-lab", icon: "chart-column", title: "Machine Learning 101", nocode: true, added: "2026-11-06",
      desc: "The hostel mess wastes food every night. Build a model to predict plates eaten: features and labels, supervised vs unsupervised, training and test data, overfitting, accuracy traps and bias. No maths needed.",
      years: "All years", level: "medium", time: "40 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "machine-learning-101/host.html", player: "machine-learning-101/"
    },
    {
      club: "entrepreneurship", icon: "target", title: "Digital Marketing 101", added: "2026-11-06",
      desc: "Brew Corner, a new café near campus, has 0 followers. Find the right customers, plan posts, write reel hooks, set up Google Maps, run a ₹1,000 ad and read the numbers that matter.",
      years: "All years", level: "beginner", time: "40 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "digital-marketing-101/host.html", player: "digital-marketing-101/"
    },
    {
      club: "fun", icon: "map", title: "Vizag Quiz", added: "2026-11-05",
      desc: "How well do you know the City of Destiny? Landmarks, the city’s names, its hills of faith, Araku and Borra, the port and the Navy. Every fact checked.",
      years: "All years", level: "beginner", time: "30 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "vizag-quiz/host.html", player: "vizag-quiz/"
    },
    {
      club: "fun", icon: "film", title: "Guess the Movie from the Plot", added: "2026-11-11",
      desc: "One funny line, four movies, 25 seconds. Telugu blockbusters, India’s biggest hits and a hard round for true fans.",
      years: "All years", level: "beginner", time: "30 min", group: "6–40 · teams or solo", needs: "Phones or Screen Deck",
      host: "guess-the-movie/host.html", player: "guess-the-movie/"
    },
    {
      club: "fun", icon: "globe", title: "India Quiz", added: "2026-11-05",
      desc: "States, the freedom struggle, the Constitution, rivers, ISRO and culture, with plenty of Andhra Pradesh links. Core GK for aptitude tests, learned through play.",
      years: "All years", level: "beginner", time: "30 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "india-quiz/host.html", player: "india-quiz/"
    },
    {
      club: "fun", icon: "chart-column", title: "Higher or Lower", added: "2026-11-05",
      desc: "One number on the screen. Is the real answer higher or lower? 18 fast calls on your body, animals, space, tech, India and sports.",
      years: "All years", level: "beginner", time: "30 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "higher-or-lower/host.html", player: "higher-or-lower/"
    },
    {
      club: "fun", icon: "lightbulb", title: "Brain Teasers", added: "2026-11-05",
      desc: "Riddles, number puzzles, patterns, lateral thinking and logic traps. Each round teaches one thinking trick that helps in puzzle interview rounds.",
      years: "All years", level: "medium", time: "30 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "brain-teasers/host.html", player: "brain-teasers/"
    },
    {
      club: "fun", icon: "message-circle", title: "Tech Taboo", added: "2026-11-05",
      desc: "Guess the tech word from a Taboo-style clue, then play live Taboo: describe a word without the banned ones. Everyday tech, coding, AI, security and startups.",
      years: "All years", level: "beginner", time: "30 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "tech-taboo/host.html", player: "tech-taboo/"
    },
    {
      club: "fun", icon: "users", title: "Icebreaker Bingo", added: "2026-11-05",
      desc: "A mingle game for a room of strangers. Find people for 18 bingo squares, and learn how to start, keep and end a conversation with anyone.",
      years: "All years", level: "beginner", time: "30 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "icebreaker-bingo/host.html", player: "icebreaker-bingo/"
    },
    {
      club: "skills", icon: "chart-column", title: "Aptitude Arena", added: "2026-11-05",
      desc: "The quant and reasoning questions from placement aptitude tests: percentages, averages, speed and work, profit, reasoning and a mock test. A shortcut every round.",
      years: "All years", level: "medium", time: "40 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "aptitude-arena/host.html", player: "aptitude-arena/"
    },
    {
      club: "skills", icon: "timer", title: "Time Boss", added: "2026-11-05",
      desc: "Priya has exams, a hackathon and an internship in the same fortnight. Urgent vs important, planning, procrastination, phones and crunch week. Then plan your own tomorrow.",
      years: "All years", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "time-boss/host.html", player: "time-boss/"
    },
    {
      club: "coding", icon: "search", title: "SQL Detective", added: "2026-11-05",
      desc: "The Hostel A laptop vanished. Query the hostel database with SELECT, WHERE, ORDER BY, GROUP BY and JOIN, fix broken queries, and crack the case.",
      years: "2nd year onwards", level: "medium", time: "40 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "sql-detective/host.html", player: "sql-detective/"
    },
    {
      club: "coding", icon: "shield", title: "Capture the Flag Lite", added: "2026-11-05",
      desc: "Your first CTF. Find flags in page source, decode Base64 and hex, break Caesar and ROT13, learn how passwords are stored and spot fake links. Ethics first.",
      years: "All years", level: "medium", time: "40 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "ctf-lite/host.html", player: "ctf-lite/"
    },
    {
      club: "coding", icon: "globe", title: "Web Basics", added: "2026-11-05",
      desc: "How the web works, then HTML, CSS and JavaScript. Fix broken pages and put together the CampusFest site. No coding experience needed.",
      years: "1st & 2nd year", level: "beginner", time: "40 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "web-basics/host.html", player: "web-basics/"
    },
    {
      club: "coding", icon: "globe", title: "Build Your Portfolio Website", added: "2026-11-11",
      desc: "Plan a portfolio that gets replies: the 5 sections, project cards that impress, simple design rules, and how to publish it free on GitHub Pages.",
      years: "All years", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "portfolio-website/host.html", player: "portfolio-website/"
    },
    {
      club: "english", icon: "swords", title: "Debate Duel", added: "2026-11-05",
      desc: "Claim, reason, example. Strong vs weak arguments, polite rebuttals, fallacies, evidence and closings. Then live 1-vs-1 debates.",
      years: "All years", level: "medium", time: "40 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "debate-duel/host.html", player: "debate-duel/"
    },
    {
      club: "english", icon: "book-a", title: "Word Power", added: "2026-11-05",
      desc: "Confused pairs, stronger words, phrases that confuse people outside India, idioms, formal vs casual English and placement vocabulary.",
      years: "All years", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "word-power/host.html", player: "word-power/"
    },
    {
      club: "english", icon: "mic", title: "Public Speaking 101", added: "2026-11-05",
      desc: "Beat nerves, open with a hook, structure with PREP, use your voice and body, recover from blanking out and close strong. Then your first 1-minute talk.",
      years: "All years", level: "beginner", time: "40 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "public-speaking-101/host.html", player: "public-speaking-101/"
    },
    {
      club: "coding", icon: "chart-column", title: "Placement Round 2: DSA", added: "2026-11-04",
      desc: "The advanced sequel. Product-company style questions on arrays, strings, binary search, sorting and Big O, then interview-style thinking. Every team gets an offer letter.",
      years: "Final year", level: "advanced", time: "40 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "placement-round-2/host.html", player: "placement-round-2/"
    },
    {
      club: "entrepreneurship", icon: "rocket", title: "Startup Tycoon", added: "2026-11-04",
      desc: "Run CampusEats, a hostel food delivery startup, for 6 months. Pick the problem, find customers, price, market, choose a co-founder and face an investor. Then pitch your own idea.",
      years: "All years", level: "medium", time: "40 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "startup-tycoon/host.html", player: "startup-tycoon/"
    },
    {
      club: "english", icon: "mail", title: "Email Doctor", added: "2026-11-04",
      desc: "Diagnose and fix real student emails to professors and HR: subject lines, openings, asking for extensions, follow-ups and tone traps. Leave with reusable templates.",
      years: "All years", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "email-doctor/host.html", player: "email-doctor/"
    },
    {
      club: "entrepreneurship", icon: "landmark", title: "Money 101", added: "2026-11-04",
      desc: "Ravi got his first salary. CTC vs in-hand, a simple budget, emergency funds, compounding, credit card and EMI traps, and spotting money scams.",
      years: "All years", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "money-101/host.html", player: "money-101/"
    },
    {
      club: "skills", icon: "user", title: "LinkedIn Glow-Up", added: "2026-11-04",
      desc: "The third Ravi game. Fix his photo, headline, About section and projects, write a real first post, and learn to message seniors so they reply.",
      years: "2nd year onwards", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "linkedin-glow-up/host.html", player: "linkedin-glow-up/"
    },
    {
      club: "english", icon: "mic", title: "Interview English Pro", added: "2026-11-04",
      desc: "The English of the technical round: explain your project in 60 seconds, say “I don’t know” like a pro, structure answers and drop filler words. Ends with a 90-second pitch.",
      years: "Final year", level: "advanced", time: "40 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "interview-english-pro/host.html", player: "interview-english-pro/"
    },
    {
      club: "coding", icon: "route", title: "Git Rescue", added: "2026-11-04",
      desc: "11:40 PM, the night before submission, and a teammate overwrote the project. Commits, undo, branches, merge conflicts and GitHub, to save it in time.",
      years: "2nd & 3rd year", level: "medium", time: "40 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "git-rescue/host.html", player: "git-rescue/"
    },
    {
      club: "coding", icon: "key", title: "Python Escape", added: "2026-11-04",
      desc: "Escape the Lab, in Python. 5 locked doors: variables, if/elif, loops with range, lists and a bug door. Crack them all to spell the master key.",
      years: "1st & 2nd year", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "python-escape/host.html", player: "python-escape/"
    },
    {
      club: "skills", icon: "file-user", title: "HR Round", added: "2026-11-03",
      desc: "The Resume Rescue sequel: Ravi got the interview call. Teams pick his best answers to real HR questions, from “Tell me about yourself” to bonds and relocation, and win an offer letter.",
      years: "Final year", level: "advanced", time: "40 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "hr-round/host.html", player: "hr-round/"
    },
    {
      club: "coding", icon: "search", title: "Bug Hunt", added: "2026-11-03",
      desc: "The lab exam is tomorrow and every program almost works. Find the bug in 6 rounds of C: = vs ==, off-by-one, scanf, switch, endless loops and more.",
      years: "2nd & 3rd year", level: "medium", time: "40 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "bug-hunt/host.html", player: "bug-hunt/"
    },
    {
      club: "skills", icon: "shield", title: "Scam or Safe", added: "2026-11-03",
      desc: "Real-looking KYC messages, UPI requests, fake internships, look-alike links and “digital arrest” calls. Decide scam or safe, find the red flag, and take home 8 rules.",
      years: "All years", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "scam-or-safe/host.html", player: "scam-or-safe/"
    },
    {
      club: "english", icon: "users", title: "GD Arena", added: "2026-11-03",
      desc: "Learn the group discussion moves evaluators score: starting, disagreeing politely, handling a dominator, bringing people in and summarising. Then play a live GD.",
      years: "3rd year onwards", level: "medium", time: "40 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "gd-arena/host.html", player: "gd-arena/"
    },
    {
      club: "ai-lab", icon: "sparkles", title: "Spot the AI", nocode: true, added: "2026-11-03",
      desc: "Human or AI? Then the twist: guessing isn’t reliable. Catch AI giving confident wrong answers, write better prompts, and learn when AI helps and when it doesn’t.",
      years: "All years", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "spot-the-ai/host.html", player: "spot-the-ai/"
    },
    {
      club: "skills", icon: "file-text", title: "Resume Rescue", added: "2026-10-29",
      desc: "Ravi sent 50 applications and got 0 replies. Teams find the red flags, rewrite weak lines and fix his resume in 6 rounds. Then every student scores their own resume.",
      years: "2nd year onwards", level: "medium", time: "40 min", group: "6–30 · teams or solo", needs: "Phones only",
      host: "resume-rescue/host.html", player: "resume-rescue/"
    },
    {
      club: "skills", icon: "search", title: "Internship Hunt", added: "2026-11-11",
      desc: "Help Kavya land her first internship: where real internships are posted, what to send, how to write to a startup, how to spot fake pay-to-join offers, and how to make the internship count.",
      years: "2nd year onwards", level: "beginner", time: "40 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "internship-hunt/host.html", player: "internship-hunt/"
    },
    {
      club: "english", icon: "spell-check", title: "Desi English Fixer", added: "2026-10-29",
      desc: "“Myself Ravi”, “I am having one doubt”, “Kindly do the needful”. Fix 18 everyday English habits for interviews and emails, then get your own fix list.",
      years: "All years", level: "beginner", time: "40 min", group: "6–30 · teams or solo", needs: "Phones only",
      host: "english-fixer/host.html", player: "english-fixer/"
    },
    {
      club: "skills", icon: "compass", title: "Life After BTech: Career Map", added: "2026-10-29",
      desc: "Learn 8 real career paths after BTech: guess the job, bust career myths, fix a 4-year plan. Then every student finds their own best-fit path.",
      years: "1st & 2nd year", level: "beginner", time: "40 min", group: "6–30 · teams or solo", needs: "Phones only",
      host: "career-map/host.html", player: "career-map/"
    },
    {
      club: "english", icon: "film", title: "Movie Story Time: Baahubali", added: "2026-10-29",
      desc: "Hear the Baahubali story in simple English, learn 20 power words like usurp, clandestine and magnanimous, guess what happens next, and speak if you dare.",
      years: "All years", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "Phones only",
      host: "movie-story-time/host.html", player: "movie-story-time/"
    },
    {
      club: "english", icon: "film", title: "Movie Story Time: RRR", added: "2026-11-11",
      desc: "Hear the RRR story in simple English, learn 20 power words like infiltrate, dilemma and unyielding, guess what happens next, and speak if you dare.",
      years: "All years", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "Phones only",
      host: "movie-story-rrr/host.html", player: "movie-story-rrr/"
    },
    {
      club: "english", icon: "zap", title: "Telugu to English Rapid Fire", added: "2026-11-11",
      desc: "Everyday Telugu lines from the hostel, class, WhatsApp and interviews: pick the natural English in 25 seconds. Learn to think in meaning, not word by word.",
      years: "All years", level: "beginner", time: "30 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "telugu-rapid-fire/host.html", player: "telugu-rapid-fire/"
    },
    {
      club: "coding", icon: "briefcase", title: "Placement Round", added: "2026-10-29",
      desc: "5 rounds of real placement-style questions: /, %, patterns, functions, strings and an interview question. Every team gets an offer letter.",
      years: "2nd year onwards", level: "medium", time: "35 min", group: "6–30 · teams or solo", needs: "Phones only",
      host: "placement-round/host.html", player: "placement-round/"
    },
    {
      club: "coding", icon: "lock", title: "Escape the Lab", added: "2026-10-29",
      desc: "5 locked doors, 5 C concepts: variables, if-else, loops, bugs and arrays. Crack them all to spell the master key.",
      years: "1st & 2nd year", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "Phones only",
      host: "escape-the-lab/host.html", player: "escape-the-lab/"
    },
    {
      club: "coding", icon: "globe", title: "What Happens When You Tap?", nocode: true, added: "2026-10-28",
      desc: "How the internet works, from a tap on Instagram to a data centre and back. Quiz rounds and word hunts.",
      years: "All years", level: "beginner", time: "25 min", group: "Any size · solo", needs: "Phones only",
      host: "edumoon-live/host.html", player: "edumoon-live/"
    }
  ]
};
