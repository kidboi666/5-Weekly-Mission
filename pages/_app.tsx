import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import GlobalStyle from '@/styles/globals.styled';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
