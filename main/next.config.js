const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css')
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx$/,
  options: {
    // mdPlugins: [images, emoji],
    hastPlugins: []
  },
})

module.exports = withPlugins([
  withCss,
  withSass,
  withMDX,
  [optimizedImages, {
    /* config for next-optimized-images */
    optimizeImages: false,
  }],
], {
  target: 'serverless',
})

