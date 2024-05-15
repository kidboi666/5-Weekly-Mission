import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import "./Folder.css";
import Nav from "../components/Nav";
import FolderList from "../components/FolderList";
import Footer from "../components/Footer";
import useData from "../hooks/useData";
import { getFolderListData } from "../api/Api";
import AddLinkInput from "../components/AddLinkInput";
function Folder() {
    const foldersData = useData(getFolderListData);
    const folders = foldersData?.data;
    return (_jsxs(_Fragment, { children: [_jsx(Nav, {}), _jsx(AddLinkInput, {}), _jsx("section", { className: "folderContent", children: folders && _jsx(FolderList, { folders: folders }) }), _jsx(Footer, {})] }));
}
export default Folder;
