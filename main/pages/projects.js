import React, { Component } from 'react'
import Link from 'next/link'

export default class Index extends Component {

  static propTypes = {}
  static defaultProps = {}

  render() {
    return (
      <div>
        <h1>
          Projects
        </h1>

        <ol>
          <li>
            <div>
              <a
                href="https://www.stackshirts.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                Stackshirts
              </a>
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
              <a
                href="https://github.com/morgs32/pohleusis"
                rel="noopener noreferrer"
                target="_blank"
              >
                Pohleusis
              </a>
              <p>
                This open source library is a bridge between redux and a compliant JSON API.
                It makes getting data easy and concise,
                provides an easy way to manage i18n localization,
                and best of all it is easy to read and easy to forget - then learn again.
              </p>
            </div>
          </li>
          <li>
            <div>
              <a
                href="https://github.com/morgs32/react-attribution"
                rel="noopener noreferrer"
                target="_blank"
              >
                React Attribution
              </a>
              <p>
                This open source project is just a better, faster version of react-metrics.
                It uses the React 16 context API. Doesn't require and old-fashioned DOM listeners,
                and collects more information than does the original.
              </p>
            </div>
          </li>
          <li>
            <div>
              <a
                href="https://bestof.morganatwork.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                Morgan's Greatest Hits from 2010 to 2016
              </a>
              <p>
                This an old portfolio site built in polymer
              </p>
            </div>
          </li>
          <li>
            <div>
              <a
                href="https://github.com/morgs32/lazy-react-intl"
                rel="noopener noreferrer"
                target="_blank"
              >
                React Lazy Intl
              </a>
              <p>
                This is a library built to help declaratively use lazy loaded components of
                {' '}
                <a
                  href="https://github.com/yahoo/react-intl"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  react-intl
                </a>
                {' '}
                and
                {' '}
                <a
                  href="https://momentjs.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  moment.js
                </a>
                {' '}
                to localize your react app.
              </p>
            </div>
          </li>
        </ol>

      </div>
    )
  }
}
