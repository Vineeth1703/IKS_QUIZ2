// app.js — Final merged, cleaned, ready-to-run quiz script
// Contains: allQuizData (unit1, unit2, unit3), quiz logic, practice & review modes.
// NOTE: Some of your original question arrays were truncated in the files you pasted.
// I preserved the provided questions and left clear placeholders where you can paste the rest.

/* ===========================================
   All quiz data
   - If you want to expand unit1/unit2/unit3, paste additional question objects
     inside their arrays (each item: { question, options: [...], answer, explanation }).
   =========================================== */
const allQuizData = {
  unit1: [
    {
      question: "What major river system provided fertile land for early settlements in ancient India?",
      options: ["Indus River", "Nile River", "Tigris-Euphrates River", "Yellow River"],
      answer: "Indus River",
      explanation:
        "The Indus River and its tributaries created a large, fertile floodplain, ideal for agriculture, which supported the rise of the Indus Valley Civilization.",
    },
    {
      question: "The Harappan civilization was located in which present-day country?",
      options: ["Pakistan", "India", "Bangladesh", "Sri Lanka"],
      answer: "Pakistan",
      explanation:
        "The major sites of the Harappan civilization, such as Harappa and Mohenjo-Daro, are located in modern-day Pakistan.",
    },
    {
      question: "The Indus Valley Civilization is also known as the __________.",
      options: ["Harappan Civilization", "Aryan Civilization", "Mughal Empire", "Gupta Dynasty"],
      answer: "Harappan Civilization",
      explanation: "It is named after Harappa, the first city of this civilization to be excavated in the 1920s.",
    },
    {
      question: "Which region of ancient India is considered the birthplace of Hinduism?",
      options: ["Punjab", "Rajasthan", "Gujarat", "Uttar Pradesh"],
      answer: "Punjab",
      explanation:
        "The Punjab region, or the 'land of five rivers', is where the Vedas, the earliest scriptures of Hinduism, are believed to have been composed.",
    },
    {
      question: "The ancient Indian city of Varanasi is situated on the banks of which river?",
      options: ["Ganges", "Yamuna", "Saraswati", "Brahmaputra"],
      answer: "Ganges",
      explanation:
        "Varanasi, one of the oldest continuously inhabited cities in the world, is located on the western bank of the holy Ganges River.",
    },
    {
      question: "Which of the following ancient Indian cities was a major center of learning and education?",
      options: ["Takṣaśilā", "Mathura", "Ayodhya", "Pataliputra"],
      answer: "Takṣaśilā",
      explanation:
        "Takṣaśilā (Taxila) was a renowned ancient center of learning, attracting students from various parts of the world.",
    },
    {
      question:
        "Which ancient Indian university was renowned for its teachings in various fields, including philosophy and Buddhism?",
      options: ["Nalanda University", "Taxila University", "Vikramshila University", "Pushpagiri University"],
      answer: "Nalanda University",
      explanation:
        "Nalanda Mahavihara (University) in modern-day Bihar was a celebrated Buddhist monastery and a great center of learning for centuries.",
    },
    {
      question: "The ancient Indian education system primarily emphasized the study of __________.",
      options: ["All of the above", "Mathematics", "Philosophy", "Medicine"],
      answer: "All of the above",
      explanation:
        "The ancient system was holistic, encompassing philosophy (Vedas, Upanishads), mathematics (rituals and astronomy), and medicine (Ayurveda).",
    },
    {
      question: "The Vedas are a collection of ancient Indian __________.",
      options: ["Religious texts", "Philosophical treatises", "Epic poems", "Legal codes"],
      answer: "Religious texts",
      explanation:
        "The Vedas are a large body of religious texts originating in ancient India, composed in Vedic Sanskrit.",
    },
    {
      question: "The oldest Veda is the __________.",
      options: ["Rigveda", "Yajurveda", "Samaveda", "Atharvaveda"],
      answer: "Rigveda",
      explanation: "The Rigveda, a collection of hymns, is the oldest and most important of the four Vedas.",
    },
    {
      question: "The Bhagavad Gita is a part of which ancient Indian epic?",
      options: ["Mahabharata", "Puranas", "Ramayana", "Upanishads"],
      answer: "Mahabharata",
      explanation: "The Bhagavad Gita is part of the Bhishma Parva of the Mahabharata.",
    },
    {
      question: "Which festival celebrates the victory of good over evil and is associated with the story of Lord Rama?",
      options: ["Diwali", "Holi", "Durga Puja", "Navaratri"],
      answer: "Diwali",
      explanation:
        "Diwali celebrates Lord Rama's return to Ayodhya after defeating Ravana and completing his 14-year exile.",
    },
    {
      question: "The Maurya Empire reached its greatest extent under the rule of which emperor?",
      options: ["Ashoka the Great", "Bindusara", "Chandragupta Maurya", "Chandragupta II"],
      answer: "Ashoka the Great",
      explanation:
        "Ashoka expanded the empire to include almost the entire Indian subcontinent and later promoted Buddhism.",
    },
    {
      question: "The Arthashastra, an ancient Indian treatise on statecraft, was written by __________.",
      options: ["Chanakya", "Kalidasa", "Panini", "Vishnu Sharma"],
      answer: "Chanakya",
      explanation:
        "Chanakya (Kautilya) was the advisor to Chandragupta Maurya and wrote the Arthashastra, a manual on politics and economics.",
    },
    {
      question: "The Gupta Empire is known for its contributions to which field?",
      options: ["All of the above", "Art and literature", "Architecture", "Science and mathematics"],
      answer: "All of the above",
      explanation:
        "The Gupta period (c. 320-550 CE) is considered the 'Golden Age' for achievements in many fields including mathematics and literature.",
    },
    {
      question: "Which ancient Indian astronomer is known for his accurate calculation of the value of pi?",
      options: ["Aryabhata", "Brahmagupta", "Varahamihira", "Bhaskara II"],
      answer: "Aryabhata",
      explanation:
        "In his Aryabhatiya, Aryabhata gave a value of pi approximated as 3.1416.",
    },
    {
      question: "The Chola dynasty of ancient India was known for its advancements in __________.",
      options: ["All of the above", "Temple architecture", "Administration", "Maritime trade"],
      answer: "All of the above",
      explanation:
        "The Cholas built large granite temples, maintained a powerful navy, and had an efficient administration.",
    },
    {
      question: "The Mughal Empire in India was founded by __________.",
      options: ["Babur", "Akbar", "Shah Jahan", "Aurangzeb"],
      answer: "Babur",
      explanation: "Babur established the Mughal Empire after the First Battle of Panipat in 1526.",
    },
    {
      question: "The Taj Mahal was built during the reign of which Mughal emperor?",
      options: ["Shah Jahan", "Jahangir", "Akbar", "Aurangzeb"],
      answer: "Shah Jahan",
      explanation:
        "Shah Jahan commissioned the Taj Mahal as a mausoleum for his wife Mumtaz Mahal.",
    },
    {
      question: "The Indian National Congress was formed in which year?",
      options: ["1885", "1857", "1905", "1947"],
      answer: "1885",
      explanation:
        "The Indian National Congress was founded in 1885 by A.O. Hume and others.",
    },
    // If you have more Unit 1 questions, paste them here (preserve object format).
  ],

  unit2: [
    // Engineering, Technology & Architecture — selected questions (from your provided list)
    {
      question:
        "___ is the scientific techniques and methods used to analyze substances like juices, dyes, paints, and cements?",
      options: ["Metallurgy", "Laboratory Technology", "Glass Technology", "Marine Technology"],
      answer: "Laboratory Technology",
      explanation:
        "Laboratory Technology is the broad, scientific field that encompasses the methods and techniques used to analyze a wide variety of chemical and physical substances in a controlled setting.",
    },
    {
      question: "The process of creating objects from glass and pottery is known as ___",
      options: ["Metallurgy", "Painting", "Pottery", "Engineering Science and Technology"],
      answer: "Pottery",
      explanation:
        "Pottery specifically refers to the making of objects from clay; glassmaking is separate but both are crafts that produce vessels and objects.",
    },
    {
      question: "___ is credited with the development of advanced metallurgical techniques",
      options: ["Sindhu Valley Civilization", "Vedic Age", "Mesopotamian Civilization", "Post-Vedic Record"],
      answer: "Sindhu Valley Civilization",
      explanation:
        "The Indus (Sindhu) Valley Civilization produced advanced metal artifacts including copper and bronze objects.",
    },
    {
      question: "The famous engineering marvel found in Delhi that showcases the metallurgical expertise of ancient India",
      options: ["Iron Pillar of Delhi", "Rakhigarhi", "Mehrgarh", "Taj Mahal"],
      answer: "Iron Pillar of Delhi",
      explanation:
        "The Iron Pillar demonstrates remarkable corrosion resistance, showcasing advanced metallurgical know-how.",
    },
    {
      question: 'The archaeological site known as "The Cradle of Indian Civilization" is:',
      options: ["Sindhu Valley Civilization", "Rakhigarhi", "Mehrgarh", "Iron Pillar of Delhi"],
      answer: "Mehrgarh",
      explanation:
        "Mehrgarh is an important Neolithic site that predates the mature Indus Valley cities and shows early agricultural settlements.",
    },
    {
      question: "____ is known for its advanced urban planning and sophisticated drainage systems.",
      options: ["Indus Valley Civilization", "Egyptian Civilization", "Roman Civilization", "Mesopotamian Civilization"],
      answer: "Indus Valley Civilization",
      explanation:
        "Cities like Mohenjo-daro and Harappa had grid patterns, private bathrooms, and covered drains.",
    },
    {
      question: "The early urban center of the Indus Valley Civilization is represented by which archaeological site?",
      options: ["Mehrgarh", "Mohenjo-daro", "Harappa", "Lothal"],
      answer: "Harappa",
      explanation:
        "Harappa is one of the two principal excavated cities of the Indus Valley Civilization and gave the civilization its alternate name.",
    },
    {
      question: "____ civilization is famous for its mastery of dyeing techniques",
      options: ["Indus Valley", "Mayan", "Egyptian", "Roman"],
      answer: "Indus Valley",
      explanation:
        "Evidence of dyed fibers and technical processes indicates advanced textile dyeing practices in the Indus region.",
    },
    {
      question: "In ancient constructions, which material was commonly used to bind bricks together?",
      options: ["Lime", "Cement", "Mud", "Sand"],
      answer: "Mud",
      explanation:
        "Mud mortar (mixed with organic material) was commonly used in many ancient constructions including the Indus Valley.",
    },
    {
      question: "The ancient art of glassmaking was highly developed in _____ civilization.",
      options: ["Roman", "Indus Valley", "Mayan", "Egyptian"],
      answer: "Indus Valley",
      explanation:
        "Indus sites produced glass beads and objects showing a developed knowledge of glassworking.",
    },
    {
      question: "Which element contributes to resistance (corrosion resistance) in the Delhi Iron Pillar?",
      options: ["Phosphorus", "Copper", "Gold", "Silver"],
      answer: "Phosphorus",
      explanation:
        "High phosphorus content in the wrought iron helped form a passive protective film on the pillar's surface.",
    },
    {
      question: "The earliest known example of the extraction of zinc from its ore was found in ____ region.",
      options: ["Indian subcontinent (Zawar)", "Mayan region", "Egypt", "Rome"],
      answer: "Indian subcontinent (Zawar)",
      explanation:
        "Zawar (Rajasthan) shows ancient Indian zinc production techniques and is one of the earliest such sites.",
    },
    {
      question: "The Iron Pillar of Delhi is associated with which historical period?",
      options: ["Gupta Empire", "Mughal Empire", "Mauryan Empire", "Chola Dynasty"],
      answer: "Gupta Empire",
      explanation:
        "The pillar is commonly associated with the Gupta period and inscriptions refer to a king 'Chandra' (Chandragupta II).",
    },
    {
      question: "What is the purpose of the Great Bath at Mohenjo-Daro?",
      options: ["Public bathing and ceremonial use", "Ritual sacrifice", "Drinking water storage", "Agricultural irrigation"],
      answer: "Public bathing and ceremonial use",
      explanation:
        "The Great Bath likely had ritual or ceremonial functions rather than merely storing water.",
    },
    {
      question: "Which ship type is believed to have been used by ancient sailors for maritime trade in the Indian Ocean?",
      options: ["Sambuk", "Caravel", "Galleon", "Longship"],
      answer: "Sambuk",
      explanation:
        "The sambuk is a traditional dhow-type vessel common in the Indian Ocean maritime trade.",
    },
    {
      question: "Lothal is best known in the Indus Valley Civilization as a center for:",
      options: ["Maritime trade and shipbuilding", "Monumental architecture", "Irrigation techniques", "Astronomy"],
      answer: "Maritime trade and shipbuilding",
      explanation:
        "Lothal's dockyard is a key indicator of the IVC's maritime trade activities.",
    },
    {
      question: "The people of the Indus Valley Civilization used a standardized system of weights and measures made of:",
      options: ["Steatite (soapstone)", "Gold", "Copper", "Silver"],
      answer: "Steatite (soapstone)",
      explanation:
        "Harappan seals were often carved from steatite; standardized weights were used for trade and commerce.",
    },
    {
      question: "The technique of lost-wax casting was used for creating ________",
      options: ["Metal sculptures", "Textiles", "Glassware", "Pottery"],
      answer: "Metal sculptures",
      explanation:
        "Lost-wax casting (cire perdue) was used to cast bronze sculptures, like the famous 'Dancing Girl' of Mohenjo-daro.",
    },
    // Add more Unit 2 questions here if needed (paste following the same object format).
  ],

  unit3: [
    // Science, Astronomy & Mathematics (from your provided Unit III list)
    {
      question: 'Which is not the element of "Panchamahabhutas”?',
      options: ["Energy", "Earth & Water", "Fire & Air", "Ether"],
      answer: "Energy",
      explanation:
        "The Panchamahabhutas are Earth, Water, Fire, Air and Ether (Akasha). Energy is a property, not one of the five elements.",
    },
    {
      question: "Which ancient Indian sage proposed the concept of the atom?",
      options: ["Kanada", "Aryabhata", "Brahmagupta", "Charaka"],
      answer: "Kanada",
      explanation:
        "Maharishi Kanada (Vaisheshika school) proposed the concept of 'Anu' (atom) as an indivisible particle.",
    },
    {
      question: "According to Indian knowledge system, what is the source of all life?",
      options: ["Prana", "Karma", "Maya", "Dharma"],
      answer: "Prana",
      explanation:
        "Prana is the vital life force believed to animate living beings in Indian thought.",
    },
    {
      question: "Which ancient Indian text contains detailed descriptions of the universe?",
      options: ["Vedas", "Upanishads", "Mahabharata", "Ramayana"],
      answer: "Vedas",
      explanation:
        "The Vedas, including hymns like the Nasadiya Sukta, contain early cosmological descriptions.",
    },
    {
      question: "What is the force that holds the universe together, according to Indian knowledge system?",
      options: ["Dharma", "Gravity", "Electromagnetism", "Karma"],
      answer: "Dharma",
      explanation:
        "Dharma is seen as the principle of cosmic order and harmony in many Indian philosophical systems.",
    },
    {
      question: "Which ancient Indian mathematician is credited with formal rules for zero?",
      options: ["Brahmagupta", "Bhaskara II", "Aryabhata", "Ramanujan"],
      answer: "Brahmagupta",
      explanation:
        "Brahmagupta (c. 628 CE) gave formal rules for arithmetic operations with zero in Brahmasphutasiddhanta.",
    },
    {
      question: "Who approximated π (pi) as 3.1416 in ancient India?",
      options: ["Aryabhata", "Bhaskara II", "Brahmagupta", "Ramanujan"],
      answer: "Aryabhata",
      explanation:
        "Aryabhata (Aryabhatiya, 499 CE) gave an approximate value of π as 3.1416.",
    },
    {
      question: "The Surya Siddhanta is a foundational text of which subject?",
      options: ["Astronomy", "Medicine", "Poetry", "Law"],
      answer: "Astronomy",
      explanation:
        "Surya Siddhanta contains astronomical calculations, planetary motions, eclipses, and timekeeping methods.",
    },
    {
      question: "What is the scientific term for the spinning of the Earth on its axis?",
      options: ["Rotation", "Revolution", "Orbit", "Precession"],
      answer: "Rotation",
      explanation: "Rotation is the spinning of a body on its own axis.",
    },
    {
      question: "What is the Sanskrit term commonly used for zero?",
      options: ["Shunya", "Ek", "Dasha", "Gyarah"],
      answer: "Shunya",
      explanation: "Shunya means 'void' or 'emptiness' and is the term for zero in Sanskrit.",
    },
    {
      question: "Which number system is base-10 (decimal)?",
      options: ["Decimal (Base 10)", "Binary (Base 2)", "Octal (Base 8)", "Hexadecimal (Base 16)"],
      answer: "Decimal (Base 10)",
      explanation: "The decimal (base 10) system is the standard positional system developed in India with placeholder zero.",
    },
    {
      question: "Which school of Indian mathematics developed infinite series for trigonometric functions?",
      options: ["Kerala school", "Gupta school", "Nalanda school", "Takshashila school"],
      answer: "Kerala school",
      explanation:
        "The Kerala school (14th–16th century) developed series expansions for sine and cosine, a precursor to calculus concepts.",
    },
    {
      question: "What is the name for the lunar mansion divisions (27 or 28) in Indian astronomy?",
      options: ["Nakshatra", "Rashi", "Muhurta", "Tithi"],
      answer: "Nakshatra",
      explanation: "Nakshatras are the 27 lunar mansions used in Jyotisha (Indian astronomy/astrology).",
    },
    {
      question: "According to Indian cosmology, the present age is known as:",
      options: ["Kali Yuga", "Satya Yuga", "Treta Yuga", "Dvapara Yuga"],
      answer: "Kali Yuga",
      explanation:
        "In the four-yuga cycle, the current age is considered the Kali Yuga, an age of decline compared to earlier yugas.",
    },
    // Add more Unit 3 questions here if you have them (object format)
  ],
};

