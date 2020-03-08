import React from "react";
import { getAlbum } from "../../redux/actions/player";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { isEmpty, isNil } from "ramda";
import "./MusicPlayer.css";

const PlayerRender = ({ song, album }) => {

  return (
    <div className="player grid-container full">
      <div className="grid-x">
        <div className="cell small-2" style={{ padding: "5px" }}>
          <img src={`http://localhost:3001/${album.cover}`} alt={`Cover of the album`} className="cover" />
        </div>
        <div className="cell small-10 grid-y">
          <span className="name h2">{album.name}</span>
          <span className="artist h4">{album.artist}</span>
        </div>
      </div>
      <div className="grid-x">
        <span className="current-time h5 cell small-12">
          <audio src={`http://localhost:3001/${song.audio}`} controls type="audio/mpeg" />
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
    } = this.props;

    const {
      isLoading,
      error,
      currentSong,
      albumInfo,
      changedSong,
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
  getAlbum
};

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer);
