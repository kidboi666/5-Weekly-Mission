import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import "./CardList.css";
import CardListItem from "./CardListItem";
import NoPage from "./NoPage";
const CardList = ({ links, folders, searchTerm }) => {
    if (!links)
        return;
    const filteredFolders = links.filter((link) => {
        return (link.title?.includes(searchTerm) ||
            link.url?.includes(searchTerm) ||
            link.description?.includes(searchTerm));
    });
    return (_jsx(_Fragment, { children: filteredFolders.length === 0 ? (_jsx(NoPage, { text: "\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4." })) : (_jsx("ul", { className: "CardLinkList", children: filteredFolders.map((link) => (_jsx("li", { children: _jsx(CardListItem, { folders: folders, link: link }) }, link.id))) })) }));
};
export default CardList;
