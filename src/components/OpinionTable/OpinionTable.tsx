import React, { useState } from 'react';
import styled from 'styled-components';
import OpinionRow from './OpinionRow';

const StyledDiv = styled.div`

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

