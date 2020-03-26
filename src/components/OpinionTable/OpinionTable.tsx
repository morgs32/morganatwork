import React, { useState } from 'react';
import styled from 'styled-components';
import OpinionRow from './OpinionRow';

const StyledDiv = styled.div`
  .list-group {
    border-top: 12px solid;
  }
`;

OpinionTable.propTypes = {};
OpinionTable.defaultProps = {};

export default function OpinionTable(props) {

  const {
    opinions,
  } = props;

  const [expanded, expandAll] = useState(false)

  return (
    <StyledDiv>

      <div className="d-flex flex-row justify-content-between align-content-center mb-4 ">
        <h3 className="h3 m-0 font-weight-bold">
          Some of my most recent ponderments
        </h3>

        <button
          onClick={() => expandAll(!expanded)}
          className="btn btn-sm btn-outline-secondary">
          {expanded ? 'Collapse' : 'Expand'} all
        </button>
      </div>

      <ul className="list-group list-group-flush">
        {opinions.map((opinion) => {
          return (
            <OpinionRow open={expanded} opinion={opinion} />
          );
        })}
      </ul>

    </StyledDiv>
  );
}

