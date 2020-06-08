import React from 'react';
import styled from 'styled-components';
import Branding from '../Branding';
import breakpoints from '../../styles/breakpoints';

const StyledSidebarHeader = styled.header`

  z-index: 10;
  width: 100%;
  left: 0;
  top: 0;
  background: #FEFEFE;
  transition: background .4s ease-in-out,opacity .4s ease-in-out,width 0.2s ease;
  border-bottom: 1px solid #aaa;

  @media (min-width: ${breakpoints.md}px) {
    position: fixed;
    border-bottom: none;
    border-right: 1px solid;
    width: 356px;
    height: 100%;
  }


  .social-links a {
    height: 46px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

SidebarHeader.propTypes = {};
SidebarHeader.defaultProps = {};

export default function SidebarHeader() {
  return (
    <StyledSidebarHeader className="border-right">
      <div className="inner h-100 d-flex flex-column">
        <Branding />

        <div className="d-none d-md-block font-mono flex-grow p-4 overflow-auto">
          <p>
            <strong>Hi I'm Morgan</strong>, a software engineer. When I'm working or learning, I try and do so thoughtfully.
            That sometimes results in the written pontifications you'll find here.
          </p>
          <p>
            The underlying theme of these musings is "conscious" engineering and what tools, processes, or mental models
            help teams to kick ass and be happy.
          </p>
        </div>

        <div className="bottom border-top flex-shrink-0">
          <div className="social-links d-flex flex-row">
            <a
              className="col-4"
              href="https://twitter.com/morgs32" target="_blank" rel="noopener noreferrer">
              <img src={require('./Twitter.svg')} alt="Twitter" />
            </a>
            <a
              className="border-left col-4"
              href="https://www.github.com/morgs32" target="_blank" rel="noopener noreferrer">
              <img src={require('./GitHub.svg')} alt="GitHub" />
            </a>
            <a
              className="border-left col-4"
              href="https://www.linkedin.com/in/morganintrator" target="_blank" rel="noopener noreferrer">
              <img src={require('./LinkedIn.svg')} alt="LinkedIn" />
            </a>
          </div>
        </div>


      </div>
    </StyledSidebarHeader>
  );
}

