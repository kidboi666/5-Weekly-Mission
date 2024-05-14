import { theme } from "@/styles/theme";
import styled from "styled-components";

export const LoginWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: ${theme.color.graye};
  .login {
    &__body {
      padding: 14.875rem 2rem 0;
      width: 100%;
      max-width: 29rem;
      transition: padding .3s;

      .title img {
        height: 2.375rem;
      }
    }

    &__sign {
      padding: 1rem 0;
      flex-wrap: wrap;

      span {
        line-height: 1.5rem;
      }

      a {
        display: block;
        padding-left: .5rem;
        color: var(--color-primary);
        text-decoration: underline;
        line-height: 1.5rem;
        font-weight: 600;
      }
    }

    &__another {
      margin-top: 2rem;
      padding: 0 1.5rem;
      background-color: var(--color-gray4);
      border: 1px solid var(--color-gray3);
      border-radius: 0.5rem;

      span {
        line-height: 4rem;
      }
    }

    &__sns {
      gap: 1rem;

      a {
        width: 2.625rem;
        height: 2.625rem;
      }
    }
  }
  .form {
  &__wrap {
    display: flex;
    flex-direction: column;
    .btn__gradient__lg {
      margin-top: 1.125rem;
    }
  }
  &__relative {
    position: relative;
  }
  &__box {
    padding: 0.75rem 0;
    label {
      display: block;
      padding: 0 0 0.75rem;
    }
    input {
      padding: 1.125rem 0.938rem;
      width: 100%;
      line-height: 1.5rem;
      border: 1px solid var(--color-gray3);
      border-radius: 0.5rem;
      outline: none !important;
      &:focus {
        border-color: var(--color-primary);
      }
      &:active {
        border-color: var(--color-primary);
      }
    }
    .btn__pw {
      position: absolute;
      right: 0.938rem;
      top: 50%;
      transform: translateY(-50%);
      padding: 0.25rem;
      z-index: 1;
      img {
        display: block;
      }
      .icon {
        &__on {
          display: none;
        }
        &__off {
          display: block;
        }
      }
      &__off {
        top: calc(50% - 1px);
        .icon {
          &__on {
            display: block;
          }
          &__off {
            display: none;
          }
        }
      }
    }
    .error__text {
      display: none;
      padding: 0.375rem 0 0;
      font-size: var(--font-size-sm);
      color: var(--color-red);
      line-height: 1;
    }
    &.error {
      .error__text {
        display: block;
      }
      input {
        border-color: var(--color-red);
      }
    }
    .pw input {
      padding-right: 3.125rem;
    }
  }

}

  @media screen and (max-width: 1199px) {
    .login__body {
      padding: 12.5rem 2rem;
    }
  }

  @media screen and (max-width: 767px) {
    .login__body {
      padding: 7.5rem 2rem;
    }
  }
`