/* ===========================
   DOM elements
   =========================== */
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const endScreen = document.getElementById("end-screen");
const reviewScreen = document.getElementById("review-screen");

const unitSelect = document.getElementById("unit-select");
const modePracticeBtn = document.getElementById("mode-practice");
const modeReviewBtn = document.getElementById("mode-review");
const startBtn = document.getElementById("start-btn");
const startBtnText = document.getElementById("start-btn-text");
const startBtnSpinner = document.getElementById("start-btn-spinner");

const restartBtn = document.getElementById("restart-btn");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const homeBtnQuiz = document.getElementById("home-btn-quiz");
const homeBtnReview = document.getElementById("home-btn-review");

const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progress-bar");
const scoreTextLive = document.getElementById("score-text-live");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");

const feedbackArea = document.getElementById("feedback-area");
const feedbackTitle = document.getElementById("feedback-title");
const feedbackExplanation = document.getElementById("feedback-explanation");

const finalTitle = document.getElementById("final-title");
const scoreSection = document.getElementById("score-section");
const finalScoreText = document.getElementById("final-score-text");
const percentageText = document.getElementById("percentage-text");
const finalMessage = document.getElementById("final-message");

const reviewContainer = document.getElementById("review-container-main");
const reviewTitle = document.getElementById("review-title");

