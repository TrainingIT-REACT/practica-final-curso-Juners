import { createAsyncAction } from "redux-promise-middleware-actions";

export const getSongs = createAsyncAction("SONGS", () => {
  return fetch("/api/songs").then(res => res.json());
});
