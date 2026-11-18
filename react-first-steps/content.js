// React First Steps (EduMoon Coding Club). Medium: for students who know HTML, CSS and JavaScript basics.
// The most popular way to build web interfaces: components and JSX, props, state with useState, events and lists, conditional rendering, and the classic beginner bugs.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end
// Door kinds: "choice", "number", "bug" (pick what happens, then tap the buggy line)

const RX = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 55, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const RXN = (round, name, extra) => RX(round, name, Object.assign({ kind: "number", time: 60 }, extra));
const RXBUG = { kind: "bug", time: 80, step1: "What happens on screen?", step2: "Tap the buggy line", say1: "First pick what happens.", say2: "Now tap the line with the bug." };

// The take-home card: React basics.
const REACT = [
  ["Component", "A function that returns what to show: function Card() { return <div>…</div>; }"],
  ["JSX", "HTML-like code inside JavaScript. Use className, not class."],
  ["Capital names", "<Card /> is a component; <card> would be treated as an HTML tag."],
  ["Props", "Inputs from the parent: <Card title=\"AI\" /> → props.title."],
  ["State", "const [count, setCount] = useState(0); Change it only with setCount."],
  ["Events", "onClick={handleClick}. Pass the function, do not call it."],
  ["Lists", "items.map(item => <li key={item.id}>…</li>). Always give a key."],
  ["Conditions", "{loggedIn ? <Home /> : <Login />}"]
];

