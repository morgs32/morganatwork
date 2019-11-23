import React from 'react';
import Github from 'react-feather/dist/icons/github';
import Link from 'react-feather/dist/icons/link';
import Flip from 'react-spring-flip/lib/Flip';
import styled from 'styled-components';
import { isBrowser } from '../../utils/environment';
import classnames from 'classnames';

const StyledLi = styled.li`
  
  p {
    margin: 0;
  }
  
`;

Project.propTypes = {};
Project.defaultProps = {};

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


export default function Project(props) {

  const {
    content,
    className,
  } = props;

  const {
    title,
    website,
    github,
    Description,
  } = content;

  return (
    <StyledLi className={classnames('list-group-item py-4 position-relative', className)}>
      <Wrap title={title}>
        <div>
          <div className="d-flex justify-content-between">
            <div>
              <div className="h3">
                {title}
              </div>
              <Description />
            </div>
            <div className="mt-n1 position-relative ml-5">
              {github && (
                <a
                  href={github}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Github size={20} />
                </a>
              )}
              {website && (
                <a
                  href={website}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Link size={20} />
                </a>
              )}
            </div>

          </div>
        </div>
      </Wrap>
    </StyledLi>
  );
}

