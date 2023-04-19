import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.scss";

const app = createRoot(document.getElementById("app"));

app.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
