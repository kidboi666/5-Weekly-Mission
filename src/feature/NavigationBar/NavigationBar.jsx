import "./NavigationBar.css";
import { ROUTE } from "utils/constant";
import Cta from "ui/Cta/Cta";
import { Profile } from "ui/Profile";

export const NavigationBar = ({ profile }) => {
  return (
    <nav className="NavigationBar">
      <div className="NavigationBar-items">
        <a href={ROUTE.랜딩}>
          <img
            alt="linkbrary 로고 이미지"
            src="./images/linkbrary.svg"
            className="NavigationBar-logo"
          />
        </a>
        {profile ? (
          <Profile profile={profile} />
        ) : (
          <a href={ROUTE.로그인}>
            <Cta size="small">로그인</Cta>
          </a>
        )}
      </div>
    </nav>
  );
};
