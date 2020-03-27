import React from 'react';
import styled from 'styled-components';

import Blockquote from '../Blockquote/Blockquote';

const StyledDiv = styled.div`

  min-height: 100vh;
  //background: rgba(255, 220, 98, .3);

  
  p {
    margin: 0;
  }

  .OpinionSlide__main {
    border-top: 1px solid;
    padding: 4rem 0;
  }

  .OpinionSlide__footer {
    background: #FFCE50;
    height: 7rem;
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
    onlyOne = false,
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
      className="position-relative d-flex flex-column"
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
          className="OpinionSlide__footer"
        >
          <div className="h-100 container-xl container-fluid d-flex flex-row justify-content-between align-items-center">
            <div>
              <div className="small-caps mb-2">
                Next up
              </div>
              <h4 className="h5 mb-1">
                What happens when this meets that
              </h4>
              <p>
                What happens when this meets that.
                What happens when this meets that.
              </p>
            </div>
            <button className="btn btn-primary btn-lg">
              Click here to read more
            </button>
          </div>
        </div>
      )}

    </StyledDiv>
  );
}

