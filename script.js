const startButton = document.getElementById('start');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-btn');
const endSlide = document.getElementById('end-slide');
const score = document.getElementById('final-score');
const initialsPlaceholder = document.getElementById('initials');
const submit = document.getElementById('submit-score');
const clock = document.getElementById('time');

let shuffledQuestions, currentQuestionIndex; 
let quizTime = 60; 
let timer; 

startButton.addEventListener('click', startQuiz);
submit.addEventListener('click', saveScore); 

function startQuiz() {
startButton.classList.add('hide');
shuffledQuestions = questions.sort(()=> Math.random() - .5);
currentQuestionIndex = 0;
questionContainer.classList.remove('hide');
timer = setInterval(updateClock, 1000);
nextQuestion();
}

function updateClock() {
    if (quizTime <= 0) {
    endGame();
    } else {
    quizTime--;
    clock.textContent = quizTime;
    }
}

function nextQuestion() {
reset();
displayQuestions(shuffledQuestions[currentQuestionIndex]);
}

function displayQuestions(question) {
questionElement.innerText = question.question;
question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
        button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
});
}

function reset() {
while (answerButtonsElement.firstChild)
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
}

function selectAnswer(e) {
    const selectedButton = e.target; 
    const correct = selectedButton.dataset.correct;
    if (!correct) {
        quizTime -= 10;
    }
    currentQuestionIndex++;
    if (shuffledQuestions.length > currentQuestionIndex) {
        nextQuestion();
    }
    else {
        endGame();
    }
}

function endGame() {
    clearInterval(timer);
    questionContainer.classList.add('hide');
    endSlide.classList.remove('hide');
    score.textContent = quizTime;
}

function saveScore() {
    const initials = initialsPlaceholder.value;
    console.log('Saved', initials, quizTime);
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