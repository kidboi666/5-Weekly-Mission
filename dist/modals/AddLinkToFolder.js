import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./modalComponentStyle.module.css";
import classNames from "classnames";
import checkIcon from "../assets/check.svg";
import { useState } from "react";
const AddLinkToFolder = ({ title, folders, onClose, }) => {
    const [linkClick, setLinkClick] = useState(null);
    const onClosing = (e) => {
        e.preventDefault();
        onClose("");
    };
    return (_jsx("div", { className: styles.modalBackdrop, onClick: onClosing, children: _jsxs("div", { className: styles.modal, onClick: (e) => {
                e.stopPropagation();
                e.preventDefault();
            }, children: [_jsx("button", { className: styles.modal__closeButton, onClick: onClosing }), _jsx("div", { className: styles.modal__title, children: "\uD3F4\uB354\uC5D0 \uCD94\uAC00" }), _jsx("div", { className: styles.modal__link, children: title }), _jsx("div", { className: styles.modal__linkList, children: folders.map((folder) => (_jsxs("div", { className: classNames(styles.modal__linkItem, {
                            [styles.selectList]: linkClick === folder.id,
                        }), onClick: () => setLinkClick(folder.id), children: [_jsxs("div", { className: styles.modal__linkInfo, children: [_jsx("div", { className: classNames(styles.modal__linkName, {
                                            [styles.selectName]: linkClick === folder.id,
                                        }), children: folder.name }), _jsxs("div", { className: styles.modal__linkCount, children: [folder.link.count, "\uAC1C \uB9C1\uD06C"] })] }), linkClick === folder.id && (_jsx("img", { src: checkIcon, className: styles.modal__checkIcon, alt: "\uCCB4\uD06C\uC544\uC774\uCF58" }))] }, folder.id))) }), _jsx("button", { className: classNames(styles.modal__Button, styles.edit), onClick: (e) => e.preventDefault(), children: "\uCD94\uAC00\uD558\uAE30" })] }) }));
};
export default AddLinkToFolder;
