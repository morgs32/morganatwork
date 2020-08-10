import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import breakpoints from '../../styles/breakpoints';

const StyledDiv = styled.div`
  
  position: relative;
  // ^^ for the stretched-link
  
  &:hover {
    background: rgba(200, 200, 200, 0.1);
  }
  
  .ul{
    padding-left: 1rem;
  }
  
  border: 2px solid black;
  border-radius: 4px;
  margin: 2rem 0;
  padding: 1rem;
  
  @media (min-width: ${breakpoints.sm}px) {
    padding: 2rem;
  }
  
`;

interface Props {
  meta: any;
}

const Row: React.FC<Props> = (props) => {

  const {
    meta,
  } = props;

  let date = new Date(meta.date);
  date = new Date(date.getTime() + new Date().getTimezoneOffset() * 60 * 1000);
  const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: 'numeric' });
  const [{ value: month }, , { value: day }, , { value: year }] = dateTimeFormat.formatToParts(date);

  return (
    <StyledDiv>
      <Link href={meta.pathname}>
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a className="stretched-link" />
      </Link>

      <div className="px-0">
        <small className="font-mono text-muted d-block mb-2">
          {month} {day}, {year}
        </small>
        <div className="font-weight-bold mb-2">
          {meta.title}
        </div>
        <div className="font-mono w-md-75">
          {meta.headings && (
            <ul className="mb-0">
              {meta.headings.map((heading) => {
                return (
                  <li key={heading}>
                    {heading}
                  </li>
                );
              })}
            </ul>
          )}
          {meta.spoiler && (
            <p className="mb-0">
              {meta.spoiler}
            </p>
          )}
        </div>
      </div>

    </StyledDiv>
  );
}

export default Row;
