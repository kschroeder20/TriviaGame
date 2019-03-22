//Create an array of quesions and answers
var questions = [{
    question: "Who was gaurding Kobe Bryant the night he scored 81 points?",
    option1: "Mike James",
    option2: "Jalen Rose",
    option3: "Chris Bosh",
    option4: "DeMar DeRozan",
    answer: "2",
    correctAnswer: "Jalen Rose"
}, {
    question: "What language did Amar'e Stoudemire speak on the court so no one could understand him?",
    option1: "Hebrew",
    option2: "Greek",
    option3: "Gaelic",
    option4: "Latin",
    answer: "1"
}, {
    question: "Who has the most NBA career three pointers?",
    option1: "Steph Curry",
    option2: "James Harden",
    option3: "Kobe Bryant",
    option4: "Patrick Ewing",
    answer: "4"
}, {
    question: "Who has the most Shaqtin' a Fool MVP's?",
    option1: "JaVale McGee",
    option2: "LeBron James",
    option3: "Lonzo Ball",
    option4: "Nick Young",
    answer: "1"
}, {
    question: "Within how many years of retirement are most NBA players broke?",
    option1: "8",
    option2: "2",
    option3: "10",
    option4: "5",
    answer: "4"
}, {
    question: "Where did Ron Artest apply to during his rookie season with the Bulls in order to get an employee discount?",
    option1: "Burger King",
    option2: "Publix",
    option3: "Circut City",
    option4: "Apple",
    answer: "3"
}, {
    question: "Who averaged a record 5.6 blocks per game in one season?",
    option1: "Mark Eaton",
    option2: "Hakeem Olajuwon",
    option3: "Dikembe Mutombo",
    option4: "Alonzo Mourning",
    answer: "1"
}, {
    question: "What NBA great owns 10% of all 'Five Guys Burgers' restaurants in the US?",
    option1: "Steve Nash",
    option2: "Shaquille O'Neal",
    option3: "Michael Jordan",
    option4: "Magin Johnson",
    answer: "2"
}, {
    question: "Who has missed the most Career field goals in NBA history?",
    option1: "LeBron James",
    option2: "Ray Allen",
    option3: "Wilt Chamberland",
    option4: "Kobe Bryant",
    answer: "4"
}, {
    question: "What NBA player said 'I'm the only player in the NBA who makes less money than his father'?",
    option1: "Austin Rivers",
    option2: "Steph Curry",
    option3: "Bill Laimbeer",
    option4: "Kevin Love",
    answer: "4"
}]

//Create global variables
var game = {
    gameRunning: false,
    timerRunning: false,
    correctAnswerCounter: 0,
    wrongAnswerCounter: 0,
    choiceClicked: false,
    finalChoice: 0,
    questionsAnsweredCount: 0,
    intervalId: '',
    time: 30,
    currentPage: 0 //currentPage is used to determine if the user is on a quiz page (0) or a result page (1)
}

var gifArrInt = Math.round(Math.random() * 3);

var correctGifs = ['../images/correct1.gif', '../images/correct2.gif', '../images/correct3.gif', '../images/correct4.gif', '../images/correct5.gif'];

var incorrectGifs = ['../images/fail1.gif', '../images/fail2.gif', '../images/fail3.gif', '../images/fail4.gif', '../images/fail5.gif'];


//Start game button
$("#start-game").on("click", function () {
    game.gameRunning = true;
    //Generate question
    newQuestion(game.questionsAnsweredCount);
});

//For all of the other questions, run this function
var newQuestion = function (number) {
    //Start timer when the start game button is pressed
    $('#timer').text('00:30');
    start();
    //Set current page to quiz page
    game.currentPage = 0;
    var questionNumber = number;
    $("#options-div").css('display', 'block');
    $("#result-div").css('display', 'none');
    $("#start-game").css('display', 'none');
    $("#result-gif").css('display', 'none');
    $("#question").text(questions[questionNumber].question).removeClass('blue-button');
    $("#option1").text(questions[questionNumber].option1).removeClass('blue-button');
    $("#option2").text(questions[questionNumber].option2).removeClass('blue-button');
    $("#option3").text(questions[questionNumber].option3).removeClass('blue-button');
    $("#option4").text(questions[questionNumber].option4).removeClass('blue-button');
}

