import styled from "styled-components";
import { StyledTopWrap as TopWrap } from "../../pages/Common.styled";

export const StyledTopWrap = styled(TopWrap)`
  padding: 60px 33px 90px;

  @media (max-width: 767px) {
    padding: 24px 33px 40px;
  }
`;

export const StyledMenuWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledMenuList = styled.ul`
  display: flex;
  gap: 8px;
`;

export const StyledAddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 16px;
  font-weight: 500;
  color: #6d6afe;
`;

export const StyledAddIcon = styled.img`
  width: 16px;
`;

export const StyledTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 0;
`;

export const StyledTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
`;

export const StyledControlWrap = styled.div`
  display: flex;
  gap: 12px;
`;

export const StyledControl = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
  color: #9fa6b2;
`;

export const StyledControlIcon = styled.img`
  width: 18px;
`;

export const StyledNoData = styled.p`
  padding: 41px 0 35px;
  text-align: center;

  @media (max-width: 767px) {
    padding: 42px 0 290px;
  }
`;
