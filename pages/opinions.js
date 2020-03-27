import React from 'react';
import styled from 'styled-components';
import axios from 'src/utils/axios';
import Nav from 'src/components/Nav/Nav';
import Head from 'next/head';
import PostWrapper from '../src/containers/PostWrapper/PostWrapper';
import { MDXProvider } from '@mdx-js/react';
import OpinionTable from '../src/components/OpinionTable/OpinionTable';

const StyledDiv = styled.div`
  
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

export async function getServerSideProps() {

  const shortOpinions = await axios.get('/api/short-opinions')
    .then(res => res.data);

  return {
    props: {
      shortOpinions,
    },
  };
}

const components = {
  blockquote: (props, layoutProps) => {
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

export default function Opinions(props) {

  const {
    shortOpinions,
  } = props;

  return (
    <MDXProvider components={components}>
      <StyledDiv>

        <Head>
          <title>Opinions</title>
        </Head>

        <Nav />


        <div className="container-xl container-fluid my-6rem">
          <OpinionTable opinions={shortOpinions.data} />
        </div>

      </StyledDiv>
    </MDXProvider>
  );
}

