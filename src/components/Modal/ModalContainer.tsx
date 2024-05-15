import Modal, { RenderModalType } from "./Modal";
import AddModal from "@/src/components/Modal/AddModal";
import FolderAddModal from "@/src/components/Modal/FolderAddModal/FolderAddModal";
import EditModal from "@/src/components/Modal/EditModal";
import FolderDeleteModal from "@/src/components/Modal/FolderDeleteModal";
import LinkDeleteModal from "@/src/components/Modal/LinkDeleteModal";
import ShareModal from "@/src/components/Modal/ShareModal";
import { ModalTypeLabels } from "./ModalTypeLabels";

const MODAL_COMPONENTS: {
  [key: string]: (props: RenderModalType) => JSX.Element;
} = {
  add: AddModal,
  folderAdd: FolderAddModal,
  edit: EditModal,
  folderDelete: FolderDeleteModal,
  linkDelete: LinkDeleteModal,
  share: ShareModal,
};

function ModalContainer({
  modalType,
  folderTabDataList,
  cardUrl,
  folderTabName,
}: Omit<RenderModalType, "modalTypeLabels">) {
  const ModalComponent = MODAL_COMPONENTS[modalType];

  if (!ModalComponent) {
    return null;
  }

  return (
    <Modal
      modalType={modalType}
      folderTabDataList={folderTabDataList}
      cardUrl={cardUrl}
      folderTabName={folderTabName}
    >
      <ModalComponent
        modalTypeLabels={ModalTypeLabels}
        modalType={modalType}
        folderTabDataList={folderTabDataList}
        cardUrl={cardUrl}
        folderTabName={folderTabName}
      />
    </Modal>
  );
}

export default ModalContainer;
