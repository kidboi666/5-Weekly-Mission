import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./SearchInput.css";
import SearchImg from "../assets/Search.svg";
function SearchInput() {
    return (_jsx("form", { className: "SearchForm", children: _jsxs("div", { className: "SearchForm__searchWrap", children: [_jsx("img", { className: "SearchForm__Img", src: SearchImg, alt: "\uB3CB\uBCF4\uAE30" }), _jsx("input", { id: "SearchForm__Input", type: "text", placeholder: "\uB9C1\uD06C\uB97C \uAC80\uC0C9\uD574 \uBCF4\uC138\uC694." })] }) }));
}
export default SearchInput;
