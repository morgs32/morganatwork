import React, { useState } from 'react';
import Flipper from 'react-spring-flip/lib/Flipper';
import styled from 'styled-components';


import Product from '../src/components/Product/Product';
import Project from '../src/components/Project/Project';
import Essay from '../src/components/Essay/Essay';

/* eslint-disable-next-line */
const productModules = require('webpack-import-glob-loader!../my-products/index').default;
const products = productModules.map(({ default: Description, meta }) => ({ Description, ...meta }));

/* eslint-disable-next-line */
const projectModules = require('webpack-import-glob-loader!../my-projects/index').default;
const projects = projectModules.map(({ default: Description, meta }) => ({ Description, ...meta }));

/* eslint-disable-next-line */
const essays = require('webpack-import-glob-loader!../my-essays/index').default;

const StyledDiv = styled.div`

  max-width: 720px;
  margin: auto;

  .Index__button {
    width: auto;
    background-color: transparent;
    font-weight: bold;
  }

  .Index__buttonContainer {
    border-radius: 0.25rem;
  }
  .Index__button--openSource {
    background: linear-gradient(-135deg, #FCE38A 0%, #F38181 100%);
  }
  .Index__button--work {
    background: linear-gradient(-135deg, #17EAD9 0%, #6078EA 100%);
  }
  .Index__button--hobbyProject {
    background: linear-gradient(-135deg, #43E695 0%, #3BB2B8 100%);
  }
  
  .Index__visibleCard {
    opacity: 1;
  }
  
  .Index__hiddenCard {
    position: relative;
    left: -10vw;
    z-index: 0;
    opacity: .5;
  }
  
`;


Index.propTypes = {};
Index.defaultProps = {};

export default function Index(props) {

  const [selectedType, setType] = useState('none');

  const displayProducts = products.slice(0, 3)
  const displayProjects = projects.slice(0, 3)

  return (
    <Flipper flipKey={selectedType}>

      <StyledDiv className="Index">

        <h1 className="m-0 display-1 text-center">
          At work on meaningful
          {' '}
          <u>products</u>
          {' '}
          or
          <br />
          {' '}
          <u>tools</u>
          {' '}
          that make the work easy.
          <br />
          <br />
          Also penning <u>
          essays
        </u> and passing <u>
          thoughts
        </u>
        </h1>

        <hr />

        <section>
          <div className="row">
            <div className="col-12 col-sm-10 col-md-8">
              <h2>
                Work
              </h2>
            </div>
          </div>
          <div>
            {/* .list-group-flush has to be first-child */}
            <ul className="list-group list-group-flush">
              {displayProducts.map((product) => {
                return (
                  <Product
                    key={product.title}
                    content={product}
                  />
                );
              })}
            </ul>
          </div>
        </section>

        <hr />

        <section>
          <div className="row">
            <div className="col-12 col-sm-10 col-md-8">
              <h2>
                Open source
              </h2>
            </div>
          </div>

          <div>
            {/* .list-group-flush has to be first-child */}
            <ul className="list-group list-group-flush">
              {displayProjects.map((project) => {
                return (
                  <Project
                    key={project.title}
                    content={project}
                  />
                );
              })}
            </ul>
          </div>
        </section>

        <hr />

        <section>
          <div className="row">
            <div className="col-12 col-sm-10 col-md-8">
              <h2>
                Essays
              </h2>
            </div>
          </div>

          <div>
            {/* .list-group-flush has to be first-child */}
            <ul className="list-group list-group-flush">
              {essays.map((essay) => {
                return (
                  <Essay
                    key={essay.title}
                    content={essay}
                  />
                );
              })}
            </ul>
          </div>
        </section>

      </StyledDiv>
    </Flipper>
  );
}

