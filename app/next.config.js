const withPlugins = require('next-compose-plugins')
const withSass = require('@zeit/next-sass')
const optimizedImages = require('next-optimized-images')
// const images = require('remark-images')
// const emoji = require('remark-emoji')

const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx$/,
  options: {
    // mdPlugins: [images, emoji],
    hastPlugins: []
  },
})


module.exports = withPlugins([
  withSass,
  [optimizedImages, {
    /* config for next-optimized-images */
  }],
  withMDX,
], {
  webpack: function (config) {
    config.module.rules.push(
      {
        test: /\.ya?ml$/,
        use: 'js-yaml-loader',
      },
    )
    return config
  }

})
