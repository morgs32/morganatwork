const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

require('dotenv').config({
  path: '../.env'
})

const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx$/,
  options: {
    rehypePlugins: []
  },
});

module.exports = withPlugins([
  withCss,
  withSass,
  withMDX,
  [optimizedImages, {
    /* config for next-optimized-images */
    optimizeImages: false,
  }],
], {
  env: {
    PORT: process.env.PORT,
    CODA_TOKEN: process.env.CODA_TOKEN,
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts'],
  target: 'serverless',
  webpack: (config) => {

    config.module.rules.push({
      test: /\.ya?ml$/,
      use: 'js-yaml-loader',
    });

    // config.watch = true
    // config.watchOptions = {
    //   ignored: /node_modules\/(?!(react-spring-flip|react-spring)\/).*/,
    // }
    // Object.assign(config.resolve.alias, {
    //   react: path.resolve('../node_modules/react'),
    //   'react-dom': path.resolve('../node_modules/react-dom')
    // })
    return config
  },
});

