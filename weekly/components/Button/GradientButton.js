import styled from 'styled-components';

const SIZES = {
  auto: '100%',
  large: '350px',
  medium: '128px',
  small: '80px',
};

const GradientButton = styled.button`
  width: ${({ size }) => SIZES[size ?? 'medium']};
  font-family: Pretendard;
  padding: 16px ${({ size }) => (size === 'small' ? '10' : '20')}px;
  border: none;
  border-radius: 8px;
  background: var(--grad-purple-to-blue);
  color: var(--button-text-color);
  font-size: ${({ size }) => (size === 'small' ? '14' : '18')}px;
  font-weight: 600;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export default GradientButton;
