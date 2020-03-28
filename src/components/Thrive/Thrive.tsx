import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import useInViewport from '../../hooks/useInViewport';
import { animated, useSpring } from 'react-spring';

const lists = [
  [
    require('./AlmondButter.png'),
    require('./AlmondFlour.png'),
    require('./AvocadoOilMayo.png'),
    require('./ClifBars.png'),
  ],
  [
    require('./HandSoap.png'),
    require('./JustinsAlmondButter.png'),
    require('./KettlePotatoChips.png'),
    require('./Oatmeal.png'),
  ],
  [
    require('./PeanutGems.png'),
    require('./PlantainChips.png'),
    require('./RawCashews.png'),
    require('./TunaPouch.png'),
  ]
];

const StyledDiv = styled.div`

  .Thrive__card {
    background: #1ED090;
  }
  
  .Thrive__productCard-container {
    max-width: 400px;
    transform: rotate(20deg)
  }
  
  .Thrive__productCard {
 
  }
 
`;

Thrive.propTypes = {};
Thrive.defaultProps = {};

export default function Thrive(props) {


  const [entered, setEntered] = useState(false);

  const { stopObserver, ref } = useInViewport({
    onEnterViewport: () => {
      setEntered(true);
      stopObserver();
    },
  });

  const animations = useSpring({
    a: entered ? 0 : -40,
    b: 0,
    c: entered ? 0 : 70,
  });

  return (
    <StyledDiv
      className="row justify-content-between my-5 my-md-0">
      <div className="col-md-5 my-4 order-1 order-md-0">
        <div className="card-container--selectedWork">
          <div className="Thrive__card card card--selectedWork overflow-hidden d-flex justify-content-center align-items-center">
            <div className="Thrive__productCard-container row">
              {lists.map((list, i) => {
                const column = ['a', 'b', 'c'][i];
                return (
                  <animated.div
                    key={column}
                    style={{
                      transform: animations[column].interpolate(y => `translateY(${y}px)`)
                    }}
                    className="col-4 p-2"
                  >
                    {list.map((product) => {
                      return (
                        <img
                          key={product}
                          src={product}
                          width="100%"
                          className="Thrive__productCard shadow rounded border-dark my-2"
                        />
                      );
                    })}
                  </animated.div>
                );
              })}
            </div>

          </div>
        </div>
        <div ref={ref} />
      </div>
      <div className="col-md-6 order-0 order-md-1 d-flex flex-column justify-content-center align-items-center text-center">
        <img
          height="50"
          className="my-4"
          src={require('./ThriveLogo.svg')}
        />
        <p className="h5">
          The world needs Thrive Market now, more than ever. Thrive is making healthy living affordable to everyone.
        </p>
        <a href="https://www.thrivemarket.com" className="btn btn-outline-secondary my-3">
          Check it out
        </a>
      </div>

    </StyledDiv>
  );
}

