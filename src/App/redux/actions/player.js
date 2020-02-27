import { createAsyncAction } from "redux-promise-middleware-actions";

export const PLAY_SONG = "PLAY_SONG";

export const playSong = song => ({
  type: PLAY_SONG,
  payload: song,
});

export const getAlbum = createAsyncAction("LOAD_ALBUM", async (song) => {
  return fetch(`http://localhost:3001/albums/${song.id}`).then(res => res.json());
});
