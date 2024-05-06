import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import SharedPage from "./pages/Shared/SharedPage";
import FolderPage from "./pages/Folder/FolderPage";
import "./styles/resets.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shared">
          <Route index element={<SharedPage />} />
        </Route>
        <Route path="/folder">
          <Route index element={<FolderPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
