var pool = {
    a: {
        q1 : {
            q: "",
            c1: "",
            c2: "",
            c3: "",
            c4: "",
            a: ""
        }
    },
    b: {
        q2 : {
            q: "question",
            c1: "choice1",
            c2: "choice2",
            c3: "choice3",
            c4: "choice4",
            a: "answer"
        }
    },
    c: {
        q3 : {
            q: "question",
            c1: "choice1",
            c2: "choice2",
            c3: "choice3",
            c4: "choice4",
            a: "answer"
        }
    },
    d: {
        q4 : {
            q: "question",
            c1: "choice1",
            c2: "choice2",
            c3: "choice3",
            c4: "choice4",
            a: "answer"
        }
    },
    e: {
        q5 : {
            q: "question",
            c1: "choice1",
            c2: "choice2",
            c3: "choice3",
            c4: "choice4",
            a: "answer"
        }
    },
    f: {
        q6 : {
            q: "question",
            c1: "choice1",
            c2: "choice2",
            c3: "choice3",
            c4: "choice4",
            a: "answer"
        }
    },
    g: {
        q7 : {
            q: "question",
            c1: "choice1",
            c2: "choice2",
            c3: "choice3",
            c4: "choice4",
            a: "answer"
        }
    },
    h: {
        q8 : {
            q: "question",
            c1: "choice1",
            c2: "choice2",
            c3: "choice3",
            c4: "choice4",
            a: "answer"
        }
    },
    i: {
        q9 : {
            q: "question",
            c1: "choice1",
            c2: "choice2",
            c3: "choice3",
            c4: "choice4",
            a: "answer"
        }
    },
    j: {
        q10 : {
            q: "question",
            c1: "choice1",
            c2: "choice2",
            c3: "choice3",
            c4: "choice4",
            a: "answer"
        }
    }

}

// How to acces the first choice in q2 object in b object in pool object
// console.log(pool.b.q2.c1);
var numCorrect;
var numWrong;
var guess = false;
var countDownTimer;

function beginGame() {
    // hide start button
    $(".start").hide();

    //reveal question 1
    
    //start timer for question 1

}

$(document).ready(function() {

$(".submit").hide();



$(".start").on("click", function(){
    begingGame();
    
})


// will need if statement for if guess right or if guess wrong then increase counter

if (guess = false){
    numWrong++;

}

else if (guess = true){
    numCorrect++;
}

});