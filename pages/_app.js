import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

import 'src/styles/styles.scss';
import 'src/styles/prism.css';

const StyledMain = styled.main`

  .Home__gradientLine {
    height: 8px;
    width: 100%;
    background: linear-gradient(90deg, rgb(2, 0, 36) 0%, rgb(9, 9, 121) 35%, rgb(0, 212, 255) 100%);
  }
  
  .Home__background {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // background-image: url(${require('../src/images/Background.svg')});
    // background-position: top right;
    // background-size: cover;
    // opacity: .4;
  }


`

const StyledArticle = styled.article`
    margin-left: auto;
    margin-right: auto;
    margin-top: 2.625rem;
    margin-bottom: 4.5rem;
    
    .container {
        max-width: 42rem;
    }
`;

function Wrapper(props) {

  const {
    meta = {},
  } = props;

  const router = useRouter();
  let date = new Date(meta.date || router.pathname.split('/').pop());
  date = new Date(date.getTime() + new Date().getTimezoneOffset() * 60 * 1000);

  return (
    <StyledArticle>
      <div className="m-4rem col-sm-8 col-md-7 col-lg-6 p-0">
        <h1 className="display-1">
          {meta.title || 'Newsworthy'}
        </h1>
        <p className="font-mono">
          {date.toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          })}
        </p>
      </div>
      <div className="container" {...props} />
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
export default class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props;

    return (
      <StyledMain>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <MDXProvider components={components}>
          <div className="Home__gradientLine" />
          <div className="Home__background" />
          <nav className="container-fluid">
            <div style={{ maxWidth: 300 }} className="my-4">
              <Link href="/">
                <a className="d-block mb-3">
                  <img alt="Morgan at Work branding" src={require('src/images/Morgan@Work.svg')} />
                </a>
              </Link>
            </div>
          </nav>
          <Component {...pageProps} />
        </MDXProvider>
      </StyledMain>
    );
  }
}
