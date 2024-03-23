import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./style-initialization/global-style";
import ResetStyle from "./style-initialization/reset-style";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import LoginPage from "./pages/login-page";
import SignupPage from "./pages/signup-page";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
