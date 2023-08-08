import Link from 'next/link'
import { Logo } from './Logo'

const projects = [
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
    title: 'Figma Openapi Diagrams',
    href: 'https://www.quantamarkets.com',
  },
]

const openSource = [
  {
    title: 'zod-utils',
    href: 'https://www.quantamarkets.com',
  },
  {
    title: 'zod-sdk',
    href: 'https://www.quantamarkets.com',
  },
  {
    title: 'okrs',
    href: 'https://www.quantamarkets.com',
  },
]

const essays = [
  {
    title: 'The Future of Work',
    href: 'https://www.stackshirts.com',
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
        <div>
          <h2 className="mb-2 font-bold">Projects</h2>
          {projects.map((item, i) => {
            return <MyLink key={i} item={item} />
          })}
        </div>
        <div>
          <h2 className="mb-2 font-bold">Open Source</h2>
          <div className="font-mono">
            {openSource.map((item, i) => {
              return <MyLink key={i} item={item} />
            })}
          </div>
        </div>
        <div>
          <h2 className="mb-2 font-bold">Meditations</h2>
          {essays.map((item, i) => {
            return <MyLink key={i} item={item} />
          })}
        </div>
      </main>
    </>
  )
}

function MyLink({ item }: { item: (typeof projects)[0] }) {
  return (
    <Link
      href="#"
      className="group block hover:text-red-900 hover:underline"
      key={item.title}
    >
      <span>{item.title}</span>
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
}
