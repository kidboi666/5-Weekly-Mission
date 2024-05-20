import "@/styles/form.css";
import "@/styles/pages/main/main.css";

import type { AppProps } from "next/app";

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
