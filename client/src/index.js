import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// ✅ Force reset path to "/" before app loads
if (window.location.pathname !== "/") {
  window.history.replaceState(null, "", "/");
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);