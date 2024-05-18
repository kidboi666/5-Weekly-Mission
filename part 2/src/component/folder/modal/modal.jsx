import "./modal.css"

import closeIcon from "../../../icon/_close.svg";

const Modal = ({ setModal, title, mid, placeholder, btnname, btnColor  }) => {
  const closeModal = () => {
    setModal(false);
  };

  return (
    <section className="modalBack"onClick={closeModal}>
      <div className="modal">
        <div className="modalTitle">{title}</div>
        {mid}
        <button className={btnColor}>{btnname}</button>
        <button className="modalClose" onClick={closeModal}>
          <img src={closeIcon} alt="closeIcon" />
        </button>
      </div>
    </section>
  );
};

export default Modal;
