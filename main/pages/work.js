import React, { Component } from 'react'
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
                href="https://www.brickworksoftware.com"
              >
                <a
                  target="_blank"
                >
                  Brickwork Software
                </a>
              </Link>
              <p>
                We make software that retailers use to manage the customer experience. Our services
                help drive customers to the store - via white-branded store locators and appointment booking widgets.
              </p>
            </div>
          </li>
          <li>
            <div>
              <Link
                prefetch
                href="https://www.wayup.com"
              >
                <a
                  target="_blank"
                >
                  WayUp
                </a>
              </Link>
              <p>
                WayUp is a job marketplace for students and recent grads.
              </p>
            </div>
          </li>
          <li>
            <div>
              <Link
                prefetch
                href="https://www.upswing.com"
              >
                <a
                  target="_blank"
                >
                  Upswing
                </a>
              </Link>
              <p>
                Upswing is an online tutoring platform - white labeled by colleges and other institutions.
              </p>
            </div>
          </li>
          <li>
            <div>
              <Link
                prefetch
                href="https://www.mentormailbox.com"
              >
                <a
                  target="_blank"
                >
                  Mentor Mailbox
                </a>
              </Link>
              <p>
                Mentor Mailbox is an online tutoring platform in which you can text for academic and non-academic help.
              </p>
            </div>
          </li>
          <li>
            <div>
              <Link
                prefetch
                href="https://www.citigroup.com"
              >
                <a
                  target="_blank"
                >
                  Citigroup
                </a>
              </Link>
              <p>
                As part of the Operations and Technology group, I project managed the implementation of global
                infrastructure projects.
              </p>
            </div>
          </li>
          <li>
            <div>
              <Link
                prefetch
                href="https://www.ge.com"
              >
                <a
                  target="_blank"
                >
                  GE
                </a>
              </Link>
              <p>
                At GE's global research center, we patented and prototyped various solutions for GE Aircraft Engines and
                GE Energy.
              </p>
            </div>
          </li>
        </ol>

      </div>
    )
  }
}
