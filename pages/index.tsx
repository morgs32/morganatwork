import React from 'react';
import Head from 'next/head';
import Row from '../src/components/Row/Row';

export type PostType = {
  title: string;
  summary: string;
  date: string;
  pathname: string;
  type: 'post';
}

const posts = []

const Home: React.FC = () => {

  const rows = posts.sort((row1, row2) => {
    if (new Date(row1.date) < new Date(row2.date)) {
      return 1;
    }
    return -1;
  })

  return (
    <div className="container mb-2rem container-skinny">
      <Head>
        <title>Morgan at Work</title>
      </Head>
      <div className="Home__rows position-relative">
        {rows.map((row) => {
          return (
            <Row key={row.pathname} row={row} />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
