"use strict";

const counterElement = document.getElementById("counter");
const counter2Element = document.getElementById("counter-2");

const incrementElement = document.getElementById("increment");
const decrementElement = document.getElementById("decrement");

const increment2Element = document.getElementById("increment-2");
const decrement2Element = document.getElementById("decrement-2");

incrementElement.addEventListener("click", increment);
decrementElement.addEventListener("click", decrement);

// initial state
let count = 0

function increment() {
    count++;
    counterElement.innerText = count;
}

function decrement() {
    if (count > 0) {
        count--;
    } else {
        count = 0;
    }
    counterElement.innerText = count;
}

increment2Element.addEventListener("click", incrementNow);
decrement2Element.addEventListener("click", decrementNow);

// initial state
let countNow = 0

function incrementNow() {
    countNow++;
    counter2Element.innerText = countNow;
}

function decrementNow() {
    if (countNow > 0) {
        countNow--;
    } else {
        countNow = 0;
    }
    counter2Element.innerText = countNow;
}