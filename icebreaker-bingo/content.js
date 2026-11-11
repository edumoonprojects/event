// Icebreaker Bingo (EduMoon Fun Zone). For all years. Best for the first session with a new group.
// Each round: a 2-minute mingle to find people for 3 bingo squares, then 3 questions on the skill of meeting people.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const IB = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 40, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const FIND = "Find someone who… (2 minutes)";

// The take-home card: 8 conversation starters that work anywhere.
const STARTERS = [
  ["At an event", "“What brought you here today?”"],
  ["In class", "“Which subject are you enjoying most this semester?”"],
  ["New hostel or flat", "“Where are you from? What do you miss most about home?”"],
  ["At a hackathon", "“What are you building? What’s the hardest part so far?”"],
  ["Food queue", "“Have you tried anything good here? What should I get?”"],
  ["Follow-up magic", "“Oh, how did you get into that?”"],
  ["Remember a name", "“Nice to meet you, Sneha.” Say it back once."],
  ["Leaving politely", "“It was great talking to you. Let’s connect on LinkedIn.”"]
];

window.GAME = {
  id: "icebreaker-bingo",
  title: "Icebreaker Bingo",
  club: "Fun Zone",
  tagline: "Stand up, walk around and find people for every square. Then learn the skills of meeting anyone.",
  art: window.STORY_ART,
  guide: {
    years: "All years (perfect for freshers and first sessions)", time: "30 minutes", level: "Beginner",
    about: "A mingle game for a room of strangers. Each round opens with 3 “Find someone who…” bingo squares: students get 2 minutes to walk around, talk and write a name next to each square. Then teams answer 3 questions on the skill behind it: starting a conversation, remembering names, asking good questions, listening, finding common ground and ending a chat politely. The person with the most squares filled wins the final bonus.",
    outcomes: "8 conversation starters, the confidence to walk up to a stranger, and a room full of people who now know each other’s names.",
    tone: "Some students find mingling scary. Model it yourself: walk around and talk first. Encourage pairs of shy friends to go together. Never force anyone to speak in front of the room.",
    extra: [["Before you start", "Every student needs paper and a pen (or their phone’s notes app) to write the 18 squares and the names they collect. One name can be used only once on a card."],
      ["The mingle", "On every round’s fact screen, say “Go!” and give 2 minutes to find names for the 3 squares on the screen. Ring a bell or clap to stop. Then press Next for the questions."],
      ["The full card (all 18 squares)", "Born outside Andhra Pradesh · Has a pet · Speaks 3 or more languages · Has the same first letter as you · Has a nickname · Is the eldest child · Has been to Araku · Wants to start a business · Plays an instrument · Watched a movie this week · Can cook a full meal · Wakes up before 6 · Supports the same cricket team as you · Has the same favourite food · Is in a different branch · You have never spoken to before · Has a birthday this month · Wants to work abroad."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Nice",
    rulesEyebrow: "How Icebreaker Bingo works", rulesTitle: "Find people for 3 squares. Then answer 3 questions. Repeat.",
    learnText: "Find someone for each square on the screen. You have 2 minutes!", crackTitle: "Answer",
    crackText: "Back to your phone. Pick the best answer and lock it in.",
    rulesExtra: "Speak (optional): <b>+100</b>. Round 6: <b>double</b>. Most squares filled: <b>+200</b>!",
    nobody: "Nobody got this one. Try it at the next event you go to!", cracked: "got it right",
    next: "Next round →", finale: "Next →", winner: "are today’s Icebreaker champions!", endLine: "You walked in as strangers. Look around now."
  },
  offerEyebrow: "EduMoon Fun Zone · Icebreaker results",
  offerTitle: "Your people-skills rank",
  offers: [
    { min: 0.7, icon: "crown", title: "Room Connector", text: "You make strangers feel welcome. Go introduce two people who should meet." },
    { min: 0.45, icon: "users", title: "Social Starter", text: "Strong! Start one conversation with someone new this week." },
    { min: 0.2, icon: "hand", title: "Friendly Face", text: "Good start. Use one starter from the card at your next event." },
    { min: 0, icon: "heart", title: "Quiet Observer", text: "Listeners make great friends. Try saying hi to just one new person tomorrow." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Fun Zone · Icebreaker Bingo",
      title: "Look around. You don’t know most of these people yet. In 30 minutes, you will.",
      cards: [["users", "18 bingo squares, 6 quick mingles"], ["message-circle", "Learn how to start and end any conversation"], ["trophy", "Most squares filled wins the bonus"]]
    },
    { type: "rules" },

    // ---------- Round 1: Starting a conversation ----------
    {
      type: "learn", door: 1,
      title: "Round 1: say hello. Go find your first 3 names!",
      points: [["Everyone feels nervous", "Most people are waiting for someone else to say hi first"], ["Smile, then a simple question", "“Hi, I’m Ravi. Where are you from?” is enough"], ["Write one name per square", "Each person can only fill one square on your card"]],
      highlightLast: true,
      side: { label: FIND, items: [["map", "Was born outside Andhra Pradesh", "Ask: “Where are you from?”"], ["heart", "Has a pet", "Ask its name!"], ["languages", "Speaks 3 or more languages", "Ask which ones"]] }
    },
    IB(1, "Saying Hello", {
      prompt: "You walk into a college event and don’t know anyone. Best first move?",
      options: ["Stand in a corner with your phone until someone talks to you", "Find someone alone: “Hi, I’m new too. What brought you here?”", "Join the biggest group and start telling a joke right away", "Wait for the event to start, then leave a bit early"], answer: 1,
      hint: "Who is easiest to talk to in a room?",
      note: "People standing alone are usually happy someone came over. A simple, open question does the rest.", badge: "hand"
    }),
    IB(1, "Saying Hello", {
      prompt: "Which opening line is most likely to start a real conversation?",
      options: ["“Hi.”", "“Do you study here, or are you from another college?”", "“Nice weather today, no? Very hot outside.”", "“Hi, I’m Sneha, 2nd year ECE. Which branch?”"], answer: 3,
      hint: "Which one gives them something to answer?",
      note: "Your name, a little about you and an easy question. It invites them to share back.", badge: "message-circle"
    }),
    IB(1, "Saying Hello", {
      prompt: "What does your body language say when you talk with your arms crossed and eyes on your phone?",
      options: ["“I’m not interested in talking”", "“I’m very relaxed and friendly with everyone”", "“I’m listening carefully to every word”", "Nothing, body language doesn’t really matter"], answer: 0,
      hint: "What would you think if someone did that to you?",
      note: "People read your body before your words. Phone away, arms relaxed, face towards the person.", badge: "user",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Names ----------
    {
      type: "learn", door: 2,
      title: "Round 2: names. Go find 3 more!",
      points: [["A name is the sweetest sound", "People feel noticed when you remember theirs"], ["Say it back once", "“Nice to meet you, Kiran.” It locks it in your memory"], ["Forgot it? Just ask", "“Sorry, tell me your name once more?” is completely fine"]],
      highlightLast: true,
      side: { label: FIND, items: [["user", "Has the same first letter as you", "Compare names"], ["star", "Has a nickname", "Ask the story behind it"], ["users", "Is the eldest child", "Ask how many siblings"]] }
    },
    IB(2, "Names", {
      prompt: "What’s the easiest trick to remember a new person’s name?",
      options: ["Write it on your hand with a pen", "Say it back: “Nice to meet you, Arjun”", "Ask them to spell it three times slowly", "Don’t bother now, you can ask again later"], answer: 1,
      hint: "Hearing yourself say it helps your memory.",
      note: "Repeating a name once, naturally, makes it much easier to remember. Using it again when you leave helps too.", badge: "lightbulb"
    }),
    IB(2, "Names", {
      prompt: "You met Divya 10 minutes ago, but forgot her name. She’s walking towards you. Best move?",
      options: ["Avoid her for the rest of the day", "Call her “bro” or “dear” so she doesn’t notice", "“Sorry, tell me your name once more?”", "Pretend to take a phone call and walk away"], answer: 2,
      hint: "Honesty is less awkward than you think.",
      note: "Everyone forgets names. Asking again shows you care about getting it right.", badge: "heart"
    }),
    IB(2, "Names", {
      prompt: "How should you introduce yourself to a senior or a speaker at an event?",
      options: ["“Sir, myself Ravi, I want to ask something.”", "Start asking questions without introducing yourself", "Show them your college ID card first", "“Hi, I’m Ravi, 2nd year CSE. I liked your talk.”"], answer: 3,
      hint: "Name, who you are, and one genuine line.",
      note: "Name, year and branch, and one specific thing you liked. Short, confident, and they’ll remember you.", badge: "badge-check",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Asking questions ----------
    {
      type: "learn", door: 3,
      title: "Round 3: good questions. Go find 3 more!",
      points: [["Closed questions end chats", "“Do you like Vizag?” “Yes.” Silence"], ["Open questions start them", "“What do you like most about Vizag?”"], ["The magic follow-up", "“Oh, how did you get into that?”"]],
      highlightLast: true,
      side: { label: FIND, items: [["map", "Has been to Araku", "Ask what they liked most"], ["rocket", "Wants to start a business", "Ask what kind"], ["mic", "Plays an instrument", "Ask how long they’ve played"]] }
    },
    IB(3, "Asking Questions", {
      prompt: "Which question keeps a conversation going best?",
      options: ["“Do you like coding, or is it just for marks?”", "“Are you from Vizag or from somewhere else?”", "“What got you into coding?”", "“Is this your first event at this college?”"], answer: 2,
      hint: "Which one can’t be answered with just yes or no?",
      note: "Open questions (what, how, why) invite a story. Yes/no questions often end the chat.", badge: "message-circle"
    }),
    IB(3, "Asking Questions", {
      prompt: "Someone says: “I play the guitar.” Best reply?",
      options: ["“How long have you played? What do you play?”", "“Cool.”", "“My cousin plays the guitar better than anyone I know.”", "“I don’t like music much, to be honest.”"], answer: 0,
      hint: "Show interest in them.",
      note: "A follow-up question shows you were listening and you care. Turning it to yourself or your cousin ends their story.", badge: "ear"
    }),
    IB(3, "Asking Questions", {
      prompt: "Which topic is usually NOT a good idea with someone you just met?",
      options: ["Their favourite food", "Their hometown", "How much their family earns", "What they want to do after college"], answer: 2,
      hint: "Which one could make them uncomfortable?",
      note: "Money, marks, religion and politics can feel personal with a stranger. Food, places, hobbies and dreams are safe.", badge: "shield",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Introduce the most interesting person you’ve met so far, in 20 seconds.", note: "Their name and one surprising thing about them. Ask them first if it’s okay!", points: 100 },

    // ---------- Round 4: Listening ----------
    {
      type: "learn", door: 4,
      title: "Round 4: listening. Go find 3 more!",
      points: [["Listening is a skill", "Most people are just waiting for their turn to talk"], ["Show you’re listening", "Nod, look at them, ask a follow-up"], ["Don’t hijack the story", "“That happened to me too…” can wait"]],
      highlightLast: true,
      side: { label: FIND, items: [["film", "Watched a movie this week", "Ask: would you recommend it?"], ["flame", "Can cook a full meal", "Ask for their best dish"], ["alarm-clock", "Wakes up before 6", "Ask how they manage it!"]] }
    },
    IB(4, "Listening", {
      prompt: "While a friend tells you about their bad day, you keep checking your phone. What does it tell them?",
      options: ["That you’re a great multitasker", "Nothing, they won’t notice at all", "That you’re listening even better", "Their story doesn’t matter to you"], answer: 3,
      hint: "How does it feel when it happens to you?",
      note: "Even a quick glance at the phone says “something else is more important”. Put it face down.", badge: "smartphone"
    }),
    IB(4, "Listening", {
      prompt: "Someone is telling a story and pauses to think. What should you do?",
      options: ["Wait and let them finish", "Jump in with your own bigger story", "Finish their sentence for them quickly", "Change the topic to something easier"], answer: 0,
      hint: "Silence is not always an empty space to fill.",
      note: "A short pause often means they’re about to share the best part. Let it breathe.", badge: "clock"
    }),
    IB(4, "Listening", {
      prompt: "Which reply shows you really listened?",
      options: ["“Okay okay, I understand what you mean.”", "“So you moved last month and hostel food is hardest?”", "“Same.”", "“Anyway, did you see the match yesterday?”"], answer: 1,
      hint: "Which one repeats what they said?",
      note: "Repeating back a detail shows you heard them. It’s called active listening, and people love it.", badge: "ear",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Finding common ground ----------
    {
      type: "learn", door: 5,
      title: "Round 5: common ground. Go find 3 more!",
      points: [["People bond over “me too”", "Same food, same team, same struggle"], ["Differences are interesting too", "A different branch or hometown gives you lots to ask"], ["Look for the small things", "A bag sticker, a T-shirt, a phone wallpaper"]],
      highlightLast: true,
      side: { label: FIND, items: [["trophy", "Supports the same cricket team as you", "Ask about their favourite match"], ["heart", "Has the same favourite food", "Agree on the best place to eat it"], ["graduation-cap", "Is in a different branch", "Ask what they’re learning"]] }
    },
    IB(5, "Common Ground", {
      prompt: "You notice someone has a hackathon sticker on their laptop. Best opener?",
      options: ["Ignore it and talk about the weather instead", "“Is that laptop expensive? Which model is it?”", "“Nice sticker! Which hackathon was that?”", "“Stickers make laptops look childish.”"], answer: 2,
      hint: "The sticker is an invitation.",
      note: "People show what they care about: stickers, T-shirts, wallpapers. Noticing it is the easiest opener there is.", badge: "search"
    }),
    IB(5, "Common Ground", {
      prompt: "You find out you’re both from the same district. What’s the best next step?",
      options: ["Say “Oh nice” and stop the conversation there", "Ask what they miss most from home", "Ask which caste or community they’re from", "Tell them your whole family history"], answer: 1,
      hint: "Build on it with something positive and open.",
      note: "Shared places are great: food, festivals and favourite spots. Stay away from personal questions about caste or community.", badge: "map"
    }),
    IB(5, "Common Ground", {
      prompt: "You and the other person have nothing in common at all. What now?",
      options: ["Get curious: “What do you like about it?”", "End the conversation immediately and walk off", "Argue that your hobby is much better than theirs", "Pretend you like the same things they do"], answer: 0,
      hint: "Different isn’t bad. It’s new.",
      note: "Curiosity works even when you share nothing. Asking someone to teach you about their world makes them feel valued.", badge: "lightbulb",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Ending and following up (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: ending well. Find your last 3 names!",
      points: [["Ending a chat is a skill too", "Leave on a high, not in an awkward silence"], ["Use their name one last time", "“Great talking to you, Farah.”"], ["Follow up within a day", "A short message turns a stranger into a contact"]],
      highlightLast: true,
      side: { label: FIND, items: [["hand", "You have never spoken to before", "This is your chance!"], ["party-popper", "Has a birthday this month", "Wish them early"], ["globe", "Wants to work abroad", "Ask which country"]] }
    },
    IB(6, "Ending Well", {
      double: true,
      prompt: "You’ve been talking for a while and want to move on. Best exit line?",
      options: ["Walk away without saying anything at all", "“I’m bored, bye.”", "Say you have a call, even though you don’t", "“Nice talking, Rahul. See you around!”"], answer: 3,
      hint: "Warm, honest and uses their name.",
      note: "Thank them, use their name and give a kind reason. They’ll remember you well.", badge: "hand"
    }),
    IB(6, "Ending Well", {
      double: true,
      prompt: "You met a senior at a tech event who works at a startup. How should you stay in touch?",
      options: ["A LinkedIn request with a short personal note", "Message them every day asking for a job", "Do nothing and hope you meet again someday", "Send a request with no note at all"], answer: 0,
      hint: "Remind them who you are, briefly.",
      note: "A short, specific note within a day is the best follow-up. It reminds them of the conversation, not just your name.", badge: "mail"
    }),
    IB(6, "Ending Well", {
      double: true,
      prompt: "Why is meeting new people in college worth the effort?",
      options: ["It isn’t, marks are all that matter in college", "Only for finding people to copy assignments from", "Friends, mentors and jobs come from people", "So you can have more followers on Instagram"], answer: 2,
      hint: "Think about how people find internships and teammates.",
      note: "Many internships, hackathon teams and jobs come through people. The person next to you today could be your co-founder.", badge: "users",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Bingo results, offers, take-home ----------
    { type: "speak", eyebrow: "Bingo time · most squares wins +200", prompt: "Count your names! Who filled the most of the 18 squares?", note: "The top 3 stand up. The winner shares the most surprising thing they learned about someone today.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "8 Conversation Starters", note: "Screenshot this. Use one at your next event, hackathon or first day anywhere.", items: STARTERS },
    {
      type: "end",
      joinTitle: "Join the EduMoon community",
      joinText: "Meet students from across Vizag at our games, events and hackathons every week.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
