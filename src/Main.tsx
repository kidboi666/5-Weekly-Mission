import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import SharedPage from "./pages/SharedPage";
import FolderPage from "./pages/FolderPage";
import GlobalStyle from "./components/GlobalStyle";

const Main = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/shared" element={<SharedPage />} />
        <Route path="/Folder" element={<FolderPage />} />
        <Route
          path="*"
          element={
            <ul>
              <Link to="/shared">
                <li>
                  <button>공유페이지</button>
                </li>
              </Link>
              <Link to="/Folder">
                <li>
                  <button>폴더페이지</button>
                </li>
              </Link>
            </ul>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
