import React from 'react';
import styled from 'styled-components'

const StyledDiv = styled.div`
  div {
    text-align: left;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`

const Heist: React.FC = () => {
  return (
    <StyledDiv
      className="text-center mb-4"
      style={{
        width: 300,
        margin: 'auto',
      }}
    >
      <strong>Guy</strong>
      <div>You fixed it.</div>
      <strong>Gene Hackman</strong>
      <div>I made a new one.</div>
      <strong>Guy</strong>
      <div>You're a pretty smart fella.</div>
      <strong>Gene Hackman</strong>
      <div>Ah, not that smart.</div>
      <strong>Guy</strong>
      <div>[If] you're not that smart, how'd you figure it out?</div>
      <strong>Gene Hackman</strong>
      <div>I tried to imagine a fella smarter than myself. Then I thought, "what would he do?"
      </div>
    </StyledDiv>
  );
}

export default Heist
