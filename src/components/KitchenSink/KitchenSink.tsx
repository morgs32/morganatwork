import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledDiv = styled.div`
  li {
    margin: 1.5rem 0;
  }
`

KitchenSink.propTypes = {};
KitchenSink.defaultProps = {};

export default function KitchenSink(props) {
  return (
    <StyledDiv>


      <h3 className="h3 m-0 font-weight-bold mb-4">
        Other work
      </h3>


      <ul className="row list-unstyled">
        <li className="col-sm-6">
          <h4>
            Upswing
          </h4>
          <p>
            Great place to work
          </p>
        </li>
        <li className="col-sm-6">
          <h4>
            Upswing
          </h4>
          <p>
            Great place to work
          </p>
        </li>
        <li className="col-sm-6">
          <h4>
            Upswing
          </h4>
          <p>
            Great place to work
          </p>
        </li>
        <li className="col-sm-6">
          <h4>
            Upswing
          </h4>
          <p>
            Great place to work
          </p>
        </li>
        <li className="col-sm-6">
          <h4>
            Upswing
          </h4>
          <p>
            Great place to work
          </p>
        </li>
        <li className="col-sm-6">
          <h4>
            Upswing
          </h4>
          <p>
            Great place to work
          </p>
        </li>
      </ul>

    </StyledDiv>
  );
}

