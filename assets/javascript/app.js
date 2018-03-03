window.onload = function() {
    $(".results").hide();
    $(".replay").hide();
    $(".question_box").hide();
    $(".answer").hide();
    var intervalId;
    var timeLeft;
    var clockRunning = false;
    var userChoice;
    var rightAnswers = 0;
    var wrongAnswers = 0;
    var questionIndex = 0;
    var questionShowing = false;
    var answerShowing = false;
    var gotRightAnswer;
    var questions = [{
        question : "Who did Han Solo shoot in the Mos Eisley Cantina?",
        options : ["Greedo", "Kit Fisto", "Lobot", "Fredo"],
        correctAnswer : "Greedo",
        image: "greedo.jpg",
        },
        {
        question: "What is the name of Bobba Fett's ship?",
        options: ["Millenium Falcon", "Executioner", "Slave I", "Tie Fighter"],
        correctAnswer: "Slave I",
        image: "slave-1.jpeg",
        },   
        {
        question: "What is the name of the Wookie Planet?",
        options: ["Kashyyyk", "Tatooine", "Arrakis", "Mustafar"],
        correctAnswer: "Kashyyyk",
        image: "kashyyyk.jpeg",
        },
        {
        question: "In 'Rogue One', from which planet were the Death Star plans stolen?",
        options: ["Naboo", "Yavin", "Ahch-To", "Scarif"],
        correctAnswer: "Scarif",
        image: "scarif.jpg",
        },
        {
        question : "Who is the first Ewok Leia meets?",
        options : ["Watto", "Wicket", "Wedge", "Wyclef"],
        correctAnswer : "Wicket",
        image: "wicket.png",
        },
        {
        question: "What is Emporer Palpatine's first name?",
        options: ["Siev", "Shiv", "Sheev", "Steve"],
        correctAnswer: "Sheev",
        image: "palpatine.jpg",
        },   
        {
        question: "Who tries to sell Obi-Wan deathsticks?",
        options: ["Elan Sleazebaggano", "Salacious Crumb", "Ponda Baba", "Bib Fortuna"],
        correctAnswer: "Elan Sleazebaggano",
        image: "elan.jpg",
        },
        {
        question: "Who is the Rancor's caretaker?",
        options: ["Max Rebo", "Unkar Plutt", "Nala Se", "Malakili"],
        correctAnswer: "Malakili",
        image: "malakili.png",
        },
        {
        question : "Who does not die in the Battle of Yavin?",
        options : ["Wedge Antilles", "Biggs Darklighter", "Garvin Dreis", "Porkins"],
        correctAnswer : "Wedge Antilles",
        image: "wedge.jpg",
        },
        {
        question: "Approximately how many forms of communication is C-3PO fluent in?",
        options: ["over 1 million", "over 4 million", "over 6 million", "over 10 million"],
        correctAnswer: "over 6 million",
        image: "3po.jpeg",
        },   
        {
        question: "What is Leia's adoptive last name?",
        options: ["Amidala", "Organa", "Skywalker", "Solo"],
        correctAnswer: "Organa",
        image: "leia.jpg",
        },
        {
        question: "What are they betting on when Lando looses the Millennium Falcon to Han?",
        options: ["Sabaac", "Pod Racing", "A drinking game", "Dejarik"],
        correctAnswer: "Sabaac",
        image: "lando.jpeg",
        }];
    //resets variables and appearance for start of new game
    function reset() {
        $(".results").hide();
        $(".replay").hide();
        questionIndex = 0;
        rightAnswers = 0;
        wrongAnswers = 0;
        showQuestion();
    }

    $("button", "#start").on("click", function() {
        reset();
    })
    //show the question and all the answers. Display decrementing time left to answer question
    function showQuestion() {
        timeLeft = 15;
        questionShowing = true;
        answerShowing = false;
        // console.log(questions.length);
        $(".instructions").hide();
        $(".answer").hide();
        $(".question_box").show();
        $("#q").text(questions[questionIndex].question);
        $("#option0").html(questions[questionIndex].options[0]);
        $("#option1").html(questions[questionIndex].options[1]);
        $("#option2").html(questions[questionIndex].options[2]);
        $("#option3").html(questions[questionIndex].options[3]);
        if (!clockRunning) {
            intervalId = setInterval(countdown, 1000);
            clockRunning = true;
            $("#countdown").text(timeLeft);    
        } 
    }
    //function to decrement the time left. Different if statements to determine what to do next when time expires, depending on where we are in the game
    function countdown() {
        timeLeft--;
        $("#countdown").text(timeLeft);
        if (((rightAnswers + wrongAnswers) === questions.length) && (timeLeft < 1)){
            clockRunning = false;
            showResults();
        } else if (questionShowing) {
            if (timeLeft === 0) {
                showAnswer();
            }
        } else if (answerShowing) {
            if (timeLeft === 0) {
                showQuestion();
            }
        }  
    }
    //assign the text in the options div selected to the variable userChoice
    $(".options").on("click", function() {
        userChoice = $(this).text();
        showAnswer();
    });
    //show answer with corresponding picture. Displays different text depending if answer was right or wrong. Shows for 5 seconds
    function showAnswer() {
        questionShowing = false;
        answerShowing = true;
        timeLeft = 5;
        $(".answer").show();
        $(".question_box").hide();
        //if correct answer chosen, add one to var correctAnswers, display correct answer
        if (userChoice === questions[questionIndex].correctAnswer) {
            rightAnswers++;
            $("#correctAnswer").text("Correct! The answer is " + questions[questionIndex].correctAnswer + "!");
            $("#image").html("<img src=assets/images/" + questions[questionIndex].image + " height=350px width=350px>");
        //if wrong answer chosen (or time runs out), add one to var wrongAnswers, display correct answer
        } else {
            wrongAnswers++;
            $("#correctAnswer").text("Incorrect! The answer is " + questions[questionIndex].correctAnswer);
            $("#image").html("<img src=assets/images/" + questions[questionIndex].image + " height=350px width=350px>");
        }
        questionIndex++;
    }
    //After all questions are answered and last answer displays, show summary
    function showResults() {
        clearInterval(intervalId);
        var percentage = (rightAnswers/(rightAnswers + wrongAnswers)) * 100;
        $(".answer").hide();
        $(".question_box").hide();
        $(".results").show();
        $(".replay").show();
        $(".rightAnswers").text(rightAnswers);
        $(".wrongAnswers").text(wrongAnswers);
        $(".percentage").text(percentage.toFixed(2) + "%");
    }
    //click replay button to reset/play again
    $(".replay").on("click", function() {
        reset();
    })
}