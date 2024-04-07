import "./Header.css";
import logoImg from "../../assets/svg/Linkbrary.svg";
import { useEffect, useState } from "react";
import { loginFetchData } from "../../fetchUtils";
import Profile from "../Profile/Profile";
import { useLocation } from "react-router-dom";

function Header() {
    const [user, setUser] = useState("");
    const location = useLocation();

    useEffect(() => {
        async function fetchDataAndSetState() {
            const { id, name, email, profileImageSource } = await loginFetchData();
            setUser({ id, name, email, profileImageSource });
        }
        fetchDataAndSetState();
    }, [user.id]);

    return (
        <header className={`${location.pathname === "/folder" ? "header-static" : ""}`}>
            <h1 className="logo">
                <a href="./">
                    <img src={logoImg} alt="Linkbrary" />
                </a>
            </h1>
            {user ? (
                <Profile user={user} />
            ) : (
                <a href="/" className="login-btn btn-form01">
                    로그인
                </a>
            )}
        </header>
    );
}

export default Header;
