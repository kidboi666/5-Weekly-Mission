import styled from "styled-components";
import { StyledTopWrap as TopWrap } from "../../pages/Common.styled";

export const StyledTopWrap = styled(TopWrap)`
  padding: 60px 33px 90px;

  @media (max-width: 767px) {
    padding: 24px 33px 40px;
  }
`;

export const StyledNoData = styled.p`
  padding: 41px 0 35px;
  text-align: center;

  @media (max-width: 767px) {
    padding: 42px 0 290px;
  }
`;
