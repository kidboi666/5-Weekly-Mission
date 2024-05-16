import Modal from "./Modal";

export default function AddFolderModal({
  modalStates,
  closeModal,
}: {
  modalStates: any;
  closeModal: any;
}) {
  return (
    <Modal
      isOpen={modalStates.addModal}
      onClose={() => closeModal("addModal")}
      title="폴더 추가"
    >
      <input
        placeholder="내용 입력"
        className="px-4 py-5 rounded-md border border-[#6d6afe] bg-[#fff] w-full"
      />
      <button className="flex m-auto justify-center w-full px-5 py-4 mt-4 rounded-md text-[#f5f5f5] text-[16px] bg-gradient-to-r from-[#6D6AFE] to-[#6AE3FE]">
        추가하기
      </button>
    </Modal>
  );
}
