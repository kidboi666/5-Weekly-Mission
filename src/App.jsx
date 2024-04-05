import { BrowserRouter, Routes, Route } from "react-router-dom";
import Folder from "./pages/Folder";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Folder />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
