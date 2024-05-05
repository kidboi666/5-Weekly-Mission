import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import NoPage from "./NoPage";
import useSelectFolder from "../hooks/useSelectFolder";
import CardList from "./CardList";
const CardListSection = ({ url, folders }) => {
    const result = useSelectFolder({ url });
    const links = result?.data;
    return (_jsx(_Fragment, { children: links && links.length === 0 ? (_jsx(NoPage, {})) : (_jsx(CardList, { folders: folders, links: links })) }));
};
export default CardListSection;
