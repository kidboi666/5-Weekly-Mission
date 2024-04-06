import { Nav } from "../Nav/Nav";
import { HeaderLayout } from "./Header.style";

export const Header = ({ profile, isSticky }) => {
  return (
    <HeaderLayout isSticky={isSticky}>
      <Nav profile={profile} />
    </HeaderLayout>
  );
};
