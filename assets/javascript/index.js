
var quiz_box = document.querySelector('#quiz_box');
var home_page = document.querySelector('#home_page');
var home_button = document.querySelector('#start');


quiz_box.style.display = 'none';



home_button.addEventListener("click", nextPage);

function nextPage(){

    home_page.style.display = 'none';

    quiz_box.style.display = 'block';

    console.log("worked");

}

function evaluate(){
    
}

var questions_answers ={
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
