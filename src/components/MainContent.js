import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  justify-content: center;
  padding: 40px 32px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  width: 100%;
  max-width: 1060px;
`;

const MainContent = ({ children }) => {
  return (
    <Main>
      <Content>{children}</Content>
    </Main>
  );
};

export default MainContent;
