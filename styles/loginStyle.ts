import { Container, dflex, dflexCenterBtw, dflexCenterCenter } from '@/styles/commonStyle';
import { theme } from '@/styles/theme';
import styled, { keyframes } from 'styled-components';

export const JoinWrap = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;

export const JoinBody = styled.div`
  padding: 14.875rem 2rem 0;
  width: 100%;
  max-width: 29rem;
  @media screen and (max-width: 1199px) {
    padding: 12.5rem 2rem;
  }

  @media screen and (max-width: 767px) {
    padding: 7.5rem 2rem;
  }
`;

export const JoinTitle = styled.h1`
  text-align: center;
`;

export const JoinAccessControlBox = styled.div`
  ${dflexCenterCenter}
  padding: 1rem 0;
  flex-wrap: wrap;

  span {
    line-height: 1.5rem;
  }

  a {
    display: block;
    padding-left: 0.5rem;
    color: ${theme.color.primary};
    text-decoration: underline;
    line-height: 1.5rem;
    font-weight: 600;
  }
`;

export const JoinSocial = styled.div`
  ${dflexCenterBtw}
  margin-top: 2rem;
  padding: 0 1.5rem;
  background-color: ${theme.color.graye};
  border: 1px solid ${theme.color.grayc};
  border-radius: 0.5rem;

  h6 {
    line-height: 4rem;
  }

  .login__sns {
    ${dflex}
    gap: 1rem;
    a {
      width: 2.625rem;
      height: 2.625rem;
    }
  }
`;
