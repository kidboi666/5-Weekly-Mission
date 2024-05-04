import "./ModalLayout.css";

export function ModalLayout({
  children,
  toggleHandler,
  title,
  description = null,
}) {
  return (
    <>
      <div className="modal-container">
        <img
          src="images/_close.png"
          className="close-button"
          onClick={toggleHandler}
          alt="close-button"
        />
        <p className="title">{title}</p>
        {description && <p className="description">{description}</p>}
        {children}
      </div>
      <div className="modal-background"></div>
    </>
  );
}
