import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./globalStyle";
import ResetStyle from "./resetStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./nav";
import Footer from "./footer"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
	<ResetStyle />
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Footer/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
