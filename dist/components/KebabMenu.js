import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./KebabMenu.css";
import KebabImg from "../assets/kebab.svg";
import DeleteFolder from "../modals/DeleteFolder";
import AddLinkToFolder from "../modals/AddLinkToFolder";
import { useState, useEffect, useRef } from "react";
const KebabMenu = ({ url, folders }) => {
    const [viewDropdown, setViewDropdown] = useState(false);
    const [modalOpen, setModalOpen] = useState("");
    const kebabButtonRefRef = useRef(null);
    /** 드롭다운 메뉴 이외의 영역을 클릭시 드롭다운 메뉴 닫힘 */
    const handleClickOutside = (e) => {
        if (kebabButtonRefRef &&
            !kebabButtonRefRef.current.contains(e.target)) {
            setViewDropdown(false);
        }
    };
    /** handleClickOutside 마우스다운 이벤트 추가*/
    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    const dropdownToggle = (e) => {
        e.preventDefault();
        setViewDropdown(!viewDropdown);
    };
    return (_jsxs("div", { className: "KebabMenu", ref: kebabButtonRefRef, children: [_jsx("button", { className: "KebabMenu__btn", onClick: dropdownToggle, children: _jsx("img", { className: "KebabMenu__img", src: KebabImg, alt: "\uCF00\uBC25\uBC84\uD2BC" }) }), viewDropdown && (_jsxs("ul", { className: "KebabMenu__options", children: [_jsx("li", { children: _jsx("button", { className: "KebabMenu__option", onClick: (e) => {
                                e.preventDefault();
                                setModalOpen("delete");
                            }, children: "\uC0AD\uC81C\uD558\uAE30" }) }), _jsx("li", { children: _jsx("button", { className: "KebabMenu__option", onClick: (e) => {
                                e.preventDefault();
                                setModalOpen("addFolder");
                            }, children: "\uD3F4\uB354\uC5D0 \uCD94\uAC00" }) })] })), modalOpen === "delete" && (_jsx(DeleteFolder, { madalTitle: "링크 삭제", title: url, onClose: setModalOpen })), modalOpen === "addFolder" && (_jsx(AddLinkToFolder, { title: url, folders: folders, onClose: setModalOpen }))] }));
};
export default KebabMenu;
