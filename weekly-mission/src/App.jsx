import { BrowserRouter, Routes, Route } from "react-router-dom";
import LinkShare from "./pages/LinkSharePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LinkShare />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
