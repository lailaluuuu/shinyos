// Subject → lessons mapping
console.log("🚀 App loading...");

// Immediate test
setTimeout(() => {
  const nextBtn = document.querySelector("#nextBtn");
  console.log("Button check:", nextBtn ? "✅ Found" : "❌ Missing");
}, 1000);

// === CATEGORY STRUCTURE ===
const categories = {
  finance: {
    id: "finance",
    icon: "💰",
    title: "Finance & Markets",
    subtitle: "Money, investing, and crypto",
    color: "#FFD700",
    subjects: ["money", "investing", "crypto"]
  },
  sciences: {
    id: "sciences",
    icon: "🔬",
    title: "Sciences",
    subtitle: "Biology, physics, and climate",
    color: "#4A90E2",
    subjects: ["biology", "nuclear", "glaciers", "blackholes", "science"]
  },
  human: {
    id: "human",
    icon: "🧠",
    title: "Human Systems",
    subtitle: "Psychology, game theory, history",
    color: "#9B59B6",
    subjects: ["psych", "humans", "history"]
  },
  tech: {
    id: "tech",
    icon: "⚙️",
    title: "Technology & Resources",
    subtitle: "Systems, space, and materials",
    color: "#E74C3C",
    subjects: ["maths", "space", "minerals"]
  },
  existential: {
    id: "existential",
    icon: "🌋",
    title: "Existential Risks",
    subtitle: "World-ending scenarios",
    color: "#E67E22",
    subjects: ["apocalypse"]
  }
};

// Subject metadata for navigation
const subjectMeta = {
  money: { icon: "💵", title: "Economics Hub", subtitle: "How Money Works" },
  investing: { icon: "📈", title: "Investing District", subtitle: "Stock Markets & Strategy" },
  crypto: { icon: "🪙", title: "Crypto Wild West", subtitle: "Digital Gold & Chaos" },
  biology: { icon: "🧬", title: "Bio Lab", subtitle: "CRISPR & Immortality" },
  nuclear: { icon: "☢️", title: "Nuclear Core", subtitle: "Atoms & Explosions" },
  glaciers: { icon: "❄️", title: "Glacier Lab", subtitle: "Frozen Time Machines" },
  blackholes: { icon: "🌌", title: "Black Hole Zone", subtitle: "Cosmic Violence" },
  science: { icon: "🔬", title: "Science Lab", subtitle: "Placebo Effect" },
  psych: { icon: "🧠", title: "Psychology Quarter", subtitle: "Cognitive Biases" },
  humans: { icon: "🧩", title: "Game Theory Lab", subtitle: "Strategic Decisions" },
  history: { icon: "🏛️", title: "History Port", subtitle: "Empire Collapse" },
  maths: { icon: "⌨️", title: "Tech Grid", subtitle: "Path Dependence" },
  space: { icon: "🚀", title: "Cosmic History", subtitle: "The Space Race" },
  minerals: { icon: "⚡", title: "Resource Mines", subtitle: "Lithium, Copper & Power" },
  apocalypse: { icon: "🌋", title: "Apocalypse Zone", subtitle: "World-Ending Scenarios" },
  economics: { icon: "💰", title: "Economics City", subtitle: "Planned Economies" }
};

