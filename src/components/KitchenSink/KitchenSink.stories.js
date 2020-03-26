import React from 'react';
import KitchenSink from './KitchenSink';

export default {
  title: 'Components/KitchenSink',
  component: KitchenSink,
};

export const Default = () => {
  return (
    <div className="container my-4">
      <KitchenSink />
    </div>
  );
};
