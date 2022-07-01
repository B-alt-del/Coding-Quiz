
var quiz_box = document.querySelector('#quiz_box');
var home_page = document.querySelector('#home_page');
var home_button = document.querySelector('#start');
var question = document.querySelector('#question');
var A = document.querySelector('#A');
var B = document.querySelector('#B');
var C = document.querySelector('#C');
var D = document.querySelector('#D');




quiz_box.style.display = 'none';



home_button.addEventListener("click", to_questions);

function to_questions(){

    home_page.style.display = 'none';

    quiz_box.style.display = 'block';

    console.log("worked");

    first_question();
}

function first_question(){
    question.textContent = q_a.first.question;
    A.textContent = q_a.first.answer;
    B.textContent = q_a.first.false[0];
    C.textContent = q_a.first.false[1];
    D.textContent = q_a.first.false[2];
    console.log(q_a);
}

function second_question(){

}

function evaluate(){

}

var q_a ={
    first: {
        question: "What is my first name?",
        answer: "Brad",
        false: ['Joey', "Andy", 'Brandon']

    },

    second: {
        question: "How old am I?",
        answer: "28",
        false: ['24', '16', '32']
    },

    third: {
        question: "What is my dogs name?",
        answer: "Boots",
        false: ['Chester', 'Barkley', 'Cooper']
    }
}


