import { createGlobalStyle } from "styled-components";

/**
 *@description Global Style
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

export default GlobalStyle