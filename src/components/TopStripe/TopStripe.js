import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 10px;
  background: repeating-linear-gradient(
    -55deg,
    #222,
    #222 50px,
    #FFCE50 50px,
    #FFCE50 100px
  );
`

TopStripe.propTypes = {};
TopStripe.defaultProps = {};

export default function TopStripe() {
  return (
    <StyledDiv />
  );
}

