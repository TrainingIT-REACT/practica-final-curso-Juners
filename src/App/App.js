import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import AlbumsListPage from "./Pages/AlbumsListPage";

const App = () => (
  <Router>
    <div className="grid-x" style={{ height: "100%" }}>
      <nav id="main-menu" className="cell small-12 large-3">
        <ul className="vertical menu align-center">
          <li className="menu-text h2">Reactify</li>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/album" activeClassName="active">
              Albums
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" activeClassName="active">
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
      <main className="cell small-12 large-9 scrollable">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/album" component={AlbumsListPage} />
        </Switch>
      </main>
    </div>
  </Router>
);

export default App;
