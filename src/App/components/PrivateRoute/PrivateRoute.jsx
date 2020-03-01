import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, user, ...others }) => (
  <Route {...others} render={(props) =>
    user.signedIn ? (
      <Component {...props} />
    ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { message: 'Please, login first' }
          }}
        />
      )}
  />
);

const mapStateToProps = ({ user = {} }) => ({
  user
});

export default connect(mapStateToProps, {})(PrivateRoute);