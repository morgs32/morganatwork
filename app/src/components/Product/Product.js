import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`

  color: black;
  
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
    shortDescription,
  } = product;

  return (
    <StyledDiv className="mb-4 rounded-lg">
      <div className="p-lg-5 col-6">
        <img
          alt={`${title} logo`}
          width="100"
          className="mb-4"
          src={logo}
        />

        <div className="Product__title h2 font-weight-bold">
          {title}
        </div>
        <small className="d-block mb-4 text-uppercase">
          {year} · {role}
        </small>
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

