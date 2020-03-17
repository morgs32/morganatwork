import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import Product from '../src/components/Product/Product';
import Github from 'react-feather/dist/icons/github';
import Twitter from 'react-feather/dist/icons/twitter';
import LinkedIn from 'react-feather/dist/icons/linkedin';
import { mediaBreakpointUp } from '../src/styles/media';
import Link from 'next/link';

import * as posts from '../cms/posts';
import * as products from '../cms/products';
import Footer from '../src/components/Footer/Footer';

const StyledDiv = styled.div`

  color: #f7f7f7;
  
  a.a-underline {
    color: white;
    display: inline-block;
    background-image: linear-gradient(90deg, #0094ca 0, #0094ca);
    background-position: 0 100%;
    background-repeat: repeat-x;
    background-size: 2px 4px;
    transition: background-size .3s;
    text-decoration: none;
  }
  
  a.a-underline.active,
  a.a-underline:hover {
    text-decoration: none;
    background-size: 2px 40%;
  }
  
  .Home__background {
    background: #29323c;
    background-image: linear-gradient(#29323c 0%, #232323 100%);
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
  
  .Home__h1 {
    text-rendering: optimizeLegibility;
    text-shadow: 1px 1px 0.4px rgba(255, 255, 255,.2);
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
      background-size: 1px 2px;
      background-position: 0 90%;
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
  ];

  return (

    <StyledDiv>

      <Head>
        <title>Morgan at Work</title>
      </Head>

      <div className="Home__background position-fixed fill" />

      <div className="d-lg-flex flex-lg-row-reverse">


        <div className="Sidebar pr-4 py-4 d-flex flex-column text-right">
          <div>
            <div className="Sidebar__myName mb-2">
              Morgan Intrator
            </div>
            <div className="font-weight-bold mb-2">
              <Link href="/opinions">
                <a className="a-underline">
                  Opinionated
                </a>
              </Link>
              {' '}
              Engineer
            </div>
          </div>

          <div className="Sidebar__essays d-none d-lg-block flex-grow">
            {/*<ul>*/}
            {/*  {postList.map((essay) => {*/}
            {/*    return (*/}
            {/*      <Link href={`posts/${essay.id}`}>*/}
            {/*        <a className="a-underline">*/}
            {/*          {essay.title}*/}
            {/*        </a>*/}
            {/*      </Link>*/}
            {/*    );*/}
            {/*  })}*/}
            {/*</ul>*/}
          </div>

          <div className="Sidebar__contactInfo">
            <a
              className="a-blue"
              href="https://github.com/morgs32"
            >
              <Github />
            </a>
            <a
              className="a-blue"
              href="https://www.twitter.com/morgs32"
            >
              <Twitter />
            </a>
            <a
              className="a-blue"
              href="https://linkedin.com/in/morganintrator"
            >
              <LinkedIn />
            </a>
          </div>

        </div>

        <div className="Home__sidebar d-none d-lg-block" />

        <div className="Home__main container-fluid container-lg">

          <h1 className="Home__h1 display-1 mb-4">
            Morgan
            at
            Work
          </h1>

          <div className="row">
            <h2 className="Home__summary col-xl-6">
              At work on useful
              {' '}
              {/*<a*/}
              {/*  className="a-underline"*/}
              {/*  href="#work"*/}
              {/*>*/}
              products and open source
              {/*</a>*/}
              {' '}
              {/*<a*/}
              {/*  className="a-underline"*/}
              {/*  href="#open-source"*/}
              {/*>*/}
              projects
              {/*</a>*/}
              ; occasionally
              {' '}
              <a
                className="a-underline"
                href="/opinions"
              >
                writing
              </a>
              {' '}
              <span className="d-inline-block">
                about it.
              </span>
            </h2>
          </div>

          <hr id="work" />

          <h2 className="h5 font-mono mb-3">
            Selected work (more on <a
            className="a-blue"
            href="https://linkedin.com/in/morganintrator"
          >
            linkedin
          </a>)
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

      <Footer />
    </StyledDiv>
  );
}

