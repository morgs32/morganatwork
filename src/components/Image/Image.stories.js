import React, { useState } from 'react';
import Image from './Image';

export default {
  title: 'Components/Image',
  component: Image,
};

export const Default = () => {

  const [pixels, setPixels] = useState(100);
  const [orientation, setOrientation] = useState('portrait');
  const [units, setUnits] = useState('px');

  const imageAttrs = {};
  let aspectRatio;
  let unsplashDimensions;
  if (orientation === 'landscape') {
    imageAttrs.height = `${pixels}${units}`;
    aspectRatio = 200 / pixels;
    unsplashDimensions = `200x${pixels}`;
  }
  else {
    imageAttrs.width = `${pixels}${units}`;
    aspectRatio = pixels / 200;
    unsplashDimensions = `${pixels}x200`;
  }

  return (
    <div className="container my-4">

      <input
        type="number"
        className="form-control my-4"
        min="100"
        max="120"
        defaultValue={pixels}
        onChange={(e) => {
          setPixels(e.target.value);
        }}
      />

      <div
        className="mb-4"
      >
        <input
          type="checkbox"
          defaultValue="false"
          onChange={(e) => {
            setOrientation(e.target.checked ? 'landscape' : 'portrait');
          }}
        />
        <label
          className="px-2 m-0"
          style={{
            verticalAlign: 'middle'
          }}
        >
          Landscape
        </label>
      </div>

      <div
        className="mb-4"
      >
        <select
          defaultValue="pixels"
          onChange={(e) => {
            setUnits(e.target.value);
          }}
        >
          <option>px</option>
          <option>rem</option>
          <option>%</option>
          <option>em</option>
        </select>
        <label
          className="px-2 m-0"
          style={{
            verticalAlign: 'middle'
          }}
        >
          Units
        </label>
      </div>

      <Image
        className="border rounded"
        {...imageAttrs}
        src={`https://source.unsplash.com/random/${unsplashDimensions}`}
        aspectRatio={aspectRatio}
      />
    </div>
  );
};
