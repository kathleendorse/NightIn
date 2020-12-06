import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../utils/UserContext";
import API from "../../utils/API";

function Nav() {
  const [state, dispatch] = useUserContext();

  // useEffect(() => {
  //   console.log("hi");
  // }, [state]);

  const logout = () => {
    API.userLogout(state)
      .then((e) => {
        dispatch({
          email: "",
          faves: [],
          _id: "",
        });
      })
      .then(() => {
        window.location.reload();
      });
  };

  if (state.user.email) {
    return (
      // <nav className="navbar navbar-expand-lg navbar-dark">
      //   <span className="nav-brand">
      //     {/* <a className="navbar-brand" href="/"> */}
      //     Night In
      //   </span>

      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Night In
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href={`/${state.user.id}/home`}>
                <strong>Home</strong>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={"/favorites"}>
                Favorites
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={"/register"} onClick={logout}>
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Night In
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href={"/register"}>
                Sign Up
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={"/login"}>
                Log In
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
