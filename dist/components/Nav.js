import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo.svg";
import "./Nav.css";
import Profile from "./Profile";
function Nav() {
    return (_jsx("nav", { className: "nav", children: _jsxs("ul", { children: [_jsx("li", { children: _jsx(Link, { to: "/shared", children: _jsx("img", { className: "nav__logo", src: logoImg, alt: "\uB85C\uACE0 \uC774\uBBF8\uC9C0" }) }) }), _jsx("li", { children: _jsx(Profile, {}) })] }) }));
}
export default Nav;
