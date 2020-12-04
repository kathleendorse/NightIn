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
          username: "",
          email: "",
          faves: [],
          _id: "",
        });
        // localStorage.removeItem("currentUser");
      })
      .then(() => {
        window.location.reload();
      });
  };

  if (state.user.email) {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <span className="nav-brand">
          {/* <a className="navbar-brand" href="/"> */}
          Night In
        </span>
        <span className="nav-item nav-link">
          <Link to={`/${state.user.id}/home`}>
            <strong>Home</strong>
          </Link>
        </span>
        <span className="nav-item nav-link">
          <Link to={"/favorites"}>
            <strong>Favorites</strong>
          </Link>
        </span>
        <span className="nav-item nav-link">
          <Link to={"/register"} onClick={logout}>
            <strong>Log Out</strong>
          </Link>
        </span>
      </nav>
    );
  } else {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <span className="nav-brand">
          {/* <a className="navbar-brand" href="/"> */}
          Night In
        </span>
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
      </nav>
    );
  }
}

export default Nav;
