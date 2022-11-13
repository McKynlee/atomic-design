import HalloweenStats from '@mck-app/components/HalloweenStats'
import Footer from '@mck-app/components/Footer'
import Hero from '@mck-app/components/Hero'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/future/image'
import Header from '@mck-app/components/Header'
import { useCallback, useState } from 'react'
import COSTUMES, { CostumeData } from '@mck-app/helpers/costumes'
import Sidebar from '@mck-app/components/Sidebar'
import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu';
import { CostumeCarousel } from '@mck-app/components/CostumeCarousel'
import CostumeContent from '@mck-app/components/CostumeContent'

const Home: NextPage = () => {
  const handlePromotionClick = () => {
    //TODO: send money to McK's bank account
    console.log('MORE $$$$$$$!')
  }

  const [buttonColor, setButtonColor] = useState('#ffffff')

  const handleContactMe = () => {
    setButtonColor('#' + Math.floor(Math.random() * 16777215).toString(16))
  }

  const sections: CostumeData[] = COSTUMES;

  return (
    <div style={{ width: '100%'}}>
      <Head>
        <title>McK-App</title>
        <meta name="description" content="McK's app" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </Head>
      <header >
      <Menu >
      <Link href="https://www.history.com/topics/halloween/history-of-halloween">
      <a className="menu-item" target="_blank">
        History of Halloween
      </a>
      </Link>
      <Link href="#costumes">
      <a className="menu-item" >
        Costumes
      </a>
      </Link>
      <Link href="https://mckynlee.github.io/about/">
      <a className="menu-item" target="_blank">
        About the author
      </a>
      </Link>
    </Menu>
        <button
          type="button"
          onClick={handlePromotionClick}
          style={{ backgroundColor: 'white' }}
        >
          Give me a promotion!
        </button>
      </header>
      <div
      style={{
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        height: '200px',
        position: 'relative',
      }}
    >
      <Image alt="Halloween pumpkins" src="/images/pumpkins.jpeg" fill />
    </div>
      <section id="costumes">
        <div className="halloweenStatsHeader">
          <h2>Costumes I saw on Halloween</h2>
        </div>
        <div className="costumeCardContainer" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <CostumeCarousel>
          {sections.map((section, i) => (
            <CostumeCarousel.Section order={i} key={section.name}>
              <CostumeContent section={section}/>
            </CostumeCarousel.Section>
          ))}
          </CostumeCarousel>
        </div>
      </section>
      <footer>
        <button
          type="button"
          onClick={handleContactMe}
          style={{ backgroundColor: buttonColor }}
        >
          Find your lucky color!
        </button>
        <h6>McKompany Productions</h6>
      </footer>
    </div>
  )
}

export default Home
