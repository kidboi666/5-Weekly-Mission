import styled from "styled-components";
import shareIcon from "../../../../image/share.png";
import deleteIcon from "../../../../image/delete.png";
import renameIcon from "../../../../image/pen.png";

const ButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const Button = styled.button`
  font-size: 14px;
  font-weight: 600;
  color: #9fa6b2;
  background-color: white;
  border: none;
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 18px;
  padding-left: 20px;
  cursor: pointer;
`;

const CustomButton = ({ onClick, icon, text }) => {
  return (
    <Button onClick={onClick} style={{ backgroundImage: `url(${icon})` }}>
      {text}
    </Button>
  );
};

const ActionButton = ({ onClick }) => {
  return (
    <ButtonWrapper>
      <CustomButton onClick={onClick} icon={shareIcon} text="공유" />
      <CustomButton onClick={onClick} icon={deleteIcon} text="삭제" />
      <CustomButton onClick={onClick} icon={renameIcon} text="이름 변경" />
    </ButtonWrapper>
  );
};

export default ActionButton;
