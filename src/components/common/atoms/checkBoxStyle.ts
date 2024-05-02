import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const CheckBoxWrap = styled.div`
  &.chk {
    &--list {
      &-type1 {
        max-height: 240px;
        overflow-y: auto;
        text-align: left;
        .inner {
          cursor: pointer;
          input {
            display: none !important;
          }
          label {
            position: relative;
            display: block;
            padding: 0 8px;
            line-height: 40px;
            &::after {
              content: '';
              display: none;
              position: absolute;
              top: 13px;
              right: 8px;
              width: 14px;
              height: 14px;
              background: url('/assets/icon/icon_check.svg');
            }
            strong {
              font-size: 16px;
            }
            span {
              font-size: 14px;
              color: ${theme.color.gray9};
              padding-left: 8px;
            }
          }
          input:checked + label {
            background-color: ${theme.color.grayf};
            &::after {
              display: block;
            }
            strong {
              color: ${theme.color.primary};
            }
          }
          &:hover {
            background-color: ${theme.color.grayf};
          }
        }
      }
    }
  }
`;
