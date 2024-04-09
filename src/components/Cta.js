import styled from 'styled-components';

function CTA({ text, width, fontSize, padding }) {
  return (
    <StyledCTA width={width} fontSize={fontSize} padding={padding}>
      {text}
    </StyledCTA>
  );
}

export default CTA;

const StyledCTA = styled.p`
    display: flex;
    width: ${(width) => width || '128px'};
    padding: ${(padding) => padding || '16px 20px'};
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
    color: #f5f5f5;
    font-family: Pretendard;
    font-size: ${(fontSize) => fontSize || '16px'}
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;
`;
