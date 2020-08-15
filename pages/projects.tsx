import React, { useCallback, useState } from 'react';
import styled from 'styled-components'

const StyledDiv = styled.div`

  .Projects__ul {
    border-top: 2px solid black;
    border-bottom: 2px solid black;
  }
  .Projects__li {   
    border-bottom: 2px solid black;
  }
  
  .Projects__projectImageContainer {
    opacity: 0;
  }
  .Projects__listContainer:hover .Projects__projectImageContainer {
      opacity: 1;
    }
  }
  
  .Projects__projectImageContainer {
    z-index: 100;
    pointer-events: none;
    .x, .y {
      width: 300px;
    }
  }
  
  .x {
    animation: x 13s linear infinite alternate;
  }
  
  .y {
    animation: y 7s linear infinite alternate;
  }
  
  @keyframes x {
    100% {
      transform: translateX( calc(100vw - 300px) );
    }
  }
  
  @keyframes y {
    100% {
      transform: translateY( calc(100vh - 300px) );
    }
  }
`

type ProjectType = {
  label: string,
  projectImage: {
    url: string;
    width: number;
    height: number;
  },
  tags: string[],
}

export const data: { [id: string]: ProjectType } = {
  stackshirts: {
    label: 'stackshirts',
    projectImage: {
      url: require('src/images/projects/stackshirts.png'),
      width: 1273,
      height: 1003,
    },
    tags: [
      'hobby project',
      'react',
    ]
  },
  'react-capture-metrics': {
    label: 'react-capture-metrics',
    projectImage: {
      url: require('src/images/projects/stackshirts.png'),
      width: 1273,
      height: 1003,
    },
    tags: [
      'open source',
      'react',
    ]
  },
  'react-spring-universal-carousel': {
    label: 'react-spring-universal-carousel',
    projectImage: {
      url: require('src/images/projects/stackshirts.png'),
      width: 1273,
      height: 1003,
    },
    tags: [
      'open source',
      'react',
    ]
  },
  'react-spring-flip': {
    label: 'react-spring-flip',
    projectImage: {
      url: require('src/images/projects/stackshirts.png'),
      width: 1273,
      height: 1003,
    },
    tags: [
      'open source',
      'react',
    ]
  },
  'greatest-hits': {
    label: 'Morgan\'s Greatest Hits 2016',
    projectImage: {
      url: require('src/images/projects/stackshirts.png'),
      width: 1273,
      height: 1003,
    },
    tags: [
      'open source',
      'polymer',
      'web components',
    ]
  }
}


const Projects: React.FC = (props) => {

  const projects = Object.values(data);
  const [projectImage, setImage] = useState<ProjectType['projectImage'] | null>(null)
  
  return (
    <StyledDiv className="container">

      <h1>
        Projects
      </h1>

      <div className="container my-4rem">
        <div className="Projects__listContainer">
          <div className="Projects__projectImageContainer position-fixed fill">
            <div className=" x">
              {projectImage && <img src={projectImage.url} className="y" />}
            </div>
          </div>
          <ul className="Projects__ul list-group list-group-flush">
            {projects.map((project, i) => {
              return (
                <li
                  onMouseEnter={() => setImage(project.projectImage)}
                  className="Projects__li list-group-item list-group-item-action"
                  key={project.label}
                >
                  <div className="d-flex flex-row justify-content-between py-2">
                    <div className="text-uppercase font-weight-bold">
                      {project.label}
                    </div>
                    <div>
                      {project.tags.map((v, i) => (
                        <React.Fragment key={i}>
                          <span>{v}</span>
                          {i !== project.tags.length - 1 && ', '}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </StyledDiv>
  );
}

export default Projects
