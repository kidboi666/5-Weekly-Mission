import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "./SearchInput.css";
import SearchImg from "../assets/Search.svg";
const SearchInput = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleInputChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
    };
    const handleClearInput = (e) => {
        e.preventDefault();
        setSearchTerm("");
        onSearch("");
    };
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            onSearch(searchTerm);
        }
    };
    return (_jsx("form", { className: "SearchForm", children: _jsxs("div", { className: "SearchForm__searchWrap", children: [_jsx("img", { className: "SearchForm__Img", src: SearchImg, alt: "\uB3CB\uBCF4\uAE30" }), _jsx("input", { id: "SearchForm__Input", type: "text", placeholder: "\uB9C1\uD06C\uB97C \uAC80\uC0C9\uD574 \uBCF4\uC138\uC694.", value: searchTerm, onChange: handleInputChange, onKeyPress: handleKeyPress }), _jsx("button", { className: "closeButton", onClick: handleClearInput })] }) }));
};
export default SearchInput;
