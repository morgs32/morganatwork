import React from 'react';
import Head from 'next/head';
import Row from '../src/components/Row/Row';
import styled from 'styled-components';
import Link from 'next/link';

const StyledDiv = styled.main`
  
  .Home__gradientLine {
    height: 8px;
    width: 100%;
    background: linear-gradient(90deg, rgb(2, 0, 36) 0%, rgb(9, 9, 121) 35%, rgb(0, 212, 255) 100%);
  }
  
  .Home__background {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // background-image: url(${require('../src/images/Background.svg')});
    // background-position: top right;
    // background-size: cover;
    // opacity: .4;
  }
  
`;

export async function getStaticProps() {

  const metas = [
    ...require('src/utils/allPosts').default,
    ...require('src/utils/allDigests')
  ];
  
  return {
    props: {
      metas,
    },
  };
}

export default function Home(props) {

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

    <StyledDiv>
      <Head>
        <title>Morgan at Work</title>
      </Head>

      <div className="Home__gradientLine" />
      <div className="Home__background" />

      <nav className="container-fluid">
        <div style={{ maxWidth: 300 }} className="my-4">
          <Link href="/">
            <a className="d-block mb-3">
              <img alt="Morgan at Work branding" src={require('src/images/Morgan@Work.svg')} />
            </a>
          </Link>

          <p>
            An <span style={{ textDecoration: 'line-through' }}>opinionated</span> thoughtful software engineer,
            thinking
            out loud.
          </p>
          <div style={{ width: 100 }} className="d-flex flex-row justify-content-between">
            <a href="https://twitter.com/morgs32" target="_blank" rel="noopener noreferrer">
              <img src={require('src/icons/Twitter.svg')} alt="Twitter" />
            </a>
            <a href="https://www.github.com/morgs32" target="_blank" rel="noopener noreferrer">
              <img src={require('src/icons/GitHub.svg')} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/morganintrator" target="_blank" rel="noopener noreferrer">
              <img src={require('src/icons/LinkedIn.svg')} alt="LinkedIn" />
            </a>
          </div>

          {/*<div>*/}
          {/*  <a href="https://www.stackshirts.com">*/}
          {/*    www.stackshirts.com*/}
          {/*  </a>*/}
          {/*</div>*/}
        </div>
      </nav>

      <main style={{ maxWidth: 700 }} className="container mb-2rem">
        <div className="Home__rows position-relative">
          {metas.map((meta) => {
            return (
              <Row key={meta.pathname} meta={meta} />
            );
          })}
        </div>
      </main>

      <div className="Home__gradientLine" />
    </StyledDiv>
  );
}

