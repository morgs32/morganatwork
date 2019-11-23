import React, { useMemo, useState } from 'react';
import Flipper from 'react-spring-flip/lib/Flipper';
import styled from 'styled-components';


import Product from '../src/components/Product/Product';
import Project from '../src/components/Project/Project';

/* eslint-disable-next-line */
const productModules = require('webpack-import-glob-loader!../my-products/index').default;
const products = productModules.map(({ default: Description, meta }) => ({ Description, ...meta }));

/* eslint-disable-next-line */
const projectModules = require('webpack-import-glob-loader!../my-products/index').default;
const projects = projectModules.map(({ default: Description, meta }) => ({ Description, ...meta }));

const StyledDiv = styled.div`

  max-width: 720px;

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

  const filteredProducts = useMemo(() => {
    if (selectedType !== 'none') {
      return products.filter((card) => card.projectTypes.includes(selectedType)).slice(0, 3);
    }
    return products.slice(0, 3);
  }, [selectedType]);

  const selectType = (flipType) => {
    if (selectedType === flipType) {
      return setType(null);
    }
    setType(flipType);
  };

  return (
    <Flipper flipKey={selectedType}>

      <StyledDiv className="container Index">

        <h1 className="m-0 display-1 text-center">
          Working on meaningful
          {' '}
          <u>products</u>
          {' '}
          or
          <br />
          {' '}
          <u>tools</u>
          {' '}
          that make it easy
        </h1>

        <hr />

        <div className="row">
          <div className="col-12 col-sm-10 col-md-8">
            <h2>
              Work
            </h2>
          </div>
        </div>

        {/*<div className="text-right">*/}
        {/*  <div className="form-group">*/}
        {/*    <label className="d-block">*/}
        {/*      Sort by:*/}
        {/*    </label>*/}
        {/*    <span*/}
        {/*      className={classnames('d-inline-block Index__buttonContainer', {*/}
        {/*        'Index__button--work': selectedType === 'work',*/}
        {/*        'Index__button--openSource': selectedType === 'openSource',*/}
        {/*        'Index__button--hobbyProject': selectedType === 'hobbyProject'*/}
        {/*      })}*/}
        {/*    >*/}
        {/*      <select*/}
        {/*        value={selectedType}*/}
        {/*        onChange={(event) => selectType(event.target.value)}*/}
        {/*        className="custom-select Index__button"*/}
        {/*      >*/}
        {/*        <option value="none">Choose category</option>*/}
        {/*        <option value="work">Work experience</option>*/}
        {/*        <option value="openSource">Open source</option>*/}
        {/*        <option value="hobbyProject">Hobby project</option>*/}
        {/*      </select>*/}
        {/*    </span>*/}
        {/*  </div>*/}
        {/*</div>*/}



        <div>
          {/* .list-group-flush has to be first-child */}
          <ul className="list-group list-group-flush">
            {filteredProducts.map((product) => {
              return (
                <Product
                  key={product.title}
                  content={product}
                />
              );
            })}
          </ul>
        </div>

        <hr />

        <div className="row">
          <div className="col-12 col-sm-10 col-md-8">
            <h2>
              Open source
            </h2>
          </div>
        </div>

        {/*<div className="text-right">*/}
        {/*  <div className="form-group">*/}
        {/*    <label className="d-block">*/}
        {/*      Sort by:*/}
        {/*    </label>*/}
        {/*    <span*/}
        {/*      className={classnames('d-inline-block Index__buttonContainer', {*/}
        {/*        'Index__button--work': selectedType === 'work',*/}
        {/*        'Index__button--openSource': selectedType === 'openSource',*/}
        {/*        'Index__button--hobbyProject': selectedType === 'hobbyProject'*/}
        {/*      })}*/}
        {/*    >*/}
        {/*      <select*/}
        {/*        value={selectedType}*/}
        {/*        onChange={(event) => selectType(event.target.value)}*/}
        {/*        className="custom-select Index__button"*/}
        {/*      >*/}
        {/*        <option value="none">Choose category</option>*/}
        {/*        <option value="work">Work experience</option>*/}
        {/*        <option value="openSource">Open source</option>*/}
        {/*        <option value="hobbyProject">Hobby project</option>*/}
        {/*      </select>*/}
        {/*    </span>*/}
        {/*  </div>*/}
        {/*</div>*/}


        <div>
          {/* .list-group-flush has to be first-child */}
          <ul className="list-group list-group-flush">
            {filteredProducts.map((project) => {
              return (
                <Project
                  key={project.title}
                  content={project}
                />
              );
            })}
          </ul>
        </div>

      </StyledDiv>
    </Flipper>
  );
}

