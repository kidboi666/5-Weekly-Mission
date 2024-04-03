import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import SharedPage from "./pages/SharedPage/SharedPage";
import { UserProvider } from "./contexts/UserContext";

export default function Main() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<SharedPage />} />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}
