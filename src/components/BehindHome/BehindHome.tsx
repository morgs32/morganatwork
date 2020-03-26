import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledDiv = styled.div`
  background: black;
  min-height: 100vh;
  z-index: -1;
  
  color: white;
`

BehindHome.propTypes = {};
BehindHome.defaultProps = {};

export default function BehindHome(props) {
  return (
    <StyledDiv className="fill position-fixed">

      Hello world

    </StyledDiv>
  );
}

