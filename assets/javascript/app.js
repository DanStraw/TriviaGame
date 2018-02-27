//on page load, instructions are displayed. They will stay on the screen for 10 seconds.
window.onload = function() {
    $(".question_box").hide();
    

    var questionsArray = ["q1", "q2", "q3", "q4"];
    var intervalId;
    var timeLeft = 5;
    $("#start_timer").text(timeLeft);

    function start() {
        intervalId = setInterval(countdown, 1000);
        $("#start_timer").text(timeLeft);
    }
    start();

    function countdown() {
        timeLeft--;
        $("#start_timer").text(timeLeft);
        $("#countdown").text(timeLeft);
        console.log(timeLeft);
        if (timeLeft === 0) {
            clearInterval(intervalId);
            $(".instructions").hide();
            newQuestion();
        }
    };

    function newQuestion() {
        $(".question_box").show();
        timeLeft = 20;
        intervalId = setInterval(countdown, 1000);
        $("#countdown").text(timeLeft);
        
        var q1 = {
            question: "Who did Han Solo shoot in the Mos Eisley Cantina?",
            options: ["Greedo", "Kit Fisto", "Lobot", "Fredo"],
            correctAnswer: "Greedo",
            answerPic: "../assets/images/greedo.jpg",
        }
        
    }
}

//after 10 seconds, instructions will disappear and first question will appear

//countdown of 20 seconds for the quesiton begins. Player can choose from 4 options

//if correct answer chosen, add one to var correctAnswers, display correct answer, and start 5 second countdown to start of next question.

//if wrong answer chosen, add one to var wrongAnswers, display correct answer, and start 5 second countdown to start of next question.

//if time runs out on a question, do the same as wrong answers, but also add 1 to var unAnswered