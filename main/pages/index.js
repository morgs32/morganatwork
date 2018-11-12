import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PostList from '../src/components/PostList'
import db from 'main/db.yaml'
import { BooleanValue } from 'react-values'
import Link from 'next/link'

export default class Index extends Component {

  static propTypes = {}
  static defaultProps = {}

  render() {
    return (
      <div style={{ maxWidth: 800 }}>

        <h1>
          Hello World
        </h1>
        <p>
          Welcome to my portfolio site. This is a reboot (of "
          <a
            href="https://bestof.morganatwork.com"
            target="_blank"
          >Morgan's Greatest Hits</a>
          ").
        </p>

        <h2>
          About me
        </h2>
        <p>
          I'm a fullstack developer of products built for people.
          I'm both senior engineer and technical PM
          at <a href="https://www.brickworksoftware.com">Brickwork Software</a>.
        </p>

        <BooleanValue defaultValue={false}>
          {({ value, toggle }) => {
            if (!value) {
              return (
                <button
                  onClick={toggle}
                  className="btn btn-primary"
                >
                  more
                </button>
              )
            }
            return (
              <div>
                <h2>
                  My manifesto:
                </h2>
                <ul>
                  <li>
                    It's better to be good than to be original
                  </li>
                  <li>
                    In the end, a startup lives or dies with engineering velocity - the speed of iteration and release
                    of <strong>meaningful</strong> product.
                  </li>
                  <li>
                    Laziness is next to godliness - But let's kick back
                    once we've made the job easy.
                  </li>
                  <li>
                    Learn to love the intensity and urgency at a startup - it brings out the best
                    or worst in a company.
                  </li>
                </ul>
                <Link
                  prefetch
                  href="/guiding-principle"
                >
                  <a className="btn btn-primary">
                    more
                  </a>
                </Link>
              </div>
            )
          }}
        </BooleanValue>
      </div>
    )
  }
}
