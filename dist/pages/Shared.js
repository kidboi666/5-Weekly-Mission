import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CardList from "../components/CardList";
import { getSampleFolderData } from "../api/Api";
import { useEffect, useState } from "react";
import useData from "../hooks/useData";
import PropTypes from "prop-types";
function Shared() {
    const linkData = useData(getSampleFolderData);
    const links = linkData?.folder?.links;
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        console.log(linkData);
    }, [linkData]);
    return (_jsxs(_Fragment, { children: [_jsx(Nav, {}), _jsx(Header, {}), links && _jsx(CardList, { links: links, folders: [], searchTerm: "" }), _jsx(Footer, {})] }));
}
Shared.protoTypes = {
    links: PropTypes.array,
};
export default Shared;
