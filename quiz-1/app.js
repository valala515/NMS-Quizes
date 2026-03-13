const introSteps = [
  {
    id: "gender",
    type: "gender",
    title: "Is your nervous system under too much strain?",
    body: "See how it may be affecting your body and mind so you can move out of survival mode.",
    prompt: "Take the 3-minute quiz",
    noteHtml:
      'By clicking “Male” or “Female” you agree to the <a href="https://account.newmindstart.com/terms-of-service" target="_blank" rel="noopener noreferrer">Terms of Service</a>, <a href="https://account.newmindstart.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>, and <a href="https://account.newmindstart.com/cancellation-refund-policies" target="_blank" rel="noopener noreferrer">Cancellation and Refund Policies</a>.',
    choices: [
      { value: "man", label: "Male", hint: "A person aged Male", image: "./assets/male.png" },
      { value: "woman", label: "Female", hint: "A person aged Female", image: "./assets/female.png" }
    ]
  },
  {
    id: "age",
    type: "choice",
    title: "What age range are you in?",
    body: "Select the range that fits you best.",
    prompt: "Choose one age group.",
    note: "",
    choices: [
      { value: "18-24", label: "18-24", hint: "" },
      { value: "25-34", label: "25-34", hint: "" },
      { value: "35-44", label: "35-44", hint: "" },
      { value: "45-54", label: "45-54", hint: "" },
      { value: "55-64", label: "55-64", hint: "" },
      { value: "65+", label: "65+", hint: "" }
    ]
  },
  {
    id: "welcome",
    type: "welcome",
    title: "We’re glad you’re here.",
    body: [
      "This short check-in helps you notice your patterns and what your system may be carrying. ",
      "Take a moment to reflect and answer based on how things have felt lately."
    ],
    cta: "Continue",
    note:
      "NewMindStart does not provide medical diagnoses. If you have mental health concerns, please consult a licensed healthcare professional.",
    image: "./assets/highfive.png"
  }
];

const scaleLabels = [
  { value: 4, label: "Very true", hint: "This feels strongly familiar." },
  { value: 3, label: "Mostly true", hint: "This happens fairly often." },
  { value: 2, label: "Sometimes", hint: "This fits part of the time." },
  { value: 1, label: "Rarely true", hint: "This shows up only now and then." },
  { value: 0, label: "Not true", hint: "This does not really fit me." }
];

const questions = [
  { type: "scale", text: "I often feel physical tension, as if my body does not fully let go." },
  { type: "scale", text: "I notice moments of fast heartbeat or breathing that feels too shallow." },
  { type: "scale", text: "I often feel unsettled, keyed up, or easily stirred." },
  { type: "scale", text: "My mind tends to replay things or stay stuck on them." },
  { type: "scale", text: "I can react very strongly and very quickly when something sets me off." },
  { type: "scale", text: "Once stress hits, it takes me a long time to feel steady again." },
  { type: "scale", text: "Too much noise, screen time, or activity can wear me down quickly." },
  { type: "scale", text: "I keep going through stress until my body seems to hit a wall." },
  { type: "scale", text: "I catch myself tightening my jaw or clenching without meaning to." },
  { type: "scale", text: "Even everyday tasks can start to feel like too much." },
  { type: "scale", text: "My mind often feels overfull, as if it has no more room." },
  { type: "scale", text: "I manage a lot on my own, without feeling truly supported." },
  { type: "scale", text: "It is hard for me to stay focused for very long." },
  { type: "scale", text: "I often do not have the drive to do what would help me feel better." },
  { type: "scale", text: "I can feel emotionally dulled or emptied out." },
  { type: "scale", text: "My interest in intimacy has dropped noticeably." },
  { type: "scale", text: "Stress seems to stay in my body long after the moment has passed." },
  { type: "scale", text: "Even when I have time to rest, I struggle to truly settle." },
  { type: "scale", text: "I feel uncomfortable resting, as if I should be doing something instead." },
  { type: "scale", text: "I use my phone to distract myself from what I am feeling." },
  { type: "scale", text: "I feel calm mostly when I disconnect, zone out, or go numb." },
  { type: "scale", text: "I find myself wanting sugar or carbohydrates even when I am not really hungry." },
  { type: "scale", text: "After eating, I often feel puffy, heavy, or uncomfortable." },
  { type: "scale", text: "My digestion can feel irregular from one day to the next." },
  { type: "scale", text: "I often feel I need more sleep than I am getting." },
  { type: "scale", text: "I wake up stiff, sore, or tight more often than I used to." },
  { type: "scale", text: "Low energy and tiredness are part of my everyday life." },
  { type: "scale", text: "I feel my face or body looks more worn down than it should." },
  { type: "scale", text: "When I feel overwhelmed, I tend to pull back from other people." },
  { type: "scale", text: "I often feel I am no longer thriving, only getting through the day." },
  {
    type: "choice4",
    text: "Did childhood feel marked by ongoing stress or emotional distance?",
    prompt: "",
    options: [
      { value: 4, label: "Yes", icon: "check" },
      { value: 2, label: "Sometimes", icon: "arrows" },
      { value: 0, label: "No", icon: "no" },
      { value: 1, label: "Hard to say", icon: "question" }
    ]
  },
  {
    type: "choice4",
    text: "Growing up, did you often feel you had to stay guarded or handle too much on your own?",
    prompt: "",
    options: [
      { value: 4, label: "Yes", icon: "check" },
      { value: 2, label: "Sometimes", icon: "arrows" },
      { value: 0, label: "No", icon: "no" },
      { value: 1, label: "Hard to say", icon: "question" }
    ]
  },
  {
    type: "multiselect",
    text: "Are any of these weighing on you right now?",
    prompt: "Select all that fit",
    options: [
      "Healing from past trauma",
      "Money stress",
      "Loneliness or isolation",
      "Relationship strain",
      "Parenting pressure",
      "Health concerns",
      "Caring for parents",
      "None of these"
    ]
  },
  {
    type: "multiselect",
    text: "Which of these mental symptoms show up for you?",
    prompt: "Select all that fit",
    options: [
      "Overthinking",
      "Brain fog",
      "Harsh self-criticism",
      "Burnout",
      "Anxiety",
      "Loss of interest",
      "None of these"
    ]
  },
  {
    type: "multiselect",
    text: "Which physical symptoms have you noticed lately?",
    prompt: "Select all that fit",
    options: [
      "Joint pain",
      "Weight changes",
      "Hormone-related symptoms",
      "Bloating",
      "Sleep issues",
      "Fatigue",
      "None of these"
    ]
  },
  {
    type: "multiselect",
    text: "Which areas would you most like to strengthen?",
    prompt: "Select all that fit",
    options: [
      { value: "Relationships", label: "Relationships", icon: "relationships" },
      { value: "Self-worth", label: "Self-worth", icon: "selfWorth" },
      { value: "Physical health", label: "Physical health", icon: "physicalHealth" },
      { value: "Finances", label: "Finances", icon: "finances" },
      { value: "General wellbeing", label: "General wellbeing", icon: "wellbeing" },
      { value: "Sleep quality", label: "Sleep quality", icon: "sleep" }
    ],
    customPlaceholder: "Type your answer here..."
  },
  {
    type: "evidence",
    title: "Built on evidence-based psychology and stress research",
    body:
      "This reflection draws on established work in stress science, mental health, and behavior change from widely respected institutions.",
    sources: [
      {
        nameTop: "University",
        nameBottom: "Harvard"
      },
      {
        nameTop: "University of",
        nameBottom: "Oxford"
      },
      {
        nameTop: "University of",
        nameBottom: "Cambridge"
      }
    ],
    cta: "Continue"
  },
  {
    type: "multiselect",
    text: "How would you like to feel more often?",
    prompt: "Select all that fit",
    options: [
      { value: "Energized", label: "Energized", icon: "energized" },
      { value: "Focused", label: "Focused", icon: "focused" },
      { value: "Calm", label: "Calm", icon: "calm" },
      { value: "Motivated", label: "Motivated", icon: "motivated" },
      { value: "Appreciated", label: "Appreciated", icon: "appreciated" },
      { value: "Balanced", label: "Balanced", icon: "balanced" },
      { value: "Rested", label: "Rested", icon: "rested" }
    ],
    customPlaceholder: "Type your answer here..."
  },
  {
    type: "choice4text",
    text: "How familiar are you with Cognitive Behavioral Therapy?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 2, label: "A little" },
      { value: 4, label: "Very familiar" }
    ]
  },
  {
    type: "choice3icon",
    text: "Did a therapist recommend NewMindStart to you?",
    options: [
      { value: 4, label: "Yes", icon: "check" },
      { value: 0, label: "No", icon: "no" }
    ]
  }
];

const outroSteps = [
  { type: "expert" },
  {
    id: "socialproof",
    type: "socialproof",
    titleHighlight: "More than 745,000 people",
    title: "trust NewMindStart",
    cta: "Continue",
    image: "./assets/socialproof.png"
  },
  {
    type: "email"
  },
  {
    type: "firstName"
  },
  {
    type: "summary"
  },
  {
    type: "growthProjection"
  },
  {
    type: "planBuilder"
  },
  {
    type: "safetyChart"
  },
  {
    type: "scratchCard"
  },
  {
    type: "checkout"
  }
];

const app = document.getElementById("app");
const progressBar = document.getElementById("progressBar");
const topBar = document.querySelector(".top-bar");
const pageShell = document.querySelector(".page-shell");
const progressWrap = document.querySelector(".progress-wrap");
const backButton = document.getElementById("backButton");
const menuToggle = document.getElementById("menuToggle");
const menuClose = document.getElementById("menuClose");
const menuOverlay = document.getElementById("menuOverlay");
const siteMenu = document.getElementById("siteMenu");
const headerStepCount = document.getElementById("headerStepCount");
const headerCheckoutUtility = document.getElementById("headerCheckoutUtility");
const headerCountdown = document.getElementById("headerCountdown");
const headerCheckoutButton = document.getElementById("headerCheckoutButton");
const logoLink = document.querySelector(".logo-wrap");
let planBuilderTimers = [];
let checkoutTimerInstance = null;
let checkoutTimerFallback = null;

const state = {
  stepIndex: 0,
  answers: {
    gender: null,
    age: null
  },
  contact: {
    email: "",
    firstName: ""
  },
  formErrors: {
    email: "",
    firstName: ""
  },
  questionScores: Array(questions.length).fill(null),
  multiAnswers: {},
  multiInputs: {},
  planBuilder: {
    stage: "goalsLoading",
    popupIndex: null
  },
  chartReadyStage: 0,
  scratchCard: {
    revealed: false,
    popupOpen: false
  },
  checkout: {
    startedAt: null,
    expired: false,
    selectedPlan: "core"
  }
};

function clearPlanBuilderTimers() {
  planBuilderTimers.forEach((timerId) => window.clearTimeout(timerId));
  planBuilderTimers = [];
}

function clearCheckoutTimer() {
  if (checkoutTimerInstance && typeof checkoutTimerInstance.stop === "function") {
    checkoutTimerInstance.stop();
  }
  checkoutTimerInstance = null;

  if (checkoutTimerFallback) {
    window.clearInterval(checkoutTimerFallback);
    checkoutTimerFallback = null;
  }
}

function schedulePlanBuilder(delay, callback) {
  const timerId = window.setTimeout(callback, delay);
  planBuilderTimers.push(timerId);
}

function isCountedQuestion(question) {
  return question.type !== "evidence";
}

function getCountedQuestionTotal() {
  return questions.filter(isCountedQuestion).length;
}

function getQuestionOrdinal(index) {
  return questions.slice(0, index + 1).filter(isCountedQuestion).length;
}

