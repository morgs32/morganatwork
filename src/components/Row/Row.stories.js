import React from 'react';
import Row from './Row';

export default {
  title: 'Components/Row',
  component: Row,
};

export const Default = () => {
  return (
    <div>
      <Row
        meta={{
          path: '/',
          title: 'Here lies the title',
          spoiler: 'This is a spoiler. It belongs to a post not a digest',
          date: '2020-02-20',
        }}
      />
    </div>
  );
};

export const Multiple = () => {
  return (
    <div>
      <Row
        meta={{
          path: '/',
          title: 'Here lies the title',
          spoiler: 'This is a spoiler. It belongs to a post not a digest',
          date: '2020-02-20',
        }}
      />
      <Row
        meta={{
          path: '/',
          title: 'Here lies the title',
          spoiler: 'This is a spoiler. It belongs to a post not a digest',
          date: '2020-02-20',
        }}
      />
      <Row
        meta={{
          path: '/',
          title: 'Here lies the title',
          spoiler: 'This is a spoiler. It belongs to a post not a digest',
          date: '2020-02-20',
        }}
      />
      <Row
        meta={{
          path: '/',
          title: 'Here lies the title',
          spoiler: 'This is a spoiler. It belongs to a post not a digest',
          date: '2020-02-20',
        }}
      />
    </div>
  );
};
