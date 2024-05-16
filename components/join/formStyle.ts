import { theme } from "@/styles/theme";
import styled from "styled-components";

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  
  .button--gradient {
    margin-top: 1.125rem;
  }
`

export const FormRowBox = styled.div`
  padding: 0.75rem 0;

  label {
    display: block;
    padding: 0 0 0.75rem;
  }

  input {
    &[type=password],
    &[type=text],
    &[type=number], 
    &[type=email] {
      padding: 1.125rem 0.938rem;
      width: 100%;
      line-height: 1.5rem;
      border: 1px solid ${theme.color.grayc};
      border-radius: 0.5rem;
      outline: none !important;

      &:active, &:focus {
        border-color: ${theme.color.primary};
      }
    }
  }
  
  .input__password-toggle {
    position: absolute;
    right: 0.938rem;
    top: 50%;
    transform: translateY(-50%);
    padding: 0.25rem;
    z-index: 1;
    
    img {
      display: block;
    }

    .pw {
      &__on {
        display: none;
      }
      &__off {
        display: block;
      }
    }
  }
  &.error {
    .error__text {
      display: block;
    }

    input {
      border-color: ${theme.color.red};
    }
  }

  .pw input {
    padding-right: 3.125rem;
  }
`

export const ErrorText = styled.div`
  /* display: none; */
  padding: 0.375rem 0 0;
  font-size: ${theme.font.s};
  color: ${theme.color.red};
  line-height: 1;
`