'use client'

import { ReactNode } from 'react'
import { NavLinkProps } from '@/types/NavLinkProps'
import Link from 'next/link'
import nav from '@/styles/nav.module.css'
import Image from 'next/image'

export default function NavLink({ name, link, icon }: NavLinkProps): ReactNode {
  const isGithubLink = link === 'https://github.com/MMelchiorri';
  return (
    <Link className={nav.link} href={link} target={isGithubLink ? '_blank' : undefined} passHref={true}>
      <Image src={icon} alt={`${name} icon`} />
    </Link>
  );
}
