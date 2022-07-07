const intro_button = document.querySelector(".intro_button button");
const rule_box = document.querySelector(".rule_box");
const start_button = document.querySelector(".buttons");
const quiz_box = document.querySelector(".quiz.box");
const results = document.querySelector(".results");
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
intro_button.onclick = ()=>{
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

next.onclick = ()=>{
    if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}