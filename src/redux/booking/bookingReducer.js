import { ADDNEWBOOKING, DELETEBOOKING } from "./actionTypes";

const initialState = [];

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDNEWBOOKING:
            return [...state, action.payload];
            break;
        case DELETEBOOKING:
            return [...state].toSpliced(action.payload, 1);
            break;
        default:
            return state;
    }
}

export default bookingReducer;