import React from 'react';

export const configs = {
  openSource: {
    background: 'linear-gradient(-135deg, #FCE38A 0%, #F38181 100%)',
    name: 'open source',
  },
  work: {
    background: 'linear-gradient(-135deg, #17EAD9 0%, #6078EA 100%)',
    name: 'work',
  },
  hobbyProject: {
    background: 'linear-gradient(-135deg, #43E695 0%, #3BB2B8 100%)',
    name: 'hobby-project',
  },
};

export default function Label(props) {

  const config = configs[props.type];

  return (
    <span
      style={{
        background: config.background,
      }}
      className="badge ml-2"
    >
      {config.name}
    </span>
  )
}
