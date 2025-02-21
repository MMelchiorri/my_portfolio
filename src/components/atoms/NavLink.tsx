'use client'

import { ReactNode } from 'react'
import { NavLinkProps } from '@/types/NavLinkProps'

export default function NavLink({ name, link }: NavLinkProps): ReactNode {
  return <a href={link}>{name}</a>
}
