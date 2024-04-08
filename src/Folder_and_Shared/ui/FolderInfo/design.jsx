import styled from "styled-components";

export const FolderInfoTemplate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 244px;
  gap: 20px;
  padding: 20px 0 60px;
  box-sizing: border-box;
  background-color: #f0f6ff;
  @media (max-width: 768px) {
	height: 161px;
    padding: 10px 0 40px;
	gap: 10px
  }
`;
export const Profile = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
export const Owner = styled.span`
  width: 56px;
  height: 24px;
  font-size: 16px;
  font-weight: 400;
  font-family: "Pretendard"

  @media (max-width: 768px) {
    width: 49px;
    height: 17px;
    font-size: 14px;
  }
`;
export const Folder = styled.h2`
  width: 188px;
  height: 48px;
  font-size: 32px;
  font-weight: 600;
  font-family: "Pretendard"

  @media (min-width: 768px) {
    margin-top: 2rem;
    font-size: 4rem;
  }
`;
