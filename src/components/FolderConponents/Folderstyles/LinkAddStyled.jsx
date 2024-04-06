import styled from 'styled-components';

const CommonStyles = styled.div`
  position: relative;
  width: 100%;
`;

export const LinkAddBackGround = styled(CommonStyles)`
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem 0 4rem;
  box-sizing: border-box;
  background-color: var(--light-blue);
  @media (min-width: 768px) {
    padding: 2rem 0 6rem;
  }
`;

export const SearchBar = styled(CommonStyles)`
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 0 3.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchBarInput = styled(CommonStyles)`
  max-width: 80rem;
  height: 6.9rem;
  padding-left: 3.8rem;
  padding-right: 1.6rem;
  border-radius: 1rem;
  background-color: white;
  border: 1px solid var(--primary);
  @media (min-width: 768px) {
    height: 5.4rem;
    padding-left: 4.2rem;
    font-size: 1.6rem;
    line-height: 150%;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  padding-left: 1.6rem;
`;

export const SearchImg = styled.img`
  cursor: pointer;
  border: none;
  position: absolute;
  top: 50%;
  left: 1.6rem;
  transform: translateY(-50%);
`;