const subjectLessons = {
  economics: [
    {
      id: 1,
      type: "content",
      title: "What is a planned economy?",
      paragraphs: [
        "In a planned economy, the government takes control of the big economic decisions: what gets produced, how much is made, and how it is allocated.",
        "Instead of buyers and sellers shaping the market, the state plays conductor — setting targets for factories, farms, and services."
      ]
    },
    {
      id: 2,
      type: "quiz",
      question: "Who usually sets prices in a planned economy?",
      options: [
        { id: "a", text: "The government", correct: true },
        { id: "b", text: "Individual buyers and sellers", correct: false },
        { id: "c", text: "Private companies negotiating freely", correct: false }
      ],
      explanation:
        "In a planned economy, key prices are typically set by the state as part of the overall plan, not left to market forces."
    },
    {
      id: 3,
      type: "content",
      title: "Strengths and weaknesses",
      paragraphs: [
        "Advantage: a planned economy can move resources quickly towards national goals — for example, rapid industrialisation or wartime production.",
        "Weakness: because it doesn’t rely on real-time customer choices, it often misjudges what people actually want, leading to shortages of some goods and surpluses of others."
      ]
    },
    {
      id: 4,
      type: "quiz",
      question: "Which outcome fits a planned economy?",
      options: [
        { id: "a", text: "Long queues and shortages for some goods", correct: true },
        { id: "b", text: "Instant price spikes whenever demand rises", correct: false },
        { id: "c", text: "Unlimited product choice on every shelf", correct: false }
      ],
      explanation:
        "Planned systems have a history of queues and shortages, because central planners can’t perfectly predict changing preferences."
    }
  ],

  // NEW: space + history subject
  space: [
    {
      id: 1,
      type: "content",
      title: "What was the Space Race?",
      paragraphs: [
        "The Space Race was a Cold War competition between the United States and the Soviet Union to achieve major milestones in space exploration.",
        "It wasn't just about rockets — it was about proving technological power, national prestige, and which system looked stronger to the rest of the world."
      ]
    },
    {
      id: 2,
      type: "quiz",
      question: "Which two countries were the main rivals in the Space Race?",
      options: [
        { id: "a", text: "United States and Soviet Union", correct: true },
        { id: "b", text: "United Kingdom and France", correct: false },
        { id: "c", text: "China and Japan", correct: false }
      ],
      explanation:
        "The Space Race was mainly between the USA and the USSR, as part of the wider Cold War rivalry."
    },
    {
      id: 3,
      type: "content",
      title: "Key milestones",
      paragraphs: [
        "1957: Sputnik 1 becomes the first artificial satellite in orbit, launched by the Soviet Union — a huge shock to the world.",
        "1961: Yuri Gagarin becomes the first human in space.",
        "1969: Apollo 11 lands the first humans on the Moon, with Neil Armstrong and Buzz Aldrin walking on the surface."
      ]
    },
    {
      id: 4,
      type: "quiz",
      question: "Which of these was the first artificial satellite in space?",
      options: [
        { id: "a", text: "Sputnik 1", correct: true },
        { id: "b", text: "Apollo 11", correct: false },
        { id: "c", text: "Hubble Space Telescope", correct: false }
      ],
      explanation:
        "Sputnik 1, launched by the Soviet Union in 1957, was the first artificial satellite in Earth orbit."
    }
  ],

  // Psychology: Cognitive biases
  psych: [
    {
      id: 1,
      type: "content",
      title: "Mental shortcuts that run your life",
      paragraphs: [
        "Your brain uses cognitive biases — mental shortcuts that help you make quick decisions without burning too much energy.",
        "The problem? These shortcuts evolved for a different world. They're fast, but not always accurate. And they run quietly in the background, shaping your choices without you noticing.",
        "Your brain processes **11 million bits of information per second**. But your conscious mind can only handle **40 bits**. To cope, your brain takes shortcuts—heuristics—that worked for our ancestors but backfire in modern life.",
        "Example: See a rustling bush? Your ancestors assumed **predator** and ran. False alarm 99% of the time, but the 1% who hesitated got eaten. Today, that same wiring makes you catastrophize and see threats everywhere.",
        "These biases aren't bugs. They're **features** from evolution. They kept us alive. But now they make us bad at statistics, terrible at investing, and easily manipulated by marketing."
      ]
    },
    {
      id: 2,
      type: "quiz",
      question: "Why does your brain use cognitive biases?",
      options: [
        { id: "a", text: "To save energy and make quick decisions", correct: true },
        { id: "b", text: "To confuse you deliberately", correct: false },
        { id: "c", text: "Because logic is too boring", correct: false }
      ],
      explanation:
        "Biases are efficiency tools. Your brain can't analyse every detail, so it takes shortcuts — which sometimes backfire."
    },
    {
      id: 3,
      type: "content",
      title: "Confirmation bias in action",
      paragraphs: [
        "Confirmation bias makes you search for, interpret, and remember information that confirms what you already believe.",
        "Example: You think a politician is corrupt. Every news story gets filtered through that lens — you notice evidence that supports it and ignore evidence that doesn't. Both sides of every argument do this.",
        "Real study: Researchers showed identical evidence to Democrats and Republicans about a policy. **Democrats rated it 8/10 when told it was from Obama. Republicans rated the same evidence 3/10.** Switch the name, switch the rating. The evidence didn't change. The bias did.",
        "This is why arguments online go nowhere. You're not debating facts. You're defending your identity. Facts that threaten your worldview **feel like physical attacks**. Your brain literally processes them the same way.",
        "The fix? **Actively seek disconfirming evidence.** Ask yourself: 'What would prove me wrong? Am I looking for it?' Most people never ask. They win arguments in their heads and call it wisdom."
      ]
    },
    {
      id: 4,
      type: "quiz",
      question: "What does confirmation bias make you do?",
      options: [
        { id: "a", text: "Look for information that confirms your existing beliefs", correct: true },
        { id: "b", text: "Change your mind when faced with facts", correct: false },
        { id: "c", text: "Weigh all evidence equally", correct: false }
      ],
      explanation:
        "Confirmation bias is your brain's tendency to cherry-pick evidence that fits your current worldview."
    },
    {
      id: 5,
      type: "content",
      title: "The availability heuristic",
      paragraphs: [
        "You judge how likely something is based on how easily examples come to mind — not based on actual statistics.",
        "Plane crashes feel scarier than car accidents because they're dramatic and reported everywhere. But statistically? You're far safer in a plane. Your brain doesn't run the numbers — it remembers the vivid story.",
        "The numbers: You have a **1 in 11 million chance** of dying in a plane crash. You have a **1 in 5,000 chance** of dying in a car crash. That's **2,200x more dangerous**. But plane crashes make headlines for weeks. Car crashes? Page 7, if that.",
        "Why this matters: After 9/11, Americans avoided planes and drove instead. The **extra road deaths** from this shift exceeded the deaths on 9/11 itself. Fear of flying killed more people than the terrorists did. Irrationality has consequences.",
        "Media amplifies this bias. Shark attacks? **6 deaths per year globally**. Vending machines falling on people? **13 deaths per year**. Guess which one gets wall-to-wall coverage? Your brain remembers drama, not data.",
        "Fix: When you feel fear, **check the numbers**. Is this actually dangerous, or just vivid? Most things that terrify you are statistically harmless. Most things that kill you are boring (heart disease, car crashes, smoking)."
      ]
    },
    {
      id: 6,
      type: "quiz",
      question: "Why do plane crashes feel more dangerous than they actually are?",
      options: [
        { id: "a", text: "They're dramatic and easy to remember", correct: true },
        { id: "b", text: "They happen more often than car crashes", correct: false },
        { id: "c", text: "Statistics are intentionally hidden", correct: false }
      ],
      explanation:
        "The availability heuristic tricks you — memorable events feel more common than they are."
    },
    {
      id: 7,
      type: "quiz",
      question: "What's the best defense against cognitive biases?",
      options: [
        { id: "a", text: "Actively seek evidence that challenges your beliefs", correct: true },
        { id: "b", text: "Trust your gut instincts more", correct: false },
        { id: "c", text: "Avoid making any decisions", correct: false }
      ],
      explanation: "You can't eliminate biases, but you can **notice them**. Ask: 'What would prove me wrong? Am I looking for it?'"
    },
    {
      id: 8,
      type: "final-quiz",
      title: "🎓 FINAL EXAM: Psychology Mastery",
      instruction: "Test your understanding of cognitive biases. You need 3/4 correct to pass.",
      passingScore: 3,
      totalQuestions: 4,
      questions: [
        {
          q: "Why does your brain use cognitive biases?",
          options: [
            { id: "a", text: "To save energy and make quick decisions", correct: true },
            { id: "b", text: "To make you smarter", correct: false },
            { id: "c", text: "Because logic is too slow", correct: false }
          ],
          explanation: "Biases are **efficiency tools**. Your brain can't analyze everything, so it takes shortcuts."
        },
        {
          q: "What is confirmation bias?",
          options: [
            { id: "a", text: "Looking for information that confirms your existing beliefs", correct: true },
            { id: "b", text: "Confirming facts before accepting them", correct: false },
            { id: "c", text: "Being too confident in your abilities", correct: false }
          ],
          explanation: "Confirmation bias = cherry-picking evidence that supports your worldview while ignoring contradictions."
        },
        {
          q: "Why do plane crashes feel more dangerous than car crashes?",
          options: [
            { id: "a", text: "Availability heuristic: they're dramatic and memorable", correct: true },
            { id: "b", text: "They actually are more dangerous", correct: false },
            { id: "c", text: "Media doesn't cover car crashes", correct: false }
          ],
          explanation: "Your brain judges risk by **how easily examples come to mind**, not by actual statistics. Planes are **2,200x safer** than cars."
        },
        {
          q: "After 9/11, Americans avoided planes and drove more. What happened?",
          options: [
            { id: "a", text: "Extra road deaths exceeded 9/11 deaths", correct: true },
            { id: "b", text: "Fewer people died overall", correct: false },
            { id: "c", text: "Plane safety improved", correct: false }
          ],
          explanation: "Fear of flying killed more people than the terrorists did. **Irrationality has consequences.**"
        }
      ]
    }
  ],

  // Technology: QWERTY and path dependence
  maths: [
    {
      id: 1,
      type: "content",
      title: "Why QWERTY still exists",
      paragraphs: [
        "The QWERTY keyboard layout was designed in the 1870s for mechanical typewriters. The goal? Prevent jams by separating commonly used letter pairs.",
        "Better layouts exist — like Dvorak, which is faster and more comfortable. But QWERTY won anyway. This is path dependence: once something becomes the standard, switching has a cost that's hard to justify."
      ]
    },
    {
      id: 2,
      type: "quiz",
      question: "Why was QWERTY originally designed?",
      options: [
        { id: "a", text: "To prevent mechanical typewriter jams", correct: true },
        { id: "b", text: "To maximize typing speed", correct: false },
        { id: "c", text: "Because it spells a word", correct: false }
      ],
      explanation:
        "QWERTY was optimized for old mechanical constraints, not for your fingers. But we're stuck with it now."
    },
    {
      id: 3,
      type: "content",
      title: "The lock-in effect",
      paragraphs: [
        "Once millions of people learned QWERTY, it became the default. Schools taught it. Jobs required it. Keyboards were manufactured for it.",
        "Switching to a 'better' system means retraining everyone, replacing hardware, and convincing an entire industry to change at once. The cost is too high — even if the new system is genuinely better."
      ]
    },
    {
      id: 4,
      type: "quiz",
      question: "What keeps QWERTY dominant today?",
      options: [
        { id: "a", text: "The cost of switching to something new is too high", correct: true },
        { id: "b", text: "It's still the fastest possible layout", correct: false },
        { id: "c", text: "No better alternatives have been invented", correct: false }
      ],
      explanation:
        "Path dependence means inferior systems can win if they get there first. Switching costs create lock-in."
    },
    {
      id: 5,
      type: "content",
      title: "Path dependence everywhere",
      paragraphs: [
        "QWERTY is just one example. The same principle applies to: why we drive on different sides of the road in different countries, why electric vs gasoline cars took so long to compete, and why old software standards persist decades after better ones appear.",
        "The first mover doesn't have to be the best — just good enough to build momentum."
      ]
    }
  ],

  // History: Why empires collapse
  history: [
    {
      id: 1,
      type: "content",
      title: "Why empires collapse",
      paragraphs: [
        "Empires don't usually fall because of a single catastrophic event. They decline slowly — through overstretch, internal decay, and failure to adapt.",
        "Rome, the Ottomans, the British Empire: the pattern repeats. They grow powerful, expand beyond what they can manage, lose the systems that made them strong, and crumble when challenged.",
        "The lifecycle: **Birth** (military conquest, new technology). **Growth** (expansion, wealth, stability). **Peak** (power, prestige, overconfidence). **Decline** (overextension, corruption, internal divisions). **Collapse** (invasion, bankruptcy, or fragmentation).",
        "Rome lasted **500 years** as a republic, then **500 years** as an empire. The Ottoman Empire lasted **600 years**. The British Empire peaked for **200 years**. The Soviet Union? **69 years**. Speed of collapse is accelerating.",
        "Key warning signs: **Military overstretch** (Rome couldn't defend borders). **Currency debasement** (Roman coins went from silver to bronze). **Elite corruption** (Byzantine court intrigues). **Loss of innovation** (China abandoned naval exploration in 1433). **Divided loyalty** (Roman generals fought each other, not enemies).",
        "Modern echoes: Does this sound familiar? Overextended military, currency printing, political dysfunction, crumbling infrastructure, declining education, rising inequality. Empires don't announce their collapse. They just fade, slowly, until suddenly."
      ]
    },
    {
      id: 2,
      type: "quiz",
      question: "What's a common cause of empire collapse?",
      options: [
        { id: "a", text: "Overextension beyond what they can manage", correct: true },
        { id: "b", text: "A single sudden invasion", correct: false },
        { id: "c", text: "Running out of gold", correct: false }
      ],
      explanation:
        "Most empires collapse slowly from internal strain, not from one big external shock."
    },
    {
      id: 3,
      type: "content",
      title: "The Roman pattern",
      paragraphs: [
        "Rome's collapse took centuries. Its borders became too expensive to defend. Corruption weakened institutions. The currency debased. Loyalty shifted from the state to local warlords.",
        "By the time 'barbarians' arrived, Rome was already hollow. The invaders just pushed over a structure that had rotted from within."
      ]
    },
    {
      id: 4,
      type: "quiz",
      question: "How did Rome's empire end?",
      options: [
        { id: "a", text: "Slow internal decay over centuries", correct: true },
        { id: "b", text: "One decisive military defeat", correct: false },
        { id: "c", text: "A sudden natural disaster", correct: false }
      ],
      explanation:
        "Rome fell gradually. The final invasions were symptoms, not the cause."
    },
    {
      id: 5,
      type: "content",
      title: "Modern echoes",
      paragraphs: [
        "The pattern still holds. States that overextend militarily, neglect infrastructure, lose institutional trust, or fail to adapt to new realities face similar pressures.",
        "The British Empire shrank when the cost of holding it exceeded the benefit. The Soviet Union collapsed when its economic model couldn't keep up. Empires end when the math stops working."
      ]
    },
    {
      id: 6,
      type: "drag-sort",
      title: "🏛️ Order the Stages of Empire Collapse",
      instruction: "Drag and drop these stages into the correct order, from earliest to latest:",
      items: [
        { text: "1. Rapid expansion and military conquest", order: 1 },
        { text: "2. Peak power, wealth, and cultural influence", order: 2 },
        { text: "3. Overextension beyond sustainable borders", order: 3 },
        { text: "4. Internal corruption and institutional decay", order: 4 },
        { text: "5. Economic strain and currency debasement", order: 5 },
        { text: "6. Loss of legitimacy and divided loyalties", order: 6 },
        { text: "7. External pressure from rising powers", order: 7 },
        { text: "8. Collapse or fragmentation", order: 8 }
      ]
    },
    {
      id: 7,
      type: "final-quiz",
      title: "🎓 FINAL EXAM: History Mastery",
      instruction: "Test your understanding of empire collapse. You need 3/4 correct to pass.",
      passingScore: 3,
      totalQuestions: 4,
      questions: [
        {
          q: "What's the most common cause of empire collapse?",
          options: [
            { id: "a", text: "Overextension beyond sustainable borders", correct: true },
            { id: "b", text: "A single catastrophic invasion", correct: false },
            { id: "c", text: "Running out of gold", correct: false }
          ],
          explanation: "Empires collapse from **internal strain**, not external shocks. Overreach → corruption → decay → collapse."
        },
        {
          q: "How long did the Roman Empire last?",
          options: [
            { id: "a", text: "About 1,000 years (500 BC - 476 AD)", correct: true },
            { id: "b", text: "200 years", correct: false },
            { id: "c", text: "5,000 years", correct: false }
          ],
          explanation: "Rome lasted **500 years** as a republic, then **500 years** as an empire. Its fall took centuries."
        },
        {
          q: "What warning signs predict empire collapse?",
          options: [
            { id: "a", text: "Currency debasement, corruption, divided loyalties", correct: true },
            { id: "b", text: "Too many poets and artists", correct: false },
            { id: "c", text: "Becoming too democratic", correct: false }
          ],
          explanation: "The pattern repeats: **military overstretch**, **economic strain**, **institutional decay**, **loss of legitimacy**."
        },
        {
          q: "How did the British Empire end?",
          options: [
            { id: "a", text: "Cost of maintaining it exceeded the benefits", correct: true },
            { id: "b", text: "Conquered by another empire", correct: false },
            { id: "c", text: "Voluntary decision to be more ethical", correct: false }
          ],
          explanation: "Empires end when the **math stops working**. British Empire couldn't afford to police the world after WWII."
        }
      ]
    }
  ],

  // NEW: Investing for Real Humans 🦔
  investing: [
    {
      id: 1,
      type: "content",
      title: "How Stock Markets Actually Work",
      paragraphs: [
        "A stock market is like a **giant auction house** where people trade tiny slices of companies. When you buy a stock, you own a microscopic piece of that business.",
        "Imagine Apple decides to split itself into **16 billion tiny pieces** (shares). You buy 10 of them. Congratulations: you now own 0.00000006% of Apple. Sounds small? If Apple makes **$100 billion in profit**, your slice is worth more.",
        "Why do prices move? Two forces: **1)** How well the company is doing (earnings, products, growth). **2)** How everyone *feels* about it (hype, fear, news).",
        "The weird part: **feeling matters more** than you think. A company can have amazing earnings and still drop **20%** if investors get spooked. Example: Netflix earnings beat expectations in 2022, but the stock fell **35%** because subscriber growth slowed.",
        "Stock prices = **Reality × Sentiment**. Reality is slow-moving (revenue, profit). Sentiment swings wildly (fear, greed, news cycles). That's why markets are volatile.",
        "Every day, **billions of trades** happen. Algorithms, day traders, pension funds, and grandmas all clicking buttons. The price you see is where supply meets demand—right now, this second."
      ]
    },
    {
      id: 1.5,
      type: "quiz",
      question: "Why did Netflix stock fall 35% despite beating earnings?",
      options: [
        { id: "a", text: "The company was secretly bankrupt", correct: false },
        { id: "b", text: "Sentiment shifted due to slower subscriber growth", correct: true },
        { id: "c", text: "The CEO sold all their shares", correct: false }
      ],
      explanation: "Markets price in **expectations**, not just results. Netflix's earnings were good, but sentiment soured when growth slowed. That's the power of market psychology."
    },
    {
      id: 1.7,
      type: "interactive-chart",
      title: "📈 Visualizing Market Crashes & Recoveries",
      description: "Every major crash in history looked like the end. Every single one recovered. This chart shows the S&P 500 from 1929 to today.",
      dataPoints: [
        { year: 1929, value: 100, label: "1929: Great Depression starts" },
        { year: 1942, value: 28, label: "Bottom of WWII" },
        { year: 1954, value: 100, label: "Recovery complete" },
        { year: 1973, value: 180, label: "Oil crisis begins" },
        { year: 1974, value: 90, label: "50% crash" },
        { year: 1987, value: 400, label: "Black Monday -23% in one day" },
        { year: 2000, value: 1400, label: "Dot-com bubble peak" },
        { year: 2002, value: 800, label: "50% crash" },
        { year: 2007, value: 1500, label: "Pre-financial crisis" },
        { year: 2009, value: 800, label: "55% crash" },
        { year: 2020, value: 3500, label: "COVID crash 34%" },
        { year: 2024, value: 5000, label: "Today all-time high" }
      ],
      insights: [
        "The market crashed **-86%** in 1929. It took **25 years** to recover. But if you held, you'd be up **5000%** by today.",
        "**2008 Financial Crisis**: -55% drop. Felt like the end of capitalism. Recovery took 5 years. Then it doubled.",
        "**COVID-19 (2020)**: -34% in 3 weeks. Fastest crash ever. Also the fastest recovery ever (4 months).",
        "Pattern: Crashes are violent and terrifying. Recoveries are slow and boring. Media covers crashes 10x more than recoveries."
      ]
    },
    {
      id: 2,
      type: "scenario",
      question: "📊 Market Crash Scenario: What do you do?",
      scenario: "The market just dropped 15% in one day. Your £10,000 portfolio is now worth £8,500. What's your move?",
      options: [
        { id: "a", text: "🔴 Panic sell everything to stop the bleeding", consequence: "You lock in losses. Market rebounds next month. You missed the recovery. -£1,500 permanent loss.", correct: false },
        { id: "b", text: "💎 Hold steady and do nothing", consequence: "Market recovers over 6 months. Your portfolio returns to £10,000, then grows to £11,200. Smart patience.", correct: true },
        { id: "c", text: "🛒 Buy more while prices are low", consequence: "Risky but bold! You buy £1,000 more at the dip. Portfolio rebounds to £13,500. Legend status.", correct: true },
        { id: "d", text: "🏃 Switch everything to bonds", consequence: "Safe but slow. You avoid further drops but miss the rebound. Final value: £8,800. Mediocre outcome.", correct: false }
      ],
      explanation: "History lesson: Markets always crash. But they **always recover**. The S&P 500 has survived every crash since **1928** and still averages **10%** annual returns."
    },
    {
      id: 3,
      type: "content",
      title: "Dividends vs Growth: Pick Your Fighter",
      paragraphs: [
        "**Dividend stocks:** Companies that pay you cash regularly (like rent from a property). Think: mature, stable, boring. Example: Coca-Cola, utilities.",
        "**Growth stocks:** Companies that reinvest everything to expand. No cash now, but the stock price explodes if they succeed. Example: Tesla, tech startups.",
        "Which is better? **It depends**. Young? Go growth (you have time). Retired? Dividends give you income. Smart investors own both."
      ]
    },
    {
      id: 4,
      type: "quiz",
      question: "Which is a growth stock?",
      options: [
        { id: "a", text: "A 100-year-old utility company paying 5% dividends", correct: false },
        { id: "b", text: "A 3-year-old AI startup reinvesting all profits", correct: true },
        { id: "c", text: "A bank paying steady quarterly dividends", correct: false }
      ],
      explanation: "Growth stocks reinvest profits to scale fast. They're volatile but can **10x**. Dividend stocks are the tortoises: slow, steady, reliable."
    },
    {
      id: 5,
      type: "interactive-slider",
      title: "⚖️ Risk vs Reward Simulator",
      question: "Adjust your risk level and see potential outcomes:",
      min: 0,
      max: 100,
      defaultValue: 50,
      labels: { 0: "🐢 Safe", 50: "⚖️ Balanced", 100: "🦈 Aggressive" },
      outcomes: {
        0: { text: "100% Bonds: +3% per year. Safe but slow. £10k → £13,439 in 10 years.", color: "#35c27e" },
        25: { text: "75% Bonds, 25% Stocks: +5% per year. £10k → £16,289 in 10 years.", color: "#4ea2ff" },
        50: { text: "50/50 Split: +7% per year. £10k → £19,672 in 10 years.", color: "#f4b65e" },
        75: { text: "75% Stocks, 25% Bonds: +9% per year. £10k → £23,674 in 10 years. More swings!", color: "#ff9a56" },
        100: { text: "100% Stocks: +10% per year. £10k → £25,937 in 10 years. Wild ride! 🎢", color: "#ff6b6b" }
      }
    },
    {
      id: 6,
      type: "content",
      title: "Bubbles & Manias: Humans Gone Wild",
      paragraphs: [
        "**1637: Tulip Mania.** Dutch people paid **a year's salary** for a single tulip bulb. Speculation went insane. Then reality hit. Prices collapsed **99%** overnight. Tulips became worthless.",
        "**1720: South Sea Bubble.** British investors poured money into the South Sea Company, which promised infinite riches from trade. Stock price went **10x in 6 months**. Isaac Newton lost a fortune. The crash wiped out **£500 million** (£80 billion today).",
        "**2000: Dot-com Bubble.** Any company with \".com\" in its name went **10x**. Pets.com spent **$300 million on ads** and had **zero profit**. **80% of dot-com companies** went bankrupt. Amazon survived and 100x'd. Most didn't.",
        "**2008: Housing Bubble.** Banks gave mortgages to people with no income. Wall Street packaged bad loans into 'AAA-rated' securities. When it collapsed, **$8 trillion** in wealth vanished. Lehman Brothers went bankrupt.",
        "**2021: Crypto mania, NFT madness, meme stocks.** GME went from **£4 to £400** then back to **£20**. People sold life savings for JPEGs of monkeys. Classic bubble behavior.",
        "Pattern: **Euphoria → FOMO → Crash → Blame**. Every generation thinks 'this time is different.' **It never is.** The psychology repeats: greed, denial, panic, despair."
      ]
    },
    {
      id: 7,
      type: "quiz",
      question: "What do all bubbles have in common?",
      options: [
        { id: "a", text: "Euphoria, FOMO, then collapse when reality hits", correct: true },
        { id: "b", text: "They're caused by government regulation", correct: false },
        { id: "c", text: "They only happen in modern times", correct: false }
      ],
      explanation: "Bubbles are **human psychology** at scale. Greed drives prices beyond reality. Fear causes collapse. This pattern has repeated for **400 years**. Technology changes. Human nature doesn't."
    },
    {
      id: 8,
      type: "content",
      title: "Index Funds: The Boring Way to Win",
      paragraphs: [
        "An **index fund** is a basket of stocks that copies an entire market. Buy one fund, own **500 companies**. Example: S&P 500 index fund = Apple, Microsoft, Amazon, Tesla, and 496 others.",
        "Why index funds win: **80% of active fund managers** underperform the market over 20 years. They try to pick winners, charge **2% fees**, and lose to a dumb algorithm that just buys everything.",
        "Warren Buffett's advice? **'Buy the S&P 500 and chill.'** He bet **$1 million** that index funds would beat hedge funds over 10 years. He won easily.",
        "Math: A **2% annual fee** costs you **50% of your returns** over 30 years due to compounding. Index funds charge **0.03%**. That's **67x cheaper**.",
        "Real results: £10,000 invested in an S&P 500 index fund in 1990 = **£300,000 today**. Same money in average active fund after fees = **£180,000**. Boring beats clever."
      ]
    },
    {
      id: 9,
      type: "quiz",
      question: "Why do index funds beat most professional fund managers?",
      options: [
        { id: "a", text: "Lower fees + market average beats 80% of stock pickers", correct: true },
        { id: "b", text: "They have secret insider information", correct: false },
        { id: "c", text: "They time the market perfectly", correct: false }
      ],
      explanation: "You can't reliably beat the market. But you can **own the market** cheaply. Low fees + compounding = wealth. It's math, not magic."
    },
    {
      id: 10,
      type: "quiz",
      question: "What was the biggest lesson from the 2008 financial crisis?",
      options: [
        { id: "a", text: "Markets always recover if you stay invested", correct: true },
        { id: "b", text: "Cash is always the safest investment", correct: false },
        { id: "c", text: "Active trading beats buy-and-hold", correct: false }
      ],
      explanation: "The S&P 500 crashed **-55%** in 2008. By 2013, it fully recovered. By 2020, it had **tripled** from the bottom. Patience wins."
    },
    {
      id: 11,
      type: "content",
      title: "Emotional Investing: Your Worst Enemy",
      paragraphs: [
        "The biggest risk isn't market crashes. It's **your emotions**. Fear makes you sell at the bottom. Greed makes you buy at the top. This is why the average investor **underperforms** the market by **3-5% per year**.",
        "Study: During the 2008 crisis, investors who panicked and sold lost **50%**. Investors who held recovered to **+150%** by 2020. Same market, different behavior, different outcomes.",
        "The 'buy high, sell low' trap: When stocks are up **20%**, everyone feels like a genius and pours money in. When stocks are down **20%**, everyone panics and sells. This is backwards.",
        "Rule: **Ignore the noise.** Turn off financial news. Check your portfolio once per quarter, not once per day. Boredom is a feature, not a bug."
      ]
    },
    {
      id: 12,
      type: "quiz",
      question: "Why do average investors underperform the market?",
      options: [
        { id: "a", text: "Emotional decisions: buying high and selling low", correct: true },
        { id: "b", text: "The market is rigged against them", correct: false },
        { id: "c", text: "They don't have access to good information", correct: false }
      ],
      explanation: "Behavior gap: The market returns **10%** per year, but the average investor gets **6%** because they panic sell during crashes and buy during bubbles."
    },
    {
      id: 13,
      type: "final-quiz",
      title: "🎓 FINAL EXAM: Investing Mastery",
      instruction: "Answer all questions correctly to pass this subject. You need 4/5 correct to pass.",
      passingScore: 4,
      totalQuestions: 5,
      questions: [
        {
          q: "What drives stock prices?",
          options: [
            { id: "a", text: "Reality (earnings) + Sentiment (feelings)", correct: true },
            { id: "b", text: "Only company earnings", correct: false },
            { id: "c", text: "Government manipulation", correct: false }
          ],
          explanation: "Stock prices = fundamentals × psychology. Both matter."
        },
        {
          q: "How should you react to a 20% market crash?",
          options: [
            { id: "a", text: "Hold steady or buy more", correct: true },
            { id: "b", text: "Panic sell everything immediately", correct: false },
            { id: "c", text: "Switch to cash and wait", correct: false }
          ],
          explanation: "Every crash in history has recovered. Patience wins."
        },
        {
          q: "What's the main advantage of index funds?",
          options: [
            { id: "a", text: "Low fees + diversification + market returns", correct: true },
            { id: "b", text: "They guarantee profits", correct: false },
            { id: "c", text: "They never lose money", correct: false }
          ],
          explanation: "Index funds give you market returns at minimal cost. That beats 80% of active managers."
        },
        {
          q: "What's a bubble?",
          options: [
            { id: "a", text: "Euphoria → FOMO → Crash when reality hits", correct: true },
            { id: "b", text: "Any time prices go up quickly", correct: false },
            { id: "c", text: "Government-caused market manipulation", correct: false }
          ],
          explanation: "Bubbles are human psychology at scale. Greed → denial → panic. History repeats."
        },
        {
          q: "Why is time in the market better than timing the market?",
          options: [
            { id: "a", text: "Compounding + avoiding emotional mistakes", correct: true },
            { id: "b", text: "You can predict future prices", correct: false },
            { id: "c", text: "Markets always go up short-term", correct: false }
          ],
          explanation: "Missing the 10 best days costs you 50% of returns. Stay invested."
        }
      ]
    }
  ],

  // OLD: Price perception
  oldInvesting: [
    {
      id: 1,
      type: "content",
      title: "Why prices feel unfair",
      paragraphs: [
        "You walk into a coffee shop. The same drink that cost $3 last year now costs $4.50. It feels like a rip-off — even if your salary also went up.",
        "Prices don't exist in a vacuum. Your sense of 'fair' is shaped by anchoring, information asymmetry, and loss aversion — not by actual supply and demand math."
      ]
    },
    {
      id: 2,
      type: "quiz",
      question: "Why do price increases feel worse than they mathematically are?",
      options: [
        { id: "a", text: "You anchor to old prices and feel losses more than gains", correct: true },
        { id: "b", text: "Businesses are always cheating customers", correct: false },
        { id: "c", text: "Your memory of old prices is perfect", correct: false }
      ],
      explanation:
        "Loss aversion makes price increases hurt more than wage increases feel good. You anchor to what you're used to."
    },
    {
      id: 3,
      type: "content",
      title: "Information asymmetry",
      paragraphs: [
        "The seller knows more than you do. They know their costs, their margins, what other customers pay, and what you're likely willing to spend.",
        "Example: surge pricing on ride apps. The company knows demand is high. You don't know if the price will drop in 10 minutes, so you feel manipulated — even if the price reflects real scarcity."
      ]
    },
    {
      id: 4,
      type: "quiz",
      question: "What is information asymmetry?",
      options: [
        { id: "a", text: "When one side of a transaction knows more than the other", correct: true },
        { id: "b", text: "When both sides have perfect information", correct: false },
        { id: "c", text: "When prices are set by computers", correct: false }
      ],
      explanation:
        "Sellers usually have more information than buyers. That imbalance shapes your perception of fairness."
    },
    {
      id: 5,
      type: "content",
      title: "The fairness instinct",
      paragraphs: [
        "Humans evolved in small groups where price gouging was personal betrayal. If someone hoarded water during a drought, the tribe remembered.",
        "Modern markets are impersonal and efficient — but your brain still treats 'unfair' pricing as a moral violation, not just a transaction. That's why dynamic pricing, even when economically rational, feels wrong."
      ]
    },
    {
      id: 6,
      type: "quiz",
      question: "Why does dynamic pricing feel unfair?",
      options: [
        { id: "a", text: "Your brain treats it as a moral violation, not just economics", correct: true },
        { id: "b", text: "It's always illegal", correct: false },
        { id: "c", text: "Companies do it only to hurt customers", correct: false }
      ],
      explanation:
        "Your fairness instinct evolved for small-group interactions. Modern pricing algorithms trigger those same moral alarms."
    }
  ],

  // Science: The placebo effect
  science: [
    {
      id: 1,
      type: "content",
      title: "The placebo effect",
      paragraphs: [
        "Give someone a sugar pill and tell them it's medicine. A measurable percentage will feel better — not because the pill did anything, but because they expected it to.",
        "This isn't 'just in their heads.' Brain scans show real changes. Pain signals decrease. Neurotransmitter levels shift. The expectation itself triggers biological responses."
      ]
    },
    {
      id: 2,
      type: "quiz",
      question: "What is the placebo effect?",
      options: [
        { id: "a", text: "Real biological changes caused by expectation alone", correct: true },
        { id: "b", text: "People lying about feeling better", correct: false },
        { id: "c", text: "A myth used by drug companies", correct: false }
      ],
      explanation:
        "Placebo effects are real and measurable. Your mind can trigger actual physical changes."
    },
    {
      id: 3,
      type: "content",
      title: "How powerful is it?",
      paragraphs: [
        "Placebo effects work best for subjective symptoms: pain, nausea, fatigue, mood. They're weaker (but not zero) for objective measures like tumor size or blood pressure.",
        "Studies show placebo painkillers can be 50–60% as effective as real ones. The color of the pill, the confidence of the doctor, even the price you're told it costs — all influence the effect."
      ]
    },
    {
      id: 4,
      type: "quiz",
      question: "Which symptom responds most strongly to placebo?",
      options: [
        { id: "a", text: "Pain", correct: true },
        { id: "b", text: "Broken bones", correct: false },
        { id: "c", text: "Infectious diseases", correct: false }
      ],
      explanation:
        "Placebos work best on subjective symptoms like pain, where the brain's interpretation matters."
    },
    {
      id: 5,
      type: "content",
      title: "Why this matters",
      paragraphs: [
        "The placebo effect reveals that mind and body aren't separate. Your beliefs, expectations, and environment shape your biology.",
        "It also means drug trials must compare new medicines against placebos, not just 'nothing' — because doing something often helps, even if the something is inert."
      ]
    }
  ],

  // Crypto: Digital Wild West 🪙💀
  crypto: [
    {
      id: 1,
      type: "content",
      title: "What is Blockchain?",
      paragraphs: [
        "Imagine a spreadsheet that **no one controls**, everyone can see, and no one can cheat. That's blockchain. It's a **public ledger** of transactions, copied across thousands of computers.",
        "Why does this matter? **Banks can freeze your account. Governments can print money. Blockchain can't be stopped.** It runs on math, not trust.",
        "Here's how it works: Every transaction is grouped into a **block**. Each block is cryptographically linked to the previous one, forming a **chain**. Change one transaction? You'd have to rewrite the entire chain on **51% of computers globally**. Nearly impossible.",
        "Example: You send 1 Bitcoin to Alice. That transaction is broadcast to **10,000+ computers** (nodes). They all verify it using math (cryptography). Once verified, it's added to the blockchain forever. No bank, no middleman, no government can reverse it.",
        "This is **decentralization**. No CEO, no headquarters, no servers to shut down. Bitcoin has run **24/7 for 15 years** with 99.99% uptime. No downtime, no maintenance windows, no customer service. Just code and consensus."
      ]
    },
    {
      id: 2,
      type: "quiz",
      question: "What makes blockchain different from a bank?",
      options: [
        { id: "a", text: "No single authority controls it", correct: true },
        { id: "b", text: "It's faster than banks", correct: false },
        { id: "c", text: "It's free to use", correct: false }
      ],
      explanation:
        "Blockchain is **decentralized**. No CEO, no government, no middleman. Just code and consensus."
    },
    {
      id: 3,
      type: "content",
      title: "Bitcoin vs Ethereum: The Big Two",
      paragraphs: [
        "**Bitcoin** is digital gold. It's simple: send money, store value, don't trust banks. **21 million coins max**. That's it. That's the feature. Scarcity = value.",
        "Why 21 million? **Artificial scarcity**. Unlike dollars (which governments print infinitely), Bitcoin's supply is **hardcoded**. No one can change it. Not governments, not Elon Musk, not even Bitcoin's creator (who disappeared in 2011).",
        "**Ethereum** is a **programmable blockchain**. You can build apps on it (DeFi, NFTs, smart contracts). It's not just money — it's a **computer that no one owns**.",
        "Smart contracts = code that runs automatically when conditions are met. Example: 'If Alice sends 1 ETH, automatically transfer the NFT to her wallet.' No middleman, no escrow, no trust needed. Code is law.",
        "Bitcoin is **store of value**. Ethereum is **programmable money**. Bitcoin is gold bars in a vault. Ethereum is a global computer running apps. Different purposes, different use cases."
      ]
    },
    {
      id: 4,
      type: "scenario",
      question: "🎯 Crypto Choice: What do you buy?",
      scenario: "You have £1,000 to invest. Bitcoin is at £40,000. Ethereum is at £2,500. A new meme coin promises '100x gains!' What's your move?",
      options: [
        { id: "a", text: "🟠 All in on Bitcoin - digital gold", consequence: "Safe bet. Bitcoin is boring but reliable. It 2x over 2 years. Your £1,000 → £2,000. Solid.", correct: true },
        { id: "b", text: "💎 Split 50/50 Bitcoin and Ethereum", consequence: "Smart diversification. Bitcoin 2x, ETH 3x. Your £1,000 → £2,500. Well played.", correct: true },
        { id: "c", text: "🚀 All in on the meme coin", consequence: "It pumped 10x... then crashed 95%. You rode the wave but sold late. £1,000 → £200. Painful lesson.", correct: false },
        { id: "d", text: "🧠 70% BTC/ETH, 10% meme coin for fun", consequence: "Balanced risk. Main stack 2.5x, meme coin failed. £1,000 → £2,350. You played it right.", correct: true }
      ],
      explanation: "Rule of crypto: **never bet the farm on sh*tcoins**. Bitcoin and Ethereum are boring for a reason — they survive."
    },
    {
      id: 5,
      type: "content",
      title: "Security: Don't Get Rekt",
      paragraphs: [
        "**Exchanges** (Coinbase, Binance) are like banks. Easy to use, but they hold your keys. If they get hacked or go bankrupt, **your coins vanish**.",
        "**Wallets** (hardware or software) give you full control. **'Not your keys, not your crypto.'** But if you lose your keys, no one can help you. Ever."
      ]
    },
    {
      id: 6,
      type: "quiz",
      question: "Spot the scam:",
      options: [
        { id: "a", text: "'Send me 1 ETH and I'll send back 2 ETH!' - Elon Musk (fake account)", correct: true },
        { id: "b", text: "A coin with a public team, audited code, and real use case", correct: false },
        { id: "c", text: "Bitcoin hitting a new all-time high", correct: false }
      ],
      explanation:
        "If it sounds too good to be true, **it's a scam**. No one gives free money. Ever. Crypto is full of grifters."
    },
    {
      id: 7,
      type: "quiz",
      question: "What's the main advantage of blockchain over traditional banking?",
      options: [
        { id: "a", text: "No single point of control or failure", correct: true },
        { id: "b", text: "It's always faster", correct: false },
        { id: "c", text: "It's completely anonymous", correct: false }
      ],
      explanation: "Blockchain is **decentralized**. No CEO can freeze your account. No government can shut it down. It runs on math and consensus."
    },
    {
      id: 8,
      type: "final-quiz",
      title: "🎓 FINAL EXAM: Crypto Mastery",
      instruction: "Prove you understand digital currencies. You need 3/4 correct to pass.",
      passingScore: 3,
      totalQuestions: 4,
      questions: [
        {
          q: "What is blockchain?",
          options: [
            { id: "a", text: "A public ledger copied across thousands of computers", correct: true },
            { id: "b", text: "A type of cryptocurrency", correct: false },
            { id: "c", text: "A centralized database", correct: false }
          ],
          explanation: "Blockchain = distributed ledger. Every transaction is recorded on thousands of computers. No one can cheat."
        },
        {
          q: "Why is Bitcoin limited to 21 million coins?",
          options: [
            { id: "a", text: "Artificial scarcity creates value like gold", correct: true },
            { id: "b", text: "Technical limitation of the code", correct: false },
            { id: "c", text: "Government regulation", correct: false }
          ],
          explanation: "Unlike dollars (infinite supply), Bitcoin's **21 million cap is hardcoded**. Scarcity = value."
        },
        {
          q: "What's the difference between Bitcoin and Ethereum?",
          options: [
            { id: "a", text: "Bitcoin is digital gold, Ethereum is programmable money", correct: true },
            { id: "b", text: "Ethereum is faster but less secure", correct: false },
            { id: "c", text: "They're essentially the same", correct: false }
          ],
          explanation: "Bitcoin = store of value. Ethereum = smart contracts and apps. Different purposes."
        },
        {
          q: "How should you store crypto safely?",
          options: [
            { id: "a", text: "Hardware wallet with your own keys", correct: true },
            { id: "b", text: "Leave it on the exchange forever", correct: false },
            { id: "c", text: "Write your password on a sticky note", correct: false }
          ],
          explanation: "**Not your keys, not your crypto.** Exchanges can be hacked or go bankrupt. Hardware wallets give you full control."
        }
      ]
    }
  ],

  // Glaciers & Ice Ages ❄️
  glaciers: [
    {
      id: 1,
      type: "content",
      title: "What is a Glacier?",
      paragraphs: [
        "A **glacier** is a river of ice that flows like a very slow liquid. It's snow compressed over thousands of years into solid ice that's so heavy it moves under its own weight.",
        "They move at **centimeters per day**. But that 'slow' motion can carve valleys, grind mountains to dust, and reshape entire continents. They're planetary machinery.",
        "How do they form? **Snow falls. Year after year. Layer after layer.** Eventually, the weight crushes lower layers into ice. At **50 meters deep**, the pressure is so intense that ice starts to **deform and flow** like thick honey.",
        "Glaciers cover **10% of Earth's land**. During the last ice age (**20,000 years ago**), they covered **32%**. Ice sheets were **3 kilometers thick** over Canada and Scandinavia. They carved the Great Lakes, flattened mountains, and moved boulders the size of houses hundreds of kilometers.",
        "The Grand Canyon? Carved by water over **6 million years**. Yosemite Valley? Carved by glaciers in **3 million years**. Ice is a sculptor that makes water look weak."
      ]
    },
    {
      id: 2,
      type: "quiz",
      question: "Why do glaciers move?",
      options: [
        { id: "a", text: "Ice flows like a super-slow liquid under pressure", correct: true },
        { id: "b", text: "Wind pushes them", correct: false },
        { id: "c", text: "They slide on water", correct: false }
      ],
      explanation:
        "Ice under extreme pressure behaves like a **plastic material** - it deforms and flows. That's why glaciers move downhill over centuries."
    },
    {
      id: 3,
      type: "content",
      title: "Ice Cores: Time Capsules",
      paragraphs: [
        "Drill into a glacier and you're drilling through **time**. Each layer of ice is a snapshot of the atmosphere from when that snow fell. Trapped air bubbles = ancient atmosphere.",
        "Scientists have drilled ice cores going back **800,000 years**. They can measure CO₂ levels, temperature, volcanic eruptions, even pollen from extinct plants. It's a climate time machine."
      ]
    },
    {
      id: 4,
      type: "scenario",
      question: "🧊 Ice Core Discovery",
      scenario: "You're drilling an ice core in Antarctica. At 2,000 meters deep, you find a layer of ash, ancient viruses, and air bubbles with unusual CO₂ levels. What do you do?",
      options: [
        { id: "a", text: "🔬 Analyze the air bubbles first", consequence: "You discover CO₂ levels were 50% higher than expected. This rewrites climate history! You publish and win awards. Legend.", correct: true },
        { id: "b", text: "🦠 Study the ancient viruses immediately", consequence: "You accidentally revive a dormant virus. It's harmless but causes a biosecurity panic. Your lab gets shut down for 6 months.", correct: false },
        { id: "c", text: "🌋 Focus on the ash layer", consequence: "You identify a supervolcano eruption from 40,000 years ago that caused a mini ice age. Solid discovery, paper published!", correct: true },
        { id: "d", text: "📸 Take photos and seal the sample", consequence: "Safe but slow. Another team publishes first using your data. You get credited but miss the spotlight.", correct: false }
      ],
      explanation: "Ice cores hold **viruses**, **pollen**, **volcanic ash**, and **atmospheric snapshots**. Every layer is a treasure trove of ancient data."
    },
    {
      id: 5,
      type: "content",
      title: "When Will They Melt?",
      paragraphs: [
        "**Greenland** and **Antarctica** hold enough ice to raise sea levels by **65+ meters**. If they melted completely, most coastal cities would vanish.",
        "Current rate: Greenland loses **280 billion tons of ice per year**. That's accelerating. Even a partial melt would flood London, New York, Shanghai, and Mumbai. We're talking decades, not centuries."
      ]
    },
    {
      id: 6,
      type: "quiz",
      question: "What happens if Greenland's ice sheet melts?",
      options: [
        { id: "a", text: "Sea levels rise ~7 meters, flooding major cities", correct: true },
        { id: "b", text: "Nothing, it's already floating", correct: false },
        { id: "c", text: "It triggers a new ice age", correct: false }
      ],
      explanation:
        "Greenland's ice sits on **land**, not water. When it melts, all that water flows into the ocean. **7 meters** of sea level rise = catastrophic."
    }
  ],

  // Nuclear Everything ☢️
  nuclear: [
    {
      id: 1,
      type: "content",
      title: "Fusion vs Fission",
      paragraphs: [
        "**Fission**: Split a big atom (uranium) → releases energy + radiation + waste. That's what nuclear power plants do. **Fusion**: Smash small atoms (hydrogen) together → releases MASSIVE energy, no long-lived waste. That's what the sun does.",
        "Fission works but creates radioactive waste that lasts thousands of years. Fusion is clean and limitless... but we can't sustain it yet. We've been **'30 years away'** for **70 years**.",
        "The physics: **E = mc²**. Matter converts to energy. A **1 gram uranium pellet** releases as much energy as **3 tons of coal**. That's the power of nuclear reactions.",
        "Fission reactors work by **slowing down neutrons**. Split one uranium atom → releases **2-3 neutrons** → they split more atoms → chain reaction. Control rods absorb neutrons to prevent runaway reactions.",
        "Fusion is **10x more powerful** than fission. The sun fuses **600 million tons of hydrogen per second**. The energy from fusion keeps us alive from **150 million kilometers away**. If we can replicate that on Earth, energy becomes infinite.",
        "Problem: Fusion requires **100 million degrees Celsius** to smash atoms together. That's **6x hotter than the sun's core**. How do you contain that? Magnetic fields. But keeping it stable for more than seconds? That's the challenge we haven't solved."
      ]
    },
    {
      id: 2,
      type: "quiz",
      question: "What's the difference between fusion and fission?",
      options: [
        { id: "a", text: "Fission splits atoms, fusion combines them", correct: true },
        { id: "b", text: "Fusion is what nuclear bombs use", correct: false },
        { id: "c", text: "They're the same thing", correct: false }
      ],
      explanation:
        "**Fission** breaks big atoms apart. **Fusion** forces small atoms together. Fusion is cleaner but way harder to achieve."
    },
    {
      id: 3,
      type: "content",
      title: "Chernobyl: What Went Wrong",
      paragraphs: [
        "**April 26, 1986**: A safety test at Chernobyl reactor 4 went catastrophically wrong. The reactor overheated, exploded, and released **400 times more radiation** than Hiroshima.",
        "Why? Soviet reactor design had a fatal flaw: at low power, it became **unstable**. Operators disabled safety systems during the test. The reactor went supercritical in seconds. Boom."
      ]
    },
    {
      id: 4,
      type: "scenario",
      question: "☢️ Reactor Meltdown Scenario",
      scenario: "You're the control room operator. Reactor temperature is rising fast. Alarms are screaming. You have 30 seconds. What do you do?",
      options: [
        { id: "a", text: "🔴 SCRAM - emergency shutdown all control rods", consequence: "Reactor stops immediately. Crisis averted. You're a hero. This is the correct response for any runaway reactor.", correct: true },
        { id: "b", text: "💧 Flood the reactor with coolant water", consequence: "Water turns to steam instantly, pressure spikes, reactor explodes. Chernobyl scenario. You just killed everyone.", correct: false },
        { id: "c", text: "⚡ Cut all power to the reactor", consequence: "Pumps stop, cooling fails, meltdown begins. Without power, you can't control anything. Bad move.", correct: false },
        { id: "d", text: "📞 Call your supervisor first", consequence: "While you're calling, the reactor goes critical. Explosion. Never hesitate in an emergency.", correct: false }
      ],
      explanation: "**SCRAM** (Safety Control Rod Axe Man) = emergency shutdown. Drop all control rods to absorb neutrons and stop the chain reaction. This is drilled into every operator."
    },
    {
      id: 5,
      type: "content",
      title: "Nuclear Waste: The 10,000 Year Problem",
      paragraphs: [
        "Spent nuclear fuel stays dangerously radioactive for **10,000+ years**. We can't just bury it and forget it — we need storage that outlasts civilizations.",
        "Current plan: deep geological repositories. Dig 500 meters underground, store waste in steel/concrete, seal it, and mark it with warnings that future humans (or post-humans) can understand. How do you warn someone 10,000 years from now?"
      ]
    },
    {
      id: 6,
      type: "quiz",
      question: "Why is nuclear waste so dangerous long-term?",
      options: [
        { id: "a", text: "It stays radioactive for thousands of years", correct: true },
        { id: "b", text: "It explodes if disturbed", correct: false },
        { id: "c", text: "It poisons water instantly", correct: false }
      ],
      explanation:
        "**Half-life** of some isotopes is tens of thousands of years. That means it takes that long for radioactivity to drop to 'safe' levels."
    },
    {
      id: 7,
      type: "fill-blanks",
      title: "☢️ Nuclear Reaction Summary",
      text: "Nuclear ___1___ splits heavy atoms like uranium, releasing energy and radioactive waste. Nuclear ___2___ combines light atoms like hydrogen, releasing even more energy with minimal waste. Fission powers today's nuclear ___3___, while fusion powers the ___4___. To achieve fusion on Earth, we need temperatures exceeding ___5___ million degrees Celsius.",
      blanks: [
        { id: 1, answer: "fission" },
        { id: 2, answer: "fusion" },
        { id: 3, answer: "reactors" },
        { id: 4, answer: "sun" },
        { id: 5, answer: "100" }
      ]
    },
    {
      id: 8,
      type: "quiz",
      question: "What's the biggest challenge with nuclear fusion?",
      options: [
        { id: "a", text: "Containing plasma at 100+ million degrees", correct: true },
        { id: "b", text: "Finding enough hydrogen fuel", correct: false },
        { id: "c", text: "It's too dangerous to attempt", correct: false }
      ],
      explanation: "We can achieve fusion for seconds. Sustaining it long enough to be useful? That's the **$50 billion question**."
    },
    {
      id: 9,
      type: "final-quiz",
      title: "🎓 FINAL EXAM: Nuclear Physics Mastery",
      instruction: "Test your understanding of nuclear energy. You need 3/4 correct to pass.",
      passingScore: 3,
      totalQuestions: 4,
      questions: [
        {
          q: "What's the difference between fusion and fission?",
          options: [
            { id: "a", text: "Fission splits atoms, fusion combines them", correct: true },
            { id: "b", text: "Fusion is what bombs use", correct: false },
            { id: "c", text: "They're the same process", correct: false }
          ],
          explanation: "**Fission** = split heavy atoms (uranium). **Fusion** = smash light atoms (hydrogen). Fusion is cleaner but harder."
        },
        {
          q: "Why is nuclear waste dangerous?",
          options: [
            { id: "a", text: "It stays radioactive for thousands of years", correct: true },
            { id: "b", text: "It explodes on contact", correct: false },
            { id: "c", text: "It glows in the dark", correct: false }
          ],
          explanation: "**Half-life** of some isotopes is **10,000+ years**. We need storage that outlasts civilizations."
        },
        {
          q: "What caused the Chernobyl disaster?",
          options: [
            { id: "a", text: "Flawed reactor design + disabled safety systems", correct: true },
            { id: "b", text: "A terrorist attack", correct: false },
            { id: "c", text: "Natural earthquake", correct: false }
          ],
          explanation: "Soviet RBMK reactors became **unstable at low power**. Operators disabled safety systems during a test. Reactor went **supercritical**."
        },
        {
          q: "How much energy does 1 gram of uranium release?",
          options: [
            { id: "a", text: "Equal to 3 tons of coal", correct: true },
            { id: "b", text: "Equal to 1 barrel of oil", correct: false },
            { id: "c", text: "About the same as gasoline", correct: false }
          ],
          explanation: "**E = mc²**. Tiny amounts of matter contain enormous energy. That's why nuclear power is so concentrated."
        }
      ]
    }
  ],

  // Minerals & Metals ⚡
  minerals: [
    {
      id: 1,
      type: "content",
      title: "Why Lithium Matters",
      paragraphs: [
        "**Lithium** is the new oil. It powers every electric vehicle battery, every smartphone, every laptop. Demand is exploding. Supply? Concentrated in a few countries: **Australia**, **Chile**, and **China**.",
        "EVs need **10kg of lithium per battery**. As the world electrifies, lithium demand could increase **40x by 2040**. That's a supply crunch waiting to happen.",
        "Where does lithium come from? **Brine pools** in South America (Chile, Argentina). Pump salty water into giant evaporation ponds. Wait 12-18 months for sun to evaporate water. Extract lithium carbonate. Or **hard rock mining** in Australia—dig up rock, crush it, extract lithium.",
        "The problem: Lithium extraction is **water-intensive**. Chile's Atacama Desert (driest place on Earth) uses **500,000 liters of water per ton of lithium**. Local communities lose water. Ecosystems collapse. Environmental cost is massive.",
        "Geopolitics: **China processes 80%** of global lithium. Even if you mine in Australia, you ship it to China for refining. Western countries trying to build domestic supply chains but it takes **10+ years** to open new mines and refineries.",
        "Recycling could help. **95%** of lithium in batteries is recyclable. But current recycling rates? **5%**. Economics don't work yet. Mining new lithium is cheaper than recycling old batteries. That needs to change."
      ]
    },
    {
      id: 2,
      type: "quiz",
      question: "Why is lithium critical for the future?",
      options: [
        { id: "a", text: "It's the key element in EV batteries", correct: true },
        { id: "b", text: "It's used in nuclear reactors", correct: false },
        { id: "c", text: "It makes phones faster", correct: false }
      ],
      explanation:
        "**Lithium-ion batteries** are the only viable technology for EVs and grid storage. No lithium = no electrification = climate goals fail."
    },
    {
      id: 3,
      type: "content",
      title: "Copper: The Wiring of Civilization",
      paragraphs: [
        "**Copper** conducts electricity better than almost anything else. Every power grid, every building, every electric motor needs copper. The world uses **25 million tons per year**.",
        "Problem: **peak copper** is approaching. Easy-to-mine deposits are running out. Future supply comes from deeper, dirtier, more expensive mines. And EVs need **4x more copper** than gas cars."
      ]
    },
    {
      id: 4,
      type: "scenario",
      question: "⚡ Resource Geopolitics",
      scenario: "You're the leader of a lithium-rich country. China offers to build infrastructure in exchange for exclusive lithium mining rights. The West offers cash but wants open markets. What do you do?",
      options: [
        { id: "a", text: "🇨🇳 Accept China's infrastructure deal", consequence: "You get roads, ports, and factories. But China controls your lithium supply chain. 10 years later, they dictate prices. You're locked in.", correct: false },
        { id: "b", text: "🌍 Accept Western cash, keep markets open", consequence: "You get money but must build infrastructure yourself. Markets stay competitive. You maintain leverage. Smart long-term play.", correct: true },
        { id: "c", text: "⚖️ Play both sides, auction to highest bidder", consequence: "Short-term gains but both sides lose trust. You're seen as unreliable. Future investment dries up. Bad move.", correct: false },
        { id: "d", text: "🚫 Nationalize lithium, refuse all deals", consequence: "You control resources but lack tech and capital to extract them. Economy stagnates. You become the next Venezuela.", correct: false }
      ],
      explanation: "**Resource geopolitics** is about balancing sovereignty, development, and long-term leverage. Lock-in with one power = loss of negotiating power."
    },
    {
      id: 5,
      type: "content",
      title: "Supply Chains: Fragile by Design",
      paragraphs: [
        "Modern supply chains are **optimized for efficiency**, not resilience. Just-in-time delivery = zero buffer stock. One factory fire in Taiwan? Global chip shortage for 2 years.",
        "**80% of rare earth metals** come from China. If China stops exporting, the West can't make smartphones, wind turbines, or missiles. That's strategic vulnerability."
      ]
    },
    {
      id: 6,
      type: "quiz",
      question: "Why are supply chains so fragile?",
      options: [
        { id: "a", text: "They're optimized for cost, not resilience", correct: true },
        { id: "b", text: "Companies are lazy", correct: false },
        { id: "c", text: "There's a global shortage of everything", correct: false }
      ],
      explanation:
        "**Efficiency vs resilience trade-off**: just-in-time delivery saves money but creates single points of failure. One disruption = cascading collapse."
    }
  ],

  // Human Weirdness 🧩
  humans: [
    {
      id: 1,
      type: "content",
      title: "Game Theory: The Math of Strategy",
      paragraphs: [
        "**Game theory** studies strategic decision-making when your outcome depends on others' choices. It's not about games—it's about **nuclear war**, **business**, **evolution**, and **everyday life**.",
        "Key insight: **rational individual choices often lead to terrible collective outcomes**. That's why cooperation is hard and conflict is easy.",
        "Invented during WWII to model **nuclear strategy**. If both the US and USSR launch nukes, everyone dies. If one side launches first, they win. If neither launches, both survive. What do you do?",
        "This is called **Mutually Assured Destruction (MAD)**. The Cold War was a 40-year game of chicken. One miscalculation = nuclear winter. We survived by making deterrence credible: 'If you launch, we launch. We both die. So don't launch.'",
        "Game theory explains: **why companies collude on prices**, **why traffic jams happen**, **why antibiotics stop working** (bacteria evolve resistance), **why democracies go to war**, and **why trust is valuable but rare**.",
        "The math proves something unsettling: **being too rational makes you predictable**. Sometimes you need randomness (mixed strategies) to win. Poker players bluff. Generals feint. Evolution uses mutations. Pure logic loses to strategic chaos."
      ]
    },
    {
      id: 2,
      type: "quiz",
      question: "What is game theory?",
      options: [
        { id: "a", text: "The study of strategic decision-making", correct: true },
        { id: "b", text: "How to win board games", correct: false },
        { id: "c", text: "Psychology of gambling", correct: false }
      ],
      explanation:
        "Game theory analyzes **situations where your best choice depends on what others do**. Economics, war, evolution—all game theory."
    },
    {
      id: 3,
      type: "content",
      title: "The Prisoner's Dilemma",
      paragraphs: [
        "Two criminals are arrested. Police offer each a deal: **betray your partner** (go free) or **stay silent** (both get light sentences). If both betray, both get heavy sentences.",
        "**The trap**: betraying is the 'rational' choice for each individual, but if both do it, they're worse off. Cooperation is better collectively but risky individually. This explains arms races, pollution, and why trust is valuable."
      ]
    },
    {
      id: 4,
      type: "scenario",
      question: "🎭 Prisoner's Dilemma",
      scenario: "You and your partner are arrested. Police offer you a deal: betray your partner and go free (they get 10 years). If you both stay silent, you both get 1 year. If you both betray, you both get 5 years. What do you do?",
      options: [
        { id: "a", text: "🤐 Stay silent (cooperate)", consequence: "If your partner stays silent too: both get 1 year. Best outcome! But if they betray you: you get 10 years. Trust = risk.", correct: true },
        { id: "b", text: "🗣️ Betray your partner (defect)", consequence: "If they stayed silent: you go free, they get 10 years. If they also betrayed: you both get 5 years. 'Rational' but collectively worse.", correct: false }
      ],
      explanation: "**The dilemma**: individual rationality (betray) leads to mutual harm (5 years each). Cooperation (silence) is collectively better but requires trust. This is why **repeated games and reputation matter**."
    },
    {
      id: 5,
      type: "content",
      title: "Cognitive Biases in Action",
      paragraphs: [
        "**Anchoring**: the first number you hear influences all subsequent estimates. Stores use this by showing 'original price' before discounts.",
        "**Sunk cost fallacy**: you continue bad investments because you've already spent money/time. Rational choice ignores sunk costs. Humans don't. **Prospect theory**: losses hurt more than equivalent gains feel good. Losing £100 > gaining £100 emotionally."
      ]
    },
    {
      id: 6,
      type: "quiz",
      question: "What is the sunk cost fallacy?",
      options: [
        { id: "a", text: "Continuing bad investments because you've already spent resources", correct: true },
        { id: "b", text: "Refusing to invest in anything risky", correct: false },
        { id: "c", text: "Investing too much too quickly", correct: false }
      ],
      explanation:
        "**Sunk costs** are unrecoverable past expenses. Rational decision-making ignores them. But humans hate 'wasting' past investments, so we throw good money after bad."
    }
  ],

  // Biology Sci-Fi 🧬
  biology: [
    {
      id: 1,
      type: "content",
      title: "CRISPR: Editing the Code of Life",
      paragraphs: [
        "**CRISPR** is molecular scissors that can cut and edit DNA with precision. Scientists can now delete genes, insert new ones, or fix genetic diseases. It's genetic engineering made easy.",
        "**2018**: Chinese scientist He Jiankui edited human embryos to make them HIV-resistant. The babies were born. The world freaked out. He was jailed. We now have the power to design humans.",
        "How it works: CRISPR is a **guided missile** for DNA. Step 1: Design a guide RNA that matches the target gene. Step 2: CRISPR protein (Cas9) uses that guide to find the exact DNA sequence. Step 3: Cas9 cuts the DNA. Step 4: The cell repairs it—you control how.",
        "Before CRISPR, gene editing cost **$1 million and took years**. Now it costs **$30 and takes days**. This is why it's revolutionary. It democratized genetic engineering.",
        "Applications: **Curing sickle cell disease** (edit bone marrow cells, patient's blood is fixed). **Eliminating malaria** (edit mosquitoes to be immune to the parasite). **Creating drought-resistant crops** (edit plants to survive climate change). **Resurrecting extinct species** (edit elephant DNA to recreate woolly mammoths).",
        "The danger: What if you edit for **intelligence**? **Height**? **Eye color**? Where's the line between therapy and enhancement? We can now engineer humans like we engineer software. Should we?"
      ]
    },
    {
      id: 2,
      type: "quiz",
      question: "What is CRISPR?",
      options: [
        { id: "a", text: "A tool for editing DNA precisely", correct: true },
        { id: "b", text: "A new type of microscope", correct: false },
        { id: "c", text: "A protein that causes diseases", correct: false }
      ],
      explanation:
        "**CRISPR-Cas9** is a gene-editing system borrowed from bacteria. It allows scientists to cut DNA at specific locations and modify genes. Revolutionary and terrifying."
    },
    {
      id: 3,
      type: "content",
      title: "Tardigrades: Indestructible Micro-Bears",
      paragraphs: [
        "**Tardigrades** (water bears) are microscopic animals that can survive: **-272°C to +150°C**, **radiation 1000x lethal to humans**, **decades without water**, **the vacuum of space**. They're basically immortal.",
        "How? They enter **cryptobiosis**—a state where metabolism stops completely. They dry out, replace water with protective sugars, and wait. Add water years later? They wake up. It's biological suspended animation."
      ]
    },
    {
      id: 4,
      type: "scenario",
      question: "🧬 CRISPR Ethics",
      scenario: "You're a genetic scientist. A couple wants you to edit their embryo to remove a gene causing fatal childhood disease. Legal in your country. Do you do it?",
      options: [
        { id: "a", text: "✅ Yes, remove the disease gene", consequence: "Child is born healthy. Family is grateful. But: you've crossed into human genetic modification. Slippery slope to designer babies begins.", correct: true },
        { id: "b", text: "❌ No, it's too risky", consequence: "Child is born with disease, dies at age 8. Family devastated. You could have prevented it. Was caution worth a child's life?", correct: false },
        { id: "c", text: "🧪 Edit for disease + add intelligence genes", consequence: "You create a 'designer baby.' Public outcry. You're fired and prosecuted. Child grows up as a media spectacle. Ethical catastrophe.", correct: false },
        { id: "d", text: "📋 Refer them to another clinic", consequence: "You avoid responsibility. Someone else does it anyway. Nothing changes except you didn't help or hinder.", correct: false }
      ],
      explanation: "**Gene editing dilemma**: preventing suffering vs playing God. Medical fixes seem reasonable until you ask: where's the line between therapy and enhancement?"
    },
    {
      id: 5,
      type: "content",
      title: "Senescence: Why We Age",
      paragraphs: [
        "**Senescence** is the process of aging. Cells accumulate damage, telomeres shorten, repair mechanisms fail. Eventually: cancer, organ failure, death. But some organisms don't age.",
        "**Hydra** (tiny water polyps) show **negligible senescence**. They don't age. Given ideal conditions, they're biologically immortal. **Naked mole rats** live 10x longer than similar-sized rodents and rarely get cancer. We're studying them to hack human aging."
      ]
    },
    {
      id: 6,
      type: "quiz",
      question: "What is senescence?",
      options: [
        { id: "a", text: "The biological process of aging", correct: true },
        { id: "b", text: "A type of cancer", correct: false },
        { id: "c", text: "When cells stop dividing", correct: false }
      ],
      explanation:
        "**Senescence** = aging at the cellular and organismal level. Damage accumulates, repair fails, death follows. Some organisms escape this. We're trying to figure out how."
    },
    {
      id: 7,
      type: "quiz",
      question: "Why are tardigrades considered nearly indestructible?",
      options: [
        { id: "a", text: "They enter cryptobiosis: metabolism stops completely", correct: true },
        { id: "b", text: "They have super strong armor", correct: false },
        { id: "c", text: "They can heal any injury instantly", correct: false }
      ],
      explanation: "Tardigrades dry out, replace water with protective sugars, and **pause life**. Add water years later? They wake up. Biological suspended animation."
    },
    {
      id: 8,
      type: "final-quiz",
      title: "🎓 FINAL EXAM: Biology Mastery",
      instruction: "Test your genetic engineering knowledge. You need 3/4 correct to pass.",
      passingScore: 3,
      totalQuestions: 4,
      questions: [
        {
          q: "What is CRISPR?",
          options: [
            { id: "a", text: "Molecular scissors that edit DNA precisely", correct: true },
            { id: "b", text: "A new microscope technology", correct: false },
            { id: "c", text: "A disease-causing protein", correct: false }
          ],
          explanation: "**CRISPR-Cas9** = gene editing tool. Cut DNA at exact locations, then modify genes. Revolutionary and terrifying."
        },
        {
          q: "How much did CRISPR reduce the cost of gene editing?",
          options: [
            { id: "a", text: "From $1 million to $30", correct: true },
            { id: "b", text: "From $100,000 to $10,000", correct: false },
            { id: "c", text: "No cost reduction, just faster", correct: false }
          ],
          explanation: "Before CRISPR: **$1M, years of work**. After CRISPR: **$30, days**. That's why it's revolutionary."
        },
        {
          q: "What ethical dilemma does CRISPR create?",
          options: [
            { id: "a", text: "Where's the line between therapy and enhancement?", correct: true },
            { id: "b", text: "It's too expensive for most people", correct: false },
            { id: "c", text: "It doesn't work on humans", correct: false }
          ],
          explanation: "Fixing diseases = good. Editing for intelligence, height, eye color? **We can now engineer humans like software.** Should we?"
        },
        {
          q: "What can tardigrades survive?",
          options: [
            { id: "a", text: "-272°C to +150°C, radiation 1000x lethal to humans, vacuum of space", correct: true },
            { id: "b", text: "Only extreme cold", correct: false },
            { id: "c", text: "Anything except water deprivation", correct: false }
          ],
          explanation: "Tardigrades are **basically immortal**. They've survived every extinction event. They'll outlive us all."
        }
      ]
    }
  ],

  // If the World Ends 🌋
  apocalypse: [
    {
      id: 1,
      type: "content",
      title: "Supervolcanoes: Civilization Killers",
      paragraphs: [
        "A **supervolcano** eruption would dwarf any historical volcano. **Yellowstone** has a magma chamber 80km across. If it erupts, it would eject **1,000 cubic kilometers** of rock and ash.",
        "Result: **volcanic winter**. Ash blocks sunlight for years. Global temperatures drop 10°C. Crops fail worldwide. Mass starvation. Civilization collapses. Last time Yellowstone erupted? **640,000 years ago**. It's overdue.",
        "Scale comparison: **Mount St. Helens (1980)** ejected **1 cubic kilometer** of material. **Krakatoa (1883)** ejected **25 cubic kilometers** and killed **36,000 people**. Yellowstone would eject **1,000 cubic kilometers**—40x bigger than Krakatoa.",
        "Historical precedent: **Toba supervolcano (74,000 years ago)** in Indonesia. It ejected **2,800 cubic kilometers**. Global temperatures dropped **10-15°C** for a decade. Human population bottlenecked to **3,000-10,000 individuals**. We almost went extinct.",
        "Yellowstone's caldera is **55km by 72km**. It's not a mountain—it's a hole left by the last eruption. The entire park sits on a bubble of magma. It rises **7cm per year**. Scientists monitor it constantly.",
        "Can we stop it? **No.** Can we predict it? **Maybe, with weeks or months of warning.** Can we survive it? Depends on preparation. Yellowstone erupting = immediate death for **100,000+ people** in Wyoming. Then volcanic winter kills **billions** from starvation."
      ]
    },
    {
      id: 2,
      type: "quiz",
      question: "What makes supervolcanoes so dangerous?",
      options: [
        { id: "a", text: "They block sunlight and cause global cooling", correct: true },
        { id: "b", text: "The lava covers entire continents", correct: false },
        { id: "c", text: "They trigger earthquakes everywhere", correct: false }
      ],
      explanation:
        "**Volcanic winter**: ash in the stratosphere blocks sunlight, dropping temperatures globally for years. Crops fail. Famine follows. It's an extinction-level threat."
    },
    {
      id: 3,
      type: "content",
      title: "Pandemic Math: Exponential Growth",
      paragraphs: [
        "**R₀** (R-naught) = how many people each infected person infects. If R₀ > 1, the disease **spreads exponentially**. If R₀ < 1, it dies out.",
        "COVID-19 had R₀ ≈ 3. That means: 1 person → 3 people → 9 → 27 → 81 → 243 → 729 in just 7 generations. Exponential growth is why pandemics explode before governments react."
      ]
    },
    {
      id: 4,
      type: "scenario",
      question: "🦠 Pandemic Response",
      scenario: "A novel virus emerges. R₀ = 4. Fatality rate = 2%. It's spreading fast. You're the health minister. What's your first move?",
      options: [
        { id: "a", text: "🔒 Immediate lockdown + contact tracing", consequence: "You stop exponential spread early. Economy takes a hit but deaths stay low. Lockdown fatigue sets in after 3 months. You saved thousands.", correct: true },
        { id: "b", text: "💉 Wait for vaccine development first", consequence: "Vaccines take 12-18 months. Virus spreads unchecked. Millions die. Healthcare collapses. Catastrophic failure.", correct: false },
        { id: "c", text: "🏥 Focus on hospital capacity only", consequence: "Hospitals are overwhelmed in weeks. Exponential growth outruns any capacity. Doctors forced to choose who lives. Nightmare scenario.", correct: false },
        { id: "d", text: "😷 Masks optional, trust personal responsibility", consequence: "Not enough compliance. R₀ stays above 1. Exponential spread continues. Death toll climbs. You failed.", correct: false }
      ],
      explanation: "**Exponential spread demands exponential response**. Early aggressive action (lockdown, tracing) buys time. Delays = deaths compound. It's math, not politics."
    },
    {
      id: 5,
      type: "content",
      title: "Nuclear Winter: The Aftermath",
      paragraphs: [
        "A nuclear war wouldn't just kill via explosions/radiation. The real killer: **nuclear winter**. Cities burn, smoke rises into the stratosphere, sunlight is blocked. Global temperatures drop **20-30°C**.",
        "**90% of humans would die from starvation** in the following months. Crops fail. Ecosystems collapse. Even a 'small' nuclear war (India vs Pakistan, 100 warheads) would cause global famine killing **2 billion people**."
      ]
    },
    {
      id: 6,
      type: "quiz",
      question: "What is nuclear winter?",
      options: [
        { id: "a", text: "Global cooling caused by smoke blocking sunlight after nuclear war", correct: true },
        { id: "b", text: "The cold war during winter months", correct: false },
        { id: "c", text: "When nuclear reactors freeze", correct: false }
      ],
      explanation:
        "**Nuclear winter**: soot and smoke from burning cities rise into the stratosphere, block sunlight, and cause global cooling for years. Crops fail. Mass starvation. Existential threat."
    },
    {
      id: 7,
      type: "final-quiz",
      title: "🎓 FINAL EXAM: Existential Risks Mastery",
      instruction: "Test your apocalypse preparedness knowledge. You need 4/5 correct to pass.",
      passingScore: 4,
      totalQuestions: 5,
      questions: [
        {
          q: "What makes supervolcanoes so dangerous?",
          options: [
            { id: "a", text: "Volcanic winter: ash blocks sunlight for years", correct: true },
            { id: "b", text: "Lava covers entire continents", correct: false },
            { id: "c", text: "They cause permanent earthquakes", correct: false }
          ],
          explanation: "Yellowstone erupting = **volcanic winter**. Ash blocks sun, temps drop **10°C**, crops fail globally. Billions starve."
        },
        {
          q: "What does R₀ (R-naught) measure in pandemics?",
          options: [
            { id: "a", text: "How many people each infected person infects", correct: true },
            { id: "b", text: "The fatality rate", correct: false },
            { id: "c", text: "How long symptoms last", correct: false }
          ],
          explanation: "**R₀ > 1** = exponential spread. **R₀ < 1** = disease dies out. COVID's R₀ ≈ 3 = explosive growth."
        },
        {
          q: "What happened during the Toba supervolcano eruption 74,000 years ago?",
          options: [
            { id: "a", text: "Human population bottlenecked to 3,000-10,000 individuals", correct: true },
            { id: "b", text: "All humans died", correct: false },
            { id: "c", text: "It had no effect on humans", correct: false }
          ],
          explanation: "Toba nearly wiped us out. Temps dropped **10-15°C** for a decade. We almost went extinct."
        },
        {
          q: "How would nuclear winter kill most people?",
          options: [
            { id: "a", text: "Starvation from crop failure", correct: true },
            { id: "b", text: "Radiation poisoning", correct: false },
            { id: "c", text: "Explosions", correct: false }
          ],
          explanation: "Only **10-20%** die from bombs/radiation. The other **80-90%** starve when crops fail from blocked sunlight."
        },
        {
          q: "Why is exponential spread during pandemics so dangerous?",
          options: [
            { id: "a", text: "It explodes faster than governments can react", correct: true },
            { id: "b", text: "It makes the disease more deadly", correct: false },
            { id: "c", text: "It only affects certain populations", correct: false }
          ],
          explanation: "**Exponential spread** = **1 → 3 → 9 → 27 → 81** in just 5 generations. By the time you notice, it's everywhere."
        }
      ]
    }
  ],

  // How Money Works 💵
  money: [
    {
      id: 1,
      type: "content",
      title: "What is Inflation?",
      paragraphs: [
        "**Inflation** = your money loses buying power over time. That £100 in your pocket? Next year it buys you £97 worth of stuff. The money didn't disappear — prices just went up.",
        "Why does it happen? Too much money chasing too few goods. Governments print money, people spend more, demand rises, prices rise. It's a feedback loop.",
        "Example: During COVID, governments printed **$10 trillion globally** to keep economies alive. Money supply exploded. Supply chains broke. Inflation hit **9%** (highest in 40 years). Your savings lost **9%** in one year.",
        "Moderate inflation (2-3%) is healthy. It encourages spending (why save if money loses value?) and investment. But high inflation (>5%) is destructive. It punishes savers, rewards debtors, and destabilizes economies.",
        "Hyperinflation is the nightmare scenario. **Zimbabwe 2008**: inflation hit **79 billion percent per month**. Prices doubled every 24 hours. A loaf of bread cost **$100 billion**. The currency became worthless. People used wheelbarrows of cash to buy groceries.",
        "Deflation (prices falling) sounds good but it's worse. Japan's 'Lost Decades' (1990s-2010s): prices fell, people stopped spending (why buy today if it's cheaper tomorrow?), economy stagnated for **30 years**. Mild inflation beats deflation."
      ]
    },
    {
      id: 2,
      type: "quiz",
      question: "What causes inflation?",
      options: [
        { id: "a", text: "Too much money in circulation relative to goods/services", correct: true },
        { id: "b", text: "Banks stealing from savers", correct: false },
        { id: "c", text: "Businesses being greedy", correct: false }
      ],
      explanation:
        "Inflation is about **supply and demand**. More money + same goods = higher prices. It's not greed, it's math."
    },
    {
      id: 3,
      type: "content",
      title: "Interest Rates: The Economy's Gas Pedal",
      paragraphs: [
        "When the economy overheats (inflation), central banks raise **interest rates**. This makes borrowing expensive, spending slows, inflation cools.",
        "When the economy crashes (recession), they **lower rates**. Cheap loans = people borrow and spend more = economy grows. It's economic steering."
      ]
    },
    {
      id: 4,
      type: "scenario",
      question: "💰 Central Bank Decision",
      scenario: "You're the head of the central bank. Inflation is 8% (very high). Unemployment is 3% (very low). Housing prices are soaring. What do you do?",
      options: [
        { id: "a", text: "📈 Raise interest rates aggressively", consequence: "Inflation drops to 3% over 12 months. Housing cools. But unemployment rises to 5% and recession hits. Tough choice, but it worked.", correct: true },
        { id: "b", text: "📉 Lower interest rates to help people", consequence: "Inflation explodes to 12%. Prices spiral out of control. Currency collapses. You get fired. Economic disaster.", correct: false },
        { id: "c", text: "⏸️ Do nothing and wait", consequence: "Inflation stays high for years. Savers lose wealth. Public loses trust. Riots break out. You failed.", correct: false },
        { id: "d", text: "🖨️ Print more money to give people cash", consequence: "Hyperinflation. Currency becomes worthless. Zimbabwe / Weimar Germany scenario. Catastrophic failure.", correct: false }
      ],
      explanation: "High inflation = **raise rates**. It causes short-term pain (recession) but prevents long-term disaster (hyperinflation)."
    },
    {
      id: 5,
      type: "content",
      title: "Housing Markets: Why Prices Explode",
      paragraphs: [
        "Housing prices are driven by **supply, demand, and credit**. When interest rates are low, mortgages are cheap. More people can afford to buy. Demand skyrockets. Prices follow.",
        "Add in: limited supply (not building enough), foreign investment, and FOMO (fear of missing out). Result: **prices double in 5 years**. First-time buyers get priced out."
      ]
    },
    {
      id: 6,
      type: "quiz",
      question: "Why do low interest rates push housing prices up?",
      options: [
        { id: "a", text: "Cheap mortgages = more buyers = higher demand = higher prices", correct: true },
        { id: "b", text: "Banks force prices up intentionally", correct: false },
        { id: "c", text: "Low rates mean houses are worth more", correct: false }
      ],
      explanation:
        "When borrowing is cheap, **more people can afford to buy**. More buyers competing for the same houses = prices go up. It's supply and demand."
    },
    {
      id: 7,
      type: "fill-blanks",
      title: "💰 Complete the Economics Summary",
      text: "Central banks control inflation by adjusting ___1___ rates. When inflation is too high, they ___2___ rates to slow borrowing and spending. When the economy is in recession, they ___3___ rates to encourage growth. This balancing act is called ___4___ policy. The goal is to maintain around ___5___% inflation—high enough to encourage spending, low enough to preserve purchasing power.",
      blanks: [
        { id: 1, answer: "interest" },
        { id: 2, answer: "raise" },
        { id: 3, answer: "lower" },
        { id: 4, answer: "monetary" },
        { id: 5, answer: "2" }
      ]
    }
  ],

  // Black Holes & Cosmic Violence 🌌💀
  blackholes: [
    {
      id: 1,
      type: "content",
      title: "What is a Black Hole?",
      paragraphs: [
        "A black hole is what happens when **gravity wins**. A star dies, collapses, and crushes so much mass into such a tiny space that **nothing can escape**. Not even light.",
        "How small? A black hole with the mass of Earth would fit in your pocket. The actual **event horizon** (point of no return) would be **9mm wide**. Terrifying.",
        "Black holes form when massive stars (>20 solar masses) run out of fuel. The core **collapses in 0.1 seconds**. The outer layers explode as a **supernova**. What's left? A singularity—a point of **infinite density**.",
        "There are **100 million black holes** in our galaxy alone. Most are stellar-mass (3-20 solar masses). Some are **supermassive** (millions to billions of solar masses) at galaxy centers. Sagittarius A*, at the center of our galaxy, is **4 million solar masses**.",
        "You can't see black holes directly. But you can see what they do: stars orbiting nothing, matter spiraling into oblivion, X-rays from superheated gas. We 'photographed' a black hole in 2019 by imaging the **shadow** it casts on surrounding light.",
        "Einstein predicted black holes in 1915. Everyone thought they were mathematical curiosities—too weird to exist. In 1964, we found the first one (Cygnus X-1). Turns out the universe is weirder than we imagined."
      ]
    },
    {
      id: 2,
      type: "quiz",
      question: "Why can't light escape a black hole?",
      options: [
        { id: "a", text: "Gravity is so strong it bends spacetime into a trap", correct: true },
        { id: "b", text: "Black holes absorb light like a sponge", correct: false },
        { id: "c", text: "Light runs out of energy", correct: false }
      ],
      explanation:
        "Black holes warp **spacetime itself**. Once you cross the event horizon, all paths lead inward. There's no 'up' anymore."
    },
    {
      id: 3,
      type: "content",
      title: "Spaghettification (Yes, Really)",
      paragraphs: [
        "As you fall into a black hole, **tidal forces** stretch you. Your feet feel stronger gravity than your head. You get **pulled apart like taffy**.",
        "Small black holes? You spaghettify **before** you cross the event horizon. Supermassive ones? You'd cross and not even notice... until it's too late."
      ]
    },
    {
      id: 4,
      type: "scenario",
      question: "🌀 You're Falling Into a Black Hole...",
      scenario: "You're an astronaut who just crossed the event horizon of a supermassive black hole. What do you see?",
      options: [
        { id: "a", text: "🌟 The entire future of the universe flashing before your eyes", consequence: "Correct! Time dilation means you see the universe age rapidly as you fall. The stars die, galaxies collide, and the cosmos ends. Then you hit the singularity.", correct: true },
        { id: "b", text: "🕳️ Total darkness immediately", consequence: "Not quite. Light from outside can still reach you for a while. It's only when you look back that you see darkness.", correct: false },
        { id: "c", text: "👻 Your own past replayed backwards", consequence: "Nope. Time doesn't reverse. It just gets *weird*. You'd see the outside universe, not your memories.", correct: false },
        { id: "d", text: "🔥 You burn up instantly", consequence: "Not from heat. Supermassive black holes are surprisingly *gentle* at the horizon. You spaghettify deeper inside.", correct: false }
      ],
      explanation: "Black holes break physics in the best way. Time, space, and causality stop making sense."
    },
    {
      id: 5,
      type: "content",
      title: "Hawking Radiation: Black Holes Die",
      paragraphs: [
        "Stephen Hawking proved that black holes aren't **perfectly** black. They leak tiny amounts of radiation. Over trillions of years, they **evaporate**.",
        "Small black holes evaporate fast. Supermassive ones? They'll outlive the stars. But eventually, even black holes die."
      ]
    },
    {
      id: 6,
      type: "quiz",
      question: "What happens to black holes over time?",
      options: [
        { id: "a", text: "They slowly evaporate via Hawking radiation", correct: true },
        { id: "b", text: "They grow forever", correct: false },
        { id: "c", text: "They explode", correct: false }
      ],
      explanation:
        "Black holes **lose mass** through quantum effects at the event horizon. It's incredibly slow, but it happens."
    }
  ]
};

