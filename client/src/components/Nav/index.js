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

      <span className="nav-item">
        <a className="nav-link" href="/login">
          <strong>Log In</strong>          
        </a>
      {/* <Link to={"/login"}>
        <strong>Log In</strong>
      </Link> */}
      </span>

      <span className="nav-item">
        <a className="nav-link" href="/favorites">
          <strong>Favorites</strong>          
        </a>
      {/* <Link to={"/favorites"}>
        <strong>Favorites</strong>
      </Link> */}
      </span>
    </nav>
  );
}

export default Nav;
