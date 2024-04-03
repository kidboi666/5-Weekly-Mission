import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Input = styled.input`
  margin-bottom: 2.5rem;
  padding: 0.9375rem 1rem 0.9375rem 2.625rem;
  width: 100%;
  line-height: 1.5rem;
  background: ${theme.color.grayf} url('assets/icon/icon_search.svg') no-repeat left 1rem center;
  background-size: 1rem 1rem;
  border-radius: 0.625rem;
  box-sizing: border-box;
`