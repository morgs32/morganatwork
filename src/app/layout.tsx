import Head from 'next/head'

import '@/styles/tailwind.css'
import 'focus-visible'
import { useId } from 'react'
import { Logo } from './components/Logo'
import { IconLink } from './components/IconLink'
import { BookIcon, GitHubIcon } from './icons'
import { Header } from './Header'

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <html className="h-full antialiased" lang="en">
      <body className="min-h-full bg-white dark:bg-gray-950">
        <Head>
          <title>Commit - Open-source Git client for macOS minimalists</title>
          <meta
            name="description"
            content="Commit is a lightweight Git client you can open from anywhere any time you’re ready to commit your work with a single keyboard shortcut. It’s fast, beautiful, and completely unnecessary."
          />
        </Head>
        <div className="relative flex flex-col pointer-events-none w-full md:w-[50%] mr-auto min-h-[85vh] md:h-screen bg-gray-950 overflow-hidden md:fixed z-40">
          <Glow />
          <div className="flex-grow flex flex-col justify-center">
            <Logo />
          </div>
          <div className="sticky top-0 pointer-events-auto flex-shrink-0 bottom-0 left-0 right-0">
            <div className="flex justify-between md:justify-center m-4">
              <div>
                <div className="flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 md:justify-start">
                  <IconLink
                    href="https://linkedin.com/in/morganintrator"
                    icon={BookIcon}
                    className="flex-none"
                  >
                    Linkedin
                  </IconLink>
                  <IconLink
                    href="https://github.com/morgs32"
                    icon={GitHubIcon}
                    className="flex-none"
                  >
                    GitHub
                  </IconLink>
                </div>
              </div>
              <div className="flex md:hidden">
                <IconLink
                  href="https://github.com/morgs32"
                  icon={GitHubIcon}
                  className="flex-none"
                >
                  Menu
                </IconLink>
              </div>
            </div>
          </div>
        </div>
        {/* <ThemeToggle /> */}
        <div className="relative md:w-[50%] ml-auto">
          <svg
            className="z-50 absolute right-[100%] h-full w-1.5"
            aria-hidden="true"
          >
            <defs>
              <pattern id="timeline" width="6" height="8" patternUnits="userSpaceOnUse">
                <path
                  d="M0 0H6M0 8H6"
                  className="stroke-white/20 dark:stroke-white/20"
                  fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#timeline)" />
          </svg>
          <Header />
          <main>
            <div className="mx-auto p-6 typography min-h-[150vh]">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}

function Glow() {
  let id = useId()

  return (
    <svg
      className="absolute h-[100%] w-[100%]"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`${id}-desktop`} cx="100%">
          <stop offset="0%" stopColor="rgba(56, 189, 248, 0.3)" />
          <stop offset="53.95%" stopColor="rgba(0, 71, 255, 0.09)" />
          <stop offset="100%" stopColor="rgba(10, 14, 23, 0)" />
        </radialGradient>
        <radialGradient id={`${id}-mobile`} cy="100%">
          <stop offset="0%" stopColor="rgba(56, 189, 248, 0.3)" />
          <stop offset="53.95%" stopColor="rgba(0, 71, 255, 0.09)" />
          <stop offset="100%" stopColor="rgba(10, 14, 23, 0)" />
        </radialGradient>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill={`url(#${id}-desktop)`}
        className="hidden md:block"
      />
      <rect
        width="100%"
        height="100%"
        fill={`url(#${id}-mobile)`}
        className="md:hidden"
      />
    </svg>

  )
}

