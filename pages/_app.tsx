// _app.tsx
import { AppProps } from "next/app";
import "../public/global.css";

function _app({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default _app;
