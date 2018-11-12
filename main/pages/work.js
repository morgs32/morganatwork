import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

export default class Index extends Component {

  static propTypes = {}
  static defaultProps = {}

  render() {
    return (
      <div>
        <h1>
          Work
        </h1>


        <ol>
          <li>
            <div>
              <Link
                prefetch
                href="https://www.stackshirts.com"
              >
                <a
                  target="_blank"
                >
                  Brickwork Software
                </a>
              </Link>
              <p>
                This is my current hobby project. It's an app that lets
                you design your tech stack so we can print it on a shirt for you.
                5 reasons to love it: it's a lerna/yarn workspace monorepo,
                with separate <code>/admin</code> and <code>/api</code> microservices,
                all deployed to
                zeit.co and aliased, with private modules deployed in tandem to the npm registry.
              </p>
            </div>
          </li>
          <li>
            <div>
              <Link
                prefetch
                href="https://www.stackshirts.com"
              >
                <a
                  target="_blank"
                >
                  WayUp
                </a>
              </Link>
              <p>
                This is my current hobby project. It's an app that lets
                you design your tech stack so we can print it on a shirt for you.
                5 reasons to love it: it's a lerna/yarn workspace monorepo,
                with separate <code>/admin</code> and <code>/api</code> microservices,
                all deployed to
                zeit.co and aliased, with private modules deployed in tandem to the npm registry.
              </p>
            </div>
          </li>
        </ol>

      </div>
    )
  }
}
