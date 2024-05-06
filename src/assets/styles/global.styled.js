import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Pretendard';
  }

  a {
    display: block;
    text-decoration: none;
    color: inherit;
  }

  li {
    list-style: none;
  }

  button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
  }

  address {
    font-style: normal;
  }

  :root {
    --Linkbrary-primary: #6d6afe;
    --Linkbrary-red: #ff5b56;
    --Linkbrary-black: #111322;
    --Linkbrary-white: #ffffff;
    --Linkbrary-bg: #f0f6ff;
    --Linkbrary-gray100: #3e3e43;
    --Linkbrary-gray60: #9fa6b2;
    --Linkbrary-gray20: #ccd5e3;
    --Linkbrary-gray10: #e7effb;
  }

  @font-face {
    font-family: 'Abel';
    src: url('../fonts/Abel-Regular.ttf') format('woff');
  }

  @font-face {
    font-family: 'Acme';
    src: url('../fonts/Acme-Regular.ttf') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('../fonts/PretendardVariable.ttf') format('woff');
  }


  #root {
    position: relative;
    min-height: 100vh;
    padding-bottom: 160px;
  }
`;

export default GlobalStyle;
