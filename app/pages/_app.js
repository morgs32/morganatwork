import App from 'next/app';
import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import 'app/src/styles/styles.scss';
import ScrollToTop from 'app/src/components/ScrollToTop/ScrollToTop';
import Footer from 'app/src/components/Footer/Footer';
import PostWrapper from 'app/src/containers/PostWrapper/PostWrapper';

export default class MyApp extends App {

  static async getInitialProps({ Component, router, ctx }) {

    const pageProps = {};
    return pageProps;

  }

  render() {
    const { Component, pageProps, router } = this.props;

    const components = {

      blockquote: (props, layoutProps) => {
        const [quote, footer] = props.children.props.children.split('--')
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
        <main>
          <ScrollToTop />
          <Component {...pageProps} />
        </main>
        <Footer />
      </MDXProvider>
    );
  }
}
