import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  .blockquote {
    font-size: inherit;
    background: $gray-200;
    padding: 1rem;
    padding-left: 5rem;
    z-index: 1;
    align-self: center;
    border: solid 1px;
    position: relative;
  }

  .blockquote:before {
    position: absolute;
    content: "”";
    font-size: 6rem;
    line-height: 0;
    top: 0;
    left: 30px;
  }

`;

Blockquote.propTypes = {};
Blockquote.defaultProps = {};

export default function Blockquote(props) {
  return (
    <StyledDiv>


    </StyledDiv>
  );
}

