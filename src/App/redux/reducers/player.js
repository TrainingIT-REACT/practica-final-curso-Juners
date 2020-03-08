import { PLAY_SONG, getAlbum } from "../actions/player";
import { append } from "ramda";

const initialState = {
  isLoading: false,
  error: false,
  history: [],
  changedSong: false,
  currentSong: {},
  albumInfo: {},
  playing: false,
  playedTime: 0
};

const player = (state = initialState, { type, payload }) => {
  switch (type) {
    case PLAY_SONG:
      return {
        ...state,
        changedSong: true,
        currentSong: payload,
        playedTime: 0,
        albumInfo: {},
        history: append(payload, state.history)
      };
    case String(getAlbum.pending):
      return {
        ...state,
        isLoading: true,
        changedSong: true,
        albumInfo: {}
      };
    case String(getAlbum.fulfilled):
      return {
        ...state,
        isLoading: false,
        changedSong: false,
        albumInfo: payload
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

export default player;
