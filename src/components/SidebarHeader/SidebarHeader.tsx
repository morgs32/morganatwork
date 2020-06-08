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

export default function SidebarHeader(props) {
  return (
    <StyledSidebarHeader className="border-right">
      <div className="inner h-100 d-flex flex-column">
        <Branding />

        <div className="d-none d-md-block flex-grow p-4 overflow-auto">
          <p>
            Hi I'm Morgan, a software engineer striving to build "consciously". That means (to me) working with
            teams, partners, and users to build useful products fast and effectively.
          </p>
        </div>

        <div className="bottom border-top flex-shrink-0">
          <div className="social-links d-flex flex-row">
            <a
              className="col-4"
              href="https://twitter.com/github" target="_blank" rel="noopener noreferrer">
              <img src={require('./Twitter.svg')} alt="Twitter" />
            </a>
            <a
              className="border-left col-4"
              href="https://www.instagram.com/github/" target="_blank" rel="noopener noreferrer">
              <img src={require('./GitHub.svg')} alt="GitHub" />
            </a>
            <a
              className="border-left col-4"
              href="https://www.youtube.com/GitHub" target="_blank" rel="noopener noreferrer">
              <img src={require('./LinkedIn.svg')} alt="LinkedIn" />
            </a>
          </div>
        </div>


      </div>
    </StyledSidebarHeader>
  );
}

