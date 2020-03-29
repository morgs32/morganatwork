import React, { useState } from 'react';
import Image from './Image';

export default {
  title: 'Components/Image',
  component: Image,
};

export const Default = () => {

  const [[width, height], setDimensions] = useState([100, 100]);
  const [units, setUnits] = useState('px');

  return (
    <div className="container my-4">

      <div className="form-group">
        <label>
          Width
        </label>
        <input
          type="number"
          className="form-control my-4"
          min="100"
          max="120"
          defaultValue={width}
          onChange={(e) => {
            setDimensions([e.target.value, height]);
          }}
        />
      </div>

      <div className="form-group">
        <label>
          Height
        </label>
        <input
          type="number"
          className="form-control my-4"
          min="100"
          max="120"
          defaultValue={height}
          onChange={(e) => {
            setDimensions([width, e.target.value]);
          }}
        />
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


      {width * height !== 0 && (
        <Image
          width={`${width}${units}`}
          height={`${height}${units}`}
          className="border rounded"
          src={`https://source.unsplash.com/random/${width}x${height}`}
          naturalDimensions={[width, height]}
        />
      )}
    </div>
  );
};
