import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const ButtonModule = styled.button<{$afterButtonIcon:string, $BeforButtonIcon:string}>`
  &.button {
    &--outlined {
      padding: 0 12px;
      line-height: 33px;
      background-color: transparent;
      border: 1px solid ${theme.color.primary};
      border-radius: 5px;
      &:hover {
        background-color: ${theme.color.graye};
      }
      &.active {
        color: ${theme.color.white};
        background-color: ${theme.color.primary};
      }
      @media screen and (max-width: ${theme.screenSize.moLarge}) {
        padding: 0 10px;
        font-size: 14px;
        line-height: 27px;
      }
    }
    &--icon-before {
      display: inline-block;
      padding-left: 22px;
      background: url(${({$BeforButtonIcon}) => $BeforButtonIcon || ''}) no-repeat left center;
      background-size: 18px 18px;
    }
    &--icon-after {
      display: inline-block;
      padding-right: 20px;
      background: url(${({$afterButtonIcon}) => $afterButtonIcon || ''}) no-repeat right center;
      background-size: 18px 18px;
    }
    &--gradient {
      color: #fff;
      font-weight: 600;
      text-align:center;
      background:${theme.bgColor.gradient};
      border-radius: 8px;
      &.full {
       width: 100% !important; 
      }
      &.large {
        width: 128px;
        font-size: 18px;
        line-height: 53px;
        font-weight: 600;
        @media screen and (max-width: ${theme.screenSize.moLarge}) {
          width: 80px;
          font-size: 14px;
          line-height: 37px;
        }
      }
      &.mideum {
        width: 80px;
        font-size: 14px;
        line-height: 37px;
        font-weight: 600;
      }
    }
  }
`