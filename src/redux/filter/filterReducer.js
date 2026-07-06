import { FILTER_BY_PRIORITIES, FILTER_BY_STATUS } from "./actionTypes";

const initialState = {
  status: "All",
  colors: [],
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    case FILTER_BY_PRIORITIES:
      switch (action.payload.changeType) {
        case "add":
          return {
            ...state,
            colors: [...state.colors, action.payload.color],
          };
        case "remove":
          return {
            ...state,
            colors: state.colors.filter(
              (existingColor) => existingColor !== action.payload.color,
            ),
          };
        default:
          return state;
      }
    default:
      return state;
  }
};

export default filterReducer;
