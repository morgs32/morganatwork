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
  
  
  
  
`;


Index.propTypes = {};
Index.defaultProps = {};

export async function getStaticProps() {

  const publishedOpinions = {
    data: [{

    }]
  }

  return {
    props: {
      publishedOpinions,
    },
  };
}

export default function Index(props) {

  const {
    publishedOpinions
  } = props;

  return (

    <StyledDiv>

      <Head>
        <title>Morgan at Work</title>
      </Head>

      <div className="Index__main">


      </div>
    </StyledDiv>
  );
}

