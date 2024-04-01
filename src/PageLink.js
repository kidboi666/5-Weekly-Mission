import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import Signin from "./pages/Signin";

function PageLink() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageLink;
