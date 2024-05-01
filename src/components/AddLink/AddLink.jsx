import { useState } from "react";
import { AddLinkModal } from "../\bModals/AddLinkModal";
import * as AddLinkLayout from "./AddLink.style";
import { LINK_IMAGE } from "./constant";

export const AddLink = ({ folderList }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFolderId, setSelectedFolderId] = useState(null);

  const handelSubmit = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedFolderId(null);
    setIsModalOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  return (
    <AddLinkLayout.AddLinkWrap>
      <AddLinkLayout.AddLinkForm onSubmit={handelSubmit}>
        <AddLinkLayout.AddLinkInputBox>
          <AddLinkLayout.AddLinkIcon src={LINK_IMAGE} />
          <AddLinkLayout.AddLinknInput
            type="text"
            placeholder="링크를 추가해 보세요"
          />
        </AddLinkLayout.AddLinkInputBox>
        <AddLinkLayout.AddLinkButton type="submit" className="btn-primary">
          추가하기
        </AddLinkLayout.AddLinkButton>
      </AddLinkLayout.AddLinkForm>
      <AddLinkModal
        folderList={folderList}
        selectedFolderId={selectedFolderId}
        setSelectedFolderId={setSelectedFolderId}
        isOpen={isModalOpen}
        onCloseClick={closeModal}
        onKeyDown={(event) => handleKeyDown(event)}
      />
    </AddLinkLayout.AddLinkWrap>
  );
};