$(".choice").on('click', function (){
//Capture option that the user selects
    game.choiceClicked = true;
    game.finalChoice = $(this).val();
    //Stop Timer
    stop();
    //Hide options
    $("#options-div").css('display', 'none');
    //Show result
    $("#result-div").css('display', 'block');
    //Set current page to results page
    game.currentPage = 1;
    //Add one to questionsAnswered count
    //if the final choice equals the value of the question's answer
    if (game.finalChoice === questions[game.questionsAnsweredCount].answer) {
        $("#result-gif").css('display', 'block');
        $("#result-gif").html(correctGifs[gifArrInt]);
        $('#result-text').text("You are correct!");
        //start timer
        start();
    } else {
        $("#result-gif").css('display', 'block');
        $("#result-gif").html(incorrectGifs[gifArrInt]);
        $('#result-text').text("You are incorrect :(. The correct answer is " + questions[game.questionsAnsweredCount].correctAnswer);
        start();
    }
    game.questionsAnsweredCount = game.questionsAnsweredCount + 1;
});

function noSelect() {
    stop();
    //Hide options
    $("#options-div").css('display', 'none');
    //Show result
    game.currentPage = 1;
    game.questionsAnsweredCount = game.questionsAnsweredCount + 1;
    start();
    $("#result-div").css('display', 'block');
    $("#result-gif").css('display', 'block');
    $("#result-gif").html(incorrectGifs[gifArrInt]);
    $('#result-text').text("You are incorrect :(");

}

//When user submits the answer
// $("#submit-button").on('click', function () {
//     //Stop Timer
//     game.timerRunning = false;
//     //Hide options
//     $("#options-div").css('display', 'none');
//     //Show result
//     $("#result-div").css('display', 'block');
//     //Set current page to results page
//     game.currentPage = 1;
//     if (game.finalChoice === questions[game.questionsAnsweredCount].answer) {
//         $("#result-gif").css('display', 'block');
//         $("#result-gif").html(correctGifs[gifArrInt]);
//         $('#result-text').text("You are correct!");
//         game.correctAnswerCounter = game.correctAnswerCounter + 1;
//     } else {
//          $("#result-gif").css('display', 'block');
//          $("#result-gif").html(incorrectGifs[gifArrInt]);
//         $('#result-text').text("You are incorrect :(")
//     }
// })

//When Next button is clicked on the results page, add one to the questions answered count
// $('#next-button').on('click', function () {
//     game.questionsAnsweredCount = game.questionsAnsweredCount + 1
//     //Alert if game is over - Temp
//     if (game.questionsAnsweredCount === questions.length && game.gameRunning === true) {
//         game.gameRunning = false;
//         //Hide options and question results
//         $("#options-div").css('display', 'none');
//         $("#result-div").css('display', 'none');
//         $("#result-gif").css('display', 'none');

//         //Show final result
//         $("#final-div").css('display', 'block');
//         $("#final-div").text("Game over! You got " + game.correctAnswerCounter + " out of 10 questions correct.")
//     } else {
//         newQuestion(game.questionsAnsweredCount);
//     }
// });
//If answer is wrong, replace button with fail gif and add 1 to wrong answer count

//If answer is right, replace buttons with success gif and add 1 to right answer count

//Move to next question

//Return score at the end
//Timer Functions
function start() {
    game.time = 30;
    if (game.timerRunning === false && game.currentPage !== 1) {
        game.timerRunning = true;
        game.intervalId = setInterval(count, 50);
    } else if (game.timerRunning === false && game.currentPage === 1) {
        game.timerRunning = true;
        game.intervalId = setInterval(count, 50);
    }
}

function stop() {
    //Stop the count here and set the clock to not be running.
    game.timerRunning = false;
    clearInterval(game.intervalId);
}

function count() {

    //  Decrease time by 1
    game.time = game.time - 1;
    // Get the current time, pass that into the timeConverter function, and save the result in a variable.
    var newTime = timeConverter(game.time);
    //  TODO: Use the variable you just created to show the converted time in the "display" div.
    $("#timer").text(newTime);
    if (game.time === 0 && game.currentPage === 1) {
        stop();
        newQuestion(game.questionsAnsweredCount);
    } else if (game.time === 0 && game.currentPage === 0) {
        stop();
        noSelect();
    }
}

//  THIS FUNCTION IS DONE FOR US!
//  We do not need to touch it.

function timeConverter(t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    } else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}