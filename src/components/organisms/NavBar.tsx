'use client'

import NavLink from '../atoms/NavLink'
import { NavBarProps } from '@/types/NavBarProps'
import nav from '@/styles/nav.module.css'

export default function Navbar({ items }: NavBarProps) {
  return (
    <nav className={nav.navbar}>
      <div className={nav.container}>
        {items.map((elem, index) => (
          <NavLink key={index} name={elem.name} link={elem.link} />
        ))}
      </div>
    </nav>
  )
}
