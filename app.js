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
        "Weakness: because it doesn't rely on real-time customer choices, it often misjudges what people actually want, leading to shortages of some goods and surpluses of others."
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
        "Planned systems have a history of queues and shortages, because central planners can't perfectly predict changing preferences."
    }
  ],

  finance: [
    {
      id: 1,
      type: "content",
      title: "What is a market?",
      paragraphs: [
        "A market is any place where buyers and sellers meet to exchange goods, services, or assets.",
        "Markets can be physical (like a farmers' market) or virtual (like the stock market)."
      ]
    },
    {
      id: 2,
      type: "quiz",
      question: "Which of these is a market?",
      options: [
        { id: "a", text: "A stock exchange", correct: true },
        { id: "b", text: "A football stadium", correct: false },
        { id: "c", text: "A library", correct: false }
      ],
      explanation: "A market is where buying and selling happens. Stock exchanges are classic examples."
    },
    {
      id: 3,
      type: "content",
      title: "How do markets work?",
      paragraphs: [
        "Markets work by matching buyers who want to purchase with sellers who want to sell.",
        "Prices are set by supply and demand—when more people want to buy, prices go up; when more want to sell, prices go down."
      ]
    },
    {
      id: 4,
      type: "quiz",
      question: "What happens if demand rises but supply stays the same?",
      options: [
        { id: "a", text: "Prices rise", correct: true },
        { id: "b", text: "Prices fall", correct: false },
        { id: "c", text: "Nothing changes", correct: false }
      ],
      explanation: "If demand rises and supply doesn't, prices usually go up."
    }
  ],

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
  ]
};

// Categories structure
const categories = [
  {
    id: "foundations",
    name: "Foundations",
    icon: "🏛️",
    subtitle: "Core concepts and fundamentals",
    subjects: ["economics", "finance"]
  },
  {
    id: "history",
    name: "History",
    icon: "📜",
    subtitle: "Explore the past",
    subjects: ["space"]
  }
];

// Subject metadata
const subjectMetadata = {
  economics: {
    name: "Economics",
    icon: "💼",
    subtitle: "Markets and planned economies",
    category: "foundations"
  },
  finance: {
    name: "Finance",
    icon: "💰",
    subtitle: "Market basics and investing",
    category: "foundations"
  },
  space: {
    name: "Space Race",
    icon: "🚀",
    subtitle: "The Cold War in space",
    category: "history"
  }
};

let activeSubject = "economics";
let currentIndex = 0;
let xp = 120;
let pendingXp = 0;
let era = "Foundations";
let activeCategory = null;

function $(selector) {
  return document.querySelector(selector);
}

// Yuno-style animations helper
function animateElement(el, animationClass, duration = 600) {
  return new Promise((resolve) => {
    el.style.animation = 'none';
    el.offsetHeight; // trigger reflow
    el.classList.add(animationClass);
    setTimeout(() => {
      el.classList.remove(animationClass);
      resolve();
    }, duration);
  });
}

// Confetti burst for correct answers
function triggerConfetti(x, y) {
  const colors = ['#f472b6', '#a78bfa', '#60a5fa', '#34d399', '#fbbf24'];
  for (let i = 0; i < 15; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti-particle';
    confetti.style.left = x + 'px';
    confetti.style.top = y + 'px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    const angle = (Math.random() * Math.PI * 2);
    const velocity = 100 + Math.random() * 100;
    const xVel = Math.cos(angle) * velocity;
    const yVel = Math.sin(angle) * velocity - 150;
    
    confetti.style.setProperty('--x-vel', xVel + 'px');
    confetti.style.setProperty('--y-vel', yVel + 'px');
    confetti.style.setProperty('--rotation', Math.random() * 720 - 360 + 'deg');
    
    document.body.appendChild(confetti);
    
    setTimeout(() => confetti.remove(), 1000);
  }
}

