import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Recipe from "./pages/Recipe";
import RecipeDetail from "./pages/RecipeDetail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Signup from "./pages/Register";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import FavoriteDetail from "./pages/FavoriteDetail";
import Wine from "./pages/Wine";
import WineDetail from "./pages/WineDetail";
import ShoppingList from "./pages/ShoppingList";

import { useUserContext } from "./utils/UserContext";

function App() {
  const [state, dispatch] = useUserContext();

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/home" render={() => <Home email={state.email} />}>
            {/* {!state.email ? <Redirect to="/login" /> : <Home />} */}
          </Route>
          <Route exact path={["/", "/register"]}>
            {state.email ? <Redirect to="/recipe" /> : <Signup />}
          </Route>
          <Route
            exact
            path="/login"
            render={() => <Login useremail={state.email} />}
          >
            {/* {!state.email ? <Redirect to="/recipe" /> : <Login />} */}
          </Route>
          <Route exact path="/favorites">
            {!state.email ? <Redirect to="/login" /> : <Favorites />}
          </Route>
          <Route exact path="/favorites/:id">
            {!state.email ? <Redirect to="/login" /> : <FavoriteDetail />}
          </Route>
          <Route exact path="/recipe">
            {!state.email ? <Redirect to="/login" /> : <Recipe />}
          </Route>
          <Route exact path="/recipe/:id">
            {!state.email ? <Redirect to="/login" /> : <RecipeDetail />}
          </Route>
          <Route exact path="/wine">
            {!state.email ? <Redirect to="/login" /> : <Wine />}
          </Route>
          <Route exact path="/wine/:id">
            {!state.email ? <Redirect to="/login" /> : <WineDetail />}
          </Route>
          <Route exact path="/shoppinglist">
            {!state.email ? <Redirect to="/login" /> : <ShoppingList />}
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
