"use strict";

const todos = [
    "Wash the dishes",
    "Clean the gutters",
    "Mow the yard",
    "Do some coding",
    "Rake the leaves",
];

// Declare your two immutable variables
let shiftValue;
let popValue;

// Declaring constant variables to store references to the elements
// that will be updated by your code.
const answerOneEl = document.getElementById("answer-one");
const answerTwoEl = document.getElementById("answer-two");
const answerThreeEl = document.getElementById("answer-three");
const answerFourEl = document.getElementById("answer-four");
const answerFiveEl = document.getElementById("answer-five");
const answerSixEl = document.getElementById("answer-six");
const submissionBtn = document.getElementById("submission-btn");

function updateAnswerOne() {
 answerOneEl.textContent = todos;
}


function updateAnswerTwo() {
 answerTwoEl.innerHTML = todos[2];
}


function removeLastValue() {
 popValue = todos.pop();
}
function removeFirstValue() {
 shiftValue = todos.shift();
  }



function addShiftAndPopValues() {
 todos.push(popValue);
 todos.push(shiftValue);
}

function updateAnswerFour() {
    todos - todos.pop()
 answerFourEl.innerHTML = todos;
}


function reverseTodoList() {
 todos = todos.reverse()
}

function updateAnswerFive() {
    answerFiveEl.innerHTML = todos.reverse()
}

function updateAnswerSix() {
    todos = todos + todos.push(popValue) + todos.push(shiftValue);
 answerSixEl.innerText = todos;
}

function render() {
    updateAnswerOne()
    updateAnswerTwo()
    updateAnswerFour()
    updateAnswerFive()
    updateAnswerSix()
}

submissionBtn.addEventListener("click", function () {
    // Update this function
    render();
});
