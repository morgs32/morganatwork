import React from 'react';
import Head from 'next/head';
import Row from '../src/components/Row/Row';
import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';

export type PostType = {
  title: string;
  summary: string;
  date: string;
  pathname: string;
  type: 'post';
}

export type DigestType = {
  title: string;
  headings: string[];
  date: string;
  pathname: string;
  type: 'digest';
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'pages/posts')

  const posts: PostType[] = fs.readdirSync(postsDirectory)
    .map((dir) => {
      const filename = dir + '/meta.yml';
      const filePath = path.join(postsDirectory, filename)
      const contents: { title: string, summary: string, date: Date } = yaml.safeLoad(fs.readFileSync(filePath, 'utf8'))
      return {
        ...contents,
        date: contents.date.toString(),
        pathname: `posts/${dir}`,
        type: 'post',
      }
    })

  const digestsDirectory = path.join(process.cwd(), 'pages/digests')
  const digests: DigestType[] = fs.readdirSync(digestsDirectory)
    .map((dir) => {
      const dirPath = path.join(digestsDirectory, dir)
      const headings = fs.readdirSync(dirPath, { withFileTypes: true })
        .filter(v => v.isDirectory())
        .map((v) => {
          const section = v.name;
          const filePath = path.join(dirPath, section, 'index.md');
          const md = fs.readFileSync(filePath, 'utf8')
          return /^#{1,6}(.+)/gm.exec(md)[1]
        })
      return {
        title: 'Newsworthy',
        headings,
        date: new Date(dir).toString(),
        pathname: `digests/${dir}`,
        type: 'digest',
      }
    })
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
      digests,
    },
  }

}

const Home: React.FC<{ posts: PostType[], digests: DigestType[] }> = (props) => {

  const {
    posts,
    digests,
  } = props;

  const rows = [...digests, ...posts].sort((row1, row2) => {
    if (new Date(row1.date) < new Date(row2.date)) {
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
          {rows.map((row) => {
            return (
              <Row key={row.pathname} row={row} />
            );
          })}
        </div>
      </div>

      <div className="Home__gradientLine" />
    </div>
  );
}

export default Home;
