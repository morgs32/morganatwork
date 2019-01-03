import React, { Component } from 'react'
import Link from 'next/link'

export default class Index extends Component {

  static propTypes = {}
  static defaultProps = {}

  render() {
    return (
      <div>
        <h1>
          Essays
        </h1>
        <p>
          Writings I use to share solutions to work problems
          and to practice the art of articulating
          engineering philosophies I believe in.
        </p>
        <ol>
          <li>
            <Link
              prefetch
              href="2018/morgans-score"
            >
              <a>
                Joel score redux
              </a>
            </Link>
            <p>
              Some description
            </p>
          </li>
          <li>
            <Link
              prefetch
              href="2018/believe-in-it"
            >
              <a>
                Believe in it
              </a>
            </Link>
            <p>
              Some description
            </p>
          </li>
          <li>
            <Link
              prefetch
              href="2018/lowering-expectations"
            >
              <a>
                Lowering expectations
              </a>
            </Link>
            <p>
              Some description
            </p>
          </li>
        </ol>


      </div>
    )
  }
}
