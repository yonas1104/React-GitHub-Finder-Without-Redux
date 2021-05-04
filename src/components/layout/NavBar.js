import React, { Component } from "react";
import Search from "../users/Search";
import { Link, useLocation } from "react-router-dom";
const NavBar = (props) => {
  const { title, clearUsers, users, alert, searchUsers } = props;
  const location = useLocation();
  console.log(location.pathname.includes("/detail"));
  return (
    <nav className="navbar bg-primary">
      <h4>
        <i className="fab fa-github"></i>
        {title}
      </h4>
      {!location.pathname.includes("/detail") && (
        <Search
          searchUsers={searchUsers}
          clearUsers={clearUsers}
          users={users}
          alert={alert}
        />
      )}

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
