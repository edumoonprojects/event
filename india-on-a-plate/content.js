// India on a Plate (EduMoon Fun Zone). For all years and any crowd.
// A food quiz across India: which dish comes from which state, region by region, with a special Andhra and Telangana round and a final round on famous ingredients.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const FQZ = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 30, board: false, eyebrow: `Round ${round} · ${name}` }, extra);

// The take-home card: a food map of India.
const FOODMAP = [
  ["Andhra Pradesh", "Pootharekulu, gongura pickle, Kakinada kaja, Bandar laddu."],
  ["Telangana", "Hyderabadi biryani, haleem, sakinalu."],
  ["Karnataka", "Bisi bele bath, Mysore pak."],
  ["Kerala", "Puttu, appam and stew, and black pepper."],
  ["Punjab and Rajasthan", "Sarson da saag, dal baati churma."],
  ["Bihar and Odisha", "Litti chokha, chhena poda."],
  ["Gujarat, Maharashtra and Goa", "Dhokla, vada pav, bebinca."],
  ["Try one", "Pick one dish from today that you have never eaten. Try it this month."]
];

window.GAME = {
  id: "india-on-a-plate",
  title: "India on a Plate",
  club: "Fun Zone",
  tagline: "From pootharekulu to dhokla. Which dish comes from where?",
  art: window.STORY_ART,
  guide: {
    years: "All years · any crowd", time: "30 minutes", level: "Beginner",
    about: "A food tour of India in 6 rounds: the South, the North, the East and Northeast, the West, a special Andhra and Telangana round, and a final round on famous ingredients. Teams match dishes to the states they come from. Every reveal comes with a one-line food story.",
    outcomes: "A mental food map of India, a few new dishes to try, and pride in Andhra and Telangana food.",
    tone: "Food makes everyone talk. Expect arguments about which state makes the best version of something, and enjoy them. Ask the room who has eaten each dish. The Andhra round should feel like a home win.",
    extra: [["Make it tasty", "If budget allows, bring a box of pootharekulu or Kakinada kaja for the winning team. It always gets a cheer."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Tasted",
    rulesEyebrow: "How India on a Plate works", rulesTitle: "See the dish. Name the state. Eat your way to the top.",
    learnText: "The host introduces a region of India.", crackTitle: "Answer",
    crackText: "Pick the right state or answer and lock it in.",
    rulesExtra: "Faster answers score more. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Time for a food trip!", cracked: "got it",
    next: "Next round →", finale: "Next →", winner: "are today’s food explorers!", endLine: "India, one plate at a time."
  },
  offerEyebrow: "EduMoon Fun Zone · Food explorer",
  offerTitle: "Your food explorer level",
  offers: [
    { min: 0.7, icon: "trophy", title: "Food Master", text: "You know India by its food. Plan a food walk for your friends." },
    { min: 0.45, icon: "store", title: "Food Explorer", text: "Strong! Try one new dish from the map below this month." },
    { min: 0.2, icon: "map", title: "Curious Eater", text: "Good start. Ask a friend from another state about their favourite dish." },
    { min: 0, icon: "party-popper", title: "Hungry Learner", text: "Everyone starts here. Every answer today is a new dish to try!" }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Fun Zone · Food tour",
      title: "Every state in India has a dish it is proud of. Can your team match the plate to the place, from Kashmir to Kakinada?",
      cards: [["map", "6 regions, 18 dishes"], ["store", "A special Andhra and Telangana round"], ["trophy", "Your score decides your food explorer level"]]
    },
    { type: "rules" },

    // ---------- Round 1: The South ----------
    {
      type: "learn", door: 1,
      title: "Round 1: The South. Rice, coconut, lentils and spice.",
      points: [["Rice and lentils", "In idli, dosa, pongal and more"], ["Coconut", "Big in Kerala and coastal Karnataka"], ["Each state is different", "South Indian food is not one cuisine"]],
      highlightLast: true,
      side: { label: "This round", items: [["map", "Karnataka", ""], ["map", "Kerala", ""], ["map", "Tamil Nadu", ""]] }
    },
    FQZ(1, "The South", {
      prompt: "Bisi bele bath, a spicy rice and lentil dish, comes from which state?",
      options: ["Kerala", "Goa", "Karnataka", "Odisha"], answer: 2,
      hint: "Its name is in Kannada.",
      note: "Karnataka. The name means “hot lentil rice” in Kannada.", badge: "store"
    }),
    FQZ(1, "The South", {
      prompt: "Puttu, steamed rice flour layered with coconut, is a famous breakfast in which state?",
      options: ["Punjab", "Gujarat", "Kerala", "Bihar"], answer: 2,
      hint: "Coconut country.",
      note: "Kerala. Often eaten with kadala curry, made from black chickpeas.", badge: "store"
    }),
    FQZ(1, "The South", {
      prompt: "Mysore pak, a rich sweet made with gram flour and ghee, comes from which state?",
      options: ["Tamil Nadu", "Karnataka", "Andhra Pradesh", "Kerala"], answer: 1,
      hint: "Mysore is a city in this state.",
      note: "Karnataka. It is named after the city of Mysuru.", badge: "sparkles",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: The North ----------
    {
      type: "learn", door: 2,
      title: "Round 2: The North. Wheat, ghee, dairy and slow cooking.",
      points: [["Wheat", "Rotis, parathas and baatis"], ["Dairy", "Ghee, paneer and butter"], ["Desert and mountains", "Rajasthan’s dry food, Kashmir’s slow-cooked dishes"]],
      highlightLast: true,
      side: { label: "This round", items: [["map", "Punjab", ""], ["map", "Rajasthan", ""], ["map", "Jammu and Kashmir", ""]] }
    },
    FQZ(2, "The North", {
      prompt: "Sarson da saag with makki di roti is a winter favourite from which state?",
      options: ["Punjab", "Kerala", "Assam", "Telangana"], answer: 0,
      hint: "The name is in Punjabi.",
      note: "Punjab. Mustard greens with maize flour roti, usually with butter on top.", badge: "store"
    }),
    FQZ(2, "The North", {
      prompt: "Dal baati churma comes from which state?",
      options: ["Bihar", "Goa", "Karnataka", "Rajasthan"], answer: 3,
      hint: "A desert state where food had to last.",
      note: "Rajasthan. Baked wheat balls, lentils and a sweet crushed churma.", badge: "flame"
    }),
    FQZ(2, "The North", {
      prompt: "Rogan josh, a slow-cooked red curry, is famous from which region?",
      options: ["Kerala", "Kashmir", "Gujarat", "Odisha"], answer: 1,
      hint: "Mountains and cold winters.",
      note: "Kashmir. Part of the famous Kashmiri feast called wazwan.", badge: "map",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: East and Northeast ----------
    {
      type: "learn", door: 3,
      title: "Round 3: The East and Northeast. Sweets, fish and smoky flavours.",
      points: [["Chhena", "Fresh cheese used in many eastern sweets"], ["Fish and rice", "A daily favourite in coastal and river states"], ["Roasting", "Smoky, roasted flavours in Bihar"]],
      highlightLast: true,
      side: { label: "This round", items: [["map", "Bihar", ""], ["map", "Odisha", ""], ["map", "Assam", ""]] }
    },
    FQZ(3, "East and Northeast", {
      prompt: "Litti chokha, roasted wheat balls with mashed vegetables, comes from which state?",
      options: ["Kerala", "Bihar", "Goa", "Punjab"], answer: 1,
      hint: "An eastern state next to Uttar Pradesh.",
      note: "Bihar. The litti is stuffed with roasted gram flour called sattu.", badge: "flame"
    }),
    FQZ(3, "East and Northeast", {
      prompt: "Chhena poda, a baked cheese sweet with a burnt top, is from which state?",
      options: ["Gujarat", "Odisha", "Rajasthan", "Kerala"], answer: 1,
      hint: "Our neighbour to the north.",
      note: "Odisha. “Poda” means burnt, which gives it a caramel flavour.", badge: "sparkles"
    }),
    FQZ(3, "East and Northeast", {
      prompt: "Masor tenga, a light and sour fish curry, is from which state?",
      options: ["Punjab", "Assam", "Karnataka", "Rajasthan"], answer: 1,
      hint: "Brahmaputra river country.",
      note: "Assam. “Masor” means fish and “tenga” means sour.", badge: "waves",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Describe your favourite home dish in 3 sentences so well that the room wants to eat it.", note: "What it is, how it tastes, when your family makes it.", points: 100 },

    // ---------- Round 4: The West ----------
    {
      type: "learn", door: 4,
      title: "Round 4: The West. Snacks, street food and coastal sweets.",
      points: [["Gujarat", "Light, steamed and a little sweet"], ["Maharashtra", "Famous street food"], ["Goa", "Coconut, rice and Portuguese-influenced sweets"]],
      highlightLast: true,
      side: { label: "This round", items: [["map", "Gujarat", ""], ["map", "Maharashtra", ""], ["map", "Goa", ""]] }
    },
    FQZ(4, "The West", {
      prompt: "Dhokla, a soft steamed snack made from fermented batter, comes from which state?",
      options: ["Gujarat", "Kerala", "Bihar", "Assam"], answer: 0,
      hint: "Known for vegetarian snacks.",
      note: "Gujarat. Often served with green chutney and fried chillies.", badge: "store"
    }),
    FQZ(4, "The West", {
      prompt: "Vada pav, a potato fritter in a bun, is the street-food star of which city?",
      options: ["Mumbai", "Chennai", "Kolkata", "Delhi"], answer: 0,
      hint: "India’s busiest local trains.",
      note: "Mumbai, in Maharashtra. Cheap, fast and eaten on the go.", badge: "store"
    }),
    FQZ(4, "The West", {
      prompt: "Bebinca, a layered coconut and egg dessert, is famous in which state?",
      options: ["Goa", "Punjab", "Odisha", "Telangana"], answer: 0,
      hint: "Beaches and Portuguese history.",
      note: "Goa. Each layer is baked one at a time, so it takes hours to make.", badge: "sparkles",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Andhra and Telangana ----------
    {
      type: "learn", door: 5,
      title: "Round 5: Home ground. Andhra Pradesh and Telangana.",
      points: [["Spice", "Andhra food is known for its heat"], ["Pickles", "Gongura and avakaya are famous"], ["Sweets from small towns", "Atreyapuram, Kakinada, Machilipatnam"]],
      highlightLast: true,
      side: { label: "This round", items: [["map", "Andhra Pradesh", "Our state"], ["map", "Telangana", "Our neighbour"], ["star", "Home win?", "Let’s see"]] }
    },
    FQZ(5, "Andhra and Telangana", {
      prompt: "Pootharekulu, the paper-thin sweet, is famously made in which Andhra village?",
      options: ["Araku", "Tirupati", "Atreyapuram", "Bheemunipatnam"], answer: 2,
      hint: "In the Godavari region.",
      note: "Atreyapuram, in the Godavari region. The sheets are made from rice starch.", badge: "sparkles"
    }),
    FQZ(5, "Andhra and Telangana", {
      prompt: "Gongura pickle is made from which leaves?",
      options: ["Sorrel leaves", "Curry leaves", "Spinach", "Mint"], answer: 0,
      hint: "Sour leaves loved in Andhra.",
      note: "Sorrel (roselle) leaves, which are sour. Gongura is one of Andhra’s proudest flavours.", badge: "store"
    }),
    FQZ(5, "Andhra and Telangana", {
      prompt: "Hyderabadi biryani belongs to which state today?",
      options: ["Andhra Pradesh", "Karnataka", "Maharashtra", "Telangana"], answer: 3,
      hint: "Hyderabad is its capital.",
      note: "Telangana. Since 2014, Hyderabad has been Telangana’s capital.", badge: "map",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Famous ingredients (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: famous ingredients and where they grow. Double points!",
      points: [["Spices", "Some of the world’s most famous come from India"], ["Tea and fruit", "Named after the places they grow"], ["Last chance", "Double points can change the board"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["map", "Ingredients", "Where they grow"], ["mic", "Then the final challenge", "Food pitch"]] }
    },
    FQZ(6, "Famous Ingredients", {
      double: true,
      prompt: "Which spice was once called “black gold” and grows widely in Kerala?",
      options: ["Turmeric", "Cumin", "Black pepper", "Mustard"], answer: 2,
      hint: "Traders sailed across oceans for it.",
      note: "Black pepper. It was so valuable that traders came to the Kerala coast for it for centuries.", badge: "sparkles"
    }),
    FQZ(6, "Famous Ingredients", {
      double: true,
      prompt: "Darjeeling tea comes from which state?",
      options: ["Assam", "Sikkim", "Kerala", "West Bengal"], answer: 3,
      hint: "Darjeeling is a hill town in this state.",
      note: "West Bengal. Assam is famous for its own strong tea.", badge: "store"
    }),
    FQZ(6, "Famous Ingredients", {
      double: true,
      prompt: "Alphonso mangoes are most famously grown around which place?",
      options: ["Shimla, Himachal", "Jaipur, Rajasthan", "Patna, Bihar", "Ratnagiri, Maharashtra"], answer: 3,
      hint: "On the Konkan coast.",
      note: "Ratnagiri, on the Konkan coast of Maharashtra. Andhra is proud of its own banganapalli mangoes.", badge: "sparkles",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best pitch wins +200", prompt: "Pitch one Andhra dish to a foreign visitor in 30 seconds. Make them want to try it.", note: "Name, taste, story. The room votes with claps.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "A Food Map of India", note: "Screenshot this. Try one new dish this month.", items: FOODMAP },
    {
      type: "end",
      joinTitle: "Join the EduMoon Fun Zone",
      joinText: "Quizzes, party games and brain teasers every week. Come for the fun, stay for the people.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
