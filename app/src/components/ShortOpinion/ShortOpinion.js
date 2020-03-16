import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`

  .blockquote {
    margin-bottom: 40px;
    font-size: .9rem;
  }
  
`;

ShortOpinion.propTypes = {};
ShortOpinion.defaultProps = {};

export default function ShortOpinion({ shortOpinion }) {

  const {
    attributes,
  } = shortOpinion;

  return (
    <StyledDiv className="card shadow-sm position-relative mb-4 rounded-lg overflow-hidden">

      {attributes.photo && (
        <img
          src={attributes.photo.url}
          width="100%"
        />
      )}
      <div className="card-body">
        <h3 dangerouslySetInnerHTML={{ __html: attributes.title }} />
        <p dangerouslySetInnerHTML={{ __html: attributes.notes }} />
        {attributes.quote && (
          <blockquote className="blockquote" dangerouslySetInnerHTML={{ __html: attributes.quote }} />
        )}
        <a
          href={attributes.link.url}
          className="btn btn-outline-secondary"
        >
          Website
        </a>
      </div>

    </StyledDiv>
  );
}

