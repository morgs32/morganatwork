import Link from 'next/link'
import { Logo } from './Logo'
import Image from 'next/image'
import clsx from 'clsx'
import { Metadata } from 'next'
import { Figma, LucideIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Morgan at Work',
  description: 'My website',
  alternates: {
    canonical: 'https://www.morganatwork.com',
  },
}

interface IProject {
  debug?: boolean
  title: string
  href: string
  Icon?: LucideIcon
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
  {
    title: 'Linear Hill Charts',
    href: 'https://www.figma.com/community/widget/1263572513522815442',
    image: {
      src: '/LinearHillCharts.png',
      alt: 'An example from the Linear Hill Charts figma widget',
      width: 1097,
      height: 1271,
      className: 'absolute top-0 right-0',
    },
  },
  {
    title: 'Swagger Charts',
    href: 'https://www.figma.com/community/widget/1268273855467312417',
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
]

const openSource = [
  {
    title: 'zod-utils',
    href: 'https://github.com/morgs32/zod-utils',
  },
  {
    title: 'zod-sdk',
    href: 'https://github.com/morgs32/zod-sdk',
  },
  {
    title: 'okrs',
    href: 'https://github.com/morgs32/okrs',
  },
]

const essays = [
  {
    title: 'The Future of Work',
    href: 'https://www.stackshirts.com',
  },
]

const figjams = [
  {
    title: 'The weather report retro',
    Icon: Figma,
    href: 'https://www.figma.com/file/aRtqQ6IJA6RtEuBGdnT1FT/The-weather-report-retro?type=whiteboard&node-id=0%3A1&t=uTrSTmWfi6m2KirR-1',
  },
  {
    title: 'Job description breakdown',
    Icon: Figma,
    href: 'https://www.figma.com/file/N0iY67ETYPbFn0Doui2tDG/Job-Description-Breakdown?type=whiteboard&node-id=702-120&t=X11WQ4mTpFq8z7J8-4',
  },
  {
    title: 'Information architecture',
    Icon: Figma,
    href: 'https://www.figma.com/file/W2oe0UV5QnItmfpJUY0m82/Information-Architecture?type=whiteboard&node-id=1-80&t=3jV5fzveysAlJo9p-4',
  },
  {
    title: 'For Grandma - How to use an iPhone',
    Icon: Figma,
    href: 'https://www.figma.com/file/xzqdYgUo6U7YxC0QtdAXZT/How-to-use-an-iPhone?type=design&node-id=614-195&mode=design&t=Mg0Uf2nIFXozfGv0-4',
  },
]

const linkStyles = 'hover:text-red-900 hover:underline'

export default function Page() {
  return (
    <>
      <nav className="relative z-[10] flex w-screen justify-end space-x-4 border border-b-black bg-white px-4 py-2 text-right font-medium">
        <Link
          className={linkStyles}
          href="https://www.github.com/morgs32"
          target="_blank"
        >
          GitHub
        </Link>
        <Link
          className={linkStyles}
          href="https://www.linkedin.com/in/morganintrator"
          target="_blank"
        >
          LinkedIn
        </Link>
        <Link
          className={linkStyles}
          href="mailto:morgan.intrator@gmail.com"
          target="_blank"
        >
          Email
        </Link>
      </nav>
      <main className="relative z-[1] space-y-2 px-4 py-6 font-medium md:space-y-6">
        <Logo />
        <div>
          <h2 className="mb-2 font-bold">Current Projects</h2>
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
          <h2 className="mb-2 font-bold">Miscellaneous</h2>
          <div className="font-mono">
            {figjams.map((item, i) => {
              return <MyLink key={i} item={item} />
            })}
          </div>
        </div>
      </main>
    </>
  )
}

function MyLink({ item }: { item: (typeof projects)[0] }) {
  return (
    <div>
      <a
        href={item.href}
        target="_blank"
        className={clsx('group inline-block', linkStyles)}
        key={item.title}
        rel="noreferrer"
      >
        <span>
          {item.Icon && <item.Icon className="inline-block mr-2 w-4 h-4" />}
          {item.title}</span>
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
              priority
            />
          </div>
        )}
      </a>
    </div>
  )
}
