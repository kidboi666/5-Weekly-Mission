import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import SharedPage from "./pages/SharedPage";

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<SharedPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
