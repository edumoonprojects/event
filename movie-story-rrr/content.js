// Movie Story Time: RRR. The story is retold in our own simple English (no film text or images).
// Step types used: story · rules · tale · door · speak · wordlist · end
// A door with board: false skips the leaderboard, so scores show once per part.

const Q = (part, kind, extra) => Object.assign({ type: "door", kind: "choice", time: 30, board: false, eyebrow: `Part ${part} · ${kind}` }, extra);

window.GAME = {
  id: "movie-story-rrr",
  title: "Movie Story Time: RRR",
  club: "English Club",
  tagline: "Hear the RRR story in English, learn 20 power words, and speak if you dare.",
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
      title: "Today’s story: RRR, told in English.",
      cards: [["book-open", "4 short parts of the story, in simple English"], ["scroll", "20 power words for real conversations"], ["mic", "Speak if you want to. No wrong English!"]]
    },
    { type: "rules" },

    // ---------- Part 1 ----------
    {
      type: "tale", eyebrow: "Part 1 of 4", title: "Two Men, Two Missions",
      text: [
        "India, the 1920s. A British governor visits a forest village and his wife takes a little Gond girl named Malli away with her, as if she were a toy. Taking a child by force like this is to **abduct** her.",
        "The village lives under British **oppression**: no voice, no justice. But one man from the forest, Bheem, makes a **vow**: he will bring Malli home.",
        "Bheem goes to Delhi in **disguise**, pretending to be a simple mechanic named Akhtar, and quietly searches for a way into the governor’s fort.",
        "Meanwhile, Raju is a fearless officer in the British police. He catches anyone the British want. His **resolve** is like steel. But nobody knows why he really wears that uniform…"
      ],
      words: [["Abduct", "To take someone away by force"], ["Oppression", "Cruel and unfair control over people"], ["Vow", "A serious promise"], ["Disguise", "Clothes or a false identity to hide who you are"], ["Resolve", "Strong determination to do something"]]
    },
    Q(1, "Word Power", {
      prompt: "Bheem makes a “vow”. What is a vow?",
      options: ["A quick plan made in a hurry", "A secret message to friends", "A serious promise", "A loud warning to an enemy"], answer: 2,
      hint: "He will not rest until Malli is home.",
      note: "Example: Bheem made a vow to bring Malli back.", badge: "flame"
    }),
    Q(1, "Word Power", {
      prompt: "Bheem goes to Delhi “in disguise”. That means he…",
      options: ["Travels at night in a fast train", "Hides who he really is", "Takes a large army with him", "Goes with a letter from the king"], answer: 1,
      hint: "Everyone in Delhi thinks he is Akhtar.",
      note: "Example: Bheem lived in Delhi in disguise as Akhtar.", badge: "search"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Tell us about a promise you made and kept.", note: "Anyone who wants to speak, raise your hand or unmute. Try using “vow” or “resolve”!", points: 100 },
    Q(1, "What happens next?", {
      prompt: "Bheem and Raju meet for the first time. How?",
      options: ["They save a boy from a burning river together", "Raju arrests Bheem at the railway station", "They fight each other in a wrestling match", "Bheem asks Raju for directions to the fort"], answer: 0,
      hint: "Something brave, not a fight.",
      note: "They risk their lives to save a boy, and become best friends. Neither knows who the other really is!", badge: "sparkles", board: true, boardLabel: "after Part 1"
    }),

    // ---------- Part 2 ----------
    {
      type: "tale", eyebrow: "Part 2 of 4", title: "Best Friends, Opposite Sides",
      text: [
        "Bheem and Raju become inseparable. They laugh, dance and help each other. Their **camaraderie** makes everyone around them smile.",
        "But Raju has been given a task by the British: find the forest man who wants to **infiltrate** the fort, and arrest him.",
        "Bheem is **unwavering**. He gets inside the fort at a big party, ready to rescue Malli.",
        "Then Raju learns the truth: the man he must arrest is his best friend. He faces a terrible **dilemma**: his duty, or his friend?"
      ],
      words: [["Camaraderie", "Trust and friendship between people"], ["Infiltrate", "To secretly get inside a place or group"], ["Unwavering", "Steady, not changing or doubting"], ["Dilemma", "A hard choice between two difficult options"], ["Inseparable", "Always together, impossible to separate"]]
    },
    Q(2, "Word Power", {
      prompt: "To “infiltrate” the fort means to…",
      options: ["Attack it openly with soldiers", "Build a wall around it", "Buy it from the British", "Secretly get inside it"], answer: 3,
      hint: "Bheem entered at a party, without anyone knowing his plan.",
      note: "Example: Bheem infiltrated the governor’s fort.", badge: "lock"
    }),
    Q(2, "Word Power", {
      prompt: "Raju faces a “dilemma”. What is that?",
      options: ["A hard choice between two bad options", "A serious illness that needs rest", "A happy surprise from a friend", "A long journey to another city"], answer: 0,
      hint: "Duty or friendship: both choices hurt.",
      note: "Example: Raju faced a dilemma between duty and friendship.", badge: "target"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Have you ever had to choose between two things you cared about?", note: "One sentence is enough. Bonus if you use “dilemma”!", points: 100 },
    Q(2, "What happens next?", {
      prompt: "Raju has to choose. What does he do?",
      options: ["He runs away from Delhi forever", "He tells the governor everything about himself", "He arrests Bheem and follows his orders", "He joins Bheem inside the fort right away"], answer: 2,
      hint: "Remember, Raju has his own hidden reason for wearing the uniform.",
      note: "He arrests his best friend. But why? Part 3 tells you.", badge: "sparkles", board: true, boardLabel: "after Part 2"
    }),

    // ---------- Part 3 ----------
    {
      type: "tale", eyebrow: "Part 3 of 4", title: "The Song That Shook the Crowd",
      text: [
        "Bheem is whipped in front of a huge crowd. The British want him to kneel. He has to **endure** terrible pain.",
        "They want to **humiliate** him, but Bheem does not bow. He stays **unyielding**, and instead he sings a song of courage. The whole crowd rises up with him.",
        "Then comes the **revelation**: Raju was never loyal to the British. He joined the police only to get guns for his own village, to free his people.",
        "Raju is filled with **remorse** for hurting his friend. Now he must make things right…"
      ],
      words: [["Endure", "To suffer something painful without giving up"], ["Humiliate", "To make someone feel ashamed in front of others"], ["Unyielding", "Refusing to give up or bend"], ["Revelation", "A surprising truth that is suddenly made known"], ["Remorse", "Deep regret for something wrong you did"]]
    },
    Q(3, "Word Power", {
      prompt: "Bheem stays “unyielding”. That means he…",
      options: ["Shouts angrily at the soldiers", "Faints from the pain quickly", "Begs the crowd to help him", "Refuses to give up or bend"], answer: 3,
      hint: "He would not kneel, no matter what.",
      note: "Example: Bheem stayed unyielding in front of the crowd.", badge: "shield"
    }),
    Q(3, "Word Power", {
      prompt: "Raju feels “remorse”. What is remorse?",
      options: ["Joy after a big win", "Deep regret for a wrong", "Fear of being caught by police", "Anger at an old enemy"], answer: 1,
      hint: "He hurt the person he loved most.",
      note: "Example: Raju was full of remorse for arresting Bheem.", badge: "heart"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "What gives a person the courage to stand up for others?", note: "Answer in one sentence. Try “unyielding” or “endure”!", points: 100 },
    Q(3, "What happens next?", {
      prompt: "Raju is now locked up by the British. Who comes to save him?",
      options: ["Bheem, his best friend", "The governor’s soldiers, by mistake", "Malli’s whole village, with an army", "His father, who was hiding in Delhi"], answer: 0,
      hint: "Friendship comes back stronger.",
      note: "Bheem forgives Raju and breaks him out. Part 4 is the final battle!", badge: "sparkles", board: true, boardLabel: "after Part 3"
    }),

    // ---------- Part 4 ----------
    {
      type: "tale", eyebrow: "Part 4 of 4", title: "Fire and Water",
      text: [
        "Bheem, the calm water, and Raju, the burning fire, now fight side by side. Their friendship is stronger than ever.",
        "Together they **liberate** Malli and take her home. The **valiant** pair stand against an entire British army.",
        "They defeat the cruel governor. Their **triumph** gives hope to every village.",
        "Raju finally gets the guns for his people. Both friends paid a big price, and their **sacrifice** gives the story its heart. For Raju, saving Bheem was his **redemption**."
      ],
      words: [["Liberate", "To set someone free"], ["Valiant", "Very brave and determined"], ["Triumph", "A great victory or success"], ["Sacrifice", "Giving up something valuable for others"], ["Redemption", "Making up for a past mistake"]]
    },
    Q(4, "Word Power", {
      prompt: "To “liberate” Malli means to…",
      options: ["Teach her to read and write", "Hide her from her family", "Send her to another city", "Set her free"], answer: 3,
      hint: "She goes home at last.",
      note: "Example: Bheem and Raju liberated Malli.", badge: "swords"
    }),
    Q(4, "Word Power", {
      prompt: "Raju helping Bheem after arresting him is a kind of “redemption”. What does that mean?",
      options: ["Getting a reward from the government", "Running away from a difficult problem", "Making up for a past mistake", "Forgetting what happened in the past"], answer: 2,
      hint: "He fixed what he did wrong.",
      note: "Example: Raju found redemption by saving Bheem.", badge: "crown", board: true, boardLabel: "after Part 4"
    }),
    { type: "speak", eyebrow: "Speaking time · the big debate", prompt: "Was Raju right to arrest Bheem first, to complete his secret mission? Yes or no, and why?", note: "The best debate of the day. Anyone can jump in!", points: 100 },
    { type: "speak", eyebrow: "Movie Pitch · optional", prompt: "Pitch “RRR 2” in 3 sentences, using at least 2 power words.", note: "The best pitch wins +200 and becomes today’s Story Star", points: 200 },
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
