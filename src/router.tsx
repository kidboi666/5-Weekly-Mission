import { createBrowserRouter } from "react-router-dom";
// import Layout from "./components/common/Layout";
import BookMark from "./pages/bookMark/Index";
import NotFoundPage from "./pages/error/NotFoundPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <BookMark />,
    children: [
      {
        path: "folder",
        element: <BookMark />,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFoundPage />,
  },
]);