// XP counter animation
function animateXpGain(amount) {
  const xpValue = $("#xpValue");
  const pendingXpEl = $("#pendingXp");
  
  pendingXpEl.classList.add('xp-pulse');
  xpValue.classList.add('xp-gain');
  
  setTimeout(() => {
    pendingXpEl.classList.remove('xp-pulse');
    xpValue.classList.remove('xp-gain');
  }, 600);
}

function getCurrentLessons() {
  return subjectLessons[activeSubject] || [];
}

function renderLesson() {
  const lessons = getCurrentLessons();
  const lesson = lessons[currentIndex] || lessons[0];
  if (!lesson) {
    console.warn("No lesson found at index", currentIndex);
    return;
  }

  const contentEl = $("#lessonContent");
  const quizBlock = $("#quizBlock");
  const progressLabel = $("#lessonProgressLabel");
  const progressFill = $("#lessonProgressFill");
  const hintText = $("#hintText");
  const pendingXpEl = $("#pendingXp");

  if (!contentEl) {
    console.error("lessonContent element not found!");
    return;
  }

  // Update progress immediately
  progressLabel.textContent = `${currentIndex + 1} / ${lessons.length}`;
  const pct = ((currentIndex + 1) / lessons.length) * 100;
  progressFill.style.width = `${pct}%`;
  progressFill.classList.add('progress-pulse');
  setTimeout(() => progressFill.classList.remove('progress-pulse'), 400);

  // Reset hint + pending XP display
  pendingXp = 0;
  pendingXpEl.textContent = pendingXp.toString();
  hintText.textContent = "Tap an answer to check your understanding.";

  // Render content vs quiz
  if (lesson.type === "content") {
    // Clear quiz block for content lessons
    if (quizBlock) {
      quizBlock.innerHTML = "";
      quizBlock.style.display = "none";
      quizBlock.style.opacity = "0";
    }
    
    // Clear and populate content immediately
    contentEl.innerHTML = "";
    contentEl.style.display = "block";
    contentEl.style.visibility = "visible";

      if (lesson.title) {
        const titleP = document.createElement("p");
        titleP.style.fontWeight = "600";
        titleP.className = "slide-in-up";
        titleP.textContent = lesson.title;
        contentEl.appendChild(titleP);
      }

      if (lesson.paragraphs && lesson.paragraphs.length > 0) {
        lesson.paragraphs.forEach((text, idx) => {
          const p = document.createElement("p");
          p.className = "slide-in-up";
          p.style.animationDelay = `${idx * 0.1}s`;
          p.textContent = text;
          contentEl.appendChild(p);
        });
      } else {
        // Fallback if no paragraphs
        const fallback = document.createElement("p");
        fallback.className = "slide-in-up";
        fallback.textContent = "Lesson content loading...";
        contentEl.appendChild(fallback);
      }
      
      // Make content visible immediately
      contentEl.style.opacity = "1";
      setTimeout(() => {
        contentEl.style.opacity = "1";
      }, 10);
    } else if (lesson.type === "quiz") {
      // Fade out for quiz transition
      contentEl.style.opacity = '0';
      if (quizBlock) quizBlock.style.opacity = '0';
      
      setTimeout(() => {
        // Show both content area (for intro) and quiz block
        contentEl.innerHTML = "";
        contentEl.style.display = "block";
        
        const intro = document.createElement("p");
        intro.className = "slide-in-up";
        intro.textContent = "Quick check-in before we move on:";
        contentEl.appendChild(intro);

        // Render quiz
        if (quizBlock) {
          quizBlock.innerHTML = "";
          quizBlock.style.display = "block";

          const label = document.createElement("div");
          label.className = "quiz-label slide-in-up";
          label.textContent = "Quiz";
          quizBlock.appendChild(label);

          const q = document.createElement("div");
          q.className = "quiz-question slide-in-up";
          q.style.animationDelay = '0.1s';
          q.textContent = lesson.question;
          quizBlock.appendChild(q);

          const optionsWrapper = document.createElement("div");
          optionsWrapper.className = "quiz-options";

          if (lesson.options && lesson.options.length > 0) {
            lesson.options.forEach((opt, idx) => {
              const btn = document.createElement("button");
              btn.className = "quiz-option slide-in-up";
              btn.style.animationDelay = `${0.2 + idx * 0.1}s`;
              btn.dataset.optionId = opt.id;
              btn.disabled = false; // Reset disabled state

              const textSpan = document.createElement("span");
              textSpan.textContent = opt.text;

              const indicator = document.createElement("span");
              indicator.className = "option-indicator";
              indicator.textContent = "○";

              btn.appendChild(textSpan);
              btn.appendChild(indicator);

              btn.addEventListener("click", (e) => handleQuizClick(btn, opt, lesson, e));

              optionsWrapper.appendChild(btn);
            });
          }

          quizBlock.appendChild(optionsWrapper);
        }

        // Fade in quiz
        contentEl.style.opacity = '1';
        if (quizBlock) quizBlock.style.opacity = '1';
        
        // Debug log
        console.log("Rendered quiz lesson:", lesson.type, "Content length:", contentEl.innerHTML.length);
      }, 200);
    }
    
    // Debug log for content lessons
    if (lesson.type === "content") {
      console.log("Rendered content lesson:", lesson.type, "Content length:", contentEl.innerHTML.length, "Has title:", !!lesson.title, "Has paragraphs:", !!lesson.paragraphs);
    }
}

