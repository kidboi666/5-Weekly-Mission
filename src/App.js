import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedPage from "./pages/SharedPage";
import Home from "./pages/Home";
import "./styles/common.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shared" element={<SharedPage />} />
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
