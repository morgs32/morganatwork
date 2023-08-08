'use client'
import { usePathname } from 'next/navigation'
import { ActiveLink } from './ActiveLink'

interface IProps {
  tabs: Array<{
    name: string
    href: string
  }>
}

export function Tabs(props: IProps) {
  const { tabs } = props
  const pathname = usePathname()
  const currentTab = tabs.find((tab) => tab.href === pathname)!

  if (!currentTab) {
    return null
  }

  return (
    <div className="mb-8 border-gray-200 lg:border-b">
      <div className="container-padding-x container mx-auto">
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            defaultValue={currentTab.name}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => {
              return (
                <ActiveLink
                  key={tab.name}
                  href={tab.href}
                  activeClassName="border-indigo-500 text-indigo-600"
                  inactiveClassName="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  className="whitespace-nowrap border-b-2 px-1 py-4 font-medium"
                >
                  {tab.name}
                </ActiveLink>
              )
            })}
          </nav>
        </div>
      </div>
    </div>
  )
}
