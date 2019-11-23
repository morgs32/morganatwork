import React from 'react';
import Flip from 'react-spring-flip/lib/Flip';
import styled from 'styled-components';
import { isBrowser } from '../../utils/environment';
import classnames from 'classnames';
import Label from './Label';

const StyledLi = styled.li`
  
  background: #e7e7e7;

  p {
    margin-bottom: .25rem;
  }
  
`;

Product.propTypes = {};
Product.defaultProps = {};

const Wrap = ({ children, title }) => {
  if (isBrowser) {
    return (
      <Flip flipId={title}>
        {children}
      </Flip>
    );
  }
  /**
   * You have to have same DOM structure server side and client side
   */
  return (
    <div>
      {children}
    </div>
  );
};


export default function Product(props) {

  const {
    content,
    className,
  } = props;

  const {
    title,
    website,
    github,
    productLabels,
    Description,
  } = content;

  return (
    <StyledLi className={classnames('list-group-item py-4 position-relative', className)}>
      <Wrap title={title}>
        <div className="d-flex justify-content-between">
          <div>
            <div className="h3">
              {title}
            </div>
            <Description />
            {website && (
              <a
                href={website}
                className="mb-1 d-block"
                rel="noopener noreferrer"
                target="_blank"
              >
                {website}
              </a>
            )}
            {productLabels && (
              <div className="ml-n2">
                {productLabels.map(label => <Label
                  key={label}
                  type={label}
                />)}
              </div>
            )}
          </div>

        </div>
      </Wrap>
    </StyledLi>
  );
}

