import { getAlbum } from "../actions/album";

const initialState = {
  isLoading: false,
  album: {},
  songs: {},
  error: false
};

const album = (state = initialState, { type, payload }) => {
  switch (type) {
    case String(getAlbum.pending):
      return {
        ...state,
        isLoading: true,
        album: {}
      };
    case String(getAlbum.fulfilled):
      return {
        ...state,
        isLoading: false,
        album: payload
      };
    case String(getAlbum.rejected):
      return {
        ...state,
        isLoading: false,
        error: true
      };
    default:
      return state;
  }
};

export default album;
