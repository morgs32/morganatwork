// noinspection JSUnusedGlobalSymbols
import React from 'react';

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
    const children = li.props.children || li
    if (!children?.length) {
      return (
        <pre className="language-js">
          <code className="language-js">{`
Item not formatted correctly. Correct format:
  - 6/3/21\\
    And now there's thing to do about it\\
    So this is the new normal
          `}</code>
        </pre>
      )
    }
    const [date, , ...h4] = children
    const dateObj = new Date(date)
    return (
      <article className="changelog-item">
        <time className="font-mono" dateTime={date}>
          {dateObj.toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          })}
        </time>
        <h4>
          {h4}
        </h4>
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
      <a href={href} {...props} className="stretched-link">
        <span className="visually-hidden">
          {children}
        </span>
      </a>
    )
  }
};


export const mdxDefaults = {
  wrapper: ({ updatedAt, createdAt, children, }) => {
    const [heading, ...remainingChildren] = children
    return (
      <>
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
        </div>
      </>
    )
  },
  blockquote: props => (
    <blockquote className="blockquote" {...props} />
  ),
  iframe: (props) => {
    return (
      <div
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
          maxWidth: 400,
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
