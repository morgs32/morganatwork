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
      <div className="container-xl container-fluid">

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center">
          <div className="mb-4 mb-md-0">
            <h1 className="h2 m-0 font-serif">
              Morgan's opinions <span className="d-inline-block">on things</span>
            </h1>
          </div>

          <div>
            <Link href="/opinions">
              <a className="btn btn-primary-outline mr-4">
                View all
              </a>
            </Link>

            <Link href="/">
              <a className="btn btn-primary">
                Home
              </a>
            </Link>
          </div>
        </div>

      </div>
    </StyledNav>);
}

