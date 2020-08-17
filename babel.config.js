module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['next/babel'],
    plugins: [
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
