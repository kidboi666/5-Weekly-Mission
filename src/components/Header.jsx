import "./Header.css";
import logoImg from "../assets/svg/Linkbrary.svg";

function Header() {
    return (
        <header>
            <h1 class="logo">
                <a href="./">
                    <img src={logoImg} alt="Linkbrary" />
                </a>
            </h1>
            <a href="./html/signin.html" class="login-btn btn-form01">
                로그인
            </a>
        </header>
    );
}

export default Header;
