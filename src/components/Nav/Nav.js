import React from 'react';
import Link from 'next/link';
import Styled from 'styled-components';

const StyledNav = Styled.nav`
  z-index: 1;
  
  background: #042825;
  color: white;
  padding: 3rem 0;
  
`;

Nav.propTypes = {};
Nav.defaultProps = {};

export default function Nav() {
  return (
    <StyledNav>
      <div className="container-xl container-fluid d-flex flex-row justify-content-between align-items-center">

        <div>
          <h1 className="h2 m-0 font-serif">
            Morgan's opinions <span className="d-inline-block">on things</span>
          </h1>
        </div>

        <Link href="/">
          <a className="btn btn-primary">
            Home
          </a>
        </Link>

      </div>
    </StyledNav>);
}

