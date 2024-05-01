import * as S from "./ModalFolderItem.style";
import { CHECK_IMAGE } from "./constant";

export const ModalFolderItem = ({
  folderName,
  linkCount,
  isSelected = false,
  onClick,
}) => {
  return (
    <S.FolderItem $isSelected={isSelected} onClick={onClick}>
      <S.FolderName $isSelected={isSelected}>{folderName}</S.FolderName>
      <S.FolderCount>{linkCount}개 링크</S.FolderCount>
      {isSelected && <img src={CHECK_IMAGE} alt="체크아이콘" />}
    </S.FolderItem>
  );
};
