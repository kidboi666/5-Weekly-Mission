import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./style-initialization/global-style";
import ResetStyle from "./style-initialization/reset-style";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Footer from "./components/footer"

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
