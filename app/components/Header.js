import React, { Component } from 'react'
import Link from 'next/link'

export default class Header extends Component {

  render() {
    const {
      pathname,
    } = this.props

    return (
      <nav className="Nav">
        <Link prefetch href="/">
          <a className={pathname === '/' && 'is-active'}>
            Home
          </a>
        </Link>

        {/*<Link prefetch href="/about">*/}
          {/*<a>Writings</a>*/}
        {/*</Link>*/}

        <Link prefetch href="/about">
          <a>About</a>
        </Link>


        {/* language=CSS */}
        <style jsx="">{`
          .Nav {
            margin-bottom: 48px;
          }
          a {
            font-size: 14px;
            margin-right: 20px;
            text-decoration: none;
          }
          .is-active {
            text-decoration: underline;
          }

        `}
        </style>
      </nav>
    )
  }
}
