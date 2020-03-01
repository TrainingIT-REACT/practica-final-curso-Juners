import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import AlbumsListPage from "./Pages/AlbumsListPage";
import Profile from "./Pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./Pages/NotFound";
import MusicPlayer from "./Pages/MusicPlayer";
import Login from "./Pages/Login";

const App = ({ user }) => (
  <React.StrictMode>
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
            {user.signedIn ? (
              <li>
                <NavLink to="/profile" activeClassName="active">
                  Profile
              </NavLink>
              </li>
            ) : (
                <li>
                  <NavLink to="/login" activeClassName="active">
                    Login
                </NavLink>
                </li>
              )
            }
          </ul>
        </nav>
        <main className="cell small-12 large-9 scrollable">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/album" component={AlbumsListPage} />
            <Route path="/player" component={MusicPlayer} exact />
            <Route path="/login" component={Login} exact />
            <PrivateRoute path="/profile" component={Profile} exact />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    </Router >
  </React.StrictMode>
);

const mapStateToProps = ({ user = {} }) => ({
  user
});

export default connect(mapStateToProps, {})(App);
