import { createAsyncAction } from "redux-promise-middleware-actions";

export const getSongs = createAsyncAction("SONGS", () => {
  return fetch("http://localhost:3001/songs").then(res => res.json());
});
