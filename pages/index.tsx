import React from 'react';
import Head from 'next/head';
import Row from '../src/components/Row/Row';
import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'pages/posts')

  const metas = fs.readdirSync(postsDirectory)
    .map((dir) => {
      const filename = dir + '/meta.yml';
      const filePath = path.join(postsDirectory, filename)
      const contents = yaml.safeLoad(fs.readFileSync(filePath, 'utf8'))
      return {
        ...contents,
        date: contents.date.toString(),
        filename,
        pathname: `posts/${dir}`,
        type: 'post',
      }
    })
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      metas,
    },
  }

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

