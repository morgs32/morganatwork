import React from 'react';
import styled from 'styled-components';
import axios from 'app/src/utils/axios';
import TopStripe from '../src/components/TopStripe/TopStripe';
import Nav from '../src/components/Nav/Nav';
import ShortOpinion from '../src/components/ShortOpinion/ShortOpinion';
import Head from 'next/link';

const StyledDiv = styled.div`
  
  .Opinions__h1 {
    text-rendering: optimizeLegibility;
    text-shadow: 1px 1px 0.4px rgba(0,0,0,.2);
    line-height: 1;
  }
  
  .Opinions__container {
    margin-top: 100px;
  }
  
  .Opinions__cards {
    max-width: 480px;
    flex-shrink: 0;
  }

`;

Opinions.propTypes = {};
Opinions.defaultProps = {};

export async function getServerSideProps() {

  const shortOpinions = await axios.get('/api/short-opinions')
    .then(res => res.data);

  return {
    props: {
      shortOpinions,
    },
  };
}

export default function Opinions(props) {

  const {
    shortOpinions,
  } = props;

  return (
    <StyledDiv className="mb-4">
      <Head>
        <title>Opinions</title>
      </Head>

      <TopStripe />
      <Nav />

      <div className="Opinions__container container-fluid container-lg">
        <div className="row d-flex flex-row flex-wrap">
          <div className="col-md-6">
            <h1 className="Opinions__h1 display-1 text-dark">
              My opinions on things
            </h1>
            <p>
              So I don't have to repeat myself
            </p>
          </div>

          {shortOpinions.data.map((shortOpinion) => {
            return (
              <div
                key={shortOpinion.id}
                className="col-md-6"
              >
                <ShortOpinion
                  shortOpinion={shortOpinion}
                />
              </div>
            );
          })}
        </div>
      </div>


    </StyledDiv>
  );
}

