'use client'


import Link from 'next/link'
import clsx from 'clsx'

import { usePathname } from 'next/navigation'



function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  let isActive = usePathname() === href

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 transition',
          isActive
            ? 'text-teal-500 dark:text-teal-400'
            : 'hover:text-teal-500 dark:hover:text-teal-400'
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
        )}
      </Link>
    </li>
  )
}



export function Header() {

  return (
    <header
      className="pointer-events-none hidden md:flex sticky top-0 z-50 justify-center"
      style={{
        height: 'var(--header-height)',
        marginBottom: 'var(--header-mb)',
      }}
    >
      <nav className="my-4 pb-4 pointer-events-auto">
        <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
          <NavItem href="/about">About</NavItem>
          <NavItem href="/articles">Articles</NavItem>
          <NavItem href="/uses">Uses</NavItem>
        </ul>
      </nav>
    </header>
  )
}
