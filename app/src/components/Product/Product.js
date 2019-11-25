import React from 'react';
import styled from 'styled-components';
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
      <div className="row">
        <div
          style={{
            height: 100,
          }}
          className="col-12 d-flex d-sm-none flex-column justify-content-center align-items-start mb-3"
        >
          <img
            alt={`${title} logo`}
            width="100"
            src={logo}
          />
        </div>

        <div className="col-12 col-sm-8">
          <div className="h3">
            {title}
          </div>
          <Description />
          {website && (
            <a
              href={website}
              className="mb-1 d-inline-block stretched-link"
              rel="noopener noreferrer"
              target="_blank"
            >
              {website}
            </a>
          )}
        </div>

        <div className="d-none col-4 d-sm-flex flex-column justify-content-center align-items-center">
          <img
            alt={`${title} logo`}
            width="100"
            src={logo}
          />
        </div>
      </div>
    </StyledLi>
  );
}

