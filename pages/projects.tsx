import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring';

const StyledDiv = styled.div`

  .Projects__ul {
    border-top: 2px solid black;
    border-bottom: 2px solid black;
  }
  .Projects__li {   
    border-bottom: 2px solid black;
    
  }
  
  .Projects__animatedDiv {
    display: none;
    position: fixed;
    z-index: 100;
    pointer-events: none;
  }
  .Projects__listContainer:hover .Projects__animatedDiv {
    display: block;
  }
  
  .Projects__projectImage {
    position: absolute;
    bottom: 0;
    left: 0;
    border: 2px solid black;
    width: 300px;
  }

`

type ProjectType = {
  label: string;
  projectImage: {
    url: string;
    width: number;
    height: number;
  },
  tags: string[];
  href: string;
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
    ],
    href: 'https://www.stackshirts.com',
  },
  'react-capture-metrics': {
    label: 'react-capture-metrics',
    projectImage: {
      url: require('src/images/projects/github-npm.png'),
      width: 1273,
      height: 1003,
    },
    tags: [
      'open source',
      'react',
    ],
    href: 'https://github.com/stackshirts/react-capture-metrics'
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
    ],
    href: 'https://github.com/stackshirts/react-spring-universal-carousel'
  },
  'react-spring-flip': {
    label: 'react-spring-flip',
    projectImage: {
      url: require('src/images/projects/github-npm.png'),
      width: 1273,
      height: 1003,
    },
    tags: [
      'open source',
      'react',
    ],
    href: 'https://github.com/stackshirts/react-spring-flip'
  },
  'greatest-hits': {
    label: 'Morgan\'s Greatest Hits 2016',
    projectImage: {
      url: require('src/images/projects/greatest-hits.png'),
      width: 1273,
      height: 1003,
    },
    tags: [
      'open source',
      'polymer',
      'web components',
    ],
    href: 'https://bestof.morganatwork.com'
  }
}


const Projects: React.FC = (props) => {

  const projects = Object.values(data);
  const [projectImage, setImage] = useState<ProjectType['projectImage'] | null>(null)
  const [animationProps, setAnimationProps, stopAnimation] = useSpring(() => ({
    top: 0,
    left: 0,
  }))

  useLayoutEffect(() => {
    setAnimationProps({
      top: window.innerHeight / 2,
      left: window.innerWidth / 2,
      immediate: true,
    })
  }, [])

  return (
    <StyledDiv className="container">

      <h1>
        Projects
      </h1>

      <div className="container my-4rem">
        <div className="Projects__listContainer">
          {projectImage && (
            <animated.div className="Projects__animatedDiv" style={animationProps}>
              <img className="Projects__projectImage" src={projectImage.url} />
            </animated.div>
          )}
          <ul className="Projects__ul list-group list-group-flush">
            {projects.map((project, i) => {
              return (
                <li
                  onMouseEnter={(e) => {
                    console.log('e.pageX', e.pageX);
                    setAnimationProps({
                      top: e.clientY + 20,
                      left: e.clientX,
                      immediate: false,
                    })
                    setImage(project.projectImage)
                  }}
                  className="Projects__li list-group-item list-group-item-action"
                  key={project.label}
                >
                  <a href={project.href} className="stretched-link" />
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
