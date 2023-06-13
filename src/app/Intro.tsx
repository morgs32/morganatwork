import Link from 'next/link'
import { Logo } from '@/app/components/Logo'


export function Intro() {
  return (
    <>
      <div>
        <Link href="/">
          <Logo className="inline-block h-8 w-auto" />
        </Link>
      </div>
    </>
  )
}


