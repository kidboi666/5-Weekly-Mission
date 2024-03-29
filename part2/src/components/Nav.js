import "./Nav.css";
import StyledButton from "./StyledButton";

function Nav() {
  return (
    <nav>
      <button className="logo"></button>
      <StyledButton size="medium">로그인</StyledButton>
    </nav>
  );
}

export default Nav;
