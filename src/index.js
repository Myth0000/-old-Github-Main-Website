import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import View from "./pages/view"
import HomePage from "./pages/homepage";
import AboutMe from "./pages/aboutme";
import favicon from "./images/favicon.ico";

const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(
  <React.StrictMode>

    

    {/* Current View of the page */}
    <View />

  </React.StrictMode>
);


