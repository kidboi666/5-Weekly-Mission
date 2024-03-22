import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./globalStyle";
import ResetStyle from "./resetStyle";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
	<ResetStyle />
    <GlobalStyle />
  </React.StrictMode>
);
