import styled from 'styled-components';

const ModalInput = styled.input`
  border: 1px solid #ccd5e3;
  border-radius: 10px;
  color: #373740;
  font-size: 16px;
  padding: 15px 18px;
  transition: border-color 0.2s ease-in-out;
  width: 100%;

  &:focus {
    border-color: #6d6afe;
    outline: none;
  }
`;

export default ModalInput;
