import React, { Component } from "react";
import { getAlbums } from "../../redux/actions/albumsList";
import { connect } from "react-redux";
import AlbumList from "../../components/AlbumList";
import { Switch, Route } from "react-router-dom";
import AlbumPage from "../AlbumPage/AlbumPage";

class AlbumsListPage extends Component {
  componentDidMount() {
    this.props.getAlbums();
    console.log("hola", this.props.albums);
  }

  render() {
    console.log("hola", this.props.albums);
    return (
      <>
        <h2 className="h2">Albums</h2>
        <AlbumList albums={this.props.albums} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  ...(state.albumsList || {})
});

const mapDispatchToProps = {
  getAlbums
};

const connectedAlbumsListPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumsListPage);

const AlbumsListRender = () => (
  <Switch>
    <Route path="/album/:id" component={AlbumPage} />
    <Route component={connectedAlbumsListPage} />
  </Switch>
);

export default AlbumsListRender;
