import React from "react";
import { connect } from "react-redux";

const Profile = ({ user }) => {
  const data = user.userData;
  return (
    <div className="user-info">
      <span className="h1">User profile</span>
      <hr />
      <label htmlFor="username">Username</label>
      <input type="text" id="username" value={data.username} disabled />
      <label htmlFor="name">Name</label>
      <input type="text" id="name" value={data.name} disabled />
      <label htmlFor="second-name">Second Name</label>
      <input type="text" id="second-name" value={data.secondName} disabled />
    </div>
  )
};

const mapStateToProps = ({ user = {} }) => ({
  user
});

export default connect(mapStateToProps, {})(Profile);
