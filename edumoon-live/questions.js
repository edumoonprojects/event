// EduMoon Live: this week's session.
// To make next week's game, copy this file and change the rounds. Nothing else needs to change.
//
// Round types:
//   mcq     → 4 options, answer = index of the right option (0, 1, 2 or 3)
//   tf      → true / false, answer = true or false
//   type    → students type a word, answers = list of accepted spellings
//   hangman → students tap letters on their phones to reveal a hidden word together
// time = seconds for the round. learn = what the host explains after the answer is shown.

window.SESSION = {
  club: "Coding Club",
  title: "What Happens When You Tap?",
  rounds: [
    {
      type: "mcq", time: 20,
      q: "When you tap Instagram, how far can your request travel?",
      options: ["Just your phone's memory", "The mobile tower near you", "Another city in India", "Across the world and back"],
      answer: 3,
      learn: "Your request can travel across the world and back in under a second. Let's follow that journey!"
    },
    {
      type: "hangman", time: 90,
      q: "The message your phone sends when you tap an app",
      word: "REQUEST",
      hint: "You make one when you ask for something.",
      learn: "Tapping an app creates a REQUEST: a tiny message that says “show me my feed”. Every app starts this way."
    },
    {
      type: "mcq", time: 20,
      q: "How does your request leave your phone?",
      options: ["Through the battery", "Through Wi-Fi or mobile data", "Through Bluetooth", "It never leaves the phone"],
      answer: 1,
      learn: "It flies out as a signal to your Wi-Fi router, or to the nearest mobile tower on data, and enters the internet."
    },
    {
      type: "tf", time: 15,
      q: "Computers find each other using names like instagram.com",
      answer: false,
      learn: "False! Computers use number addresses called IP addresses. Names are just for us humans."
    },
    {
      type: "hangman", time: 90,
      q: "DNS works like the internet's ________",
      word: "PHONEBOOK",
      hint: "Where people once looked up phone numbers.",
      learn: "DNS is the internet's phonebook: it turns a name like instagram.com into its number address, like your contacts app."
    },
    {
      type: "mcq", time: 20,
      q: "What is a data centre?",
      options: ["A shop that sells phones", "A building full of computers called servers", "A Wi-Fi router", "A type of app"],
      answer: 1,
      learn: "Instagram lives on servers inside huge buildings called data centres. Your request travels there."
    },
    {
      type: "tf", time: 15,
      q: "Most internet traffic between countries travels through satellites",
      answer: false,
      learn: "False! Most of it travels through cables lying on the ocean floor."
    },
    {
      type: "type", time: 30,
      q: "Your feed comes back to you in tiny pieces called…",
      answers: ["PACKETS", "PACKET"],
      learn: "PACKETS! The server sends your feed in small pieces, and your phone puts them together like a puzzle."
    },
    {
      type: "mcq", time: 25,
      q: "Why does Instagram sometimes keep loading… and loading?",
      options: ["Instagram is angry with you", "A weak signal loses packets, so they get sent again", "Your phone is too new", "The server is sleeping"],
      answer: 1,
      learn: "With a weak signal, some packets get lost on the way and have to be sent again. That's the loading you see."
    },
    {
      type: "hangman", time: 120,
      q: "Final mission: today's big idea, in 5 words",
      word: "EVERY TAP IS A REQUEST",
      hint: "It ends with the word from round 2.",
      learn: "Every tap is a request, a journey and a reply. Instagram, YouTube, WhatsApp: it's the same story every time!"
    }
  ]
};
