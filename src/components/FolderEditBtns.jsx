import { styled } from "styled-components";
import shareIcon from "../assets/shareIcon.svg";
import editIcon from "../assets/editIcon.svg";
import deleteIcon from "../assets/deleteIcon.svg";

export const FolderEditBtns = () => {
  return (
    <Container>
      <Wrap>
        <Icon src={shareIcon} alt="공유 아이콘" />
        <Text>공유</Text>
      </Wrap>
      <Wrap>
        <Icon src={editIcon} alt="이름 변경 아이콘" />
        <Text>이름 변경</Text>
      </Wrap>
      <Wrap>
        <Icon src={deleteIcon} alt="삭제 아이콘" />
        <Text>삭제</Text>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }

  @media ${({ theme }) => theme.device.mobile} {
    display: flex;
  }
`;

const Wrap = styled.button`
  display: flex;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 18px;
  height: 18px;
`;

const Text = styled.span`
  color: ${({ theme }) => theme.color.Gray2};
  font-size: 14px;
  font-weight: 600;
`;
