import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import MorganAtWork from '../src/components/MorganAtWork/MorganAtWork';
import Thrive from '../src/components/Thrive/Thrive';
import B8ta from '../src/components/B8ta/B8ta';
import Stackshirts from '../src/components/Stackshirts/Stackshirts';
import BehindHome from '../src/components/BehindHome/BehindHome';
import { shortOpinionsAPI } from 'pages/api/short-opinions';
import KitchenSink from '../src/components/KitchenSink/KitchenSink';
import Link from 'next/link';
import OpinionTable from '../src/components/OpinionTable/OpinionTable';

const StyledDiv = styled.div`


  .Index__main {
    background: #f7f7f7;
    margin-bottom: 100vh;
  }
  
  
  
  .Index__opinions {
  
    padding-top: 2rem;
    padding-bottom: 4rem;
    background: #FFCE50;
  
    h2 {
      margin: 2rem 0;
    }
    
    ul {
      margin: 4rem 0;
    }
   
    li {
      &:hover {
        background: #ffe4a4;
      }
    }
  }
  
  .Index__opinionFooter {
    background: #042825;
    color: white;
    border-bottom: 1px solid;
  }
  
  
`;


Index.propTypes = {};
Index.defaultProps = {};

export async function getStaticProps() {

  const shortOpinions = await shortOpinionsAPI();

  return {
    props: {
      shortOpinions,
    },
  };
}

export default function Index(props) {

  const {
    shortOpinions
  } = props;

  return (

    <StyledDiv>

      <Head>
        <title>Morgan at Work</title>
      </Head>

      <div className="Index__main">

        <MorganAtWork />

        <div className="container-fluid container-xl">

          <Thrive />

          <div className="py-5" />

          <B8ta />

          <div className="py-5" />

          <Stackshirts />

          <div className="py-5" />

          <div className="min-vh-100 d-flex flex-column justify-content-center">
            <p className="display-3 font-weight-bold">
              More interested in learning what's right than being right.
            </p>
          </div>

          <div className="py-5" />

        </div>


        <div className="Index__opinions">
          <div className="container-fluid container-xl">
            <h2 className="h1 font-weight-bold">
              Some of my
              loosely held opinions
            </h2>
          </div>

          <div className="container-fluid container-xl">
            <div className="mx-n4 m-xl-0">
              <OpinionTable opinions={shortOpinions.data} />
            </div>
          </div>
        </div>

        <div className="Index__opinionFooter ">
          <div
            className="py-2rem container-xl container-fluid d-flex flex-column text-center text-md-left flex-md-row justify-content-between align-items-center">
            <h3 className="mb-3 mb-md-0">
              There's more where that <span className="d-inline-block">came from</span>.
            </h3>
            <Link href="/opinions">
              <a className="btn btn-primary">
                <span className="d-none d-md-block">
                  Click here to read more
                </span>
                <span className="d-block d-md-none">
                  Read more
                </span>
              </a>
            </Link>
          </div>
        </div>

        <div className="py-5" />

        <div className="container-fluid container-xl">

          <KitchenSink />

          <div className="py-5" />
        </div>

      </div>

      <BehindHome />
    </StyledDiv>
  );
}

