import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="not-found">
    <div className="h1">Page not found</div>
    <div className="h3">Ups! Looks like this page doesn't exist</div>
    <br />
    <Link to="/">
      <button className="button">Go to the home page</button>
    </Link>
  </div>
);

export default NotFound;