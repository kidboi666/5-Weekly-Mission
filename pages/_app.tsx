import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import GlobalStyle from '@/styles/globals.styled';
import type { AppProps } from 'next/app';
import { usePathname } from 'next/navigation';

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();
  const isAuthPage = pathname === '/signup' || pathname === '/signin';

  return (
    <>
      <GlobalStyle />
      {!isAuthPage && <Header />}
      <Component {...pageProps} />
      {!isAuthPage && <Footer />}
    </>
  );
}
