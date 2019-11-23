import React from 'react';
import Github from 'react-feather/dist/icons/github';
import Link from 'react-feather/dist/icons/link';
import styled from 'styled-components';
import classnames from 'classnames';

const StyledLi = styled.li`
  
  p {
    margin: 0;
  }
  
`;

Project.propTypes = {};
Project.defaultProps = {};

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
      <div>
        <div className="d-flex justify-content-between">
          <div>
            <div className="h3">
              {title}
            </div>
            <Description />
          </div>
          <div className="mt-n1 ml-5">
            {github && (
              <a
                href={github}
                className="stretched-link"
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
    </StyledLi>
  );
}