let activeSubject = "economics";
let currentIndex = 0;
let xp = 120;
let pendingXp = 0;
let era = "Foundations";
let level = 3;
let streak = 3;
let todayLessons = 2;
let todayGoal = 5;
let combo = 0;
let totalCorrect = 0;

// Level thresholds
const LEVEL_XP = [0, 50, 150, 300, 500, 750, 1050, 1400, 1800, 2250];

// Achievements
const achievements = {
  firstLesson: { unlocked: true, name: "First Steps", desc: "Complete your first lesson" },
  streak3: { unlocked: true, name: "On Fire", desc: "Maintain a 3-day streak" },
  streak7: { unlocked: false, name: "Week Warrior", desc: "Maintain a 7-day streak" },
  combo5: { unlocked: false, name: "Perfect Five", desc: "Get 5 correct in a row" },
  scholar: { unlocked: false, name: "Scholar", desc: "Reach Level 5" },
  polymath: { unlocked: false, name: "Polymath", desc: "Complete lessons in 5 subjects" }
};

function $(selector) {
  return document.querySelector(selector);
}

// Format lesson text with emphasis and visual highlights
function formatLessonText(text) {
  if (!text) return '';
  
  // Convert to string if not already
  text = String(text);
  
  // Bold text between ** markers - using inline styles for now
  text = text.replace(/\*\*([^*]+)\*\*/g, '<strong style="color: #ffdd9a; font-weight: 700;">$1</strong>');
  
  // Emphasize years
  text = text.replace(/\b(\d{4})\b/g, '<span style="color: #f4b65e; font-weight: 700;">$1</span>');
  
  // Emphasize percentages
  text = text.replace(/\b(\d+%)\b/g, '<span style="color: #35c27e; font-weight: 700;">$1</span>');
  
  return text;
}

