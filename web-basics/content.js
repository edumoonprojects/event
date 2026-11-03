// Web Basics (EduMoon Coding Club). For 1st and 2nd year.
// How the web works, then HTML, CSS and JavaScript, then fixing bugs and building a page.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end
// Door kinds: "choice", "number", "bug" (what happens, then tap the buggy line)

const WQ = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 45, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const WN = (round, name, extra) => WQ(round, name, Object.assign({ kind: "number", time: 50 }, extra));
const WBUG = { kind: "bug", time: 70, step1: "What happens in the browser?", step2: "Tap the buggy line", say1: "First pick what happens.", say2: "Now tap the line with the bug." };

// The take-home card: a web starter cheat sheet.
const WEBSHEET = [
  ["HTML, CSS, JS", "HTML is the structure, CSS is the style, JavaScript is the behaviour."],
  ["URL parts", "https:// is the protocol, campusfest.in is the domain, /events is the path."],
  ["DNS", "The internet’s phonebook: it turns a domain into an IP address."],
  ["Status codes", "200 OK · 404 Not Found · 500 Server Error."],
  ["HTML must-knows", "<h1> to <h6>, <p>, <a href>, <img src alt>, <div>."],
  ["CSS must-knows", ".class and #id selectors · color · margin is outside, padding is inside."],
  ["JS gotchas", "2 + \"2\" is \"22\" · IDs are case-sensitive · typeof [] is \"object\"."],
  ["Mobile-ready", "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">"]
];

window.GAME = {
  id: "web-basics",
  title: "Web Basics",
  club: "Coding Club",
  tagline: "Every website you use is built from three languages. Learn how the web works, then build and fix pages.",
  art: window.STORY_ART,
  guide: {
    years: "1st and 2nd year (no coding experience needed)", time: "40 minutes", level: "Beginner", mono: true,
    about: "A first look at how websites work. In 6 rounds, teams learn what happens when you type a URL, the HTML tags every page uses, CSS basics, a few JavaScript surprises, how to find bugs in all three, and how the pieces fit into a real page. The story: building a site for the college fest, CampusFest (a made-up event).",
    outcomes: "A clear picture of the web (URLs, DNS, status codes), the core tags and properties of HTML and CSS, three classic JavaScript gotchas, and the confidence to start a personal portfolio site.",
    tone: "Many 1st years think web development is hard. Keep repeating: HTML is just labelled boxes. When you reveal, read the code aloud like a sentence (“an image, with the source photo dot jpg”).",
    extra: [["Got a laptop?", "After a reveal, open any free online HTML editor and paste the code to show the result live. It isn’t needed to play."],
      ["Next step for students", "Suggest they build a one-page portfolio this week: a heading, a photo, a paragraph and links to their projects. Today’s cheat sheet covers all of it."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Built",
    rulesEyebrow: "How Web Basics works", rulesTitle: "Learn the piece. Read the code. Build the page.",
    learnText: "The host shows one piece of the web.", crackTitle: "Answer",
    crackText: "Pick or type your answer on your phone and lock it in.",
    rulesExtra: "Bug questions: <b>100</b> for what happens + <b>100</b> for the line. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Every web developer has made this mistake!", cracked: "got it right",
    next: "Next round →", finale: "Next →", winner: "are today’s top web builders!", endLine: "The CampusFest site is live!"
  },
  offerEyebrow: "EduMoon Coding Club · Web ranks",
  offerTitle: "Your web developer rank",
  offers: [
    { min: 0.7, icon: "crown", title: "Front-End Pro", text: "You read HTML, CSS and JS with ease. Build your portfolio site this week." },
    { min: 0.45, icon: "code", title: "Web Builder", text: "Strong! Make one page with a heading, an image and a button that does something." },
    { min: 0.2, icon: "pen-tool", title: "Page Maker", text: "Good start. Practise the tags on the cheat sheet in an online editor." },
    { min: 0, icon: "book-open", title: "First Tag", text: "Everyone starts with <h1>. Save the cheat sheet and try it tonight." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Coding Club · Web Basics",
      title: "CampusFest needs a website by Friday, and the club picked your team to build it. Do you know how the web actually works?",
      cards: [["globe", "How the web works"], ["code", "HTML, CSS and JavaScript"], ["trophy", "Your score decides your developer rank"]]
    },
    { type: "rules" },

    // ---------- Round 1: How the web works ----------
    {
      type: "learn", door: 1,
      title: "What happens when you type a URL?",
      points: [["DNS finds the address", "campusfest.in is turned into an IP address, like 203.0.113.7"], ["The browser asks the server", "“Please send me /events”"], ["The server replies", "With HTML, CSS and JS, plus a status code like 200 OK"]],
      highlightLast: true,
      code: ["https://www.cityfoods.in/menu?veg=yes"],
      output: "Left to right: protocol, domain, path, query"
    },
    WQ(1, "How the Web Works", {
      prompt: "In this URL, which part is the domain?",
      code: ["https://www.campusfest.in/events?day=2"],
      options: ["https://", "www.campusfest.in", "/events", "?day=2"], answer: 1,
      hint: "It’s the name you’d buy from a domain seller.",
      note: "www.campusfest.in. https:// is how to talk, /events is which page, and ?day=2 is extra information for that page.", badge: "globe"
    }),
    WQ(1, "How the Web Works", {
      prompt: "What does DNS do?",
      options: ["Makes websites load faster", "Stores your passwords", "Turns a domain name into an IP address, like a phonebook", "Designs web pages"], answer: 2,
      hint: "Computers find each other by numbers, not names.",
      note: "DNS is the internet’s phonebook. You remember names; computers need numbers.", badge: "search"
    }),
    WN(1, "How the Web Works", {
      prompt: "Which HTTP status code means “Not Found”? Type the number.",
      answer: 404,
      hint: "You’ve seen it on broken links.",
      note: "404. 200 means OK and 500 means the server itself broke.", badge: "x",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: HTML ----------
    {
      type: "learn", door: 2,
      title: "HTML is labelled boxes.",
      points: [["Tags come in pairs", "<p>Text</p>: open, content, close"], ["Some tags have attributes", "<a href=\"…\"> says where a link goes"], ["Some tags close themselves", "<img src=\"photo.jpg\" alt=\"…\"> has no </img>"]],
      highlightLast: true,
      code: ["<h1>CampusFest 2026</h1>", "<p>Three days of tech and music.</p>", "<a href=\"events.html\">See events</a>"],
      output: "A big heading, a paragraph and a link"
    },
    WQ(2, "HTML", {
      prompt: "Which tag makes the biggest, most important heading on a page?",
      options: ["<head>", "<h6>", "<h1>", "<heading>"], answer: 2,
      hint: "Headings go from 1 to 6.",
      note: "<h1>. <h6> is the smallest. <head> is a different thing: the invisible part with the title and settings.", badge: "file-text"
    }),
    WQ(2, "HTML", {
      prompt: "Which line makes a working link to the events page?",
      options: ["<a href=\"events.html\">Events</a>", "<link>events.html</link>", "<a src=\"events.html\">Events</a>", "<href=\"events.html\">Events</href>"], answer: 0,
      hint: "The tag is <a>, and the attribute is “hypertext reference”.",
      note: "<a href=\"…\">. Images use src; links use href. Mixing them up is one of the most common beginner bugs.", badge: "route"
    }),
    WQ(2, "HTML", {
      prompt: "Why should every <img> have an alt attribute?",
      options: ["It makes the image load faster", "It adds a border", "It’s read aloud by screen readers and shown if the image fails to load", "It sets the image size"], answer: 2,
      hint: "Think about a person who can’t see the image.",
      note: "alt text describes the image for blind users and appears when the image breaks. Good alt text is part of a good website.", badge: "heart",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: CSS ----------
    {
      type: "learn", door: 3,
      title: "CSS makes it look good.",
      points: [["Selector, then rules", "h1 { color: orange; } styles every h1"], [".card and #main", "A dot for a class (many elements), a hash for an id (one element)"], ["The box model", "padding is space inside the border, margin is space outside it"]],
      highlightLast: true,
      code: [".card {", "  padding: 16px;", "  margin: 8px;", "  border: 2px solid orange;", "}"],
      output: "A box with breathing room inside and outside"
    },
    WQ(3, "CSS", {
      prompt: "Which CSS property changes the colour of text?",
      options: ["color", "font-color", "text-color", "foreground"], answer: 0,
      hint: "It’s the shortest one, in American spelling.",
      note: "color. CSS uses American spelling, so “colour” won’t work.", badge: "palette"
    }),
    WQ(3, "CSS", {
      prompt: "Which selector styles every element with class=\"card\"?",
      options: ["#card", ".card", "card", "*card"], answer: 1,
      hint: "Class: dot. Id: hash.",
      note: ".card. #card would style the one element with id=\"card\", and plain card would look for a <card> tag.", badge: "target"
    }),
    WQ(3, "CSS", {
      prompt: "The text inside a button is touching its border. Which property adds space INSIDE the border?",
      options: ["margin", "border", "gap", "padding"], answer: 3,
      hint: "Margin pushes other things away. What pads the inside?",
      note: "padding. Margin is outside the border, padding is inside.", badge: "pen-tool",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Explain to the room in 20 seconds: what do HTML, CSS and JavaScript each do?", note: "Try a comparison: a house, a person, a car…", points: 100 },

    // ---------- Round 4: JavaScript ----------
    {
      type: "learn", door: 4,
      title: "JavaScript makes it do things, with a few surprises.",
      points: [["It reacts", "Clicks, typing and scrolling can run code"], ["+ with text joins", "If either side is text, + glues them together"], ["Some answers look strange", "Learn the famous ones now, before they bite you"]],
      highlightLast: true,
      code: ["let count = 0;", "count = count + 1;", "console.log(\"Likes: \" + count);"],
      output: "Likes: 1"
    },
    WQ(4, "JavaScript", {
      prompt: "What does this print?",
      code: ["console.log(2 + \"2\");"],
      options: ["4", "22", "Error", "NaN"], answer: 1,
      hint: "One side is text.",
      note: "\"22\". When one side is a string, + joins instead of adding. This bug shows up in real forms that read numbers from input boxes.", badge: "zap"
    }),
    WN(4, "JavaScript", {
      prompt: "What number does this print?",
      code: ["let x = 5;", "x += 3;", "x = x * 2;", "console.log(x);"],
      answer: 16,
      hint: "Go line by line. x += 3 means x = x + 3.",
      trace: [["x = 5", "5"], ["x += 3", "8"], ["x = x * 2", "16"]],
      note: "16. Tracing line by line, writing x’s value each time, is how you avoid mistakes.", badge: "list-checks"
    }),
    WQ(4, "JavaScript", {
      prompt: "What does this print?",
      code: ["console.log(typeof []);"],
      options: ["array", "list", "object", "undefined"], answer: 2,
      hint: "In JavaScript, arrays are a special kind of something else.",
      note: "\"object\". Arrays are objects in JavaScript. Use Array.isArray() to check for an array.", badge: "code",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Find the bug ----------
    {
      type: "learn", door: 5,
      title: "When a page breaks, read it like the browser does.",
      points: [["Browsers don’t crash on HTML mistakes", "They guess, and you get a weird page instead"], ["CSS skips what it can’t read", "One missing ; can break more than one line"], ["JavaScript is case-sensitive", "likeBtn and likebtn are different names"]],
      highlightLast: true,
      side: { label: "Where to look", items: [["file-text", "HTML", "Spelling of file names and tags"], ["palette", "CSS", "A missing ; or :"], ["code", "JavaScript", "Names must match exactly"]] }
    },
    WQ(5, "Find the Bug", Object.assign({}, WBUG, {
      prompt: "The photo is saved as photo.jpg. What happens, and which line has the bug?",
      code: ["<h1>Ravi’s Portfolio</h1>", "<img src=\"phto.jpg\" alt=\"Ravi smiling\">", "<p>I build web pages.</p>"],
      outputOptions: ["The image is broken and the alt text shows instead", "The whole page is blank", "Everything works fine"], outputAnswer: 0, bugLine: 1,
      bugText: "phto.jpg is a typo. Fix: src=\"photo.jpg\"",
      hint: "Read every letter of the file name.",
      note: "One typo and the image breaks. This is exactly why alt text matters: the page still says what should be there.", badge: "search"
    })),
    WQ(5, "Find the Bug", Object.assign({}, WBUG, {
      prompt: "Meant to make the heading orange and big. What happens, and which line has the bug?",
      code: ["h1 {", "  color: orange", "  font-size: 40px;", "}"],
      outputOptions: ["Neither the colour nor the size works", "Only the colour works", "Both work"], outputAnswer: 0, bugLine: 1,
      bugText: "the missing ; after orange. CSS reads “orange font-size: 40px” as one broken value and skips it",
      hint: "What separates one CSS rule from the next?",
      note: "One missing semicolon broke two lines. When CSS does nothing, check for ; and : first.", badge: "palette"
    })),
    WQ(5, "Find the Bug", Object.assign({}, WBUG, {
      prompt: "The Like button for the fest page. What happens when you click it, and which line has the bug?",
      code: ["<button id=\"likeBtn\">Like</button>", "<script>", "  const btn = document.getElementById(\"likebtn\");", "  btn.onclick = () => alert(\"Liked!\");", "</script>"],
      outputOptions: ["It shows “Liked!”", "An error: nothing happens on click", "The button disappears"], outputAnswer: 1, bugLine: 2,
      bugText: "likebtn doesn’t match likeBtn. IDs are case-sensitive, so btn is null",
      hint: "Compare the id in line 1 with the one in line 3, letter by letter.",
      note: "getElementById found nothing, so btn is null and the next line throws an error. Open the browser console (F12) and you’ll see it.", badge: "x",
      board: true, boardLabel: "after Round 5"
    })),

    // ---------- Round 6: Build the page (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: put the page together. Double points.",
      points: [["Three files, one page", "index.html, style.css and script.js"], ["HTML links the others", "<link> for CSS in the head, <script> near the end"], ["Phones first", "Most of your visitors will be on a phone"]],
      highlightLast: true,
      code: ["<head>", "  <link rel=\"stylesheet\" href=\"style.css\">", "</head>", "<body> … <script src=\"script.js\"></script></body>"],
      output: "Structure, style and behaviour, connected"
    },
    WQ(6, "Build the Page", {
      double: true,
      prompt: "Which line correctly connects style.css to your HTML page?",
      options: ["<style src=\"style.css\">", "<script src=\"style.css\"></script>", "<css>style.css</css>", "<link rel=\"stylesheet\" href=\"style.css\">"], answer: 3,
      hint: "Look at the learn screen.",
      note: "<link rel=\"stylesheet\" href=\"style.css\"> inside <head>. <script> is for JavaScript files.", badge: "route"
    }),
    WQ(6, "Build the Page", {
      double: true,
      prompt: "The CampusFest page looks tiny and zoomed out on phones. Which line fixes it?",
      options: ["<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">", "<body zoom=\"phone\">", "<meta charset=\"utf-8\">", "<title>Mobile</title>"], answer: 0,
      hint: "It tells the phone how wide the page should be.",
      note: "The viewport meta tag tells phones to use their real width. Without it, they pretend to be a desktop screen and shrink everything.", badge: "smartphone"
    }),
    WQ(6, "Build the Page", {
      double: true,
      prompt: "A website is like a person. Which match is right?",
      options: ["HTML is the clothes, CSS is the skeleton, JS is the brain", "HTML is the skeleton, CSS is the clothes, JS is the movement", "HTML is the movement, CSS is the brain, JS is the clothes", "They all do the same thing"], answer: 1,
      hint: "What gives structure? What gives style? What makes it act?",
      note: "HTML gives the structure, CSS the look, JavaScript the actions. Learn them in that order.", badge: "user",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, results, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best answer wins +200", prompt: "On paper, write the HTML for a mini portfolio: a heading with your name, a photo and a link to your GitHub.", note: "3 tags: <h1>, <img src alt> and <a href>. Read the best one aloud.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "Web Starter Cheat Sheet", note: "Screenshot this. It’s everything you need to build your first page.", items: WEBSHEET },
    {
      type: "end",
      joinTitle: "Join the EduMoon Coding Club",
      joinText: "Coding games, escape rooms and project nights every week. No laptop needed to start.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
