import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Wrap } from '../styles/mainStyle';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import '@/styles/globals.css';
import LayoutProvider from '@/lib/LayoutContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutProvider>
      <Wrap>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Wrap>
    </LayoutProvider>
  );
}
