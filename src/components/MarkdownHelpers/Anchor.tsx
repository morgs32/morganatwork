import React from 'react'
import LinkIcon from 'react-feather/dist/icons/link';
import styled from 'styled-components';

const StyledSpan = styled.span`
  span {
    position: absolute;
    left: 0;
    top: 0;
  }
  a {
    text-decoration: none;
    position: absolute;
    font-size: 32px;
    left: -48px;
    top: 2px;
    opacity: .3;
  }
  a:hover {
    opacity: 1;
  }
`

type Props = {
  id: string
}

const Anchor: React.FC<Props> = ({ id }) => (
  <StyledSpan>
    <a href={`#${id}`} id={`${id}`}>
      <LinkIcon />
    </a>
  </StyledSpan>
)

export default Anchor
