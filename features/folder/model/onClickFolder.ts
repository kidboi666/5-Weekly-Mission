import { Dispatch, SetStateAction } from "react";

export const onClickFolder = (
  openModal: Dispatch<SetStateAction<boolean>>,
  changeModalType: Dispatch<SetStateAction<string>>,
  modalType: string,
) => {
  openModal(true);
  changeModalType(modalType);
};
