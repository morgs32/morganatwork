import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring';
import data, { ProjectType } from './data'

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

const Projects: React.FC = (props) => {

  const projects = Object.values(data);
  const [projectImage, setImage] = useState<ProjectType['projectImage'] | null>(null)
  const [animationProps, setAnimationProps] = useSpring(() => ({
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
