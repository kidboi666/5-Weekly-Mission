import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import addImg from "../assets/link.svg";
import "./AddLinkInput.css";
import Btn from "./Btn";
const AddLinkInput = () => {
    return (_jsx("div", { className: "AddLinkFormWrap", children: _jsx("form", { className: "AddLinkForm", children: _jsxs("div", { className: "AddLinkForm__wrap", children: [_jsx("img", { className: "AddLinkForm__Img", src: addImg, alt: "\uB9C1\uD06C\uCD94\uAC00" }), _jsx("input", { id: "AddLinkForm__Input", type: "text", placeholder: "\uB9C1\uD06C\uB97C \uCD94\uAC00\uD574 \uBCF4\uC138\uC694." }), _jsx("button", { className: "AddLinkForm__addBtn", children: _jsx(Btn, { children: "\uCD94\uAC00\uD558\uAE30" }) })] }) }) }));
};
export default AddLinkInput;