const totalSteps = introSteps.length + questions.length + outroSteps.length;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getAssetUrl(path) {
  if (!path) {
    return "";
  }

  return new URL(path.replace(/^\.\//, ""), window.location.href).href;
}

function getProgress() {
  if (state.stepIndex >= introSteps.length && state.stepIndex < introSteps.length + questions.length) {
    const questionIndex = state.stepIndex - introSteps.length;
    const questionOrdinal = getQuestionOrdinal(questionIndex);
    return Math.round((questionOrdinal / getCountedQuestionTotal()) * 100);
  }

  if (
    state.stepIndex >= introSteps.length + questions.length &&
    state.stepIndex < totalSteps
  ) {
    return 100;
  }

  const completed = Math.min(state.stepIndex, totalSteps - 1);
  return Math.round((completed / (totalSteps - 1)) * 100);
}

function getCurrentOutroStep() {
  const questionIndex = state.stepIndex - introSteps.length;

  if (questionIndex < questions.length) {
    return null;
  }

  return outroSteps[questionIndex - questions.length] || null;
}

function updateProgress() {
  const progress = getProgress();
  progressBar.style.width = `${progress}%`;
  headerStepCount.textContent = "";

  if (state.stepIndex >= introSteps.length && state.stepIndex < introSteps.length + questions.length) {
    const questionIndex = state.stepIndex - introSteps.length;
    headerStepCount.textContent = `${getQuestionOrdinal(questionIndex)} / ${getCountedQuestionTotal()}`;
  } else if (state.stepIndex >= introSteps.length + questions.length && state.stepIndex < totalSteps) {
    headerStepCount.textContent = `${getCountedQuestionTotal()} / ${getCountedQuestionTotal()}`;
  }
}

function isCheckoutStepActive() {
  return getCurrentOutroStep()?.type === "checkout";
}

function formatCountdownFromMs(milliseconds) {
  const totalSeconds = Math.max(0, Math.ceil(milliseconds / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function getCheckoutRemainingMs() {
  const duration = 8 * 60 * 1000 + 38 * 1000;

  if (!state.checkout.startedAt) {
    return duration;
  }

  return Math.max(0, duration - (Date.now() - state.checkout.startedAt));
}

function updateCheckoutHeaderTimerDisplay(milliseconds) {
  headerCountdown.textContent = formatCountdownFromMs(milliseconds);
}

function expireCheckoutDiscount() {
  if (state.checkout.expired) {
    return;
  }

  state.checkout.expired = true;
  clearCheckoutTimer();
  render();
}

function startCheckoutTimer() {
  clearCheckoutTimer();

  if (!isCheckoutStepActive()) {
    return;
  }

  const remainingMs = getCheckoutRemainingMs();
  updateCheckoutHeaderTimerDisplay(remainingMs);

  if (remainingMs <= 0) {
    expireCheckoutDiscount();
    return;
  }

  const remainingSeconds = Math.ceil(remainingMs / 1000);

  if (window.easytimer?.Timer) {
    checkoutTimerInstance = new window.easytimer.Timer();
    const syncTimerValue = () => {
      const values = checkoutTimerInstance.getTimeValues();
      headerCountdown.textContent = values.toString(["minutes", "seconds"]);
    };

    checkoutTimerInstance.addEventListener("secondsUpdated", syncTimerValue);
    checkoutTimerInstance.addEventListener("targetAchieved", () => {
      expireCheckoutDiscount();
    });
    checkoutTimerInstance.start({
      countdown: true,
      precision: "seconds",
      startValues: { seconds: remainingSeconds }
    });
    syncTimerValue();
    return;
  }

  updateCheckoutHeaderTimerDisplay(remainingMs);
  checkoutTimerFallback = window.setInterval(() => {
    const nextMs = getCheckoutRemainingMs();
    updateCheckoutHeaderTimerDisplay(nextMs);

    if (nextMs <= 0) {
      expireCheckoutDiscount();
    }
  }, 1000);
}

function renderChoiceStep(step) {
  const selectedValue = state.answers[step.id];

  app.innerHTML = `
    <div class="screen">
      <h2 class="screen-title">${escapeHtml(step.title)}</h2>
      <p class="screen-copy">${escapeHtml(step.body)}</p>
      <div class="choices-grid" role="list" aria-label="${escapeHtml(step.prompt)}">
        ${step.choices
          .map(
            (choice) => `
              <button
                class="option-button ${selectedValue === choice.value ? "selected" : ""}"
                type="button"
                data-choice="${escapeHtml(choice.value)}"
              >
                <span class="option-label">${escapeHtml(choice.label)}</span>
                ${choice.hint ? `<span class="option-hint">${escapeHtml(choice.hint)}</span>` : ""}
              </button>
            `
          )
          .join("")}
      </div>
      ${step.note ? `<p class="footer-note">${escapeHtml(step.note)}</p>` : ""}
    </div>
  `;

  app.querySelectorAll("[data-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      state.answers[step.id] = button.dataset.choice;
      state.stepIndex += 1;
      render();
    });
  });
}

function renderGenderStep(step) {
  const selectedValue = state.answers[step.id];

  app.innerHTML = `
    <div class="screen screen-gender">
      <h1 class="hero-title">${escapeHtml(step.title)}</h1>
      <p class="hero-copy">${escapeHtml(step.body)}</p>
      <p class="hero-prompt">${escapeHtml(step.prompt)}</p>
      <div class="gender-grid" role="list" aria-label="Choose your gender">
        ${step.choices
          .map(
            (choice) => `
              <button
                class="gender-card ${selectedValue === choice.value ? "selected" : ""}"
                type="button"
                data-choice="${escapeHtml(choice.value)}"
              >
                <div class="gender-card__media">
                  <img
                    class="gender-card__image"
                    src="${escapeHtml(getAssetUrl(choice.image))}"
                    alt="${escapeHtml(choice.hint)}"
                  />
                </div>
                <span class="gender-card__label">${escapeHtml(choice.label)}</span>
              </button>
            `
          )
          .join("")}
      </div>
      <p class="footer-note legal-note">${step.noteHtml || ""}</p>
    </div>
  `;

  app.querySelectorAll("[data-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      state.answers[step.id] = button.dataset.choice;
      state.stepIndex += 1;
      render();
    });
  });
}

function renderWelcomeStep(step) {
  app.innerHTML = `
    <div class="screen screen-welcome">
      <div class="welcome-figure">
        <img
          class="welcome-figure__image"
          src="${escapeHtml(getAssetUrl(step.image))}"
          alt="Supportive illustration"
        />
      </div>
      <h2 class="screen-title">${escapeHtml(step.title)}</h2>
      ${step.body.map((paragraph) => `<p class="welcome-copy">${escapeHtml(paragraph)}</p>`).join("")}
      <button class="primary-button secondary button-continue" id="continueWelcome" type="button">${escapeHtml(step.cta)}</button>
      ${step.note ? `<p class="footer-note welcome-note">${escapeHtml(step.note)}</p>` : ""}
    </div>
  `;

  document.getElementById("continueWelcome").addEventListener("click", () => {
    state.stepIndex += 1;
    render();
  });
}

function renderSocialProofStep(step) {
  app.innerHTML = `
    <div class="screen screen-socialproof">
      <section class="socialproof-card">
        <div class="socialproof-heading">
          <h2 class="socialproof-title">
            <span class="socialproof-title__highlight">${escapeHtml(step.titleHighlight)}</span>
            <span class="socialproof-title__text">${escapeHtml(step.title)}</span>
          </h2>
        </div>
        <div class="socialproof-image-wrap">
          <img class="socialproof-image" src="${escapeHtml(getAssetUrl(step.image))}" alt="Community social proof" />
        </div>
      </section>
      <button class="primary-button socialproof-continue button-continue" id="continueSocialProof" type="button">
        ${escapeHtml(step.cta)}
      </button>
    </div>
  `;

  document.getElementById("continueSocialProof").addEventListener("click", () => {
    state.stepIndex += 1;
    render();
  });
}

function renderOptionIcon(kind) {
  const icons = {
    check: `
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M29.5 8.1c.8.9.8 2.2-.1 3l-13.4 12.4-4.6 4.2-9-9.5c-.8-.9-.8-2.2.1-3l1.1-1.1c.9-.8 2.2-.8 3 .1l5 5.3L25.4 6.8c.9-.8 2.2-.8 3.1.1z"></path>
      </svg>
    `,
    arrows: `
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M17.5 12H10V9c0-.4-.2-.7-.6-.9s-.8-.1-1.1.2l-8 7A1 1 0 0 0 0 16c0 .3.1.6.3.8l8 7c.3.3.7.3 1.1.2s.6-.5.6-.9v-3h2.1l5.4-8z"></path>
        <path d="m31.7 15.2-8-7c-.3-.3-.7-.3-1.1-.2s-.6.5-.6.9v3h-2.1l-5.3 8H22v3c0 .4.2.7.6.9.1.1.3.1.4.1.2 0 .5-.1.7-.2l8-7c.2-.2.3-.5.3-.8s-.1-.6-.3-.8z"></path>
      </svg>
    `,
    no: `
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2Zm0 3.3c2.2 0 4.3.7 6.2 2L7.3 22.2A10.6 10.6 0 0 1 16 5.3Zm0 21.4c-2.2 0-4.3-.7-6.2-2L24.7 9.8A10.6 10.6 0 0 1 16 26.7Z"></path>
      </svg>
    `,
    question: `
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 23.9a2.7 2.7 0 0 1-2.7-2.7v-1.2c0-2.7 1.7-5.1 4.2-6 1.9-.6 3.1-2.5 2.9-4.5-.2-2.2-1.9-4-4.1-4.1A4.4 4.4 0 0 0 11.6 9c0 .2 0 .5-.1.9a2.7 2.7 0 0 1-5.4 0c0-.5 0-.9.1-1.4A10 10 0 0 1 16.7 0c4.9.3 8.8 4.2 9.2 9.1.3 4.4-2.4 8.6-6.6 10.1-.4.1-.6.5-.6.8v1.2a2.7 2.7 0 0 1-2.7 2.7Zm0 8.1a2.7 2.7 0 0 1-2.7-2.7v-.1a2.7 2.7 0 0 1 5.4 0v.1A2.7 2.7 0 0 1 16 32Z"></path>
      </svg>
    `,
    phone: `
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect x="7" y="1.5" width="18" height="29" rx="3.5"></rect>
        <rect x="9.5" y="4.5" width="13" height="21" rx="1.8" class="option-icon__secondary"></rect>
        <rect x="13.4" y="27.2" width="5.2" height="1.6" rx="0.8" class="option-icon__accent"></rect>
      </svg>
    `,
    coffee: `
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M6 12h15v8a7 7 0 0 1-7 7h-1a7 7 0 0 1-7-7v-8Z"></path>
        <path d="M21 13h2.2a3.8 3.8 0 1 1 0 7.6H21" class="option-icon__secondary"></path>
        <path d="M9 4.5c1.3 1.4 1.3 3 0 4.4M14 4.5c1.3 1.4 1.3 3 0 4.4M19 4.5c1.3 1.4 1.3 3 0 4.4" class="option-icon__accent" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path>
      </svg>
    `,
    routine: `
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M6 18h20v8a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4v-8Z"></path>
        <path d="M10 18V9.5A5.5 5.5 0 0 1 15.5 4h1A5.5 5.5 0 0 1 22 9.5V18" class="option-icon__secondary"></path>
        <path d="M8 13.5h4M20 13.5h4" class="option-icon__accent" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path>
      </svg>
    `,
    otherRoutine: `
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect x="3" y="3" width="11" height="11" rx="2"></rect>
        <rect x="18" y="3" width="11" height="11" rx="2" class="option-icon__secondary"></rect>
        <rect x="3" y="18" width="11" height="11" rx="2" class="option-icon__secondary"></rect>
        <rect x="18" y="18" width="11" height="11" rx="2" class="option-icon__accent"></rect>
      </svg>
    `,
    hours0to2: `
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="14"></circle>
        <circle cx="16" cy="16" r="11" class="option-icon__secondary"></circle>
        <path d="M16 16V5a11 11 0 0 1 10.7 8H16Z" class="option-icon__accent"></path>
      </svg>
    `,
    hours3to5: `
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="14"></circle>
        <circle cx="16" cy="16" r="11" class="option-icon__secondary"></circle>
        <path d="M16 16V5a11 11 0 0 1 8.7 4.3L16 16Z" class="option-icon__accent"></path>
      </svg>
    `,
    hours6to8: `
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="14"></circle>
        <circle cx="16" cy="16" r="11" class="option-icon__secondary"></circle>
        <path d="M16 16 23.5 7.9A11 11 0 0 1 28 16H16Z" class="option-icon__accent"></path>
      </svg>
    `,
    hours8plus: `
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="14"></circle>
        <circle cx="16" cy="16" r="11" class="option-icon__secondary"></circle>
        <path d="M16 16 27.8 13.3A11 11 0 1 1 16 5v11Z" class="option-icon__accent"></path>
      </svg>
    `,
    clock5: `
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="14"></circle>
        <circle cx="16" cy="16" r="11.5" class="option-icon__secondary"></circle>
        <path d="M16 16V7.5M16 16l5.4 1.7" class="option-icon__accent" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path>
      </svg>
    `,
    clock10: `
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="14"></circle>
        <circle cx="16" cy="16" r="11.5" class="option-icon__secondary"></circle>
        <path d="M16 16V7.5M16 16l4.6-2.7" class="option-icon__accent" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path>
      </svg>
    `,
    clock15: `
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="14"></circle>
        <circle cx="16" cy="16" r="11.5" class="option-icon__secondary"></circle>
        <path d="M16 16V7.5M16 16h6" class="option-icon__accent" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path>
      </svg>
    `,
    clock20: `
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="14"></circle>
        <circle cx="16" cy="16" r="11.5" class="option-icon__secondary"></circle>
        <path d="M16 16V7.5M16 16l4.8 3" class="option-icon__accent" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path>
      </svg>
    `
  };

  return icons[kind] || icons.question;
}

