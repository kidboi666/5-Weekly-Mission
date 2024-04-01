import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './components/App';
import Folder from './components/Folder/Folder';

export default function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Folder />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}
