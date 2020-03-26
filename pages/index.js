import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import MorganAtWork from '../src/components/MorganAtWork/MorganAtWork';
import Thrive from '../src/components/Thrive/Thrive';
import B8ta from '../src/components/B8ta/B8ta';
import Stackshirts from '../src/components/Stackshirts/Stackshirts';
import OpinionTable from '../src/components/OpinionTable/OpinionTable';
import BehindHome from '../src/components/BehindHome/BehindHome';
import { shortOpinionsAPI } from 'pages/api/short-opinions';

const StyledDiv = styled.div`


  .Index__main {
    background: #f7f7f7;
  }
  
  .Index__bottomPadding {
    pointer-events: none;
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

          <OpinionTable opinions={props.shortOpinions.data.slice(0, 3)} />

          <div className="py-5" />

        </div>
      </div>

      <div className="Index__bottomPadding vh-100" />
      <BehindHome />
    </StyledDiv>
  );
}

