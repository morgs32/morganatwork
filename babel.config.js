module.exports = function (api) {
  api.cache(process.env.NODE_ENV === 'production');
  return {
    presets: ['next/babel'],
    plugins: [
      'macros',
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
