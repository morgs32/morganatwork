import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`

  .blockquote {
    font-size: .9rem;
  }
  
  .ShortOpinions__photo {
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
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
          alt="Linked website"
          className="ShortOpinions__photo"
          src={attributes.photo.url}
          width="100%"
        />
      )}
      <div className="card-body">
        <h3 className="h4" dangerouslySetInnerHTML={{ __html: attributes.title }} />
        {attributes.notes && <div dangerouslySetInnerHTML={{ __html: attributes.notes }} />}
        {attributes.quote && (
          <blockquote className="blockquote mb-4" dangerouslySetInnerHTML={{ __html: attributes.quote }} />
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