/* ===========================
   State
   =========================== */
let currentQuizData = [];
let currentMode = "practice"; // 'practice' or 'review'
let currentQuestionIndex = 0;
let score = 0;

/* ===========================
   Utilities
   =========================== */
/** Fisher–Yates shuffle */
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/* ===========================
   Mode handling
   =========================== */
function setMode(mode) {
  currentMode = mode;
  modePracticeBtn.classList.remove("selected");
  modeReviewBtn.classList.remove("selected");
  scoreTextLive.classList.add("hidden");

  if (mode === "practice") {
    modePracticeBtn.classList.add("selected");
    scoreTextLive.classList.remove("hidden");
  } else if (mode === "review") {
    modeReviewBtn.classList.add("selected");
  }
}

/* Accessibility: allow Enter/Space to select mode cards */
function handleModeKey(event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    const idParts = event.currentTarget.id.split("-");
    if (idParts.length > 1) setMode(idParts[1]);
  }
}

/* ===========================
   Start quiz
   =========================== */
function startQuiz() {
  // show spinner briefly
  startBtn.disabled = true;
  startBtnText.classList.add("hidden");
  startBtnSpinner.classList.remove("hidden");

  setTimeout(() => {
    const selectedUnit = unitSelect.value; // e.g., 'unit1'
    const questions = allQuizData[selectedUnit];

    if (!questions || !Array.isArray(questions) || questions.length === 0) {
      alert("This unit does not have any questions yet.");
      startBtn.disabled = false;
      startBtnText.classList.remove("hidden");
      startBtnSpinner.classList.add("hidden");
      return;
    }

    // deep copy to avoid mutating source data
    currentQuizData = JSON.parse(JSON.stringify(questions));

    // reset UI
    startScreen.classList.add("hidden");
    endScreen.classList.add("hidden");

    if (currentMode === "review") {
      reviewTitle.textContent = `Review Mode: ${unitSelect.options[unitSelect.selectedIndex].text}`;
      quizScreen.classList.add("hidden");
      reviewScreen.classList.remove("hidden");
      buildReviewPage();
    } else {
      reviewScreen.classList.add("hidden");
      quizScreen.classList.remove("hidden");
      currentQuestionIndex = 0;
      score = 0;
      showQuestion();
      updateLiveScore();
    }

    startBtn.disabled = false;
    startBtnText.classList.remove("hidden");
    startBtnSpinner.classList.add("hidden");
  }, 150);
}

