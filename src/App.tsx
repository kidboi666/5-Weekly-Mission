import { RouterProvider } from "react-router-dom";
import { GlobalStyle } from "./styles/globalStyle";
import { router } from "./router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <GlobalStyle />
    </>
  );
}

export default App;
