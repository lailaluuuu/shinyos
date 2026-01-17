// Subject → lessons mapping

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
        "The problem? These shortcuts evolved for a different world. They're fast, but not always accurate. And they run quietly in the background, shaping your choices without you noticing."
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
        "Example: You think a politician is corrupt. Every news story gets filtered through that lens — you notice evidence that supports it and ignore evidence that doesn't. Both sides of every argument do this."
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
        "Plane crashes feel scarier than car accidents because they're dramatic and reported everywhere. But statistically? You're far safer in a plane. Your brain doesn't run the numbers — it remembers the vivid story."
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
        "Rome, the Ottomans, the British Empire: the pattern repeats. They grow powerful, expand beyond what they can manage, lose the systems that made them strong, and crumble when challenged."
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
    }
  ],

  // Investing: Why prices feel unfair
  investing: [
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
  ]
};

let activeSubject = "economics";
let currentIndex = 0;
let xp = 120;
let pendingXp = 0;
let era = "Foundations";

function $(selector) {
  return document.querySelector(selector);
}

function getCurrentLessons() {
  return subjectLessons[activeSubject] || [];
}

function renderLesson() {
  const lessons = getCurrentLessons();
  const lesson = lessons[currentIndex] || lessons[0];
  if (!lesson) return;

  const contentEl = $("#lessonContent");
  const quizBlock = $("#quizBlock");
  const progressLabel = $("#lessonProgressLabel");
  const progressFill = $("#lessonProgressFill");
  const hintText = $("#hintText");
  const pendingXpEl = $("#pendingXp");

  // Update progress with animation
  progressLabel.textContent = `${currentIndex + 1} / ${lessons.length}`;
  const pct = ((currentIndex + 1) / lessons.length) * 100;
  progressFill.style.width = `${pct}%`;

  // Reset hint + pending XP display
  pendingXp = 0;
  pendingXpEl.textContent = "0";
  hintText.textContent = "Tap an answer to check your understanding.";

  // Add fade-in effect
  contentEl.style.opacity = '0';
  quizBlock.style.opacity = '0';
  
  setTimeout(() => {
    contentEl.style.transition = 'opacity 0.4s ease-out';
    quizBlock.style.transition = 'opacity 0.4s ease-out';
    contentEl.style.opacity = '1';
    quizBlock.style.opacity = '1';
  }, 50);

  // Render content vs quiz
  if (lesson.type === "content") {
    quizBlock.innerHTML = "";
    contentEl.innerHTML = "";

    if (lesson.title) {
      const titleP = document.createElement("p");
      titleP.style.fontWeight = "700";
      titleP.style.fontSize = "15px";
      titleP.style.marginBottom = "10px";
      titleP.style.color = "var(--text)";
      titleP.textContent = lesson.title;
      contentEl.appendChild(titleP);
    }

    lesson.paragraphs.forEach((text, index) => {
      const p = document.createElement("p");
      p.textContent = text;
      p.style.opacity = '0';
      p.style.transform = 'translateY(10px)';
      contentEl.appendChild(p);
      
      // Staggered entrance animation
      setTimeout(() => {
        p.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
        p.style.opacity = '1';
        p.style.transform = 'translateY(0)';
      }, 100 + index * 100);
    });
  } else if (lesson.type === "quiz") {
    // Simple intro content
    contentEl.innerHTML = "";
    const intro = document.createElement("p");
    intro.textContent = "Quick check-in before we move on:";
    intro.style.fontWeight = "600";
    contentEl.appendChild(intro);

    // Render quiz
    quizBlock.innerHTML = "";

    const label = document.createElement("div");
    label.className = "quiz-label";
    label.textContent = "Quiz";
    quizBlock.appendChild(label);

    const q = document.createElement("div");
    q.className = "quiz-question";
    q.textContent = lesson.question;
    quizBlock.appendChild(q);

    const optionsWrapper = document.createElement("div");
    optionsWrapper.className = "quiz-options";

    lesson.options.forEach((opt, index) => {
      const btn = document.createElement("button");
      btn.className = "quiz-option";
      btn.dataset.optionId = opt.id;
      
      // Staggered entrance for quiz options
      btn.style.opacity = '0';
      btn.style.transform = 'translateX(-10px)';

      const textSpan = document.createElement("span");
      textSpan.textContent = opt.text;

      const indicator = document.createElement("span");
      indicator.className = "option-indicator";
      indicator.textContent = "○";

      btn.appendChild(textSpan);
      btn.appendChild(indicator);

      btn.addEventListener("click", () => handleQuizClick(btn, opt, lesson));

      optionsWrapper.appendChild(btn);
      
      // Animate in
      setTimeout(() => {
        btn.style.transition = 'opacity 0.4s ease-out, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
        btn.style.opacity = '1';
        btn.style.transform = 'translateX(0)';
      }, 200 + index * 80);
    });

    quizBlock.appendChild(optionsWrapper);
  }
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
  const xpValue = $("#xpValue");

  if (option.correct) {
    button.classList.add("correct");
    const indicator = button.querySelector(".option-indicator");
    if (indicator) indicator.textContent = "✓";

    pendingXp = 8;
    hintText.textContent = lesson.explanation;
    
    // Add celebration effect
    button.style.animation = 'none';
    setTimeout(() => {
      button.style.animation = 'subtle-float 0.5s ease-out';
    }, 10);
  } else {
    button.classList.add("incorrect");
    const indicator = button.querySelector(".option-indicator");
    if (indicator) indicator.textContent = "✗";

    pendingXp = 2;
    hintText.textContent = lesson.explanation || "Not quite. Review the content and try to think through the key concepts.";
  }

  // Animate XP gain
  const oldXp = xp;
  xp += pendingXp;
  animateCounter(xpValue, oldXp, xp, 600);
  
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
  const lessons = getCurrentLessons();
  if (!lessons.length) return;

  currentIndex++;
  if (currentIndex >= lessons.length) {
    currentIndex = lessons.length - 1;
    // later: show “unit complete” state
  }
  renderLesson();
}

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

  if (subject === "economics") {
    subjectChip.textContent = "Economics · Markets";
    unitChip.textContent = "Unit: Planned Economies";
    lessonTitle.textContent = "Planned Economies";
    lessonSubtitle.textContent = "When the state takes the steering wheel of the market.";
    era = "Foundations";
    journalText.textContent =
      "Economics City · Markets. Stamps for planned vs market systems, tiny city diagrams, and your one-line notes on who sets prices.";
    missionsText.textContent =
      "Soon: run a tiny model of a planned economy vs a market economy and watch queues, surpluses, and growth change your city.";
  } else if (subject === "space") {
    subjectChip.textContent = "Cosmic History · Space Race";
    unitChip.textContent = "Unit: The Space Race";
    lessonTitle.textContent = "The Space Race";
    lessonSubtitle.textContent = "When rockets, politics, and prestige left the atmosphere.";
    era = "Modern";
    journalText.textContent =
      "Cosmic History · Space Race. Stamps for Sputnik, Gagarin, Apollo 11, and your notes on why space mattered in the Cold War.";
    missionsText.textContent =
      "Soon: choose which missions to fund as a Cold War leader and see how your space strategy shifts global prestige.";
  } else if (subject === "psych") {
    subjectChip.textContent = "Psychology · Mind";
    unitChip.textContent = "Unit: Cognitive Biases";
    lessonTitle.textContent = "Cognitive Biases";
    lessonSubtitle.textContent = "Mental shortcuts that quietly run your life.";
    era = "Foundations";
    journalText.textContent =
      "Psychology Quarter · Mind. Stamps for confirmation bias, availability heuristic, and notes on how your brain takes shortcuts.";
    missionsText.textContent =
      "Soon: test your own biases in simulated scenarios and see how they shape your decisions in real time.";
  } else if (subject === "maths") {
    subjectChip.textContent = "Technology · Systems";
    unitChip.textContent = "Unit: Path Dependence";
    lessonTitle.textContent = "Why QWERTY Exists";
    lessonSubtitle.textContent = "When 'good enough first' beats 'better later.'";
    era = "Modern";
    journalText.textContent =
      "Technology Grid · Systems. Stamps for QWERTY, lock-in effects, and your notes on why inferior standards persist.";
    missionsText.textContent =
      "Soon: run a market simulation where you choose between competing standards and watch path dependence unfold.";
  } else if (subject === "history") {
    subjectChip.textContent = "History · Empires";
    unitChip.textContent = "Unit: Why Empires Collapse";
    lessonTitle.textContent = "Empire Collapse";
    lessonSubtitle.textContent = "Patterns that repeat from Rome to modern states.";
    era = "Ancient";
    journalText.textContent =
      "History Port · Empires. Stamps for Rome, Ottoman decline, and notes on overstretch and internal decay.";
    missionsText.textContent =
      "Soon: manage an empire's resources and borders, then watch the consequences of your expansion choices.";
  } else if (subject === "science") {
    subjectChip.textContent = "Science · Mind-Body";
    unitChip.textContent = "Unit: The Placebo Effect";
    lessonTitle.textContent = "The Placebo Effect";
    lessonSubtitle.textContent = "When expectation becomes biology.";
    era = "Modern";
    journalText.textContent =
      "Science Lab · Mind-Body. Stamps for placebo mechanisms, pain studies, and notes on how belief shapes reality.";
    missionsText.textContent =
      "Soon: design a drug trial and see how placebo effects complicate the search for real medical effects.";
  } else if (subject === "investing") {
    subjectChip.textContent = "Investing · Pricing";
    unitChip.textContent = "Unit: Why Prices Feel Unfair";
    lessonTitle.textContent = "Price Perception";
    lessonSubtitle.textContent = "Information asymmetry and the fairness instinct.";
    era = "Modern";
    journalText.textContent =
      "Investing District · Pricing. Stamps for anchoring, information gaps, and notes on why fair pricing feels personal.";
    missionsText.textContent =
      "Soon: set prices in a market simulation and watch how perception shapes customer behavior.";
  } else {
    // Placeholder for other subjects
    subjectChip.textContent = "Prototype · Subject";
    unitChip.textContent = "Unit: Coming soon";
    lessonTitle.textContent = "Prototype subject";
    lessonSubtitle.textContent =
      "More districts coming online soon.";
    era = "Foundations";
    journalText.textContent =
      "Prototype subject. This journal page will hold diagrams and notes once this district is wired.";
    missionsText.textContent =
      "Prototype subject. Soon: a small simulation mission for this area.";
  }

  eraLabel.textContent = era;
  eraPillLabel.textContent = `${era} Era`;
}

function handleSubjectClick(node) {
  const subject = node.dataset.subject;

  document
    .querySelectorAll(".world-node")
    .forEach((n) => n.classList.remove("is-active"));
  node.classList.add("is-active");
  
  // Add a subtle pulse effect to the clicked node
  node.style.animation = 'none';
  setTimeout(() => {
    node.style.animation = 'subtle-float 0.6s ease-out';
  }, 10);

  // Check if subject has lesson content
  const liveSubjects = ["economics", "space", "psych", "maths", "history", "science", "investing"];
  if (liveSubjects.includes(subject)) {
    activeSubject = subject;
    currentIndex = 0;
    updateMetaForSubject(subject);
    renderLesson();
  } else {
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

document.addEventListener("DOMContentLoaded", () => {
  // Start with economics wired
  updateMetaForSubject("economics");
  renderLesson();

  // Next button
  $("#nextBtn").addEventListener("click", goNext);

  // Tabs
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      switchTab(tab.dataset.tab);
    });
  });

  // Subject nodes
  document.querySelectorAll(".world-node").forEach((node) => {
    node.addEventListener("click", () => handleSubjectClick(node));
  });
});
