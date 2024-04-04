import * as React from 'react';
import { createRoot } from 'react-dom';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  Routes,
} from 'react-router-dom';
import './index.css';
import App from './components/App';
import SharedPage from './pages/SharedPage/SharedPage';
import FolderPage from './pages/FolderPage/FolderPage';

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
    <RouterProvider router={router}>
      <App>
        <Routes />
      </App>
    </RouterProvider>
  </React.StrictMode>
);
