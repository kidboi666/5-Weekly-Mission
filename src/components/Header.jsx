import styled from "styled-components";
import { GlobalNavbar } from "./GlobalNavbar";
import { AddLinkBar } from "./AddLinkBar";

export const Header = () => {
  return (
    <>
      <Container>
        <GlobalNavbar />
        <AddLinkBar />
      </Container>
    </>
  );
};

const Container = styled.div`
  background: ${({ theme }) => theme.color.Gray5};
`;
