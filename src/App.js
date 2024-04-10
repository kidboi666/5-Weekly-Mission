
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SharedPage } from "./pages/SharedPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/folder" element={<SharedPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
