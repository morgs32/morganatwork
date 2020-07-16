import React from 'react'
import Home from '../pages'
import { metas } from 'src/mocks';

export default {
  title: 'Pages/Home',
  component: Home,
}

export const Default = () => {
  return (
    <Home metas={metas} />
  )
}
