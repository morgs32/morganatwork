// noinspection JSUnusedGlobalSymbols

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { MDXProvider } from '@mdx-js/react';

import 'src/styles/styles.scss';
import 'src/styles/prism.css';
import { useRouter } from 'next/router';
import { mdxDefaults } from '../src/components';

function MyApp({ Component, pageProps }) {

  const router = useRouter()
  return (
    <MDXProvider components={mdxDefaults}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
      </Head>
      <div className="Home__gradientLine" />
      <nav className="container-fluid my-4" style={{ maxWidth: 380, marginLeft: 0 }}>

        <Link href="/">
          <a className="d-block">
            <img alt="Morgan at Work branding" src={require('src/images/Morgan@Work.svg')} />
          </a>
        </Link>

        {router.pathname === '/' && (
          <div className="my-4">
            <p>
              My activities and <span style={{ textDecoration: 'line-through' }}>opinionated</span> thoughtful meditations in engineering management
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
      <main>
        <Component {...pageProps} />
      </main>
    </MDXProvider>
  );
}

export default MyApp;
