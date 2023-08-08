import Link from 'next/link'
import clsx from 'clsx'

export function IconLink({
  children,
  className,
  compact = false,
  large = false,
  icon: Icon,
  ...props
}) {
  return (
    <Link
      {...props}
      className={clsx(
        className,
        'group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium transition-colors hover:text-sky-600',
        compact ? 'gap-x-2' : 'gap-x-3',
      )}
    >
      <span className="absolute inset-0 -z-10 scale-75 rounded-lg bg-gray-800/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100" />
      <Icon className={clsx('flex-none', large ? 'h-6 w-6' : 'h-4 w-4')} />
      <span className="hidden self-baseline sm:block">{children}</span>
    </Link>
  )
}
