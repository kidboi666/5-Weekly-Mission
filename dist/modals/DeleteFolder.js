import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./modalComponentStyle.module.css";
import classNames from "classnames";
const DeleteFolder = ({ madalTitle, title, onClose, }) => {
    const onClosing = (e) => {
        e.preventDefault();
        onClose("");
    };
    return (_jsx("div", { className: styles.modalBackdrop, onClick: onClosing, children: _jsxs("div", { className: styles.modal, onClick: (e) => {
                e.stopPropagation();
                e.preventDefault();
            }, children: [_jsx("button", { className: styles.modal__closeButton, onClick: onClosing }), _jsxs("div", { className: styles.modal__title, children: [" ", madalTitle] }), _jsx("div", { className: styles.modal__link, children: title }), _jsx("button", { className: classNames(styles.modal__Button, styles.delete), onClick: (e) => e.preventDefault(), children: "\uC0AD\uC81C\uD558\uAE30" })] }) }));
};
export default DeleteFolder;
