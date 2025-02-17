import { ReactNode } from 'react'
import button from '@/styles/button.module.css'

type ButtonFieldProps = {
  children: ReactNode
  onClick: () => void
}

export default function Button({ children }: ButtonFieldProps) {
  return <button className={button.navBar}>{children}</button>
}
