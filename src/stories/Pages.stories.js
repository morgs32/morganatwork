import React from 'react';
import Index from '../../pages/index';
import Opinion from '../../pages/opinions/[slug]';
import Opinions from '../../pages/opinions';
import { shortOpinions1 } from '../fixtures/api/short-opinions';

export default {
  title: 'Pages',
};

export const HomePage = () => {
  return (
    <Index shortOpinions={shortOpinions1} />
  );
};

export const OpinionPage = () => {
  return (
    <Opinion shortOpinion={shortOpinions1.data[0]} />
  );
};

export const OpinionsPage = () => {
  return (
    <Opinions shortOpinions={shortOpinions1} />
  );
};
