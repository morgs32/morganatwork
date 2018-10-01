import React, { Component } from 'react'
import NavLink from './NavLink'

export default class Header extends Component {

  render() {
    return (
      <nav
        style={{
          backgroundImage: `url(${require('./hero-shapes.svg')})`
        }}
        className="Nav"
      >
        <div className="container">
          <ul>
            <li className="Header__brand Header__navLi">
              <NavLink href="/">
                Morgan at Work
              </NavLink>
            </li>

            <li className="Header__navLi">
              <NavLink href="/projects">
                Projects
              </NavLink>
            </li>

            <li className="Header__navLi">
              <NavLink href="/work">
                Work
              </NavLink>
            </li>

            {/*<li className="Header__navLi">*/}
              {/*<NavLink href="/essays">*/}
                {/*Essays*/}
              {/*</NavLink>*/}
            {/*</li>*/}

            <li className="Header__navLi">
              <NavLink href="/about">
                About
              </NavLink>
            </li>

          </ul>
        </div>

        {/* language=CSS */}
        <style jsx="">{`
          .Nav {
            background-size: cover;
            background-position: center center;
            margin-bottom: 48px;
            padding-top: 40px;
            padding-bottom: 20px;
            border-bottom: 1px solid #aaa;
          }
          .Header__brand {
            padding-bottom: 40px;
          }
          .Header__navLi :global(a) {
            font-size: 14px;
            margin-right: 20px;
            text-decoration: none;
            background: white;
            padding: 2px 8px;
            box-shadow: 2px 2px black;
            border: 1px solid black;
            display: inline-block;
            margin-bottom: 6px;
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
