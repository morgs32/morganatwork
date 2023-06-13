import Head from 'next/head'

import '@/styles/tailwind.css'
import 'focus-visible'
import { Intro } from './Intro'
import { IntroFooter } from './IntroFooter'
import { Timeline } from './Timeline'
import { FixedSidebar } from './FixedSidebar'

export default function Layout({ children }: {children: React.ReactNode}) {
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
        <FixedSidebar main={<Intro />} footer={<IntroFooter />} />
        {/* <ThemeToggle /> */}
        <div className="relative flex-auto">
          <Timeline />
          <main className="space-y-20 py-20 sm:space-y-32 sm:py-32">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
