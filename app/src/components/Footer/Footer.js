import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  
  border-top: 1px solid #aaa;
  height: 180px;

`;

Footer.propTypes = {};
Footer.defaultProps = {};

export default function Footer(props) {
  return (
    <StyledFooter className="py-5 text-center d-flex flex-column justify-content-center" />
  );
}

