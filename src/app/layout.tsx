import Head from 'next/head'

import '@/styles/tailwind.css'
import 'focus-visible'
import { Timeline } from './Timeline'
import { useId } from 'react'
import Link from 'next/link'
import { Logo } from './components/Logo'
import { IconLink } from './components/IconLink'
import { BookIcon, GitHubIcon } from './icons'
import { Tabs } from '@/components/Tabs'

export default function Layout({ children }: { children: React.ReactNode }) {
  let id = useId()

  return (
    <html className="h-full antialiased" lang="en">
      <body className="flex min-h-full flex-col bg-white dark:bg-gray-950">
        <Head>
          <title>Commit - Open-source Git client for macOS minimalists</title>
          <meta
            name="description"
            content="Commit is a lightweight Git client you can open from anywhere any time you’re ready to commit your work with a single keyboard shortcut. It’s fast, beautiful, and completely unnecessary."
          />
        </Head>
        <div className="relative flex-none overflow-hidden lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex">
          <div className="absolute inset-0 -z-10 overflow-hidden bg-gray-950 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem]">
            <svg
              className="absolute -bottom-48 left-[-40%] h-[80rem] w-[180%] lg:-right-40 lg:bottom-auto lg:left-auto lg:top-[-40%] lg:h-[180%] lg:w-[80rem]"
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
                className="hidden lg:block"
              />
              <rect
                width="100%"
                height="100%"
                fill={`url(#${id}-mobile)`}
                className="lg:hidden"
              />
            </svg>
            <div className="absolute inset-x-0 bottom-0 right-0 h-px bg-white mix-blend-overlay lg:left-auto lg:top-0 lg:h-auto lg:w-px" />
          </div>
          <div className="relative flex w-full lg:pointer-events-auto lg:mr-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-y-auto lg:overflow-x-hidden">
            <div className="overflow-hidden w-full flex flex-col justify-center">
              <div className="relative">
                <Link href="/">
                  <Logo />
                </Link>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0">
              <div className="flex justify-center pb-4">
                <div className="mt-8 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">
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
                  {/* <IconLink href="/rss/feed.xml" icon={FeedIcon} className="flex-none">
                    RSS
                  </IconLink> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <ThemeToggle /> */}
        <div className="relative flex-auto">
          <Timeline />
          <main className="space-y-20 py-20 sm:space-y-32 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
              <div className="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
                <div className="typography mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto">
                  <Tabs
                    tabs={[
                      {
                        name: 'About',
                        href: '/',
                      },
                    ]}
                  />
                  {children}
                </div>
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
