// @ts-check
import nextMDX from '@next/mdx'
import { remarkPlugins } from './mdx-plugins/remark.mjs'
import { rehypePlugins } from './mdx-plugins/rehype.mjs'
import { recmaPlugins } from './mdx-plugins/recma.mjs'

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins,
    rehypePlugins,
    recmaPlugins,
    providerImportSource: '@mdx-js/react',
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  experimental: {
    scrollRestoration: true,
    appDir: true,
    mdxRs: true,
  },
}

export default withMDX(nextConfig)
