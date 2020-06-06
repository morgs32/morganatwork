module.exports = function (api) {
  api.cache(true);
  return {

    presets: ['next/babel'],
    plugins: [
      '@babel/plugin-syntax-top-level-await',
      'babel-plugin-styled-components',
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
