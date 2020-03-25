import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import useInViewport from '../../../hooks/useInViewport';

const StyledDiv = styled.div`
  .B8ta__card {
    background: url('${require('./Map.png')}');
    background-size: cover;
    background-position: center;
  }
`;

B8ta.propTypes = {};
B8ta.defaultProps = {};

export default function B8ta(props) {

  const observerTargetRef = useRef();
  const [entered, setEntered] = useState(false);

  const stopObserver = useInViewport({
    onEnterViewport: () => {
      setEntered(true);
      stopObserver()
    },
    observerTarget: observerTargetRef,
  });

  return (
    <StyledDiv entered={entered} className="row justify-content-between">
      <div className="col-md-6 col-lg-5 d-flex flex-column justify-content-center align-items-center text-center">

        <p className="h5">
          Engineering for an E-commerce company trying to make healthy living
          affordable to everyone. With free memberships for families in need.
        </p>
        <button className="btn btn-outline-secondary my-3">
          Check it out
        </button>
      </div>


      <div className="col-md-5 my-4">
        <div className="card-container--selectedWork">
          <div className="B8ta__card card card--selectedWork">


          </div>

          <div ref={observerTargetRef} />
        </div>
      </div>


    </StyledDiv>
  );
}

