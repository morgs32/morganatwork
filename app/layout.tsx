import '@/styles/global.css'
import { Inter } from 'next/font/google'
import clsx from 'clsx'
import React from 'react'

const inter = Inter({ 
  subsets: [
    'latin',
  ],
  weight: [
    '400',
    '500'
  ],
 })

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <html className="h-full antialiased" lang="en">
      <body className={clsx('min-h-full bg-white dark:bg-gray-950', inter.className)}>
        {children}
      </body>
    </html>
  )
}
