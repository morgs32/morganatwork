const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const rehypePrism = require('@mapbox/rehype-prism');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypePrism],
  },
});

module.exports = withPlugins([
  withMDX,
  optimizedImages,
], {
  pageExtensions: [
    'mdx',
    'tsx',
  ],
  target: 'serverless',
});

