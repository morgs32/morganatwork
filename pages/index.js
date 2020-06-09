import React from 'react';
import Head from 'next/head';
import SidebarHeader from '../src/components/SidebarHeader/SidebarHeader';
import Row from '../src/components/Row/Row';
import styled from 'styled-components';
import breakpoints from '../src/styles/breakpoints';

const StyledMain = styled.main`

  .top-line, .bottom-line {
    height: 8px;
    width: 100%;
    background: linear-gradient(90deg, rgb(2, 0, 36) 0%, rgb(9, 9, 121) 35%, rgb(0, 212, 255) 100%);
  }
  
  background: #fbfbff;
  height: 100%;
  
  @media (min-width: ${breakpoints.md}px) {
    padding-left: 356px;
    height: auto;
  }
  
`;

Index.propTypes = {};
Index.defaultProps = {};

export async function getStaticProps() {

  const metas = [
    ...require('src/utils/allPosts'),
    ...require('src/utils/allDigests')
  ];

  return {
    props: {
      metas,
    },
  };
}

export default function Index(props) {

  const {
    metas
  } = props;

  metas.sort((meta1, meta2) => {
    if (new Date(meta1.date) < new Date(meta2.date)) {
      return 1;
    }
    return -1;
  })

  return (

    <>
      <Head>
        <title>Morgan at Work</title>
      </Head>

      <SidebarHeader />
      <StyledMain>

        <div className="top-line" />

        <div className="meta-rows">
          {metas.map((meta) => {
            return (
              <Row key={meta.pathname} meta={meta} />
            );
          })}
        </div>

        <div className="bottom-line" />
      </StyledMain>
    </>
  );
}

