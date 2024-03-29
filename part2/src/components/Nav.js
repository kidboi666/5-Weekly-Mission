import "./Nav.css";
import GradientButton from "./GradientButton";
import Profile from "./Profile";

function Nav({ email, name, imgUrl }) {
  const isSingin = email && name && imgUrl ? true : false;

  return (
    <nav>
      <button className="logo"></button>
      {!isSingin && <GradientButton size="medium">로그인</GradientButton>}
      {isSingin && <Profile email={email} imgUrl={imgUrl} />}
    </nav>
  );
}

export default Nav;
