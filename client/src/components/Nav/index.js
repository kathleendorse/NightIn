import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      {/* <a className="navbar-brand" href="/"> */}
      <a href="/">Night In</a>
      <span className="nav-item">
        <a className="nav-link" href="/register">
          Sign Up
        </a>
      </span>
      <Link to={"/login"}>
        <strong>Log In</strong>
      </Link>
      <span className="nav-item">
        <a className="nav-link" href="/home">
          Home
        </a>
      </span>
      <Link to={"/favorites"}>
        <strong>Favorites</strong>
      </Link>
    </nav>
  );
}

export default Nav;
