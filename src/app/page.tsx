'use client'

import Navbar from '@/components/organisms/NavBar'
import styles from './page.module.css'
import home from '../../public/icon/home.svg'
import about from '../../public/icon/about_me.svg'
import github from '../../public/icon/github.svg'
import contact from '../../public/icon/contact.svg'
import hero from '../../public/hero-section.jpg'
import { HeroSection } from '@/components/organisms/Hero'

const navItems = [
  { name: 'Home', link: '/', icon: home },
  { name: 'About', link: '/about', icon: about },
  { name: 'Services', link: 'https://github.com/MMelchiorri', icon: github },
  { name: 'Contact', link: '/contact', icon: contact },
]
export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar items={navItems} />
      <HeroSection
        text={`Hi, I'm Marco, A web Developer`}
        subText="this is a sub text"
        textButton="this is a text button"
        image={hero}
      />
    </div>
  )
}
