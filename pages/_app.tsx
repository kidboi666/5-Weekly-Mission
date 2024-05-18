import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Wrap } from '../styles/mainStyle';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import '@/styles/globals.css';
import AuthProvider from '@/lib/auto.context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Wrap>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Wrap>
    </AuthProvider>
  );
}
