import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Kates from "./pages/Kates";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
//import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/kates"]}>
            <Kates />
          </Route>
          <Route exact path="/kates/:id">
            <Detail />
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
