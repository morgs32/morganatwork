import React from 'react';

import styled from 'styled-components';
import Link from 'next/link';
import breakpoints from '../../styles/breakpoints';

const StyledDiv = styled.div`
  align-items: stretch;
  margin-bottom: -1px;
  min-height: 96px;
  position: relative;
  
  :hover {
    background: rgba(255,206,80,0.6);
  }


  &:last-child {
    border-bottom: none !important;
  }
  
  .published-on {
    width: 16%;
    min-width: 80px;
  }
  
  .published-on__month-day {
    font-size: 1rem;
    font-weight: bold;
    line-height: 100%;
  }
 
   .published-on__year {
    font-size: .8rem;
  }
  .media-body ul{
    padding-left: 1rem;
  }      

    @media (min-width: ${breakpoints.md}px) {
      .published-on__month-day {
        font-size: 1.14rem;
      }
      .published-on__year {
        font-size: 1rem;
      }
      .media-body ul{
        padding-left: 2rem;
      }      
    }

  
`;

Row.propTypes = {};
Row.defaultProps = {};

export default function Row(props) {

  const {
    meta,
  } = props;

  const date = new Date(meta.date);
  const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: 'numeric' });
  const [{ value: month }, , { value: day }, , { value: year }] = dateTimeFormat.formatToParts(date);

  return (
    <StyledDiv className="d-flex flex-row border-top border-bottom">
      <Link href={meta.path}>
        <a className="stretched-link" />
      </Link>

      <div className="published-on p-2 flex-shrink-0 border-right">
        <div className="published-on__month-day">
          {month} {day}
        </div>
        <div className="published-on__year">
          {year}
        </div>
      </div>

      <div className="media-body flex-grow p-3">
        <div className="font-weight-bold mb-2">
          {meta.title}
        </div>
        <div className="row">
          <div className="font-mono col-12 col-md-10">
            {meta.headings && (
              <ul>
                {meta.headings.map((heading) => {
                  return (
                    <li>
                      {heading}
                    </li>
                  );
                })}
              </ul>
            )}
            {meta.spoiler && (
              <div>
                {meta.spoiler}
              </div>
            )}
          </div>
        </div>
      </div>

    </StyledDiv>
  );
}

