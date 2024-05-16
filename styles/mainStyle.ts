import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Section = styled.section`
  &:not(.section__banner) {
    background-color: #fff;
  }

  &:last-child {
    padding-bottom: 120px;
  }

  .section__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3.125rem 2rem;
    margin: 0 auto;
    width: 100%;
    max-width: 66.375rem;
    gap: 0 32px;
  }

  &:nth-child(odd) .section__inner .section__text__box {
    order: 2;
    padding-right: 2rem;
  }

  /* section */
  &.section__banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5.813rem 2rem 36.875rem;
    text-align: center;
    overflow: hidden;
    background: url('/assets/bg/bg-banner.svg') no-repeat center bottom;
    background-size: 1028px auto;

    .title {
      padding: 4.375rem 0 0;
      br:nth-of-type(2) {
        display: none;
      }
    }

    .btn__link-add {
      margin-top: 2.5rem;
      width: 100%;
      max-width: 21.875rem;
    }
  }

  &.section__link {
    padding: 4.375rem 0 0;

    .section__img__box {
      background-image: url('/assets/bg/bg-sec-1.png');
    }
  }

  &.section__folder .section__img__box {
    background-image: url('/assets/bg/bg-sec-2.png');
  }

  &.section__share .section__img__box {
    background-image: url('/assets/bg/bg-sec-3.png');
  }

  &.section__search .section__img__box {
    background-image: url('/assets/bg/bg-sec-4.png');
  }

  .title__clip {
    font-weight: 700;
    background-clip: text !important;
    -webkit-text-fill-color: transparent !important;

    &.type {
      background: linear-gradient(to right, ${theme.color.primary}, #ff9f9f);
    }
    &.type1 {
      background: linear-gradient(to right, #fe8a8a, #a4ceff);
    }
    &.type2 {
      background: linear-gradient(to right, #6fbaff, #ffd88b);
    }
    &.type3 {
      background: linear-gradient(to right, #6d7ccd, #528885);
    }
    &.type4 {
      background: linear-gradient(to right, #fe578f, #68e8f9);
    }
  }

  @media screen and (max-width: ${theme.screenSize.pc}) {
    &:nth-child(odd) .section__inner .section__text__box {
      padding-right: 0;
    }

    &.section__banner {
      padding-bottom: 23.938rem;
      background-size: 40.625rem auto;

      .title {
        padding: 2.5rem 0 0;
        br:nth-of-type(2) {
          display: block;
        }
      }
    }

    &.section__link {
      padding: 1.875rem 0 0;
    }
  }

  @media screen and (max-width: ${theme.screenSize.moLarge}) {
    .section__inner .section__text__box {
      width: 100%;
    }

    &:last-child {
      padding-bottom: 40px;
    }

    &.section__banner {
      padding: 0 2rem 11.5rem;
      background-size: 18.875rem auto;
      .title {
        padding: 1.75rem 0 0;
      }

      .btn__link-add {
        margin-top: 1.5rem;
        width: 12.5rem;
        font-size: 0.875rem;
        line-height: 2.313rem;
      }
    }

    &.section__link {
      padding: 0;
      .section__text__box p::before {
        background-image: url('/assets/bg/bg-sec-1.png');
      }
    }

    &.section__folder .section__text__box p::before {
      background-image: url('/assets/bg/bg-sec-2.png');
    }

    &.section__share .section__text__box p::before {
      background-image: url('/assets/bg/bg-sec-3.png');
    }

    &.section__search .section__text__box p::before {
      background-image: url('/assets/bg/bg-sec-4.png');
    }

    .section__inner {
      flex-direction: column;
      align-items: flex-start;
      padding: 2.5rem 2rem;
      gap: 0;

      .title {
        padding: 0 0 1.25rem;

        br {
          display: none;
        }
      }

      .text__size__m {
        font-size: 0.938rem;
        line-height: 1.406rem;

        br {
          display: none;
          word-break: keep-all;
        }
      }
    }
  }

  /* 텍스트 박스 */
  .section__text__box {
    p {
      line-height: 1.25rem;
      padding: 0.625rem 0 0;
      font-weight: 500;
      font-style: normal;
      color: #6b6b6b;
      word-break: keep-all;

      &::before {
        content: '';
        display: none;
        padding: 40.17% 0;
        margin: 0 0 1rem;
        width: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top center;
        border-radius: 0.938rem;
      }
    }

    @media screen and (max-width: ${theme.screenSize.moLarge}) {
      width: 100;

      p {
        padding: 0;
        &::before {
          display: block;
        }
      }
    }
  }

  /* 이미지 박스 */
  .section__img__box {
    width: 34.375rem;
    height: 28.125rem;
    border-radius: 0.938rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: var(--color-gray5);
    overflow: hidden;

    @media screen and (max-width: ${theme.screenSize.pc}) {
      width: 24.063rem;
      height: 19.688rem;
    }

    @media screen and (max-width: ${theme.screenSize.moLarge}) {
      display: none;
    }
  }
`;
