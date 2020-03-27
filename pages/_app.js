import App from 'next/app';
import React from 'react';
import Head from 'next/head';

import 'src/styles/styles.scss';
import ScrollToTop from 'src/components/ScrollToTop/ScrollToTop';
import { isBrowser } from 'src/utils/environment';

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
        <Component {...pageProps} />
      </main>
    );
  }
}
