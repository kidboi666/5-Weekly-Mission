import { Link } from "react-router-dom";
import { Profile } from "../Profile/Profile";
import { ROUTE } from "../../utill/constant";
import { LOGO_IMAGE, TEXT } from "./constant";
import * as NavLayout from "./Nav.style";

export const Nav = ({ profile }) => {
  return (
    <NavLayout.Navigation>
      <NavLayout.NavigationItems>
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
      </NavLayout.NavigationItems>
    </NavLayout.Navigation>
  );
};
