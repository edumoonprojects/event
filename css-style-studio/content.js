// CSS Style Studio (EduMoon Coding Club). For students who know basic HTML (after Web Basics).
// Make web pages look good: selectors and specificity, the box model, units and colours, Flexbox, Grid and media queries, and debugging CSS.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end
// Door kinds: "choice", "number", "bug" (pick what happens, then tap the buggy line)

const SS = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 50, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const SSN = (round, name, extra) => SS(round, name, Object.assign({ kind: "number", time: 60 }, extra));
const SBUG = { kind: "bug", time: 75, step1: "What happens on the page?", step2: "Tap the buggy line", say1: "First pick what happens.", say2: "Now tap the line with the bug." };

// The take-home card: 10 CSS rules worth remembering.
const CSSCARD = [
  ["p  .card  #main", "Element, class and id selectors. Classes are what you use most."],
  ["Specificity", "id beats class, class beats element. If equal, the later rule wins."],
  ["Box model", "content + padding + border, then margin outside."],
  ["box-sizing: border-box;", "Makes width include padding and border. Most sites set it everywhere."],
  ["rem and %", "rem follows the root font size (often 16px). % follows the parent."],
  ["display: flex;", "Lines items up in a row or column. justify-content and align-items place them."],
  ["display: grid;", "Rows and columns. repeat(3, 1fr) makes 3 equal columns."],
  ["@media (max-width: 600px)", "Styles for small screens. Design for phones first."],
  ["One typo = rule ignored", "CSS skips what it does not understand, silently."],
  ["DevTools", "Right-click → Inspect. See and edit any page’s CSS live."]
];

