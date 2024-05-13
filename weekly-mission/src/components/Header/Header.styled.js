import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #edf7ff;
  overflow: hidden;
  min-height: 219px;
`;

export const FolderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
  padding-bottom: 40px;
  text-align: center;
`;

export const FolderInfo = styled.div`
  display: inline-block;
  text-align: center;
`;

export const ProfileImage = styled.img`
  margin-bottom: 20px;
  width: 60px;
  height: 60px;
`;

export const OwnerName = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

export const FolderName = styled.h1`
  margin-top: 20px;
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  text-align: center;
`;

export const StickyContainer = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 2;

  width: 100%;
  padding: 24px 320px;
  display: flex;
  gap: 8px;
  background-color: #f0f6ff;
`;