/* ===========================
   Review page builder
   =========================== */
function buildReviewPage() {
  reviewContainer.innerHTML = "";

  currentQuizData.forEach((question, index) => {
    const reviewItem = document.createElement("div");
    reviewItem.className = "p-4 rounded-lg bg-gray-50 border border-gray-200";

    let optionsHTML = '<ul class="mt-3 space-y-2">';
    (question.options || []).forEach((option) => {
      if (option === question.answer) {
        optionsHTML += `
          <li class="flex items-center text-green-700 font-medium p-2 bg-green-100 rounded border border-green-300">
            <ion-icon name="checkmark-circle-outline" class="mr-2 text-xl"></ion-icon>
            ${option} (Correct)
          </li>`;
      } else {
        optionsHTML += `
          <li class="flex items-center text-gray-700 ml-8">
            ${option}
          </li>`;
      }
    });
    optionsHTML += "</ul>";

    let explanationHTML = "";
    if (question.explanation) {
      explanationHTML = `
        <div class="mt-4 pt-3 border-t border-gray-200">
          <h5 class="font-semibold text-gray-800">Explanation:</h5>
          <p class="text-gray-700">${question.explanation}</p>
        </div>`;
    }

    reviewItem.innerHTML = `
      <h4 class="font-semibold text-lg text-gray-900">${index + 1}. ${question.question}</h4>
      ${optionsHTML}
      ${explanationHTML}
    `;
    reviewContainer.appendChild(reviewItem);
  });
}

