import "./Nav.css";
import GradientButton from "../Button/GradientButton";
import Profile from "../Profile/Profile";

function Nav({ email, imgUrl }) {
  const isSingin = email && imgUrl ? true : false;

  return (
    <nav>
      <button className="logo"></button>
      {!isSingin ? <GradientButton size="medium">로그인</GradientButton> : null}
      {isSingin ? <Profile email={email} imgUrl={imgUrl} /> : null}
    </nav>
  );
}

export default Nav;
