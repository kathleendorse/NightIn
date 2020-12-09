import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { UserProvider } from "./utils/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
registerServiceWorker();
