// How AI Sees (EduMoon AI Lab). For all years who know the basics of AI.
// Computer vision explained simply: images as numbers, the three main vision tasks, how models learn features, training data, where vision fails, and real uses with privacy.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const AS = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 45, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const ASN = (round, name, extra) => AS(round, name, Object.assign({ kind: "number", time: 60 }, extra));

// The take-home card: computer vision in 8 lines.
const VISION = [
  ["An image is numbers", "A grid of pixels. Each colour pixel has red, green and blue values from 0 to 255."],
  ["Classification", "What is in the picture? “Cat.”"],
  ["Detection", "What, and where? Boxes around each car."],
  ["Segmentation", "Which exact pixels belong to each thing?"],
  ["Layers learn features", "Edges first, then shapes, then whole objects."],
  ["Data decides quality", "Many varied, correctly labelled images. Every kind of case."],
  ["It can fail", "Bad light, odd angles, things it never saw, and unfair data."],
  ["Use it carefully", "Faces are personal data. Ask for consent and keep people in charge."]
];

window.GAME = {
  id: "how-ai-sees",
  title: "How AI Sees",
  club: "AI Lab",
  tagline: "Face unlock, number plates, X-rays. How does a computer see a picture?",
  art: window.STORY_ART,
  guide: {
    years: "All years (after What Is AI? or How ChatGPT Works)", time: "40 minutes", level: "Medium",
    about: "Sana wants to build an app that spots diseased tomato leaves for farmers near Vizag. First she needs to know how a computer sees. In 6 rounds, teams learn that images are just numbers, the difference between classification, detection and segmentation, how models learn edges and shapes, why training data decides everything, where vision fails, and how it is used in phones, hospitals and roads. Simple number questions make pixels real.",
    outcomes: "How images are stored as numbers, the three main computer vision tasks, the idea of learning features in layers, how to collect good image data, common failure cases, and privacy rules for face data.",
    tone: "Use the phones in the room. Ask who unlocked their phone with their face today, or used Google Lens. Keep maths very light: pixels and multiplication only.",
    extra: [["Live demo", "If you have a laptop, open any image in an editor and zoom in until you see the square pixels. It makes Round 1 click."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Seen",
    rulesEyebrow: "How How AI Sees works", rulesTitle: "Learn how machines see. Answer. Build smarter apps.",
    learnText: "The host explains one idea about computer vision.", crackTitle: "Answer",
    crackText: "Pick your answer on your phone and lock it in.",
    rulesExtra: "Some questions need a typed number. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Even vision engineers argue about this!", cracked: "saw it",
    next: "Next round →", finale: "Next →", winner: "are today’s vision experts!", endLine: "Sana’s leaf app is ready to train."
  },
  offerEyebrow: "EduMoon AI Lab · Vision level",
  offerTitle: "Your vision level",
  offers: [
    { min: 0.7, icon: "eye", title: "Vision Engineer", text: "You understand how machines see. Train a tiny image model with a free tool." },
    { min: 0.45, icon: "brain", title: "Vision Builder", text: "Strong! Think of one problem near you that a camera could help with." },
    { min: 0.2, icon: "search", title: "Pixel Explorer", text: "Good start. Zoom into a photo and count the pixels in one row." },
    { min: 0, icon: "book-open", title: "Vision Beginner", text: "Everyone starts here. Play What Is AI? and come back." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon AI Lab · Sana’s leaf app",
      title: "Sana wants an app that spots sick tomato leaves for farmers near Vizag. First she must understand one thing: how does a computer see? Can your team help?",
      cards: [["eye", "Pixels, tasks, features and data"], ["search", "Where vision works and where it fails"], ["trophy", "Your score decides your vision level"]]
    },
    { type: "rules" },

    // ---------- Round 1: Images are numbers ----------
    {
      type: "learn", door: 1,
      title: "To a computer, every picture is a grid of numbers.",
      points: [["Pixels", "Tiny squares in rows and columns"], ["Grayscale", "One number per pixel: 0 is black, 255 is white"], ["Colour", "Three numbers per pixel: red, green and blue, each 0 to 255"]],
      highlightLast: true,
      side: { label: "Examples", items: [["eye", "(255, 0, 0)", "Pure red"], ["eye", "(0, 0, 0)", "Black"], ["eye", "(255, 255, 255)", "White"]] }
    },
    ASN(1, "Images Are Numbers", {
      prompt: "A tiny grayscale image is 10 pixels wide and 8 pixels tall. How many numbers does the computer store?",
      answer: 80,
      hint: "One number per pixel. Width × height.",
      note: "10 × 8 = 80 pixels, one number each. A phone photo has millions.", badge: "chart-column"
    }),
    ASN(1, "Images Are Numbers", {
      prompt: "The same 10 × 8 image, but in colour (red, green, blue). How many numbers now?",
      answer: 240,
      hint: "Three numbers per pixel.",
      note: "80 pixels × 3 = 240. That is why colour images take more memory and time.", badge: "palette"
    }),
    AS(1, "Images Are Numbers", {
      prompt: "A pixel has the values (0, 255, 0). What colour is it?",
      options: ["Red", "Blue", "White", "Green"], answer: 3,
      hint: "Red, green, blue, in that order.",
      note: "Only green is at full value, so the pixel is bright green. Tomato leaves are full of these.", badge: "eye",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Three tasks ----------
    {
      type: "learn", door: 2,
      title: "Computer vision has three main jobs.",
      points: [["Classification", "What is in this picture? One label"], ["Detection", "What and where? A box around each object"], ["Segmentation", "Exactly which pixels belong to each object"]],
      highlightLast: true,
      side: { label: "Same photo of a road", items: [["list-checks", "Classification", "“Traffic scene”"], ["search", "Detection", "Boxes around 4 cars and 2 bikes"], ["palette", "Segmentation", "Colours every road pixel"]] }
    },
    AS(2, "Three Tasks", {
      prompt: "Sana’s app looks at one leaf photo and says “healthy” or “diseased”. Which task is this?",
      options: ["Detection", "Classification", "Segmentation", "Translation"], answer: 1,
      hint: "One photo, one label.",
      note: "Classification: one label for the whole image. The simplest vision task to start with.", badge: "list-checks"
    }),
    AS(2, "Three Tasks", {
      prompt: "A traffic camera draws a box around every helmetless rider. Which task is this?",
      options: ["Detection", "Classification", "Segmentation", "Generation"], answer: 0,
      hint: "What and where.",
      note: "Detection finds each object and its location with a box.", badge: "search"
    }),
    AS(2, "Three Tasks", {
      prompt: "A doctor wants the exact outline of a tumour on a scan, pixel by pixel. Which task?",
      options: ["Classification", "Detection", "Segmentation", "Compression"], answer: 2,
      hint: "Exact pixels, not just a box.",
      note: "Segmentation marks exactly which pixels belong to the tumour, so its size and shape can be measured.", badge: "heart",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Learning features ----------
    {
      type: "learn", door: 3,
      title: "Vision models learn in layers: edges, then shapes, then objects.",
      points: [["Early layers", "Spot simple edges and colours"], ["Middle layers", "Combine edges into shapes: circles, corners, textures"], ["Last layers", "Combine shapes into objects: a leaf, a face, a car"]],
      highlightLast: true,
      side: { label: "Nobody writes these rules", items: [["brain", "The model learns them", "From many labelled photos"], ["chart-column", "Training", "Adjusting millions of numbers"], ["check", "Result", "It recognises new photos"]] }
    },
    AS(3, "Learning Features", {
      prompt: "What do the FIRST layers of a vision model usually learn to detect?",
      options: ["Simple edges and colours", "Whole faces", "People’s names", "The meaning of a photo"], answer: 0,
      hint: "Simple first, complex later.",
      note: "Edges and colours first. Later layers build on them to find shapes, then whole objects.", badge: "route"
    }),
    AS(3, "Learning Features", {
      prompt: "Who writes the rule “a diseased leaf has brown spots” for the model?",
      options: ["A programmer, line by line", "The farmer, by typing it in", "The phone company that sold it", "Nobody; it learns from photos"], answer: 3,
      hint: "Rules vs learning.",
      note: "The model finds patterns like brown spots by itself from thousands of labelled examples.", badge: "brain"
    }),
    AS(3, "Learning Features", {
      prompt: "Why is it called “deep” learning?",
      options: ["It only works deep underwater", "It uses many stacked layers", "It is hard to understand", "It needs very deep thoughts"], answer: 1,
      hint: "Think of the layers.",
      note: "Deep means many layers. Each layer builds on the one before.", badge: "chart-column",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Explain to the room how a computer stores a colour photo, in 20 seconds.", note: "Pixels, three numbers each, 0 to 255.", points: 100 },

    // ---------- Round 4: Training data ----------
    {
      type: "learn", door: 4,
      title: "A vision model is only as good as its photos and labels.",
      points: [["Enough photos", "Hundreds or thousands per class"], ["Variety", "Different light, angles, phones, backgrounds"], ["Correct labels", "A wrong label teaches a wrong lesson"]],
      highlightLast: true,
      side: { label: "Balance matters", items: [["x", "950 healthy, 50 diseased", "It learns to say “healthy” a lot"], ["check", "Similar numbers of each", "Fairer learning"], ["check", "Photos from real farms", "Not only from the internet"]] }
    },
    AS(4, "Training Data", {
      prompt: "Sana took all her leaf photos at noon in bright sun. Farmers will use the app in the evening. What is the risk?",
      options: ["It may fail in dim evening light", "The model will be perfect in any light", "Evening photos are always better", "There is no risk at all"], answer: 0,
      hint: "It learns only from what it saw.",
      note: "Train with photos in every kind of light the users will have. Variety in data means reliability in use.", badge: "eye"
    }),
    ASN(4, "Training Data", {
      prompt: "Sana has 900 healthy leaf photos and 100 diseased ones. A lazy model always says “healthy”. What percentage of photos would it get right?",
      answer: 90,
      hint: "How many of the 1,000 are healthy?",
      note: "90% correct while never finding a single sick leaf. High accuracy can hide a useless model when data is unbalanced.", badge: "search"
    }),
    AS(4, "Training Data", {
      prompt: "A volunteer labelled 200 diseased leaves as “healthy” by mistake. What will happen?",
      options: ["Nothing, the model will notice", "The model will run faster", "The model learns some wrong lessons", "It only affects the colours"], answer: 2,
      hint: "The model trusts the labels.",
      note: "Wrong labels teach wrong lessons. Checking labels is boring but very important work.", badge: "x",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Where vision fails ----------
    {
      type: "learn", door: 5,
      title: "Vision models can fail in ways people would not.",
      points: [["New situations", "Things it never saw in training"], ["Bad conditions", "Fog, glare, blur, odd angles"], ["Unfair data", "If some faces or skin tones were rare in training, it can work worse for them"]],
      highlightLast: true,
      side: { label: "So always", items: [["users", "Test with real users", "In real conditions"], ["search", "Check every group", "Does it work equally well?"], ["shield", "Have a backup", "A person or a manual option"]] }
    },
    AS(5, "Where It Fails", {
      prompt: "A model trained only on cats and dogs is shown a goat. What will it most likely do?",
      options: ["Say “I don’t know”", "Learn the word goat itself", "Refuse to run", "Call it a cat or a dog"], answer: 3,
      hint: "It only knows two answers.",
      note: "It must pick one of the classes it knows, even when wrong. Models do not know what they do not know.", badge: "search"
    }),
    AS(5, "Where It Fails", {
      prompt: "A face unlock system works well for some people but often fails for others. What is the most likely cause?",
      options: ["Some people have unlucky faces", "Too few faces like theirs in training", "The phone screen is far too small", "Their faces change every single day"], answer: 1,
      hint: "Think about what it learned from.",
      note: "If the training data lacked variety, the model works worse for groups it rarely saw. Fair data matters.", badge: "scale"
    }),
    AS(5, "Where It Fails", {
      prompt: "A number-plate camera misreads plates on foggy winter mornings. Best fix?",
      options: ["Ban all driving in fog", "Make every number plate bigger", "Add foggy images to training", "Turn off the camera in winter"], answer: 2,
      hint: "Give it the conditions it struggles with.",
      note: "Add examples of the hard conditions to the training data, then test again.", badge: "cloud",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Uses and privacy (double) ----------
    {
      type: "learn", door: 6,
      title: "Vision is everywhere. Faces need extra care.",
      points: [["Everyday uses", "Face unlock, Google Lens, scanning documents, number plates"], ["Serious uses", "Medical scans, factory checks, crop disease"], ["Faces are personal data", "Ask for consent, store safely, explain why"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["shield", "Uses and privacy", "Real choices"], ["mic", "Then the final challenge", "Pitch a vision app"]] }
    },
    AS(6, "Uses and Privacy", {
      double: true,
      prompt: "A college wants face-recognition attendance. What must it do first?",
      options: ["Install the cameras secretly", "Tell students and get consent", "Share the faces with every company", "Delete all old attendance records"], answer: 1,
      hint: "Whose faces are they?",
      note: "Faces are personal data. People should know, agree, and know how it is stored and deleted.", badge: "shield"
    }),
    AS(6, "Uses and Privacy", {
      double: true,
      prompt: "An AI flags a possible problem on a chest X-ray. What should happen next?",
      options: ["Start the treatment immediately", "Ignore the AI completely", "A doctor reviews it first", "Tell the patient it is certain"], answer: 2,
      hint: "Who is responsible for the patient?",
      note: "The AI helps doctors look faster. A trained doctor still checks and decides.", badge: "heart"
    }),
    AS(6, "Uses and Privacy", {
      double: true,
      prompt: "Which is the best first project for Sana?",
      options: ["A leaf classifier, 500 photos each", "Self-driving car for Vizag roads", "Recognise every face in the city", "A model that sees through walls"], answer: 0,
      hint: "Small, real and possible.",
      note: "A simple classifier with good, varied photos is a perfect first project. Free tools can train one in an afternoon.", badge: "lightbulb",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best idea wins +200", prompt: "Pitch a computer vision app in 30 seconds: what it sees, which task it uses, and what data you need.", note: "Classification, detection or segmentation. The host picks the clearest pitch.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "Computer Vision in 8 Lines", note: "Screenshot this. Zoom into a photo tonight and find the pixels.", items: VISION },
    {
      type: "end",
      joinTitle: "Join the EduMoon AI Lab",
      joinText: "AI games, tools and projects every week. Learn to use AI the right way, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
