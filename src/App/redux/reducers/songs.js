import { getSongs } from "../actions/songs";

const initialState = {
  isLoading: false,
  list: [],
  error: false
};

const songs = (state = initialState, { type, payload }) => {
  switch (type) {
    case String(getSongs.pending):
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case String(getSongs.fulfilled):
      return {
        ...state,
        isLoading: false,
        list: payload,
        error: false
      };
    case String(getSongs.rejected):
      return {
        ...state,
        isLoading: false,
        error: true
      };
    default:
      return state;
  }
};

export default songs;
