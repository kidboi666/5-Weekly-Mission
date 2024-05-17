import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import * as S from "./AddLinkToFolder.styled";
import Button from "@/components/Button/Button";
import { FolderList } from "@/services/types";
import { setSelectedFolderForAddLink } from "@/redux/reducers/folder";
import { getLinkList, postLink } from "@/redux/actions/link";
import { closeModal } from "@/redux/reducers/modal";
import { openToast } from "@/redux/reducers/toast";
import { ModalProps } from "../ModalTypes";

const AddLinkToFolder = ({ title, text, variant }: ModalProps) => {
  const { data, selectedFolderForAddLink, selectedFolderIdForAddLink } = useAppSelector((state) => state.folder);
  const { selectedLinkUrl } = useAppSelector((state) => state.link);
  const { userInfo } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleSelectedFolder = (folderItem: FolderList) => {
    dispatch(
      setSelectedFolderForAddLink({
        selectedFolder: folderItem.name,
        selectedFolderId: folderItem.id,
      }),
    );
  };

  const onClick = async () => {
    const res = await dispatch(postLink({ url: selectedLinkUrl, folderId: selectedFolderIdForAddLink }));
    dispatch(closeModal());
    if (res.meta.requestStatus === "fulfilled") {
      dispatch(openToast("addLinkToFolder"));
      dispatch(getLinkList({ userId: userInfo.id, folderId: selectedFolderIdForAddLink }));
    }
  };

  return (
    <>
      <h3>{title}</h3>
      <S.FolderList>
        {data?.map((folder) => (
          <S.FolderListItem
            key={folder.id}
            $isActive={folder.name === selectedFolderForAddLink}
            onClick={() => handleSelectedFolder(folder)}
          >
            <S.ItemName>{folder.name}</S.ItemName>
            <S.ItemLinkCount>{folder.link.count}개 링크</S.ItemLinkCount>
            <S.CheckIcon $isActive={folder.name === selectedFolderForAddLink}>✓</S.CheckIcon>
          </S.FolderListItem>
        ))}
      </S.FolderList>
      <Button variant={variant} text={text} width='100%' onClick={onClick} />
    </>
  );
};

export default AddLinkToFolder;
