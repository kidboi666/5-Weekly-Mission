import { Nav } from "../Nav/Nav";

export const Header = ({ profile }) => {
  return (
    <header>
      <Nav profile={profile} />
    </header>
  );
};
