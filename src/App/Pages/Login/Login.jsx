import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { sample } from "lodash";
import { login } from "../../redux/actions/user";

const name = () => sample(["Albert", "Adrian", "Carla", "Maria", "Tom", "Rose"]);
const secondName = () => sample(["Einstein", "Brody", "Doe", "Alonso", "Fermi", "Planck"]);

const Login = ({ user, login }) => (
  user.signedIn ? (
    <Redirect to="/" />
  ) : (
      <div className="login">
        <form onSubmit={(ev) => {
          ev.preventDefault();
          const username = ev.target.username.value;
          login({
            username,
            name: name(),
            secondName: secondName()
          })
        }}>
          <h1 className="h1">Login</h1>
          <hr />
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
          <button type="submit" className="button">Login</button>
        </form>
      </div>
    )
);

const mapStateToProps = ({ user = {} }) => ({
  user
});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);