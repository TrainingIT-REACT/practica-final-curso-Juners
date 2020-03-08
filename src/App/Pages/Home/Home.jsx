import React, { Component } from "react";
import { connect } from "react-redux";
import { getSongs } from "../../redux/actions/songs";
import SongList from "../../components/SongList";
import sampleSize from "lodash/sampleSize";

class Home extends Component {
  componentDidMount() {
    this.props.getSongs();
  }

  renderSongs() {
    const { isLoading, error, list } = this.props;

    const songs = sampleSize((list || []), 10);

    if (isLoading) {
      return <p>Cargando...</p>;
    } else if (error) {
      return <p>Se ha producido un problema al cargar las canciones</p>;
    } else {
      return <SongList songs={songs} />;
    }
  }

  render() {
    return (
      <div>
        <h1 className="h1">Recommended Music</h1>
        <hr />
        {this.renderSongs()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...(state.songs || {})
});

const mapDispatchToProps = {
  getSongs
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
