var back = document.querySelector('#go-back');
var clear = document.querySelector('#clear_highscores');

back.addEventListener("click", function(){
    window.location.href="../index.html";
})




var score_local = document.querySelector('#score');
var name_local = document.querySelector('#Name')

name_local.textContent = localStorage.getItem('Name');
score_local.textContent = localStorage.getItem('Score');



clear.addEventListener("click", function(){
    name_local.textContent = '';
    score_local.textContent = '';
})