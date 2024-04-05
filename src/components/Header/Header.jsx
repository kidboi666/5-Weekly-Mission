import { Nav } from "../Nav/Nav";
import "./Header.css";

export const Header = ({ profile }) => {
  return (
    <header>
      <Nav profile={profile} />
    </header>
  );
};
