import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./CardListItem.css";
import NonBgImg from "../assets/noBackgroundImage.png";
import BookmarkIcon from "../assets/star.svg";
import { Link } from "react-router-dom";
import { formatDate, calculatePostTimeElapsed } from "../utils/PostDateUtility";
import KebabMenu from "./KebabMenu";
const CardListItem = ({ link, folders }) => {
    const { created_at, description, image_source, title, url } = link;
    return (_jsx(Link, { to: url, target: "_blank", rel: "noopener noreferrer", children: _jsxs("div", { className: "CardListItem", children: [_jsxs("div", { className: "CardListItem__imageWrap", children: [_jsx("img", { className: "CardListItem__previewImg", src: image_source ? image_source : NonBgImg, alt: title }), _jsx("button", { disabled: true, children: _jsx("img", { className: "CardListItem__bookmarkIcon", src: BookmarkIcon, alt: "\uBD81\uB9C8\uD06C\uC544\uC774\uCF58" }) })] }), _jsxs("div", { className: "CardListItem__content", children: [_jsx(KebabMenu, { url: url, folders: folders }), _jsx("div", { className: "CardListItem__postTime", children: calculatePostTimeElapsed(created_at) }), _jsxs("div", { className: "CardListItem__description", children: [title, _jsx("br", {}), description] }), _jsx("div", { className: "CardListItem__postDate", children: formatDate(created_at) })] })] }) }));
};
export default CardListItem;
