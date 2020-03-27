import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background: #042825;
  min-height: 100vh;
  z-index: -1;
  
  color: white;
`

BehindHome.propTypes = {};
BehindHome.defaultProps = {};

export default function BehindHome(props) {
  return (
    <StyledDiv className="fill position-fixed d-flex flex-column justify-content-center">

      <div className="container-xl container-fluid">
        <h1 className="display-1 mb-2">
          The end
        </h1>
      </div>


    </StyledDiv>
  );
}

