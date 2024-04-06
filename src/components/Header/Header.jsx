import { Nav } from "../Nav/Nav";
import { HeaderLayout } from "./Header.style";

export const Header = ({ profile, isFixed }) => {
  return (
    <HeaderLayout isFixed={isFixed}>
      <Nav profile={profile} />
    </HeaderLayout>
  );
};
