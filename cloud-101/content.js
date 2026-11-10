// Cloud 101 (EduMoon Coding Club). For 1st year onwards.
// What the cloud really is, servers vs serverless, storage, hosting a site, scaling, costs and keeping keys safe.
// Kept provider-neutral; AWS, Google Cloud and Azure appear only as examples. Free plans and prices change, so none are quoted.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const CL = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 40, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
// "Find the risky step in this cloud plan" questions use the bug door.
const RISK = { kind: "bug", time: 60, step1: "What’s the problem?", step2: "Tap the risky step", say1: "First pick the problem.", say2: "Now tap the risky step.", partO: "the problem", partL: "the step", lineLabel: "step", bugLabel: "The risky step is" };

const CLOUDWORDS = [
  ["Cloud", "Computers in someone else’s data centre that you rent over the internet."],
  ["Region", "A group of data centres in one area, like Mumbai or Hyderabad."],
  ["Virtual server", "A rented computer in the cloud that you control fully."],
  ["Serverless", "You upload code; the cloud runs it only when needed."],
  ["Object storage", "Store files (images, videos, backups) and get a link to each."],
  ["Static hosting", "Host a website of plain HTML, CSS and JS files, often free."],
  ["Scaling", "Add more power when traffic grows, remove it when it drops."],
  ["Pay as you go", "Pay for what you use. Set a budget alert on day 1."],
  ["Secret keys", "Passwords for your cloud. Never put them in GitHub."],
  ["Shared responsibility", "The provider secures the data centre; you secure your settings."]
];

