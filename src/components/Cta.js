import styled, { css } from "styled-components"

const StyledCta = styled.div`
    &{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3.7rem;
    cursor: pointer;
    background-image: linear-gradient(135deg, var(--primary) 0%, #6ae3fe 100%);
    border-radius: 0.8rem;
    color: #f5f5f5;
    font-size: 1.4rem;
    font-weight: 600;
  
    @media (min-width: 768px) {
      height: 5.4rem;
      border-radius: 0.8rem;
      font-size: 1.8rem;
    }
  }
  
  ${props =>
    props.width === "short" &&
    css`
      width: 8rem;

      @media (min-width: 768px) {
        width: 12.8rem;
      }
    `}

  ${props =>
    props.width === "long" &&
    css`
      width: 20rem;

      @media (min-width: 768px) {
        width: 35rem;
      }
    `}
`;

function Cta({children, href, width = "short"}) {
    return (
        <StyledCta width={width}>
            <a class="cta, cta-short" href={href}>
                {children}
            </a>
        </StyledCta>            
    )
}

export default Cta