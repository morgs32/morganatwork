module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV)
  return {
    presets: ['next/babel'],
      plugins: [
    [
      'babel-plugin-styled-components',
      {
        ssr: true,
        minify: true,
        transpileTemplateLiterals: true,
        pure: true,
        displayName: true,
        preprocess: false,
      },
    ],
  ],
  }
};
