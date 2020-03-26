import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledDiv = styled.div`
  
`

KitchenSink.propTypes = {};
KitchenSink.defaultProps = {};

export default function KitchenSink(props) {
  return (
    <StyledDiv>


      <h3 className="h3 m-0 font-weight-bold">
        Some of my most recent ponderments
      </h3>

      <button className="btn btn-sm btn-outline-secondary">
        Expand all
      </button>

    </StyledDiv>
  );
}

