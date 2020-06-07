import React from 'react';
import styled from 'styled-components';

const StyledSidebarHeader = styled.header`

  position: fixed;
  z-index: 10;
  width: 100%;
  left: 0;
  top: 0;
  background: #FEFEFE;
  transition: background .4s ease-in-out,opacity .4s ease-in-out,width 0.2s ease;

  @media (min-width: 800px) {
    border-bottom: none;
    border-right: 1px solid #2F363D;
    width: 356px;
    height: 100%;
  }
  
  .inner {
  
    
  }
  
  .branding {
    height: 96px;
    display: flex;
    align-items: center;
  }
  
  .branding a {
    display: block;
    width: 128px;
    text-transform: uppercase;
    transition: width .4s ease-in-out;
    position: relative;
    line-height: 100%;
  }

  @media (min-width: 800px) {
    .branding a {
        width: 164px;
        text-decoration: none;
        color: inherit;
    }
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
    <StyledSidebarHeader>
      <div className="inner h-100 d-flex flex-column">
        <div className="branding border-bottom px-4 flex-shrink-0">
          <a className="font-weight-bold" href="/">
            Morgan
            <br />
            at
            <br />
            Work
          </a>
        </div>

        <div className="flex-grow p-4 overflow-auto">
          <p>
            Hi I'm Morgan, a software engineer striving to build "consciously". That means (to me) working with
            teams, partners, and users to build useful products fast and effectively.
          </p>
          <p>
            My projects:
            <ul>
              <li>
                Stackshirts
              </li>
            </ul>
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

        <div className="burger nav-trigger">
          <div className="burger-inner">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </StyledSidebarHeader>
  );
}

