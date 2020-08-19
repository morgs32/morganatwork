import React from 'react';
import Row from './Row';
import { metas } from 'src/mocks';

export default {
  title: 'Components/Row',
  component: Row,
};

export const Default = () => {
  return (
    <div>
      <Row
        meta={{
          pathname: '/',
          title: 'Here lies the title',
          summary: 'This is a summary. It belongs to a post not a digest',
          date: '2020-02-20',
        }}
      />
    </div>
  );
};

export const Multiple = () => {
  return (
    <div>
      {metas.map((meta) => {
        return <Row meta={meta} />
      })}
    </div>
  );
};
