import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyledFooter = styled.footer`
  padding-top: 25vh;
`;

Footer.propTypes = {};
Footer.defaultProps = {};

export default function Footer(props) {
  return (
    <StyledFooter>
      <div className="m-4">
        <Link href="/designs">
          <a className="a-blue">
            Designed in Figma
          </a>
        </Link> · Built in Denver
      </div>
    </StyledFooter>
  );
}

