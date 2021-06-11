/* eslint-disable jsx-a11y/heading-has-content */
// noinspection JSUnusedGlobalSymbols
import React from 'react';
import Utterances from 'src/components/Utterances/Utterances'
import styled from 'styled-components';

export const mdxHome = {
  h1: (props) => {
    return (
      <div className="row">
        <h1 className="display-1" {...props}>
          {props.children}
        </h1>
      </div>
    );
  },
  ul: ({ children }) => {
    return (
      <div className="p-0 p-md-4">
        {children}
      </div>
    )
  },
  li: ({ children: li }) => {

    const RequiredFormat = (
      <pre className="language-js">
        <code className="language-js">{`
Item not formatted correctly. Correct format:
- 6/3/21\\
  And now there's thing to do about it\\
  So this is the new normal
        `}
        </code>
      </pre>
    )
    const children = li.props.children || li
    if (!children?.length) {
      return RequiredFormat
    }
    const [dateAnchor, ...h4] = children
    if (dateAnchor.props?.mdxType !== 'a') {
      return RequiredFormat
    }
    return (
      <article className="changelog-item">
        {dateAnchor}
        <h2 className="changelog-item__heading">
          {h4}
        </h2>
      </article>
    )
  },
  a: ({ href, children }) => {
    const props: any = {}
    if (href.startsWith('http')) {
      props.rel = 'noopener noreferrer'
      props._target = '_blank'
    }
    return (
      <a href={href} {...props} className="stretched-link font-mono">
        {children}
      </a>
    )
  }
};

const StyledArticle = styled.article`
  
  .blockquote {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
  
  li {
    .blockquote {
      margin-left: 0;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }

`

export const mdxDefaults = {
  wrapper: ({ updatedAt, createdAt, children, }) => {
    const [heading, ...remainingChildren] = children
    return (
      <StyledArticle>
        <div className="App__title container-fluid">
          <div className="m-0 m-md-4rem p-0 col-sm-10 col-md-9 col-lg-6 pb-4rem">
            {heading && React.cloneElement(heading, {
              className: 'display-1'
            })}
            <p className="font-mono">
              {updatedAt && 'Updated on: '}
              {new Date(updatedAt || createdAt).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>
        <div className="container">
          {remainingChildren}

          <Utterances />
        </div>
      </StyledArticle>
    )
  },
  h2: props => (
    <h2 {...props} className="border-bottom py-2 mt-4rem" />
  ),
  h3: props => (
    <h3 {...props} className="mt-2rem" />
  ),
  blockquote: props => (
    <blockquote className="blockquote" {...props} />
  ),
  table: (props) => {
    return (
      <table className="table table-bordered" {...props} />
    )
  },
  iframe: (props) => {
    return (
      <div
        className="mb-2rem"
        style={{
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '56.25%'
        }}
      >
        <iframe
          title={props.title} {...props} style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: '1px solid rgba(0, 0, 0, 0.1)'
        }}
        />
      </div>
    )
  },
  img: (props) => {
    return (
      <a
        className="d-block"
        href={props.src}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          margin: 'auto',
          marginBottom: '2rem'
        }}
      >
        <img
          width="100%"
          className="border rounded"
          {...props}
          alt={props.alt}
        />
      </a>
    );
  }
};
