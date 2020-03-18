import React from 'react'
import LinkIcon from 'react-feather/dist/icons/link';

export default ({ id }) => (
  <span>
    <a href={`#${id}`} id={`${id}`}>
      <LinkIcon />
    </a>
    <style jsx>{`
      span {
        position: absolute;
        left: 0;
        top: 0;
      }
      a {
        text-decoration: none;
        position: absolute;
        font-size: 32px;
        left: -48px;
        top: 2px;
        opacity: .3;
      }
      a:hover {
        opacity: 1;
      }
    `}
    </style>
  </span>
)
