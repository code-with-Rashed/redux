// "use strict";

const counterElement = document.getElementById("counter");
const incrementElement = document.getElementById("increment");
const decrementElement = document.getElementById("decrement");

// initial state
const initialState = {
    value: 0
}

// action identifires
const INCREMENT = "increment";
const DECREMENT = "decrement";

// action creators
const increment = (value) => {
    return {
        type: INCREMENT,
        payload: value
    }
}
const decrement = (value) => {
    return {
        type: DECREMENT,
        payload: value
    }
}

// create reducer function
const counterReducer = (state = initialState, action) => {
    if (action.type === INCREMENT) {
        return {
            ...state,
            value: state.value + action.payload
        }
    } else if (action.type === DECREMENT) {
        return {
            ...state,
            value: state.value - action.payload
        }
    } else {
        return {
            ...state
        }
    }
}
// create store
const store = Redux.createStore(counterReducer);

const rander = () => {
    const state = store.getState();
    counterElement.innerText = state.value.toString();
}
// initial rander
rander();

store.subscribe(rander);

// handle listener
incrementElement.addEventListener("click", () => {
    store.dispatch(increment(5));
});

decrementElement.addEventListener("click", () => {
    store.dispatch(decrement(2));
})