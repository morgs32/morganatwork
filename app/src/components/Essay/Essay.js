import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import classnames from 'classnames';

const StyledLi = styled.li`
  
  p {
    margin: 0;
  }
  
`;

Essay.propTypes = {};
Essay.defaultProps = {};


export default function Essay(props) {

  const {
    content,
    className,
  } = props;

  const {
    id,
    title,
    tldr = '',
  } = content;

  return (
    <StyledLi className={classnames('list-group-item py-4 position-relative', className)}>
      <div className="h3">
        {title}
      </div>
      <div>
        {tldr}
      </div>
      <Link href={id}>
        <a className="stretched-link">
          Read more
        </a>
      </Link>
    </StyledLi>
  );
}

