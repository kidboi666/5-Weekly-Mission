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
  flex-wrap: wrap;
  gap: 12px 8px;
  width: calc(100% - 100px);

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const StyledAddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 16px;
  font-weight: 500;
  color: var(--primary-color);

  @media (max-width: 767px) {
    display: none;
  }
`;

export const StyledAddIcon = styled.img`
  width: 16px;
`;

export const StyledMobileAddButton = styled(StyledAddButton)`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    position: fixed;
    bottom: 101px;
    left: 50%;
    transform: translateX(-50%);
    padding: 8px 24px;
    background: #6d6afe;
    border-radius: 20px;
    color: var(--white-color);
    z-index: 1;
  }
`;

export const StyledTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 0;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 12px;
    padding: 28px 0 20px;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;

  @media (max-width: 767px) {
    font-size: 20px;
  }
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
