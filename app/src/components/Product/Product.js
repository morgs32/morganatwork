import React from 'react';
import Flip from 'react-spring-flip/lib/Flip';
import styled from 'styled-components';
import { isBrowser } from '../../utils/environment';
import classnames from 'classnames';

const StyledLi = styled.li`
  
  p {
    margin-bottom: .25rem;
  }
  
`;

Product.propTypes = {};
Product.defaultProps = {};

export default function Product(props) {

  const {
    content,
    className,
  } = props;

  const {
    title,
    website,
    logo,
    Description,
  } = content;

  return (
    <StyledLi className={classnames('list-group-item py-4 position-relative', className)}>
      <div className="d-flex justify-content-between">
        <div>
          <div className="h3">
            {title}
          </div>
          <Description />
          {website && (
            <a
              href={website}
              className="mb-1 d-inline-block"
              rel="noopener noreferrer"
              target="_blank"
            >
              {website}
            </a>
          )}
        </div>

        <div className="ml-3">
          <img alt={`${title} logo`} width="100" src={logo} />
        </div>
      </div>
    </StyledLi>
  );
}

