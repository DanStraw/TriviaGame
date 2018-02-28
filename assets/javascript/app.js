window.onload = function() {

    var intervalId;
    var timeLeft;
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var gotRightAnswer;
    var displayAnswer;
    var randomNumber;
    var selectedQuestion;
    var q1 = {
        question: "Who did Han Solo shoot in the Mos Eisley Cantina?",
        options: ["Greedo", "Kit Fisto", "Lobot", "Fredo"],
        correctAnswer: "Greedo",
        // answerPic: "../assets/images/greedo.jpg",
    }
    var q2 = {
        question: "What is the name of Bobba Fett's ship?",
        options: ["Millenium Falcon", "Executioner", "Slave I", "Tie Fighter"],
        correctAnswer: "Slave I",
        answerPic: "",
    }   
    var q3 = {
        question: "What is the name of the Wookie Planet?",
        options: ["Kashyyyk", "Tatooine", "Arrakis", "Mustafar"],
        correctAnswer: "Kashyyyk",
        answerPic: "",
    }
    var q4 = {
        question: "In 'Rogue One', from which planet were the Death Star plans stolen?",
        options: ["Naboo", "Yavin", "Ahch-To", "Scarif"],
        correctAnswer: "Scarif",
        // answerPic: "",
    }
    var questionsArray = [q1, q2, q3, q4];

    
//on page load, instructions are displayed. They will stay on the screen for 10 seconds.
    
    $(".question_box").hide();
    startGame();

     //click start button to trigger 1st question  
    function startGame() {
        $("button").on("click", function() {
            console.log("play");
            newQuestion();
            $("button").hide();
            $(".instructions").hide();
        })
    }

    function questionCountdown() {
        timeLeft--;
        $("#countdown").text(timeLeft);
        // console.log(timeLeft);
        if (timeLeft === 0) {
            clearInterval(intervalId);
            $("#timeLeft").hide();
            showAnswer();
        }
    };

    function answerCountdown() {
        timeLeft--;
        // console.log(timeLeft);
        if (timeLeft === 0) {
            clearInterval(intervalId);
            $("#timeLeft").show();
            newQuestion();
        }
    };

    //countdown of 20 seconds for each question. Player can choose from 4 options
    function newQuestion() {
        $(".question_box").show();
        timeLeft = 12; //CHANGE THIS BACK TO 20
        intervalId = setInterval(questionCountdown, 1000);
        $("#countdown").text(timeLeft);

        randomNumber = Math.floor(Math.random() * questionsArray.length);
        selectedQuestion = questionsArray[randomNumber];
        // displayAnswer = (selectedQuestion.correctAnswer);
        console.log(selectedQuestion);

        $("#q").text(selectedQuestion.question);
        $("#option0").text(selectedQuestion.options[0]);
        $("#option1").text(selectedQuestion.options[1]);
        $("#option2").text(selectedQuestion.options[2]);
        $("#option3").text(selectedQuestion.options[3]); 
        // questionsArray.splice(randomNumber, 1);
        if (questionsArray.length = 0) {
            endGame();
        }
    
        $(".options").click(function() {
            // console.log(selectedQuestion.correctAnswer);
            var userChoice = $(this).text();
            console.log(userChoice);
            clearInterval(intervalId);
            $(".question_box").hide();
            if (userChoice === selectedQuestion.correctAnswer) {
                console.log("true");
                correctAnswers++;
                gotRightAnswer = true;
            } else {
                wrongAnswers++;
            }
            
            console.log(questionsArray.length);
            showAnswer();

        })
    }
   
    
    function showAnswer() {
        timeLeft = 5;
        intervalId = setInterval(answerCountdown, 1000);
        console.log(timeLeft);
        $(".question_box").hide();
        $(".answer").show();
        if (gotRightAnswer) {
            $("#correctAnswer").text("Correct! The Answer is" + displayAnswer);
        } else {
            $("#correctAnswer").text("Incorrect! The Answer is" + displayAnswer);
        }
    }

    function endGame() {
        $("#right_answers").text(correctAnswers);
        $("#wrong_answers").text(wrongAnswers);
        $("#percentage").val(correctAnswers/(correctAnswers + wrongAnswers));
        clearInterval(intervalId);
    }    
}




//if correct answer chosen, add one to var correctAnswers, display correct answer, and start 5 second countdown to start of next question.

//if wrong answer chosen, add one to var wrongAnswers, display correct answer, and start 5 second countdown to start of next question.

//if time runs out on a question, do the same as wrong answers, but also add 1 to var unAnswered