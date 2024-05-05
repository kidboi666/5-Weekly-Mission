import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
`;

export const ModalContent = styled.div`
  position: relative;
  width: 360px;
  height: auto;
  background-color: white;
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 15px;
  border: 1px solid #ccd5e3;
`;

export const AddFolderList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

interface AddFolderListContentProps {
  selected?: boolean;
}

export const AddFolderListContent = styled.div<AddFolderListContentProps>`
  display: flex;
  width: 280px;
  gap: 8px;
  padding: 8px;
  position: relative;
  border-radius: 8px;
  cursor: pointer;

  background-color: ${({ selected }) => (selected ? "#F0F6FF" : "white")};
`;

export const FolderName = styled.span<AddFolderListContentProps>`
  font-size: 16px;
  font-weight: 400;

  color: ${({ selected }) => (selected ? "#6D6AFE" : "black")};
`;

export const LinkCount = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #9fa6b2;
`;

export const CheckMark = styled.span`
  width: 11.25px;
  height: 9.5px;
  position: absolute;
  right: 20px;
`;

export const CloseButton = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

export const ModalName = styled.h4`
  font-size: 20px;
  font-weight: 700;
`;

export const ModalInput = styled.input`
  width: 280px;
  height: 60px;
  padding: 18px 15px;
  border-radius: 8px;
  border: 1px solid #ccd5e3;
`;

export const ModalInfo = styled.div`
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: #9fa6b2;
`;

export const ShareIconsGroup = styled.div`
  display: flex;
  gap: 32px;
`;

export const ShareIcon = styled.button`
  background-color: white;
  cursor: pointer;
`;
