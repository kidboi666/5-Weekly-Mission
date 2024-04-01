import styled from "styled-components";
import { theme } from "../../styles/theme";
import { NavLink } from "react-router-dom";

export const CardWrap = styled(NavLink)`
  border-radius: 0.9375rem;
  overflow: hidden;
  box-shadow: 0 0.3125rem 1.5625rem rgba(0,0,0,.08);
  border: 1px solid transparent;
  .card {
    &__image {
      position: relative;
      width: 100%;
      height: 12.5rem;
      overflow: hidden;
      background-color: ${theme.color.graye};
      img {
        position: absolute;
        left: 0;
        top: 50%;
        width: 100%;
        transform: translateY(-50%);
      }
    }
    &__info {
      text-align: left;
      padding: 0.9375rem 1.25rem;
      background-color: ${theme.color.white};
    }
    &__time-ago {
      font-size: ${theme.font.sm};
      line-height: 1rem;
      color: ${theme.color.gray6};
    }
    &__btn-menu {
      cursor: pointer;
    }
    &__content {
      padding-top: 0.625rem;
      line-height: 1.5rem;
      word-break: break-all;
    }
    &__date {
      padding-top: 10px;
      font-size: ${theme.font.s};
      line-height: 1rem;
      color: ${theme.color.gray3};
    }
  }
  &:hover {
    border: 1px solid ${theme.color.primary};
  }
  @media screen and (max-width: ${theme.screenSize.moLarge}){
    .card {
      &__image {
        height: 12rem;
      }
    }
  }
`