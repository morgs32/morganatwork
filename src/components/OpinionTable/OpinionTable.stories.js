import OpinionTable from './OpinionTable';
import React from 'react';
import { shortOpinions1 } from '../../fixtures/api/short-opinions';

export default {
  title: 'Components/OpinionTable',
  component: OpinionTable,
};


export const Default = () => {
  return (
    <div className="container my-5">
      <OpinionTable
        opinions={shortOpinions1.data.slice(0,2).concat(shortOpinions1.data.slice(-1))}
      />
    </div>
  );
};
