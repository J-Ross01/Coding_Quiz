const startButton = document.getElementById('start');
const questionContainer = document.getElementById('question-container');
const question = document.getElementById('question');
const answerButton = document.getElementById('answer-btn');
const endSlide = document.getElementById('end-slide');
const score = document.getElementById('final-score');
const initialsPlaceholder = document.getElementById('initials');
const submit = document.getElementById('submit-score');

let shuffledQuestions, currentQuestionIndex; 
let quizTime = 60; 
let timer; 

startButton.addEventListener('click', startQuiz);
submit.addEventListener('click', saveScore); 

function startQuiz() {

}

function updateClock() {

}

function nextQuestion() {

}

function displayQuestions() {

}

function reset() {

}

function selectAnswer() {

}

function QuizOver() {

}

function saveScore() {

}

const questions = [
    {
        question: 'What does HTML stand for?',
        answer: [
            {text:""},
            {text:""},
        ]
    },
];