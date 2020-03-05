import React from 'react';
import styled from 'styled-components';


import Product from '../src/components/Product/Product';
import Github from 'react-feather/dist/icons/github';
import Twitter from 'react-feather/dist/icons/twitter';
import LinkedIn from 'react-feather/dist/icons/linkedin';
import { mediaBreakpointUp } from '../src/styles/media';
import Link from 'next/link';

import * as posts from './posts';
import * as products from './products';
import * as projects from './projects';

const StyledDiv = styled.div`

  color: #f7f7f7;
  
  .Home__background {
    background: #111;
    z-index: -1;
  }
  
  .Home__main {
    margin-top: 120px;
    
    ${mediaBreakpointUp.lg`
      margin-top: 240px;
    `}

  }
  
  .Home__brand {
    
    ${mediaBreakpointUp.md`
      font-size: 5rem;
    `}
    ${mediaBreakpointUp.lg`
      font-size: 6rem;
    `}
    
  }
  
  .Home__button {
    width: auto;
    background-color: transparent;
    font-weight: bold;
  }

  .Home__buttonContainer {
    border-radius: 0.25rem;
  }
  .Home__button--openSource {
    background: linear-gradient(-135deg, #FCE38A 0%, #F38181 100%);
  }
  .Home__button--work {
    background: linear-gradient(-135deg, #17EAD9 0%, #6078EA 100%);
  }
  .Home__button--hobbyProject {
    background: linear-gradient(-135deg, #43E695 0%, #3BB2B8 100%);
  }
  
  .Home__sidebar {
    width: 320px;
    flex-shrink: 0;
  }
  
  
  .Sidebar {
    ${mediaBreakpointUp.lg`
      width: 320px;
      top: 0;
      right: 0;
      bottom: 0;
      position: fixed;
    `}
    
    a {
      background-size: 1px 1px;
    }
  }
    
  .Sidebar__myName {
    font-size: 2rem;
    line-height: 1.9rem;
    font-weight: bold;
  }
  .Sidebar__contactInfo {
    a {
      margin-left: .5rem;
    }
  }
  
`;


Index.propTypes = {};
Index.defaultProps = {};

export default function Index(props) {

  const postList = Object.values(posts);

  const selectedWork = [
    products.ThriveMarket,
    products.b8ta,
    products.Stackshirts,
    // projects.ReduxLibrary,
  ]

  return (

    <StyledDiv>

      <div className="Home__background position-fixed fill" />

      <div className="d-lg-flex flex-lg-row-reverse">


        <div className="Sidebar pr-4 py-4 d-flex flex-column text-right">
          <div>
            <div className="Sidebar__myName mb-2">
              Morgan Intrator
            </div>
            <div className="font-weight-bold mb-1">
              Opinionated Engineer:
            </div>
          </div>

          <div className="Sidebar__essays d-none d-lg-block flex-grow">
            <ul>
              {postList.map((essay) => {
                return (
                  <Link href={`posts/${essay.id}`}>
                    <a className="a-underline">
                      {essay.title}
                    </a>
                  </Link>
                );
              })}
            </ul>
          </div>

          <div className="Sidebar__contactInfo">
            <a href="https://github.com/morgs32">
              <Github />
            </a>
            <a href="https://www.twitter.com/morgs32">
              <Twitter />
            </a>
            <a href="https://linkedin.com/in/morganintrator">
              <LinkedIn />
            </a>
          </div>

        </div>

        <div className="Home__sidebar d-none d-lg-block" />

        <div className="Home__main container">

          <h1 className="display-1">
            Morgan
            at
            Work
          </h1>

          <h1 className="Home__summary">
            At work on useful
            {' '}
            <a
              className="a-underline"
              href="#work"
            >
              products
            </a>
            <br />
            and open source
            {' '}
            <a
              className="a-underline"
              href="#open-source"
            >
              projects
            </a>
            ;
            <br />
            occasionally
            {' '}
            <a
              className="a-underline"
              href="#essays"
            >
              writing
            </a>
            {' '}
            <span className="d-inline-block">
              about it.
            </span>
          </h1>

          <hr id="work" />

          <h2 className="h5 font-mono mb-3">
            Selected work
          </h2>
          <ul className="list-group-flush list-group">
            {selectedWork.map((product) => {
              return (
                <li className="list-group-item p-0 mb-4">
                  <Product product={product} />
                </li>
              );
            })}
          </ul>

        </div>

      </div>

    </StyledDiv>
  );
}

