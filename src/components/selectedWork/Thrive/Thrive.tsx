import React from 'react';
import styled from 'styled-components';

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
    height: 80vh;
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
  return (
    <StyledDiv className="row justify-content-between">
      <div className="col-md-5 my-4">
        <div className="card-container--selectedWork">
          <div className="Thrive__card card card--selectedWork overflow-hidden d-flex justify-content-center align-items-center">

            <div className="Thrive__productCard-container row">
              {lists.map(list => {
                return (
                  <div className="col-4 p-1">
                    {list.map((product, index) => {
                      return (
                        <img
                          src={product}
                          width="100%"
                          className="Thrive__productCard shadow rounded border-dark my-2"
                        />
                      );
                    })}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-5 d-flex flex-column justify-content-center align-items-center text-center">
        <img
          height="50"
          className="my-4"
          src={require('./ThriveLogo.svg')}
        />
        <p className="h5">
          Engineering for an E-commerce company trying to make healthy living
          affordable to everyone. With free memberships for families in need.
        </p>
        <button className="btn btn-outline-secondary my-3">
          Check it out
        </button>
      </div>

    </StyledDiv>
  );
}

