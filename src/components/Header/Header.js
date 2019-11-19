import React from 'react';
import './Header.scss';
import Link from 'next/link';
import Github from 'react-feather/dist/icons/github';
import Twitter from 'react-feather/dist/icons/twitter';
import LinkedIn from 'react-feather/dist/icons/linkedin';
import classnames from 'classnames';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const StyledNav = styled.nav`
  background-size: cover;
  background-position: center center;
  margin-bottom: 48px;
  border-bottom: 1px solid #aaa;
  
  .Header__height {
    font-weight: bold;
    transition: height .3s ease;
  }
  
  .Header__brand {
    white-space: pre-wrap;
    transition: font-size .3s ease, line-height .3s ease, padding .3s ease;
  
    &.atRootPath {
      font-size: 4rem;
      line-height: 3.4rem;
      padding: 120px 0;
    }
  
    > a {
      color: #111;
  
      &:hover,
      &:active {
        text-decoration: none;
        color: #111;
      }
    }
  }
  
  .Header__myName,
  .Header__brand {
    font-size: 2rem;
    line-height: 1.9rem;
  }
  
  .Header__aboutMe {
    text-align: right;
  }

`;

Header.propTypes = {};
Header.defaultProps = {};

export default function Header(props) {

  const {
    path,
  } = props;

  const router = useRouter();

  return (
    <StyledNav
      style={{
        backgroundImage: `url(${require('./hero-shapes.svg')})`
      }}
      className="Header"
    >
      <div className="container">
        <div
          className="Header__height d-flex flex-row"
        >
          <div
            className={classnames('Header__brand my-2 d-flex flex-column justify-content-center', {
              atRootPath: router.pathname === '/'
            })}
          >
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
          <div className="Header__aboutMe flex-grow my-2 d-flex flex-column justify-content-end">
            <div className="Header__myName mb-1">
              Morgan Intrator
            </div>
            <div className="Header__myBio mb-2">
              Opinionated Engineer
            </div>
            <div className="Header__myLinks">
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
    </StyledNav>
  );
}

