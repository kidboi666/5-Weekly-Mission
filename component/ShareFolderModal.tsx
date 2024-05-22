import Modal from "./Modal";

export default function ShareFolderModal({
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
        src="/images/share.svg"
        alt="share"
        className="cursor-pointer"
        onClick={() => openModal("shareModal")}
      />
      <Modal
        isOpen={modalStates.shareModal}
        onClose={() => closeModal("shareModal")}
        title="폴더 공유"
      >
        <div className="flex justify-center gap-x-5">
          <img
            src="/images/kakao.svg"
            alt="kakao"
            className="bg-[#FEE500] p-4 rounded-full"
          />
          <img
            src="/images/facebook.svg"
            alt="facebook"
            className="text-white bg-[#1877F2] p-4 rounded-full"
          />
          <img src="/images/link.svg" alt="link" className="p-4" />
        </div>
      </Modal>
    </>
  );
}
