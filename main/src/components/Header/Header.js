import React, { Component } from 'react'
import './Header.scss'
import Link from 'next/link'
import Github from 'react-feather/dist/icons/github'
import Twitter from 'react-feather/dist/icons/twitter'
import LinkedIn from 'react-feather/dist/icons/linkedin'

export default class Header extends Component {

  render() {
    return (
      <nav
        style={{
          backgroundImage: `url(${require('./hero-shapes.svg')})`
        }}
        className="Header"
      >
        <div className="container">
          <div className="Header__height position-relative">
            <div className="Header__brand">
              <Link href="/">
                <a>
                  {`Morgan \nat \nWork`}
                </a>
              </Link>
            </div>
            {/*<ul className="Header__navUl">*/}
            {/*  <li className="Header__navLi">*/}
            {/*    <NavLink href="/work">*/}
            {/*      Work*/}
            {/*    </NavLink>*/}
            {/*  </li>*/}
            {/*</ul>*/}
            <div className="Header__aboutMe">
              <div className="Header__myName">
                Morgan Intrator
              </div>
              <div className="Header__myBio">
                Opinionated Engineer
              </div>
              <div className="my-2 Header__myLinks pb-1">
                <a
                  href="https://github.com/morgs32"
                  target="_blank"
                  className="mr-2"
                >
                  <Github />
                </a>
                <a
                  href="https://www.twitter.com/morgs32"
                  className="mr-2"
                  target="_blank"
                >
                  <Twitter />
                </a>
                <a
                  href="https://linkedin.com/in/morganintrator"
                  target="_blank"
                >
                  <LinkedIn />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
