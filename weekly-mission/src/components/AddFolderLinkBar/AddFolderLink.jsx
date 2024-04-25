import * as S from "./AddFolderLink.styled";
import linkIcon from "../../../image/link.png";

const AddFolderLink = () => {
  return (
    <S.AddFolderLink_Container>
      <S.InputWrapper>
        <S.Image src={linkIcon} alt="Link Icon" />
        <S.Input type="text" placeholder="링크를 추가해 보세요." />
      </S.InputWrapper>
      <S.AddButton>추가하기</S.AddButton>
    </S.AddFolderLink_Container>
  );
};

export default AddFolderLink;
