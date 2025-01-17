import { GET_DATA } from '../action';

const initialState = {
  data: [],
};

export const getApiDataHandler = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        data: [...state.data, ...action.payload],
      };
    default:
      return state;
  }
};
