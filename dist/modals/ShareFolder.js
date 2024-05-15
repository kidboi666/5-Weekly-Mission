import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./modalComponentStyle.module.css";
const ShareFolder = ({ title, id, onClose, }) => {
    const onClosing = (e) => {
        e.preventDefault();
        onClose("");
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
    return (_jsx("div", { className: styles.modalBackdrop, onClick: onClosing, children: _jsxs("div", { className: styles.modal, onClick: (e) => {
                e.stopPropagation();
                e.preventDefault();
            }, children: [_jsx("button", { className: styles.modal__closeButton, onClick: onClosing }), _jsx("div", { className: styles.modal__title, children: "\uD3F4\uB354 \uACF5\uC720" }), _jsx("div", { className: styles.modal__link, children: title }), _jsxs("div", { className: styles.shareIcons, children: [_jsxs("div", { className: styles.shareIcon, children: [_jsx("button", { className: styles.kakaoShare }), _jsx("div", { className: styles.shareText, children: "\uCE74\uCE74\uC624\uD1A1" })] }), _jsxs("div", { className: styles.shareIcon, children: [_jsx("button", { className: styles.facebookShare, onClick: () => shareFacebook() }), _jsx("div", { children: "\uD398\uC774\uC2A4\uBD81" })] }), _jsxs("div", { className: styles.shareIcon, children: [_jsx("button", { className: styles.linkShare, onClick: () => copyToClipboard() }), _jsx("div", { children: "\uB9C1\uD06C \uBCF5\uC0AC" })] })] })] }) }));
};
export default ShareFolder;
