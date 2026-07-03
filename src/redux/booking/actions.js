import { ADDNEWBOOKING, DELETEBOOKING } from "./actionTypes"

export const addNewBooking = (data) => {
    return {
        type: ADDNEWBOOKING,
        payload: data
    }
}

export const deleteBooking = (data) => {
    return {
        type: DELETEBOOKING,
        payload: data
    }
}