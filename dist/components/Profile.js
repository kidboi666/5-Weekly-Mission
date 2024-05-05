import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { getUserData } from "../api/Api";
import useData from "../hooks/useData";
import Btn from "./Btn";
function Profile() {
    const userData = useData(getUserData);
    return userData ? (_jsxs("div", { className: "nav__profile", children: [_jsx("img", { className: "nav__ProfileImg", src: userData?.data[0].image_source, alt: "Profile Info" }), _jsx("span", { className: "nav__ProfileEmail", children: userData?.data[0].email })] })) : (_jsx(Link, { to: "/signin.html", children: _jsx(Btn, { children: " \uB85C\uADF8\uC778" }) }));
}
export default Profile;
