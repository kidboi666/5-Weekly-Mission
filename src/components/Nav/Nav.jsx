import { Link } from "react-router-dom";
import { Profile } from "../Profile/Profile";

import { ROUTE } from "../../utill/constant";
import { LOGO_IMAGE, TEXT } from "./constant";
import "./Nav.css";

export const Nav = ({ profile, isFixed }) => {
  const isFixedNav = isFixed ? "navigation fixed" : "navigation static";
  return (
    <nav className={isFixedNav}>
      <div className="navigation-items">
        <Link to="/">
          <img src={LOGO_IMAGE} alt="Linkbrary logo" />
        </Link>
        {profile ? (
          <Profile profile={profile} />
        ) : (
          <Link to={ROUTE.로그인} className="btn-primary btn-sm">
            {TEXT.login}
          </Link>
        )}
      </div>
    </nav>
  );
};
