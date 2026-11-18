// Who Invented It? (EduMoon Fun Club). Medium: for all years.
// Inventions and the people behind them: everyday machines, ideas from ancient India, Indians behind modern tech, happy accidents, programming languages and a mixed final round.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const WI = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 30, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const WIN = (round, name, extra) => WI(round, name, Object.assign({ kind: "number", time: 45 }, extra));

// The take-home card: 12 inventions and who is behind them.
const INVCARD = [
  ["Telephone", "Alexander Graham Bell, patented 1876."],
  ["Printing press (movable type)", "Johannes Gutenberg, Germany, around 1440."],
  ["First powered aeroplane flight", "The Wright brothers, USA, 1903."],
  ["Zero as a number", "Ancient India; Brahmagupta wrote its rules in 628 CE."],
  ["Chess", "Grew from chaturanga, a game from ancient India."],
  ["USB", "Co-invented by Ajay Bhatt and his team at Intel."],
  ["Hotmail", "Co-founded by Sabeer Bhatia and Jack Smith, 1996."],
  ["Penicillin", "Discovered by Alexander Fleming, 1928, by accident."],
  ["Microwave oven", "Percy Spencer, after a chocolate bar melted near radar equipment."],
  ["C language", "Dennis Ritchie, Bell Labs, early 1970s."],
  ["Python", "Guido van Rossum, first released in 1991."],
  ["World Wide Web", "Tim Berners-Lee, proposed in 1989 at CERN."]
];

