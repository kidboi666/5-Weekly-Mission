import styled from "styled-components";
import { theme } from "../../styles/theme";

export const CardWrap = styled.figure`
  border-radius: 15px;
  overflow: hidden;
  max-width: 340px;
  box-shadow: 0 5px 25px rgba(0,0,0,.08);
  border: 1px solid transparent;
  .card {
    &__image {
      position: relative;
      width: 100%;
      height:200px;
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
      padding: 15px 20px;
      background-color: ${theme.color.white};
    }
    &__time-ago {
      font-size: ${theme.font.sm};
      line-height: 16px;
      color: ${theme.color.gray6};
    }
    &__btn-menu {
      cursor: pointer;
    }
    &__content {
      padding-top: 10px;
      line-height: 24px;
      word-break: break-all;
    }
    &__date {
      padding-top: 10px;
      font-size: ${theme.font.s};
      line-height: 16.71px;
      color: ${theme.color.gray3};
    }
  }
  &:hover {
    border: 1px solid ${theme.color.primary};
  }
`