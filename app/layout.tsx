import '@/styles/global.css'
import clsx from 'clsx'
import React from 'react'
import localFont from 'next/font/local'

const operator = localFont({
  src: '../styles/OperatorMorgan-Book.ttf',
  variable: '--font-mono',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html className="h-full antialiased" lang="en">
      <body
        className={clsx(
          'min-h-full bg-white text-gray-800 dark:bg-gray-950',
          operator.className,
        )}
      >
        {children}
      </body>
    </html>
  )
}
