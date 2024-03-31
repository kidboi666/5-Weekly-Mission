import { Link } from "react-router-dom";
import logo from '../static/images/logo.svg';
import '../static/css/main.css';

function Header() {
    return (
        <header className="nav">
            <div className="wrap-header">
                <Link to="/">
                    <img src={logo} alt="Linkbrary logo" />
                </Link>
                <Link to="/signin.html" className="primary-btn sm">
                    로그인  
                </Link>
            </div>
        </header>
    );
}

export default Header;