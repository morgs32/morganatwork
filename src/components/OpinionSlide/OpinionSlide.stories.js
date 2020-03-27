import React from 'react';
import OpinionSlide from './OpinionSlide';
import { shortOpinions1 } from '../../fixtures/api/short-opinions';

export default {
  title: 'Components/OpinionSlide',
  component: OpinionSlide,
};

export const Default = () => {
  return (
    <div style={{
      margin: '400px 0 400px 0'
    }}>
      <div className="py-5" />
      <OpinionSlide
        animated
        nav={(
          <h2 className="h1 m-0">
            A recent opinion on engineering ...
          </h2>
        )}
        opinion={shortOpinions1.data[0]}
      />
      <div className="py-5" />
    </div>
  );
};
