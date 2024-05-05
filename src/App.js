import "./styles/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FolderPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/shared" element={<SharedPage />} /> */}
        <Route path="/folder" element={<FolderPage />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