window.GAME = {
  id: "css-style-studio",
  title: "CSS Style Studio",
  club: "Coding Club",
  tagline: "HTML builds the page. CSS makes people want to stay on it.",
  art: window.STORY_ART,
  guide: {
    years: "1st and 2nd year (after Web Basics)", time: "40 minutes", level: "Medium", mono: true,
    about: "Teja’s club website works, but it looks like it was made in 1998. In 6 rounds, teams learn CSS selectors and which rule wins, the box model, units and colours, Flexbox for lining things up, Grid and media queries for phone-friendly layouts, and how to debug CSS that silently fails. They predict how a page will look and find the broken line.",
    outcomes: "Writing and reading CSS confidently: selectors, specificity, box model maths, Flexbox and Grid basics, responsive design with media queries, and debugging with DevTools.",
    tone: "CSS can feel random until the rules click. Relate it to arranging furniture in a room. If you have a laptop and projector, open DevTools on any website and change a colour live; it always gets a reaction.",
    extra: [["Live demo", "Right-click any web page, choose Inspect, and edit a CSS value in the Styles panel. Changes show instantly and nothing breaks for real."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Styled",
    rulesEyebrow: "How CSS Style Studio works", rulesTitle: "Learn the rule. Read the CSS. Predict the page.",
    learnText: "The host explains one CSS idea.", crackTitle: "Predict",
    crackText: "Work out what the page will look like and lock it in.",
    rulesExtra: "Bug questions: <b>100</b> for what happens + <b>100</b> for the line. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. CSS surprises professional developers too!", cracked: "styled it",
    next: "Next round →", finale: "Next →", winner: "are today’s style masters!", endLine: "The club website finally looks modern."
  },
  offerEyebrow: "EduMoon Coding Club · CSS level",
  offerTitle: "Your CSS level",
  offers: [
    { min: 0.7, icon: "trophy", title: "Style Master", text: "You think in boxes and flex. Redesign one page of your portfolio." },
    { min: 0.45, icon: "palette", title: "Layout Builder", text: "Strong! Try a Flexbox navbar and a Grid gallery this week." },
    { min: 0.2, icon: "pen-tool", title: "Style Learner", text: "Good start. Practise the box model maths with DevTools open." },
    { min: 0, icon: "book-open", title: "CSS Starter", text: "Everyone starts here. Play Web Basics, then come back." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Coding Club · Website makeover",
      title: "Teja’s club website works, but it looks like it was made in 1998. Can your team give it a modern makeover with CSS?",
      cards: [["palette", "Selectors, boxes, Flexbox and Grid"], ["smartphone", "Phone-friendly layouts"], ["trophy", "Your score decides your CSS level"]]
    },
    { type: "rules" },

    // ---------- Round 1: Selectors and specificity ----------
    {
      type: "learn", door: 1,
      title: "Selectors choose what to style. Specificity decides who wins.",
      points: [["p, .card, #main", "Element, class, id"], ["Specificity", "id beats class beats element"], ["A tie?", "The rule written later wins"]],
      highlightLast: true,
      code: ["p { color: black; }", ".note { color: blue; }", "#tip { color: green; }", "<p class=\"note\" id=\"tip\">Hi</p>"],
      output: "Green: the id wins"
    },
    SS(1, "Selectors", {
      prompt: "What colour is the text?",
      code: [".msg { color: red; }", "p { color: blue; }", "<p class=\"msg\">Hello</p>"],
      options: ["Blue", "Black", "Red", "Purple"], answer: 2,
      hint: "Class or element: which is more specific?",
      note: "A class beats an element selector, even though the p rule comes later.", badge: "palette"
    }),
    SS(1, "Selectors", {
      prompt: "What colour is the text?",
      code: [".btn { color: white; }", ".btn { color: yellow; }", "<a class=\"btn\">Join</a>"],
      options: ["White", "Yellow", "Both colours mixed", "The default blue"], answer: 1,
      hint: "Same specificity. Which comes last?",
      note: "Equal specificity, so the later rule wins: yellow.", badge: "check"
    }),
    SS(1, "Selectors", {
      prompt: "Which selector styles EVERY element that has class=\"card\"?",
      options: ["#card", "card", ".card", "*card"], answer: 2,
      hint: "Classes start with a dot.",
      note: ".card selects all elements with that class. #card is for one id; card alone looks for a <card> tag.", badge: "list-checks",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Box model ----------
    {
      type: "learn", door: 2,
      title: "Every element is a box: content, padding, border, margin.",
      points: [["padding", "Space inside the border"], ["border", "The line around it"], ["margin", "Space outside, pushing other boxes away"]],
      highlightLast: true,
      code: [".box {", "  width: 200px;", "  padding: 10px;", "  border: 2px solid;", "}"],
      output: "Visible width: 200 + 20 + 4 = 224px"
    },
    SSN(2, "Box Model", {
      prompt: "With the default box model, how wide is this box on screen (in px), not counting margin?",
      code: [".card {", "  width: 300px;", "  padding: 20px;", "  border: 5px solid gray;", "  margin: 10px;", "}"],
      answer: 350,
      hint: "Add padding and border on both sides. Margin is outside.",
      note: "300 + 20 + 20 + 5 + 5 = 350px. Margin adds space around it but is not part of the box.", badge: "chart-column"
    }),
    SSN(2, "Box Model", {
      prompt: "Same card, but with box-sizing: border-box. How wide is it now (in px)?",
      code: [".card {", "  box-sizing: border-box;", "  width: 300px;", "  padding: 20px;", "  border: 5px solid gray;", "}"],
      answer: 300,
      hint: "border-box puts padding and border inside the width.",
      note: "Exactly 300px. The content shrinks to make room. That is why most sites set border-box everywhere.", badge: "check"
    }),
    SS(2, "Box Model", {
      prompt: "Two cards are touching. Teja wants space between them. Which property?",
      options: ["margin", "padding", "border", "width"], answer: 0,
      hint: "Space outside the box.",
      note: "margin pushes boxes apart. padding adds space inside, between the border and the text.", badge: "route",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Units and colours ----------
    {
      type: "learn", door: 3,
      title: "Choose units that adapt to screens.",
      points: [["px", "Fixed size"], ["rem and %", "rem follows the root font size; % follows the parent"], ["vh and vw", "Percent of the screen height and width"]],
      highlightLast: true,
      code: ["html { font-size: 16px; }", "h1 { font-size: 2rem; }", ".hero { height: 50vh; }"],
      output: "h1 is 32px; hero is half the screen tall"
    },
    SSN(3, "Units and Colours", {
      prompt: "The root font size is 16px. How many px is 1.5rem?",
      answer: 24,
      hint: "1.5 × 16.",
      note: "24px. If a user sets a bigger default font for easier reading, rem sizes grow too.", badge: "spell-check"
    }),
    SS(3, "Units and Colours", {
      prompt: "A banner should always fill the full height of the screen. Which value?",
      options: ["height: 100px;", "height: 100rem;", "height: 100vh;", "height: auto;"], answer: 2,
      hint: "Viewport height.",
      note: "100vh is 100% of the screen height, on any device.", badge: "smartphone"
    }),
    SS(3, "Units and Colours", {
      prompt: "What colour is #FF0000?",
      options: ["Green", "Red", "Blue", "White"], answer: 1,
      hint: "Red, green, blue, two digits each.",
      note: "FF is full red, 00 green, 00 blue. #00FF00 is green and #FFFFFF is white.", badge: "palette",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Explain padding vs margin using a photo in a frame on a wall.", note: "Padding: space between photo and frame. Margin: space between frames. 20 seconds.", points: 100 },

    // ---------- Round 4: Flexbox ----------
    {
      type: "learn", door: 4,
      title: "Flexbox lines things up in one direction.",
      points: [["display: flex;", "On the parent. Children line up in a row"], ["justify-content", "Along the row: start, center, space-between"], ["align-items", "Across it: top, center, bottom"]],
      highlightLast: true,
      code: [".nav {", "  display: flex;", "  justify-content: space-between;", "  align-items: center;", "}"],
      output: "Logo on the left, links on the right, all vertically centred"
    },
    SS(4, "Flexbox", {
      prompt: "Teja wants a button exactly in the centre of a box, both ways. Which CSS on the box?",
      options: ["text-align: middle; vertical: center;", "position: center; float: middle;", "margin: center; padding: center;", "display: flex; place-content: center; (and align)"], answer: 3,
      hint: "The classic Flexbox centring trick.",
      note: "Flex on the parent, then centre along and across. The most searched CSS question, solved.", badge: "target"
    }),
    SS(4, "Flexbox", {
      prompt: "Three cards are in a row. What does flex-direction: column; do?",
      options: ["Puts them in a grid", "Stacks them top to bottom", "Hides two of them", "Reverses their colours"], answer: 1,
      hint: "Column means vertical.",
      note: "Items now stack vertically. Common on phones, where there is no room for a row.", badge: "list-checks"
    }),
    SS(4, "Flexbox", Object.assign({}, SBUG, {
      prompt: "A navbar that should be a row. What happens, and which line has the bug?",
      code: [".nav {", "  justify-content: space-between;", "  align-items: center;", "}", ".nav a { padding: 8px; }"],
      outputOptions: ["Links spread across the bar", "Links stay in their normal flow, not spread out", "The page crashes"], outputAnswer: 1, bugLine: 0,
      bugText: "the .nav rule never sets display: flex;, so justify-content does nothing",
      hint: "What turns Flexbox on?",
      note: "justify-content and align-items only work on a flex (or grid) container. Add display: flex;.", badge: "search",
      board: true, boardLabel: "after Round 4"
    })),

    // ---------- Round 5: Grid and media queries ----------
    {
      type: "learn", door: 5,
      title: "Grid makes rows and columns. Media queries adapt to screens.",
      points: [["display: grid;", "On the parent"], ["grid-template-columns: repeat(3, 1fr);", "Three equal columns"], ["@media (max-width: 600px) { … }", "These styles apply only on small screens"]],
      highlightLast: true,
      code: [".gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }", "@media (max-width: 600px) {", "  .gallery { grid-template-columns: 1fr; }", "}"],
      output: "3 columns on laptops, 1 column on phones"
    },
    SSN(5, "Grid and Media Queries", {
      prompt: "grid-template-columns: repeat(4, 1fr); and 12 photos. How many rows of photos?",
      answer: 3,
      hint: "12 ÷ 4.",
      note: "4 per row, so 3 rows. Grid wraps items into new rows automatically.", badge: "chart-column"
    }),
    SS(5, "Grid and Media Queries", {
      prompt: "On a phone 400px wide, which rule applies inside @media (max-width: 600px)?",
      options: ["It applies (400 is under 600)", "It never applies to phones", "It only applies above 600px", "It applies only when printing"], answer: 0,
      hint: "max-width means up to.",
      note: "max-width: 600px means screens up to 600px wide, so a 400px phone gets these styles.", badge: "smartphone"
    }),
    SS(5, "Grid and Media Queries", {
      prompt: "Most visitors to the club site use phones. What is the smart way to design?",
      options: ["Design only for laptops", "Make everything 1200px wide", "Ignore phones; they will zoom", "Phones first, then bigger screens"], answer: 3,
      hint: "Where are the users?",
      note: "Mobile first: start with the small screen, then use media queries to add columns for bigger screens.", badge: "users",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Debugging CSS (double) ----------
    {
      type: "learn", door: 6,
      title: "CSS fails silently. Learn to spot why.",
      points: [["A typo", "CSS ignores properties it does not know"], ["A missing ;", "Breaks the line it is on, often the next one too"], ["Something more specific wins", "Check DevTools: crossed-out rules lost"]],
      highlightLast: true,
      code: [".title {", "  colour: navy;", "  font-size: 2rem;", "}"],
      output: "Size changes, colour does not: “colour” is not CSS"
    },
    SS(6, "Debugging CSS", Object.assign({}, SBUG, {
      double: true,
      prompt: "What happens to the heading, and which line has the bug?",
      code: ["h1 {", "  color: white", "  background: navy;", "  padding: 12px;", "}"],
      outputOptions: ["White text on navy, as planned", "Padding works, but colour and background fail", "Nothing on the page shows"], outputAnswer: 1, bugLine: 1,
      bugText: "the missing ; joins two declarations into one invalid line, so both are ignored",
      hint: "Look at the end of each line.",
      note: "CSS reads “white background: navy” as one value for color, which is invalid, so both are dropped.", badge: "search"
    })),
    SS(6, "Debugging CSS", {
      double: true,
      prompt: "Teja’s .btn { color: red; } does nothing. DevTools shows it crossed out under #nav a { color: white; }. Why?",
      options: ["#nav a is more specific", "Red is not a valid colour", "DevTools is broken", "Buttons cannot have colours"], answer: 0,
      hint: "id plus element vs one class.",
      note: "An id selector beats a class. Make the .btn rule more specific, or restructure the selectors.", badge: "scale"
    }),
    SS(6, "Debugging CSS", Object.assign({}, SBUG, {
      double: true,
      prompt: "A card layout. What happens, and which line has the bug?",
      code: [".cards {", "  display: grid;", "  grid-template-colums: repeat(3, 1fr);", "  gap: 16px;", "}"],
      outputOptions: ["3 neat columns", "Cards stack in a single column", "The cards disappear"], outputAnswer: 1, bugLine: 2,
      bugText: "“colums” is misspelt, so the rule is ignored and the grid has one column. Fix: grid-template-columns",
      hint: "Read each property name letter by letter.",
      note: "One missing letter, no error message, wrong layout. DevTools shows invalid properties with a warning icon.", badge: "spell-check",
      board: true, boardLabel: "after Round 6"
    })),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "Describe the CSS for a phone-friendly navbar: logo left, links right, stacking on small screens.", note: "display: flex, justify-content: space-between, and a media query with flex-direction: column. The host picks.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "10 CSS Rules Worth Remembering", note: "Screenshot this. Open DevTools on any site and try them.", items: CSSCARD },
    {
      type: "end",
      joinTitle: "Join the EduMoon Coding Club",
      joinText: "Coding games, lab help and project nights every week. Learn to code, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
