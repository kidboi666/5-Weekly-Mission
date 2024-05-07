// reset css

import { ExecutionProps, createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle<ExecutionProps & object>`

	@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

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
	time, mark, audio, video , a, button{
		margin: 0;
		padding: 0;
		border: 0;
		color: #000;
		font-size: inherit;
		font-weight: 400;
		vertical-align: baseline;
		box-sizing: border-box;
		font-family: 'Pretendard', Arial, Helvetica, sans-serif;
	}
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	html, body {
		min-width: ${theme.screenSize.minWidth};
		font-size: 16px;
		line-height: 1;
		font-family: 'Pretendard-Regular', Arial, Helvetica, sans-serif;
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
	body {
		font-size: 16px;
	}
	a {
		text-decoration: none;
	}
	button {
		background-color: transparent;
		border: 0;
		cursor: pointer;
	}
	input {
		border: 0;
	}
`;