window.GAME = {
  id: "who-invented-it",
  title: "Who Invented It?",
  club: "Fun Club",
  tagline: "From zero to USB: match the invention to the mind behind it.",
  art: window.STORY_ART,
  guide: {
    years: "All years · every branch", time: "30 minutes", level: "Medium",
    about: "A fast quiz about inventions and inventors, with a strong Indian thread. In 6 rounds: everyday machines, ideas from ancient India, Indians behind modern tech, happy accidents, programming languages, and a mixed final round worth double points. Each reveal comes with a short story worth retelling.",
    outcomes: "General knowledge about major inventions, a sense of India’s role in maths, games and modern tech, and the idea that many great inventions came from accidents and teamwork.",
    tone: "Quiz-show energy. Read each reveal note like a fun fact. Many inventions involved several people, so keep it light when teams argue about credit.",
    extra: [["Credit note", "Many inventions had several contributors. The answers here follow the most widely accepted credit. Mention this if a team raises another name."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Invented",
    rulesEyebrow: "How Who Invented It? works", rulesTitle: "Hear the clue. Name the inventor. Be fast.",
    learnText: "The host shares a few invention stories for the round.", crackTitle: "Answer",
    crackText: "Pick your answer on your phone, fast.",
    rulesExtra: "Some questions need a typed year. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. History is full of surprises!", cracked: "got it",
    next: "Next round →", finale: "Next →", winner: "are the inventors of the day!", endLine: "Now go invent something."
  },
  offerEyebrow: "EduMoon Fun Club · Inventor level",
  offerTitle: "Your inventor level",
  offers: [
    { min: 0.7, icon: "trophy", title: "Master Inventor", text: "Brilliant general knowledge. Challenge your friends with the card below." },
    { min: 0.45, icon: "lightbulb", title: "Bright Spark", text: "Strong! Read about one inventor from today this week." },
    { min: 0.2, icon: "rocket", title: "Curious Mind", text: "Good start. The stories are the fun part; retell one tonight." },
    { min: 0, icon: "book-open", title: "Apprentice", text: "Everyone starts here. Screenshot the card and learn three." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Fun Club · Great ideas",
      title: "Zero, chess, USB and the World Wide Web: who came up with them? Six rounds, one champion team.",
      cards: [["lightbulb", "Everyday machines and happy accidents"], ["globe", "Ideas from India, and Indians behind modern tech"], ["trophy", "Your score decides your inventor level"]]
    },
    { type: "rules" },

    // ---------- Round 1: Everyday machines ----------
    {
      type: "learn", door: 1,
      title: "Machines that changed daily life.",
      points: [["Telephone", "Patented in 1876"], ["Printing press", "Movable type in Europe, around 1440"], ["Aeroplane", "First powered flight in 1903"]],
      highlightLast: true,
      side: { label: "This round", items: [["smartphone", "Talk", ""], ["book-open", "Print", ""], ["rocket", "Fly", ""]] }
    },
    WI(1, "Everyday Machines", {
      prompt: "Who received the famous 1876 patent for the telephone?",
      options: ["Alexander Graham Bell", "Thomas Alva Edison", "Guglielmo Marconi", "Nikola Tesla"], answer: 0,
      hint: "His middle name is Graham.",
      note: "Bell received the patent in 1876. Others, like Elisha Gray, were working on similar ideas at the same time.", badge: "smartphone"
    }),
    WI(1, "Everyday Machines", {
      prompt: "Who built the movable-type printing press in Germany around 1440?",
      options: ["Isaac Newton", "Leonardo da Vinci", "Johannes Gutenberg", "Galileo Galilei"], answer: 2,
      hint: "The Bible printed on it is named after him.",
      note: "Gutenberg’s press made books cheaper and faster to make. Movable type existed earlier in China and Korea too.", badge: "book-open"
    }),
    WIN(1, "Everyday Machines", {
      prompt: "In which year did the Wright brothers make the first powered aeroplane flight?",
      answer: 1903,
      hint: "Early 1900s.",
      note: "1903, at Kitty Hawk, USA. The first flight lasted about 12 seconds.", badge: "rocket",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Ideas from ancient India ----------
    {
      type: "learn", door: 2,
      title: "Ideas from ancient India that the world still uses.",
      points: [["Zero", "Used as a number, with rules written by Brahmagupta"], ["Chess", "Grew from the game chaturanga"], ["Snakes and ladders", "Grew from a game about good and bad deeds"]],
      highlightLast: true,
      side: { label: "This round", items: [["chart-column", "Maths", ""], ["gamepad-2", "Board games", ""], ["globe", "Spread worldwide", ""]] }
    },
    WI(2, "Ideas from India", {
      prompt: "Which ancient Indian mathematician wrote rules for calculating with zero in 628 CE?",
      options: ["Aryabhata", "Bhaskara II", "Brahmagupta", "Ramanujan"], answer: 2,
      hint: "His name starts with “Brahma”.",
      note: "Brahmagupta wrote rules like “a number minus itself is zero”. Aryabhata, earlier, is famous for astronomy and place value.", badge: "chart-column"
    }),
    WI(2, "Ideas from India", {
      prompt: "Chess grew from which ancient Indian game?",
      options: ["Chaturanga", "Pachisi", "Kabaddi", "Gilli-danda"], answer: 0,
      hint: "Its name means “four parts” of an army.",
      note: "Chaturanga had four parts: infantry, cavalry, elephants and chariots. It later became chess.", badge: "gamepad-2"
    }),
    WI(2, "Ideas from India", {
      prompt: "Snakes and ladders grew from an old Indian game. What was it meant to teach?",
      options: ["Good deeds help, bad deeds hurt you", "How to count numbers past one hundred", "How to plan army battles in a war", "How snakes and ladders are built"], answer: 0,
      hint: "Ladders and snakes stood for something.",
      note: "Ladders stood for good deeds and snakes for bad ones. It was a game about life’s lessons.", badge: "route",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Indians behind modern tech ----------
    {
      type: "learn", door: 3,
      title: "Indian minds behind tech you use every day.",
      points: [["USB", "Co-invented at Intel"], ["Hotmail", "One of the first free web email services, 1996"], ["Fibre optics", "Early research that led to fast internet cables"]],
      highlightLast: true,
      side: { label: "This round", items: [["wrench", "Hardware", ""], ["mail", "Email", ""], ["globe", "Internet", ""]] }
    },
    WI(3, "Indians in Tech", {
      prompt: "Which Indian-American engineer co-invented USB at Intel?",
      options: ["Vinod Khosla", "Ajay Bhatt", "Sundar Pichai", "Satya Nadella"], answer: 1,
      hint: "Not a CEO; an engineer.",
      note: "Ajay Bhatt and his team at Intel built USB in the 1990s. Today almost every device uses it.", badge: "wrench"
    }),
    WI(3, "Indians in Tech", {
      prompt: "Sabeer Bhatia co-founded which early free email service?",
      options: ["Gmail", "Yahoo Mail", "Rediffmail", "Hotmail"], answer: 3,
      hint: "It had HTML in its name: HoTMaiL.",
      note: "Hotmail launched in 1996 and was bought by Microsoft in 1997.", badge: "mail"
    }),
    WI(3, "Indians in Tech", {
      prompt: "Who is often called the “father of fibre optics”?",
      options: ["Homi J. Bhabha", "A. P. J. Abdul Kalam", "C. V. Raman", "Narinder Singh Kapany"], answer: 3,
      hint: "A physicist from Punjab who worked in the UK and USA.",
      note: "Kapany’s research on sending light through glass fibres helped lead to today’s internet cables.", badge: "globe",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Which invention could you NOT live without for one day? Convince the room in 20 seconds.", note: "Phone, fan, pressure cooker, internet… Best argument gets bonus points.", points: 100 },

    // ---------- Round 4: Happy accidents ----------
    {
      type: "learn", door: 4,
      title: "Inventions that happened by accident.",
      points: [["Penicillin", "Mould killed bacteria on a dish left out"], ["Microwave oven", "A chocolate bar melted near radar equipment"], ["Post-it notes", "A glue that was “too weak” found a use"]],
      highlightLast: true,
      side: { label: "Lesson", items: [["eye", "Notice the surprise", ""], ["lightbulb", "Ask “why?”", ""], ["rocket", "Find a use", ""]] }
    },
    WI(4, "Happy Accidents", {
      prompt: "Who discovered penicillin after noticing mould on a dish in 1928?",
      options: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Edward Jenner"], answer: 1,
      hint: "A Scottish scientist.",
      note: "Fleming saw mould stop bacteria growing. Penicillin became the first widely used antibiotic.", badge: "heart"
    }),
    WI(4, "Happy Accidents", {
      prompt: "What gave Percy Spencer the idea for the microwave oven?",
      options: ["His tea went cold during a long meeting", "A light bulb exploded near his desk", "A chocolate bar melted in his pocket", "His phone heated up while charging"], answer: 2,
      hint: "Something sweet melted.",
      note: "He was working near radar equipment in the 1940s and noticed the chocolate had melted.", badge: "zap"
    }),
    WI(4, "Happy Accidents", {
      prompt: "Post-it notes use a glue that was first seen as a failure. Why?",
      options: ["It was too strong to ever peel off", "It smelled too bad to use indoors", "It was far too costly to make", "It was too weak to stick for good"], answer: 3,
      hint: "They peel off easily.",
      note: "A weak glue that sticks and peels off again turned out to be perfect for notes.", badge: "pen-tool",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Programming languages ----------
    {
      type: "learn", door: 5,
      title: "The people behind the languages you code in.",
      points: [["C", "Bell Labs, early 1970s"], ["Python", "Named after a comedy show, not the snake"], ["World Wide Web", "Proposed in 1989 to share research documents"]],
      highlightLast: true,
      side: { label: "This round", items: [["code", "C", ""], ["code", "Python", ""], ["globe", "The web", ""]] }
    },
    WI(5, "Code Creators", {
      prompt: "Who created the C programming language at Bell Labs?",
      options: ["James Gosling", "Dennis Ritchie", "Bjarne Stroustrup", "Linus Torvalds"], answer: 1,
      hint: "He also helped build Unix.",
      note: "Dennis Ritchie made C in the early 1970s. Gosling made Java, Stroustrup made C++, Torvalds made Linux.", badge: "code"
    }),
    WIN(5, "Code Creators", {
      prompt: "Guido van Rossum first released Python in which year?",
      answer: 1991,
      hint: "Early 1990s.",
      note: "1991. The name comes from the British comedy show Monty Python’s Flying Circus.", badge: "code"
    }),
    WI(5, "Code Creators", {
      prompt: "Who proposed the World Wide Web in 1989 at CERN?",
      options: ["Bill Gates", "Tim Berners-Lee", "Steve Jobs", "Vint Cerf"], answer: 1,
      hint: "A British scientist; he was later knighted.",
      note: "Berners-Lee created the web (pages and links). Vint Cerf helped create the internet protocols beneath it.", badge: "globe",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Mixed final (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: mixed inventions, double points.",
      points: [["India", "Recent and ancient"], ["Science", "A famous Nobel discovery"], ["Names", "Where a tech name came from"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["globe", "Mixed topics", ""], ["mic", "Then the final challenge", "Pitch an invention"]] }
    },
    WIN(6, "Mixed Final", {
      double: true,
      prompt: "In which year was UPI launched in India?",
      answer: 2016,
      hint: "Same year as demonetisation.",
      note: "2016, by NPCI. India now makes billions of UPI payments every month.", badge: "indian-rupee"
    }),
    WI(6, "Mixed Final", {
      double: true,
      prompt: "Bluetooth is named after what?",
      options: ["A blue-coloured computer chip", "A dentist who invented wireless", "A Danish king with a nickname", "A fish that glows in deep water"], answer: 2,
      hint: "A Viking-age ruler who united tribes.",
      note: "King Harald “Bluetooth” united parts of Denmark and Norway. The tech was meant to unite devices.", badge: "globe"
    }),
    WI(6, "Mixed Final", {
      double: true,
      prompt: "C. V. Raman won the 1930 Nobel Prize for discovering what?",
      options: ["How light scatters in a material", "How electricity moves through copper wire", "How sound travels faster through water", "How magnets are made from iron metal"], answer: 0,
      hint: "It is called the Raman effect.",
      note: "The Raman effect, found in 1928. India celebrates National Science Day on 28 February for it.", badge: "sparkles",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best pitch wins +200", prompt: "In 30 seconds, pitch an invention that would fix one daily problem for Vizag students. Name it and say who would use it.", note: "Bus tracker, beach-safe phone case, hostel laundry timer… The host picks the best idea.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "12 Inventions and Their Inventors", note: "Screenshot this. Quiz your friends tonight.", items: INVCARD },
    {
      type: "end",
      joinTitle: "Join the EduMoon Fun Club",
      joinText: "Quizzes, games and fun events every week. Meet people across colleges.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
