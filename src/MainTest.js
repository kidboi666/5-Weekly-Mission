import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
// import Test from "./pages/Test";
// import NoLogin from "./pages/NoLogin";

function MainTest() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="NoLogin" element={<NoLogin />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default MainTest;