/* ===========================
   Show a single question
   =========================== */
function showQuestion() {
  feedbackArea.classList.add("hidden");
  nextBtn.classList.add("hidden");
  nextBtn.textContent = "Next";

  prevBtn.disabled = currentQuestionIndex === 0;

  const questionData = currentQuizData[currentQuestionIndex];
  progressText.textContent = `Question ${currentQuestionIndex + 1} / ${currentQuizData.length}`;
  progressBar.style.width = `${((currentQuestionIndex + 1) / currentQuizData.length) * 100}%`;
  questionText.textContent = questionData.question;

  optionsContainer.innerHTML = "";
  const optionsToShow = shuffle([...questionData.options]);

  optionsToShow.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = option;
    button.className =
      "option-btn w-full text-left p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1";
    button.onclick = () => selectAnswer(option, button);
    optionsContainer.appendChild(button);
  });

  // If user already answered this question, show previous state
  if (questionData.userAnswer) {
    showAnsweredState(questionData);
  }
}

/* ===========================
   Show answered state (if revisited)
   =========================== */
function showAnsweredState(questionData) {
  const correctAnswer = questionData.answer;
  const userAnswer = questionData.userAnswer;

  Array.from(optionsContainer.children).forEach((button) => {
    button.disabled = true;
    if (button.textContent === correctAnswer) {
      button.classList.add("correct");
    } else if (button.textContent === userAnswer) {
      button.classList.add("wrong");
    }
  });

  if (userAnswer === correctAnswer) {
    feedbackTitle.textContent = "Correct! (Already Answered)";
    feedbackTitle.className = "text-lg font-bold mb-2 text-green-600";
  } else {
    feedbackTitle.textContent = "Incorrect (Already Answered)";
    feedbackTitle.className = "text-lg font-bold mb-2 text-red-600";
  }

  if (questionData.explanation) {
    feedbackExplanation.textContent = questionData.explanation;
    feedbackArea.classList.remove("hidden");
  }

  nextBtn.classList.remove("hidden");
  if (currentQuestionIndex === currentQuizData.length - 1) {
    nextBtn.textContent = "Finish Quiz";
  }
}

