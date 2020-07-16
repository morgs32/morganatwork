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
    'js',
    'jsx',
    'md',
    'mdx',
    'ts',
    'tsx',
  ],
  target: 'serverless',
  webpack: (config) => {

    // config.watch = true
    // config.watchOptions = {
    //   ignored: /node_modules\/(?!(react-spring-flip|react-spring)\/).*/,
    // }
    // Object.assign(config.resolve.alias, {
    //   react: path.resolve('../node_modules/react'),
    //   'react-dom': path.resolve('../node_modules/react-dom')
    // })
    return config;
  },
});

