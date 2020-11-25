import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nightin from "./pages/Nightin";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Signup from "./pages/Register";
import Home from "./pages/Home";

// inside the router we render a nav component
//for each route path we render a different component
//the component will only be visible when that route is hit by some means
//{["/", "/nightin"]} this is an either or for if the root route OR /nightin is hit
//the NoMatch component will render if a route other than the ones listed is hit by some means

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/nightin"]}> 
            <Nightin />
          </Route>
          <Route exact path="/nightin/:id">
            <Detail />
          </Route>
          <Route exact path="/register">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
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
