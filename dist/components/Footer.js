import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Footer.css";
import facebook from "../assets/akar-icons_facebook-fill.svg";
import twitter from "../assets/akar-icons_twitter-fill.svg";
import youtube from "../assets/akar-icons_youtube-fill.svg";
import instagram from "../assets/ant-design_instagram-filled.svg";
function Footer() {
    return (_jsx("footer", { children: _jsx("div", { className: "footer__wrap", children: _jsxs("div", { className: "footer__content", children: [_jsx("div", { className: "footer__history", children: "\u00A9codeit - 2023" }), _jsxs("div", { className: "footer__supportLink", children: [_jsx("a", { href: "/privacy", children: "Privacy Policy" }), _jsx("a", { href: "/faq", children: "FAQ" })] }), _jsxs("div", { className: "footer__snsLink", children: [_jsx("a", { href: "https://www.facebook.com/", target: "_blank", rel: "noopener noreferrer", children: _jsx("img", { src: facebook, alt: "\uD398\uC774\uC2A4\uBD81 \uBC14\uB85C\uAC00\uAE30" }) }), _jsx("a", { href: "https://twitter.com/?lang=ko", target: "_blank", rel: "noopener noreferrer", children: _jsx("img", { src: twitter, alt: "\uD2B8\uC704\uD130 \uBC14\uB85C\uAC00\uAE30" }) }), _jsx("a", { href: "https://www.youtube.com/", target: "_blank", rel: "noopener noreferrer", children: _jsx("img", { src: youtube, alt: "\uC720\uD29C\uBE0C \uBC14\uB85C\uAC00\uAE30" }) }), _jsx("a", { href: "https://www.instagram.com/", target: "_blank", rel: "noopener noreferrer", children: _jsx("img", { src: instagram, alt: "\uC778\uC2A4\uD0C0\uADF8\uB7A8 \uBC14\uB85C\uAC00\uAE30" }) })] })] }) }) }));
}
export default Footer;
