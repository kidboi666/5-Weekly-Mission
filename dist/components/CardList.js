import { jsx as _jsx } from "react/jsx-runtime";
import "./CardList.css";
import CardListItem from "./CardListItem";
const CardList = ({ links, folders }) => {
    return (_jsx("ul", { className: "CardLinkList", children: links &&
            links.map((link) => (_jsx("li", { children: _jsx(CardListItem, { folders: folders, link: link }) }, link.id))) }));
};
export default CardList;
