import React from 'react';
import Head from 'next/head';
import Row from '../src/components/Row/Row';
import Link from 'next/link';

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

      <div className="container mb-2rem container-skinny">
        <div className="Home__rows position-relative">
          {metas.map((meta) => {
            return (
              <Row key={meta.pathname} meta={meta} />
            );
          })}
        </div>
      </div>

      <div className="Home__gradientLine" />
    </div>
  );
}

