import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import useData from "../hooks/useData";
import { getSampleUserData } from "../api/Api";
import "./Header.css";
function Header() {
    const folderData = useData(getSampleUserData);
    return (_jsx("header", { children: folderData && (_jsxs("div", { className: "Header__profileArea", children: [_jsx("img", { className: "Header__profileArea__profileImg", src: folderData.folder.owner.profileImageSource, alt: "\uD504\uB85C\uD544\uC0AC\uC9C4" }), _jsx("div", { className: "Header__profileArea__nickname", children: folderData.folder.owner.name }), _jsx("div", { className: "Header__profileArea__folderName", children: folderData.folder.name })] })) }));
}
export default Header;
