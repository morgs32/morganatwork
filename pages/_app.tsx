import React from 'react';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

import 'src/styles/styles.scss';
import 'src/styles/prism.css';
import breakpoints from '../src/styles/breakpoints';

const StyledMain = styled.main`

  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.md}px) {
    .container {
      max-width: 42rem;
    }
  }

  .Home__gradientLine {
    height: 8px;
    width: 100%;
    background: linear-gradient(90deg, rgb(2, 0, 36) 0%, rgb(9, 9, 121) 35%, rgb(0, 212, 255) 100%);
  }
`;

const StyledArticle = styled.article`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 4.5rem;

  .App__title {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }

`;

function Wrapper(props) {

  const {
    updatedAt,
    createdAt,
    children,
  } = props;

  const [heading, ...remainingChildren] = children

  return (
    <StyledArticle>
      <div className="App__title container-fluid">
        <div className="m-0 m-md-4rem p-0 col-sm-10 col-md-9 col-lg-6">
          {heading && React.cloneElement(heading, {
            className: 'display-1'
          })}
          <p className="font-mono">
            {updatedAt && 'Updated on: '}
            {new Date(updatedAt || createdAt).toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </p>
        </div>
      </div>
      <div className="container">
        {remainingChildren}
      </div>
    </StyledArticle>
  );
}

// noinspection JSUnusedGlobalSymbols
const components = {
  wrapper: Wrapper,
  blockquote: props => (
    <blockquote className="blockquote" {...props} />
  ),
  h2: (props) => {
    return (
      <div className="row">
        <h2 className="h5 col-12 col-md-10" {...props}>
          {props.children}
        </h2>
      </div>
    );
  },
  iframe: (props) => {
    return (
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '56.25%'
        }}
      >
        <iframe title={props.title} {...props} style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: '1px solid rgba(0, 0, 0, 0.1)'
        }}
        />
      </div>
    )
  },
  a: (props) => {
    if (props.children.startsWith?.('http')) {
      return (
        <a
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
          className="d-block"
          {...props}>
          {props.children}
        </a>
      );
    }
    return (
      <a {...props}>
        {props.children}
      </a>
    );
  },
  img: (props) => {
    return (
      <a
        className="d-block"
        href={props.src}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          maxWidth: 400,
          margin: 'auto',
          marginBottom: '2rem'
        }}
      >
        <img
          width="100%"
          className="border rounded"
          {...props}
          alt={props.alt}
        />
      </a>
    );
  }
};

// noinspection JSUnusedGlobalSymbols
function MyApp({ Component, pageProps }) {

  const router = useRouter();

  return (
    <StyledMain>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
      </Head>
      <MDXProvider components={components}>
        <div className="Home__gradientLine" />
        <nav className="container-fluid my-4" style={{ maxWidth: 380, marginLeft: 0 }}>

          <Link href="/">
            <a className="d-block">
              <img alt="Morgan at Work branding" src={require('src/images/Morgan@Work.svg')} />
            </a>
          </Link>

          {['/', '/projects'].includes(router.route) && (
            <div className="my-4">
              <p>
                Analytical and <span style={{ textDecoration: 'line-through' }}>opinionated</span> thoughtful software
                engineer, thinking out loud.
              </p>

              <p>
                {router.route === '/' ? 'Posts' : (
                  <Link href="/">
                    <a>
                      Posts
                    </a>
                  </Link>
                )}
                {/*{' / '}*/}
                {/*{router.route === '/projects' ? 'Projects' : (*/}
                {/*  <Link href="/projects">*/}
                {/*    <a>*/}
                {/*      Projects*/}
                {/*    </a>*/}
                {/*  </Link>*/}
                {/*)}*/}
                {' / '}
                {router.route === '/perennials' ? 'Perennials' : (
                  <Link href="/perennials">
                    <a>
                      Perennials
                    </a>
                  </Link>
                )}
              </p>

              <div style={{ width: 100 }} className="d-flex flex-row justify-content-between">
                <a href="https://twitter.com/morgs32" target="_blank" rel="noopener noreferrer">
                  <img src={require('src/icons/Twitter.svg')} alt="Twitter" />
                </a>
                <a href="https://www.github.com/morgs32" target="_blank" rel="noopener noreferrer">
                  <img src={require('src/icons/GitHub.svg')} alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/morganintrator" target="_blank" rel="noopener noreferrer">
                  <img src={require('src/icons/LinkedIn.svg')} alt="LinkedIn" />
                </a>
              </div>
            </div>
          )}
        </nav>
        <div className="flex-grow">
          <Component {...pageProps} />
        </div>
        <div className="Home__gradientLine" />
      </MDXProvider>
    </StyledMain>
  );
}

export default MyApp;
