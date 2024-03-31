import { Link } from "react-router-dom";

import { fetchUserInfo } from '../api/user.js';
import { useFetch } from "../hooks/useFetch.js";

import logo from '../static/images/logo.svg';
import '../static/css/main.css';

function Header() {
    const userInfo = useFetch(fetchUserInfo);

    return (
        <header className="nav">
            <div className="wrap-header">
                <Link to="/">
                    <img src={logo} alt="Linkbrary logo" />
                </Link>
                {userInfo ? (
                    <div className="wrap-user-profile">
                        <img src={userInfo.profileImageSource} className="user-profile" alt="프로필이미지"/>
                        <span>{userInfo.email}</span>
                    </div>
                ) : (
                    <Link to="/signin.html" className="primary-btn sm">
                    로그인  
                </Link>
                )}
                
            </div>
        </header>
    );
}

export default Header;