import styled from "styled-components";

export const HeaderLayout = styled.header.withConfig({
  shouldForwardProp: (prop) => !["isFixed"].includes(prop),
})`
  position: ${({ isFixed }) => (isFixed ? "sticky" : "static")};
  top: 0;
  left: 0;
  z-index: var(--z-index-nav);
`;
