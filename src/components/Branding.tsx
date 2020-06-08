import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledDiv = styled.div`
    
  height: 96px;
  display: flex;
  align-items: center;
  
  a {
    display: block;
    width: 128px;
    text-transform: uppercase;
    transition: width .4s ease-in-out;
    position: relative;
    line-height: 100%;
    text-decoration: none;
    color: inherit;
  }

`;


Branding.propTypes = {};
Branding.defaultProps = {};

export default function Branding(props) {
  return (
    <StyledDiv className="branding border-bottom px-4 flex-shrink-0">
      <Link href="/">
        <a>
          <img src={require('src/images/Morgan@Work.svg')} />
        </a>
      </Link>
    </StyledDiv>
  );
}

