const intro_box = document.querySelector(".intro_box");
const rule_box = document.querySelector(".rule_box");
const start_button = document.querySelector(".buttons");
const quiz_box = document.querySelector(".quiz_box");
const results_box = document.querySelector(".results");
const multiple_choice = document.querySelector(".multiple_choice");
const timeText = document.querySelector(".timer .time_left_text");
const timeCount = document.querySelector(".timer .timer_sec");

//questions
let questions = [
    {
    numb: 1,
    question: "Commonly used data types DO NOT inlude",
    answer: "alerts",
    options: [
      "strings",
      "booleans",
      "alerts",
      "numbers"
    ]
  },
    {
    numb: 2,
    question: "The condition in an if/else statement is enclosed with ________.",
    answer: "parenthesis",
    options: [
      "quotes",
      "curly brackets",
      "parenthesis",
      "square brackets"
    ]
  },
    {
    numb: 3,
    question: "Arrays in Javascript can be used to store _______.",
    answer: "all of the above",
    options: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above"
    ]
  },
    {
    numb: 4,
    question: "String values must be enclosed within _______ when being assigned to variables",
    answer: "quotes",
    options: [
      "commas",
      "curly brackets",
      "quotes",
      "parenthesis"
    ]
  },
    {
    numb: 5,
    question: "A useful tool used during development and debugging for printing content to the debugger is:",
    answer: "console.log",
    options: [
      "Javascript",
      "terminal/bash",
      "for loops",
      "console.log"
    ]
  }
];

//intro button to show the rules
intro_box.onclick = ()=>{
    rule_box.classList.add("activeInfo");
}

//start quiz and timer
start_button.onclick = ()=>{
    rule_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuetions(0);
    queCounter(1);
    startTimer(50);
    startTimerLine(0);
}

let timeValue =  50;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;

//go to next question
next_button.onclick = ()=>{
    if(que_count < questions.length - 1){
        que_count++;
        que_numb++;
        showQuetions(que_count);
        queCounter(que_numb);
        clearInterval(counter);
        startTimer(timeValue);
        timeText.textContent = "Time Left";
        next_button.classList.remove("show");
    }else{
        showResult();
    }
}

//questions and multiple choice
function showQuetions(index){
    const questions_list = document.querySelector(".questions_list");

    //creating a new span and div tag for question and multiple choice options
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    questions_list.innerHTML = que_tag;
    multiple_choice.innerHTML = option_tag;
    
    const option = multiple_choice.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

function optionSelected(answer){
    clearInterval(counter);
    let userAns = answer.textContent;
    let correcAns = questions[que_count].answer;
    const allOptions = multiple_choice.children.length;
    
    if(userAns == correcAns){
        userScore += 1;
        answer.classList.add("correct");
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect");
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(multiple_choice.children[i].textContent == correcAns){
                multiple_choice.children[i].setAttribute("class", "option correct");
                console.log("Auto selected correct answer.");
            }
        }
    
    next_button.classList.add("show");
    }
}

function showResult(){
    rule_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    results_box.classList.add("activeResult");
    const scoreText = results_box.querySelector(".score_text");
}