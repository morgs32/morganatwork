import React from 'react'
import Home from '../pages'
import { digests, posts } from 'src/mocks';

export default {
  title: 'Pages/Home',
  component: Home,
}

export const Default = () => {
  return (
    <Home posts={posts} digests={digests} />
  )
}
