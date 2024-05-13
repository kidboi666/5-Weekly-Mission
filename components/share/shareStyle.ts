import { DFlaxAlignCenterBtw } from "@/styles/commonStyle";
import { theme } from "@/styles/theme";
import styled from "styled-components";

export const ShareBox = styled(DFlaxAlignCenterBtw)`
  .tab-title {
    margin-bottom: 1.5rem;
    font-weight: 700;
  }
  @media screen and (max-width: ${theme.screenSize.moLarge}) {
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 1.15rem;
    .tab-title {
      margin-bottom: 0.75rem;
    }
  }
`