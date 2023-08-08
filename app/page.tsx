import Link from 'next/link'
import { Logo } from './Logo'

const colors = [
  '#fdac75',
  '#bacde5',
  '#818b56',
  '#6042ec',
  '#aff66b',
  '#696219',
  '#b5d8e3',
  '#f066a3',
  '#f0ea8d',
  '#463c37',
  '#bab5ab',
  '#923b1f',
  '#c22929',
  '#003dff',
  '#f0592b',
  '#8ea2d3',
  '#775648',
  '#f9d3be',
  '#e0d9d3',
  '#747472',
  '#e4ebe3',
  '#423d2d',
  '#ecc9ca',
  '#e81b1d',
  '#c5b2c0',
  '#473338',
  '#4a9c45',
]

const essays = [
  {
    title: 'The Future of Work',
    href: 'https://www.stackshirts.com',
  },
]

const work = [
  {
    title: 'Stackshirts',
    href: 'https://www.stackshirts.com',
  },
  {
    title: 'Quanta Markets',
    href: 'https://www.quantamarkets.com',
  },
  {
    title: 'Linear Hill Charts',
    href: 'https://www.quantamarkets.com',
  },
  {
    title: 'Zod Utils',
    href: 'https://www.quantamarkets.com',
  },
  {
    title: 'Zod SDK',
    href: 'https://www.quantamarkets.com',
  },
  {
    title: 'Figma Openapi Diagrams',
    href: 'https://www.quantamarkets.com',
  },
  {
    title: 'OKRS',
    href: 'https://www.quantamarkets.com',
  },
]

export default function Page() {
  return (
    <>
      <nav className="relative z-[10] flex w-screen justify-end border border-b-black bg-white px-4 py-2 text-right font-medium">
        <Link href="#">Email</Link>
      </nav>
      <main className="relative z-[1] space-y-2 px-4 py-6 font-medium md:space-y-6">
        <Logo />
        {work.map((item, i) => {
          return (
            <Link
              href="#"
              className="group block hover:underline"
              key={item.title}
            >
              {item.title}
              <div
                style={{
                  backgroundColor: '#FFF',
                }}
                className="pointer-events-none fixed inset-0 -z-[10] hidden group-hover:block"
              >
                {/* Put images here */}
              </div>
            </Link>
          )
        })}
      </main>
    </>
  )
}
