import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SharedPage from "../pages/Shared";
import FolderPage from "../pages/Folder";
import NotFoundPage from "../pages/NotFoundPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/shared" />} />
      <Route path="/shared" element={<SharedPage />} />
      <Route path="/folder" element={<FolderPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
