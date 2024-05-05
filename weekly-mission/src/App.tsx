import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LinkShare from "./pages/LinkSharePage";
import HomePage from "./pages/HomePage";
import FolderPage from "./pages/FolderPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shared" element={<LinkShare />} />
          <Route path="/folder" element={<FolderPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
