import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./modalComponentStyle.module.css";
import classNames from "classnames";
const EditAndAddFolder = ({ madalTitle, alter, onClose, }) => {
    const onClosing = (e) => {
        e.preventDefault();
        onClose("");
    };
    return (_jsx("div", { className: styles.modalBackdrop, onClick: onClosing, children: _jsxs("div", { className: styles.modal, onClick: (e) => {
                e.stopPropagation();
                e.preventDefault();
            }, children: [_jsx("button", { className: styles.modal__closeButton, onClick: onClosing }), _jsxs("div", { className: styles.modal__title, children: [" ", madalTitle] }), _jsxs("form", { className: styles.modal__form, children: [_jsx("input", { className: styles.modal__input, placeholder: "\uB0B4\uC6A9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694." }), _jsx("button", { className: classNames(styles.modal__Button, styles.edit), onClick: (e) => e.preventDefault(), children: alter })] })] }) }));
};
export default EditAndAddFolder;
