var pool = {
    1: {
        q: "In Hercules, Hades promised not to harm Megara provided that Hercules give up his strength. How long did he have to agree to give up his strength for?",
        c1: "a fortnight",
        c2: "60 Minutes",
        c3: "24 Hours",
        c4: "48 Hours",
        a: "24 Hours"
    },

    2: {
        q: "In The Lion King, where was the birth of Simba celebrated?",
        c1: "Savannah Cabana",
        c2: "Pride Rock",
        c3: "The Tree of Life",
        c4: "Royal Peak",
        a: "Pride Rock"
    },
    3: {
        q: "During the battle with Aladdin, what type of animal does Jafar transform himself into?",
        c1: "Lion",
        c2: "Tiger",
        c3: "Bear",
        c4: "Cobra",
        a: "Cobra"
    },
    4: {
        q: "In the Little Mermaid when Ariel sees Prince Eric, what type of celebration was happening on the ship?",
        c1: "Wedding",
        c2: "Birthday Party",
        c3: "Funeral",
        c4: "Quinceañera",
        a: "Birthday Party"
    },
    5: {
        q: "In The Sword in the Stone, what does Merlin call The Greatest Force on Earth? ",
        c1: "Imagination",
        c2: "Time",
        c3: "Love",
        c4: "Wisdom",
        a: "Love"
    },
    6: {
        q: "In Aladdin, what is the name of Jasmine’s pet tiger?",
        c1: "Rajah",
        c2: "Siddhartha",
        c3: "Earl Gray",
        c4: "Oolong",
        a: "Rajah"
    },
    7: {
        q: "Cruella de Vil is the villain in which Disney movie?",
        c1: "Air Bud",
        c2: "101 Dalmations",
        c3: "8,675,309 Kittens",
        c4: "The AristoCats",
        a: "101 Dalmations"
    },
    8: {
        q: "What is the name of the boy who owns Buzz Lightyear in the movie Toy Story?",
        c1: "Billy",
        c2: "Colby",
        c3: "Tony",
        c4: "Andy",
        a: "Andy"
    },
    9: {
        q: "In the movie Finding Nemo, which country has Nemo been taken to?",
        c1: "Portugal",
        c2: "The Upside Down",
        c3: "Oz",
        c4: "Australia",
        a: "Australia"
    },
    10: {
        q: "In the Disney movie Robin Hood, what type of animal was Robin?",
        c1: "Red Panda",
        c2: "Fox",
        c3: "Ferret",
        c4: "Hound",
        a: "Fox"
    },

    11: {
        q: "In the Disney movie Robin Hood, what type of animal was Robin?",
        c1: "Red Panda",
        c2: "Fox",
        c3: "Ferret",
        c4: "Hound",
        a: "Fox"
    }

}

var choice = "";
var numCorrect = 0;
var numWrong = 0;
var countDownTimer = 30;
var intervalId;
var position = 1;
var delay;

function restart() {
    choice = "";
    numCorrect = 0;
    numWrong = 0;
    countDownTimer = 30;
    intervalId;
    position = 1;
    delay;
    
    intervalId = setInterval(decrease, 1000);
    
    displayQuestion();

    $("#message").hide();
    $("#wins").hide();
    $("#losses").hide();
    $(".restart").hide();
    $("input:radio").show();
    $(".submit").show();
}

function decrease() {

    if (countDownTimer <= 0) {
        hideQuestion();
        timeUp();
        clearInterval(intervalId);
        delay = setTimeout(next, 5000);
    }

    $("#timer").text(countDownTimer);
    countDownTimer--;

}

function next() {
    
    
    if (position === 10){
        $(".submit").hide();
        $("input:radio").hide();
        $("#message").text("Quiz is over! Here are your stats: ");
        $("#message").show();
        $("#wins").text("You got " + numCorrect + " questions correct!")
        $("#losses").text("You got " + numWrong + " question(s) wrong... :(")
        $(".restart").show();
    
    }
    else {
    position++;
    countDownTimer = 30;
    intervalId = setInterval(decrease, 1000);

    displayQuestion();

    $(".start").hide();
    $("#message").hide();
    }
}

function rightAnswer() {
    $("#message").text("You got it!");
    $("#message").show();
    numCorrect++;
}

function wrongAnswer() {
    numWrong++;
    $("#message").text("Shucks.. The answer was: " + pool[position].a)
    $("#message").show();
}

function timeUp() {
    numWrong++;
    $("#message").text("Time's up! The answer was: " + pool[position].a)
    $("#message").show();
}

function hideAnswer() {
    $("#message").hide();
}

function hideQuestion() {

    $("#question").hide();
    $("#choice1").hide();
    $("#choice2").hide();
    $("#choice3").hide();
    $("#choice4").hide();
   
    $("#timer").hide();
    $("input:radio").hide();
    $(".submit").hide();

}

function displayQuestion() {

    clearInterval(delay);
    $("#status").text("Question# " + position);
    $("#question").text(pool[position].q);
    $("#choice1").text(pool[position].c1);
    $("#choice2").text(pool[position].c2);
    $("#choice3").text(pool[position].c3);
    $("#choice4").text(pool[position].c4);

    $("#question").show();
    $("#choice1").show();
    $("#choice2").show();
    $("#choice3").show();
    $("#choice4").show();

    $("#timer").show();

    $("input:radio").show();
    $(".submit").show();

}



function playRound() {
            
    if (choice === pool[position].a){
        rightAnswer();
    }

    else if (choice != pool[position].a){
        wrongAnswer();
    }                
          
}

$(document).ready(function() {

    $(".restart").hide();

    $(".restart").on("click", function(event){
        event.preventDefault();
        restart();
    });

    $(".start").on("click", function(event){
        event.preventDefault();
        
        intervalId = setInterval(decrease, 1000);
    
        displayQuestion();
    
        $(".start").hide();
        $("#message").hide();
        $("input:radio").show();
        $(".submit").show();
    
    });

    $("input[type='submit']").click(function(event){
        event.preventDefault();
        choice = pool[position][$("input[type='radio']:checked").val()];
        $(".submit").hide();
        $(".next").show();
        $("input:radio").hide();
        clearInterval(intervalId);
        hideQuestion();
        delay= setTimeout(next, 3500);

        playRound();

    });

    $("input:radio").hide();
    $(".submit").hide();
    $("#timer").hide();
});