// ===== CONFETTI SYSTEM =====
function createConfetti() {
  const canvas = $("#confettiCanvas");
  if (!canvas) return;
  
  const ctx = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const confettiPieces = [];
  const colors = ["#ffdd9a", "#b86bff", "#4ea2ff", "#35c27e", "#f4b65e", "#d881ff"];
  
  // Create confetti pieces
  for (let i = 0; i < 100; i++) {
    confettiPieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      w: Math.random() * 10 + 5,
      h: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 3 + 2,
      angle: Math.random() * 360,
      wobble: Math.random() * 2 - 1
    });
  }
  
  let animationId;
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    let stillVisible = false;
    
    confettiPieces.forEach((piece) => {
      piece.y += piece.speed;
      piece.x += piece.wobble;
      piece.angle += 5;
      
      if (piece.y < canvas.height + 20) {
        stillVisible = true;
      }
      
      ctx.save();
      ctx.translate(piece.x, piece.y);
      ctx.rotate((piece.angle * Math.PI) / 180);
      ctx.fillStyle = piece.color;
      ctx.fillRect(-piece.w / 2, -piece.h / 2, piece.w, piece.h);
      ctx.restore();
    });
    
    if (stillVisible) {
      animationId = requestAnimationFrame(animate);
    }
  }
  
  animate();
  
  // Clear after 4 seconds
  setTimeout(() => {
    cancelAnimationFrame(animationId);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, 4000);
}

