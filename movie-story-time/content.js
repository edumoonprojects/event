// Movie Story Time: Baahubali. The story is retold in our own simple English (no film text or images).
// Step types used: story · rules · tale · door · speak · wordlist · end
// A door with board: false skips the leaderboard, so scores show once per part.

const Q = (part, kind, extra) => Object.assign({ type: "door", kind: "choice", time: 30, board: false, eyebrow: `Part ${part} · ${kind}` }, extra);

window.GAME = {
  id: "movie-story-baahubali",
  title: "Movie Story Time: Baahubali",
  club: "English Club",
  tagline: "Hear the Baahubali story in English, learn 20 power words, and speak if you dare.",
  art: window.STORY_ART,
  words: {
    round: "Question", unlocked: "Answer", badgeLabel: "Power up",
    rulesEyebrow: "How Movie Story Time works", rulesTitle: "Listen. Learn. Speak.",
    learnText: "The host tells one part of the story in simple English.", crackTitle: "Play",
    crackText: "Pick the meaning of the power words, and guess what happens next.",
    rulesExtra: "Speak in English (optional): <b>+100</b>. No wrong English, only fun!",
    nobody: "Nobody got this one. These are tough words!", cracked: "got it right",
    next: "Next part →", finale: "Next →", winner: "is today’s Story Star!", endLine: "You learned 20 power words today!"
  },
  steps: [
    {
      type: "story",
      alert: "EduMoon English Club · Movie Story Time",
      title: "Today’s story: Baahubali, told in English.",
      cards: [["book-open", "4 short parts of the story, in simple English"], ["scroll", "20 power words you’ve probably never used"], ["mic", "Speak if you want to. No wrong English!"]]
    },
    { type: "rules" },

    // ---------- Part 1 ----------
    {
      type: "tale", eyebrow: "Part 1 of 4", title: "The Hidden Prince",
      text: [
        "On a dark night, a queen runs through a raging river, holding a baby high above the water. She becomes a **martyr**, giving her life so the baby can live.",
        "A village at the foot of a giant waterfall finds the baby and names him Shivudu. Even as a child he is a **prodigy**, stronger and braver than everyone.",
        "Shivudu has one dream: to climb the waterfall. He falls again and again, but his spirit is **indomitable**. One day he hangs from the **precipice**, refuses to let go, and reaches the top.",
        "Who is he really? Where did he come from? For now, his past is an **enigma**."
      ],
      words: [["Martyr", "Someone who dies for a cause"], ["Prodigy", "A young person with extraordinary talent"], ["Indomitable", "Impossible to defeat or discourage"], ["Precipice", "A very steep cliff edge"], ["Enigma", "A mystery that is hard to understand"]]
    },
    Q(1, "Word Power", {
      prompt: "What does “indomitable” mean?",
      options: ["Very tired", "Impossible to defeat or discourage", "Easily scared", "Extremely rich"], answer: 1,
      hint: "Shivudu kept climbing, no matter how many times he fell.",
      note: "Example: Shivudu’s indomitable spirit pushed him up the waterfall.", badge: "flame"
    }),
    Q(1, "Word Power", {
      prompt: "What is an “enigma”?",
      options: ["A royal title", "A type of weapon", "A mystery that is hard to understand", "A large river"], answer: 2,
      hint: "Nobody knew where Shivudu came from.",
      note: "Example: Where he came from remained an enigma.", badge: "search"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Tell us about a time you didn’t give up.", note: "Anyone who wants to speak, raise your hand or unmute. Try using a power word!", points: 100 },
    Q(1, "What happens next?", {
      prompt: "What does Shivudu find at the top of the waterfall?",
      options: ["A hidden treasure", "A kingdom ruled by a cruel king", "His real mother", "An army waiting for him"], answer: 1,
      hint: "Think big: the story is about kings and thrones.",
      note: "You’ll see it in Part 2!", badge: "sparkles", board: true, boardLabel: "after Part 1"
    }),

    // ---------- Part 2 ----------
    {
      type: "tale", eyebrow: "Part 2 of 4", title: "The Kingdom of Mahishmati",
      text: [
        "Above the waterfall lies Mahishmati, a rich kingdom ruled by Bhallaladeva. He is a **tyrant**: everyone fears him. Like every **despot**, he crushes anyone who questions him.",
        "In front of the palace, a queen named Devasena sits in chains. She has survived 25 years of **captivity**, but even in chains her eyes show **defiance**.",
        "Shivudu meets Avanthika, a brave warrior from a group of rebels. Together they plan a **clandestine** mission to free Devasena.",
        "But one man guards the kingdom: an old warrior who has never lost a fight…"
      ],
      words: [["Tyrant", "A cruel ruler with total power"], ["Despot", "A ruler who uses power unfairly"], ["Captivity", "Being kept as a prisoner"], ["Defiance", "Bold refusal to obey"], ["Clandestine", "Secret, hidden"]]
    },
    Q(2, "Word Power", {
      prompt: "Who is a “tyrant”?",
      options: ["A brave soldier", "A wise teacher", "A cruel ruler with total power", "A rebel leader"], answer: 2,
      hint: "Think of Bhallaladeva.",
      note: "Example: Bhallaladeva was a tyrant feared by all.", badge: "crown"
    }),
    Q(2, "Word Power", {
      prompt: "A “clandestine” plan is…",
      options: ["Secret and hidden", "Loud and public", "Very old", "Easy and simple"], answer: 0,
      hint: "The rebels didn’t want the king to know.",
      note: "Example: The rebels planned a clandestine rescue.", badge: "lock"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "If you were a rebel, how would you free Devasena?", note: "One sentence is enough. Bonus if you use “clandestine”!", points: 100 },
    Q(2, "What happens next?", {
      prompt: "Who is the old warrior guarding the kingdom?",
      options: ["Bhallaladeva’s brother", "Kattappa, sworn to serve the throne", "Shivudu’s teacher", "A foreign king"], answer: 1,
      hint: "He is loyal to the throne, whoever sits on it.",
      note: "Kattappa! And when he sees Shivudu’s face, he drops to his knees. Why? Find out in Part 3.", badge: "sparkles", board: true, boardLabel: "after Part 2"
    }),

    // ---------- Part 3 ----------
    {
      type: "tale", eyebrow: "Part 3 of 4", title: "The Legend of Amarendra",
      text: [
        "Kattappa tells Shivudu the truth: he is the son of Amarendra Baahubali, the greatest hero Mahishmati ever had.",
        "Years ago, a huge enemy army attacked. Amarendra’s **valour** won the war. He was even **magnanimous** to the defeated soldiers, and the people loved him.",
        "But his cousin Bhallaladeva **coveted** the throne. When Amarendra was chosen as the next king, the people cheered at the news of his **coronation**, while Bhallaladeva burned with jealousy.",
        "Kattappa had sworn **allegiance** to the throne. He would obey any order. And then came the most painful order of his life…"
      ],
      words: [["Valour", "Great courage in battle"], ["Magnanimous", "Generous and forgiving, even to enemies"], ["Covet", "To badly want something that belongs to someone else"], ["Coronation", "The ceremony of crowning a king"], ["Allegiance", "Loyalty to a person or a kingdom"]]
    },
    Q(3, "Word Power", {
      prompt: "To “covet” something means to…",
      options: ["Protect it", "Badly want what belongs to someone else", "Hide it", "Forgive it"], answer: 1,
      hint: "Bhallaladeva wanted Amarendra’s throne.",
      note: "Example: Bhallaladeva coveted the throne.", badge: "target"
    }),
    Q(3, "Word Power", {
      prompt: "A “magnanimous” person is…",
      options: ["Very large", "Angry and proud", "Easily frightened", "Generous and forgiving, even to enemies"], answer: 3,
      hint: "Amarendra was kind even to the soldiers he defeated.",
      note: "Example: Amarendra was magnanimous even to defeated soldiers.", badge: "heart"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "What makes a good leader?", note: "Answer in one sentence. Try “valour” or “magnanimous”!", points: 100 },
    Q(3, "What happens next?", {
      prompt: "The biggest question in Indian cinema: why did Kattappa kill Baahubali?",
      options: ["He wanted the throne for himself", "He was ordered to, after a conspiracy fooled the queen mother", "It was an accident in battle", "Baahubali asked him to"], answer: 1,
      hint: "Kattappa never disobeys the throne.",
      note: "A conspiracy turned the queen mother against her own son. The full story is in Part 4!", badge: "sparkles", board: true, boardLabel: "after Part 3"
    }),

    // ---------- Part 4 ----------
    {
      type: "tale", eyebrow: "Part 4 of 4", title: "Betrayal and Return",
      text: [
        "Bhallaladeva and his father built a **conspiracy**. With lies, they made the queen mother believe Amarendra wanted to harm her.",
        "She ordered his death, and loyal Kattappa had to obey. It was the greatest **treachery** Mahishmati had ever seen. Bhallaladeva **usurped** the throne, and Devasena was put in chains.",
        "When the queen mother learned the truth, she escaped with Amarendra’s baby son, the same baby from Part 1.",
        "Years later, that son, Shivudu, returns for **retribution**. He **vanquishes** the tyrant, frees his mother Devasena, and becomes the rightful king."
      ],
      words: [["Conspiracy", "A secret plan to do something harmful"], ["Treachery", "Betraying someone who trusts you"], ["Usurp", "To take power illegally or by force"], ["Retribution", "Punishment that is deserved, payback"], ["Vanquish", "To defeat completely"]]
    },
    Q(4, "Word Power", {
      prompt: "To “usurp” the throne means to…",
      options: ["Give it up", "Share it fairly", "Take it illegally or by force", "Protect it"], answer: 2,
      hint: "Bhallaladeva took the throne by lies.",
      note: "Example: Bhallaladeva usurped the throne.", badge: "swords"
    }),
    Q(4, "Word Power", {
      prompt: "What is “retribution”?",
      options: ["A reward", "Deserved punishment, payback", "Forgiveness", "A celebration"], answer: 1,
      hint: "The son came back to make things right.",
      note: "Example: The son returned for retribution.", badge: "shield", board: true, boardLabel: "after Part 4"
    }),
    { type: "speak", eyebrow: "Speaking time · the big debate", prompt: "Was Kattappa right to obey the order? Yes or no, and why?", note: "The best debate of the day. Anyone can jump in!", points: 100 },
    { type: "speak", eyebrow: "Movie Pitch · optional", prompt: "Pitch “Baahubali 3” in 3 sentences, using at least 2 power words.", note: "The best pitch wins +200 and becomes today’s Story Star", points: 200 },
    { type: "wordlist", eyebrow: "Take it home", title: "20 power words you learned today", note: "Screenshot this, and try using one new word every day this week." },
    {
      type: "end",
      joinTitle: "Join the EduMoon English Club",
      joinText: "A new story, game or speaking challenge every week. Speak more, fear less.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
