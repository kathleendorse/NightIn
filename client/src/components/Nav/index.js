import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../utils/UserContext";
import API from "../../utils/API";
// import logo from "../../Images/wine.png";

function Nav() {
  const [state, dispatch] = useUserContext();

  // useEffect(() => {
  //   console.log("hi");
  // }, [state]);

  const logout = () => {
    API.userLogout(state)
    .then((e) => {
      setLocal();
      setState();
    })
  };

  const setLocal = () => {
    localStorage.removeItem("_id");
    localStorage.removeItem("email");
    localStorage.removeItem("favs");
    localStorage.removeItem("shoppingList");
  }

  const setState = () => {
    dispatch({
      type: "setCurrentUser",
      email: "",
      favs: "",
      _id: "",
      shoppingCart: "", 
    });
  };




  if (state.email) {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <Link to="#" className="navbar-brand">
          Night In
        </Link>
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
              <Link to="/home" className="navbar-brand">
                <strong>Home</strong>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/favorites"} className="navbar-brand">
                Favorites
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/shoppinglist"} className="navbar-brand">
                Shopping List
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/register"} onClick={logout} className="navbar-brand">
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <Link to="#" className="navbar-brand">
          Night In
        </Link>
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
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Log In
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
