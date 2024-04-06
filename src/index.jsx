import * as React from 'react';
import { createRoot } from 'react-dom';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import './assets/css/reset.css';
import SharedPage from './pages/SharedPage/SharedPage';
import FolderPage from './pages/FolderPage/FolderPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/shared" replace />,
  },
  {
    path: '/folder',
    element: <FolderPage />,
  },
  {
    path: '/shared',
    element: <SharedPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
