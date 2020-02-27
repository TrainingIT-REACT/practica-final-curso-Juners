import React from "react";
import { getAlbum } from "../../redux/actions/player";
import { connect } from "react-redux";

const Player = ({ song, album }) => {
  return (
    <div>
      {song.id} 
      {album.id}
    </div>
  );
}

class MusicPlayer extends React.Component {
  renderPlayer() {
    const {
      isLoading,
      error,
      currentSong,
      albumInfo,
      getAlbum,
      changedSong
    } = this.props;

    if (changedSong && !isLoading) getAlbum(currentSong);

    if (isLoading) {
      return <p>Cargando...</p>;
    } else if (error) {
      return (
        <p>Se ha producido un problema al cargar la informacion del album</p>
      );
    } else {
      return <Player song={currentSong} album={albumInfo} />;
    }
  }

  render() {
    return <div>{this.renderPlayer()}</div>;
  }
}

const mapStateToProps = state => ({
  ...(state.player || {})
});

const mapDispatchToProps = {
  getAlbum
};

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer);