function renderAgreementIcon(position) {
  const icons = {
    strongDisagree: `
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M7.2 28c.2-.2.5-.2.7 0l1.6 1.6c.2.2.5.2.7 0l1.5-1.5c.2-.2.2-.5 0-.7L10 25.9c-.2-.2-.2-.5 0-.7l1.6-1.6c.2-.2.2-.5 0-.7L10.2 21c-.2-.2-.5-.2-.7 0l-1.6 1.6c-.2.2-.5.2-.7 0L5.5 21c-.2-.2-.5-.2-.7 0l-1.5 1.5c-.2.2-.2.5 0 .7L4.9 25c.2.2.2.5 0 .7l-1.6 1.6c-.2.2-.2.5 0 .7L4.8 29.6c.2.2.5.2.7 0L7.2 28Z" class="agreement-icon__accent"></path>
        <rect x="10" y="4" width="2" height="14" class="agreement-icon__core"></rect>
        <path d="M1 6c0-1.1.9-2 2-2h7v14c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V6Z" class="agreement-icon__fill"></path>
        <path d="M12 18c0 0 .2 2 2.4 4.4 2.2 2.3 4.9 4.9 4.9 4.9s.5 2.9 1.1 3.5c.3.3.8.2 1.2.1.5-.2.8-.6 1-1.1.2-.5.3-1.3.3-1.9 0-1.2-.6-2.9-.6-2.9l-1.6-4c-.1-.3.1-.7.5-.7h7.4c.6 0 1.3-.2 1.7-.6.5-.4.7-.9.7-1.4s-.2-1-.7-1.4c-.4-.4-1.1-.6-1.7-.6h.2c.6 0 1.3-.2 1.7-.6.5-.4.6-.9.6-1.4s-.1-1-.6-1.4c-.4-.4-1.1-.6-1.7-.6H28c.6 0 1.3-.2 1.7-.6.5-.4.7-.9.7-1.4s-.2-1-.7-1.4c-.4-.4-1.1-.6-1.7-.6h-.8c.6 0 1.3-.2 1.7-.6.5-.4.6-.9.6-1.4s-.1-1-.6-1.4c-.4-.4-1.1-.6-1.7-.6H12v14Z" class="agreement-icon__fill"></path>
      </svg>
    `,
    disagree: `
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect x="10" y="4" width="2" height="14" class="agreement-icon__core"></rect>
        <path d="M1 6c0-1.1.9-2 2-2h7v14c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V6Z" class="agreement-icon__fill"></path>
        <path d="M12 18c0 0 .2 2 2.4 4.4 2.2 2.3 4.9 4.9 4.9 4.9s.5 2.9 1.1 3.5c.3.3.8.2 1.2.1.5-.2.8-.6 1-1.1.2-.5.3-1.3.3-1.9 0-1.2-.6-2.9-.6-2.9l-1.6-4c-.1-.3.1-.7.5-.7h7.4c.6 0 1.3-.2 1.7-.6.5-.4.7-.9.7-1.4s-.2-1-.7-1.4c-.4-.4-1.1-.6-1.7-.6h.2c.6 0 1.3-.2 1.7-.6.5-.4.6-.9.6-1.4s-.1-1-.6-1.4c-.4-.4-1.1-.6-1.7-.6H28c.6 0 1.3-.2 1.7-.6.5-.4.7-.9.7-1.4s-.2-1-.7-1.4c-.4-.4-1.1-.6-1.7-.6h-.8c.6 0 1.3-.2 1.7-.6.5-.4.6-.9.6-1.4s-.1-1-.6-1.4c-.4-.4-1.1-.6-1.7-.6H12v14Z" class="agreement-icon__fill"></path>
      </svg>
    `,
    neutral: `
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 23.9a2.7 2.7 0 0 1-2.7-2.7v-1.2c0-2.7 1.7-5.1 4.2-6 1.9-.6 3.1-2.5 2.9-4.5-.2-2.2-1.9-4-4.1-4.1A4.4 4.4 0 0 0 11.6 9c0 .2 0 .5-.1.9a2.7 2.7 0 0 1-5.4 0c0-.5 0-.9.1-1.4A10 10 0 0 1 16.7 0c4.9.3 8.8 4.2 9.2 9.1.3 4.4-2.4 8.6-6.6 10.1-.4.1-.6.5-.6.8v1.2a2.7 2.7 0 0 1-2.7 2.7Zm0 8.1a2.7 2.7 0 0 1-2.7-2.7v-.1a2.7 2.7 0 0 1 5.4 0v.1A2.7 2.7 0 0 1 16 32Z" class="agreement-icon__fill"></path>
      </svg>
    `,
    agree: `
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect x="10" y="14" width="2" height="14" class="agreement-icon__core"></rect>
        <path d="M1 16c0-1.1.9-2 2-2h7v14c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V16Z" class="agreement-icon__fill"></path>
        <path d="M12 14c0 0 .2-2 2.4-4.4 2.2-2.3 4.9-4.9 4.9-4.9s.5-2.9 1.1-3.5c.3-.3.8-.2 1.2-.1.5.2.8.6 1 1.1.2.5.3 1.3.3 1.9 0 1.2-.6 2.9-.6 2.9l-1.6 4c-.1.3.1.7.5.7h7.4c.6 0 1.3.2 1.7.6.5.4.7.9.7 1.4s-.2 1-.7 1.4c-.4.4-1.1.6-1.7.6h.2c.6 0 1.3.2 1.7.6.5.4.6.9.6 1.4s-.1 1-.6 1.4c-.4.4-1.1.6-1.7.6H28c.6 0 1.3.2 1.7.6.5.4.7.9.7 1.4s-.2 1-.7 1.4c-.4.4-1.1.6-1.7.6h-.8c.6 0 1.3.2 1.7.6.5.4.6.9.6 1.4s-.1 1-.6 1.4c-.4.4-1.1.6-1.7.6H12V14Z" class="agreement-icon__fill"></path>
      </svg>
    `,
    strongAgree: `
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect x="10" y="13.5" width="2" height="14" class="agreement-icon__core"></rect>
        <path d="M1 15.5c0-1.1.9-2 2-2h7v14c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2v-12Z" class="agreement-icon__fill"></path>
        <path d="M12 13.5c0 0 .2-2 2.4-4.4 2.2-2.3 4.9-4.9 4.9-4.9s.5-2.9 1.1-3.5c.3-.3.8-.2 1.2-.1.5.2.8.6 1 1.1.2.5.3 1.3.3 1.9 0 1.2-.6 2.9-.6 2.9l-1.6 4c-.1.3.1.7.5.7h7.4c.6 0 1.3.2 1.7.6.5.4.7.9.7 1.4s-.2 1-.7 1.4c-.4.4-1.1.6-1.7.6h.2c.6 0 1.3.2 1.7.6.5.4.6.9.6 1.4s-.1 1-.6 1.4c-.4.4-1.1.6-1.7.6H28c.6 0 1.3.2 1.7.6.5.4.7.9.7 1.4s-.2 1-.7 1.4c-.4.4-1.1.6-1.7.6h-.8c.6 0 1.3.2 1.7.6.5.4.6.9.6 1.4s-.1 1-.6 1.4c-.4.4-1.1.6-1.7.6H12V13.5Z" class="agreement-icon__fill"></path>
        <path d="M8 1.7c.2-.4.8-.4 1 0L10.3 5c.1.1.2.2.3.2L13.8 6.5c.4.2.4.8 0 .9l-3.2 1.3c-.1 0-.2.1-.3.2L9 12.3c-.2.4-.8.4-1 0L6.7 9c-.1-.1-.2-.2-.3-.2L3.2 7.5c-.4-.2-.4-.8 0-.9l3.2-1.3c.1 0 .2-.1.3-.2L8 1.7Zm12.5 20.5c.2-.4.8-.4 1 0l.9 2.2c0 .1.1.2.2.3l2.2.9c.4.2.4.8 0 1l-2.2.9c-.1 0-.2.1-.2.2l-.9 2.2c-.2.4-.8.4-1 0l-.9-2.2c0-.1-.1-.2-.2-.2l-2.2-.9c-.4-.2-.4-.8 0-1l2.2-.9c.1-.1.2-.2.2-.3l.9-2.2Z" class="agreement-icon__accent"></path>
      </svg>
    `
  };

  return icons[position] || icons.neutral;
}

function getMultiOptionValue(option) {
  return typeof option === "string" ? option : option.value;
}

function getMultiOptionLabel(option) {
  return typeof option === "string" ? option : option.label;
}

function renderMultiOptionIcon(kind) {
  const icons = {
    relationships: `<img src="assets/relationship.png" alt="Relationships" aria-hidden="true">`,
    selfWorth: `<img src="assets/self-worth.png" alt="Self-worth" aria-hidden="true">`,
    physicalHealth: `<img src="assets/health.png" alt="Physical health" aria-hidden="true">`,
    finances: `<img src="assets/finances.png" alt="Finances" aria-hidden="true">`,
    wellbeing: `<img src="assets/wellbeing.png" alt="General wellbeing" aria-hidden="true">`,
    sleep: `<img src="assets/sleep.png" alt="Sleep quality" aria-hidden="true">`,
    energized: `<img src="assets/energized.png" alt="Energized" aria-hidden="true">`,
    focused: `<img src="assets/focused.png" alt="Focused" aria-hidden="true">`,
    calm: `<img src="assets/calm.png" alt="Calm" aria-hidden="true">`,
    motivated: `<img src="assets/motivated.png" alt="Motivated" aria-hidden="true">`,
    appreciated: `<img src="assets/appreciated.png" alt="Appreciated" aria-hidden="true">`,
    balanced: `<img src="assets/balanced.png" alt="Balanced" aria-hidden="true">`,
    rested: `<img src="assets/rested.png" alt="Rested" aria-hidden="true">`,
    lowEnergy: `
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect x="5" y="3" width="18" height="26" rx="4"></rect>
        <path class="multi-icon__secondary" d="M9 7h10v18H9z"></path>
        <path class="multi-icon__accent" d="M15.2 9 11 17h4l-1.2 6L20 14h-4.1L15.2 9Z"></path>
      </svg>
    `,
    worry: `
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M9 24a8 8 0 1 1 14.9-4H25a4 4 0 0 1 0 8H9Z"></path>
        <path class="multi-icon__secondary" d="M11.5 20.5a3.5 3.5 0 1 0 3.5-3.6 4 4 0 0 1 4-4"></path>
        <path class="multi-icon__accent" d="M16 24.3a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2Zm-.8-5.3V10h1.6v9Z"></path>
      </svg>
    `,
    emotionalExhaustion: `
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="14"></circle>
        <path class="multi-icon__secondary" d="M10.5 13.5c0 2 3 2 3 0M18.5 13.5c0 2 3 2 3 0"></path>
        <path class="multi-icon__accent" d="M11.5 22c1.4-1.8 3-2.6 4.5-2.6s3.1.8 4.5 2.6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
      </svg>
    `,
    overthinking: `
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M13 28c-4.4 0-8-3.6-8-8 0-4.8 3.9-8.7 8.7-8.7h.6c1.6-3.1 4.8-5.3 8.5-5.3 5.3 0 9.5 4.2 9.5 9.5 0 5.1-4 9.2-9 9.5L19.5 28H13Z"></path>
        <path class="multi-icon__secondary" d="M12 18.2c.8-1.5 2.1-2.2 4-2.2 2.1 0 3.4.9 4.2 2.8"></path>
        <path class="multi-icon__accent" d="M12 12.5h2M16 10.5h2M20 12.5h2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path>
      </svg>
    `,
    irritability: `
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="m16 2 2.4 6.2L25 5.6l-2.7 6L29 13l-6.2 2.4L25.4 22l-6-2.7L18 30l-2.4-6.2L9 26.4l2.7-6L3 19l6.2-2.4L6.6 10l6 2.7L14 2Z"></path>
        <path class="multi-icon__secondary" d="M12 20c1.3-1.6 2.7-2.3 4-2.3S18.7 18.4 20 20"></path>
        <path class="multi-icon__accent" d="M12 13.5h2M18 13.5h2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path>
      </svg>
    `,
    totallyFine: `
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M7 15.5V28a3 3 0 0 0 3 3h10.8a3 3 0 0 0 3-3V16.6l3.5-1.1a2.5 2.5 0 0 0 1.6-3.1 2.5 2.5 0 0 0-3.1-1.7L21 12V7.7a4.7 4.7 0 0 0-4.7-4.7h-.2L15 6.5 12.5 3H12A5 5 0 0 0 7 8v7.5Z"></path>
        <path class="multi-icon__secondary" d="M7 15.5c1.8.8 4.7 2 7.6 3.6 2.8 1.5 5.7 3.2 7.6 4.3"></path>
        <path class="multi-icon__accent" d="m4.8 5.2 1 1.8 1.8 1-1.8 1-1 1.8-1-1.8-1.8-1 1.8-1 1-1.8Zm21.6 20.3.7 1.3 1.3.7-1.3.7-.7 1.3-.7-1.3-1.3-.7 1.3-.7.7-1.3Z"></path>
      </svg>
    `
  };

  return icons[kind] || "";
}

function getMultiselectSubmission(index) {
  const selected = Array.isArray(state.multiAnswers[index]) ? [...state.multiAnswers[index]] : [];
  const custom = (state.multiInputs[index] || "").trim();

  if (custom) {
    selected.push(custom);
  }

  return selected;
}

function renderEvidenceStep(question) {
  app.innerHTML = `
    <div class="screen screen-evidence">
      <h2 class="screen-title">${escapeHtml(question.title)}</h2>
      <p class="screen-copy evidence-copy">${escapeHtml(question.body)}</p>
      <div class="evidence-list" role="list" aria-label="Research sources">
        ${question.sources
          .map(
            (source) => `
              <article class="evidence-card" role="listitem">
                <h3 class="evidence-card__name">
                  <span class="evidence-card__brand-top">${escapeHtml(source.nameTop)}</span>
                  <span class="evidence-card__brand-bottom">${escapeHtml(source.nameBottom)}</span>
                </h3>
              </article>
            `
          )
          .join("")}
      </div>
      <button class="primary-button socialproof-continue button-continue" id="continueEvidence" type="button">
        ${escapeHtml(question.cta)}
      </button>
    </div>
  `;

  document.getElementById("continueEvidence").addEventListener("click", () => {
    state.stepIndex += 1;
    render();
  });
}