// ===== CELEBRATION SYSTEM =====
function showCelebration(type = "correct", xpGained = 8) {
  const overlay = $("#celebrationOverlay");
  const icon = $("#celebrationIcon");
  const text = $("#celebrationText");
  const xpText = $("#celebrationXpText");
  
  if (!overlay || !icon || !text || !xpText) return;
  
  // Clear previous content
  const content = overlay.querySelector('.celebration-content');
  if (!content) return;
  
  // Remove old Blu Bot if exists
  const oldBluBot = content.querySelector('.blubot-container');
  if (oldBluBot) oldBluBot.remove();
  
  if (type === "correct") {
    // Create Blu Bot container (happy)
    const blubotContainer = document.createElement('div');
    blubotContainer.className = 'blubot-container';
    blubotContainer.style.cssText = 'margin-bottom: 20px;';

    // Add Blu Bot SVG (happy)
    const blubot = createBluBot('celebrate');
    blubotContainer.appendChild(blubot);

    // Add speech bubble
    const speech = document.createElement('div');
    speech.className = 'blubot-speech';
    const messages = [
      "Amazing work! 🎉",
      "You're crushing it! ⭐",
      "Brilliant answer! 💡",
      "That's the way! 🚀",
      "Perfect! Keep going! 💪"
    ];
    speech.textContent = messages[Math.floor(Math.random() * messages.length)];
    blubotContainer.appendChild(speech);

    // Insert before other content
    content.insertBefore(blubotContainer, content.firstChild);

    icon.textContent = "";
    text.textContent = ["Awesome!", "Perfect!", "Brilliant!", "Amazing!", "Nailed it!"][Math.floor(Math.random() * 5)];
    xpText.textContent = `+${xpGained} XP`;
    createConfetti();
  } else if (type === "sad") {
    // Create Blu Bot container (sad)
    const blubotContainer = document.createElement('div');
    blubotContainer.className = 'blubot-container';
    blubotContainer.style.cssText = 'margin-bottom: 20px;';

    // Add Blu Bot SVG (sad)
    const blubot = createBluBot('sad');
    blubotContainer.appendChild(blubot);

    // Add speech bubble
    const speech = document.createElement('div');
    speech.className = 'blubot-speech';
    const messages = [
      "Oops! Not quite. 😢",
      "Don't give up! Try again!",
      "Almost! You'll get it next time.",
      "Keep going, you can do it!",
      "Blu Bot believes in you! 💙"
    ];
    speech.textContent = messages[Math.floor(Math.random() * messages.length)];
    blubotContainer.appendChild(speech);

    // Insert before other content
    content.insertBefore(blubotContainer, content.firstChild);

    icon.textContent = "";
    text.textContent = ["Try again!", "Almost!", "Keep going!", "Don't give up!", "You got this!"][Math.floor(Math.random() * 5)];
    xpText.textContent = ``;
  } else if (type === "levelup") {
    // Create Blu Bot container for level up
    const blubotContainer = document.createElement('div');
    blubotContainer.className = 'blubot-container';
    blubotContainer.style.cssText = 'margin-bottom: 20px;';
    
    const blubot = createBluBot('celebrate');
    blubotContainer.appendChild(blubot);
    
    const speech = document.createElement('div');
    speech.className = 'blubot-speech';
    speech.textContent = `Level ${level}! You're unstoppable! 🎉`;
    blubotContainer.appendChild(speech);
    
    content.insertBefore(blubotContainer, content.firstChild);
    
    icon.textContent = "🚀";
    text.textContent = `Level ${level}!`;
    xpText.textContent = "Keep going!";
    createConfetti();
  }
  
  overlay.classList.add("active");
  
  setTimeout(() => {
    overlay.classList.remove("active");
  }, 2500);
}

