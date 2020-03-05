import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    base: 'dark',

    colorPrimary: 'hotpink',
    colorSecondary: 'deepskyblue',

    // UI
    appBg: 'white',
    appBorderColor: 'grey',
    appBorderRadius: 4,

    // Text colors
    textColor: 'black',
    textInverseColor: 'rgba(255,255,255,0.9)',

    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    brandTitle: 'Morgan at Work',

  },
});
