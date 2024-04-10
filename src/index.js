import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/app/App';
import Shared from './pages/shared/Shared';
import Folder from './pages/folder/Folder';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResetCss from './commonStyles/reset';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResetCss />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='shared/*' element={<Shared />} />
        <Route path='folder/' element={<Folder />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
