import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import "./Folder.css";
import Nav from "../components/Nav";
import SearchInput from "../components/SearchInput";
import FolderList from "../components/FolderList";
import Footer from "../components/Footer";
import useData from "../hooks/useData";
import { getFolderListData } from "../api/Api";
import AddLinkInput from "../components/AddLinkInput";
function Folder() {
    const foldersData = useData(getFolderListData);
    const folders = foldersData?.data;
    return (_jsxs(_Fragment, { children: [_jsx(Nav, {}), _jsx(AddLinkInput, {}), _jsxs("section", { className: "folderContent", children: [_jsx(SearchInput, {}), folders && _jsx(FolderList, { folders: folders })] }), _jsx(Footer, {})] }));
}
export default Folder;
