import App from 'next/app';
import React, { useState } from 'react';
import { MDXProvider } from '@mdx-js/react';
import styled from 'styled-components';

import '../src/styles/styles.scss';
import ScrollToTop from '../src/components/ScrollToTop/ScrollToTop';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';

const StyledBackgroundDiv = styled.div`
  background: linear-gradient(180deg, #EEF0F4 0%, rgba(255, 255, 255, 0) 100%);
  z-index: -1;
`;

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
        <StyledBackgroundDiv className="position-fixed fill" />
        <Header pathname={router.pathname} />
        <main
          style={{
            paddingBottom: 40
          }}
          className="container"
        >
          <ScrollToTop />
          <Component {...pageProps} />
        </main>
        <div
          style={{
            height: '25vh',
          }}
        />
        <Footer />
      </MDXProvider>
    );
  }
}
