import React from 'react';
import Link from 'next/link';
import Styled from 'styled-components';

const StyledNav = Styled.nav`
  z-index: 1;
  
  a {
    text-decoration: underline;
  }
`;

Nav.propTypes = {};
Nav.defaultProps = {};

export default function Nav() {
  return (
    <StyledNav className="position-absolute m-4">
      <div className="h3 font-weight-bold">
        <Link href="/">
          <a>
            Morgan at Work
          </a>
        </Link>
      </div>
    </StyledNav>);
}

