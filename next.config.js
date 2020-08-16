const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const rehypePrism = require('@mapbox/rehype-prism')

const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx$/,
  options: {
    rehypePlugins: [rehypePrism],
  },
});

module.exports = withPlugins([
  withCss,
  withSass,
  withMDX,
  optimizedImages,
], {
  env: {
    PORT: process.env.PORT,
  },
  pageExtensions: [
    'md',
    'mdx',
    'tsx',
  ],
  target: 'serverless',
});

