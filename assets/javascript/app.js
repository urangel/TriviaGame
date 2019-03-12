var pool = {
    1: {
        q: "Who's the best character?",
        c1: "Doug",
        c2: "Goku",
        c3: "catdog",
        c4: "nemo",
        a: "Goku"
    },

    2: {
        q: "question",
        c1: "choice1",
        c2: "choice2",
        c3: "choice3",
        c4: "choice4",
        a: "choice1"
    },
    3: {
        q: "question",
        c1: "choice1",
        c2: "choice2",
        c3: "choice3",
        c4: "answer",
        a: "answer"
    },
    4: {
        q: "question",
        c1: "choice1",
        c2: "choice2",
        c3: "choice3",
        c4: "answer",
        a: "answer"
    },
    5: {
        q: "question",
        c1: "choice1",
        c2: "choice2",
        c3: "choice3",
        c4: "answer",
        a: "answer"
    },
    6: {
        q: "question",
        c1: "choice1",
        c2: "choice2",
        c3: "choice3",
        c4: "choice4",
        a: "answer"
    },
    7: {
        q: "question",
        c1: "choice1",
        c2: "choice2",
        c3: "choice3",
        c4: "choice4",
        a: "answer"
    },
    8: {
        q: "question",
        c1: "choice1",
        c2: "choice2",
        c3: "choice3",
        c4: "choice4",
        a: "answer"
    },
    9: {
        q: "question",
        c1: "choice1",
        c2: "choice2",
        c3: "choice3",
        c4: "choice4",
        a: "answer"
    },
    10: {
        q: "question",
        c1: "choice1",
        c2: "choice2",
        c3: "choice3",
        c4: "choice44",
        a: "answer10"
    }

}

var choice = "";
var numCorrect = 0;
var numWrong = 0;
var countDownTimer = 30;
var intervalId;
var position = 1;
var delay;

function decrease() {

    if (countDownTimer <= 0) {
        console.log("time up");
        numWrong++;
        hideQuestion();
        $("input:radio").hide();
        $(".submit").hide();
        timeUp();
        clearInterval(intervalId);
        delay = setTimeout(next, 5000);
    }

    $("#timer").text(countDownTimer);
    countDownTimer--;

}

function next() {

    position++;
    
    countDownTimer = 30;
    
    intervalId = setInterval(decrease, 1000);

    displayQuestion();

    $(".start").hide();
    $("#message").hide();
    $("input:radio").show();
    $(".submit").show();
    $(".next").hide();
}

function wrongAnswer() {

    $("#message").text("Wrong! The answer was: " + pool[position].a)
    $("#message").show();

}

function timeUp() {

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

}



function playRound() {
            
    if (choice === pool[position].a){
        console.log("correct");
        $("#message").text("Correct!");
        $("#message").show();
        numCorrect++;

    }

    else if (choice != pool[position].a){
        console.log("wrong");
        numWrong++;
        wrongAnswer();

    }                
          
}

$(document).ready(function() {

    $(".start").on("click", function(event){
        event.preventDefault();
        
        intervalId = setInterval(decrease, 1000);
    
        displayQuestion();
    
        $(".start").hide();
        $("#message").hide();
        $("input:radio").show();
        $(".submit").show();
        $(".next").hide();
    
    });

    // $(".next").on("click", function(event){
    //     event.preventDefault();


    // });

    $("input[type='submit']").click(function(event){
        event.preventDefault();
        choice = pool[position][$("input[type='radio']:checked").val()];
        $(".submit").hide();
        $(".next").show();
        $("input:radio").hide();
        clearInterval(intervalId);
        hideQuestion();
        delay= setTimeout(next, 5000);

        playRound();

    });

    // $('input[type="radio"]').prop('checked', false);
    // $('input.submit').prop('clicked', false);

    $("input:radio").hide();
    $(".submit").hide();
    $("#timer").hide();
    $(".next").hide();
});

if (position === 11){
    $(".submit").hide();
    $("input:radio").hide();
    $("#message").text("Quiz is over! Here are your stats: ");
    $("#message").show();
    $("#message").append(numCorrect + numWrong)

}