import styles from "./modalComponentStyle.module.css";

function ShareFolder({ title, id, onClose }) {
  const onClosing = (e) => {
    e.preventDefault();
    onClose(false);
  };

  const sendUrl = `https://linkbrary-hakyoung.netlify.app/shared/${id}`;

  function shareFacebook() {
    window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
  }

  function copyToClipboard() {
    navigator.clipboard
      .writeText(sendUrl)
      .then(() => {
        alert("링크가 복사되었습니다.");
      })
      .catch((err) => {
        alert("링크 복사가 실패했습니다.");
      });
  }

  return (
    <div className={styles.modalBackdrop} onClick={onClosing}>
      <div
        className={styles.modal}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        <button
          className={styles.modal__closeButton}
          onClick={onClosing}
        ></button>
        <div className={styles.modal__title}>폴더 공유</div>
        <div className={styles.modal__link}>{title}</div>
        <div className={styles.shareIcons}>
          <div className={styles.shareIcon}>
            <button className={styles.kakaoShare} />
            <div className={styles.shareText}>카카오톡</div>
          </div>
          <div className={styles.shareIcon}>
            <button
              className={styles.facebookShare}
              onClick={() => shareFacebook()}
            />
            <div>페이스북</div>
          </div>
          <div className={styles.shareIcon}>
            <button
              className={styles.linkShare}
              onClick={() => copyToClipboard()}
            />
            <div>링크 복사</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareFolder;
