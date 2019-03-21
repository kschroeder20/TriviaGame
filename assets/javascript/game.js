//Create an array of quesions and answers
var questions = [{
    question: "Who was gaurding Kobe Bryant the night he scored 81 points?",
    option1: "Mike James",
    option2: "Jalen Rose",
    option3: "Chris Bosh",
    option4: "DeMar DeRozan",
    answer: "2"
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
    questionsAnsweredCount: 0
}

//For all of the other questions, run this function
var newQuestion = function (number) {
    var questionNumber = number
    $("#options-div").css('display', 'block');
    $("#result-div").css('display', 'none');
    $("#start-game").css('display', 'none');
    $("#correct-gif").css('display', 'none');
    $("#question").text(questions[questionNumber].question).removeClass('blue-button');
    $("#option1").text(questions[questionNumber].option1).removeClass('blue-button');
    $("#option2").text(questions[questionNumber].option2).removeClass('blue-button');
    $("#option3").text(questions[questionNumber].option3).removeClass('blue-button');
    $("#option4").text(questions[questionNumber].option4).removeClass('blue-button');
}

//Start game button
$("#start-game").on("click", function () {
    game.gameRunning = true;
    //Start timer when the start game button is pressed
    game.timerRunning = true;
    //Generate question
    newQuestion(game.questionsAnsweredCount);
});

//Capture option that the user selects
$("button").on('click', function () {
    //Toggle between blue background for button
    if ($(this).hasClass("choice") && game.gameRunning === true && game.choiceClicked === false) {
        game.choiceClicked = true;
        game.finalChoice = $(this).val();
        $(this).addClass("blue-button");
    } else if ($(this).hasClass("choice") && game.gameRunning === true && game.choiceClicked === true) {
        game.choiceClicked = true;
        game.finalChoice = $(this).val();
        $(".choice").removeClass("blue-button");
        $(this).addClass("blue-button");

    }
});
//When user submits the answer
$("#submit-button").on('click', function () {
    //Hide options
    $("#options-div").css('display', 'none');
    //Show result
    $("#result-div").css('display', 'block');
    if (game.finalChoice === questions[game.questionsAnsweredCount].answer) {
         $("#correct-gif").css('display', 'block');
        $('#result-text').text("You are correct!")
        game.correctAnswerCounter = game.correctAnswerCounter + 1;
    } else {
        $('#result-text').text("You are incorrect :(")
    }
})

//When Next button is clicked on the results page, add one to the questions answered count
$('#next-button').on('click', function () {
    game.questionsAnsweredCount = game.questionsAnsweredCount + 1
    //Alert if game is over - Temp
    if (game.questionsAnsweredCount === questions.length && game.gameRunning === true) {
        game.gameRunning = false;
        //Hide options and question results
        $("#options-div").css('display', 'none');
        $("#result-div").css('display', 'none');
        $("#correct-gif").css('display', 'none');
        //Show final result
        $("#final-div").css('display', 'block');
        $("#final-div").text("Game over! You got "+ game.correctAnswerCounter + " out of 10 questions correct.")
    } else {
        newQuestion(game.questionsAnsweredCount);
    }
});
//If answer is wrong, replace button with fail gif and add 1 to wrong answer count

//If answer is right, replace buttons with success gif and add 1 to right answer count

//Move to next question

//Return score at the end