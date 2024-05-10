import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import NoPage from "./NoPage";
import useSelectFolder from "../hooks/useSelectFolder";
import CardList from "./CardList";
const CardListSection = ({ url, folders, searchTerm, }) => {
    const result = useSelectFolder({ url });
    const links = result?.data;
    return (_jsx(_Fragment, { children: links && links.length === 0 ? (_jsx(NoPage, { text: "\uC800\uC7A5\uB41C \uB9C1\uD06C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4." })) : (_jsx(CardList, { folders: folders, links: links, searchTerm: searchTerm })) }));
};
export default CardListSection;
