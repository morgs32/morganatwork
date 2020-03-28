import React, { useState } from 'react';
import styled from 'styled-components';
import useInViewport from '../../hooks/useInViewport';
import { animated, config, interpolate, useSpring } from 'react-spring';

const StyledDiv = styled.div`
  .B8ta__card {
    background: url('${require('./Map.png')}');
    background-size: cover;
    background-position: center;
  }
  
  
  .B8ta__mapMarker {
    will-change: transform, opacity;
    transition: opacity 900ms ease;
  }


`;

B8ta.propTypes = {};
B8ta.defaultProps = {};

const markers = [
  {
    top: '50%',
    left: '50%',
  },
  {
    top: '20%',
    left: '65%',
  },
  {
    bottom: '20%',
    left: '20%',
  }
];
export default function B8ta(props) {

  const [entered, setEntered] = useState(false);

  const { stopObserver, ref } = useInViewport({
    onEnterViewport: () => {
      setEntered(true);
      stopObserver();
    },
  });

  const { s, o, y } = useSpring({
    s: entered ? 1 : .4,
    o: entered ? 1 : 0,
    y: entered ? 0 : 40,
    config: config.wobbly
  });

  return (
    <StyledDiv className="row justify-content-between my-5 my-md-0">

      <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-center">
        <img height="50" className="my-4" src={require('./B8ta.svg')} />
        <p className="h5">
          Meaningful in-store shopping experiences are driving the revival of retail, with help from Brickwork Software,
          bought by b8ta in 2019, and now called Ark.
        </p>
        <a href="https://www.brickworksoftware.com" className="btn btn-outline-secondary my-3">
          Check it out
        </a>
      </div>


      <div className="col-md-5 my-4">
        <div className="card-container--selectedWork">
          <div className="B8ta__card card card--selectedWork">

            {markers.map((marker, index) => {
              return (
                <animated.img
                  key={index}
                  style={{
                    position: 'absolute',
                    opacity: o.interpolate({
                      range: [0, .2, 1],
                      output: [0, 1, 1]
                    }),
                    transform: interpolate([s, y], (s, y) => `scale(${s}) translateY(${y}px)`),
                    ...marker,
                  }}
                  className="B8ta__mapMarker"
                  src={require('./MapMarker.svg')}
                  width="50"
                />
              );
            })}
          </div>
          <div ref={ref} />
        </div>
      </div>


    </StyledDiv>
  );
}

