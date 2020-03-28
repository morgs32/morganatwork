import React, { useState } from 'react';
import Image from './Image';

export default {
  title: 'Components/Image',
  component: Image,
};

export const Default = () => {

  const [id, setId] = useState(100);
  
  return (
    <div className="container my-4">

      <input
        type="number"
        className="form-control my-4"
        defaultValue={id}
        onChange={(e) => {
          setId(e.target.value)
        }}
      />

      <Image
        className="border rounded"
        src={`https://source.unsplash.com/random/100x${id}`} width="100%" aspectRatio={1326 / 1776} />
    </div>
  );
};
