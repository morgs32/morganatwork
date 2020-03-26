import React, { useEffect, useState } from 'react';
import Blockquote from '../Blockquote/Blockquote';
import styled from 'styled-components';
import Accordion from '../Accordion/Accordion';

const StyledLi = styled.li`

  list-style: none;
  border-bottom: 12px solid #FFCE50;
  
  p {
    margin: 0;
  }

  .OpinionTable__row {
    padding: 1.5rem;
    padding-bottom: 4rem;
  }
  
  .OpinionTable__rowHeader {
    padding: 2rem 1.5rem;
    
    cursor: pointer;
    border: none;
  }

  .OpinionTable__rowContent {
    position: relative;
    &:before {
      position: absolute;
      content: '';
      top: 0;
      bottom: 0;
      left: -1.25rem;
      width: .2rem;
      background: #d7d7d7;
    }
  }
  
`;

OpinionRow.propTypes = {};
OpinionRow.defaultProps = {};

const dateOptions = {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric'
};

export default function OpinionRow({ opinion, open: controlledOpen }) {

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

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(controlledOpen);
  }, [controlledOpen])

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
    <StyledLi
      key={id}
    >

      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="OpinionTable__rowHeader list-group-item-action flex-row justify-content-between"
      >
        <div className="font-weight-bold" dangerouslySetInnerHTML={{ __html: title }} />
        <div className="text-black-50">
          {publishedOn
          && Intl
          && Intl.DateTimeFormat
          && new Intl.DateTimeFormat('default', dateOptions).format(new Date(publishedOn))}
        </div>
      </div>
      <Accordion open={open}>
        <div className="OpinionTable__row">
          <div className="row">
            <div className="col-md-6">
              <div className="OpinionTable__rowContent">
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
              </div>
            </div>
            {image && (
              <div className="col-md-6 text-right">
                <img
                  className="OpinionTable__image border border-dark rounded"
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
      </Accordion>
    </StyledLi>
  );
}