window.GAME = {
  id: "cloud-101",
  title: "Cloud 101",
  club: "Coding Club",
  tagline: "Where your apps actually live. No servers in your hostel room needed.",
  art: window.STORY_ART,
  guide: {
    years: "1st year onwards · no cloud experience needed", time: "35 minutes", level: "Beginner",
    about: "Every app students use (Instagram, UPI, the college portal) runs in the cloud. In 6 rounds, teams launch a made-up college fest website and learn what the cloud really is, regions, virtual servers vs serverless, storage, hosting a site, handling a traffic spike, controlling costs and keeping secret keys safe. They catch the risky step in cloud plans and leave with 10 cloud words that come up in interviews.",
    outcomes: "What the cloud is and why companies use it, the difference between servers, serverless and static hosting, how scaling and pay-as-you-go work, and two habits that prevent disasters (budget alerts and never committing keys).",
    tone: "Keep it concrete with the fest-website story. AWS, Google Cloud and Azure are only examples; the ideas are the same across all of them. Prices and free plans change, so the game doesn’t quote any.",
    extra: [["Next step", "Students who enjoy this can join a cloud community or a cloud user group, and try hosting a simple site on a free static host."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Deployed",
    rulesEyebrow: "How Cloud 101 works", rulesTitle: "Launch the fest site. Make the right cloud choices.",
    learnText: "The host explains one cloud idea.", crackTitle: "Deploy",
    crackText: "Pick your answer on your phone and lock it in.",
    rulesExtra: "Risky-step questions: <b>100</b> for the problem + <b>100</b> for the step. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Real companies get it wrong too!", cracked: "deployed it",
    next: "Next round →", finale: "Next →", winner: "are today’s cloud architects!", endLine: "The fest site is live!"
  },
  offerEyebrow: "EduMoon Coding Club · Cloud results",
  offerTitle: "Your cloud rank",
  offers: [
    { min: 0.7, icon: "crown", title: "Cloud Architect", text: "You understand how real apps run. Try hosting your own site this week." },
    { min: 0.45, icon: "globe", title: "Cloud Builder", text: "Strong! Learn the difference between a server and serverless in depth." },
    { min: 0.2, icon: "route", title: "Cloud Explorer", text: "Good start. Read the 10 cloud words once more." },
    { min: 0, icon: "book-open", title: "On the Ground", text: "Everyone starts here. Save the 10 words; they’ll come up in interviews." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Coding Club · Cloud 101",
      title: "Your college fest needs a website by Friday. 10,000 students will visit on launch day. Nobody has a server. Welcome to the cloud.",
      cards: [["globe", "What the cloud really is"], ["zap", "Survive a traffic spike"], ["shield", "Avoid surprise bills and leaked keys"]]
    },
    { type: "rules" },

    // ---------- Round 1: What is the cloud? ----------
    {
      type: "learn", door: 1,
      title: "The cloud is someone else’s computers that you rent.",
      points: [["Data centres", "Huge buildings full of servers, run by companies like AWS, Google and Microsoft"], ["You rent over the internet", "Minutes to start, no buying hardware"], ["Regions", "Data centres in many places, including Mumbai and Hyderabad"]],
      highlightLast: true,
      side: { label: "Why companies use it", items: [["clock", "Fast to start", "Minutes, not months"], ["trending-up", "Grows with you", "10 users or 10 lakh"], ["indian-rupee", "Pay for use", "No big upfront cost"]] }
    },
    CL(1, "What Is the Cloud?", {
      prompt: "What is “the cloud”, really?",
      options: ["Something in the sky that stores data", "Computers in data centres that you rent over the internet", "A special type of Wi-Fi", "Your phone’s gallery"], answer: 1,
      hint: "Where do the computers physically sit?",
      note: "The cloud is real hardware in data centres. You just don’t own or maintain it.", badge: "globe"
    }),
    CL(1, "What Is the Cloud?", {
      prompt: "Your fest site’s visitors are mostly in Andhra Pradesh. Which region should you pick?",
      options: ["A region in the USA", "A region in India, like Mumbai or Hyderabad", "Any random one", "Antarctica"], answer: 1,
      hint: "Closer means faster.",
      note: "A nearby region means lower delay. Some data must also stay in India by law or policy.", badge: "map"
    }),
    CL(1, "What Is the Cloud?", {
      prompt: "Why would a startup use the cloud instead of buying its own servers?",
      options: ["Cloud is always free", "Servers are illegal", "Start fast, pay for what you use, and grow without buying hardware", "The cloud never fails"], answer: 2,
      hint: "Speed, cost and growth.",
      note: "No big upfront cost, quick to start, easy to grow. (It isn’t free, and it can fail, so plan for that.)", badge: "rocket",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Ways to run code ----------
    {
      type: "learn", door: 2,
      title: "Three ways to put your site online.",
      points: [["Static hosting", "Plain HTML, CSS, JS files. Cheap or free (GitHub Pages works like this)"], ["Virtual server", "A full rented computer. You install and manage everything"], ["Serverless", "Upload a function; it runs only when someone calls it"]],
      highlightLast: true,
      side: { label: "Pick by need", items: [["file-text", "Just pages?", "Static hosting"], ["code", "Full control?", "Virtual server"], ["zap", "Small backend tasks?", "Serverless"]] }
    },
    CL(2, "Ways to Run Code", {
      prompt: "The fest site is just HTML, CSS and JavaScript with event info. Simplest way to host it?",
      options: ["Rent 5 big virtual servers", "Static hosting", "Buy a server for the hostel", "A database cluster"], answer: 1,
      hint: "No backend needed.",
      note: "Static hosting serves files directly. Cheap, fast and almost nothing to manage.", badge: "file-text"
    }),
    CL(2, "Ways to Run Code", {
      prompt: "You need a small piece of code that sends a confirmation email when someone registers. Good fit?",
      options: ["A serverless function that runs only when a registration happens", "A server running 24×7 for this one job", "Your laptop, always on", "Nothing, skip emails"], answer: 0,
      hint: "It only needs to run sometimes.",
      note: "Serverless is ideal for small, occasional tasks. You don’t pay for idle time.", badge: "mail"
    }),
    CL(2, "Ways to Run Code", {
      prompt: "When does a virtual server make the most sense?",
      options: ["For a single static page", "Never", "When you need full control: custom software, long-running programs or special setups", "For storing photos"], answer: 2,
      hint: "Full computer, full control.",
      note: "More control, more responsibility: you handle updates and security on it.", badge: "code",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Storage ----------
    {
      type: "learn", door: 3,
      title: "Different data, different storage.",
      points: [["Object storage", "Files like images, videos and PDFs, each with a link"], ["Databases", "Structured data like registrations, names and scores"], ["Backups", "Copies in another place, in case something breaks"]],
      highlightLast: true,
      side: { label: "Fest site data", items: [["star", "Event photos", "Object storage"], ["users", "Registrations", "A database"], ["shield", "Copies", "Backups"]] }
    },
    CL(3, "Storage", {
      prompt: "Where should the fest’s 2,000 event photos go?",
      options: ["Inside the database as text", "In the website’s code folder on GitHub", "Object storage, with a link for each photo", "On one volunteer’s phone"], answer: 2,
      hint: "Big files that need links.",
      note: "Object storage is made for files at scale. Keep big media out of your code repo.", badge: "star"
    }),
    CL(3, "Storage", {
      prompt: "Where should registrations (name, college, event, phone) be stored?",
      options: ["A database with access controls", "A public text file", "In the website’s HTML", "An Instagram post"], answer: 0,
      hint: "Structured and private.",
      note: "A database keeps structured data searchable, and access rules keep personal data private.", badge: "users"
    }),
    CL(3, "Storage", {
      prompt: "Why keep backups in a different place from the main data?",
      options: ["To use more space", "So one failure or mistake doesn’t destroy both copies", "It’s required for websites", "To make it slower"], answer: 1,
      hint: "Don’t keep all eggs in one basket.",
      note: "A backup in the same place can be lost with the original.", badge: "shield",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Name an app you use daily. Guess what it stores in object storage and in a database.", note: "20 seconds. The room claps for the best guess.", points: 100 },

    // ---------- Round 4: Scaling ----------
    {
      type: "learn", door: 4,
      title: "Scaling: handle 10 users or 10,000.",
      points: [["Traffic spikes", "Launch day, results day, ticket sales"], ["Scale out", "Add more copies of your app behind a load balancer"], ["Auto scaling", "The cloud adds and removes copies based on traffic"]],
      highlightLast: true,
      side: { label: "Spike helpers", items: [["globe", "CDN", "Copies of files close to users"], ["users", "Load balancer", "Shares traffic across servers"], ["trending-up", "Auto scaling", "Grows and shrinks for you"]] }
    },
    CL(4, "Scaling", {
      prompt: "Fest passes go on sale at 6 PM. Thousands will rush in at once. Best plan?",
      options: ["One small server and hope", "Auto scaling and a load balancer, tested before 6 PM", "Tell students to visit one by one", "Turn off the site"], answer: 1,
      hint: "More copies when needed.",
      note: "Auto scaling adds capacity during the rush. Test it with a fake rush first.", badge: "zap"
    }),
    CL(4, "Scaling", {
      prompt: "What does a CDN (content delivery network) do?",
      options: ["Deletes old files", "Writes your code", "Stores copies of your images and files close to users, so pages load faster", "Sends SMS"], answer: 2,
      hint: "Copies, closer to people.",
      note: "A student in Vizag gets files from a nearby location instead of across the world.", badge: "globe"
    }),
    CL(4, "Scaling", Object.assign({}, RISK, {
      prompt: "The team’s launch-day plan. Which step is risky?",
      code: ["Put images on a CDN.", "Turn on auto scaling for the registration app.", "Never test with fake traffic. We’ll see on launch day.", "Watch the dashboard during the sale."],
      outputOptions: ["It’s too careful", "Skipping a load test means surprises happen live, in front of everyone", "Nothing, it’s perfect"], outputAnswer: 1, bugLine: 2,
      bugText: "test with simulated traffic before launch so problems show up early, not live",
      hint: "When do you want to find problems?",
      note: "Good plan, one gap. Always rehearse a spike before the real one.", badge: "timer",
      board: true, boardLabel: "after Round 4"
    })),

    // ---------- Round 5: Costs ----------
    {
      type: "learn", door: 5,
      title: "Pay as you go, and watch the meter.",
      points: [["You pay for usage", "Time running, storage used, data sent"], ["Forgotten things cost money", "A server left running for months"], ["Budget alerts", "Get an email before costs cross your limit"]],
      highlightLast: true,
      side: { label: "Cost habits", items: [["indian-rupee", "Budget alert", "On day 1"], ["clock", "Turn off what you don’t use", ""], ["list-checks", "Check the bill weekly", ""]] }
    },
    CL(5, "Costs", {
      prompt: "First thing to set up in a new cloud account, before building anything?",
      options: ["A budget alert, so you’re warned before costs grow", "10 servers", "A logo", "Nothing"], answer: 0,
      hint: "Avoid surprises.",
      note: "Many students get a shock bill from something left running. Alerts prevent that.", badge: "indian-rupee"
    }),
    CL(5, "Costs", {
      prompt: "The fest is over. The site gets almost no visitors. What should you do?",
      options: ["Leave everything running forever", "Shut down or scale down servers you don’t need, and keep a backup", "Double the servers", "Delete everything without a backup"], answer: 1,
      hint: "Don’t pay for idle.",
      note: "Scale down when traffic drops. Pay-as-you-go only saves money if you actually turn things off.", badge: "trending-up"
    }),
    CL(5, "Costs", {
      prompt: "Why is static hosting usually the cheapest way to run a simple site?",
      options: ["It uses no internet", "There’s no server running your code all the time; it just serves files", "It’s illegal to charge", "It runs on your phone"], answer: 1,
      hint: "What’s running between visits?",
      note: "Nothing to keep running means very little to pay for.", badge: "file-text",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Security (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: security. Double points!",
      points: [["Secret keys are passwords", "Anyone with them can use your account, and your money"], ["Never in GitHub", "Bots scan public repos for keys within minutes"], ["Shared responsibility", "The provider secures buildings; you secure your settings"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game!"], ["lock", "Keys and access", ""], ["award", "Then your cloud rank", ""]] }
    },
    CL(6, "Security", Object.assign({}, RISK, {
      double: true,
      prompt: "A student’s deploy steps. Which one is dangerous?",
      code: ["Write the website code.", "Paste my cloud secret key into config.js.", "Push everything to a public GitHub repo.", "Turn on a budget alert."],
      outputOptions: ["The budget alert is unnecessary", "Nothing, it’s fine", "The secret key will be public once pushed, and anyone can misuse it"], outputAnswer: 2, bugLine: 1,
      bugText: "keys in code end up on GitHub. Keep secrets in the cloud’s secret settings or environment variables, never in code",
      hint: "What happens to config.js after step 3?",
      note: "Leaked keys can rack up huge bills in hours. Keep secrets out of code, always.", badge: "lock"
    })),
    CL(6, "Security", {
      double: true,
      prompt: "You accidentally pushed a secret key to GitHub. What should you do FIRST?",
      options: ["Delete the repo and hope", "Disable or rotate the key in your cloud account immediately", "Wait and see", "Tell nobody"], answer: 1,
      hint: "Deleting the file doesn’t remove it from history or from bots that already copied it.",
      note: "Kill the key first. Then clean the repo, and check your bill and activity.", badge: "shield"
    }),
    CL(6, "Security", {
      double: true,
      prompt: "In the cloud, who is responsible for your app’s settings, like who can access your data?",
      options: ["The cloud company handles everything", "Nobody", "The government", "You. The provider secures the data centre; you secure your own setup"], answer: 3,
      hint: "Shared responsibility.",
      note: "Many data leaks happen because of wrong settings, like storage left open to the public.", badge: "users",
      board: true, boardLabel: "after Round 6"
    }),

    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "In 30 seconds: explain how you’d host the fest site, from code to live, using 4 cloud words from today.", note: "The room counts the words. The host picks the clearest plan.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "10 Cloud Words for Interviews", note: "Screenshot this. You’ll hear these in every tech interview.", items: CLOUDWORDS },
    {
      type: "end",
      joinTitle: "Join the EduMoon Coding Club",
      joinText: "Coding games, contests and real projects every week. Learn with your college friends.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
