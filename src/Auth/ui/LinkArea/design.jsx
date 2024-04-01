import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkFrame = styled.div`
  max-width: 218px;
  width: 100%;
  height: 78px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const Link2Home = styled(Link)`
  max-width: 210px;
  width: 100%;
  height: 38px;
  img {
    max-width: 210px;
    width: 100%;
    height: 38px;
  }
`;

export const To = styled.div`
  max-width: 220px;
  width: 100%;
  height: 24px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  div {
    max-width: 123px;
    width: 100%;
    height: 24px;
    font-weight: 400;
    font-size: 14px;
    font-family: "Pretendard";
    line-height: 24px;
    letter-spacing: -1px;
  }

  a {
    max-width: 90px;
    width: 100%;
    height: 19px;
    font-weight: 600;
    font-size: 15px;
    font-family: "Pretendard";
    line-height: 19px;
    color: #6d6afe;
    letter-spacing: -1.2px;
    word-spacing: -1px;
  }
`;
