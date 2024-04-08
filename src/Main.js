import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/Home/HomePage";
import SharedPage from "./pages/Shared/SharedPage";
import FolderPage from "./pages/Folder/FolderPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="shared">
            <Route index element={<SharedPage />} />
          </Route>
          <Route path="folder">
            <Route index element={<FolderPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
