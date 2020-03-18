import App from 'next/app';
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Head from 'next/head';

import 'app/src/styles/styles.scss';
import ScrollToTop from 'app/src/components/ScrollToTop/ScrollToTop';
import PostWrapper from 'app/src/containers/PostWrapper/PostWrapper';
import { isBrowser } from '../src/utils/environment';

export default class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props;

    const components = {
      blockquote: (props, layoutProps) => {
        const [quote, footer] = props.children.props.children.split('--');
        return (
          <blockquote className="blockquote">
            <p>
              {quote}
            </p>
            {footer && (
              <footer className="blockquote-footer">
                {footer}
              </footer>
            )}
          </blockquote>
        );
      },
      wrapper: (props, otherProps) => {
        if (props.meta && props.meta.type === 'post') {
          return <PostWrapper {...props} />;
        }
        return props.children;
      }
    };

    return (
      <MDXProvider components={components}>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <main>
          {isBrowser && <ScrollToTop />}
          <Component {...pageProps} />
        </main>
      </MDXProvider>
    );
  }
}
