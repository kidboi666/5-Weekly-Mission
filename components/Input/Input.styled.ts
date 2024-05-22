import styled from 'styled-components';

const inputSize = {
  sm: '28',
  md: '40',
  lg: '50',
};

export const InputModal = styled.div<{
  size: 'sm' | 'md' | 'lg';
  $error: boolean;
}>`
  input {
    display: flex;
    width: ${({ size }) => inputSize[size]}rem;
    padding: 1.8rem 1.5rem;
    justify-content: center;
    align-items: center;
    border: 0.1rem solid
      var(${({ $error }) => ($error ? '--ErrorMessage' : '--Linkbrary-gray20')});
    border-radius: 0.8rem;
    background: var(--Section-white);
    font-size: 1.6rem;
  }

  &:focus {
    border: 1px solid var(--Primary);
  }
`;

export const TextArea = styled.div`
  height: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const WarningMessage = styled.p`
  color: var(--ErrorMessage);
  font-size: 1.4rem;
  margin: 0;
`;
