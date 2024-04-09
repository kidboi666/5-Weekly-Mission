import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/common/Layout";
import Folder from "./pages/folder/Index";
import NotFoundPage from "./pages/error/NotFoundPage";
import Privacy from "./pages/policy/Index";
import Faq from "./pages/faq/Index";
import Main from "./pages/Index";
import Shared from "./pages/folder/Shared";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Main />,
      },
      {
        path: "folder",
        element: <Folder />,
      },
      {
        path: "Shared",
        element: <Shared />,
      },
      {
        path: "privacy",
        element: <Privacy />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFoundPage />,
  },
]);