// Create Blu Bot SVG
function createBluBot(mood = 'celebrate') {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 120 150");
  svg.setAttribute("width", "120");
  svg.setAttribute("height", "150");
  svg.style.cssText = "display: block; margin: 0 auto;";
  
  if (mood === 'celebrate') {
    // Body
    const body = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    body.setAttribute("x", "40");
    body.setAttribute("y", "60");
    body.setAttribute("width", "40");
    body.setAttribute("height", "50");
    body.setAttribute("fill", "#4ea2ff");
    body.setAttribute("stroke", "#2a5a8f");
    body.setAttribute("stroke-width", "2");
    body.setAttribute("rx", "2");
    svg.appendChild(body);
    
    // Head
    const head = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    head.setAttribute("x", "35");
    head.setAttribute("y", "30");
    head.setAttribute("width", "50");
    head.setAttribute("height", "30");
    head.setAttribute("fill", "#4ea2ff");
    head.setAttribute("stroke", "#2a5a8f");
    head.setAttribute("stroke-width", "2");
    head.setAttribute("rx", "2");
    svg.appendChild(head);
    
    // Antenna
    const antenna = document.createElementNS("http://www.w3.org/2000/svg", "line");
    antenna.setAttribute("x1", "60");
    antenna.setAttribute("y1", "30");
    antenna.setAttribute("x2", "60");
    antenna.setAttribute("y2", "20");
    antenna.setAttribute("stroke", "#2a5a8f");
    antenna.setAttribute("stroke-width", "2");
    svg.appendChild(antenna);
    
    const antennaTip = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    antennaTip.setAttribute("cx", "60");
    antennaTip.setAttribute("cy", "18");
    antennaTip.setAttribute("r", "4");
    antennaTip.setAttribute("fill", "#ffdd9a");
    svg.appendChild(antennaTip);
    
    // Eyes (happy)
    const eye1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    eye1.setAttribute("cx", "50");
    eye1.setAttribute("cy", "45");
    eye1.setAttribute("r", "3");
    eye1.setAttribute("fill", "#1a1a1a");
    svg.appendChild(eye1);

    const eye2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    eye2.setAttribute("cx", "70");
    eye2.setAttribute("cy", "45");
    eye2.setAttribute("r", "3");
    eye2.setAttribute("fill", "#1a1a1a");
    svg.appendChild(eye2);

    // Arms (raised)
    const arm1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    arm1.setAttribute("x", "20");
    arm1.setAttribute("y", "55");
    arm1.setAttribute("width", "18");
    arm1.setAttribute("height", "8");
    arm1.setAttribute("fill", "#4ea2ff");
    arm1.setAttribute("stroke", "#2a5a8f");
    arm1.setAttribute("stroke-width", "2");
    arm1.setAttribute("rx", "2");
    svg.appendChild(arm1);

    const arm2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    arm2.setAttribute("x", "82");
    arm2.setAttribute("y", "55");
    arm2.setAttribute("width", "18");
    arm2.setAttribute("height", "8");
    arm2.setAttribute("fill", "#4ea2ff");
    arm2.setAttribute("stroke", "#2a5a8f");
    arm2.setAttribute("stroke-width", "2");
    arm2.setAttribute("rx", "2");
    svg.appendChild(arm2);
  } else if (mood === 'sad') {
    // Body
    const body = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    body.setAttribute("x", "40");
    body.setAttribute("y", "60");
    body.setAttribute("width", "40");
    body.setAttribute("height", "50");
    body.setAttribute("fill", "#4ea2ff");
    body.setAttribute("stroke", "#2a5a8f");
    body.setAttribute("stroke-width", "2");
    body.setAttribute("rx", "2");
    svg.appendChild(body);

    // Head
    const head = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    head.setAttribute("x", "35");
    head.setAttribute("y", "30");
    head.setAttribute("width", "50");
    head.setAttribute("height", "30");
    head.setAttribute("fill", "#4ea2ff");
    head.setAttribute("stroke", "#2a5a8f");
    head.setAttribute("stroke-width", "2");
    head.setAttribute("rx", "2");
    svg.appendChild(head);

    // Antenna
    const antenna = document.createElementNS("http://www.w3.org/2000/svg", "line");
    antenna.setAttribute("x1", "60");
    antenna.setAttribute("y1", "30");
    antenna.setAttribute("x2", "60");
    antenna.setAttribute("y2", "20");
    antenna.setAttribute("stroke", "#2a5a8f");
    antenna.setAttribute("stroke-width", "2");
    svg.appendChild(antenna);

    const antennaTip = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    antennaTip.setAttribute("cx", "60");
    antennaTip.setAttribute("cy", "18");
    antennaTip.setAttribute("r", "4");
    antennaTip.setAttribute("fill", "#ffdd9a");
    svg.appendChild(antennaTip);

    // Eyes (sad)
    const eye1 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    eye1.setAttribute("cx", "50");
    eye1.setAttribute("cy", "48");
    eye1.setAttribute("rx", "3");
    eye1.setAttribute("ry", "2");
    eye1.setAttribute("fill", "#1a1a1a");
    svg.appendChild(eye1);

    const eye2 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    eye2.setAttribute("cx", "70");
    eye2.setAttribute("cy", "48");
    eye2.setAttribute("rx", "3");
    eye2.setAttribute("ry", "2");
    eye2.setAttribute("fill", "#1a1a1a");
    svg.appendChild(eye2);

    // Arms (down)
    const arm1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    arm1.setAttribute("x", "20");
    arm1.setAttribute("y", "90");
    arm1.setAttribute("width", "18");
    arm1.setAttribute("height", "8");
    arm1.setAttribute("fill", "#4ea2ff");
    arm1.setAttribute("stroke", "#2a5a8f");
    arm1.setAttribute("stroke-width", "2");
    arm1.setAttribute("rx", "2");
    svg.appendChild(arm1);

    const arm2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    arm2.setAttribute("x", "82");
    arm2.setAttribute("y", "90");
    arm2.setAttribute("width", "18");
    arm2.setAttribute("height", "8");
    arm2.setAttribute("fill", "#4ea2ff");
    arm2.setAttribute("stroke", "#2a5a8f");
    arm2.setAttribute("stroke-width", "2");
    arm2.setAttribute("rx", "2");
    svg.appendChild(arm2);

    // Legs
    const leg1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    leg1.setAttribute("x", "45");
    leg1.setAttribute("y", "110");
    leg1.setAttribute("width", "10");
    leg1.setAttribute("height", "25");
    leg1.setAttribute("fill", "#4ea2ff");
    leg1.setAttribute("stroke", "#2a5a8f");
    leg1.setAttribute("stroke-width", "2");
    svg.appendChild(leg1);

    const leg2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    leg2.setAttribute("x", "65");
    leg2.setAttribute("y", "110");
    leg2.setAttribute("width", "10");
    leg2.setAttribute("height", "25");
    leg2.setAttribute("fill", "#4ea2ff");
    leg2.setAttribute("stroke", "#2a5a8f");
    leg2.setAttribute("stroke-width", "2");
    svg.appendChild(leg2);

    // Feet
    const foot1 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    foot1.setAttribute("cx", "50");
    foot1.setAttribute("cy", "138");
    foot1.setAttribute("rx", "8");
    foot1.setAttribute("ry", "4");
    foot1.setAttribute("fill", "#2a5a8f");
    svg.appendChild(foot1);

    const foot2 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    foot2.setAttribute("cx", "70");
    foot2.setAttribute("cy", "138");
    foot2.setAttribute("rx", "8");
    foot2.setAttribute("ry", "4");
    foot2.setAttribute("fill", "#2a5a8f");
    svg.appendChild(foot2);

    // Sad mouth
    const mouth = document.createElementNS("http://www.w3.org/2000/svg", "path");
    mouth.setAttribute("d", "M52 60 Q60 55 68 60");
    mouth.setAttribute("stroke", "#1a1a1a");
    mouth.setAttribute("stroke-width", "2");
    mouth.setAttribute("fill", "none");
    svg.appendChild(mouth);
    
    // Legs
    const leg1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    leg1.setAttribute("x", "45");
    leg1.setAttribute("y", "110");
    leg1.setAttribute("width", "10");
    leg1.setAttribute("height", "25");
    leg1.setAttribute("fill", "#4ea2ff");
    leg1.setAttribute("stroke", "#2a5a8f");
    leg1.setAttribute("stroke-width", "2");
    svg.appendChild(leg1);
    
    const leg2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    leg2.setAttribute("x", "65");
    leg2.setAttribute("y", "110");
    leg2.setAttribute("width", "10");
    leg2.setAttribute("height", "25");
    leg2.setAttribute("fill", "#4ea2ff");
    leg2.setAttribute("stroke", "#2a5a8f");
    leg2.setAttribute("stroke-width", "2");
    svg.appendChild(leg2);
    
    // Feet
    const foot1 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    foot1.setAttribute("cx", "50");
    foot1.setAttribute("cy", "138");
    foot1.setAttribute("rx", "8");
    foot1.setAttribute("ry", "4");
    foot1.setAttribute("fill", "#2a5a8f");
    svg.appendChild(foot1);
    
    const foot2 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    foot2.setAttribute("cx", "70");
    foot2.setAttribute("cy", "138");
    foot2.setAttribute("rx", "8");
    foot2.setAttribute("ry", "4");
    foot2.setAttribute("fill", "#2a5a8f");
    svg.appendChild(foot2);
  }
  
  return svg;
}

// ===== ACHIEVEMENT SYSTEM =====
function checkAndShowAchievement(achievementKey) {
  if (achievements[achievementKey] && !achievements[achievementKey].unlocked) {
    achievements[achievementKey].unlocked = true;
    
    const popup = $("#achievementPopup");
    const title = $("#achievementTitle");
    const desc = $("#achievementDesc");
    
    if (!popup || !title || !desc) return;
    
    title.textContent = "Achievement Unlocked!";
    desc.textContent = achievements[achievementKey].name;
    
    popup.classList.add("active");
    
    setTimeout(() => {
      popup.classList.remove("active");
    }, 3000);
  }
}

