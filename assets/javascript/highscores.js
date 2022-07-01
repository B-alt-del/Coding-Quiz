var back = document.querySelector('#go-back');
var clear = document.querySelector('#clear_highscores');
var table_data = document.querySelector('#data');

back.addEventListener("click", function(){
    window.location.href="../index.html";
})


var score_local = document.getElementById('local_score');
var name_local = document.getElementById('local_name');

var number_of_scores = localStorage.getItem('#');




name_local.textContent = localStorage.getItem('Name');
score_local.textContent = localStorage.getItem('Score');



clear.addEventListener("click", function(){
    name_local.textContent = '';
    score_local.textContent = '';
    localStorage.clear();
})