function renderQuestionStep(index) {
  const score = state.questionScores[index];
  const question = questions[index];

  if (question.type === "evidence") {
    renderEvidenceStep(question);
    return;
  }

  if (question.type === "multiselect") {
    const selected = Array.isArray(state.multiAnswers[index]) ? state.multiAnswers[index] : [];
    const customValue = state.multiInputs[index] || "";
    const selectedCount = getMultiselectSubmission(index).length;
    const isStrengthenAreasQuestion = question.text === "Which areas would you most like to strengthen?";
    const isFeelMoreOftenQuestion = question.text === "How would you like to feel more often?";

    app.innerHTML = `
      <div class="screen screen-multiselect ${isStrengthenAreasQuestion ? "screen-multiselect--strengthen" : ""} ${isFeelMoreOftenQuestion ? "screen-multiselect--feelings" : ""}">
        <h2 class="question-title">${escapeHtml(question.text)}</h2>
        <p class="question-prompt question-prompt--center">${escapeHtml(question.prompt)}</p>
        <div class="multiselect-list" role="list" aria-label="${escapeHtml(question.text)}">
          ${question.options
            .map(
              (option) => `
                <button
                  class="multiselect-option ${selected.includes(getMultiOptionValue(option)) ? "selected" : ""}"
                  type="button"
                  data-option="${escapeHtml(getMultiOptionValue(option))}"
                >
                  ${
                    typeof option === "string"
                      ? ""
                      : `<span class="multiselect-option__icon">${renderMultiOptionIcon(option.icon)}</span>`
                  }
                  <span class="multiselect-option__label">${escapeHtml(getMultiOptionLabel(option))}</span>
                  <span class="multiselect-option__check" aria-hidden="true">
                    <svg viewBox="0 0 16 16">
                      <path d="M11 5 7.13 11 5 8.47"></path>
                    </svg>
                  </span>
                </button>
              `
            )
            .join("")}
          ${
            question.customPlaceholder
              ? `
                <label class="multiselect-option multiselect-option--custom ${customValue.trim() ? "selected" : ""}">
                  <input
                    class="multiselect-option__input"
                    id="customMultiInput"
                    type="text"
                    placeholder="${escapeHtml(question.customPlaceholder)}"
                    value="${escapeHtml(customValue)}"
                  />
                  <span class="multiselect-option__check ${customValue.trim() ? "is-checked" : ""}" aria-hidden="true">
                    <svg viewBox="0 0 16 16">
                      <path d="M11 5 7.13 11 5 8.47"></path>
                    </svg>
                  </span>
                </label>
              `
              : ""
          }
        </div>
        <button
          class="primary-button multiselect-continue button-continue"
          id="continueMulti"
          type="button"
          ${selectedCount ? "" : "disabled"}
        >
          Continue
        </button>
      </div>
    `;

    app.querySelectorAll("[data-option]").forEach((button) => {
      button.addEventListener("click", () => {
        const value = button.dataset.option;
        const current = Array.isArray(state.multiAnswers[index]) ? [...state.multiAnswers[index]] : [];
        const isExclusiveOption = value === "None of these" || value === "I'm totally fine";
        const next = current.includes(value)
          ? current.filter((item) => item !== value)
          : isExclusiveOption
            ? [value]
            : [...current.filter((item) => item !== "None of these" && item !== "I'm totally fine"), value];

        state.multiAnswers[index] = next;
        state.questionScores[index] = next.length ? 2 : null;
        render();
      });
    });

    if (question.customPlaceholder) {
      const customInput = document.getElementById("customMultiInput");
      customInput.addEventListener("input", (event) => {
        const nextValue = event.target.value;
        state.multiInputs[index] = nextValue;
        if (nextValue.trim()) {
          state.multiAnswers[index] = (state.multiAnswers[index] || []).filter(
            (item) => item !== "None of these"
          );
        }
        state.questionScores[index] = getMultiselectSubmission(index).length ? 2 : null;
        const continueButton = document.getElementById("continueMulti");
        continueButton.disabled = !getMultiselectSubmission(index).length;
        customInput.closest(".multiselect-option").classList.toggle("selected", Boolean(nextValue.trim()));
        customInput
          .closest(".multiselect-option")
          .querySelector(".multiselect-option__check")
          .classList.toggle("is-checked", Boolean(nextValue.trim()));
      });
    }

    document.getElementById("continueMulti").addEventListener("click", () => {
      const submission = getMultiselectSubmission(index);

      if (!submission.length) {
        return;
      }

      state.multiAnswers[index] = submission;
      state.questionScores[index] = 2;
      state.stepIndex += 1;
      render();
    });
    return;
  }

  if (
    question.type === "choice3icon" ||
    question.type === "choice4" ||
    question.type === "choice4text" ||
    question.type === "choice4icon"
  ) {
    const hasIcons = question.type !== "choice4text";
    app.innerHTML = `
      <div class="screen screen-choice4 ${hasIcons ? "screen-choice4--icon" : "screen-choice4--text"}">
        <h2 class="question-title">${escapeHtml(question.text)}</h2>
        ${question.prompt ? `<p class="question-prompt question-prompt--center">${escapeHtml(question.prompt)}</p>` : ""}
        <div class="answer-list" role="list" aria-label="${escapeHtml(question.text)}">
          ${question.options
            .map(
              (option) => `
                <button
                  class="answer-option ${hasIcons ? "answer-option--icon" : "answer-option--text"} ${score === option.value ? "selected" : ""}"
                  type="button"
                  data-score="${option.value}"
                >
                  <span class="answer-option__content ${hasIcons ? "" : "answer-option__content--center"}">
                    ${
                      hasIcons
                        ? `
                          <span class="answer-option__icon answer-option__icon--${escapeHtml(option.icon)}">
                            ${renderOptionIcon(option.icon)}
                          </span>
                        `
                        : ""
                    }
                    <span class="answer-option__label">${escapeHtml(option.label)}</span>
                  </span>
                </button>
              `
            )
            .join("")}
        </div>
      </div>
    `;

    app.querySelectorAll("[data-score]").forEach((button) => {
      button.addEventListener("click", () => {
        state.questionScores[index] = Number(button.dataset.score);
        state.stepIndex += 1;
        render();
      });
    });
    return;
  }

  const agreementIcons = [
    { key: "strongDisagree", size: "large", value: 0, aria: "Not true" },
    { key: "disagree", size: "small", value: 1, aria: "Rarely true" },
    { key: "neutral", size: "small", value: 2, aria: "Sometimes" },
    { key: "agree", size: "small", value: 3, aria: "Mostly true" },
    { key: "strongAgree", size: "large", value: 4, aria: "Very true" }
  ];

  app.innerHTML = `
    <div class="screen screen-agreement">
      <h2 class="question-title">${escapeHtml(question.text)}</h2>
      <p class="question-prompt question-prompt--center question-prompt--agreement">
        How much do you feel the following statement is true?
      </p>
      <div class="agreement-meter" aria-label="Agreement scale">
        <div class="agreement-meter__legend">
          <span>Strongly disagree</span>
          <span>Strongly agree</span>
        </div>
        <div class="agreement-meter__row" role="list" aria-label="${escapeHtml(question.text)}">
        ${agreementIcons
          .map(
            (option) => `
              <button
                class="agreement-button agreement-button--${option.size} ${score === option.value ? "selected" : ""}"
                type="button"
                data-score="${option.value}"
                aria-label="${escapeHtml(option.aria)}"
              >
                <span class="agreement-button__icon agreement-button__icon--${escapeHtml(option.key)}">
                  ${renderAgreementIcon(option.key)}
                </span>
              </button>
            `
          )
          .join("")}
        </div>
      </div>
    </div>
  `;

  app.querySelectorAll("[data-score]").forEach((button) => {
    button.addEventListener("click", () => {
      state.questionScores[index] = Number(button.dataset.score);
      state.stepIndex += 1;
      render();
    });
  });
}

