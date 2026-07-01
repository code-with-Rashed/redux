"use strict";

const allMatches = document.querySelector(".all-matches");
const addMatchButton = document.querySelector(".add-match");
const resetScoreButton = document.querySelector(".reset");
const matchTemplate = document.getElementById("match-template");
const MATCH_ROW_CLASS_PREFIX = "match-row-"; // Prefix for match row class names
const MATCH_ROW_SELECTOR_PREFIX = "." + MATCH_ROW_CLASS_PREFIX; // Prefix for match row selectors
let matchListCount = 0;

// Function to create a new match row
const makeMatch = () => {
    const match = matchTemplate.content.cloneNode(true);
    matchListCount++;
    match.querySelector(".match").classList.add(MATCH_ROW_CLASS_PREFIX + matchListCount);
    match.querySelector(".delete-match").setAttribute("onclick", "removeMatch(" + matchListCount + ")");
    match.querySelector(".match-name").innerText = "Match " + matchListCount;
    match.querySelector(".incrementForm").setAttribute("onsubmit", "incrementForm(event, " + matchListCount + ")");
    match.querySelector(".decrementForm").setAttribute("onsubmit", "decrementForm(event, " + matchListCount + ")");
    allMatches.appendChild(match);
}
makeMatch(); // Create the first match on page load

// Add a new match when the button is clicked
addMatchButton.addEventListener("click", makeMatch);

// Redux action types
const INCREMENT = "increment";
const DECREMENT = "decrement";

// Action creators for incrementing the score
const increment = (incrementValue, decrementValue, scoreRowNumber) => {
    return {
        type: INCREMENT,
        payload: {
            incrementValue: incrementValue,
            decrementValue: decrementValue,
            scoreRowNumber: scoreRowNumber
        }
    }
}

// Action creator for decrementing the score
const decrement = (incrementValue, decrementValue, scoreRowNumber) => {
    return {
        type: DECREMENT,
        payload: {
            incrementValue: incrementValue,
            decrementValue: decrementValue,
            scoreRowNumber: scoreRowNumber
        }
    }
}

// Initial state for the score reducer
const initialScoreState = {
    score: 0,
    scoreRowNumber: 1
}

// Reducer function to handle score updates
const scoreReducer = (state = initialScoreState, action) => {
    if (action.type === INCREMENT) {
        return {
            ...state,
            score: action.payload.incrementValue + action.payload.decrementValue,
            scoreRowNumber: action.payload.scoreRowNumber
        }
    } else if (action.type === DECREMENT) {
        return {
            ...state,
            score: (action.payload.incrementValue - action.payload.decrementValue) < 0 ? 0 : (action.payload.incrementValue - action.payload.decrementValue),
            scoreRowNumber: action.payload.scoreRowNumber
        }
    } else {
        return {
            ...state
        }
    }
}

// Create the Redux store with the score reducer
const storeScore = Redux.createStore(scoreReducer);

// Function to render the score in the UI based on the current state
const renderScore = () => {
    const state = storeScore.getState();
    const matchRow = document.querySelector(MATCH_ROW_SELECTOR_PREFIX + state.scoreRowNumber);
    const scoreResult = matchRow.querySelector(".score-result");
    scoreResult.innerText = state.score.toString();
}
renderScore(); // Initial render

// Subscribe the renderScore function to the store so it updates when the state changes
storeScore.subscribe(renderScore);

// Function to handle increment form submission
const incrementForm = (event, matchRowNumber) => {
    event.preventDefault();
    incrementScore(matchRowNumber);
}
// Function to increment the score of a match
const incrementScore = (matchRowNumber) => {
    const matchRow = document.querySelector(MATCH_ROW_SELECTOR_PREFIX + matchRowNumber);
    const incrementInput = Number(matchRow.querySelector(".increment-input").value);
    const decrementInput = Number(matchRow.querySelector(".decrement-input").value);
    storeScore.dispatch(increment(incrementInput, decrementInput, matchRowNumber));
}

// Function to handle decrement form submission
const decrementForm = (event, matchRowNumber) => {
    event.preventDefault();
    decrementScore(matchRowNumber);
}
// Function to decrement the score of a match
const decrementScore = (matchRowNumber) => {
    const matchRow = document.querySelector(MATCH_ROW_SELECTOR_PREFIX + matchRowNumber);
    const incrementInput = Number(matchRow.querySelector(".increment-input").value);
    const decrementInput = Number(matchRow.querySelector(".decrement-input").value);
    storeScore.dispatch(decrement(incrementInput, decrementInput, matchRowNumber));
}

// Function to remove a match row
const removeMatch = (matchRowNumber) => {
    const matchRow = document.querySelector(MATCH_ROW_SELECTOR_PREFIX + matchRowNumber);
    allMatches.removeChild(matchRow);

    // Update the matchListCount if there are no matches left
    if (allMatches.children.length === 0) {
        matchListCount = 0;
    }
}

// Function to reset all scores to 0
resetScoreButton.addEventListener("click", () => {
    const incrementInputs = document.querySelectorAll(".increment-input");
    const decrementInputs = document.querySelectorAll(".decrement-input");
    const scoreResults = document.querySelectorAll(".score-result");

    incrementInputs.forEach(incrementInput => incrementInput.value = "");
    decrementInputs.forEach(decrementInput => decrementInput.value = "");
    scoreResults.forEach(scoreResult => scoreResult.innerText = 0);

});