function handleQuizClick(button, option, lesson, event) {
  // Lock all options
  const allOptions = document.querySelectorAll(".quiz-option");
  allOptions.forEach((btn) => {
    btn.disabled = true;
  });

  const hintText = $("#hintText");
  const pendingXpEl = $("#pendingXp");
  const xpValue = $("#xpValue");

  const celebrationOverlay = document.getElementById("celebrationOverlay");
  const celebrationIcon = document.getElementById("celebrationIcon");
  const celebrationText = document.getElementById("celebrationText");
  const celebrationXpText = document.getElementById("celebrationXpText");

  if (option.correct) {
    // Success animation
    button.classList.add("correct");
    const indicator = button.querySelector(".option-indicator");
    if (indicator) {
      indicator.textContent = "✓";
      indicator.classList.add('indicator-pop');
    }

    // Trigger confetti at button position
    const rect = button.getBoundingClientRect();
    triggerConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);

    pendingXp = 8;
    hintText.textContent = lesson.explanation;
    hintText.classList.add('hint-success');
    setTimeout(() => hintText.classList.remove('hint-success'), 400);

    // Show Blu Bot celebration overlay
    if (celebrationOverlay) {
      celebrationIcon.textContent = "🎉";
      celebrationText.textContent = "Correct! Blu Bot celebrates!";
      celebrationXpText.textContent = `+${pendingXp} XP`;
      celebrationOverlay.classList.add("active");
      setTimeout(() => celebrationOverlay.classList.remove("active"), 1200);
    }
  } else {
    // Shake animation for incorrect
    button.classList.add("incorrect");
    button.classList.add('shake-horizontal');
    const indicator = button.querySelector(".option-indicator");
    if (indicator) {
      indicator.textContent = "✗";
      indicator.classList.add('indicator-pop');
    }

    // Show correct answer with glow
    allOptions.forEach((btn) => {
      const optId = btn.dataset.optionId;
      const correctOpt = lesson.options.find(o => o.id === optId && o.correct);
      if (correctOpt) {
        setTimeout(() => {
          btn.classList.add("show-correct");
          const ind = btn.querySelector(".option-indicator");
          if (ind) ind.textContent = "✓";
        }, 300);
      }
    });

    pendingXp = 2;
    hintText.textContent = lesson.explanation || "Not quite. Think about the key concepts we just covered.";

    // Show Blu Bot feedback overlay
    if (celebrationOverlay) {
      celebrationIcon.textContent = "🤖";
      celebrationText.textContent = "Blu Bot says: Try again!";
      celebrationXpText.textContent = `+${pendingXp} XP`;
      celebrationOverlay.classList.add("active");
      setTimeout(() => celebrationOverlay.classList.remove("active"), 1200);
    }
  }

  xp += pendingXp;
  xpValue.textContent = xp.toString();
  pendingXpEl.textContent = pendingXp.toString();
  
  // Animate XP gain
  animateXpGain(pendingXp);
}

