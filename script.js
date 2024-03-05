const startButton = document.getElementById('start');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-btn');
const endSlide = document.getElementById('end-slide');
const score = document.getElementById('final-score');
const initialsPlaceholder = document.getElementById('initials');
const submit = document.getElementById('submit-score');
const clock = document.getElementById('time');

// Initialize variables for shuffled questions, current question index, and timer
let shuffledQuestions, currentQuestionIndex; 
let quizTime = 60; 
let timer; 

// Event listeners for start and submit buttons
startButton.addEventListener('click', startQuiz);
submit.addEventListener('click', saveScore); 

// Starts the Quiz
function startQuiz() {
startButton.classList.add('hide'); // Hide the start button
shuffledQuestions = questions.sort(()=> Math.random() - .5); // Shuffle the questions
currentQuestionIndex = 0; 
questionContainer.classList.remove('hide');
timer = setInterval(updateClock, 1000); // Starts the timer
nextQuestion();
}

// Updates the quiz timer
function updateClock() {
    if (quizTime <= 0) {
    endGame();
    } else {
    quizTime--; // Decreases the quiz time
    clock.textContent = quizTime; // Update the clocks display
    }
}

// Sets the next question
function nextQuestion() {
reset();
displayQuestions(shuffledQuestions[currentQuestionIndex]);
}

// displays the current question and its answers
function displayQuestions(question) {
questionElement.innerText = question.question; // Sets the questions text
question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn'); // Adds a class
    if (answer.correct) {
        button.dataset.correct = answer.correct; // Marks the correct answer
    }
    button.addEventListener('click', selectAnswer); // Adds click event listeners 
    answerButtonsElement.appendChild(button); // Appends button to container
});
}

// Resets answer buttons 
function reset() {
while (answerButtonsElement.firstChild)
    answerButtonsElement.removeChild(answerButtonsElement.firstChild); // Removes all answer buttons
}

// Handles answer selections
function selectAnswer(e) {
    const selectedButton = e.target; 
    const correct = selectedButton.dataset.correct;
    if (!correct) {
        quizTime -= 10; // If worng answer is selected it will subtract 10 seconds from the timer
    }
    currentQuestionIndex++;
    if (shuffledQuestions.length > currentQuestionIndex) {
        nextQuestion(); // Moves to next question 
    }
    else {
        endGame(); // If there are no more questions the game will end
    }
}

// Ends the game 
function endGame() {
    clearInterval(timer); // Stops  the timer 
    questionContainer.classList.add('hide'); // Hide the question container
    endSlide.classList.remove('hide'); // Displays the end slide/screen 
    score.textContent = quizTime; // Displays your final score
}

function saveScore() {
    const initials = initialsPlaceholder.value; // Get initials from input
    console.log('Saved', initials, quizTime); // logs initials and score 
}

const questions = [
    {
        question: 'What does HTML stand for?',
        answers: [
            {text:'Hyper Text Markup Language', correct: true},
            {text: 'Hot Mail', correct: false},
        ]
    },
    {
        question: 'What does CSS stand for?',
        answers: [
            {text:'Cascading Style Sheets', correct: true},
            {text: 'Control Source Services', correct: false},
        ]
    },
    {
        question: 'What does npm stand for?',
        answers: [
            {text:'Node Package Manager', correct: true},
            {text: 'No problem man', correct: false},
        ]
    },
];