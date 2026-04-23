import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Admin from "./Admin";

const path = window.location.pathname;

ReactDOM.createRoot(document.getElementById("root")).render(
  path === "/admin" ? <Admin /> : <App />
);