/* ===========================
   Handle answer selection (practice mode)
   =========================== */
function selectAnswer(selectedOption, buttonEl) {
  const questionData = currentQuizData[currentQuestionIndex];
  const correctAnswer = questionData.answer;

  Array.from(optionsContainer.children).forEach((button) => {
    button.disabled = true;
  });

  // Only award score on first answer
  if (!questionData.userAnswer) {
    if (selectedOption === correctAnswer) {
      score++;
      feedbackTitle.textContent = "Correct!";
      feedbackTitle.className = "text-lg font-bold mb-2 text-green-600";
    } else {
      feedbackTitle.textContent = "Incorrect";
      feedbackTitle.className = "text-lg font-bold mb-2 text-red-600";
    }
    questionData.userAnswer = selectedOption;
  }

  nextBtn.classList.remove("hidden");

  // Visual feedback
  if (selectedOption === correctAnswer) {
    buttonEl.classList.add("correct");
  } else {
    buttonEl.classList.add("wrong");
    Array.from(optionsContainer.children).forEach((button) => {
      if (button.textContent === correctAnswer) {
        button.classList.add("correct");
      }
    });
  }

  if (questionData.explanation) {
    feedbackExplanation.textContent = questionData.explanation;
    feedbackArea.classList.remove("hidden");
  }

  updateLiveScore();

  if (currentQuestionIndex === currentQuizData.length - 1) {
    nextBtn.textContent = "Finish Quiz";
  }
}

