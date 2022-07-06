
var quiz_box = document.querySelector('#quiz_box');
var home_page = document.querySelector('#home_page');
var home_button = document.querySelector('#start');
var highscores_page = document.querySelector('#highscores_page');
var question = document.querySelector('#question');
var timer = document.querySelector('#timer');
var A = document.querySelector('#A');
var B = document.querySelector('#B');
var C = document.querySelector('#C');
var D = document.querySelector('#D');
var count = 100;
var countdown;
var score;
var submit_score = document.querySelector("#submit_score");
var showing_hs = document.querySelector('#what_you_got');
var number_of_scores = Number(localStorage.getItem('#')); // = 0; if this doesnt work- can store the info as an array and push

console.log("number of scores: " + number_of_scores);

// if(isNaN(number_of_scores)){
//     number_of_scores = 0;
// }

quiz_box.style.display = 'none';
highscores_page.style.display = 'none';

home_button.addEventListener("click", to_questions);
home_button.addEventListener('click', display_timer);

function display_timer(){
    countdown = setInterval(function() {

        timer.textContent = count;
            
        
            if (count === 0){
                clearInterval(countdown);
                to_highscores();
            }

            count--;

    },1000)

}

function wrong_answer(){
    count = count - 10;
}


function to_questions(){

    home_page.style.display = 'none';

    quiz_box.style.display = 'block';

    console.log("worked");


    first_question();
}

function to_highscores(){
    quiz_box.style.display = 'none';
    highscores_page.style.display = 'block';
    
    console.log(number_of_scores + " have already been sumbitted!");

    clearInterval();

    score = count;
    submit_score.addEventListener('click', function(){
        var Name = document.querySelector('input[type="text"]');
        var time_left = document.querySelector('#timer');
        number_of_scores++;

        event.preventDefault();
    
        //TO DO: enter the names and scores using # maybe possible with for loop and/or array

        localStorage.setItem('Name', Name.value);
        localStorage.setItem('Score', time_left.textContent);
        localStorage.setItem("#", number_of_scores);

        window.location.href="pages/highscores.html";
    })

    
    
    console.log("highscores page");
    
}

function first_question(){
    question.textContent = q_a.first.question;
    A.textContent = q_a.first.false[1];
    B.textContent = q_a.first.answer;
    C.textContent = q_a.first.false[0];
    D.textContent = q_a.first.false[2];
    
    //git rid of function()--> make evaluate function [without()]-> first check for correct answer then
    //send to next question when it calls it i am losing extra counts

    A.addEventListener("click", function(){wrong_answer(); second_question()});
    B.addEventListener("click", function(){second_question()});
    C.addEventListener("click", function(){wrong_answer(); second_question()});
    D.addEventListener("click", function(){wrong_answer(); second_question()});
}

function second_question(){
    question.textContent = q_a.second.question;
    A.textContent = q_a.second.false[1];
    B.textContent = q_a.second.false[0];
    C.textContent = q_a.second.answer;
    D.textContent = q_a.second.false[2];

    C.addEventListener("click", function(){third_question();console.log(count)});
    A.addEventListener("click", function(){wrong_answer();third_question()});
    B.addEventListener("click", function(){wrong_answer();third_question()});
    D.addEventListener("click", function(){wrong_answer();third_question()});

}

function third_question(){
    question.textContent = q_a.third.question;
    A.textContent = q_a.third.false[2];
    B.textContent = q_a.third.false[0];
    C.textContent = q_a.third.false[1];
    D.textContent = q_a.third.answer;

    D.addEventListener("click", function(){fourth_question(); console.log(count)});
    A.addEventListener("click", function(){wrong_answer();fourth_question()});
    B.addEventListener("click", function(){wrong_answer();fourth_question()});
    C.addEventListener("click", function(){wrong_answer();fourth_question()});



}

function fourth_question(){
    question.textContent = q_a.fourth.question;
    A.textContent = q_a.fourth.false[1];
    B.textContent = q_a.fourth.answer;
    C.textContent = q_a.fourth.false[0];
    D.textContent = q_a.fourth.false[2];


    B.addEventListener("click", function(){fifth_question();console.log(count)});
    A.addEventListener("click", function(){wrong_answer();fifth_question()});
    C.addEventListener("click", function(){wrong_answer();fifth_question()});
    D.addEventListener("click", function(){wrong_answer();fifth_question()});


}

function fifth_question(){
    question.textContent = q_a.fifth.question;
    A.textContent = q_a.fifth.false[1];
    B.textContent = q_a.fifth.false[0];
    C.textContent = q_a.fifth.false[2];
    D.textContent = q_a.fifth.answer;


    D.addEventListener("click", function(){to_highscores();console.log(count)});
    A.addEventListener("click", function(){wrong_answer();to_highscores()});
    B.addEventListener("click", function(){wrong_answer();to_highscores()});
    C.addEventListener("click", function(){wrong_answer();to_highscores()});

}

// function evaluate(choice){
//     if ( choice.srcElement.id ===  )

// }

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


