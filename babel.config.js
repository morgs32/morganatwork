module.exports = function (api) {
  api.cache(process.env.NODE_ENV === 'production');
  return {

    presets: ['next/babel'],
    plugins: [
      '@babel/plugin-syntax-top-level-await',
      'babel-plugin-styled-components',
      'import-glob-array',
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            pages: './pages',
            src: './src'
          }
        }
      ]
    ]
  };
};
