import "./Nav.css";
import GradientButton from "./GradientButton";

function Nav() {
  return (
    <nav>
      <button className="logo"></button>
      <GradientButton size="medium">로그인</GradientButton>
    </nav>
  );
}

export default Nav;
