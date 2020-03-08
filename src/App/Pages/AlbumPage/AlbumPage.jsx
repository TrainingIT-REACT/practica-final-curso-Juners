import React, { Component } from "react";
import { getAlbum, getAlbumSongs } from "../../redux/actions/album";
import { connect } from "react-redux";
import "./AlbumPage.css";
import SongList from "../../components/SongList";

class AlbumPage extends Component {
  componentDidMount() {
    const { params } = this.props.match;
    if (params) {
      this.props.getAlbum(params.id);
      this.props.getAlbumSongs(params.id);
    }
  }

  render() {
    const album = this.props.album;
    const albumId = this.props.match.params.id;
    const albumSongs = this.props.songs ? this.props.songs.filter(s => s.album_id === Number(albumId)) : [];
    return (
      <div className="album grid-container full">
        <div className="grid-x">
          <div className="cell small-4">
            <img src={`http://localhost:3001/${album.cover}`} alt={`Cover of the album`} className="cover" />
          </div>
          <div className="cell small-8 grid-y">
            <span className="name h2">{album.name}</span>
            <span className="artist h4">{album.artist}</span>
          </div>
        </div>
        <hr />
        <span className="h3">Songs</span>
        <SongList songs={albumSongs} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...(state.album || { album: {} })
});

const mapDispatchToProps = {
  getAlbum,
  getAlbumSongs,
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumPage);
