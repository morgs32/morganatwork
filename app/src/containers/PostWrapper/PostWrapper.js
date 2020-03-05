import React from 'react';
import Link from 'next/Link';
import styled from 'styled-components';

const StyledDiv = styled.div`

  .PostWrapper__nav {
    z-index: 1;
  }
  .PostWrapper__stripe {
    height: 10px;
    background: repeating-linear-gradient(
      -55deg,
      #222,
      #222 50px,
      #FFCE50 50px,
      #FFCE50 100px
    );
  }
  
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

      <div className="PostWrapper__stripe" />

      <nav className="PostWrapper__nav position-absolute m-3">
        <div className="h3 font-weight-bold">
          <Link href="/">
            <a>
              Morgan at Work
            </a>
          </Link>
        </div>
      </nav>

      <header className="PostWrapper__header mb-4 position-relative">
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
            className="PostWrapper__heroImage h-100"
            src={props.meta.hero}
          />
        </div>
      </header>

      <article className="PostWrapper__article">
        <div className="container" {...props} />
      </article>
    </StyledDiv>
  );
}

