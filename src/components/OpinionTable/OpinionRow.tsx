import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyledLi = styled.li`

  list-style: none;
  border-bottom: 2px solid;
  
  p {
    margin: 0;
  }

  .OpinionTable__rowHeader {
    padding: 2rem 1.5rem;
    cursor: pointer;
    border: none;
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
  }, [controlledOpen]);

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
        className="OpinionTable__rowHeader list-group-item-action flex-row justify-content-between"
      >
        <div className="font-weight-bold" dangerouslySetInnerHTML={{ __html: title }} />
        <div className="text-black-50">
          {publishedOn
          && Intl
          && Intl.DateTimeFormat
          && new Intl.DateTimeFormat('default', dateOptions).format(new Date(publishedOn))}
        </div>

        <Link href="/">
          <a className="stretched-link" />
        </Link>
      </div>
      {/*{image && (*/}
      {/*  <div className="col-md-6 text-right">*/}
      {/*    <img*/}
      {/*      className="OpinionTable__image border border-dark rounded"*/}
      {/*      src={image.url}*/}
      {/*      {...imageAttrs}*/}
      {/*    />*/}
      {/*    {imageDescription && (*/}
      {/*      <small*/}
      {/*        style={{*/}
      {/*          display: 'block',*/}
      {/*          marginLeft: 'auto',*/}
      {/*          ...imageAttrs,*/}
      {/*        }}*/}
      {/*        dangerouslySetInnerHTML={{ __html: imageDescription }}*/}
      {/*      />*/}
      {/*    )}*/}
      {/*  </div>*/}
      {/*)}*/}
    </StyledLi>
  );
}

