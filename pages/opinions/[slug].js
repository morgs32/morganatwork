import React from 'react';
import styled from 'styled-components';
import Nav from 'src/components/Nav/Nav';
import Head from 'next/head';
import PostWrapper from '../../src/containers/PostWrapper/PostWrapper';
import { MDXProvider } from '@mdx-js/react';
import OpinionSlide from '../../src/components/OpinionSlide/OpinionSlide';
import { shortOpinionsAPI } from '../api/short-opinions';

const StyledDiv = styled.div`
  
  min-height: 100vh;

  .Opinions__h1 {
    text-rendering: optimizeLegibility;
    text-shadow: 1px 0px 0.4px rgba(0,0,0,.1);    
  }
  
  .Opinions__container {
    margin-top: 100px;
  }
  
  .Opinions__cards {
    max-width: 480px;
    flex-shrink: 0;
  }

`;

Opinion.propTypes = {};
Opinion.defaultProps = {};


export async function getStaticPaths() {
  const shortOpinions = await shortOpinionsAPI();

  return {
    paths: shortOpinions.data.map(shortOpinion => ({
      params: {
        slug: shortOpinion.attributes.slug,
      },
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {

  const shortOpinions = await shortOpinionsAPI();
  const index = shortOpinions.data.findIndex(o => o.attributes.slug === params.slug);

  return {
    props: {
      shortOpinion: shortOpinions.data[index],
      next: index < shortOpinions.data.length - 1 && shortOpinions.data[index + 1],
    },
  };
}

const components = {
  blockquote: (props) => {
    const [quote, footer] = props.children.props.children.split('--');
    return (
      <blockquote className="blockquote">
        <p>
          {quote}
        </p>
        {footer && (
          <footer className="blockquote-footer">
            {footer}
          </footer>
        )}
      </blockquote>
    );
  },
  wrapper: (props, otherProps) => {
    if (props.meta && props.meta.type === 'post') {
      return <PostWrapper {...props} />;
    }
    return props.children;
  }
};

export default function Opinion(props) {

  const {
    shortOpinion,
    next,
  } = props;

  return (
    <MDXProvider components={components}>
      <StyledDiv className="d-flex flex-column">

        <Head>
          <title>Opinions</title>
        </Head>

        <Nav />

        <OpinionSlide className="flex-grow" next={next} opinion={shortOpinion} />

      </StyledDiv>
    </MDXProvider>
  );
}

