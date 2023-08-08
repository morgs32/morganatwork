import { z } from 'zod'
import Link, { LinkProps } from 'next/link'
import { PropsWithChildren } from 'react'
import isNull from 'lodash/isNull'
import omitBy from 'lodash/omitBy'
import { usePathname, useSearchParams } from 'next/navigation'

export function useQuery() {
  const searchParams = useSearchParams()
  const query = searchParams && Object.fromEntries(searchParams)
  return query || {}
}

type ReplaceNull<T extends {}> = {
  [P in keyof T]: T[P] extends null ? undefined : T[P]
}

export function omitNull<T extends {}>(obj: T) {
  return omitBy(obj, isNull) as ReplaceNull<T>
}

export function makeHref(path: string, query?: { [key: string]: any }): string {
  const searchString = new URLSearchParams(query).toString()
  if (searchString) {
    return `${path}?${searchString}`
  }
  return path
}

interface IProps extends LinkProps {
  activeClassName?: string
  inactiveClassName?: string
  className?: string
  activeAriaCurrent?: string
  querySchema?: z.Schema<any>
}

export function ActiveLink(props: PropsWithChildren<IProps>) {
  const {
    children,
    activeClassName,
    inactiveClassName,
    activeAriaCurrent,
    querySchema,
    ...allowedProps
  } = props

  const pathname = usePathname()
  const isActive = pathname === allowedProps.href
  const className =
    allowedProps.className +
    (isActive && activeClassName ? ' ' + activeClassName : '')
  const ariaCurrent = isActive ? 'page' : undefined

  if (isActive) {
    return (
      <span
        aria-current={ariaCurrent}
        {...{
          ...allowedProps,
          className,
        }}
      >
        {children}
      </span>
    )
  }

  return (
    <Link
      aria-current={ariaCurrent}
      {...{
        ...allowedProps,
        className,
      }}
    >
      {children}
    </Link>
  )
}
