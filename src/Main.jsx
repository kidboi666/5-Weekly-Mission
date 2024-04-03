import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './components/App';
import SharedPage from './pages/SharedPage/SharedPage';

export default function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<SharedPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}
