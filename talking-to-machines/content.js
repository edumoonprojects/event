// Talking to Machines (EduMoon AI Lab). Beginner: for all years and every branch.
// How voice assistants work, step by step: the wake word, speech to text, understanding the request, acting and speaking back, why they fail, and privacy.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const TM = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 40, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const TMN = (round, name, extra) => TM(round, name, Object.assign({ kind: "number", time: 45 }, extra));

// The take-home card: how a voice assistant works.
const VOICE = [
  ["1. Wake word", "The device listens for one phrase, usually on the device itself."],
  ["2. Speech to text", "Your voice is turned into written words."],
  ["3. Intent", "What you want: set_alarm, play_music, check_weather."],
  ["4. Details", "The extra bits: the time, the song, the city."],
  ["5. Action", "The app does the task or looks up the answer."],
  ["6. Text to speech", "A computer voice reads the reply aloud."],
  ["Why it fails", "Noise, accents, mixed languages and words that sound alike."],
  ["Privacy", "Check voice history settings. Mute the mic when you need privacy."]
];

window.GAME = {
  id: "talking-to-machines",
  title: "Talking to Machines",
  club: "AI Lab",
  tagline: "“Hey, set an alarm for 6.” What really happens between your voice and the alarm?",
  art: window.STORY_ART,
  guide: {
    years: "All years · every branch", time: "35 minutes", level: "Beginner",
    about: "Anjali’s grandmother talks to the voice assistant on her phone in Telugu, and it keeps setting the wrong alarm. In 6 rounds, teams follow a voice command through every step: the wake word, speech to text, finding the intent and the details, doing the task, speaking the reply, why it fails with noise, accents and mixed languages, and how to manage privacy.",
    outcomes: "The six steps of a voice assistant, the idea of intents and details, common reasons voice AI fails, and simple privacy habits.",
    tone: "Everyone has a funny voice assistant story. Collect a couple at the start. Act out each step with a volunteer playing the assistant.",
    extra: [["Act it out", "Ask one student to be the assistant. Another gives a command. The “assistant” must say aloud each step: “Heard the wake word… the words are… the intent is…”."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Understood",
    rulesEyebrow: "How Talking to Machines works", rulesTitle: "Follow your voice through the machine, one step at a time.",
    learnText: "The host explains one step of how voice assistants work.", crackTitle: "Answer",
    crackText: "Pick your answer on your phone and lock it in.",
    rulesExtra: "Speak (optional): <b>+100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Voice AI is trickier than it sounds!", cracked: "got it",
    next: "Next round →", finale: "Next →", winner: "speak fluent machine!", endLine: "Anjali’s grandmother’s alarms work now."
  },
  offerEyebrow: "EduMoon AI Lab · Voice AI level",
  offerTitle: "Your voice AI level",
  offers: [
    { min: 0.7, icon: "mic", title: "Voice AI Expert", text: "You understand every step. Try How Recommendations Work next." },
    { min: 0.45, icon: "bot", title: "Clear Speaker", text: "Strong! Check your phone’s voice history settings today." },
    { min: 0.2, icon: "ear", title: "Good Listener", text: "Good start. Read the six steps below once more." },
    { min: 0, icon: "book-open", title: "Voice Beginner", text: "Everyone starts here. Play What Is AI? next." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon AI Lab · The wrong alarm",
      title: "Anjali’s grandmother asks her phone in Telugu to wake her at 5:30. It sets an alarm for 3:50 instead. What went wrong? Can your team follow her voice through the machine?",
      cards: [["mic", "Wake word, speech to text, intent"], ["ear", "Why voice AI gets it wrong"], ["trophy", "Your score decides your voice AI level"]]
    },
    { type: "rules" },

    // ---------- Round 1: Wake word ----------
    {
      type: "learn", door: 1,
      title: "Step 1: the wake word.",
      points: [["Listening for one phrase", "Like “Hey Google” or “Hey Siri”"], ["Usually checked on the device", "A small model on the phone waits for that phrase"], ["Then it starts recording", "Only after the wake word, in normal settings"]],
      highlightLast: true,
      side: { label: "Like a name", items: [["user", "In a noisy class", "You hear your own name"], ["mic", "The assistant", "Hears its wake word"], ["x", "False wake", "Sometimes it mishears"]] }
    },
    TM(1, "Wake Word", {
      prompt: "What is a wake word?",
      options: ["An alarm sound in the morning", "A phrase that starts it listening", "A password for your phone", "The assistant’s favourite word"], answer: 1,
      hint: "“Hey…”",
      note: "Like calling someone’s name before talking to them.", badge: "mic"
    }),
    TM(1, "Wake Word", {
      prompt: "The assistant suddenly wakes up during a movie. Why might this happen?",
      options: ["The phone’s battery was very low", "The movie had too many songs", "The TV volume was set too low", "A line sounded like the wake word"], answer: 3,
      hint: "Similar sounds.",
      note: "A false wake: something sounded close enough to the wake phrase.", badge: "ear"
    }),
    TM(1, "Wake Word", {
      prompt: "Why do phones usually check for the wake word on the device itself?",
      options: ["Faster, and more private", "Phones have no internet", "It uses more battery that way", "It makes the voice sound nicer"], answer: 0,
      hint: "Speed and privacy.",
      note: "Checking locally is quick, and normal conversations do not need to be sent anywhere.", badge: "shield",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Speech to text ----------
    {
      type: "learn", door: 2,
      title: "Step 2: speech to text.",
      points: [["Sound waves in", "Your voice is recorded as sound"], ["Words out", "AI guesses the most likely words"], ["Learned from many voices", "Recordings of many people, accents and languages"]],
      highlightLast: true,
      side: { label: "Tough cases", items: [["ear", "Noise", "Traffic, fans, music"], ["languages", "Accents and languages", "Less common ones may have less training data"], ["message-circle", "Similar sounds", "“fifteen” and “fifty”"]] }
    },
    TM(2, "Speech to Text", {
      prompt: "What does speech-to-text do?",
      options: ["Turns text into a song", "Translates English into Telugu", "Turns speech into text", "Records a video"], answer: 2,
      hint: "Speech in, text out.",
      note: "It is the same tech behind voice typing and automatic captions.", badge: "pen-tool"
    }),
    TM(2, "Speech to Text", {
      prompt: "The grandmother said “five thirty” but it heard “three fifty”. What is the most likely cause?",
      options: ["The phone did not like her", "Alarms cannot be set by voice", "Telugu has no numbers", "Similar sounds; less accent training"], answer: 3,
      hint: "How was the model trained?",
      note: "Voices and accents the model heard less often in training are harder for it. Similar-sounding numbers make it worse.", badge: "ear"
    }),
    TM(2, "Speech to Text", {
      prompt: "Which place will give the worst voice recognition?",
      options: ["A quiet room", "A noisy bus stand", "A library", "A closed car"], answer: 1,
      hint: "Background noise.",
      note: "Noise mixes with your voice and confuses the model.", badge: "map",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Intent and details ----------
    {
      type: "learn", door: 3,
      title: "Step 3: work out what you want (intent) and the details.",
      points: [["Intent", "The action: set_alarm, play_music, call_contact"], ["Details", "Time, song name, person, city"], ["Example", "“Wake me at 6 tomorrow”: intent set_alarm, time 6 AM, day tomorrow"]],
      highlightLast: true,
      side: { label: "“Play Telugu songs”", items: [["target", "Intent", "play_music"], ["list-checks", "Detail", "language: Telugu"], ["check", "Action", "Start a Telugu playlist"]] }
    },
    TM(3, "Intent", {
      prompt: "“Call Amma.” What is the intent?",
      options: ["Play music", "Make a phone call", "Set an alarm", "Check the weather"], answer: 1,
      hint: "What action does the user want?",
      note: "The intent is call_contact; the detail is the contact name, Amma.", badge: "smartphone"
    }),
    TM(3, "Intent", {
      prompt: "“What’s the weather in Vizag tomorrow?” Which part is a detail?",
      options: ["What’s", "the", "The word weather only", "Vizag, tomorrow"], answer: 3,
      hint: "Place and time.",
      note: "Intent: check_weather. Details: city = Vizag, day = tomorrow.", badge: "cloud"
    }),
    TMN(3, "Intent", {
      prompt: "“Set alarms for 5, 6 and 7 AM.” How many alarm times are in the details?",
      answer: 3,
      hint: "Count the times.",
      note: "One intent (set_alarm), three time details.", badge: "clock",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Give a voice command, then say its intent and its details, like an assistant would.", note: "“Remind me to submit my record at 9 PM”: intent, task, time. 20 seconds.", points: 100 },

    // ---------- Round 4: Act and reply ----------
    {
      type: "learn", door: 4,
      title: "Steps 4 to 6: do it, then speak back.",
      points: [["Action", "Set the alarm, open the app, search for the answer"], ["Write a reply", "“Alarm set for 6 AM tomorrow.”"], ["Text to speech", "A computer voice reads the reply aloud"]],
      highlightLast: true,
      side: { label: "Good replies", items: [["check", "Confirm the details", "“…for 6 AM tomorrow”"], ["check", "Short", "Easy to hear"], ["check", "Ask when unsure", "“Did you mean 5:30 or 3:50?”"]] }
    },
    TM(4, "Act and Reply", {
      prompt: "Why should the assistant repeat the details, like “Alarm set for 6 AM tomorrow”?",
      options: ["So you catch mistakes", "To waste time", "Because it is lonely", "To make the battery last"], answer: 0,
      hint: "Confirmation.",
      note: "Repeating details lets you notice a wrong time before it matters.", badge: "check"
    }),
    TM(4, "Act and Reply", {
      prompt: "What is text-to-speech?",
      options: ["Typing with your voice", "Sending a text message", "A computer voice reading text", "Recording a song"], answer: 2,
      hint: "The opposite of step 2.",
      note: "Speech to text listens; text to speech talks. Screen readers use it to help people with visual impairments.", badge: "mic"
    }),
    TM(4, "Act and Reply", {
      prompt: "The assistant is not sure if she said 5:30 or 3:50. What is the best behaviour?",
      options: ["Pick one at random", "Set both and stay silent", "Ask her to confirm", "Do nothing at all"], answer: 2,
      hint: "Unsure? Ask.",
      note: "A quick check avoids a missed bus or a missed exam.", badge: "message-circle",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Why it fails ----------
    {
      type: "learn", door: 5,
      title: "Why voice assistants still get things wrong.",
      points: [["Mixed languages", "“Repu 6 ki alarm pettu” mixes Telugu and English"], ["Words that sound alike", "Names, numbers and places"], ["Unclear requests", "“Play that song” — which one?"]],
      highlightLast: true,
      side: { label: "Help it help you", items: [["check", "Speak a little slower", "Especially numbers"], ["check", "Reduce noise", "Move away from the fan"], ["check", "Check the reply", "Then confirm"]] }
    },
    TM(5, "Why It Fails", {
      prompt: "Why can mixed Telugu-English commands be harder for voice assistants?",
      options: ["Telugu cannot be recorded", "Less training on that mix", "English words are banned", "Phones only know one word"], answer: 1,
      hint: "What did the model learn from?",
      note: "Code-mixed speech is common in India, and models are improving, but they have seen less of it.", badge: "languages"
    }),
    TM(5, "Why It Fails", {
      prompt: "“Play that song from yesterday.” Why might this fail?",
      options: ["It is unclear which song", "Songs cannot be played by voice", "Yesterday is not a word", "The phone is too new"], answer: 0,
      hint: "Which song?",
      note: "Unclear details need a follow-up question, or more context from your history.", badge: "search"
    }),
    TM(5, "Why It Fails", {
      prompt: "Best tip for the grandmother to get the right alarm?",
      options: ["Speak slowly, check the reply", "Shout as loudly as possible", "Speak very fast", "Never use voice again"], answer: 0,
      hint: "Clear input, then confirmation.",
      note: "Slow, clear numbers and a quick check of the reply solve most errors.", badge: "clock",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Privacy (double) ----------
    {
      type: "learn", door: 6,
      title: "Voice is personal data. Know your settings.",
      points: [["Voice history", "Many assistants can save recordings; you can often view or delete them"], ["Mute button", "Smart speakers usually have a physical mic mute"], ["Shared devices", "Anyone nearby can hear the replies"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["shield", "Privacy and good use", "Real choices"], ["mic", "Then the final challenge", "Be the assistant"]] }
    },
    TM(6, "Privacy", {
      double: true,
      prompt: "Where can you usually see or delete what your assistant saved?",
      options: ["In its privacy settings", "Nowhere; it is impossible", "Only by calling the police", "By restarting the phone"], answer: 0,
      hint: "Settings.",
      note: "Look for voice activity or history settings. Options differ by app, so check yours.", badge: "shield"
    }),
    TM(6, "Privacy", {
      double: true,
      prompt: "You are discussing a private family matter near a smart speaker. What is a sensible step?",
      options: ["Speak in a whisper", "Cover it with a cloth", "Unplug the Wi-Fi router", "Press mic mute"], answer: 3,
      hint: "There is a button for this.",
      note: "The mute button stops the microphone. It is the simplest privacy habit.", badge: "lock"
    }),
    TM(6, "Privacy", {
      double: true,
      prompt: "Which request should you NOT say aloud to a voice assistant in a crowded place?",
      options: ["Today’s weather", "A cricket score", "Your bank PIN", "The time in London"], answer: 2,
      hint: "Who else can hear?",
      note: "Never say passwords, PINs or OTPs aloud, to a person or a device.", badge: "shield",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best assistant wins +200", prompt: "Be the assistant: the host gives a command. Your team says each step aloud: words heard, intent, details, action and reply.", note: "Try: “Remind me to call Amma at 8 PM tomorrow.” The host picks the clearest.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "How a Voice Assistant Works", note: "Screenshot this. Explain it to someone at home tonight.", items: VOICE },
    {
      type: "end",
      joinTitle: "Join the EduMoon AI Lab",
      joinText: "AI games, tools and projects every week. Learn to use AI the right way, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
