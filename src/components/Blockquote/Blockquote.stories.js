import React from 'react';
import Blockquote from './Blockquote';

export default {
  title: 'Components/Blockquote',
  component: Blockquote,
};


export const Default = () => {
  return (
    <div className="container my-4">
      <Blockquote
        html="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim id malesuada suspendisse feugiat metus pellentesque. Dignissim id malesuada suspendisse feugiat metus pellentesque.</p>"
      />
    </div>
  );
};
