import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './components/App';
import SharedPage from './pages/SharedPage/SharedPage';
import FolderPage from './pages/FolderPage/FolderPage';

export default function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<FolderPage />} />
          <Route path="/folder" element={<FolderPage />} />
          <Route path="/shared" element={<SharedPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}
