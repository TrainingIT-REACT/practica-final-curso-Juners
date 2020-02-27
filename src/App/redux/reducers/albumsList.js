import { getAlbums } from "../actions/albumsList";

const initialState = {
  isLoading: false,
  albums: [],
  error: false
};

const albumsList = (state = initialState, { type, payload }) => {
  switch (type) {
    case String(getAlbums.pending):
      return {
        ...state,
        isLoading: true,
        albums: []
      };
    case String(getAlbums.fulfilled):
      return {
        ...state,
        isLoading: false,
        albums: payload
      };
    case String(getAlbums.rejected):
      return {
        ...state,
        isLoading: false,
        error: true
      };
    default:
      return state;
  }
};

export default albumsList;
