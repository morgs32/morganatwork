import Link from 'next/link'
import { Logo } from "./Logo"

 
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
    href: 'https://www.stackshirts.com'
  }
]

const work = [
  {
    title: 'Stackshirts',
    href: 'https://www.stackshirts.com'
  },
  {
    title: 'Quanta Markets',
    href: 'https://www.quantamarkets.com'
  },
  {
    title: 'Linear Hill Charts',
    href: 'https://www.quantamarkets.com'
  },
  {
    title: 'Zod Utils',
    href: 'https://www.quantamarkets.com'
  },
  {
    title: 'Zod SDK',
    href: 'https://www.quantamarkets.com'
  },
  {
    title: 'Figma Openapi Diagrams',
    href: 'https://www.quantamarkets.com'
  },
  {
    title: 'OKRS',
    href: 'https://www.quantamarkets.com'
  },
]

export default function Page() {
  return (
    <>
      <nav className="bg-white flex w-screen justify-end border border-b-black py-2 px-4 uppercase font-medium text-right">
        <Link
          href="#"
        >
          Email
        </Link>
        <div className="fixed inset-0 -z-20">
          <Logo />
        </div>
      </nav>
      <main className="uppercase font-medium text-xl px-4">
    
        {work.map((item, i) => {
          return (
            <Link
              href="#"
              className="group py-3 hover:underline block first:pt-8"
              key={item.title}
            >
              {item.title}
              <div
                style={{
                  backgroundColor: colors[i]
                }}
                className="fixed -z-10 inset-0 hidden group-hover:block">
                {/* Put images here */}
              </div>
            </Link>
          )
        })}
        
        {essays.map((item) => {
          return (
            <div
              className="group py-3"
              key={item.title}
            >
              {item.title}
            </div>
          )
        })}
                
      </main>
    </>
  )
}