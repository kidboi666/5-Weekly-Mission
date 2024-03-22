import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./globalStyle";
import ResetStyle from "./resetStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./nav";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav/>}></Route>
      </Routes>
    </BrowserRouter>
    <ResetStyle />
    <GlobalStyle />
  </React.StrictMode>
);
