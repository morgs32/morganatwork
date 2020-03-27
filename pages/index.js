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

const StyledDiv = styled.div`


  .Index__main {
    background: #f7f7f7;
    margin-bottom: 100vh;
  }
  
  
  
  .Index__opinionWelcome {
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
  
  .Index__opinionWelcomeHeader {
    height: 7rem;
  }
  
  .Index__opinionWelcomeBottom {
    height: 50vh;
  }
  
  .Index__opinionFooter {
    background: #042825;
    height: 7rem;
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

          <p className="display-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium ornare erat in sed quam dignissim. Sed
            vestibulum in mauris egestas lorem pulvinar a sit. Mattis in viverra in id.
          </p>

          <div className="py-5" />

        </div>


        <div className="Index__opinionWelcome d-flex flex-row align-items-center">
          <div className="Index__opinionWelcomeHeader d-flex flex-row align-items-center container-xl container-fluid position-sticky" style={{ top: 0 }}>
            <h2 className="h1 m-0">
              And now, a recent opinion on engineering
            </h2>
          </div>
          <div className="Index__opinionWelcomeBottom" />
        </div>
        <OpinionSlide
          onlyOne
          opinion={props.shortOpinions.data[0]}
        />
        <div className="Index__opinionFooter">
          <div className="h-100 container-xl container-fluid d-flex flex-row justify-content-between align-items-center">
            <h3>
              There's more where that came from.
            </h3>
            <button className="btn btn-primary btn-lg">
              Click here to read more
            </button>
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

