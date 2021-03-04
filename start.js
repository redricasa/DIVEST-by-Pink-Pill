var startBtn = document.getElementById("start");
var startPrompt = document.getElementById("start-prompt");
var questionPrompt = document.getElementById("question-prompt");
var timer = document.getElementById("timer-count");
var questionTitle = document.getElementById("questions-text")
var answerContainer = document.getElementById("answers")
var currentIndex = 0


var questions = [
    { 
        question: "Is the sky blue?", 
        options: ["True", "False"] 
    },
    
    { 
        question: "What do dogs eat?",
        options: ["Dog food", "Cat food", "Pasta", "Pack rats"]
    },
    { 
        question: "How long is class?",
        options: ["3 1/2 hours", "2 hours", "14 hours", "4 1/2 hours"]
    },
  
    { 
        question: "Is Tucson in California?",
        options: ["True", "False"]
    },

    { 
        question: "How many pets do I have?",
        options: ["3", "2", "0", "5"]    
    },
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