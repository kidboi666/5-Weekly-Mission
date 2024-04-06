import styled from "styled-components";

export const HeaderLayout = styled.header.withConfig({
  shouldForwardProp: (prop) => !["isSticky"].includes(prop),
})`
  position: ${({ isSticky }) => (isSticky ? "sticky" : "static")};
  top: 0;
  left: 0;
  z-index: var(--z-index-nav);
`;
