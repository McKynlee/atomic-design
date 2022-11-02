import HalloweenStats from '@mck-app/components/HalloweenStats'
import Footer from '@mck-app/components/Footer'
import Hero from '@mck-app/components/Hero'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>McK-App</title>
        <meta name="description" content="McK's app" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </Head>
      <Hero />
      <HalloweenStats />
    </div>
  )
}

export default Home
