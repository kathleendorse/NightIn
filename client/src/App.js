import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nightin from "./pages/Nightin";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Signup from "./pages/Register";
import Home from "./pages/Home";

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
