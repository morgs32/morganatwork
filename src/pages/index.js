import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';


import * as products from 'cms/products';
import Product from 'src/components/Product/Product';
import Footer from 'src/components/Footer/Footer';
import MorganAtWork from '../components/MorganAtWork/MorganAtWork';
// import * as posts from 'cms/posts';

const StyledDiv = styled.div`


`;


Index.propTypes = {};
Index.defaultProps = {};

export default function Index(props) {

  // const postList = Object.values(posts);

  const selectedWork = [
    products.ThriveMarket,
    products.b8ta,
    products.Stackshirts,
    // projects.ReduxLibrary,
  ];

  return (

    <StyledDiv>

      <Head>
        <title>Morgan at Work</title>
      </Head>


      <MorganAtWork />

      <div className="Home__main container-fluid container-lg">


        <h2 className="h5 font-mono mb-3">
          Selected work (more on <a
          className="a-blue"
          href="https://linkedin.com/in/morganintrator"
        >
          linkedin
        </a>)
        </h2>
        <ul className="list-group-flush list-group">
          {selectedWork.map((product) => {
            return (
              <li
                key={product.website}
                className="list-group-item p-0 mb-4">
                <Product product={product} />
              </li>
            );
          })}
        </ul>

      </div>

      <Footer />
    </StyledDiv>
  );
}

