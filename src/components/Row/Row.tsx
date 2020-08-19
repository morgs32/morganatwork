import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import breakpoints from '../../styles/breakpoints';
import { DigestType, PostType } from '../../../pages';

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
  row: PostType | DigestType;
}

const Row: React.FC<Props> = (props) => {

  const {
    row,
  } = props;

  let date = new Date(row.date);
  date = new Date(date.getTime() + new Date().getTimezoneOffset() * 60 * 1000);
  const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: 'numeric' });
  const [{ value: month }, , { value: day }, , { value: year }] = dateTimeFormat.formatToParts(date);

  return (
    <StyledDiv>
      <Link href={row.pathname}>
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a className="stretched-link" />
      </Link>

      <div className="px-0">
        <small className="font-mono text-muted d-block mb-2">
          {month} {day}, {year}
        </small>
        <div className="font-weight-bold mb-2">
          {row.title}
        </div>
        <div className="font-mono w-md-75">
          {row.type === 'digest' && (
            <ul className="mb-0">
              {row.headings.map((heading) => {
                return (
                  <li key={heading}>
                    {heading}
                  </li>
                );
              })}
            </ul>
          )}
          {row.type === 'post' && (
            <p className="mb-0">
              {row.summary}
            </p>
          )}
        </div>
      </div>

    </StyledDiv>
  );
}

export default Row;
