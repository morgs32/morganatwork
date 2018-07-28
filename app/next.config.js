const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass')

const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx$/,
  options: {
    mdPlugins: [],
    hastPlugins: []
  },
})


module.exports = withPlugins([
  withSass,
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
