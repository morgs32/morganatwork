import App from 'next/app';
import React, { useState } from 'react';
import { MDXProvider } from '@mdx-js/react';

import '../src/styles/styles.scss';
import Header from '../src/components/Header/Header';

export default class MyApp extends App {

  static async getInitialProps({ Component, router, ctx }) {

    const pageProps = {};
    return pageProps;

  }

  render() {
    const { Component, pageProps, router } = this.props;

    const components = {
      h1: (props, layoutProps) => {

        const [state] = useState();
        return (
          <div className="mb-4">
            <h1 {...props} />
          </div>
        );
      },
      wrapper: (props, otherProps) => {
        if (props.meta && props.meta.type === 'page') {
          return (
            <article {...props} />
          );
        }
        return props.children;
      }
    };

    return (
      <MDXProvider components={components}>
        <Header pathname={router.pathname} />
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
