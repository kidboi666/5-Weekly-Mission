import styled from 'styled-components';
import { GRAY5 } from './color';

const Container = styled.div`
  padding: 113px 32px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${GRAY5};
  margin-top: ${({ $headerfixed }) => ($headerfixed ? `0px` : '-93px')};

  @media (max-width: 767px) {
    padding: 103px 32px 60px;
  }
`;

const SubHeader = ({ children, headerfixed = true }) => {
  return <Container $headerfixed={headerfixed}>{children}</Container>;
};

export default SubHeader;
