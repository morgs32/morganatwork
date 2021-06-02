import React from 'react';
import styled from 'styled-components'
import Link from 'next/link'

const StyledDiv = styled.div`

`

const Index: React.FC = () => {
  return (
    <StyledDiv className="container">
      <div className="my-5">
        <h1>
          Perennials
        </h1>
        <div className="lead">
          Documents that I continue to update
        </div>
      </div>

      <ul className="list-group">
        <Link href="/perennials/abstractions-are-dangerous">
          <a className="list-group-item list-group-item-action">
            <strong>
              Abstractions are dangerous.
            </strong>
            <div>
              They might seem cool and they might do some heavy lifting, but are they worth the added complexity?
            </div>
          </a>
        </Link>
        <Link href="/perennials/my-joel-test">
          <a className="list-group-item list-group-item-action">
            <strong>
              Amendments to the Joel test
            </strong>
            <div>
              The best engineering teams, processes, and codebases will pass these tests
            </div>
          </a>
        </Link>
      </ul>
    </StyledDiv>
  );
}

export default Index
