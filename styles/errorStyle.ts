import { theme } from "@/styles/theme";
import styled from "styled-components";

export const NotFoundWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${theme.color.grayf};

  > div {
    padding: 40px 0;
    a {
      display: inline-block;
      padding: 16px 30px;
      font-size: ${theme.font.l};
      font-weight: bold;
      color: ${theme.color.white};
      border-radius: 5px;
      background: ${theme.bgColor.gradient};
    }
  }
`;