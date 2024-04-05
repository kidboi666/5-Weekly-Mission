import "./styles/common.css";
import SharedPage from "./pages/SharedPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
