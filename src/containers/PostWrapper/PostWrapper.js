import React from 'react';
import styled from 'styled-components';
import TopStripe from '../../components/TopStripe/TopStripe';
import Nav from '../../components/Nav/Nav';

const StyledDiv = styled.div`

  .PostWrapper__header {
    padding-top: 140px;
    border-bottom: 1px solid #aaa;
    padding-bottom: 100px;
  }
  .PostWrapper__heroImageContainer {
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
    overflow: hidden;
  }
  
`;

PostWrapper.propTypes = {};
PostWrapper.defaultProps = {};

export default function PostWrapper(props) {
  return (
    <StyledDiv>
      <TopStripe />

      <Nav />

      <div className="PostWrapper__header mb-4 position-relative">
        <div className="container">
          <div className="row">
            <h1 className="display-1 col-10 col-md-9">
              {props.meta.title}
            </h1>
            <p className="col-md-6 mb-4">
              {props.meta.tldr}
            </p>
          </div>
        </div>

        <div className="PostWrapper__heroImageContainer col-md-6 position-absolute">
          <img
            alt="Article hero"
            className="h-100"
            src={props.meta.hero}
          />
        </div>
      </div>

      <article className="PostWrapper__article">
        <div className="container" {...props} />
      </article>
    </StyledDiv>
  );
}

