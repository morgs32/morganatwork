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

  .Home__gradientLine {
    height: 8px;
    width: 100%;
    background: linear-gradient(90deg, rgb(2, 0, 36) 0%, rgb(9, 9, 121) 35%, rgb(0, 212, 255) 100%);
  }
`;

const StyledArticle = styled.article`
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 4.5rem;
    
    .App__title {
      margin-top: 4rem;
      margin-bottom: 4rem;
    }
    
    @media (min-width: ${breakpoints.md}px) {
      .container {
        max-width: 42rem;
      }
    }
`;

function Wrapper(props) {

  const {
    meta,
    digest,
    children,
  } = props;


  const router = useRouter();

  if (!meta && !digest) {
    return <section {...props} />
  }

  let date = new Date(meta && meta.date || router.pathname.split('/').pop());
  date = new Date(date.getTime() + new Date().getTimezoneOffset() * 60 * 1000);

  return (
    <StyledArticle>
      <div className="App__title container-fluid">
        <div className="m-0 m-md-4rem p-0 col-sm-10 col-md-9 col-lg-6">
          <h1 className="display-1">
            {meta ? meta.title : 'Newsworthy'}
          </h1>
          <p className="font-mono">
            {date.toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </p>
        </div>
      </div>
      <div className="container">
        {digest
          ? Object.values(digest)
            .map(({ default: Section }, i) => (
              <React.Fragment key={i}>
                {i > 0 && <hr />}
                <Section />
              </React.Fragment>
            ))
          : children}
      </div>
    </StyledArticle>
  );
}

// noinspection JSUnusedGlobalSymbols
const components = {
  wrapper: Wrapper,
  blockquote: props => (
    <blockquote className="blockquote text-center" {...props} />
  ),
  h1: props => {
    return (
      <div className="row mb-4">
        <h1 className="h1 col-12 col-md-10" {...props}>
          {props.children}
        </h1>
      </div>
    );
  },
  h2: props => {
    return (
      <div className="row">
        <h2 className="h5 col-12 col-md-10" {...props}>
          {props.children}
        </h2>
      </div>
    );
  },
  a: props => {
    if (props.children.startsWith('http')) {
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
  img: props => {
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
                {' / '}
                {router.route === '/projects' ? 'Projects' : (
                  <Link href="/projects">
                    <a>
                      Projects
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
        <Component {...pageProps} />
      </MDXProvider>
    </StyledMain>
  );
}

export default MyApp;
