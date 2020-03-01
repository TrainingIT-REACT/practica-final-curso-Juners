import React from "react";
import { getAlbum, togglePlaying, updatePlayedTime } from "../../redux/actions/player";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { isEmpty, isNil } from "ramda";
import "./MusicPlayer.css";

const getTime = (time) => {
  let minutes = Math.trunc(time / 60);
  const seconds = time % 60;
  return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
};

const play = (<>&#9658;</>);
const pause = (<>&#9612;&#9612;</>);

const PlayerRender = ({ song, album, playing, playedTime, togglePlaying, updatePlayedTime }) => {
  console.log(playing);

  if (playing && playedTime < song.seconds) {
    setTimeout(() => {
      updatePlayedTime(playedTime + 1)
    }, 1000);
  }

  return (
    <div className="player grid-container full">
      <div className="grid-x">
        <div className="cell small-2" style={{ padding: "5px" }}>
          <img src={album.cover} alt={`Cover of the album`} className="cover" />
        </div>
        <div className="cell small-10 grid-y">
          <span className="name h2">{album.name}</span>
          <span className="artist h4">{album.artist}</span>
        </div>
      </div>
      <div className="grid-x">
        <span className="current-time h5 cell small-12">
          <span onClick={() => { togglePlaying() }} className="clickable">{playing ? pause : play}</span>
          {`${getTime(playedTime)} / ${getTime(song.seconds)}`}
        </span>
      </div>
    </div>
  );
}

class MusicPlayer extends React.Component {
  renderPlayer() {
    const {
      player,
      getAlbum,
      togglePlaying,
      updatePlayedTime
    } = this.props;

    const {
      isLoading,
      error,
      currentSong,
      albumInfo,
      changedSong,
      playing,
      playedTime
    } = (player || {});

    if (!changedSong && (isNil(currentSong) || isEmpty(currentSong))) return <Redirect to="/" />
    if (changedSong && !isLoading) getAlbum(currentSong);

    if (isLoading) {
      return <p>Loading...</p>;
    } else if (error) {
      return (
        <p>A problem occurred</p>
      );
    } else {
      return <PlayerRender
        song={currentSong}
        album={albumInfo}
        playing={playing}
        playedTime={playedTime}
        togglePlaying={togglePlaying}
        updatePlayedTime={updatePlayedTime}
      />;
    }
  }

  render() {
    return <div>{this.renderPlayer()}</div>;
  }
}

const mapStateToProps = ({ player = {} }) => ({
  player
});

const mapDispatchToProps = {
  getAlbum,
  togglePlaying,
  updatePlayedTime
};

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer);
