import { FILTER_BY_PRIORITIES, FILTER_BY_STATUS } from "./actionTypes";

export const filterByStatus = (status) => {
  return {
    type: FILTER_BY_STATUS,
    payload: status,
  };
};

export const filterByPriority = (color, changeType) => {
  return {
    type: FILTER_BY_PRIORITIES,
    payload: {
      color,
      changeType,
    },
  };
};
