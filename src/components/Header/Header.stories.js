import React from 'react';
import Header from './Header';
import { select, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Components/Header',
  decorators: [withKnobs]
};

export const HeaderAtPath = () => {

  const path = select('At path', [
    '/',
    '/sub'
  ], '/sub');

  return (
    <div>
      <Header
        pathname={path}
      />
    </div>
  );
};
