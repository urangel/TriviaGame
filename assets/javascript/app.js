var pool = {
    1: {
        q: "question1",
        c1: "choice1",
        c2: "choice2",
        c3: "choice3",
        c4: "choice4",
        a: "spaghetti"
    },

    2: {
        q: "question",
        c1: "choice1",
        c2: "choice2",
        c3: "choice3",
        c4: "choice4",
        a: "answer"
    },
    3: {
        q: "question",
        c1: "choice1",
        c2: "choice2",
        c3: "choice3",
        c4: "choice4",
        a: "answer"
    },
    4: {
        q: "question",
        c1: "choice1",
        c2: "choice2",
        c3: "choice3",
        c4: "choice4",
        a: "answer"
    },
    5: {
        q: "question",
        c1: "choice1",
        c2: "choice2",
        c3: "choice3",
        c4: "choice4",
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
        c4: "choice4",
        a: "answer"
    }

}

// How to acces the first choice in q2 object in b object in pool object
// console.log(pool.b.q2.c1);
var numCorrect;
var numWrong;
var guess = false;
var countDownTimer;
var position = 1;

function beginGame() {
    
    $(".start").hide();
    $("input:radio").show();
    $(".submit").show();

    for (i=1; i<11; i++){
        
        if (position === 11){
            $("#message").text("Quiz is over! Here are your stats: ");
            $("#message").append(numCorrect + numWrong)
        
        }
        
        else {

            $("#question").text(pool[i].q);
            $("#choice1").text(pool[i].c1);
            $("#choice2").text(pool[i].c2);
            $("#choice3").text(pool[i].c3);
            $("#choice4").text(pool[i].c4);
            position++;

            $("input: submit").on("click", function(){
                
                var choice = $("input: radio").checked.value;
                $("#message").text("The answer was: " + pool[i].a)
                $("#message").show();

                // if pool[i].[radio button's (that is checked) value] === pool[i].a then
                if (pool[i][c1]){
                    numCorrect++;
                }
            });
        }
    }
}

$(document).ready(function() {

    $("input:radio").hide();
    $(".submit").hide();
    $("#message").hide();

    $(".start").on("click", function(){
        beginGame();
        
    });

});
