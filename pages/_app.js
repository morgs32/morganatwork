import App from 'next/app';
import React from 'react';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';

import 'src/styles/styles.scss';
import ScrollToTop from 'src/components/ScrollToTop/ScrollToTop';
import { isBrowser } from 'src/utils/environment';

import styled from 'styled-components';
import Branding from '../src/components/Branding/Branding';

const StyledArticle = styled.article`
    margin-left: auto;
    margin-right: auto;
    max-width: 42rem;
`;


const components = {
  wrapper: props => (
    <>
      <Branding/>
      <StyledArticle
        style={{
          marginTop: '2.625rem',
          marginBottom: '4.5rem',
        }}
        className="container"
        {...props}
      />
    </>
  ),
  h1: props => {
    return (
      <div className="row mb-4">
        <h1 className="h1 col-12 col-md-10" {...props} />
      </div>
    )
  },
  h2: props => {
    return (
      <div className="row">
        <h2 className="h5 col-12 col-md-10" {...props} />
      </div>
    )
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
          {...props} />
      );
    }
    return (
      <a {...props} />
    );
  },
  img: props => {
    return (
      <a
        className="d-block"
        href={props.src}
        target="_blank"
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
        />
      </a>
    )
  }
};

export default class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props;

    return (
      <main>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        {isBrowser && <ScrollToTop />}
        <MDXProvider components={components}>
          <Component {...pageProps} />
        </MDXProvider>
      </main>
    );
  }
}
