// India Quiz (EduMoon Fun Zone). For all years.
// 6 rounds on India: states, the freedom struggle, the Constitution, rivers, space and culture.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const IQ = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 30, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const IN = (round, name, extra) => IQ(round, name, Object.assign({ kind: "number", time: 40 }, extra));

// The take-home card: 8 facts every Indian student should know.
const IFACTS = [
  ["Biggest and smallest", "Rajasthan is the largest state by area. Goa is the smallest."],
  ["The Tricolour", "Designed by Pingali Venkayya from Andhra Pradesh. The Ashoka Chakra has 24 spokes."],
  ["Salt March", "Gandhi walked to Dandi in 1930. Quit India began in 1942."],
  ["26 January 1950", "The Constitution came into force. Dr B.R. Ambedkar chaired the drafting committee."],
  ["Dakshina Ganga", "The Godavari, the longest river of south India."],
  ["Chandrayaan-3", "Landed near the Moon’s south pole on 23 August 2023, a first for any country."],
  ["Sriharikota", "India’s main rocket launch site, in Andhra Pradesh."],
  ["Kuchipudi", "A classical dance named after a village in Andhra Pradesh."]
];

window.GAME = {
  id: "india-quiz",
  title: "India Quiz",
  club: "Fun Zone",
  tagline: "States, freedom, the Constitution, rivers, rockets and culture. How Indian is your general knowledge?",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "30 minutes", level: "Beginner",
    about: "A fast general-knowledge quiz about India. In 6 rounds, teams answer questions on states, the freedom struggle, the Constitution, rivers and geography, science and space, and culture and sports. Each round opens with a short fact screen, and several questions connect to Andhra Pradesh. It ends with a 60-second speaking challenge and a take-home card of 8 facts.",
    outcomes: "Core GK that appears in placement aptitude tests and government exams, remembered through play instead of memorising lists.",
    tone: "Keep it quick and loud. Read the questions with energy, cheer correct teams, and use the reveal notes to add one interesting line each time. Never make anyone feel bad for not knowing a fact.",
    extra: [["Facts checked", "The questions avoid things that change often (like who holds an office today). Every answer is a settled fact from school textbooks and official sources."],
      ["Number questions", "Rounds 2, 3, 5 and 6 each have one number or year to type in. Only the exact answer scores."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Got it",
    rulesEyebrow: "How the India Quiz works", rulesTitle: "See the fact screen. Answer fast. Win the room.",
    learnText: "The host shows a few facts about India.", crackTitle: "Answer",
    crackText: "Pick or type your answer on your phone and lock it in.",
    rulesExtra: "Faster answers score more. Speak (optional): <b>+100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Now the whole room knows it!", cracked: "got it right",
    next: "Next round →", finale: "Next →", winner: "are today’s India Quiz champions!", endLine: "Jai Hind. See you at the next quiz."
  },
  offerEyebrow: "EduMoon Fun Zone · India Quiz results",
  offerTitle: "Your GK rank",
  offers: [
    { min: 0.7, icon: "crown", title: "Quiz Master", text: "Your GK is placement-test ready. Try a full mock GK paper this week." },
    { min: 0.45, icon: "star", title: "Sharp Mind", text: "Strong! Read one news headline a day to keep it sharp." },
    { min: 0.2, icon: "compass", title: "Explorer", text: "Good start. Save the fact card and revise it before your next test." },
    { min: 0, icon: "book-open", title: "Curious Learner", text: "Everyone starts here. Today you learned 18 new facts." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Fun Zone · India Quiz",
      title: "From Dandi to the Moon. 6 rounds about the country we live in. Which team knows India best?",
      cards: [["globe", "States, history, the Constitution and more"], ["timer", "Fast answers score more"], ["trophy", "Win the title of Quiz Master"]]
    },
    { type: "rules" },

    // ---------- Round 1: States ----------
    {
      type: "learn", door: 1,
      title: "India is a union of states, each with its own capital.",
      points: [["Big and small", "Some states are bigger than whole countries, some smaller than a city"], ["Hill capitals", "Many northeast capitals sit high in the hills"], ["Know your neighbours", "Andhra Pradesh shares borders with five states"]],
      highlightLast: true
    },
    IQ(1, "States", {
      prompt: "Which is the largest state in India by area?",
      options: ["Madhya Pradesh", "Rajasthan", "Maharashtra", "Uttar Pradesh"], answer: 1,
      hint: "Think of the Thar Desert.",
      note: "Rajasthan, about one tenth of India’s land. Madhya Pradesh is second.", badge: "map"
    }),
    IQ(1, "States", {
      prompt: "Which is the smallest state in India by area?",
      options: ["Sikkim", "Tripura", "Kerala", "Goa"], answer: 3,
      hint: "A beach state on the west coast.",
      note: "Goa. Sikkim is the second smallest.", badge: "waves"
    }),
    IQ(1, "States", {
      prompt: "Shillong is the capital of which state?",
      options: ["Meghalaya", "Assam", "Nagaland", "Mizoram"], answer: 0,
      hint: "Its name means “abode of clouds”.",
      note: "Meghalaya. Shillong is often called the Scotland of the East.", badge: "compass",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Freedom struggle ----------
    {
      type: "learn", door: 2,
      title: "Freedom came step by step, over decades.",
      points: [["Salt March", "Gandhi walked about 385 km to make salt and break an unfair law"], ["Quit India", "A call to the British to leave India, during the Second World War"], ["The flag", "Designed by a freedom fighter from Andhra Pradesh"]],
      highlightLast: true
    },
    IN(2, "Freedom Struggle", {
      prompt: "In which year did Gandhi lead the Salt March to Dandi? Type the year.",
      answer: 1930,
      hint: "17 years before independence.",
      note: "1930. The 24-day march made the whole world pay attention to India’s freedom movement.", badge: "route"
    }),
    IQ(2, "Freedom Struggle", {
      prompt: "In which year did the Quit India Movement begin?",
      options: ["1919", "1930", "1942", "1947"], answer: 2,
      hint: "During the Second World War.",
      note: "1942, with Gandhi’s call of “Do or Die”. 1919 is the year of Jallianwala Bagh.", badge: "flame"
    }),
    IQ(2, "Freedom Struggle", {
      prompt: "Who designed the flag that became India’s national flag?",
      options: ["Subhas Chandra Bose", "Bhagat Singh", "Sarojini Naidu", "Pingali Venkayya"], answer: 3,
      hint: "He was from Andhra Pradesh.",
      note: "Pingali Venkayya, born near Machilipatnam. The Ashoka Chakra in the centre has 24 spokes.", badge: "star",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: The Constitution ----------
    {
      type: "learn", door: 3,
      title: "The Constitution is India’s rulebook.",
      points: [["Two dates", "Adopted on 26 November 1949, in force from 26 January 1950"], ["The drafting committee", "Led by one of India’s greatest scholars"], ["Your right to vote", "Every adult citizen gets one vote, equal for all"]],
      highlightLast: true
    },
    IQ(3, "The Constitution", {
      prompt: "Who chaired the drafting committee of the Indian Constitution?",
      options: ["Dr B.R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel", "Dr Rajendra Prasad"], answer: 0,
      hint: "He is called the Father of the Constitution.",
      note: "Dr B.R. Ambedkar. Dr Rajendra Prasad was President of the Constituent Assembly.", badge: "scroll"
    }),
    IN(3, "The Constitution", {
      prompt: "What is the minimum age to vote in India? Type the number.",
      answer: 18,
      hint: "Most first-year students are already old enough.",
      note: "18. It was lowered from 21 in 1989. Many of you can vote already. Check that you’re registered.", badge: "badge-check"
    }),
    IQ(3, "The Constitution", {
      prompt: "Why do we celebrate Republic Day on 26 January?",
      options: ["It’s the day India became independent", "It’s the day the Constitution came into force", "It’s Gandhi’s birthday", "It’s the day the first election was held"], answer: 1,
      hint: "Independence Day is 15 August. This is something else.",
      note: "On 26 January 1950, the Constitution came into force and India became a republic.", badge: "landmark",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Name one freedom fighter from Andhra Pradesh and one thing they did.", note: "30 seconds. Alluri Sitharama Raju, Pingali Venkayya, Potti Sriramulu, Tanguturi Prakasam… or another.", points: 100 },

    // ---------- Round 4: Rivers and geography ----------
    {
      type: "learn", door: 4,
      title: "Rivers shaped where Indians live and farm.",
      points: [["Most rivers flow east", "Into the Bay of Bengal, like the Godavari and Krishna"], ["A few flow west", "Into the Arabian Sea, through a long valley"], ["The edges of India", "The southernmost point is not on the mainland"]],
      highlightLast: true
    },
    IQ(4, "Rivers and Geography", {
      prompt: "Which river is called the “Dakshina Ganga” (Ganga of the South)?",
      options: ["Kaveri", "Krishna", "Godavari", "Tungabhadra"], answer: 2,
      hint: "It flows through Rajahmundry.",
      note: "The Godavari, the longest river of south India. It reaches the sea in Andhra Pradesh.", badge: "waves"
    }),
    IQ(4, "Rivers and Geography", {
      prompt: "Which of these big rivers flows west into the Arabian Sea?",
      options: ["Narmada", "Mahanadi", "Krishna", "Godavari"], answer: 0,
      hint: "It flows through Madhya Pradesh and Gujarat.",
      note: "The Narmada. The others flow east into the Bay of Bengal.", badge: "compass"
    }),
    IQ(4, "Rivers and Geography", {
      prompt: "What is the name of India’s southernmost point?",
      options: ["Kanyakumari", "Rameswaram", "Dhanushkodi", "Indira Point"], answer: 3,
      hint: "It’s on an island in the Andaman and Nicobar Islands.",
      note: "Indira Point, on Great Nicobar Island. Kanyakumari is the southern tip of the mainland.", badge: "map",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Science and space ----------
    {
      type: "learn", door: 5,
      title: "India’s science story spans from Nobel Prizes to the Moon.",
      points: [["Space from Andhra", "ISRO launches its rockets from the Satish Dhawan Space Centre at Sriharikota"], ["A first in the world", "Chandrayaan-3 landed where no country had landed before"], ["A Nobel for light", "An Indian physicist won it for how light scatters"]],
      highlightLast: true
    },
    IQ(5, "Science and Space", {
      prompt: "Where on the Moon did Chandrayaan-3 land in 2023?",
      options: ["Near the equator", "On the far side", "Near the south pole", "Near the north pole"], answer: 2,
      hint: "No country had landed there before.",
      note: "Near the south pole, on 23 August 2023. India now celebrates that day as National Space Day.", badge: "rocket"
    }),
    IQ(5, "Science and Space", {
      prompt: "What was the name of India’s first satellite, launched in 1975?",
      options: ["Bhaskara", "Aryabhata", "Rohini", "INSAT-1"], answer: 1,
      hint: "Named after an ancient mathematician.",
      note: "Aryabhata, named after the mathematician who wrote about zero and the Earth’s rotation.", badge: "star"
    }),
    IN(5, "Science and Space", {
      prompt: "In which year did C.V. Raman win the Nobel Prize in Physics? Type the year.",
      answer: 1930,
      hint: "The same year as the Salt March.",
      note: "1930, for the Raman effect. We celebrate National Science Day on 28 February, the day he announced it.", badge: "lightbulb",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Culture and sports (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round. Double points.",
      points: [["Culture and sports", "Dance, animals and the big wins"], ["Double points", "Anyone can still win"], ["Trust your gut", "Fast answers score more"]],
      highlightLast: true
    },
    IQ(6, "Culture and Sports", {
      double: true,
      prompt: "The classical dance Kuchipudi is from which state?",
      options: ["Tamil Nadu", "Odisha", "Kerala", "Andhra Pradesh"], answer: 3,
      hint: "Kuchipudi is a village name.",
      note: "Andhra Pradesh. Kuchipudi is a village in Krishna district. Bharatanatyam is from Tamil Nadu, Odissi from Odisha.", badge: "sparkles"
    }),
    IQ(6, "Culture and Sports", {
      double: true,
      prompt: "What is India’s national aquatic animal?",
      options: ["Ganges river dolphin", "Olive ridley turtle", "Blue whale", "Mahseer fish"], answer: 0,
      hint: "It lives in rivers, not the sea, and is almost blind.",
      note: "The Ganges river dolphin, declared in 2009. It finds food using sound.", badge: "waves"
    }),
    IN(6, "Culture and Sports", {
      double: true,
      prompt: "In which year did India win its first Cricket World Cup? Type the year.",
      answer: 1983,
      hint: "Kapil Dev was captain, at Lord’s in England.",
      note: "1983. India beat the West Indies in the final at Lord’s.", badge: "trophy",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, results, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "In 60 seconds: one thing India should be proud of, and one thing your generation will fix.", note: "Be specific. The room claps for the best answer.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "8 India Facts", note: "Screenshot this. These come up in aptitude tests and interviews.", items: IFACTS },
    {
      type: "end",
      joinTitle: "Join the EduMoon community",
      joinText: "Quizzes, games and events for students across Vizag every week.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
