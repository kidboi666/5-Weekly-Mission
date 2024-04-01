import styled from "styled-components";

export const FolderInfoTemplate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 244px;
  padding: 20px 0 60px;
  box-sizing: border-box;
  background-color: #f0f6ff;
  @media (min-width: 768px) {
	height: 161px;
    padding: 10px 0 40px;
  }
`;
export const Profile = styled.img`
  width: 188px;
  height: 164px;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 6rem;
    height: 6rem;
  }
`;
export const Owner = styled.span`
  margin-top: 0.6rem;
  font-size: 1.4rem;

  @media (min-width: 768px) {
    margin-top: 1.2rem;
    font-size: 1.6rem;
    line-height: 150%;
  }
`;
export const Folder = styled.h2`
  margin-top: 1rem;
  font-size: 3.2rem;
  font-weight: 600;
  @media (min-width: 768px) {
    margin-top: 2rem;
    font-size: 4rem;
  }
`;
