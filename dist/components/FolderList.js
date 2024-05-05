import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import "./FolderList.css";
import addBtn from "../assets/add.svg";
import addBtnMobile from "../assets/add 2.svg";
import shareBtn from "../assets/share.svg";
import renameBtn from "../assets/pen.svg";
import deleteBtn from "../assets/Group 36.svg";
import DeleteFolder from "../modals/DeleteFolder";
import EditAndAddFolder from "../modals/EditAndAddFolder";
import ShareFolder from "../modals/ShareFolder";
import { useState } from "react";
import CardListSection from "./CardListSection";
import SearchInput from "./SearchInput";
const FolderList = ({ folders }) => {
    const [modalOpen, setModalOpen] = useState("");
    const [title, setTitle] = useState("전체");
    const [id, setId] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    function handleTitle(folderName, folderId) {
        setTitle(folderName);
        setId(folderId);
    }
    const url = id === null
        ? "https://bootcamp-api.codeit.kr/api/users/1/links"
        : `https://bootcamp-api.codeit.kr/api/users/1/links?folderId=${id}`;
    const handleSearch = (term) => {
        setSearchTerm(term);
    };
    return (_jsxs("section", { className: "folderLayout", children: [_jsx(SearchInput, { onSearch: handleSearch }), _jsxs("div", { className: "folderLinkList", children: [_jsxs("div", { className: "folderLinkList__folders", children: [_jsx("button", { className: "전체" === title
                                    ? "folderLinkList__folder--active"
                                    : "folderLinkList__folder", id: "0", onClick: () => handleTitle("전체", null), children: "\uC804\uCCB4" }), folders.map((folder) => (_jsx("button", { className: folder.name === title
                                    ? "folderLinkList__folder--active"
                                    : "folderLinkList__folder", id: id?.toString(), onClick: () => {
                                    handleTitle(folder.name, folder.id);
                                }, children: folder.name }, folder.id)))] }), _jsxs("button", { className: "folderLinkList__addFolderButton", onClick: (e) => {
                            e.preventDefault();
                            setModalOpen("addFolder");
                        }, children: ["\uD3F4\uB354 \uCD94\uAC00", _jsx("img", { className: "folderLinkList__addFolderIcon", src: addBtn, alt: "\uD3F4\uB354\uCD94\uAC00" })] }), _jsxs("button", { className: "folderLinkList__addFolderButton--mobile", onClick: (e) => {
                            e.preventDefault();
                            setModalOpen("addFolder");
                        }, children: ["\uD3F4\uB354 \uCD94\uAC00", _jsx("img", { className: "folderLinkList__addFolderIcon", src: addBtnMobile, alt: "\uD3F4\uB354\uCD94\uAC00" })] }), modalOpen === "addFolder" && (_jsx(EditAndAddFolder, { madalTitle: "폴더 추가", onClose: setModalOpen, alter: "추가하기" }))] }), _jsx("div", { children: title === "전체" ? (_jsxs(_Fragment, { children: [_jsx("div", { className: "folderLinkList__folderMenu", children: _jsx("div", { className: "folderLinkList__folderName", id: id?.toString(), children: title }) }), _jsx(CardListSection, { folders: folders, url: url, searchTerm: searchTerm })] })) : (_jsxs(_Fragment, { children: [_jsxs("div", { className: "folderLinkList__folderMenu", children: [_jsx("div", { className: "folderLinkList__folderName", id: id?.toString(), children: title }), _jsxs("div", { className: "folderLinkList__folderEditBtns", children: [_jsxs("button", { className: "folderLinkList__folderEditBtn", onClick: (e) => {
                                                e.preventDefault();
                                                setModalOpen("shareLink");
                                            }, children: [_jsx("img", { src: shareBtn, alt: "\uACF5\uC720\uD558\uAE30" }), " \uACF5\uC720"] }), _jsxs("button", { className: "folderLinkList__folderEditBtn", onClick: (e) => {
                                                e.preventDefault();
                                                setModalOpen("alterName");
                                            }, children: [_jsx("img", { src: renameBtn, alt: "\uC774\uB984\uBCC0\uACBD" }), " \uC774\uB984 \uBCC0\uACBD"] }), _jsxs("button", { className: "folderLinkList__folderEditBtn", onClick: (e) => {
                                                e.preventDefault();
                                                setModalOpen("delete");
                                            }, children: [_jsx("img", { src: deleteBtn, alt: "\uC0AD\uC81C" }), " \uC0AD\uC81C"] })] })] }), _jsx(CardListSection, { folders: folders, url: url, searchTerm: searchTerm })] })) }), modalOpen === "shareLink" && (_jsx(ShareFolder, { title: title, id: id, onClose: setModalOpen })), modalOpen === "alterName" && (_jsx(EditAndAddFolder, { madalTitle: "폴더 추가", onClose: setModalOpen, alter: "추가하기" })), modalOpen === "delete" && (_jsx(DeleteFolder, { madalTitle: "폴더 삭제", title: title, onClose: setModalOpen }))] }));
};
export default FolderList;
