import { createAsyncAction } from "redux-promise-middleware-actions";

export const getAlbum = createAsyncAction("LOAD_ALBUM", async (id) => {
  return fetch(`/api/albums/${id}`).then(res => res.json());
});

export const getAlbumSongs = createAsyncAction("LOAD_ALBUM_SONGS", async (id) => {
  return fetch(`/api/albums/${id}/songs`).then(res => res.json());
});
