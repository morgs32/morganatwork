import App from 'next/app';
import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import '../src/styles/styles.scss';
import ScrollToTop from '../src/components/ScrollToTop/ScrollToTop';
import Footer from '../src/components/Footer/Footer';

export default class MyApp extends App {

  static async getInitialProps({ Component, router, ctx }) {

    const pageProps = {};
    return pageProps;

  }

  render() {
    const { Component, pageProps, router } = this.props;

    const components = {
      h1: (props, layoutProps) => {
        return (
          <div className="mb-4">
            <h1 {...props} />
          </div>
        );
      },
      wrapper: (props, otherProps) => {
        if (props.meta && props.meta.type === 'page') {
          return (
            <article className="row">
              <div className="col-12 col-md-4">
                <h1>
                  {props.meta.title}
                </h1>
                <p className="mb-4">
                  {props.meta.tldr}
                </p>
              </div>
              <div className="col-12 col-md-7 offset-md-1" {...props} />
            </article>
          );
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
