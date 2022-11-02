import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <link rel="icon" sizes="32x32" href={'/favicon.ico'} />
      </Head>
      <div className="min-h-[100vh] flex flex-col">
        <Header />
        <div className="flex-1">
          <main>
            <Component {...pageProps} />
          </main>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default MyApp
