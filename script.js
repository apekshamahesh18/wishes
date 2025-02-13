// Get elements
const startBtn = document.getElementById("startBtn");
const landingPage = document.getElementById("landing");
const quizSection = document.getElementById("quiz");

// Quiz Questions and Answers
const questions = [
    "How did we first meet?",
    "Where did we have our first kiss?",
    "What is our special date?"
];

const answers = [
    "9th grade",
    "lassi shop",
    "14th december"
];

let currentQuestion = 0;
const sections = ["timeline", "playlist", "countdown", "secret-note", "virtual-gift"];

// Hide landing page and start quiz
startBtn.addEventListener("click", () => {
    landingPage.style.display = "none";
    quizSection.style.display = "block";
    loadQuestion();
});

// Load Current Question
function loadQuestion() {
    if (currentQuestion < questions.length) {
        document.getElementById("question").innerText = questions[currentQuestion];
    }
}

// Check Answer and Unlock Next Section
function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    
    if (userAnswer === answers[currentQuestion]) {
        alert("Correct! Unlocking the next section.");
        document.getElementById(sections[currentQuestion]).style.display = "block";
        currentQuestion++;
        
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            quizSection.style.display = "none"; // Hide Quiz when done
        }
    } else {
        alert("Try Again!");
    }

    document.getElementById("answer").value = ""; // Clear input field
}

// Countdown Timer
const countdownDate = new Date("Dec 14, 2025 00:00:00").getTime();
const timerInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("timer").innerText = ${days} days remaining!;

    if (distance < 0) {
        clearInterval(timerInterval);
        document.getElementById("timer").innerText = "The special day has arrived!";
    }
}, 1000);

// Secret Love Note Unlock
function unlockNote() {
    const userInput = prompt("Type the secret phrase:");
    if (userInput.toLowerCase() === "december 14, our beginning") {
        document.getElementById("love-note").style.display = "block";
    } else {
        alert("Wrong phrase! Try again.");
    }
}
