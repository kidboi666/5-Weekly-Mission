import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import SharedPage from "./pages/SharedPage/SharedPage";
import { UserProvider } from "./contexts/UserContext";
import FolderPage from "./pages/FolderPage/FolderPage";
import HomePage from "./pages/HomePage/HomePage";

export default function Main() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<HomePage />} />
            <Route path='shared' element={<SharedPage />} />
            <Route path='folder' element={<FolderPage />} />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}
