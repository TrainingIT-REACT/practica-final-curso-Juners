import {
  getAlbum,
  getAlbumSongs
} from "../actions/album";
import { append } from "ramda";

const initialState = {
  history: [],
  isLoadingAlbums: false,
  isLoadingSongs: false,
  album: {},
  songs: [],
  error: false
};

const album = (state = initialState, { type, payload }) => {
  switch (type) {
    case String(getAlbum.pending):
      return {
        ...state,
        isLoadingAlbums: true,
        album: {}
      };
    case String(getAlbum.fulfilled):
      return {
        ...state,
        isLoadingAlbums: false,
        album: payload,
        history: append(payload, state.history)
      };
    case String(getAlbum.rejected):
      return {
        ...state,
        isLoadingAlbums: false,
        error: true
      };
    case String(getAlbumSongs.pending):
      return {
        ...state,
        isLoadingSongs: true,
        songs: []
      };
    case String(getAlbumSongs.fulfilled):
      return {
        ...state,
        isLoadingSongs: false,
        songs: payload
      };
    case String(getAlbumSongs.rejected):
      return {
        ...state,
        isLoadingSongs: false,
        error: true
      };
    default:
      return state;
  }
};

export default album;