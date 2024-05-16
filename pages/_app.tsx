import "@/styles/form.css";
import "@/styles/pages/main/main.css";

import type { AppProps } from "next/app";
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
