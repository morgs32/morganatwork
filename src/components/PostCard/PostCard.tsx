import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import breakpoints from '../../styles/breakpoints';
import { PostType } from '../../../pages';

const StyledDiv = styled.div`

  position: relative;
  // ^^ for the stretched-link

  &:hover {
    background: rgba(200, 200, 200, 0.1);
  }

  .ul {
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
  post: PostType;
}

const PostCard: React.FC<Props> = (props) => {

  const {
    post,
  } = props;

  let date = new Date(post.publishedAt);
  date = new Date(date.getTime() + new Date().getTimezoneOffset() * 60 * 1000);
  const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: 'numeric' });
  const [{ value: month }, , { value: day }, , { value: year }] = dateTimeFormat.formatToParts(date);

  return (
    <StyledDiv>
      <Link href={post.pathname}>
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a className="stretched-link" />
      </Link>

      <div className="px-0">
        <small className="font-mono text-muted d-block mb-2">
          {month} {day}, {year}
        </small>
        <div className="fw-bold mb-2">
          {post.title}
        </div>
        <div className="font-mono w-md-75">
          <p className="mb-0">
            {post.summary}
          </p>
        </div>
      </div>

    </StyledDiv>
  );
}

export default PostCard;
