import styled from 'styled-components';

export const CommonStyles = styled.div`
  position: relative;
  width: 100%;
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
  max-width: 106rem;
  height: 4.3rem;
  padding-left: 3.8rem;
  padding-right: 1.6rem;
  border-radius: 1rem;
  background-color: var(--gray-light);
  font-size: 1.4rem;
  border: none;
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
