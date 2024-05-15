import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Contatiner, Wrap } from './mainStyle'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Wrap>
        <Header />
        <Contatiner>
          <Component {...pageProps} />
        </Contatiner>
        <Footer />
      </Wrap>
    </>
  )
}
