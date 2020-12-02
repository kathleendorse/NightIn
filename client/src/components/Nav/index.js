import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { myContext } from "../../pages/Context";
import API from "../../utils/API";

function Nav() {
  const ctx = useContext(myContext);
  const logout = () => {
    API.userLogout().then((res) => (window.location.href = "/"));
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <span className="nav-brand">
        {/* <a className="navbar-brand" href="/"> */}
        Night In
      </span>
      <span className="nav-item nav-link">
        <Link to={"/"}>
          <strong>Home</strong>
        </Link>
      </span>
      {ctx ? (
        <>
          <span className="nav-item nav-link">
            <Link to={"/"} onClick={logout}>
              <strong>Log Out</strong>
            </Link>
          </span>
          <span className="nav-item nav-link">
            <Link to={"/favorites"}>
              <strong>Favorites</strong>
            </Link>
          </span>
        </>
      ) : (
        <>
          <span className="nav-item nav-link">
            <Link to={"/register"}>
              <strong>Sign Up</strong>
            </Link>
          </span>
          <span className="nav-item nav-link">
            <Link to={"/login"}>
              <strong>Log In</strong>
            </Link>
          </span>
        </>
      )}
    </nav>
  );
}

export default Nav;
