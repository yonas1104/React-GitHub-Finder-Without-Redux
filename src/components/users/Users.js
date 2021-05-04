import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserItem from "./UserItem";
import PropTypes from "prop-types";
const Users = ({ userItem, onCardClick }) => {
  return (
    <div className="grid-3">
      {userItem.map((user) => {
        const name = user.login;
        return (
          <Link style={{ color: "black" }} key={user.id} to={`/detail/${name}`}>
            <UserItem user={user} />
          </Link>
        );
      })}
    </div>
  );
};

Users.prototype = {
  userItem: PropTypes.array.isRequired,
};

export default Users;
