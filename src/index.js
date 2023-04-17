import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MathJax from "react-mathjax";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MathJax.Provider>
      <App />
    </MathJax.Provider>
  </React.StrictMode>
);
