import type { DocumentContext, DocumentInitialProps } from "next/document";
import Document, { Html, Head, Main, NextScript } from "next/document";
import React, { useState } from "react";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta property="og:title" content="Linkbrary" />
          <meta
            property="og:url"
            content="https://chipper-selkie-f96db4.netlify.app/"
          />
          <meta property="og:image" content="../src/asset/link-image.png" />
          <meta
            property="og:description"
            content="세상의 모든 정보를 쉽게 저장하고 관리해 보세요"
          />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" />
          <meta
            name="twitter:url"
            content="https://chipper-selkie-f96db4.netlify.app/"
          />
          <meta name="twitter:image" content="../src/asset/link-image.png" />
          <meta
            name="twitter:description"
            content="세상의 모든 정보를 쉽게 저장하고 관리해 보세요"
          />

          <meta
            name="description"
            content="Web site created using create-react-app"
          />
          <link
            rel="stylesheet"
            as="style"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Abel&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Acme&display=swap"
            rel="stylesheet"
          />
          <script src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.1/kakao.min.js"></script>
          <title>Linkbrary</title>
          <style />
        </Head>
        <body>
          <Main />
          <div id="modal-root"></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}
