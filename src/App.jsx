import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/styles/global.css";
import "./assets/styles/reset.css";
import Shared from "./pages/Shared";
import Folder from "./pages/Folder";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/shared" element={<Shared />} />
          <Route path="/" element={<Folder />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
