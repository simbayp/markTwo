const readlineSync = require("readline-sync");

let score = 0;

// quiz questions with answers
const questions = [{
    question: "What is Iron Man's real name? ",
    answer: ["tony stark", "anthony stark", "anthony edward stark"]
}, {
    question: "Which college Iron Man went in to? ",
    answer: ["mit", "massachusetts institute of technology"]
},
{
    question: "What is the name of Iron Man's girlfriend / wife? ",
    answer: ["pepper potts"]
},
{
    question: "What real-life celebrity is Iron Man based on? ",
    answer: ["howard hughes"]
},
{
    question: "What is the ultimate form of Iron Man suit named? ",
    answer: ["mark 85", "mark85", "mark lxxxv", "the mark lxxxv"]
}
];

function begin() {
    let userName = readlineSync.question("What's your name? ");
    console.log(`Welcome ${userName} to DO YOU KNOW Iron Man?`);
    console.log("----------")
}


function execute(question, answer) {
    let userAnswer = readlineSync.question(question);

    if (answer.includes(userAnswer.toLowerCase())) {
        console.log("You are correct!");
        score = score + 1;
    } else {
        console.log("You are incorrect!");
    }
    console.log(`Your current score is: ${score}`);
    console.log("----------")
}

function quiz() {
    for (let i = 0; i < questions.length; i++) {
        let currentQuestion = questions[i];
        execute(currentQuestion.question, currentQuestion.answer)
    }
}

function displayScore() {
    console.log(`Congratulations! Your total score is: ${score}`);
}


begin();
quiz();
displayScore();

