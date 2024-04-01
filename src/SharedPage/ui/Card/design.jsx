import styled from "styled-components";
import { CardContentTemplate } from "../CardContent/design";
import { CardImageTemplate } from "../CardImage/design";
export const CardTemplate = styled.div`
  display: flex;
  flex-direction: column;
  width: 32.5rem;
  height: 32.7rem;
  box-shadow: 0 0.5rem 2.5rem 0 rgba(0, 0, 0, 0.08);
  border-radius: 1.5rem;

  :hover {
    ${CardContentTemplate} {
      background-color: #f0f6ff;
    }
    ${CardImageTemplate} {
      background-size: 130%;
    }
  }

  @media (min-width: 768px) {
    width: 34rem;
    height: 33.4rem;
  }
`;
