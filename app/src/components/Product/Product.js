import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 50vw;
  max-height: 600px;
  margin-bottom: 60px;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 20px;
  background-color: #fff;
  background-image: linear-gradient(135deg, hsla(0, 0%, 100%, 0.6), hsla(0, 0%, 100%, 0));
  background-color: hsla(219.99999999999997, 5.05%, 68.88%, 1.00);
  
  p {
    margin-bottom: .25rem;
  }
  
`;

Product.propTypes = {};
Product.defaultProps = {};

export default function Product(props) {

  const {
    product,
  } = props;

  const {
    title,
    website,
    logo,
  } = product;

  return (
    <StyledDiv className="mb-4 text-dark rounded-lg">
      <div className="row">
        <div
          className="col-12 d-flex d-sm-none flex-column justify-content-center align-items-start mb-3"
        >
          <img
            alt={`${title} logo`}
            width="100"
            src={logo}
          />
        </div>

        <div className="col-12 col-sm-8">
          <div className="h3">
            {title}
          </div>
          {website && (
            <a
              href={website}
              className="mb-1 d-inline-block stretched-link"
              rel="noopener noreferrer"
              target="_blank"
            >
              {website}
            </a>
          )}
        </div>

        <div className="d-none col-4 d-sm-flex flex-column justify-content-center align-items-center">

        </div>
      </div>
    </StyledDiv>
  );
}

