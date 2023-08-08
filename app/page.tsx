import Link from 'next/link'
import { Logo } from './Logo'
import Image from 'next/image'
import clsx from 'clsx'

interface IProject {
  debug?: boolean
  title: string
  href: string
  image?: {
    src: string
    alt: string
    width: number
    height: number
    className?: string
  }
}

const projects: IProject[] = [
  {
    title: 'Linear Hill Charts',
    href: 'https://www.quantamarkets.com',
    image: {
      src: '/LinearHillCharts.png',
      alt: 'An example from the Linear Hill Charts figma widget',
      width: 1097,
      height: 1271,
      className: 'absolute top-0 right-0',
    },
  },
  {
    title: 'Figma Openapi Diagrams',
    href: 'https://www.quantamarkets.com',
    image: {
      src: '/SwaggerCharts.png',
      alt: 'An example from the Swagger Charts figma widget',
      width: 1004,
      height: 547,
      className: 'relative right-[-10%]',
    },
  },
  {
    title: 'Stackshirts',
    href: 'https://www.stackshirts.com',
    image: {
      src: '/Shirt.png',
      alt: 'An example stackshirt',
      width: 800,
      height: 672,
      className: 'absolute bottom-0 right-0',
    },
  },
  {
    title: 'Quanta Markets',
    href: 'https://www.quantamarkets.com',
    image: {
      src: '/Quanta.png',
      alt: 'Some screenshots from the Quanta Markets app',
      width: 944,
      height: 786,
      className: 'relative right-[-10%]',
    },
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
      {item.image && (
        <div
          style={{
            backgroundColor: '#FFF',
          }}
          className={clsx(
            'fixed inset-0 -z-[10] hidden items-center justify-center lg:group-hover:flex',
            item.debug ? 'flex' : 'pointer-events-none hidden',
          )}
        >
          <Image
            className={item.image.className}
            alt={item.image.alt}
            src={item.image.src}
            width={item.image.width}
            height={item.image.height}
          />
        </div>
      )}
    </Link>
  )
}