/* ===========================
   Navigation
   =========================== */
function nextQuestion() {
  if (currentQuestionIndex === currentQuizData.length - 1) {
    showResults();
  } else {
    currentQuestionIndex++;
    showQuestion();
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion();
  }
}

/* ===========================
   Score & results
   =========================== */
function updateLiveScore() {
  scoreTextLive.textContent = `Score: ${score}`;
}

function showResults() {
  quizScreen.classList.add("hidden");
  endScreen.classList.remove("hidden");
  scoreSection.classList.remove("hidden");
  finalTitle.textContent = "Quiz Complete!";

  const percentage = Math.round((score / currentQuizData.length) * 100);
  finalScoreText.textContent = `${score} / ${currentQuizData.length}`;
  percentageText.textContent = `(${percentage}%)`;

  if (percentage >= 90) {
    finalMessage.textContent = "Outstanding! You are an expert!";
  } else if (percentage >= 75) {
    finalMessage.textContent = "Excellent job! You really know your stuff.";
  } else if (percentage >= 50) {
    finalMessage.textContent = "Good work! You've got a solid foundation.";
  } else {
    finalMessage.textContent = "Keep practicing! You'll get there.";
  }
}

/* ===========================
   Return home / reset
   =========================== */
function goHome() {
  endScreen.classList.add("hidden");
  quizScreen.classList.add("hidden");
  reviewScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
  setMode("practice");
}

/* ===========================
   Event listeners
   =========================== */
modePracticeBtn.addEventListener("click", () => setMode("practice"));
modeReviewBtn.addEventListener("click", () => setMode("review"));

modePracticeBtn.addEventListener("keydown", handleModeKey);
modeReviewBtn.addEventListener("keydown", handleModeKey);

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);
prevBtn.addEventListener("click", prevQuestion);
restartBtn.addEventListener("click", goHome);
homeBtnQuiz.addEventListener("click", goHome);
homeBtnReview.addEventListener("click", goHome);

/* initial mode */
setMode("practice");

/* ===========================
   End of file
   =========================== */