// ===== UPDATE UI =====
function updateGameUI() {
  const xpValueEl = $("#xpValue");
  const levelValueEl = $("#levelValue");
  const streakValueEl = $("#streakValue");
  const todayGoalEl = $("#todayGoal");
  const xpProgressMiniEl = $("#xpProgressMini");
  
  if (xpValueEl) xpValueEl.textContent = xp;
  if (levelValueEl) levelValueEl.textContent = level;
  if (streakValueEl) streakValueEl.textContent = streak;
  if (todayGoalEl) todayGoalEl.textContent = `${todayLessons}/${todayGoal}`;
  
  // Calculate level thresholds
  const currentLevelXP = LEVEL_XP[level - 1] || 0;
  const nextLevelXP = LEVEL_XP[level] || currentLevelXP + 500;
  
  // Update XP progress bar
  if (xpProgressMiniEl) {
    const progress = ((xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100;
    xpProgressMiniEl.style.width = `${Math.min(progress, 100)}%`;
  }
  
  // Check for level up
  if (xp >= nextLevelXP && level < LEVEL_XP.length) {
    level++;
    showLevelUp();
    
    if (level >= 5 && !achievements.scholar.unlocked) {
      setTimeout(() => checkAndShowAchievement("scholar"), 2000);
    }
  }
}

function getCurrentLessons() {
  const lessons = subjectLessons[activeSubject] || [];
  console.log(`📚 getCurrentLessons() for "${activeSubject}":`, lessons.length, "lessons");
  return lessons;
}

function renderLesson() {
  console.log("📝 ========== renderLesson() START ==========");
  console.log("📝 Current subject:", activeSubject);
  console.log("📝 Current index:", currentIndex);
  console.log("📝 Will display progress as:", (currentIndex + 1), "/ X");
  
  const lessons = getCurrentLessons();
  console.log("📝 Got lessons:", lessons.length);
  
  if (!lessons || lessons.length === 0) {
    console.error("❌ No lessons available for subject:", activeSubject);
    return;
  }
  
  // Ensure currentIndex is valid
  if (currentIndex < 0 || currentIndex >= lessons.length) {
    console.warn("⚠️ Invalid currentIndex:", currentIndex, "Resetting to 0");
    currentIndex = 0;
  }
  
  const actualLesson = lessons[currentIndex];
  
  if (!actualLesson) {
    console.error("❌ No lesson found at index", currentIndex);
    return;
  }
  
  console.log("Rendering lesson type:", actualLesson.type);
  console.log("Lesson title/question:", actualLesson.title || actualLesson.question);
  console.log("Lesson data:", actualLesson);

  const contentEl = $("#lessonContent");
  const quizBlock = $("#quizBlock");
  const progressLabel = $("#lessonProgressLabel");
  const progressFill = $("#lessonProgressFill");
  const hintText = $("#hintText");
  const pendingXpEl = $("#pendingXp");
  
  if (!contentEl || !quizBlock) {
    console.error("❌ Missing UI elements!");
    return;
  }
  
  // Update progress with animation
  progressLabel.textContent = `${currentIndex + 1} / ${lessons.length}`;
  const pct = ((currentIndex + 1) / lessons.length) * 100;
  progressFill.style.width = `${pct}%`;

  // Reset hint + pending XP display
  pendingXp = 0;
  pendingXpEl.textContent = "0";
  hintText.textContent = "Tap an answer to check your understanding.";

  // Force clear and reset opacity
  contentEl.innerHTML = "";
  quizBlock.innerHTML = "";
  contentEl.style.opacity = '1';
  quizBlock.style.opacity = '1';

  // Render content vs quiz
  console.log("🎨 Rendering lesson type:", actualLesson.type);
  
  if (actualLesson.type === "content") {
    console.log("📄 Rendering content lesson");
    console.log("Title:", actualLesson.title);
    console.log("Paragraphs:", actualLesson.paragraphs?.length);

    if (actualLesson.title) {
      const titleP = document.createElement("div");
      titleP.style.fontSize = "20px";
      titleP.style.fontWeight = "800";
      titleP.style.marginBottom = "16px";
      titleP.style.color = "#fff";
      titleP.style.background = "linear-gradient(120deg, #fff, #d4c5ff)";
      titleP.style.webkitBackgroundClip = "text";
      titleP.style.webkitTextFillColor = "transparent";
      titleP.style.backgroundClip = "text";
      titleP.style.letterSpacing = "-0.01em";
      titleP.textContent = actualLesson.title;
      contentEl.appendChild(titleP);
      console.log("✅ Title appended to contentEl");
    }

    actualLesson.paragraphs.forEach((text, index) => {
      const p = document.createElement("p");
      p.style.cssText = "margin-bottom: 18px; line-height: 1.8;";
      p.innerHTML = formatLessonText(text);
      contentEl.appendChild(p);
      console.log(`✅ Paragraph ${index + 1} appended`);
    });
    
    console.log("📊 Final contentEl.children.length:", contentEl.children.length);
    console.log("📊 Final contentEl.innerHTML length:", contentEl.innerHTML.length);
  } else if (actualLesson.type === "quiz") {
    console.log("❓ Rendering quiz lesson");
    // Simple intro content
    const intro = document.createElement("div");
    intro.innerHTML = '<span style="font-size: 24px; margin-right: 8px;">💡</span><span style="font-weight: 700; font-size: 17px; color: #ffdd9a;">Time to test your knowledge!</span>';
    intro.style.display = "flex";
    intro.style.alignItems = "center";
    intro.style.marginBottom = "4px";
    contentEl.appendChild(intro);

    // Render quiz
    const label = document.createElement("div");
    label.className = "quiz-label";
    label.textContent = "Quiz";
    quizBlock.appendChild(label);

    const q = document.createElement("div");
    q.className = "quiz-question";
    q.textContent = actualLesson.question;
    quizBlock.appendChild(q);

    const optionsWrapper = document.createElement("div");
    optionsWrapper.className = "quiz-options";

    actualLesson.options.forEach((opt, index) => {
      const btn = document.createElement("button");
      btn.className = "quiz-option";
      btn.dataset.optionId = opt.id;

      const textSpan = document.createElement("span");
      textSpan.textContent = opt.text;

      const indicator = document.createElement("span");
      indicator.className = "option-indicator";
      indicator.textContent = "○";

      btn.appendChild(textSpan);
      btn.appendChild(indicator);

      btn.addEventListener("click", () => {
        handleQuizClick(btn, opt, actualLesson);
      });

      optionsWrapper.appendChild(btn);
    });

    quizBlock.appendChild(optionsWrapper);
  } else if (actualLesson.type === "scenario") {
    console.log("🎯 Rendering scenario lesson");
    console.log("Scenario question:", actualLesson.question);
    console.log("Number of options:", actualLesson.options?.length);
    
    // Scenario-based decision making
    const scenarioBox = document.createElement("div");
    scenarioBox.style.cssText = "background: linear-gradient(135deg, rgba(244, 182, 94, 0.15), rgba(0, 0, 0, 0.5)); padding: 20px; border-radius: 14px; border: 2px solid rgba(244, 182, 94, 0.4); margin-bottom: 16px;";
    scenarioBox.innerHTML = `<div style="font-size: 16px; line-height: 1.6; color: #fff;">${actualLesson.scenario}</div>`;
    contentEl.appendChild(scenarioBox);

    // Render quiz-style options
    const label = document.createElement("div");
    label.className = "quiz-label";
    label.textContent = "Your Decision";
    quizBlock.appendChild(label);

    const q = document.createElement("div");
    q.className = "quiz-question";
    q.textContent = actualLesson.question;
    quizBlock.appendChild(q);

    const optionsWrapper = document.createElement("div");
    optionsWrapper.className = "quiz-options";

    actualLesson.options.forEach((opt, index) => {
      const btn = document.createElement("button");
      btn.className = "quiz-option";
      btn.dataset.optionId = opt.id;

      const textSpan = document.createElement("span");
      textSpan.textContent = opt.text;

      const indicator = document.createElement("span");
      indicator.className = "option-indicator";
      indicator.textContent = "○";

      btn.appendChild(textSpan);
      btn.appendChild(indicator);

      btn.addEventListener("click", () => {
        handleScenarioClick(btn, opt, actualLesson);
      });

      optionsWrapper.appendChild(btn);
    });

    quizBlock.appendChild(optionsWrapper);
  } else if (actualLesson.type === "final-quiz") {
    // Final comprehensive quiz
    console.log("📝 Rendering final quiz");
    
    const intro = document.createElement("div");
    intro.innerHTML = '<span style="font-size: 32px; margin-right: 12px;">🎓</span><span style="font-weight: 800; font-size: 20px; color: #ffdd9a;">Final Exam</span>';
    intro.style.display = "flex";
    intro.style.alignItems = "center";
    intro.style.marginBottom = "12px";
    contentEl.appendChild(intro);
    
    const instructionDiv = document.createElement("div");
    instructionDiv.style.cssText = "font-size: 15px; color: var(--text-soft); margin-bottom: 20px; line-height: 1.6;";
    instructionDiv.textContent = actualLesson.instruction;
    contentEl.appendChild(instructionDiv);
    
    // Track answers
    let userAnswers = [];
    let currentQuestionIndex = 0;
    
    function renderQuestion(qIndex) {
      quizBlock.innerHTML = "";
      
      const question = actualLesson.questions[qIndex];
      const progressDiv = document.createElement("div");
      progressDiv.style.cssText = "font-size: 13px; color: var(--text-muted); margin-bottom: 16px; font-weight: 600;";
      progressDiv.textContent = `Question ${qIndex + 1} of ${actualLesson.questions.length}`;
      quizBlock.appendChild(progressDiv);
      
      const questionDiv = document.createElement("div");
      questionDiv.className = "quiz-question";
      questionDiv.textContent = question.q;
      quizBlock.appendChild(questionDiv);
      
      const optionsWrapper = document.createElement("div");
      optionsWrapper.className = "quiz-options";
      
      question.options.forEach((opt) => {
        const btn = document.createElement("button");
        btn.className = "quiz-option";
        btn.dataset.optionId = opt.id;
        
        const textSpan = document.createElement("span");
        textSpan.textContent = opt.text;
        
        const indicator = document.createElement("span");
        indicator.className = "option-indicator";
        indicator.textContent = "○";
        
        btn.appendChild(textSpan);
        btn.appendChild(indicator);
        
        btn.addEventListener("click", () => {
          // Record answer
          userAnswers[qIndex] = opt.correct;

          // Visual feedback
          btn.classList.add(opt.correct ? "correct" : "incorrect");
          indicator.textContent = opt.correct ? "✓" : "✗";

          // Disable all buttons
          optionsWrapper.querySelectorAll(".quiz-option").forEach(b => b.disabled = true);

          // Show explanation
          const explanationDiv = document.createElement("div");
          explanationDiv.style.cssText = "margin-top: 16px; padding: 16px; background: rgba(0, 0, 0, 0.3); border-radius: 12px; border-left: 4px solid " + (opt.correct ? "#64e892" : "#ff7b7b");
          explanationDiv.innerHTML = formatLessonText(question.explanation);
          quizBlock.appendChild(explanationDiv);

          // Show Blu Bot after every answer: happy for correct, sad for incorrect
          if (opt.correct) {
            showCelebration("correct", 8);
          } else {
            showCelebration("sad", 0);
          }

          // Next question button
          const nextBtn = document.createElement("button");
          nextBtn.textContent = qIndex < actualLesson.questions.length - 1 ? "Next Question →" : "See Results";
          nextBtn.style.cssText = "margin-top: 20px; padding: 12px 28px; background: linear-gradient(120deg, #35c27e, #2ed4c4); color: #0a1f14; border: none; border-radius: 999px; font-weight: 700; cursor: pointer; transition: all 0.3s;";
          nextBtn.onclick = () => {
            if (qIndex < actualLesson.questions.length - 1) {
              renderQuestion(qIndex + 1);
            } else {
              showResults();
            }
          };
          quizBlock.appendChild(nextBtn);
        });
        
        optionsWrapper.appendChild(btn);
      });
      
      quizBlock.appendChild(optionsWrapper);
    }
    
    function showResults() {
      quizBlock.innerHTML = "";
      
      const correctCount = userAnswers.filter(a => a === true).length;
      const passed = correctCount >= actualLesson.passingScore;
      
      const resultDiv = document.createElement("div");
      resultDiv.style.cssText = `text-align: center; padding: 40px 20px; background: ${passed ? 'linear-gradient(135deg, rgba(100, 232, 146, 0.15), rgba(53, 194, 126, 0.1))' : 'linear-gradient(135deg, rgba(255, 123, 123, 0.15), rgba(255, 107, 53, 0.1))'}; border-radius: 16px; border: 2px solid ${passed ? '#64e892' : '#ff7b7b'};`;
      
      // Add Blu Bot
      const blubotContainer = document.createElement('div');
      blubotContainer.style.cssText = 'margin-bottom: 20px; position: relative;';
      
      const blubot = createBluBot(passed ? 'celebrate' : 'study');
      blubotContainer.appendChild(blubot);
      
      // Speech bubble
      const speech = document.createElement('div');
      speech.className = 'blubot-speech';
      if (passed) {
        const passMessages = [
          "You're a genius! 🎓",
          "Incredible work! 🌟",
          "You mastered it! 🏆",
          "Brilliant performance! ⭐",
          "You're unstoppable! 🚀"
        ];
        speech.textContent = passMessages[Math.floor(Math.random() * passMessages.length)];
      } else {
        const retryMessages = [
          "Keep learning! You'll get it! 💪",
          "Try again! You're close! 📚",
          "Review and retry! You got this! 🎯",
          "Learning takes practice! 💙",
          "One more try! I believe in you! ⭐"
        ];
        speech.textContent = retryMessages[Math.floor(Math.random() * retryMessages.length)];
      }
      speech.style.position = 'absolute';
      speech.style.top = '-50px';
      speech.style.left = '50%';
      speech.style.transform = 'translateX(-50%)';
      blubotContainer.appendChild(speech);
      
      resultDiv.appendChild(blubotContainer);
      
      const titleDiv = document.createElement("div");
      titleDiv.style.cssText = "font-size: 32px; font-weight: 800; margin-bottom: 12px; color: " + (passed ? "#64e892" : "#ff7b7b");
      titleDiv.textContent = passed ? "You Passed!" : "Keep Learning";
      resultDiv.appendChild(titleDiv);
      
      const scoreDiv = document.createElement("div");
      scoreDiv.style.cssText = "font-size: 24px; font-weight: 600; margin-bottom: 20px;";
      scoreDiv.textContent = `Score: ${correctCount}/${actualLesson.questions.length}`;
      resultDiv.appendChild(scoreDiv);
      
      const messageDiv = document.createElement("div");
      messageDiv.style.cssText = "font-size: 16px; color: var(--text-soft); line-height: 1.6; max-width: 400px; margin: 0 auto;";
      messageDiv.textContent = passed 
        ? `Excellent work! You've mastered this subject. You got ${correctCount} out of ${actualLesson.questions.length} correct.`
        : `You got ${correctCount} out of ${actualLesson.questions.length}. You need ${actualLesson.passingScore} to pass. Review the lessons and try again!`;
      resultDiv.appendChild(messageDiv);
      
      if (passed) {
        xp += 50;
        updateGameUI();
        setTimeout(() => {
          showCelebration("correct", 50);
        }, 500);
      }
      
      quizBlock.appendChild(resultDiv);
    }
    
    // Start with first question
    renderQuestion(0);
  } else if (actualLesson.type === "interactive-chart") {
    // Interactive chart visualization
    const titleDiv = document.createElement("div");
    titleDiv.style.cssText = "font-size: 20px; font-weight: 800; margin-bottom: 16px; color: #fff; background: linear-gradient(120deg, #fff, #d4c5ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;";
    titleDiv.textContent = actualLesson.title;
    contentEl.appendChild(titleDiv);

    const descDiv = document.createElement("div");
    descDiv.style.cssText = "font-size: 16px; margin-bottom: 24px; color: var(--text-soft); line-height: 1.6;";
    descDiv.textContent = actualLesson.description;
    contentEl.appendChild(descDiv);

    // Create simple chart container
    const chartContainer = document.createElement("div");
    chartContainer.style.cssText = "background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(0, 0, 0, 0.6)); padding: 24px; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.15); margin-bottom: 20px;";
    
    // Create simple line chart using divs
    const chartArea = document.createElement("div");
    chartArea.style.cssText = "height: 250px; display: flex; align-items: flex-end; justify-content: space-between; gap: 4px; background: rgba(0, 0, 0, 0.3); padding: 16px; border-radius: 12px; position: relative;";
    
    if (actualLesson.dataPoints) {
      const maxValue = Math.max(...actualLesson.dataPoints.map(p => p.value));
      actualLesson.dataPoints.forEach((point, idx) => {
        const bar = document.createElement("div");
        const heightPercent = (point.value / maxValue) * 100;
        bar.style.cssText = `flex: 1; background: linear-gradient(180deg, #ffdd9a, #b86bff); height: ${heightPercent}%; border-radius: 4px 4px 0 0; position: relative; cursor: pointer; transition: all 0.3s;`;
        bar.title = `${point.year}: ${point.label}`;
        
        bar.onmouseenter = () => {
          bar.style.transform = 'translateY(-4px)';
          bar.style.filter = 'brightness(1.3)';
        };
        bar.onmouseleave = () => {
          bar.style.transform = 'translateY(0)';
          bar.style.filter = 'brightness(1)';
        };
        
        chartArea.appendChild(bar);
      });
    }
    
    chartContainer.appendChild(chartArea);
    quizBlock.appendChild(chartContainer);

    // Add insights
    if (actualLesson.insights) {
      const insightsDiv = document.createElement("div");
      insightsDiv.style.cssText = "margin-top: 20px;";
      actualLesson.insights.forEach(insight => {
        const p = document.createElement("p");
        p.innerHTML = formatLessonText(insight);
        p.style.cssText = "margin-bottom: 14px; line-height: 1.6;";
        insightsDiv.appendChild(p);
      });
      quizBlock.appendChild(insightsDiv);
    }
  } else if (actualLesson.type === "interactive-slider") {
    // Interactive slider lesson
    const titleDiv = document.createElement("div");
    titleDiv.style.cssText = "font-size: 20px; font-weight: 800; margin-bottom: 16px; color: #fff;";
    titleDiv.textContent = actualLesson.title;
    contentEl.appendChild(titleDiv);

    const questionDiv = document.createElement("div");
    questionDiv.style.cssText = "font-size: 16px; margin-bottom: 20px; color: var(--text-soft);";
    questionDiv.textContent = actualLesson.question;
    contentEl.appendChild(questionDiv);

    // Slider container
    const sliderContainer = document.createElement("div");
    sliderContainer.style.cssText = "background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(0, 0, 0, 0.6)); padding: 24px; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.15);";

    const slider = document.createElement("input");
    slider.type = "range";
    slider.min = actualLesson.min;
    slider.max = actualLesson.max;
    slider.value = actualLesson.defaultValue;
    slider.style.cssText = "width: 100%; height: 8px; margin: 20px 0;";

    const labelDiv = document.createElement("div");
    labelDiv.style.cssText = "display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 14px; font-weight: 600;";
    labelDiv.innerHTML = `<span>${actualLesson.labels[actualLesson.min]}</span><span>${actualLesson.labels[50]}</span><span>${actualLesson.labels[actualLesson.max]}</span>`;

    const resultDiv = document.createElement("div");
    resultDiv.style.cssText = "margin-top: 24px; padding: 20px; background: rgba(0, 0, 0, 0.5); border-radius: 12px; border-left: 4px solid #4ea2ff; font-size: 16px; line-height: 1.6;";
    resultDiv.textContent = actualLesson.outcomes[actualLesson.defaultValue].text;
    resultDiv.style.borderLeftColor = actualLesson.outcomes[actualLesson.defaultValue].color;

    slider.addEventListener("input", (e) => {
      const val = parseInt(e.target.value);
      const closest = Object.keys(actualLesson.outcomes).reduce((prev, curr) =>
        Math.abs(curr - val) < Math.abs(prev - val) ? curr : prev
      );
      resultDiv.textContent = actualLesson.outcomes[closest].text;
      resultDiv.style.borderLeftColor = actualLesson.outcomes[closest].color;
    });

    sliderContainer.appendChild(labelDiv);
    sliderContainer.appendChild(slider);
    sliderContainer.appendChild(resultDiv);

    quizBlock.appendChild(sliderContainer);
  } else if (actualLesson.type === "drag-sort") {
    // Drag and sort exercise
    const titleDiv = document.createElement("div");
    titleDiv.style.cssText = "font-size: 20px; font-weight: 800; margin-bottom: 16px; color: #fff; background: linear-gradient(120deg, #fff, #d4c5ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;";
    titleDiv.textContent = actualLesson.title;
    contentEl.appendChild(titleDiv);

    const instructionDiv = document.createElement("div");
    instructionDiv.style.cssText = "font-size: 16px; margin-bottom: 20px; color: var(--text-soft);";
    instructionDiv.textContent = actualLesson.instruction;
    contentEl.appendChild(instructionDiv);

    // Shuffled items
    const items = [...actualLesson.items].sort(() => Math.random() - 0.5);
    const itemsContainer = document.createElement("div");
    itemsContainer.style.cssText = "display: flex; flex-direction: column; gap: 12px; margin-bottom: 16px;";
    
    items.forEach((item, idx) => {
      const itemDiv = document.createElement("div");
      itemDiv.style.cssText = "padding: 16px 20px; background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(14, 14, 30, 0.95)); border: 2px solid rgba(255, 255, 255, 0.2); border-radius: 12px; cursor: move; user-select: none; transition: all 0.3s;";
      itemDiv.textContent = item.text;
      itemDiv.draggable = true;
      
      itemDiv.addEventListener('dragstart', (e) => {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', itemDiv.innerHTML);
        itemDiv.style.opacity = '0.4';
      });
      
      itemDiv.addEventListener('dragend', (e) => {
        itemDiv.style.opacity = '1';
      });
      
      itemDiv.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        itemDiv.style.borderColor = 'rgba(255, 221, 154, 0.6)';
      });
      
      itemDiv.addEventListener('dragleave', (e) => {
        itemDiv.style.borderColor = 'rgba(255, 255, 255, 0.2)';
      });
      
      itemDiv.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggedItem = document.querySelector('[draggable="true"][style*="opacity: 0.4"]');
        if (draggedItem && draggedItem !== itemDiv) {
          const parent = itemDiv.parentNode;
          const draggedIndex = Array.from(parent.children).indexOf(draggedItem);
          const targetIndex = Array.from(parent.children).indexOf(itemDiv);
          
          if (draggedIndex < targetIndex) {
            parent.insertBefore(draggedItem, itemDiv.nextSibling);
          } else {
            parent.insertBefore(draggedItem, itemDiv);
          }
        }
        itemDiv.style.borderColor = 'rgba(255, 255, 255, 0.2)';
      });
      
      itemsContainer.appendChild(itemDiv);
    });
    
    quizBlock.appendChild(itemsContainer);
    
    // Check button
    const checkBtn = document.createElement("button");
    checkBtn.textContent = "Check Order";
    checkBtn.style.cssText = "padding: 12px 24px; background: linear-gradient(120deg, #35c27e, #2ed4c4); color: #0a1f14; border: none; border-radius: 999px; font-weight: 700; cursor: pointer; transition: all 0.3s;";
    checkBtn.onclick = () => {
      const currentOrder = Array.from(itemsContainer.children).map(el => el.textContent);
      const correctOrder = actualLesson.items.map(item => item.text);
      const isCorrect = currentOrder.every((text, idx) => text === correctOrder[idx]);
      
      if (isCorrect) {
        checkBtn.textContent = "✓ Perfect!";
        checkBtn.style.background = "linear-gradient(120deg, #64e892, #35c27e)";
        showCelebration("correct", 10);
        xp += 10;
        updateGameUI();
      } else {
        checkBtn.textContent = "Try again";
        checkBtn.style.background = "linear-gradient(120deg, #ff7b7b, #ff6b35)";
        setTimeout(() => {
          checkBtn.textContent = "Check Order";
          checkBtn.style.background = "linear-gradient(120deg, #35c27e, #2ed4c4)";
        }, 2000);
      }
    };
    
    quizBlock.appendChild(checkBtn);
  } else if (actualLesson.type === "fill-blanks") {
    // Fill in the blanks exercise
    const titleDiv = document.createElement("div");
    titleDiv.style.cssText = "font-size: 20px; font-weight: 800; margin-bottom: 16px; color: #fff; background: linear-gradient(120deg, #fff, #d4c5ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;";
    titleDiv.textContent = actualLesson.title;
    contentEl.appendChild(titleDiv);

    const textDiv = document.createElement("div");
    textDiv.style.cssText = "font-size: 17px; line-height: 1.8; margin-bottom: 20px;";
    
    // Replace blanks with input fields
    let textWithInputs = actualLesson.text;
    actualLesson.blanks.forEach((blank, idx) => {
      textWithInputs = textWithInputs.replace(`___${idx + 1}___`, `<input type="text" data-answer="${blank.answer}" style="
        padding: 6px 12px;
        background: rgba(255, 255, 255, 0.1);
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-radius: 8px;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        min-width: 150px;
        text-align: center;
      " />`);
    });
    
    textDiv.innerHTML = textWithInputs;
    quizBlock.appendChild(textDiv);
    
    // Check button
    const checkBtn = document.createElement("button");
    checkBtn.textContent = "Check Answers";
    checkBtn.style.cssText = "padding: 12px 24px; background: linear-gradient(120deg, #35c27e, #2ed4c4); color: #0a1f14; border: none; border-radius: 999px; font-weight: 700; cursor: pointer; transition: all 0.3s;";
    checkBtn.onclick = () => {
      const inputs = quizBlock.querySelectorAll('input[data-answer]');
      let allCorrect = true;
      
      inputs.forEach(input => {
        const userAnswer = input.value.trim().toLowerCase();
        const correctAnswer = input.dataset.answer.toLowerCase();
        
        if (userAnswer === correctAnswer) {
          input.style.borderColor = '#64e892';
          input.style.background = 'rgba(100, 232, 146, 0.2)';
        } else {
          input.style.borderColor = '#ff7b7b';
          input.style.background = 'rgba(255, 123, 123, 0.2)';
          allCorrect = false;
        }
      });
      
      if (allCorrect) {
        checkBtn.textContent = "✓ All Correct!";
        checkBtn.style.background = "linear-gradient(120deg, #64e892, #35c27e)";
        showCelebration("correct", 12);
        xp += 12;
        updateGameUI();
      } else {
        checkBtn.textContent = "Some incorrect - try again";
        checkBtn.style.background = "linear-gradient(120deg, #ff7b7b, #ff6b35)";
        setTimeout(() => {
          checkBtn.textContent = "Check Answers";
          checkBtn.style.background = "linear-gradient(120deg, #35c27e, #2ed4c4)";
        }, 2000);
      }
    };
    
    quizBlock.appendChild(checkBtn);
  }
  
  console.log("📝 ========== renderLesson() END ==========");
  console.log("📝 Final currentIndex:", currentIndex);
}

function handleScenarioClick(button, option, lesson) {
  // Lock all options
  const allOptions = document.querySelectorAll(".quiz-option");
  allOptions.forEach((btn) => {
    btn.disabled = true;
  });

  const hintText = $("#hintText");
  const pendingXpEl = $("#pendingXp");
  
  if (!hintText || !pendingXpEl) return;

  if (option.correct) {
    button.classList.add("correct");
    const indicator = button.querySelector(".option-indicator");
    if (indicator) indicator.textContent = "✓";

    pendingXp = 12; // Scenarios give more XP
    combo++;
    totalCorrect++;
    
    // Show consequence
    hintText.innerHTML = `<strong style=\"color: #35c27e;\">✓ Good call!</strong><br/>${option.consequence}<br/><br/><em style=\"color: var(--text-muted);\">${lesson.explanation}</em>`;

    // Always show Blu Bot celebration immediately
    showCelebration("correct", pendingXp);
  } else {
    button.classList.add("incorrect");
    const indicator = button.querySelector(".option-indicator");
    if (indicator) indicator.textContent = "✗";

    pendingXp = 3;
    combo = 0;
    
    // Show consequence
    hintText.innerHTML = `<strong style="color: #ff7b7b;">Outcome:</strong><br/>${option.consequence}<br/><br/><em style="color: var(--text-muted);">${lesson.explanation}</em>`;
  }

  xp += pendingXp;
  updateGameUI();
  
  pendingXpEl.style.transform = 'scale(1.3)';
  pendingXpEl.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
  setTimeout(() => {
    pendingXpEl.textContent = `+${pendingXp}`;
    pendingXpEl.style.transform = 'scale(1)';
  }, 50);
}

function handleQuizClick(button, option, lesson) {
  // Lock all options
  const allOptions = document.querySelectorAll(".quiz-option");
  allOptions.forEach((btn) => {
    btn.disabled = true;
    btn.classList.remove("correct", "incorrect");
    const indicator = btn.querySelector(".option-indicator");
    if (indicator) indicator.textContent = "○";
  });

  const hintText = $("#hintText");
  const pendingXpEl = $("#pendingXp");
  
  if (!hintText || !pendingXpEl) return;

  if (option.correct) {
    button.classList.add("correct");
    const indicator = button.querySelector(".option-indicator");
    if (indicator) indicator.textContent = "✓";

    pendingXp = 8;
    combo++;
    totalCorrect++;
    hintText.textContent = lesson.explanation;
    
    // Check combo achievement
    if (combo >= 5 && !achievements.combo5.unlocked) {
      setTimeout(() => checkAndShowAchievement("combo5"), 1000);
    }
    
    // Show celebration
    setTimeout(() => {
      showCelebration("correct", pendingXp);
    }, 300);
    
  } else {
    button.classList.add("incorrect");
    const indicator = button.querySelector(".option-indicator");
    if (indicator) indicator.textContent = "✗";

    pendingXp = 2;
    combo = 0; // Reset combo on wrong answer
    hintText.textContent = lesson.explanation || "Not quite. Review the content and try to think through the key concepts.";
  }

  // Animate XP gain
  const oldXp = xp;
  xp += pendingXp;
  
  // Update all UI
  updateGameUI();
  
  // Animate pending XP display
  pendingXpEl.style.transform = 'scale(1.3)';
  pendingXpEl.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
  setTimeout(() => {
    pendingXpEl.textContent = `+${pendingXp}`;
    pendingXpEl.style.transform = 'scale(1)';
  }, 50);
}

// Smooth counter animation
function animateCounter(element, start, end, duration) {
  const startTime = performance.now();
  const diff = end - start;
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function for smooth animation
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const current = Math.round(start + diff * easeOutQuart);
    
    element.textContent = current.toString();
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}

function goNext() {
  console.log("➡️ goNext() called");
  console.log("➡️ Current index BEFORE increment:", currentIndex);
  
  const lessons = getCurrentLessons();
  if (!lessons.length) return;

  currentIndex++;
  console.log("➡️ Current index AFTER increment:", currentIndex);
  
  if (currentIndex >= lessons.length) {
    console.log("➡️ Reached end, looping back to 0");
    currentIndex = 0; // Loop back to start
    todayLessons++;
    updateGameUI();
    
    // Check daily goal achievement
    if (todayLessons >= todayGoal) {
      setTimeout(() => {
        showCelebration("correct", 20);
      }, 500);
    }
  }
  renderLesson();
}

// Expose globally for inline onclick
window.goNextDirect = goNext;
window.handleSubjectClickDirect = handleSubjectClick;

function showLevelUp() {
  const overlay = $("#levelUpOverlay");
  const number = $("#levelUpNumber");
  
  if (!overlay || !number) return;
  
  number.textContent = level;
  overlay.classList.add("active");
  
  createConfetti();
}

function closeLevelUp() {
  const overlay = $("#levelUpOverlay");
  if (!overlay) return;
  
  overlay.classList.remove("active");
}

// Make closeLevelUp globally accessible for inline onclick
window.closeLevelUp = closeLevelUp;

function switchTab(tab) {
  const lessonCard = $("#lessonCard");
  const journalPanel = $("#journalPanel");
  const missionsPanel = $("#missionsPanel");
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((t) => t.classList.remove("is-active"));

  if (tab === "lesson") {
    lessonCard.classList.remove("is-hidden");
    journalPanel.classList.add("is-hidden");
    missionsPanel.classList.add("is-hidden");
    document.querySelector('[data-tab="lesson"]').classList.add("is-active");
  } else if (tab === "journal") {
    lessonCard.classList.add("is-hidden");
    journalPanel.classList.remove("is-hidden");
    missionsPanel.classList.add("is-hidden");
    document.querySelector('[data-tab="journal"]').classList.add("is-active");
  } else if (tab === "missions") {
    lessonCard.classList.add("is-hidden");
    journalPanel.classList.add("is-hidden");
    missionsPanel.classList.remove("is-hidden");
    document.querySelector('[data-tab="missions"]').classList.add("is-active");
  }
}

