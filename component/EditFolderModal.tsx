import Modal from "./Modal";

export default function EditFolderModal({
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
        src="/images/pen.svg"
        alt="pen"
        className="cursor-pointer"
        onClick={() => openModal("editModal")}
      />
      <Modal
        isOpen={modalStates.editModal}
        onClose={() => closeModal("editModal")}
        title="폴더 이름 변경"
      >
        <input
          placeholder="내용 입력"
          className="px-4 py-5 rounded-md border border-[#6d6afe] bg-[#fff] w-full"
        />
        <button className="flex m-auto justify-center w-full px-5 py-4 mt-4 rounded-md text-[#f5f5f5] text-[16px] bg-gradient-to-r from-[#6D6AFE] to-[#6AE3FE]">
          변경하기
        </button>
      </Modal>
    </>
  );
}
