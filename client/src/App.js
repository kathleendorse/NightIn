import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Recipe from "./pages/Recipe";
import RecipeDetail from "./pages/RecipeDetail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Signup from "./pages/Register";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Wine from "./pages/Wine";
import WineDetail from "./pages/WineDetail";
import Context from "./pages/Context";

// inside the router we render a nav component
//for each route path we render a different component
//the component will only be visible when that route is hit by some means
//{["/", "/nightin"]} this is an either or for if the root route OR /nightin is hit
//the NoMatch component will render if a route other than the ones listed is hit by some means

function App() {
  //test
  // const [selectionState, setSelectionState] = useState({
  //   recipeSelection: {},
  //   mealSelection: {}
  // });

  // function changeRecipe(recipeSelection){
  //   setSelectionState({
  //     ...selectionState,
  //     recipeSelection
  //   });
  // }

  //--------------------------------

  return (
    <Router>
      <Context>
        <div>
          <Nav />
          <Switch>
            <Route exact path={["/", "/home"]}>
              <Home />
            </Route>
            <Route exact path="/register">
              <Signup />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/favorites">
              <Favorites />
            </Route>
            <Route exact path="/recipe">
              <Recipe />
            </Route>
            <Route exact path="/recipe/:id">
              <RecipeDetail />
            </Route>
            <Route exact path="/wine">
              <Wine />
            </Route>
            <Route exact path="/wine/:id">
              <WineDetail />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Context>
    </Router>
  );
}

export default App;
