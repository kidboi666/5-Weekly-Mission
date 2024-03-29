import "./Nav.css";
import GradientButton from "./GradientButton";
import Profile from "./Profile";

function Nav({ email, imgUrl }) {
  const isSingin = email && imgUrl ? true : false;

  return (
    <nav>
      <button className="logo"></button>
      {!isSingin && <GradientButton size="medium">로그인</GradientButton>}
      {isSingin && <Profile email={email} imgUrl={imgUrl} />}
    </nav>
  );
}

export default Nav;
