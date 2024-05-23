import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import * as S from "./AddLinkToFolder.styled";
import Button from "@/components/Button/Button";
import { FolderList } from "@/services/types";
import { deleteLink, getAllLinkList, getLinkList, postLink } from "@/redux/actions/link";
import { closeModal } from "@/redux/reducers/modal";
import { openToast } from "@/redux/reducers/toast";
import { ModalProps } from "../ModalTypes";
import { useEffect, useState } from "react";
import { getFolder } from "@/redux/actions/folder";
import { COMBINED_FOLDER_NAME } from "@/constants/strings";

const AddLinkToFolder = ({ title, text, variant }: ModalProps) => {
  const [selectedFolder, setSelectedFolder] = useState({
    name: "",
    id: 0,
  });
  const { data } = useAppSelector((state) => state.folder);
  const { linkUrl, setLinkUrl } = useAppSelector((state) => state.modal.props) || {};
  const { linkId, currentFolder } = useAppSelector((state) => state.modal.props) || {};
  const { userInfo } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleSelectedFolder = (folderItem: FolderList) => {
    setSelectedFolder({
      name: folderItem.name,
      id: folderItem.id,
    });
  };

  const onClick = async () => {
    const res = await dispatch(postLink({ url: linkUrl, folderId: selectedFolder.id }));
    dispatch(closeModal());
    if (res.meta.requestStatus === "rejected") return dispatch(openToast({ type: "rejectedAddLink" }));

    if (linkId) {
      await dispatch(deleteLink(linkId));
      await dispatch(getLinkList({ userId: userInfo.id, folderId: currentFolder.id }));
      return dispatch(openToast({ type: "moveLink" }));
    }

    setLinkUrl("");
    dispatch(openToast({ type: "addLink" }));

    if (currentFolder?.name === COMBINED_FOLDER_NAME) {
      return dispatch(getAllLinkList(userInfo.id));
    }
    dispatch(getLinkList({ userId: userInfo.id, folderId: currentFolder?.id || selectedFolder?.id }));
  };

  useEffect(() => {
    dispatch(getFolder(userInfo.id));
  }, []);

  return (
    <>
      <h3>{title}</h3>
      <S.FolderList>
        {data?.map((folder) => {
          if (folder.id === currentFolder?.id) return null;
          return (
            <S.FolderListItem
              key={folder.id}
              $isActive={folder.name === selectedFolder.name}
              onClick={() => handleSelectedFolder(folder)}
            >
              <S.ItemName>{folder.name}</S.ItemName>
              <S.ItemLinkCount>{folder.link?.count || "0"}개 링크</S.ItemLinkCount>
              <S.CheckIcon $isActive={folder.name === selectedFolder.name}>✓</S.CheckIcon>
            </S.FolderListItem>
          );
        })}
      </S.FolderList>
      <Button variant={variant} text={text} width='100%' onClick={onClick} />
    </>
  );
};

export default AddLinkToFolder;