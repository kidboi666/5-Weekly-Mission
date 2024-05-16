import Modal from "./Modal";

export default function DeleteFolderModal({
  openModal,
  closeModal,
  modalStates,
}: {
  openModal: any;
  closeModal: any;
  modalStates: any;
}) {
  return (
    <>
      <img
        src="/images/delete.svg"
        alt="delete"
        className="cursor-pointer"
        onClick={() => openModal("deleteModal")}
      />
      <Modal
        isOpen={modalStates.deleteModal}
        onClose={() => closeModal("deleteModal")}
        title="폴더 삭제"
      >
        <button className="flex m-auto justify-center w-full px-5 py-4 mt-4 rounded-md text-[#f5f5f5] text-[16px] bg-[#FF5B56]">
          삭제하기
        </button>
      </Modal>
    </>
  );
}
