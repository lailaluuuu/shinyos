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
        "It wasn’t just about rockets — it was about proving technological power, national prestige, and which system looked stronger to the rest of the world."
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
    hintText.textContent =
      activeSubject === "economics"
        ? "Not quite. In a planned economy, the state usually sets the key prices."
        : "Not quite. Read the question again and think about the key names.";
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
  } else {
    // Placeholder for other subjects
    subjectChip.textContent = "Prototype · Subject";
    unitChip.textContent = "Unit: Coming soon";
    lessonTitle.textContent = "Prototype subject";
    lessonSubtitle.textContent =
      "Economics and Cosmic History are alive. This district will wake up next.";
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

  // Only economics + space have real lessons right now
  if (subject === "economics" || subject === "space") {
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
