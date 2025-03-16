const questions = [
    {
        question: "What language is used for the layout of a website?",
        answers: [
            {text: "HTML", correct: false},
            {text: "CSS", correct: true},
            {text: "Javascript", correct: false},
            {text: "C++", correct: false}
        ]
    },
    {
        question: "Why did we switch to IPV6 ?",
        answers: [
            {text: "IPV4 is obsolete", correct: false},
            {text: "Machines no longer support IPV4", correct: false},
            {text: "IPV4 is dangerous", correct: false},
            {text: "There are not enough IPV4", correct: true}
        ]
    },
    {
        question: "What is SQL used for ?",
        answers: [
            {text: "Manage databases", correct: true},
            {text: "Create videogames", correct: false},
            {text: "Nothing. It doesn't exist", correct: false},
            {text: "Styling a webpage", correct: false}
        ]
    },
    {
        question: "Who invented Python language ?",
        answers: [
            {text: "Ada Lovelace", correct: false},
            {text: "Mark Zuckerberg", correct: false},
            {text: "Guido Von Rossum", correct: true},
            {text: "Ted Codd", correct: false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerText = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    }
)}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = "You scored " + score + " out of " + questions.length;
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});

startQuiz();