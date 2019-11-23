import React from 'react';
import Link from 'next/link';
import Github from 'react-feather/dist/icons/github';
import Twitter from 'react-feather/dist/icons/twitter';
import LinkedIn from 'react-feather/dist/icons/linkedin';
import classnames from 'classnames';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const StyledNav = styled.nav`
  background-size: cover;
  background-position: center center;
  
  .Header__height {
    font-weight: bold;
  }
  
  .Header__brand {
    white-space: pre-wrap;
    transition: font-size .3s ease, line-height .3s ease;
  
    &.atRootPathname {
      font-size: 4rem;
      line-height: 3.4rem;
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
  
  .Header__Spacer {
    transition: height .3s ease;
    height: 0;
    
    &.atRootPathname {
      height: 120px;
    }
  }
  
  .Header__aboutMe {
    height: 120px;

    &.fadeOut {
      &-enter {
        height: 0;
        opacity: 0;
      }
      &-enter-active {      
        height: 120px;
        opacity: 1;
        transition: height .3s ease, opacity .3s ease;
      }
      &-exit {
        height: 120px;
        opacity: 1;
      }
      &-exit-active {
        height: 0;
        opacity: 0;
        transition: height .3s ease, opacity .3s ease;
      }
    }
    
  }

 
`;

Header.propTypes = {};
Header.defaultProps = {};

export default function Header(props) {

  const {
    pathname,
  } = props;

  const atRootPathname = pathname === '/';

  return (
    <StyledNav
      className="Header my-5"
    >
      <div className="container">


        <div
          className={classnames('Header__Spacer', {
            atRootPathname: atRootPathname,
          })}
        />

        <div
          className={classnames('Header__brand font-serif my-2 d-flex flex-column justify-content-center', {
            atRootPathname: atRootPathname,
          })}
        >
          <Link href="/">
            <a>
              {`Morgan \nat \nWork`}
            </a>
          </Link>
        </div>


        <CSSTransition
          in={atRootPathname}
          exit
          classNames="fadeOut"
          timeout={300}
          unmountOnExit
        >
          <div className="Header__aboutMe text-right d-flex flex-column justify-content-end">
            <div className="Header__myName mb-1 font-serif">
              Morgan Intrator
            </div>
            <div className="Header__myBio mb-2 font-mono">
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
        </CSSTransition>

      </div>


      <hr />
    </StyledNav>
  );
}

