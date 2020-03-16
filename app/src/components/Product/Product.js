import React from 'react';
import styled from 'styled-components';
import { mediaBreakpointUp } from '../../styles/media';

const StyledDiv = styled.div`

  color: black;
  
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
  margin-bottom: 60px;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 20px;
  background-color: #fff;
  background-image: linear-gradient(135deg, hsla(0, 0%, 100%, 0.6), hsla(0, 0%, 100%, 0));
  background-color: hsl(0, 0%, 97%);
  
  ${mediaBreakpointUp.lg`
    height: 600px;
  `}
  
  p {
    margin-bottom: .25rem;
  }
  
  .Product__title {
    letter-spacing: .5px;
  }
  .Product__description {
    color: #18171d;
    font-size: 20px;
    line-height: 1.3em;
    font-weight: 400;
    letter-spacing: -0.5px;
  }
  
  .Product__heroImageContainer {
    position: absolute;
    width: 60%;
    right: 0;
    top: 0;
    bottom: 0;
    text-align: right;
  }
  
  .Product__heroImage {
    height: 100%;
  }
  
  .Product__logo {
    border-radius: 10px;
    border: 1px solid;
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
    year,
    role,
    website,
    logo,
    heroImage,
    shortDescription,
  } = product;

  return (
    <StyledDiv className="position-relative mb-4 rounded-lg">

      <div className="Product__heroImageContainer d-none d-md-block">
        <img
          src={heroImage}
          className="Product__heroImage"
        />
      </div>
      <div className="p-3 p-lg-5 col-md-6">
        <div className="d-flex flex-row flex-md-column align-items-center align-items-md-start">
          <img
            alt={`${title} logo`}
            width="100"
            className="Product__logo mb-4 mr-3 shadow-sm"
            src={logo}
          />

          <div>
            <div className="Product__title h2 font-weight-bold">
              {title}
            </div>
            <small className="d-block mb-4 text-uppercase">
              {role}
            </small>
          </div>
        </div>

        <div className="Product__description mb-4">
          {shortDescription}
        </div>
        {website && (
          <a
            href={website}
            className="btn btn-outline-secondary"
          >
            Website
          </a>
        )}
      </div>

    </StyledDiv>
  );
}