function averageScore(indices) {
  const values = indices
    .map((index) => state.questionScores[index])
    .filter((value) => typeof value === "number");

  if (values.length === 0) {
    return 0;
  }

  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function getResultData() {
  const scoredQuestions = questions.filter(isCountedQuestion);
  const answeredScores = state.questionScores.filter(
    (value, index) => isCountedQuestion(questions[index]) && value !== null
  );
  const total = answeredScores.reduce((sum, value) => sum + value, 0);
  const max = scoredQuestions.length * 4;
  const percentage = Math.round((total / max) * 100);

  let stage = "Light strain";
  let summary =
    "Your responses suggest some pressure is present, but there may still be room to rebuild steadiness before it becomes more disruptive.";
  let support =
    "A gentler rhythm, more consistent recovery, and small daily calming practices may go a long way.";

  if (percentage >= 40 && percentage < 70) {
    stage = "Ongoing strain";
    summary =
      "Your answers suggest that stress may be affecting several parts of daily life, including energy, focus, rest, and emotional steadiness.";
    support =
      "This pattern often benefits from a more structured reset: calming routines, clearer recovery time, and support that works with the body rather than against it.";
  } else if (percentage >= 70) {
    stage = "High load";
    summary =
      "Your responses suggest that your system may be carrying a heavy and persistent stress load. This can shape how you think, feel, sleep, digest, and move through the day.";
    support =
      "What you are noticing deserves care. A supportive next step may be to combine restorative habits with guidance from a qualified health professional if symptoms feel significant or worsening.";
  }

  const topThemes = [
    {
      label: "Energy and recovery",
      score: averageScore([7, 9, 16, 17, 18, 24, 25, 26, 29, 30])
    },
    {
      label: "Mental load",
      score: averageScore([0, 1, 4, 5, 6, 10, 12, 13, 14])
    },
    {
      label: "Body signals",
      score: averageScore([2, 8, 15, 21, 22, 23, 27])
    },
    {
      label: "Early stress patterns",
      score: averageScore([30, 31])
    }
  ]
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  return {
    percentage,
    stage,
    summary,
    support,
    topThemes
  };
}

function renderExpertStep() {
  app.innerHTML = `
    <div class="screen screen-expert">
      <div class="expert-figure">
        <img
          class="expert-figure__image"
          src="${escapeHtml(getAssetUrl("./assets/girl.png"))}"
          alt="Illustration of a woman with labeled thoughts, feelings, and behavior"
        />
      </div>

      <h2 class="screen-title expert-title">
        Your plan will be reviewed by <span class="expert-title__accent">our science team</span>
      </h2>

      <p class="expert-copy">
        "We use science-backed methods to shape a plan that feels personal, practical, and aligned with what your answers show."
      </p>

      <article class="expert-card">
        <div class="expert-card__label">Content reviewed by an expert</div>
        <div class="expert-card__body">
          <span class="expert-card__check" aria-hidden="true">
            <svg viewBox="0 0 20 20">
              <path d="M10 1.7 12.1 2.8l2.6-.2 1.1 2.3 2.2 1.4-.7 2.5.7 2.5-2.2 1.4-1.1 2.3-2.6-.2L10 18.3l-2.1-1.1-2.6.2-1.1-2.3L2 13.7l.7-2.5L2 8.7l2.2-1.4 1.1-2.3 2.6.2L10 1.7Z"></path>
              <path d="M13.3 7.8 9.2 12.1 6.9 9.8"></path>
            </svg>
          </span>
          <div class="expert-card__text">
            <p class="expert-card__name">Camila Navarro</p>
            <p class="expert-card__role">Licensed Mental Health Counselor</p>
          </div>
        </div>
      </article>

      <button class="primary-button socialproof-continue expert-continue button-continue" id="expertContinue" type="button">Continue</button>
    </div>
  `;

  document.getElementById("expertContinue").addEventListener("click", () => {
    state.stepIndex += 1;
    render();
  });
}

function renderCommunityStep(step) {
  app.innerHTML = `
    <div class="screen screen-community">
      <div class="community-figure" aria-hidden="true">
        <div class="community-map">
          <span class="community-pin community-pin--one"></span>
          <span class="community-pin community-pin--two"></span>
          <span class="community-pin community-pin--three"></span>
          <span class="community-pin community-pin--four"></span>
          <span class="community-pin community-pin--five"></span>
          <span class="community-pin community-pin--six"></span>
        </div>
      </div>

      <h2 class="screen-title community-title">${escapeHtml(step.title)}</h2>
      <p class="community-copy">${escapeHtml(step.body)}</p>

      <button class="primary-button community-continue button-continue" id="communityContinue" type="button">
        ${escapeHtml(step.cta)}
      </button>
    </div>
  `;

  document.getElementById("communityContinue").addEventListener("click", () => {
    state.stepIndex += 1;
    render();
  });
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function renderEmailStep() {
  const emailValue = state.contact.email;

  const error = state.formErrors.email;

  app.innerHTML = `
    <div class="screen screen-form">
      <h2 class="screen-title form-title">
        Enter your <span class="form-title__accent"> email </span> to see your personal Profile Summary
      </h2>

      <div class="form-field-wrap">
        <input
          class="form-input ${error ? "form-input--error" : ""}"
          id="emailInput"
          type="email"
          inputmode="email"
          autocomplete="email"
          placeholder="Enter your email"
          value="${escapeHtml(emailValue)}"
        />
        ${error ? `<p class="form-error">${escapeHtml(error)}</p>` : ""}
      </div>

      <div class="form-note">
        <span class="form-note__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M17 10V7a5 5 0 0 0-10 0v3M8 10h8a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </span>
        <p class="form-note__text">
          We are committed to your privacy. By submitting, you agree that we may use this information to contact you about relevant content. For more information, check our
          <a class="form-note__link" href="https://account.newmindstart.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
        </p>
      </div>

      <button class="primary-button secondary form-continue button-continue" id="emailContinue" type="button">
        Continue
      </button>
    </div>
  `;

  const input = document.getElementById("emailInput");
  input.addEventListener("input", (event) => {
    state.contact.email = event.target.value;
    if (state.formErrors.email) {
      state.formErrors.email = "";
      input.classList.remove("form-input--error");
      const errorNode = document.querySelector(".form-error");
      if (errorNode) {
        errorNode.remove();
      }
    }
  });

  document.getElementById("emailContinue").addEventListener("click", () => {
    const email = state.contact.email.trim();
    if (!email || !isValidEmail(email)) {
      state.formErrors.email = "Please enter your email";
      render();
      return;
    }

    state.contact.email = email;
    state.formErrors.email = "";
    state.stepIndex += 1;
    render();
  });
}

function renderFirstNameStep() {
  const firstNameValue = state.contact.firstName;
  const error = state.formErrors.firstName;

  app.innerHTML = `
    <div class="screen screen-form screen-form--compact">
      <h2 class="screen-title form-title">
        Enter your <span class="form-title__accent">first name</span>
        to get your personalized plan
      </h2>

      <div class="form-field-wrap">
        <input
          class="form-input ${error ? "form-input--error" : ""}"
          id="firstNameInput"
          type="text"
          autocomplete="given-name"
          placeholder="Enter your name to get your plan"
          value="${escapeHtml(firstNameValue)}"
        />
        ${error ? `<p class="form-error">${escapeHtml(error)}</p>` : ""}
      </div>

      <div class="form-note">
        <span class="form-note__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M17 10V7a5 5 0 0 0-10 0v3M8 10h8a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </span>
        <p class="form-note__text">
          We are committed to your privacy. By submitting, you agree that we may use this information to contact you about relevant content. For more information, check our
          <a class="form-note__link" href="https://account.newmindstart.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
        </p>
      </div>

      <button class="primary-button secondary form-continue button-continue" id="firstNameContinue" type="button">
        Continue
      </button>
    </div>
  `;

  const input = document.getElementById("firstNameInput");
  input.addEventListener("input", (event) => {
    state.contact.firstName = event.target.value;
    if (state.formErrors.firstName) {
      state.formErrors.firstName = "";
      input.classList.remove("form-input--error");
      const errorNode = document.querySelector(".form-error");
      if (errorNode) {
        errorNode.remove();
      }
    }
  });

  document.getElementById("firstNameContinue").addEventListener("click", () => {
    state.contact.firstName = state.contact.firstName.trim();
    if (!state.contact.firstName) {
      state.formErrors.firstName = "Please enter your name";
      render();
      return;
    }

    state.formErrors.firstName = "";
    state.stepIndex += 1;
    render();
  });
}

function renderSummaryMetricIcon(kind) {
  const icons = {
    puzzle: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9.2 3.5a2.4 2.4 0 0 1 4.8 0v1.1h2.3c1 0 1.7.8 1.7 1.7v2.2h1.1a2.4 2.4 0 1 1 0 4.8H18v2.3c0 1-.8 1.7-1.7 1.7H14V19a2.4 2.4 0 1 1-4.8 0v-1.1H6.9c-1 0-1.7-.8-1.7-1.7V14H4.1a2.4 2.4 0 1 1 0-4.8h1.1V6.9c0-1 .8-1.7 1.7-1.7h2.3V3.5Z"></path>
      </svg>
    `,
    spark: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m12 2 1.8 5.1L19 5.3l-2 4.8 5 1.9-5 1.9 2 4.9-5.2-1.9L12 22l-1.8-5.1L5 18.8l2-4.9L2 12l5-1.9-2-4.8 5.2 1.8L12 2Z"></path>
      </svg>
    `,
    bolt: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.2 2 6.8 13h4.1l-1.1 9L17.2 11h-4L13.2 2Z"></path>
      </svg>
    `,
    star: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m12 2.8 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.8-5.5 2.8 1.1-6.1L3.2 9.2l6.1-.9L12 2.8Z"></path>
      </svg>
    `,
    info: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 10.2v5.4M12 7.8h.1" fill="none" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round"></path>
      </svg>
    `
  };

  return icons[kind] || icons.spark;
}

function getSummaryProfileData(result) {
  const firstTheme = result.topThemes[0]?.label || "nervous system load";

  return {
    start: "7%",
    end: "83%",
    levelBadge: "High",
    chartTitle: "Estimated nervous system dysregulation",
    alertTitle: "High level",
    alertBody:
      "Your nervous system may be working overtime, which can intensify worry, create more inner pressure, drain energy, and make restorative sleep harder to maintain.",
    metrics: [
      { label: "Main pattern", value: "Functional Freeze", icon: "puzzle" },
      { label: "Stress resilience", value: "Low", icon: "spark" },
      { label: "Most affected area", value: firstTheme, icon: "bolt" },
      { label: "Physical cost", value: "Systemic overload", icon: "star" }
    ]
  };
}

function renderSummaryStep() {
  const result = getResultData();
  const summaryMeta = getSummaryProfileData(result);

  app.innerHTML = `
    <div class="screen screen-profile-summary">
      <h2 class="screen-title profile-summary__title">
        Summary of your nervous system profile
      </h2>

      <section class="profile-summary-card">
        <div class="profile-summary-panel">
          <div class="profile-summary-panel__head">
            <h3 class="profile-summary-panel__title">${escapeHtml(summaryMeta.chartTitle)}</h3>
            <span class="profile-summary-panel__badge">${escapeHtml(summaryMeta.levelBadge)}</span>
          </div>

          <div class="profile-summary-figure">
            <img
              class="profile-summary-figure__image"
              src="${escapeHtml(getAssetUrl("./assets/scemagirl.png"))}"
              alt="Illustration showing nervous system strain"
            />
          </div>

          <div
            class="profile-summary-chart"
            style="--summary-start:${escapeHtml(summaryMeta.start)}; --summary-end:${escapeHtml(summaryMeta.end)};"
          >
            <div class="profile-summary-chart__marker" aria-hidden="true">
              <img
                class="profile-summary-chart__marker-image"
                src="${escapeHtml(getAssetUrl("./assets/slider.png"))}"
                alt=""
              />
            </div>

            <div class="profile-summary-chart__track" aria-hidden="true">
              <span class="profile-summary-chart__segment profile-summary-chart__segment--low"></span>
              <span class="profile-summary-chart__segment profile-summary-chart__segment--normal"></span>
              <span class="profile-summary-chart__segment profile-summary-chart__segment--medium"></span>
              <span class="profile-summary-chart__segment profile-summary-chart__segment--high"></span>
            </div>

            <div class="profile-summary-chart__labels" aria-hidden="true">
              <span>Low</span>
              <span>Normal</span>
              <span>Medium</span>
              <span>High</span>
            </div>
          </div>

          <article class="profile-summary-alert">
            <div class="profile-summary-alert__icon">
              ${renderSummaryMetricIcon("info")}
            </div>
            <div class="profile-summary-alert__content">
              <h4 class="profile-summary-alert__title">${escapeHtml(summaryMeta.alertTitle)}</h4>
              <p class="profile-summary-alert__text">${escapeHtml(summaryMeta.alertBody)}</p>
            </div>
          </article>

          <div class="profile-summary-metrics">
            ${summaryMeta.metrics
              .map(
                (metric) => `
                  <article class="profile-summary-metric">
                    <div class="profile-summary-metric__icon">
                      ${renderSummaryMetricIcon(metric.icon)}
                    </div>
                    <div class="profile-summary-metric__content">
                      <p class="profile-summary-metric__label">${escapeHtml(metric.label)}</p>
                      <p class="profile-summary-metric__value">${escapeHtml(metric.value)}</p>
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </section>

      <button class="primary-button profile-summary__continue button-continue" id="summaryContinue" type="button">
        Continue
      </button>
    </div>
  `;

  document.getElementById("summaryContinue").addEventListener("click", () => {
    state.stepIndex += 1;
    render();
  });
}

function getProjectionMonths() {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat(undefined, { month: "long" });
  const future = new Date(now.getFullYear(), now.getMonth() + 2, 1);

  return {
    currentMonth: formatter.format(now),
    futureMonth: formatter.format(future)
  };
}

function getProjectionAgeCopy(ageRange) {
  return ageRange || "your age group";
}

function getAudienceLabel() {
  if (state.answers.gender === "man") {
    return "men";
  }

  if (state.answers.gender === "woman") {
    return "women";
  }

  return "people";
}

function renderGrowthProjectionStep() {
  const { currentMonth, futureMonth } = getProjectionMonths();
  const ageRange = getProjectionAgeCopy(state.answers.age);
  const bars = [
    { modifier: "coral", height: "92%", delay: "0ms" },
    { modifier: "peach", height: "66%", delay: "90ms" },
    { modifier: "sand", height: "81%", delay: "180ms" },
    { modifier: "yellow", height: "57%", delay: "270ms" },
    { modifier: "green", height: "36%", delay: "360ms", goal: true },
    { modifier: "blue", height: "24%", delay: "450ms" }
  ];

  app.innerHTML = `
    <div class="screen screen-growth-projection">
      <h2 class="screen-title growth-projection__title">
        For people aged ${escapeHtml(ageRange)}, steady habits can start shifting the picture in a few months
      </h2>

      <section class="growth-projection__card">
        <p class="growth-projection__eyebrow">Projected change over the next few months</p>

        <div class="growth-projection__chart" aria-hidden="true">
          <div class="growth-projection__bars">
            ${bars
              .map(
                (bar) => `
                  <div class="growth-projection__bar-group ${bar.goal ? "growth-projection__bar-group--goal" : ""}">
                    ${bar.goal ? '<span class="growth-projection__goal-tip">Goal</span>' : ""}
                    <div class="growth-projection__track">
                      <span
                        class="growth-projection__bar growth-projection__bar--${bar.modifier}"
                        style="--target-height:${escapeHtml(bar.height)}; --bar-delay:${escapeHtml(bar.delay)};"
                      ></span>
                    </div>
                  </div>
                `
              )
              .join("")}
          </div>

          <div class="growth-projection__months">
            <span class="growth-projection__month growth-projection__month--start">${escapeHtml(currentMonth)}</span>
            <span class="growth-projection__month growth-projection__month--end">${escapeHtml(futureMonth)}</span>
          </div>
        </div>

        <p class="growth-projection__body">
          With a more regulated routine, your nervous system may move from daily strain toward a steadier, more resilient baseline.
        </p>
      </section>

      <button class="primary-button secondary form-continue growth-projection__continue button-continue" id="growthProjectionContinue" type="button">
        Continue
      </button>
    </div>
  `;

  document.getElementById("growthProjectionContinue").addEventListener("click", () => {
    state.stepIndex += 1;
    render();
  });
}

function getPlanBuilderConfig() {
  return {
    rows: [
      {
        key: "goals",
        label: "Goals",
        progressLabel: "35%",
        stage: "goalsLoading",
        popupIndex: 0,
        review: {
          title: 'Finally understood I was not just "running on empty"',
          author: "Sarah J.",
          body:
            "I thought I only needed more discipline, but NewMindStart helped me see how much stress my nervous system was carrying. Having a clearer direction changed everything."
        }
      },
      {
        key: "growth",
        label: "Growth areas",
        progressLabel: "49%",
        stage: "growthLoading",
        popupIndex: 1,
        review: {
          title: "I felt more focused within the first week",
          author: "Maya L.",
          body:
            "I had only just started using NewMindStart, but I already felt more grounded and less scattered. The guidance made the next steps feel simple and practical."
        }
      },
      {
        key: "content",
        label: "Content",
        progressLabel: "52%",
        stage: "contentLoading",
        popupIndex: 2,
        review: {
          title: "The support helped me stay with the process",
          author: "Elena R.",
          body:
            "During a stressful period, the plan gave me structure I could actually follow. Over time, I started understanding myself better and feeling more steady."
        }
      }
    ],
    popups: [
      "Are you inclined to finish what you start?",
      "Are you familiar with nervous system regulation techniques?",
      "Are you open to additional support?"
    ]
  };
}

function setPlanBuilderStage(stage, popupIndex = null) {
  state.planBuilder.stage = stage;
  state.planBuilder.popupIndex = popupIndex;
  render();
}

function ensurePlanBuilderProgress(stage) {
  if (stage === "goalsLoading") {
    schedulePlanBuilder(1550, () => setPlanBuilderStage("goalsPopup", 0));
    return;
  }

  if (stage === "growthLoading") {
    schedulePlanBuilder(1325, () => setPlanBuilderStage("growthPopup", 1));
    return;
  }

  if (stage === "contentLoading") {
    schedulePlanBuilder(1325, () => setPlanBuilderStage("contentPopup", 2));
  }
}

function getPlanBuilderRowState(stage, rowIndex) {
  const states = {
    goals: ["goalsLoading", "goalsPopup", "growthLoading", "growthPopup", "contentLoading", "contentPopup", "complete"],
    growth: ["growthLoading", "growthPopup", "contentLoading", "contentPopup", "complete"],
    content: ["contentLoading", "contentPopup", "complete"]
  };
  const keys = ["goals", "growth", "content"];
  const rowKey = keys[rowIndex];

  return {
    visible: states[rowKey].includes(stage),
    loading: [`${rowKey}Loading`, `${rowKey}Popup`].includes(stage),
    complete:
      rowKey === "goals"
        ? ["growthLoading", "growthPopup", "contentLoading", "contentPopup", "complete"].includes(stage)
        : rowKey === "growth"
          ? ["contentLoading", "contentPopup", "complete"].includes(stage)
          : stage === "complete"
  };
}

function renderPlanBuilderCheckIcon() {
  return `
    <svg viewBox="0 0 18 18" aria-hidden="true">
      <circle cx="9" cy="9" r="9" fill="currentColor"></circle>
      <path d="M5.7 9 7.9 11.2 12.6 6.7" fill="none" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  `;
}

function renderPlanBuilderStep() {
  const config = getPlanBuilderConfig();
  const ageRange = getProjectionAgeCopy(state.answers.age);
  const audience = getAudienceLabel();
  const stage = state.planBuilder.stage;
  const popupIndex = state.planBuilder.popupIndex;
  const showContinue = stage === "complete";
  const activeReview =
    config.rows.find((row) => row.stage === stage || stage === row.stage.replace("Loading", "Popup"))?.review ||
    config.rows[2].review;

  app.innerHTML = `
    <div class="screen screen-plan-builder">
      <h2 class="screen-title plan-builder__title">
        Creating your Guided Balance Plan for ${escapeHtml(audience)} ${escapeHtml(ageRange)}
      </h2>

      <div class="plan-builder__list" role="list" aria-label="Plan building progress">
        ${config.rows
          .map((row, index) => {
            const rowState = getPlanBuilderRowState(stage, index);

            if (!rowState.visible) {
              return "";
            }

            if (rowState.complete) {
              return `
                <div class="plan-builder__item plan-builder__item--complete" role="listitem">
                  <div class="plan-builder__item-head">
                    <p class="plan-builder__item-label">${escapeHtml(row.label)}</p>
                    <span class="plan-builder__item-check">${renderPlanBuilderCheckIcon()}</span>
                  </div>
                </div>
              `;
            }

            return `
              <div class="plan-builder__item plan-builder__item--loading" role="listitem">
                <div class="plan-builder__item-head">
                  <p class="plan-builder__item-label">${escapeHtml(row.label)}</p>
                  <span class="plan-builder__item-value">${escapeHtml(row.progressLabel)}</span>
                </div>
                <div class="plan-builder__progress-track" aria-hidden="true">
                  <span class="plan-builder__progress-fill plan-builder__progress-fill--${escapeHtml(row.key)}"></span>
                </div>
              </div>
            `;
          })
          .join("")}
      </div>

      <article class="plan-builder__review">
        <div class="plan-builder__stars" aria-hidden="true">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
        <div class="plan-builder__review-head">
          <h3 class="plan-builder__review-title">${escapeHtml(activeReview.title)}</h3>
          <p class="plan-builder__review-author">${escapeHtml(activeReview.author)}</p>
        </div>
        <p class="plan-builder__review-body">${escapeHtml(activeReview.body)}</p>
      </article>

      ${
        showContinue
          ? `
            <button class="primary-button secondary plan-builder__continue button-continue" id="planBuilderContinue" type="button">
              Continue
            </button>
          `
          : ""
      }

      ${
        popupIndex !== null
          ? `
            <div class="plan-builder__overlay">
              <div class="plan-builder__modal" role="dialog" aria-modal="true" aria-label="Plan question">
                <p class="plan-builder__modal-eyebrow">To move forward, specify</p>
                <p class="plan-builder__modal-question">${escapeHtml(config.popups[popupIndex])}</p>
                <div class="plan-builder__modal-actions">
                  <button class="plan-builder__modal-button" type="button" data-plan-answer="no">No</button>
                  <button class="plan-builder__modal-button" type="button" data-plan-answer="yes">Yes</button>
                </div>
              </div>
            </div>
          `
          : ""
      }
    </div>
  `;

  if (showContinue) {
    document.getElementById("planBuilderContinue").addEventListener("click", () => {
      state.chartReadyStage = 0;
      state.stepIndex += 1;
      render();
    });
  }

  app.querySelectorAll("[data-plan-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      if (popupIndex === 0) {
        setPlanBuilderStage("growthLoading");
        return;
      }

      if (popupIndex === 1) {
        setPlanBuilderStage("contentLoading");
        return;
      }

      setPlanBuilderStage("complete");
    });
  });

  ensurePlanBuilderProgress(stage);
}

function getDisplayName() {
  const firstName = (state.contact.firstName || "").trim();

  if (!firstName) {
    return "Your";
  }

  return firstName.charAt(0).toUpperCase() + firstName.slice(1);
}

function setChartReadyStage(stage) {
  state.chartReadyStage = stage;
  render();
}

function ensureChartReadyProgress(stage) {
  return stage;
}

function startSafetyChartAnimation() {
  const chart = app.querySelector(".screen-safety-chart");
  if (!chart || chart.dataset.animated === "true") {
    return;
  }

  chart.dataset.animated = "true";

  const curve = chart.querySelector(".safety-chart__curve");
  const arrowTip = chart.querySelector(".safety-chart__arrow-tip");
  const arrowMotion = chart.querySelector("#safety-chart-arrow-motion");
  const orangePoint = chart.querySelector(".safety-chart__point--orange");
  const yellowPoint = chart.querySelector(".safety-chart__point--yellow");
  const greenPoint = chart.querySelector(".safety-chart__point--green");
  const weekTwo = chart.querySelector(".safety-chart__week-label--two");
  const weekThree = chart.querySelector(".safety-chart__week-label--three");
  const weekFour = chart.querySelector(".safety-chart__week-label--four");
  const todayTooltip = chart.querySelector(".safety-chart__tooltip--today");
  const afterTooltip = chart.querySelector(".safety-chart__tooltip--after");
  const continueButton = chart.querySelector("#safetyChartContinue");

  schedulePlanBuilder(220, () => {
    todayTooltip?.classList.add("is-visible");
  });

  schedulePlanBuilder(360, () => {
    curve?.classList.add("is-animating");
    arrowTip?.classList.add("is-visible");
    if (arrowMotion && typeof arrowMotion.beginElement === "function") {
      arrowMotion.beginElement();
    }
  });

  schedulePlanBuilder(980, () => {
    orangePoint?.classList.add("is-visible");
    weekTwo?.classList.add("is-visible");
  });

  schedulePlanBuilder(1700, () => {
    yellowPoint?.classList.add("is-visible");
    weekThree?.classList.add("is-visible");
  });

  schedulePlanBuilder(2460, () => {
    greenPoint?.classList.add("is-visible");
    weekFour?.classList.add("is-visible");
    afterTooltip?.classList.add("is-visible");
  });

  schedulePlanBuilder(2660, () => {
    state.chartReadyStage = 4;
    continueButton?.removeAttribute("hidden");
  });
}

function renderSafetyChartStep() {
  const stage = state.chartReadyStage;
  const ageRange = getProjectionAgeCopy(state.answers.age);
  const audience = getAudienceLabel();
  const displayName = getDisplayName();
  const showContinue = stage >= 4;

  app.innerHTML = `
    <div class="screen screen-safety-chart">
      <h2 class="screen-title safety-chart__title">
        ${escapeHtml(displayName)}, your Guided Balance Plan for ${escapeHtml(audience)} ${escapeHtml(ageRange)} is ready!
      </h2>

      <p class="safety-chart__subtitle">Your nervous system’s safety level</p>

      <div class="safety-chart__plot">
        <svg class="safety-chart__svg" viewBox="0 0 520 300" aria-hidden="true">
          <defs>
            <linearGradient id="safety-chart-gradient" x1="58" y1="0" x2="468" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#f18b76" stop-opacity="0.18"></stop>
              <stop offset="52%" stop-color="#edd779" stop-opacity="0.17"></stop>
              <stop offset="100%" stop-color="#8fcb68" stop-opacity="0.18"></stop>
            </linearGradient>
            <linearGradient id="safety-chart-line-gradient" x1="124" y1="204" x2="454" y2="24" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#eb8754"></stop>
              <stop offset="60%" stop-color="#e9c53d"></stop>
              <stop offset="100%" stop-color="#74c348"></stop>
            </linearGradient>
            <path id="safety-chart-curve-path" d="M124 204 C156 204 184 196 214 169 C232 153 244 142 255 132 C292 96 322 58 352 41 C388 27 422 24 454 24"></path>
          </defs>

          <path
            class="safety-chart__area"
            d="M58 240 L58 204 L124 204 C156 204 184 196 214 169 C232 153 244 142 255 132 C292 96 322 58 352 41 C388 27 422 24 454 24 L454 240 Z"
          ></path>

          <line x1="58" y1="240" x2="480" y2="240" class="safety-chart__axis"></line>
          <line x1="58" y1="26" x2="58" y2="240" class="safety-chart__axis"></line>
          <line x1="58" y1="200" x2="480" y2="200" class="safety-chart__grid"></line>
          <line x1="58" y1="150" x2="480" y2="150" class="safety-chart__grid"></line>
          <line x1="58" y1="100" x2="480" y2="100" class="safety-chart__grid"></line>
          <line x1="58" y1="50" x2="480" y2="50" class="safety-chart__grid"></line>

          <path class="safety-chart__segment safety-chart__segment--base" d="M58 204 L124 204"></path>
          <use href="#safety-chart-curve-path" class="safety-chart__curve ${showContinue ? "is-animating is-complete" : ""}"></use>

          <circle cx="124" cy="240" r="6" class="safety-chart__tick-dot"></circle>
          <circle cx="255" cy="240" r="6" class="safety-chart__tick-dot"></circle>
          <circle cx="352" cy="240" r="6" class="safety-chart__tick-dot"></circle>
          <circle cx="454" cy="240" r="6" class="safety-chart__tick-dot"></circle>

          <circle cx="124" cy="204" r="14" class="safety-chart__point safety-chart__point--red"></circle>
          <circle cx="255" cy="132" r="14" class="safety-chart__point safety-chart__point--orange ${showContinue ? "is-visible" : ""}"></circle>
          <circle cx="352" cy="41" r="14" class="safety-chart__point safety-chart__point--yellow ${showContinue ? "is-visible" : ""}"></circle>
          <circle cx="454" cy="24" r="14" class="safety-chart__point safety-chart__point--green ${showContinue ? "is-visible" : ""}"></circle>

          <text x="124" y="262" class="safety-chart__week-label is-visible" text-anchor="middle">WEEK 1</text>
          <text x="255" y="262" class="safety-chart__week-label safety-chart__week-label--two ${showContinue ? "is-visible" : ""}" text-anchor="middle">WEEK 2</text>
          <text x="352" y="262" class="safety-chart__week-label safety-chart__week-label--three ${showContinue ? "is-visible" : ""}" text-anchor="middle">WEEK 3</text>
          <text x="454" y="262" class="safety-chart__week-label safety-chart__week-label--four ${showContinue ? "is-visible" : ""}" text-anchor="middle">WEEK 4</text>

          <g class="safety-chart__arrow-tip ${showContinue ? "is-visible" : ""}" aria-hidden="true">
            <path d="M0 0L16 8L0 16Z" fill="#74c348"></path>
            <animateMotion id="safety-chart-arrow-motion" dur="2.1s" begin="indefinite" fill="freeze" rotate="auto">
              <mpath href="#safety-chart-curve-path"></mpath>
            </animateMotion>
          </g>
        </svg>

        <div class="safety-chart__tooltip safety-chart__tooltip--today ${showContinue ? "is-visible" : ""}">
          Today
        </div>
        <div class="safety-chart__tooltip safety-chart__tooltip--after ${showContinue ? "is-visible" : ""}">
          After using<br>NewMindStart
        </div>
      </div>

      <p class="safety-chart__note">
        *Based on the data of users who log their progress in the app. The chart is a non-customized illustration and results may vary.
      </p>

      <button class="primary-button secondary safety-chart__continue button-continue" id="safetyChartContinue" type="button" ${showContinue ? "" : "hidden"}>
        Continue
      </button>
    </div>
  `;

  document.getElementById("safetyChartContinue").addEventListener("click", () => {
    state.stepIndex += 1;
    render();
  });

  ensureChartReadyProgress(stage);

  if (!showContinue) {
    startSafetyChartAnimation();
  }
}

function getScratchDiscountValue() {
  return 61;
}

function fireScratchConfetti() {
  if (typeof confetti !== "function") return;

  const colors = ["#ffbf2f", "#39bdf0", "#8b5cf6", "#ff4e7a", "#7cf144", "#ff6b35"];
  const shared = { colors, shapes: ["square"], scalar: 1.1, gravity: 0.9, ticks: 350 };

  // Left party popper
  confetti({ ...shared, particleCount: 90, angle: 62, spread: 55, origin: { x: 0.08, y: 1 } });
  // Right party popper
  confetti({ ...shared, particleCount: 90, angle: 118, spread: 55, origin: { x: 0.92, y: 1 } });

  // Second wave
  setTimeout(() => {
    confetti({ ...shared, particleCount: 50, angle: 70, spread: 45, origin: { x: 0.18, y: 0.95 } });
    confetti({ ...shared, particleCount: 50, angle: 110, spread: 45, origin: { x: 0.82, y: 0.95 } });
  }, 220);
}

function unlockScratchCard() {
  if (state.scratchCard.revealed) {
    return;
  }

  state.scratchCard.revealed = true;
  state.scratchCard.popupOpen = true;
  render();
}

function getCheckoutOfferData() {
  const ageRange = getProjectionAgeCopy(state.answers.age);
  const audience = getAudienceLabel();
  const discount = getScratchDiscountValue();
  const expired = state.checkout.expired;
  const plans = [
    {
      id: "trial",
      label: "7-day trial",
      originalPrice: expired ? null : "$17.77",
      currentPrice: expired ? "$17.77" : "$6.90",
      originalDailyPrice: expired ? null : "$2.53",
      dailyPrice: expired ? "$2.53" : "$0.98",
      selected: state.checkout.selectedPlan === "trial",
      badge: ""
    },
    {
      id: "core",
      label: "4-week plan",
      originalPrice: expired ? null : "$38.95",
      currentPrice: expired ? "$38.95" : "$15.20",
      originalDailyPrice: expired ? null : "$1.29",
      dailyPrice: expired ? "$1.29" : "$0.50",
      selected: state.checkout.selectedPlan === "core",
      badge: "Most popular"
    },
    {
      id: "extended",
      label: "12-week plan",
      originalPrice: expired ? null : "$94.85",
      currentPrice: expired ? "$94.85" : "$41.60",
      originalDailyPrice: expired ? null : "$1.05",
      dailyPrice: expired ? "$1.05" : "$0.46",
      selected: state.checkout.selectedPlan === "extended",
      badge: ""
    }
  ];

  const selectedPlan = plans.find((plan) => plan.selected) || plans[1];
  const legalCopy = expired
    ? `By clicking "GET MY PLAN", you agree to automatic subscription renewal. ${selectedPlan.label.toUpperCase()} is billed at ${selectedPlan.currentPrice}. Cancel via email: hello@newmindstart.com.`
    : selectedPlan.id === "trial"
      ? 'By clicking "GET MY PLAN", you agree to a 1-week trial at $17.77, converting to a $38.95/month auto-renewing subscription if not canceled. Cancel via email: hello@newmindstart.com.'
      : selectedPlan.id === "core"
        ? 'By clicking "GET MY PLAN", you agree to automatic subscription renewal. First month is $38.95, then $38.95/month. Cancel via email: hello@newmindstart.com.'
        : 'By clicking "GET MY PLAN", you agree to automatic subscription renewal. First three months are $94.85, then $94.85 per three months. Cancel via email: hello@newmindstart.com.';

  return {
    ageRange,
    audience,
    discount,
    expired,
    plans,
    selectedPlan,
    legalCopy,
    goals: [
      "A balanced, regulated nervous system",
      "Body feels physically calm and safe",
      "Emotional stability and resilience",
      "Quiet the constant noise of overthinking",
      "Steady, consistent energy all day",
      "Regained natural drive and motivation"
    ],
    risks: [
      "Stuck in survival mode",
      "Constantly tired and drained",
      "Feeling constantly on edge",
      "Feeling wired but tired",
      "Frozen by overwhelm",
      "Body tension and aches"
    ],
    wins: [
      "Feeling deeply calm and steady",
      "More emotional resilience day to day",
      "Natural motivation returning",
      "Deeper rest at night",
      "More present with loved ones",
      "A more relaxed, comfortable body"
    ],
    faqs: [
      {
        title: "What if I do not have enough willpower?",
        body:
          "Willpower usually fades when your nervous system stays in survival mode. This plan helps reduce the internal stress load first, so consistency starts feeling more natural."
      },
      {
        title: "What if I get distracted easily?",
        body:
          "Constant distraction can be a stress response. Guided Balance Plan focuses on calming the system beneath that urge, so attention has a better chance to settle."
      },
      {
        title: "What if I feel too overwhelmed to begin?",
        body:
          "The plan uses small, realistic steps that do not overload your capacity. That makes it easier to start without triggering even more pressure."
      }
    ]
  };
}

function renderCheckoutReviewCards() {
  return getPlanBuilderConfig()
    .rows.map(
      (row) => `
        <article class="checkout-review-card">
          <div class="checkout-review-card__stars" aria-hidden="true">★★★★★</div>
          <div class="checkout-review-card__head">
            <h4 class="checkout-review-card__title">${escapeHtml(row.review.title)}</h4>
            <p class="checkout-review-card__author">${escapeHtml(row.review.author)}</p>
          </div>
          <p class="checkout-review-card__body">${escapeHtml(row.review.body)}</p>
        </article>
      `
    )
    .join("");
}

function renderCheckoutPlanOptions(offer) {
  return offer.plans
    .map(
      (plan) => `
        <article class="checkout-plan-option ${plan.selected ? "is-selected" : ""}" data-checkout-plan="${escapeHtml(plan.id)}">
          ${
            plan.badge
              ? `<div class="checkout-plan-option__badge">${escapeHtml(plan.badge)}</div>`
              : ""
          }
          <div class="checkout-plan-option__main">
            <div class="checkout-plan-option__copy">
              <div class="checkout-plan-option__heading">
                <span class="checkout-plan-option__radio ${plan.selected ? "is-selected" : ""}" aria-hidden="true"></span>
                <p class="checkout-plan-option__label">${escapeHtml(plan.label)}</p>
              </div>
              <div class="checkout-plan-option__price-line">
                ${plan.originalPrice ? `<span class="checkout-plan-option__original">${escapeHtml(plan.originalPrice)}</span>` : ""}
                <span class="checkout-plan-option__current">${escapeHtml(plan.currentPrice)}</span>
              </div>
            </div>
            <div class="checkout-plan-option__price-right">
              ${plan.originalDailyPrice ? `<span class="checkout-plan-option__daily-was">${escapeHtml(plan.originalDailyPrice)}</span>` : ""}
              <div class="checkout-plan-option__daily-wrap">
                <svg class="checkout-plan-option__daily-arrow" viewBox="0 0 17 48" fill="none" aria-hidden="true">
                  <path d="M0.812191 26.6412C-0.261685 25.2243 -0.271467 23.2686 0.788183 21.841L17 0L17 48Z" fill="#ecebf3"/>
                </svg>
                <div class="checkout-plan-option__daily-tag">
                  <span class="checkout-plan-option__daily-currency">$</span>
                  <span class="checkout-plan-option__daily-price">${escapeHtml(plan.dailyPrice.replace("$", "").split(".")[0])}</span>
                  <div class="checkout-plan-option__daily-stack">
                    <span class="checkout-plan-option__daily-decimal">${escapeHtml(plan.dailyPrice.split(".")[1] || "00")}</span>
                    <span class="checkout-plan-option__daily-copy">per day</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderChecklistItems(items, positive = true) {
  return items
    .map(
      (item) => `
        <li class="checkout-checklist__item ${positive ? "is-positive" : "is-negative"}">
          <span class="checkout-checklist__icon" aria-hidden="true">${positive ? "✓" : "×"}</span>
          <span>${escapeHtml(item)}</span>
        </li>
      `
    )
    .join("");
}

function renderCheckoutStep() {
  const offer = getCheckoutOfferData();
  const displayName = getDisplayName();

  const extendedPlan = offer.plans.find((p) => p.id === "extended");
  const upsellOriginal = "$94.85";
  const upsellCurrent = extendedPlan.currentPrice;
  const upsellPct = Math.round((1 - parseFloat(upsellCurrent.replace("$", "")) / 94.85) * 100);
  const upsellLegal = `By clicking "Claim special offer", you agree to automatic subscription renewal. First three months are ${upsellCurrent}, then $94.85 per three months. Cancel via email: hello@newmindstart.com.`;
  const showUpsell = !offer.expired;

  app.innerHTML = `
    <div class="screen screen-checkout-offer">
      <section class="checkout-comparison">
        <div class="checkout-comparison__cards">
          <article class="checkout-compare-card">
            <div class="checkout-compare-card__hero">
              <div class="checkout-state-card__label">Now</div>
              <img class="checkout-state-card__image" src="${escapeHtml(getAssetUrl("./assets/scemagirl.png"))}" alt="Current state illustration" />
            </div>
            <div class="checkout-state-card">
              <div class="checkout-state-card__stats">
                <div class="checkout-state-card__item">
                  <p class="checkout-state-card__title">Nervous System</p>
                  <p class="checkout-state-card__value">In Survival Mode</p>
                </div>
                <div class="checkout-state-card__item">
                  <p class="checkout-state-card__title">Emotional stability</p>
                  <p class="checkout-state-card__value">Depleted</p>
                  <div class="checkout-progress-line" aria-hidden="true">
                    <span class="is-active"></span><span></span><span></span>
                  </div>
                </div>
                <div class="checkout-state-card__item">
                  <p class="checkout-state-card__title">Energy level</p>
                  <p class="checkout-state-card__value">Drained</p>
                  <div class="checkout-energy-slider" aria-hidden="true">
                    <span class="checkout-energy-slider__fill" style="width:25%;"></span>
                    <span class="checkout-energy-slider__thumb" style="left:25%;"></span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <div class="checkout-comparison__arrowflow" aria-hidden="true">
            <svg class="checkout-comparison__arrow checkout-comparison__arrow--one" viewBox="0 0 64 220">
              <path d="M1.15223 3.82091C0.189842 2.11236 1.42442 0 3.38537 0C4.31079 0 5.16434 0.498861 5.61851 1.30516L61.3054 100.168C64.7373 106.26 64.7378 113.703 61.3068 119.796L5.61829 218.695C5.16426 219.501 4.3108 220 3.38545 220C1.42469 220 0.190404 217.888 1.15304 216.179L55.4429 119.843C58.8772 113.749 58.8779 106.303 55.4449 100.208L1.15223 3.82091Z"></path>
            </svg>
            <svg class="checkout-comparison__arrow checkout-comparison__arrow--two" viewBox="0 0 64 220">
              <path d="M1.15223 3.82091C0.189842 2.11236 1.42442 0 3.38537 0C4.31079 0 5.16434 0.498861 5.61851 1.30516L61.3054 100.168C64.7373 106.26 64.7378 113.703 61.3068 119.796L5.61829 218.695C5.16426 219.501 4.3108 220 3.38545 220C1.42469 220 0.190404 217.888 1.15304 216.179L55.4429 119.843C58.8772 113.749 58.8779 106.303 55.4449 100.208L1.15223 3.82091Z"></path>
            </svg>
            <svg class="checkout-comparison__arrow checkout-comparison__arrow--three" viewBox="0 0 64 220">
              <path d="M1.15223 3.82091C0.189842 2.11236 1.42442 0 3.38537 0C4.31079 0 5.16434 0.498861 5.61851 1.30516L61.3054 100.168C64.7373 106.26 64.7378 113.703 61.3068 119.796L5.61829 218.695C5.16426 219.501 4.3108 220 3.38545 220C1.42469 220 0.190404 217.888 1.15304 216.179L55.4429 119.843C58.8772 113.749 58.8779 106.303 55.4449 100.208L1.15223 3.82091Z"></path>
            </svg>
            <svg class="checkout-comparison__arrow checkout-comparison__arrow--four" viewBox="0 0 64 220">
              <path d="M1.15223 3.82091C0.189842 2.11236 1.42442 0 3.38537 0C4.31079 0 5.16434 0.498861 5.61851 1.30516L61.3054 100.168C64.7373 106.26 64.7378 113.703 61.3068 119.796L5.61829 218.695C5.16426 219.501 4.3108 220 3.38545 220C1.42469 220 0.190404 217.888 1.15304 216.179L55.4429 119.843C58.8772 113.749 58.8779 106.303 55.4449 100.208L1.15223 3.82091Z"></path>
            </svg>
          </div>

          <article class="checkout-compare-card">
            <div class="checkout-compare-card__hero">
              <div class="checkout-state-card__label checkout-state-card__label--goal">Your Goal</div>
              <img class="checkout-state-card__image" src="${escapeHtml(getAssetUrl("./assets/happy.png"))}" alt="Desired future state illustration" />
            </div>
            <div class="checkout-state-card">
              <div class="checkout-state-card__stats">
                <div class="checkout-state-card__item">
                  <p class="checkout-state-card__title">Nervous System</p>
                  <p class="checkout-state-card__value">Balanced</p>
                </div>
                <div class="checkout-state-card__item">
                  <p class="checkout-state-card__title">Emotional stability</p>
                  <p class="checkout-state-card__value">Resilient</p>
                  <div class="checkout-progress-line" aria-hidden="true">
                    <span class="is-active"></span><span class="is-active"></span><span class="is-active"></span>
                  </div>
                </div>
                <div class="checkout-state-card__item">
                  <p class="checkout-state-card__title">Energy level</p>
                  <p class="checkout-state-card__value">Restored</p>
                  <div class="checkout-energy-slider is-active" aria-hidden="true">
                    <span class="checkout-energy-slider__fill" style="width:85%;"></span>
                    <span class="checkout-energy-slider__thumb" style="left:85%;"></span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section class="checkout-price-section" id="checkoutPlanAnchor">
        <h2 class="screen-title checkout-price-section__title">
          ${escapeHtml(displayName)}, your Guided Balance Plan for ${escapeHtml(offer.audience)} ${escapeHtml(offer.ageRange)} is ready!
        </h2>

        <div class="checkout-result-chips">
          <article class="checkout-result-chip">
            <img class="checkout-result-chip__icon" src="assets/FunctionalFreeze.png" alt="" aria-hidden="true">
            <div>
              <p class="checkout-result-chip__label">Survival response</p>
              <p class="checkout-result-chip__value">Functional Freeze</p>
            </div>
          </article>
          <article class="checkout-result-chip">
            <img class="checkout-result-chip__icon" src="assets/Bodyvitality.png" alt="" aria-hidden="true">
            <div>
              <p class="checkout-result-chip__label">Goal</p>
              <p class="checkout-result-chip__value">Body vitality</p>
            </div>
          </article>
        </div>

        <div class="checkout-plan-list">
          ${renderCheckoutPlanOptions(offer)}
        </div>

        <a class="primary-button checkout-main-cta button-continue" href="./paywall.html">Get my plan</a>

        <p class="checkout-legal">
          ${escapeHtml(offer.legalCopy)}
        </p>

        <div class="checkout-trust-row">
          <img class="checkout-payment-image" src="${escapeHtml(getAssetUrl("./assets/pay.png"))}" alt="Secure payment methods" />
        </div>
      </section>

      <section class="checkout-goals">
        <h3 class="checkout-section-title">Our goals</h3>
        <ul class="checkout-checklist">
          ${renderChecklistItems(offer.goals)}
        </ul>
      </section>

      <section class="checkout-featured">
        <h3 class="checkout-section-title">As featured in</h3>
        <img class="checkout-featured__image" src="${escapeHtml(getAssetUrl("./assets/magasine.png"))}" alt="Featured publication logos" />
      </section>

      <section class="checkout-stats">
        <h3 class="checkout-section-title">People just like you achieved great results using our Guided Balance Plan</h3>
        <img class="checkout-stats__image" src="${escapeHtml(getAssetUrl("./assets/rainbow.png"))}" alt="Results graph" />
        <div class="checkout-stats__items">
          <article><strong>83%</strong><span>of users noticed stronger nervous system regulation after 6 weeks</span></article>
          <article><strong>77%</strong><span>began from a similar level of dysregulation as you</span></article>
          <article><strong>45%</strong><span>recognized the same signs of survival mode you reported</span></article>
        </div>
      </section>

      <section class="checkout-life-grid">
        <article class="checkout-life-card">
          <h3 class="checkout-life-card__title">How life might feel without NewMindStart</h3>
          <ul class="checkout-checklist checkout-checklist--negative">
            ${renderChecklistItems(offer.risks, false)}
          </ul>
        </article>
        <article class="checkout-life-card checkout-life-card--positive">
          <h3 class="checkout-life-card__title">How life might feel with NewMindStart</h3>
          <ul class="checkout-checklist">
            ${renderChecklistItems(offer.wins)}
          </ul>
        </article>
      </section>

      <section class="checkout-award">
        <p class="checkout-award__copy">NewMindStart is a 2026 Best Mobile App Award winner.</p>
      </section>

      <section class="checkout-faq">
        <h3 class="checkout-section-title">People often ask</h3>
        <div class="checkout-faq__list">
          ${offer.faqs
            .map(
              (faq) => `
                <article class="checkout-faq__item">
                  <div class="checkout-faq__mark">?</div>
                  <div>
                    <h4 class="checkout-faq__title">${escapeHtml(faq.title)}</h4>
                    <p class="checkout-faq__body">${escapeHtml(faq.body)}</p>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="checkout-reviews">
        <h3 class="checkout-section-title">Users love our plans</h3>
        <p class="checkout-reviews__copy">Here’s what people are saying about NewMindStart.</p>
        <div class="checkout-review-list">
          ${renderCheckoutReviewCards()}
        </div>
      </section>

      <section class="checkout-price-section checkout-price-section--repeat">
        <h3 class="checkout-section-title">Your Guided Balance Plan for ${escapeHtml(offer.audience)} ${escapeHtml(offer.ageRange)}is ready!</h3>
        <div class="checkout-plan-list">
          ${renderCheckoutPlanOptions(offer)}
        </div>
        <a class="primary-button checkout-main-cta button-continue" href="./paywall.html">Get my plan</a>
        <p class="checkout-legal">${escapeHtml(offer.legalCopy)}</p>
        <div class="checkout-trust-row">
          <img class="checkout-payment-image" src="${escapeHtml(getAssetUrl("./assets/pay.png"))}" alt="Secure payment methods" />
        </div>
      </section>

      <section class="checkout-moneyback">
        <div class="checkout-moneyback__content">
          <h3 class="checkout-moneyback__title">30-day money-back guarantee</h3>
          <p class="checkout-moneyback__copy">Our plan is backed by a money-back guarantee. If you reach out within 30 days of purchase, we will give you a full refund.</p>
          <a class="checkout-moneyback__link" href="https://account.newmindstart.com/cancellation-refund-policies" target="_blank" rel="noopener noreferrer">Learn more</a>
        </div>
        <span class="checkout-moneyback__badge" aria-hidden="true">
          <svg viewBox="0 0 64 84" fill="none">
            <path d="M16 50L8 76L32 63L56 76L48 50Z" fill="#e04500"/>
            <circle cx="32" cy="28" r="26" fill="#ff7233"/>
            <circle cx="32" cy="28" r="19" fill="none" stroke="rgba(255,255,255,0.55)" stroke-width="1.5"/>
            <path d="M19 28L28 37L45 20" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </section>

    </div>
  `;

  app.querySelectorAll("[data-checkout-plan]").forEach((element) => {
    element.addEventListener("click", () => {
      const { checkoutPlan } = element.dataset;
      if (!checkoutPlan || checkoutPlan === state.checkout.selectedPlan) {
        return;
      }

      state.checkout.selectedPlan = checkoutPlan;
      render();
    });
  });

  app.querySelectorAll(".checkout-main-cta").forEach((cta) => {
    cta.addEventListener("click", (e) => {
      if (showUpsell && (state.checkout.selectedPlan === "trial" || state.checkout.selectedPlan === "core")) {
        e.preventDefault();

        const overlay = document.createElement("div");
        overlay.className = "upsell-overlay";
        overlay.setAttribute("role", "dialog");
        overlay.setAttribute("aria-modal", "true");
        overlay.setAttribute("aria-label", "Special offer");
        overlay.innerHTML = `
          <div class="upsell-modal">
            <p class="upsell-modal__eyebrow">Special offer</p>
            <h2 class="upsell-modal__title">Upgrade to 12-WEEK PLAN and save</h2>
            <div class="upsell-ticket">
              <div class="upsell-ticket__top">
                <div class="upsell-ticket__pct-row">
                  <span class="upsell-ticket__pct">${upsellPct}</span><span class="upsell-ticket__pct-sym">%</span>
                </div>
                <span class="upsell-ticket__off">OFF</span>
              </div>
              <div class="upsell-ticket__mid" aria-hidden="true">
                <span class="upsell-ticket__notch"></span>
                <span class="upsell-ticket__dashes"></span>
                <span class="upsell-ticket__notch"></span>
              </div>
              <div class="upsell-ticket__bottom">
                <span class="upsell-ticket__was">${escapeHtml(upsellOriginal)}</span>
                <span class="upsell-ticket__now">${escapeHtml(upsellCurrent)}</span>
              </div>
            </div>
            <button class="primary-button upsell-modal__claim" type="button">Claim special offer</button>
            <button class="upsell-modal__decline" type="button">No, thanks</button>
            <hr class="upsell-modal__rule">
            <p class="upsell-modal__legal">${escapeHtml(upsellLegal)}</p>
          </div>
        `;

        document.body.appendChild(overlay);

        overlay.querySelector(".upsell-modal__claim").addEventListener("click", () => {
          state.checkout.selectedPlan = "extended";
          window.location.href = "./paywall.html";
        });

        overlay.querySelector(".upsell-modal__decline").addEventListener("click", () => {
          overlay.remove();
          window.location.href = "./paywall.html";
        });
      }
    });
  });
}

function setupScratchCanvas() {
  const canvas = document.getElementById("scratchCanvas");
  const card = document.getElementById("scratchCardSurface");

  if (!canvas || !card || state.scratchCard.revealed) {
    return;
  }

  const rect = card.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.max(1, Math.round(rect.width * ratio));
  canvas.height = Math.max(1, Math.round(rect.height * ratio));

  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  ctx.scale(ratio, ratio);

  const width = rect.width;
  const height = rect.height;
  const radius = 24;

  ctx.fillStyle = "#f0c376";
  ctx.strokeStyle = "#d8ae64";
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.moveTo(radius, 0);
  ctx.lineTo(width - radius, 0);
  ctx.quadraticCurveTo(width, 0, width, radius);
  ctx.lineTo(width, height / 2 - 20);
  ctx.arc(width, height / 2, 20, -Math.PI / 2, Math.PI / 2, false);
  ctx.lineTo(width, height - radius);
  ctx.quadraticCurveTo(width, height, width - radius, height);
  ctx.lineTo(radius, height);
  ctx.quadraticCurveTo(0, height, 0, height - radius);
  ctx.lineTo(0, height / 2 + 20);
  ctx.arc(0, height / 2, 20, Math.PI / 2, -Math.PI / 2, false);
  ctx.lineTo(0, radius);
  ctx.quadraticCurveTo(0, 0, radius, 0);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "rgba(255, 255, 255, 0.96)";
  ctx.font = "600 18px Satoshi, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Scratch your discount", width / 2, height / 2 + 8);

  let drawing = false;
  let scratchChecks = 0;

  function getPosition(event) {
    const bounds = canvas.getBoundingClientRect();
    return {
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top
    };
  }

  function eraseAt(position) {
    ctx.save();
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(position.x, position.y, 26, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function checkRevealProgress() {
    scratchChecks += 1;

    if (scratchChecks % 8 !== 0) {
      return;
    }

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let cleared = 0;

    for (let index = 3; index < imageData.length; index += 16) {
      if (imageData[index] < 40) {
        cleared += 1;
      }
    }

    const sampleCount = imageData.length / 16;
    if (sampleCount && cleared / sampleCount > 0.36) {
      unlockScratchCard();
    }
  }

  function handlePointerDown(event) {
    event.preventDefault();
    drawing = true;
    canvas.setPointerCapture(event.pointerId);
    eraseAt(getPosition(event));
    checkRevealProgress();
  }

  function handlePointerMove(event) {
    if (!drawing) {
      return;
    }

    event.preventDefault();
    eraseAt(getPosition(event));
    checkRevealProgress();
  }

  function handlePointerUp(event) {
    drawing = false;
    if (canvas.hasPointerCapture(event.pointerId)) {
      canvas.releasePointerCapture(event.pointerId);
    }
    checkRevealProgress();
  }

  canvas.addEventListener("pointerdown", handlePointerDown);
  canvas.addEventListener("pointermove", handlePointerMove);
  canvas.addEventListener("pointerup", handlePointerUp);
  canvas.addEventListener("pointercancel", handlePointerUp);
  canvas.addEventListener("pointerleave", () => {
    drawing = false;
  });
}

function renderScratchCardStep() {
  const ageRange = getProjectionAgeCopy(state.answers.age);
  const audience = getAudienceLabel();
  const displayName = getDisplayName();
  const discount = getScratchDiscountValue();
  const showPopup = state.scratchCard.popupOpen;

  app.innerHTML = `
    <div class="screen screen-scratch-card">
      <div class="scratch-card__badge">Get your gift</div>

      <h2 class="screen-title scratch-card__title">
        ${escapeHtml(displayName)}, Scratch &amp; Save on your personal Guided Balance Plan for ${escapeHtml(audience)} ${escapeHtml(ageRange)}
      </h2>

      <p class="scratch-card__copy">A little extra support, right when you need it.</p>

      <div class="scratch-card__surface-wrap">
        <div class="scratch-card__surface ${state.scratchCard.revealed ? "is-revealed" : ""}" id="scratchCardSurface">
          <div class="scratch-card__reward">
            <p class="scratch-card__reward-label">Your discount is</p>
            <p class="scratch-card__reward-value">${escapeHtml(String(discount))}%</p>
            <p class="scratch-card__reward-copy">off your personal Guided Balance Plan</p>
          </div>
          ${
            state.scratchCard.revealed
              ? `
                <div class="scratch-card__celebration" aria-hidden="true">
                  <span class="scratch-card__emoji scratch-card__emoji--one">🎉</span>
                  <span class="scratch-card__emoji scratch-card__emoji--two">✨</span>
                  <span class="scratch-card__emoji scratch-card__emoji--three">🥳</span>
                  <span class="scratch-card__confetti scratch-card__confetti--one"></span>
                  <span class="scratch-card__confetti scratch-card__confetti--two"></span>
                  <span class="scratch-card__confetti scratch-card__confetti--three"></span>
                  <span class="scratch-card__confetti scratch-card__confetti--four"></span>
                  <span class="scratch-card__confetti scratch-card__confetti--five"></span>
                </div>
              `
              : `
                <canvas class="scratch-card__canvas" id="scratchCanvas"></canvas>
              `
          }
        </div>
      </div>

      ${
        showPopup
          ? `
            <div class="scratch-card__overlay">
              <div class="scratch-card__modal" role="dialog" aria-modal="true" aria-label="Discount unlocked">
                <div class="scratch-card__modal-burst" aria-hidden="true">
                  <span class="scratch-card__modal-confetti scratch-card__modal-confetti--one"></span>
                  <span class="scratch-card__modal-confetti scratch-card__modal-confetti--two"></span>
                  <span class="scratch-card__modal-confetti scratch-card__modal-confetti--three"></span>
                  <span class="scratch-card__modal-confetti scratch-card__modal-confetti--four"></span>
                  <span class="scratch-card__modal-confetti scratch-card__modal-confetti--five"></span>
                  <span class="scratch-card__modal-confetti scratch-card__modal-confetti--six"></span>
                  <span class="scratch-card__modal-confetti scratch-card__modal-confetti--seven"></span>
                  <span class="scratch-card__modal-confetti scratch-card__modal-confetti--eight"></span>
                  <span class="scratch-card__modal-streamer scratch-card__modal-streamer--one"></span>
                  <span class="scratch-card__modal-streamer scratch-card__modal-streamer--two"></span>
                  <span class="scratch-card__modal-streamer scratch-card__modal-streamer--three"></span>
                </div>
                <p class="scratch-card__modal-title">Woo hoo!</p>
                <p class="scratch-card__modal-copy">Your discount is</p>
                <p class="scratch-card__modal-value">${escapeHtml(String(discount))}% off</p>
                <p class="scratch-card__modal-note">Your promo code will be applied automatically in the next step.</p>
                <button class="primary-button secondary scratch-card__continue button-continue" id="scratchCardContinue" type="button">
                  Continue
                </button>
              </div>
            </div>
          `
          : ""
      }
    </div>
  `;

  setupScratchCanvas();

  if (showPopup) {
    document.getElementById("scratchCardContinue").addEventListener("click", () => {
      if (!state.checkout.startedAt) {
        state.checkout.startedAt = Date.now();
      }
      state.stepIndex += 1;
      render();
    });

    setTimeout(fireScratchConfetti, 80);
  }
}

function renderOutroStep(index) {
  const step = outroSteps[index];

  if (step.type === "expert") {
    renderExpertStep();
    return;
  }

  if (step.type === "socialproof") {
    renderSocialProofStep(step);
    return;
  }

  if (step.type === "community") {
    renderCommunityStep(step);
    return;
  }

  if (step.type === "email") {
    renderEmailStep();
    return;
  }

  if (step.type === "summary") {
    renderSummaryStep();
    return;
  }

  if (step.type === "growthProjection") {
    renderGrowthProjectionStep();
    return;
  }

  if (step.type === "planBuilder") {
    renderPlanBuilderStep();
    return;
  }

  if (step.type === "safetyChart") {
    renderSafetyChartStep();
    return;
  }

  if (step.type === "scratchCard") {
    renderScratchCardStep();
    return;
  }

  if (step.type === "checkout") {
    renderCheckoutStep();
    return;
  }

  renderFirstNameStep();
}

function updateChrome() {
  const isQuestionFlow =
    state.stepIndex >= introSteps.length &&
    state.stepIndex < introSteps.length + questions.length;
  const isPostQuizFlow =
    state.stepIndex >= introSteps.length + questions.length &&
    state.stepIndex < introSteps.length + questions.length + outroSteps.length;
  const isIntroFlow = state.stepIndex < introSteps.length;
  const isCheckoutFlow = isCheckoutStepActive();
  const currentQuestionIndex = state.stepIndex - introSteps.length;
  const currentQuestion =
    currentQuestionIndex >= 0 && currentQuestionIndex < questions.length ? questions[currentQuestionIndex] : null;
  const showQuestionCounter = isQuestionFlow && currentQuestion?.type !== "evidence";
  const showProgress = isQuestionFlow && currentQuestion?.type !== "evidence";

  progressWrap.classList.toggle("is-hidden", !showProgress);
  topBar.classList.remove("is-hidden");
  pageShell.classList.remove("page-shell--no-header");
  headerCheckoutUtility.hidden = true;
  headerCheckoutUtility.setAttribute("hidden", "");
  topBar.classList.toggle("top-bar--intro", isIntroFlow);
  topBar.classList.toggle("top-bar--quiz", isQuestionFlow);
  topBar.classList.toggle("top-bar--post", isPostQuizFlow);
  topBar.classList.toggle("top-bar--checkout", isCheckoutFlow);
  backButton.hidden = isCheckoutFlow || !(isQuestionFlow || isPostQuizFlow);
  backButton.disabled = state.stepIndex <= 0;
  menuToggle.hidden = !isIntroFlow && !isCheckoutFlow;
  headerStepCount.hidden = !showQuestionCounter;

  if (!isIntroFlow) {
    setMenuOpen(false);
  }

  if (isCheckoutFlow) {
    menuToggle.hidden = true;
    headerStepCount.hidden = true;
    headerCheckoutUtility.hidden = false;
    headerCheckoutUtility.removeAttribute("hidden");
  }
}

function render() {
  clearPlanBuilderTimers();
  clearCheckoutTimer();
  updateChrome();
  updateProgress();

  if (state.stepIndex < introSteps.length) {
    const step = introSteps[state.stepIndex];
    if (step.type === "gender") {
      renderGenderStep(step);
      return;
    }

    if (step.type === "choice") {
      renderChoiceStep(step);
      return;
    }

    if (step.type === "socialproof") {
      renderSocialProofStep(step);
      return;
    }

    renderWelcomeStep(step);
    return;
  }

  const questionIndex = state.stepIndex - introSteps.length;
  if (questionIndex < questions.length) {
    renderQuestionStep(questionIndex);
    return;
  }

  renderOutroStep(questionIndex - questions.length);

  if (isCheckoutStepActive()) {
    startCheckoutTimer();
  }
}

function setMenuOpen(isOpen) {
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  siteMenu.setAttribute("aria-hidden", String(!isOpen));
  siteMenu.classList.toggle("is-open", isOpen);
  menuOverlay.hidden = !isOpen;
  menuOverlay.classList.toggle("is-open", isOpen);
}

function resetQuiz() {
  clearPlanBuilderTimers();
  clearCheckoutTimer();
  state.stepIndex = 0;
  state.answers.gender = null;
  state.answers.age = null;
  state.contact.email = "";
  state.contact.firstName = "";
  state.formErrors.email = "";
  state.formErrors.firstName = "";
  state.questionScores = Array(questions.length).fill(null);
  state.multiAnswers = {};
  state.multiInputs = {};
  state.planBuilder.stage = "goalsLoading";
  state.planBuilder.popupIndex = null;
  state.chartReadyStage = 0;
  state.scratchCard.revealed = false;
  state.scratchCard.popupOpen = false;
  state.checkout.startedAt = null;
  state.checkout.expired = false;
  state.checkout.selectedPlan = "core";
  render();
}

backButton.addEventListener("click", () => {
  if (state.stepIndex > 0) {
    state.stepIndex -= 1;
    render();
  }
});
menuToggle.addEventListener("click", () => setMenuOpen(true));
menuClose.addEventListener("click", () => setMenuOpen(false));
menuOverlay.addEventListener("click", () => setMenuOpen(false));
siteMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

logoLink.addEventListener("click", (event) => {
  event.preventDefault();
  setMenuOpen(false);
  resetQuiz();
});

headerCheckoutButton.addEventListener("click", () => {
  if (!isCheckoutStepActive()) {
    return;
  }
  window.location.href = "./paywall.html";
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuOpen(false);
  }
});

render();
