import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: 'Pretendard', sans-serif;
  margin: 0;
}

button {
  border: none;
  border-radius: 8px;
}
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
