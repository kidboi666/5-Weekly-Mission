import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
