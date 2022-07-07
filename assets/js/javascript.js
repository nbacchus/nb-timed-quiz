const intro_button = document.querySelector(".intro_button button");
const rule_box = document.querySelector(".rule_box");
//const start_button = document.querySelector(".");
const quiz_box = document.querySelector(".quiz.box");
const results = document.querySelector(".results");
const multiple_choice = document.querySelector(".multiple_choice");
const timeText = document.querySelector(".timer .time_left_text");
const timeCount = document.querySelector(".timer .timer_sec");

//intro button
intro_button.onclick = ()=>{
    rule_box.classList.add("activeInfo");
}