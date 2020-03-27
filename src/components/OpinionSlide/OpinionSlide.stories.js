import React from 'react';
import OpinionSlide from './OpinionSlide';
import { shortOpinions1 } from '../../fixtures/api/short-opinions';

export default {
  title: 'Components/OpinionSlide',
  component: OpinionSlide,
};

export const Default = () => {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <OpinionSlide
        className="flex-grow"
        opinion={shortOpinions1.data[1]}
      />
    </div>
  );
};
