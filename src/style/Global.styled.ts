import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    /* -------Reset styles------- */
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, input {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 16px;
        font: inherit;
        vertical-align: baseline;
        box-sizing: border-box;
        font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    a, button {
        border: none;
        cursor: pointer;
        background: none;
    }


    /* -------Color styles------- */
    :root {
        --main-color: #6D6AFE;
        --var-test-red: #FF5B56;
        --var-test-black: #111322;
        --var-test-white: #FFFFFF;
        --var-test-gray: #9FA6B2;
        
        --border-gray: #CCD5E3;
    }

    /* -------zIndex styles------- */
    :root {
        --zindex-basic: 100;
        --zindex-modal: 900;
    }
`

export default GlobalStyle;