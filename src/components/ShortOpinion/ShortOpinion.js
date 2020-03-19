import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`

  .blockquote {
    font-size: .9rem;
  }
  
  .ShortOpinion__photo {
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  }
  
  .ShortOpinion__title {
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    background: #eee;
    
    p {
      margin: 0;
    }
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
          className="ShortOpinion__photo"
          src={attributes.photo.url}
          width="100%"
        />
      )}
      <h3 className="ShortOpinion__title h4 m-0 p-3" dangerouslySetInnerHTML={{ __html: attributes.title }} />
      <div className="card-body">
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

