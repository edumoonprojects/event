// Neural Networks Unboxed (EduMoon AI Lab). Advanced: for students who know What Is AI? and some school maths.
// What happens inside a neural network: a single neuron, activation functions, layers and parameters, training with loss and gradient descent, overfitting, and modern networks for images and text. Light arithmetic only.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const NW = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 50, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const NWN = (round, name, extra) => NW(round, name, Object.assign({ kind: "number", time: 70 }, extra));

// The take-home card: neural networks in 8 lines.
const NNCARD = [
  ["Neuron", "Multiply each input by a weight, add them up, add a bias."],
  ["Activation", "A rule applied after: ReLU keeps positives and turns negatives into 0."],
  ["Layers", "Input layer → hidden layers → output layer."],
  ["Parameters", "All the weights and biases. Training means finding good values for them."],
  ["Loss", "One number that says how wrong the network is."],
  ["Gradient descent", "Nudge each weight a little in the direction that lowers the loss. Repeat."],
  ["Overfitting", "Great on training data, poor on new data. Fix with more data or simpler models."],
  ["Today’s giants", "CNNs for images, transformers with attention for text. Same basic idea, at huge scale."]
];

window.GAME = {
  id: "neural-networks-unboxed",
  title: "Neural Networks Unboxed",
  club: "AI Lab",
  tagline: "Open the black box. See how a neural network actually learns.",
  art: window.STORY_ART,
  guide: {
    years: "2nd year onwards (after What Is AI? or Machine Learning 101)", time: "45 minutes", level: "Advanced",
    about: "Everyone says “neural network” but few can explain one. In 6 rounds, teams build up from a single neuron to modern models: weighted sums and bias, activation functions, layers and parameter counting, training with loss and gradient descent, overfitting and how to fix it, and how CNNs and transformers use the same ideas at huge scale. Number questions use simple arithmetic so the ideas become concrete.",
    outcomes: "How a neuron computes, why activations matter, what parameters are, how gradient descent trains a network, how to recognise overfitting, and a plain-language view of CNNs and transformers.",
    tone: "The maths here is simple multiplication and addition. Reassure students early. Draw one neuron on the board with two inputs and walk through the numbers on every reveal.",
    extra: [["Draw it", "Draw circles for neurons and lines for weights. Write the numbers on the lines. Most students get it the moment they see one worked example."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Unboxed",
    rulesEyebrow: "How Neural Networks Unboxed works", rulesTitle: "Learn one piece. Do the maths. Open the black box.",
    learnText: "The host explains one part of a neural network.", crackTitle: "Compute",
    crackText: "Work it out and lock in your answer.",
    rulesExtra: "Many questions need a typed number. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Let’s work it through together!", cracked: "unboxed it",
    next: "Next round →", finale: "Next →", winner: "have unboxed neural networks!", endLine: "The black box is open."
  },
  offerEyebrow: "EduMoon AI Lab · Deep learning level",
  offerTitle: "Your deep learning level",
  offers: [
    { min: 0.7, icon: "brain", title: "Network Architect", text: "You understand the insides. Train a tiny network in a free notebook." },
    { min: 0.45, icon: "chart-column", title: "Neuron Builder", text: "Strong! Compute one neuron by hand with your own numbers." },
    { min: 0.2, icon: "lightbulb", title: "Layer Learner", text: "Good start. Revise neurons and ReLU from the card below." },
    { min: 0, icon: "book-open", title: "Box Opener", text: "Everyone starts here. Play Machine Learning 101 first." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon AI Lab · Inside the black box",
      title: "Everyone talks about neural networks. Almost nobody can explain what happens inside one. Can your team open the box, one neuron at a time?",
      cards: [["brain", "Neurons, layers and training"], ["chart-column", "Simple maths, real understanding"], ["trophy", "Your score decides your deep learning level"]]
    },
    { type: "rules" },

    // ---------- Round 1: One neuron ----------
    {
      type: "learn", door: 1,
      title: "A neuron multiplies, adds, and adds a bias.",
      points: [["Inputs × weights", "Each input gets its own weight: how much it matters"], ["Add them up", "Then add a bias, a small shift"], ["Example", "inputs 2 and 3, weights 1 and 2, bias 1 → 2×1 + 3×2 + 1 = 9"]],
      highlightLast: true,
      side: { label: "Exam pass predictor", items: [["chart-column", "x1 = hours studied", "weight 2"], ["chart-column", "x2 = classes attended", "weight 1"], ["zap", "bias", "−10"]] }
    },
    NWN(1, "One Neuron", {
      prompt: "Inputs 4 and 5. Weights 2 and 1. Bias 3. What is the neuron’s sum (4×2 + 5×1 + 3)?",
      answer: 16,
      hint: "8 + 5 + 3.",
      note: "8 + 5 + 3 = 16. That is all a single neuron does before its activation.", badge: "chart-column"
    }),
    NWN(1, "One Neuron", {
      prompt: "Exam predictor: hours = 6 (weight 2), classes = 8 (weight 1), bias = −10. What is the sum?",
      answer: 10,
      hint: "6×2 + 8×1 − 10.",
      note: "12 + 8 − 10 = 10. A positive sum here might mean “likely to pass”.", badge: "graduation-cap"
    }),
    NW(1, "One Neuron", {
      prompt: "What does a large weight on an input mean?",
      options: ["That input is ignored", "That input matters more", "The input is always zero", "The network is broken"], answer: 1,
      hint: "Weight = importance.",
      note: "Bigger weights mean the input matters more. Training finds the right weights.", badge: "scale",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Activation functions ----------
    {
      type: "learn", door: 2,
      title: "After the sum, an activation function decides the output.",
      points: [["ReLU", "Keep positive numbers; turn negatives into 0"], ["Sigmoid", "Squash any number into 0 to 1, like a probability"], ["Why bother?", "Without activations, stacked layers act like one simple line"]],
      highlightLast: true,
      side: { label: "ReLU examples", items: [["check", "ReLU(7)", "7"], ["check", "ReLU(−3)", "0"], ["check", "ReLU(0)", "0"]] }
    },
    NWN(2, "Activation", {
      prompt: "What is ReLU(−6)?",
      answer: 0,
      hint: "Negatives become…",
      note: "ReLU turns any negative into 0.", badge: "zap"
    }),
    NWN(2, "Activation", {
      prompt: "A neuron’s sum is 2×3 + 1×(−10) + 1. What is the output after ReLU?",
      answer: 0,
      hint: "Work out the sum first: 6 − 10 + 1.",
      note: "The sum is −3, and ReLU(−3) = 0. This neuron stays “off” for this input.", badge: "zap"
    }),
    NW(2, "Activation", {
      prompt: "Why do neural networks need non-linear activations like ReLU?",
      options: ["To make the maths slower", "To remove all the weights", "To learn curved, complex patterns", "Because computers need it to start"], answer: 2,
      hint: "Without them, many layers collapse into one straight line.",
      note: "Non-linear activations let deep networks learn complex shapes like faces and speech.", badge: "brain",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Layers and parameters ----------
    {
      type: "learn", door: 3,
      title: "Neurons are stacked in layers. Parameters are what the network learns.",
      points: [["Input layer", "The raw numbers: pixels, words, sensor readings"], ["Hidden layers", "Find patterns step by step"], ["Parameters", "Every weight and every bias. 3 inputs to 2 neurons: 3×2 weights + 2 biases = 8"]],
      highlightLast: true,
      side: { label: "Counting parameters", items: [["list-checks", "Weights", "inputs × neurons"], ["list-checks", "Biases", "one per neuron"], ["chart-column", "Total", "weights + biases"]] }
    },
    NWN(3, "Layers and Parameters", {
      prompt: "A layer connects 4 inputs to 3 neurons. How many parameters (weights + biases)?",
      answer: 15,
      hint: "4 × 3 weights, plus 3 biases.",
      note: "12 weights + 3 biases = 15 parameters.", badge: "list-checks"
    }),
    NWN(3, "Layers and Parameters", {
      prompt: "A tiny image is 10 × 10 grayscale pixels. How many numbers go into the input layer?",
      answer: 100,
      hint: "One number per pixel.",
      note: "100 inputs. A real photo has millions, which is why networks get big.", badge: "eye"
    }),
    NW(3, "Layers and Parameters", {
      prompt: "When people say a model has “billions of parameters”, what are they counting?",
      options: ["The number of users", "Lines of code", "Training days", "Weights and biases"], answer: 3,
      hint: "What does the network learn?",
      note: "Parameters are the learned numbers. More parameters can learn more, but need more data and computing.", badge: "chart-column",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Explain one neuron to the room using an everyday decision, like whether to carry an umbrella.", note: "Inputs, weights, a sum, a decision. 20 seconds.", points: 100 },

    // ---------- Round 4: Training ----------
    {
      type: "learn", door: 4,
      title: "Training: measure the error, then nudge the weights.",
      points: [["Loss", "One number for how wrong the predictions are"], ["Gradient", "Which direction makes the loss go down"], ["Update", "new weight = old weight − learning rate × gradient"]],
      highlightLast: true,
      side: { label: "Like walking downhill in fog", items: [["route", "Feel the slope", "That is the gradient"], ["timer", "Take a step", "Size = learning rate"], ["check", "Repeat", "Until you reach the bottom"]] }
    },
    NWN(4, "Training", {
      prompt: "A weight is 10. The gradient is 4. The learning rate is 0.5. What is the new weight?",
      answer: 8,
      hint: "10 − 0.5 × 4.",
      note: "10 − 2 = 8. One small step downhill. Training repeats this millions of times.", badge: "route"
    }),
    NW(4, "Training", {
      prompt: "The learning rate is set far too high. What usually happens?",
      options: ["Training becomes perfect", "Nothing changes", "The network gets smaller", "The loss jumps around"], answer: 3,
      hint: "Giant steps downhill.",
      note: "Steps that are too big overshoot the bottom again and again. Too small, and training takes forever.", badge: "alarm-clock"
    }),
    NW(4, "Training", {
      prompt: "During training, what should happen to the loss?",
      options: ["It should go up over time", "It should stay exactly the same", "It should go down over time", "It should become negative"], answer: 2,
      hint: "Loss measures wrongness.",
      note: "Falling loss means the network is getting less wrong on its training data.", badge: "chart-column",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Overfitting ----------
    {
      type: "learn", door: 5,
      title: "Overfitting: memorising instead of learning.",
      points: [["The sign", "Very high training accuracy, much lower accuracy on new data"], ["Why", "Too little data or too big a model for the task"], ["Fixes", "More data, simpler model, dropout, stop training early"]],
      highlightLast: true,
      side: { label: "Like a student who…", items: [["x", "Memorised last year’s answers", "Fails new questions"], ["check", "Understood the concepts", "Handles new questions"], ["search", "Always test on unseen data", "The real exam"]] }
    },
    NWN(5, "Overfitting", {
      prompt: "A model scores 99% on training data and 71% on new test data. What is the gap in percentage points?",
      answer: 28,
      hint: "99 − 71.",
      note: "A 28-point gap is a strong sign of overfitting. It memorised rather than learned.", badge: "search"
    }),
    NW(5, "Overfitting", {
      prompt: "Which is a good fix for overfitting?",
      options: ["Collect more varied data", "Train for much longer", "Remove the test set", "Make the model much bigger"], answer: 0,
      hint: "Give it more to learn from.",
      note: "More varied data makes memorising harder and real learning easier. Dropout and early stopping also help.", badge: "chart-column"
    }),
    NW(5, "Overfitting", {
      prompt: "Why must the test data be kept separate from training data?",
      options: ["To make training faster", "To test on truly new examples", "Because test data is less accurate", "To save storage space"], answer: 1,
      hint: "Like an exam with new questions.",
      note: "If the model has seen the test questions, a high score proves nothing.", badge: "shield",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Modern networks (double) ----------
    {
      type: "learn", door: 6,
      title: "Today’s big models use the same ideas, at a huge scale.",
      points: [["CNNs", "Small filters slide across images to find edges and shapes"], ["Transformers", "Attention lets each word look at every other word"], ["Same core", "Weighted sums, activations, loss, gradient descent"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["eye", "Images and text", "CNNs and transformers"], ["mic", "Then the final challenge", "Explain training simply"]] }
    },
    NW(6, "Modern Networks", {
      double: true,
      prompt: "Which type of network is classically used for images?",
      options: ["A convolutional network", "A single neuron", "A spreadsheet formula", "A sorting algorithm"], answer: 0,
      hint: "Filters sliding across pixels.",
      note: "CNNs use small filters that slide over the image to spot features like edges and textures.", badge: "eye"
    }),
    NW(6, "Modern Networks", {
      double: true,
      prompt: "In the sentence “The bank of the river was muddy”, what does attention help a transformer do?",
      options: ["Use “river” to read “bank”", "Count the letters", "Translate every word separately", "Skip short words"], answer: 0,
      hint: "Words give each other context.",
      note: "Attention lets each word weigh the others, so “bank” is read as a riverbank, not a money bank.", badge: "languages"
    }),
    NWN(6, "Modern Networks", {
      double: true,
      prompt: "Final sum: inputs 1, 2 and 3 with weights 4, 0 and 2, bias −5. What is ReLU of the sum?",
      answer: 5,
      hint: "4 + 0 + 6 − 5, then ReLU.",
      note: "4 + 0 + 6 − 5 = 5, and ReLU(5) = 5. From one neuron to billions: the same idea.", badge: "brain",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best explanation wins +200", prompt: "Explain how a neural network learns, in 30 seconds, without any formulas.", note: "Guess, measure how wrong, adjust a little, repeat. The host picks the clearest.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "Neural Networks in 8 Lines", note: "Screenshot this. Try computing one neuron with your own numbers.", items: NNCARD },
    {
      type: "end",
      joinTitle: "Join the EduMoon AI Lab",
      joinText: "AI games, tools and projects every week. Learn to use AI the right way, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
