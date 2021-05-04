import React, { Component } from "react";
import { Link } from "react-router-dom";
import Image, { Shimmer } from "react-shimmer";
import PropTypes from "prop-types";
const UserItem = ({ user, onCardClick }) => {
  return (
    <div onClick={onCardClick} className="card text-center">
      <img
        src={user.avatar_url}
        alt=""
        className="round-img"
        style={{ width: "68px" }}
      />
      <h3>{user.login}</h3>
      <a href={user.html_url} className="btn btn-dark btn-sm my1">
        More
      </a>
    </div>
  );
};

UserItem.prototype = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
