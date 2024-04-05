import { Nav } from "../Nav/Nav";

export const Header = ({ profile, isFixed }) => {
  return (
    <header>
      <Nav profile={profile} isFixed={isFixed} />
    </header>
  );
};
