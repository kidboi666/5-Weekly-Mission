// _app.tsx
import { AppProps } from "next/app";
import "../public/global.css";
import Header from "../src/Components/Header/Header";
import Footer from "../src/Components/Footer/Footer";

function _app({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default _app;
