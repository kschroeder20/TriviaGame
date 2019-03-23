//Create an array of quesions and answers
var questions = [{
    question: "Who was gaurding Kobe Bryant the night he scored 81 points?",
    option1: "Mike James",
    option2: "Jalen Rose",
    option3: "Chris Bosh",
    option4: "DeMar DeRozan",
    answer: "2",
    correctAnswer: "Jalen Rose",
    correctGif: '<iframe src="https://giphy.com/embed/INZUj2jZSruso" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
    incorrectGif: '<iframe src="https://giphy.com/embed/7QMHhcWu93NsY" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
}, {
    question: "What language did Amar'e Stoudemire speak on the court so no one could understand him?",
    option1: "Hebrew",
    option2: "Greek",
    option3: "Gaelic",
    option4: "Latin",
    answer: "1",
    correctAnswer: "Hebrew",
    correctGif: '<iframe src="https://giphy.com/embed/l3q2IGmSdIMKaW1J6" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
    incorrectGif: '<iframe src="https://giphy.com/embed/1ppmWNzRPZo6Vi9Cg4" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
}, {
    question: "Who has the most NBA career three pointers?",
    option1: "Steph Curry",
    option2: "James Harden",
    option3: "Kobe Bryant",
    option4: "Patrick Ewing",
    answer: "4",
    correctAnswer: "Patrick Ewing",
    correctGif: '<iframe src="https://giphy.com/embed/d1ohGg1rWKOOc" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
    incorrectGif: '<iframe src="https://giphy.com/embed/mBEjTX3CP9M7C" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
}, {
    question: "Who has the most Shaqtin' a Fool MVP's?",
    option1: "JaVale McGee",
    option2: "LeBron James",
    option3: "Lonzo Ball",
    option4: "Nick Young",
    answer: "1",
    correctAnswer: "Javale McGee",
    correctGif: '<<iframe src="https://giphy.com/embed/1BGBv47q2xqEFNRH6p" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
    incorrectGif: '<<iframe src="https://giphy.com/embed/eG7KXuFaVrnVu" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
}, {
    question: "Within how many years of retirement are most NBA players broke?",
    option1: "8",
    option2: "2",
    option3: "10",
    option4: "5",
    answer: "4",
    correctAnswer: "5 years",
    correctGif: '<<iframe src="https://giphy.com/embed/2wV6SspOmNSuo8wG5L" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
    incorrectGif: '<iframe src="https://giphy.com/embed/5gWGDxXSFcCoSWFQ2g" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
}, {
    question: "Where did Ron Artest apply to during his rookie season with the Bulls in order to get an employee discount?",
    option1: "Burger King",
    option2: "Publix",
    option3: "Circut City",
    option4: "Apple",
    answer: "3",
    correctAnswer: "Circut City",
    correctGif: '<<iframe src="https://giphy.com/embed/8gsE6LF92vJiE" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
    incorrectGif: '<iframe src="https://giphy.com/embed/yEZMznoPiKhgc" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
}, {
    question: "Who averaged a record 5.6 blocks per game in one season?",
    option1: "Mark Eaton",
    option2: "Hakeem Olajuwon",
    option3: "Dikembe Mutombo",
    option4: "Alonzo Mourning",
    answer: "1",
    correctAnswer: "Mark Eaton",
    correctGif: '<iframe src="https://giphy.com/embed/y65VoOlimZaus" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
    incorrectGif: '<iframe src="https://giphy.com/embed/y65VoOlimZaus" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
}, {
    question: "What NBA great owns 10% of all 'Five Guys Burgers' restaurants in the US?",
    option1: "Steve Nash",
    option2: "Shaquille O'Neal",
    option3: "Michael Jordan",
    option4: "Magin Johnson",
    answer: "2",
    correctAnswer: "Shaquille O'Neal",
    correctGif: '<iframe src="https://giphy.com/embed/E3oIfcPa9FiJa" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
    incorrectGif: '<iframe src="https://giphy.com/embed/11RGwPkgzAs4F2" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p>'
}, {
    question: "Who has missed the most Career field goals in NBA history?",
    option1: "LeBron James",
    option2: "Ray Allen",
    option3: "Wilt Chamberland",
    option4: "Kobe Bryant",
    answer: "4",
    correctAnswer: "Kobe Bryant",
    correctGif: '<iframe src="https://giphy.com/embed/7rqiYoGahYG3K" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
    incorrectGif: '<iframe src="https://giphy.com/embed/xT1XGESDlxj0GwoDRe" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
}, {
    question: "What NBA player said 'I'm the only player in the NBA who makes less money than his father'?",
    option1: "Austin Rivers",
    option2: "Steph Curry",
    option3: "Bill Laimbeer",
    option4: "Kevin Love",
    answer: "3",
    correctAnswer: "Bill Laimbeer",
    correctGif: '<iframe src="https://giphy.com/embed/l4FGHlaFW0VLSmUW4" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
    incorrectGif: '<iframe src="https://giphy.com/embed/mBEjTX3CP9M7C" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
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
    startThirty();
    //Set current page to quiz page
    game.currentPage = 0;

    //Show question
    var questionNumber = number;
    //Show question options
    $("#options-div").css('display', 'block');
    //Hide result, gifs, and start game content
    $("#result-div").css('display', 'none');
    $("#start-game").css('display', 'none');
    $("#result-gif").css('display', 'none');
    $("#question").text(questions[questionNumber].question).removeClass('blue-button');
    $("#option1").text(questions[questionNumber].option1).removeClass('blue-button');
    $("#option2").text(questions[questionNumber].option2).removeClass('blue-button');
    $("#option3").text(questions[questionNumber].option3).removeClass('blue-button');
    $("#option4").text(questions[questionNumber].option4).removeClass('blue-button');
}

$(".choice").on('click', function () {
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
    //if the final choice equals the value of the question's answer
    if (game.finalChoice === questions[game.questionsAnsweredCount].answer) {
        //Show Results
        $("#result-gif").css('display', 'block');
        //Remove any existing Gif from last question
        $("#result-gif").html("");
        //Add Gif depending on question
        $("#result-gif").html(questions[game.questionsAnsweredCount].correctGif);
        $('#result-text').text("You are correct!");
        //Add one to correct answer count
        game.correctAnswerCounter++
        //Start timer
        startTen();
    } else {
        //Show Results
        $("#result-gif").css('display', 'block');
        //Remove any existing Gif from last question
        $("#result-gif").html("");
        //Add Gif depending on question
        $("#result-gif").html(questions[game.questionsAnsweredCount].incorrectGif);
        //Show correct answer
        $('#result-text').text("You are incorrect. The correct answer is " + questions[game.questionsAnsweredCount].correctAnswer);
        //Start timer
        startTen();
    }
    //Add one to questionsAnswered count
    game.questionsAnsweredCount = game.questionsAnsweredCount + 1;
});

function noSelect() {
    //Stop Timer
    stop();
    //Hide options
    $("#options-div").css('display', 'none');
    //Show result
    game.currentPage = 1;
    $("#result-gif").css('display', 'block');
    //Remove any existing Gif from last question
    $("#result-gif").html("");
    //Add Gif depending on question
    $("#result-gif").html(questions[game.questionsAnsweredCount].incorrectGif);
    //Show correct answer
    $('#result-text').text("You are incorrect. The correct answer is " + questions[game.questionsAnsweredCount].correctAnswer);
    //Start timer
    startTen();
    //Add one to questionsAnswered count
    game.questionsAnsweredCount = game.questionsAnsweredCount + 1;

}

//Timer Functions
function startThirty() {
    game.time = 30;
    game.timerRunning = true;
    //Clear anything from last question
    clearInterval(game.intervalId);
    game.intervalId = setInterval(count, 10);
}

function startTen() {
    game.time = 5;
    game.timerRunning = true;
    //Clear anything from last question
    clearInterval(game.intervalId);
    game.intervalId = setInterval(count, 10);
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
    //Show time on page
    $("#timer").text(newTime);
    //If time runs out, the user is on a results page, and there are more questions, generate a new question
    if (game.time === 0 && game.currentPage === 1 && game.questionsAnsweredCount < questions.length) {
        stop();
        newQuestion(game.questionsAnsweredCount);
    }
    //If time runs out, the user is on a quiz page, and there are more questions, generate a new question
    else if (game.time === 0 && game.currentPage === 0 && game.questionsAnsweredCount < questions.length) {
        stop();
        noSelect();

    }
    //If time runs out, the user is on a results page, and there are no more questions, show final results
    else if (game.time === 0 && game.currentPage === 1 && game.questionsAnsweredCount === questions.length) {
        game.gameRunning = false;
        stop();
        //Hide options and question results
        $("#options-div").css('display', 'none');
        $("#result-div").css('display', 'none');
        $("#result-gif").css('display', 'none');

        //Show final result
        $("#final-div").css('display', 'block');
        $("#replay-button").css('display', 'block');
        $("#final-div").text("Game over! You got " + game.correctAnswerCounter + " out of " + questions.length + " questions correct.")
    }
}

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

//Resets game when replay button is clicked
$("#replay-button").on("click", function () {
    location.reload();
});