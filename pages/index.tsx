import React from 'react';
import Head from 'next/head';
import PostCard from '../src/components/PostCard/PostCard';

export type PostType = {
  title: string;
  summary: string;
  publishedAt: string;
  pathname: string;
  labels: Array<'short form'>
}

const posts: PostType[] = [{
  title: 'Using Figma as an inspiration board',
  summary: 'Some thoughts on how Figma can be an effective place to drop screenshots from around the web. This was well before figjam which may be even better suited to the task',
  publishedAt: '7/16/20',
  labels: [
    'short form'
  ],
  pathname: 'posts/figma-for-inspiration-board'
}, {
  title: 'Using Cloudflare to protect sourcemaps',
  summary: 'If you are trying to guard your sourcemap files, here is an intuitive way to do it using Cloudflare',
  publishedAt: '6/1/20',
  labels: [
    'short form'
  ],
  pathname: 'posts/using-cloudflare-to-protect-sourcemaps'
}]

const Home: React.FC = () => {

  const visiblePosts = posts.sort((row1, row2) => {
    if (new Date(row1.publishedAt) < new Date(row2.publishedAt)) {
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
        {visiblePosts.map((post) => {
          return (
            <PostCard key={post.pathname} post={post} />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
