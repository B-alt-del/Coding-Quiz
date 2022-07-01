
var quiz_box = document.querySelector('#quiz_box');
var home_page = document.querySelector('#home_page');
var home_button = document.querySelector('#start');
var question = document.querySelector('#question');
var timer = document.querySelector('#timer');
var A = document.querySelector('#A');
var B = document.querySelector('#B');
var C = document.querySelector('#C');
var D = document.querySelector('#D');
var count = 10;

quiz_box.style.display = 'none';
home_button.addEventListener("click", to_questions);
home_button.addEventListener('click', display_timer)

function display_timer(){
    var countdown = setInterval(function() {

        timer.textContent = 'Timer:' + count;
            
        
            if (count === 0){
                clearInterval(countdown);
            }

            count--;
            
    },500)

}

function to_questions(){

 //   display_timer();

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
    

    A.addEventListener("click", function(){second_question()});
    B.addEventListener("click", function(){second_question()});
    C.addEventListener("click", function(){second_question()});
    D.addEventListener("click", function(){second_question()});
}

function second_question(){
    question.textContent = q_a.second.question;
    A.textContent = q_a.second.answer;
    B.textContent = q_a.second.false[0];
    C.textContent = q_a.second.false[1];
    D.textContent = q_a.second.false[2];

    A.addEventListener("click", function(){third_question()});
    B.addEventListener("click", function(){third_question()});
    C.addEventListener("click", function(){third_question()});
    D.addEventListener("click", function(){third_question()});

}

function third_question(){
    question.textContent = q_a.third.question;
    A.textContent = q_a.third.answer;
    B.textContent = q_a.third.false[0];
    C.textContent = q_a.third.false[1];
    D.textContent = q_a.third.false[2];

    A.addEventListener("click", function(){fourth_question()});
    B.addEventListener("click", function(){fourth_question()});
    C.addEventListener("click", function(){fourth_question()});
    D.addEventListener("click", function(){fourth_question()});


}

function fourth_question(){
    question.textContent = q_a.fourth.question;
    A.textContent = q_a.fourth.answer;
    B.textContent = q_a.fourth.false[0];
    C.textContent = q_a.fourth.false[1];
    D.textContent = q_a.fourth.false[2];

    A.addEventListener("click", function(){fifth_question()});
    B.addEventListener("click", function(){fifth_question()});
    C.addEventListener("click", function(){fifth_question()});
    D.addEventListener("click", function(){fifth_question()});


}

function fifth_question(){
    question.textContent = q_a.fifth.question;
    A.textContent = q_a.fifth.answer;
    B.textContent = q_a.fifth.false[0];
    C.textContent = q_a.fifth.false[1];
    D.textContent = q_a.fifth.false[2];

    A.addEventListener("click", function(){console.log("Button A")});
    B.addEventListener("click", function(){console.log("Button B")});
    C.addEventListener("click", function(){console.log("Button C")});
    D.addEventListener("click", function(){console.log("Button D")});


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
    },

    fourth: {
        question: "Where was I Born?",
        answer: "Minnesota",
        false: ['Wisconsin', 'North Dakota', 'Iowa']
    },

    fifth: {
        question: "What sport did I enjoy playing the most?",
        answer: "Rugby",
        false: ['Football', 'Pickleball', 'Tennis']
    },


}


