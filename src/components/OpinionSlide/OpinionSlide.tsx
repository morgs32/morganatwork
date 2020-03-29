import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import classnames from 'classnames';
import { mediaBreakpointUp } from 'src/styles/media';

import Blockquote from '../Blockquote/Blockquote';
import Image from '../Image/Image';

const StyledDiv = styled.div`
 
  .OpinionSlide__main {
    padding: 4rem 0;
  }

  .OpinionSlide__footer {
    background: #FFCE50;
    color: #042825;
  }
  
  .OpinionSlide__article {
    position: relative;
  }
  
  .landscape {
    width: 100%;
  }
  
  .portrait {
    width: 100%;
    
    ${mediaBreakpointUp.sm`
      width: 60%;
    `}
    
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

  let imageClassname;
  if (image) {
    if (image.width > image.height) {
      imageClassname = 'landscape';
    } else {
      imageClassname = 'portrait';
    }
  }

  return (
    <StyledDiv
      className={classnames('position-relative d-flex flex-column justify-content-between', className)}
      key={id}
    >
      <div className="OpinionSlide__main">
        <div className="container-xl container-fluid">

          <div className="mb-4">
            <h3 dangerouslySetInnerHTML={{ __html: title }} />
            <div className="text-black-50">
              {publishedOn
              && Intl
              && Intl.DateTimeFormat
              && new Intl.DateTimeFormat('default', dateOptions).format(new Date(publishedOn))}
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <article className="OpinionSlide__article">
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
              <div
                className="col-md-6">
                <div className="OpinionSlide__image text-left mt-4rem mt-md-0 text-md-right d-flex flex-column flex-sm-row flex-md-column align-items-md-end position-relative">
                  <Image
                    className={classnames('border border-dark rounded', imageClassname)}
                    naturalDimensions={[image.width, image.height]}
                    src={image.url}
                  />
                  {imageDescription && (
                    <small
                      className={classnames('d-block py-2 py-sm-0 px-sm-2 px-md-0 py-md-2', imageClassname)}
                      dangerouslySetInnerHTML={{ __html: imageDescription }}
                    />
                  )}
                </div>
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
                  <a className="stretched-link btn btn-secondary">
                    {next.attributes.title}
                  </a>
                </Link>
              </div>
            ) : (
              <>
                <div>
                  <h4 className="h5 mb-3">
                    That's the first one I published.
                    Check back later for more.
                  </h4>
                  <Link href="/">
                    <a className="stretched-link btn btn-secondary">
                      Or head back home
                    </a>
                  </Link>
                </div>

              </>
            )}
          </div>
        </div>
      )}

    </StyledDiv>
  );
}

