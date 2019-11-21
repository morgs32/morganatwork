import React from 'react';
import Github from 'react-feather/dist/icons/github';
import Link from 'react-feather/dist/icons/link';
import Flip from 'react-spring-flip/lib/Flip';
import styled from 'styled-components';
import { isBrowser } from '../../utils/environment';

const StyledDiv = styled.div`
  .Card {
    height: 100%;
  
  
    .card-body {
      position: relative;
      z-index: 1;
    }
  }
  
  .Card__links {
  
    a {
      margin-right: 8px;
    }
  
    &:after {
      content: '';
    }
  
  }
  
  .Card__shadow {
    position: absolute;
    top: 10px;
    height: 100%;
    left: 10px;
    width: 100%;
    z-index: 0;
  }
  
  .Card__bg {
    position: absolute;
    top: 0;
    height: 100%;
    left: 0;
    width: 100%;
    z-index: 0;
  }

`

ProjectCard.propTypes = {}
ProjectCard.defaultProps = {}

export const colors = {
  openSource: 'linear-gradient(-135deg, #FCE38A 0%, #F38181 100%)',
  work: 'linear-gradient(-135deg, #17EAD9 0%, #6078EA 100%)',
  hobbyProject: 'linear-gradient(-135deg, #43E695 0%, #3BB2B8 100%)',
}

function OpenSource() {
  return (
    <span
      style={{
        background: colors.openSource,
      }}
      className="badge ml-2"
    >
      open source
    </span>

  )
}

function Work() {
  return (
    <span
      style={{
        background: colors.work
      }}
      className="badge ml-2"
    >
      work experience
    </span>

  )
}

function HobbyProject() {
  return (
    <span
      style={{
        background: colors.hobbyProject
      }}
      className="badge ml-2"
    >
      hobby project
    </span>

  )
}


const Wrap = ({ children, title }) => {
  if (isBrowser) {
    return (
      <Flip
        flipId={title}
        className="Card card shadow-sm"
      >
        {children}
      </Flip>
    )
  }
  return (
    <div
      className="Card card shadow-sm"
    >
      {children}
    </div>
  )
}


export default function ProjectCard(props) {

  const {
    card,
  } = props

  const {
    title,
    website,
    github,
    projectTypes,
    Description,
  } = card;

  const hobbyProject= projectTypes.includes('hobbyProject');
  const work= projectTypes.includes('work');
  const openSource= projectTypes.includes('openSource');

  return (
    <StyledDiv className="position-relative h-100">
      <Wrap title={title}>
        <div
          className="card-body d-flex flex-column justify-content-between"
        >

          <h5 className="card-title">
            <span>{title}</span>
          </h5>
          <div className="card-text flex-grow">
            <Description />
          </div>

          <div className="Card__links">

            <span>
              {github && (
                <a
                  href={github}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Github />
                </a>
              )}
              {website && (
                <a
                  href={website}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Link />
                </a>
              )}
            </span>
            {openSource && <OpenSource />}
            {work && <Work />}
            {hobbyProject && <HobbyProject />}

          </div>

        </div>
      </Wrap>
    </StyledDiv>
  )
}

