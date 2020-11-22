import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="/">
        Night In
      </a>
      <span className="nav-item">
        <a className="nav-link" href="#">
          Sign Up
        </a>
      </span>
      {/* <span className="nav-item">
        <a className="nav-link" href="/login">
          Log In
        </a>
      </span> */}
      <Link to={"/login"}>
        <strong>Log In</strong>
      </Link>
    </nav>
  );
}

export default Nav;
