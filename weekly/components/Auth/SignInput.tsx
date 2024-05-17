import styled from 'styled-components';

type Props = {
  type: string;
  placeholder: string;
};

function SignInput({ type, placeholder }: Props) {
  return <StyledInput type={type} placeholder={placeholder} />;
}

const StyledInput = styled.input`
  width: 400px;
  padding: 18px 15px;
  border-radius: 8px;
  border: 1px solid var(--Linkbrary-gray20, #ccd5e3);
  background: var(--Linkbrary-white, #fff);
  margin-top: 12px;

  &:focus {
    border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
    outline: none;
  }
`;

export default SignInput;
