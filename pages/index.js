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
import OpinionSlide from '../src/components/OpinionSlide/OpinionSlide';
import Link from 'next/link';

const StyledDiv = styled.div`


  .Index__main {
    background: #f7f7f7;
    margin-bottom: 100vh;
  }
  
  
  
  .Index__opinionWelcome {
    border-top: 1px solid;
    border-bottom: 1px solid;
    z-index: 1;
    top: 0;
    background: #FFCE50;
    height: 100vh;
   
    &:before {
      content: '';
      height: 1px;
      position: absolute;
      left: 0;
      right: 0;
      top: -1px;
      background: black;
    }
  }
  
  .Index__opinionWelcomeBottom {
    height: 50vh;
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
            <p className="display-3">
              I'm more interested in learning what's right than being right.
            </p>
          </div>

          <div className="py-5" />

        </div>


        <div className="Index__opinionWelcome justify-content-center d-flex flex-column justify-content-center">
          <div
            className="Index__opinionWelcomeHeader py-4 container-xl container-fluid position-sticky"
            style={{ top: 0 }}
          >
            <h2 className="display-2 font-weight-bold m-0">
              Opinions
            </h2>
            <p>
              They are ever-changing. <span className="d-inline-block">Here's my most recent...</span>
            </p>
          </div>
        </div>
        <OpinionSlide
          onlyOne
          opinion={props.shortOpinions.data[0]}
        />
        <div
          className="Index__opinionFooter py-2rem container-xl container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center">
          <h3 className="mb-3 mb-md-0">
            There's more where that came from.
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

