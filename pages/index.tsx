import React from 'react';
import Head from 'next/head';
import Row from '../src/components/Row/Row';

export async function getStaticProps() {

  const metas = [
    ...require('src/utils/allPosts'),
    ...require('src/utils/allDigests')
  ];

  return {
    props: {
      metas,
    },
  };
}

export default function Home(props) {

  const {
    metas
  } = props;

  metas.sort((meta1, meta2) => {
    if (new Date(meta1.date) < new Date(meta2.date)) {
      return 1;
    }
    return -1;
  })

  return (

    <div>
      <Head>
        <title>Morgan at Work</title>
      </Head>

      <div className="container-fluid">
        <div style={{ maxWidth: 300 }} className="my-4">
          <p>
            An opinionated software engineer
            thinking
            out loud.
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
      </div>

      <main style={{ maxWidth: 700 }} className="container mb-2rem">
        <div className="Home__rows position-relative">
          {metas.map((meta) => {
            return (
              <Row key={meta.pathname} meta={meta} />
            );
          })}
        </div>
      </main>

      <div className="Home__gradientLine" />
    </div>
  );
}

