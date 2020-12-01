import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <span className = "nav-brand">
      {/* <a className="navbar-brand" href="/"> */}
        Night In
      </span>
      <span className= "nav-item nav-link">
        <Link to={"/"}>
          <strong>Home</strong>
        </Link>
      </span>  
      <span className="nav-item nav-link">
        <Link to= {"/register"}>
          <strong>Sign Up</strong>
        </Link>
      </span>
      <span className="nav-item nav-link">
        <Link to={"/login"}>
          <strong>Log In</strong>
        </Link>
      </span>
      <span className="nav-item nav-link">
      <Link to={"/favorites"}>
        <strong>Favorites</strong>
      </Link>
      </span>
      <span className="nav-item nav-link">
      <Link to={"/register"}>
        <strong>Log Out</strong>
      </Link>
      </span>
    </nav>
  );
}

export default Nav;