function goNext() {
  const lessons = getCurrentLessons();
  if (!lessons.length) return;

  const nextBtn = $("#nextBtn");
  nextBtn.classList.add('button-press');
  setTimeout(() => nextBtn.classList.remove('button-press'), 200);

  currentIndex++;
  if (currentIndex >= lessons.length) {
    currentIndex = lessons.length - 1;
    // Show completion celebration
    const hintText = $("#hintText");
    hintText.textContent = "🎉 Unit complete! Great work!";
    hintText.classList.add('hint-success');
    return;
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
  
  // Animate active panel
  const activePanel = tab === "lesson" ? lessonCard : (tab === "journal" ? journalPanel : missionsPanel);
  activePanel.classList.add('fade-in-scale');
  setTimeout(() => activePanel.classList.remove('fade-in-scale'), 400);
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

  // Add transition animations
  [lessonTitle, lessonSubtitle].forEach(el => {
    el.classList.add('text-fade-in');
    setTimeout(() => el.classList.remove('text-fade-in'), 400);
  });

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
  } else if (subject === "finance") {
    subjectChip.textContent = "Finance · Markets";
    unitChip.textContent = "Unit: Market Basics";
    lessonTitle.textContent = "Finance & Markets";
    lessonSubtitle.textContent = "How markets connect buyers and sellers.";
    era = "Foundations";
    journalText.textContent = "Finance District · Markets. Stamps for market types, supply/demand, and your notes on price changes.";
    missionsText.textContent = "Soon: simulate a market and see how prices change with supply and demand.";
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
  
  // Pulse the era pill
  const eraPill = $("#eraLabel").parentElement;
  if (eraPill) {
    eraPill.classList.add('pill-pulse');
    setTimeout(() => eraPill.classList.remove('pill-pulse'), 500);
  }
}

function showCategories() {
  const categoryGrid = $("#categoryGrid");
  const subjectGrid = $("#subjectGrid");
  const breadcrumb = $("#breadcrumb");
  const breadcrumbSeparator = $("#breadcrumbSeparator");
  const breadcrumbCurrent = $("#breadcrumbCurrent");
  
  // Hide subject grid, show category grid
  subjectGrid.classList.add("is-hidden");
  categoryGrid.classList.remove("is-hidden");
  
  // Update breadcrumb
  breadcrumb.querySelector(".breadcrumb-item").classList.add("is-active");
  breadcrumbSeparator.style.display = "none";
  breadcrumbCurrent.textContent = "";
  
  // Clear active state from all category nodes
  document.querySelectorAll("#categoryGrid .world-node").forEach(n => {
    n.classList.remove("is-active");
  });
  
  // Clear and populate categories
  categoryGrid.innerHTML = "";
  
  categories.forEach((category, idx) => {
    const node = document.createElement("div");
    node.className = "world-node";
    node.dataset.category = category.id;
    node.style.animation = `fadeInScale 0.4s ease-out ${idx * 0.1}s both`;
    
    const icon = document.createElement("div");
    icon.className = "node-icon";
    icon.textContent = category.icon;
    
    const content = document.createElement("div");
    content.className = "node-content";
    
    const title = document.createElement("span");
    title.className = "node-title";
    title.textContent = category.name;
    
    const subtitle = document.createElement("span");
    subtitle.className = "node-subtitle";
    subtitle.textContent = category.subtitle;
    
    content.appendChild(title);
    content.appendChild(subtitle);
    node.appendChild(icon);
    node.appendChild(content);
    
    node.addEventListener("click", () => handleCategoryClick(node, category));
    
    categoryGrid.appendChild(node);
  });
  
  activeCategory = null;
}

function handleCategoryClick(node, category) {
  const categoryGrid = $("#categoryGrid");
  const subjectGrid = $("#subjectGrid");
  const breadcrumb = $("#breadcrumb");
  const breadcrumbSeparator = $("#breadcrumbSeparator");
  const breadcrumbCurrent = $("#breadcrumbCurrent");
  
  // Keep category grid visible, show subject grid below
  // categoryGrid stays visible - don't hide it
  subjectGrid.classList.remove("is-hidden");
  
  // Update breadcrumb
  breadcrumb.querySelector(".breadcrumb-item").classList.remove("is-active");
  breadcrumbSeparator.style.display = "inline";
  breadcrumbCurrent.textContent = category.name;
  
  // Mark active category visually
  document.querySelectorAll("#categoryGrid .world-node").forEach(n => {
    n.classList.remove("is-active");
  });
  node.classList.add("is-active");
  
  // Clear and populate subjects for this category
  subjectGrid.innerHTML = "";
  
  category.subjects.forEach((subjectId, idx) => {
    const subject = subjectMetadata[subjectId];
    if (!subject) return;
    
    const node = document.createElement("div");
    node.className = `world-node world-node--${subjectId}`;
    node.dataset.subject = subjectId;
    node.style.animation = `fadeInScale 0.4s ease-out ${idx * 0.1}s both`;
    
    const icon = document.createElement("div");
    icon.className = "node-icon";
    icon.textContent = subject.icon;
    
    const content = document.createElement("div");
    content.className = "node-content";
    
    const title = document.createElement("span");
    title.className = "node-title";
    title.textContent = subject.name;
    
    const subtitle = document.createElement("span");
    subtitle.className = "node-subtitle";
    subtitle.textContent = subject.subtitle;
    
    content.appendChild(title);
    content.appendChild(subtitle);
    node.appendChild(icon);
    node.appendChild(content);
    
    node.addEventListener("click", () => handleSubjectClick(node));
    
    subjectGrid.appendChild(node);
  });
  
  activeCategory = category.id;
  
  // Node click animation
  node.classList.add('node-activate');
  setTimeout(() => node.classList.remove('node-activate'), 400);
}

function handleSubjectClick(node) {
  const subject = node.dataset.subject;

  document
    .querySelectorAll(".world-node")
    .forEach((n) => n.classList.remove("is-active"));
  node.classList.add("is-active");
  
  // Node click animation
  node.classList.add('node-activate');
  setTimeout(() => node.classList.remove('node-activate'), 400);

  if (["economics", "space", "finance"].includes(subject) || subjectLessons[subject]) {
    activeSubject = subject;
    currentIndex = 0;
    updateMetaForSubject(subject);
    renderLesson();
  } else {
    activeSubject = "economics";
    updateMetaForSubject(subject);
    $("#lessonContent").innerHTML =
      "<p class='slide-in-up'>Prototype mode: this subject will get its own lesson flow. For now, Economics City and Cosmic History are the ones that are alive.</p>";
    $("#quizBlock").innerHTML = "";
    const lessons = getCurrentLessons();
    const progressLabel = $("#lessonProgressLabel");
    const progressFill = $("#lessonProgressFill");
    progressLabel.textContent = `0 / ${lessons.length}`;
    progressFill.style.width = "0%";
  }
}

// Make showCategories available globally
window.showCategories = showCategories;
window.goNextDirect = goNext;

document.addEventListener("DOMContentLoaded", () => {
  // Initialize quiz block as hidden
  const quizBlock = $("#quizBlock");
  if (quizBlock) {
    quizBlock.style.display = "none";
  }
  
  updateMetaForSubject("economics");
  renderLesson();
  
  // Show categories by default
  showCategories();

  $("#nextBtn").addEventListener("click", goNext);

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      switchTab(tab.dataset.tab);
      tab.classList.add('tab-press');
      setTimeout(() => tab.classList.remove('tab-press'), 150);
    });
  });
});