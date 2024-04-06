import { Nav } from "../Nav/Nav";
import { styled } from "styled-components";

const Heade = styled.header`
  position: ${($isFixed) => ($isFixed ? "sticky" : "static")};
  top: 0;
  left: 0;
  z-index: var(--z-index-nav);
`;

export const Header = ({ profile, isFixed }) => {
  return (
    <Heade>
      <Nav profile={profile} />
    </Heade>
  );
};
