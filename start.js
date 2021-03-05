var startBtn = document.getElementById("start");
var startPrompt = document.getElementById("start-prompt");
var questionPrompt = document.getElementById("question-prompt");
var timer = document.getElementById("timer-count");
var questionTitle = document.getElementById("questions-text");
var answerContainer = document.getElementById("answers");
var currentIndex = 0;


var questions = [
    { 
        question: "What does 'Everything is not your fight' mean?", 
        options: ["Don't be a Social Justice Warrior", "You can't stand up for yourself", "fighting is NOT feminine", "Make your attention/loyalty/anger expensive"] 
    },
    { 
        question: "which latin term is associated with the I in divest (INQUIRE)",
        options: ["Que bonita!", "Qui bono?", "Question who benefits from your reaction", "Italiano!"]
    },
    { 
        question: "The 'V' stands for...",
        options: [" Verify information", "Vet everyone-including frineds and family", "Vested"]
    },
    { 
        question: "Examples of Disengaging from what doesn't serve you include: ",
        options: ["Only Engaging in materials that are positive", "Disengage from social media that is draining and makes you feel bad", "Leave patterns of thinking that says that you are not valuable"]
    },
    { 
        question: "What does 'Self FIRST' mean?",
        options: ["S is the 5th letter in the acronym", "Save yourself first"]    
    },
    {
        question: "'Tell others who are ready' means",
        options: ["Televize your movements to everyone","Move in silence","Test people to see if they are ready for the message before telling them about divestment"]
    }
];
// map of question with corresponding answers
var answers = { 0:0 , 1:0, 2:3 , 3:2};

startBtn.addEventListener("click", function (e) {
    // e.preventDefault();
    timerStart();
    hidePrompt();
    renderQuestion();
});
// counter starts counting down from 80 seconds
function timerStart (){
    var count = 80;
    var interval = setInterval(timerFunction, 1000);
    function timerFunction (){
        if (count === 0){
            clearInterval(interval);
            document.getElementById("timer-count").innerHTML = "TIMES UP!";
            return;
        };
        --count;
        
        document.getElementById("timer-count").innerHTML = count; 
        console.log(count);
    }
}
function hidePrompt(){
    // hides prompt
    startPrompt.style.display = "none";
};

function renderQuestion(){
   
    questionTitle.innerHTML= questions[currentIndex].question;

    for (let option of questions[currentIndex].options) {
       var btn = document.createElement("button")
       btn.textContent = option
       answerContainer.append(btn)
    }
}