window.GAME = {
  id: "react-first-steps",
  title: "React First Steps",
  club: "Coding Club",
  tagline: "The most popular way to build web apps. Learn React by reading real components.",
  art: window.STORY_ART,
  guide: {
    years: "2nd year onwards (after JavaScript Jungle and CSS Style Studio)", time: "45 minutes", level: "Medium", mono: true,
    about: "Teja’s club website works, but every page repeats the same code. A senior says, “Rebuild it in React.” In 6 rounds, teams learn components and JSX, passing data with props, state with useState, click events and lists, showing things conditionally, and the classic beginner bugs. Every question shows a small real component and asks what appears on screen.",
    outcomes: "Reading and writing simple React components, using props and state correctly, handling clicks, rendering lists with keys, conditional rendering, and avoiding the three most common beginner bugs.",
    tone: "React looks strange at first because HTML lives inside JavaScript. Reassure students it is just functions that return what to show. If you have a laptop, open any online React playground and run one example live.",
    extra: [["Pre-requisite", "Students should know JavaScript functions, arrays and objects. JavaScript Jungle covers enough."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Rendered",
    rulesEyebrow: "How React First Steps works", rulesTitle: "Learn the idea. Read the component. Predict the screen.",
    learnText: "The host explains one React idea.", crackTitle: "Predict",
    crackText: "Work out what appears on screen and lock it in.",
    rulesExtra: "Bug questions: <b>100</b> + <b>100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. React trips up beginners exactly here!", cracked: "rendered it",
    next: "Next round →", finale: "Next →", winner: "are today’s React builders!", endLine: "Teja’s club site is now built from components."
  },
  offerEyebrow: "EduMoon Coding Club · React level",
  offerTitle: "Your React level",
  offers: [
    { min: 0.7, icon: "trophy", title: "Component Builder", text: "You read React well. Build a small to-do app this week." },
    { min: 0.45, icon: "code", title: "State Learner", text: "Strong! Practise useState with a counter and a toggle." },
    { min: 0.2, icon: "pen-tool", title: "JSX Explorer", text: "Good start. Revise props vs state from the card below." },
    { min: 0, icon: "book-open", title: "React Visitor", text: "Everyone starts here. Play JavaScript Jungle first." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Coding Club · Rebuild in React",
      title: "Teja’s club website repeats the same code on every page. His senior says, “Rebuild it in React.” Can your team help him take his first steps?",
      cards: [["code", "Components, props and state"], ["search", "Predict the screen and fix the bugs"], ["trophy", "Your score decides your React level"]]
    },
    { type: "rules" },

    // ---------- Round 1: Components and JSX ----------
    {
      type: "learn", door: 1,
      title: "A component is a function that returns what to show.",
      points: [["Function + JSX", "function Hello() { return <h1>Hi!</h1>; }"], ["Use it like a tag", "<Hello /> shows the heading"], ["Capital letter", "Component names must start with a capital"]],
      highlightLast: true,
      code: ["function Welcome() {", "  return <h1>Welcome to EduMoon</h1>;", "}", "", "<Welcome />"],
      output: "A heading: Welcome to EduMoon"
    },
    RXN(1, "Components", {
      prompt: "How many headings appear on screen?",
      code: ["function Title() {", "  return <h2>Fest 2026</h2>;", "}", "function Page() {", "  return <div><Title /><Title /><Title /></div>;", "}"],
      answer: 3,
      hint: "Each <Title /> shows one heading.",
      note: "Three. Write once, reuse many times. That is why components save so much repeated code.", badge: "code"
    }),
    RX(1, "Components", {
      prompt: "In JSX, which attribute adds a CSS class?",
      options: ["class=\"card\"", "className=\"card\"", "css=\"card\"", "style=\"card\""], answer: 1,
      hint: "class is a reserved word in JavaScript.",
      note: "JSX uses className because class already means something in JavaScript.", badge: "palette"
    }),
    RX(1, "Components", {
      prompt: "Why must component names start with a capital letter, like <Card />?",
      options: ["Because capital letters make the whole page load faster", "It is only a style choice and React ignores it", "So React treats it as a component, not an HTML tag", "So the browser shows the component in bold text"], answer: 2,
      hint: "<card> vs <Card>.",
      note: "Lowercase names are treated as plain HTML tags. Capitals tell React to use your component.", badge: "search",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Props ----------
    {
      type: "learn", door: 2,
      title: "Props pass data into a component, like function arguments.",
      points: [["Pass", "<Card title=\"AI Lab\" members={40} />"], ["Read", "props.title, props.members"], ["Read-only", "A component must not change its own props"]],
      highlightLast: true,
      code: ["function Card(props) {", "  return <p>{props.title}: {props.members} members</p>;", "}", "<Card title=\"AI Lab\" members={40} />"],
      output: "AI Lab: 40 members"
    },
    RX(2, "Props", {
      prompt: "What appears on screen?",
      code: ["function Greet(props) {", "  return <p>Hi, {props.name}!</p>;", "}", "<Greet name=\"Sana\" />"],
      options: ["Hi, props.name!", "Hi, {name}!", "Hi, Sana!", "Hi, undefined!"], answer: 2,
      hint: "Curly braces show the value.",
      note: "{props.name} is replaced by the value passed in: Sana.", badge: "user"
    }),
    RXN(2, "Props", {
      prompt: "What number appears on screen?",
      code: ["function Total(props) {", "  return <p>{props.a + props.b}</p>;", "}", "<Total a={12} b={30} />"],
      answer: 42,
      hint: "Numbers in curly braces stay numbers.",
      note: "a={12} and b={30} are numbers, so 12 + 30 = 42. Note: a=\"12\" would be text.", badge: "zap"
    }),
    RX(2, "Props", {
      prompt: "Which statement about props is TRUE?",
      options: ["A component should edit its own props when needed", "Props can only hold plain text, never numbers", "They come from the parent; don’t change them", "Props are just another name for CSS classes"], answer: 2,
      hint: "Like function arguments.",
      note: "Props flow down from the parent and are read-only. Data a component changes itself belongs in state.", badge: "route",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: State ----------
    {
      type: "learn", door: 3,
      title: "State is data that can change, and changing it updates the screen.",
      points: [["useState", "const [count, setCount] = useState(0);"], ["Read", "count is the current value"], ["Update", "setCount(count + 1) changes it and re-draws the component"]],
      highlightLast: true,
      code: ["function Likes() {", "  const [likes, setLikes] = useState(0);", "  return <button onClick={() => setLikes(likes + 1)}>", "    {likes} likes", "  </button>;", "}"],
      output: "Each click adds one like"
    },
    RXN(3, "State", {
      prompt: "The Likes button above starts at 0. A student clicks it 4 times. What number shows?",
      answer: 4,
      hint: "Each click adds 1.",
      note: "4 likes. Every setLikes call updates the state and React redraws the button.", badge: "heart"
    }),
    RXN(3, "State", {
      prompt: "What number shows after 3 clicks?",
      code: ["function Score() {", "  const [score, setScore] = useState(10);", "  return <button onClick={() => setScore(score + 5)}>", "    {score}", "  </button>;", "}"],
      answer: 25,
      hint: "Starts at 10, +5 each click.",
      note: "10 → 15 → 20 → 25.", badge: "chart-column"
    }),
    RX(3, "State", {
      prompt: "What does useState(\"Guest\") give you?",
      options: ["A fixed constant called Guest that can never change", "A CSS style named Guest applied to the page", "A new child component named Guest and its props", "A value that starts as \"Guest\" and a setter"], answer: 3,
      hint: "Two things in an array.",
      note: "const [name, setName] = useState(\"Guest\"): the current value, and the function to update it.", badge: "user",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Explain the difference between props and state using a cricket scoreboard.", note: "Team names come in (props); the score changes (state). 20 seconds.", points: 100 },

    // ---------- Round 4: Events and lists ----------
    {
      type: "learn", door: 4,
      title: "Handle clicks, and turn arrays into lists.",
      points: [["Events", "onClick={handleClick} — pass the function"], ["Lists", "items.map(item => <li key={item}>{item}</li>)"], ["Keys", "Each list item needs a unique key so React can track it"]],
      highlightLast: true,
      code: ["const clubs = [\"Coding\", \"English\", \"AI Lab\"];", "return <ul>", "  {clubs.map(c => <li key={c}>{c}</li>)}", "</ul>;"],
      output: "A list of 3 clubs"
    },
    RXN(4, "Events and Lists", {
      prompt: "How many list items appear?",
      code: ["const events = [\"Hackathon\", \"Quiz\", \"Debate\", \"Workshop\"];", "return <ul>", "  {events.map(e => <li key={e}>{e}</li>)}", "</ul>;"],
      answer: 4,
      hint: "One <li> per array item.",
      note: "map turns each of the 4 items into an <li>.", badge: "list-checks"
    }),
    RX(4, "Events and Lists", {
      prompt: "Why does each list item need a key?",
      options: ["To make each list item look bold", "So React can track which item changed", "Keys are only needed for password fields", "To sort the list items alphabetically"], answer: 1,
      hint: "Identity of each item.",
      note: "Keys let React update just the changed item. Without them, it may redraw or mix up items, and it warns you.", badge: "key"
    }),
    RX(4, "Events and Lists", Object.assign({}, RXBUG, {
      prompt: "A Register button. What happens, and which line has the bug?",
      code: ["function Register() {", "  function handle() { alert(\"Registered!\"); }", "  return <button onClick={handle()}>Register</button>;", "}"],
      outputOptions: ["The alert shows only on click", "The alert runs as soon as the page loads", "Nothing ever happens"], outputAnswer: 1, bugLine: 2,
      bugText: "handle() calls the function immediately. Fix: onClick={handle}",
      hint: "Look at the brackets after handle.",
      note: "Pass the function itself. handle() runs it during rendering, not on click.", badge: "search",
      board: true, boardLabel: "after Round 4"
    })),

    // ---------- Round 5: Conditional rendering ----------
    {
      type: "learn", door: 5,
      title: "Show different things depending on conditions.",
      points: [["Ternary", "{loggedIn ? <Dashboard /> : <Login />}"], ["&&", "{unread > 0 && <Badge count={unread} />}"], ["Early return", "if (loading) return <p>Loading…</p>;"]],
      highlightLast: true,
      code: ["function Status(props) {", "  return <p>{props.paid ? \"Seat confirmed\" : \"Payment pending\"}</p>;", "}", "<Status paid={false} />"],
      output: "Payment pending"
    },
    RX(5, "Conditions", {
      prompt: "What appears on screen?",
      code: ["function Result(props) {", "  return <p>{props.marks >= 35 ? \"Pass\" : \"Fail\"}</p>;", "}", "<Result marks={40} />"],
      options: ["Pass", "Fail", "Pass Fail", "40"], answer: 0,
      hint: "Is 40 at least 35?",
      note: "The condition is true, so “Pass” shows.", badge: "check"
    }),
    RX(5, "Conditions", {
      prompt: "What appears on screen when unread is 0?",
      code: ["function Inbox(props) {", "  return <div>Inbox {props.unread > 0 && <b>({props.unread} new)</b>}</div>;", "}", "<Inbox unread={0} />"],
      options: ["Inbox (0 new)", "Inbox", "Inbox 0", "Nothing at all"], answer: 1,
      hint: "The && part only shows if the condition is true.",
      note: "0 > 0 is false, so the badge is skipped and only “Inbox” shows.", badge: "mail"
    }),
    RX(5, "Conditions", {
      prompt: "A page fetches data. What should it show while waiting?",
      options: ["A short “Loading…” message", "A blank white page forever", "An error message", "The old data with no warning"], answer: 0,
      hint: "Tell the user something is happening.",
      note: "if (loading) return <p>Loading…</p>; is a simple, friendly pattern.", badge: "timer",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Classic bugs (double) ----------
    {
      type: "learn", door: 6,
      title: "Three bugs every React beginner meets.",
      points: [["Changing state directly", "count = count + 1 does not update the screen"], ["Calling instead of passing", "onClick={save()} runs too early"], ["Missing keys", "Lists without keys cause warnings and odd updates"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["search", "Bug hunt", "Real beginner mistakes"], ["mic", "Then the final challenge", "Explain a component"]] }
    },
    RX(6, "Classic Bugs", Object.assign({}, RXBUG, {
      double: true,
      prompt: "A vote counter. What happens when you click, and which line has the bug?",
      code: ["function Vote() {", "  let [votes, setVotes] = useState(0);", "  return <button onClick={() => { votes = votes + 1; }}>", "    {votes} votes", "  </button>;", "}"],
      outputOptions: ["The number goes up by one", "The number stays at 0", "The app crashes"], outputAnswer: 1, bugLine: 2,
      bugText: "it changes the variable directly, so React never re-draws. Fix: setVotes(votes + 1)",
      hint: "How should state be changed?",
      note: "Only the setter (setVotes) tells React to update the screen.", badge: "search"
    })),
    RX(6, "Classic Bugs", {
      double: true,
      prompt: "React shows the warning: “Each child in a list should have a unique key prop.” What is missing?",
      options: ["key={…} on each item made by map", "A className on the outer list tag", "An import of the CSS file at the top", "A second return statement in the loop"], answer: 0,
      hint: "Lists from map.",
      note: "Add key={item.id} (or another unique value) to each element created by map.", badge: "key"
    }),
    RX(6, "Classic Bugs", {
      double: true,
      prompt: "Which component correctly shows a name passed in as a prop?",
      options: ["function hi(props) { return <p>props.name</p>; }", "function Hi() { return <p>{name}</p>; }", "function Hi(props) { props.name = \"X\"; }", "function Hi(props) { return <p>{props.name}</p>; }"], answer: 3,
      hint: "Capital name, props, and curly braces.",
      note: "Capitalised, takes props, reads props.name inside curly braces, and returns JSX.", badge: "badge-check",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best explanation wins +200", prompt: "Describe a React “Like” button in 30 seconds: what is the component, what is the state, and what happens on click.", note: "useState(0), onClick with setLikes(likes + 1), and the screen updates. The host picks.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "React Basics", note: "Screenshot this. Build a counter in an online React playground tonight.", items: REACT },
    {
      type: "end",
      joinTitle: "Join the EduMoon Coding Club",
      joinText: "Coding games, lab help and project nights every week. Learn to code, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
