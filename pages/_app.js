import App from 'next/app';
import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import '../src/styles/styles.scss';
import Header from '../src/components/Header/Header';

const components = {
  wrapper: props => {
    return (
      <article {...props} />
    );
  }
};


export default class MyApp extends App {

  static async getInitialProps({ Component, router, ctx }) {

    const pageProps = {};

    if (typeof window === 'undefined') {
      pageProps.articles = require('../src/utils/getInitialProps').getPosts();
    }

    return pageProps;

  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <MDXProvider components={components}>
        <Header />
        <main
          style={{
            paddingBottom: 40
          }}
          className="container"
        >
          <Component {...pageProps} />
        </main>

      </MDXProvider>
    );
  }
}
