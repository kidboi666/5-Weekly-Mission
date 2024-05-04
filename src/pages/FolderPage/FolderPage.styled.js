import styled from 'styled-components';
import { TopWrap } from '../../pages/Common.styled';

export const StyledTopWrap = styled(TopWrap)`
  padding: 60px 33px 90px;

  @media (max-width: 767px) {
    padding: 24px 33px 40px;
  }
`;

export const MenuWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;

  @media (max-width: 767px) {
    padding-bottom: 28px;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 8px;
  width: calc(100% - 100px);

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 16px;
  font-weight: 500;
  color: var(--Linkbrary-primary);

  @media (max-width: 767px) {
    display: none;
  }
`;

export const AddIcon = styled.img`
  width: 16px;
`;

export const MobileAddButton = styled(AddButton)`
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
    color: var(--Linkbrary-white);
    z-index: 1;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0 24px;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 12px;
    padding: 0 0 20px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;

  @media (max-width: 767px) {
    font-size: 20px;
  }
`;

export const ControlWrap = styled.div`
  display: flex;
  gap: 12px;
`;

export const Control = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
  color: #9fa6b2;
`;

export const ControlIcon = styled.img`
  width: 18px;
`;

export const NoData = styled.p`
  padding: 41px 0 35px;
  text-align: center;

  @media (max-width: 767px) {
    padding: 42px 0 290px;
  }
`;
