//on page load, instructions are displayed. They will stay on the screen for 10 seconds.
window.onload = function() {
    $(".question_box").hide();
    
    
    var q1 = {
        question: "Who did Han Solo shoot in the Mos Eisley Cantina?",
        options: ["Greedo", "Kit Fisto", "Lobot", "Fredo"],
        correctAnswer: "Greedo",
        answerPic: src="../assets/images/greedo.jpg",
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
        answerPic: "",
    }
    var questionsArray = [q1, q2, q3, q4];
    var intervalId;
    var timeLeft = 5;
    $("#start_timer").text(timeLeft);

     //after 10 seconds, instructions will disappear and first question will appear   
    function start() {
        intervalId = setInterval(countdown, 1000);
        $("#start_timer").text(timeLeft);
    }
    start();

    function countdown() {
        timeLeft--;
        $("#start_timer").text(timeLeft);
        $("#countdown").text(timeLeft);
        // console.log(timeLeft);
        if (timeLeft === 0) {
            clearInterval(intervalId);
            $(".instructions").hide();
            newQuestion();
        }
    };

    //countdown of 20 seconds for each question. Player can choose from 4 options
    function newQuestion() {
        $(".question_box").show();
        timeLeft = 20;
        intervalId = setInterval(countdown, 1000);
        $("#countdown").text(timeLeft);
        // console.log(typeof questionsArray);
        
        
        var randomNumber = Math.floor(Math.random() * questionsArray.length);
        var selectedQuestion = questionsArray[randomNumber];
        questionsArray.splice(randomNumber, 1);
        
        
        console.log(questionsArray);
        // console.log(this.selectedQuestion.question);

        $("#q").text(selectedQuestion.question);
        $("#option0").text(selectedQuestion.options[0]);
        $("#option1").text(selectedQuestion.options[1]);
        $("#option2").text(selectedQuestion.options[2]);
        $("#option3").text(selectedQuestion.options[3]); 
    }

    function compare() {
        $(".options").on("click", function() {

        })
    }
}




//if correct answer chosen, add one to var correctAnswers, display correct answer, and start 5 second countdown to start of next question.

//if wrong answer chosen, add one to var wrongAnswers, display correct answer, and start 5 second countdown to start of next question.

//if time runs out on a question, do the same as wrong answers, but also add 1 to var unAnswered