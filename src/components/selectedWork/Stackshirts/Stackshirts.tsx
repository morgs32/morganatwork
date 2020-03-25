import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`

`;

Stackshirts.propTypes = {};
Stackshirts.defaultProps = {};

export default function Stackshirts(props) {
  return (
    <StyledDiv className="row justify-content-between">
      <div className="col-md-5 my-4">
        <div className="card-container--selectedWork">
          <div
            className="card card--selectedWork overflow-hidden d-flex justify-content-center align-items-center">

          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-5 d-flex flex-column justify-content-center align-items-center text-center">
        <p className="h5">
          Engineering for an E-commerce company trying to make healthy living
          affordable to everyone. With free memberships for families in need.
        </p>
        <button className="btn btn-outline-secondary my-3">
          Check it out
        </button>
      </div>

    </StyledDiv>);
}

