import { DigestType, PostType } from '../pages';

export const posts: PostType[] = [
  {
    pathname: '/',
    title: 'Here lies the title',
    summary: 'This is a summary. It belongs to a post not a digest',
    date: '2020-02-20',
    type: 'post'
  },
  {
    pathname: '/',
    title: 'Here lies the title',
    summary: 'This is a summary. It belongs to a post not a digest',
    date: '2020-02-20',
    type: 'post'
  },
  {
    pathname: '/',
    title: 'Here lies the title',
    summary: 'This is a summary. It belongs to a post not a digest',
    date: '2020-02-20',
    type: 'post'
  },
  {
    pathname: '/',
    title: 'Here lies the title',
    summary: 'This is a summary. It belongs to a post not a digest',
    date: '2020-02-20',
    type: 'post'
  },
]

export const digests: DigestType[] = [
  {
    pathname: '/',
    headings: [
      'h1',
      'h2',
    ],
    title: 'Newsworthy',
    date: '2020-02-02',
    type: 'digest'
  }
]
