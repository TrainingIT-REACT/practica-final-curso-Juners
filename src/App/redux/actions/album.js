import { createAsyncAction } from "redux-promise-middleware-actions";

export const getAlbum = createAsyncAction("LOAD_ALBUM", async (id) => {
  return fetch(`http://localhost:3001/albums/${id}`).then(res => res.json());
});
