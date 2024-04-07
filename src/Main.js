import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import LinkPage from "./pages/LinkPage";
import SigninPage from "./pages/SigninPage";
import NotFoundPage from "./pages/NotFoundPage";
import FolderPage from "./pages/FolderPage";

function PageLink() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="shared" element={<LinkPage />} />
        <Route path="folder">
          <Route index element={<FolderPage />} />
          <Route path=":folderName" element={<FolderPage />} />
        </Route>
        <Route path="signin" element={<SigninPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageLink;
