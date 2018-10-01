import React from 'react'
import { withRouter } from 'next/router'
import classnames from 'classnames'
import Link from 'next/link'

const NavLink = ({ children, router, href, className }) => {

  return (
    <Link prefetch href={href}>
      <a
        className={classnames(className, {
            active: router.pathname === href
          }
        )}
      >
        {children}
      </a>
    </Link>
  )
}

export default withRouter(NavLink)
