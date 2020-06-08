import React from 'react';
import Row from './Row';

export default {
  title: 'Components/Row',
  component: Row,
};

export const Default = () => {
  return (
    <div>
      <Row>

      </Row>
    </div>
  );
};

export const Multiple = () => {
  return (
    <div>
      <Row />
      <Row />
      <Row />
      <Row />
    </div>
  );
};
