import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";

/**
 *@description 전역 설정
*/
const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

/* 클릭으로 동작 -> 커서모양 변경으로 알림 */
a {
  cursor: pointer;
}
button {
  cursor: pointer;
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
  </React.StrictMode>
);
