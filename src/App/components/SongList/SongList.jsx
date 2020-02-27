import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { playSong } from "../../redux/actions/player";
import "./SongList.css";

const Song = ({ song, onSelect }) => {
  const minutes = Math.floor(song.seconds / 60);
  const seconds = song.seconds % 60;
  const strPadLeft = (string, pad, length) =>
    (new Array(length + 1).join(pad) + string).slice(-length);

  return (
    <div className="song grid-container full">
      <NavLink
        to={"/player"}
        className="grid-x"
        onClick={() => {
          onSelect(song);
        }}
      >
        <div className="cell small-1">
          {`${strPadLeft(minutes, 0, 2)}:${strPadLeft(seconds, 0, 2)}`}
        </div>
        <div className="cell small-11">{song.name}</div>
        {/* <div className="cell">{album.artist}</div> */}
      </NavLink>
    </div>
  );
};

const SongList = ({ songs = [], playSong }) => {
  return (
    <div className="song-list">
      {songs.map(song => (
        <Song key={song.id} song={song} onSelect={playSong} />
      ))}
    </div>
  );
};

const mapDispatchToProps = {
  playSong
};

export default connect(() => ({}), mapDispatchToProps)(SongList);
