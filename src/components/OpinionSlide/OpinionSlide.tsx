import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import classnames from 'classnames'


import Blockquote from '../Blockquote/Blockquote';

const StyledDiv = styled.div`
 
  .OpinionSlide__main {
    border-top: 1px solid;
    padding: 4rem 0;
  }

  .OpinionSlide__footer {
    background: #FFCE50;
    color: #042825;
  }
  
  .OpinionSlide__article {
    position: relative;
  }
  
`;

OpinionSlide.propTypes = {};
OpinionSlide.defaultProps = {};

const dateOptions = {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric'
};

export default function OpinionSlide(props) {

  const {
    opinion,
    next,
    onlyOne = false,
    className,
  } = props;

  const {
    id,
    attributes: {
      notes,
      quote,
      title,
      image,
      imageDescription,
      link,
      publishedOn,
    },
  } = opinion;

  let imageAttrs = {};
  if (image) {
    if (image.width > image.height) {
      Object.assign(imageAttrs, {
        width: '90%',
      });
    } else {
      Object.assign(imageAttrs, {
        width: `${image.width * 100 / image.height - 28}%`,
      });
    }
  }

  return (
    <StyledDiv
      className={classnames('position-relative d-flex flex-column justify-content-between', className)}
      key={id}
    >
      <div className="OpinionSlide__main">
        <div className="container-xl container-fluid">
          <div className="row">
            <div className="col-md-6">
              <article className="OpinionSlide__article">

                <div className="mb-4">
                  <h3 dangerouslySetInnerHTML={{ __html: title }} />
                  <div className="text-black-50">
                    {publishedOn
                    && Intl
                    && Intl.DateTimeFormat
                    && new Intl.DateTimeFormat('default', dateOptions).format(new Date(publishedOn))}
                  </div>
                </div>

                {notes && <div dangerouslySetInnerHTML={{ __html: notes }} />}
                {quote && (
                  <Blockquote className="mt-3" html={quote} />
                )}
                {link.url && (
                  <div className="mt-3">
                    <a
                      href={link.url}
                    >
                      Read the original article
                    </a>
                  </div>
                )}
              </article>
            </div>
            {image && (
              <div className="col-md-6 text-right">
                <img
                  className="OpinionSlide__image border border-dark rounded"
                  src={image.url}
                  {...imageAttrs}
                />
                {imageDescription && (
                  <small
                    style={{
                      display: 'block',
                      marginLeft: 'auto',
                      ...imageAttrs,
                    }}
                    dangerouslySetInnerHTML={{ __html: imageDescription }}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {!onlyOne && (
        <div
          className="OpinionSlide__footer py-2rem position-relative"
        >
          <div
            className="h-100 container-xl container-fluid d-flex flex-row justify-content-between align-items-center">
            {next ? (
              <div>
                <div className="small-caps mb-2">
                  Next up
                </div>
                <Link href={`/opinions/${next.attributes.slug}`}>
                  <a className="stretched-link">
                    <h4 dangerouslySetInnerHTML={{ __html: next.attributes.title }} className="h5 mb-1" />
                  </a>
                </Link>
              </div>
            ) : (
              <>
                <div>
                  <h4 className="h5 mb-1">
                    That's all my posts for now
                  </h4>
                  <p>
                    Check back later for more.
                    <Link href="/">
                      <a className="stretched-link">
                        Or head back home
                      </a>
                    </Link>
                  </p>
                </div>

              </>
            )}
          </div>
        </div>
      )}

    </StyledDiv>
  );
}

