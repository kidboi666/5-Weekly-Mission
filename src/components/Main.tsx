import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SharedPage from '../pages/SharedPage';
import FolderPage from '../pages/FolderPage';

/*테블릿 1124 이상 모바일 최소여백 32       테블릿 768~1199 모바일 375 ~767    */

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shared" element={<SharedPage />} />
        <Route path="/folder" element={<FolderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
