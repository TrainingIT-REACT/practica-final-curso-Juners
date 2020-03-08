import { createAsyncAction } from "redux-promise-middleware-actions";

export const getAlbums = createAsyncAction("LOAD_ALBUMS", async () => {
  return fetch(`/api/albums`).then(res => res.json());
});
