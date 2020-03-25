import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';


import * as products from 'cms/products';
import Footer from 'src/components/Footer/Footer';
import MorganAtWork from '../components/MorganAtWork/MorganAtWork';
import Thrive from '../components/selectedWork/Thrive/Thrive';
import B8ta from '../components/selectedWork/B8ta/B8ta';
import Stackshirts from '../components/selectedWork/Stackshirts/Stackshirts';
// import * as posts from 'cms/posts';

const StyledDiv = styled.div`


  .Index__main {
    margin-top: 6rem;
    margin-bottom: 6rem;
  }
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

      <div className="Index__main container-fluid container-xl">

        <Thrive />

        <div className="py-5" />

        <B8ta />

        <div className="py-5" />

        <Stackshirts />

      </div>

      <Footer />
    </StyledDiv>
  );
}

