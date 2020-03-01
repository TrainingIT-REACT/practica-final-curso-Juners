import React, { Component } from "react";
import { getAlbums } from "../../redux/actions/albumsList";
import { connect } from "react-redux";
import AlbumList from "../../components/AlbumList";
import { Switch, Route } from "react-router-dom";
import AlbumPage from "../AlbumPage/AlbumPage";
import NotFound from "../NotFound";

class AlbumsListPage extends Component {
  componentDidMount() {
    this.props.getAlbums();
  }

  render() {
    return (
      <>
        <h1 className="h1">Albums</h1>
        <hr />
        <AlbumList albums={this.props.albums} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  ...(state.albumsList || { albumsList: {} })
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
    <Route path="/album/:id" component={AlbumPage} exact />
    <Route path="/album" component={connectedAlbumsListPage} exact />
    <Route component={NotFound} />
  </Switch>
);

export default AlbumsListRender;
