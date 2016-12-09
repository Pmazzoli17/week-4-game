$(document).ready(function() {

var randomNumber = $("#randomNumber");
var winsId = $("#wins");
var lossesId = $("#losses");
var userScore = $("#userScore")
var total = 0;
var wins = 0;
var losses = 0;

var numGenerate = function (min, max) {
return Math.floor(Math.random()*(max-min)+min);
}

var randomGeneratedNumber = numGenerate(19,121);
$(randomNumber).append(randomGeneratedNumber);

// console.log(randomGeneratedNumber);

var red = numGenerate(1,13);
var blue = numGenerate(1,13);
var yellow = numGenerate(1,13);
var green = numGenerate(1,13);

// console.log(red);

var refresh = function() {
red = numGenerate(1,13);
blue = numGenerate(1,13);
yellow = numGenerate(1,13);
green = numGenerate(1,13);

// console.log(red);

};

$(userScore).html("Your total score is: " + total);

$(".redJewel").on("click", function() {
    total += red;
    $(userScore).html("Your total score is: " + total);
    check();
})

$(".blueJewel").on("click", function(){
     total += blue;
     $(userScore).html("Your total score is: " + total);
     check();
})
$(".yellowJewel").on("click", function(){
     total += yellow;
     $(userScore).html("Your total score is: " + total);
     check();
})
$(".greenJewel").on("click", function(){
     total += green;
     $(userScore).html("Your total score is: " + total);
     check();
})


var check = function() {
    if (randomGeneratedNumber === total) {
        wins++;
        $(winsId).html("Wins: " + wins);
        $(randomNumber).empty();
        randomGeneratedNumber = numGenerate(19,121);
        $(randomNumber).html(randomGeneratedNumber);
        total = 0;
        $(userScore).html("Your total score is: " + total)
        refresh();
    }
    if (randomGeneratedNumber < total) {
        losses++;
        $(lossesId).html("Losses: " + losses);
        $(randomNumber).empty();
        randomGeneratedNumber = numGenerate(19,121);
        $(randomNumber).html(randomGeneratedNumber);
        total = 0;
        $(userScore).html("Your total score is: " + total)
        refresh();
    }
}
})