import styled from "styled-components";
import { Button } from "components/button";
export const Template = styled.div`
  background-color: #f0f6ff;
  width: 100%;
  height: 982px;
  margin: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Content = styled.div`
  position: absolute;
  top: 238px;
  max-width: 400px;
  width: 100%;
  height: ${(Props) => (Props.$page === "login" ? "491px" : "627px")};
  gap: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1199px) {
    top: 200px;
  }
  @media (max-width: 767px) {
    top: 120px;
    width: 325px;
  }
`;
export const Form = styled.form`
  width: 100%;
  height: ${(Props) => (Props.$page === "login" ? "393px" : "529px")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const InputFrame = styled.div`
  max-width: 400px;
  width: 100%;
  height: ${(Props) => (Props.$page === "login" ? "225px" : "338px")}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const SubmitButton = styled(Button)`
  max-width: 400px;
  width: 100%;
  height: 53px;
  padding: 16px 20px 16px 20px;
  gap: 10px;
`;