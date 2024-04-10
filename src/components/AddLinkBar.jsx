import styled from "styled-components";
import linkIcon from "../assets/linkIcon.svg";

export const AddLinkBar = () => {
  return (
    <AddLinkContainer>
      <AddLinkBox>
        <LinkImg src={linkIcon} alt="link" />
        <LinkInput placeholder="링크를 추가해 보세요" />
        <AddLinkBtn>추가하기</AddLinkBtn>
      </AddLinkBox>
    </AddLinkContainer>
  );
};

const AddLinkContainer = styled.div`
  padding: 60px 320px 90px 320px;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 60px 32.5px 90px 32.5px;
  }

  @media ${({ theme }) => theme.device.mobile} {
   padding: 24px; 32px; 40px; 
  }
`;

const AddLinkBox = styled.div`
  padding: 16px 20px;
  border-radius: 15px;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  background: var(--Linkbrary-white, #fff);
  color: var(--Linkbrary-gray60, #9fa6b2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

const LinkImg = styled.img`
  width: 20px;
  height: 20px;
`;

const LinkInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  margin-right: auto;
`;

const AddLinkBtn = styled.button`
  border-radius: 8px;
  background: var(--gra-purpleblue-to-skyblue, linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%));
  padding: 10px 16px;
  border: none;
  color: var(--Grey-Light, #f5f5f5);
  width: 120px;
  cursor: pointer;
`;
