import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  
  return (
    <div>
      {domLoaded && (
<>
      <Head>
        <link rel="icon" sizes="32x32" href={'/favicon.ico'} />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
      </>
      )}
    </div>
  )
}

export default MyApp
