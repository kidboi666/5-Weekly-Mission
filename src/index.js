import ReactDOM from "react-dom/client";
import React from "react";
import Main from "./components/Main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  </>
);
