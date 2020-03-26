import React from 'react';
import Index from '../../pages/index';
import { shortOpinions1 } from '../fixtures/api/short-opinions';

export default {
  title: 'Pages',
};

export const Home = () => {
  return (
    <Index shortOpinions={shortOpinions1} />
  );
};
