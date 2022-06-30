var back = document.querySelector('#go-back');
var clear = document.querySelector('#clear_highscores');

back.addEventListener("click", function(){
    window.location.href="../index.html";
})


clear.addEventListener("click", function(){
    console.log("clearing scores placeholder");
})
