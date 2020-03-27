import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import useInViewport from '../../hooks/useInViewport';
import { useSpring, animated } from 'react-spring';

const StyledDiv = styled.div`
  .card--selectedWork {
    background: papayawhip;
  }
  .Stackshirts__heroImg {
    transform-origin: bottom;
  }
`;

Stackshirts.propTypes = {};
Stackshirts.defaultProps = {};

export default function Stackshirts(props) {


  const [entered, setEntered] = useState(false);

  const { stopObserver, ref } = useInViewport({
    onEnterViewport: () => {
      setEntered(true);
      stopObserver();
    },
  });

  const animations = useSpring({
    transform: entered ? 'scale(1.3)' : 'scale(1)'
  });

  return (
    <StyledDiv className="row justify-content-between my-5 my-md-0">
      <div className="col-md-5 my-4 order-1 order-md-0">
        <div className="card-container--selectedWork">
          <div
            className="card card--selectedWork overflow-hidden d-flex justify-content-end align-items-center">
            <animated.img
              className="Stackshirts__heroImg"
              style={animations}
              width="120%" src={require('./Stackshirts.png')} />
          </div>
          <div ref={ref} />
        </div>
      </div>
      <div className="col-md-6 order-0 order-md-1 d-flex flex-column justify-content-center align-items-center text-center">
        <p className="h5">
          Love your tech stack? Design the layout of
          your favorite stack and have it printed on a shirt.
        </p>
        <a href="https://www.stackshirts.com" className="btn btn-outline-secondary my-3">
          Check it out
        </a>
      </div>

    </StyledDiv>);
}

