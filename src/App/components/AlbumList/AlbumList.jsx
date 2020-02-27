import React from "react";
import { Link } from "react-router-dom";
import "./AlbumList.css";

const Album = ({ album = {} }) => {
  return (
    <div className="album grid-container full">
      <Link to={`/album/${album.id}`} className="grid-x">
        {album.name}
      </Link>
    </div>
  );
};

const AlbumList = ({ albums = [] }) => {
  return (
    <div className="album-list">
      {albums.map(album => (
        <Album key={album.id} album={album} />
      ))}
    </div>
  );
};

export default AlbumList;
