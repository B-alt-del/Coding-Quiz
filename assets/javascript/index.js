
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
    count = count - 2;
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
    
    clearInterval(countdown);

    score = count;
    submit_score.addEventListener('click', function(){
        var Name = document.querySelector('input[type="text"]');
        var time_left = document.querySelector('#timer');
        var number_of_scores = 0;
        number_of_scores++;

        event.preventDefault();

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
    

    A.addEventListener("click", function(){second_question();wrong_answer()});
    B.addEventListener("click", function(){second_question();console.log(count)});
    C.addEventListener("click", function(){second_question();wrong_answer()});
    D.addEventListener("click", function(){second_question();wrong_answer()});
}

function second_question(){
    question.textContent = q_a.second.question;
    A.textContent = q_a.second.false[1];
    B.textContent = q_a.second.false[0];
    C.textContent = q_a.second.answer;
    D.textContent = q_a.second.false[2];

    C.addEventListener("click", function(){third_question();console.log(count)});
    A.addEventListener("click", function(){third_question();wrong_answer()});
    B.addEventListener("click", function(){third_question();wrong_answer()});
    D.addEventListener("click", function(){third_question();wrong_answer()});

}

function third_question(){
    question.textContent = q_a.third.question;
    A.textContent = q_a.third.false[2];
    B.textContent = q_a.third.false[0];
    C.textContent = q_a.third.false[1];
    D.textContent = q_a.third.answer;

    D.addEventListener("click", function(){fourth_question(); console.log(count)});
    A.addEventListener("click", function(){fourth_question();wrong_answer()});
    B.addEventListener("click", function(){fourth_question();wrong_answer()});
    C.addEventListener("click", function(){fourth_question();wrong_answer()});



}

function fourth_question(){
    question.textContent = q_a.fourth.question;
    A.textContent = q_a.fourth.false[1];
    B.textContent = q_a.fourth.answer;
    C.textContent = q_a.fourth.false[0];
    D.textContent = q_a.fourth.false[2];


    B.addEventListener("click", function(){fifth_question();console.log(count)});
    A.addEventListener("click", function(){fifth_question();wrong_answer()});
    C.addEventListener("click", function(){fifth_question();wrong_answer()});
    D.addEventListener("click", function(){fifth_question();wrong_answer()});


}

function fifth_question(){
    question.textContent = q_a.fifth.question;
    A.textContent = q_a.fifth.false[1];
    B.textContent = q_a.fifth.false[0];
    C.textContent = q_a.fifth.false[2];
    D.textContent = q_a.fifth.answer;


    D.addEventListener("click", function(){to_highscores();console.log(count)});
    A.addEventListener("click", function(){to_highscores();wrong_answer()});
    B.addEventListener("click", function(){to_highscores();wrong_answer()});
    C.addEventListener("click", function(){to_highscores();wrong_answer()});

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


