import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle.js";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/delivery-app-frontend">
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
);
