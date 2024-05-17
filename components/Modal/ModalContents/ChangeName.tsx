import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { getFolder, putFolder } from "@/redux/actions/folder";
import { closeModal } from "@/redux/reducers/modal";
import { openToast } from "@/redux/reducers/toast";
import { ModalProps } from "../ModalTypes";

const ChangeName = ({ title, text, variant }: ModalProps) => {
  const [folderName, setFolderName] = useState("");
  const { userInfo } = useAppSelector((state) => state.auth);
  const { selectedFolderId, selectedFolder } = useAppSelector((state) => state.folder);
  const dispatch = useAppDispatch();

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFolderName(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (folderName) {
      const res = await dispatch(putFolder({ folderName: folderName, folderId: selectedFolderId }));
      dispatch(closeModal());
      if (res.meta.requestStatus === "fulfilled") {
        dispatch(openToast("changeName"));
        dispatch(getFolder(userInfo.id));
      }
    }
  };

  return (
    <>
      <h3>{title}</h3>
      <form onSubmit={onSubmit}>
        <Input value={folderName} onChange={onChangeInputValue} placeholder={selectedFolder} />
        <Button variant={variant} text={text} type='submit' width='100%' />
      </form>
    </>
  );
};

export default ChangeName;