function updateMetaForSubject(subject) {
  const subjectChip = $("#subjectChip");
  const unitChip = $("#unitChip");
  const lessonTitle = $("#lessonTitle");
  const lessonSubtitle = $("#lessonSubtitle");
  const eraLabel = $("#eraLabel");
  const eraPillLabel = $("#eraPillLabel");
  const journalText = $("#journalText");
  const missionsText = $("#missionsText");
  
  // Safe setter helper
  const safeSet = (element, value) => {
    if (element) element.textContent = value;
  };
  
  // Check if elements exist
  if (!subjectChip || !unitChip || !lessonTitle || !lessonSubtitle) {
    console.error("❌ Missing required DOM elements in updateMetaForSubject");
    return;
  }

  let journalContent = "";
  let missionsContent = "";
  
  if (subject === "economics") {
    subjectChip.textContent = "Economics · Markets";
    unitChip.textContent = "Unit: Planned Economies";
    lessonTitle.textContent = "Planned Economies";
    lessonSubtitle.textContent = "When the state takes the steering wheel of the market.";
    // Lock all options
    const allOptions = document.querySelectorAll(".quiz-option");
    allOptions.forEach((btn) => {
      btn.disabled = true;
      btn.classList.remove("correct", "incorrect");
      const indicator = btn.querySelector(".option-indicator");
      if (indicator) indicator.textContent = "○";
    });

    const hintText = $("#hintText");
    const pendingXpEl = $("#pendingXp");
  
    if (!hintText || !pendingXpEl) return;

    if (option.correct) {
      button.classList.add("correct");
      const indicator = button.querySelector(".option-indicator");
      if (indicator) indicator.textContent = "✓";

      pendingXp = 8;
      combo++;
      totalCorrect++;
    
      hintText.innerHTML = `<strong style="color: #35c27e;">✓ Correct!</strong><br/><em style="color: var(--text-muted);">${lesson.explanation}</em>`;

      // Always show Blu Bot celebration immediately
      showCelebration("correct", pendingXp);
    } else {
      button.classList.add("incorrect");
      const indicator = button.querySelector(".option-indicator");
      if (indicator) indicator.textContent = "✗";

      pendingXp = 2;
      combo = 0;
    
      hintText.innerHTML = `<strong style="color: #ff7b7b;">✗ Incorrect</strong><br/><em style="color: var(--text-muted);">${lesson.explanation}</em>`;
    }

    xp += pendingXp;
    updateGameUI();
  
    pendingXpEl.style.transform = 'scale(1.3)';
    pendingXpEl.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
    setTimeout(() => {
      pendingXpEl.textContent = `+${pendingXp}`;
      pendingXpEl.style.transform = 'scale(1)';
    }, 50);
    era = "Modern";
    journalContent =
      "Science Lab · Mind-Body. Stamps for placebo mechanisms, pain studies, and notes on how belief shapes reality.";
    missionsContent =
      "Soon: design a drug trial and see how placebo effects complicate the search for real medical effects.";
  } else if (subject === "investing") {
    subjectChip.textContent = "Investing · Real Humans";
    unitChip.textContent = "Unit: Stock Markets & Strategy";
    lessonTitle.textContent = "Investing for Real Humans";
    lessonSubtitle.textContent = "Build wealth without the jargon.";
    era = "Modern";
    journalContent =
      "Investing District · Markets. Stamps for ETFs, risk profiles, and portfolio archetypes. Build your strategy.";
    missionsContent =
      "Soon: build your portfolio, backtest strategies, and simulate market crashes to see how you'd react.";
  } else if (subject === "crypto") {
    subjectChip.textContent = "Crypto · Digital Wild West";
    unitChip.textContent = "Unit: Blockchain & Bitcoin";
    lessonTitle.textContent = "Crypto: Digital Wild West";
    lessonSubtitle.textContent = "Decentralized chaos and digital gold.";
    era = "Future";
    journalContent =
      "Crypto Wild West. Stamps for Bitcoin, Ethereum, security rules, and notes on how to not get rekt.";
    missionsContent =
      "Soon: sim trading with fake money, spot ponzi schemes, and build your crypto strategy (bull vs bear markets).";
  } else if (subject === "blackholes") {
    subjectChip.textContent = "Astrophysics · Violence";
    unitChip.textContent = "Unit: Black Holes";
    lessonTitle.textContent = "Black Holes & Cosmic Violence";
    lessonSubtitle.textContent = "Where gravity wins and physics breaks.";
    era = "Cosmic";
    journalContent =
      "Black Hole Zone. Stamps for event horizons, spaghettification, Hawking radiation, and time dilation weirdness.";
    missionsContent =
      "Soon: simulate falling into black holes, calculate escape velocities, and visualize spacetime warping.";
  } else if (subject === "glaciers") {
    subjectChip.textContent = "Climate · Ice Ages";
    unitChip.textContent = "Unit: Glaciers & Time";
    lessonTitle.textContent = "Glaciers & Ice Ages";
    lessonSubtitle.textContent = "Frozen rivers that reshape continents.";
    era = "Earth";
    journalContent =
      "Glacier Lab. Stamps for ice cores, climate timelines, sea level rise, and notes on planetary machinery.";
    missionsContent =
      "Soon: drill ice cores, analyze ancient atmospheres, and predict sea level changes based on melt rates.";
  } else if (subject === "nuclear") {
    subjectChip.textContent = "Physics · Atomic";
    unitChip.textContent = "Unit: Nuclear Everything";
    lessonTitle.textContent = "Nuclear Everything";
    lessonSubtitle.textContent = "Fusion, fission, and catastrophic failures.";
    era = "Modern";
    journalContent =
      "Nuclear Core. Stamps for fusion vs fission, Chernobyl, waste timelines, and reactor mechanics.";
    missionsContent =
      "Soon: manage a nuclear reactor, prevent meltdowns, and design waste storage for 10,000 years.";
  } else if (subject === "money") {
    subjectChip.textContent = "Economics · Macro";
    unitChip.textContent = "Unit: How Money Works";
    lessonTitle.textContent = "How Money Works";
    lessonSubtitle.textContent = "Inflation, interest rates, and housing bubbles.";
    era = "Modern";
    journalContent =
      "Economics Hub. Stamps for inflation cycles, central bank decisions, housing markets, and interest rate mechanics.";
    missionsContent =
      "Soon: run a central bank, set interest rates, and manage inflation vs recession trade-offs.";
  } else if (subject === "minerals") {
    subjectChip.textContent = "Resources · Materials";
    unitChip.textContent = "Unit: Critical Minerals";
    lessonTitle.textContent = "Minerals & Metals";
    lessonSubtitle.textContent = "Lithium, copper, and the supply chains that power civilization.";
    era = "Modern";
    journalContent =
      "Resource Mines. Stamps for lithium extraction, copper demand, supply chain fragility, and geopolitical control.";
    missionsContent =
      "Soon: manage a lithium mine, negotiate with superpowers, and navigate resource geopolitics.";
  } else if (subject === "humans") {
    subjectChip.textContent = "Psychology · Strategy";
    unitChip.textContent = "Unit: Game Theory";
    lessonTitle.textContent = "Human Weirdness";
    lessonSubtitle.textContent = "Game theory, cognitive biases, and why we're predictably irrational.";
    era = "Foundations";
    journalContent =
      "Game Theory Lab. Stamps for prisoner's dilemma, Nash equilibrium, anchoring bias, and sunk cost fallacy.";
    missionsContent =
      "Soon: play strategic games, test your biases, and see how rational you really are.";
  } else if (subject === "biology") {
    subjectChip.textContent = "Biology · Future";
    unitChip.textContent = "Unit: Genetic Engineering";
    lessonTitle.textContent = "Biology That Feels Like Sci-Fi";
    lessonSubtitle.textContent = "CRISPR, tardigrades, and the quest for immortality.";
    era = "Future";
    journalContent =
      "Bio Lab. Stamps for CRISPR mechanics, tardigrade survival, senescence, and gene editing ethics.";
    missionsContent =
      "Soon: design genetic modifications, balance ethics vs progress, and explore biological immortality.";
  } else if (subject === "apocalypse") {
    subjectChip.textContent = "Existential · Risks";
    unitChip.textContent = "Unit: Catastrophic Scenarios";
    lessonTitle.textContent = "If the World Ends";
    lessonSubtitle.textContent = "Supervolcanoes, pandemics, nuclear winter, and other fun scenarios.";
    era = "Crisis";
    journalContent =
      "Apocalypse Zone. Stamps for supervolcano mechanics, pandemic math, nuclear winter models, and survival strategies.";
    missionsContent =
      "Soon: simulate pandemic responses, calculate nuclear winter outcomes, and manage existential crises.";
  } else {
    // Placeholder for other subjects
    subjectChip.textContent = "Prototype · Subject";
    unitChip.textContent = "Unit: Coming soon";
    lessonTitle.textContent = "Prototype subject";
    lessonSubtitle.textContent =
      "More districts coming online soon.";
    era = "Foundations";
    journalContent =
      "Prototype subject. This journal page will hold diagrams and notes once this district is wired.";
    missionsContent =
      "Prototype subject. Soon: a small simulation mission for this area.";
  }

  // Safely set all text content at the end
  safeSet(eraLabel, era);
  safeSet(eraPillLabel, `${era} Era`);
  safeSet(journalText, journalContent);
  safeSet(missionsText, missionsContent);
}

function handleSubjectClick(node) {
  console.log("🎓 handleSubjectClick called for:", node.dataset.subject);
  const subject = node.dataset.subject;
  
  console.log("📚 Available lessons:", Object.keys(subjectLessons));
  console.log("🔍 Looking for subject:", subject);
  console.log("✅ Has lessons?", !!subjectLessons[subject]);
  if (subjectLessons[subject]) {
    console.log("📖 Number of lessons:", subjectLessons[subject].length);
  }

  document
    .querySelectorAll(".world-node")
    .forEach((n) => n.classList.remove("is-active"));
  node.classList.add("is-active");
  
  // Add a subtle pulse effect to the clicked node
  node.style.animation = 'none';
  setTimeout(() => {
    node.style.animation = 'subtle-float 0.6s ease-out';
  }, 10);

  // ALWAYS reset to first lesson when switching subjects
  console.log("🔄 Switching from", activeSubject, "to", subject);
  console.log("🔄 OLD currentIndex:", currentIndex);
  
  // Clear the content immediately to prevent old content from showing
  const contentEl = $("#lessonContent");
  const quizBlock = $("#quizBlock");
  if (contentEl) contentEl.innerHTML = "";
  if (quizBlock) quizBlock.innerHTML = "";
  
  // Force reset to 0 - this MUST happen before anything else
  currentIndex = 0;
  activeSubject = subject;
  
  console.log("🔄 NEW currentIndex:", currentIndex);
  console.log("🔄 NEW activeSubject:", activeSubject);
  
  // Make sure we're on the Lesson tab
  switchTab("lesson");
  
  // Check if subject has lesson content
  const liveSubjects = ["economics", "space", "psych", "maths", "history", "science", "investing", "crypto", "glaciers", "nuclear", "minerals", "humans", "biology", "apocalypse", "money", "blackholes"];
  if (liveSubjects.includes(subject)) {
    console.log("✅ Subject is live! Switching to:", subject);
    
    try {
      updateMetaForSubject(subject);
    } catch (error) {
      console.error("❌ Error in updateMetaForSubject:", error);
    }
    
    console.log("📝 About to render lesson at index:", currentIndex);
    console.log("📚 Lessons for subject:", subjectLessons[subject]?.length);
    console.log("🎯 First lesson:", subjectLessons[subject]?.[0]);
    
    // Render immediately, no need for requestAnimationFrame
    renderLesson();
    console.log("✅ Lesson rendered!");
  } else {
    console.warn("⚠️ Subject not in live list:", subject);
    activeSubject = "economics"; // keep a safe base for data
    updateMetaForSubject(subject);
    const contentEl = $("#lessonContent");
    contentEl.innerHTML =
      "<p style='font-weight: 600; opacity: 0.9;'>Prototype mode: this subject will get its own lesson flow. For now, Economics City and Cosmic History are the ones that are alive.</p>";
    $("#quizBlock").innerHTML = "";
    const lessons = getCurrentLessons();
    const progressLabel = $("#lessonProgressLabel");
    const progressFill = $("#lessonProgressFill");
    progressLabel.textContent = `0 / ${lessons.length}`;
    progressFill.style.width = "0%";
    
    // Fade in the message
    contentEl.style.opacity = '0';
    setTimeout(() => {
      contentEl.style.transition = 'opacity 0.4s ease-out';
      contentEl.style.opacity = '1';
    }, 50);
  }
}

// Wait for DOM to be fully ready
if (document.readyState === 'loading') {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

// === CATEGORY NAVIGATION ===
let currentCategory = null;

function showCategories() {
  console.log("📁 Showing categories");
  currentCategory = null;
  
  const categoryGrid = $("#categoryGrid");
  const subjectGrid = $("#subjectGrid");
  const breadcrumbSeparator = $("#breadcrumbSeparator");
  const breadcrumbCurrent = $("#breadcrumbCurrent");
  
  // Show category grid, hide subject grid
  categoryGrid.classList.remove("is-hidden");
  subjectGrid.classList.add("is-hidden");
  
  // Update breadcrumb
  breadcrumbSeparator.style.display = "none";
  breadcrumbCurrent.textContent = "";
  
  // Clear and populate categories
  categoryGrid.innerHTML = "";
  Object.values(categories).forEach(cat => {
    const node = document.createElement("button");
    node.className = "world-node category-folder";
    node.dataset.category = cat.id;
    node.innerHTML = `
      <div class="node-icon">${cat.icon}</div>
      <div class="node-content">
        <span class="node-title">${cat.title}</span>
        <span class="node-subtitle">${cat.subtitle}</span>
      </div>
      <div class="folder-badge">${cat.subjects.length} topics</div>
    `;
    node.onclick = () => showCategorySubjects(cat.id);
    categoryGrid.appendChild(node);
  });
}

function showCategorySubjects(categoryId) {
  console.log("📂 Opening category:", categoryId);
  currentCategory = categoryId;
  
  const category = categories[categoryId];
  const categoryGrid = $("#categoryGrid");
  const subjectGrid = $("#subjectGrid");
  const breadcrumbSeparator = $("#breadcrumbSeparator");
  const breadcrumbCurrent = $("#breadcrumbCurrent");
  
  // Show subject grid, hide category grid
  categoryGrid.classList.add("is-hidden");
  subjectGrid.classList.remove("is-hidden");
  
  // Update breadcrumb
  breadcrumbSeparator.style.display = "inline";
  breadcrumbCurrent.textContent = category.title;
  
  // Clear and populate subjects
  subjectGrid.innerHTML = "";
  category.subjects.forEach(subjectId => {
    const meta = subjectMeta[subjectId];
    if (!meta) return;
    
    const node = document.createElement("button");
    node.className = `world-node world-node--${subjectId}`;
    node.dataset.subject = subjectId;
    node.innerHTML = `
      <div class="node-icon">${meta.icon}</div>
      <div class="node-content">
        <span class="node-title">${meta.title}</span>
        <span class="node-subtitle">${meta.subtitle}</span>
      </div>
      <div class="node-progress">
        <div class="node-progress-bar" style="width: ${Math.floor(Math.random() * 50)}%;"></div>
      </div>
    `;
    // Attach both event listeners as in initApp
    node.addEventListener("click", (e) => {
      console.log("✅ Subject card CLICKED (addEventListener):", node.dataset.subject);
      e.preventDefault();
      e.stopPropagation();
      handleSubjectClick(node);
    }, false);
    node.onclick = (e) => {
      console.log("🔘 Subject onclick fired:", node.dataset.subject);
      handleSubjectClick(node);
    };
    subjectGrid.appendChild(node);
  });
}

// Make functions globally accessible
window.showCategories = showCategories;
window.showCategorySubjects = showCategorySubjects;

function initApp() {
  // Initialize game UI
  updateGameUI();

  // Show all subjects for all categories on startup
  showAllSubjects();

  // Ensure subject grid is visible on overlay close (Blu Bot/celebration)
  document.body.addEventListener("click", function (e) {
    const overlay = document.getElementById("celebrationOverlay");
    if (!overlay && document.getElementById("subjectGrid")) {
      document.getElementById("subjectGrid").classList.remove("is-hidden");
    }
  });

  // Optionally, clear the lesson panel until a subject is selected
  document.getElementById("lessonTitle").textContent = "";
  document.getElementById("lessonSubtitle").textContent = "";
  document.getElementById("lessonProgressLabel").textContent = "";
  document.getElementById("lessonProgressFill").style.width = "0%";
  document.getElementById("lessonContent").innerHTML = "";
  document.getElementById("quizBlock").innerHTML = "";
  document.getElementById("subjectChip").textContent = "";
  document.getElementById("unitChip").textContent = "";
// Show all subjects from all categories in the subject grid
function showAllSubjects() {
  const categoryGrid = $("#categoryGrid");
  const subjectGrid = $("#subjectGrid");
  const breadcrumbSeparator = $("#breadcrumbSeparator");
  const breadcrumbCurrent = $("#breadcrumbCurrent");

  // Hide category grid, show subject grid
  categoryGrid.classList.add("is-hidden");
  subjectGrid.classList.remove("is-hidden");

  // Update breadcrumb
  breadcrumbSeparator.style.display = "none";
  breadcrumbCurrent.textContent = "All Lessons";

  // Clear and populate all subjects
  subjectGrid.innerHTML = "";
  Object.values(categories).forEach(category => {
    category.subjects.forEach(subjectId => {
      const meta = subjectMeta[subjectId];
      if (!meta) return;
      const node = document.createElement("button");
      node.className = `world-node world-node--${subjectId}`;
      node.dataset.subject = subjectId;
      node.innerHTML = `
        <div class="node-icon">${meta.icon}</div>
        <div class="node-content">
          <span class="node-title">${meta.title}</span>
          <span class="node-subtitle">${meta.subtitle}</span>
        </div>
        <div class="node-progress">
          <div class="node-progress-bar" style="width: ${Math.floor(Math.random() * 50)}%;"></div>
        </div>
      `;
      // Attach both event listeners as in initApp
      node.addEventListener("click", (e) => {
        console.log("✅ Subject card CLICKED (addEventListener):", node.dataset.subject);
        e.preventDefault();
        e.stopPropagation();
        handleSubjectClick(node);
      }, false);
      node.onclick = (e) => {
        console.log("🔘 Subject onclick fired:", node.dataset.subject);
        handleSubjectClick(node);
      };
      subjectGrid.appendChild(node);
    });
  });
}

  // Next button
  const nextBtn = document.getElementById("nextBtn");
  if (nextBtn) {
    nextBtn.addEventListener("click", function(e) {
      e.preventDefault();
      goNext();
    });
  }

  // Tabs
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      switchTab(tab.dataset.tab);
    });
  });

  // Subject nodes - with debugging
  const subjectNodes = document.querySelectorAll(".world-node");
  console.log("🎓 Found subject nodes:", subjectNodes.length);
  
  subjectNodes.forEach((node, index) => {
    console.log(`Attaching listener ${index + 1}:`, node.dataset.subject);
    
    // Test if node is visible and clickable
    const styles = window.getComputedStyle(node);
    console.log(`  → Display: ${styles.display}, Pointer-events: ${styles.pointerEvents}, Z-index: ${styles.zIndex}`);
    
    // Method 1: addEventListener
    node.addEventListener("click", (e) => {
      console.log("✅ Subject card CLICKED (addEventListener):", node.dataset.subject);
      e.preventDefault();
      e.stopPropagation();
      handleSubjectClick(node);
    }, false);
    
    // Method 2: Direct onclick backup
    node.onclick = (e) => {
      console.log("🔘 Subject onclick fired:", node.dataset.subject);
      handleSubjectClick(node);
    };
  });
  
  console.log("✅ All subject card listeners attached!");
  
  // Level up continue button
  const levelUpBtn = document.querySelector(".level-up-continue");
  if (levelUpBtn) {
    levelUpBtn.addEventListener("click", () => {
      closeLevelUp();
    });
  }
  
  // Close celebration overlay when clicked
  const celebrationOverlay = $("#celebrationOverlay");
  if (celebrationOverlay) {
    celebrationOverlay.addEventListener("click", () => {
      celebrationOverlay.classList.remove("active");
    });
  }
  
  // Resize confetti canvas on window resize
  window.addEventListener("resize", () => {
    const canvas = $("#confettiCanvas");
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  });
  
}
