const { PHASE_PRODUCTION_SERVER } = function getPhase() {
  if (process.env.NODE_ENV === 'development') {
    return {}
  }
  if (!process.env.NOW_REGION) {
    return require('next/constants')
  }
  return require('next-server/constants')
}()

module.exports = (nextPhase, { defaultConfig }) => {
  if (nextPhase === PHASE_PRODUCTION_SERVER) {
    // Config used to run in production.
    return {}
  }

  console.log('withSass')
  const withPlugins = require('next-compose-plugins')
  const withSass = require('@zeit/next-sass')
  const optimizedImages = require('next-optimized-images')

  const withMDX = require('@zeit/next-mdx')({
    extension: /\.mdx$/,
    options: {
      // mdPlugins: [images, emoji],
      hastPlugins: []
    },
  })

  return withPlugins([
    withSass,
    [optimizedImages, {
      /* config for next-optimized-images */
      optimizeImages: false,
    }],
    withMDX,
  ], {})(nextPhase, defaultConfig)
}
