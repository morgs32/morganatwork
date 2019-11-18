const path = require('path');
const postcssNormalize = require('postcss-normalize');

module.exports = async ({ config, mode }) => {
  // https://github.com/storybooks/storybook/issues/6467
  config.module.rules = config.module.rules.filter(rule => !rule.test.test('.scss'));
  config.module.rules.push({
    test: /\.scss$/,
    loaders: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          // Necessary for external CSS imports to work
          // https://github.com/facebook/create-react-app/issues/2677
          ident: 'postcss',
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            require('postcss-preset-env')({
              autoprefixer: {
                flexbox: 'no-2009',
              },
              stage: 3,
            }),
            // Adds PostCSS Normalize as the reset css with default options,
            // so that it honors browserslist config in package.json
            // which in turn let's users customize the target behavior as per their needs.
            postcssNormalize(),
          ],
          sourceMap: true,
        },
      },
      'sass-loader'
    ],
    include: path.resolve(__dirname, '../'),
  });
  // config.watch = true;
  // config.watchOptions = {
  //   ignored: /node_modules\/(?!(pohleusis|@stackshirts|@morgs32|react-grid-layout)\/).*/,
  // };
  // config.resolve.extensions = ['.js', '.jsx', '.ts', '.tsx', '.svg'];

  return config;
};

