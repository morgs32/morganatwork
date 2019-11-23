import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

const StyledLi = styled.li`
  
  background: #e7e7e7;

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
    </StyledLi>
  );
}

