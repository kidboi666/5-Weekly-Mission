import styled from 'styled-components';

interface InputContainerProps {
  $width: string;
  $error?: boolean;
}

export const InputLayout = styled.div`
  position: relative;
`;

export const InputContainer = styled.input<InputContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${({ $width }) => $width};
  height: 50px;
  padding: 12px 16px;
  gap: 10px;
  border: 1px solid ${({ $error }) => ($error ? '#ff0000' : '#cccccc')};
  border-radius: 8px;
  box-sizing: border-box;
  background: #ffffff;
  font-family: 'Pretendard';
  font-size: 16px;
  outline: none;

  &:focus {
    border: 1px solid var(--purple-600);
    outline: none;
  }

  &::placeholder {
    color: #555555;
  }

  &.disabled {
    background: #f6f6f6;
    color: #666666;
    cursor: not-allowed;
  }

  &.active {
    border: 2px solid #3a3a3a;
  }

  &.focused {
    border: 2px solid #555555;
  }

  &.button {
    border: 1px solid #555555;
    border-radius: 8px;
  }

  &.disabled {
    border: 1px solid #cccccc;
    border-radius: 8px;
    background: #f6f6f6;
    color: #666666;
  }
`;

export const ErrorMessage = styled.div`
  position: absolute;
  bottom: -20px;
  left: 2px;
  color: red;
  font-family: 'Pretendard';
  font-size: 14px;
`;

export const EyeContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  cursor: pointer;
`;
