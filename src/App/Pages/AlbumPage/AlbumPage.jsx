import React, { Component } from "react";
import { getAlbum } from "../../redux/actions/album";
import { connect } from "react-redux";
import "./AlbumPage.css";

class AlbumPage extends Component {
  componentDidMount() {
    const { params } = this.props.match;
    if (params) this.props.getAlbum(params.id);
  }

  render() {
    const album = this.props.album;
    return (
      <div className="album grid-container full">
        <div className="grid-x">
          <img src={album.cover} alt={`Cover of the album`} className="cover" />
          <div className="cell sm-1 grid-y">
            <span className="name h4">{album.name}</span>
            <span className="artist h4">{album.artist}</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...(state.album || {})
});

const mapDispatchToProps = {
  getAlbum
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumPage);
