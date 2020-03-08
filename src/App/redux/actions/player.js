import { createAsyncAction } from "redux-promise-middleware-actions";

export const PLAY_SONG = "PLAY_SONG";

export const playSong = song => ({
  type: PLAY_SONG,
  payload: song,
});

export const getAlbum = createAsyncAction("LOAD_ALBUM", async (song) => {
  return fetch(`http://localhost:3001/albums/${song.album_id}`).then(res => res.json());
});

export const TOGGLE_PLAYING_STATUS = "TOGGLE_PLAYING_STATUS";

export const togglePlaying = (user) => {
  return {
    type: TOGGLE_PLAYING_STATUS,
    payload: user,
  };
};

export const UPDATE_PLAYED_TIME = "UPDATE_PLAYED_TIME";

export const updatePlayedTime = (time) => {
  return {
    type: UPDATE_PLAYED_TIME,
    payload: time
  };
};