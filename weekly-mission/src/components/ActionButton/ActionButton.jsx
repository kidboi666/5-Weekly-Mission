import * as S from "./ActionButton.styled";
import shareIcon from "../../../image/share.png";
import deleteIcon from "../../../image/delete.png";
import renameIcon from "../../../image/pen.png";

const CustomButton = ({ onClick, icon, text }) => {
  return (
    <S.Button onClick={onClick} style={{ backgroundImage: `url(${icon})` }}>
      {text}
    </S.Button>
  );
};

const ActionButton = ({ onClick }) => {
  return (
    <S.ButtonWrapper>
      <CustomButton onClick={onClick} icon={shareIcon} text="공유" />
      <CustomButton onClick={onClick} icon={deleteIcon} text="삭제" />
      <CustomButton onClick={onClick} icon={renameIcon} text="이름 변경" />
    </S.ButtonWrapper>
  );
};

export default ActionButton;
