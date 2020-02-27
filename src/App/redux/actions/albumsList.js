import { createAsyncAction } from "redux-promise-middleware-actions";

export const getAlbums = createAsyncAction("LOAD_ALBUMS", async () => {
  return fetch(`http://localhost:3001/albums`).then(res => res.json());
});
